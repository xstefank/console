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
package org.jboss.hal.meta.processing;

import org.jboss.hal.dmr.model.ResourceAddress;
import org.jboss.hal.meta.AddressTemplate;
import org.jboss.hal.meta.description.ResourceDescription;
import org.jboss.hal.meta.security.SecurityContext;

import static org.jboss.hal.dmr.ModelDescriptionConstants.HOST;
import static org.jboss.hal.dmr.ModelDescriptionConstants.PROFILE;
import static org.jboss.hal.dmr.ModelDescriptionConstants.SERVER_GROUP;
import static org.jboss.hal.dmr.ModelDescriptionConstants.SUBSYSTEM;
import static org.jboss.hal.meta.StatementContext.Tuple.SELECTED_GROUP;
import static org.jboss.hal.meta.StatementContext.Tuple.SELECTED_HOST;
import static org.jboss.hal.meta.StatementContext.Tuple.SELECTED_PROFILE;

/**
 * @author Harald Pehl
 */
class RrdResult {

    final AddressTemplate template;
    final ResourceAddress address;
    ResourceDescription resourceDescription;
    SecurityContext securityContext;

    RrdResult(final ResourceAddress address) {
        this.address = address;

        // turn the address back into a template, which will become part of the metadata
        if (address.size() == 1) {
            if (HOST.equals(address.lastName())) {
                this.template = AddressTemplate.of(SELECTED_HOST.variable());
            } else {
                // do not replace "/profile=*" with "{selected.profile}"
                this.template = AddressTemplate.of(address.lastName() + "=*");
            }
        } else {
            // but replace "/profile=*/foo=bar" with "{selected.profile}/foo=*"
            this.template = AddressTemplate.of(address, (name, value, first, last, index) -> {
                String segment;

                if (first && last) {
                    segment = name + "=*";
                } else {
                    switch (name) {
                        case HOST:
                            segment = SELECTED_HOST.variable();
                            break;
                        case PROFILE:
                            segment = SELECTED_PROFILE.variable();
                            break;
                        case SERVER_GROUP:
                            segment = SELECTED_GROUP.variable();
                            break;
                        case SUBSYSTEM:
                            segment = SUBSYSTEM + "=" + value;
                            break;
                        default:
                            segment = name + "=" + (last ? "*" : value);
                            break;
                    }
                }
                return segment;
            });
        }
    }

    boolean isDefined() {
        return resourceDescription != null || securityContext != null;
    }

    @Override
    public boolean equals(final Object o) {
        if (this == o) { return true; }
        if (!(o instanceof RrdResult)) { return false; }

        RrdResult rrdResult = (RrdResult) o;

        return address.equals(rrdResult.address);

    }

    @Override
    public int hashCode() {
        return address.hashCode();
    }
}
