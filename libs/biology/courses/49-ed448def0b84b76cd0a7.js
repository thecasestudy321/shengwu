webpackJsonp([49,83],{1371:function(e,n){e.exports={headerTitle:"观察菠菜叶横切面的结构",experimentStep:[{name:"制作装片\r",classes:[],detail:[{text:"拖动清洁的纱布将盖玻片和载玻片擦拭干净。\r",classes:[]},{text:"将菠菜叶置于载玻片上，用两片双面刀片沿着和主叶脉垂直的方向横切叶片。多切几次，将切下的薄片放入培养皿的清水中。\r",classes:[]},{text:"用滴管在载玻片的中央滴一滴清水，用毛笔沾取一段横切面标本放在水滴里。\r",classes:[]},{text:"拖动盖玻片到载玻片，制成临时装片。\r",classes:[]},{text:"把制好的装片放到显微镜下观察，调节各部件使视野明亮、物象清晰，亦可点击“自动调至最佳”按钮观察，点击目镜或视野框可全屏观察。\r",classes:[]}]}],purpose:{icon:"images/btn-shiyanmudi.png",name:"目的要求&nbsp;:",menu:[{text:"说出叶片的结构，练习徒手切片。"}]},conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"在显微镜下能观察到细胞的哪些结构？\r",expend:!1,answer:"细胞壁、液泡、叶绿体、细胞质。细胞膜太薄，一般的显微镜是无法分辨出来。<br/>"},{}]},equipment:{menu:[{imgSrc:"assets/58ad03c58828b1f3/nkNcNi42.png",name:"显微镜"},{imgSrc:"assets/58ad03c58828b1f3/8S1HOS41.png",name:"载玻片"},{imgSrc:"assets/58ad03c58828b1f3/Si1HNi43.png",name:"盖玻片"},{imgSrc:"assets/58ad03c58828b1f3/cTQ3Ljk=.png",name:"清水"},{imgSrc:"assets/58ad03c58828b1f3/DwM4LjI=.png",name:"纱布"},{imgSrc:"assets/58ad03c58828b1f3/ckc4LjU=.png",name:"刀片"},{imgSrc:"assets/58ad03c58828b1f3/ZC-2OS45.png",name:"菠菜叶"},{imgSrc:"assets/58ad03c58828b1f3/VhQ1Ljg=.png",name:"毛笔"},{imgSrc:"assets/58ad03c58828b1f3/SvG-OS44.png",name:"培养皿"}],icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}},656:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={color:16777215,alpha:.1},o=window.TopTip;nb.bio0166={f0s0:function(e){var n=e.glassSlide;n.wipe(),n.on("WIPE_COMPLETE",function(){e.emit("stepComplete")})},f0s1:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{color:16777215,alpha:.1,name:"清水"},a=e.glassSlide,t=e.diguan;!function(){t.alpha=0,t.setColor(n.color,n.alpha),t.text.text=t.txt.text=n.name,e.on("stepSet",function(){TweenMax.to(t,.5,{alpha:1,onComplete:function(){t.bindContainer({container:a,capacity:.05}),t.on("itemComplete",function(){a.dropping({color:n.color,alpha:n.alpha,timer:.5})}),t.on("complete",function(){TweenMax.to(t,.5,{alpha:0,onComplete:function(){t.visible=!1,e.emit("stepComplete")}})})}})})}()},f0s3:function(e){function n(){if(e._isStepComplete_)return void o.show("当前步骤完成");o.show("请选择合适的盖玻片盖压液滴",o.ERROR)}var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:0,y:0},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{color:16777215,alpha:.1},i=e.glassSlide,s=e.fanqie;!function(){i.dropping({color:t.color,alpha:t.alpha,timer:0}),i.addGoods(s,a),e.on("stepSet",function(){i.cover(),i.on("COVER_COMPLETE",function(){e.emit("stepComplete")})})}(),i.glass.addEventListener(TouchEvent.TOUCH_BEGIN,n)}};var i=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){nb.bio0166.f0s0(e)},e.stepFunc1=function(e){nb.bio0166.f0s1(e)},e.stepFunc2=function(e){function n(){s.setChildIndex(l,s.children.length-1)}function a(){s.setChildIndex(l,l.defaultIndex);var e=new TimelineMax({onComplete:function(){nb.commonFunc.addSimpleDrag(c,{reached:o})}});e.add(TweenMax.to(l,.5,{x:p.x,y:p.y,onComplete:function(){s.qian.alpha=0}})),e.add([TweenMax.to(l,.5,{x:"+=50",y:"-=100",alpha:0}),TweenMax.to(c,.5,{alpha:1})])}function o(){var n=new TimelineMax({onComplete:function(){e.emit("stepComplete")}});n.add(TweenMax.to(c,.3,{yoyo:!0,repeat:4,x:"-=6",y:"-=6",onComplete:function(){c.fanqie.alpha=1}})),n.add(TweenMax.to(c,.5,{x:m.x,y:m.y,onComplete:function(){i.addGoods(c.fanqie,{x:-12,y:-7})}})),n.add([TweenMax.to(c,.5,{x:"+=50",y:"-=100",alpha:0}),TweenMax.to(s,.5,{alpha:0})])}var i=e.glassSlide,s=e.fanqie,c=s.zhen,l=s.knife,p=s.knifePosition,m=s.zhenPosition;!function(){l.defaultIndex=s.getChildIndex(l),console.log("defaultIndex--\x3e",l.defaultIndex),s.alpha=0,c.alpha=0,c.fanqie.alpha=0,i.dropping({color:t.color,alpha:t.alpha,timer:0}),e.on("stepSet",function(){TweenMax.to(s,.5,{alpha:1,onComplete:function(){nb.commonFunc.addSimpleDrag(l,{start:n,reached:a})}})})}()},e.stepFunc3=function(e){nb.bio0166.f0s3(e,{x:-12,y:-7})},e.stepFunc4=function(e){e.on("stepSet",function(){nb.commonFunc.initMicroscope(e,[{texture:"slide3",name:"番茄细胞临时装片",nbsID:"0145/model_slide1",slID:"sl0018",slTexture:"sl.png",newSlide:!0}])})}}),start:function(){this.autoBindScript()},menu:Object.assign(a(812))});i.funcs=nb.bio0166,n.default=i},779:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(656),o=function(e){return e&&e.__esModule?e:{default:e}}(t),i=o.default.funcs,s={x:897.05,y:827.6};n.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){i.f0s0(e)},e.stepFunc1=function(e){function n(){var e=new TimelineMax({onComplete:function(){nb.commonFunc.addSimpleDrag(o,{del:20,reached:a})}});e.add(TweenMax.to(t,.3,{x:"+=3",y:"+=90",yoyo:!0,repeat:4})),e.add(TweenMax.to(t,.5,{x:"+=50",y:"-=100",alpha:0,onComplete:function(){t.visible=!1}})),e.add([TweenMax.to(c,.3,{alpha:1}),TweenMax.to(i,.3,{alpha:0,onComplete:function(){i.visible=!1,l.visible=!0}})]),e.add(TweenMax.to(l,.5,{alpha:1}))}function a(){var n=new TimelineMax({onComplete:function(){e.emit("stepComplete")}});n.add(TweenMax.to(o,.5,{rotation:Math.PI/4,onComplete:function(){e.addChildWithSamePos(c)}})),n.add(TweenMax.to(c,.5,{x:p.x,y:p.y})),n.add(TweenMax.to(o,.5,{alpha:0,onComplete:function(){o.visible=!1,l.addChildWithSamePos(c)}})),n.add(TweenMax.to(l,.5,{x:s.x-300,y:s.y}))}var t=e.knife,o=e.glassSlide,i=e.bocai,c=e.bc,l=e.peiym,p=e.bcPosition;!function(){t.alpha=0,i.alpha=0,c.alpha=0,l.alpha=0,l.visible=!1,o.addChildWithSamePos(c),e.on("stepSet",function(){TweenMax.to([i,t],.5,{alpha:1,onComplete:function(){nb.commonFunc.addSimpleDrag(t,{reached:n})}})})}()},e.stepFunc2=function(e){function n(){var n=new TimelineMax({onComplete:function(){e.emit("stepComplete")}});n.add(TweenMax.to(c,.3,{x:"-=10",y:"+=5",yoyo:!0,repeat:4,onComplete:function(){c.bc.alpha=1}})),n.add(TweenMax.to(c,.5,{x:l.x,y:l.y,onComplete:function(){o.addGoods(c.bc,{y:-10})}})),n.add([TweenMax.to(t,.5,{alpha:0}),TweenMax.to(c,.5,{x:"+=50",y:"-=100",alpha:0,onComplete:function(){c.visible=!1,t.visible=!1}})]),n.add(TweenMax.to(o,.5,{x:s.x,y:s.y}))}var a=e.boc,t=e.peiym,o=e.glassSlide,i=e.diguan,c=e.maobi,l=e.mP;!function(){t.addChildWithSamePos(a),o.alpha=0,i.setColor(16777215,.15),i.alpha=0,c.alpha=0,c.visible=!1,c.bc.alpha=0,e.on("stepSet",function(){TweenMax.to([o,i],.5,{alpha:1,onComplete:function(){i.bindContainer({container:o,capacity:.1}),i.on("itemComplete",function(){o.dropping({color:16777215,alpha:.15,timer:.3})}),i.on("complete",function(){TweenMax.to(i,.5,{alpha:0,onComplete:function(){i.visible=!1,c.visible=!0}}),TweenMax.to(c,.5,{delay:.5,alpha:1,onComplete:function(){nb.commonFunc.addSimpleDrag(c,{reached:n})}})})}})})}()},e.stepFunc3=function(e){i.f0s3(e,{x:0,y:-10})},e.stepFunc4=function(e){e.on("stepSet",function(){nb.commonFunc.initMicroscope(e,[{texture:"slide3",name:"菠菜横切临时装片",nbsID:"0145/model_slide1",slID:"sl0050",slTexture:"sl.png",newSlide:!0}])})}}),start:function(){this.autoBindScript()},menu:Object.assign(a(1371))})},812:function(e,n){e.exports={headerTitle:"观察番茄果肉细胞的基本结构",experimentStep:[{name:"制作装片\r",classes:[],detail:[{text:"用纱布将载玻片和盖玻片擦拭干净。\r",classes:[]},{text:"用滴管在载玻片的中央滴一滴清水。\r",classes:[]},{text:"将番茄切开，用洁净的解剖针轻轻刮取少许番茄果肉，均匀涂抹在载玻片的水滴中。\r",classes:[]},{text:"拖动盖玻片到载玻片，制成临时装片。\r",classes:[]},{text:"把制好的装片放到显微镜下观察，调节各部件使视野明亮、物象清晰，亦可点击“自动调至最佳”按钮观察，点击目镜或视野框可全屏观察。",classes:[]}]}],purpose:{icon:"images/btn-shiyanmudi.png",name:"目的要求&nbsp;:",menu:[{text:"练习制作植物细胞临时装片，学习制作临时装片的基本方法。\r"},{text:"认识植物细胞的基本结构。"}]},conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"植物细胞有哪些共同特点？\r",expend:!1,answer:"各种植物所有特点中最具有共性的是它们的细胞都有细胞壁，除此以外的其他特点都有例外。比如大多数植物都有叶绿素能进行光合作用，等等。唯有细胞壁是一切植物细胞都不例外而为一切动物细胞所都没有的。<br/>"},{}]},equipment:{menu:[{imgSrc:"assets/7f565fba617ebfa2/nkNcMC42.png",name:"显微镜"},{imgSrc:"assets/7f565fba617ebfa2/NagAMi42.png",name:"解剖刀"},{imgSrc:"assets/7f565fba617ebfa2/NeqIMS4y.png",name:"解剖针"},{imgSrc:"assets/7f565fba617ebfa2/8S1HNy40.png",name:"载玻片"},{imgSrc:"assets/7f565fba617ebfa2/Si1HMC42.png",name:"盖玻片"},{imgSrc:"assets/7f565fba617ebfa2/7QQ5LjQ=.png",name:"番茄"},{imgSrc:"assets/7f565fba617ebfa2/cTQ0LjA=.png",name:"清水"},{imgSrc:"assets/7f565fba617ebfa2/DwM4LjE=.png",name:"纱布"}],icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}}});