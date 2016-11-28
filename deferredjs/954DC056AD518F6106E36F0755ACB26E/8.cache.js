$wnd.hal.runAsyncCallback8("function newTreeSet(){\n  $clinit_Sets();\n  return new TreeSet;\n}\n\ndefineClass(1039, 1, {1:1});\n_.com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection________ = function com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection________(invokee, _0){\n  invokee.automaticBind(_0);\n}\n;\nfunction $clinit_BlacklistValidation(){\n  $clinit_BlacklistValidation = emptyMethod;\n  $clinit_Object();\n  MESSAGES_1 = castTo(new Messages_, 250);\n}\n\nfunction BlacklistValidation(first, rest){\n  $clinit_BlacklistValidation();\n  Object_0.call(this);\n  this.$init_670();\n  this.blacklist = newTreeSet();\n  this.blacklist.add_0(first);\n  if (jsNotEquals(rest, null)) {\n    this.blacklist.addAll(asList_3(rest));\n  }\n}\n\ndefineClass(3361, 1, {1:1, 342:1}, BlacklistValidation);\n_.$init_670 = function $init_670(){\n}\n;\n_.errorMessage_0 = function errorMessage_0(){\n  return MESSAGES_1.blacklist_0('\"' + on_1('\", \"').join_0(this.blacklist) + '\"');\n}\n;\n_.validate_0 = function validate_0(value_0){\n  if (jsEquals(value_0, null) || length__I__devirtual$_0(trim__Ljava_lang_String___devirtual$(valueOf_30(value_0))) == 0) {\n    return $clinit_ValidationResult() , OK;\n  }\n   else {\n    return this.blacklist.contains_0(value_0)?invalid_0(this.errorMessage_0()):($clinit_ValidationResult() , OK);\n  }\n}\n;\nvar MESSAGES_1;\nvar Lorg_jboss_hal_ballroom_form_BlacklistValidation_2_classLit = createForClass('org.jboss.hal.ballroom.form', 'BlacklistValidation', 3361, Ljava_lang_Object_2_classLit);\nfunction $clinit_PathsPresenter$MyView(){\n  $clinit_PathsPresenter$MyView = emptyMethod;\n}\n\nvar Lorg_jboss_hal_client_configuration_PathsPresenter$MyView_2_classLit = createForInterface('org.jboss.hal.client.configuration', 'PathsPresenter/MyView');\nfunction $clinit_PathsView(){\n  $clinit_PathsView = emptyMethod;\n  $clinit_MbuiViewImpl();\n  $clinit_HalView();\n}\n\nfunction PathsView(mbuiContext){\n  $clinit_PathsView();\n  MbuiViewImpl.call(this, mbuiContext);\n  this.$init_856();\n}\n\nfunction create_17(mbuiContext){\n  $clinit_PathsView();\n  return new Mbui_PathsView(mbuiContext);\n}\n\ndefineClass(2875, 142, {1:1, 28:1, 27:1, 785:1, 48:1});\n_.$init_856 = function $init_856(){\n}\n;\n_.update_9 = function update_15(paths){\n  this.form_0.clear_0();\n  this.table.update_24(paths);\n}\n;\nvar Lorg_jboss_hal_client_configuration_PathsView_2_classLit = createForClass('org.jboss.hal.client.configuration', 'PathsView', 2875, Lorg_jboss_hal_core_mbui_MbuiViewImpl_2_classLit);\nfunction $clinit_Mbui_PathsView(){\n  $clinit_Mbui_PathsView = emptyMethod;\n  $clinit_PathsView();\n}\n\nfunction Mbui_PathsView(mbuiContext){\n  $clinit_Mbui_PathsView();\n  var layoutBuilder, metadata1Template, root, tableOptions;\n  PathsView.call(this, mbuiContext);\n  this.$init_857();\n  metadata1Template = of_14('/path=*');\n  this.metadata1 = castTo(mbuiContext.metadataRegistry_1().lookup_1(metadata1Template), 23);\n  this.handlebarElements = new HashMap;\n  this.form_0 = (new ModelNodeForm$Builder('path-form', this.metadata1)).include_6('name', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['path', 'relative-to'])).unsorted_0().onSave_1(new Mbui_PathsView$lambda$0$Type(this, metadata1Template, mbuiContext)).build_15();\n  this.form_0.getFormItem('relative-to').registerSuggestHandler(new PathsAutoComplete);\n  tableOptions = castTo(castTo((new NamedNodeTable$Builder(this.metadata1)).button_3(mbuiContext.resources_8().constants_0().add_46(), makeLambdaFunction(Mbui_PathsView$lambda$1$Type.prototype.action_4, Mbui_PathsView$lambda$1$Type, [this, mbuiContext, metadata1Template])), 12).button_5(mbuiContext.tableButtonFactory_0().remove_18('Path', metadata1Template, new Mbui_PathsView$lambda$2$Type, makeLambdaFunction(Mbui_PathsView$lambda$3$Type.prototype.execute_0, Mbui_PathsView$lambda$3$Type, [this]))), 12).columns_2('name', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['path'])).build_8();\n  this.table = new NamedNodeTable('path-table', tableOptions);\n  layoutBuilder = castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo((new LayoutBuilder).row_0().column_2().div_0(), 8).innerHtml(fromSafeConstant('<h1>Paths<\\/h1><p>{{metadata1.getDescription().getDescription()}}<\\/p>')), 8).rememberAs('html2'), 8).end(), 8).add_12(this.table), 8).add_12(this.form_0), 8).end(), 8).end(), 8);\n  this.handlebarElements.put_0('html2', layoutBuilder.referenceFor('html2'));\n  this.registerAttachable(this.table, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 10, 0, []));\n  this.registerAttachable(this.form_0, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 10, 0, []));\n  root = layoutBuilder.build_2();\n  this.initElement(root);\n}\n\nfunction lambda$2_30(api_0){\n  $clinit_Mbui_PathsView();\n  return castTo($selectedRow(api_0), 17).getName();\n}\n\ndefineClass(2987, 2875, {1:1, 28:1, 27:1, 785:1, 48:1}, Mbui_PathsView);\n_.$init_857 = function $init_857(){\n}\n;\n_.lambda$0_42 = function lambda$0_83(metadata1Template_1, mbuiContext_2, form_2, changedValues_3){\n  $clinit_Mbui_PathsView();\n  var name_0;\n  {\n    name_0 = castTo(form_2.getModel(), 17).getName();\n    this.saveForm('Path', name_0, metadata1Template_1.resolve_3(mbuiContext_2.statementContext_6(), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [name_0])), changedValues_3);\n  }\n}\n;\n_.lambda$1_21 = function lambda$1_40(mbuiContext_1, metadata1Template_2, event_2, api_3){\n  $clinit_Mbui_PathsView();\n  var dialog;\n  {\n    dialog = new AddResourceDialog(build_21('path-table', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['add'])), mbuiContext_1.resources_8().messages_0().addResourceTitle('Path'), this.metadata1, asList_3(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['name', 'path', 'relative-to'])), new Mbui_PathsView$lambda$4$Type(this, metadata1Template_2, mbuiContext_1));\n    dialog.getForm().getFormItem('name').addValidationHandler(new BlacklistValidation('jboss.home', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['user.home', 'user.dir', 'java.home', 'jboss.server.base.dir'])));\n    dialog.getForm().getFormItem('relative-to').registerSuggestHandler(new PathsAutoComplete);\n    dialog.show_0();\n  }\n}\n;\n_.lambda$3_13 = function lambda$3_22(){\n  $clinit_Mbui_PathsView();\n  castTo(this.presenter, 425).reload_0();\n}\n;\n_.lambda$4_12 = function lambda$4_18(metadata1Template_1, mbuiContext_2, name_2, modelNode_3){\n  $clinit_Mbui_PathsView();\n  var address;\n  {\n    address = metadata1Template_1.resolve_3(mbuiContext_2.statementContext_6(), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [name_2]));\n    mbuiContext_2.crud_4().add_27('Path', name_2, address, modelNode_3, new Mbui_PathsView$lambda$5$Type(this));\n  }\n}\n;\n_.lambda$5_6 = function lambda$5_12(n_0, a_1){\n  $clinit_Mbui_PathsView();\n  castTo(this.presenter, 425).reload_0();\n}\n;\n_.attach = function attach_16(){\n  getClassPrototype(63).attach.call(this);\n  this.table.bindForm(this.form_0);\n  replaceHandlebar(castToJso(this.handlebarElements.get_3('html2')), '{{metadata1.getDescription().getDescription()}}', valueOf_30(this.metadata1.getDescription_0().getDescription()));\n}\n;\nvar Lorg_jboss_hal_client_configuration_Mbui_1PathsView_2_classLit = createForClass('org.jboss.hal.client.configuration', 'Mbui_PathsView', 2987, Lorg_jboss_hal_client_configuration_PathsView_2_classLit);\nfunction $clinit_Mbui_PathsView$lambda$0$Type(){\n  $clinit_Mbui_PathsView$lambda$0$Type = emptyMethod;\n}\n\nfunction Mbui_PathsView$lambda$0$Type($$outer_0, metadata1Template_1, mbuiContext_2){\n  $clinit_Mbui_PathsView$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n  this.metadata1Template_1 = metadata1Template_1;\n  this.mbuiContext_2 = mbuiContext_2;\n}\n\ndefineClass(2988, 1, {1:1}, Mbui_PathsView$lambda$0$Type);\n_.onSave = function onSave_1(arg0, arg1){\n  this.$$outer_0.lambda$0_42(this.metadata1Template_1, this.mbuiContext_2, arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_Mbui_1PathsView$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration', 'Mbui_PathsView/lambda$0$Type', 2988, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_PathsView$lambda$1$Type(){\n  $clinit_Mbui_PathsView$lambda$1$Type = emptyMethod;\n}\n\nfunction Mbui_PathsView$lambda$1$Type($$outer_0, mbuiContext_1, metadata1Template_2){\n  $clinit_Mbui_PathsView$lambda$1$Type();\n  this.$$outer_0 = $$outer_0;\n  this.mbuiContext_1 = mbuiContext_1;\n  this.metadata1Template_2 = metadata1Template_2;\n}\n\ndefineClass(4516, $wnd.Function, {1:1}, Mbui_PathsView$lambda$1$Type);\n_.action_4 = function action_6(arg0, arg1){\n  this.$$outer_0.lambda$1_21(this.mbuiContext_1, this.metadata1Template_2, arg0, arg1);\n}\n;\nfunction $clinit_Mbui_PathsView$lambda$2$Type(){\n  $clinit_Mbui_PathsView$lambda$2$Type = emptyMethod;\n}\n\nfunction Mbui_PathsView$lambda$2$Type(){\n  $clinit_Mbui_PathsView$lambda$2$Type();\n}\n\ndefineClass(2991, 1, {1:1}, Mbui_PathsView$lambda$2$Type);\n_.apply_2 = function apply_79(arg0){\n  return lambda$2_30(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_Mbui_1PathsView$lambda$2$Type_2_classLit = createForClass('org.jboss.hal.client.configuration', 'Mbui_PathsView/lambda$2$Type', 2991, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_PathsView$lambda$3$Type(){\n  $clinit_Mbui_PathsView$lambda$3$Type = emptyMethod;\n}\n\nfunction Mbui_PathsView$lambda$3$Type($$outer_0){\n  $clinit_Mbui_PathsView$lambda$3$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(4517, $wnd.Function, {1:1}, Mbui_PathsView$lambda$3$Type);\n_.execute_0 = function execute_75(){\n  this.$$outer_0.lambda$3_13();\n}\n;\nfunction $clinit_Mbui_PathsView$lambda$4$Type(){\n  $clinit_Mbui_PathsView$lambda$4$Type = emptyMethod;\n}\n\nfunction Mbui_PathsView$lambda$4$Type($$outer_0, metadata1Template_1, mbuiContext_2){\n  $clinit_Mbui_PathsView$lambda$4$Type();\n  this.$$outer_0 = $$outer_0;\n  this.metadata1Template_1 = metadata1Template_1;\n  this.mbuiContext_2 = mbuiContext_2;\n}\n\ndefineClass(2990, 1, {1:1}, Mbui_PathsView$lambda$4$Type);\n_.onAdd = function onAdd_1(arg0, arg1){\n  this.$$outer_0.lambda$4_12(this.metadata1Template_1, this.mbuiContext_2, arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_Mbui_1PathsView$lambda$4$Type_2_classLit = createForClass('org.jboss.hal.client.configuration', 'Mbui_PathsView/lambda$4$Type', 2990, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_PathsView$lambda$5$Type(){\n  $clinit_Mbui_PathsView$lambda$5$Type = emptyMethod;\n}\n\nfunction Mbui_PathsView$lambda$5$Type($$outer_0){\n  $clinit_Mbui_PathsView$lambda$5$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2989, 1, {1:1}, Mbui_PathsView$lambda$5$Type);\n_.execute_10 = function execute_76(arg0, arg1){\n  this.$$outer_0.lambda$5_6(arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_Mbui_1PathsView$lambda$5$Type_2_classLit = createForClass('org.jboss.hal.client.configuration', 'Mbui_PathsView/lambda$5$Type', 2989, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_PathsView_Provider(){\n  $clinit_Mbui_PathsView_Provider = emptyMethod;\n  $clinit_Object();\n}\n\nfunction Mbui_PathsView_Provider(mbuiContext){\n  $clinit_Mbui_PathsView_Provider();\n  Object_0.call(this);\n  this.$init_858();\n  this.mbuiContext = mbuiContext;\n}\n\ndefineClass(2874, 1, {1:1, 61:1}, Mbui_PathsView_Provider);\n_.$init_858 = function $init_858(){\n}\n;\n_.get_0 = function get_91(){\n  return this.get_23();\n}\n;\n_.get_23 = function get_92(){\n  return create_17(this.mbuiContext);\n}\n;\nvar Lorg_jboss_hal_client_configuration_Mbui_1PathsView_1Provider_2_classLit = createForClass('org.jboss.hal.client.configuration', 'Mbui_PathsView_Provider', 2874, Ljava_lang_Object_2_classLit);\nfunction $clinit_PathsPresenter(){\n  $clinit_PathsPresenter = emptyMethod;\n  $clinit_MbuiPresenter();\n}\n\nfunction PathsPresenter(eventBus, view, proxy, finder, crud){\n  $clinit_PathsPresenter();\n  MbuiPresenter.call(this, eventBus, view, proxy, finder);\n  this.$init_861();\n  this.crud = crud;\n}\n\ndefineClass(425, 86, {58:1, 45:1, 1:1, 28:1, 27:1, 425:1, 86:1, 97:1}, PathsPresenter);\n_.$init_861 = function $init_861(){\n}\n;\n_.lambda$0_43 = function lambda$0_85(children_0){\n  $clinit_PathsPresenter();\n  castTo(this.getView(), 785).update_9(asNamedNodes(children_0));\n}\n;\n_.finderPath = function finderPath_1(){\n  return (new FinderPath).append_19('configuration', asId('Paths'), 'Configuration', 'Paths');\n}\n;\n_.onBind = function onBind_4(){\n  getClassPrototype(78).onBind.call(this);\n  castTo(this.getView(), 785).setPresenter(this);\n}\n;\n_.reload_0 = function reload_2(){\n  this.crud.readChildren_1(root_7(), 'path', new PathsPresenter$lambda$0$Type(this));\n}\n;\nvar Lorg_jboss_hal_client_configuration_PathsPresenter_2_classLit = createForClass('org.jboss.hal.client.configuration', 'PathsPresenter', 425, Lorg_jboss_hal_core_mbui_MbuiPresenter_2_classLit);\nfunction $clinit_PathsPresenter$lambda$0$Type(){\n  $clinit_PathsPresenter$lambda$0$Type = emptyMethod;\n}\n\nfunction PathsPresenter$lambda$0$Type($$outer_0){\n  $clinit_PathsPresenter$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1283, 1, {1:1}, PathsPresenter$lambda$0$Type);\n_.execute_8 = function execute_77(arg0){\n  this.$$outer_0.lambda$0_43(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_PathsPresenter$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration', 'PathsPresenter/lambda$0$Type', 1283, Ljava_lang_Object_2_classLit);\ndefineClass(1059, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$configuration$Mbui_PathsView_Provider$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$Mbui_PathsView_Provider$_annotation$$none$$(){\n  var result;\n  result = this.org$jboss$hal$client$configuration$Mbui_PathsView_Provider_org$jboss$hal$client$configuration$Mbui_PathsView_Provider_methodInjection(this.injector.getFragment_org_jboss_hal_core_mbui().get_Key$type$org$jboss$hal$core$mbui$MbuiContext$_annotation$$none$$());\n  this.memberInject_Key$type$org$jboss$hal$client$configuration$Mbui_PathsView_Provider$_annotation$$none$$(result);\n  return result;\n}\n;\n_.get_Key$type$org$jboss$hal$client$configuration$PathsPresenter$MyView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$PathsPresenter$MyView$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$configuration$PathsPresenter$MyView$_annotation$$none$$)) {\n    result = this.get_Key$type$org$jboss$hal$client$configuration$Mbui_PathsView_Provider$_annotation$$none$$().get_23();\n    this.singleton_Key$type$org$jboss$hal$client$configuration$PathsPresenter$MyView$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$configuration$PathsPresenter$MyView$_annotation$$none$$;\n}\n;\n_.get_Key$type$org$jboss$hal$client$configuration$PathsPresenter$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$PathsPresenter$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$configuration$PathsPresenter$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$configuration$PathsPresenter_org$jboss$hal$client$configuration$PathsPresenter_methodInjection(this.injector.getFragment_com_google_web_bindery_event_shared().get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$configuration$PathsPresenter$MyView$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$configuration$PathsPresenter$MyProxy$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core().get_Key$type$org$jboss$hal$core$CrudOperations$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$configuration$PathsPresenter$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$configuration$PathsPresenter$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$configuration$PathsPresenter$_annotation$$none$$;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$Mbui_PathsView_Provider$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$Mbui_PathsView_Provider$_annotation$$none$$(injectee){\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$PathsPresenter$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$PathsPresenter$_annotation$$none$$(injectee){\n  this.injector.getFragment_com_gwtplatform_mvp_client().com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection________(injectee, this.injector.getFragment_com_gwtplatform_mvp_client().get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$());\n}\n;\n_.org$jboss$hal$client$configuration$Mbui_PathsView_Provider_org$jboss$hal$client$configuration$Mbui_PathsView_Provider_methodInjection = function org$jboss$hal$client$configuration$Mbui_PathsView_Provider_org$jboss$hal$client$configuration$Mbui_PathsView_Provider_methodInjection(_0){\n  return new Mbui_PathsView_Provider(_0);\n}\n;\n_.org$jboss$hal$client$configuration$PathsPresenter_org$jboss$hal$client$configuration$PathsPresenter_methodInjection = function org$jboss$hal$client$configuration$PathsPresenter_org$jboss$hal$client$configuration$PathsPresenter_methodInjection(_0, _1, _2, _3, _4){\n  return new PathsPresenter(_0, _1, _2, _3, _4);\n}\n;\ndefineClass(1064, 1, {57:1, 1:1});\n_.onSuccess_1 = function onSuccess_56(){\n  this.val$callback2.onSuccess_0(this.this$11.this$01.get_Key$type$org$jboss$hal$client$configuration$PathsPresenter$_annotation$$none$$());\n}\n;\ndefineClass(213, 1, {1:1, 250:1});\n_.blacklist_0 = function blacklist(arg0){\n  return 'Value must not be one of ' + arg0 + '.';\n}\n;\n$entry(onLoad)(8);\n\n//# sourceURL=hal-8.js\n")
