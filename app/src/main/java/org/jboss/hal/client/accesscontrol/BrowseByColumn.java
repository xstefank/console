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
package org.jboss.hal.client.accesscontrol;

import java.util.Arrays;
import javax.inject.Inject;

import com.google.gwt.resources.client.ExternalTextResource;
import elemental.client.Browser;
import elemental.dom.Element;
import org.jboss.hal.config.Environment;
import org.jboss.hal.core.finder.Finder;
import org.jboss.hal.core.finder.PreviewContent;
import org.jboss.hal.core.finder.StaticItem;
import org.jboss.hal.core.finder.StaticItemColumn;
import org.jboss.hal.resources.Ids;
import org.jboss.hal.resources.Previews;
import org.jboss.hal.resources.Resources;
import org.jboss.hal.spi.AsyncColumn;

/**
 * @author Harald Pehl
 */
@AsyncColumn(Ids.ACCESS_CONTROL_BROWSE_BY)
public class BrowseByColumn extends StaticItemColumn {

    private static class TopLevelPreview extends PreviewContent<StaticItem> {

        TopLevelPreview(final String header, final ExternalTextResource resource,
                final AccessControl accessControl, final Environment environment, final Resources resources) {
            super(header);
            previewBuilder().add(AccessControlPreview.simpleProviderWarning(accessControl, environment, resources));
            Element content = Browser.getDocument().createDivElement();
            Previews.innerHtml(content, resource);
            previewBuilder().add(content);
        }
    }


    @Inject
    public BrowseByColumn(final Finder finder, final AccessControl accessControl, final Environment environment,
            final Resources resources) {
        super(finder, Ids.ACCESS_CONTROL_BROWSE_BY, resources.constants().browseBy(),
                Arrays.asList(
                        new StaticItem.Builder(resources.constants().users())
                                .onPreview(new TopLevelPreview(resources.constants().users(),
                                        resources.previews().rbacUsers(), accessControl, environment, resources))
                                .nextColumn(Ids.USER)
                                .build(),
                        new StaticItem.Builder(resources.constants().groups())
                                .onPreview(new TopLevelPreview(resources.constants().groups(),
                                        resources.previews().rbacGroups(), accessControl, environment, resources))
                                .nextColumn(Ids.GROUP)
                                .build(),
                        new StaticItem.Builder(resources.constants().roles())
                                .onPreview(new TopLevelPreview(resources.constants().roles(),
                                        environment.isStandalone() ? resources.previews()
                                                .rbacRolesStandalone() : resources.previews().rbacRolesDomain(),
                                        accessControl, environment, resources))
                                .nextColumn(Ids.ROLE)
                                .build()
                ));
    }
}
