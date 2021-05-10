webpackJsonp([126],{1008:function(e,t){e.exports={headerTitle:"茎的输导功能",experimentStep:[{name:"实验步骤\r",classes:[],detail:[{text:"用解剖刀切去枝条末端一段茎，拖动枝条到装有红墨水的锥形瓶中，光照3小时，点击叶片观察。\r",classes:[]},{text:"用解剖刀对茎进行纵切和横切，观察茎的切面。",classes:[]}]}],purpose:{icon:"images/btn-shiyanmudi.png",name:"目的要求&nbsp;:",menu:[{text:"观察水分和无机盐在茎内的运输。\r"},{text:"观察并识别水分和无机盐在茎中运输的部位。"}]},conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"水在茎中的运输途径是怎样的？\r",expend:!1,answer:"水分和无机盐就是在木质部中运输的。\r<br/>"},{question:"枝条的哪一部分被染红了？由此得出什么结论？\r",expend:!1,answer:"茎内被染成红色的结构是木质部，其内含有运输水分和无机盐的通道。<br/>"},{}]},equipment:{menu:[{imgSrc:"assets/5e9167571c4fdf5f/+xQ0OC40.png",name:"红墨水"},{imgSrc:"assets/5e9167571c4fdf5f/emyEBGE3LjA=.png",name:"带叶的枝条"},{imgSrc:"assets/5e9167571c4fdf5f/NagAOC41.png",name:"解剖刀"}],icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}},707:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=1,o=Power1.easeInOut;t.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){function t(){TweenMax.to(f,n,{y:"+=90",onComplete:function(){GlobalEffect.fadeOut([f,m]),TweenMax.to(m,n,{y:"+=50",ease:Power2.easeInOut}),setTimeout(a,800)}})}function a(){TweenMax.to(c,n,{x:"+=600",onComplete:function(){GlobalEffect.fadeIn(r),setTimeout(i,800)}})}function i(){nb.commonFunc.addSimpleDrag(c,{reached:l})}function l(){GlobalEffect.fadeIn([d,u]),TweenMax.to([c,r],n,{x:"+=250",ease:o}),setTimeout(function(){d.emit(nb.timelineProcessing.event.ON_INIT)},1200),d.on(nb.timelineProcessing.event.ON_COMPLETE,function(){d.interactive=!1,GlobalEffect.fadeOut([d,u]),s()}),d.on(nb.timelineProcessing.event.ON_PLAY,function(e){var t=c.red,a=t.r0,n=t.r1,o=t.r2;e<1/3?(a.alpha=3*e,c.leaf.red.alpha=n.alpha=0,o.alpha=0):e<2/3?(a.alpha=1,c.leaf.red.alpha=n.alpha=3*(e-1/3),o.alpha=0):(a.alpha=1,c.leaf.red.alpha=n.alpha=1,o.alpha=3*(e-2/3)),c.red.alpha=1})}function s(){var t=e.toLocal(c.leaf.getGlobalPosition()),a=nb.tapPoint(t.x,t.y);e.addChild(a),a.addEventListener(TouchEvent.TAP,function(){e.addChildWithSamePos(c.leaf),GlobalEffect.fadeOut([c,r]),setTimeout(function(){new TimelineMax({onComplete:function(){f.x=f.startX,f.y=f.startY,c.x=c.startX,c.y=c.startY,c.leaf.txt.text="叶脉被染红的叶片",c.leaf.txt.scale.x=c.leaf.txt.scale.y=.5,e.emit("stepComplete")}}).add([TweenMax.to(c.leaf,n,{x:x.x,y:x.y,ease:o,rotation:-Math.PI/2}),TweenMax.to(c.leaf.scale,n,{x:2,y:2,ease:o})])},800)})}var c=e.branch,f=e.cut,r=e.conical,d=e.timeline,u=e.sun,m=e.skin,x=e.leaf;nb.commonFunc.setArg([r,d,u,x],"alpha",0),r.setCurrentCapacity("100%"),r.setColor(6488064,.5),c.txt.text="带叶枝条",f.txt.text="解剖刀",r.txt.text="红墨水",d.txt.text="3小时",e.on("stepSet",function(){c.startX=c.x,c.startY=c.y,f.startX=f.x,f.startY=f.y,nb.commonFunc.addSimpleDrag(f,{reached:t})})},e.stepFunc1=function(e){function t(){if(!m){m=!0;var t=new TimelineMax;t.to(s,n,{x:"+=80",ease:o}),t.add([TweenMax.to(l.root,n,{y:"+=80",ease:o,onComplete:function(){e.addChildWithSamePos(l.root),GlobalEffect.fadeOut(l)}}),TweenMax.to(s,n,{alpha:0,ease:o})]),t.to(l.root,n,{x:c.x,y:c.y}),t.add([GlobalEffect.fadeOut(l.root),GlobalEffect.fadeIn(c)]),t.to(s,n,{alpha:1,ease:o,onStart:function(){s.x=s.startX,s.y=s.startY,s.txt.visible=!0},onComplete:function(){s.removeSimpleDrag(f),f.x=c.x,f.y=c.y,e.addChildWithSamePos(f),e.addChildWithSamePos(s),nb.commonFunc.addSimpleDrag(s,{reached:a})}})}}function a(){var e=new TimelineMax({onComplete:i});e.to(s,n,{x:d.x,y:d.y,ease:o}),e.to(s,n,{x:c.x,y:c.y,ease:o}),e.to(s,n,{x:r.x,y:r.y,ease:o}),e.add(GlobalEffect.fadeOut(s))}function i(){e.addChildWithSamePos(c.block);var t=new TimelineMax({onComplete:function(){e.emit("stepComplete")}});t.add([TweenMax.to(c.block,n,{x:u.x,y:u.y,ease:o}),TweenMax.to(c.block.scale,n,{x:2.5,y:2.5}),GlobalEffect.fadeOut(c)]),t.add([GlobalEffect.fadeOut(c.block),GlobalEffect.fadeIn(u)])}var l=e.branch,s=e.cut,c=e.surface,f=e.cutTarget0,r=e.p1,d=e.p0,u=e.block;l.txt.text="吸红墨水后的枝条",s.txt.text="解剖刀",c.txt.text="枝条纵截面",l.leaf.visible=!1,l.red.alpha=1,nb.commonFunc.setArg([c,u],"alpha",0),e.on("stepSet",function(){s.startX=s.x,s.startY=s.y,nb.commonFunc.addSimpleDrag(s,{reached:t})});var m=!1}}),start:function(){this.autoBindScript()},menu:a(1008)})}});