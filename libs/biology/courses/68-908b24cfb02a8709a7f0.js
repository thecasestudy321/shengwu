webpackJsonp([68],{1405:function(e,t){e.exports={headerTitle:"烟草浸出液对水蚤生命活动的影响",experimentStep:[{name:"实验步骤\r",classes:[],detail:[{text:"拖动装烟丝的漏斗到烧杯中浸泡1小时，然后过滤。\r",classes:[]},{text:"用量筒量取5mL、10mL、15mL的烟草浸出液，然后分别加入到10mL清水、5m清水L和空试管中。\r",classes:[]},{text:"用吸管吸取约20只水蚤，加入到各试管中，观察并记录水蚤存活时间。",classes:[]}]}],purpose:{icon:"images/btn-shiyanmudi.png",name:"目的要求&nbsp;:",menu:[{text:"观察烟草浸出液对水蚤生命活动的影响，讨论吸烟对人体健康的危害。"}]},conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"通过实验，你认为青少年应该怎样对待吸烟问题？\r",expend:!1,answer:"烟草燃烧时，烟草中含有多种对人体有害的物质，如尼古丁、焦油等。这些物质进入人体后，会损害人体的神经系统，使人的记忆力和注意力降低，同时还能诱发多种呼吸系统疾病，如慢性支气管炎，还有可能诱发肺癌。<br/>"},{}]},equipment:{menu:[{imgSrc:"assets/f55cae80eb012999/NmzFbjguMg==.png",name:"过滤装置"},{imgSrc:"assets/f55cae80eb012999/Ci0dNS40.png",name:"香烟丝"},{imgSrc:"assets/f55cae80eb012999/cTQwLjQ=.png",name:"清水"},{imgSrc:"assets/f55cae80eb012999/p7qkOC45.png",name:"活水蚤"},{imgSrc:"assets/f55cae80eb012999/Tm8yLjI=.png",name:"烧杯"}],icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}},802:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){function t(){var t=this;TweenMax.to(t,1,{y:900,ease:Sine.easeInOut,onStart:function(){setTimeout(function(){n.setCapacityTween("82%",1)},500)},onComplete:function(){GlobalEffect.fadeIn(i),n.txt.text="烟草浸出液",n.setColorProgress({color:14258733,alpha:.2}),i.emit(nb.timelineProcessing.event.ON_INIT),i.on(nb.timelineProcessing.event.ON_PLAY,function(e){n.setColorWithProgress(e)}),i.on(nb.timelineProcessing.event.ON_COMPLETE,function(){var t=new TimelineMax;t.add(GlobalEffect.fadeOut([i,a])),t.add(TweenMax.to(n,2,{x:n.x+800,ease:Sine.easeInOut,onStart:function(){TweenMax.to(n.scale,2,{x:.8,y:.8,ease:Sine.easeInOut})},onComplete:function(){function t(){nb.commonFunc.removeSimpleDrag(n),o.setFromToContainer(n,c);var t=new TimelineMax({onComplete:function(){e.emit("stepComplete")}});t.to(n,1,{rotation:-90*Math.PI/180,ease:Sine.easeInOut,onComplete:function(){o.emit(nb.filterEvent.ON_START)}}),t.add(GlobalEffect.dumpLiquids(n,-144,{timer:2})),t.to(n,1,{rotation:0}),t.add(GlobalEffect.fadeOut([o,n])),t.to(c,1,{x:900,y:800,ease:Sine.easeInOut,onStart:function(){TweenMax.to(c.scale,1,{x:.8,y:.8})}}),t.add(c.resetName("烟草浸出液"))}GlobalEffect.fadeIn([o,c]),nb.commonFunc.addSimpleDrag(n,{reached:t,del:-45,scale:.5})}}))})}})}var n=e.beak0,a=e.tobacco,i=e.timer,o=e.filter,c=e.beak1,r={text:"清水",currentCapacity:"80%",totalCapacity:60,color:16777215,alphaLiquid:.1},l={totalCapacity:150,color:14258733,alphaLiquid:.2};i.txt.text="1小时",i.visible=!1,o.visible=!1,c.visible=!1,nb.commonFunc.initContainer(c,l),nb.commonFunc.initContainer(n,r),a.txt.text="烟丝",nb.commonFunc.addSimpleDrag(a,{reached:t,scale:1.1})},e.stepFunc1=function(e){function t(t){var n=t.substring(8),a=e["ctlinder"+n],i=new TimelineMax;i.to(o,1,{rotation:-h*Math.PI/180,ease:Sine.easeInOut,onStart:function(){a.setCapacityTween(4*(1*n+1),1),a.txt.text=g[n].text,i.to(o,1,{rotation:0}),66===h&&function(){var t=0;i.add(GlobalEffect.fadeOut(o)),i.to(f,1,{x:"+=1000",ease:Sine.easeInOut}),i.add(GlobalEffect.fadeIn(x));for(var n=0;n<f.length;n++)!function(n){var a=n,o=f[a];nb.commonFunc.addSimpleDrag(f[a],{reached:function(){i.to(o,1,{rotation:-90*Math.PI/180,onStart:function(){t++,x[a+1].setCapacityTween(10,1),a<2&&(x[a+1].txt.text+="\n"+5*(a+1)+"mL烟草浸出液",x[a+1].setColor(14258733,5*(n+2)/100,{timer:1})),2===a&&(x[a+1].txt.text=5*(a+1)+"mL\n烟草浸出液")},onComplete:function(){3===t&&i.to(x,1,{x:"+=250",ease:Sine.easeInOut,onComplete:function(){e.emit("stepComplete")}})}}),i.add(GlobalEffect.fadeOut(o))},del:-30})}(n)}(),i.to(o.scale,1,{x:.7,y:.7,ease:Sine.easeInOut}),i.to(o,1,{x:1125,y:865,ease:Sine.easeInOut,delay:-1,onComplete:function(){o.txt.visible=!0,o.interactive=!0}}),h+=10}})}var n=e.ctlinder0,a=e.ctlinder1,i=e.ctlinder2,o=e.b0,c=e.tube0,r=e.tube1,l=e.tube2,s=e.tube3,u={text:"烟草浸出液",currentCapacity:"60%",totalCapacity:150,color:14258733,alphaLiquid:.2},m={totalCapacity:50,color:14258733,alphaLiquid:.2},d={totalCapacity:50,color:16777215,alphaLiquid:.1};nb.commonFunc.initContainer(o,u);for(var f=[n,a,i],b=0;b<f.length;b++)nb.commonFunc.initContainer(f[b],m),f[b].txt.text="量筒"+(b+1);for(var x=[c,r,l,s],p=0;p<x.length;p++)nb.commonFunc.initContainer(x[p],d);c.txt.text="15mL清水",c.setCurrentCapacity(10),r.txt.text="10mL清水",r.setCurrentCapacity(5),l.txt.text="5mL清水",l.setCurrentCapacity(2.5),s.txt.text="空试管",s.setColor(14258733,.2);var g=[{text:"5mL\n烟草浸出液"},{text:"10mL\n烟草浸出液"},{text:"15mL\n烟草浸出液"}],h=46;nb.commonFunc.setArg(x,"visible",!1),nb.commonFunc.addSimpleDrag(o,{reached:t,del:-30,scale:.5})},e.stepFunc2=function(e){function t(){for(var e=s.boxgo.x-s.width/2,t=s.boxgo.y-s.height/2,n=s.boxgo.x+s.width/2,a=s.boxgo.y+s.height/2,i=1;i<s.children.length-10;i++){var o=2*Math.random()-1,c=2*Math.random()-1,r=s.children[i].x+o,l=s.children[i].y+c,u=r>e&&r<n,m=l>t&&l<a;u&&m&&(s.children[i].x+=o,s.children[i].y+=c)}}function n(){TweenMax.to(l.burette.moreflea,1,{y:170});for(var e=0;e<5;e++)s.children.pop()}function a(t){3===t&&e.emit("stepComplete")}var i=e.tube0,o=e.tube1,c=e.tube2,r=e.tube3,l=e.bx,s=e.bxflea,u=-1,m=1,d=[0,1,1,1],f=[i,o,c,r];s.alpha=0,l.alpha=0,e.on("update",function(){t()}),e.on("stepSet",function(){l.txt.text="水蚤",GlobalEffect.fadeIn([l,s])});for(var b=0;b<f.length;b++)f[b].flag=!0,f[b].txt2.visible=!1,f[b].ended=1,f[b].dancing.visible=!1,f[b].cir.visible=!1,f[b].rect.visible=!1,e["cl"+b].visible=!1;for(var x=["15mL清水","10mL清水\n5mL烟草浸出液","5mL清水\n10mL烟草浸出液","15mL\n烟草浸出液"],p={currentCapacity:"19.5%",totalCapacity:50,color:16777215,alphaLiquid:.1},g=0;g<f.length;g++)nb.commonFunc.initContainer(f[g],p),f[g].txt.text=x[g],g>0&&f[g].setColor(14258733,5*(g+1)/100);l.burette.moreflea.mask=l.burette.layer0.children[0],l.addEventListener(nb.buretteEvent.BURETTE_TAP,n),l.bindContainer([{container:e["tube"+(u+1)],capacity:1}]),l.on("onDrop",function(){console.log(1),TweenMax.killTweensOf(l.burette.moreflea),TweenMax.to(l.burette.moreflea,1,{y:"+=50"})}),l.on("dropReached",function(){function t(){function e(t,n){if(f[n].flag){var a=5*Math.random()-2.5,i=5*Math.random()-2.5,o=f[n].dancing.x+f[n].dancing["dance"+t].x+a,c=f[n].dancing.y+f[n].dancing["dance"+t].y+i,r=f[n].rect.x-f[n].rect.width/2,l=f[n].rect.y-f[n].rect.height/2,s=f[n].rect.x+f[n].rect.width/2,u=f[n].rect.y+f[n].rect.height/2,m=f[n].cir.width/2,d=Math.pow(Math.abs(o-f[n].cir.x),2),b=Math.pow(Math.abs(c-f[n].cir.y),2),x=Math.sqrt(d+b),p=r<o&&o<s,g=l<c&&c<u;p&&g||m-x>0?(f[n].dancing["dance"+t].x+=a,f[n].dancing["dance"+t].y+=i):e(t,n)}else f[n].ended<=20&&(TweenMax.to(f[n].dancing["dance"+t],2,{x:10*Math.random()+10,y:10*Math.random()+75}),f[n].ended++)}if(m%10!=0)return void m++;m=1;for(var t=0;t<=u;t++){for(var n=0;n<20;n++){e(n,t)}f[t].updateTransform()}}f[u].dancing.visible=!0,f[u].txt2.visible=!0,0===u&&e.on("update",t)}),l.on("itemComplete",function(){e["cl"+(u+1)].visible=!0,e["cl"+(u+1)].run(),u++}),l.on("complete",function(){3===u?GlobalEffect.fadeOut([l,s]):l.bindContainer([{container:e["tube"+(u+1)],capacity:1}])}),e.cl0.on("timeout",function(){e.cl0.run()}),e.cl1.on("timeout",function(){d[1]++,d[1]<4?e.cl1.run():(d[0]++,f[1].flag=!1,e.cl1.txt.text="5分26秒\n死亡",a(d[0]))}),e.cl2.on("timeout",function(){d[2]++,d[2]<3?e.cl2.run():(d[0]++,f[2].flag=!1,e.cl2.txt.text="3分19秒\n死亡",a(d[0]))}),e.cl3.on("timeout",function(){d[3]++,d[3]<2?e.cl1.run():(d[0]++,f[3].flag=!1,e.cl3.txt.text="1分47秒\n死亡",a(d[0]))})}}),start:function(){this.autoBindScript()},menu:n(1405)})}});