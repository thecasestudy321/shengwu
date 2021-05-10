webpackJsonp([101],{1199:function(e,a){e.exports={headerTitle:"自制酸奶",experimentStep:[{name:"实验步骤\r",classes:[],detail:[{text:"将250mL鲜牛奶倒入已灭菌的瓶子中，并加入25g白糖\r",classes:[]},{text:"将装有鲜奶的瓶子放到三角架上，点燃酒精灯进行加热煮沸，将加热后的鲜奶放入降温装置中，当温度降低至38℃的时候取出鲜奶\r",classes:[]},{text:"将50mL酸奶倒入鲜奶中并密封瓶口，放入恒温箱，并使温度持续在30℃，发酵8小时。\r",classes:[]},{text:"用勺子至瓶中取酸奶观察并品尝。",classes:[]}]}],purpose:{icon:"images/btn-shiyanmudi.png",name:"目的要求&nbsp;:",menu:[{text:"尝试制作一杯酸奶，了解酸奶的制作原理。"}]},conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"为什么要将牛奶煮开？煮开的牛奶为什么要冷却后才可加入酸奶？\r",expend:!1,answer:"将牛奶煮开的目的是杀死可能存在的微生物，以避免酸奶的腐败；煮开的牛奶要冷却后才可加入酸奶，原因是高温可能杀死乳酸菌或减弱乳酸菌活性。\r<br/>"},{question:"请描述你制作的酸奶的口味，为什么酸奶的口味和牛奶不同？\r",expend:!1,answer:"酸奶和牛奶的口味不同，是因为乳酸发酵过程中，乳酸菌利用牛奶中的营养物质产生出的乳酸等物质，牛奶和酸奶中的物质种类不同，口味就不同。<br/>"},{}]},equipment:{menu:[{imgSrc:"assets/be6c5347746fae91/giIBTPj2UDcuOQ==.png",name:"带密封盖的瓶子"},{imgSrc:"assets/be6c5347746fae91/0XYwLjQ=.png",name:"酸奶"},{imgSrc:"assets/be6c5347746fae91/DrR2Ni4w.png",name:"鲜牛奶"},{imgSrc:"assets/be6c5347746fae91/tvoxLjU=.png",name:"汤勺"},{imgSrc:"assets/be6c5347746fae91/+dY3LjU=.png",name:"白糖"},{imgSrc:"assets/be6c5347746fae91/XEhROC44.png",name:"石棉网"},{imgSrc:"assets/be6c5347746fae91/ioG2NC4x.png",name:"三脚架"},{imgSrc:"assets/be6c5347746fae91/iDGhNi4y.png",name:"温度计"},{imgSrc:"assets/be6c5347746fae91/LFq3qvTnbzYuMw==.png",name:"装有冷水的烧杯"},{imgSrc:"assets/be6c5347746fae91/zy5vNi4x.png",name:"酒精灯"},{imgSrc:"assets/be6c5347746fae91/wKSxOS44.png",name:"恒温箱"}],icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}},746:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){function a(){i.bindContainer(t);var e=new TimelineMax({onComplete:function(){nb.commonFunc.addSimpleDrag(o,{del:-20,reached:n})}});e.add(TweenMax.to(i,3,{rotation:1.2*-Math.PI/2})),e.add(GlobalEffect.fadeOut(i)),e.add(TweenMax.to(o,1,{alpha:1}))}function n(){var a=new TimelineMax({onComplete:function(){e.emit("stepComplete")}});a.add(TweenMax.to(o,1,{rotation:-Math.PI/4})),a.add(TweenMax.to(o.suger,1,{y:"+=250",x:"-=250",ease:Sine.easeInOut}),"-=0.4"),a.add(GlobalEffect.fadeOut(o)),a.add(t.resetName("加糖的鲜牛奶"))}var t=e.jar,i=e.bottle,o=e.sugSpoon;!function(){o.alpha=0,o.txt.text="白糖",t.txt.text="灭菌的玻璃瓶";var e={text:"鲜牛奶",currentCapacity:"78%",totalCapacity:80,color:16777215,alphaLiquid:1},n={currentCapacity:"0%",totalCapacity:100,color:16777215,alphaLiquid:1};nb.commonFunc.initContainer(i,e),nb.commonFunc.initContainer(t,n),nb.commonFunc.addSimpleDrag(i,{del:-60,reached:a})}()},e.stepFunc1=function(e){function a(){w.alpha&&w.render()}function n(){b&&h&&(e.on("update",a),e.addChild(w),w.bind(s,85,120),w.scale.x=.35,w.scale.y=.4,w.alpha=0,TweenMax.to(d,1,{alpha:1,onComplete:function(){d.emit(nb.timelineProcessing.event.ON_INIT),d.on(nb.timelineProcessing.event.ON_PLAY,function(e){w.alpha=.3*e}),d.on(nb.timelineProcessing.event.ON_COMPLETE,t)}}))}function t(){var e=new TimelineMax({onComplete:function(){b&&(x.x-=24,s.resetSimpleDrag(),s.setScale(.9),s.removeEventListener(nb.simpleDrag.event.REACH_TARGET,i),s.addEventListener(nb.simpleDrag.event.REACH_TARGET,o))}});T.push(GlobalEffect.fadeOut([u,p,m,d])),T.push(s.resetName("煮沸后的牛奶")),e.add(T),e.add(GlobalEffect.bezierTo(s,2,{x:1106,y:500,angle:1.5})),e.add(TweenMax.to(f,1,{alpha:1}))}function i(){b=1,n()}function o(){var e=new TimelineMax({onComplete:c});e.add(TweenMax.to(s,1,{y:"+=355",ease:Sine.easeInOut})),e.add(g.setCapacityTween(58,.4),"-=0.4")}function c(){C.displayFocus(!0),TweenMax.to(r,1,{alpha:1,onComplete:function(){r.emit(nb.timelineProcessing.event.ON_INIT),r.on(nb.timelineProcessing.event.ON_PLAY,function(e){e<=.5?C.setTemperature(25+110*e):C.setTemperature(80-42*e),w.alpha=.5-.5*e}),r.on(nb.timelineProcessing.event.ON_COMPLETE,l)}})}function l(){e.removeEventListener("update",a),s.resetName("降温后的牛奶");var n=new TimelineMax({onComplete:function(){e.emit("stepComplete")}});n.add(TweenMax.to(s,1,{y:"-=500",ease:Sine.easeInOut})),n.add([GlobalEffect.fadeOut(r),GlobalEffect.fadeOut(f)]),n.add([TweenMax.to(s.scale,2,{x:1,y:1}),TweenMax.to(s,2,{x:"+=600",y:"+=500",ease:Sine.easeInOut})])}var s=e.jar,d=e.timeline,r=e.timeline2,m=e.spirit,p=e.net,u=e.spider,f=e.beaker,x=e.jarTarget0,b=0,h=0,T=[],C=f.temp,g=f.waterBeaker,w=ParticleUtil.getParticle(ParticleUtil.particles.bottle_gas2);!function(){d.alpha=0,d.txt.text="煮沸",r.alpha=0,r.txt.text="降温",f.alpha=0,C.displayFocus(!1),p.alpha=0,u.alpha=0,m.alpha=0;var e={text:"加糖的鲜牛奶",currentCapacity:"62%",totalCapacity:100,color:16777215,alphaLiquid:1},a={text:"清水",currentCapacity:"53%",totalCapacity:100,color:16777215,alphaLiquid:.3};nb.commonFunc.initContainer(s,e),nb.commonFunc.initContainer(g,a),m.addEventListener("lightup",function(){h=1,m.setInteractice(!1),n()})}(),e.on("stepSet",function(){GlobalEffect.fadeIn(p),GlobalEffect.fadeIn(u),GlobalEffect.fadeIn(m),nb.commonFunc.addSimpleDrag(s,{reached:i})})},e.stepFunc2=function(e){function a(){o.bindContainer(i);var e=new TimelineMax({onComplete:function(){nb.commonFunc.addSimpleDrag(i,{scale:.3,reached:n})}});e.add(TweenMax.to(o,2,{rotation:-71*Math.PI/180})),i.resetName("加酸奶的牛奶"),e.add(GlobalEffect.fadeOut(o)),e.add(TweenMax.to(c,1,{alpha:1})),e.add(TweenMax.to(c,1,{y:"+=145",ease:Sine.easeInOut})),e.add(TweenMax.to(i,1,{x:"+=900",ease:Sine.easeInOut})),e.add(GlobalEffect.fadeIn([l,s]))}function n(){l.addChildWithSamePos(i);var e=new TimelineMax({onComplete:function(){r.emit(nb.timelineProcessing.event.ON_INIT),r.on(nb.timelineProcessing.event.ON_COMPLETE,t)}});e.add([TweenMax.to(s,1,{alpha:0}),TweenMax.to(d,1,{alpha:1})]),e.add(GlobalEffect.fadeIn(r))}function t(){GlobalEffect.fadeOut(r),GlobalEffect.fadeOut(d);var a=new TimelineMax({onComplete:function(){e.emit("stepComplete")}});a.add(GlobalEffect.fadeIn(s)),e.addChildWithSamePos(i),a.add(TweenMax.to(i,1,{y:"+=300",ease:Sine.easeInOut})),a.add(GlobalEffect.fadeOut([l,s])),a.add([TweenMax.to(i,1,{y:"-=500",x:"+=200",ease:Sine.easeInOut}),TweenMax.to(i.scale,1,{x:1,y:1,onComplete:function(){i.resetName("酸奶"),e.addChildWithSamePos(c)}})])}var i=e.jar,o=e.bottle,c=e.lid,l=e.incubator,s=e.openDoor,d=e.closeDoor,r=e.timeline;!function(){c.alpha=0,i.addChildWithSamePos(c),l.alpha=0,s.alpha=0,d.alpha=0,r.alpha=0,r.txt.text="8小时";var e={text:"降温后的牛奶",currentCapacity:"62%",totalCapacity:100,color:16777215,alphaLiquid:1},a={text:"酸奶",currentCapacity:"80%",totalCapacity:100,color:16777215,alphaLiquid:1};nb.commonFunc.initContainer(i,e),nb.commonFunc.initContainer(o,a),o.alpha=0}(),e.on("stepSet",function(){TweenMax.to(o,1,{alpha:1,onComplete:function(){nb.commonFunc.addSimpleDrag(o,{del:-30,reached:a})}})})},e.stepFunc3=function(e){function a(){var e=new TimelineMax({onComplete:function(){nb.commonFunc.addSimpleDrag(t,{del:-45,reached:n})}});e.add(TweenMax.to(o,1,{y:"-=200",ease:Sine.easeInOut})),e.add(GlobalEffect.fadeOut(o)),e.add(GlobalEffect.fadeIn(t))}function n(){var a=new TimelineMax({onComplete:function(){t.txt.visible=!0,t.txt.text="一勺酸奶",e.emit("stepComplete")}});a.add(TweenMax.to(t,1,{y:"+=300",ease:Sine.easeInOut})),a.add([TweenMax.to(t,1,{x:"-=30",y:"+=20",ease:Sine.easeInOut}),TweenMax.to(c,1,{alpha:1})]),a.add(TweenMax.to(t,1,{y:"-=270",ease:Sine.easeInOut})),a.add(GlobalEffect.fadeOut(i)),a.add([TweenMax.to(t.scale,1,{x:1.6,y:1.6}),TweenMax.to(t,1,{x:"+=340",y:"+=300",easy:Sine.easeInOut,rotation:0})])}var t=e.spoon,i=e.jar,o=e.lid,c=t.milk;!function(){t.alpha=0,t.txt.text="勺子",c.alpha=0;var e={text:"酸奶",currentCapacity:"72%",totalCapacity:100,color:16777215,alphaLiquid:1};nb.commonFunc.initContainer(i,e)}(),e.on("stepSet",function(){var e=nb.tapPoint(160,0);o.addChild(e),e.addEventListener(TouchEvent.TAP,a)})}}),start:function(){this.autoBindScript()},menu:n(1199)})}});