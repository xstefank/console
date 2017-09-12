/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.jboss.hal.client.runtime.host.configurationchanges;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import javax.inject.Inject;

import org.jboss.hal.ballroom.EmptyState;
import org.jboss.hal.ballroom.Toolbar;
import org.jboss.hal.ballroom.dataprovider.DataProvider;
import org.jboss.hal.core.mbui.listview.ModelNodeListView;
import org.jboss.hal.core.mvp.HalViewImpl;
import org.jboss.hal.dmr.ModelNode;
import org.jboss.hal.meta.Metadata;
import org.jboss.hal.meta.MetadataRegistry;
import org.jboss.hal.resources.Constants;
import org.jboss.hal.resources.Icons;
import org.jboss.hal.resources.Ids;
import org.jboss.hal.resources.Messages;
import org.jboss.hal.resources.Resources;

import static java.util.Comparator.comparing;
import static org.jboss.hal.client.runtime.host.configurationchanges.ConfigurationChangesPresenter.CONFIGURATION_CHANGES_TEMPLATE;
import static org.jboss.hal.dmr.ModelDescriptionConstants.*;

public class ConfigurationChangesView extends HalViewImpl implements ConfigurationChangesPresenter.MyView {

    private static final String empty = "empty";
    private static final String notEnabled = "not_enabled";
    private final DataProvider<ConfigurationChange> dataProvider;
    private ConfigurationChangesPresenter presenter;
    private ModelNodeListView<ConfigurationChange> listView;

    @Inject
    public ConfigurationChangesView(MetadataRegistry metadataRegistry, Resources resources) {
        dataProvider = new DataProvider<>(ConfigurationChange::getName, false);

        Metadata metadata = metadataRegistry.lookup(CONFIGURATION_CHANGES_TEMPLATE)
                .forOperation(LIST_CHANGES_OPERATION);

        Messages messages = resources.messages();
        EmptyState notEnabledState = new EmptyState.Builder(resources.constants().configurationChangesNotEnabled())
                .icon(Icons.INFO)
                .primaryAction(resources.constants().enableConfigurationChanges(), () -> presenter.launchAdd())
                .build();

        EmptyState emptyState = new EmptyState.Builder(resources.constants().noItems())
                .description(resources.messages().noItems())
                .icon(Icons.INFO)
                .primaryAction(resources.constants().reload(), () -> presenter.reload())
                .secondaryAction(resources.constants().disableConfigurationChanges(), () -> presenter.disable())
                .build();

        String actionIdDisable = Ids.build(Ids.CONFIGURATION_CHANGES, REMOVE);
        Constants constants = resources.constants();
        Toolbar.Action disableAction = new Toolbar.Action(actionIdDisable, constants.disable(),
                () -> presenter.disable());
        listView = new ModelNodeListView.Builder<>(
                Ids.build(CONFIGURATION_CHANGES, "list"), metadata,
                dataProvider, item -> new ConfigurationChangeDisplay(item, presenter, resources))
                .toolbarAttribute(new Toolbar.Attribute<>(OUTCOME, constants.outcome(),
                        (node, filter) -> node.getOutcome().toLowerCase().equals(filter.toLowerCase()),
                        comparing(ConfigurationChange::getOutcome)))
                .toolbarAttribute(new Toolbar.Attribute<>(ACCESS_MECHANISM, constants.accessMechanism(),
                        (node, filter) -> node.getAccessMechanism().toLowerCase().equals(filter.toLowerCase()),
                        comparing(ConfigurationChange::getAccessMechanism)))
                .toolbarAttribute(new Toolbar.Attribute<>(OPERATION_DATE, constants.operationDate(),
                        (node, filter) -> node.getOperationDate().contains(filter),
                        comparing(ConfigurationChange::getOperationDate)))
                .toolbarAttribute(new Toolbar.Attribute<>(REMOTE_ADDRESS, constants.remoteAddress(),
                        (node, filter) -> node.getRemoteAddress().toLowerCase().contains(filter.toLowerCase()),
                        comparing(ConfigurationChange::getRemoteAddress)))
                .toolbarAction(disableAction)
                .toolbarAction(new Toolbar.Action(Ids.build(Ids.CONFIGURATION_CHANGES, Ids.REFRESH_SUFFIX),
                        constants.reload(), () -> presenter.reload()))
                .noItems(constants.noItems(), messages.noItems())
                .emptyState(empty, emptyState)
                .emptyState(notEnabled, notEnabledState)
                .build();
        registerAttachable(listView);
        initElements(listView);
    }

    @Override
    public void setPresenter(ConfigurationChangesPresenter presenter) {
        this.presenter = presenter;
    }

    @Override
    public void update(ModelNode model) {
        if (model.isDefined()) {
            List<ConfigurationChange> changes = new ArrayList<>();
            model.asList().forEach(n -> {
                changes.add(new ConfigurationChange(n));
            });
            dataProvider.update(changes);
            if (changes.isEmpty()) {
                listView.showEmptyState(empty);
            }
        } else {
            dataProvider.update(Collections.emptyList());
            listView.showEmptyState(notEnabled);
        }

    }
}
