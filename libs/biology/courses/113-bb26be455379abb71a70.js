webpackJsonp([113],{1067:function(e,t){e.exports={headerTitle:"检测不同环境中的细菌和真菌",experimentStep:[{name:"手部样品采集\r",classes:[],detail:[{text:"拿无菌棉签擦拭未洗的手和洗过的手的手心，均匀涂在灭菌的培养基上，盖好盖子。\r",classes:[]},{text:"将培养皿倒置，然后放入培养箱中培养24小时，观察现象。\r",classes:[]}]},{name:"自然环境样品采集\r",classes:[],detail:[{text:"将灭菌后的培养基，打开盖分别置于操场、草地、灌木中，采集样品15分钟，然后盖上盖子。\r",classes:[]},{text:"将培养皿倒置放入培养箱中培养24小时，观察现象。\r",classes:[]}]}],purpose:{icon:"images/btn-shiyanmudi.png",name:"目的要求&nbsp;:",menu:[{text:"尝试采用细菌和真菌培养的一般方法，进行探究活动。"}]},conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"为什么要用无菌棉签来擦拭手心？\r",expend:!1,answer:"实验中用无菌棉签的目的是为了防止其他微生物污染培养基。\r<br/>"},{question:"细菌、真菌的生活必需具有哪些基本条件？\r",expend:!1,answer:"细菌、真菌的生活必须具有的基本条件是：水、营养物质、适宜的温度和一定的生存空间。<br/>"},{}]},equipment:{menu:[{imgSrc:"assets/c76b3d3ab1522b66/ZDTJfjkuNw==.png",name:"无菌棉签"},{imgSrc:"assets/c76b3d3ab1522b66/LHtb9Zj503CESvG-Mi4y.png",name:"装有牛肉汁培养基的培养皿"},{imgSrc:"assets/c76b3d3ab1522b66/wID59rE4LjA=.png",name:"恒温培养箱"}],icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}},723:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){function t(t){var n=this,o=1+(t.split("stickGroupTarget")[1]>>0),i=new TimelineMax({onComplete:function(){e["pei"+o].txt.text=e["hand"+o].txt.text,setTimeout(function(){e.emit("stepComplete")},1e3)}});i.add(TweenMax.to(n,.5,{x:"-=50",ease:Sine.easeInOut,repeat:5,yoyo:!0})),i.add(TweenMax.to(n,1,{y:"-=360",ease:Sine.easeInOut,onComplete:function(){e["pei"+o].addChildWithSamePos(n),e["pei"+o].addChildAt(n,2)}})),i.add(e["pei"+o].open(),"-=0.5"),i.add(a(n),"-=0.5"),i.add(GlobalEffect.fadeOut(n)),i.add(e["pei"+o].close()),i.add(GlobalEffect.fadeOut(e["hand"+o]))}function a(e){var t=new TimelineMax;t.add(TweenMax.to(e,.5,{x:"-=120",ease:Sine.easeInOut})),t.add(TweenMax.to(e,.5,{y:"-=0",ease:Sine.easeInOut}));var a=[];return a[0]=TweenMax.to(e,1,{x:"+=240",repeat:2,yoyo:!0,ease:Sine.easeInOut}),a[1]=TweenMax.to(e,.5,{y:"-=30",ease:Sine.easeOut,onComplete:function(){TweenMax.to(e,1,{y:"+=60",repeat:2,yoyo:!0,ease:Sine.easeInOut})}}),t.add(a,"-=0.5"),t}var n=e.stick0,o=e.stick1;!function(){e.pei0.txt.text="空白对照",e.hand1.txt.text="未洗过的手",e.hand2.txt.text="洗过的手",n.txt.text=o.txt.text="无菌棉签"}(),nb.simpleDragGroup([n,o],"stick",{mode:0}),n.addEventListener(nb.simpleDragGroup.event.REACH_TARGET,t),o.addEventListener(nb.simpleDragGroup.event.REACH_TARGET,t)},e.stepFunc1=function(e){function t(){r.alpha=0,d.alpha=0,u.alpha=0,c.alpha=0,i.alpha=0}function a(){for(var t=0;t<3;t++)e["p"+t]=nb.tapPoint(0,0),e["pei"+t].addChild(e["p"+t]),e["p"+t].addEventListener(TouchEvent.TAP,n);GlobalEffect.fadeIn(e.incubator),r.incubatorDoor.alpha=0}function n(){for(var t=new TimelineMax({delay:.5,onComplete:o}),a=[],p=0;p<3;p++)!function(t){var o=e["pei"+t];e["p"+t].removeEventListener(TouchEvent.TAP,n),o.removeChild(e["p"+t]),o.upSideUpDown(),o.txt.alpha=0,a.push(TweenMax.to(o,2,{y:"-=420",x:"-="+370*(t-1),ease:Sine.easeInOut})),a.push(TweenMax.to(o.scale,2,{x:.23,y:.23,onComplete:function(){e.incubator.addChildWithSamePos(o),e.incubator.setChildIndex(o,e.incubator.getChildIndex(e.incubator.incubatorDoor)),TweenMax.to(o,1,{alpha:0})}}))}(p);t.add(a),t.add([TweenMax.to(e.incubator.openDoor,1,{alpha:0}),TweenMax.to(e.incubator.incubatorDoor,1,{alpha:1})]),t.add(GlobalEffect.fadeIn(i))}function o(){i.setDuration(7e3),i.emit(nb.timelineProcessing.event.ON_INIT),i.on(nb.timelineProcessing.event.ON_COMPLETE,function(){var t=new TimelineMax;t.add(GlobalEffect.fadeOut(i));for(var a=[],n=[],o=[],p=[],s=0;s<3;s++)!function(t){var i=e["pei"+t];a.push(TweenMax.to(i,1,{alpha:1})),n.push(TweenMax.to(i,1,{y:"+=320",x:"+="+(370*(t-1)+10),ease:Sine.easeInOut,onComplete:function(){e.addChildWithSamePos(i)}})),o.push(TweenMax.to(i.scale,1,{x:1,y:1,ease:Sine.easeInOut})),o.push(TweenMax.to(i,1,{y:"-=250",ease:Sine.easeInOut,onComplete:function(){e["openPei"+t].txt.text=i.txt.text}})),p.push(TweenMax.to(i,1,{alpha:0})),p.push(TweenMax.to(i.scale,1,{y:1.5})),p.push(TweenMax.to(e["openPei"+t],1,{alpha:1,onComplete:function(){e.emit("stepComplete")}}))}(s);t.add(a.concat([TweenMax.to(e.incubator.incubatorDoor,1,{alpha:0}),TweenMax.to(e.incubator.openDoor,1,{alpha:1})])),t.add(n),t.add(TweenMax.to(e.incubator,1,{alpha:0})),t.add(o),t.add(p)})}var i=e.timeline,p=e.pei0,s=e.pei1,l=e.pei2,r=e.incubator,d=e.openPei0,u=e.openPei1,c=e.openPei2;e.on("stepSet",function(){a()}),function(){i.txt.text="24小时",p.txt.text="空白对照",s.txt.text="未洗过的手",l.txt.text="洗过的手",t()}()}}),frame1:nb.BaseFrame.create(function(e){function t(e){a=[],n=[];for(var t=0;t<9;++t){var o=void 0,i=void 0;if(e.group){o=e.group.children[t],n.push(o),e.meiGroup&&(i=e.meiGroup.children[t]);var p="";p=o.name.length>=11?"操场":o.name.length<=6?"灌木":"草地";var s="";-1!==o.name.lastIndexOf("0")?s="\n(空白对照)":a.push(o),e.meiGroup&&(i.txt.text=p+s,i.scale.x=i.scale.y=.8),o.txt.text=p+s,o.scale.x=o.scale.y=.8}}}var a=void 0,n=void 0;e.stepFunc0=function(e){function n(){for(var e=0;e<a.length;++e){var t=a[e];t.tapPoint.parent&&t.removeChild(t.tapPoint),t.open()}TweenMax.to(i,1,{alpha:1,delay:1,onComplete:function(){i.emit(nb.timelineProcessing.event.ON_INIT),i.on(nb.timelineProcessing.event.ON_COMPLETE,o)}})}function o(){TweenMax.to(i,1,{alpha:0,onComplete:function(){for(var t=0;t<a.length;t++)a[t].close();e.emit("stepComplete")}})}var i=e.timeline;!function(){i.alpha=0,i.txt.text="15分钟",t(e);var o=!0,p=!1,s=void 0;try{for(var l,r=a[Symbol.iterator]();!(o=(l=r.next()).done);o=!0){var d=l.value;d.tapPoint=nb.tapPoint(0,0),d.addChild(d.tapPoint),d.tapPoint.addEventListener(TouchEvent.TAP,n)}}catch(e){p=!0,s=e}finally{try{!o&&r.return&&r.return()}finally{if(p)throw s}}}()},e.stepFunc1=function(e){function a(){var e=[],t=0;for(var a in n){var r=n[a];r.upSideUpDown(),r.removeChild(r.tapPoint),t=a<3?180:a<6?80:-20,p.addChildWithSamePos(r),e.push(TweenMax.to(r,1,{y:"-=530",delay:1,ease:Sine.easeInOut})),e.push(TweenMax.to(r.scale,1,{x:.2,y:.2,delay:1})),e.push(TweenMax.to(r,1,{x:"+="+t,delay:1,ease:Sine.easeInOut}))}var d=new TimelineMax({onComplete:o});d.add(e),d.add([TweenMax.to(l,1,{alpha:0}),TweenMax.to(s,1,{alpha:1})]),d.add(TweenMax.to(i,1,{alpha:1}))}function o(){i.txt.text="24小时",i.emit(nb.timelineProcessing.event.ON_INIT),i.on(nb.timelineProcessing.event.ON_COMPLETE,function(){var t=new TimelineMax;TweenMax.to(i,1,{alpha:0}),TweenMax.to(s,1,{alpha:0}),TweenMax.to(l,1,{alpha:1});var a=[],o=[],d=[],u=0,c=0;for(var x in n)!function(t){var i=n[t];u=t%3==0?-400:t%3==2?0:-200,c=t<3?-400:t<6?0:350,e.addChildWithSamePos(i),a.push(TweenMax.to(i,1,{y:"+=350",x:"+="+c,ease:Sine.easeInOut})),o.push(TweenMax.to(i.scale,1,{x:.8,y:.8,onComplete:function(){i.txt.visible=!0,i.txt.alpha=1}})),o.push(TweenMax.to(i,1,{y:"+="+u,ease:Sine.easeInOut})),d.push(TweenMax.to(i,1,{alpha:0}))}(x);t.add(a),t.add([GlobalEffect.fadeOut(p),GlobalEffect.fadeOut(l)]),t.add(o),t.add(TweenMax.to(r,1,{alpha:1})),t.add(d),t.add(TweenMax.to(e.meiGroup,1,{alpha:1,onComplete:function(){e.emit("stepComplete")}}))})}var i=e.timeline,p=e.incubator,s=e.closeDoor,l=e.openDoor,r=e.background;t(e),function(){i.alpha=0,p.alpha=0,s.alpha=0,l.alpha=0,e.meiGroup.alpha=0}(),e.on("stepSet",function(){var t=new TimelineMax;t.add(TweenMax.to(r,2,{alpha:0}));for(var n=[],o=0,i=0,d=0;d<9;d++)!function(t){var p=e.group.children[t];o=t%3==0?700:t%3==1?800:900,i=t<3?400:t<6?600:800,n.push(TweenMax.to(p.txt,1,{alpha:0})),n.push(TweenMax.to(p,1,{y:o,x:i,ease:Sine.easeInOut})),n.push(TweenMax.to(p.scale,1,{x:.5,y:.5,onComplete:function(){p.tapPoint=nb.tapPoint(0,0),p.addChild(p.tapPoint),p.tapPoint.addEventListener(TouchEvent.TAP,a)}}))}(d);t.add(n),t.add([TweenMax.to(p,1,{alpha:1}),TweenMax.to(s,1,{alpha:0}),TweenMax.to(l,1,{alpha:1})])})}}),start:function(){this.autoBindScript()},menu:a(1067)})}});