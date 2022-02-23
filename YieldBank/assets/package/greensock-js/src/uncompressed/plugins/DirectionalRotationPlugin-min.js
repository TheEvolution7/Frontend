/*!
 * VERSION: 0.3.1
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(e,t,i,n){"object"!=typeof t&&(t={rotation:t}),this.finals={};var s=!0===t.useRadians?2*Math.PI:360,o=1e-6,u,f,r,p,a,c;for(u in t)"useRadians"!==u&&(p=t[u],"function"==typeof p&&(p=p(n,e)),c=(p+"").split("_"),f=c[0],r=parseFloat("function"!=typeof e[u]?e[u]:e[u.indexOf("set")||"function"!=typeof e["get"+u.substr(3)]?u:"get"+u.substr(3)]()),p=this.finals[u]="string"==typeof f&&"="===f.charAt(1)?r+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,a=p-r,c.length&&(f=c.join("_"),-1!==f.indexOf("short")&&(a%=s)!==a%(s/2)&&(a=a<0?a+s:a-s),-1!==f.indexOf("_cw")&&a<0?a=(a+9999999999*s)%s-(a/s|0)*s:-1!==f.indexOf("ccw")&&a>0&&(a=(a-9999999999*s)%s-(a/s|0)*s)),(a>o||a<-o)&&(this._addTween(e,u,r,r+a,u),this._overwriteProps.push(u)));return!0},set:function(e){var t;if(1!==e)this._super.setRatio.call(this,e);else for(t=this._firstPT;t;)t.f?t.t[t.p](this.finals[t.p]):t.t[t.p]=this.finals[t.p],t=t._next}})._autoCSS=!0}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e){"use strict";var t=function(){return(_gsScope.GreenSockGlobals||_gsScope)[e]};"undefined"!=typeof module&&module.exports?(require("../TweenLite.js"),module.exports=t()):"function"==typeof define&&define.amd&&define(["TweenLite"],t)}("DirectionalRotationPlugin");