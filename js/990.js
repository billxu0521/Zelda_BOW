"use strict";(self["webpackChunkbotw_app"]=self["webpackChunkbotw_app"]||[]).push([[990],{8990:(t,e,n)=>{n.r(e),n.d(e,{createSwipeBackGesture:()=>s});var r=n(6587),a=n(545),o=n(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s=(t,e,n,s,i)=>{const c=t.ownerDocument.defaultView,u=(0,a.i)(t),h=t=>{const e=50,{startX:n}=t;return u?n>=c.innerWidth-e:n<=e},l=t=>u?-t.deltaX:t.deltaX,d=t=>u?-t.velocityX:t.velocityX,p=t=>h(t)&&e(),w=t=>{const e=l(t),n=e/c.innerWidth;s(n)},b=t=>{const e=l(t),n=c.innerWidth,a=e/n,o=d(t),s=n/2,u=o>=0&&(o>.2||e>s),h=u?1-a:a,p=h*n;let w=0;if(p>5){const t=p/Math.abs(o);w=Math.min(t,540)}i(u,a<=0?.01:(0,r.j)(0,a,.9999),w)};return(0,o.A)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:p,onStart:n,onMove:w,onEnd:b})}}}]);
//# sourceMappingURL=990.js.map