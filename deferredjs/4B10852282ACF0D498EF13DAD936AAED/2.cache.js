$wnd.hal.runAsyncCallback2("function $clinit_BrowseByColumn(){\n  $clinit_BrowseByColumn = emptyMethod;\n  $clinit_StaticItemColumn();\n}\n\nfunction BrowseByColumn(finder, accessControl, environment, resources){\n  $clinit_BrowseByColumn();\n  StaticItemColumn.call(this, finder, 'access-control-browse-by', resources.constants_0().browseBy(), asList_3(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_core_finder_StaticItem_2_classLit, 1), {4:1, 1:1, 5:1}, 133, 0, [(new StaticItem$Builder(resources.constants_0().users_0())).onPreview_1(new BrowseByColumn$TopLevelPreview(resources.constants_0().users_0(), resources.previews_0().rbacUsers(), accessControl, environment, resources)).nextColumn_1('user').build_12(), (new StaticItem$Builder(resources.constants_0().groups_1())).onPreview_1(new BrowseByColumn$TopLevelPreview(resources.constants_0().groups_1(), resources.previews_0().rbacGroups(), accessControl, environment, resources)).nextColumn_1('group').build_12(), (new StaticItem$Builder(resources.constants_0().roles_1())).onPreview_1(new BrowseByColumn$TopLevelPreview(resources.constants_0().roles_1(), environment.isStandalone()?resources.previews_0().rbacRolesStandalone():resources.previews_0().rbacRolesDomain(), accessControl, environment, resources)).nextColumn_1('role').build_12()])));\n  this.$init_770();\n}\n\ndefineClass(2437, 194, {1:1, 34:1}, BrowseByColumn);\n_.$init_770 = function $init_770(){\n}\n;\nvar Lorg_jboss_hal_client_accesscontrol_BrowseByColumn_2_classLit = createForClass('org.jboss.hal.client.accesscontrol', 'BrowseByColumn', 2437, Lorg_jboss_hal_core_finder_StaticItemColumn_2_classLit);\nfunction $clinit_BrowseByColumn$TopLevelPreview(){\n  $clinit_BrowseByColumn$TopLevelPreview = emptyMethod;\n  $clinit_PreviewContent();\n}\n\nfunction BrowseByColumn$TopLevelPreview(header, resource, accessControl, environment, resources){\n  $clinit_BrowseByColumn$TopLevelPreview();\n  var content_0;\n  PreviewContent.call(this, header);\n  this.$init_771();\n  this.environment = environment;\n  this.warning = new Alert_1(($clinit_Icons() , WARNING_0), resources.messages_0().simpleProviderWarning(), resources.constants_0().enableRbac(), new BrowseByColumn$TopLevelPreview$lambda$0$Type(accessControl));\n  this.previewBuilder().add_12(this.warning);\n  content_0 = $createDivElement_0(getDocument());\n  innerHtml_1(content_0, resource);\n  this.previewBuilder().add_10(content_0);\n}\n\nfunction lambda$0_57(accessControl_0, event_1){\n  $clinit_BrowseByColumn$TopLevelPreview();\n  accessControl_0.switchProvider();\n}\n\ndefineClass(621, 38, {1:1, 10:1, 38:1}, BrowseByColumn$TopLevelPreview);\n_.$init_771 = function $init_771(){\n}\n;\n_.update_3 = function update_7(item_0){\n  this.update_5(castTo(item_0, 133));\n}\n;\n_.update_5 = function update_8(item_0){\n  setVisible(this.warning.asElement_0(), jsEquals(this.environment.getAccessControlProvider(), ($clinit_AccessControlProvider() , SIMPLE)));\n}\n;\nvar Lorg_jboss_hal_client_accesscontrol_BrowseByColumn$TopLevelPreview_2_classLit = createForClass('org.jboss.hal.client.accesscontrol', 'BrowseByColumn/TopLevelPreview', 621, Lorg_jboss_hal_core_finder_PreviewContent_2_classLit);\nfunction $clinit_BrowseByColumn$TopLevelPreview$lambda$0$Type(){\n  $clinit_BrowseByColumn$TopLevelPreview$lambda$0$Type = emptyMethod;\n}\n\nfunction BrowseByColumn$TopLevelPreview$lambda$0$Type(accessControl_0){\n  $clinit_BrowseByColumn$TopLevelPreview$lambda$0$Type();\n  this.accessControl_0 = accessControl_0;\n}\n\ndefineClass(2438, 1, {1:1}, BrowseByColumn$TopLevelPreview$lambda$0$Type);\n_.handleEvent_0 = function handleEvent_40(arg0){\n  lambda$0_57(this.accessControl_0, arg0);\n}\n;\nvar Lorg_jboss_hal_client_accesscontrol_BrowseByColumn$TopLevelPreview$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.accesscontrol', 'BrowseByColumn/TopLevelPreview/lambda$0$Type', 2438, Ljava_lang_Object_2_classLit);\ndefineClass(1046, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$accesscontrol$BrowseByColumn$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$accesscontrol$BrowseByColumn$_annotation$$none$$(){\n  var result;\n  result = this.org$jboss$hal$client$accesscontrol$BrowseByColumn_org$jboss$hal$client$accesscontrol$BrowseByColumn_methodInjection(this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$accesscontrol$AccessControl$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_config().get_Key$type$org$jboss$hal$config$Environment$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n  this.memberInject_Key$type$org$jboss$hal$client$accesscontrol$BrowseByColumn$_annotation$$none$$(result);\n  return result;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$accesscontrol$BrowseByColumn$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$accesscontrol$BrowseByColumn$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$accesscontrol$BrowseByColumn_org$jboss$hal$client$accesscontrol$BrowseByColumn_methodInjection = function org$jboss$hal$client$accesscontrol$BrowseByColumn_org$jboss$hal$client$accesscontrol$BrowseByColumn_methodInjection(_0, _1, _2, _3){\n  return new BrowseByColumn(_0, _1, _2, _3);\n}\n;\ndefineClass(1051, 1, {57:1, 1:1});\n_.onSuccess_1 = function onSuccess_38(){\n  this.val$callback2.onSuccess_0(this.this$11.this$01.get_Key$type$org$jboss$hal$client$accesscontrol$BrowseByColumn$_annotation$$none$$());\n}\n;\n$entry(onLoad)(2);\n\n//# sourceURL=hal-2.js\n")
