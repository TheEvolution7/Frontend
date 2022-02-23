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
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(e,t,i,n){"object"!=typeof t&&(t={rotation:t}),this.finals={};var s,o,u,f,r,p,a=!0===t.useRadians?2*Math.PI:360,c=1e-6;for(s in t)"useRadians"!==s&&(f=t[s],"function"==typeof f&&(f=f(n,e)),p=(f+"").split("_"),o=p[0],u=parseFloat("function"!=typeof e[s]?e[s]:e[s.indexOf("set")||"function"!=typeof e["get"+s.substr(3)]?s:"get"+s.substr(3)]()),f=this.finals[s]="string"==typeof o&&"="===o.charAt(1)?u+parseInt(o.charAt(0)+"1",10)*Number(o.substr(2)):Number(o)||0,r=f-u,p.length&&(o=p.join("_"),-1!==o.indexOf("short")&&(r%=a)!==r%(a/2)&&(r=0>r?r+a:r-a),-1!==o.indexOf("_cw")&&0>r?r=(r+9999999999*a)%a-(r/a|0)*a:-1!==o.indexOf("ccw")&&r>0&&(r=(r-9999999999*a)%a-(r/a|0)*a)),(r>c||-c>r)&&(this._addTween(e,s,u,u+r,s),this._overwriteProps.push(s)));return!0},set:function(e){var t;if(1!==e)this._super.setRatio.call(this,e);else for(t=this._firstPT;t;)t.f?t.t[t.p](this.finals[t.p]):t.t[t.p]=this.finals[t.p],t=t._next}})._autoCSS=!0}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e){"use strict";var t=function(){return(_gsScope.GreenSockGlobals||_gsScope)[e]};"undefined"!=typeof module&&module.exports?(require("../TweenLite.min.js"),module.exports=t()):"function"==typeof define&&define.amd&&define(["TweenLite"],t)}("DirectionalRotationPlugin");