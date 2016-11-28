$wnd.hal.runAsyncCallback46("function $clinit_RhcpColumns$Album(){\n  $clinit_RhcpColumns$Album = emptyMethod;\n  $clinit_FinderColumn();\n}\n\nfunction RhcpColumns$Album(finder){\n  $clinit_RhcpColumns$Album();\n  FinderColumn.call(this, (new FinderColumn$Builder(finder, 'rhcp-album', 'Album')).itemsProvider_0(new RhcpColumns$Album$lambda$0$Type).itemRenderer_0(new RhcpColumns$Album$lambda$1$Type).onPreview_0(new RhcpColumns$Album$lambda$2$Type));\n  this.$init_1230();\n}\n\nfunction lambda$0_193(context_0, callback_1){\n  $clinit_RhcpColumns$Album();\n  var album, albums, decade, key, key$array, key$index, key$max;\n  {\n    decade = castTo(getLast_1(context_0.getPath().iterator_0()), 117).getItemTitle();\n    albums = new ArrayList;\n    for (key$array = $keys(($clinit_RhcpResources() , DISCOGRAPHY)) , key$index = 0 , key$max = key$array.length; key$index < key$max; ++key$index) {\n      key = key$array[key$index];\n      album = $getObject_0(($clinit_RhcpResources() , DISCOGRAPHY), key);\n      if (castTo(($clinit_RhcpColumns$Decade() , DECADES).get_3(decade), 26).test_0(album)) {\n        albums.add_0(album);\n      }\n    }\n    callback_1.onSuccess_0(albums);\n  }\n}\n\nfunction lambda$1_114(item_0){\n  $clinit_RhcpColumns$Album();\n  return new RhcpColumns$Album$1(item_0);\n}\n\nfunction lambda$2_90(item_0){\n  $clinit_RhcpColumns$Album();\n  var element;\n  {\n    element = castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo((new Elements$Builder).div_0(), 3).add_11('img'), 3).css_0('preview'), 3).attr_0('src', $getString_0(item_0, 'cover')), 3).p(), 3).span_0(), 3).textContent_0('More infos: '), 3).end(), 3).a(), 3).attr_0('target', '_blank'), 3).attr_0('href', $getString_0(item_0, 'url')), 3).textContent_0($getString_0(item_0, 'url')), 3).end(), 3).end(), 3).end(), 3).build_2();\n    return new PreviewContent_4($getString_0(item_0, 'title'), 'Released ' + $getString_0(item_0, 'released'), element, stampJavaTypeInfo(getClassLiteralForArray(Lelemental_dom_Element_2_classLit, 1), {4:1, 1:1, 5:1}, 0, 2, []));\n  }\n}\n\ndefineClass(2636, 34, {1:1, 34:1}, RhcpColumns$Album);\n_.$init_1230 = function $init_1230(){\n}\n;\nvar Lorg_jboss_hal_client_rhcp_RhcpColumns$Album_2_classLit = createForClass('org.jboss.hal.client.rhcp', 'RhcpColumns/Album', 2636, Lorg_jboss_hal_core_finder_FinderColumn_2_classLit);\nfunction $clinit_RhcpColumns$Album$1(){\n  $clinit_RhcpColumns$Album$1 = emptyMethod;\n  $clinit_Object();\n  $clinit_ItemDisplay_0();\n}\n\nfunction RhcpColumns$Album$1(val$item){\n  $clinit_RhcpColumns$Album$1();\n  this.val$item1 = val$item;\n  Object_0.call(this);\n  this.$init_1231();\n}\n\ndefineClass(2644, 1, {1:1}, RhcpColumns$Album$1);\n_.$init_1231 = function $init_1231(){\n}\n;\n_.actions_0 = function actions_18(){\n  return $actions(this);\n}\n;\n_.getFilterData = function getFilterData_17(){\n  return $getFilterData(this);\n}\n;\n_.getIcon = function getIcon_17(){\n  return $getIcon(this);\n}\n;\n_.getId = function getId_25(){\n  return $getId_1(this);\n}\n;\n_.getTooltip = function getTooltip_17(){\n  return $getTooltip(this);\n}\n;\n_.asElement_0 = function asElement_69(){\n  return withSubtitle($getString_0(this.val$item1, 'title'), valueOf_27($getNumber_0(this.val$item1, 'year')));\n}\n;\n_.getTitle = function getTitle_18(){\n  return $getString_0(this.val$item1, 'title');\n}\n;\n_.nextColumn_0 = function nextColumn_18(){\n  return 'rhcp-track';\n}\n;\nvar Lorg_jboss_hal_client_rhcp_RhcpColumns$Album$1_2_classLit = createForClass('org.jboss.hal.client.rhcp', 'RhcpColumns/Album/1', 2644, Ljava_lang_Object_2_classLit);\nfunction $clinit_RhcpColumns$Album$lambda$0$Type(){\n  $clinit_RhcpColumns$Album$lambda$0$Type = emptyMethod;\n}\n\nfunction RhcpColumns$Album$lambda$0$Type(){\n  $clinit_RhcpColumns$Album$lambda$0$Type();\n}\n\ndefineClass(2643, 1, {1:1}, RhcpColumns$Album$lambda$0$Type);\n_.get_13 = function get_214(arg0, arg1){\n  lambda$0_193(arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_rhcp_RhcpColumns$Album$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.rhcp', 'RhcpColumns/Album/lambda$0$Type', 2643, Ljava_lang_Object_2_classLit);\nfunction $clinit_RhcpColumns$Album$lambda$1$Type(){\n  $clinit_RhcpColumns$Album$lambda$1$Type = emptyMethod;\n}\n\nfunction RhcpColumns$Album$lambda$1$Type(){\n  $clinit_RhcpColumns$Album$lambda$1$Type();\n}\n\ndefineClass(2645, 1, {1:1}, RhcpColumns$Album$lambda$1$Type);\n_.render_3 = function render_75(arg0){\n  return lambda$1_114(arg0);\n}\n;\nvar Lorg_jboss_hal_client_rhcp_RhcpColumns$Album$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.rhcp', 'RhcpColumns/Album/lambda$1$Type', 2645, Ljava_lang_Object_2_classLit);\nfunction $clinit_RhcpColumns$Album$lambda$2$Type(){\n  $clinit_RhcpColumns$Album$lambda$2$Type = emptyMethod;\n}\n\nfunction RhcpColumns$Album$lambda$2$Type(){\n  $clinit_RhcpColumns$Album$lambda$2$Type();\n}\n\ndefineClass(2646, 1, {1:1}, RhcpColumns$Album$lambda$2$Type);\n_.onPreview = function onPreview_15(arg0){\n  return lambda$2_90(arg0);\n}\n;\nvar Lorg_jboss_hal_client_rhcp_RhcpColumns$Album$lambda$2$Type_2_classLit = createForClass('org.jboss.hal.client.rhcp', 'RhcpColumns/Album/lambda$2$Type', 2646, Ljava_lang_Object_2_classLit);\ndefineClass(1159, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$rhcp$RhcpColumns$Album$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$rhcp$RhcpColumns$Album$_annotation$$none$$(){\n  var result;\n  result = this.org$jboss$hal$client$rhcp$RhcpColumns$Album_org$jboss$hal$client$rhcp$RhcpColumns$Album_methodInjection(this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$());\n  this.memberInject_Key$type$org$jboss$hal$client$rhcp$RhcpColumns$Album$_annotation$$none$$(result);\n  return result;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$rhcp$RhcpColumns$Album$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$rhcp$RhcpColumns$Album$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$rhcp$RhcpColumns$Album_org$jboss$hal$client$rhcp$RhcpColumns$Album_methodInjection = function org$jboss$hal$client$rhcp$RhcpColumns$Album_org$jboss$hal$client$rhcp$RhcpColumns$Album_methodInjection(_0){\n  return new RhcpColumns$Album(_0);\n}\n;\ndefineClass(1174, 1, {57:1, 1:1});\n_.onSuccess_1 = function onSuccess_190(){\n  this.val$callback2.onSuccess_0(this.this$11.this$01.get_Key$type$org$jboss$hal$client$rhcp$RhcpColumns$Album$_annotation$$none$$());\n}\n;\n$entry(onLoad)(46);\n\n//# sourceURL=hal-46.js\n")
