webpackJsonp([117],{1063:function(e,n){e.exports={headerTitle:"维生素C的检测",experimentStep:[{name:"实验步骤\r",classes:[],detail:[{text:"分别向装有清水、维生素C溶液的两支试管内加入10滴加碘的淀粉溶液，摇匀，观察现象。",classes:[]}]}],purpose:{icon:"images/btn-shiyanmudi.png",name:"目的要求&nbsp;:",menu:[{text:"尝试用化学试剂检测维生素C。"}]},conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"为什么甲乙两试管中溶液的颜色不同？\r",expend:!1,answer:"甲试管中的维生素C可使加碘的淀粉溶液褪色，而乙试管中的清水则不能使加碘的淀粉溶液褪色。\r<br/>"},{question:"用加碘的淀粉溶液可以检测哪种水溶性物质？\r",expend:!1,answer:"维生素C。\r<br/><br/>"},{}]},equipment:{menu:[{imgSrc:"assets/b1ba1f7d91f3156b/aZwgsiOyOS40.png",name:"维生素C溶液"},{imgSrc:"assets/b1ba1f7d91f3156b/UKExLjU=.png",name:"试管"},{imgSrc:"assets/b1ba1f7d91f3156b/GQ6EPPe2sjMuNg==.png",name:"加碘的淀粉溶液"}],icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}},719:function(e,n,t){"use strict";function a(e,n){var t={text:"",currentCapacity:i,totalCapacity:60,color:16777215,alphaLiquid:.2};t.text=s.label0,nb.commonFunc.initContainer(e,t),t.text=s.label1,nb.commonFunc.initContainer(n,t)}Object.defineProperty(n,"__esModule",{value:!0});var i="28%",o=1578611,s={label0:"清水",label1:"维生素C溶液",lab0:"\n加碘的淀粉溶液"};n.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){function n(e){var n=e.container,a=n.name.split("tube")[1]>>0,i=new TimelineMax({onComplete:function(){nb.cuvetteShake(n,{onComplete:t,onStart:function(){1===a&&n.setColor(16777215,.5,{timer:1.5})}})}});i.add(n.resetName(n.txt.text+s.lab0)),i.add(n.setColor(o,.5,{timer:1.5}))}function t(){if(++u<=1)return void c.bindContainer(l[1]);var n=new TimelineMax({onComplete:function(){e.emit("stepComplete")}});n.add(GlobalEffect.fadeOut(c)),n.add([TweenMax.to(e.scale,1,{x:1.2,y:1.2,ease:Sine.easeInOut}),TweenMax.to(e,1,{y:"-=200",x:300})])}var i=e.tube0,r=e.tube1,c=e.burrete,u=0,l=[{container:i,capacity:1},{container:r,capacity:1}];!function(){a(i,r),i.liquid.alpha=0,c.setColor(o),e.on("stepSet",function(){c.bindContainer(l[0]),c.on("itemComplete",n)})}()}}),start:function(){this.autoBindScript()},menu:t(1063)})}});