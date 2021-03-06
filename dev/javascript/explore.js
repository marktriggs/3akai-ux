/*
 * Licensed to the Sakai Foundation (SF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The SF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

require(["jquery","sakai/sakai.api.core"], function($, sakai) {

    sakai_global.explore = function() {
        var doInit = function() {
            if (sakai.config.enableCategories) {
                sakai.api.Util.TemplateRenderer($("#explore_categories_template"), {}, $("#explore_categories"));
            }
            if (sakai.api.User.isAnonymous(sakai.data.me) && !sakai.config.anonAllowedToBrowse) {
                $("#explore_content_second_column").remove();
                $("#widget_featuredcontent").remove();
                $("#explore_content_first_column > .s3d-split-line").remove();
                $("#explore_content").addClass("single-column");
            } else {
                $("#explore_content_second_column").show();
                $("#widget_featuredcontent").show();
            }
        };
        doInit();
    };

    sakai.api.Widgets.Container.registerForLoad("explore");
});