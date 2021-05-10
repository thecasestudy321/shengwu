webpackJsonp([133],{1e3:function(e,n){e.exports={headerTitle:"光合作用放氧实验",experimentStep:[{name:"实验步骤\r",classes:[],detail:[{text:"拖动金鱼藻到广口瓶中，盖上有两根导管的瓶塞。\r",classes:[]},{text:"装置放在光下观察现象，直到瓶中有大量气泡。\r",classes:[]},{text:"移走气管的管塞，迅速将带火星的木条放在管口，观察现象。",classes:[]}]}],purpose:{icon:"images/btn-shiyanmudi.png",name:"目的要求&nbsp;:",menu:[{text:"了解光合作用释放氧气。"}]},conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"尝试说明出现上述现象的原因？\r",expend:!1,answer:"金鱼藻进行光合作用释放氧气，氧气有助燃的特性。收集的气体是氧气，它能使带火星的木条复燃，原因是氧气能助燃，表明产生的气体是氧气。<br/>"},{}]},equipment:{menu:[{imgSrc:"assets/7419ef62d67197ff/bgH7My45.png",name:"金鱼藻"},{imgSrc:"assets/7419ef62d67197ff/jVcklXeh+U5eOS4w.png",name:"带有两根导管的瓶塞"},{imgSrc:"assets/7419ef62d67197ff/ltEf1+AfmTcuNA==.png",name:"带火星的卫生香"},{imgSrc:"assets/7419ef62d67197ff/MaqE01f2OC44.png",name:"装水的广口瓶"}],icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}},699:function(e,n,t){"use strict";function a(e,n){var t={text:"",color:16777215,alphaLiquid:.2,currentCapacity:"90%"};0===n?t.text="清水":(t.text="金鱼藻",2===n&&(t.currentCapacity="70%")),nb.commonFunc.initContainer(e,t)}function i(e,n){var t={color:16777215,alphaLiquid:.2,currentCapacity:"0%",alpha:0};1===n&&(t.alpha=1,t.currentCapacity="20%"),nb.commonFunc.initContainer(e,t)}function o(){return ParticleUtil.getParticle(ParticleUtil.particles.vegPopping)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){function n(){var e=new TimelineMax({onComplete:function(){nb.commonFunc.addSimpleDrag(s,{reached:t})}});e.add([TweenMax.to(o,1,{y:c.y,ease:Power2.easeIn}),TweenMax.to(o.scale,.3,{x:.8,y:.8,delay:.4,ease:Sine.easeInOut}),TweenMax.to(o.scale,.2,{x:1,y:1,delay:.8})]),e.add(GlobalEffect.fadeIn(s))}function t(){e.emit("stepComplete")}var i=e.flask,o=e.veg,c=e.vegPosition,s=e.product;!function(){a(i,0),s.visible=!1,nb.commonFunc.addSimpleDrag(o,{reached:n})}()},e.stepFunc1=function(e){function n(){t(1),new TimelineMax({onComplete:function(){e.emit("stepComplete")}}).add(GlobalEffect.fadeOut([l,r]))}function t(e){d.alpha=e;var n=p+(f-p)*e^e,t=m*e^e;c.setCurrentCapacity(n+"%"),s.setCurrentCapacity(t+"%")}var c=e.flask,s=e.beaker,l=e.sun,r=e.timer,u=e.veg,d=o();!function(){console.log(u.position),a(c,1),i(s,0),l.alpha=0,r.alpha=0,r.label.text="光照",d.bind(u,30,50),d.alpha=0,u.addChild(d),e.on("stepSet",function(){var a=new TimelineMax({onComplete:function(){r.on(nb.timelineProcessing.event.ON_COMPLETE,n),r.on(nb.timelineProcessing.event.ON_PLAY,t),r.emit(nb.timelineProcessing.event.ON_INIT),e.on("update",function(){d.render()})}});a.add([GlobalEffect.fadeIn([s,r,l])]),a.add(TweenMax.to(l,1,{y:l.y-100,ease:Sine.easeInOut,delay:-.8}))})}();var p=90,f=70,m=20},e.stepFunc2=function(e){function n(){var e=new TimelineMax({onComplete:function(){nb.commonFunc.addSimpleDrag(r,{reached:function(){t(),setTimeout(function(){r.resetSimpleDrag()},50)}})}});e.add(TweenMax.to(p,.5,{alpha:0})),e.add(GlobalEffect.fadeIn(r))}function t(){b||(b=!0,e.emit("stepComplete"))}var c=e.flask,s=e.beaker,l=e.veg,r=e.stick,u=e.check,d=e.product,p=d.top,f=o(),m=ParticleUtil.getParticle(ParticleUtil.particles.outSide_fire);!function(){a(c,2),i(s,1),f.bind(l,30,50),l.addChild(f),m.bind(r,0,-10),r.addChild(m),m.alpha=0,m.scale.x=.5,r.visible=!1,e.on("stepSet",function(){e.on("update",function(){f.render(),r.check.hitTest(u)?(m.alpha=1,m.render()):m.alpha=0});var t=nb.tapPoint(p.width/2-10,p.height/4);p.addChild(t),t.addEventListener(TouchEvent.TAP,n)})}();var b=!1}}),start:function(){this.autoBindScript()},menu:t(1e3)})}});