webpackJsonp([91],{1272:function(n,e){n.exports={headerTitle:"食物链和食物网",conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"假如蛇的数量减少，哪些生物的数量可能发生变化？发生怎样的变化？\r",expend:!1,answer:"从理论上分析，假如蛇的数量大量减少，猫头鹰的数量会减少，青蛙、鼠、吃虫的鸟的数量会增加；各种生物的数量会发生相应的变化。<br/>"},{}]},equipment:{icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}},762:function(n,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(n){n.stepFunc0=function(n){function e(e){var o=e.target;n.addChild(o);var i=o.name,r=o[i+"Line"];if(r.txt.text=l[d],TweenMax.to(r,u,{alpha:1}),d){if(f=o,c===f&&null!==f)return c=null,f=null,a(0),void TweenMax.to(r,u/2,{alpha:0});t(c,f,function(){s?a(0):x.txt.text="观察食物链"})}else c=o,a(1)}function a(n){nb.commonFunc.setArg([p,v],"visible",!0),d=n,p.text=l[d];var e=new TimelineMax;e.to(p,u/2,{x:g+50}),e.to(p,u/2,{x:g,yoyo:!0,repeat:2})}function t(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};nb.commonFunc.setArg(w,"interactive",!1),nb.commonFunc.setArg([p,v],"visible",!1);var o=h.clone();h.name=o.name,o.alpha=0;var i=e.name,r=M[i].radius,l=Math.atan2(a.y-e.y,a.x-e.x),d=r*Math.cos(l),c=r*Math.sin(l),f=a.name,m=M[f].radius,x=m*Math.cos(l),b=m*Math.sin(l);n.addChild(o);var g=new TimelineMax({onComplete:function(){nb.commonFunc.setArg(w,"interactive",!0),t()}});g.add(o.moveTo({x:e.x+d,y:e.y+c})),g.add([o.lineTo({x:a.x-x,y:a.y-b,timer:u}),TweenMax.to(o,u,{alpha:1})]);var T=M[a.name].food,y=T.indexOf(e.name);return-1!=y?(g.add([o.setColor({color:5217139,timer:u}),TweenMax.to([e[e.name+"Line"],a[a.name+"Line"]],u,{alpha:0})]),T.splice(y,1),s--):(g.add([o.setColor({color:16711680,timer:u}),TweenMax.to([e[e.name+"Line"],a[a.name+"Line"]],u,{alpha:0})]),g.add(GlobalEffect.fadeOut(o))),g}function o(){s?i():r()}function i(){for(var e in M)for(var a=n[e],o=M[e].food,i=o.length,r=i-1;r>=0;r--)!function(e){t(n[o[e]],a,function(){0===e&&(x.txt.text="观察食物链")})}(r)}function r(){n.children.forEach(function(n){var e=n.name;"background"!==e&&"line"!==e&&GlobalEffect.fadeOut(n)}),GlobalEffect.fadeIn(b),n.emit("stepComplete")}n.initFullScreen();var l=["被捕食者","捕食者"],u=.8,d=0,c=null,f=null,s=10,m=n.background,h=n.arrow,p=n.need,v=n.tip,x=n.btn,b=n.line,g=p.x;m.alpha=1,h.alpha=0,b.alpha=0;var w=[],M={she:{food:["qingwa","niao"]},huli:{food:["tuzi"]},maotouying:{food:["tuzi","niao","she"]},niao:{food:["mazha"]},tuzi:{food:["zhiwu"]},zhiwu:{food:[]},mazha:{food:["zhiwu"]},qingwa:{food:["mazha"]}};for(var T in M){var y=n[T];w.push(y);var z=y[T+"Line"];z.alpha=0,y.removeChild(z),M[T].radius=.32*(y.width+y.height),y.addChildAt(z,0),y.addEventListener(TouchEvent.TAP,e)}x.addEventListener(TouchEvent.TAP,o)}}),start:function(){this.autoBindScript()},menu:Object.assign(a(1272),{hideLeftMenu:!0})})}});