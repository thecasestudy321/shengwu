webpackJsonp([74],{1394:function(e,n){e.exports={headerTitle:"用显微镜观察人血的永久涂片",experimentStep:[{name:"实验步骤\r",classes:[],detail:[{text:"点击装片盒选择装片放到显微镜下观察，调节各部件使视野明亮、物像清晰，亦可点击“自动调至最佳”按钮观察，点击目镜或视野框可全屏观察。",classes:[]}]}],purpose:{icon:"images/btn-shiyanmudi.png",name:"目的要求&nbsp;:",menu:[{text:"认识红细胞和白细胞。"}]},conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"你观察到的人血永久涂片中数量最多的是哪种细胞？\r",expend:!1,answer:"数量最多的是红细胞。\r<br/>"},{question:"你是怎样区别红细胞和白细胞的？\r",expend:!1,answer:"红细胞是两面凹的圆饼状，红色，数量多，不用染色就可以观察到；白细胞的个体比红细胞大，数量少，只有经过染色才能观察到。<br/>"},{}]},equipment:{menu:[{imgSrc:"assets/5f55a6ece505a982/nkNcOS40.png",name:"显微镜"},{imgSrc:"assets/5f55a6ece505a982/Qq2CRzUuMA==.png",name:"人血涂片"}],icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}},793:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){e.on("stepSet",function(){nb.commonFunc.initMicroscope(e,[{texture:"slide3",name:"人血涂片",nbsID:"0145/model_slide1",slID:"sl0032",slTexture:"sl.png",newSlide:!0}])})}}),start:function(){this.autoBindScript()},menu:Object.assign(s(1394))})}});