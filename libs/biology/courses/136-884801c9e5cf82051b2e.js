webpackJsonp([136],{696:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=Power1.easeInOut,i={totalCapacity:.7,color:13748546,alphaLiquid:.6};e.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(t){t.stepFunc0=function(t){function e(t,e){var n=e-t;return parseInt(Math.random()*n+t)}var n=t.botany0,i=t.botany1,o=t.scissors;n.txt.text="枝条A",i.txt.text="枝条B";var s=i.yz1,c=i.yz2,r=i.yz3,u=i.yz4,l=i.yz5,m=i.yz6,p=i.yz7,b=[[s,c],[r],[u],[p,l,m]];t.on("stepSet",function(){function n(){for(var n=new TimelineMax({onComplete:function(){GlobalEffect.fadeOut(o),t.emit("stepComplete")}}),s=b.length,c=0;c<s;c++)!function(t){n.add(o.cutting(1,function(){i.addChildWithSamePos(b[t][0]);var n=b[t+1]?b[t+1][0]:{x:200,y:-200};TweenMax.to(o,.5,{x:i.x+n.x-10,y:i.y+n.y-3,ease:a,onStart:function(){var n=!0,i=!1,o=void 0;try{for(var s,c=b[t][Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var r=s.value;TweenMax.to(r,.8,{y:"+="+e(140,200),x:(e(-2,2)>0?"+=":"-=")+e(10,25),ease:a}),TweenMax.to(r.scale,1,{x:.5,y:.5,ease:a})}}catch(t){i=!0,o=t}finally{try{!n&&c.return&&c.return()}finally{if(i)throw o}}GlobalEffect.fadeOut(b[t])}})}))}(c)}o.cut(b[0][0],n)})},t.stepFunc1=function(t){function e(t){f++;var e=t.name.substr(-1);r.addChildWithSamePos(t),r.addChildAt(t,r.getChildIndex(r["tube"+e])-1),TweenMax.to(t,1,{y:"+=60",ease:a,onComplete:function(){var e=parseInt(t.name.substr(-1))+1;r["txt"+e].text=t.txt.text,f>=2&&o()}})}function n(){if(b++,u.visible=!1,l.visible=!0,b>=2)return l.interactive=!1,GlobalEffect.fadeOut(l),void t.emit("stepComplete")}function o(){u.visible=!0,GlobalEffect.fadeIn(u)}var s=t.botany0,c=t.botany1,r=t.shelf,u=t.burette,l=t.burette1;s.txt.text="枝条A",c.txt.text="枝条B",r.txt.text="试管架",r.alpha=0;var m=r.tube0,p=r.tube1;u.text.text=u.txt.text="植物油",l.text.text=l.txt.text="植物油",u.setColor(13748546,.6),l.setColor(13748546,.6),l.visible=!1,nb.commonFunc.initContainer(m,i),nb.commonFunc.initContainer(p,i),u.visible=!1,u.alpha=0,m.alpha=p.alpha=0,u.bindContainer({container:m,capacity:.5,offsetX:20}),l.bindContainer({container:p,capacity:.5,offsetX:20}),u.on("complete",n),l.on("complete",n);var b=0;u.on("onDrop",function(){r["tube"+b].alpha=1}),l.on("onDrop",function(){r["tube"+b].alpha=1}),t.on("stepSet",function(){GlobalEffect.fadeIn(r),nb.commonFunc.addSimpleDrag(s,{reached:function(){e(s)}}),nb.commonFunc.addSimpleDrag(c,{reached:function(){e(c)}})});var f=0},t.stepFunc2=function(t){function e(){r++,n.addChildWithSamePos(this),GlobalEffect.fadeOut(this.background),GlobalEffect.fadeIn([this.state0,this.rope]),r>=2&&t.emit("stepComplete")}var n=t.shelf,a=t.bag0,o=t.bag1,s=n.tube0,c=n.tube1;nb.commonFunc.initContainer(s,Object.assign({currentCapacity:"42.551%"},i)),nb.commonFunc.initContainer(c,Object.assign({currentCapacity:"42.551%"},i)),n.txt1.text="枝条A",n.txt2.text="枝条B",n.txt.text="试管架",a.txt.text=o.txt.text="透明塑料袋",nb.commonFunc.setArg([a,o],"alpha",0),a.alpha=o.alpha=0,t.on("stepSet",function(){nb.simpleDragGroup([a,o],"bag"),a.addEventListener(nb.simpleDragGroup.event.REACH_TARGET,e),o.addEventListener(nb.simpleDragGroup.event.REACH_TARGET,e)});var r=0},t.stepFunc3=function(t){function e(t){u.state0.alpha=1-t,u.state1.alpha=t,c.y=c.startY+10*t}function n(){GlobalEffect.fadeOut(o),t.emit("stepComplete")}var a=t.shelf,o=t.timeline,s=t.sun,c=a.tube0,r=a.tube1,u=a.bag0;nb.commonFunc.initContainer(c,Object.assign({currentCapacity:"42.551%"},i)),nb.commonFunc.initContainer(r,Object.assign({currentCapacity:"42.551%"},i)),a.txt1.text="枝条A",a.txt2.text="枝条B",a.txt.text="试管架",o.txt.text="3小时",nb.commonFunc.setArg([o,s],"alpha",0),o.on(nb.timelineProcessing.event.ON_COMPLETE,n),o.on(nb.timelineProcessing.event.ON_PLAY,e),c.startY=c.y,t.on("stepSet",function(){var t=new TimelineMax({onComplete:function(){o.emit(nb.timelineProcessing.event.ON_INIT)}});t.add(GlobalEffect.fadeIn(s)),t.add(GlobalEffect.fadeIn(o))})}}),start:function(){this.autoBindScript()},menu:n(997)})},997:function(t,e){t.exports={headerTitle:"植物的蒸腾失水",experimentStep:[{name:"实验步骤\r",classes:[],detail:[{text:"取两个生长状况相同的枝条A、B，B枝条剪掉全部叶片。\r",classes:[]},{text:"将两个枝条分别插入盛有等量水的2个试管中，并向液面滴一滴植物油。\r",classes:[]},{text:"用透明塑料袋分别套在两个枝条上，结扎塑料袋口，使其不漏气。\r",classes:[]},{text:"将实验装置放于有阳光温暖的地方，3小时后观察现象。",classes:[]}]}],purpose:{icon:"images/btn-shiyanmudi.png",name:"目的要求&nbsp;:",menu:[{text:"了解植物蒸腾作用。\r"},{text:""}]},conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"两个试管内的水面上为什么要滴植物油？\r",expend:!1,answer:"减少水分蒸发对实验的影响。\r<br/>"},{question:"为什么要将实验装置放在温暖有阳光的地方？\r",expend:!1,answer:"在阳光下植物流失的水分多，气孔就会张大，蒸腾作用就会越明显，越快。\r<br/>"},{question:"描述两个塑料袋上出现的实验现象。 \r",expend:!1,answer:"A枝条塑料袋内壁上会凝结有水珠，其散失的水分来自于锥形瓶内的水分；B纸条剪去了叶片，枝条不散失水分，因此，B枝条塑料袋内壁上不会有水珠。<br/>"},{}]},equipment:{menu:[{imgSrc:"assets/99cb58d2d19256c9/pH51Mi40.png",name:"天竺葵"},{imgSrc:"assets/99cb58d2d19256c9/vAA3LjA=.png",name:"剪刀"},{imgSrc:"assets/99cb58d2d19256c9/UQi2NC4z.png",name:"试管架"},{imgSrc:"assets/99cb58d2d19256c9/T6L0oTUuNw==.png",name:"胶头滴管"},{imgSrc:"assets/99cb58d2d19256c9/TlA4LjA=.png",name:"绳子"},{imgSrc:"assets/99cb58d2d19256c9/f9W5MS43.png",name:"植物油"},{imgSrc:"assets/99cb58d2d19256c9/tyGLMC4z.png",name:"塑料袋"}],icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}}});