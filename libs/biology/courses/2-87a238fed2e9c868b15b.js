webpackJsonp([2],{1088:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(1089),o=n(a),s=i(1090),r=n(s),l={};l.daopian=o.default,l.daopian_nb_babylon=r.default,t.default=l},1089:function(e,t,i){e.exports=i.p+"nb-models/25bbdcd0-0001-7e293526.babylon"},1090:function(e,t,i){e.exports=i.p+"nb-models/25bbdcd0-0001-7e293526-2d.jpg"},1091:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(1092),o=n(a),s=i(1093),r=n(s),l=i(1094),u=n(l),c=i(1095),p=n(c),d=i(1096),f=n(d),b=i(1097),m=n(b),g=i(1098),B=n(g),h={};h.cirui=o.default,h.cirui_nb_babylon=r.default,h.taohua=u.default,h.taohua52112=p.default,h.taohua6=f.default,h.taohua_nb_babylon=m.default,h.taohuaneibutietu=B.default,t.default=h},1092:function(e,t,i){e.exports=i.p+"nb-models/fcd04e26-0002-df37b384.babylon"},1093:function(e,t,i){e.exports=i.p+"nb-models/fcd04e26-0002-df37b384-2d.jpg"},1094:function(e,t,i){e.exports=i.p+"nb-models/fcd04e26-0002-e5f27ea8.babylon"},1095:function(e,t,i){e.exports=i.p+"nb-models/fcd04e26-0002-6548ca28.jpg"},1096:function(e,t,i){e.exports=i.p+"nb-models/fcd04e26-0002-a9e3a99d.jpg"},1097:function(e,t,i){e.exports=i.p+"nb-models/fcd04e26-0002-e5f27ea8-2d.jpg"},1098:function(e,t,i){e.exports=i.p+"nb-models/fcd04e26-0002-4dcf9140.jpg"},1099:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(1100),o=n(a),s=i(1101),r=n(s),l={};l.niezi=o.default,l.niezi_nb_babylon=r.default,t.default=l},1100:function(e,t,i){e.exports=i.p+"nb-models/7cd86ecb-0003-8c518d26.babylon"},1101:function(e,t,i){e.exports=i.p+"nb-models/7cd86ecb-0003-8c518d26-2d.jpg"},1102:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1103),a=function(e){return e&&e.__esModule?e:{default:e}}(n),o={};o.focusing=a.default,t.default=o},1103:function(e,t,i){e.exports=i.p+"c20fed8602528660267a8be01b596c5c.png"},1104:function(e,t,i){e.exports=i.p+"eb33fb7328b2438b16f59de90f559c01.json"},1105:function(e,t,i){e.exports=i.p+"eefb0b717360ed610cc0383a7f121011.json"},1106:function(e,t,i){e.exports=i.p+"f6a10bb72244540bd859b11357d136d3.json"},1107:function(e,t){e.exports={headerTitle:"观察桃花",experimentStep:[{name:"实验步骤\r",classes:[],detail:[{text:"观察桃花，点击标注可观察它的花托、萼片、花瓣、雄蕊和雌蕊，双击空白处可观察完整桃花。\r",classes:[]},{text:"用镊子夹开一个花药，观察花药里面的花粉。\r",classes:[]},{text:"用刀片纵向剖开子房，观察子房里面的胚珠。",classes:[]}]}],purpose:{icon:"images/btn-shiyanmudi.png",name:"目的要求&nbsp;:",menu:[{text:"观察桃花，认识花的基本结构。"}]},conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"花的哪一部分将来发育成果实？\r",expend:!1,answer:"花的子房将来发育成果实。\r<br/>"},{question:"对于植物繁衍后代来说，花的哪些结构是最重要的？\r",expend:!1,answer:"花蕊，包括雄蕊和雌蕊。<br/>"},{}]},equipment:{icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}},734:function(e,t,i){"use strict";(function(e){function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return N[e]}function o(e,t,i){var n=[];return n.push(TweenMax.to(e,i,{ease:Sine.easeInOut,radius:t.radius,alpha:t.alpha,beta:t.beta,onUpdate:function(){},onComplete:function(){e.lowerRadiusLimit=t.radius/4,e.upperRadiusLimit=4*t.radius}})),n}function s(e,t,i){return TweenMax.to(e,i,Object.assign(t,{ease:Sine.easeInOut}))}function r(e,t){Object.assign(e.position,t.position),Object.assign(e.rotation,t.rotation),Object.assign(e.scaling,t.scaling)}function l(e,t,i){var n=[];return n.push(s(e.position,t.position,i)),n.push(s(e.scaling,t.scaling,i)),n.push(s(e.rotation,t.rotation,i)),n}Object.defineProperty(t,"__esModule",{value:!0});var u=i(1088),c=n(u),p=i(1091),d=n(p),f=i(1099),b=n(f),m=i(1102),g=n(m),B=i(1104),h=n(B),y=i(1105),v=n(y),L=i(1106),x=n(L),N=[d.default.taohua,d.default.cirui,c.default.daopian,b.default.niezi,d.default.huayao,d.default.huayaotietu3,g.default.focusing];console.log(nbBio.utils.NBStringUtil.getPathInfo(a(1)));var A={globalMaterial:{environmentReflection:{enabled:!1,level:0},roughness:.5},light:{name:"default"},pipeline:{motionBlur:{enabled:!1,motionStrength:.005,motionBlurSamples:32},bloom:{enabled:!1},fxaaEnabled:!0}};t.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(t){t.stepFunc0=function(e){function i(){e.scene3D.setTipsInteractive(!0);var t=e.scene3D.scene,i=t.getLightByName("ambient"),a=t.getLightByName("defaultDir1"),o=t.getLightByName("defaultDir0");i.intensity=1,i.diffuse.b=.99,i.specular.r=i.specular.g=i.specular.b=.1,o.intensity=.4,a.intensity=.2;var s=new BABYLON.PointLight("point0",new BABYLON.Vector3(-5,5,5),t);s.intensity=.2,s.specular.r=s.specular.g=s.specular.b=.3,console.log(n.emitter.name),t.getMeshByName("huayao_right").isVisible=!1,t.getMeshByName("huayao_left").isVisible=!1,t.getMeshByName("jing").isVisible=!1}var n={"model-url":a(0),camera:{alpha:3.6,beta:1},tipURL:h.default,plugins:[Object.assign(BABYLON.plugins.ObserveWireframe,{data:{nameFilter:/(^observe_.*)|(^gen$)|(^pasted__observe_huaban2$)/,bindAnnotationToMesh:!0,wireframeAlpha:.1}})],annotation:{showAnnotationPanel:!1,type:"threeDLine",line:{color:16777215,type:"horizontal"},tipParent:t},showComment:!0,func:{loaded:i}};Object.assign(n,A),e.init3D(n)},t.stepFunc1=function(i){function n(){d=i.scene3D,f=d.scene,f.activeCamera.upperBetaLimit=1.2,f.activeCamera.lowerBetaLimit=1.2,f.activeCamera.upperAlphaLimit=.5,f.activeCamera.lowerAlphaLimit=.5;var e=f.getLightByName("ambient"),t=f.getLightByName("defaultDir1");f.getLightByName("defaultDir0");e.intensity=1.2,e.specular.r=e.specular.g=e.specular.b=.1,t.intensity=.1;var n=new BABYLON.PointLight("point0",new BABYLON.Vector3(0,-2,0),f);n.intensity=.2,n.diffuse.r=n.diffuse.b=.95,n.specular=new BABYLON.Color3(.5,.5,.5),n.specular.r=n.specular.g=n.specular.b=.3,BABYLON.SceneLoader.ImportMesh("",u.path,u.name,d.scene,function(){++c,s()})}function s(){function t(){if(!0===i.visible&&!0===b){i.removeEventListener("update",t);var o=d.focusingOn(v.position,a(6));o.actionManager=new BABYLON.ActionManager(f),e.sp=o,o.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger,n))}}function n(){d.updateTips(null,!0),f.activeCamera.upperBetaLimit=null,f.activeCamera.lowerBetaLimit=null,f.activeCamera.upperAlphaLimit=null,f.activeCamera.lowerAlphaLimit=null,d.lookAtVector(sp.position),d.defaultRadius=6,d.defaultTarget.set(sp.position.x,sp.position.y,sp.position.z),sp.dispose(),g.isVisible=!0;var e=new TimelineMax({onComplete:function(){i.scene3D===d&&(M=d.focusingOn(L.position,a(6)),M.actionManager=new BABYLON.ActionManager(f),M.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger,s)))}});e.add(l(g,N,2)),e.add(TweenMax.to([B.position,h.position],2,{y:"-=1",ease:Sine.easeInOut,onComplete:function(){TweenMax.to(y,.5,{visibility:0})}})),e.add(o(u,A,3));var t=[];t.push(l(g,x,2)),t.push(TweenMax.to(g,2,{visibility:0})),e.add(t)}function s(){if(i.scene3D===d){d.lookAtVector(sp.position),M.dispose(),d.defaultRadius=.3;var e=new TimelineMax({onComplete:function(){i.emit("stepComplete")}});e.add(TweenMax.to(m.position,1,{z:-.3,x:.3,onComplete:function(){m.isVisible=!1,m.dispose()}})),e.add(TweenMax.to(m,.8,{visibility:0}),"-=0.8"),e.add(o(u,O,2))}}if(!(c<1)){d.defaultRadius=5.6,d.zoomOut();var u=f.activeCamera,p=f.getMeshByName("huayao_right"),m=f.getMeshByName("huayao_left"),g=f.getMeshByName("polySurface1"),B=f.getMeshByName("taohua"),h=f.getMeshByName("observe_xiongrui1"),y=[],v={position:{x:-.2499999999999999,y:.7999999999999993,z:.5699999999999994}},L={position:{x:-.26000000000000006,y:.7999999999999998,z:.5800000000000003}};f.meshes.forEach(function(e){e!==g&&e!==p&&e!==m&&(y.push(e),e.isPickable=!1)}),d.defaultTarget=new BABYLON.Vector3(L.position.x,L.position.y,L.position.z),g.isVisible=!1,p.isVisible=!0,m.isVisible=!0,p.bakeCurrentTransformIntoVertices(),p.parent=null,m.bakeCurrentTransformIntoVertices(),m.parent=null,g.material.diffuseColor.set(.6,.6,.6),g.material.ambientColor.set(1,1,1),console.log(i.visible),i.on("update",t);var x={position:{x:0,y:6,z:3},rotation:{x:-9.39477796076938,y:4.71238898038469,z:-5.112388980384689},scaling:{x:.08,y:.08,z:.02}},N={position:{x:-.2608385820080322,y:1.2246221360305976,z:1.5899999999999983},rotation:{x:-9.39477796076938,y:4.71238898038469,z:-5.112388980384689},scaling:{x:.08,y:.08,z:.02}};r(g,x);var A={upVector:{x:0,y:1,z:0},position:{x:1.4361929564110432,y:.9213138269465792,z:-.9632231511968575},radius:1.8573139242738996,rotation:{x:0,y:0,z:0},alpha:-.7086112360126929,beta:1.557255822004362},O={upVector:{x:0,y:1,z:0},position:{x:-.07469505848699673,y:.8159560478908344,z:.5976682339601843},radius:.4578820478017237,rotation:{x:0,y:0,z:0},alpha:.10157332964881491,beta:1.502667921999865},M=void 0}}var u=nbBio.utils.NBStringUtil.getPathInfo(a(3));console.log(u);var c=0,p={"model-url":a(0),tipURL:x.default,annotation:{showAnnotationPanel:!1,type:"threeDLine",line:{type:"horizontal"},tipParent:t},camera:{radius:7.924150144501345,alpha:.5,beta:1.2},func:{loaded:n}};Object.assign(p,A),i.init3D(p);var d=void 0,f=void 0,b=!1;i.on("stepSet",function(){b=!0})},t.stepFunc2=function(e){function i(){r=e.scene3D,r.updateTips(/./,!0),l=r.scene;var t=nbBio.utils.NBStringUtil.getPathInfo(a(2));BABYLON.SceneLoader.ImportMesh("dao",t.path,t.name,r.scene,n)}function n(){function t(){l.activeCamera.upperBetaLimit=null,l.activeCamera.lowerBetaLimit=null,l.activeCamera.upperAlphaLimit=null,l.activeCamera.lowerAlphaLimit=null,r.defaultRadius=4.9,r.defaultTarget=new BABYLON.Vector3(0,-.2,0),TweenMax.to(c,1,{intensity:.2}),TweenMax.to([y,a],1,{visibility:0,onComplete:function(){y.isVisible=a.isVisible=!1,r.updateTips(null,!1)}}),o(m,B,1)}function i(){BABYLON.Vector3.Distance(N,a.position)<.5&&(x=!0,l.meshes.forEach(function(e){e.isVisible&&e.visibility>.5&&(e.isPickable=!0)}),n(),e.removeEventListener("update",i))}function n(){x&&t()}var a=l.getMeshByName("dao");a.isVisible=!1,a.material.diffuseColor.set(.5,.5,.5),a.material.ambientColor.set(1,1,1),a.actionManager=new BABYLON.ActionManager(r.scene);a.scaling.x=a.scaling.y=.03,a.scaling.z=.01,a.position.set(-.796325410979218,.10925041812464831,-.08),a.rotation.x+=Math.PI/2,a.rotation.z+=Math.PI/4;var s=l.getLightByName("ambient"),u=l.getLightByName("defaultDir1"),c=l.getLightByName("defaultDir0");s.intensity=1,s.specular.r=s.specular.g=s.specular.b=.1,c.intensity=.3,u.intensity=.5,c.direction.set(.1,0,.5),new BABYLON.DirectionalLight("dir2",new BABYLON.Vector3(0,0,-1),l).intensity=.4;var p=new BABYLON.PointLight("point0",new BABYLON.Vector3(0,-.7,-.3),l);p.intensity=.3,p.diffuse.r=p.diffuse.b=.95,p.specular=new BABYLON.Color3(.5,.5,.5),p.specular.r=p.specular.g=p.specular.b=.3;var d=new BABYLON.PointLight("point1",new BABYLON.Vector3(0,0,-.3),l);d.intensity=1,d.diffuse.r=d.diffuse.b=d.diffuse.g=1,d.specular=new BABYLON.Color3(1,1,1);var f=new BABYLON.PointLight("point2",new BABYLON.Vector3(0,-1,0),l);f.intensity=1,f.diffuse.r=f.diffuse.b=f.diffuse.g=1,f.specular=new BABYLON.Color3(1,1,1);var b=l.getMeshByName("zhengti");a.isVisible=b.isVisible=!0;b.visibility=1;var m=l.activeCamera;r.lookAtVector(new BABYLON.Vector3(0,-.2,0)),r.defaultRadius=5,r.defaultTarget=new BABYLON.Vector3(0,-.2,0);var g={upVector:{x:0,y:1,z:0},position:{x:-3.0773506586121875,y:.4276350403290541,z:-5.505300054526764},radius:6.281454917886902,rotation:{x:0,y:0,z:0},alpha:2*Math.PI-2.0319329130504142,beta:1.5597734932407785},B={upVector:{x:0,y:1,z:0},position:{x:-.023264340222961144,y:-1.4350571319132461,z:-4.60009557323524},radius:4.931219774122844,rotation:{x:0,y:0,z:0},alpha:2*Math.PI-1.531750054994979,beta:2.0905346524516046},h=l.getMeshByName("polySurface2");h.visibility=.4,h.isPickable=!1;var y=l.getMeshByName("polySurface17"),v=l.getMeshByName("polySurface2");console.log(v.position);var L=BABYLON.Mesh.CreatePlane("plane",5,l);BABYLON.DragUtil.dragOnPlane(a,L);e.on("update",i),TweenMax.to(a,2,{visibility:1,delay:2,onComplete:function(){a.isPickable=!0}}),o(m,g,2);var x=!1,N=new BABYLON.Vector3(-.1286147450268531,-.5585548406468945,-.08);a.isPickable=!0}var s={"model-url":a(1),camera:{alpha:2*Math.PI-1.53,beta:2.09,radius:5},tipURL:v.default,annotation:{visible:!1,showAnnotationPanel:!1,type:"threeDLine",line:{type:"horizontal"},tipParent:t},func:{loaded:i}};Object.assign(s,A),e.init3D(s);var r=void 0,l=void 0}}),start:function(){this.autoBindScript()},menu:i(1107)})}).call(t,i(1))}});