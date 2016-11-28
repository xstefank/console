$wnd.hal.runAsyncCallback38("function $clinit_ServerGroupColumn(){\n  $clinit_ServerGroupColumn = emptyMethod;\n  $clinit_FinderColumn();\n}\n\nfunction ServerGroupColumn(finder, dispatcher, eventBus, placeManager, places, resources){\n  $clinit_ServerGroupColumn();\n  FinderColumn.call(this, (new FinderColumn$Builder(finder, 'deployment-sg', 'Server Group')).onItemSelect(new ServerGroupColumn$lambda$0$Type(eventBus)).onBreadcrumbItem(new ServerGroupColumn$lambda$1$Type(placeManager, places)).pinnable_0().withFilter_0());\n  this.$init_1144();\n  this.setItemRenderer(new ServerGroupColumn$lambda$2$Type(this));\n  this.setItemsProvider(new ServerGroupColumn$lambda$3$Type(dispatcher));\n  this.setPreviewCallback(new ServerGroupColumn$lambda$4$Type(resources));\n}\n\nfunction lambda$0_174(eventBus_0, serverGroup_1){\n  $clinit_ServerGroupColumn();\n  eventBus_0.fireEvent_0(new ServerGroupSelectionEvent(serverGroup_1.getName()));\n}\n\nfunction lambda$1_101(placeManager_0, places_1, item_2, context_3){\n  $clinit_ServerGroupColumn();\n  var current, update;\n  {\n    current = placeManager_0.getCurrentPlaceRequest();\n    update = places_1.replaceParameter(current, 'server-group', item_2.getName()).build_1();\n    placeManager_0.revealPlace(update);\n  }\n}\n\nfunction lambda$3_62(dispatcher_0, context_1, callback_2){\n  $clinit_ServerGroupColumn();\n  var deploymentsOp, serverGroupsOp;\n  {\n    serverGroupsOp = (new Operation$Builder('read-children-resources', root_7())).param_0('child-type', 'server-group').param_2('include-runtime', true).build_17();\n    deploymentsOp = (new Operation$Builder('read-resource', (new ResourceAddress).add_41('server-group', '*').add_41('deployment', '*'))).param_2('include-runtime', true).build_17();\n    dispatcher_0.execute_13(new Composite_0(serverGroupsOp, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_dmr_model_Operation_2_classLit, 1), {4:1, 1:1, 5:1, 153:1}, 84, 0, [deploymentsOp])), new ServerGroupColumn$lambda$5$Type(callback_2));\n  }\n}\n\nfunction lambda$4_54(resources_0, item_1){\n  $clinit_ServerGroupColumn();\n  return new ServerGroupPreview(item_1, resources_0);\n}\n\nfunction lambda$5_40(callback_0, result_1){\n  $clinit_ServerGroupColumn();\n  var serverGroups;\n  {\n    serverGroups = castTo(result_1.step(0).get_17('result').asPropertyList().stream().map_3(new ServerGroupColumn$0methodref$ctor$Type).sorted(comparing(new ServerGroupColumn$1methodref$getName$Type)).collect_0(toList()), 13);\n    callback_0.onSuccess_0(serverGroups);\n  }\n}\n\ndefineClass(2590, 34, {1:1, 34:1}, ServerGroupColumn);\n_.$init_1144 = function $init_1144(){\n}\n;\n_.lambda$2_50 = function lambda$2_81(item_0){\n  $clinit_ServerGroupColumn();\n  return new ServerGroupColumn$1(this, item_0);\n}\n;\nvar Lorg_jboss_hal_client_deployment_ServerGroupColumn_2_classLit = createForClass('org.jboss.hal.client.deployment', 'ServerGroupColumn', 2590, Lorg_jboss_hal_core_finder_FinderColumn_2_classLit);\nfunction $clinit_ServerGroupColumn$0methodref$ctor$Type(){\n  $clinit_ServerGroupColumn$0methodref$ctor$Type = emptyMethod;\n}\n\nfunction ServerGroupColumn$0methodref$ctor$Type(){\n  $clinit_ServerGroupColumn$0methodref$ctor$Type();\n}\n\ndefineClass(2595, 1, {1:1}, ServerGroupColumn$0methodref$ctor$Type);\n_.apply_2 = function apply_167(arg0){\n  return new ServerGroup_0(castTo(arg0, 50));\n}\n;\nvar Lorg_jboss_hal_client_deployment_ServerGroupColumn$0methodref$ctor$Type_2_classLit = createForClass('org.jboss.hal.client.deployment', 'ServerGroupColumn/0methodref$ctor$Type', 2595, Ljava_lang_Object_2_classLit);\nfunction $clinit_ServerGroupColumn$1(){\n  $clinit_ServerGroupColumn$1 = emptyMethod;\n  $clinit_Object();\n  $clinit_ItemDisplay_0();\n}\n\nfunction ServerGroupColumn$1(this$0, val$item){\n  $clinit_ServerGroupColumn$1();\n  this.this$01 = this$0;\n  this.val$item2 = val$item;\n  Object_0.call(this);\n  this.$init_1145();\n}\n\ndefineClass(2593, 1, {1:1}, ServerGroupColumn$1);\n_.$init_1145 = function $init_1145(){\n}\n;\n_.actions_0 = function actions_15(){\n  return $actions(this);\n}\n;\n_.getIcon = function getIcon_14(){\n  return $getIcon(this);\n}\n;\n_.getTooltip = function getTooltip_14(){\n  return $getTooltip(this);\n}\n;\n_.asElement_0 = function asElement_60(){\n  return withSubtitle(this.val$item2.getName(), this.val$item2.getProfile());\n}\n;\n_.getFilterData = function getFilterData_14(){\n  return join_5(' ', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_CharSequence_2_classLit, 1), {4:1, 1:1, 5:1}, 121, 0, [this.val$item2.getName(), this.val$item2.getProfile()]));\n}\n;\n_.getId = function getId_22(){\n  return serverGroup_4(this.val$item2.getName());\n}\n;\n_.getTitle = function getTitle_15(){\n  return this.val$item2.getName();\n}\n;\n_.nextColumn_0 = function nextColumn_15(){\n  return 'server-group-deployment';\n}\n;\nvar Lorg_jboss_hal_client_deployment_ServerGroupColumn$1_2_classLit = createForClass('org.jboss.hal.client.deployment', 'ServerGroupColumn/1', 2593, Ljava_lang_Object_2_classLit);\nfunction $clinit_ServerGroupColumn$1methodref$getName$Type(){\n  $clinit_ServerGroupColumn$1methodref$getName$Type = emptyMethod;\n}\n\nfunction ServerGroupColumn$1methodref$getName$Type(){\n  $clinit_ServerGroupColumn$1methodref$getName$Type();\n}\n\ndefineClass(2596, 1, {1:1}, ServerGroupColumn$1methodref$getName$Type);\n_.apply_2 = function apply_168(arg0){\n  return castTo(arg0, 17).getName();\n}\n;\nvar Lorg_jboss_hal_client_deployment_ServerGroupColumn$1methodref$getName$Type_2_classLit = createForClass('org.jboss.hal.client.deployment', 'ServerGroupColumn/1methodref$getName$Type', 2596, Ljava_lang_Object_2_classLit);\nfunction $clinit_ServerGroupColumn$lambda$0$Type(){\n  $clinit_ServerGroupColumn$lambda$0$Type = emptyMethod;\n}\n\nfunction ServerGroupColumn$lambda$0$Type(eventBus_0){\n  $clinit_ServerGroupColumn$lambda$0$Type();\n  this.eventBus_0 = eventBus_0;\n}\n\ndefineClass(2591, 1, {1:1}, ServerGroupColumn$lambda$0$Type);\n_.onSelect_2 = function onSelect_4(arg0){\n  lambda$0_174(this.eventBus_0, arg0);\n}\n;\nvar Lorg_jboss_hal_client_deployment_ServerGroupColumn$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.deployment', 'ServerGroupColumn/lambda$0$Type', 2591, Ljava_lang_Object_2_classLit);\nfunction $clinit_ServerGroupColumn$lambda$1$Type(){\n  $clinit_ServerGroupColumn$lambda$1$Type = emptyMethod;\n}\n\nfunction ServerGroupColumn$lambda$1$Type(placeManager_0, places_1){\n  $clinit_ServerGroupColumn$lambda$1$Type();\n  this.placeManager_0 = placeManager_0;\n  this.places_1 = places_1;\n}\n\ndefineClass(2592, 1, {1:1}, ServerGroupColumn$lambda$1$Type);\n_.execute_11 = function execute_273(arg0, arg1){\n  lambda$1_101(this.placeManager_0, this.places_1, arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_deployment_ServerGroupColumn$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.deployment', 'ServerGroupColumn/lambda$1$Type', 2592, Ljava_lang_Object_2_classLit);\nfunction $clinit_ServerGroupColumn$lambda$2$Type(){\n  $clinit_ServerGroupColumn$lambda$2$Type = emptyMethod;\n}\n\nfunction ServerGroupColumn$lambda$2$Type($$outer_0){\n  $clinit_ServerGroupColumn$lambda$2$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2594, 1, {1:1}, ServerGroupColumn$lambda$2$Type);\n_.render_3 = function render_70(arg0){\n  return this.$$outer_0.lambda$2_50(arg0);\n}\n;\nvar Lorg_jboss_hal_client_deployment_ServerGroupColumn$lambda$2$Type_2_classLit = createForClass('org.jboss.hal.client.deployment', 'ServerGroupColumn/lambda$2$Type', 2594, Ljava_lang_Object_2_classLit);\nfunction $clinit_ServerGroupColumn$lambda$3$Type(){\n  $clinit_ServerGroupColumn$lambda$3$Type = emptyMethod;\n}\n\nfunction ServerGroupColumn$lambda$3$Type(dispatcher_0){\n  $clinit_ServerGroupColumn$lambda$3$Type();\n  this.dispatcher_0 = dispatcher_0;\n}\n\ndefineClass(2598, 1, {1:1}, ServerGroupColumn$lambda$3$Type);\n_.get_13 = function get_191(arg0, arg1){\n  lambda$3_62(this.dispatcher_0, arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_deployment_ServerGroupColumn$lambda$3$Type_2_classLit = createForClass('org.jboss.hal.client.deployment', 'ServerGroupColumn/lambda$3$Type', 2598, Ljava_lang_Object_2_classLit);\nfunction $clinit_ServerGroupColumn$lambda$4$Type(){\n  $clinit_ServerGroupColumn$lambda$4$Type = emptyMethod;\n}\n\nfunction ServerGroupColumn$lambda$4$Type(resources_0){\n  $clinit_ServerGroupColumn$lambda$4$Type();\n  this.resources_0 = resources_0;\n}\n\ndefineClass(2599, 1, {1:1}, ServerGroupColumn$lambda$4$Type);\n_.onPreview = function onPreview_12(arg0){\n  return lambda$4_54(this.resources_0, arg0);\n}\n;\nvar Lorg_jboss_hal_client_deployment_ServerGroupColumn$lambda$4$Type_2_classLit = createForClass('org.jboss.hal.client.deployment', 'ServerGroupColumn/lambda$4$Type', 2599, Ljava_lang_Object_2_classLit);\nfunction $clinit_ServerGroupColumn$lambda$5$Type(){\n  $clinit_ServerGroupColumn$lambda$5$Type = emptyMethod;\n}\n\nfunction ServerGroupColumn$lambda$5$Type(callback_0){\n  $clinit_ServerGroupColumn$lambda$5$Type();\n  this.callback_0 = callback_0;\n}\n\ndefineClass(2597, 1, {1:1, 83:1}, ServerGroupColumn$lambda$5$Type);\n_.onSuccess_0 = function onSuccess_154(arg0){\n  lambda$5_40(this.callback_0, arg0);\n}\n;\nvar Lorg_jboss_hal_client_deployment_ServerGroupColumn$lambda$5$Type_2_classLit = createForClass('org.jboss.hal.client.deployment', 'ServerGroupColumn/lambda$5$Type', 2597, Ljava_lang_Object_2_classLit);\nfunction $clinit_ServerGroupPreview(){\n  $clinit_ServerGroupPreview = emptyMethod;\n  $clinit_PreviewContent();\n}\n\nfunction ServerGroupPreview(serverGroup, resources){\n  $clinit_ServerGroupPreview();\n  PreviewContent_3.call(this, serverGroup.getName(), 'Profile' + ' ' + serverGroup.getProfile(), resources.previews_0().deploymentsServerGroup());\n  this.$init_1160();\n  setVisible($getElementById_0(getDocument(), 'drag-and-drop-deployment'), supportsAdvancedUpload());\n}\n\ndefineClass(3308, 38, {1:1, 10:1, 38:1}, ServerGroupPreview);\n_.$init_1160 = function $init_1160(){\n}\n;\nvar Lorg_jboss_hal_client_deployment_ServerGroupPreview_2_classLit = createForClass('org.jboss.hal.client.deployment', 'ServerGroupPreview', 3308, Lorg_jboss_hal_core_finder_PreviewContent_2_classLit);\ndefineClass(1140, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$deployment$ServerGroupColumn$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$deployment$ServerGroupColumn$_annotation$$none$$(){\n  var result;\n  result = this.org$jboss$hal$client$deployment$ServerGroupColumn_org$jboss$hal$client$deployment$ServerGroupColumn_methodInjection(this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_dmr_dispatch().get_Key$type$org$jboss$hal$dmr$dispatch$Dispatcher$_annotation$$none$$(), this.injector.getFragment_com_google_web_bindery_event_shared().get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(), this.injector.getFragment_com_gwtplatform_mvp_client_proxy().get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_mvp().get_Key$type$org$jboss$hal$core$mvp$Places$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n  this.memberInject_Key$type$org$jboss$hal$client$deployment$ServerGroupColumn$_annotation$$none$$(result);\n  return result;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$deployment$ServerGroupColumn$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$deployment$ServerGroupColumn$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$deployment$ServerGroupColumn_org$jboss$hal$client$deployment$ServerGroupColumn_methodInjection = function org$jboss$hal$client$deployment$ServerGroupColumn_org$jboss$hal$client$deployment$ServerGroupColumn_methodInjection(_0, _1, _2, _3, _4, _5){\n  return new ServerGroupColumn(_0, _1, _2, _3, _4, _5);\n}\n;\ndefineClass(1149, 1, {57:1, 1:1});\n_.onSuccess_1 = function onSuccess_182(){\n  this.val$callback2.onSuccess_0(this.this$11.this$01.get_Key$type$org$jboss$hal$client$deployment$ServerGroupColumn$_annotation$$none$$());\n}\n;\n$entry(onLoad)(38);\n\n//# sourceURL=hal-38.js\n")
