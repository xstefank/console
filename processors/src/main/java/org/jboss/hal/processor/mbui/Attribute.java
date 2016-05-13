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
package org.jboss.hal.processor.mbui;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Harald Pehl
 */
public class Attribute {

    private final String name;
    private final int position;
    private final boolean unbound;
    private final List<String> suggestHandlerTemplates;

    Attribute(final String name, final int position, final boolean unbound) {
        this.name = name;
        this.position = position;
        this.unbound = unbound;
        this.suggestHandlerTemplates = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public int getPosition() {
        return position;
    }

    public boolean isUnbound() {
        return unbound;
    }

    public List<String> getSuggestHandlerTemplates() {
        return suggestHandlerTemplates;
    }

    void addSuggestHandlerTemplate(String template) {
        suggestHandlerTemplates.add(template);
    }
}
