webpackJsonp([76],{1392:function(e,n){e.exports={headerTitle:"观察人体的心肌纵切永久装片",experimentStep:[{name:"实验步骤\r",classes:[],detail:[{text:"点击装片盒选择装片放到显微镜下观察，调节各部件使视野明亮、物像清晰，亦可点击“自动调至最佳”按钮观察，点击目镜或视野框可全屏观察。",classes:[]}]}],purpose:{icon:"images/btn-shiyanmudi.png",name:"目的要求&nbsp;:",menu:[{text:"了解人体细胞的特点。"}]},conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"肌肉组织主要特征、主要分布位置和功能？\r",expend:!1,answer:"肌肉组织主要是由肌细胞构成，具有收缩、舒张等功能。如附着在骨骼肌上的肌肉、心脏壁上的肌肉、消化管壁上的肌肉等。肌肉组织在动物运动中发挥作用。<br/>"},{}]},equipment:{menu:[{imgSrc:"assets/80d61f4c7a1a8890/nkNcMy4x.png",name:"显微镜"},{imgSrc:"assets/80d61f4c7a1a8890/Q94HRzguMg==.png",name:"心肌切片"}],icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}},791:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){e.on("stepSet",function(){nb.commonFunc.initMicroscope(e,[{texture:"slide3",name:"心肌切片",nbsID:"0145/model_slide1",slID:"sl0042",slTexture:"sl.png",newSlide:!0}])})}}),start:function(){this.autoBindScript()},menu:Object.assign(s(1392))})}});