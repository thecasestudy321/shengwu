webpackJsonp([81],{1374:function(e,n){e.exports={headerTitle:"观察蚯蚓横切永久装片",experimentStep:[{name:"实验步骤\r",classes:[],detail:[{text:"点击装片盒选择装片放到显微镜下观察，调节各部件使视野明亮、物像清晰，亦可点击“自动调至最佳”按钮观察，点击目镜或视野框可全屏观察。",classes:[]}]}],purpose:{icon:"images/btn-shiyanmudi.png",name:"目的要求&nbsp;:",menu:[{text:"了解蚯蚓体腔的特点。"}]},conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"蚯蚓的体壁有什么特点？\r",expend:!1,answer:"蚯蚓的体壁由角质膜、上皮、环肌层、纵肌层和体腔上皮等构成。<br/>"},{}]},equipment:{menu:[{imgSrc:"assets/9061198a99f995e4/nkNcNi44.png",name:"显微镜"},{imgSrc:"assets/9061198a99f995e4/Nf0qkDdHMC4x.png",name:"蚯蚓横切装片"}],icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}},782:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){e.on("stepSet",function(){nb.commonFunc.initMicroscope(e,[{texture:"slide3",name:"蚯蚓横切",nbsID:"0145/model_slide1",slID:"sl0028",slTexture:"sl.png",newSlide:!0}])})}}),start:function(){this.autoBindScript()},menu:Object.assign(s(1374))})}});