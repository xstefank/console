$wnd.hal.runAsyncCallback27("defineClass(1040, 1, {1:1});\n_.com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection______________________ = function com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection______________________(invokee, _0){\n  invokee.automaticBind(_0);\n}\n;\nfunction $clinit_ModclusterPresenter$MyView(){\n  $clinit_ModclusterPresenter$MyView = emptyMethod;\n}\n\nvar Lorg_jboss_hal_client_configuration_subsystem_modcluster_ModclusterPresenter$MyView_2_classLit = createForInterface('org.jboss.hal.client.configuration.subsystem.modcluster', 'ModclusterPresenter/MyView');\nfunction $clinit_ModclusterView(){\n  $clinit_ModclusterView = emptyMethod;\n  $clinit_MbuiViewImpl();\n  $clinit_HalView();\n}\n\nfunction ModclusterView(mbuiContext){\n  $clinit_ModclusterView();\n  MbuiViewImpl.call(this, mbuiContext);\n  this.$init_1048();\n}\n\nfunction create_26(mbuiContext){\n  $clinit_ModclusterView();\n  return new Mbui_ModclusterView(mbuiContext);\n}\n\ndefineClass(2902, 142, {1:1, 28:1, 27:1, 790:1, 48:1});\n_.$init_1048 = function $init_1048(){\n}\n;\n_.updateConfiguration = function updateConfiguration_0(payload){\n  this.configurationForm.view_0(payload);\n  this.sslForm.view_3(failSafeGet(payload, 'ssl/configuration'));\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_modcluster_ModclusterView_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.modcluster', 'ModclusterView', 2902, Lorg_jboss_hal_core_mbui_MbuiViewImpl_2_classLit);\nfunction $clinit_Mbui_ModclusterView(){\n  $clinit_Mbui_ModclusterView = emptyMethod;\n  $clinit_ModclusterView();\n}\n\nfunction Mbui_ModclusterView(mbuiContext){\n  $clinit_Mbui_ModclusterView();\n  var failSafe_sslForm, layoutBuilder, metadata49Template, metadata50Template, modclusterConfigurationItemBuilder, modclusterConfigurationItemElement, modclusterSslItemBuilder, modclusterSslItemElement, root;\n  ModclusterView.call(this, mbuiContext);\n  this.$init_1049();\n  metadata49Template = of_14('/{selected.profile}/subsystem=modcluster/mod-cluster-config=configuration');\n  this.metadata49 = castTo(mbuiContext.metadataRegistry_1().lookup_1(metadata49Template), 23);\n  metadata50Template = of_14('/{selected.profile}/subsystem=modcluster/mod-cluster-config=configuration/ssl=configuration');\n  this.metadata50 = castTo(mbuiContext.metadataRegistry_1().lookup_1(metadata50Template), 23);\n  this.handlebarElements = new HashMap;\n  this.configurationForm = (new GroupedForm$Builder('modcluster-configuration', this.metadata49)).group_0('advertising', 'Advertising').include_4('connector', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['load-balancing-group', 'balancer', 'advertise-socket', 'advertise-security-key', 'advertise'])).end_1().group_0('sessions', 'Sessions').include_4('sticky-session', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['sticky-session-force', 'sticky-session-remove'])).end_1().group_0('web-contexts', 'Web Contexts').include_4('auto-enable-context', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['excluded-contexts'])).end_1().group_0('proxies', 'Proxies').include_4('proxy-url', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['proxies'])).end_1().group_0('networking', 'Networking').include_4('node-timeout', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['socket-timeout', 'stop-context-timeout', 'max-attempts', 'flush-packets', 'flush-wait', 'ping', 'ttl', 'worker-timeout'])).end_1().onSave_0(new Mbui_ModclusterView$lambda$0$Type(this, metadata49Template, mbuiContext)).build_14();\n  failSafe_sslForm = (new ModelNodeForm$Builder(build_21('modcluster-ssl-form', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['form'])), this.metadata50)).include_6('key-alias', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['password', 'ca-certificate-file', 'certificate-key-file', 'cipher-suite', 'ca-revocation-url', 'protocol'])).unsorted_0().onSave_1(new Mbui_ModclusterView$lambda$1$Type(this, metadata50Template, mbuiContext)).build_15();\n  this.sslForm = new FailSafeForm_0(mbuiContext.dispatcher_5(), new Mbui_ModclusterView$lambda$2$Type(metadata50Template, mbuiContext), failSafe_sslForm, makeLambdaFunction(Mbui_ModclusterView$lambda$3$Type.prototype.execute_0, Mbui_ModclusterView$lambda$3$Type, [this, metadata50Template]));\n  this.navigation = new VerticalNavigation;\n  modclusterConfigurationItemBuilder = castTo(castTo(castTo(castTo(castTo(castTo(castTo((new Elements$Builder).div_0(), 3).div_0(), 3).innerHtml(fromSafeConstant('<h1>Configuration<\\/h1><p>{{metadata49.getDescription().getDescription()}}<\\/p>')), 3).rememberAs('html140'), 3).end(), 3).add_12(this.configurationForm), 3).end(), 3);\n  modclusterConfigurationItemElement = modclusterConfigurationItemBuilder.build_2();\n  this.handlebarElements.put_0('html140', modclusterConfigurationItemBuilder.referenceFor('html140'));\n  this.navigation.addPrimary_0('modcluster-configuration-item', 'Configuration', 'pficon pficon-settings', modclusterConfigurationItemElement);\n  modclusterSslItemBuilder = castTo(castTo(castTo(castTo(castTo(castTo(castTo((new Elements$Builder).div_0(), 3).div_0(), 3).innerHtml(fromSafeConstant('<h1>SSL<\\/h1><p>{{metadata50.getDescription().getDescription()}}<\\/p>')), 3).rememberAs('html142'), 3).end(), 3).add_12(this.sslForm), 3).end(), 3);\n  modclusterSslItemElement = modclusterSslItemBuilder.build_2();\n  this.handlebarElements.put_0('html142', modclusterSslItemBuilder.referenceFor('html142'));\n  this.navigation.addPrimary_0('modcluster-ssl-item', 'SSL', 'fa fa-lock', modclusterSslItemElement);\n  layoutBuilder = castTo(castTo(castTo((new LayoutBuilder).row_0().column_2().addAll_0(this.navigation.panes_0()), 8).end(), 8).end(), 8);\n  this.registerAttachable(this.navigation, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 10, 0, []));\n  this.registerAttachable(this.configurationForm, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 10, 0, []));\n  this.registerAttachable(this.sslForm, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 10, 0, []));\n  root = layoutBuilder.build_2();\n  this.initElement(root);\n}\n\nfunction lambda$2_60(metadata50Template_0, mbuiContext_1){\n  $clinit_Mbui_ModclusterView();\n  return (new Operation$Builder('read-resource', metadata50Template_0.resolve_3(mbuiContext_1.statementContext_6(), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [])))).build_17();\n}\n\ndefineClass(3113, 2902, {1:1, 28:1, 27:1, 790:1, 48:1}, Mbui_ModclusterView);\n_.$init_1049 = function $init_1049(){\n}\n;\n_.lambda$0_80 = function lambda$0_139(metadata49Template_1, mbuiContext_2, form_2, changedValues_3){\n  $clinit_Mbui_ModclusterView();\n  this.saveSingletonForm('Configuration', metadata49Template_1.resolve_3(mbuiContext_2.statementContext_6(), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [])), changedValues_3);\n}\n;\n_.lambda$1_44 = function lambda$1_78(metadata50Template_1, mbuiContext_2, form_2, changedValues_3){\n  $clinit_Mbui_ModclusterView();\n  this.saveSingletonForm('SSL', metadata50Template_1.resolve_3(mbuiContext_2.statementContext_6(), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [])), changedValues_3);\n}\n;\n_.lambda$3_26 = function lambda$3_46(metadata50Template_1){\n  $clinit_Mbui_ModclusterView();\n  this.addSingleton('modcluster-ssl-form', 'SSL', metadata50Template_1);\n}\n;\n_.attach = function attach_29(){\n  getClassPrototype(63).attach.call(this);\n  replaceHandlebar(castToJso(this.handlebarElements.get_3('html140')), '{{metadata49.getDescription().getDescription()}}', valueOf_30(this.metadata49.getDescription_0().getDescription()));\n  replaceHandlebar(castToJso(this.handlebarElements.get_3('html142')), '{{metadata50.getDescription().getDescription()}}', valueOf_30(this.metadata50.getDescription_0().getDescription()));\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_modcluster_Mbui_1ModclusterView_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.modcluster', 'Mbui_ModclusterView', 3113, Lorg_jboss_hal_client_configuration_subsystem_modcluster_ModclusterView_2_classLit);\nfunction $clinit_Mbui_ModclusterView$lambda$0$Type(){\n  $clinit_Mbui_ModclusterView$lambda$0$Type = emptyMethod;\n}\n\nfunction Mbui_ModclusterView$lambda$0$Type($$outer_0, metadata49Template_1, mbuiContext_2){\n  $clinit_Mbui_ModclusterView$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n  this.metadata49Template_1 = metadata49Template_1;\n  this.mbuiContext_2 = mbuiContext_2;\n}\n\ndefineClass(3114, 1, {1:1}, Mbui_ModclusterView$lambda$0$Type);\n_.onSave = function onSave_69(arg0, arg1){\n  this.$$outer_0.lambda$0_80(this.metadata49Template_1, this.mbuiContext_2, arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_modcluster_Mbui_1ModclusterView$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.modcluster', 'Mbui_ModclusterView/lambda$0$Type', 3114, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_ModclusterView$lambda$1$Type(){\n  $clinit_Mbui_ModclusterView$lambda$1$Type = emptyMethod;\n}\n\nfunction Mbui_ModclusterView$lambda$1$Type($$outer_0, metadata50Template_1, mbuiContext_2){\n  $clinit_Mbui_ModclusterView$lambda$1$Type();\n  this.$$outer_0 = $$outer_0;\n  this.metadata50Template_1 = metadata50Template_1;\n  this.mbuiContext_2 = mbuiContext_2;\n}\n\ndefineClass(3115, 1, {1:1}, Mbui_ModclusterView$lambda$1$Type);\n_.onSave = function onSave_70(arg0, arg1){\n  this.$$outer_0.lambda$1_44(this.metadata50Template_1, this.mbuiContext_2, arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_modcluster_Mbui_1ModclusterView$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.modcluster', 'Mbui_ModclusterView/lambda$1$Type', 3115, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_ModclusterView$lambda$2$Type(){\n  $clinit_Mbui_ModclusterView$lambda$2$Type = emptyMethod;\n}\n\nfunction Mbui_ModclusterView$lambda$2$Type(metadata50Template_0, mbuiContext_1){\n  $clinit_Mbui_ModclusterView$lambda$2$Type();\n  this.metadata50Template_0 = metadata50Template_0;\n  this.mbuiContext_1 = mbuiContext_1;\n}\n\ndefineClass(3116, 1, {1:1}, Mbui_ModclusterView$lambda$2$Type);\n_.get_0 = function get_159(){\n  return lambda$2_60(this.metadata50Template_0, this.mbuiContext_1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_modcluster_Mbui_1ModclusterView$lambda$2$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.modcluster', 'Mbui_ModclusterView/lambda$2$Type', 3116, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_ModclusterView$lambda$3$Type(){\n  $clinit_Mbui_ModclusterView$lambda$3$Type = emptyMethod;\n}\n\nfunction Mbui_ModclusterView$lambda$3$Type($$outer_0, metadata50Template_1){\n  $clinit_Mbui_ModclusterView$lambda$3$Type();\n  this.$$outer_0 = $$outer_0;\n  this.metadata50Template_1 = metadata50Template_1;\n}\n\ndefineClass(4600, $wnd.Function, {1:1}, Mbui_ModclusterView$lambda$3$Type);\n_.execute_0 = function execute_196(){\n  this.$$outer_0.lambda$3_26(this.metadata50Template_1);\n}\n;\nfunction $clinit_Mbui_ModclusterView_Provider(){\n  $clinit_Mbui_ModclusterView_Provider = emptyMethod;\n  $clinit_Object();\n}\n\nfunction Mbui_ModclusterView_Provider(mbuiContext){\n  $clinit_Mbui_ModclusterView_Provider();\n  Object_0.call(this);\n  this.$init_1050();\n  this.mbuiContext = mbuiContext;\n}\n\ndefineClass(2901, 1, {1:1, 61:1}, Mbui_ModclusterView_Provider);\n_.$init_1050 = function $init_1050(){\n}\n;\n_.get_0 = function get_160(){\n  return this.get_39();\n}\n;\n_.get_39 = function get_161(){\n  return create_26(this.mbuiContext);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_modcluster_Mbui_1ModclusterView_1Provider_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.modcluster', 'Mbui_ModclusterView_Provider', 2901, Ljava_lang_Object_2_classLit);\nfunction $clinit_ModclusterPresenter(){\n  $clinit_ModclusterPresenter = emptyMethod;\n  $clinit_MbuiPresenter();\n  ROOT_TEMPLATE_4 = of_14('/{selected.profile}/subsystem=modcluster/mod-cluster-config=configuration');\n}\n\nfunction ModclusterPresenter(eventBus, view, myProxy, finder, crud, finderPathFactory, statementContext){\n  $clinit_ModclusterPresenter();\n  MbuiPresenter.call(this, eventBus, view, myProxy, finder);\n  this.$init_1051();\n  this.crud = crud;\n  this.finderPathFactory = finderPathFactory;\n  this.statementContext = statementContext;\n}\n\ndefineClass(1317, 86, {58:1, 45:1, 1:1, 28:1, 27:1, 86:1, 130:1, 97:1}, ModclusterPresenter);\n_.$init_1051 = function $init_1051(){\n}\n;\n_.lambda$0_81 = function lambda$0_140(result_0){\n  $clinit_ModclusterPresenter();\n  castTo(this.getView(), 790).updateConfiguration(result_0);\n}\n;\n_.finderPath = function finderPath_15(){\n  return this.finderPathFactory.subsystemPath('modcluster');\n}\n;\n_.onBind = function onBind_18(){\n  getClassPrototype(78).onBind.call(this);\n  castTo(this.getView(), 790).setPresenter(this);\n}\n;\n_.reload_0 = function reload_16(){\n  this.crud.read_3(ROOT_TEMPLATE_4, 2, new ModclusterPresenter$lambda$0$Type(this));\n}\n;\n_.resourceAddress = function resourceAddress_14(){\n  return ROOT_TEMPLATE_4.resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, []));\n}\n;\nvar ROOT_TEMPLATE_4;\nvar Lorg_jboss_hal_client_configuration_subsystem_modcluster_ModclusterPresenter_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.modcluster', 'ModclusterPresenter', 1317, Lorg_jboss_hal_core_mbui_MbuiPresenter_2_classLit);\nfunction $clinit_ModclusterPresenter$lambda$0$Type(){\n  $clinit_ModclusterPresenter$lambda$0$Type = emptyMethod;\n}\n\nfunction ModclusterPresenter$lambda$0$Type($$outer_0){\n  $clinit_ModclusterPresenter$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1318, 1, {1:1}, ModclusterPresenter$lambda$0$Type);\n_.execute_9 = function execute_197(arg0){\n  this.$$outer_0.lambda$0_81(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_modcluster_ModclusterPresenter$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.modcluster', 'ModclusterPresenter/lambda$0$Type', 1318, Ljava_lang_Object_2_classLit);\ndefineClass(1119, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$modcluster$Mbui_ModclusterView_Provider$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$modcluster$Mbui_ModclusterView_Provider$_annotation$$none$$(){\n  var result;\n  result = this.org$jboss$hal$client$configuration$subsystem$modcluster$Mbui_ModclusterView_Provider_org$jboss$hal$client$configuration$subsystem$modcluster$Mbui_ModclusterView_Provider_methodInjection(this.injector.getFragment_org_jboss_hal_core_mbui().get_Key$type$org$jboss$hal$core$mbui$MbuiContext$_annotation$$none$$());\n  this.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$modcluster$Mbui_ModclusterView_Provider$_annotation$$none$$(result);\n  return result;\n}\n;\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$modcluster$ModclusterPresenter$MyView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$modcluster$ModclusterPresenter$MyView$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$modcluster$ModclusterPresenter$MyView$_annotation$$none$$)) {\n    result = this.get_Key$type$org$jboss$hal$client$configuration$subsystem$modcluster$Mbui_ModclusterView_Provider$_annotation$$none$$().get_39();\n    this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$modcluster$ModclusterPresenter$MyView$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$modcluster$ModclusterPresenter$MyView$_annotation$$none$$;\n}\n;\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$modcluster$ModclusterPresenter$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$modcluster$ModclusterPresenter$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$modcluster$ModclusterPresenter$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$configuration$subsystem$modcluster$ModclusterPresenter_org$jboss$hal$client$configuration$subsystem$modcluster$ModclusterPresenter_methodInjection(this.injector.getFragment_com_google_web_bindery_event_shared().get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$configuration$subsystem$modcluster$ModclusterPresenter$MyView$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$configuration$subsystem$modcluster$ModclusterPresenter$MyProxy$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core().get_Key$type$org$jboss$hal$core$CrudOperations$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$FinderPathFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$StatementContext$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$modcluster$ModclusterPresenter$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$modcluster$ModclusterPresenter$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$modcluster$ModclusterPresenter$_annotation$$none$$;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$modcluster$Mbui_ModclusterView_Provider$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$modcluster$Mbui_ModclusterView_Provider$_annotation$$none$$(injectee){\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$modcluster$ModclusterPresenter$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$modcluster$ModclusterPresenter$_annotation$$none$$(injectee){\n  this.injector.getFragment_com_gwtplatform_mvp_client().com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection______________________(injectee, this.injector.getFragment_com_gwtplatform_mvp_client().get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$());\n}\n;\n_.org$jboss$hal$client$configuration$subsystem$modcluster$Mbui_ModclusterView_Provider_org$jboss$hal$client$configuration$subsystem$modcluster$Mbui_ModclusterView_Provider_methodInjection = function org$jboss$hal$client$configuration$subsystem$modcluster$Mbui_ModclusterView_Provider_org$jboss$hal$client$configuration$subsystem$modcluster$Mbui_ModclusterView_Provider_methodInjection(_0){\n  return new Mbui_ModclusterView_Provider(_0);\n}\n;\n_.org$jboss$hal$client$configuration$subsystem$modcluster$ModclusterPresenter_org$jboss$hal$client$configuration$subsystem$modcluster$ModclusterPresenter_methodInjection = function org$jboss$hal$client$configuration$subsystem$modcluster$ModclusterPresenter_org$jboss$hal$client$configuration$subsystem$modcluster$ModclusterPresenter_methodInjection(_0, _1, _2, _3, _4, _5, _6){\n  return new ModclusterPresenter(_0, _1, _2, _3, _4, _5, _6);\n}\n;\ndefineClass(1121, 1, {57:1, 1:1});\n_.onSuccess_1 = function onSuccess_107(){\n  this.val$callback2.onSuccess_0(this.this$11.this$01.get_Key$type$org$jboss$hal$client$configuration$subsystem$modcluster$ModclusterPresenter$_annotation$$none$$());\n}\n;\n$entry(onLoad)(27);\n\n//# sourceURL=hal-27.js\n")
