$wnd.hal.runAsyncCallback11("defineClass(1039, 1, {1:1});\n_.com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection__________ = function com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection__________(invokee, _0){\n  invokee.automaticBind(_0);\n}\n;\nfunction $clinit_Attribute_0(){\n  $clinit_Attribute_0 = emptyMethod;\n  $clinit_Object();\n}\n\nfunction Attribute_0(name_0){\n  $clinit_Attribute_0();\n  Attribute_1.call(this, name_0, ($clinit_Attribute$Scope() , BOTH));\n}\n\nfunction Attribute_1(name_0, scope_0){\n  $clinit_Attribute_0();\n  Object_0.call(this);\n  this.$init_894();\n  this.name_0 = name_0;\n  this.scope_0 = scope_0;\n}\n\ndefineClass(46, 1, {1:1, 46:1}, Attribute_0, Attribute_1);\n_.$init_894 = function $init_894(){\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'Attribute', 46, Ljava_lang_Object_2_classLit);\nfunction $clinit_Attribute$Scope(){\n  $clinit_Attribute$Scope = emptyMethod;\n  $clinit_Enum();\n  BOTH = new Attribute$Scope('BOTH', 0);\n  NON_XA = new Attribute$Scope('NON_XA', 1);\n  XA = new Attribute$Scope('XA', 2);\n}\n\nfunction Attribute$Scope(enum$name, enum$ordinal){\n  Enum.call(this, enum$name, enum$ordinal);\n  this.$init_895();\n}\n\nfunction valueOf_53(name_0){\n  $clinit_Attribute$Scope();\n  return valueOf_0(($clinit_Attribute$Scope$Map() , $MAP_35), name_0);\n}\n\nfunction values_50(){\n  $clinit_Attribute$Scope();\n  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute$Scope_2_classLit, 1), {4:1, 20:1, 1:1, 5:1}, 394, 0, [BOTH, NON_XA, XA]);\n}\n\ndefineClass(394, 9, {4:1, 11:1, 9:1, 1:1, 394:1}, Attribute$Scope);\n_.$init_895 = function $init_895(){\n}\n;\nvar BOTH, NON_XA, XA;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute$Scope_2_classLit = createForEnum('org.jboss.hal.client.configuration.subsystem.datasource', 'Attribute/Scope', 394, Ljava_lang_Enum_2_classLit, values_50, valueOf_53);\nfunction $clinit_Attribute$Scope$Map(){\n  $clinit_Attribute$Scope$Map = emptyMethod;\n  $MAP_35 = createValueOfMap(values_50());\n}\n\nvar $MAP_35;\nfunction $clinit_DataSourcePresenter(){\n  $clinit_DataSourcePresenter = emptyMethod;\n  $clinit_ApplicationFinderPresenter();\n}\n\nfunction DataSourcePresenter(eventBus, view, proxy, finder, crud, finderPathFactory, statementContext){\n  $clinit_DataSourcePresenter();\n  ApplicationFinderPresenter.call(this, eventBus, view, proxy, finder);\n  this.$init_900();\n  this.crud = crud;\n  this.finderPathFactory = finderPathFactory;\n  this.statementContext = statementContext;\n}\n\ndefineClass(505, 155, {58:1, 45:1, 1:1, 28:1, 27:1, 505:1, 130:1, 97:1}, DataSourcePresenter);\n_.$init_900 = function $init_900(){\n}\n;\n_.lambda$0_48 = function lambda$0_94(result_0){\n  $clinit_DataSourcePresenter();\n  castTo(this.getView(), 3437).update_10(new DataSource(this.name_0, result_0, this.xa));\n}\n;\n_.finderPath = function finderPath_3(){\n  return this.finderPathFactory.subsystemPath('datasources').append_19('data-source-driver', 'datasources', 'Datasources & Drivers', 'Datasources').append_19('data-source-configuration', dataSourceConfiguration(this.name_0, this.xa), 'Datasource', this.name_0);\n}\n;\n_.onBind = function onBind_6(){\n  getClassPrototype(78).onBind.call(this);\n  castTo(this.getView(), 3437).setPresenter(this);\n}\n;\n_.onReset = function onReset_5(){\n  getClassPrototype(155).onReset.call(this);\n  this.reload_0();\n}\n;\n_.prepareFromRequest = function prepareFromRequest_5(request){\n  getClassPrototype(152).prepareFromRequest.call(this, request);\n  this.name_0 = request.getParameter_0('name', null);\n  this.xa = booleanValue__Z__devirtual$(valueOf_20(request.getParameter_0('xa', valueOf_31(false))));\n}\n;\n_.reload_0 = function reload_4(){\n  this.crud.read_2(this.resourceAddress(), new DataSourcePresenter$lambda$0$Type(this));\n}\n;\n_.resourceAddress = function resourceAddress_2(){\n  return this.xa?($clinit_AddressTemplates_1() , XA_DATA_SOURCE_TEMPLATE).resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [this.name_0])):($clinit_AddressTemplates_1() , DATA_SOURCE_TEMPLATE).resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [this.name_0]));\n}\n;\n_.saveDataSource = function saveDataSource(changedValues){\n  this.crud.save_4(this.type_3(), this.name_0, this.resourceAddress(), changedValues, makeLambdaFunction(DataSourcePresenter$0methodref$reload$Type.prototype.execute_0, DataSourcePresenter$0methodref$reload$Type, [this]));\n}\n;\n_.type_3 = function type_5(){\n  return this.xa?'Datasource':'XA Datasource';\n}\n;\n_.xa = false;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourcePresenter_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourcePresenter', 505, Lorg_jboss_hal_core_mvp_ApplicationFinderPresenter_2_classLit);\nfunction $clinit_DataSourcePresenter$0methodref$reload$Type(){\n  $clinit_DataSourcePresenter$0methodref$reload$Type = emptyMethod;\n}\n\nfunction DataSourcePresenter$0methodref$reload$Type($$outer_0){\n  $clinit_DataSourcePresenter$0methodref$reload$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(4362, $wnd.Function, {1:1}, DataSourcePresenter$0methodref$reload$Type);\n_.execute_0 = function execute_98(){\n  this.$$outer_0.reload_0();\n}\n;\nfunction $clinit_DataSourcePresenter$MyView(){\n  $clinit_DataSourcePresenter$MyView = emptyMethod;\n}\n\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourcePresenter$MyView_2_classLit = createForInterface('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourcePresenter/MyView');\nfunction $clinit_DataSourcePresenter$lambda$0$Type(){\n  $clinit_DataSourcePresenter$lambda$0$Type = emptyMethod;\n}\n\nfunction DataSourcePresenter$lambda$0$Type($$outer_0){\n  $clinit_DataSourcePresenter$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1286, 1, {1:1}, DataSourcePresenter$lambda$0$Type);\n_.execute_9 = function execute_99(arg0){\n  this.$$outer_0.lambda$0_48(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourcePresenter$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourcePresenter/lambda$0$Type', 1286, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView(){\n  $clinit_DataSourceView = emptyMethod;\n  $clinit_HalViewImpl();\n  $clinit_HalView();\n  CONSTANTS_14 = castTo(new Constants_, 128);\n  attributes_0 = create_0();\n  {\n    attributes_0.putAll(CONSTANTS_14.attributes_1(), asList_3(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit, 1), {4:1, 1:1, 5:1}, 46, 0, [new Attribute_0('jndi-name'), new Attribute_0('driver-name'), new Attribute_0('enabled'), new Attribute_0('statistics-enabled')])));\n    attributes_0.putAll(CONSTANTS_14.connection(), asList_3(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit, 1), {4:1, 1:1, 5:1}, 46, 0, [new Attribute_1('connection-url', ($clinit_Attribute$Scope() , XA)), new Attribute_0('url-delimiter'), new Attribute_0('url-selector-strategy-class-name'), new Attribute_0('new-connection-sql'), new Attribute_0('connection-listener-class'), new Attribute_0('connection-listener-property'), new Attribute_0('transaction-isolation'), new Attribute_1('jta', ($clinit_Attribute$Scope() , NON_XA)), new Attribute_0('use-ccm'), new Attribute_1('same-rm-override', ($clinit_Attribute$Scope() , XA)), new Attribute_1('interleaving', ($clinit_Attribute$Scope() , XA)), new Attribute_1('pad-xid', ($clinit_Attribute$Scope() , XA)), new Attribute_1('wrap-xa-resource', ($clinit_Attribute$Scope() , XA))])));\n    attributes_0.putAll(CONSTANTS_14.pool_0(), asList_3(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit, 1), {4:1, 1:1, 5:1}, 46, 0, [new Attribute_0('min-pool-size'), new Attribute_0('initial-pool-size'), new Attribute_0('max-pool-size'), new Attribute_0('pool-prefill'), new Attribute_0('flush-strategy'), new Attribute_0('pool-use-strict-min'), new Attribute_0('pool-fair'), new Attribute_0('use-fast-fail'), new Attribute_0('capacity-decrementer-class'), new Attribute_0('capacity-decrementer-properties'), new Attribute_0('capacity-incrementer-class'), new Attribute_0('capacity-incrementer-properties'), new Attribute_1('no-recovery', ($clinit_Attribute$Scope() , XA)), new Attribute_1('tx-separate-pool', ($clinit_Attribute$Scope() , XA))])));\n    attributes_0.putAll(CONSTANTS_14.security(), asList_3(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit, 1), {4:1, 1:1, 5:1}, 46, 0, [new Attribute_0('user-name'), new Attribute_0('password'), new Attribute_0('security-domain'), new Attribute_0('allow-multiple-users'), new Attribute_0('reauth-plugin-class-name'), new Attribute_0('reauth-plugin-properties'), new Attribute_1('recovery-username', ($clinit_Attribute$Scope() , XA)), new Attribute_1('recovery-password', ($clinit_Attribute$Scope() , XA)), new Attribute_1('recovery-security-domain', ($clinit_Attribute$Scope() , XA)), new Attribute_1('recovery-plugin-class-name', ($clinit_Attribute$Scope() , XA)), new Attribute_1('recovery-plugin-properties', ($clinit_Attribute$Scope() , XA))])));\n    attributes_0.putAll(CONSTANTS_14.validation(), asList_3(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit, 1), {4:1, 1:1, 5:1}, 46, 0, [new Attribute_0('valid-connection-checker-class-name'), new Attribute_0('valid-connection-checker-properties'), new Attribute_0('check-valid-connection-sql'), new Attribute_0('validate-on-match'), new Attribute_0('background-validation'), new Attribute_0('background-validation-millis'), new Attribute_0('stale-connection-checker-class-name'), new Attribute_0('stale-connection-checker-properties'), new Attribute_0('exception-sorter-class-name'), new Attribute_0('exception-sorter-properties')])));\n    attributes_0.putAll(CONSTANTS_14.timeouts(), asList_3(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit, 1), {4:1, 1:1, 5:1}, 46, 0, [new Attribute_0('use-try-lock'), new Attribute_0('blocking-timeout-wait-millis'), new Attribute_0('idle-timeout-minutes'), new Attribute_0('set-tx-query-timeout'), new Attribute_0('query-timeout'), new Attribute_0('allocation-retry'), new Attribute_0('allocation-retry-wait-millis'), new Attribute_1('xa-resource-timeout', ($clinit_Attribute$Scope() , XA))])));\n    attributes_0.putAll(CONSTANTS_14.statements() + ' / ' + CONSTANTS_14.tracking(), asList_3(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit, 1), {4:1, 1:1, 5:1}, 46, 0, [new Attribute_0('spy'), new Attribute_0('tracking'), new Attribute_0('track-statements'), new Attribute_0('share-prepared-statements'), new Attribute_0('prepared-statements-cache-size'), new Attribute_0('enlistment-trace')])));\n  }\n}\n\nfunction DataSourceView(metadataRegistry, resources){\n  $clinit_DataSourceView();\n  var group, group$iterator, groupAttributes, groupId, layoutBuilder, nonXaFormBuilder, nonXaMeta, nonXaNames, root, saveCallback, xaFormBuilder, xaMeta, xaNames;\n  HalViewImpl.call(this);\n  this.$init_907();\n  this.resources = resources;\n  saveCallback = new DataSourceView$lambda$0$Type(this);\n  nonXaMeta = castTo(metadataRegistry.lookup_1(($clinit_AddressTemplates_1() , DATA_SOURCE_TEMPLATE)), 23);\n  this.nonXaInfo = castTo(castTo(castTo((new Elements$Builder).p(), 3).textContent_0(nonXaMeta.getDescription_0().getDescription()), 3).end(), 3).build_2();\n  nonXaFormBuilder = (new GroupedForm$Builder(($clinit_Ids() , DATA_SOURCE_FORM), nonXaMeta)).onSave_0(saveCallback);\n  xaMeta = castTo(metadataRegistry.lookup_1(($clinit_AddressTemplates_1() , XA_DATA_SOURCE_TEMPLATE)), 23);\n  this.xaInfo = castTo(castTo(castTo((new Elements$Builder).p(), 3).textContent_0(xaMeta.getDescription_0().getDescription()), 3).end(), 3).build_2();\n  xaFormBuilder = (new GroupedForm$Builder(($clinit_Ids() , XA_DATA_SOURCE_FORM), xaMeta)).onSave_0(saveCallback);\n  for (group$iterator = attributes_0.keySet_0().iterator_0(); group$iterator.hasNext_0();) {\n    group = castToString(group$iterator.next_1());\n    groupId = asId(group);\n    groupAttributes = attributes_0.get_6(group);\n    nonXaNames = castTo(groupAttributes.stream().filter_0(new DataSourceView$lambda$1$Type).map_3(new DataSourceView$lambda$2$Type).collect_0(toList()), 13);\n    nonXaFormBuilder.group_0(groupId, group).include_0(nonXaNames).end_1();\n    xaNames = castTo(groupAttributes.stream().filter_0(new DataSourceView$lambda$3$Type).map_3(new DataSourceView$lambda$4$Type).collect_0(toList()), 13);\n    xaFormBuilder.group_0(groupId, group).include_0(xaNames).end_1();\n  }\n  this.nonXaForm = nonXaFormBuilder.build_14();\n  this.xaForm = xaFormBuilder.build_14();\n  layoutBuilder = castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo((new LayoutBuilder).row_0().column_2().header_1('Datasource').rememberAs('headerElement'), 8).end(), 8).add_10(this.nonXaInfo), 8).add_10(this.xaInfo), 8).add_10(this.nonXaForm.asElement_0()), 8).add_10(this.xaForm.asElement_0()), 8).end(), 8).end(), 8);\n  root = layoutBuilder.build_2();\n  this.header = layoutBuilder.referenceFor('headerElement');\n  this.registerAttachable(this.nonXaForm, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 10, 0, []));\n  this.registerAttachable(this.xaForm, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 10, 0, []));\n  this.initElement(root);\n}\n\nfunction lambda$1_49(attribute_0){\n  $clinit_DataSourceView();\n  return jsEquals(attribute_0.scope_0, ($clinit_Attribute$Scope() , BOTH)) || jsEquals(attribute_0.scope_0, ($clinit_Attribute$Scope() , NON_XA));\n}\n\nfunction lambda$2_37(attribute_0){\n  $clinit_DataSourceView();\n  return attribute_0.name_0;\n}\n\nfunction lambda$3_27(attribute_0){\n  $clinit_DataSourceView();\n  return jsEquals(attribute_0.scope_0, ($clinit_Attribute$Scope() , BOTH)) || jsEquals(attribute_0.scope_0, ($clinit_Attribute$Scope() , XA));\n}\n\nfunction lambda$4_23(attribute_0){\n  $clinit_DataSourceView();\n  return attribute_0.name_0;\n}\n\ndefineClass(1671, 63, {1:1, 28:1, 27:1, 3437:1, 48:1}, DataSourceView);\n_.$init_907 = function $init_907(){\n}\n;\n_.lambda$0_49 = function lambda$0_96(f_0, changedValues_1){\n  $clinit_DataSourceView();\n  this.presenter.saveDataSource(changedValues_1);\n}\n;\n_.setPresenter = function setPresenter_1(presenter){\n  this.setPresenter_1(castTo(presenter, 505));\n}\n;\n_.setPresenter_1 = function setPresenter_2(presenter){\n  this.presenter = presenter;\n}\n;\n_.showHide = function showHide(xa){\n  setVisible(this.nonXaInfo, !xa);\n  setVisible(this.xaInfo, xa);\n  setVisible(this.nonXaForm.asElement_0(), !xa);\n  setVisible(this.xaForm.asElement_0(), xa);\n}\n;\n_.update_10 = function update_16(dataSource){\n  this.showHide(dataSource.isXa());\n  $setInnerHTML_0(this.header, (new SafeHtmlBuilder).appendEscaped(dataSource.getName()).appendHtmlConstant('<small>').appendEscaped(' (').appendEscaped(dataSource.isEnabled()?this.resources.constants_0().enabled_1():this.resources.constants_0().disabled_1()).appendEscaped(')').appendHtmlConstant('<\\/small>').toSafeHtml().asString());\n  if (dataSource.isXa()) {\n    this.xaForm.view_0(dataSource);\n  }\n   else {\n    this.nonXaForm.view_0(dataSource);\n  }\n}\n;\nvar CONSTANTS_14, attributes_0;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView', 1671, Lorg_jboss_hal_core_mvp_HalViewImpl_2_classLit);\nfunction $clinit_DataSourceView$lambda$0$Type(){\n  $clinit_DataSourceView$lambda$0$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$0$Type($$outer_0){\n  $clinit_DataSourceView$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1672, 1, {1:1}, DataSourceView$lambda$0$Type);\n_.onSave = function onSave_7(arg0, arg1){\n  this.$$outer_0.lambda$0_49(arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$0$Type', 1672, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView$lambda$1$Type(){\n  $clinit_DataSourceView$lambda$1$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$1$Type(){\n  $clinit_DataSourceView$lambda$1$Type();\n}\n\ndefineClass(1673, 1, {1:1, 26:1}, DataSourceView$lambda$1$Type);\n_.and = function and_31(other){\n  return $and(this, other);\n}\n;\n_.negate_1 = function negate_38(){\n  return $negate(this);\n}\n;\n_.or_1 = function or_37(other){\n  return $or(this, other);\n}\n;\n_.test_0 = function test_30(arg0){\n  return lambda$1_49(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$1$Type', 1673, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView$lambda$2$Type(){\n  $clinit_DataSourceView$lambda$2$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$2$Type(){\n  $clinit_DataSourceView$lambda$2$Type();\n}\n\ndefineClass(1674, 1, {1:1}, DataSourceView$lambda$2$Type);\n_.apply_2 = function apply_90(arg0){\n  return lambda$2_37(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$2$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$2$Type', 1674, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView$lambda$3$Type(){\n  $clinit_DataSourceView$lambda$3$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$3$Type(){\n  $clinit_DataSourceView$lambda$3$Type();\n}\n\ndefineClass(1675, 1, {1:1, 26:1}, DataSourceView$lambda$3$Type);\n_.and = function and_32(other){\n  return $and(this, other);\n}\n;\n_.negate_1 = function negate_39(){\n  return $negate(this);\n}\n;\n_.or_1 = function or_38(other){\n  return $or(this, other);\n}\n;\n_.test_0 = function test_31(arg0){\n  return lambda$3_27(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$3$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$3$Type', 1675, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView$lambda$4$Type(){\n  $clinit_DataSourceView$lambda$4$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$4$Type(){\n  $clinit_DataSourceView$lambda$4$Type();\n}\n\ndefineClass(1676, 1, {1:1}, DataSourceView$lambda$4$Type);\n_.apply_2 = function apply_91(arg0){\n  return lambda$4_23(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$4$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$4$Type', 1676, Ljava_lang_Object_2_classLit);\ndefineClass(1073, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$MyView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$MyView$_annotation$$none$$(){\n  var result;\n  result = this.get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$();\n  return result;\n}\n;\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter_org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter_methodInjection(this.injector.getFragment_com_google_web_bindery_event_shared().get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$MyView$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$MyProxy$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core().get_Key$type$org$jboss$hal$core$CrudOperations$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$FinderPathFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$StatementContext$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$;\n}\n;\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView_org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView_methodInjection(this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$MetadataRegistry$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$(injectee){\n  this.injector.getFragment_com_gwtplatform_mvp_client().com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection__________(injectee, this.injector.getFragment_com_gwtplatform_mvp_client().get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$());\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter_org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter_methodInjection = function org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter_org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter_methodInjection(_0, _1, _2, _3, _4, _5, _6){\n  return new DataSourcePresenter(_0, _1, _2, _3, _4, _5, _6);\n}\n;\n_.org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView_org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView_methodInjection = function org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView_org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView_methodInjection(_0, _1){\n  return new DataSourceView(_0, _1);\n}\n;\ndefineClass(1075, 1, {57:1, 1:1});\n_.onSuccess_1 = function onSuccess_75(){\n  this.val$callback2.onSuccess_0(this.this$11.this$01.get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$());\n}\n;\ndefineClass(336, 1, {1:1});\n_.include_0 = function include_0(attributes){\n  this.assertCurrentGroup();\n  addAll_3(this.currentGroup.includes, attributes);\n  return this;\n}\n;\ndefineClass(123, 1, {1:1, 128:1});\n_.statements = function statements(){\n  return 'Statements';\n}\n;\n_.timeouts = function timeouts(){\n  return 'Timeouts';\n}\n;\n_.tracking = function tracking(){\n  return 'Tracking';\n}\n;\n$entry(onLoad)(11);\n\n//# sourceURL=hal-11.js\n")
