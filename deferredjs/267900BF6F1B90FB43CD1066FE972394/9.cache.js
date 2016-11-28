$wnd.hal.runAsyncCallback9("function $clinit_SocketBindingColumn(){\n  $clinit_SocketBindingColumn = emptyMethod;\n  $clinit_FinderColumn();\n}\n\nfunction SocketBindingColumn(finder, columnActionFactory, itemActionFactory, crud){\n  $clinit_SocketBindingColumn();\n  FinderColumn.call(this, (new FinderColumn$Builder(finder, 'socket-binding', 'Socket Binding')).columnAction(columnActionFactory.add_32(($clinit_Ids() , SOCKET_BINDING_ADD), 'Socket Binding', ($clinit_SocketBindingPresenter() , ROOT_TEMPLATE_1))).columnAction(columnActionFactory.refresh_7(($clinit_Ids() , SOCKET_BINDING_REFRESH))).itemsProvider_0(new SocketBindingColumn$lambda$0$Type(crud)));\n  this.$init_872();\n  this.setItemRenderer(new SocketBindingColumn$lambda$1$Type(this, itemActionFactory));\n}\n\nfunction lambda$0_87(crud_0, context_1, callback_2){\n  $clinit_SocketBindingColumn();\n  crud_0.readChildren_1(root_7(), 'socket-binding-group', new SocketBindingColumn$0methodref$onSuccess$Type(callback_2));\n}\n\ndefineClass(2515, 34, {1:1, 34:1}, SocketBindingColumn);\n_.$init_872 = function $init_872(){\n}\n;\n_.lambda$1_22 = function lambda$1_43(itemActionFactory_1, property_1){\n  $clinit_SocketBindingColumn();\n  return new SocketBindingColumn$1(this, property_1, itemActionFactory_1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_SocketBindingColumn_2_classLit = createForClass('org.jboss.hal.client.configuration', 'SocketBindingColumn', 2515, Lorg_jboss_hal_core_finder_FinderColumn_2_classLit);\nfunction $clinit_SocketBindingColumn$0methodref$onSuccess$Type(){\n  $clinit_SocketBindingColumn$0methodref$onSuccess$Type = emptyMethod;\n}\n\nfunction SocketBindingColumn$0methodref$onSuccess$Type($$outer_0){\n  $clinit_SocketBindingColumn$0methodref$onSuccess$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2516, 1, {1:1}, SocketBindingColumn$0methodref$onSuccess$Type);\n_.execute_8 = function execute_81(arg0){\n  this.$$outer_0.onSuccess_0(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_SocketBindingColumn$0methodref$onSuccess$Type_2_classLit = createForClass('org.jboss.hal.client.configuration', 'SocketBindingColumn/0methodref$onSuccess$Type', 2516, Ljava_lang_Object_2_classLit);\nfunction $clinit_SocketBindingColumn$1(){\n  $clinit_SocketBindingColumn$1 = emptyMethod;\n  $clinit_Object();\n  $clinit_ItemDisplay_0();\n}\n\nfunction SocketBindingColumn$1(this$0, val$property, val$itemActionFactory){\n  $clinit_SocketBindingColumn$1();\n  this.this$01 = this$0;\n  this.val$property2 = val$property;\n  this.val$itemActionFactory3 = val$itemActionFactory;\n  Object_0.call(this);\n  this.$init_873();\n}\n\ndefineClass(2518, 1, {1:1}, SocketBindingColumn$1);\n_.$init_873 = function $init_873(){\n}\n;\n_.asElement_0 = function asElement_43(){\n  return $asElement_0(this);\n}\n;\n_.getFilterData = function getFilterData_5(){\n  return $getFilterData(this);\n}\n;\n_.getIcon = function getIcon_5(){\n  return $getIcon(this);\n}\n;\n_.getId = function getId_12(){\n  return $getId_1(this);\n}\n;\n_.getTooltip = function getTooltip_5(){\n  return $getTooltip(this);\n}\n;\n_.nextColumn_0 = function nextColumn_6(){\n  return $nextColumn(this);\n}\n;\n_.actions_0 = function actions_6(){\n  return asList_3(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_core_finder_ItemAction_2_classLit, 1), {4:1, 1:1, 5:1}, 59, 0, [this.val$itemActionFactory3.view_2('socket-binding', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['name', this.val$property2.getName()])), this.val$itemActionFactory3.remove_17('Socket Binding', this.val$property2.getName(), ($clinit_SocketBindingPresenter() , ROOT_TEMPLATE_1), this.this$01)]));\n}\n;\n_.getTitle = function getTitle_6(){\n  return this.val$property2.getName();\n}\n;\nvar Lorg_jboss_hal_client_configuration_SocketBindingColumn$1_2_classLit = createForClass('org.jboss.hal.client.configuration', 'SocketBindingColumn/1', 2518, Ljava_lang_Object_2_classLit);\nfunction $clinit_SocketBindingColumn$lambda$0$Type(){\n  $clinit_SocketBindingColumn$lambda$0$Type = emptyMethod;\n}\n\nfunction SocketBindingColumn$lambda$0$Type(crud_0){\n  $clinit_SocketBindingColumn$lambda$0$Type();\n  this.crud_0 = crud_0;\n}\n\ndefineClass(2517, 1, {1:1}, SocketBindingColumn$lambda$0$Type);\n_.get_13 = function get_96(arg0, arg1){\n  lambda$0_87(this.crud_0, arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_SocketBindingColumn$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration', 'SocketBindingColumn/lambda$0$Type', 2517, Ljava_lang_Object_2_classLit);\nfunction $clinit_SocketBindingColumn$lambda$1$Type(){\n  $clinit_SocketBindingColumn$lambda$1$Type = emptyMethod;\n}\n\nfunction SocketBindingColumn$lambda$1$Type($$outer_0, itemActionFactory_1){\n  $clinit_SocketBindingColumn$lambda$1$Type();\n  this.$$outer_0 = $$outer_0;\n  this.itemActionFactory_1 = itemActionFactory_1;\n}\n\ndefineClass(2519, 1, {1:1}, SocketBindingColumn$lambda$1$Type);\n_.render_3 = function render_11(arg0){\n  return this.$$outer_0.lambda$1_22(this.itemActionFactory_1, arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_SocketBindingColumn$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.configuration', 'SocketBindingColumn/lambda$1$Type', 2519, Ljava_lang_Object_2_classLit);\nfunction $clinit_SocketBindingPresenter(){\n  $clinit_SocketBindingPresenter = emptyMethod;\n  $clinit_Object();\n  ROOT_TEMPLATE_1 = of_14('/socket-binding-group=*');\n}\n\nvar ROOT_TEMPLATE_1;\ndefineClass(1060, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$configuration$SocketBindingColumn$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$SocketBindingColumn$_annotation$$none$$(){\n  var result;\n  result = this.org$jboss$hal$client$configuration$SocketBindingColumn_org$jboss$hal$client$configuration$SocketBindingColumn_methodInjection(this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$ColumnActionFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$ItemActionFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core().get_Key$type$org$jboss$hal$core$CrudOperations$_annotation$$none$$());\n  this.memberInject_Key$type$org$jboss$hal$client$configuration$SocketBindingColumn$_annotation$$none$$(result);\n  return result;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$SocketBindingColumn$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$SocketBindingColumn$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$configuration$SocketBindingColumn_org$jboss$hal$client$configuration$SocketBindingColumn_methodInjection = function org$jboss$hal$client$configuration$SocketBindingColumn_org$jboss$hal$client$configuration$SocketBindingColumn_methodInjection(_0, _1, _2, _3){\n  return new SocketBindingColumn(_0, _1, _2, _3);\n}\n;\ndefineClass(1067, 1, {57:1, 1:1});\n_.onSuccess_1 = function onSuccess_57(){\n  this.val$callback2.onSuccess_0(this.this$11.this$01.get_Key$type$org$jboss$hal$client$configuration$SocketBindingColumn$_annotation$$none$$());\n}\n;\n$entry(onLoad)(9);\n\n//# sourceURL=hal-9.js\n")
