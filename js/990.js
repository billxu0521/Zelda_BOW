"use strict";(self["webpackChunkbotw_app"]=self["webpackChunkbotw_app"]||[]).push([[990],{990:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return i}});var r=n(587),o=n(545),a=n(515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const i=(t,e,n,i,c)=>{const s=t.ownerDocument.defaultView,u=(0,o.i)(t),h=t=>{const e=50,{startX:n}=t;return u?n>=s.innerWidth-e:n<=e},l=t=>u?-t.deltaX:t.deltaX,d=t=>u?-t.velocityX:t.velocityX,p=t=>h(t)&&e(),w=t=>{const e=l(t),n=e/s.innerWidth;i(n)},b=t=>{const e=l(t),n=s.innerWidth,o=e/n,a=d(t),i=n/2,u=a>=0&&(a>.2||e>i),h=u?1-o:o,p=h*n;let w=0;if(p>5){const t=p/Math.abs(a);w=Math.min(t,540)}c(u,o<=0?.01:(0,r.j)(0,o,.9999),w)};return(0,a.A)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:p,onStart:n,onMove:w,onEnd:b})}}}]);
//# sourceMappingURL=990.js.map