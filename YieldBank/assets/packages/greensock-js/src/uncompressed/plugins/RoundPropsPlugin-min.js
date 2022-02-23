/*!
 * VERSION: 1.6.0
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var o=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.6.0",priority:-1,API:2,init:function(o,e,r){return this._tween=r,!0}}),e=function(o){for(;o;)o.f||o.blob||(o.m=Math.round),o=o._next},r=o.prototype;r._onInitAllProps=function(){for(var o=this._tween,r=o.vars.roundProps.join?o.vars.roundProps:o.vars.roundProps.split(","),n=r.length,t={},p=o._propLookup.roundProps,s,_,u;--n>-1;)t[r[n]]=Math.round;for(n=r.length;--n>-1;)for(s=r[n],_=o._firstPT;_;)u=_._next,_.pg?_.t._mod(t):_.n===s&&(2===_.f&&_.t?e(_.t._firstPT):(this._add(_.t,s,_.s,_.c),u&&(u._prev=_._prev),_._prev?_._prev._next=u:o._firstPT===_&&(o._firstPT=u),_._next=_._prev=null,o._propLookup[s]=p)),_=u;return!1},r._add=function(o,e,r,n){this._addTween(o,e,r,r+n,e,Math.round),this._overwriteProps.push(e)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();