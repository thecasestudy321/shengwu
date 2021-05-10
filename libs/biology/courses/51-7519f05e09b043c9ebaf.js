webpackJsonp([51,83],{1369:function(e,n){e.exports={headerTitle:"制作并观察植物细胞临时装片",experimentStep:[{name:"制作装片\r",classes:[],detail:[{text:"拖动清洁的纱布将盖玻片和载玻片擦拭干净。\r",classes:[]},{text:"点击胶头滴管在载玻片中央滴加一滴清水。\r",classes:[]},{text:"拖动解剖刀刮掉黄瓜皮，切取少量果肉浸入载玻片的水滴中。\r",classes:[]},{text:"选择正确的方式盖上盖玻片，制成临时装片。\r",classes:[]},{text:"把制好的装片放到显微镜下观察，调节各部件使视野明亮、物象清晰，亦可点击“自动调至最佳”按钮观察，点击目镜或视野框可全屏观察。",classes:[]}]}],purpose:{icon:"images/btn-shiyanmudi.png",name:"目的要求&nbsp;:",menu:[{text:"制作植物细胞临时装片，学习制作临时装片的基本方法。\r"},{text:"认识植物细胞基本结构。\r"},{text:"练习画细胞结构简图。"}]},conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"洋葱鳞片叶内表皮细胞和黄瓜表层果肉细胞（或黑藻叶片）有哪些相同的结构？\r",expend:!1,answer:"相同的结构主要有：细胞壁、细胞膜、细胞质、细胞核、液泡等。<br/>"},{}]},equipment:{menu:[{imgSrc:"assets/6a2095bc178dbb0b/nkNcOS4z.png",name:"显微镜"},{imgSrc:"assets/6a2095bc178dbb0b/Si1HMC41.png",name:"盖玻片"},{imgSrc:"assets/6a2095bc178dbb0b/8S1HMS4w.png",name:"载玻片"},{imgSrc:"assets/6a2095bc178dbb0b/DwMzLjY=.png",name:"纱布"},{imgSrc:"assets/6a2095bc178dbb0b/cTQ2LjY=.png",name:"清水"},{imgSrc:"assets/6a2095bc178dbb0b/ONw0LjU=.png",name:"黄瓜"},{imgSrc:"assets/6a2095bc178dbb0b/NagAOC43.png",name:"解剖刀"},{imgSrc:"assets/6a2095bc178dbb0b/pVAyLjg=.png",name:"镊子"}],icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}},656:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={color:16777215,alpha:.1},o=window.TopTip;nb.bio0166={f0s0:function(e){var n=e.glassSlide;n.wipe(),n.on("WIPE_COMPLETE",function(){e.emit("stepComplete")})},f0s1:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{color:16777215,alpha:.1,name:"清水"},t=e.glassSlide,a=e.diguan;!function(){a.alpha=0,a.setColor(n.color,n.alpha),a.text.text=a.txt.text=n.name,e.on("stepSet",function(){TweenMax.to(a,.5,{alpha:1,onComplete:function(){a.bindContainer({container:t,capacity:.05}),a.on("itemComplete",function(){t.dropping({color:n.color,alpha:n.alpha,timer:.5})}),a.on("complete",function(){TweenMax.to(a,.5,{alpha:0,onComplete:function(){a.visible=!1,e.emit("stepComplete")}})})}})})}()},f0s3:function(e){function n(){if(e._isStepComplete_)return void o.show("当前步骤完成");o.show("请选择合适的盖玻片盖压液滴",o.ERROR)}var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:0,y:0},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{color:16777215,alpha:.1},s=e.glassSlide,i=e.fanqie;!function(){s.dropping({color:a.color,alpha:a.alpha,timer:0}),s.addGoods(i,t),e.on("stepSet",function(){s.cover(),s.on("COVER_COMPLETE",function(){e.emit("stepComplete")})})}(),s.glass.addEventListener(TouchEvent.TOUCH_BEGIN,n)}};var s=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){nb.bio0166.f0s0(e)},e.stepFunc1=function(e){nb.bio0166.f0s1(e)},e.stepFunc2=function(e){function n(){i.setChildIndex(l,i.children.length-1)}function t(){i.setChildIndex(l,l.defaultIndex);var e=new TimelineMax({onComplete:function(){nb.commonFunc.addSimpleDrag(c,{reached:o})}});e.add(TweenMax.to(l,.5,{x:p.x,y:p.y,onComplete:function(){i.qian.alpha=0}})),e.add([TweenMax.to(l,.5,{x:"+=50",y:"-=100",alpha:0}),TweenMax.to(c,.5,{alpha:1})])}function o(){var n=new TimelineMax({onComplete:function(){e.emit("stepComplete")}});n.add(TweenMax.to(c,.3,{yoyo:!0,repeat:4,x:"-=6",y:"-=6",onComplete:function(){c.fanqie.alpha=1}})),n.add(TweenMax.to(c,.5,{x:u.x,y:u.y,onComplete:function(){s.addGoods(c.fanqie,{x:-12,y:-7})}})),n.add([TweenMax.to(c,.5,{x:"+=50",y:"-=100",alpha:0}),TweenMax.to(i,.5,{alpha:0})])}var s=e.glassSlide,i=e.fanqie,c=i.zhen,l=i.knife,p=i.knifePosition,u=i.zhenPosition;!function(){l.defaultIndex=i.getChildIndex(l),console.log("defaultIndex--\x3e",l.defaultIndex),i.alpha=0,c.alpha=0,c.fanqie.alpha=0,s.dropping({color:a.color,alpha:a.alpha,timer:0}),e.on("stepSet",function(){TweenMax.to(i,.5,{alpha:1,onComplete:function(){nb.commonFunc.addSimpleDrag(l,{start:n,reached:t})}})})}()},e.stepFunc3=function(e){nb.bio0166.f0s3(e,{x:-12,y:-7})},e.stepFunc4=function(e){e.on("stepSet",function(){nb.commonFunc.initMicroscope(e,[{texture:"slide3",name:"番茄细胞临时装片",nbsID:"0145/model_slide1",slID:"sl0018",slTexture:"sl.png",newSlide:!0}])})}}),start:function(){this.autoBindScript()},menu:Object.assign(t(812))});s.funcs=nb.bio0166,n.default=s},777:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(656),o=function(e){return e&&e.__esModule?e:{default:e}}(a),s=o.default.funcs,i=s.f0s0,c=s.f0s1,l=s.f0s3;n.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){i(e)},e.stepFunc1=function(e){c(e)},e.stepFunc2=function(e){function n(){var e=new TimelineMax({onComplete:t});e.add([TweenMax.to(c,.4,{x:"+="+l.width,yoyo:!0,repeat:2}),TweenMax.to(l,.8,{alpha:1})]),e.add(GlobalEffect.fadeOut(c)),e.add(GlobalEffect.fadeIn(o))}function t(){o.pickUp(s,{onComplete:function(){var n=a.x,t=a.y;GlobalEffect.fadeOut([i,l]),TweenMax.to(o,.8,{x:n,y:t,onComplete:function(){o.fadeOut(function(){e.emit("stepComplete")}),a.addGoods(s)}})}})}var a=e.glassSlide,o=e.tweezer,s=e.block,i=e.algae,c=e.cut,l=e.line;a.dropping({color:16777215,alpha:.1,timer:0}),o.alpha=0,l.alpha=0,e.on("stepSet",function(){nb.commonFunc.addSimpleDrag(c,{reached:n})})},e.stepFunc3=function(e){l(e)},e.stepFunc4=function(e){nb.commonFunc.initMicroscope(e,[{texture:"slide3",name:"黄瓜细胞临时装片",nbsID:"0145/model_slide1",slID:"sl0018",slTexture:"sl1.png",newSlide:!0}])}}),start:function(){this.autoBindScript()},menu:t(1369)})},812:function(e,n){e.exports={headerTitle:"观察番茄果肉细胞的基本结构",experimentStep:[{name:"制作装片\r",classes:[],detail:[{text:"用纱布将载玻片和盖玻片擦拭干净。\r",classes:[]},{text:"用滴管在载玻片的中央滴一滴清水。\r",classes:[]},{text:"将番茄切开，用洁净的解剖针轻轻刮取少许番茄果肉，均匀涂抹在载玻片的水滴中。\r",classes:[]},{text:"拖动盖玻片到载玻片，制成临时装片。\r",classes:[]},{text:"把制好的装片放到显微镜下观察，调节各部件使视野明亮、物象清晰，亦可点击“自动调至最佳”按钮观察，点击目镜或视野框可全屏观察。",classes:[]}]}],purpose:{icon:"images/btn-shiyanmudi.png",name:"目的要求&nbsp;:",menu:[{text:"练习制作植物细胞临时装片，学习制作临时装片的基本方法。\r"},{text:"认识植物细胞的基本结构。"}]},conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"植物细胞有哪些共同特点？\r",expend:!1,answer:"各种植物所有特点中最具有共性的是它们的细胞都有细胞壁，除此以外的其他特点都有例外。比如大多数植物都有叶绿素能进行光合作用，等等。唯有细胞壁是一切植物细胞都不例外而为一切动物细胞所都没有的。<br/>"},{}]},equipment:{menu:[{imgSrc:"assets/7f565fba617ebfa2/nkNcMC42.png",name:"显微镜"},{imgSrc:"assets/7f565fba617ebfa2/NagAMi42.png",name:"解剖刀"},{imgSrc:"assets/7f565fba617ebfa2/NeqIMS4y.png",name:"解剖针"},{imgSrc:"assets/7f565fba617ebfa2/8S1HNy40.png",name:"载玻片"},{imgSrc:"assets/7f565fba617ebfa2/Si1HMC42.png",name:"盖玻片"},{imgSrc:"assets/7f565fba617ebfa2/7QQ5LjQ=.png",name:"番茄"},{imgSrc:"assets/7f565fba617ebfa2/cTQ0LjA=.png",name:"清水"},{imgSrc:"assets/7f565fba617ebfa2/DwM4LjE=.png",name:"纱布"}],icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}}});