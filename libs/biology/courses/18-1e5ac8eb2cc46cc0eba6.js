webpackJsonp([18],{681:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return r[e]}Object.defineProperty(n,"__esModule",{value:!0});var o=t(943),l=a(o),s=t(953),d=a(s),r=[l.default.model,l.default.model1],u={globalMaterial:{environmentReflection:{enabled:!1,level:0},roughness:1},light:{name:"default"},pipeline:{motionBlur:{enabled:!1,motionStrength:.005,motionBlurSamples:32},bloom:{enabled:!1},fxaaEnabled:!0}};n.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(n){function t(){var e=n.scene3D.scene;e.activeCamera;e.getLightByName("ambient").intensity=1.2;var t=e.getLightByName("defaultDir1");e.getLightByName("defaultDir0").intensity=0,t.intensity=.4,t.direction.set(0,1,0);var a=new BABYLON.PointLight("po1",new BABYLON.Vector3(-2.35,6.32,.95),e);a.intensity=.2;new BABYLON.PointLight("po2",new BABYLON.Vector3(2.55,6.32,-2.92),e);a.intensity=.3}var a={"model-url":i(0),camera:{alpha:1.07,beta:1.47},"clear-color":68,tipURL:d.default,annotation:{showAnnotationPanel:!1,type:"threeDLine",line:{color:16777215,type:"horizontal"},tipParent:e},func:{loaded:t}};Object.assign(a,u),n.init3D(a)},e.stepFunc1=function(e){function n(){var n=e.scene3D.scene;n.activeCamera;n.getLightByName("ambient").intensity=1.2;var t=n.getLightByName("defaultDir1");n.getLightByName("defaultDir0").intensity=0,t.intensity=.4,t.direction.set(0,1,0);var a=new BABYLON.PointLight("po1",new BABYLON.Vector3(-2.35,6.32,.95),n);a.intensity=.2;new BABYLON.PointLight("po2",new BABYLON.Vector3(2.55,6.32,-2.92),n);a.intensity=.3}var t={"model-url":i(1),camera:{alpha:-2,beta:1.15},"clear-color":68,func:{loaded:n},animation:{autoPlay:{play:!0,timeScale:6}}};Object.assign(t,u),e.init3D(t)}}),start:function(){this.autoBindScript()},menu:t(954)})},943:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(944),o=a(i),l=t(945),s=a(l),d=t(946),r=a(d),u=t(947),c=a(u),p=t(948),f=a(p),b=t(949),m=a(b),g=t(950),y=a(g),B=t(951),h=a(B),L=t(952),x=a(L),v={};v.beiqi5_NRM=o.default,v.model=s.default,v.model1=r.default,v.model1_nb_babylon=c.default,v.model_nb_babylon=f.default,v.shenti_1=m.default,v.shenti_NRM=y.default,v.uvbeiqi5=h.default,v.yanjing=x.default,n.default=v},944:function(e,n,t){e.exports=t.p+"nb-models/adeb1211-0155-1d480884.jpg"},945:function(e,n,t){e.exports=t.p+"nb-models/adeb1211-0155-0d059434.babylon"},946:function(e,n,t){e.exports=t.p+"nb-models/adeb1211-0155-a4fdebc6.babylon"},947:function(e,n,t){e.exports=t.p+"nb-models/adeb1211-0155-a4fdebc6-2d.jpg"},948:function(e,n,t){e.exports=t.p+"nb-models/adeb1211-0155-0d059434-2d.jpg"},949:function(e,n,t){e.exports=t.p+"nb-models/adeb1211-0155-c99ffee5.jpg"},950:function(e,n,t){e.exports=t.p+"nb-models/adeb1211-0155-f46858a4.jpg"},951:function(e,n,t){e.exports=t.p+"nb-models/adeb1211-0155-5aff880d.jpg"},952:function(e,n,t){e.exports=t.p+"nb-models/adeb1211-0155-b7186074.jpg"},953:function(e,n,t){e.exports=t.p+"d751713988987e9331980363e24189ce.json"},954:function(e,n){e.exports={headerTitle:"观察蜥蜴",experimentStep:[{name:"实验步骤\r",classes:[],detail:[{text:"观察蜥蜴形态结构。\r",classes:[]},{text:"观察蜥蜴的爬行。",classes:[]}]}],conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"观察蜥蜴，它的体形和四肢有什么特点？\r",expend:!1,answer:"体表有硬鳞甲覆盖，可以防止水分的散失，因此比两栖动物更适应陆地上的生活。四肢有明显的脚爪的分化，能更好的适应陆地上的各种环境，同时四肢成为非常高等的运动器官，具备快速的奔跑和攀爬的用途。\r<br/>"},{question:"仔细观察蜥蜴的体表，有什么特殊结构？想一想，这对于适应陆地生活有什么意义？\r",expend:!1,answer:"蜥蜴的皮肤干燥而粗糙，表面覆盖有角质鳞片，可以减少体内水分的蒸发；不再依靠皮肤辅助呼吸。<br/>"},{}]},equipment:{icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}}});