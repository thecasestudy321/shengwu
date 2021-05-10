webpackJsonp([115],{1065:function(e,a){e.exports={headerTitle:"模拟练习止血包扎",experimentStep:[{name:"判断出血方式\r",classes:[],detail:[{text:"观察三种出血方式，分别判断三种出血方式的名称。\r",classes:[]}]},{name:"包扎伤口\r",classes:[],detail:[{text:"拖动合适的器材，正确的按压方式，对伤口进行处理并包扎。\r",classes:[]},{text:"拖动合适的器材，正确的按压方式，对伤口进行处理并包扎。\r",classes:[]},{text:"拖动合适的器材，正确的按压方式，对伤口进行处理并包扎。",classes:[]}]}],purpose:{icon:"images/btn-shiyanmudi.png",name:"目的要求&nbsp;:",menu:[{text:"模拟对不同类型出血现象进行处理，学习止血包扎的方法。"}]},conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"动脉有什么特点？\r",expend:!1,answer:"动脉是将血液输送到全身各部位的血管。动脉的管壁厚，弹性大，管内血流速度快，多分布在身体较深处。\r<br/>"},{question:"静脉有什么特点？\r",expend:!1,answer:"静脉是将血液从身体各部位送回心脏的血管。与同级动脉血管相比，静脉管壁较薄，弹性小，管腔大，管内血流速度慢。\r<br/>"},{question:"毛细血管有什么特点？\r",expend:!1,answer:"毛细血管是连通微小动脉和微小静脉之间的血管。毛细血管数量最多，分布最广，管壁极薄，仅由一层上皮细胞构成，管径仅能红细胞单行通过，管内血流速度也最慢。<br/>"},{}]},equipment:{menu:[{imgSrc:"assets/162b0ab69006ee06/b3w0OS4w.png",name:"创可贴"},{imgSrc:"assets/162b0ab69006ee06/5w85Ljc=.png",name:"碘伏"},{imgSrc:"assets/162b0ab69006ee06/VSY2LjU=.png",name:"绷带"}],icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}},721:function(e,a,n){"use strict";function t(e){var a=e.name.substr(-1),n=e.hand,t=e.error,i=e.wound;t.alpha=0,t.scale.x=0,t.scale.y=0,n.txt.text=p[a],i&&(n.addChild(i),i.x=n.wound.x,i.y=n.wound.y,i.flash&&(i=i.flash),i.loop=!0,i.play(),n._wound=i,n.addChild(n.solution),n.addChild(n.yarn),n.addChild(n.blood));for(var r=w.length,l=0;l<r;l++)!function(a){var n=e[w[a]];n.addEventListener(TouchEvent.TOUCH_BEGIN,function(a){if(!e._isTween){var t=n.name,i=n.clone();n.name=t,i.name="_"+t,i.gotoAndStop(2),i.tip&&(i.tip.alpha=0),e.addChildWithSamePos(i),NBDrag.addDrag(i),i.addEventListener(NBDrag.event.START_DRAG,s),i.addEventListener(NBDrag.event.STOP_DRAG,o),i.addEventListener(TouchEvent.TOUCH_END_OUDSIDE,o),TouchEvent.simulateTouchDown(i,a)}})}(l)}function i(e){e.removeEventListener(NBDrag.event.START_DRAG,s),e.removeEventListener(NBDrag.event.STOP_DRAG,o),e.removeEventListener(TouchEvent.TOUCH_END_OUDSIDE,o),NBDrag.removeDrag(e)}function s(e){var a=e.target,n=a.parent;"step"!==n.name.substr(0,4)&&(n=n.parent);var t=n.hand;n.addChildWithSamePos(a),a.name.substr(1)===w[3]&&(t._press="",r(t))}function o(e){var a=e.target,n=a.parent;"step"!==n.name.substr(0,4)&&(n=n.parent);var t=n.hand;if(n.addChildWithSamePos(a),!a.hitTest(t))return i(a),void l(n,a);var s=a.name.substr(1);if(s===w[3]&&t._pressRight){t.addChildWithSamePos(a);var o=t.pointL,d=t.pointR,c=function(){n[s].interactive=!1,a.interactive=!1};n._isTween=!0,a.x<t.wound.x?TweenMax.to(a,b,{x:o.x,y:o.y,ease:_,onStart:c,onComplete:function(){t._press=m,t._finger=a,a.interactive=!0,r(t),n._isTween=!1}}):TweenMax.to(a,b,{x:d.x,y:d.y,ease:_,onStart:c,onComplete:function(){t._press=T,t._finger=a,a.interactive=!0,r(t),n._isTween=!1}})}n._initCallback(e)}function r(e){var a=e._wound;if(a)if(TweenMax.killTweensOf(a),TweenMax.killTweensOf(a.scale),TweenMax.killTweensOf(a.children[0].scale),e._pressRight===e._press){TweenMax.to(a,.5,{animationSpeed:.6});var n=p.indexOf(e.txt.text);switch(n){case 1:TweenMax.to(a.scale,.5,{x:.8,y:.5});break;case 2:TweenMax.to(a.scale,.5,{x:.3,y:.9})}}else TweenMax.to(a,.5,{animationSpeed:1}),TweenMax.to(a.scale,.5,{x:1,y:1})}function l(e,a){var n=a.name.substr(1),t=e[n],i=new TimelineMax;a.interactive=!1,n===w[3]&&(t.interactive=!0),i.add([TweenMax.to(a,.5,{x:t.x,y:t.y}),GlobalEffect.fadeOut(a)])}function d(e,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};i(a);var t=e.hand,s=t.wound,o=s.x,r=s.y;t.addChildWithSamePos(a),TweenMax.to(a,b,{x:o,y:r,ease:_,rotation:Math.PI/5,onComplete:n})}function c(e,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};e._isTween=!0,i(a);var t=e.hand,s=t.solution,o=t.wound,r=o.x,l=o.y;t.addChildWithSamePos(a);var d=s.width/3,c=new TimelineMax({onComplete:function(){e._isTween=!1,n()}});c.add(TweenMax.to(a,b,{x:r-d,y:l,ease:_})),c.add([TweenMax.to(a,b/2,{x:r+d,y:l,ease:Power1.easeInOut,repeat:4,yoyo:!0}),TweenMax.to(s,2*b,{alpha:1,ease:_})]),c.add(GlobalEffect.fadeOut(a))}function f(e,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};i(a);var t=e.hand,s=t.yarn,o=t.blood,r=s.x,l=s.y;t.addChildWithSamePos(a),e._isTween=!0;var d=new TimelineMax({onComplete:function(){t._state=h,e._isTween=!1,n(),e.emit("stepComplete")}});d.add(TweenMax.to(a,b,{x:r,y:l,ease:_})),TweenMax.killTweensOf(t._wound.scale),d.add([TweenMax.to(t._wound.scale,.5,{x:0,y:0,ease:_}),GlobalEffect.fadeOut(a),GlobalEffect.fadeIn(s)]);var c=null;switch(p.indexOf(t.txt.text)){case 1:c=TweenMax.to(o.scale,1,{x:1,y:1});break;case 2:c=TweenMax.to(o.scale,1,{x:.6,y:.6})}d.add([GlobalEffect.fadeIn(o),c])}function u(e,a){var n=e.error;TweenMax.killTweensOf(n),TweenMax.killTweensOf(n.scale);var t=new TimelineMax;(n.alpha||n.scale.x||n.scale.y)&&t.add([TweenMax.to(n,.2,{alpha:0,ease:_}),TweenMax.to(n.scale,.2,{x:0,y:0,ease:_})]),e.addChild(n),n.text=a,t.add([TweenMax.to(n,.6,{alpha:1,ease:_}),TweenMax.to(n.scale,.6,{x:1,y:1,ease:Back.easeOut.config(2)})]),t.add([TweenMax.to(n,.6,{alpha:0,ease:_}),TweenMax.to(n.scale,.6,{x:0,y:0,ease:_})],3)}function x(e){return"该伤口不适合用"+e.txt.text+"处理"}Object.defineProperty(a,"__esModule",{value:!0});var p=["毛细血管出血","动脉出血","静脉出血"],w=["band","swab","bandage","finger"],v=p.length,h="complete",m="left",T="right",b=1,_=Power2.easeInOut;a.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){function a(){GlobalEffect.fadeOut(e.board),setTimeout(function(){e.emit("stepComplete")},1e3)}var n=[];!function(){for(var a=0;a<v;a++){var t=e["answer"+a];t.lable.text=p[a];var i=e["hand"+a],s=e["answerBox"+a];n.push({object:t,target:s});var o=e["wound"+a];if(o){var r=i.wound,l=r.x,d=r.y;i.addChild(o),o.x=l,o.y=d,o.flash&&(o=o.flash),o.play(),o.loop=!0}}}(),e.on("stepSet",function(){nb.fillBlanks2.setDistance(220),nb.fillBlanks2.setTargetState({default:{alpha:.5},hover:{alpha:1},stop:{alpha:0}}),nb.fillBlanks2(n,a)})}}),frame1:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){var a=e.hand;e._initCallback=function(n){var t=n.target,i=t.name.substr(1);if(h===a._state)return u(e,"伤口已经完成类处理"),void l(e,t);switch(w.indexOf(i)){case 0:a._state=h,d(e,t,function(){e.emit("stepComplete")});break;case 1:c(e,t);break;default:u(e,x(e[i])),l(e,t)}},t(e)},e.stepFunc1=function(e){var a=e.hand;a._pressRight=m,e._initCallback=function(n){var t=n.target,i=t.name.substr(1);if(h===a._state)return u(e,"伤口已经完成类处理"),void l(e,t);var s=parseInt(w.indexOf(i));if(s<2)return u(e,x(e[i])),void l(e,t);2===s&&(a._pressRight===a._press?(a._finger.interactive=!1,f(e,t,function(){GlobalEffect.fadeIn(a._finger.tip)})):(u(e,"请使用手指按压正确位置"),l(e,t)))},t(e)},e.stepFunc2=function(e){var a=e.hand;a._pressRight=T,e._initCallback=function(n){var t=n.target,i=t.name.substr(1);if(h===a._state)return u(e,"伤口已经完成类处理"),void l(e,t);var s=parseInt(w.indexOf(i));if(s<1)return u(e,x(e[i])),void l(e,t);1===s&&c(e,t,function(){var e=a._wound;TweenMax.killTweensOf(e.scale);var n=e.scale,t=n.x,i=n.y;if(1===t||1===i){var s=new TimelineMax;s.add(TweenMax.to(e.scale,.5,{x:.6,y:.95})),s.add(TweenMax.to(e.scale,.5,{x:1,y:1}),2)}}),2===s&&(a._pressRight===a._press?(a._finger.interactive=!1,f(e,t,function(){GlobalEffect.fadeOut(a._finger)})):(u(e,"请使用手指按压正确位置"),l(e,t)))},t(e)}}),start:function(){this.autoBindScript()},menu:n(1065)})}});