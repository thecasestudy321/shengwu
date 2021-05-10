webpackJsonp([140],{692:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.initStep=function(e){e.bottle.txt.y=e.bottle1.txt.y+=10,e.bottle.txt.text="萌发的大豆",e.bottle1.txt.text="煮熟放冷的大豆"},e.stepFunc0=function(t){var n=t.timeline,a=t.sun;e.initStep(t),nb.commonFunc.setArg([n,a],"alpha",0),t.on("stepSet",function(){setTimeout(function(){GlobalEffect.fadeIn([n,a]),n.emit(nb.timelineProcessing.event.ON_INIT)},1500)}),n.on(nb.timelineProcessing.event.ON_COMPLETE,function(){GlobalEffect.fadeOut([n,a]),t.emit("stepComplete")})},e.stepFunc1=function(t){function n(){for(var e=0;e<2;e++){var t=d[e];t.p&&(t.p.visible=!1);var n=t.cover,i=new TimelineMax({onComplete:function(){a()}});i.add(TweenMax.to(n,1,{y:"-=180",x:"-=80",rotation:-Math.PI/6})),i.add(GlobalEffect.fadeOut(n))}}function a(){p=!0,GlobalEffect.fadeIn([c,l]),setTimeout(function(){nb.commonFunc.addSimpleDrag(r,{reached:i})},800)}function i(){var e=r.y;TweenMax.to(r,3,{y:"+= 200",ease:Power1.easeInOut,onUpdate:function(){var t=e-r.y;u.scale.x=u.scale.y=.8*Math.max(1+t/50,0),m.scale.x=m.scale.y=.9*Math.max(1+t/5e3,0)},onComplete:function(){TweenMax.to(m.scale,6,{x:0,y:0,ease:Power1.easeInOut,onComplete:function(){t.emit("stepComplete")}})}})}var o=t.bottle,s=t.bottle1,c=t.candle0,l=t.candle1,r=t.candles,d=[o,s];r.addChildWithSamePos(c),r.addChildWithSamePos(l);var u=ParticleUtil.getParticle(ParticleUtil.particles.outSide_fire),m=ParticleUtil.getParticle(ParticleUtil.particles.outSide_fire),p=!1;u.bind(c,-5,0),c.addChild(u),m.bind(l,-5,0),l.addChild(m),u.scale.x=u.scale.y=m.scale.x=m.scale.y=.7,nb.commonFunc.setArg([c,l],"alpha",0),e.initStep(t),t.on("stepSet",function(){for(var e=0;e<d.length;e++){var t=d[e],a=nb.tapPoint(t.cover.x,t.cover.y);t.addChild(a),t.p=a,a.addEventListener(TouchEvent.TAP,function(){n()})}}),t.on("update",function(){p&&(u.render(),m.render())})}}),start:function(){this.autoBindScript()},menu:n(993)})},993:function(e,t){e.exports={headerTitle:"种子萌发时吸收氧气",experimentStep:[{name:"实验步骤：\r",classes:[],detail:[{text:"将分别装有煮熟放冷的大豆和萌发的大豆两个试剂瓶，在温暖的地方放24小时。\r",classes:[]},{text:"打开瓶盖，将燃烧的蜡烛放入瓶中，观察蜡烛在甲、乙两瓶的燃烧情况。\r",classes:[]}]}],purpose:{icon:"images/btn-shiyanmudi.png",name:"目的要求&nbsp;:",menu:[{text:"验证种子萌发吸收氧气。"}]},conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"为什么蜡烛在甲、乙两瓶中的燃烧情况不一样？\r",expend:!1,answer:"甲瓶中蜡烛的火焰熄灭了，乙瓶中照常燃烧，说明种子在萌发过程中吸收了氧气，导致蜡烛的熄灭。\r<br/>"},{question:"为什么将实验装置放到温暖的环境中？\r",expend:!1,answer:"提供适宜的环境温度。\r<br/>"},{question:"分析实验现象，你得出的结论是什么？\r",expend:!1,answer:"种子萌发吸收了氧气。<br/>"},{}]},equipment:{menu:[{imgSrc:"assets/aecdffd6ed3edae9/YEeEs0YzLjA=.png",name:"萌发的大豆"},{imgSrc:"assets/aecdffd6ed3edae9/4AQ+Ld0nRjQuMA==.png",name:"煮熟放冷的大豆"},{imgSrc:"assets/aecdffd6ed3edae9/rZHb9jPnGTkuMg==.png",name:"带蜡烛的燃烧匙"}],icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}}});