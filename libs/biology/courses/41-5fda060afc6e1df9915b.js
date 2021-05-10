webpackJsonp([41],{1408:function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(1409),a=i(o),s=t(1410),c=i(s),u={};u.video=a.default,u.video1=c.default,n.default=u},1409:function(e,n,t){e.exports=t.p+"fc335eb7844049734d12a907a32f8f65.webm"},1410:function(e,n,t){e.exports=t.p+"929159a966dd04ac08e98450d8514ea8.mp4"},1411:function(e,n){e.exports={headerTitle:"观察小鱼尾鳍内血液的流动",experimentStep:[{name:"实验步骤\r",classes:[],detail:[{text:"用浸湿的纱布将小鱼头部的鳃盖和躯干包裹起来，露出口和尾部。\r",classes:[]},{text:"将小鱼平放在培养皿中，使尾鳍平贴在培养皿上。\r",classes:[]},{text:"点击培养皿放在载物台上，用低倍显微镜观察尾鳍血管内血液的流动情况。找到管径最小的血管，观察其中血液的流动情况，并注意管径最小的血管由什么分支而来，它最终又汇入什么血管中。",classes:[]}]}],conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"你观察到了几种血管？这些血管中血流速度一样吗？\r",expend:!1,answer:"可以观察到小动脉、小静脉和毛细血管这三种血管。血液在这三种血管中流动的速度不同：在小动脉中流动快，在小静脉中流动慢，在毛细血管中流动最慢。\r<br/>"},{question:"在你看到的毛细血管中，红细胞是呈单行移动的吗？这说明毛细血管具有什么特点？\r",expend:!1,answer:"在毛细血管中红细胞是呈单行通过的，这说明毛细血管的内径很小。<br/>"},{}]},equipment:{icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}},805:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(1408),o=function(e){return e&&e.__esModule?e:{default:e}}(i),a=void 0;n.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){a&&a.hide(),e.visible=!1;var n=e.g1.fish,t=e.g1.fish0;t.visible=!1;var i=e.g1.tow;e.on("stepSet",function(){GlobalEffect.fadeIn(e),n.play(),nb.commonFunc.addSimpleDrag(i,{reached:function(){n.gotoAndStop(0),n.visible=!1,t.visible=!0,t.play(),TweenMax.to(i,.5,{y:"+= 20"}),TweenMax.to(i.scale,.5,{y:.7,ease:Sine.EaseInOut,onComplete:function(){TweenMax.to(e.g1,1,{x:800,ease:Sine.easeInOut,onComplete:function(){e.emit("stepComplete")}})}})}})})},e.stepFunc1=function(e){a&&a.hide();var n=e.garden,t=e.g1;t.fish.play(),n.visible=!1,e.on("stepSet",function(){GlobalEffect.fadeIn(n),nb.commonFunc.addSimpleDrag(t,{reached:function(){n.addChildWithSamePos(t),n.setChildIndex(t,n.getChildIndex(n.front)),n.txt.text+="\n小鱼",TweenMax.to(n,.8,{x:800,ease:Sine.easeInOut,onComplete:function(){e.emit("stepComplete")}})}})})},e.stepFunc2=function(e){instance.setLoading(!0),a=new nbBio.plguin.THREE(this);var n=a.scene;a.controls.setRotateType(2,{maxRangeY:.8,minRangeY:-.8}),e.on("stepSet",function(){e.on("update",function(){a.render()})}),e.nbsLoadComplete=function(){instance.setLoading(!1),a.tweenTo(a.camera,n.camera0);var t=n["0145/model.dae"];nb.microscopeWithThree.apply(t,[a]),t.toBestObserve(),console.log("complete");var i=PIXI.Texture.fromVideoUrl(o.default.video1);i.baseTexture.source.loop=!0;var s=new PIXI.Sprite(i);e.vi.addChild(s);s.width=1920,s.height=1080,s.x=-s.width/2-150,s.y=-s.height/2+50,e.vi.visible=!1,t.showFish(e.vi),t.lockWujingMult(2)}}}),start:function(){this.autoBindScript()},menu:t(1411)})}});