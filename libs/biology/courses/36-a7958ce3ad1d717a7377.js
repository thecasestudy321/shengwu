webpackJsonp([36],{1009:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1010),o=a(i),s=t(1011),l=a(s),u=t(1012),r=a(u),d=t(1013),f=a(d),c=t(1014),b=a(c),p={};p.model=o.default,p.model_nb_babylon=l.default,p.t1=r.default,p.t2=f.default,p.tietu3=b.default,n.default=p},1010:function(e,n,t){e.exports=t.p+"nb-models/66ff67ba-0037-0d059434.babylon"},1011:function(e,n,t){e.exports=t.p+"nb-models/66ff67ba-0037-0d059434-2d.jpg"},1012:function(e,n,t){e.exports=t.p+"nb-models/66ff67ba-0037-916bc6b5.png"},1013:function(e,n,t){e.exports=t.p+"nb-models/66ff67ba-0037-afadf1dd.jpg"},1014:function(e,n,t){e.exports=t.p+"nb-models/66ff67ba-0037-512bec64.png"},1015:function(e,n){e.exports={headerTitle:"观察菜豆的花",conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"菜豆的花有什么特点？\r",expend:!1,answer:"菜豆花有5片，花瓣5片呈蝶形花冠；雄蕊10枚，其中9枚花丝合生，雌蕊一枚。<br/>"},{}]},equipment:{icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}},708:function(e,n,t){"use strict";function a(e){return s[e]}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1009),o=function(e){return e&&e.__esModule?e:{default:e}}(i),s=[o.default.model,o.default.tietu3],l={globalMaterial:{environmentReflection:{enabled:!1,level:0},roughness:1},light:{name:"default"},pipeline:{motionBlur:{enabled:!1,motionStrength:.005,motionBlurSamples:32},bloom:{enabled:!1}}};n.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){function n(){var n=e.scene3D.scene,t=n.getLightByName("ambient");t.specular.r=t.specular.g=t.specular.b=0,t.intensity=3;var a=n.getLightByName("defaultDir1");a.position.set(0,1,1),a.direction.set(0,-1,-1),a.intensity=2,a.radius=1;var i=n.getLightByName("defaultDir0");i.intensity=3,i.position.set(0,-1,1),i.direction.set(0,1,-1);var o=n.getMeshByName("pCube2");o.isPickable=!1,o.bindMesh=n.getMeshByName("pCube3");var l=n.getMeshByName("pCube4");l.isPickable=!1,l.bindMesh=n.getMeshByName("pCube5");var u=new BABYLON.Texture(s[1],n);u.alpha=.98,n.meshes.forEach(function(e){e.material&&(e.material.diffuseTexture=u,e.material.diffuseTexture.hasAlpha=!0,e.material.backFaceCulling=!1)})}var t={"model-url":a(0),camera:{alpha:5.6,beta:1.2},"clear-color":68,plugins:[Object.assign(BABYLON.plugins.ObserveWireframe,{data:{nameFilter:/./,bindAnnotationToMesh:!0,wireframeAlpha:.01}})],func:{loaded:n}};Object.assign(t,l),e.init3D(t)}}),start:function(){this.autoBindScript()},menu:t(1015)})}});