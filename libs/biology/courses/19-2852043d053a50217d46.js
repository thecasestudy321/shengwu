webpackJsonp([19],{1365:function(e,t,n){e.exports=n.p+"ce1fc1644ccf6eda0bd7e4dd8439ad11.json"},1366:function(e,t){e.exports={headerTitle:"认识显微镜",experimentStep:[{name:"实验步骤\r",classes:[],detail:[{text:"物镜40×\r",classes:[]},{text:"物镜10×\r",classes:[]},{text:"物镜100×\r",classes:[]},{text:"镜筒\r",classes:[]},{text:"目镜\r",classes:[]},{text:"物镜转换器\r",classes:[]},{text:"镜臂\r",classes:[]},{text:"粗准焦螺旋\r",classes:[]},{text:"细准焦螺旋\r",classes:[]},{text:"载物台\r",classes:[]},{text:"遮光器\r",classes:[]},{text:"反光镜\r",classes:[]},{text:"镜柱",classes:[]}]}],conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"显微镜的放大倍数如何计算？\r",expend:!1,answer:"显微镜的目镜与物镜放大倍数的乘积就是该显微镜的放大倍数。\r<br/>"},{question:"目镜内看到的物像是正像还是倒像？\r",expend:!1,answer:"目镜内看到的物像是倒像。\r<br/><br/>"},{}]},equipment:{icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}},192:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(193),r=a(o),i=n(194),s=a(i),l=n(195),u=a(l),c=n(196),f=a(c),d=n(197),p=a(d),m=n(198),b=a(m),g=n(199),h=a(g),v=n(200),y=a(v),x={};x.c1=r.default,x.chang=s.default,x.duan=u.default,x.environment=f.default,x.logonew=p.default,x.model=b.default,x.model_nb_babylon=h.default,x.zhong3=y.default,t.default=x},193:function(e,t,n){e.exports=n.p+"nb-models/be30a998-0145-26b5eef2.jpg"},194:function(e,t,n){e.exports=n.p+"nb-models/be30a998-0145-ef7fa759.png"},195:function(e,t,n){e.exports=n.p+"nb-models/be30a998-0145-a9effcc0.png"},196:function(e,t,n){e.exports=n.p+"e57fc2e467eb5595c3c1a0ebf7b2770b.dds"},197:function(e,t,n){e.exports=n.p+"nb-models/be30a998-0145-2bcee1d9.jpg"},198:function(e,t,n){e.exports=n.p+"nb-models/be30a998-0145-0d059434.babylon"},199:function(e,t,n){e.exports=n.p+"nb-models/be30a998-0145-0d059434-2d.jpg"},200:function(e,t,n){e.exports=n.p+"nb-models/be30a998-0145-a3ec6844.png"},774:function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return b[e]}function r(e){y=e;var t={"model-url":o(0),camera:{alpha:1.573,beta:1.3},"clear-color":68,tipURL:p.default,plugins:[Object.assign(BABYLON.plugins.ObserveWireframe,{data:{nameFilter:/./,bindAnnotationToMesh:!0,wireframeAlpha:.1}})],annotation:{showAnnotationPanel:!1,type:"threeDLine",line:{color:16777215,type:"horizontal"},tipParent:y},func:{loaded:i},loadRes:i,globalMaterial:{environmentReflection:{enabled:!1,level:0},roughness:1},light:{name:"default"},pipeline:{motionBlur:{enabled:!1,motionStrength:.005,motionBlurSamples:32},bloom:{enabled:!1},fxaaEnabled:!0},modelState:0,showComment:!0};y.init3D(t)}function i(){v=y.scene3D,h=v.scene,s(),l(),u()}function s(){var e=h.getLightByName("ambient"),t=h.getLightByName("defaultDir1"),n=h.getLightByName("defaultDir0");e.intensity=1,n.position.set(0,-5,0),n.direction.set(0,1,0),n.intensity=.5,n.specular.set(.5,.5,.5),t.position.set(10,10,0),t.direction.set(-1,-1,0),t.intensity=.35,t.specular.set(1,1,1);var a=new BABYLON.DirectionalLight("Dir2",new BABYLON.Vector3(-10,10,0),h);a.direction.set(1,-1,0),a.intensity=.35,a.specular.set(1,1,1)}function l(){for(var e=Object.keys(g),t=0;t<e.length;++t){var n=e[t],a=g[n];if(!(a instanceof Array)){var o=a.parent;a=h.getMeshByName(o).getChildMeshes()}for(var r=h.getMeshByName(n),i=0;i<a.length;++i)if(a[i]&&a[i]!=n){var s=void 0;s="string"==typeof a[i]?h.getMeshByName(a[i]):a[i],s.bindMesh=r}}}function u(){var t=h.getMaterialByName("jinshu");t.specularColor.set(1,1,1),t.diffuseColor.set(.4,.4,.4),t.emissiveColor.set(.15,.15,.15),[h.getMaterialByName("chang"),h.getMaterialByName("duan"),h.getMaterialByName("zhong")].forEach(function(e){e.bumpTexture=e.diffuseTexture,e.diffuseTexture.alpha=0,e.diffuseColor=t.diffuseColor,e.specularColor=t.specularColor,e.emissiveColor=t.emissiveColor});var n=h.getMaterialByName("pingtai");n.diffuseColor.set(.15,.15,.15),n.specularColor.set(.11,.11,.11);var a=(h.getMaterialByName("fanguangjing1"),h.getMeshByName("polySurface203"),new BABYLON.PBRMetallicRoughnessMaterial("pbr",h));a.baseColor=new BABYLON.Color3(0,0,0),a.metallic=1,a.roughness=0,a.environmentTexture=BABYLON.CubeTexture.CreateFromPrefilteredData(nb.config.URI_PREFIX+f.default.environment,h),e.m=a;var o=h.getMaterialByName("zhuti"),r=h.getMaterialByName("zhuti1");e.m=o,e.m1=r,m.diffuseColor.set(.9,.9,.9),m1.diffuseColor.set(.9,.9,.9)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(192),f=a(c),d=n(1365),p=a(d),b=[f.default.model,f.default.environment],g={polySurface166:{parent:"wujing40_observe"},polySurface172:{parent:"wujing100_observe"},polySurface183:{parent:"wujing10_observe"},mujing_observe:["polySurface106"],jingbi_observe:[],polySurface203:{parent:"mirror"},polySurface127:{parent:"zheguangqi_observe"},polySurface189:{parent:"cuzhunjiaoluoxuan_observe"},pCylinder56:{parent:"xizhunjiaoluoxuan_observe"},wujingzhuanhuanqi:["polySurface58"],zaiwutai_observe:[],iron_sheet_L:["iron_sheet_R"],iron_sheet_R:["iron_sheet_L"]},h=void 0,v=void 0,y=void 0,x=void 0;t.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){x=0,r(e)}}),start:function(){this.autoBindScript()},menu:Object.assign(n(1366),{hideLeftMenu:!0})})}).call(t,n(1))}});