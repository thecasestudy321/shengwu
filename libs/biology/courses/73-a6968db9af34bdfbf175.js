webpackJsonp([73],{1395:function(e,n){e.exports={headerTitle:"用显微镜观察血管永久装片",experimentStep:[{name:"实验步骤",classes:[],detail:[{text:"点击装片盒选择装片放到显微镜下观察，调节各部件使视野明亮、物像清晰，亦可点击“自动调至最佳”按钮观察，点击目镜或视野框可全屏观察。",classes:[]}]}],purpose:{icon:"images/btn-shiyanmudi.png",name:"目的要求&nbsp;:",menu:[{text:"认识动脉和静脉血管的特点。"}]},conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"血管壁的特点？",expend:!1,answer:"动脉壁由内膜、中膜和外膜构成，内膜的表面，由单层扁平上皮构成光滑的腔面，外膜为结缔组织。<br/>静脉血管管壁薄、平滑肌和弹力纤维均较少，弹性和收缩性均较弱，管腔在断面上呈扁椭圆形。<br/>"},{}]},equipment:{menu:[{imgSrc:"assets/d1aa0137612fb8dd/nkNcNy43.png",name:"显微镜"},{imgSrc:"assets/d1aa0137612fb8dd/KXMqBzcuMQ==.png",name:"动脉横切"}],icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}},794:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){e.on("stepSet",function(){nb.commonFunc.initMicroscope(e,[{texture:"slide3",name:"动脉横切",nbsID:"0145/model_slide1",slID:"sl0017",slTexture:"sl.png",newSlide:!0}])})}}),start:function(){this.autoBindScript()},menu:Object.assign(s(1395))})}});