$wnd.hal.runAsyncCallback30("function ResourceAdapter_0(property){\n  $clinit_ResourceAdapter();\n  NamedNode_1.call(this, property);\n  this.$init_1071();\n}\n\ndefineClass(765, 17, {1:1, 14:1, 17:1}, ResourceAdapter_0);\n_.getAdapterType = function getAdapterType(){\n  if (this.hasDefined('archive')) {\n    return $clinit_ResourceAdapter$AdapterType() , ARCHIVE;\n  }\n   else if (this.hasDefined('module')) {\n    return $clinit_ResourceAdapter$AdapterType() , MODULE;\n  }\n  return $clinit_ResourceAdapter$AdapterType() , UNKNOWN_1;\n}\n;\n_.getArchive = function getArchive(){\n  return this.hasDefined('archive')?this.get_17('archive').asString():null;\n}\n;\n_.getModule = function getModule(){\n  return this.hasDefined('module')?this.get_17('module').asString():null;\n}\n;\n_.hasTransactionSupport = function hasTransactionSupport(){\n  return this.hasDefined('transaction-support');\n}\n;\nfunction $clinit_ResourceAdapter$AdapterType(){\n  $clinit_ResourceAdapter$AdapterType = emptyMethod;\n  $clinit_Enum();\n  ARCHIVE = new ResourceAdapter$AdapterType('ARCHIVE', 0, toLowerCase__Ljava_lang_String___devirtual$('Archive'));\n  MODULE = new ResourceAdapter$AdapterType('MODULE', 1, toLowerCase__Ljava_lang_String___devirtual$('Module'));\n  UNKNOWN_1 = new ResourceAdapter$AdapterType('UNKNOWN', 2, 'n/a');\n}\n\nfunction ResourceAdapter$AdapterType(enum$name, enum$ordinal, text_0){\n  Enum.call(this, enum$name, enum$ordinal);\n  this.$init_1072();\n  this.text_0 = text_0;\n}\n\nfunction valueOf_56(name_0){\n  $clinit_ResourceAdapter$AdapterType();\n  return valueOf_0(($clinit_ResourceAdapter$AdapterType$Map() , $MAP_38), name_0);\n}\n\nfunction values_53(){\n  $clinit_ResourceAdapter$AdapterType();\n  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_resourceadapter_ResourceAdapter$AdapterType_2_classLit, 1), {4:1, 20:1, 1:1, 5:1}, 389, 0, [ARCHIVE, MODULE, UNKNOWN_1]);\n}\n\ndefineClass(389, 9, {4:1, 11:1, 9:1, 1:1, 389:1}, ResourceAdapter$AdapterType);\n_.$init_1072 = function $init_1072(){\n}\n;\n_.text_1 = function text_2(){\n  return this.text_0;\n}\n;\nvar ARCHIVE, MODULE, UNKNOWN_1;\nvar Lorg_jboss_hal_client_configuration_subsystem_resourceadapter_ResourceAdapter$AdapterType_2_classLit = createForEnum('org.jboss.hal.client.configuration.subsystem.resourceadapter', 'ResourceAdapter/AdapterType', 389, Ljava_lang_Enum_2_classLit, values_53, valueOf_56);\nfunction $clinit_ResourceAdapter$AdapterType$Map(){\n  $clinit_ResourceAdapter$AdapterType$Map = emptyMethod;\n  $MAP_38 = createValueOfMap(values_53());\n}\n\nvar $MAP_38;\nfunction $clinit_ResourceAdapterColumn(){\n  $clinit_ResourceAdapterColumn = emptyMethod;\n  $clinit_FinderColumn();\n}\n\nfunction ResourceAdapterColumn(finder, columnActionFactory, itemActionFactory, crud, places, resources){\n  $clinit_ResourceAdapterColumn();\n  FinderColumn.call(this, (new FinderColumn$Builder(finder, 'resource-adapter', 'Resource Adapter')).columnAction(columnActionFactory.add_32(($clinit_Ids() , RESOURCE_ADAPTER_ADD), 'Resource Adapter', ($clinit_AddressTemplates_11() , RESOURCE_ADAPTER_TEMPLATE))).itemsProvider_0(new ResourceAdapterColumn$lambda$0$Type(crud)).withFilter_0().useFirstActionAsBreadcrumbHandler_0().onPreview_0(new ResourceAdapterColumn$lambda$1$Type(resources)));\n  this.$init_1073();\n  this.setItemRenderer(new ResourceAdapterColumn$lambda$2$Type(this, itemActionFactory, places));\n}\n\nfunction lambda$0_146(crud_0, context_1, callback_2){\n  $clinit_ResourceAdapterColumn();\n  {\n    crud_0.readChildren_3(($clinit_AddressTemplates_11() , RESOURCE_ADAPTER_SUBSYSTEM_TEMPLATE), 'resource-adapter', new ResourceAdapterColumn$lambda$3$Type(callback_2));\n  }\n}\n\nfunction lambda$1_84(resources_0, item_1){\n  $clinit_ResourceAdapterColumn();\n  return new ResourceAdapterPreview(item_1, resources_0);\n}\n\nfunction lambda$3_52(callback_0, children_1){\n  $clinit_ResourceAdapterColumn();\n  var resourceAdapters;\n  {\n    resourceAdapters = castTo(children_1.stream().map_3(new ResourceAdapterColumn$0methodref$ctor$Type).collect_0(toList()), 13);\n    callback_0.onSuccess_0(resourceAdapters);\n  }\n}\n\ndefineClass(2576, 34, {1:1, 34:1}, ResourceAdapterColumn);\n_.$init_1073 = function $init_1073(){\n}\n;\n_.lambda$2_39 = function lambda$2_66(itemActionFactory_1, places_2, item_2){\n  $clinit_ResourceAdapterColumn();\n  return new ResourceAdapterColumn$1(this, item_2, itemActionFactory_1, places_2);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_resourceadapter_ResourceAdapterColumn_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.resourceadapter', 'ResourceAdapterColumn', 2576, Lorg_jboss_hal_core_finder_FinderColumn_2_classLit);\nfunction $clinit_ResourceAdapterColumn$0methodref$ctor$Type(){\n  $clinit_ResourceAdapterColumn$0methodref$ctor$Type = emptyMethod;\n}\n\nfunction ResourceAdapterColumn$0methodref$ctor$Type(){\n  $clinit_ResourceAdapterColumn$0methodref$ctor$Type();\n}\n\ndefineClass(2577, 1, {1:1}, ResourceAdapterColumn$0methodref$ctor$Type);\n_.apply_2 = function apply_141(arg0){\n  return new ResourceAdapter_0(castTo(arg0, 50));\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_resourceadapter_ResourceAdapterColumn$0methodref$ctor$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.resourceadapter', 'ResourceAdapterColumn/0methodref$ctor$Type', 2577, Ljava_lang_Object_2_classLit);\nfunction $clinit_ResourceAdapterColumn$1(){\n  $clinit_ResourceAdapterColumn$1 = emptyMethod;\n  $clinit_Object();\n  $clinit_ItemDisplay_0();\n}\n\nfunction ResourceAdapterColumn$1(this$0, val$item, val$itemActionFactory, val$places){\n  $clinit_ResourceAdapterColumn$1();\n  this.this$01 = this$0;\n  this.val$item2 = val$item;\n  this.val$itemActionFactory3 = val$itemActionFactory;\n  this.val$places4 = val$places;\n  Object_0.call(this);\n  this.$init_1074();\n}\n\ndefineClass(2581, 1, {1:1}, ResourceAdapterColumn$1);\n_.$init_1074 = function $init_1074(){\n}\n;\n_.getTooltip = function getTooltip_11(){\n  return $getTooltip(this);\n}\n;\n_.nextColumn_0 = function nextColumn_12(){\n  return $nextColumn(this);\n}\n;\n_.actions_0 = function actions_12(){\n  var actions;\n  actions = new ArrayList;\n  actions.add_0(this.val$itemActionFactory3.view_1(this.val$places4.selectedProfile_0('resource-adapter').with_0('name', this.val$item2.getName()).build_1()));\n  actions.add_0(this.val$itemActionFactory3.remove_17('Resource Adapter', this.val$item2.getName(), ($clinit_AddressTemplates_11() , RESOURCE_ADAPTER_TEMPLATE), this.this$01));\n  return actions;\n}\n;\n_.asElement_0 = function asElement_56(){\n  if (this.val$item2.hasTransactionSupport()) {\n    return withSubtitle(this.val$item2.getName(), this.val$item2.get_17('transaction-support').asString());\n  }\n  return null;\n}\n;\n_.getFilterData = function getFilterData_11(){\n  var data_0;\n  data_0 = new ArrayList;\n  data_0.add_0(this.val$item2.getName());\n  data_0.add_0(toLowerCase__Ljava_lang_String___devirtual$(this.val$item2.getAdapterType().name_4()));\n  if (this.val$item2.hasTransactionSupport()) {\n    data_0.add_0(this.val$item2.get_17('transaction-support').asString());\n  }\n  return join_4(' ', data_0);\n}\n;\n_.getIcon = function getIcon_11(){\n  var icon;\n  icon = null;\n  if (jsEquals(this.val$item2.getAdapterType(), ($clinit_ResourceAdapter$AdapterType() , ARCHIVE))) {\n    icon = $createSpanElement(getDocument());\n    $setClassName(icon, fontAwesome('archive'));\n  }\n   else if (jsEquals(this.val$item2.getAdapterType(), ($clinit_ResourceAdapter$AdapterType() , ARCHIVE))) {\n    icon = $createSpanElement(getDocument());\n    $setClassName(icon, fontAwesome('cubes'));\n  }\n  return icon;\n}\n;\n_.getId = function getId_19(){\n  return resourceAdapter_0(this.val$item2.getName());\n}\n;\n_.getTitle = function getTitle_12(){\n  return this.val$item2.getName();\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_resourceadapter_ResourceAdapterColumn$1_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.resourceadapter', 'ResourceAdapterColumn/1', 2581, Ljava_lang_Object_2_classLit);\nfunction $clinit_ResourceAdapterColumn$lambda$0$Type(){\n  $clinit_ResourceAdapterColumn$lambda$0$Type = emptyMethod;\n}\n\nfunction ResourceAdapterColumn$lambda$0$Type(crud_0){\n  $clinit_ResourceAdapterColumn$lambda$0$Type();\n  this.crud_0 = crud_0;\n}\n\ndefineClass(2579, 1, {1:1}, ResourceAdapterColumn$lambda$0$Type);\n_.get_13 = function get_174(arg0, arg1){\n  lambda$0_146(this.crud_0, arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_resourceadapter_ResourceAdapterColumn$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.resourceadapter', 'ResourceAdapterColumn/lambda$0$Type', 2579, Ljava_lang_Object_2_classLit);\nfunction $clinit_ResourceAdapterColumn$lambda$1$Type(){\n  $clinit_ResourceAdapterColumn$lambda$1$Type = emptyMethod;\n}\n\nfunction ResourceAdapterColumn$lambda$1$Type(resources_0){\n  $clinit_ResourceAdapterColumn$lambda$1$Type();\n  this.resources_0 = resources_0;\n}\n\ndefineClass(2580, 1, {1:1}, ResourceAdapterColumn$lambda$1$Type);\n_.onPreview = function onPreview_9(arg0){\n  return lambda$1_84(this.resources_0, arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_resourceadapter_ResourceAdapterColumn$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.resourceadapter', 'ResourceAdapterColumn/lambda$1$Type', 2580, Ljava_lang_Object_2_classLit);\nfunction $clinit_ResourceAdapterColumn$lambda$2$Type(){\n  $clinit_ResourceAdapterColumn$lambda$2$Type = emptyMethod;\n}\n\nfunction ResourceAdapterColumn$lambda$2$Type($$outer_0, itemActionFactory_1, places_2){\n  $clinit_ResourceAdapterColumn$lambda$2$Type();\n  this.$$outer_0 = $$outer_0;\n  this.itemActionFactory_1 = itemActionFactory_1;\n  this.places_2 = places_2;\n}\n\ndefineClass(2582, 1, {1:1}, ResourceAdapterColumn$lambda$2$Type);\n_.render_3 = function render_56(arg0){\n  return this.$$outer_0.lambda$2_39(this.itemActionFactory_1, this.places_2, arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_resourceadapter_ResourceAdapterColumn$lambda$2$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.resourceadapter', 'ResourceAdapterColumn/lambda$2$Type', 2582, Ljava_lang_Object_2_classLit);\nfunction $clinit_ResourceAdapterColumn$lambda$3$Type(){\n  $clinit_ResourceAdapterColumn$lambda$3$Type = emptyMethod;\n}\n\nfunction ResourceAdapterColumn$lambda$3$Type(callback_0){\n  $clinit_ResourceAdapterColumn$lambda$3$Type();\n  this.callback_0 = callback_0;\n}\n\ndefineClass(2578, 1, {1:1}, ResourceAdapterColumn$lambda$3$Type);\n_.execute_8 = function execute_224(arg0){\n  lambda$3_52(this.callback_0, arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_resourceadapter_ResourceAdapterColumn$lambda$3$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.resourceadapter', 'ResourceAdapterColumn/lambda$3$Type', 2578, Ljava_lang_Object_2_classLit);\nfunction $clinit_ResourceAdapterPreview(){\n  $clinit_ResourceAdapterPreview = emptyMethod;\n  $clinit_PreviewContent();\n}\n\nfunction ResourceAdapterPreview(resourceAdapter, resources){\n  $clinit_ResourceAdapterPreview();\n  var adapterType, attributes;\n  PreviewContent.call(this, resourceAdapter.getName());\n  this.$init_1078();\n  adapterType = resourceAdapter.getAdapterType();\n  if (jsEquals(adapterType, ($clinit_ResourceAdapter$AdapterType() , ARCHIVE))) {\n    castTo(castTo(this.previewBuilder().p(), 3).innerHtml(resources.messages_0().resourceAdapterProvidedBy(adapterType.text_1(), resourceAdapter.getArchive())), 3).end();\n  }\n   else if (jsEquals(adapterType, ($clinit_ResourceAdapter$AdapterType() , MODULE))) {\n    castTo(castTo(this.previewBuilder().p(), 3).innerHtml(resources.messages_0().resourceAdapterProvidedBy(adapterType.text_1(), resourceAdapter.getModule())), 3).end();\n  }\n  attributes = (new PreviewAttributes_2(resourceAdapter, asList_3(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['statistics-enabled', 'transaction-support'])))).end_0();\n  this.previewBuilder().addAll_0(attributes);\n}\n\ndefineClass(3307, 38, {1:1, 10:1, 38:1}, ResourceAdapterPreview);\n_.$init_1078 = function $init_1078(){\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_resourceadapter_ResourceAdapterPreview_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.resourceadapter', 'ResourceAdapterPreview', 3307, Lorg_jboss_hal_core_finder_PreviewContent_2_classLit);\ndefineClass(1125, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$resourceadapter$ResourceAdapterColumn$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$resourceadapter$ResourceAdapterColumn$_annotation$$none$$(){\n  var result;\n  result = this.org$jboss$hal$client$configuration$subsystem$resourceadapter$ResourceAdapterColumn_org$jboss$hal$client$configuration$subsystem$resourceadapter$ResourceAdapterColumn_methodInjection(this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$ColumnActionFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$ItemActionFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core().get_Key$type$org$jboss$hal$core$CrudOperations$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_mvp().get_Key$type$org$jboss$hal$core$mvp$Places$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n  this.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$resourceadapter$ResourceAdapterColumn$_annotation$$none$$(result);\n  return result;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$resourceadapter$ResourceAdapterColumn$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$resourceadapter$ResourceAdapterColumn$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$configuration$subsystem$resourceadapter$ResourceAdapterColumn_org$jboss$hal$client$configuration$subsystem$resourceadapter$ResourceAdapterColumn_methodInjection = function org$jboss$hal$client$configuration$subsystem$resourceadapter$ResourceAdapterColumn_org$jboss$hal$client$configuration$subsystem$resourceadapter$ResourceAdapterColumn_methodInjection(_0, _1, _2, _3, _4, _5){\n  return new ResourceAdapterColumn(_0, _1, _2, _3, _4, _5);\n}\n;\ndefineClass(1129, 1, {57:1, 1:1});\n_.onSuccess_1 = function onSuccess_116(){\n  this.val$callback2.onSuccess_0(this.this$11.this$01.get_Key$type$org$jboss$hal$client$configuration$subsystem$resourceadapter$ResourceAdapterColumn$_annotation$$none$$());\n}\n;\ndefineClass(213, 1, {1:1, 250:1});\n_.resourceAdapterProvidedBy = function resourceAdapterProvidedBy(arg0, arg1){\n  return (new SafeHtmlBuilder).appendHtmlConstant('The resource adapter is provided by ').appendEscaped(arg0).appendHtmlConstant(' <code>').appendEscaped(arg1).appendHtmlConstant('<\\/code>.').toSafeHtml();\n}\n;\n$entry(onLoad)(30);\n\n//# sourceURL=hal-30.js\n")
