webpackJsonp([154],{664:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=window.TopTip;n.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){function n(){if(e._isStepComplete_)return void a.show("当前步骤完成");var n=b[m];n&&a.show(n,a.ERROR)}function t(){m=-1;var n=new TimelineMax;s.startX=s.x,s.startY=s.y,n.add(GlobalEffect.fadeIn(s)),n.to(s,1.5,{x:r.x,y:r.y,onComplete:function(){f.alpha=1}}),n.to(s,1.5,{x:s.startX,y:s.startY,onComplete:function(){e.addChildWithSamePos(f),GlobalEffect.fadeOut([s,u,p]),TweenMax.to(f,2,{x:l.x,y:l.y}),TweenMax.to(f.scale,2,{x:1,y:1,onComplete:o})}})}function o(){new TimelineMax({onComplete:function(){m=1,f.addEventListener(TouchEvent.TOUCH_BEGIN,n),nb.commonFunc.addSimpleDrag(d,{reached:i})}}).add(GlobalEffect.fadeIn(d))}function i(){m=-1,f.addChildWithSamePos(d);var t=new PIXI.Graphics;f.addChild(t),t.beginFill(),f.after.mask=t;var a=new TimelineMax({onComplete:function(){e.addChildWithSamePos(d);var t=new TimelineMax({onComplete:function(){d.addEventListener(TouchEvent.TOUCH_BEGIN,n),c.addEventListener(TouchEvent.TOUCH_BEGIN,n),e.emit("stepComplete")}});t.add([GlobalEffect.fadeOut(f),TweenMax.to(d,2,{x:c.x+50,y:c.y-50,rotation:Math.PI/2})]),t.add(GlobalEffect.fadeIn(c))}});TweenMax.to(d.substance,4,{alpha:1}),a.to(d,2,{x:95,y:672,onStart:function(){f.after.alpha=1},onUpdate:function(){t.drawRect(0,0,95,d.y)}}),a.to(d,2,{x:140,y:35,onUpdate:function(){t.drawRect(95,d.y,78,672-d.y)}})}e.initFullScreen();var d=e.cut,c=e.tip,r=e.point,s=e.tweezers,l=e.cutTarget0,u=e.tree,p=e.background;p.alpha=1;var f=s.leaf,m=0,b=["请点击发光提示获取松叶","请拖动解剖刀刮取松叶表面"];nb.commonFunc.setArg([c,d,s],"alpha",0),e.on("stepSet",function(){var a=nb.tapPoint(r.x,r.y);e.addChild(a),a.addEventListener(TouchEvent.TAP,t),p.addEventListener(TouchEvent.TOUCH_BEGIN,n)})},e.stepFunc1=function(e){function n(){if(e._isStepComplete_)return void a.show("当前步骤完成");var n=s[r];n&&a.show(n,a.ERROR)}function t(){r=-1;var n=new TimelineMax({onComplete:function(){e.emit("stepComplete")}});n.add([GlobalEffect.fadeOut(c.after),GlobalEffect.fadeIn(d)]),n.add(GlobalEffect.fadeIn(o))}e.initFullScreen();var o=e.tip1,i=e.point,d=e.root,c=e.background;c.alpha=1;var r=0,s=["请点击发光提示查看松树根系"];nb.commonFunc.setArg([o,d],"alpha",0),e.on("stepSet",function(){var a=nb.tapPoint(i.x,i.y);e.addChild(a),a.addEventListener(TouchEvent.TAP,t),c.addEventListener(TouchEvent.TOUCH_BEGIN,n)})}}),start:function(){this.autoBindScript()},menu:t(848)})},848:function(e,n){e.exports={headerTitle:"观察松树的叶和根",experimentStep:[{name:"观察\r",classes:[],detail:[{text:"点击圆圈区域，观察松树的叶，拖动刀片轻刮松叶表面，观察现象。\r",classes:[]},{text:"观察松树的树根，思考松树根的特点与环境有什么关系。",classes:[]}]}],purpose:{icon:"images/btn-shiyanmudi.png",name:"目的要求&nbsp;:",menu:[{text:"了解植物适应环境的特点。"}]},conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"松树的叶有什么特点？\r",expend:!1,answer:"松树叶呈针形，表皮外面有较厚的角质层。\r<br/>"},{question:"松树叶的特征对适应环境有什么优势？\r",expend:!1,answer:"松树一般生长在山上，山上一般土壤贫瘠，气候干旱，松树叶子呈针状，可以减少蒸腾作用，保持水分。\r<br/>"},{question:"松树的根的特点？\r",expend:!1,answer:"松的根系非常发达，大大增加了对水分和无机盐的吸收面积。是一种对干旱和贫瘠土壤的适应。<br/>"},{}]},equipment:{menu:[{imgSrc:"assets/25bbdcd06c32d477/pVA1LjI=.png",name:"镊子"},{imgSrc:"assets/25bbdcd06c32d477/NagANS4x.png",name:"解剖刀"}],icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}}});