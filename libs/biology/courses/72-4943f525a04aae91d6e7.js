webpackJsonp([72],{1396:function(e,n){e.exports={headerTitle:"观察神经干细胞永久装片",experimentStep:[{name:"实验步骤",classes:[],detail:[{text:"点击装片盒选择装片放到显微镜下观察，调节各部件使视野明亮、物像清晰，亦可点击“自动调至最佳”按钮观察，点击目镜或视野框可全屏观察。",classes:[]}]}],purpose:{icon:"images/btn-shiyanmudi.png",name:"目的要求&nbsp;:",menu:[{text:"认识神经干细胞的特点。"}]},conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"神经干细胞有什么特点？",expend:!1,answer:"神经干细胞具有分化为神经元、星形胶质细胞和少突胶质细胞的能力，能自我更新，并足以提供大量脑组织细胞的细胞群。<br/>"},{}]},equipment:{menu:[{imgSrc:"assets/ca0a908e85ac27b2/nkNcMS4z.png",name:"显微镜"},{imgSrc:"assets/ca0a908e85ac27b2/3S1yR2bFRzEuMA==.png",name:"神经干细胞装片"}],icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}},795:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){e.on("stepSet",function(){nb.commonFunc.initMicroscope(e,[{texture:"slide3",name:"神经干细胞装片",nbsID:"0145/model_slide1",slID:"sl0062",slTexture:"sl1.png",newSlide:!0}])})}}),start:function(){this.autoBindScript()},menu:Object.assign(s(1396))})}});