webpackJsonp([53,90],{1291:function(e,n){e.exports={headerTitle:"对动物进行分类",conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"动物分类方法？\r",expend:!1,answer:"目前较常用的分类方法是按有无脊椎骨分，目前已知的动物种类大约有150万种，可分为无脊椎动物和脊椎动物。\r<br/>（1）无脊椎动物中包括：原生动物、扁形动物、腔肠动物、棘皮动物、节肢动物、软体动物、环节动物、线形动物八大类。所以无脊椎动物占世界上所有动物的百分之九十以上。\r<br/>（2）脊椎动物包括：鱼类、两栖类、爬行类、鸟类、哺乳类五大种类。\r<br/><br/>"},{}]},equipment:{icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}},659:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(e,n){function t(){var e=this;g.forEach(function(e){TweenMax.killTweensOf(e.trueBox),TweenMax.killTweensOf(e.background),e.trueBox.alpha=0,e.background.alpha=1}),e.getTrueArray().forEach(function(n){n!==e&&(n.fbTarget.trueBox.alpha=1)})}function a(){GlobalEffect.fadeOut(i),e.emit("stepComplete")}var r=e.tree,i=e.board,o=!1,l=[],s=!0,u=!1,f=void 0;try{for(var c,b=n[Symbol.iterator]();!(s=(c=b.next()).done);s=!0){var d=c.value,p=e[d],h=e[d+"Target"];p.alpha=0,h.alpha=0,l.push({object:p,target:h})}}catch(e){u=!0,f=e}finally{try{!s&&b.return&&b.return()}finally{if(u)throw f}}i.alpha=0;var g=[];e.on("stepSet",function(){r.on(nb.tree.event.ALL_OPEN,function(){if(!o){o=!0;for(var e in l)!function(e){var n=l[e],a=n.object,r=n.target;a.addEventListener(nb.fillBlanks2.event.ON_TRUE,function(){GlobalEffect.fadeIn(r.trueBox),TweenMax.to(r,.8,{alpha:1}),TweenMax.to(r.background,.8,{alpha:0})}),a.addEventListener(nb.fillBlanks2.event.ON_START,t),a.addEventListener(nb.fillBlanks2.event.ON_STOP,t),g.push(r),GlobalEffect.fadeIn([a,r]),TweenMax.to(r,.8,{alpha:.5})}(e);GlobalEffect.fadeIn(i),nb.fillBlanks2.setIsShowFalse(!0),nb.fillBlanks2.setTargetState({hover:{alpha:1},default:{alpha:.5}}),nb.fillBlanks2(l,a)}})})},r=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){a(e,["ym","xrk","hds","sj","dq","jyz"])}}),start:function(){this.autoBindScript()},menu:t(841)});r.sorting=a,n.default=r},764:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(659),r=function(e){return e&&e.__esModule?e:{default:e}}(a),i=r.default.sorting;n.default=extendsClass(nbBio.BiologyMain,{frame0:nb.BaseFrame.create(function(e){e.stepFunc0=function(e){i(e,["sx","hc","wc","qy","wn","hd","yu","qw","xy","gz","dbh"])}}),start:function(){this.autoBindScript()},menu:t(1291)})},841:function(e,n){e.exports={headerTitle:"对植物进行分类",conclusion:{icon:"images/btn-taolundian.png",name:"讨论&nbsp;:",menu:[{question:"你认为植物分类考虑了植物的哪些特征？\r",expend:!1,answer:"（1）植物的繁殖方式；\r<br/>（2）植物的子叶数目；\r<br/>（3）有无种子；\r<br/>（4）种子外有无果皮包被；\r<br/>（5）根据花蕊的结构等可以观察植物的叶、花的结构、果实、种子等。<br/>"},{}]},equipment:{icon:"images/btn-shiyanqicai.png",name:"材料用具&nbsp;:"}}}});