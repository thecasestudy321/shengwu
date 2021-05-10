webpackJsonp([109],{1083:function(e,n){e.exports={headerTitle:"尿液成分的测定",experimentStep:[{name:"实验步骤\r",classes:[],detail:[{text:"吸取一滴尿液滴在载玻片上，点燃酒精灯，将载玻片放到酒精灯上烘烤，直到尿液被烘干。",classes:[]}]}],purpose:{icon:"images/btn-shiyanmudi.png",name:"目的要求&nbsp;:",menu:[{text:"分析尿液的成分。"}]},conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"在烘烤过的载玻片上，你看到了什么？说说观察结果。\r",expend:!1,answer:"烘烤过的载玻片上出现了白色粉末状物质。\r<br/>血液经过肾小球和肾小囊壁时血液中的大分子的物质如血细胞、蛋白质外，其余的如水、无机盐、葡萄糖和尿素经过过滤形成原尿；然后原尿在经过肾小管时，在肾小管的重吸收作用下把全部葡萄糖、部分水还有部分无机盐重新吸收，那么剩下的水和无机盐、尿素等就会形成尿液，所以在实验中，烘烤之后水被蒸发了，载玻片上看到的白色粉末状物质为无机盐。<br/>"},{}]},equipment:{menu:[{imgSrc:"assets/f178006b0a65b291/ioG2My4y.png",name:"三脚架"},{imgSrc:"assets/f178006b0a65b291/rLI3LjU=.png",name:"尿液"},{imgSrc:"assets/f178006b0a65b291/0vQwLjg=.png",name:"火柴"},{imgSrc:"assets/f178006b0a65b291/8S1HNi4w.png",name:"载玻片"},{imgSrc:"assets/f178006b0a65b291/zy5vMC45.png",name:"酒精灯"},{imgSrc:"assets/f178006b0a65b291/XEhRMS40.png",name:"石棉网"}],icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}},729:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){function n(){a.txt.text="尿液";var e=new TimelineMax({onComplete:function(){nb.commonFunc.addSimpleDrag(a,{reached:t,scale:.75})}});e.add(TweenMax.to(a,1,{x:o.x,y:o.y-500})),e.add(GlobalEffect.fadeIn([o,i,c]))}function t(){++r<2||(TweenMax.to(a.water,5,{alpha:0,ease:Power1.easeInOut}),TweenMax.to(a.salt,5,{alpha:1,ease:Power1.easeInOut,onComplete:function(){GlobalEffect.fadeOut([o,i,c,a.water]),TweenMax.to(a,1,{y:"-=150",ease:Power1.easeInOut}),TweenMax.to(a.scale,1,{x:1.4,y:1.4,ease:Power1.easeInOut,onComplete:function(){GlobalEffect.fadeIn(a.tip),e.emit("stepComplete")}})}}))}var a=e.glass,s=e.burette,o=e.asbestos,i=e.shelf,c=e.spirit;s.setColor(16770913,.4),a.setColor(16770913,0),a.setTotalCapacity(1e5),a.setCurrentCapacity("0%"),a.water.scale.x=a.water.scale.y=0,nb.commonFunc.setArg([o,i,c,a.tip,a.salt],"alpha",0),c.setInteractice(!1),e.on("stepSet",function(){s.bindContainer({container:a,capacity:.4,offsetX:-50}),s.on("itemComplete",function(){TweenMax.to(a.water.scale,1,{x:1,y:1,ease:Power2.easeInOut}),s.interactive=!1}),s.on("complete",function(){GlobalEffect.fadeOut(s),setTimeout(n,800)})});var r=0;c.on("lightup",t)}}),start:function(){this.autoBindScript()},menu:t(1083)})}});