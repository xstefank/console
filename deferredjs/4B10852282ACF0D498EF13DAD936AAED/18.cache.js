$wnd.hal.runAsyncCallback18("defineClass(1040, 1, {1:1});\n_.com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_______________ = function com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_______________(invokee, _0){\n  invokee.automaticBind(_0);\n}\n;\nfunction $clinit_AddressTemplates_5(){\n  $clinit_AddressTemplates_5 = emptyMethod;\n  BUFFER_POOL_ADDRESS = '/{selected.profile}/subsystem=io' + '/buffer-pool=*';\n  WORKER_ADDRESS = '/{selected.profile}/subsystem=io' + '/worker=*';\n  IO_SUBSYSTEM_TEMPLATE = of_14('/{selected.profile}/subsystem=io');\n  BUFFER_POOL_TEMPLATE = of_14('/{selected.profile}/subsystem=io/buffer-pool=*');\n  WORKER_TEMPLATE = of_14('/{selected.profile}/subsystem=io/worker=*');\n}\n\nvar BUFFER_POOL_ADDRESS, BUFFER_POOL_TEMPLATE, IO_SUBSYSTEM_TEMPLATE, WORKER_ADDRESS, WORKER_TEMPLATE;\nfunction $clinit_IOPresenter(){\n  $clinit_IOPresenter = emptyMethod;\n  $clinit_MbuiPresenter();\n}\n\nfunction IOPresenter(eventBus, view, proxy, finder, crud, finderPathFactory, statementContext){\n  $clinit_IOPresenter();\n  MbuiPresenter.call(this, eventBus, view, proxy, finder);\n  this.$init_965();\n  this.crud = crud;\n  this.finderPathFactory = finderPathFactory;\n  this.statementContext = statementContext;\n}\n\ndefineClass(310, 86, {58:1, 45:1, 1:1, 28:1, 27:1, 310:1, 86:1, 130:1, 97:1}, IOPresenter);\n_.$init_965 = function $init_965(){\n}\n;\n_.lambda$0_62 = function lambda$0_114(result_0){\n  $clinit_IOPresenter();\n  {\n    castTo(this.getView(), 650).updateBufferPool(asNamedNodes(failSafePropertyList(result_0, ($clinit_AddressTemplates_5() , BUFFER_POOL_TEMPLATE).lastKey())));\n    castTo(this.getView(), 650).updateWorkers(asNamedNodes(failSafePropertyList(result_0, ($clinit_AddressTemplates_5() , WORKER_TEMPLATE).lastKey())));\n  }\n}\n;\n_.finderPath = function finderPath_8(){\n  return this.finderPathFactory.subsystemPath('io');\n}\n;\n_.onBind = function onBind_11(){\n  getClassPrototype(78).onBind.call(this);\n  castTo(this.getView(), 650).setPresenter(this);\n}\n;\n_.reload_0 = function reload_9(){\n  this.crud.read_3(($clinit_AddressTemplates_5() , IO_SUBSYSTEM_TEMPLATE), 2, new IOPresenter$lambda$0$Type(this));\n}\n;\n_.resourceAddress = function resourceAddress_7(){\n  return ($clinit_AddressTemplates_5() , IO_SUBSYSTEM_TEMPLATE).resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, []));\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_io_IOPresenter_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.io', 'IOPresenter', 310, Lorg_jboss_hal_core_mbui_MbuiPresenter_2_classLit);\nfunction $clinit_IOPresenter$MyView(){\n  $clinit_IOPresenter$MyView = emptyMethod;\n}\n\nvar Lorg_jboss_hal_client_configuration_subsystem_io_IOPresenter$MyView_2_classLit = createForInterface('org.jboss.hal.client.configuration.subsystem.io', 'IOPresenter/MyView');\nfunction $clinit_IOPresenter$lambda$0$Type(){\n  $clinit_IOPresenter$lambda$0$Type = emptyMethod;\n}\n\nfunction IOPresenter$lambda$0$Type($$outer_0){\n  $clinit_IOPresenter$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1296, 1, {1:1}, IOPresenter$lambda$0$Type);\n_.execute_9 = function execute_129(arg0){\n  this.$$outer_0.lambda$0_62(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_io_IOPresenter$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.io', 'IOPresenter/lambda$0$Type', 1296, Ljava_lang_Object_2_classLit);\nfunction $clinit_IOView(){\n  $clinit_IOView = emptyMethod;\n  $clinit_MbuiViewImpl();\n  $clinit_HalView();\n}\n\nfunction IOView(mbuiContext){\n  $clinit_IOView();\n  MbuiViewImpl.call(this, mbuiContext);\n  this.$init_968();\n}\n\nfunction create_22(mbuiContext){\n  $clinit_IOView();\n  return new Mbui_IOView(mbuiContext);\n}\n\ndefineClass(2884, 142, {1:1, 28:1, 27:1, 650:1, 48:1});\n_.$init_968 = function $init_968(){\n}\n;\n_.updateBufferPool = function updateBufferPool(items){\n  $refresh_1($add_0(this.bufferPoolTable.api_0().clear(), items), ($clinit_Api$RefreshMode() , RESET_0));\n  this.bufferPoolForm.clear_0();\n}\n;\n_.updateWorkers = function updateWorkers(items){\n  $refresh_1($add_0(this.workerTable.api_0().clear(), items), ($clinit_Api$RefreshMode() , RESET_0));\n  this.workerForm.clear_0();\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_io_IOView_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.io', 'IOView', 2884, Lorg_jboss_hal_core_mbui_MbuiViewImpl_2_classLit);\nfunction $clinit_Mbui_IOView(){\n  $clinit_Mbui_IOView = emptyMethod;\n  $clinit_IOView();\n}\n\nfunction Mbui_IOView(mbuiContext){\n  $clinit_Mbui_IOView();\n  var bufferPoolTableOptions, ioBufferPoolItemBuilder, ioBufferPoolItemElement, ioWorkerItemBuilder, ioWorkerItemElement, layoutBuilder, metadata21Template, metadata22Template, root, workerTableOptions;\n  IOView.call(this, mbuiContext);\n  this.$init_969();\n  metadata21Template = of_14('/{selected.profile}/subsystem=io/worker=*');\n  this.metadata21 = castTo(mbuiContext.metadataRegistry_1().lookup_1(metadata21Template), 23);\n  metadata22Template = of_14('/{selected.profile}/subsystem=io/buffer-pool=*');\n  this.metadata22 = castTo(mbuiContext.metadataRegistry_1().lookup_1(metadata22Template), 23);\n  this.handlebarElements = new HashMap;\n  this.bufferPoolForm = (new ModelNodeForm$Builder('io-buffer-pool-form', this.metadata22)).include_6('buffer-size', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['buffers-per-slice', 'direct-buffers'])).unsorted_0().onSave_1(new Mbui_IOView$lambda$0$Type(this, metadata22Template, mbuiContext)).build_15();\n  this.workerForm = (new ModelNodeForm$Builder('io-worker-form', this.metadata21)).include_6('io-threads', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['stack-size', 'task-keepalive', 'task-max-threads'])).unsorted_0().onSave_1(new Mbui_IOView$lambda$1$Type(this, metadata21Template, mbuiContext)).build_15();\n  bufferPoolTableOptions = castTo(castTo(castTo((new NamedNodeTable$Builder(this.metadata22)).button_5(mbuiContext.tableButtonFactory_0().add_35(build_21('io-buffer-pool-table', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['add'])), 'Buffer Pool', metadata22Template, asList_3(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['buffer-size', 'buffers-per-slice', 'direct-buffers'])), new Mbui_IOView$lambda$2$Type(this))), 12).button_5(mbuiContext.tableButtonFactory_0().remove_18('Buffer Pool', metadata22Template, new Mbui_IOView$lambda$3$Type, makeLambdaFunction(Mbui_IOView$lambda$4$Type.prototype.execute_0, Mbui_IOView$lambda$4$Type, [this]))), 12).column_8('name', makeLambdaFunction(Mbui_IOView$lambda$5$Type.prototype.render_2, Mbui_IOView$lambda$5$Type, [])), 12).build_8();\n  this.bufferPoolTable = new NamedNodeTable('io-buffer-pool-table', bufferPoolTableOptions);\n  workerTableOptions = castTo(castTo(castTo((new NamedNodeTable$Builder(this.metadata21)).button_5(mbuiContext.tableButtonFactory_0().add_35(build_21('io-worker-table', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['add'])), 'Worker', metadata21Template, asList_3(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['io-threads', 'stack-size', 'task-keepalive', 'task-max-threads'])), new Mbui_IOView$lambda$6$Type(this))), 12).button_5(mbuiContext.tableButtonFactory_0().remove_18('Worker', metadata21Template, new Mbui_IOView$lambda$7$Type, makeLambdaFunction(Mbui_IOView$lambda$8$Type.prototype.execute_0, Mbui_IOView$lambda$8$Type, [this]))), 12).column_8('name', makeLambdaFunction(Mbui_IOView$lambda$9$Type.prototype.render_2, Mbui_IOView$lambda$9$Type, [])), 12).build_8();\n  this.workerTable = new NamedNodeTable('io-worker-table', workerTableOptions);\n  this.navigation = new VerticalNavigation;\n  ioWorkerItemBuilder = castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo((new Elements$Builder).div_0(), 3).div_0(), 3).innerHtml(fromSafeConstant('<h1>Worker<\\/h1><p>{{metadata21.getDescription().getDescription()}}<\\/p>')), 3).rememberAs('html57'), 3).end(), 3).add_12(this.workerTable), 3).add_12(this.workerForm), 3).end(), 3);\n  ioWorkerItemElement = ioWorkerItemBuilder.build_2();\n  this.handlebarElements.put_0('html57', ioWorkerItemBuilder.referenceFor('html57'));\n  this.navigation.addPrimary_0('io-worker-item', 'Worker', 'fa fa-cogs', ioWorkerItemElement);\n  ioBufferPoolItemBuilder = castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo((new Elements$Builder).div_0(), 3).div_0(), 3).innerHtml(fromSafeConstant('<h1>Buffer Pool<\\/h1><p>{{metadata22.getDescription().getDescription()}}<\\/p>')), 3).rememberAs('html60'), 3).end(), 3).add_12(this.bufferPoolTable), 3).add_12(this.bufferPoolForm), 3).end(), 3);\n  ioBufferPoolItemElement = ioBufferPoolItemBuilder.build_2();\n  this.handlebarElements.put_0('html60', ioBufferPoolItemBuilder.referenceFor('html60'));\n  this.navigation.addPrimary_0('io-buffer-pool-item', 'Buffer Pool', 'pficon pficon-repository', ioBufferPoolItemElement);\n  layoutBuilder = castTo(castTo(castTo((new LayoutBuilder).row_0().column_2().addAll_0(this.navigation.panes_0()), 8).end(), 8).end(), 8);\n  this.registerAttachable(this.navigation, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 10, 0, []));\n  this.registerAttachable(this.bufferPoolTable, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 10, 0, []));\n  this.registerAttachable(this.bufferPoolForm, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 10, 0, []));\n  this.registerAttachable(this.workerTable, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 10, 0, []));\n  this.registerAttachable(this.workerForm, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 10, 0, []));\n  root = layoutBuilder.build_2();\n  this.initElement(root);\n}\n\nfunction lambda$3_34(api_0){\n  $clinit_Mbui_IOView();\n  return castTo($selectedRow(api_0), 17).getName();\n}\n\nfunction lambda$5_18(cell_0, type_1, row_2, meta_3){\n  $clinit_Mbui_IOView();\n  return row_2.getName();\n}\n\nfunction lambda$7_13(api_0){\n  $clinit_Mbui_IOView();\n  return castTo($selectedRow(api_0), 17).getName();\n}\n\nfunction lambda$9_11(cell_0, type_1, row_2, meta_3){\n  $clinit_Mbui_IOView();\n  return row_2.getName();\n}\n\ndefineClass(3039, 2884, {1:1, 28:1, 27:1, 650:1, 48:1}, Mbui_IOView);\n_.$init_969 = function $init_969(){\n}\n;\n_.lambda$0_63 = function lambda$0_115(metadata22Template_1, mbuiContext_2, form_2, changedValues_3){\n  $clinit_Mbui_IOView();\n  var name_0;\n  {\n    name_0 = castTo(form_2.getModel(), 17).getName();\n    this.saveForm('Buffer Pool', name_0, metadata22Template_1.resolve_3(mbuiContext_2.statementContext_6(), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [name_0])), changedValues_3);\n  }\n}\n;\n_.lambda$1_30 = function lambda$1_59(metadata21Template_1, mbuiContext_2, form_2, changedValues_3){\n  $clinit_Mbui_IOView();\n  var name_0;\n  {\n    name_0 = castTo(form_2.getModel(), 17).getName();\n    this.saveForm('Worker', name_0, metadata21Template_1.resolve_3(mbuiContext_2.statementContext_6(), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [name_0])), changedValues_3);\n  }\n}\n;\n_.lambda$2_23 = function lambda$2_45(name_0, address_1){\n  $clinit_Mbui_IOView();\n  castTo(this.presenter, 310).reload_0();\n}\n;\n_.lambda$4_18 = function lambda$4_29(){\n  $clinit_Mbui_IOView();\n  castTo(this.presenter, 310).reload_0();\n}\n;\n_.lambda$6_9 = function lambda$6_15(name_0, address_1){\n  $clinit_Mbui_IOView();\n  castTo(this.presenter, 310).reload_0();\n}\n;\n_.lambda$8_8 = function lambda$8_11(){\n  $clinit_Mbui_IOView();\n  castTo(this.presenter, 310).reload_0();\n}\n;\n_.attach = function attach_22(){\n  getClassPrototype(63).attach.call(this);\n  this.bufferPoolTable.bindForm(this.bufferPoolForm);\n  this.workerTable.bindForm(this.workerForm);\n  replaceHandlebar(castToJso(this.handlebarElements.get_3('html57')), '{{metadata21.getDescription().getDescription()}}', valueOf_30(this.metadata21.getDescription_0().getDescription()));\n  replaceHandlebar(castToJso(this.handlebarElements.get_3('html60')), '{{metadata22.getDescription().getDescription()}}', valueOf_30(this.metadata22.getDescription_0().getDescription()));\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_io_Mbui_1IOView_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.io', 'Mbui_IOView', 3039, Lorg_jboss_hal_client_configuration_subsystem_io_IOView_2_classLit);\nfunction $clinit_Mbui_IOView$lambda$0$Type(){\n  $clinit_Mbui_IOView$lambda$0$Type = emptyMethod;\n}\n\nfunction Mbui_IOView$lambda$0$Type($$outer_0, metadata22Template_1, mbuiContext_2){\n  $clinit_Mbui_IOView$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n  this.metadata22Template_1 = metadata22Template_1;\n  this.mbuiContext_2 = mbuiContext_2;\n}\n\ndefineClass(3040, 1, {1:1}, Mbui_IOView$lambda$0$Type);\n_.onSave = function onSave_28(arg0, arg1){\n  this.$$outer_0.lambda$0_63(this.metadata22Template_1, this.mbuiContext_2, arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_io_Mbui_1IOView$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.io', 'Mbui_IOView/lambda$0$Type', 3040, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_IOView$lambda$1$Type(){\n  $clinit_Mbui_IOView$lambda$1$Type = emptyMethod;\n}\n\nfunction Mbui_IOView$lambda$1$Type($$outer_0, metadata21Template_1, mbuiContext_2){\n  $clinit_Mbui_IOView$lambda$1$Type();\n  this.$$outer_0 = $$outer_0;\n  this.metadata21Template_1 = metadata21Template_1;\n  this.mbuiContext_2 = mbuiContext_2;\n}\n\ndefineClass(3041, 1, {1:1}, Mbui_IOView$lambda$1$Type);\n_.onSave = function onSave_29(arg0, arg1){\n  this.$$outer_0.lambda$1_30(this.metadata21Template_1, this.mbuiContext_2, arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_io_Mbui_1IOView$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.io', 'Mbui_IOView/lambda$1$Type', 3041, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_IOView$lambda$2$Type(){\n  $clinit_Mbui_IOView$lambda$2$Type = emptyMethod;\n}\n\nfunction Mbui_IOView$lambda$2$Type($$outer_0){\n  $clinit_Mbui_IOView$lambda$2$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(3042, 1, {1:1}, Mbui_IOView$lambda$2$Type);\n_.execute_10 = function execute_130(arg0, arg1){\n  this.$$outer_0.lambda$2_23(arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_io_Mbui_1IOView$lambda$2$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.io', 'Mbui_IOView/lambda$2$Type', 3042, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_IOView$lambda$3$Type(){\n  $clinit_Mbui_IOView$lambda$3$Type = emptyMethod;\n}\n\nfunction Mbui_IOView$lambda$3$Type(){\n  $clinit_Mbui_IOView$lambda$3$Type();\n}\n\ndefineClass(3043, 1, {1:1}, Mbui_IOView$lambda$3$Type);\n_.apply_2 = function apply_105(arg0){\n  return lambda$3_34(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_io_Mbui_1IOView$lambda$3$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.io', 'Mbui_IOView/lambda$3$Type', 3043, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_IOView$lambda$4$Type(){\n  $clinit_Mbui_IOView$lambda$4$Type = emptyMethod;\n}\n\nfunction Mbui_IOView$lambda$4$Type($$outer_0){\n  $clinit_Mbui_IOView$lambda$4$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(4543, $wnd.Function, {1:1}, Mbui_IOView$lambda$4$Type);\n_.execute_0 = function execute_131(){\n  this.$$outer_0.lambda$4_18();\n}\n;\nfunction $clinit_Mbui_IOView$lambda$5$Type(){\n  $clinit_Mbui_IOView$lambda$5$Type = emptyMethod;\n}\n\nfunction Mbui_IOView$lambda$5$Type(){\n  $clinit_Mbui_IOView$lambda$5$Type();\n}\n\ndefineClass(4544, $wnd.Function, {1:1}, Mbui_IOView$lambda$5$Type);\n_.render_2 = function render_28(arg0, arg1, arg2, arg3){\n  return lambda$5_18(arg0, arg1, arg2, arg3);\n}\n;\nfunction $clinit_Mbui_IOView$lambda$6$Type(){\n  $clinit_Mbui_IOView$lambda$6$Type = emptyMethod;\n}\n\nfunction Mbui_IOView$lambda$6$Type($$outer_0){\n  $clinit_Mbui_IOView$lambda$6$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(3044, 1, {1:1}, Mbui_IOView$lambda$6$Type);\n_.execute_10 = function execute_132(arg0, arg1){\n  this.$$outer_0.lambda$6_9(arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_io_Mbui_1IOView$lambda$6$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.io', 'Mbui_IOView/lambda$6$Type', 3044, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_IOView$lambda$7$Type(){\n  $clinit_Mbui_IOView$lambda$7$Type = emptyMethod;\n}\n\nfunction Mbui_IOView$lambda$7$Type(){\n  $clinit_Mbui_IOView$lambda$7$Type();\n}\n\ndefineClass(3045, 1, {1:1}, Mbui_IOView$lambda$7$Type);\n_.apply_2 = function apply_106(arg0){\n  return lambda$7_13(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_io_Mbui_1IOView$lambda$7$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.io', 'Mbui_IOView/lambda$7$Type', 3045, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_IOView$lambda$8$Type(){\n  $clinit_Mbui_IOView$lambda$8$Type = emptyMethod;\n}\n\nfunction Mbui_IOView$lambda$8$Type($$outer_0){\n  $clinit_Mbui_IOView$lambda$8$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(4545, $wnd.Function, {1:1}, Mbui_IOView$lambda$8$Type);\n_.execute_0 = function execute_133(){\n  this.$$outer_0.lambda$8_8();\n}\n;\nfunction $clinit_Mbui_IOView$lambda$9$Type(){\n  $clinit_Mbui_IOView$lambda$9$Type = emptyMethod;\n}\n\nfunction Mbui_IOView$lambda$9$Type(){\n  $clinit_Mbui_IOView$lambda$9$Type();\n}\n\ndefineClass(4546, $wnd.Function, {1:1}, Mbui_IOView$lambda$9$Type);\n_.render_2 = function render_29(arg0, arg1, arg2, arg3){\n  return lambda$9_11(arg0, arg1, arg2, arg3);\n}\n;\nfunction $clinit_Mbui_IOView_Provider(){\n  $clinit_Mbui_IOView_Provider = emptyMethod;\n  $clinit_Object();\n}\n\nfunction Mbui_IOView_Provider(mbuiContext){\n  $clinit_Mbui_IOView_Provider();\n  Object_0.call(this);\n  this.$init_970();\n  this.mbuiContext = mbuiContext;\n}\n\ndefineClass(2883, 1, {1:1, 61:1}, Mbui_IOView_Provider);\n_.$init_970 = function $init_970(){\n}\n;\n_.get_0 = function get_130(){\n  return this.get_34();\n}\n;\n_.get_34 = function get_131(){\n  return create_22(this.mbuiContext);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_io_Mbui_1IOView_1Provider_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.io', 'Mbui_IOView_Provider', 2883, Ljava_lang_Object_2_classLit);\ndefineClass(1094, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$io$IOPresenter$MyView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$io$IOPresenter$MyView$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$io$IOPresenter$MyView$_annotation$$none$$)) {\n    result = this.get_Key$type$org$jboss$hal$client$configuration$subsystem$io$Mbui_IOView_Provider$_annotation$$none$$().get_34();\n    this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$io$IOPresenter$MyView$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$io$IOPresenter$MyView$_annotation$$none$$;\n}\n;\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$io$IOPresenter$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$io$IOPresenter$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$io$IOPresenter$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$configuration$subsystem$io$IOPresenter_org$jboss$hal$client$configuration$subsystem$io$IOPresenter_methodInjection(this.injector.getFragment_com_google_web_bindery_event_shared().get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$configuration$subsystem$io$IOPresenter$MyView$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$configuration$subsystem$io$IOPresenter$MyProxy$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core().get_Key$type$org$jboss$hal$core$CrudOperations$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$FinderPathFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$StatementContext$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$io$IOPresenter$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$io$IOPresenter$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$io$IOPresenter$_annotation$$none$$;\n}\n;\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$io$Mbui_IOView_Provider$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$io$Mbui_IOView_Provider$_annotation$$none$$(){\n  var result;\n  result = this.org$jboss$hal$client$configuration$subsystem$io$Mbui_IOView_Provider_org$jboss$hal$client$configuration$subsystem$io$Mbui_IOView_Provider_methodInjection(this.injector.getFragment_org_jboss_hal_core_mbui().get_Key$type$org$jboss$hal$core$mbui$MbuiContext$_annotation$$none$$());\n  this.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$io$Mbui_IOView_Provider$_annotation$$none$$(result);\n  return result;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$io$IOPresenter$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$io$IOPresenter$_annotation$$none$$(injectee){\n  this.injector.getFragment_com_gwtplatform_mvp_client().com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_______________(injectee, this.injector.getFragment_com_gwtplatform_mvp_client().get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$());\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$io$Mbui_IOView_Provider$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$io$Mbui_IOView_Provider$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$configuration$subsystem$io$IOPresenter_org$jboss$hal$client$configuration$subsystem$io$IOPresenter_methodInjection = function org$jboss$hal$client$configuration$subsystem$io$IOPresenter_org$jboss$hal$client$configuration$subsystem$io$IOPresenter_methodInjection(_0, _1, _2, _3, _4, _5, _6){\n  return new IOPresenter(_0, _1, _2, _3, _4, _5, _6);\n}\n;\n_.org$jboss$hal$client$configuration$subsystem$io$Mbui_IOView_Provider_org$jboss$hal$client$configuration$subsystem$io$Mbui_IOView_Provider_methodInjection = function org$jboss$hal$client$configuration$subsystem$io$Mbui_IOView_Provider_org$jboss$hal$client$configuration$subsystem$io$Mbui_IOView_Provider_methodInjection(_0){\n  return new Mbui_IOView_Provider(_0);\n}\n;\ndefineClass(1096, 1, {57:1, 1:1});\n_.onSuccess_1 = function onSuccess_84(){\n  this.val$callback2.onSuccess_0(this.this$11.this$01.get_Key$type$org$jboss$hal$client$configuration$subsystem$io$IOPresenter$_annotation$$none$$());\n}\n;\n$entry(onLoad)(18);\n\n//# sourceURL=hal-18.js\n")
