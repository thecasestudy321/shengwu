webpackJsonp([31],{680:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return r[e]}Object.defineProperty(n,"__esModule",{value:!0});var i=t(934),l=a(i),s=t(941),u=a(s),r=[l.default.model,l.default.model1],d={globalMaterial:{environmentReflection:{enabled:!1,level:0},roughness:1},light:{name:"default"},pipeline:{motionBlur:{enabled:!1,motionStrength:.005,motionBlurSamples:32},bloom:{enabled:!1},fxaaEnabled:!0}};n.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(n){function t(){var e=n.scene3D.scene;e.activeCamera;e.getLightByName("ambient").intensity=1.2;var t=e.getLightByName("defaultDir1");e.getLightByName("defaultDir0").intensity=0,t.intensity=.4,t.direction.set(0,1,0);var a=new BABYLON.PointLight("po1",new BABYLON.Vector3(-2.35,6.32,.95),e);a.intensity=.2;new BABYLON.PointLight("po2",new BABYLON.Vector3(2.55,6.32,-2.92),e);a.intensity=.3,e.getMaterialByName("changguwanzhengSG").bumpTexture.level=.1}var a={"model-url":o(0),camera:{alpha:4.72,beta:1.51},"clear-color":68,tipURL:u.default,annotation:{showAnnotationPanel:!1,type:"threeDLine",line:{color:16777215,type:"horizontal"},tipParent:e},func:{loaded:t}};Object.assign(a,d),n.init3D(a)}}),start:function(){this.autoBindScript()},menu:Object.assign(t(942),{hideLeftMenu:!0})})},934:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(935),i=a(o),l=t(936),s=a(l),u=t(937),r=a(u),d=t(938),b=a(d),c=t(939),p=a(c),f=t(940),m=a(f),g={};g.map1=i.default,g.model=s.default,g.model1=r.default,g.model1_nb_babylon=b.default,g.model_nb_babylon=p.default,g.shenjing2_NRM=m.default,n.default=g},935:function(e,n,t){e.exports=t.p+"nb-models/bb332482-0057-6ecfa83b.jpg"},936:function(e,n,t){e.exports=t.p+"nb-models/bb332482-0057-0d059434.babylon"},937:function(e,n,t){e.exports=t.p+"nb-models/bb332482-0057-a4fdebc6.babylon"},938:function(e,n,t){e.exports=t.p+"nb-models/bb332482-0057-a4fdebc6-2d.jpg"},939:function(e,n,t){e.exports=t.p+"nb-models/bb332482-0057-0d059434-2d.jpg"},940:function(e,n,t){e.exports=t.p+"nb-models/bb332482-0057-46d3fc92.jpg"},941:function(e,n,t){e.exports=t.p+"c069ceab1ac65dadbeba9144f4573c83.json"},942:function(e,n){e.exports={headerTitle:"哺乳动物的长骨",experimentStep:[{name:"实验步骤\r",classes:[],detail:[{text:"观察长骨的外观。",classes:[]}]}],purpose:{icon:"images/btn-shiyanmudi.png",name:"目的要求&nbsp;:",menu:[{text:"了解长骨的结构。"}]},conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"骨膜的血管和神经有什么作用？\r",expend:!1,answer:"骨膜中的血管起营养骨组织的作用；神经感受刺激。\r<br/>"},{question:"骨干中央和两端的骨质疏密程度一样吗？\r",expend:!1,answer:"骨干部的骨质致密坚硬，称为骨密质；骨两端内部的骨质比较疏松，称为骨松质。这样的骨坚而不重。<br/>"},{}]},equipment:{icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}}});