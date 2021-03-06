/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(65);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/// <reference path="./_references.ts"/>
	window.jsCommon = window.jsCommon || {};
	window.powerbi = window.powerbi || {};
	window.powerbitests = window.powerbitests || {};
	window.debug = window.debug || {};
	// Typedefs
	__webpack_require__(66);
	// Externals
	__webpack_require__(67);
	__webpack_require__(70);
	// VisualsCommon
	__webpack_require__(72);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(77);
	__webpack_require__(78);
	// VisualsData
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(82);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(85);
	__webpack_require__(86);
	__webpack_require__(87);
	__webpack_require__(88);
	// PowerBIVisualsTests
	__webpack_require__(89);
	// DataViewCreator
	__webpack_require__(90);

	

/***/ },
/* 66 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	/// <reference path="../../Typedefs/jquery/jquery.d.ts" />
	/// <reference path="../../Typedefs/webpack/webpack-env.d.ts" />
	/// <reference path="../../Typedefs/d3/d3.d.ts" />
	/// <reference path="../../Typedefs/globalize/globalize.d.ts" />
	/// <reference path="../../Typedefs/lodash/lodash.d.ts" />

	

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(68)(__webpack_require__(69)+"\n\n// SCRIPT-LOADER FOOTER\n//# sourceURL=script:///C:/git/pbi2/PowerBI-visuals/src/Clients/Externals/ThirdPartyIP/LoDash/lodash.min.js")

/***/ },
/* 68 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(src) {
		if (typeof execScript === "function")
			execScript(src);
		else
			eval.call(null, src);
	}

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "/**\r\n * @license\r\n * lodash 3.6.0 (Custom Build) lodash.com/license | Underscore.js 1.8.2 underscorejs.org/LICENSE\r\n * Build: `lodash compat -o ./lodash.js`\r\n */\r\n;(function(){function n(n,t){if(n!==t){var r=n===n,e=t===t;if(n>t||!r||typeof n==\"undefined\"&&e)return 1;if(n<t||!e||typeof t==\"undefined\"&&r)return-1}return 0}function t(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function r(n,t,r){if(t!==t)return p(n,r);r-=1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function e(n){return typeof n==\"function\"||false}function u(n){return typeof n==\"string\"?n:null==n?\"\":n+\"\"}function o(n){return n.charCodeAt(0)}function i(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););return r\r\n}function f(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r}function a(t,r){return n(t.a,r.a)||t.b-r.b}function c(n){return Ut[n]}function l(n){return Ft[n]}function s(n){return\"\\\\\"+Lt[n]}function p(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function h(n){return!!n&&typeof n==\"object\"}function _(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n)}function g(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=P,o[++u]=r);\r\nreturn o}function v(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function y(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function d(n){return Wt[n]}function m(_){function Ut(n){if(h(n)&&!(yi(n)||n instanceof Nt)){if(n instanceof Wt)return n;if(Pu.call(n,\"__chain__\")&&Pu.call(n,\"__wrapped__\"))return ke(n)}return new Wt(n)}function Ft(){}function Wt(n,t,r){this.__wrapped__=n,this.__actions__=r||[],this.__chain__=!!t}function Nt(n){this.__wrapped__=n,this.__actions__=null,this.__dir__=1,this.__filtered__=false,this.__iteratees__=null,this.__takeCount__=go,this.__views__=null\r\n}function Lt(){this.__data__={}}function $t(n){var t=n?n.length:0;for(this.data={hash:oo(null),set:new Hu};t--;)this.push(n[t])}function Pt(n,t){var r=n.data;return(typeof t==\"string\"||nu(t)?r.set.has(t):r.hash[t])?0:-1}function Bt(n,t){var r=-1,e=n.length;for(t||(t=xu(e));++r<e;)t[r]=n[r];return t}function zt(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););return n}function Kt(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Vt(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];\r\nt(i,r,n)&&(o[++u]=i)}return o}function Yt(n,t){for(var r=-1,e=n.length,u=xu(e);++r<e;)u[r]=t(n[r],r,n);return u}function Zt(n){for(var t=-1,r=n.length,e=_o;++t<r;){var u=n[t];u>e&&(e=u)}return e}function Gt(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;return false}function Jt(n,t){return typeof n==\"undefined\"?t:n}function Xt(n,t,r,e){return typeof n!=\"undefined\"&&Pu.call(e,r)?n:t}function Ht(n,t,r){var e=Ri(t);if(!r)return nr(t,n,e);for(var u=-1,o=e.length;++u<o;){var i=e[u],f=n[i],a=r(f,t[i],i,n,t);\r\n(a===a?a===f:f!==f)&&(typeof f!=\"undefined\"||i in n)||(n[i]=a)}return n}function Qt(n,t){for(var r=-1,e=n.length,u=we(e),o=t.length,i=xu(o);++r<o;){var f=t[r];u?(f=parseFloat(f),i[r]=ye(f,e)?n[f]:w):i[r]=n[f]}return i}function nr(n,t,r){r||(r=t,t={});for(var e=-1,u=r.length;++e<u;){var o=r[e];t[o]=n[o]}return t}function tr(n,t,r){var e=typeof n;return\"function\"==e?typeof t==\"undefined\"?n:Fr(n,t,r):null==n?du:\"object\"==e?yr(n):typeof t==\"undefined\"?wr(n+\"\"):dr(n+\"\",t)}function rr(n,t,r,e,u,o,i){var f;\r\nif(r&&(f=u?r(n,e,u):r(n)),typeof f!=\"undefined\")return f;if(!nu(n))return n;if(e=yi(n)){if(f=_e(n),!t)return Bt(n,f)}else{var a=zu.call(n),c=a==K;if(a!=Y&&a!=B&&(!c||u))return Ct[a]?ve(n,a,t):u?n:{};if(Dt(n))return u?n:{};if(f=ge(c?{}:n),!t)return nr(n,f,Ri(n))}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?zt:lr)(n,function(e,u){f[u]=rr(e,t,r,u,n,o,i)}),f}function er(n,t,r){if(typeof n!=\"function\")throw new Cu($);return Qu(function(){n.apply(w,r)},t)\r\n}function ur(n,t){var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=he(),f=i==r,a=f&&200<=t.length?Uo(t):null,c=t.length;a&&(i=Pt,f=false,t=a);n:for(;++o<e;)if(a=n[o],f&&a===a){for(var l=c;l--;)if(t[l]===a)continue n;u.push(a)}else 0>i(t,a,0)&&u.push(a);return u}function or(n,t){var r=true;return ko(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ir(n,t){var r=[];return ko(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function fr(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0\r\n}),u}function ar(n,t,r){for(var e=-1,u=n.length,o=-1,i=[];++e<u;){var f=n[e];if(h(f)&&we(f.length)&&(yi(f)||Xe(f))){t&&(f=ar(f,t,r));var a=-1,c=f.length;for(i.length+=c;++a<c;)i[++o]=f[a]}else r||(i[++o]=f)}return i}function cr(n,t){So(n,t,au)}function lr(n,t){return So(n,t,Ri)}function sr(n,t){return Co(n,t,Ri)}function pr(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){var i=t[r];mi(n[i])&&(o[++u]=i)}return o}function hr(n,t,r,e,u,o){if(n===t)return 0!==n||1/n==1/t;var i=typeof n,f=typeof t;return\"function\"!=i&&\"object\"!=i&&\"function\"!=f&&\"object\"!=f||null==n||null==t?n!==n&&t!==t:_r(n,t,hr,r,e,u,o)\r\n}function _r(n,t,r,e,u,o,i){var f=yi(n),a=yi(t),c=z,l=z;f||(c=zu.call(n),c==B?c=Y:c!=Y&&(f=ou(n))),a||(l=zu.call(t),l==B?l=Y:l!=Y&&ou(t));var s=(c==Y||u&&c==K)&&!Dt(n),a=(l==Y||u&&l==K)&&!Dt(t);if((l=c==l)&&!f&&!s)return ce(n,t,c);if(u){if(!(l||s&&a))return false}else{if(c=s&&Pu.call(n,\"__wrapped__\"),a=a&&Pu.call(t,\"__wrapped__\"),c||a)return r(c?n.value():n,a?t.value():t,e,u,o,i);if(!l)return false}for(o||(o=[]),i||(i=[]),c=o.length;c--;)if(o[c]==n)return i[c]==t;return o.push(n),i.push(t),n=(f?ae:le)(n,t,r,e,u,o,i),o.pop(),i.pop(),n\r\n}function gr(n,t,r,e,u){for(var o=-1,i=t.length,f=!u;++o<i;)if(f&&e[o]?r[o]!==n[t[o]]:!(t[o]in n))return false;for(o=-1;++o<i;){var a=t[o],c=n[a],l=r[o];if(f&&e[o]?a=typeof c!=\"undefined\"||a in n:(a=u?u(c,l,a):w,typeof a==\"undefined\"&&(a=hr(l,c,u,true))),!a)return false}return true}function vr(n,t){var r=[];return ko(n,function(n,e,u){r.push(t(n,e,u))}),r}function yr(n){var t=Ri(n),r=t.length;if(!r)return yu(true);if(1==r){var e=t[0],u=n[e];if(be(u))return function(n){return null!=n&&n[e]===u&&(typeof u!=\"undefined\"||e in Ie(n))\r\n}}for(var o=xu(r),i=xu(r);r--;)u=n[t[r]],o[r]=u,i[r]=be(u);return function(n){return null!=n&&gr(Ie(n),t,o,i)}}function dr(n,t){return be(t)?function(r){return null!=r&&r[n]===t&&(typeof t!=\"undefined\"||n in Ie(r))}:function(r){return null!=r&&hr(t,r[n],null,true)}}function mr(n,t,r,e,u){if(!nu(n))return n;var o=we(t.length)&&(yi(t)||ou(t));return(o?zt:lr)(t,function(t,i,f){if(h(t)){e||(e=[]),u||(u=[]);n:{t=e;for(var a=u,c=t.length,l=f[i];c--;)if(t[c]==l){n[i]=a[c],i=void 0;break n}c=n[i],f=r?r(c,l,i,n,f):w;\r\nvar s=typeof f==\"undefined\";s&&(f=l,we(l.length)&&(yi(l)||ou(l))?f=yi(c)?c:c&&c.length?Bt(c):[]:wi(l)||Xe(l)?f=Xe(c)?iu(c):wi(c)?c:{}:s=false),t.push(l),a.push(f),s?n[i]=mr(f,l,r,t,a):(f===f?f!==c:c===c)&&(n[i]=f),i=void 0}return i}a=n[i],f=r?r(a,t,i,n,f):w,(l=typeof f==\"undefined\")&&(f=t),!o&&typeof f==\"undefined\"||!l&&(f===f?f===a:a!==a)||(n[i]=f)}),n}function wr(n){return function(t){return null==t?w:t[n]}}function br(n,t){return n+Zu(ho()*(t-n+1))}function xr(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)\r\n}),r}function Ar(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),r=typeof r==\"undefined\"||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=xu(u);++e<u;)r[e]=n[e+t];return r}function jr(n,t){var r;return ko(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function Or(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function Er(t,r,e){var u=-1,o=t.length,i=we(o)?xu(o):[];return ko(t,function(n){for(var t=r.length,e=xu(t);t--;)e[t]=null==n?w:n[r[t]];i[++u]={a:e,b:u,c:n}}),Or(i,function(t,r){var u;\r\nn:{u=-1;for(var o=t.a,i=r.a,f=o.length,a=e.length;++u<f;){var c=n(o[u],i[u]);if(c){u=u<a?c*(e[u]?1:-1):c;break n}}u=t.b-r.b}return u})}function Ir(n,t){var r=0;return ko(n,function(n,e,u){r+=+t(n,e,u)||0}),r}function kr(n,t){var e=-1,u=he(),o=n.length,i=u==r,f=i&&200<=o,a=f?Uo():null,c=[];a?(u=Pt,i=false):(f=false,a=t?[]:c);n:for(;++e<o;){var l=n[e],s=t?t(l,e,n):l;if(i&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;t&&a.push(s),c.push(l)}else 0>u(a,s,0)&&((t||f)&&a.push(s),c.push(l))}return c}function Rr(n,t){for(var r=-1,e=t.length,u=xu(e);++r<e;)u[r]=n[t[r]];\r\nreturn u}function Sr(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););return r?Ar(n,e?0:o,e?o+1:u):Ar(n,e?o+1:0,e?u:o)}function Cr(n,t){var r=n;r instanceof Nt&&(r=r.value());for(var e=-1,u=t.length;++e<u;){var r=[r],o=t[e];Ju.apply(r,o.args),r=o.func.apply(o.thisArg,r)}return r}function Tr(n,t,r){var e=0,u=n?n.length:e;if(typeof t==\"number\"&&t===t&&u<=mo){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)?e=o+1:u=o}return u}return Ur(n,t,du,r)}function Ur(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=typeof t==\"undefined\";u<o;){var a=Zu((u+o)/2),c=r(n[a]),l=c===c;\r\n(i?l||e:f?l&&(e||typeof c!=\"undefined\"):e?c<=t:c<t)?u=a+1:o=a}return co(o,yo)}function Fr(n,t,r){if(typeof n!=\"function\")return du;if(typeof t==\"undefined\")return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function Wr(n){return Ku.call(n,0)}function Nr(n,t,r){for(var e=r.length,u=-1,o=ao(n.length-e,0),i=-1,f=t.length,a=xu(o+f);++i<f;)a[i]=t[i];\r\nfor(;++u<e;)a[r[u]]=n[u];for(;o--;)a[i++]=n[u++];return a}function Lr(n,t,r){for(var e=-1,u=r.length,o=-1,i=ao(n.length-u,0),f=-1,a=t.length,c=xu(i+a);++o<i;)c[o]=n[o];for(i=o;++f<a;)c[i+f]=t[f];for(;++e<u;)c[i+r[e]]=n[o++];return c}function $r(n,t){return function(r,e,u){var o=t?t():{};if(e=pe(e,u,3),yi(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r)}}else ko(r,function(t,r,u){n(o,t,e(t,r,u),u)});return o}}function Pr(n){return function(){var t=arguments,r=t.length,e=t[0];if(2>r||null==e)return e;\r\nvar u=t[r-2],o=t[r-1],i=t[3];for(3<r&&typeof u==\"function\"?(u=Fr(u,o,5),r-=2):(u=2<r&&typeof o==\"function\"?o:null,r-=u?1:0),i&&de(t[1],t[2],i)&&(u=3==r?null:u,r=2),o=0;++o<r;)(i=t[o])&&n(e,i,u);return e}}function Br(n,t){return function(r,e){var u=r?r.length:0;if(!we(u))return n(r,e);for(var o=t?u:-1,i=Ie(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}function zr(n){return function(t,r,e){var u=Ie(t);e=e(t);for(var o=e.length,i=n?o:-1;n?i--:++i<o;){var f=e[i];if(false===r(u[f],f,u))break}return t}}function Mr(n,t){function r(){return(this&&this!==Mt&&this instanceof r?e:n).apply(t,arguments)\r\n}var e=qr(n);return r}function Dr(n){return function(t){var r=-1;t=gu(lu(t));for(var e=t.length,u=\"\";++r<e;)u=n(u,t[r],r);return u}}function qr(n){return function(){var t=Io(n.prototype),r=n.apply(t,arguments);return nu(r)?r:t}}function Kr(n){function t(r,e,u){return u&&de(r,e,u)&&(e=null),r=fe(r,n,null,null,null,null,null,e),r.placeholder=t.placeholder,r}return t}function Vr(n,t){return function(r,e,u){u&&de(r,e,u)&&(e=null);var i=pe(),f=null==e;if(i===tr&&f||(f=false,e=i(e,u,3)),f){if(e=yi(r),e||!uu(r))return n(e?r:Ee(r));\r\ne=o}return se(r,e,t)}}function Yr(n,r){return function(e,u,o){return u=pe(u,o,3),yi(e)?(u=t(e,u,r),-1<u?e[u]:w):fr(e,u,n)}}function Zr(n){return function(r,e,u){return r&&r.length?(e=pe(e,u,3),t(r,e,n)):-1}}function Gr(n){return function(t,r,e){return r=pe(r,e,3),fr(t,r,n,true)}}function Jr(n){return function(){var t=arguments.length;if(!t)return function(){return arguments[0]};for(var r,e=n?t:-1,u=0,o=xu(t);n?e--:++e<t;){var i=o[u++]=arguments[e];if(typeof i!=\"function\")throw new Cu($);var f=r?\"\":Wo(i);\r\nr=\"wrapper\"==f?new Wt([]):r}for(e=r?-1:t;++e<t;)i=o[e],f=Wo(i),r=(u=\"wrapper\"==f?Fo(i):null)&&me(u[0])?r[Wo(u[0])].apply(r,u[3]):1==i.length&&me(i)?r[f]():r.thru(i);return function(){var n=arguments;if(r&&1==n.length&&yi(n[0]))return r.plant(n[0]).value();for(var e=0,n=o[e].apply(this,n);++e<t;)n=o[e].call(this,n);return n}}}function Xr(n,t){return function(r,e,u){return typeof e==\"function\"&&typeof u==\"undefined\"&&yi(r)?n(r,e):t(r,Fr(e,u,3))}}function Hr(n){return function(t,r,e){return(typeof r!=\"function\"||typeof e!=\"undefined\")&&(r=Fr(r,e,3)),n(t,r,au)\r\n}}function Qr(n){return function(t,r,e){return(typeof r!=\"function\"||typeof e!=\"undefined\")&&(r=Fr(r,e,3)),n(t,r)}}function ne(n){return function(t,r,e){return(t=u(t))&&(n?t:\"\")+ue(t,r,e)+(n?\"\":t)}}function te(n){var t=Je(function(r,e){var u=g(e,t.placeholder);return fe(r,n,null,e,u)});return t}function re(n,t){return function(r,e,u,o){var i=3>arguments.length;return typeof e==\"function\"&&typeof o==\"undefined\"&&yi(r)?n(r,e,u,i):xr(r,pe(e,o,4),u,i,t)}}function ee(n,t,r,e,u,o,i,f,a,c){function l(){for(var b=arguments.length,j=b,O=xu(b);j--;)O[j]=arguments[j];\r\nif(e&&(O=Nr(O,e,u)),o&&(O=Lr(O,o,i)),_||y){var j=l.placeholder,E=g(O,j),b=b-E.length;if(b<c){var R=f?Bt(f):null,b=ao(c-b,0),S=_?E:null,E=_?null:E,C=_?O:null,O=_?null:O;return t|=_?I:k,t&=~(_?k:I),v||(t&=~(x|A)),O=[n,t,r,C,S,O,E,R,a,b],R=ee.apply(w,O),me(n)&&No(R,O),R.placeholder=j,R}}if(j=p?r:this,h&&(n=j[m]),f)for(R=O.length,b=co(f.length,R),S=Bt(O);b--;)E=f[b],O[b]=ye(E,R)?S[E]:w;return s&&a<O.length&&(O.length=a),(this&&this!==Mt&&this instanceof l?d||qr(n):n).apply(j,O)}var s=t&R,p=t&x,h=t&A,_=t&O,v=t&j,y=t&E,d=!h&&qr(n),m=n;\r\nreturn l}function ue(n,t,r){return n=n.length,t=+t,n<t&&io(t)?(t-=n,r=null==r?\" \":r+\"\",hu(r,Vu(t/r.length)).slice(0,t)):\"\"}function oe(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=xu(f+c);++a<c;)l[a]=e[a];for(;f--;)l[a++]=arguments[++t];return(this&&this!==Mt&&this instanceof u?i:n).apply(o?r:this,l)}var o=t&x,i=qr(n);return u}function ie(n){return function(t,r,e,u){var o=pe(e);return o===tr&&null==e?Tr(t,r,n):Ur(t,r,o(e,u,1),n)}}function fe(n,t,r,e,u,o,i,f){var a=t&A;if(!a&&typeof n!=\"function\")throw new Cu($);\r\nvar c=e?e.length:0;if(c||(t&=~(I|k),e=u=null),c-=u?u.length:0,t&k){var l=e,s=u;e=u=null}var p=a?null:Fo(n);return r=[n,t,r,e,u,l,s,o,i,f],p&&(e=r[1],t=p[1],f=e|t,u=t==R&&e==O||t==R&&e==S&&r[7].length<=p[8]||t==(R|S)&&e==O,(f<R||u)&&(t&x&&(r[2]=p[2],f|=e&x?0:j),(e=p[3])&&(u=r[3],r[3]=u?Nr(u,e,p[4]):Bt(e),r[4]=u?g(r[3],P):Bt(p[4])),(e=p[5])&&(u=r[5],r[5]=u?Lr(u,e,p[6]):Bt(e),r[6]=u?g(r[5],P):Bt(p[6])),(e=p[7])&&(r[7]=Bt(e)),t&R&&(r[8]=null==r[8]?p[8]:co(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=f),t=r[1],f=r[9]),r[9]=null==f?a?0:n.length:ao(f-c,0)||0,(p?To:No)(t==x?Mr(r[0],r[2]):t!=I&&t!=(x|I)||r[4].length?ee.apply(w,r):oe.apply(w,r),r)\r\n}function ae(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length,l=true;if(a!=c&&(!u||c<=a))return false;for(;l&&++f<a;){var s=n[f],p=t[f],l=w;if(e&&(l=u?e(p,s,f):e(s,p,f)),typeof l==\"undefined\")if(u)for(var h=c;h--&&(p=t[h],!(l=s&&s===p||r(s,p,e,u,o,i))););else l=s&&s===p||r(s,p,e,u,o,i)}return!!l}function ce(n,t,r){switch(r){case M:case D:return+n==+t;case q:return n.name==t.name&&n.message==t.message;case V:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case Z:case G:return n==t+\"\"}return false}function le(n,t,r,e,u,o,i){var f=Ri(n),a=f.length,c=Ri(t).length;\r\nif(a!=c&&!u)return false;for(var c=u,l=-1;++l<a;){var s=f[l],p=u?s in t:Pu.call(t,s);if(p){var h=n[s],_=t[s],p=w;e&&(p=u?e(_,h,s):e(h,_,s)),typeof p==\"undefined\"&&(p=h&&h===_||r(h,_,e,u,o,i))}if(!p)return false;c||(c=\"constructor\"==s)}return c||(r=n.constructor,e=t.constructor,!(r!=e&&\"constructor\"in n&&\"constructor\"in t)||typeof r==\"function\"&&r instanceof r&&typeof e==\"function\"&&e instanceof e)?true:false}function se(n,t,r){var e=r?go:_o,u=e,o=u;return ko(n,function(n,i,f){i=t(n,i,f),((r?i<u:i>u)||i===e&&i===o)&&(u=i,o=n)\r\n}),o}function pe(n,t,r){var e=Ut.callback||vu,e=e===vu?tr:e;return r?e(n,t,r):e}function he(n,t,e){var u=Ut.indexOf||Te,u=u===Te?r:u;return n?u(n,t,e):u}function _e(n){var t=n.length,r=new n.constructor(t);return t&&\"string\"==typeof n[0]&&Pu.call(n,\"index\")&&(r.index=n.index,r.input=n.input),r}function ge(n){return n=n.constructor,typeof n==\"function\"&&n instanceof n||(n=ku),new n}function ve(n,t,r){var e=n.constructor;switch(t){case J:return Wr(n);case M:case D:return new e(+n);case X:case H:case Q:case nt:case tt:case rt:case et:case ut:case ot:return e instanceof e&&(e=jo[t]),t=n.buffer,new e(r?Wr(t):t,n.byteOffset,n.length);\r\ncase V:case G:return new e(n);case Z:var u=new e(n.source,dt.exec(n));u.lastIndex=n.lastIndex}return u}function ye(n,t){return n=+n,t=null==t?bo:t,-1<n&&0==n%1&&n<t}function de(n,t,r){if(!nu(r))return false;var e=typeof t;return\"number\"==e?(e=r.length,e=we(e)&&ye(t,e)):e=\"string\"==e&&t in r,e?(t=r[t],n===n?n===t:t!==t):false}function me(n){var t=Wo(n);return!!t&&n===Ut[t]&&t in Nt.prototype}function we(n){return typeof n==\"number\"&&-1<n&&0==n%1&&n<=bo}function be(n){return n===n&&(0===n?0<1/n:!nu(n))}function xe(n,t){n=Ie(n);\r\nfor(var r=-1,e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function Ae(n,t){var r={};return cr(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function je(n){var t,r=Ut.support;if(!h(n)||zu.call(n)!=Y||Dt(n)||!(Pu.call(n,\"constructor\")||(t=n.constructor,typeof t!=\"function\"||t instanceof t))||!r.argsTag&&Xe(n))return false;var e;return r.ownLast?(cr(n,function(n,t,r){return e=Pu.call(r,t),false}),false!==e):(cr(n,function(n,t){e=t}),typeof e==\"undefined\"||Pu.call(n,e))}function Oe(n){for(var t=au(n),r=t.length,e=r&&n.length,u=Ut.support,u=e&&we(e)&&(yi(n)||u.nonEnumStrings&&uu(n)||u.nonEnumArgs&&Xe(n)),o=-1,i=[];++o<r;){var f=t[o];\r\n(u&&ye(f,e)||Pu.call(n,f))&&i.push(f)}return i}function Ee(n){return null==n?[]:we(n.length)?Ut.support.unindexedChars&&uu(n)?n.split(\"\"):nu(n)?n:ku(n):cu(n)}function Ie(n){if(Ut.support.unindexedChars&&uu(n)){for(var t=-1,r=n.length,e=ku(n);++t<r;)e[t]=n.charAt(t);return e}return nu(n)?n:ku(n)}function ke(n){return n instanceof Nt?n.clone():new Wt(n.__wrapped__,n.__chain__,Bt(n.__actions__))}function Re(n,t,r){return n&&n.length?((r?de(n,t,r):null==t)&&(t=1),Ar(n,0>t?0:t)):[]}function Se(n,t,r){var e=n?n.length:0;\r\nreturn e?((r?de(n,t,r):null==t)&&(t=1),t=e-(+t||0),Ar(n,0,0>t?0:t)):[]}function Ce(n){return n?n[0]:w}function Te(n,t,e){var u=n?n.length:0;if(!u)return-1;if(typeof e==\"number\")e=0>e?ao(u+e,0):e;else if(e)return e=Tr(n,t),n=n[e],(t===t?t===n:n!==n)?e:-1;return r(n,t,e||0)}function Ue(n){var t=n?n.length:0;return t?n[t-1]:w}function Fe(n){return Re(n,1)}function We(n,t,e,u){if(!n||!n.length)return[];null!=t&&typeof t!=\"boolean\"&&(u=e,e=de(n,t,u)?null:t,t=false);var o=pe();if((o!==tr||null!=e)&&(e=o(e,u,3)),t&&he()==r){t=e;\r\nvar i;e=-1,u=n.length;for(var o=-1,f=[];++e<u;){var a=n[e],c=t?t(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=kr(n,e);return n}function Ne(n){for(var t=-1,r=(n&&n.length&&Zt(Yt(n,$u)))>>>0,e=xu(r);++t<r;)e[t]=Yt(n,wr(t));return e}function Le(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||yi(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1])}return u}function $e(n){return n=Ut(n),n.__chain__=true,n}function Pe(n,t,r){return t.call(r,n)}function Be(n,t,r){var e=yi(n)?Kt:or;return r&&de(n,t,r)&&(t=null),(typeof t!=\"function\"||typeof r!=\"undefined\")&&(t=pe(t,r,3)),e(n,t)\r\n}function ze(n,t,r){var e=yi(n)?Vt:ir;return t=pe(t,r,3),e(n,t)}function Me(n,t,r,e){var u=n?n.length:0;return we(u)||(n=cu(n),u=n.length),u?(r=typeof r!=\"number\"||e&&de(t,r,e)?0:0>r?ao(u+r,0):r||0,typeof n==\"string\"||!yi(n)&&uu(n)?r<u&&-1<n.indexOf(t,r):-1<he(n,t,r)):false}function De(n,t,r){var e=yi(n)?Yt:vr;return t=pe(t,r,3),e(n,t)}function qe(n,t,r){return(r?de(n,t,r):null==t)?(n=Ee(n),t=n.length,0<t?n[br(0,t-1)]:w):(n=Ke(n),n.length=co(0>t?0:+t||0,n.length),n)}function Ke(n){n=Ee(n);for(var t=-1,r=n.length,e=xu(r);++t<r;){var u=br(0,t);\r\nt!=u&&(e[t]=e[u]),e[u]=n[t]}return e}function Ve(n,t,r){var e=yi(n)?Gt:jr;return r&&de(n,t,r)&&(t=null),(typeof t!=\"function\"||typeof r!=\"undefined\")&&(t=pe(t,r,3)),e(n,t)}function Ye(n,t){var r;if(typeof t!=\"function\"){if(typeof n!=\"function\")throw new Cu($);var e=n;n=t,t=e}return function(){return 0<--n?r=t.apply(this,arguments):t=null,r}}function Ze(n,t,r){function e(){var r=t-(ui()-c);0>=r||r>t?(f&&Yu(f),r=p,f=s=p=w,r&&(h=ui(),a=n.apply(l,i),s||f||(i=l=null))):s=Qu(e,r)}function u(){s&&Yu(s),f=s=p=w,(g||_!==t)&&(h=ui(),a=n.apply(l,i),s||f||(i=l=null))\r\n}function o(){if(i=arguments,c=ui(),l=this,p=g&&(s||!v),false===_)var r=v&&!s;else{f||v||(h=c);var o=_-(c-h),y=0>=o||o>_;y?(f&&(f=Yu(f)),h=c,a=n.apply(l,i)):f||(f=Qu(u,o))}return y&&s?s=Yu(s):s||t===_||(s=Qu(e,t)),r&&(y=true,a=n.apply(l,i)),!y||s||f||(i=l=null),a}var i,f,a,c,l,s,p,h=0,_=false,g=true;if(typeof n!=\"function\")throw new Cu($);if(t=0>t?0:+t||0,true===r)var v=true,g=false;else nu(r)&&(v=r.leading,_=\"maxWait\"in r&&ao(+r.maxWait||0,t),g=\"trailing\"in r?r.trailing:g);return o.cancel=function(){s&&Yu(s),f&&Yu(f),f=s=p=w\r\n},o}function Ge(n,t){function r(){var e=arguments,u=r.cache,o=t?t.apply(this,e):e[0];return u.has(o)?u.get(o):(e=n.apply(this,e),u.set(o,e),e)}if(typeof n!=\"function\"||t&&typeof t!=\"function\")throw new Cu($);return r.cache=new Ge.Cache,r}function Je(n,t){if(typeof n!=\"function\")throw new Cu($);return t=ao(typeof t==\"undefined\"?n.length-1:+t||0,0),function(){for(var r=arguments,e=-1,u=ao(r.length-t,0),o=xu(u);++e<u;)o[e]=r[t+e];switch(t){case 0:return n.call(this,o);case 1:return n.call(this,r[0],o);\r\ncase 2:return n.call(this,r[0],r[1],o)}for(u=xu(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function Xe(n){return we(h(n)?n.length:w)&&zu.call(n)==B}function He(n){return!!n&&1===n.nodeType&&h(n)&&(Ut.support.nodeTag?-1<zu.call(n).indexOf(\"Element\"):Dt(n))}function Qe(n){return h(n)&&typeof n.message==\"string\"&&zu.call(n)==q}function nu(n){var t=typeof n;return\"function\"==t||!!n&&\"object\"==t}function tu(n){return null==n?false:zu.call(n)==K?Du.test(Lu.call(n)):h(n)&&(Dt(n)?Du:wt).test(n)\r\n}function ru(n){return typeof n==\"number\"||h(n)&&zu.call(n)==V}function eu(n){return nu(n)&&zu.call(n)==Z}function uu(n){return typeof n==\"string\"||h(n)&&zu.call(n)==G}function ou(n){return h(n)&&we(n.length)&&!!St[zu.call(n)]}function iu(n){return nr(n,au(n))}function fu(n){return pr(n,au(n))}function au(n){if(null==n)return[];nu(n)||(n=ku(n));for(var t=n.length,r=Ut.support,t=t&&we(t)&&(yi(n)||r.nonEnumStrings&&uu(n)||r.nonEnumArgs&&Xe(n))&&t||0,e=n.constructor,u=-1,e=mi(e)&&e.prototype||Fu,o=e===n,i=xu(t),f=0<t,a=r.enumErrorProps&&(n===Uu||n instanceof ju),c=r.enumPrototypes&&mi(n);++u<t;)i[u]=u+\"\";\r\nfor(var l in n)c&&\"prototype\"==l||a&&(\"message\"==l||\"name\"==l)||f&&ye(l,t)||\"constructor\"==l&&(o||!Pu.call(n,l))||i.push(l);if(r.nonEnumShadows&&n!==Fu)for(t=n===Wu?G:n===Uu?q:zu.call(n),r=Oo[t]||Oo[Y],t==Y&&(e=Fu),t=Rt.length;t--;)l=Rt[t],u=r[l],o&&u||(u?!Pu.call(n,l):n[l]===e[l])||i.push(l);return i}function cu(n){return Rr(n,Ri(n))}function lu(n){return(n=u(n))&&n.replace(bt,c).replace(vt,\"\")}function su(n){return(n=u(n))&&jt.test(n)?n.replace(At,\"\\\\$&\"):n}function pu(n,t,r){return r&&de(n,t,r)&&(t=0),po(n,t)\r\n}function hu(n,t){var r=\"\";if(n=u(n),t=+t,1>t||!n||!io(t))return r;do t%2&&(r+=n),t=Zu(t/2),n+=n;while(t);return r}function _u(n,t,r){var e=n;return(n=u(n))?(r?de(e,t,r):null==t)?n.slice(v(n),y(n)+1):(t+=\"\",n.slice(i(n,t),f(n,t)+1)):n}function gu(n,t,r){return r&&de(n,t,r)&&(t=null),n=u(n),n.match(t||Et)||[]}function vu(n,t,r){return r&&de(n,t,r)&&(t=null),h(n)?mu(n):tr(n,t)}function yu(n){return function(){return n}}function du(n){return n}function mu(n){return yr(rr(n,true))}function wu(n,t,r){if(null==r){var e=nu(t),u=e&&Ri(t);\r\n((u=u&&u.length&&pr(t,u))?u.length:e)||(u=false,r=t,t=n,n=this)}u||(u=pr(t,Ri(t)));var o=true,e=-1,i=mi(n),f=u.length;false===r?o=false:nu(r)&&\"chain\"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);return(e.__actions__=Bt(this.__actions__)).push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return r=[this.value()],Ju.apply(r,arguments),t.apply(n,r)}}(a))}return n}function bu(){}_=_?qt.defaults(Mt.Object(),_,qt.pick(Mt,kt)):Mt;\r\nvar xu=_.Array,Au=_.Date,ju=_.Error,Ou=_.Function,Eu=_.Math,Iu=_.Number,ku=_.Object,Ru=_.RegExp,Su=_.String,Cu=_.TypeError,Tu=xu.prototype,Uu=ju.prototype,Fu=ku.prototype,Wu=Su.prototype,Nu=(Nu=_.window)&&Nu.document,Lu=Ou.prototype.toString,$u=wr(\"length\"),Pu=Fu.hasOwnProperty,Bu=0,zu=Fu.toString,Mu=_._,Du=Ru(\"^\"+su(zu).replace(/toString|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g,\"$1.*?\")+\"$\"),qu=tu(qu=_.ArrayBuffer)&&qu,Ku=tu(Ku=qu&&new qu(0).slice)&&Ku,Vu=Eu.ceil,Yu=_.clearTimeout,Zu=Eu.floor,Gu=tu(Gu=ku.getPrototypeOf)&&Gu,Ju=Tu.push,Xu=Fu.propertyIsEnumerable,Hu=tu(Hu=_.Set)&&Hu,Qu=_.setTimeout,no=Tu.splice,to=tu(to=_.Uint8Array)&&to,ro=tu(ro=_.WeakMap)&&ro,eo=function(){try{var n=tu(n=_.Float64Array)&&n,t=new n(new qu(10),0,1)&&n\r\n}catch(r){}return t}(),uo=tu(uo=xu.isArray)&&uo,oo=tu(oo=ku.create)&&oo,io=_.isFinite,fo=tu(fo=ku.keys)&&fo,ao=Eu.max,co=Eu.min,lo=tu(lo=Au.now)&&lo,so=tu(so=Iu.isFinite)&&so,po=_.parseInt,ho=Eu.random,_o=Iu.NEGATIVE_INFINITY,go=Iu.POSITIVE_INFINITY,vo=Eu.pow(2,32)-1,yo=vo-1,mo=vo>>>1,wo=eo?eo.BYTES_PER_ELEMENT:0,bo=Eu.pow(2,53)-1,xo=ro&&new ro,Ao={},jo={};jo[X]=_.Float32Array,jo[H]=_.Float64Array,jo[Q]=_.Int8Array,jo[nt]=_.Int16Array,jo[tt]=_.Int32Array,jo[rt]=_.Uint8Array,jo[et]=_.Uint8ClampedArray,jo[ut]=_.Uint16Array,jo[ot]=_.Uint32Array;\r\nvar Oo={};Oo[z]=Oo[D]=Oo[V]={constructor:true,toLocaleString:true,toString:true,valueOf:true},Oo[M]=Oo[G]={constructor:true,toString:true,valueOf:true},Oo[q]=Oo[K]=Oo[Z]={constructor:true,toString:true},Oo[Y]={constructor:true},zt(Rt,function(n){for(var t in Oo)if(Pu.call(Oo,t)){var r=Oo[t];r[n]=Pu.call(r,n)}});var Eo=Ut.support={};!function(n){function t(){this.x=1}var r={0:1,length:1},e=[];t.prototype={valueOf:1,y:1};for(var u in new t)e.push(u);Eo.argsTag=zu.call(arguments)==B,Eo.enumErrorProps=Xu.call(Uu,\"message\")||Xu.call(Uu,\"name\"),Eo.enumPrototypes=Xu.call(t,\"prototype\"),Eo.funcDecomp=/\\bthis\\b/.test(function(){return this\r\n}),Eo.funcNames=typeof Ou.name==\"string\",Eo.nodeTag=zu.call(Nu)!=Y,Eo.nonEnumStrings=!Xu.call(\"x\",0),Eo.nonEnumShadows=!/valueOf/.test(e),Eo.ownLast=\"x\"!=e[0],Eo.spliceObjects=(no.call(r,0,1),!r[0]),Eo.unindexedChars=\"xx\"!=\"x\"[0]+ku(\"x\")[0];try{Eo.dom=11===Nu.createDocumentFragment().nodeType}catch(o){Eo.dom=false}try{Eo.nonEnumArgs=!Xu.call(arguments,1)}catch(i){Eo.nonEnumArgs=true}}(0,0),Ut.templateSettings={escape:ht,evaluate:_t,interpolate:gt,variable:\"\",imports:{_:Ut}};var Io=function(){function n(){}return function(t){if(nu(t)){n.prototype=t;\r\nvar r=new n;n.prototype=null}return r||_.Object()}}(),ko=Br(lr),Ro=Br(sr,true),So=zr(),Co=zr(true),To=xo?function(n,t){return xo.set(n,t),n}:du;Ku||(Wr=qu&&to?function(n){var t=n.byteLength,r=eo?Zu(t/wo):0,e=r*wo,u=new qu(t);if(r){var o=new eo(u,0,r);o.set(new eo(n,0,r))}return t!=e&&(o=new to(u,e),o.set(new to(n,e))),u}:yu(null));var Uo=oo&&Hu?function(n){return new $t(n)}:yu(null),Fo=xo?function(n){return xo.get(n)}:bu,Wo=function(){return Eo.funcNames?\"constant\"==yu.name?wr(\"name\"):function(n){for(var t=n.name,r=Ao[t],e=r?r.length:0;e--;){var u=r[e],o=u.func;\r\nif(null==o||o==n)return u.name}return t}:yu(\"\")}(),No=function(){var n=0,t=0;return function(r,e){var u=ui(),o=F-(u-t);if(t=u,0<o){if(++n>=U)return r}else n=0;return To(r,e)}}(),Lo=Je(function(n,t){return yi(n)||Xe(n)?ur(n,ar(t,false,true)):[]}),$o=Zr(),Po=Zr(true),Bo=Je(function(t,r){t||(t=[]),r=ar(r);var e=r.length,u=Qt(t,r);for(r.sort(n);e--;){var o=parseFloat(r[e]);if(o!=i&&ye(o)){var i=o;no.call(t,o,1)}}return u}),zo=ie(),Mo=ie(true),Do=Je(function(n){return kr(ar(n,false,true))}),qo=Je(function(n,t){return yi(n)||Xe(n)?ur(n,t):[]\r\n}),Ko=Je(Ne),Vo=Je(function(n,t){return we(n?n.length:0)&&(n=Ee(n)),Qt(n,ar(t))}),Yo=$r(function(n,t,r){Pu.call(n,r)?++n[r]:n[r]=1}),Zo=Yr(ko),Go=Yr(Ro,true),Jo=Xr(zt,ko),Xo=Xr(function(n,t){for(var r=n.length;r--&&false!==t(n[r],r,n););return n},Ro),Ho=$r(function(n,t,r){Pu.call(n,r)?n[r].push(t):n[r]=[t]}),Qo=$r(function(n,t,r){n[r]=t}),ni=Je(function(n,t,r){var e=-1,u=typeof t==\"function\",o=n?n.length:0,i=we(o)?xu(o):[];return ko(n,function(n){var o=u?t:null!=n&&n[t];i[++e]=o?o.apply(n,r):w}),i}),ti=$r(function(n,t,r){n[r?0:1].push(t)\r\n},function(){return[[],[]]}),ri=re(function(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r},ko),ei=re(function(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r},Ro),ui=lo||function(){return(new Au).getTime()},oi=Je(function(n,t,r){var e=x;if(r.length)var u=g(r,oi.placeholder),e=e|I;return fe(n,e,t,r,u)}),ii=Je(function(n,t){t=t.length?ar(t):fu(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];n[u]=fe(n[u],x,n)}return n}),fi=Je(function(n,t,r){var e=x|A;\r\nif(r.length)var u=g(r,fi.placeholder),e=e|I;return fe(t,e,n,r,u)}),ai=Kr(O),ci=Kr(E),li=Je(function(n,t){return er(n,1,t)}),si=Je(function(n,t,r){return er(n,t,r)}),pi=Jr(),hi=Jr(true),_i=te(I),gi=te(k),vi=Je(function(n,t){return fe(n,S,null,null,null,ar(t))});Eo.argsTag||(Xe=function(n){return we(h(n)?n.length:w)&&Pu.call(n,\"callee\")&&!Xu.call(n,\"callee\")});var yi=uo||function(n){return h(n)&&we(n.length)&&zu.call(n)==z};Eo.dom||(He=function(n){return!!n&&1===n.nodeType&&h(n)&&!wi(n)});var di=so||function(n){return typeof n==\"number\"&&io(n)\r\n},mi=e(/x/)||to&&!e(to)?function(n){return zu.call(n)==K}:e,wi=Gu?function(n){if(!n||zu.call(n)!=Y||!Ut.support.argsTag&&Xe(n))return false;var t=n.valueOf,r=tu(t)&&(r=Gu(t))&&Gu(r);return r?n==r||Gu(n)==r:je(n)}:je,bi=Pr(Ht),xi=Je(function(n){var t=n[0];return null==t?t:(n.push(Jt),bi.apply(w,n))}),Ai=Gr(lr),ji=Gr(sr),Oi=Hr(So),Ei=Hr(Co),Ii=Qr(lr),ki=Qr(sr),Ri=fo?function(n){if(n)var t=n.constructor,r=n.length;return typeof t==\"function\"&&t.prototype===n||(typeof n==\"function\"?Ut.support.enumPrototypes:r&&we(r))?Oe(n):nu(n)?fo(n):[]\r\n}:Oe,Si=Pr(mr),Ci=Je(function(n,t){if(null==n)return{};if(\"function\"!=typeof t[0])return t=Yt(ar(t),Su),xe(n,ur(au(n),t));var r=Fr(t[0],t[1],3);return Ae(n,function(n,t,e){return!r(n,t,e)})}),Ti=Je(function(n,t){return null==n?{}:\"function\"==typeof t[0]?Ae(n,Fr(t[0],t[1],3)):xe(n,ar(t))}),Ui=Dr(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t)}),Fi=Dr(function(n,t,r){return n+(r?\"-\":\"\")+t.toLowerCase()}),Wi=ne(),Ni=ne(true);8!=po(It+\"08\")&&(pu=function(n,t,r){return(r?de(n,t,r):null==t)?t=0:t&&(t=+t),n=_u(n),po(n,t||(mt.test(n)?16:10))\r\n});var Li=Dr(function(n,t,r){return n+(r?\"_\":\"\")+t.toLowerCase()}),$i=Dr(function(n,t,r){return n+(r?\" \":\"\")+(t.charAt(0).toUpperCase()+t.slice(1))}),Pi=Je(function(n,t){try{return n.apply(w,t)}catch(r){return Qe(r)?r:new ju(r)}}),Bi=Vr(Zt),zi=Vr(function(n){for(var t=-1,r=n.length,e=go;++t<r;){var u=n[t];u<e&&(e=u)}return e},true);return Ut.prototype=Ft.prototype,Wt.prototype=Io(Ft.prototype),Wt.prototype.constructor=Wt,Nt.prototype=Io(Ft.prototype),Nt.prototype.constructor=Nt,Lt.prototype[\"delete\"]=function(n){return this.has(n)&&delete this.__data__[n]\r\n},Lt.prototype.get=function(n){return\"__proto__\"==n?w:this.__data__[n]},Lt.prototype.has=function(n){return\"__proto__\"!=n&&Pu.call(this.__data__,n)},Lt.prototype.set=function(n,t){return\"__proto__\"!=n&&(this.__data__[n]=t),this},$t.prototype.push=function(n){var t=this.data;typeof n==\"string\"||nu(n)?t.set.add(n):t.hash[n]=true},Ge.Cache=Lt,Ut.after=function(n,t){if(typeof t!=\"function\"){if(typeof n!=\"function\")throw new Cu($);var r=n;n=t,t=r}return n=io(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0\r\n}},Ut.ary=function(n,t,r){return r&&de(n,t,r)&&(t=null),t=n&&null==t?n.length:ao(+t||0,0),fe(n,R,null,null,null,null,t)},Ut.assign=bi,Ut.at=Vo,Ut.before=Ye,Ut.bind=oi,Ut.bindAll=ii,Ut.bindKey=fi,Ut.callback=vu,Ut.chain=$e,Ut.chunk=function(n,t,r){t=(r?de(n,t,r):null==t)?1:ao(+t||1,1),r=0;for(var e=n?n.length:0,u=-1,o=xu(Vu(e/t));r<e;)o[++u]=Ar(n,r,r+=t);return o},Ut.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var o=n[t];o&&(u[++e]=o)}return u},Ut.constant=yu,Ut.countBy=Yo,Ut.create=function(n,t,r){var e=Io(n);\r\nreturn r&&de(n,t,r)&&(t=null),t?nr(t,e,Ri(t)):e},Ut.curry=ai,Ut.curryRight=ci,Ut.debounce=Ze,Ut.defaults=xi,Ut.defer=li,Ut.delay=si,Ut.difference=Lo,Ut.drop=Re,Ut.dropRight=Se,Ut.dropRightWhile=function(n,t,r){return n&&n.length?Sr(n,pe(t,r,3),true,true):[]},Ut.dropWhile=function(n,t,r){return n&&n.length?Sr(n,pe(t,r,3),true):[]},Ut.fill=function(n,t,r,e){var u=n?n.length:0;if(!u)return[];for(r&&typeof r!=\"number\"&&de(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=typeof e==\"undefined\"||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;\r\nreturn n},Ut.filter=ze,Ut.flatten=function(n,t,r){var e=n?n.length:0;return r&&de(n,t,r)&&(t=false),e?ar(n,t):[]},Ut.flattenDeep=function(n){return n&&n.length?ar(n,true):[]},Ut.flow=pi,Ut.flowRight=hi,Ut.forEach=Jo,Ut.forEachRight=Xo,Ut.forIn=Oi,Ut.forInRight=Ei,Ut.forOwn=Ii,Ut.forOwnRight=ki,Ut.functions=fu,Ut.groupBy=Ho,Ut.indexBy=Qo,Ut.initial=function(n){return Se(n,1)},Ut.intersection=function(){for(var n=[],t=-1,e=arguments.length,u=[],o=he(),i=o==r;++t<e;){var f=arguments[t];(yi(f)||Xe(f))&&(n.push(f),u.push(i&&120<=f.length?Uo(t&&f):null))\r\n}var e=n.length,i=n[0],a=-1,c=i?i.length:0,l=[],s=u[0];n:for(;++a<c;)if(f=i[a],0>(s?Pt(s,f):o(l,f,0))){for(t=e;--t;){var p=u[t];if(0>(p?Pt(p,f):o(n[t],f,0)))continue n}s&&s.push(f),l.push(f)}return l},Ut.invert=function(n,t,r){r&&de(n,t,r)&&(t=null),r=-1;for(var e=Ri(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?Pu.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},Ut.invoke=ni,Ut.keys=Ri,Ut.keysIn=au,Ut.map=De,Ut.mapValues=function(n,t,r){var e={};return t=pe(t,r,3),lr(n,function(n,r,u){e[r]=t(n,r,u)\r\n}),e},Ut.matches=mu,Ut.matchesProperty=function(n,t){return dr(n+\"\",rr(t,true))},Ut.memoize=Ge,Ut.merge=Si,Ut.mixin=wu,Ut.negate=function(n){if(typeof n!=\"function\")throw new Cu($);return function(){return!n.apply(this,arguments)}},Ut.omit=Ci,Ut.once=function(n){return Ye(n,2)},Ut.pairs=function(n){for(var t=-1,r=Ri(n),e=r.length,u=xu(e);++t<e;){var o=r[t];u[t]=[o,n[o]]}return u},Ut.partial=_i,Ut.partialRight=gi,Ut.partition=ti,Ut.pick=Ti,Ut.pluck=function(n,t){return De(n,wr(t))},Ut.property=function(n){return wr(n+\"\")\r\n},Ut.propertyOf=function(n){return function(t){return null==n?w:n[t]}},Ut.pull=function(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=he(),u=n.length;++r<u;)for(var o=0,i=n[r];-1<(o=e(t,i,o));)no.call(t,o,1);return t},Ut.pullAt=Bo,Ut.range=function(n,t,r){r&&de(n,t,r)&&(t=r=null),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;var e=-1;t=ao(Vu((t-n)/(r||1)),0);for(var u=xu(t);++e<t;)u[e]=n,n+=r;return u},Ut.rearg=vi,Ut.reject=function(n,t,r){var e=yi(n)?Vt:ir;return t=pe(t,r,3),e(n,function(n,r,e){return!t(n,r,e)\r\n})},Ut.remove=function(n,t,r){var e=-1,u=n?n.length:0,o=[];for(t=pe(t,r,3);++e<u;)r=n[e],t(r,e,n)&&(o.push(r),no.call(n,e--,1),u--);return o},Ut.rest=Fe,Ut.restParam=Je,Ut.shuffle=Ke,Ut.slice=function(n,t,r){var e=n?n.length:0;return e?(r&&typeof r!=\"number\"&&de(n,t,r)&&(t=0,r=e),Ar(n,t,r)):[]},Ut.sortBy=function(n,t,r){if(null==n)return[];var e=-1,u=n.length,o=we(u)?xu(u):[];return r&&de(n,t,r)&&(t=null),t=pe(t,r,3),ko(n,function(n,r,u){o[++e]={a:t(n,r,u),b:e,c:n}}),Or(o,a)},Ut.sortByAll=function(){var n=arguments,t=n[0],r=n[3],e=0,u=n.length-1;\r\nif(null==t)return[];for(var o=xu(u);e<u;)o[e]=n[++e];return r&&de(n[1],n[2],r)&&(o=n[1]),Er(t,ar(o),[])},Ut.sortByOrder=function(n,t,r,e){return null==n?[]:(e&&de(t,r,e)&&(r=null),yi(t)||(t=null==t?[]:[t]),yi(r)||(r=null==r?[]:[r]),Er(n,t,r))},Ut.spread=function(n){if(typeof n!=\"function\")throw new Cu($);return function(t){return n.apply(this,t)}},Ut.take=function(n,t,r){return n&&n.length?((r?de(n,t,r):null==t)&&(t=1),Ar(n,0,0>t?0:t)):[]},Ut.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?de(n,t,r):null==t)&&(t=1),t=e-(+t||0),Ar(n,0>t?0:t)):[]\r\n},Ut.takeRightWhile=function(n,t,r){return n&&n.length?Sr(n,pe(t,r,3),false,true):[]},Ut.takeWhile=function(n,t,r){return n&&n.length?Sr(n,pe(t,r,3)):[]},Ut.tap=function(n,t,r){return t.call(r,n),n},Ut.throttle=function(n,t,r){var e=true,u=true;if(typeof n!=\"function\")throw new Cu($);return false===r?e=false:nu(r)&&(e=\"leading\"in r?!!r.leading:e,u=\"trailing\"in r?!!r.trailing:u),Tt.leading=e,Tt.maxWait=+t,Tt.trailing=u,Ze(n,t,Tt)},Ut.thru=Pe,Ut.times=function(n,t,r){if(n=+n,1>n||!io(n))return[];var e=-1,u=xu(co(n,vo));\r\nfor(t=Fr(t,r,1);++e<n;)e<vo?u[e]=t(e):t(e);return u},Ut.toArray=function(n){var t=n?n.length:0;return we(t)?t?Ut.support.unindexedChars&&uu(n)?n.split(\"\"):Bt(n):[]:cu(n)},Ut.toPlainObject=iu,Ut.transform=function(n,t,r,e){var u=yi(n)||ou(n);return t=pe(t,e,4),null==r&&(u||nu(n)?(e=n.constructor,r=u?yi(n)?new e:[]:Io(mi(e)&&e.prototype)):r={}),(u?zt:lr)(n,function(n,e,u){return t(r,n,e,u)}),r},Ut.union=Do,Ut.uniq=We,Ut.unzip=Ne,Ut.values=cu,Ut.valuesIn=function(n){return Rr(n,au(n))},Ut.where=function(n,t){return ze(n,yr(t))\r\n},Ut.without=qo,Ut.wrap=function(n,t){return t=null==t?du:t,fe(t,I,null,[n],[])},Ut.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var r=arguments[n];if(yi(r)||Xe(r))var e=e?ur(e,r).concat(ur(r,e)):r}return e?kr(e):[]},Ut.zip=Ko,Ut.zipObject=Le,Ut.backflow=hi,Ut.collect=De,Ut.compose=hi,Ut.each=Jo,Ut.eachRight=Xo,Ut.extend=bi,Ut.iteratee=vu,Ut.methods=fu,Ut.object=Le,Ut.select=ze,Ut.tail=Fe,Ut.unique=We,wu(Ut,Ut),Ut.add=function(n,t){return n+t},Ut.attempt=Pi,Ut.camelCase=Ui,Ut.capitalize=function(n){return(n=u(n))&&n.charAt(0).toUpperCase()+n.slice(1)\r\n},Ut.clone=function(n,t,r,e){return t&&typeof t!=\"boolean\"&&de(n,t,r)?t=false:typeof t==\"function\"&&(e=r,r=t,t=false),r=typeof r==\"function\"&&Fr(r,e,1),rr(n,t,r)},Ut.cloneDeep=function(n,t,r){return t=typeof t==\"function\"&&Fr(t,r,1),rr(n,true,t)},Ut.deburr=lu,Ut.endsWith=function(n,t,r){n=u(n),t+=\"\";var e=n.length;return r=typeof r==\"undefined\"?e:co(0>r?0:+r||0,e),r-=t.length,0<=r&&n.indexOf(t,r)==r},Ut.escape=function(n){return(n=u(n))&&pt.test(n)?n.replace(lt,l):n},Ut.escapeRegExp=su,Ut.every=Be,Ut.find=Zo,Ut.findIndex=$o,Ut.findKey=Ai,Ut.findLast=Go,Ut.findLastIndex=Po,Ut.findLastKey=ji,Ut.findWhere=function(n,t){return Zo(n,yr(t))\r\n},Ut.first=Ce,Ut.has=function(n,t){return n?Pu.call(n,t):false},Ut.identity=du,Ut.includes=Me,Ut.indexOf=Te,Ut.inRange=function(n,t,r){return t=+t||0,\"undefined\"===typeof r?(r=t,t=0):r=+r||0,n>=t&&n<r},Ut.isArguments=Xe,Ut.isArray=yi,Ut.isBoolean=function(n){return true===n||false===n||h(n)&&zu.call(n)==M},Ut.isDate=function(n){return h(n)&&zu.call(n)==D},Ut.isElement=He,Ut.isEmpty=function(n){if(null==n)return true;var t=n.length;return we(t)&&(yi(n)||uu(n)||Xe(n)||h(n)&&mi(n.splice))?!t:!Ri(n).length},Ut.isEqual=function(n,t,r,e){return r=typeof r==\"function\"&&Fr(r,e,3),!r&&be(n)&&be(t)?n===t:(e=r?r(n,t):w,typeof e==\"undefined\"?hr(n,t,r):!!e)\r\n},Ut.isError=Qe,Ut.isFinite=di,Ut.isFunction=mi,Ut.isMatch=function(n,t,r,e){var u=Ri(t),o=u.length;if(!o)return true;if(null==n)return false;if(r=typeof r==\"function\"&&Fr(r,e,3),!r&&1==o){var i=u[0];if(e=t[i],be(e))return e===n[i]&&(typeof e!=\"undefined\"||i in Ie(n))}for(var i=xu(o),f=xu(o);o--;)e=i[o]=t[u[o]],f[o]=be(e);return gr(Ie(n),u,i,f,r)},Ut.isNaN=function(n){return ru(n)&&n!=+n},Ut.isNative=tu,Ut.isNull=function(n){return null===n},Ut.isNumber=ru,Ut.isObject=nu,Ut.isPlainObject=wi,Ut.isRegExp=eu,Ut.isString=uu,Ut.isTypedArray=ou,Ut.isUndefined=function(n){return typeof n==\"undefined\"\r\n},Ut.kebabCase=Fi,Ut.last=Ue,Ut.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r==\"number\")u=(0>r?ao(e+r,0):co(r||0,e-1))+1;else if(r)return u=Tr(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;if(t!==t)return p(n,u,true);for(;u--;)if(n[u]===t)return u;return-1},Ut.max=Bi,Ut.min=zi,Ut.noConflict=function(){return _._=Mu,this},Ut.noop=bu,Ut.now=ui,Ut.pad=function(n,t,r){n=u(n),t=+t;var e=n.length;return e<t&&io(t)?(e=(t-e)/2,t=Zu(e),e=Vu(e),r=ue(\"\",e,r),r.slice(0,t)+n+r):n\r\n},Ut.padLeft=Wi,Ut.padRight=Ni,Ut.parseInt=pu,Ut.random=function(n,t,r){r&&de(n,t,r)&&(t=r=null);var e=null==n,u=null==t;return null==r&&(u&&typeof n==\"boolean\"?(r=n,n=1):typeof t==\"boolean\"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=ho(),co(n+r*(t-n+parseFloat(\"1e-\"+((r+\"\").length-1))),t)):br(n,t)},Ut.reduce=ri,Ut.reduceRight=ei,Ut.repeat=hu,Ut.result=function(n,t,r){return t=null==n?w:n[t],typeof t==\"undefined\"&&(t=r),mi(t)?t.call(n):t},Ut.runInContext=m,Ut.size=function(n){var t=n?n.length:0;\r\nreturn we(t)?t:Ri(n).length},Ut.snakeCase=Li,Ut.some=Ve,Ut.sortedIndex=zo,Ut.sortedLastIndex=Mo,Ut.startCase=$i,Ut.startsWith=function(n,t,r){return n=u(n),r=null==r?0:co(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r},Ut.sum=function(n,t,r){r&&de(n,t,r)&&(t=null);var e=pe(),u=null==t;if(e===tr&&u||(u=false,t=e(t,r,3)),u){for(n=yi(n)?n:Ee(n),t=n.length,r=0;t--;)r+=+n[t]||0;n=r}else n=Ir(n,t);return n},Ut.template=function(n,t,r){var e=Ut.templateSettings;r&&de(n,t,r)&&(t=r=null),n=u(n),t=Ht(Ht({},r||t),e,Xt),r=Ht(Ht({},t.imports),e.imports,Xt);\r\nvar o,i,f=Ri(r),a=Rr(r,f),c=0;r=t.interpolate||xt;var l=\"__p+='\";r=Ru((t.escape||xt).source+\"|\"+r.source+\"|\"+(r===gt?yt:xt).source+\"|\"+(t.evaluate||xt).source+\"|$\",\"g\");var p=\"sourceURL\"in t?\"//# sourceURL=\"+t.sourceURL+\"\\n\":\"\";if(n.replace(r,function(t,r,e,u,f,a){return e||(e=u),l+=n.slice(c,a).replace(Ot,s),r&&(o=true,l+=\"'+__e(\"+r+\")+'\"),f&&(i=true,l+=\"';\"+f+\";\\n__p+='\"),e&&(l+=\"'+((__t=(\"+e+\"))==null?'':__t)+'\"),c=a+t.length,t}),l+=\"';\",(t=t.variable)||(l=\"with(obj){\"+l+\"}\"),l=(i?l.replace(it,\"\"):l).replace(ft,\"$1\").replace(at,\"$1;\"),l=\"function(\"+(t||\"obj\")+\"){\"+(t?\"\":\"obj||(obj={});\")+\"var __t,__p=''\"+(o?\",__e=_.escape\":\"\")+(i?\",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}\":\";\")+l+\"return __p}\",t=Pi(function(){return Ou(f,p+\"return \"+l).apply(w,a)\r\n}),t.source=l,Qe(t))throw t;return t},Ut.trim=_u,Ut.trimLeft=function(n,t,r){var e=n;return(n=u(n))?n.slice((r?de(e,t,r):null==t)?v(n):i(n,t+\"\")):n},Ut.trimRight=function(n,t,r){var e=n;return(n=u(n))?(r?de(e,t,r):null==t)?n.slice(0,y(n)+1):n.slice(0,f(n,t+\"\")+1):n},Ut.trunc=function(n,t,r){r&&de(n,t,r)&&(t=null);var e=C;if(r=T,null!=t)if(nu(t)){var o=\"separator\"in t?t.separator:o,e=\"length\"in t?+t.length||0:e;r=\"omission\"in t?u(t.omission):r}else e=+t||0;if(n=u(n),e>=n.length)return n;if(e-=r.length,1>e)return r;\r\nif(t=n.slice(0,e),null==o)return t+r;if(eu(o)){if(n.slice(e).search(o)){var i,f=n.slice(0,e);for(o.global||(o=Ru(o.source,(dt.exec(o)||\"\")+\"g\")),o.lastIndex=0;n=o.exec(f);)i=n.index;t=t.slice(0,null==i?e:i)}}else n.indexOf(o,e)!=e&&(o=t.lastIndexOf(o),-1<o&&(t=t.slice(0,o)));return t+r},Ut.unescape=function(n){return(n=u(n))&&st.test(n)?n.replace(ct,d):n},Ut.uniqueId=function(n){var t=++Bu;return u(n)+t},Ut.words=gu,Ut.all=Be,Ut.any=Ve,Ut.contains=Me,Ut.detect=Zo,Ut.foldl=ri,Ut.foldr=ei,Ut.head=Ce,Ut.include=Me,Ut.inject=ri,wu(Ut,function(){var n={};\r\nreturn lr(Ut,function(t,r){Ut.prototype[r]||(n[r]=t)}),n}(),false),Ut.sample=qe,Ut.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return qe(t,n)}):qe(this.value())},Ut.VERSION=b,zt(\"bind bindKey curry curryRight partial partialRight\".split(\" \"),function(n){Ut[n].placeholder=Ut}),zt([\"dropWhile\",\"filter\",\"map\",\"takeWhile\"],function(n,t){var r=t!=L,e=t==W;Nt.prototype[n]=function(n,u){var o=this.__filtered__,i=o&&e?new Nt(this):this.clone();return(i.__iteratees__||(i.__iteratees__=[])).push({done:false,count:0,index:0,iteratee:pe(n,u,1),limit:-1,type:t}),i.__filtered__=o||r,i\r\n}}),zt([\"drop\",\"take\"],function(n,t){var r=n+\"While\";Nt.prototype[n]=function(r){var e=this.__filtered__,u=e&&!t?this.dropWhile():this.clone();return r=null==r?1:ao(Zu(r)||0,0),e?t?u.__takeCount__=co(u.__takeCount__,r):Ue(u.__iteratees__).limit=r:(u.__views__||(u.__views__=[])).push({size:r,type:n+(0>u.__dir__?\"Right\":\"\")}),u},Nt.prototype[n+\"Right\"]=function(t){return this.reverse()[n](t).reverse()},Nt.prototype[n+\"RightWhile\"]=function(n,t){return this.reverse()[r](n,t).reverse()}}),zt([\"first\",\"last\"],function(n,t){var r=\"take\"+(t?\"Right\":\"\");\r\nNt.prototype[n]=function(){return this[r](1).value()[0]}}),zt([\"initial\",\"rest\"],function(n,t){var r=\"drop\"+(t?\"\":\"Right\");Nt.prototype[n]=function(){return this[r](1)}}),zt([\"pluck\",\"where\"],function(n,t){var r=t?\"filter\":\"map\",e=t?yr:wr;Nt.prototype[n]=function(n){return this[r](e(n))}}),Nt.prototype.compact=function(){return this.filter(du)},Nt.prototype.reject=function(n,t){return n=pe(n,t,1),this.filter(function(t){return!n(t)})},Nt.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=0>n?this.takeRight(-n):this.drop(n);\r\nreturn typeof t!=\"undefined\"&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r},Nt.prototype.toArray=function(){return this.drop(0)},lr(Nt.prototype,function(n,t){var r=Ut[t];if(r){var e=/^(?:filter|map|reject)|While$/.test(t),u=/^(?:first|last)$/.test(t);Ut.prototype[t]=function(){function t(n){return n=[n],Ju.apply(n,o),r.apply(Ut,n)}var o=arguments,i=this.__chain__,f=this.__wrapped__,a=!!this.__actions__.length,c=f instanceof Nt,l=o[0],s=c||yi(f);return s&&e&&typeof l==\"function\"&&1!=l.length&&(c=s=false),c=c&&!a,u&&!i?c?n.call(f):r.call(Ut,this.value()):s?(f=n.apply(c?f:new Nt(this),o),u||!a&&!f.__actions__||(f.__actions__||(f.__actions__=[])).push({func:Pe,args:[t],thisArg:Ut}),new Wt(f,i)):this.thru(t)\r\n}}}),zt(\"concat join pop push replace shift sort splice split unshift\".split(\" \"),function(n){var t=(/^(?:replace|split)$/.test(n)?Wu:Tu)[n],r=/^(?:push|sort|unshift)$/.test(n)?\"tap\":\"thru\",e=/^(?:join|pop|replace|shift)$/.test(n),u=Eo.spliceObjects||!/^(?:pop|shift|splice)$/.test(n)?t:function(){var n=t.apply(this,arguments);return 0===this.length&&delete this[0],n};Ut.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?u.apply(this.value(),n):this[r](function(t){return u.apply(t,n)\r\n})}}),lr(Nt.prototype,function(n,t){var r=Ut[t];if(r){var e=r.name;(Ao[e]||(Ao[e]=[])).push({name:t,func:r})}}),Ao[ee(null,A).name]=[{name:\"wrapper\",func:null}],Nt.prototype.clone=function(){var n=this.__actions__,t=this.__iteratees__,r=this.__views__,e=new Nt(this.__wrapped__);return e.__actions__=n?Bt(n):null,e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=t?Bt(t):null,e.__takeCount__=this.__takeCount__,e.__views__=r?Bt(r):null,e},Nt.prototype.reverse=function(){if(this.__filtered__){var n=new Nt(this);\r\nn.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},Nt.prototype.value=function(){var n=this.__wrapped__.value();if(!yi(n))return Cr(n,this.__actions__);var t,r=this.__dir__,e=0>r;t=n.length;for(var u=this.__views__,o=0,i=-1,f=u?u.length:0;++i<f;){var a=u[i],c=a.size;switch(a.type){case\"drop\":o+=c;break;case\"dropRight\":t-=c;break;case\"take\":t=co(t,o+c);break;case\"takeRight\":o=ao(o,t-c)}}t={start:o,end:t},u=t.start,o=t.end,t=o-u,u=e?o:u-1,o=co(t,this.__takeCount__),f=(i=this.__iteratees__)?i.length:0,a=0,c=[];\r\nn:for(;t--&&a<o;){for(var u=u+r,l=-1,s=n[u];++l<f;){var p=i[l],h=p.iteratee,_=p.type;if(_==W){if(p.done&&(e?u>p.index:u<p.index)&&(p.count=0,p.done=false),p.index=u,!(p.done||(_=p.limit,p.done=-1<_?p.count++>=_:!h(s))))continue n}else if(p=h(s),_==L)s=p;else if(!p){if(_==N)continue n;break n}}c[a++]=s}return c},Ut.prototype.chain=function(){return $e(this)},Ut.prototype.commit=function(){return new Wt(this.value(),this.__chain__)},Ut.prototype.plant=function(n){for(var t,r=this;r instanceof Ft;){var e=ke(r);\r\nt?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},Ut.prototype.reverse=function(){var n=this.__wrapped__;return n instanceof Nt?(this.__actions__.length&&(n=new Nt(this)),new Wt(n.reverse(),this.__chain__)):this.thru(function(n){return n.reverse()})},Ut.prototype.toString=function(){return this.value()+\"\"},Ut.prototype.run=Ut.prototype.toJSON=Ut.prototype.valueOf=Ut.prototype.value=function(){return Cr(this.__wrapped__,this.__actions__)},Ut.prototype.collect=Ut.prototype.map,Ut.prototype.head=Ut.prototype.first,Ut.prototype.select=Ut.prototype.filter,Ut.prototype.tail=Ut.prototype.rest,Ut\r\n}var w,b=\"3.6.0\",x=1,A=2,j=4,O=8,E=16,I=32,k=64,R=128,S=256,C=30,T=\"...\",U=150,F=16,W=0,N=1,L=2,$=\"Expected a function\",P=\"__lodash_placeholder__\",B=\"[object Arguments]\",z=\"[object Array]\",M=\"[object Boolean]\",D=\"[object Date]\",q=\"[object Error]\",K=\"[object Function]\",V=\"[object Number]\",Y=\"[object Object]\",Z=\"[object RegExp]\",G=\"[object String]\",J=\"[object ArrayBuffer]\",X=\"[object Float32Array]\",H=\"[object Float64Array]\",Q=\"[object Int8Array]\",nt=\"[object Int16Array]\",tt=\"[object Int32Array]\",rt=\"[object Uint8Array]\",et=\"[object Uint8ClampedArray]\",ut=\"[object Uint16Array]\",ot=\"[object Uint32Array]\",it=/\\b__p\\+='';/g,ft=/\\b(__p\\+=)''\\+/g,at=/(__e\\(.*?\\)|\\b__t\\))\\+'';/g,ct=/&(?:amp|lt|gt|quot|#39|#96);/g,lt=/[&<>\"'`]/g,st=RegExp(ct.source),pt=RegExp(lt.source),ht=/<%-([\\s\\S]+?)%>/g,_t=/<%([\\s\\S]+?)%>/g,gt=/<%=([\\s\\S]+?)%>/g,vt=/[\\u0300-\\u036f\\ufe20-\\ufe23]/g,yt=/\\$\\{([^\\\\}]*(?:\\\\.[^\\\\}]*)*)\\}/g,dt=/\\w*$/,mt=/^0[xX]/,wt=/^\\[object .+?Constructor\\]$/,bt=/[\\xc0-\\xd6\\xd8-\\xde\\xdf-\\xf6\\xf8-\\xff]/g,xt=/($^)/,At=/[.*+?^${}()|[\\]\\/\\\\]/g,jt=RegExp(At.source),Ot=/['\\n\\r\\u2028\\u2029\\\\]/g,Et=RegExp(\"[A-Z\\\\xc0-\\\\xd6\\\\xd8-\\\\xde]+(?=[A-Z\\\\xc0-\\\\xd6\\\\xd8-\\\\xde][a-z\\\\xdf-\\\\xf6\\\\xf8-\\\\xff]+)|[A-Z\\\\xc0-\\\\xd6\\\\xd8-\\\\xde]?[a-z\\\\xdf-\\\\xf6\\\\xf8-\\\\xff]+|[A-Z\\\\xc0-\\\\xd6\\\\xd8-\\\\xde]+|[0-9]+\",\"g\"),It=\" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\",kt=\"Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout document isFinite parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap window\".split(\" \"),Rt=\"constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf\".split(\" \"),St={};\r\nSt[X]=St[H]=St[Q]=St[nt]=St[tt]=St[rt]=St[et]=St[ut]=St[ot]=true,St[B]=St[z]=St[J]=St[M]=St[D]=St[q]=St[K]=St[\"[object Map]\"]=St[V]=St[Y]=St[Z]=St[\"[object Set]\"]=St[G]=St[\"[object WeakMap]\"]=false;var Ct={};Ct[B]=Ct[z]=Ct[J]=Ct[M]=Ct[D]=Ct[X]=Ct[H]=Ct[Q]=Ct[nt]=Ct[tt]=Ct[V]=Ct[Y]=Ct[Z]=Ct[G]=Ct[rt]=Ct[et]=Ct[ut]=Ct[ot]=true,Ct[q]=Ct[K]=Ct[\"[object Map]\"]=Ct[\"[object Set]\"]=Ct[\"[object WeakMap]\"]=false;var Tt={leading:false,maxWait:0,trailing:false},Ut={\"\\xc0\":\"A\",\"\\xc1\":\"A\",\"\\xc2\":\"A\",\"\\xc3\":\"A\",\"\\xc4\":\"A\",\"\\xc5\":\"A\",\"\\xe0\":\"a\",\"\\xe1\":\"a\",\"\\xe2\":\"a\",\"\\xe3\":\"a\",\"\\xe4\":\"a\",\"\\xe5\":\"a\",\"\\xc7\":\"C\",\"\\xe7\":\"c\",\"\\xd0\":\"D\",\"\\xf0\":\"d\",\"\\xc8\":\"E\",\"\\xc9\":\"E\",\"\\xca\":\"E\",\"\\xcb\":\"E\",\"\\xe8\":\"e\",\"\\xe9\":\"e\",\"\\xea\":\"e\",\"\\xeb\":\"e\",\"\\xcc\":\"I\",\"\\xcd\":\"I\",\"\\xce\":\"I\",\"\\xcf\":\"I\",\"\\xec\":\"i\",\"\\xed\":\"i\",\"\\xee\":\"i\",\"\\xef\":\"i\",\"\\xd1\":\"N\",\"\\xf1\":\"n\",\"\\xd2\":\"O\",\"\\xd3\":\"O\",\"\\xd4\":\"O\",\"\\xd5\":\"O\",\"\\xd6\":\"O\",\"\\xd8\":\"O\",\"\\xf2\":\"o\",\"\\xf3\":\"o\",\"\\xf4\":\"o\",\"\\xf5\":\"o\",\"\\xf6\":\"o\",\"\\xf8\":\"o\",\"\\xd9\":\"U\",\"\\xda\":\"U\",\"\\xdb\":\"U\",\"\\xdc\":\"U\",\"\\xf9\":\"u\",\"\\xfa\":\"u\",\"\\xfb\":\"u\",\"\\xfc\":\"u\",\"\\xdd\":\"Y\",\"\\xfd\":\"y\",\"\\xff\":\"y\",\"\\xc6\":\"Ae\",\"\\xe6\":\"ae\",\"\\xde\":\"Th\",\"\\xfe\":\"th\",\"\\xdf\":\"ss\"},Ft={\"&\":\"&amp;\",\"<\":\"&lt;\",\">\":\"&gt;\",'\"':\"&quot;\",\"'\":\"&#39;\",\"`\":\"&#96;\"},Wt={\"&amp;\":\"&\",\"&lt;\":\"<\",\"&gt;\":\">\",\"&quot;\":'\"',\"&#39;\":\"'\",\"&#96;\":\"`\"},Nt={\"function\":true,object:true},Lt={\"\\\\\":\"\\\\\",\"'\":\"'\",\"\\n\":\"n\",\"\\r\":\"r\",\"\\u2028\":\"u2028\",\"\\u2029\":\"u2029\"},$t=Nt[typeof exports]&&exports&&!exports.nodeType&&exports,Pt=Nt[typeof module]&&module&&!module.nodeType&&module,Bt=Nt[typeof self]&&self&&self.Object&&self,Nt=Nt[typeof window]&&window&&window.Object&&window,zt=Pt&&Pt.exports===$t&&$t,Mt=$t&&Pt&&typeof global==\"object\"&&global||Nt!==(this&&this.window)&&Nt||Bt||this,Dt=function(){try{Object({toString:0}+\"\")\r\n}catch(n){return function(){return false}}return function(n){return typeof n.toString!=\"function\"&&typeof(n+\"\")==\"string\"}}(),qt=m();typeof define==\"function\"&&typeof define.amd==\"object\"&&define.amd?(Mt._=qt, define(function(){return qt})):$t&&Pt?zt?(Pt.exports=qt)._=qt:$t._=qt:Mt._=qt}).call(this);"

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(68)(__webpack_require__(71)+"\n\n// SCRIPT-LOADER FOOTER\n//# sourceURL=script:///C:/git/pbi2/PowerBI-visuals/src/Clients/Externals/ThirdPartyIP/D3/d3.min.js")

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "/*!\r\n* D3 ver 3.5.5\r\n*\r\n* Copyright (c) 2010-2015, Michael Bostock\r\n* All rights reserved.\r\n*/\r\n\r\n!function(){function n(n){return n&&(n.ownerDocument||n.document||n).documentElement}function t(n){return n&&(n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView)}function e(n,t){return t>n?-1:n>t?1:n>=t?0:0/0}function r(n){return null===n?0/0:+n}function u(n){return!isNaN(n)}function i(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)<0?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)>0?u=i:r=i+1}return r}}}function o(n){return n.length}function a(n){for(var t=1;n*t%1;)t*=10;return t}function c(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function l(){this._=Object.create(null)}function s(n){return(n+=\"\")===pa||n[0]===va?va+n:n}function f(n){return(n+=\"\")[0]===va?n.slice(1):n}function h(n){return s(n)in this._}function g(n){return(n=s(n))in this._&&delete this._[n]}function p(){var n=[];for(var t in this._)n.push(f(t));return n}function v(){var n=0;for(var t in this._)++n;return n}function d(){for(var n in this._)return!1;return!0}function m(){this._=Object.create(null)}function y(n){return n}function M(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function x(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e=0,r=da.length;r>e;++e){var u=da[e]+t;if(u in n)return u}}function b(){}function _(){}function w(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new l;return t.on=function(t,u){var i,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,i=e.indexOf(o)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function S(){ta.event.preventDefault()}function k(){for(var n,t=ta.event;n=t.sourceEvent;)t=n;return t}function E(n){for(var t=new _,e=0,r=arguments.length;++e<r;)t[arguments[e]]=w(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=ta.event;u.target=n,ta.event=u,t[u.type].apply(e,r)}finally{ta.event=i}}},t}function A(n){return ya(n,_a),n}function N(n){return\"function\"==typeof n?n:function(){return Ma(n,this)}}function C(n){return\"function\"==typeof n?n:function(){return xa(n,this)}}function z(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=ta.ns.qualify(n),null==t?n.local?r:e:\"function\"==typeof t?n.local?a:o:n.local?i:u}function q(n){return n.trim().replace(/\\s+/g,\" \")}function L(n){return new RegExp(\"(?:^|\\\\s+)\"+ta.requote(n)+\"(?:\\\\s+|$)\",\"g\")}function T(n){return(n+\"\").trim().split(/^|\\s+/)}function R(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=T(n).map(D);var u=n.length;return\"function\"==typeof t?r:e}function D(n){var t=L(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute(\"class\")||\"\";r?(t.lastIndex=0,t.test(u)||e.setAttribute(\"class\",q(u+\" \"+n))):e.setAttribute(\"class\",q(u.replace(t,\" \")))}}function P(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:\"function\"==typeof t?i:u}function U(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:\"function\"==typeof t?u:r}function j(n){function t(){var t=this.ownerDocument,e=this.namespaceURI;return e?t.createElementNS(e,n):t.createElement(n)}function e(){return this.ownerDocument.createElementNS(n.space,n.local)}return\"function\"==typeof n?n:(n=ta.ns.qualify(n)).local?e:t}function F(){var n=this.parentNode;n&&n.removeChild(this)}function H(n){return{__data__:n}}function O(n){return function(){return ba(this,n)}}function I(n){return arguments.length||(n=e),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function Y(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,e);return n}function Z(n){return ya(n,Sa),n}function V(n){var t,e;return function(r,u,i){var o,a=n[i].update,c=a.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function X(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=c(t,ra(arguments));r.call(this),this.addEventListener(n,this[o]=u,u.$=e),u._=t}function i(){var t,e=new RegExp(\"^__on([^.]+)\"+ta.requote(n)+\"$\");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var o=\"__on\"+n,a=n.indexOf(\".\"),c=$;a>0&&(n=n.slice(0,a));var l=ka.get(n);return l&&(n=l,c=B),a?t?u:r:t?b:i}function $(n,t){return function(e){var r=ta.event;ta.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{ta.event=r}}}function B(n,t){var e=$(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function W(e){var r=\".dragsuppress-\"+ ++Aa,u=\"click\"+r,i=ta.select(t(e)).on(\"touchmove\"+r,S).on(\"dragstart\"+r,S).on(\"selectstart\"+r,S);if(null==Ea&&(Ea=\"onselectstart\"in e?!1:x(e.style,\"userSelect\")),Ea){var o=n(e).style,a=o[Ea];o[Ea]=\"none\"}return function(n){if(i.on(r,null),Ea&&(o[Ea]=a),n){var t=function(){i.on(u,null)};i.on(u,function(){S(),t()},!0),setTimeout(t,0)}}}function J(n,e){e.changedTouches&&(e=e.changedTouches[0]);var r=n.ownerSVGElement||n;if(r.createSVGPoint){var u=r.createSVGPoint();if(0>Na){var i=t(n);if(i.scrollX||i.scrollY){r=ta.select(\"body\").append(\"svg\").style({position:\"absolute\",top:0,left:0,margin:0,padding:0,border:\"none\"},\"important\");var o=r[0][0].getScreenCTM();Na=!(o.f||o.e),r.remove()}}return Na?(u.x=e.pageX,u.y=e.pageY):(u.x=e.clientX,u.y=e.clientY),u=u.matrixTransform(n.getScreenCTM().inverse()),[u.x,u.y]}var a=n.getBoundingClientRect();return[e.clientX-a.left-n.clientLeft,e.clientY-a.top-n.clientTop]}function G(){return ta.event.changedTouches[0].identifier}function K(n){return n>0?1:0>n?-1:0}function Q(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function nt(n){return n>1?0:-1>n?qa:Math.acos(n)}function tt(n){return n>1?Ra:-1>n?-Ra:Math.asin(n)}function et(n){return((n=Math.exp(n))-1/n)/2}function rt(n){return((n=Math.exp(n))+1/n)/2}function ut(n){return((n=Math.exp(2*n))-1)/(n+1)}function it(n){return(n=Math.sin(n/2))*n}function ot(){}function at(n,t,e){return this instanceof at?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof at?new at(n.h,n.s,n.l):bt(\"\"+n,_t,at):new at(n,t,e)}function ct(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,i=2*e-o,new mt(u(n+120),u(n),u(n-120))}function lt(n,t,e){return this instanceof lt?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof lt?new lt(n.h,n.c,n.l):n instanceof ft?gt(n.l,n.a,n.b):gt((n=wt((n=ta.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new lt(n,t,e)}function st(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new ft(e,Math.cos(n*=Da)*t,Math.sin(n)*t)}function ft(n,t,e){return this instanceof ft?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof ft?new ft(n.l,n.a,n.b):n instanceof lt?st(n.h,n.c,n.l):wt((n=mt(n)).r,n.g,n.b):new ft(n,t,e)}function ht(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=pt(u)*Xa,r=pt(r)*$a,i=pt(i)*Ba,new mt(dt(3.2404542*u-1.5371385*r-.4985314*i),dt(-.969266*u+1.8760108*r+.041556*i),dt(.0556434*u-.2040259*r+1.0572252*i))}function gt(n,t,e){return n>0?new lt(Math.atan2(e,t)*Pa,Math.sqrt(t*t+e*e),n):new lt(0/0,0/0,n)}function pt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function vt(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function dt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function mt(n,t,e){return this instanceof mt?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof mt?new mt(n.r,n.g,n.b):bt(\"\"+n,mt,ct):new mt(n,t,e)}function yt(n){return new mt(n>>16,n>>8&255,255&n)}function Mt(n){return yt(n)+\"\"}function xt(n){return 16>n?\"0\"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function bt(n,t,e){var r,u,i,o=0,a=0,c=0;if(r=/([a-z]+)\\((.*)\\)/i.exec(n))switch(u=r[2].split(\",\"),r[1]){case\"hsl\":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case\"rgb\":return t(kt(u[0]),kt(u[1]),kt(u[2]))}return(i=Ga.get(n.toLowerCase()))?t(i.r,i.g,i.b):(null==n||\"#\"!==n.charAt(0)||isNaN(i=parseInt(n.slice(1),16))||(4===n.length?(o=(3840&i)>>4,o=o>>4|o,a=240&i,a=a>>4|a,c=15&i,c=c<<4|c):7===n.length&&(o=(16711680&i)>>16,a=(65280&i)>>8,c=255&i)),t(o,a,c))}function _t(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=0/0,u=c>0&&1>c?0:r),new at(r,u,c)}function wt(n,t,e){n=St(n),t=St(t),e=St(e);var r=vt((.4124564*n+.3575761*t+.1804375*e)/Xa),u=vt((.2126729*n+.7151522*t+.072175*e)/$a),i=vt((.0193339*n+.119192*t+.9503041*e)/Ba);return ft(116*u-16,500*(r-u),200*(u-i))}function St(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function kt(n){var t=parseFloat(n);return\"%\"===n.charAt(n.length-1)?Math.round(2.55*t):t}function Et(n){return\"function\"==typeof n?n:function(){return n}}function At(n){return function(t,e,r){return 2===arguments.length&&\"function\"==typeof e&&(r=e,e=null),Nt(t,e,n,r)}}function Nt(n,t,e,r){function u(){var n,t=c.status;if(!t&&zt(c)||t>=200&&300>t||304===t){try{n=e.call(i,c)}catch(r){return void o.error.call(i,r)}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=ta.dispatch(\"beforesend\",\"progress\",\"load\",\"error\"),a={},c=new XMLHttpRequest,l=null;return!this.XDomainRequest||\"withCredentials\"in c||!/^(http(s)?:)?\\/\\//.test(n)||(c=new XDomainRequest),\"onload\"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=ta.event;ta.event=n;try{o.progress.call(i,c)}finally{ta.event=t}},i.header=function(n,t){return n=(n+\"\").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+\"\",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+\"\",i):t},i.responseType=function(n){return arguments.length?(l=n,i):l},i.response=function(n){return e=n,i},[\"get\",\"post\"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(ra(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&\"function\"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||\"accept\"in a||(a.accept=t+\",*/*\"),c.setRequestHeader)for(var s in a)c.setRequestHeader(s,a[s]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=l&&(c.responseType=l),null!=u&&i.on(\"error\",u).on(\"load\",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},ta.rebind(i,o,\"on\"),null==r?i:i.get(Ct(r))}function Ct(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function zt(n){var t=n.responseType;return t&&\"text\"!==t?n.response:n.responseText}function qt(){var n=Lt(),t=Tt()-n;t>24?(isFinite(t)&&(clearTimeout(tc),tc=setTimeout(qt,t)),nc=0):(nc=1,rc(qt))}function Lt(){var n=Date.now();for(ec=Ka;ec;)n>=ec.t&&(ec.f=ec.c(n-ec.t)),ec=ec.n;return n}function Tt(){for(var n,t=Ka,e=1/0;t;)t.f?t=n?n.n=t.n:Ka=t.n:(t.t<e&&(e=t.t),t=(n=t).n);return Qa=n,e}function Rt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Dt(n,t){var e=Math.pow(10,3*ga(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Pt(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r&&e?function(n,t){for(var u=n.length,i=[],o=0,a=r[0],c=0;u>0&&a>0&&(c+a+1>t&&(a=Math.max(1,t-c)),i.push(n.substring(u-=a,u+a)),!((c+=a+1)>t));)a=r[o=(o+1)%r.length];return i.reverse().join(e)}:y;return function(n){var e=ic.exec(n),r=e[1]||\" \",o=e[2]||\">\",a=e[3]||\"-\",c=e[4]||\"\",l=e[5],s=+e[6],f=e[7],h=e[8],g=e[9],p=1,v=\"\",d=\"\",m=!1,y=!0;switch(h&&(h=+h.substring(1)),(l||\"0\"===r&&\"=\"===o)&&(l=r=\"0\",o=\"=\"),g){case\"n\":f=!0,g=\"g\";break;case\"%\":p=100,d=\"%\",g=\"f\";break;case\"p\":p=100,d=\"%\",g=\"r\";break;case\"b\":case\"o\":case\"x\":case\"X\":\"#\"===c&&(v=\"0\"+g.toLowerCase());case\"c\":y=!1;case\"d\":m=!0,h=0;break;case\"s\":p=-1,g=\"r\"}\"$\"===c&&(v=u[0],d=u[1]),\"r\"!=g||h||(g=\"g\"),null!=h&&(\"g\"==g?h=Math.max(1,Math.min(21,h)):(\"e\"==g||\"f\"==g)&&(h=Math.max(0,Math.min(20,h)))),g=oc.get(g)||Ut;var M=l&&f;return function(n){var e=d;if(m&&n%1)return\"\";var u=0>n||0===n&&0>1/n?(n=-n,\"-\"):\"-\"===a?\"\":a;if(0>p){var c=ta.formatPrefix(n,h);n=c.scale(n),e=c.symbol+d}else n*=p;n=g(n,h);var x,b,_=n.lastIndexOf(\".\");if(0>_){var w=y?n.lastIndexOf(\"e\"):-1;0>w?(x=n,b=\"\"):(x=n.substring(0,w),b=n.substring(w))}else x=n.substring(0,_),b=t+n.substring(_+1);!l&&f&&(x=i(x,1/0));var S=v.length+x.length+b.length+(M?0:u.length),k=s>S?new Array(S=s-S+1).join(r):\"\";return M&&(x=i(k+x,k.length?s-b.length:1/0)),u+=v,n=x+b,(\"<\"===o?u+n+k:\">\"===o?k+u+n:\"^\"===o?k.substring(0,S>>=1)+u+n+k.substring(S):u+(M?n:k+n))+e}}}function Ut(n){return n+\"\"}function jt(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Ft(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new cc(e-1)),1),e}function i(n,e){return t(n=new cc(+n),e),n}function o(n,r,i){var o=u(n),a=[];if(i>1)for(;r>o;)e(o)%i||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{cc=jt;var r=new jt;return r._=n,o(r,t,e)}finally{cc=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=Ht(n);return c.floor=c,c.round=Ht(r),c.ceil=Ht(u),c.offset=Ht(i),c.range=a,n}function Ht(n){return function(t,e){try{cc=jt;var r=new jt;return r._=t,n(r,e)._}finally{cc=Date}}}function Ot(n){function t(n){function t(t){for(var e,u,i,o=[],a=-1,c=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.slice(c,a)),null!=(u=sc[e=n.charAt(++a)])&&(e=n.charAt(++a)),(i=N[e])&&(e=i(t,null==u?\"e\"===e?\" \":\"0\":u)),o.push(e),c=a+1);return o.push(n.slice(c,a)),o.join(\"\")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;\"p\"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&cc!==jt,o=new(i?jt:cc);return\"j\"in r?o.setFullYear(r.y,0,r.j):\"w\"in r&&(\"W\"in r||\"U\"in r)?(o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,\"W\"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+(r.Z/100|0),r.M+r.Z%100,r.S,r.L),i?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,o,a=0,c=t.length,l=e.length;c>a;){if(r>=l)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=C[o in sc?t.charAt(a++):o],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){_.lastIndex=0;var r=_.exec(t.slice(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){x.lastIndex=0;var r=x.exec(t.slice(e));return r?(n.w=b.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){E.lastIndex=0;var r=E.exec(t.slice(e));return r?(n.m=A.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.slice(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,N.c.toString(),t,r)}function c(n,t,r){return e(n,N.x.toString(),t,r)}function l(n,t,r){return e(n,N.X.toString(),t,r)}function s(n,t,e){var r=M.get(t.slice(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{cc=jt;var t=new cc;return t._=n,r(t)}finally{cc=Date}}var r=t(n);return e.parse=function(n){try{cc=jt;var t=r.parse(n);return t&&t._}finally{cc=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ae;var M=ta.map(),x=Yt(v),b=Zt(v),_=Yt(d),w=Zt(d),S=Yt(m),k=Zt(m),E=Yt(y),A=Zt(y);p.forEach(function(n,t){M.set(n.toLowerCase(),t)});var N={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return It(n.getDate(),t,2)},e:function(n,t){return It(n.getDate(),t,2)},H:function(n,t){return It(n.getHours(),t,2)},I:function(n,t){return It(n.getHours()%12||12,t,2)},j:function(n,t){return It(1+ac.dayOfYear(n),t,3)},L:function(n,t){return It(n.getMilliseconds(),t,3)},m:function(n,t){return It(n.getMonth()+1,t,2)},M:function(n,t){return It(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return It(n.getSeconds(),t,2)},U:function(n,t){return It(ac.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return It(ac.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return It(n.getFullYear()%100,t,2)},Y:function(n,t){return It(n.getFullYear()%1e4,t,4)},Z:ie,\"%\":function(){return\"%\"}},C={a:r,A:u,b:i,B:o,c:a,d:Qt,e:Qt,H:te,I:te,j:ne,L:ue,m:Kt,M:ee,p:s,S:re,U:Xt,w:Vt,W:$t,x:c,X:l,y:Wt,Y:Bt,Z:Jt,\"%\":oe};return t}function It(n,t,e){var r=0>n?\"-\":\"\",u=(r?-n:n)+\"\",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function Yt(n){return new RegExp(\"^(?:\"+n.map(ta.requote).join(\"|\")+\")\",\"i\")}function Zt(n){for(var t=new l,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Vt(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Xt(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e));return r?(n.U=+r[0],e+r[0].length):-1}function $t(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e));return r?(n.W=+r[0],e+r[0].length):-1}function Bt(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Wt(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+2));return r?(n.y=Gt(+r[0]),e+r[0].length):-1}function Jt(n,t,e){return/^[+-]\\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function Gt(n){return n+(n>68?1900:2e3)}function Kt(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function Qt(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function ne(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function te(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function ee(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function re(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ue(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function ie(n){var t=n.getTimezoneOffset(),e=t>0?\"-\":\"+\",r=ga(t)/60|0,u=ga(t)%60;return e+It(r,\"0\",2)+It(u,\"0\",2)}function oe(n,t,e){hc.lastIndex=0;var r=hc.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function ae(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function ce(){}function le(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function se(n,t){n&&dc.hasOwnProperty(n.type)&&dc[n.type](n,t)}function fe(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function he(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)fe(n[e],t,1);t.polygonEnd()}function ge(){function n(n,t){n*=Da,t=t*Da/2+qa/4;var e=n-r,o=e>=0?1:-1,a=o*e,c=Math.cos(t),l=Math.sin(t),s=i*l,f=u*c+s*Math.cos(a),h=s*o*Math.sin(a);yc.add(Math.atan2(h,f)),r=n,u=c,i=l}var t,e,r,u,i;Mc.point=function(o,a){Mc.point=n,r=(t=o)*Da,u=Math.cos(a=(e=a)*Da/2+qa/4),i=Math.sin(a)},Mc.lineEnd=function(){n(t,e)}}function pe(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function ve(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function de(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function me(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function ye(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function Me(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function xe(n){return[Math.atan2(n[1],n[0]),tt(n[2])]}function be(n,t){return ga(n[0]-t[0])<Ca&&ga(n[1]-t[1])<Ca}function _e(n,t){n*=Da;var e=Math.cos(t*=Da);we(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function we(n,t,e){++xc,_c+=(n-_c)/xc,wc+=(t-wc)/xc,Sc+=(e-Sc)/xc}function Se(){function n(n,u){n*=Da;var i=Math.cos(u*=Da),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),l=Math.atan2(Math.sqrt((l=e*c-r*a)*l+(l=r*o-t*c)*l+(l=t*a-e*o)*l),t*o+e*a+r*c);bc+=l,kc+=l*(t+(t=o)),Ec+=l*(e+(e=a)),Ac+=l*(r+(r=c)),we(t,e,r)}var t,e,r;qc.point=function(u,i){u*=Da;var o=Math.cos(i*=Da);t=o*Math.cos(u),e=o*Math.sin(u),r=Math.sin(i),qc.point=n,we(t,e,r)}}function ke(){qc.point=_e}function Ee(){function n(n,t){n*=Da;var e=Math.cos(t*=Da),o=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),l=u*c-i*a,s=i*o-r*c,f=r*a-u*o,h=Math.sqrt(l*l+s*s+f*f),g=r*o+u*a+i*c,p=h&&-nt(g)/h,v=Math.atan2(h,g);Nc+=p*l,Cc+=p*s,zc+=p*f,bc+=v,kc+=v*(r+(r=o)),Ec+=v*(u+(u=a)),Ac+=v*(i+(i=c)),we(r,u,i)}var t,e,r,u,i;qc.point=function(o,a){t=o,e=a,qc.point=n,o*=Da;var c=Math.cos(a*=Da);r=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),we(r,u,i)},qc.lineEnd=function(){n(t,e),qc.lineEnd=ke,qc.point=_e}}function Ae(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function Ne(){return!0}function Ce(n,t,e,r,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(be(e,r)){u.lineStart();for(var a=0;t>a;++a)u.point((e=n[a])[0],e[1]);return void u.lineEnd()}var c=new qe(e,n,null,!0),l=new qe(e,null,c,!1);c.o=l,i.push(c),o.push(l),c=new qe(r,n,null,!1),l=new qe(r,null,c,!0),c.o=l,i.push(c),o.push(l)}}),o.sort(t),ze(i),ze(o),i.length){for(var a=0,c=e,l=o.length;l>a;++a)o[a].e=c=!c;for(var s,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;s=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var a=0,l=s.length;l>a;++a)u.point((f=s[a])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){s=g.p.z;for(var a=s.length-1;a>=0;--a)u.point((f=s[a])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,s=g.z,p=!p}while(!g.v);u.lineEnd()}}}function ze(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function qe(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Le(n,t,e,r){return function(u,i){function o(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function a(n,t){var e=u(n,t);d.point(e[0],e[1])}function c(){y.point=a,d.lineStart()}function l(){y.point=o,d.lineEnd()}function s(n,t){v.push([n,t]);var e=u(n,t);x.point(e[0],e[1])}function f(){x.lineStart(),v=[]}function h(){s(v[0][0],v[0][1]),x.lineEnd();var n,t=x.clean(),e=M.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r)if(1&t){n=e[0];var u,r=n.length-1,o=-1;if(r>0){for(b||(i.polygonStart(),b=!0),i.lineStart();++o<r;)i.point((u=n[o])[0],u[1]);i.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Te))}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:o,lineStart:c,lineEnd:l,polygonStart:function(){y.point=s,y.lineStart=f,y.lineEnd=h,g=[],p=[]},polygonEnd:function(){y.point=o,y.lineStart=c,y.lineEnd=l,g=ta.merge(g);var n=Fe(m,p);g.length?(b||(i.polygonStart(),b=!0),Ce(g,De,n,e,i)):n&&(b||(i.polygonStart(),b=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),b&&(i.polygonEnd(),b=!1),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},M=Re(),x=t(M),b=!1;return y}}function Te(n){return n.length>1}function Re(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:b,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function De(n,t){return((n=n.x)[0]<0?n[1]-Ra-Ca:Ra-n[1])-((t=t.x)[0]<0?t[1]-Ra-Ca:Ra-t[1])}function Pe(n){var t,e=0/0,r=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?qa:-qa,c=ga(i-e);ga(c-qa)<Ca?(n.point(e,r=(r+o)/2>0?Ra:-Ra),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(i,r),t=0):u!==a&&c>=qa&&(ga(e-u)<Ca&&(e-=u*Ca),ga(i-a)<Ca&&(i-=a*Ca),r=Ue(e,r,i,o),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=i,r=o),u=a},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function Ue(n,t,e,r){var u,i,o=Math.sin(n-e);return ga(o)>Ca?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+r)/2}function je(n,t,e,r){var u;if(null==n)u=e*Ra,r.point(-qa,u),r.point(0,u),r.point(qa,u),r.point(qa,0),r.point(qa,-u),r.point(0,-u),r.point(-qa,-u),r.point(-qa,0),r.point(-qa,u);else if(ga(n[0]-t[0])>Ca){var i=n[0]<t[0]?qa:-qa;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function Fe(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,o=0;yc.reset();for(var a=0,c=t.length;c>a;++a){var l=t[a],s=l.length;if(s)for(var f=l[0],h=f[0],g=f[1]/2+qa/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===s&&(d=0),n=l[d];var m=n[0],y=n[1]/2+qa/4,M=Math.sin(y),x=Math.cos(y),b=m-h,_=b>=0?1:-1,w=_*b,S=w>qa,k=p*M;if(yc.add(Math.atan2(k*_*Math.sin(w),v*x+k*Math.cos(w))),i+=S?b+_*La:b,S^h>=e^m>=e){var E=de(pe(f),pe(n));Me(E);var A=de(u,E);Me(A);var N=(S^b>=0?-1:1)*tt(A[2]);(r>N||r===N&&(E[0]||E[1]))&&(o+=S^b>=0?1:-1)}if(!d++)break;h=m,p=M,v=x,f=n}}return(-Ca>i||Ca>i&&0>yc)^1&o}function He(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,c,l,s;return{lineStart:function(){l=c=!1,s=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?qa:-qa),h):0;if(!e&&(l=c=v)&&n.lineStart(),v!==c&&(g=r(e,p),(be(e,g)||be(p,g))&&(p[0]+=Ca,p[1]+=Ca,v=t(p[0],p[1]))),v!==c)s=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(a&&e&&o^v){var m;d&i||!(m=r(p,e,!0))||(s=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&be(e,p)||n.point(p[0],p[1]),e=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return s|(l&&c)<<1}}}function r(n,t,e){var r=pe(n),u=pe(t),o=[1,0,0],a=de(r,u),c=ve(a,a),l=a[0],s=c-l*l;if(!s)return!e&&n;var f=i*c/s,h=-i*l/s,g=de(o,a),p=ye(o,f),v=ye(a,h);me(p,v);var d=g,m=ve(p,d),y=ve(d,d),M=m*m-y*(ve(p,p)-1);if(!(0>M)){var x=Math.sqrt(M),b=ye(d,(-m-x)/y);if(me(b,p),b=xe(b),!e)return b;var _,w=n[0],S=t[0],k=n[1],E=t[1];w>S&&(_=w,w=S,S=_);var A=S-w,N=ga(A-qa)<Ca,C=N||Ca>A;if(!N&&k>E&&(_=k,k=E,E=_),C?N?k+E>0^b[1]<(ga(b[0]-w)<Ca?k:E):k<=b[1]&&b[1]<=E:A>qa^(w<=b[0]&&b[0]<=S)){var z=ye(d,(-m+x)/y);return me(z,p),[b,xe(z)]}}}function u(t,e){var r=o?n:qa-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),o=i>0,a=ga(i)>Ca,c=gr(n,6*Da);return Le(t,e,c,o?[0,-n]:[-qa,n-qa])}function Oe(n,t,e,r){return function(u){var i,o=u.a,a=u.b,c=o.x,l=o.y,s=a.x,f=a.y,h=0,g=1,p=s-c,v=f-l;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-l,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-l,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:l+h*v}),1>g&&(u.b={x:c+g*p,y:l+g*v}),u}}}}}}function Ie(n,t,e,r){function u(r,u){return ga(r[0]-n)<Ca?u>0?0:3:ga(r[0]-e)<Ca?u>0?2:1:ga(r[1]-t)<Ca?u>0?1:0:u>0?3:2}function i(n,t){return o(n.x,t.x)}function o(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function c(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,o=1,a=d[u],c=a.length,l=a[0];c>o;++o)i=a[o],l[1]<=r?i[1]>r&&Q(l,i,n)>0&&++t:i[1]<=r&&Q(l,i,n)<0&&--t,l=i;return 0!==t}function l(i,a,c,l){var s=0,f=0;if(null==i||(s=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do l.point(0===s||3===s?n:e,s>1?r:t);while((s=(s+c+4)%4)!==f)}else l.point(a[0],a[1])}function s(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){s(n,t)&&a.point(n,t)}function h(){C.point=p,d&&d.push(m=[]),S=!0,w=!1,b=_=0/0}function g(){v&&(p(y,M),x&&w&&A.rejoin(),v.push(A.buffer())),C.point=f,w&&a.lineEnd()}function p(n,t){n=Math.max(-Tc,Math.min(Tc,n)),t=Math.max(-Tc,Math.min(Tc,t));var e=s(n,t);if(d&&m.push([n,t]),S)y=n,M=t,x=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:b,y:_},b:{x:n,y:t}};N(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}b=n,_=t,w=e}var v,d,m,y,M,x,b,_,w,S,k,E=a,A=Re(),N=Oe(n,t,e,r),C={point:f,lineStart:h,lineEnd:g,polygonStart:function(){a=A,v=[],d=[],k=!0},polygonEnd:function(){a=E,v=ta.merge(v);var t=c([n,r]),e=k&&t,u=v.length;(e||u)&&(a.polygonStart(),e&&(a.lineStart(),l(null,null,1,a),a.lineEnd()),u&&Ce(v,i,t,l,a),a.polygonEnd()),v=d=m=null}};return C}}function Ye(n){var t=0,e=qa/3,r=ir(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*qa/180,e=n[1]*qa/180):[t/qa*180,e/qa*180]},u}function Ze(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),o-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),o=Math.sqrt(i)/u;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/u,tt((i-(n*n+e*e)*u*u)/(2*u))]},e}function Ve(){function n(n,t){Dc+=u*n-r*t,r=n,u=t}var t,e,r,u;Hc.point=function(i,o){Hc.point=n,t=r=i,e=u=o},Hc.lineEnd=function(){n(t,e)}}function Xe(n,t){Pc>n&&(Pc=n),n>jc&&(jc=n),Uc>t&&(Uc=t),t>Fc&&(Fc=t)}function $e(){function n(n,t){o.push(\"M\",n,\",\",t,i)}function t(n,t){o.push(\"M\",n,\",\",t),a.point=e}function e(n,t){o.push(\"L\",n,\",\",t)}function r(){a.point=n}function u(){o.push(\"Z\")}var i=Be(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return i=Be(n),a},result:function(){if(o.length){var n=o.join(\"\");return o=[],n}}};return a}function Be(n){return\"m0,\"+n+\"a\"+n+\",\"+n+\" 0 1,1 0,\"+-2*n+\"a\"+n+\",\"+n+\" 0 1,1 0,\"+2*n+\"z\"}function We(n,t){_c+=n,wc+=t,++Sc}function Je(){function n(n,r){var u=n-t,i=r-e,o=Math.sqrt(u*u+i*i);kc+=o*(t+n)/2,Ec+=o*(e+r)/2,Ac+=o,We(t=n,e=r)}var t,e;Ic.point=function(r,u){Ic.point=n,We(t=r,e=u)}}function Ge(){Ic.point=We}function Ke(){function n(n,t){var e=n-r,i=t-u,o=Math.sqrt(e*e+i*i);kc+=o*(r+n)/2,Ec+=o*(u+t)/2,Ac+=o,o=u*n-r*t,Nc+=o*(r+n),Cc+=o*(u+t),zc+=3*o,We(r=n,u=t)}var t,e,r,u;Ic.point=function(i,o){Ic.point=n,We(t=r=i,e=u=o)},Ic.lineEnd=function(){n(t,e)}}function Qe(n){function t(t,e){n.moveTo(t+o,e),n.arc(t,e,o,0,La)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:b};return a}function nr(n){function t(n){return(a?r:e)(n)}function e(t){return rr(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){M=0/0,S.point=i,t.lineStart()}function i(e,r){var i=pe([e,r]),o=n(e,r);u(M,x,y,b,_,w,M=o[0],x=o[1],y=e,b=i[0],_=i[1],w=i[2],a,t),t.point(M,x)}function o(){S.point=e,t.lineEnd()}function c(){r(),S.point=l,S.lineEnd=s}function l(n,t){i(f=n,h=t),g=M,p=x,v=b,d=_,m=w,S.point=i}function s(){u(M,x,y,b,_,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o()}var f,h,g,p,v,d,m,y,M,x,b,_,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c\r\n},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,a,c,l,s,f,h,g,p,v,d,m){var y=s-t,M=f-e,x=y*y+M*M;if(x>4*i&&d--){var b=a+g,_=c+p,w=l+v,S=Math.sqrt(b*b+_*_+w*w),k=Math.asin(w/=S),E=ga(ga(w)-1)<Ca||ga(r-h)<Ca?(r+h)/2:Math.atan2(_,b),A=n(E,k),N=A[0],C=A[1],z=N-t,q=C-e,L=M*z-y*q;(L*L/x>i||ga((y*z+M*q)/x-.5)>.3||o>a*g+c*p+l*v)&&(u(t,e,r,a,c,l,N,C,E,b/=S,_/=S,w,d,m),m.point(N,C),u(N,C,E,b,_,w,s,f,h,g,p,v,d,m))}}var i=.5,o=Math.cos(30*Da),a=16;return t.precision=function(n){return arguments.length?(a=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function tr(n){var t=nr(function(t,e){return n([t*Pa,e*Pa])});return function(n){return or(t(n))}}function er(n){this.stream=n}function rr(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function ur(n){return ir(function(){return n})()}function ir(n){function t(n){return n=a(n[0]*Da,n[1]*Da),[n[0]*h+c,l-n[1]*h]}function e(n){return n=a.invert((n[0]-c)/h,(l-n[1])/h),n&&[n[0]*Pa,n[1]*Pa]}function r(){a=Ae(o=lr(m,M,x),i);var n=i(v,d);return c=g-n[0]*h,l=p+n[1]*h,u()}function u(){return s&&(s.valid=!1,s=null),t}var i,o,a,c,l,s,f=nr(function(n,t){return n=i(n,t),[n[0]*h+c,l-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,M=0,x=0,b=Lc,_=y,w=null,S=null;return t.stream=function(n){return s&&(s.valid=!1),s=or(b(o,f(_(n)))),s.valid=!0,s},t.clipAngle=function(n){return arguments.length?(b=null==n?(w=n,Lc):He((w=+n)*Da),u()):w},t.clipExtent=function(n){return arguments.length?(S=n,_=n?Ie(n[0][0],n[0][1],n[1][0],n[1][1]):y,u()):S},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*Da,d=n[1]%360*Da,r()):[v*Pa,d*Pa]},t.rotate=function(n){return arguments.length?(m=n[0]%360*Da,M=n[1]%360*Da,x=n.length>2?n[2]%360*Da:0,r()):[m*Pa,M*Pa,x*Pa]},ta.rebind(t,f,\"precision\"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function or(n){return rr(n,function(t,e){n.point(t*Da,e*Da)})}function ar(n,t){return[n,t]}function cr(n,t){return[n>qa?n-La:-qa>n?n+La:n,t]}function lr(n,t,e){return n?t||e?Ae(fr(n),hr(t,e)):fr(n):t||e?hr(t,e):cr}function sr(n){return function(t,e){return t+=n,[t>qa?t-La:-qa>t?t+La:t,e]}}function fr(n){var t=sr(n);return t.invert=sr(-n),t}function hr(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*r+a*u;return[Math.atan2(c*i-s*o,a*r-l*u),tt(s*i+c*o)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*i-c*o;return[Math.atan2(c*i+l*o,a*r+s*u),tt(s*r-a*u)]},e}function gr(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=pr(e,u),i=pr(e,i),(o>0?i>u:u>i)&&(u+=o*La)):(u=n+o*La,i=n-.5*c);for(var l,s=u;o>0?s>i:i>s;s-=c)a.point((l=xe([e,-r*Math.cos(s),-r*Math.sin(s)]))[0],l[1])}}function pr(n,t){var e=pe(t);e[0]-=n,Me(e);var r=nt(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Ca)%(2*Math.PI)}function vr(n,t,e){var r=ta.range(n,t-Ca,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function dr(n,t,e){var r=ta.range(n,t-Ca,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function mr(n){return n.source}function yr(n){return n.target}function Mr(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(r),a=Math.sin(r),c=u*Math.cos(n),l=u*Math.sin(n),s=o*Math.cos(e),f=o*Math.sin(e),h=2*Math.asin(Math.sqrt(it(r-t)+u*o*it(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*s,u=e*l+t*f,o=e*i+t*a;return[Math.atan2(u,r)*Pa,Math.atan2(o,Math.sqrt(r*r+u*u))*Pa]}:function(){return[n*Pa,t*Pa]};return p.distance=h,p}function xr(){function n(n,u){var i=Math.sin(u*=Da),o=Math.cos(u),a=ga((n*=Da)-t),c=Math.cos(a);Yc+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*i-e*o*c)*a),e*i+r*o*c),t=n,e=i,r=o}var t,e,r;Zc.point=function(u,i){t=u*Da,e=Math.sin(i*=Da),r=Math.cos(i),Zc.point=n},Zc.lineEnd=function(){Zc.point=Zc.lineEnd=b}}function br(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,r*o),Math.asin(r&&e*i/r)]},e}function _r(n,t){function e(n,t){o>0?-Ra+Ca>t&&(t=-Ra+Ca):t>Ra-Ca&&(t=Ra-Ca);var e=o/Math.pow(u(t),i);return[e*Math.sin(i*n),o-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(qa/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),o=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=o-t,r=K(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(o/r,1/i))-Ra]},e):Sr}function wr(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return ga(u)<Ca?ar:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-K(u)*Math.sqrt(n*n+e*e)]},e)}function Sr(n,t){return[n,Math.log(Math.tan(qa/4+t/2))]}function kr(n){var t,e=ur(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=i.apply(e,arguments);if(o===e){if(t=null==n){var a=qa*r(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function Er(n,t){return[Math.log(Math.tan(qa/4+t/2)),-n]}function Ar(n){return n[0]}function Nr(n){return n[1]}function Cr(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&Q(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function zr(n,t){return n[0]-t[0]||n[1]-t[1]}function qr(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Lr(n,t,e,r){var u=n[0],i=e[0],o=t[0]-u,a=r[0]-i,c=n[1],l=e[1],s=t[1]-c,f=r[1]-l,h=(a*(c-l)-f*(u-i))/(f*o-a*s);return[u+h*o,c+h*s]}function Tr(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Rr(){tu(this),this.edge=this.site=this.circle=null}function Dr(n){var t=el.pop()||new Rr;return t.site=n,t}function Pr(n){Xr(n),Qc.remove(n),el.push(n),tu(n)}function Ur(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,o=n.N,a=[n];Pr(n);for(var c=i;c.circle&&ga(e-c.circle.x)<Ca&&ga(r-c.circle.cy)<Ca;)i=c.P,a.unshift(c),Pr(c),c=i;a.unshift(c),Xr(c);for(var l=o;l.circle&&ga(e-l.circle.x)<Ca&&ga(r-l.circle.cy)<Ca;)o=l.N,a.push(l),Pr(l),l=o;a.push(l),Xr(l);var s,f=a.length;for(s=1;f>s;++s)l=a[s],c=a[s-1],Kr(l.edge,c.site,l.site,u);c=a[0],l=a[f-1],l.edge=Jr(c.site,l.site,null,u),Vr(c),Vr(l)}function jr(n){for(var t,e,r,u,i=n.x,o=n.y,a=Qc._;a;)if(r=Fr(a,o)-i,r>Ca)a=a.L;else{if(u=i-Hr(a,o),!(u>Ca)){r>-Ca?(t=a.P,e=a):u>-Ca?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var c=Dr(n);if(Qc.insert(t,c),t||e){if(t===e)return Xr(t),e=Dr(t.site),Qc.insert(c,e),c.edge=e.edge=Jr(t.site,c.site),Vr(t),void Vr(e);if(!e)return void(c.edge=Jr(t.site,c.site));Xr(t),Xr(e);var l=t.site,s=l.x,f=l.y,h=n.x-s,g=n.y-f,p=e.site,v=p.x-s,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,M=v*v+d*d,x={x:(d*y-g*M)/m+s,y:(h*M-v*y)/m+f};Kr(e.edge,l,p,x),c.edge=Jr(l,n,null,x),e.edge=Jr(n,p,null,x),Vr(t),Vr(e)}}function Fr(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var o=n.P;if(!o)return-1/0;e=o.site;var a=e.x,c=e.y,l=c-t;if(!l)return a;var s=a-r,f=1/i-1/l,h=s/l;return f?(-h+Math.sqrt(h*h-2*f*(s*s/(-2*l)-c+l/2+u-i/2)))/f+r:(r+a)/2}function Hr(n,t){var e=n.N;if(e)return Fr(e,t);var r=n.site;return r.y===t?r.x:1/0}function Or(n){this.site=n,this.edges=[]}function Ir(n){for(var t,e,r,u,i,o,a,c,l,s,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=Kc,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(a=i.edges,c=a.length,o=0;c>o;)s=a[o].end(),r=s.x,u=s.y,l=a[++o%c].start(),t=l.x,e=l.y,(ga(r-t)>Ca||ga(u-e)>Ca)&&(a.splice(o,0,new Qr(Gr(i.site,s,ga(r-f)<Ca&&p-u>Ca?{x:f,y:ga(t-f)<Ca?e:p}:ga(u-p)<Ca&&h-r>Ca?{x:ga(e-p)<Ca?t:h,y:p}:ga(r-h)<Ca&&u-g>Ca?{x:h,y:ga(t-h)<Ca?e:g}:ga(u-g)<Ca&&r-f>Ca?{x:ga(e-g)<Ca?t:f,y:g}:null),i.site,null)),++c)}function Yr(n,t){return t.angle-n.angle}function Zr(){tu(this),this.x=this.y=this.arc=this.site=this.cy=null}function Vr(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var o=u.x,a=u.y,c=r.x-o,l=r.y-a,s=i.x-o,f=i.y-a,h=2*(c*f-l*s);if(!(h>=-za)){var g=c*c+l*l,p=s*s+f*f,v=(f*g-l*p)/h,d=(c*p-s*g)/h,f=d+a,m=rl.pop()||new Zr;m.arc=n,m.site=u,m.x=v+o,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,M=tl._;M;)if(m.y<M.y||m.y===M.y&&m.x<=M.x){if(!M.L){y=M.P;break}M=M.L}else{if(!M.R){y=M;break}M=M.R}tl.insert(y,m),y||(nl=m)}}}}function Xr(n){var t=n.circle;t&&(t.P||(nl=t.N),tl.remove(t),rl.push(t),tu(t),n.circle=null)}function $r(n){for(var t,e=Gc,r=Oe(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!Br(t,n)||!r(t)||ga(t.a.x-t.b.x)<Ca&&ga(t.a.y-t.b.y)<Ca)&&(t.a=t.b=null,e.splice(u,1))}function Br(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,o=t[0][0],a=t[1][0],c=t[0][1],l=t[1][1],s=n.l,f=n.r,h=s.x,g=s.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(o>d||d>=a)return;if(h>p){if(i){if(i.y>=l)return}else i={x:d,y:c};e={x:d,y:l}}else{if(i){if(i.y<c)return}else i={x:d,y:l};e={x:d,y:c}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=l)return}else i={x:(c-u)/r,y:c};e={x:(l-u)/r,y:l}}else{if(i){if(i.y<c)return}else i={x:(l-u)/r,y:l};e={x:(c-u)/r,y:c}}else if(v>g){if(i){if(i.x>=a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}else{if(i){if(i.x<o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}return n.a=i,n.b=e,!0}function Wr(n,t){this.l=n,this.r=t,this.a=this.b=null}function Jr(n,t,e,r){var u=new Wr(n,t);return Gc.push(u),e&&Kr(u,n,t,e),r&&Kr(u,t,n,r),Kc[n.i].edges.push(new Qr(u,n,t)),Kc[t.i].edges.push(new Qr(u,t,n)),u}function Gr(n,t,e){var r=new Wr(n,null);return r.a=t,r.b=e,Gc.push(r),r}function Kr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function Qr(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function nu(){this._=null}function tu(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function eu(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ru(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function uu(n){for(;n.L;)n=n.L;return n}function iu(n,t){var e,r,u,i=n.sort(ou).pop();for(Gc=[],Kc=new Array(n.length),Qc=new nu,tl=new nu;;)if(u=nl,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(Kc[i.i]=new Or(i),jr(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;Ur(u.arc)}t&&($r(t),Ir(t));var o={cells:Kc,edges:Gc};return Qc=tl=Gc=Kc=null,o}function ou(n,t){return t.y-n.y||t.x-n.x}function au(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function cu(n){return n.x}function lu(n){return n.y}function su(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function fu(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var o=.5*(e+u),a=.5*(r+i),c=t.nodes;c[0]&&fu(n,c[0],e,r,o,a),c[1]&&fu(n,c[1],o,r,u,a),c[2]&&fu(n,c[2],e,a,o,i),c[3]&&fu(n,c[3],o,a,u,i)}}function hu(n,t,e,r,u,i,o){var a,c=1/0;return function l(n,s,f,h,g){if(!(s>i||f>o||r>h||u>g)){if(p=n.point){var p,v=t-n.x,d=e-n.y,m=v*v+d*d;if(c>m){var y=Math.sqrt(c=m);r=t-y,u=e-y,i=t+y,o=e+y,a=p}}for(var M=n.nodes,x=.5*(s+h),b=.5*(f+g),_=t>=x,w=e>=b,S=w<<1|_,k=S+4;k>S;++S)if(n=M[3&S])switch(3&S){case 0:l(n,s,f,x,b);break;case 1:l(n,x,f,h,b);break;case 2:l(n,s,b,x,g);break;case 3:l(n,x,b,h,g)}}}(n,r,u,i,o),a}function gu(n,t){n=ta.rgb(n),t=ta.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,o=t.g-r,a=t.b-u;return function(n){return\"#\"+xt(Math.round(e+i*n))+xt(Math.round(r+o*n))+xt(Math.round(u+a*n))}}function pu(n,t){var e,r={},u={};for(e in n)e in t?r[e]=mu(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function vu(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function du(n,t){var e,r,u,i=il.lastIndex=ol.lastIndex=0,o=-1,a=[],c=[];for(n+=\"\",t+=\"\";(e=il.exec(n))&&(r=ol.exec(t));)(u=r.index)>i&&(u=t.slice(i,u),a[o]?a[o]+=u:a[++o]=u),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:vu(e,r)})),i=ol.lastIndex;return i<t.length&&(u=t.slice(i),a[o]?a[o]+=u:a[++o]=u),a.length<2?c[0]?(t=c[0].x,function(n){return t(n)+\"\"}):function(){return t}:(t=c.length,function(n){for(var e,r=0;t>r;++r)a[(e=c[r]).i]=e.x(n);return a.join(\"\")})}function mu(n,t){for(var e,r=ta.interpolators.length;--r>=0&&!(e=ta.interpolators[r](n,t)););return e}function yu(n,t){var e,r=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(mu(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;o>e;++e)u[e]=t[e];return function(n){for(e=0;a>e;++e)u[e]=r[e](n);return u}}function Mu(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function xu(n){return function(t){return 1-n(1-t)}}function bu(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function _u(n){return n*n}function wu(n){return n*n*n}function Su(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function ku(n){return function(t){return Math.pow(t,n)}}function Eu(n){return 1-Math.cos(n*Ra)}function Au(n){return Math.pow(2,10*(n-1))}function Nu(n){return 1-Math.sqrt(1-n*n)}function Cu(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/La*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*La/t)}}function zu(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function qu(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Lu(n,t){n=ta.hcl(n),t=ta.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,o=t.c-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return st(e+i*n,r+o*n,u+a*n)+\"\"}}function Tu(n,t){n=ta.hsl(n),t=ta.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,o=t.s-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return ct(e+i*n,r+o*n,u+a*n)+\"\"}}function Ru(n,t){n=ta.lab(n),t=ta.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,o=t.a-r,a=t.b-u;return function(n){return ht(e+i*n,r+o*n,u+a*n)+\"\"}}function Du(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Pu(n){var t=[n.a,n.b],e=[n.c,n.d],r=ju(t),u=Uu(t,e),i=ju(Fu(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Pa,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Pa:0}function Uu(n,t){return n[0]*t[0]+n[1]*t[1]}function ju(n){var t=Math.sqrt(Uu(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Fu(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Hu(n,t){var e,r=[],u=[],i=ta.transform(n),o=ta.transform(t),a=i.translate,c=o.translate,l=i.rotate,s=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(r.push(\"translate(\",null,\",\",null,\")\"),u.push({i:1,x:vu(a[0],c[0])},{i:3,x:vu(a[1],c[1])})):r.push(c[0]||c[1]?\"translate(\"+c+\")\":\"\"),l!=s?(l-s>180?s+=360:s-l>180&&(l+=360),u.push({i:r.push(r.pop()+\"rotate(\",null,\")\")-2,x:vu(l,s)})):s&&r.push(r.pop()+\"rotate(\"+s+\")\"),f!=h?u.push({i:r.push(r.pop()+\"skewX(\",null,\")\")-2,x:vu(f,h)}):h&&r.push(r.pop()+\"skewX(\"+h+\")\"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+\"scale(\",null,\",\",null,\")\"),u.push({i:e-4,x:vu(g[0],p[0])},{i:e-2,x:vu(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+\"scale(\"+p+\")\"),e=u.length,function(n){for(var t,i=-1;++i<e;)r[(t=u[i]).i]=t.x(n);return r.join(\"\")}}function Ou(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Iu(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Yu(n){for(var t=n.source,e=n.target,r=Vu(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function Zu(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Vu(n,t){if(n===t)return n;for(var e=Zu(n),r=Zu(t),u=e.pop(),i=r.pop(),o=null;u===i;)o=u,u=e.pop(),i=r.pop();return o}function Xu(n){n.fixed|=2}function $u(n){n.fixed&=-7}function Bu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Wu(n){n.fixed&=-5}function Ju(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(Ju(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var l=t*e[n.point.index];n.charge+=n.pointCharge=l,r+=l*n.point.x,u+=l*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function Gu(n,t){return ta.rebind(n,t,\"sort\",\"children\",\"value\"),n.nodes=n,n.links=ri,n}function Ku(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(u=n.children)&&(r=u.length))for(var r,u;--r>=0;)e.push(u[r])}function Qu(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(i=n.children)&&(u=i.length))for(var u,i,o=-1;++o<u;)e.push(i[o]);for(;null!=(n=r.pop());)t(n)}function ni(n){return n.children}function ti(n){return n.value}function ei(n,t){return t.value-n.value}function ri(n){return ta.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function ui(n){return n.x}function ii(n){return n.y}function oi(n,t,e){n.y0=t,n.y=e}function ai(n){return ta.range(n.length)}function ci(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function li(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function si(n){return n.reduce(fi,0)}function fi(n,t){return n+t[1]}function hi(n,t){return gi(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function gi(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function pi(n){return[ta.min(n),ta.max(n)]}function vi(n,t){return n.value-t.value}function di(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function mi(n,t){n._pack_next=t,t._pack_prev=n}function yi(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function Mi(n){function t(n){s=Math.min(n.x-n.r,s),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(l=e.length)){var e,r,u,i,o,a,c,l,s=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(xi),r=e[0],r.x=-r.r,r.y=0,t(r),l>1&&(u=e[1],u.x=u.r,u.y=0,t(u),l>2))for(i=e[2],wi(r,u,i),t(i),di(r,i),r._pack_prev=i,di(i,u),u=r._pack_next,o=3;l>o;o++){wi(r,u,i=e[o]);var p=0,v=1,d=1;for(a=u._pack_next;a!==u;a=a._pack_next,v++)if(yi(a,i)){p=1;break}if(1==p)for(c=r._pack_prev;c!==a._pack_prev&&!yi(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?mi(r,u=a):mi(r=c,u),o--):(di(r,i),u=i,t(i))}var m=(s+f)/2,y=(h+g)/2,M=0;for(o=0;l>o;o++)i=e[o],i.x-=m,i.y-=y,M=Math.max(M,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=M,e.forEach(bi)}}function xi(n){n._pack_next=n._pack_prev=n}function bi(n){delete n._pack_next,delete n._pack_prev}function _i(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,o=u.length;++i<o;)_i(u[i],t,e,r)}function wi(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var o=t.r+e.r,a=u*u+i*i;o*=o,r*=r;var c=.5+(r-o)/(2*a),l=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+c*u+l*i,e.y=n.y+c*i-l*u}else e.x=n.x+r,e.y=n.y}function Si(n,t){return n.parent==t.parent?1:2}function ki(n){var t=n.children;return t.length?t[0]:n.t}function Ei(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function Ai(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function Ni(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function Ci(n,t,e){return n.a.parent===t.parent?n.a:e}function zi(n){return 1+ta.max(n,function(n){return n.y})}function qi(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Li(n){var t=n.children;return t&&t.length?Li(t[0]):n}function Ti(n){var t,e=n.children;return e&&(t=e.length)?Ti(e[t-1]):n}function Ri(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Di(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function Pi(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Ui(n){return n.rangeExtent?n.rangeExtent():Pi(n.range())}function ji(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function Fi(n,t){var e,r=0,u=n.length-1,i=n[r],o=n[u];return i>o&&(e=r,r=u,u=e,e=i,i=o,o=e),n[r]=t.floor(i),n[u]=t.ceil(o),n}function Hi(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:ml}function Oi(n,t,e,r){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(e(n[o-1],n[o])),i.push(r(t[o-1],t[o]));return function(t){var e=ta.bisect(n,t,1,a)-1;return i[e](u[e](t))}}function Ii(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?Oi:ji,c=r?Iu:Ou;return o=u(n,t,c,e),a=u(t,n,c,mu),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Du)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return Xi(n,t)},i.tickFormat=function(t,e){return $i(n,t,e)},i.nice=function(t){return Zi(n,t),u()},i.copy=function(){return Ii(n,t,e,r)},u()}function Yi(n,t){return ta.rebind(n,t,\"range\",\"rangeRound\",\"interpolate\",\"clamp\")}function Zi(n,t){return Fi(n,Hi(Vi(n,t)[2]))}function Vi(n,t){null==t&&(t=10);var e=Pi(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function Xi(n,t){return ta.range.apply(ta,Vi(n,t))}function $i(n,t,e){var r=Vi(n,t);if(e){var u=ic.exec(e);if(u.shift(),\"s\"===u[8]){var i=ta.formatPrefix(Math.max(ga(r[0]),ga(r[1])));return u[7]||(u[7]=\".\"+Bi(i.scale(r[2]))),u[8]=\"f\",e=ta.format(u.join(\"\")),function(n){return e(i.scale(n))+i.symbol}}u[7]||(u[7]=\".\"+Wi(u[8],r)),e=u.join(\"\")}else e=\",.\"+Bi(r[2])+\"f\";return ta.format(e)}function Bi(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function Wi(n,t){var e=Bi(t[2]);return n in yl?Math.abs(e-Bi(Math.max(ga(t[0]),ga(t[1]))))+ +(\"e\"!==n):e-2*(\"%\"===n)}function Ji(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),o):t},o.nice=function(){var t=Fi(r.map(u),e?Math:xl);return n.domain(t),r=t.map(i),o},o.ticks=function(){var n=Pi(r),o=[],a=n[0],c=n[1],l=Math.floor(u(a)),s=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(s-l)){if(e){for(;s>l;l++)for(var h=1;f>h;h++)o.push(i(l)*h);o.push(i(l))}else for(o.push(i(l));l++<s;)for(var h=f-1;h>0;h--)o.push(i(l)*h);for(l=0;o[l]<a;l++);for(s=o.length;o[s-1]>c;s--);o=o.slice(l,s)}return o},o.tickFormat=function(n,t){if(!arguments.length)return Ml;arguments.length<2?t=Ml:\"function\"!=typeof t&&(t=ta.format(t));var r,a=Math.max(.1,n/o.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+r))<=a?t(n):\"\"}},o.copy=function(){return Ji(n.copy(),t,e,r)},Yi(o,n)}function Gi(n,t,e){function r(t){return n(u(t))}var u=Ki(t),i=Ki(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return Xi(e,n)},r.tickFormat=function(n,t){return $i(e,n,t)},r.nice=function(n){return r.domain(Zi(e,n))},r.exponent=function(o){return arguments.length?(u=Ki(t=o),i=Ki(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return Gi(n.copy(),t,e)},Yi(r,n)}function Ki(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function Qi(n,t){function e(e){return i[((u.get(e)||(\"range\"===t.t?u.set(e,n.push(e)):0/0))-1)%i.length]}function r(t,e){return ta.range(n.length).map(function(n){return t+e*n})}var u,i,o;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new l;for(var i,o=-1,a=r.length;++o<a;)u.has(i=r[o])||u.set(i,n.push(i));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(i=n,o=0,t={t:\"range\",a:arguments},e):i},e.rangePoints=function(u,a){arguments.length<2&&(a=0);var c=u[0],l=u[1],s=n.length<2?(c=(c+l)/2,0):(l-c)/(n.length-1+a);return i=r(c+s*a/2,s),o=0,t={t:\"rangePoints\",a:arguments},e},e.rangeRoundPoints=function(u,a){arguments.length<2&&(a=0);var c=u[0],l=u[1],s=n.length<2?(c=l=Math.round((c+l)/2),0):(l-c)/(n.length-1+a)|0;return i=r(c+Math.round(s*a/2+(l-c-(n.length-1+a)*s)/2),s),o=0,t={t:\"rangeRoundPoints\",a:arguments},e},e.rangeBands=function(u,a,c){arguments.length<2&&(a=0),arguments.length<3&&(c=a);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=(f-s)/(n.length-a+2*c);return i=r(s+h*c,h),l&&i.reverse(),o=h*(1-a),t={t:\"rangeBands\",a:arguments},e},e.rangeRoundBands=function(u,a,c){arguments.length<2&&(a=0),arguments.length<3&&(c=a);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=Math.floor((f-s)/(n.length-a+2*c));return i=r(s+Math.round((f-s-(n.length-a)*h)/2),h),l&&i.reverse(),o=Math.round(h*(1-a)),t={t:\"rangeRoundBands\",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Pi(t.a[0])},e.copy=function(){return Qi(n,t)},e.domain(n)}function no(n,t){function i(){var e=0,r=t.length;for(a=[];++e<r;)a[e-1]=ta.quantile(n,e/r);return o}function o(n){return isNaN(n=+n)?void 0:t[ta.bisect(a,n)]}var a;return o.domain=function(t){return arguments.length?(n=t.map(r).filter(u).sort(e),i()):n},o.range=function(n){return arguments.length?(t=n,i()):t},o.quantiles=function(){return a},o.invertExtent=function(e){return e=t.indexOf(e),0>e?[0/0,0/0]:[e>0?a[e-1]:n[0],e<a.length?a[e]:n[n.length-1]]},o.copy=function(){return no(n,t)},i()}function to(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),o=e.length-1,r}var i,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},r.copy=function(){return to(n,t,e)},u()}function eo(n,t){function e(e){return e>=e?t[ta.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return eo(n,t)},e}function ro(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Xi(n,t)},t.tickFormat=function(t,e){return $i(n,t,e)},t.copy=function(){return ro(n)},t}function uo(){return 0}function io(n){return n.innerRadius}function oo(n){return n.outerRadius}function ao(n){return n.startAngle}function co(n){return n.endAngle}function lo(n){return n&&n.padAngle}function so(n,t,e,r){return(n-e)*t-(t-r)*n>0?0:1}function fo(n,t,e,r,u){var i=n[0]-t[0],o=n[1]-t[1],a=(u?r:-r)/Math.sqrt(i*i+o*o),c=a*o,l=-a*i,s=n[0]+c,f=n[1]+l,h=t[0]+c,g=t[1]+l,p=(s+h)/2,v=(f+g)/2,d=h-s,m=g-f,y=d*d+m*m,M=e-r,x=s*g-h*f,b=(0>m?-1:1)*Math.sqrt(M*M*y-x*x),_=(x*m-d*b)/y,w=(-x*d-m*b)/y,S=(x*m+d*b)/y,k=(-x*d+m*b)/y,E=_-p,A=w-v,N=S-p,C=k-v;return E*E+A*A>N*N+C*C&&(_=S,w=k),[[_-c,w-l],[_*e/M,w*e/M]]}function ho(n){function t(t){function o(){l.push(\"M\",i(n(s),a))}for(var c,l=[],s=[],f=-1,h=t.length,g=Et(e),p=Et(r);++f<h;)u.call(this,c=t[f],f)?s.push([+g.call(this,c,f),+p.call(this,c,f)]):s.length&&(o(),s=[]);return s.length&&o(),l.length?l.join(\"\"):null}var e=Ar,r=Nr,u=Ne,i=go,o=i.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o=\"function\"==typeof n?i=n:(i=El.get(n)||go).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function go(n){return n.join(\"L\")}function po(n){return go(n)+\"Z\"}function vo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],\",\",r[1]];++t<e;)u.push(\"H\",(r[0]+(r=n[t])[0])/2,\"V\",r[1]);return e>1&&u.push(\"H\",r[0]),u.join(\"\")}function mo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],\",\",r[1]];++t<e;)u.push(\"V\",(r=n[t])[1],\"H\",r[0]);return u.join(\"\")}function yo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],\",\",r[1]];++t<e;)u.push(\"H\",(r=n[t])[0],\"V\",r[1]);return u.join(\"\")}function Mo(n,t){return n.length<4?go(n):n[1]+_o(n.slice(1,-1),wo(n,t))}function xo(n,t){return n.length<3?go(n):n[0]+_o((n.push(n[0]),n),wo([n[n.length-2]].concat(n,[n[1]]),t))}function bo(n,t){return n.length<3?go(n):n[0]+_o(n,wo(n,t))}function _o(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return go(n);var e=n.length!=t.length,r=\"\",u=n[0],i=n[1],o=t[0],a=o,c=1;if(e&&(r+=\"Q\"+(i[0]-2*o[0]/3)+\",\"+(i[1]-2*o[1]/3)+\",\"+i[0]+\",\"+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,r+=\"C\"+(u[0]+o[0])+\",\"+(u[1]+o[1])+\",\"+(i[0]-a[0])+\",\"+(i[1]-a[1])+\",\"+i[0]+\",\"+i[1];for(var l=2;l<t.length;l++,c++)i=n[c],a=t[l],r+=\"S\"+(i[0]-a[0])+\",\"+(i[1]-a[1])+\",\"+i[0]+\",\"+i[1]}if(e){var s=n[c];r+=\"Q\"+(i[0]+2*a[0]/3)+\",\"+(i[1]+2*a[1]/3)+\",\"+s[0]+\",\"+s[1]}return r}function wo(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)e=i,i=o,o=n[a],r.push([u*(o[0]-e[0]),u*(o[1]-e[1])]);return r}function So(n){if(n.length<3)return go(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],o=[u,u,u,(r=n[1])[0]],a=[i,i,i,r[1]],c=[u,\",\",i,\"L\",No(Cl,o),\",\",No(Cl,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),Co(c,o,a);return n.pop(),c.push(\"L\",r),c.join(\"\")}function ko(n){if(n.length<4)return go(n);for(var t,e=[],r=-1,u=n.length,i=[0],o=[0];++r<3;)t=n[r],i.push(t[0]),o.push(t[1]);for(e.push(No(Cl,i)+\",\"+No(Cl,o)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),Co(e,i,o);return e.join(\"\")}function Eo(n){for(var t,e,r=-1,u=n.length,i=u+4,o=[],a=[];++r<4;)e=n[r%u],o.push(e[0]),a.push(e[1]);for(t=[No(Cl,o),\",\",No(Cl,a)],--r;++r<i;)e=n[r%u],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),Co(t,o,a);return t.join(\"\")}function Ao(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],o=n[0][1],a=n[e][0]-i,c=n[e][1]-o,l=-1;++l<=e;)r=n[l],u=l/e,r[0]=t*r[0]+(1-t)*(i+u*a),r[1]=t*r[1]+(1-t)*(o+u*c);return So(n)}function No(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Co(n,t,e){n.push(\"C\",No(Al,t),\",\",No(Al,e),\",\",No(Nl,t),\",\",No(Nl,e),\",\",No(Cl,t),\",\",No(Cl,e))}function zo(n,t){return(t[1]-n[1])/(t[0]-n[0])}function qo(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],o=r[0]=zo(u,i);++t<e;)r[t]=(o+(o=zo(u=i,i=n[t+1])))/2;return r[t]=o,r}function Lo(n){for(var t,e,r,u,i=[],o=qo(n),a=-1,c=n.length-1;++a<c;)t=zo(n[a],n[a+1]),ga(t)<Ca?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*e,o[a+1]=u*r));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function To(n){return n.length<3?go(n):n[0]+_o(n,Lo(n))}function Ro(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]-Ra,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Do(n){function t(t){function c(){v.push(\"M\",a(n(m),f),s,l(n(d.reverse()),f),\"Z\")}for(var h,g,p,v=[],d=[],m=[],y=-1,M=t.length,x=Et(e),b=Et(u),_=e===r?function(){return g}:Et(r),w=u===i?function(){return p}:Et(i);++y<M;)o.call(this,h=t[y],y)?(d.push([g=+x.call(this,h,y),p=+b.call(this,h,y)]),m.push([+_.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(\"\"):null}var e=Ar,r=Ar,u=0,i=Nr,o=Ne,a=go,c=a.key,l=a,s=\"L\",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r\r\n},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c=\"function\"==typeof n?a=n:(a=El.get(n)||go).key,l=a.reverse||a,s=a.closed?\"M\":\"L\",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Po(n){return n.radius}function Uo(n){return[n.x,n.y]}function jo(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]-Ra;return[e*Math.cos(r),e*Math.sin(r)]}}function Fo(){return 64}function Ho(){return\"circle\"}function Oo(n){var t=Math.sqrt(n/qa);return\"M0,\"+t+\"A\"+t+\",\"+t+\" 0 1,1 0,\"+-t+\"A\"+t+\",\"+t+\" 0 1,1 0,\"+t+\"Z\"}function Io(n){return function(){var t,e;(t=this[n])&&(e=t[t.active])&&(--t.count?delete t[t.active]:delete this[n],t.active+=.5,e.event&&e.event.interrupt.call(this,this.__data__,e.index))}}function Yo(n,t,e){return ya(n,Pl),n.namespace=t,n.id=e,n}function Zo(n,t,e,r){var u=n.id,i=n.namespace;return Y(n,\"function\"==typeof e?function(n,o,a){n[i][u].tween.set(t,r(e.call(n,n.__data__,o,a)))}:(e=r(e),function(n){n[i][u].tween.set(t,e)}))}function Vo(n){return null==n&&(n=\"\"),function(){this.textContent=n}}function Xo(n){return null==n?\"__transition__\":\"__transition_\"+n+\"__\"}function $o(n,t,e,r,u){var i=n[e]||(n[e]={active:0,count:0}),o=i[r];if(!o){var a=u.time;o=i[r]={tween:new l,time:a,delay:u.delay,duration:u.duration,ease:u.ease,index:t},u=null,++i.count,ta.timer(function(u){function c(e){if(i.active>r)return s();var u=i[i.active];u&&(--i.count,delete i[i.active],u.event&&u.event.interrupt.call(n,n.__data__,u.index)),i.active=r,o.event&&o.event.start.call(n,n.__data__,t),o.tween.forEach(function(e,r){(r=r.call(n,n.__data__,t))&&v.push(r)}),h=o.ease,f=o.duration,ta.timer(function(){return p.c=l(e||1)?Ne:l,1},0,a)}function l(e){if(i.active!==r)return 1;for(var u=e/f,a=h(u),c=v.length;c>0;)v[--c].call(n,a);return u>=1?(o.event&&o.event.end.call(n,n.__data__,t),s()):void 0}function s(){return--i.count?delete i[r]:delete n[e],1}var f,h,g=o.delay,p=ec,v=[];return p.t=g+a,u>=g?c(u-g):void(p.c=c)},0,a)}}function Bo(n,t,e){n.attr(\"transform\",function(n){var r=t(n);return\"translate(\"+(isFinite(r)?r:e(n))+\",0)\"})}function Wo(n,t,e){n.attr(\"transform\",function(n){var r=t(n);return\"translate(0,\"+(isFinite(r)?r:e(n))+\")\"})}function Jo(n){return n.toISOString()}function Go(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=ta.bisect(Vl,u);return i==Vl.length?[t.year,Vi(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/Vl[i-1]<Vl[i]/u?i-1:i]:[Bl,Vi(n,e)[2]]}return r.invert=function(t){return Ko(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Ko)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,Ko(+e+1),t).length}var i=r.domain(),o=Pi(i),a=null==n?u(o,10):\"number\"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),r.domain(Fi(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=Ko(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=Ko(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Pi(r.domain()),i=null==n?u(e,10):\"number\"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],Ko(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return Go(n.copy(),t,e)},Yi(r,n)}function Ko(n){return new Date(n)}function Qo(n){return JSON.parse(n.responseText)}function na(n){var t=ua.createRange();return t.selectNode(ua.body),t.createContextualFragment(n.responseText)}var ta={version:\"3.5.5\"},ea=[].slice,ra=function(n){return ea.call(n)},ua=this.document;if(ua)try{ra(ua.documentElement.childNodes)[0].nodeType}catch(ia){ra=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}if(Date.now||(Date.now=function(){return+new Date}),ua)try{ua.createElement(\"DIV\").style.setProperty(\"opacity\",0,\"\")}catch(oa){var aa=this.Element.prototype,ca=aa.setAttribute,la=aa.setAttributeNS,sa=this.CSSStyleDeclaration.prototype,fa=sa.setProperty;aa.setAttribute=function(n,t){ca.call(this,n,t+\"\")},aa.setAttributeNS=function(n,t,e){la.call(this,n,t,e+\"\")},sa.setProperty=function(n,t,e){fa.call(this,n,t+\"\",e)}}ta.ascending=e,ta.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},ta.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},ta.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},ta.extent=function(n,t){var e,r,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o;)if(null!=(r=n[i])&&r>=r){e=u=r;break}for(;++i<o;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<o;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=u=r;break}for(;++i<o;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},ta.sum=function(n,t){var e,r=0,i=n.length,o=-1;if(1===arguments.length)for(;++o<i;)u(e=+n[o])&&(r+=e);else for(;++o<i;)u(e=+t.call(n,n[o],o))&&(r+=e);return r},ta.mean=function(n,t){var e,i=0,o=n.length,a=-1,c=o;if(1===arguments.length)for(;++a<o;)u(e=r(n[a]))?i+=e:--c;else for(;++a<o;)u(e=r(t.call(n,n[a],a)))?i+=e:--c;return c?i/c:void 0},ta.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},ta.median=function(n,t){var i,o=[],a=n.length,c=-1;if(1===arguments.length)for(;++c<a;)u(i=r(n[c]))&&o.push(i);else for(;++c<a;)u(i=r(t.call(n,n[c],c)))&&o.push(i);return o.length?ta.quantile(o.sort(e),.5):void 0},ta.variance=function(n,t){var e,i,o=n.length,a=0,c=0,l=-1,s=0;if(1===arguments.length)for(;++l<o;)u(e=r(n[l]))&&(i=e-a,a+=i/++s,c+=i*(e-a));else for(;++l<o;)u(e=r(t.call(n,n[l],l)))&&(i=e-a,a+=i/++s,c+=i*(e-a));return s>1?c/(s-1):void 0},ta.deviation=function(){var n=ta.variance.apply(this,arguments);return n?Math.sqrt(n):n};var ha=i(e);ta.bisectLeft=ha.left,ta.bisect=ta.bisectRight=ha.right,ta.bisector=function(n){return i(1===n.length?function(t,r){return e(n(t),r)}:n)},ta.shuffle=function(n,t,e){(i=arguments.length)<3&&(e=n.length,2>i&&(t=0));for(var r,u,i=e-t;i;)u=Math.random()*i--|0,r=n[i+t],n[i+t]=n[u+t],n[u+t]=r;return n},ta.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},ta.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},ta.zip=function(){if(!(r=arguments.length))return[];for(var n=-1,t=ta.min(arguments,o),e=new Array(t);++n<t;)for(var r,u=-1,i=e[n]=new Array(r);++u<r;)i[u]=arguments[u][n];return e},ta.transpose=function(n){return ta.zip.apply(ta,n)},ta.keys=function(n){var t=[];for(var e in n)t.push(e);return t},ta.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},ta.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},ta.merge=function(n){for(var t,e,r,u=n.length,i=-1,o=0;++i<u;)o+=n[i].length;for(e=new Array(o);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--o]=r[t];return e};var ga=Math.abs;ta.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),(t-n)/e===1/0)throw new Error(\"infinite range\");var r,u=[],i=a(ga(e)),o=-1;if(n*=i,t*=i,e*=i,0>e)for(;(r=n+e*++o)>t;)u.push(r/i);else for(;(r=n+e*++o)<t;)u.push(r/i);return u},ta.map=function(n,t){var e=new l;if(n instanceof l)n.forEach(function(n,t){e.set(n,t)});else if(Array.isArray(n)){var r,u=-1,i=n.length;if(1===arguments.length)for(;++u<i;)e.set(u,n[u]);else for(;++u<i;)e.set(t.call(n,r=n[u],u),r)}else for(var o in n)e.set(o,n[o]);return e};var pa=\"__proto__\",va=\"\\x00\";c(l,{has:h,get:function(n){return this._[s(n)]},set:function(n,t){return this._[s(n)]=t},remove:g,keys:p,values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:f(t),value:this._[t]});return n},size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,f(t),this._[t])}}),ta.nest=function(){function n(t,o,a){if(a>=i.length)return r?r.call(u,o):e?o.sort(e):o;for(var c,s,f,h,g=-1,p=o.length,v=i[a++],d=new l;++g<p;)(h=d.get(c=v(s=o[g])))?h.push(s):d.set(c,[s]);return t?(s=t(),f=function(e,r){s.set(e,n(t,r,a))}):(s={},f=function(e,r){s[e]=n(t,r,a)}),d.forEach(f),s}function t(n,e){if(e>=i.length)return n;var r=[],u=o[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,u={},i=[],o=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(ta.map,e,0),0)},u.key=function(n){return i.push(n),u},u.sortKeys=function(n){return o[i.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},ta.set=function(n){var t=new m;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},c(m,{has:h,add:function(n){return this._[s(n+=\"\")]=!0,n},remove:g,values:p,size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,f(t))}}),ta.behavior={},ta.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=M(n,t,t[e]);return n};var da=[\"webkit\",\"ms\",\"moz\",\"Moz\",\"o\",\"O\"];ta.dispatch=function(){for(var n=new _,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=w(n);return n},_.prototype.on=function(n,t){var e=n.indexOf(\".\"),r=\"\";if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},ta.event=null,ta.requote=function(n){return n.replace(ma,\"\\\\$&\")};var ma=/[\\\\\\^\\$\\*\\+\\?\\|\\[\\]\\(\\)\\.\\{\\}]/g,ya={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},Ma=function(n,t){return t.querySelector(n)},xa=function(n,t){return t.querySelectorAll(n)},ba=function(n,t){var e=n.matches||n[x(n,\"matchesSelector\")];return(ba=function(n,t){return e.call(n,t)})(n,t)};\"function\"==typeof Sizzle&&(Ma=function(n,t){return Sizzle(n,t)[0]||null},xa=Sizzle,ba=Sizzle.matchesSelector),ta.selection=function(){return ta.select(ua.documentElement)};var _a=ta.selection.prototype=[];_a.select=function(n){var t,e,r,u,i=[];n=N(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var c=-1,l=r.length;++c<l;)(u=r[c])?(t.push(e=n.call(u,u.__data__,c,o)),e&&\"__data__\"in u&&(e.__data__=u.__data__)):t.push(null)}return A(i)},_a.selectAll=function(n){var t,e,r=[];n=C(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(e=o[a])&&(r.push(t=ra(n.call(e,e.__data__,a,u))),t.parentNode=e);return A(r)};var wa={svg:\"http://www.w3.org/2000/svg\",xhtml:\"http://www.w3.org/1999/xhtml\",xlink:\"http://www.w3.org/1999/xlink\",xml:\"http://www.w3.org/XML/1998/namespace\",xmlns:\"http://www.w3.org/2000/xmlns/\"};ta.ns={prefix:wa,qualify:function(n){var t=n.indexOf(\":\"),e=n;return t>=0&&(e=n.slice(0,t),n=n.slice(t+1)),wa.hasOwnProperty(e)?{space:wa[e],local:n}:n}},_a.attr=function(n,t){if(arguments.length<2){if(\"string\"==typeof n){var e=this.node();return n=ta.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(z(t,n[t]));return this}return this.each(z(n,t))},_a.classed=function(n,t){if(arguments.length<2){if(\"string\"==typeof n){var e=this.node(),r=(n=T(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute(\"class\");++u<r;)if(!L(n[u]).test(t))return!1;return!0}for(t in n)this.each(R(t,n[t]));return this}return this.each(R(n,t))},_a.style=function(n,e,r){var u=arguments.length;if(3>u){if(\"string\"!=typeof n){2>u&&(e=\"\");for(r in n)this.each(P(r,n[r],e));return this}if(2>u){var i=this.node();return t(i).getComputedStyle(i,null).getPropertyValue(n)}r=\"\"}return this.each(P(n,e,r))},_a.property=function(n,t){if(arguments.length<2){if(\"string\"==typeof n)return this.node()[n];for(t in n)this.each(U(t,n[t]));return this}return this.each(U(n,t))},_a.text=function(n){return arguments.length?this.each(\"function\"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?\"\":t}:null==n?function(){this.textContent=\"\"}:function(){this.textContent=n}):this.node().textContent},_a.html=function(n){return arguments.length?this.each(\"function\"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?\"\":t}:null==n?function(){this.innerHTML=\"\"}:function(){this.innerHTML=n}):this.node().innerHTML},_a.append=function(n){return n=j(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},_a.insert=function(n,t){return n=j(n),t=N(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},_a.remove=function(){return this.each(F)},_a.data=function(n,t){function e(n,e){var r,u,i,o=n.length,f=e.length,h=Math.min(o,f),g=new Array(f),p=new Array(f),v=new Array(o);if(t){var d,m=new l,y=new Array(o);for(r=-1;++r<o;)m.has(d=t.call(u=n[r],u.__data__,r))?v[r]=u:m.set(d,u),y[r]=d;for(r=-1;++r<f;)(u=m.get(d=t.call(e,i=e[r],r)))?u!==!0&&(g[r]=u,u.__data__=i):p[r]=H(i),m.set(d,!0);for(r=-1;++r<o;)m.get(y[r])!==!0&&(v[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],i=e[r],u?(u.__data__=i,g[r]=u):p[r]=H(i);for(;f>r;++r)p[r]=H(e[r]);for(;o>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,a.push(p),c.push(g),s.push(v)}var r,u,i=-1,o=this.length;if(!arguments.length){for(n=new Array(o=(r=this[0]).length);++i<o;)(u=r[i])&&(n[i]=u.__data__);return n}var a=Z([]),c=A([]),s=A([]);if(\"function\"==typeof n)for(;++i<o;)e(r=this[i],n.call(r,r.parentNode.__data__,i));else for(;++i<o;)e(r=this[i],n);return c.enter=function(){return a},c.exit=function(){return s},c},_a.datum=function(n){return arguments.length?this.property(\"__data__\",n):this.property(\"__data__\")},_a.filter=function(n){var t,e,r,u=[];\"function\"!=typeof n&&(n=O(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return A(u)},_a.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},_a.sort=function(n){n=I.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},_a.each=function(n){return Y(this,function(t,e,r){n.call(t,t.__data__,e,r)})},_a.call=function(n){var t=ra(arguments);return n.apply(t[0]=this,t),this},_a.empty=function(){return!this.node()},_a.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},_a.size=function(){var n=0;return Y(this,function(){++n}),n};var Sa=[];ta.selection.enter=Z,ta.selection.enter.prototype=Sa,Sa.append=_a.append,Sa.empty=_a.empty,Sa.node=_a.node,Sa.call=_a.call,Sa.size=_a.size,Sa.select=function(n){for(var t,e,r,u,i,o=[],a=-1,c=this.length;++a<c;){r=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var l=-1,s=u.length;++l<s;)(i=u[l])?(t.push(r[l]=e=n.call(u.parentNode,i.__data__,l,a)),e.__data__=i.__data__):t.push(null)}return A(o)},Sa.insert=function(n,t){return arguments.length<2&&(t=V(this)),_a.insert.call(this,n,t)},ta.select=function(t){var e;return\"string\"==typeof t?(e=[Ma(t,ua)],e.parentNode=ua.documentElement):(e=[t],e.parentNode=n(t)),A([e])},ta.selectAll=function(n){var t;return\"string\"==typeof n?(t=ra(xa(n,ua)),t.parentNode=ua.documentElement):(t=n,t.parentNode=null),A([t])},_a.on=function(n,t,e){var r=arguments.length;if(3>r){if(\"string\"!=typeof n){2>r&&(t=!1);for(e in n)this.each(X(e,n[e],t));return this}if(2>r)return(r=this.node()[\"__on\"+n])&&r._;e=!1}return this.each(X(n,t,e))};var ka=ta.map({mouseenter:\"mouseover\",mouseleave:\"mouseout\"});ua&&ka.forEach(function(n){\"on\"+n in ua&&ka.remove(n)});var Ea,Aa=0;ta.mouse=function(n){return J(n,k())};var Na=this.navigator&&/WebKit/.test(this.navigator.userAgent)?-1:0;ta.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=k().changedTouches),t)for(var r,u=0,i=t.length;i>u;++u)if((r=t[u]).identifier===e)return J(n,r)},ta.behavior.drag=function(){function n(){this.on(\"mousedown.drag\",i).on(\"touchstart.drag\",o)}function e(n,t,e,i,o){return function(){function a(){var n,e,r=t(h,v);r&&(n=r[0]-M[0],e=r[1]-M[1],p|=n|e,M=r,g({type:\"drag\",x:r[0]+l[0],y:r[1]+l[1],dx:n,dy:e}))}function c(){t(h,v)&&(m.on(i+d,null).on(o+d,null),y(p&&ta.event.target===f),g({type:\"dragend\"}))}var l,s=this,f=ta.event.target,h=s.parentNode,g=r.of(s,arguments),p=0,v=n(),d=\".drag\"+(null==v?\"\":\"-\"+v),m=ta.select(e(f)).on(i+d,a).on(o+d,c),y=W(f),M=t(h,v);u?(l=u.apply(s,arguments),l=[l.x-M[0],l.y-M[1]]):l=[0,0],g({type:\"dragstart\"})}}var r=E(n,\"drag\",\"dragstart\",\"dragend\"),u=null,i=e(b,ta.mouse,t,\"mousemove\",\"mouseup\"),o=e(G,ta.touch,y,\"touchmove\",\"touchend\");return n.origin=function(t){return arguments.length?(u=t,n):u},ta.rebind(n,r,\"on\")},ta.touches=function(n,t){return arguments.length<2&&(t=k().touches),t?ra(t).map(function(t){var e=J(n,t);return e.identifier=t.identifier,e}):[]};var Ca=1e-6,za=Ca*Ca,qa=Math.PI,La=2*qa,Ta=La-Ca,Ra=qa/2,Da=qa/180,Pa=180/qa,Ua=Math.SQRT2,ja=2,Fa=4;ta.interpolateZoom=function(n,t){function e(n){var t=n*y;if(m){var e=rt(v),o=i/(ja*h)*(e*ut(Ua*t+v)-et(v));return[r+o*l,u+o*s,i*e/rt(Ua*t+v)]}return[r+n*l,u+n*s,i*Math.exp(Ua*t)]}var r=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],l=o-r,s=a-u,f=l*l+s*s,h=Math.sqrt(f),g=(c*c-i*i+Fa*f)/(2*i*ja*h),p=(c*c-i*i-Fa*f)/(2*c*ja*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/Ua;return e.duration=1e3*y,e},ta.behavior.zoom=function(){function n(n){n.on(q,f).on(Oa+\".zoom\",g).on(\"dblclick.zoom\",p).on(R,h)}function e(n){return[(n[0]-k.x)/k.k,(n[1]-k.y)/k.k]}function r(n){return[n[0]*k.k+k.x,n[1]*k.k+k.y]}function u(n){k.k=Math.max(N[0],Math.min(N[1],n))}function i(n,t){t=r(t),k.x+=n[0]-t[0],k.y+=n[1]-t[1]}function o(t,e,r,o){t.__chart__={x:k.x,y:k.y,k:k.k},u(Math.pow(2,o)),i(d=e,r),t=ta.select(t),C>0&&(t=t.transition().duration(C)),t.call(n.event)}function a(){b&&b.domain(x.range().map(function(n){return(n-k.x)/k.k}).map(x.invert)),w&&w.domain(_.range().map(function(n){return(n-k.y)/k.k}).map(_.invert))}function c(n){z++||n({type:\"zoomstart\"})}function l(n){a(),n({type:\"zoom\",scale:k.k,translate:[k.x,k.y]})}function s(n){--z||n({type:\"zoomend\"}),d=null}function f(){function n(){f=1,i(ta.mouse(u),g),l(a)}function r(){h.on(L,null).on(T,null),p(f&&ta.event.target===o),s(a)}var u=this,o=ta.event.target,a=D.of(u,arguments),f=0,h=ta.select(t(u)).on(L,n).on(T,r),g=e(ta.mouse(u)),p=W(u);Dl.call(u),c(a)}function h(){function n(){var n=ta.touches(p);return g=k.k,n.forEach(function(n){n.identifier in d&&(d[n.identifier]=e(n))}),n}function t(){var t=ta.event.target;ta.select(t).on(x,r).on(b,a),_.push(t);for(var e=ta.event.changedTouches,u=0,i=e.length;i>u;++u)d[e[u].identifier]=null;var c=n(),l=Date.now();if(1===c.length){if(500>l-M){var s=c[0];o(p,s,d[s.identifier],Math.floor(Math.log(k.k)/Math.LN2)+1),S()}M=l}else if(c.length>1){var s=c[0],f=c[1],h=s[0]-f[0],g=s[1]-f[1];m=h*h+g*g}}function r(){var n,t,e,r,o=ta.touches(p);Dl.call(p);for(var a=0,c=o.length;c>a;++a,r=null)if(e=o[a],r=d[e.identifier]){if(t)break;n=e,t=r}if(r){var s=(s=e[0]-n[0])*s+(s=e[1]-n[1])*s,f=m&&Math.sqrt(s/m);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+r[0])/2,(t[1]+r[1])/2],u(f*g)}M=null,i(n,t),l(v)}function a(){if(ta.event.touches.length){for(var t=ta.event.changedTouches,e=0,r=t.length;r>e;++e)delete d[t[e].identifier];for(var u in d)return void n()}ta.selectAll(_).on(y,null),w.on(q,f).on(R,h),E(),s(v)}var g,p=this,v=D.of(p,arguments),d={},m=0,y=\".zoom-\"+ta.event.changedTouches[0].identifier,x=\"touchmove\"+y,b=\"touchend\"+y,_=[],w=ta.select(p),E=W(p);t(),c(v),w.on(q,null).on(R,t)}function g(){var n=D.of(this,arguments);y?clearTimeout(y):(v=e(d=m||ta.mouse(this)),Dl.call(this),c(n)),y=setTimeout(function(){y=null,s(n)},50),S(),u(Math.pow(2,.002*Ha())*k.k),i(d,v),l(n)}function p(){var n=ta.mouse(this),t=Math.log(k.k)/Math.LN2;o(this,n,e(n),ta.event.shiftKey?Math.ceil(t)-1:Math.floor(t)+1)}var v,d,m,y,M,x,b,_,w,k={x:0,y:0,k:1},A=[960,500],N=Ia,C=250,z=0,q=\"mousedown.zoom\",L=\"mousemove.zoom\",T=\"mouseup.zoom\",R=\"touchstart.zoom\",D=E(n,\"zoomstart\",\"zoom\",\"zoomend\");return Oa||(Oa=\"onwheel\"in ua?(Ha=function(){return-ta.event.deltaY*(ta.event.deltaMode?120:1)},\"wheel\"):\"onmousewheel\"in ua?(Ha=function(){return ta.event.wheelDelta},\"mousewheel\"):(Ha=function(){return-ta.event.detail},\"MozMousePixelScroll\")),n.event=function(n){n.each(function(){var n=D.of(this,arguments),t=k;Tl?ta.select(this).transition().each(\"start.zoom\",function(){k=this.__chart__||{x:0,y:0,k:1},c(n)}).tween(\"zoom:zoom\",function(){var e=A[0],r=A[1],u=d?d[0]:e/2,i=d?d[1]:r/2,o=ta.interpolateZoom([(u-k.x)/k.k,(i-k.y)/k.k,e/k.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=o(t),a=e/r[2];this.__chart__=k={x:u-r[0]*a,y:i-r[1]*a,k:a},l(n)}}).each(\"interrupt.zoom\",function(){s(n)}).each(\"end.zoom\",function(){s(n)}):(this.__chart__=k,c(n),l(n),s(n))})},n.translate=function(t){return arguments.length?(k={x:+t[0],y:+t[1],k:k.k},a(),n):[k.x,k.y]},n.scale=function(t){return arguments.length?(k={x:k.x,y:k.y,k:+t},a(),n):k.k},n.scaleExtent=function(t){return arguments.length?(N=null==t?Ia:[+t[0],+t[1]],n):N},n.center=function(t){return arguments.length?(m=t&&[+t[0],+t[1]],n):m},n.size=function(t){return arguments.length?(A=t&&[+t[0],+t[1]],n):A},n.duration=function(t){return arguments.length?(C=+t,n):C},n.x=function(t){return arguments.length?(b=t,x=t.copy(),k={x:0,y:0,k:1},n):b},n.y=function(t){return arguments.length?(w=t,_=t.copy(),k={x:0,y:0,k:1},n):w},ta.rebind(n,D,\"on\")};var Ha,Oa,Ia=[0,1/0];ta.color=ot,ot.prototype.toString=function(){return this.rgb()+\"\"},ta.hsl=at;var Ya=at.prototype=new ot;Ya.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new at(this.h,this.s,this.l/n)},Ya.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new at(this.h,this.s,n*this.l)},Ya.rgb=function(){return ct(this.h,this.s,this.l)},ta.hcl=lt;var Za=lt.prototype=new ot;Za.brighter=function(n){return new lt(this.h,this.c,Math.min(100,this.l+Va*(arguments.length?n:1)))},Za.darker=function(n){return new lt(this.h,this.c,Math.max(0,this.l-Va*(arguments.length?n:1)))},Za.rgb=function(){return st(this.h,this.c,this.l).rgb()},ta.lab=ft;var Va=18,Xa=.95047,$a=1,Ba=1.08883,Wa=ft.prototype=new ot;Wa.brighter=function(n){return new ft(Math.min(100,this.l+Va*(arguments.length?n:1)),this.a,this.b)},Wa.darker=function(n){return new ft(Math.max(0,this.l-Va*(arguments.length?n:1)),this.a,this.b)},Wa.rgb=function(){return ht(this.l,this.a,this.b)},ta.rgb=mt;var Ja=mt.prototype=new ot;Ja.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),new mt(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new mt(u,u,u)},Ja.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new mt(n*this.r,n*this.g,n*this.b)},Ja.hsl=function(){return _t(this.r,this.g,this.b)},Ja.toString=function(){return\"#\"+xt(this.r)+xt(this.g)+xt(this.b)};var Ga=ta.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});Ga.forEach(function(n,t){Ga.set(n,yt(t))}),ta.functor=Et,ta.xhr=At(y),ta.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var o=Nt(n,t,null==e?r:u(e),i);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:u(n)):e},o}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(o).join(n)}function o(n){return a.test(n)?'\"'+n.replace(/\\\"/g,'\"\"')+'\"':n}var a=new RegExp('[\"'+n+\"\\n]\"),c=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function(\"d\",\"return {\"+n.map(function(n,t){return JSON.stringify(n)+\": d[\"+t+\"]\"}).join(\",\")+\"}\");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(s>=l)return o;if(u)return u=!1,i;var t=s;if(34===n.charCodeAt(t)){for(var e=t;e++<l;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}s=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++s):10===r&&(u=!0),n.slice(t+1,e).replace(/\"\"/g,'\"')}for(;l>s;){var r=n.charCodeAt(s++),a=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(s)&&(++s,++a);else if(r!==c)continue;return n.slice(t,s-a)}return n.slice(t)}for(var r,u,i={},o={},a=[],l=n.length,s=0,f=0;(r=e())!==o;){for(var h=[];r!==i&&r!==o;)h.push(r),r=e();t&&null==(h=t(h,f++))||a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new m,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(o).join(n)].concat(t.map(function(t){return u.map(function(n){return o(t[n])}).join(n)})).join(\"\\n\")},e.formatRows=function(n){return n.map(i).join(\"\\n\")},e},ta.csv=ta.dsv(\",\",\"text/csv\"),ta.tsv=ta.dsv(\"\t\",\"text/tab-separated-values\");var Ka,Qa,nc,tc,ec,rc=this[x(this,\"requestAnimationFrame\")]||function(n){setTimeout(n,17)};ta.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,f:!1,n:null};Qa?Qa.n=i:Ka=i,Qa=i,nc||(tc=clearTimeout(tc),nc=1,rc(qt))},ta.timer.flush=function(){Lt(),Tt()},ta.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var uc=[\"y\",\"z\",\"a\",\"f\",\"p\",\"n\",\"\\xb5\",\"m\",\"\",\"k\",\"M\",\"G\",\"T\",\"P\",\"E\",\"Z\",\"Y\"].map(Dt);ta.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=ta.round(n,Rt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),uc[8+e/3]};var ic=/(?:([^{])?([<>=^]))?([+\\- ])?([$#])?(0)?(\\d+)?(,)?(\\.-?\\d+)?([a-z%])?/i,oc=ta.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=ta.round(n,Rt(n,t))).toFixed(Math.max(0,Math.min(20,Rt(n*(1+1e-15),t))))}}),ac=ta.time={},cc=Date;jt.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){lc.setUTCDate.apply(this._,arguments)},setDay:function(){lc.setUTCDay.apply(this._,arguments)},setFullYear:function(){lc.setUTCFullYear.apply(this._,arguments)},setHours:function(){lc.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){lc.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){lc.setUTCMinutes.apply(this._,arguments)},setMonth:function(){lc.setUTCMonth.apply(this._,arguments)},setSeconds:function(){lc.setUTCSeconds.apply(this._,arguments)},setTime:function(){lc.setTime.apply(this._,arguments)}};var lc=Date.prototype;ac.year=Ft(function(n){return n=ac.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),ac.years=ac.year.range,ac.years.utc=ac.year.utc.range,ac.day=Ft(function(n){var t=new cc(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),ac.days=ac.day.range,ac.days.utc=ac.day.utc.range,ac.dayOfYear=function(n){var t=ac.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},[\"sunday\",\"monday\",\"tuesday\",\"wednesday\",\"thursday\",\"friday\",\"saturday\"].forEach(function(n,t){t=7-t;var e=ac[n]=Ft(function(n){return(n=ac.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=ac.year(n).getDay();return Math.floor((ac.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});ac[n+\"s\"]=e.range,ac[n+\"s\"].utc=e.utc.range,ac[n+\"OfYear\"]=function(n){var e=ac.year(n).getDay();return Math.floor((ac.dayOfYear(n)+(e+t)%7)/7)}}),ac.week=ac.sunday,ac.weeks=ac.sunday.range,ac.weeks.utc=ac.sunday.utc.range,ac.weekOfYear=ac.sundayOfYear;var sc={\"-\":\"\",_:\" \",0:\"0\"},fc=/^\\s*\\d+/,hc=/^%/;ta.locale=function(n){return{numberFormat:Pt(n),timeFormat:Ot(n)}};var gc=ta.locale({decimal:\".\",thousands:\",\",grouping:[3],currency:[\"$\",\"\"],dateTime:\"%a %b %e %X %Y\",date:\"%m/%d/%Y\",time:\"%H:%M:%S\",periods:[\"AM\",\"PM\"],days:[\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"],shortDays:[\"Sun\",\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\"],months:[\"January\",\"February\",\"March\",\"April\",\"May\",\"June\",\"July\",\"August\",\"September\",\"October\",\"November\",\"December\"],shortMonths:[\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Oct\",\"Nov\",\"Dec\"]});ta.format=gc.numberFormat,ta.geo={},ce.prototype={s:0,t:0,add:function(n){le(n,this.t,pc),le(pc.s,this.s,this),this.s?this.t+=pc.t:this.s=pc.t\r\n},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var pc=new ce;ta.geo.stream=function(n,t){n&&vc.hasOwnProperty(n.type)?vc[n.type](n,t):se(n,t)};var vc={Feature:function(n,t){se(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)se(e[r].geometry,t)}},dc={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){fe(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)fe(e[r],t,0)},Polygon:function(n,t){he(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)he(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)se(e[r],t)}};ta.geo.area=function(n){return mc=0,ta.geo.stream(n,Mc),mc};var mc,yc=new ce,Mc={sphere:function(){mc+=4*qa},point:b,lineStart:b,lineEnd:b,polygonStart:function(){yc.reset(),Mc.lineStart=ge},polygonEnd:function(){var n=2*yc;mc+=0>n?4*qa+n:n,Mc.lineStart=Mc.lineEnd=Mc.point=b}};ta.geo.bounds=function(){function n(n,t){M.push(x=[s=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=pe([t*Da,e*Da]);if(m){var u=de(m,r),i=[u[1],-u[0],0],o=de(i,u);Me(o),o=xe(o);var c=t-p,l=c>0?1:-1,v=o[0]*Pa*l,d=ga(c)>180;if(d^(v>l*p&&l*t>v)){var y=o[1]*Pa;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>l*p&&l*t>v)){var y=-o[1]*Pa;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?a(s,t)>a(s,h)&&(h=t):a(t,h)>a(s,h)&&(s=t):h>=s?(s>t&&(s=t),t>h&&(h=t)):t>p?a(s,t)>a(s,h)&&(h=t):a(t,h)>a(s,h)&&(s=t)}else n(t,e);m=r,p=t}function e(){b.point=t}function r(){x[0]=s,x[1]=h,b.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=ga(r)>180?r+(r>0?360:-360):r}else v=n,d=e;Mc.point(n,e),t(n,e)}function i(){Mc.lineStart()}function o(){u(v,d),Mc.lineEnd(),ga(y)>Ca&&(s=-(h=180)),x[0]=s,x[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function l(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var s,f,h,g,p,v,d,m,y,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=u,b.lineStart=i,b.lineEnd=o,y=0,Mc.polygonStart()},polygonEnd:function(){Mc.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>yc?(s=-(h=180),f=-(g=90)):y>Ca?g=90:-Ca>y&&(f=-90),x[0]=s,x[1]=h}};return function(n){g=h=-(s=f=1/0),M=[],ta.geo.stream(n,b);var t=M.length;if(t){M.sort(c);for(var e,r=1,u=M[0],i=[u];t>r;++r)e=M[r],l(e[0],u)||l(e[1],u)?(a(u[0],e[1])>a(u[0],u[1])&&(u[1]=e[1]),a(e[0],u[1])>a(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);for(var o,e,p=-1/0,t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(o=a(u[1],e[0]))>p&&(p=o,s=e[0],h=u[1])}return M=x=null,1/0===s||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[s,f],[h,g]]}}(),ta.geo.centroid=function(n){xc=bc=_c=wc=Sc=kc=Ec=Ac=Nc=Cc=zc=0,ta.geo.stream(n,qc);var t=Nc,e=Cc,r=zc,u=t*t+e*e+r*r;return za>u&&(t=kc,e=Ec,r=Ac,Ca>bc&&(t=_c,e=wc,r=Sc),u=t*t+e*e+r*r,za>u)?[0/0,0/0]:[Math.atan2(e,t)*Pa,tt(r/Math.sqrt(u))*Pa]};var xc,bc,_c,wc,Sc,kc,Ec,Ac,Nc,Cc,zc,qc={sphere:b,point:_e,lineStart:Se,lineEnd:ke,polygonStart:function(){qc.lineStart=Ee},polygonEnd:function(){qc.lineStart=Se}},Lc=Le(Ne,Pe,je,[-qa,-qa/2]),Tc=1e9;ta.geo.clipExtent=function(){var n,t,e,r,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=Ie(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(ta.geo.conicEqualArea=function(){return Ye(Ze)}).raw=Ze,ta.geo.albers=function(){return ta.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},ta.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,e(i,o),t||(r(i,o),t)||u(i,o),t}var t,e,r,u,i=ta.geo.albers(),o=ta.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=ta.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?o:u>=.166&&.234>u&&r>=-.214&&-.115>r?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var l=i.scale(),s=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[s-.455*l,f-.238*l],[s+.455*l,f+.238*l]]).stream(c).point,r=o.translate([s-.307*l,f+.201*l]).clipExtent([[s-.425*l+Ca,f+.12*l+Ca],[s-.214*l-Ca,f+.234*l-Ca]]).stream(c).point,u=a.translate([s-.205*l,f+.212*l]).clipExtent([[s-.214*l+Ca,f+.166*l+Ca],[s-.115*l-Ca,f+.234*l-Ca]]).stream(c).point,n},n.scale(1070)};var Rc,Dc,Pc,Uc,jc,Fc,Hc={point:b,lineStart:b,lineEnd:b,polygonStart:function(){Dc=0,Hc.lineStart=Ve},polygonEnd:function(){Hc.lineStart=Hc.lineEnd=Hc.point=b,Rc+=ga(Dc/2)}},Oc={point:Xe,lineStart:b,lineEnd:b,polygonStart:b,polygonEnd:b},Ic={point:We,lineStart:Je,lineEnd:Ge,polygonStart:function(){Ic.lineStart=Ke},polygonEnd:function(){Ic.point=We,Ic.lineStart=Je,Ic.lineEnd=Ge}};ta.geo.path=function(){function n(n){return n&&(\"function\"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),ta.geo.stream(n,o)),i.result()}function t(){return o=null,n}var e,r,u,i,o,a=4.5;return n.area=function(n){return Rc=0,ta.geo.stream(n,u(Hc)),Rc},n.centroid=function(n){return _c=wc=Sc=kc=Ec=Ac=Nc=Cc=zc=0,ta.geo.stream(n,u(Ic)),zc?[Nc/zc,Cc/zc]:Ac?[kc/Ac,Ec/Ac]:Sc?[_c/Sc,wc/Sc]:[0/0,0/0]},n.bounds=function(n){return jc=Fc=-(Pc=Uc=1/0),ta.geo.stream(n,u(Oc)),[[Pc,Uc],[jc,Fc]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||tr(n):y,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new $e:new Qe(n),\"function\"!=typeof a&&i.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a=\"function\"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection(ta.geo.albersUsa()).context(null)},ta.geo.transform=function(n){return{stream:function(t){var e=new er(t);for(var r in n)e[r]=n[r];return e}}},er.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},ta.geo.projection=ur,ta.geo.projectionMutator=ir,(ta.geo.equirectangular=function(){return ur(ar)}).raw=ar.invert=ar,ta.geo.rotation=function(n){function t(t){return t=n(t[0]*Da,t[1]*Da),t[0]*=Pa,t[1]*=Pa,t}return n=lr(n[0]%360*Da,n[1]*Da,n.length>2?n[2]*Da:0),t.invert=function(t){return t=n.invert(t[0]*Da,t[1]*Da),t[0]*=Pa,t[1]*=Pa,t},t},cr.invert=ar,ta.geo.circle=function(){function n(){var n=\"function\"==typeof r?r.apply(this,arguments):r,t=lr(-n[0]*Da,-n[1]*Da,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Pa,n[1]*=Pa}}),{type:\"Polygon\",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=gr((t=+r)*Da,u*Da),n):t},n.precision=function(r){return arguments.length?(e=gr(t*Da,(u=+r)*Da),n):u},n.angle(90)},ta.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Da,u=n[1]*Da,i=t[1]*Da,o=Math.sin(r),a=Math.cos(r),c=Math.sin(u),l=Math.cos(u),s=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*o)*e+(e=l*s-c*f*a)*e),c*s+l*f*a)},ta.geo.graticule=function(){function n(){return{type:\"MultiLineString\",coordinates:t()}}function t(){return ta.range(Math.ceil(i/d)*d,u,d).map(h).concat(ta.range(Math.ceil(l/m)*m,c,m).map(g)).concat(ta.range(Math.ceil(r/p)*p,e,p).filter(function(n){return ga(n%d)>Ca}).map(s)).concat(ta.range(Math.ceil(a/v)*v,o,v).filter(function(n){return ga(n%m)>Ca}).map(f))}var e,r,u,i,o,a,c,l,s,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:\"LineString\",coordinates:n}})},n.outline=function(){return{type:\"Polygon\",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(l).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],l=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),l>c&&(t=l,l=c,c=t),n.precision(y)):[[i,l],[u,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,s=vr(a,o,90),f=dr(r,e,y),h=vr(l,c,90),g=dr(i,u,y),n):y},n.majorExtent([[-180,-90+Ca],[180,90-Ca]]).minorExtent([[-180,-80-Ca],[180,80+Ca]])},ta.geo.greatArc=function(){function n(){return{type:\"LineString\",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=mr,u=yr;return n.distance=function(){return ta.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t=\"function\"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e=\"function\"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},ta.geo.interpolate=function(n,t){return Mr(n[0]*Da,n[1]*Da,t[0]*Da,t[1]*Da)},ta.geo.length=function(n){return Yc=0,ta.geo.stream(n,Zc),Yc};var Yc,Zc={sphere:b,point:b,lineStart:xr,lineEnd:b,polygonStart:b,polygonEnd:b},Vc=br(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(ta.geo.azimuthalEqualArea=function(){return ur(Vc)}).raw=Vc;var Xc=br(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},y);(ta.geo.azimuthalEquidistant=function(){return ur(Xc)}).raw=Xc,(ta.geo.conicConformal=function(){return Ye(_r)}).raw=_r,(ta.geo.conicEquidistant=function(){return Ye(wr)}).raw=wr;var $c=br(function(n){return 1/n},Math.atan);(ta.geo.gnomonic=function(){return ur($c)}).raw=$c,Sr.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Ra]},(ta.geo.mercator=function(){return kr(Sr)}).raw=Sr;var Bc=br(function(){return 1},Math.asin);(ta.geo.orthographic=function(){return ur(Bc)}).raw=Bc;var Wc=br(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(ta.geo.stereographic=function(){return ur(Wc)}).raw=Wc,Er.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Ra]},(ta.geo.transverseMercator=function(){var n=kr(Er),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Er,ta.geom={},ta.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=Et(e),i=Et(r),o=n.length,a=[],c=[];for(t=0;o>t;t++)a.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(a.sort(zr),t=0;o>t;t++)c.push([a[t][0],-a[t][1]]);var l=Cr(a),s=Cr(c),f=s[0]===l[0],h=s[s.length-1]===l[l.length-1],g=[];for(t=l.length-1;t>=0;--t)g.push(n[a[l[t]][2]]);for(t=+f;t<s.length-h;++t)g.push(n[a[s[t]][2]]);return g}var e=Ar,r=Nr;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},ta.geom.polygon=function(n){return ya(n,Jc),n};var Jc=ta.geom.polygon.prototype=[];Jc.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},Jc.centroid=function(n){var t,e,r=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[i*n,o*n]},Jc.clip=function(n){for(var t,e,r,u,i,o,a=Tr(n),c=-1,l=this.length-Tr(this),s=this[l-1];++c<l;){for(t=n.slice(),n.length=0,u=this[c],i=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],qr(o,s,u)?(qr(i,s,u)||n.push(Lr(i,o,s,u)),n.push(o)):qr(i,s,u)&&n.push(Lr(i,o,s,u)),i=o;a&&n.push(n[0]),s=u}return n};var Gc,Kc,Qc,nl,tl,el=[],rl=[];Or.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Yr),t.length},Qr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},nu.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=uu(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(eu(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ru(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(ru(this,e),n=e,e=n.U),e.C=!1,r.C=!0,eu(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,o=n.R;if(e=i?o?uu(o):i:o,u?u.L===n?u.L=e:u.R=e:this._=e,i&&o?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==o?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=o,o.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return void(n.C=!1);do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,eu(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ru(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,eu(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,ru(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,eu(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,ru(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},ta.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],u=a[0][1],i=a[1][0],o=a[1][1];return iu(e(n),a).cells.forEach(function(e,a){var c=e.edges,l=e.site,s=t[a]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):l.x>=r&&l.x<=i&&l.y>=u&&l.y<=o?[[r,o],[i,o],[i,u],[r,u]]:[];s.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Ca)*Ca,y:Math.round(o(n,t)/Ca)*Ca,i:t}})}var r=Ar,u=Nr,i=r,o=u,a=ul;return n?t(n):(t.links=function(n){return iu(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return iu(e(n)).cells.forEach(function(e,r){for(var u,i,o=e.site,a=e.edges.sort(Yr),c=-1,l=a.length,s=a[l-1].edge,f=s.l===o?s.r:s.l;++c<l;)u=s,i=f,s=a[c].edge,f=s.l===o?s.r:s.l,r<i.i&&r<f.i&&au(o,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=Et(r=n),t):r},t.y=function(n){return arguments.length?(o=Et(u=n),t):u},t.clipExtent=function(n){return arguments.length?(a=null==n?ul:n,t):a===ul?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===ul?null:a&&a[1]},t)};var ul=[[-1e6,-1e6],[1e6,1e6]];ta.geom.delaunay=function(n){return ta.geom.voronoi().triangles(n)},ta.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,s=n.y;if(null!=c)if(ga(c-e)+ga(s-r)<.01)l(n,t,e,r,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,l(n,f,c,s,u,i,o,a),l(n,t,e,r,u,i,o,a)}else n.x=e,n.y=r,n.point=t}else l(n,t,e,r,u,i,o,a)}function l(n,t,e,r,u,o,a,c){var l=.5*(u+a),s=.5*(o+c),f=e>=l,h=r>=s,g=h<<1|f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=su()),f?u=l:a=l,h?o=s:c=s,i(n,t,e,r,u,o,a,c)}var s,f,h,g,p,v,d,m,y,M=Et(a),x=Et(c);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)s=n[g],s.x<v&&(v=s.x),s.y<d&&(d=s.y),s.x>m&&(m=s.x),s.y>y&&(y=s.y),f.push(s.x),h.push(s.y);else for(g=0;p>g;++g){var b=+M(s=n[g],g),_=+x(s,g);v>b&&(v=b),d>_&&(d=_),b>m&&(m=b),_>y&&(y=_),f.push(b),h.push(_)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=su();if(k.add=function(n){i(k,n,+M(n,++g),+x(n,g),v,d,m,y)},k.visit=function(n){fu(n,k,v,d,m,y)},k.find=function(n){return hu(k,n[0],n[1],v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=s=null,k}var o,a=Ar,c=Nr;return(o=arguments.length)?(a=cu,c=lu,3===o&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},ta.interpolateRgb=gu,ta.interpolateObject=pu,ta.interpolateNumber=vu,ta.interpolateString=du;var il=/[-+]?(?:\\d+\\.?\\d*|\\.?\\d+)(?:[eE][-+]?\\d+)?/g,ol=new RegExp(il.source,\"g\");ta.interpolate=mu,ta.interpolators=[function(n,t){var e=typeof t;return(\"string\"===e?Ga.has(t)||/^(#|rgb\\(|hsl\\()/.test(t)?gu:du:t instanceof ot?gu:Array.isArray(t)?yu:\"object\"===e&&isNaN(t)?pu:vu)(n,t)}],ta.interpolateArray=yu;var al=function(){return y},cl=ta.map({linear:al,poly:ku,quad:function(){return _u},cubic:function(){return wu},sin:function(){return Eu},exp:function(){return Au},circle:function(){return Nu},elastic:Cu,back:zu,bounce:function(){return qu}}),ll=ta.map({\"in\":y,out:xu,\"in-out\":bu,\"out-in\":function(n){return bu(xu(n))}});ta.ease=function(n){var t=n.indexOf(\"-\"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):\"in\";return e=cl.get(e)||al,r=ll.get(r)||y,Mu(r(e.apply(null,ea.call(arguments,1))))},ta.interpolateHcl=Lu,ta.interpolateHsl=Tu,ta.interpolateLab=Ru,ta.interpolateRound=Du,ta.transform=function(n){var t=ua.createElementNS(ta.ns.prefix.svg,\"g\");return(ta.transform=function(n){if(null!=n){t.setAttribute(\"transform\",n);var e=t.transform.baseVal.consolidate()}return new Pu(e?e.matrix:sl)})(n)},Pu.prototype.toString=function(){return\"translate(\"+this.translate+\")rotate(\"+this.rotate+\")skewX(\"+this.skew+\")scale(\"+this.scale+\")\"};var sl={a:1,b:0,c:0,d:1,e:0,f:0};ta.interpolateTransform=Hu,ta.layout={},ta.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Yu(n[e]));return t}},ta.layout.chord=function(){function n(){var n,l,f,h,g,p={},v=[],d=ta.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(l=0,g=-1;++g<i;)l+=u[h][g];v.push(l),m.push(ta.range(i)),n+=l}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&m.forEach(function(n,t){n.sort(function(n,e){return a(u[t][n],u[t][e])})}),n=(La-s*i)/n,l=0,h=-1;++h<i;){for(f=l,g=-1;++g<i;){var y=d[h],M=m[y][g],x=u[y][M],b=l,_=l+=x*n;p[y+\"-\"+M]={index:y,subindex:M,startAngle:b,endAngle:_,value:x}}r[y]={index:y,startAngle:f,endAngle:l,value:(l-f)/n},l+=s}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+\"-\"+g],S=p[g+\"-\"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,o,a,c,l={},s=0;return l.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,l):u},l.padding=function(n){return arguments.length?(s=n,e=r=null,l):s},l.sortGroups=function(n){return arguments.length?(o=n,e=r=null,l):o},l.sortSubgroups=function(n){return arguments.length?(a=n,e=null,l):a},l.sortChords=function(n){return arguments.length?(c=n,e&&t(),l):c},l.chords=function(){return e||n(),e},l.groups=function(){return r||n(),r},l},ta.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=u-e,c=i*i+o*o;if(c>a*a/d){if(p>c){var l=t.charge/c;n.px-=i*l,n.py-=o*l}return!0}if(t.point&&c&&p>c){var l=t.pointCharge/c;n.px-=i*l,n.py-=o*l}}return!t.charge}}function t(n){n.px=ta.event.x,n.py=ta.event.y,a.resume()}var e,r,u,i,o,a={},c=ta.dispatch(\"start\",\"tick\",\"end\"),l=[1,1],s=.9,f=fl,h=hl,g=-30,p=gl,v=.1,d=.64,m=[],M=[];return a.tick=function(){if((r*=.99)<.005)return c.end({type:\"end\",alpha:r=0}),!0;var t,e,a,f,h,p,d,y,x,b=m.length,_=M.length;for(e=0;_>e;++e)a=M[e],f=a.source,h=a.target,y=h.x-f.x,x=h.y-f.y,(p=y*y+x*x)&&(p=r*i[e]*((p=Math.sqrt(p))-u[e])/p,y*=p,x*=p,h.x-=y*(d=f.weight/(h.weight+f.weight)),h.y-=x*d,f.x+=y*(d=1-d),f.y+=x*d);if((d=r*v)&&(y=l[0]/2,x=l[1]/2,e=-1,d))for(;++e<b;)a=m[e],a.x+=(y-a.x)*d,a.y+=(x-a.y)*d;if(g)for(Ju(t=ta.geom.quadtree(m),r,o),e=-1;++e<b;)(a=m[e]).fixed||t.visit(n(a));for(e=-1;++e<b;)a=m[e],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*s,a.y-=(a.py-(a.py=a.y))*s);c.tick({type:\"tick\",alpha:r})},a.nodes=function(n){return arguments.length?(m=n,a):m},a.links=function(n){return arguments.length?(M=n,a):M},a.size=function(n){return arguments.length?(l=n,a):l},a.linkDistance=function(n){return arguments.length?(f=\"function\"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h=\"function\"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(s=+n,a):s},a.charge=function(n){return arguments.length?(g=\"function\"==typeof n?n:+n,a):g},a.chargeDistance=function(n){return arguments.length?(p=n*n,a):Math.sqrt(p)},a.gravity=function(n){return arguments.length?(v=+n,a):v},a.theta=function(n){return arguments.length?(d=n*n,a):Math.sqrt(d)},a.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:\"start\",alpha:r=n}),ta.timer(a.tick)),a):r},a.start=function(){function n(n,r){if(!e){for(e=new Array(c),a=0;c>a;++a)e[a]=[];for(a=0;s>a;++a){var u=M[a];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var i,o=e[t],a=-1,l=o.length;++a<l;)if(!isNaN(i=o[a][n]))return i;return Math.random()*r}var t,e,r,c=m.length,s=M.length,p=l[0],v=l[1];for(t=0;c>t;++t)(r=m[t]).index=t,r.weight=0;for(t=0;s>t;++t)r=M[t],\"number\"==typeof r.source&&(r.source=m[r.source]),\"number\"==typeof r.target&&(r.target=m[r.target]),++r.source.weight,++r.target.weight;for(t=0;c>t;++t)r=m[t],isNaN(r.x)&&(r.x=n(\"x\",p)),isNaN(r.y)&&(r.y=n(\"y\",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],\"function\"==typeof f)for(t=0;s>t;++t)u[t]=+f.call(this,M[t],t);else for(t=0;s>t;++t)u[t]=f;if(i=[],\"function\"==typeof h)for(t=0;s>t;++t)i[t]=+h.call(this,M[t],t);else for(t=0;s>t;++t)i[t]=h;if(o=[],\"function\"==typeof g)for(t=0;c>t;++t)o[t]=+g.call(this,m[t],t);else for(t=0;c>t;++t)o[t]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return e||(e=ta.behavior.drag().origin(y).on(\"dragstart.force\",Xu).on(\"drag.force\",t).on(\"dragend.force\",$u)),arguments.length?void this.on(\"mouseover.force\",Bu).on(\"mouseout.force\",Wu).call(e):e},ta.rebind(a,c,\"on\")};var fl=20,hl=1,gl=1/0;ta.layout.hierarchy=function(){function n(u){var i,o=[u],a=[];for(u.depth=0;null!=(i=o.pop());)if(a.push(i),(l=e.call(n,i,i.depth))&&(c=l.length)){for(var c,l,s;--c>=0;)o.push(s=l[c]),s.parent=i,s.depth=i.depth+1;r&&(i.value=0),i.children=l}else r&&(i.value=+r.call(n,i,i.depth)||0),delete i.children;return Qu(u,function(n){var e,u;t&&(e=n.children)&&e.sort(t),r&&(u=n.parent)&&(u.value+=n.value)}),a}var t=ei,e=ni,r=ti;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(Ku(t,function(n){n.children&&(n.value=0)}),Qu(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},ta.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(o=i.length)){var o,a,c,l=-1;for(r=t.value?r/t.value:0;++l<o;)n(a=i[l],e,c=a.value*r,u),e+=c}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var o=r.call(this,e,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var r=ta.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},Gu(e,r)},ta.layout.pie=function(){function n(o){var a,c=o.length,l=o.map(function(e,r){return+t.call(n,e,r)}),s=+(\"function\"==typeof r?r.apply(this,arguments):r),f=(\"function\"==typeof u?u.apply(this,arguments):u)-s,h=Math.min(Math.abs(f)/c,+(\"function\"==typeof i?i.apply(this,arguments):i)),g=h*(0>f?-1:1),p=(f-c*g)/ta.sum(l),v=ta.range(c),d=[];return null!=e&&v.sort(e===pl?function(n,t){return l[t]-l[n]}:function(n,t){return e(o[n],o[t])}),v.forEach(function(n){d[n]={data:o[n],value:a=l[n],startAngle:s,endAngle:s+=a*p+g,padAngle:h}}),d}var t=Number,e=pl,r=0,u=La,i=0;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n.padAngle=function(t){return arguments.length?(i=t,n):i},n};var pl={};ta.layout.stack=function(){function n(a,c){if(!(h=a.length))return a;var l=a.map(function(e,r){return t.call(n,e,r)}),s=l.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),o.call(n,t,e)]})}),f=e.call(n,s,c);l=ta.permute(l,f),s=ta.permute(s,f);var h,g,p,v,d=r.call(n,s,c),m=l[0].length;for(p=0;m>p;++p)for(u.call(n,l[0][p],v=d[p],s[0][p][1]),g=1;h>g;++g)u.call(n,l[g][p],v+=s[g-1][p][1],s[g][p][1]);return a}var t=y,e=ai,r=ci,u=oi,i=ui,o=ii;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e=\"function\"==typeof t?t:vl.get(t)||ai,n):e},n.offset=function(t){return arguments.length?(r=\"function\"==typeof t?t:dl.get(t)||ci,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var vl=ta.map({\"inside-out\":function(n){var t,e,r=n.length,u=n.map(li),i=n.map(si),o=ta.range(r).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,l=[],s=[];for(t=0;r>t;++t)e=o[t],c>a?(a+=i[e],l.push(e)):(c+=i[e],s.push(e));return s.reverse().concat(l)},reverse:function(n){return ta.range(n.length).reverse()},\"default\":ai}),dl=ta.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,o=[],a=0,c=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;i>e;++e)c[e]=(a-o[e])/2;return c},wiggle:function(n){var t,e,r,u,i,o,a,c,l,s=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=l=0,e=1;h>e;++e){for(t=0,u=0;s>t;++t)u+=n[t][e][1];for(t=0,i=0,a=f[e][0]-f[e-1][0];s>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;i+=o*n[t][e][1]}g[e]=c-=u?i/u*a:0,l>c&&(l=c)}for(e=0;h>e;++e)g[e]-=l;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,o=1/u,a=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=o}for(e=0;i>e;++e)a[e]=0;return a},zero:ci});ta.layout.histogram=function(){function n(n,i){for(var o,a,c=[],l=n.map(e,this),s=r.call(this,l,i),f=u.call(this,s,l,i),i=-1,h=l.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=l[i],a>=s[0]&&a<=s[1]&&(o=c[ta.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,e=Number,r=pi,u=hi;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=Et(t),n):r},n.bins=function(t){return arguments.length?(u=\"number\"==typeof t?function(n){return gi(n,t)}:Et(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},ta.layout.pack=function(){function n(n,i){var o=e.call(this,n,i),a=o[0],c=u[0],l=u[1],s=null==t?Math.sqrt:\"function\"==typeof t?t:function(){return t};if(a.x=a.y=0,Qu(a,function(n){n.r=+s(n.value)}),Qu(a,Mi),r){var f=r*(t?1:Math.max(2*a.r/c,2*a.r/l))/2;Qu(a,function(n){n.r+=f}),Qu(a,Mi),Qu(a,function(n){n.r-=f})}return _i(a,c/2,l/2,t?1:1/Math.max(2*a.r/c,2*a.r/l)),o}var t,e=ta.layout.hierarchy().sort(vi),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||\"function\"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},Gu(n,e)},ta.layout.tree=function(){function n(n,u){var s=o.call(this,n,u),f=s[0],h=t(f);if(Qu(h,e),h.parent.m=-h.z,Ku(h,r),l)Ku(f,i);else{var g=f,p=f,v=f;Ku(f,function(n){n.x<g.x&&(g=n),n.x>p.x&&(p=n),n.depth>v.depth&&(v=n)});var d=a(g,p)/2-g.x,m=c[0]/(p.x+a(p,g)/2+d),y=c[1]/(v.depth||1);Ku(f,function(n){n.x=(n.x+d)*m,n.y=n.depth*y})}return s}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var u,i=t.children,o=0,a=i.length;a>o;++o)r.push((i[o]=u={_:i[o],parent:t,children:(u=i[o].children)&&u.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=u);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){Ni(n);var i=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+a(n._,r._),n.m=n.z-i):n.z=i}else r&&(n.z=r.z+a(n._,r._));n.parent.A=u(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function u(n,t,e){if(t){for(var r,u=n,i=n,o=t,c=u.parent.children[0],l=u.m,s=i.m,f=o.m,h=c.m;o=Ei(o),u=ki(u),o&&u;)c=ki(c),i=Ei(i),i.a=n,r=o.z+f-u.z-l+a(o._,u._),r>0&&(Ai(Ci(o,n,e),n,r),l+=r,s+=r),f+=o.m,l+=u.m,h+=c.m,s+=i.m;o&&!Ei(i)&&(i.t=o,i.m+=f-s),u&&!ki(c)&&(c.t=u,c.m+=l-h,e=n)}return e}function i(n){n.x*=c[0],n.y=n.depth*c[1]}var o=ta.layout.hierarchy().sort(null).value(null),a=Si,c=[1,1],l=null;return n.separation=function(t){return arguments.length?(a=t,n):a},n.size=function(t){return arguments.length?(l=null==(c=t)?i:null,n):l?null:c},n.nodeSize=function(t){return arguments.length?(l=null==(c=t)?null:i,n):l?c:null},Gu(n,o)},ta.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],l=0;Qu(c,function(n){var t=n.children;t&&t.length?(n.x=qi(t),n.y=zi(t)):(n.x=o?l+=e(n,o):0,n.y=0,o=n)});var s=Li(c),f=Ti(c),h=s.x-e(s,f)/2,g=f.x+e(f,s)/2;return Qu(c,u?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),a}var t=ta.layout.hierarchy().sort(null).value(null),e=Si,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Gu(n,t)},ta.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var o,a,c,l=f(e),s=[],h=i.slice(),p=1/0,v=\"slice\"===g?l.dx:\"dice\"===g?l.dy:\"slice-dice\"===g?1&e.depth?l.dy:l.dx:Math.min(l.dx,l.dy);for(n(h,l.dx*l.dy/e.value),s.area=0;(c=h.length)>0;)s.push(o=h[c-1]),s.area+=o.area,\"squarify\"!==g||(a=r(s,v))<=p?(h.pop(),p=a):(s.area-=s.pop().area,u(s,v,l,!1),v=Math.min(l.dx,l.dy),s.length=s.area=0,p=1/0);s.length&&(u(s,v,l,!0),s.length=s.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,o=f(t),a=r.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,o=n.length,a=e.x,l=e.y,s=t?c(n.area/t):0;if(t==e.dx){for((r||s>e.dy)&&(s=e.dy);++i<o;)u=n[i],u.x=a,u.y=l,u.dy=s,a+=u.dx=Math.min(e.x+e.dx-a,s?c(u.area/s):0);u.z=!0,u.dx+=e.x+e.dx-a,e.y+=s,e.dy-=s}else{for((r||s>e.dx)&&(s=e.dx);++i<o;)u=n[i],u.x=a,u.y=l,u.dx=s,l+=u.dy=Math.min(e.y+e.dy-l,s?c(u.area/s):0);u.z=!1,u.dy+=e.y+e.dy-l,e.x+=s,e.dx-=s}}function i(r){var u=o||a(r),i=u[0];return i.x=0,i.y=0,i.dx=l[0],i.dy=l[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?e:t)(i),h&&(o=u),u}var o,a=ta.layout.hierarchy(),c=Math.round,l=[1,1],s=null,f=Ri,h=!1,g=\"squarify\",p=.5*(1+Math.sqrt(5));\r\nreturn i.size=function(n){return arguments.length?(l=n,i):l},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?Ri(t):Di(t,\"number\"==typeof e?[e,e,e,e]:e)}function e(t){return Di(t,n)}if(!arguments.length)return s;var r;return f=null==(s=n)?Ri:\"function\"==(r=typeof n)?t:\"number\"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+\"\",i):g},Gu(i,a)},ta.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=ta.random.normal.apply(ta,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=ta.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},ta.scale={};var ml={floor:y,ceil:y};ta.scale.linear=function(){return Ii([0,1],[0,1],mu,!1)};var yl={s:1,g:1,p:1,r:1,e:1};ta.scale.log=function(){return Ji(ta.scale.linear().domain([0,1]),10,!0,[1,10])};var Ml=ta.format(\".0e\"),xl={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};ta.scale.pow=function(){return Gi(ta.scale.linear(),1,[0,1])},ta.scale.sqrt=function(){return ta.scale.pow().exponent(.5)},ta.scale.ordinal=function(){return Qi([],{t:\"range\",a:[[]]})},ta.scale.category10=function(){return ta.scale.ordinal().range(bl)},ta.scale.category20=function(){return ta.scale.ordinal().range(_l)},ta.scale.category20b=function(){return ta.scale.ordinal().range(wl)},ta.scale.category20c=function(){return ta.scale.ordinal().range(Sl)};var bl=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(Mt),_l=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(Mt),wl=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(Mt),Sl=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(Mt);ta.scale.quantile=function(){return no([],[])},ta.scale.quantize=function(){return to(0,1,[0,1])},ta.scale.threshold=function(){return eo([.5],[0,1])},ta.scale.identity=function(){return ro([0,1])},ta.svg={},ta.svg.arc=function(){function n(){var n=Math.max(0,+e.apply(this,arguments)),l=Math.max(0,+r.apply(this,arguments)),s=o.apply(this,arguments)-Ra,f=a.apply(this,arguments)-Ra,h=Math.abs(f-s),g=s>f?0:1;if(n>l&&(p=l,l=n,n=p),h>=Ta)return t(l,g)+(n?t(n,1-g):\"\")+\"Z\";var p,v,d,m,y,M,x,b,_,w,S,k,E=0,A=0,N=[];if((m=(+c.apply(this,arguments)||0)/2)&&(d=i===kl?Math.sqrt(n*n+l*l):+i.apply(this,arguments),g||(A*=-1),l&&(A=tt(d/l*Math.sin(m))),n&&(E=tt(d/n*Math.sin(m)))),l){y=l*Math.cos(s+A),M=l*Math.sin(s+A),x=l*Math.cos(f-A),b=l*Math.sin(f-A);var C=Math.abs(f-s-2*A)<=qa?0:1;if(A&&so(y,M,x,b)===g^C){var z=(s+f)/2;y=l*Math.cos(z),M=l*Math.sin(z),x=b=null}}else y=M=0;if(n){_=n*Math.cos(f-E),w=n*Math.sin(f-E),S=n*Math.cos(s+E),k=n*Math.sin(s+E);var q=Math.abs(s-f+2*E)<=qa?0:1;if(E&&so(_,w,S,k)===1-g^q){var L=(s+f)/2;_=n*Math.cos(L),w=n*Math.sin(L),S=k=null}}else _=w=0;if((p=Math.min(Math.abs(l-n)/2,+u.apply(this,arguments)))>.001){v=l>n^g?0:1;var T=null==S?[_,w]:null==x?[y,M]:Lr([y,M],[S,k],[x,b],[_,w]),R=y-T[0],D=M-T[1],P=x-T[0],U=b-T[1],j=1/Math.sin(Math.acos((R*P+D*U)/(Math.sqrt(R*R+D*D)*Math.sqrt(P*P+U*U)))/2),F=Math.sqrt(T[0]*T[0]+T[1]*T[1]);if(null!=x){var H=Math.min(p,(l-F)/(j+1)),O=fo(null==S?[_,w]:[S,k],[y,M],l,H,g),I=fo([x,b],[_,w],l,H,g);p===H?N.push(\"M\",O[0],\"A\",H,\",\",H,\" 0 0,\",v,\" \",O[1],\"A\",l,\",\",l,\" 0 \",1-g^so(O[1][0],O[1][1],I[1][0],I[1][1]),\",\",g,\" \",I[1],\"A\",H,\",\",H,\" 0 0,\",v,\" \",I[0]):N.push(\"M\",O[0],\"A\",H,\",\",H,\" 0 1,\",v,\" \",I[0])}else N.push(\"M\",y,\",\",M);if(null!=S){var Y=Math.min(p,(n-F)/(j-1)),Z=fo([y,M],[S,k],n,-Y,g),V=fo([_,w],null==x?[y,M]:[x,b],n,-Y,g);p===Y?N.push(\"L\",V[0],\"A\",Y,\",\",Y,\" 0 0,\",v,\" \",V[1],\"A\",n,\",\",n,\" 0 \",g^so(V[1][0],V[1][1],Z[1][0],Z[1][1]),\",\",1-g,\" \",Z[1],\"A\",Y,\",\",Y,\" 0 0,\",v,\" \",Z[0]):N.push(\"L\",V[0],\"A\",Y,\",\",Y,\" 0 0,\",v,\" \",Z[0])}else N.push(\"L\",_,\",\",w)}else N.push(\"M\",y,\",\",M),null!=x&&N.push(\"A\",l,\",\",l,\" 0 \",C,\",\",g,\" \",x,\",\",b),N.push(\"L\",_,\",\",w),null!=S&&N.push(\"A\",n,\",\",n,\" 0 \",q,\",\",1-g,\" \",S,\",\",k);return N.push(\"Z\"),N.join(\"\")}function t(n,t){return\"M0,\"+n+\"A\"+n+\",\"+n+\" 0 1,\"+t+\" 0,\"+-n+\"A\"+n+\",\"+n+\" 0 1,\"+t+\" 0,\"+n}var e=io,r=oo,u=uo,i=kl,o=ao,a=co,c=lo;return n.innerRadius=function(t){return arguments.length?(e=Et(t),n):e},n.outerRadius=function(t){return arguments.length?(r=Et(t),n):r},n.cornerRadius=function(t){return arguments.length?(u=Et(t),n):u},n.padRadius=function(t){return arguments.length?(i=t==kl?kl:Et(t),n):i},n.startAngle=function(t){return arguments.length?(o=Et(t),n):o},n.endAngle=function(t){return arguments.length?(a=Et(t),n):a},n.padAngle=function(t){return arguments.length?(c=Et(t),n):c},n.centroid=function(){var n=(+e.apply(this,arguments)+ +r.apply(this,arguments))/2,t=(+o.apply(this,arguments)+ +a.apply(this,arguments))/2-Ra;return[Math.cos(t)*n,Math.sin(t)*n]},n};var kl=\"auto\";ta.svg.line=function(){return ho(y)};var El=ta.map({linear:go,\"linear-closed\":po,step:vo,\"step-before\":mo,\"step-after\":yo,basis:So,\"basis-open\":ko,\"basis-closed\":Eo,bundle:Ao,cardinal:bo,\"cardinal-open\":Mo,\"cardinal-closed\":xo,monotone:To});El.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Al=[0,2/3,1/3,0],Nl=[0,1/3,2/3,0],Cl=[0,1/6,2/3,1/6];ta.svg.line.radial=function(){var n=ho(Ro);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},mo.reverse=yo,yo.reverse=mo,ta.svg.area=function(){return Do(y)},ta.svg.area.radial=function(){var n=Do(Ro);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},ta.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),l=t(this,o,n,a);return\"M\"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,l)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,l.r,l.p0)+r(l.r,l.p1,l.a1-l.a0)+u(l.r,l.p1,c.r,c.p0))+\"Z\"}function t(n,t,e,r){var u=t.call(n,e,r),i=a.call(n,u,r),o=c.call(n,u,r)-Ra,s=l.call(n,u,r)-Ra;return{r:i,a0:o,a1:s,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(s),i*Math.sin(s)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return\"A\"+n+\",\"+n+\" 0 \"+ +(e>qa)+\",1 \"+t}function u(n,t,e,r){return\"Q 0,0 \"+r}var i=mr,o=yr,a=Po,c=ao,l=co;return n.radius=function(t){return arguments.length?(a=Et(t),n):a},n.source=function(t){return arguments.length?(i=Et(t),n):i},n.target=function(t){return arguments.length?(o=Et(t),n):o},n.startAngle=function(t){return arguments.length?(c=Et(t),n):c},n.endAngle=function(t){return arguments.length?(l=Et(t),n):l},n},ta.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=e.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(r),\"M\"+c[0]+\"C\"+c[1]+\" \"+c[2]+\" \"+c[3]}var t=mr,e=yr,r=Uo;return n.source=function(e){return arguments.length?(t=Et(e),n):t},n.target=function(t){return arguments.length?(e=Et(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},ta.svg.diagonal.radial=function(){var n=ta.svg.diagonal(),t=Uo,e=n.projection;return n.projection=function(n){return arguments.length?e(jo(t=n)):t},n},ta.svg.symbol=function(){function n(n,r){return(zl.get(t.call(this,n,r))||Oo)(e.call(this,n,r))}var t=Ho,e=Fo;return n.type=function(e){return arguments.length?(t=Et(e),n):t},n.size=function(t){return arguments.length?(e=Et(t),n):e},n};var zl=ta.map({circle:Oo,cross:function(n){var t=Math.sqrt(n/5)/2;return\"M\"+-3*t+\",\"+-t+\"H\"+-t+\"V\"+-3*t+\"H\"+t+\"V\"+-t+\"H\"+3*t+\"V\"+t+\"H\"+t+\"V\"+3*t+\"H\"+-t+\"V\"+t+\"H\"+-3*t+\"Z\"},diamond:function(n){var t=Math.sqrt(n/(2*Ll)),e=t*Ll;return\"M0,\"+-t+\"L\"+e+\",0 0,\"+t+\" \"+-e+\",0Z\"},square:function(n){var t=Math.sqrt(n)/2;return\"M\"+-t+\",\"+-t+\"L\"+t+\",\"+-t+\" \"+t+\",\"+t+\" \"+-t+\",\"+t+\"Z\"},\"triangle-down\":function(n){var t=Math.sqrt(n/ql),e=t*ql/2;return\"M0,\"+e+\"L\"+t+\",\"+-e+\" \"+-t+\",\"+-e+\"Z\"},\"triangle-up\":function(n){var t=Math.sqrt(n/ql),e=t*ql/2;return\"M0,\"+-e+\"L\"+t+\",\"+e+\" \"+-t+\",\"+e+\"Z\"}});ta.svg.symbolTypes=zl.keys();var ql=Math.sqrt(3),Ll=Math.tan(30*Da);_a.transition=function(n){for(var t,e,r=Tl||++Ul,u=Xo(n),i=[],o=Rl||{time:Date.now(),ease:Su,delay:0,duration:250},a=-1,c=this.length;++a<c;){i.push(t=[]);for(var l=this[a],s=-1,f=l.length;++s<f;)(e=l[s])&&$o(e,s,u,r,o),t.push(e)}return Yo(i,u,r)},_a.interrupt=function(n){return this.each(null==n?Dl:Io(Xo(n)))};var Tl,Rl,Dl=Io(Xo()),Pl=[],Ul=0;Pl.call=_a.call,Pl.empty=_a.empty,Pl.node=_a.node,Pl.size=_a.size,ta.transition=function(n,t){return n&&n.transition?Tl?n.transition(t):n:ta.selection().transition(n)},ta.transition.prototype=Pl,Pl.select=function(n){var t,e,r,u=this.id,i=this.namespace,o=[];n=N(n);for(var a=-1,c=this.length;++a<c;){o.push(t=[]);for(var l=this[a],s=-1,f=l.length;++s<f;)(r=l[s])&&(e=n.call(r,r.__data__,s,a))?(\"__data__\"in r&&(e.__data__=r.__data__),$o(e,s,i,u,r[i][u]),t.push(e)):t.push(null)}return Yo(o,i,u)},Pl.selectAll=function(n){var t,e,r,u,i,o=this.id,a=this.namespace,c=[];n=C(n);for(var l=-1,s=this.length;++l<s;)for(var f=this[l],h=-1,g=f.length;++h<g;)if(r=f[h]){i=r[a][o],e=n.call(r,r.__data__,h,l),c.push(t=[]);for(var p=-1,v=e.length;++p<v;)(u=e[p])&&$o(u,p,a,o,i),t.push(u)}return Yo(c,a,o)},Pl.filter=function(n){var t,e,r,u=[];\"function\"!=typeof n&&(n=O(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var e=this[i],a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return Yo(u,this.namespace,this.id)},Pl.tween=function(n,t){var e=this.id,r=this.namespace;return arguments.length<2?this.node()[r][e].tween.get(n):Y(this,null==t?function(t){t[r][e].tween.remove(n)}:function(u){u[r][e].tween.set(n,t)})},Pl.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?e:(n+=\"\",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?r:(n+=\"\",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o=\"transform\"==n?Hu:mu,a=ta.ns.qualify(n);return Zo(this,\"attr.\"+n,t,a.local?i:u)},Pl.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=ta.ns.qualify(n);return this.tween(\"attr.\"+n,u.local?r:e)},Pl.style=function(n,e,r){function u(){this.style.removeProperty(n)}function i(e){return null==e?u:(e+=\"\",function(){var u,i=t(this).getComputedStyle(this,null).getPropertyValue(n);return i!==e&&(u=mu(i,e),function(t){this.style.setProperty(n,u(t),r)})})}var o=arguments.length;if(3>o){if(\"string\"!=typeof n){2>o&&(e=\"\");for(r in n)this.style(r,n[r],e);return this}r=\"\"}return Zo(this,\"style.\"+n,e,i)},Pl.styleTween=function(n,e,r){function u(u,i){var o=e.call(this,u,i,t(this).getComputedStyle(this,null).getPropertyValue(n));return o&&function(t){this.style.setProperty(n,o(t),r)}}return arguments.length<3&&(r=\"\"),this.tween(\"style.\"+n,u)},Pl.text=function(n){return Zo(this,\"text\",n,Vo)},Pl.remove=function(){var n=this.namespace;return this.each(\"end.transition\",function(){var t;this[n].count<2&&(t=this.parentNode)&&t.removeChild(this)})},Pl.ease=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].ease:(\"function\"!=typeof n&&(n=ta.ease.apply(ta,arguments)),Y(this,function(r){r[e][t].ease=n}))},Pl.delay=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].delay:Y(this,\"function\"==typeof n?function(r,u,i){r[e][t].delay=+n.call(r,r.__data__,u,i)}:(n=+n,function(r){r[e][t].delay=n}))},Pl.duration=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].duration:Y(this,\"function\"==typeof n?function(r,u,i){r[e][t].duration=Math.max(1,n.call(r,r.__data__,u,i))}:(n=Math.max(1,n),function(r){r[e][t].duration=n}))},Pl.each=function(n,t){var e=this.id,r=this.namespace;if(arguments.length<2){var u=Rl,i=Tl;try{Tl=e,Y(this,function(t,u,i){Rl=t[r][e],n.call(t,t.__data__,u,i)})}finally{Rl=u,Tl=i}}else Y(this,function(u){var i=u[r][e];(i.event||(i.event=ta.dispatch(\"start\",\"end\",\"interrupt\"))).on(n,t)});return this},Pl.transition=function(){for(var n,t,e,r,u=this.id,i=++Ul,o=this.namespace,a=[],c=0,l=this.length;l>c;c++){a.push(n=[]);for(var t=this[c],s=0,f=t.length;f>s;s++)(e=t[s])&&(r=e[o][u],$o(e,s,o,i,{time:r.time,ease:r.ease,delay:r.delay+r.duration,duration:r.duration})),n.push(e)}return Yo(a,o,i)},ta.svg.axis=function(){function n(n){n.each(function(){var n,l=ta.select(this),s=this.__chart__||e,f=this.__chart__=e.copy(),h=null==c?f.ticks?f.ticks.apply(f,a):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,a):y:t,p=l.selectAll(\".tick\").data(h,f),v=p.enter().insert(\"g\",\".domain\").attr(\"class\",\"tick\").style(\"opacity\",Ca),d=ta.transition(p.exit()).style(\"opacity\",Ca).remove(),m=ta.transition(p.order()).style(\"opacity\",1),M=Math.max(u,0)+o,x=Ui(f),b=l.selectAll(\".domain\").data([0]),_=(b.enter().append(\"path\").attr(\"class\",\"domain\"),ta.transition(b));v.append(\"line\"),v.append(\"text\");var w,S,k,E,A=v.select(\"line\"),N=m.select(\"line\"),C=p.select(\"text\").text(g),z=v.select(\"text\"),q=m.select(\"text\"),L=\"top\"===r||\"left\"===r?-1:1;if(\"bottom\"===r||\"top\"===r?(n=Bo,w=\"x\",k=\"y\",S=\"x2\",E=\"y2\",C.attr(\"dy\",0>L?\"0em\":\".71em\").style(\"text-anchor\",\"middle\"),_.attr(\"d\",\"M\"+x[0]+\",\"+L*i+\"V0H\"+x[1]+\"V\"+L*i)):(n=Wo,w=\"y\",k=\"x\",S=\"y2\",E=\"x2\",C.attr(\"dy\",\".32em\").style(\"text-anchor\",0>L?\"end\":\"start\"),_.attr(\"d\",\"M\"+L*i+\",\"+x[0]+\"H0V\"+x[1]+\"H\"+L*i)),A.attr(E,L*u),z.attr(k,L*M),N.attr(S,0).attr(E,L*u),q.attr(w,0).attr(k,L*M),f.rangeBand){var T=f,R=T.rangeBand()/2;s=f=function(n){return T(n)+R}}else s.rangeBand?s=f:d.call(n,f,s);v.call(n,s,f),m.call(n,f,f)})}var t,e=ta.scale.linear(),r=jl,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Fl?t+\"\":jl,n):r},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var jl=\"bottom\",Fl={top:1,right:1,bottom:1,left:1};ta.svg.brush=function(){function n(t){t.each(function(){var t=ta.select(this).style(\"pointer-events\",\"all\").style(\"-webkit-tap-highlight-color\",\"rgba(0,0,0,0)\").on(\"mousedown.brush\",i).on(\"touchstart.brush\",i),o=t.selectAll(\".background\").data([0]);o.enter().append(\"rect\").attr(\"class\",\"background\").style(\"visibility\",\"hidden\").style(\"cursor\",\"crosshair\"),t.selectAll(\".extent\").data([0]).enter().append(\"rect\").attr(\"class\",\"extent\").style(\"cursor\",\"move\");var a=t.selectAll(\".resize\").data(v,y);a.exit().remove(),a.enter().append(\"g\").attr(\"class\",function(n){return\"resize \"+n}).style(\"cursor\",function(n){return Hl[n]}).append(\"rect\").attr(\"x\",function(n){return/[ew]$/.test(n)?-3:null}).attr(\"y\",function(n){return/^[ns]/.test(n)?-3:null}).attr(\"width\",6).attr(\"height\",6).style(\"visibility\",\"hidden\"),a.style(\"display\",n.empty()?\"none\":null);var c,f=ta.transition(t),h=ta.transition(o);l&&(c=Ui(l),h.attr(\"x\",c[0]).attr(\"width\",c[1]-c[0]),r(f)),s&&(c=Ui(s),h.attr(\"y\",c[0]).attr(\"height\",c[1]-c[0]),u(f)),e(f)})}function e(n){n.selectAll(\".resize\").attr(\"transform\",function(n){return\"translate(\"+f[+/e$/.test(n)]+\",\"+h[+/^s/.test(n)]+\")\"})}function r(n){n.select(\".extent\").attr(\"x\",f[0]),n.selectAll(\".extent,.n>rect,.s>rect\").attr(\"width\",f[1]-f[0])}function u(n){n.select(\".extent\").attr(\"y\",h[0]),n.selectAll(\".extent,.e>rect,.w>rect\").attr(\"height\",h[1]-h[0])}function i(){function i(){32==ta.event.keyCode&&(C||(M=null,q[0]-=f[1],q[1]-=h[1],C=2),S())}function v(){32==ta.event.keyCode&&2==C&&(q[0]+=f[1],q[1]+=h[1],C=0,S())}function d(){var n=ta.mouse(b),t=!1;x&&(n[0]+=x[0],n[1]+=x[1]),C||(ta.event.altKey?(M||(M=[(f[0]+f[1])/2,(h[0]+h[1])/2]),q[0]=f[+(n[0]<M[0])],q[1]=h[+(n[1]<M[1])]):M=null),A&&m(n,l,0)&&(r(k),t=!0),N&&m(n,s,1)&&(u(k),t=!0),t&&(e(k),w({type:\"brush\",mode:C?\"move\":\"resize\"}))}function m(n,t,e){var r,u,i=Ui(t),c=i[0],l=i[1],s=q[e],v=e?h:f,d=v[1]-v[0];return C&&(c-=s,l-=d+s),r=(e?p:g)?Math.max(c,Math.min(l,n[e])):n[e],C?u=(r+=s)+d:(M&&(s=Math.max(c,Math.min(l,2*M[e]-r))),r>s?(u=r,r=s):u=s),v[0]!=r||v[1]!=u?(e?a=null:o=null,v[0]=r,v[1]=u,!0):void 0}function y(){d(),k.style(\"pointer-events\",\"all\").selectAll(\".resize\").style(\"display\",n.empty()?\"none\":null),ta.select(\"body\").style(\"cursor\",null),L.on(\"mousemove.brush\",null).on(\"mouseup.brush\",null).on(\"touchmove.brush\",null).on(\"touchend.brush\",null).on(\"keydown.brush\",null).on(\"keyup.brush\",null),z(),w({type:\"brushend\"})}var M,x,b=this,_=ta.select(ta.event.target),w=c.of(b,arguments),k=ta.select(b),E=_.datum(),A=!/^(n|s)$/.test(E)&&l,N=!/^(e|w)$/.test(E)&&s,C=_.classed(\"extent\"),z=W(b),q=ta.mouse(b),L=ta.select(t(b)).on(\"keydown.brush\",i).on(\"keyup.brush\",v);if(ta.event.changedTouches?L.on(\"touchmove.brush\",d).on(\"touchend.brush\",y):L.on(\"mousemove.brush\",d).on(\"mouseup.brush\",y),k.interrupt().selectAll(\"*\").interrupt(),C)q[0]=f[0]-q[0],q[1]=h[0]-q[1];else if(E){var T=+/w$/.test(E),R=+/^n/.test(E);x=[f[1-T]-q[0],h[1-R]-q[1]],q[0]=f[T],q[1]=h[R]}else ta.event.altKey&&(M=q.slice());k.style(\"pointer-events\",\"none\").selectAll(\".resize\").style(\"display\",null),ta.select(\"body\").style(\"cursor\",_.style(\"cursor\")),w({type:\"brushstart\"}),d()}var o,a,c=E(n,\"brushstart\",\"brush\",\"brushend\"),l=null,s=null,f=[0,0],h=[0,0],g=!0,p=!0,v=Ol[0];return n.event=function(n){n.each(function(){var n=c.of(this,arguments),t={x:f,y:h,i:o,j:a},e=this.__chart__||t;this.__chart__=t,Tl?ta.select(this).transition().each(\"start.brush\",function(){o=e.i,a=e.j,f=e.x,h=e.y,n({type:\"brushstart\"})}).tween(\"brush:brush\",function(){var e=yu(f,t.x),r=yu(h,t.y);return o=a=null,function(u){f=t.x=e(u),h=t.y=r(u),n({type:\"brush\",mode:\"resize\"})}}).each(\"end.brush\",function(){o=t.i,a=t.j,n({type:\"brush\",mode:\"resize\"}),n({type:\"brushend\"})}):(n({type:\"brushstart\"}),n({type:\"brush\",mode:\"resize\"}),n({type:\"brushend\"}))})},n.x=function(t){return arguments.length?(l=t,v=Ol[!l<<1|!s],n):l},n.y=function(t){return arguments.length?(s=t,v=Ol[!l<<1|!s],n):s},n.clamp=function(t){return arguments.length?(l&&s?(g=!!t[0],p=!!t[1]):l?g=!!t:s&&(p=!!t),n):l&&s?[g,p]:l?g:s?p:null},n.extent=function(t){var e,r,u,i,c;return arguments.length?(l&&(e=t[0],r=t[1],s&&(e=e[0],r=r[0]),o=[e,r],l.invert&&(e=l(e),r=l(r)),e>r&&(c=e,e=r,r=c),(e!=f[0]||r!=f[1])&&(f=[e,r])),s&&(u=t[0],i=t[1],l&&(u=u[1],i=i[1]),a=[u,i],s.invert&&(u=s(u),i=s(i)),u>i&&(c=u,u=i,i=c),(u!=h[0]||i!=h[1])&&(h=[u,i])),n):(l&&(o?(e=o[0],r=o[1]):(e=f[0],r=f[1],l.invert&&(e=l.invert(e),r=l.invert(r)),e>r&&(c=e,e=r,r=c))),s&&(a?(u=a[0],i=a[1]):(u=h[0],i=h[1],s.invert&&(u=s.invert(u),i=s.invert(i)),u>i&&(c=u,u=i,i=c))),l&&s?[[e,u],[r,i]]:l?[e,r]:s&&[u,i])},n.clear=function(){return n.empty()||(f=[0,0],h=[0,0],o=a=null),n},n.empty=function(){return!!l&&f[0]==f[1]||!!s&&h[0]==h[1]},ta.rebind(n,c,\"on\")};var Hl={n:\"ns-resize\",e:\"ew-resize\",s:\"ns-resize\",w:\"ew-resize\",nw:\"nwse-resize\",ne:\"nesw-resize\",se:\"nwse-resize\",sw:\"nesw-resize\"},Ol=[[\"n\",\"e\",\"s\",\"w\",\"nw\",\"ne\",\"se\",\"sw\"],[\"e\",\"w\"],[\"n\",\"s\"],[]],Il=ac.format=gc.timeFormat,Yl=Il.utc,Zl=Yl(\"%Y-%m-%dT%H:%M:%S.%LZ\");Il.iso=Date.prototype.toISOString&&+new Date(\"2000-01-01T00:00:00.000Z\")?Jo:Zl,Jo.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Jo.toString=Zl.toString,ac.second=Ft(function(n){return new cc(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),ac.seconds=ac.second.range,ac.seconds.utc=ac.second.utc.range,ac.minute=Ft(function(n){return new cc(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),ac.minutes=ac.minute.range,ac.minutes.utc=ac.minute.utc.range,ac.hour=Ft(function(n){var t=n.getTimezoneOffset()/60;return new cc(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),ac.hours=ac.hour.range,ac.hours.utc=ac.hour.utc.range,ac.month=Ft(function(n){return n=ac.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),ac.months=ac.month.range,ac.months.utc=ac.month.utc.range;var Vl=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Xl=[[ac.second,1],[ac.second,5],[ac.second,15],[ac.second,30],[ac.minute,1],[ac.minute,5],[ac.minute,15],[ac.minute,30],[ac.hour,1],[ac.hour,3],[ac.hour,6],[ac.hour,12],[ac.day,1],[ac.day,2],[ac.week,1],[ac.month,1],[ac.month,3],[ac.year,1]],$l=Il.multi([[\".%L\",function(n){return n.getMilliseconds()}],[\":%S\",function(n){return n.getSeconds()}],[\"%I:%M\",function(n){return n.getMinutes()}],[\"%I %p\",function(n){return n.getHours()}],[\"%a %d\",function(n){return n.getDay()&&1!=n.getDate()}],[\"%b %d\",function(n){return 1!=n.getDate()}],[\"%B\",function(n){return n.getMonth()}],[\"%Y\",Ne]]),Bl={range:function(n,t,e){return ta.range(Math.ceil(n/e)*e,+t,e).map(Ko)},floor:y,ceil:y};Xl.year=ac.year,ac.scale=function(){return Go(ta.scale.linear(),Xl,$l)};var Wl=Xl.map(function(n){return[n[0].utc,n[1]]}),Jl=Yl.multi([[\".%L\",function(n){return n.getUTCMilliseconds()}],[\":%S\",function(n){return n.getUTCSeconds()}],[\"%I:%M\",function(n){return n.getUTCMinutes()}],[\"%I %p\",function(n){return n.getUTCHours()}],[\"%a %d\",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],[\"%b %d\",function(n){return 1!=n.getUTCDate()}],[\"%B\",function(n){return n.getUTCMonth()}],[\"%Y\",Ne]]);Wl.year=ac.year.utc,ac.scale.utc=function(){return Go(ta.scale.linear(),Wl,Jl)},ta.text=At(function(n){return n.responseText}),ta.json=function(n,t){return Nt(n,\"application/json\",Qo,t)},ta.html=function(n,t){return Nt(n,\"text/html\",na,t)},ta.xml=At(function(n){return n.responseXML}),\"function\"==typeof define&&define.amd?define(ta):\"object\"==typeof module&&module.exports&&(module.exports=ta),this.d3=ta}();"

/***/ },
/* 72 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	/**
	 * Defines a Debug object. Calls to any functions in this object removed by the minifier.
	 * The functions within this class are not minified away, so we use the preprocessor-style
	 * comments to have the minifier remove those as well.
	 */
	///#DEBUG
	/// <reference path="./_references.ts"/>
	var debug;
	(function (debug) {
	    /**
	     * Asserts that the condition is true, fails otherwise.
	     */
	    function assert(condition, message) {
	        if (condition !== true) {
	            assertFail(message || ('condition: ' + condition));
	        }
	    }
	    debug.assert = assert;
	    /**
	     * Asserts that the value is neither null nor undefined, fails otherwise.
	     */
	    function assertValue(value, message) {
	        if (value === null || value === undefined) {
	            assertFail(message || ('condition: ' + value));
	        }
	    }
	    debug.assertValue = assertValue;
	    /**
	     * Asserts that the value is neither null nor undefined, and has a length property that returns greater than zero, fails otherwise.
	     */
	    function assertNonEmpty(value, message) {
	        if (!(value != null && value.length > 0)) {
	            assertFail(message || ('condition: ' + value));
	        }
	    }
	    debug.assertNonEmpty = assertNonEmpty;
	    /**
	     * Makes no assertion on the given value.
	     * This is documentation/placeholder that a value is possibly null or undefined (unlike assertValue).
	     */
	    function assertAnyValue(value, message) {
	    }
	    debug.assertAnyValue = assertAnyValue;
	    function assertFail(message) {
	        (debug.assertFailFunction || alert)('Debug Assert failed: ' + message);
	    }
	    debug.assertFail = assertFail;
	})(debug || (debug = {}));
	///#ENDDEBUG 

	

/***/ },
/* 73 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	/// <reference path="./_references.ts"/>
	var jsCommon;
	(function (jsCommon) {
	    var Errors;
	    (function (Errors) {
	        function infoNavAppAlreadyPresent() {
	            return {
	                name: 'infoNavAppAlreadyPresent',
	                message: 'Cannot initialize embedded scenario when the InfoNav App is already present in this context',
	                stack: getExceptionStackTrace()
	            };
	        }
	        Errors.infoNavAppAlreadyPresent = infoNavAppAlreadyPresent;
	        function invalidOperation(message) {
	            return {
	                name: 'invalidOperation',
	                message: message,
	                stack: getExceptionStackTrace()
	            };
	        }
	        Errors.invalidOperation = invalidOperation;
	        function argument(argumentName, message) {
	            return {
	                name: 'invalidArgumentError',
	                argument: argumentName,
	                message: message,
	                stack: getExceptionStackTrace()
	            };
	        }
	        Errors.argument = argument;
	        function argumentNull(argumentName) {
	            return {
	                name: 'argumentNull',
	                argument: argumentName,
	                message: 'Argument was null',
	                stack: getExceptionStackTrace()
	            };
	        }
	        Errors.argumentNull = argumentNull;
	        function argumentUndefined(argumentName) {
	            return {
	                name: 'argumentUndefined',
	                argument: argumentName,
	                message: 'Argument was undefined',
	                stack: getExceptionStackTrace()
	            };
	        }
	        Errors.argumentUndefined = argumentUndefined;
	        function argumentOutOfRange(argumentName) {
	            return {
	                name: 'argumentOutOfRange',
	                argument: argumentName,
	                message: 'Argument was out of range',
	                stack: getExceptionStackTrace()
	            };
	        }
	        Errors.argumentOutOfRange = argumentOutOfRange;
	        function pureVirtualMethodException(className, methodName) {
	            return {
	                name: 'pureVirtualMethodException',
	                message: 'This method must be overriden by the derived class:' + className + '.' + methodName,
	                stack: getExceptionStackTrace()
	            };
	        }
	        Errors.pureVirtualMethodException = pureVirtualMethodException;
	        function notImplementedException(message) {
	            return {
	                name: 'notImplementedException',
	                message: message,
	                stack: getExceptionStackTrace()
	            };
	        }
	        Errors.notImplementedException = notImplementedException;
	        function getExceptionStackTrace() {
	            return getStackTrace(/*leadingFramesToRemove*/ 2);
	        }
	    })(Errors = jsCommon.Errors || (jsCommon.Errors = {}));
	    /**
	     * Captures the stack trace, if available.
	     * It optionally takes the number of frames to remove from the stack trace.
	     * By default, it removes the last frame to consider the calling type's
	     * constructor and the temporary error used to capture the stack trace (below).
	     * More levels can be requested as needed e..g. when an error is created
	     * from a helper method. <Min requirement: IE10, Chrome, Firefox, Opera>.
	     */
	    function getStackTrace(leadingFramesToRemove) {
	        if (leadingFramesToRemove === void 0) { leadingFramesToRemove = 1; }
	        var stackTrace, stackSegments;
	        try {
	            // needs to throw for stack trace to work in IE
	            throw new Error();
	        }
	        catch (error) {
	            stackTrace = error.stack;
	            if (stackTrace != null) {
	                stackSegments = stackTrace.split('\n');
	                stackSegments.splice(1, leadingFramesToRemove);
	                // Finally
	                stackTrace = stackSegments.join('\n');
	            }
	        }
	        return stackTrace;
	    }
	    jsCommon.getStackTrace = getStackTrace;
	})(jsCommon || (jsCommon = {}));

	

/***/ },
/* 74 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	/// <reference path="./_references.ts"/>
	var jsCommon;
	(function (jsCommon) {
	    /**
	     * Represents a lazily instantiated value.
	     */
	    var Lazy = (function () {
	        function Lazy(factoryMethod) {
	            jsCommon.Utility.throwIfNullOrUndefined(factoryMethod, this, 'constructor', 'factoryMethod');
	            this.factoryMethod = factoryMethod;
	        }
	        Lazy.prototype.getValue = function () {
	            if (this.factoryMethod !== null) {
	                this.value = this.factoryMethod();
	                // Optimization: Release the factoryMethod, as it could be holding a large object graph.
	                this.factoryMethod = null;
	            }
	            return this.value;
	        };
	        return Lazy;
	    }());
	    jsCommon.Lazy = Lazy;
	})(jsCommon || (jsCommon = {}));

	

/***/ },
/* 75 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	/// <reference path="./_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var Prototype;
	    (function (Prototype) {
	        /**
	         * Returns a new object with the provided obj as its prototype.
	         */
	        function inherit(obj, extension) {
	            debug.assertValue(obj, 'obj');
	            function wrapCtor() { }
	            ;
	            wrapCtor.prototype = obj;
	            var inherited = new wrapCtor();
	            if (extension)
	                extension(inherited);
	            return inherited;
	        }
	        Prototype.inherit = inherit;
	        /**
	         * Returns a new object with the provided obj as its prototype
	         * if, and only if, the prototype has not been previously set
	         */
	        function inheritSingle(obj) {
	            debug.assertValue(obj, 'obj');
	            var proto = Object.getPrototypeOf(obj);
	            if (proto === Object.prototype || proto === Array.prototype)
	                obj = inherit(obj);
	            return obj;
	        }
	        Prototype.inheritSingle = inheritSingle;
	        /**
	         * Uses the provided callback function to selectively replace contents in the provided array.
	         * @return A new array with those values overriden
	         * or undefined if no overrides are necessary.
	         */
	        function overrideArray(prototype, override) {
	            if (!prototype)
	                return;
	            var overwritten;
	            for (var i = 0, len = prototype.length; i < len; i++) {
	                var value = override(prototype[i]);
	                if (value) {
	                    if (!overwritten)
	                        overwritten = inherit(prototype);
	                    overwritten[i] = value;
	                }
	            }
	            return overwritten;
	        }
	        Prototype.overrideArray = overrideArray;
	    })(Prototype = powerbi.Prototype || (powerbi.Prototype = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 76 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	/// <reference path="../_references.ts"/>
	var jsCommon;
	(function (jsCommon) {
	    /**
	     * Http Status code we are interested.
	     */
	    (function (HttpStatusCode) {
	        HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
	        HttpStatusCode[HttpStatusCode["BadRequest"] = 400] = "BadRequest";
	        HttpStatusCode[HttpStatusCode["Unauthorized"] = 401] = "Unauthorized";
	        HttpStatusCode[HttpStatusCode["Forbidden"] = 403] = "Forbidden";
	        HttpStatusCode[HttpStatusCode["RequestEntityTooLarge"] = 413] = "RequestEntityTooLarge";
	    })(jsCommon.HttpStatusCode || (jsCommon.HttpStatusCode = {}));
	    var HttpStatusCode = jsCommon.HttpStatusCode;
	    /**
	     * Other HTTP Constants.
	     */
	    var HttpConstants;
	    (function (HttpConstants) {
	        HttpConstants.ApplicationOctetStream = 'application/octet-stream';
	        HttpConstants.MultiPartFormData = 'multipart/form-data';
	    })(HttpConstants = jsCommon.HttpConstants || (jsCommon.HttpConstants = {}));
	    /**
	     * Extensions to String class.
	     */
	    var StringExtensions;
	    (function (StringExtensions) {
	        var HtmlTagRegex = new RegExp('[<>]', 'g');
	        function format() {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            var s = args[0];
	            if (isNullOrUndefinedOrWhiteSpaceString(s))
	                return s;
	            for (var i = 0; i < args.length - 1; i++) {
	                var reg = new RegExp("\\{" + i + "\\}", "gm");
	                s = s.replace(reg, args[i + 1]);
	            }
	            return s;
	        }
	        StringExtensions.format = format;
	        /**
	         * Compares two strings for equality, ignoring case.
	         */
	        function equalIgnoreCase(a, b) {
	            return StringExtensions.normalizeCase(a) === StringExtensions.normalizeCase(b);
	        }
	        StringExtensions.equalIgnoreCase = equalIgnoreCase;
	        function startsWithIgnoreCase(a, b) {
	            var normalizedSearchString = StringExtensions.normalizeCase(b);
	            return StringExtensions.normalizeCase(a).indexOf(normalizedSearchString) === 0;
	        }
	        StringExtensions.startsWithIgnoreCase = startsWithIgnoreCase;
	        function startsWith(a, b) {
	            return a.indexOf(b) === 0;
	        }
	        StringExtensions.startsWith = startsWith;
	        /** Determines whether a string contains a specified substring (by case-sensitive comparison). */
	        function contains(source, substring) {
	            if (source == null)
	                return false;
	            return source.indexOf(substring) !== -1;
	        }
	        StringExtensions.contains = contains;
	        /** Determines whether a string contains a specified substring (while ignoring case). */
	        function containsIgnoreCase(source, substring) {
	            if (source == null)
	                return false;
	            return contains(normalizeCase(source), normalizeCase(substring));
	        }
	        StringExtensions.containsIgnoreCase = containsIgnoreCase;
	        /**
	         * Normalizes case for a string.
	         * Used by equalIgnoreCase method.
	         */
	        function normalizeCase(value) {
	            Utility.throwIfNullOrUndefined(value, StringExtensions, 'normalizeCase', 'value');
	            return value.toUpperCase();
	        }
	        StringExtensions.normalizeCase = normalizeCase;
	        /**
	         * Is string null or empty or undefined?
	         * @return True if the value is null or undefined or empty string,
	         * otherwise false.
	         */
	        function isNullOrEmpty(value) {
	            return (value == null) || (value.length === 0);
	        }
	        StringExtensions.isNullOrEmpty = isNullOrEmpty;
	        /**
	         * Returns true if the string is null, undefined, empty, or only includes white spaces.
	         * @return True if the str is null, undefined, empty, or only includes white spaces,
	         * otherwise false.
	         */
	        function isNullOrUndefinedOrWhiteSpaceString(str) {
	            return StringExtensions.isNullOrEmpty(str) || StringExtensions.isNullOrEmpty(str.trim());
	        }
	        StringExtensions.isNullOrUndefinedOrWhiteSpaceString = isNullOrUndefinedOrWhiteSpaceString;
	        /**
	         * Returns a value indicating whether the str contains any whitespace.
	         */
	        function containsWhitespace(str) {
	            Utility.throwIfNullOrUndefined(str, this, 'containsWhitespace', 'str');
	            var expr = /\s/;
	            return expr.test(str);
	        }
	        StringExtensions.containsWhitespace = containsWhitespace;
	        /**
	         * Returns a value indicating whether the str is a whitespace string.
	         */
	        function isWhitespace(str) {
	            Utility.throwIfNullOrUndefined(str, this, 'isWhitespace', 'str');
	            return str.trim() === '';
	        }
	        StringExtensions.isWhitespace = isWhitespace;
	        /**
	         * Returns the string with any trailing whitespace from str removed.
	         */
	        function trimTrailingWhitespace(str) {
	            Utility.throwIfNullOrUndefined(str, this, 'trimTrailingWhitespace', 'str');
	            return str.replace(/\s+$/, '');
	        }
	        StringExtensions.trimTrailingWhitespace = trimTrailingWhitespace;
	        /**
	         * Returns the string with any leading and trailing whitespace from str removed.
	         */
	        function trimWhitespace(str) {
	            Utility.throwIfNullOrUndefined(str, this, 'trimWhitespace', 'str');
	            return str.replace(/^\s+/, '').replace(/\s+$/, '');
	        }
	        StringExtensions.trimWhitespace = trimWhitespace;
	        /**
	         * Returns length difference between the two provided strings.
	         */
	        function getLengthDifference(left, right) {
	            Utility.throwIfNullOrUndefined(left, this, 'getLengthDifference', 'left');
	            Utility.throwIfNullOrUndefined(right, this, 'getLengthDifference', 'right');
	            return Math.abs(left.length - right.length);
	        }
	        StringExtensions.getLengthDifference = getLengthDifference;
	        /**
	         * Repeat char or string several times.
	         * @param char The string to repeat.
	         * @param count How many times to repeat the string.
	         */
	        function repeat(char, count) {
	            var result = "";
	            for (var i = 0; i < count; i++) {
	                result += char;
	            }
	            return result;
	        }
	        StringExtensions.repeat = repeat;
	        /**
	         * Replace all the occurrences of the textToFind in the text with the textToReplace.
	         * @param text The original string.
	         * @param textToFind Text to find in the original string.
	         * @param textToReplace New text replacing the textToFind.
	         */
	        function replaceAll(text, textToFind, textToReplace) {
	            if (!textToFind)
	                return text;
	            var pattern = escapeStringForRegex(textToFind);
	            return text.replace(new RegExp(pattern, 'gi'), textToReplace);
	        }
	        StringExtensions.replaceAll = replaceAll;
	        function ensureUniqueNames(names) {
	            debug.assertValue(names, 'names');
	            var usedNames = {};
	            // Make sure we are giving fair chance for all columns to stay with their original name
	            // First we fill the used names map to contain all the original unique names from the list.
	            for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
	                var name_1 = names_1[_i];
	                usedNames[name_1] = false;
	            }
	            var uniqueNames = [];
	            // Now we go over all names and find a unique name for each
	            for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
	                var name_2 = names_2[_a];
	                var uniqueName = name_2;
	                // If the (original) column name is already taken lets try to find another name
	                if (usedNames[uniqueName]) {
	                    var counter = 0;
	                    // Find a name that is not already in the map
	                    while (usedNames[uniqueName] !== undefined) {
	                        uniqueName = name_2 + "." + (++counter);
	                    }
	                }
	                uniqueNames.push(uniqueName);
	                usedNames[uniqueName] = true;
	            }
	            return uniqueNames;
	        }
	        StringExtensions.ensureUniqueNames = ensureUniqueNames;
	        /**
	         * Returns a name that is not specified in the values.
	         */
	        function findUniqueName(usedNames, baseName) {
	            debug.assertValue(usedNames, 'usedNames');
	            debug.assertValue(baseName, 'baseName');
	            // Find a unique name
	            var i = 0, uniqueName = baseName;
	            while (usedNames[uniqueName]) {
	                uniqueName = baseName + (++i);
	            }
	            return uniqueName;
	        }
	        StringExtensions.findUniqueName = findUniqueName;
	        function constructCommaSeparatedList(list, resourceProvider, maxValue) {
	            if (!list || list.length === 0)
	                return '';
	            if (maxValue === null || maxValue === undefined)
	                maxValue = Number.MAX_VALUE;
	            var length = Math.min(maxValue, list.length);
	            var replacedList = [];
	            // Only need to replace user entries of {0} and {1} since we build the list in pairs.
	            for (var j = 0; j < 2; j++) {
	                var targetValue = '{' + j + '}';
	                var replaceValue = '_|_<' + j + '>_|_';
	                for (var i = 0; i < length; i++) {
	                    if (list[i].indexOf(targetValue) > -1) {
	                        list[i] = list[i].replace(targetValue, replaceValue);
	                        replacedList.push({ targetValue: targetValue, replaceValue: replaceValue });
	                    }
	                }
	            }
	            var commaSeparatedList = '';
	            for (var i = 0; i < length; i++) {
	                if (i === 0)
	                    commaSeparatedList = list[i];
	                else
	                    commaSeparatedList = StringExtensions.format(resourceProvider.get('FilterRestatement_Comma'), commaSeparatedList, list[i]);
	            }
	            for (var i = 0; i < replacedList.length; i++) {
	                commaSeparatedList = commaSeparatedList.replace(replacedList[i].replaceValue, replacedList[i].targetValue);
	            }
	            return commaSeparatedList;
	        }
	        StringExtensions.constructCommaSeparatedList = constructCommaSeparatedList;
	        function escapeStringForRegex(s) {
	            return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1');
	        }
	        StringExtensions.escapeStringForRegex = escapeStringForRegex;
	        /**
	         * Remove file name reserved characters <>:"/\|?* from input string.
	         */
	        function normalizeFileName(fileName) {
	            debug.assertValue(fileName, 'fileName');
	            return fileName.replace(/[\<\>\:"\/\\\|\?*]/g, '');
	        }
	        StringExtensions.normalizeFileName = normalizeFileName;
	        /**
	         * Similar to JSON.stringify, but strips away escape sequences so that the resulting
	         * string is human-readable (and parsable by JSON formatting/validating tools).
	         */
	        function stringifyAsPrettyJSON(object) {
	            //let specialCharacterRemover = (key: string, value: string) => value.replace(/[^\w\s]/gi, '');
	            return JSON.stringify(object /*, specialCharacterRemover*/);
	        }
	        StringExtensions.stringifyAsPrettyJSON = stringifyAsPrettyJSON;
	        /**
	         * Derive a CLS-compliant name from a specified string.  If no allowed characters are present, return a fallback string instead.
	         * TODO (6708134): this should have a fully Unicode-aware implementation
	         */
	        function deriveClsCompliantName(input, fallback) {
	            debug.assertValue(input, 'input');
	            var result = input.replace(/^[^A-Za-z]*/g, '').replace(/[ :\.\/\\\-\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000]/g, '_').replace(/[\W]/g, '');
	            return result.length > 0 ? result : fallback;
	        }
	        StringExtensions.deriveClsCompliantName = deriveClsCompliantName;
	        /** Performs cheap sanitization by stripping away HTML tag (<>) characters. */
	        function stripTagDelimiters(s) {
	            return s.replace(HtmlTagRegex, '');
	        }
	        StringExtensions.stripTagDelimiters = stripTagDelimiters;
	    })(StringExtensions = jsCommon.StringExtensions || (jsCommon.StringExtensions = {}));
	    /**
	     * The general utility class.
	     */
	    var Utility = (function () {
	        function Utility() {
	        }
	        /**
	         * Ensures the specified value is not null or undefined. Throws a relevent exception if it is.
	         * @param value The value to check.
	         * @param context The context from which the check originated.
	         * @param methodName The name of the method that initiated the check.
	         * @param parameterName The parameter name of the value to check.
	         */
	        Utility.throwIfNullOrUndefined = function (value, context, methodName, parameterName) {
	            if (value === null) {
	                Utility.throwException(jsCommon.Errors.argumentNull(Utility.getComponentName(context) + methodName + '.' + parameterName));
	            }
	            else if (typeof (value) === Utility.Undefined) {
	                Utility.throwException(jsCommon.Errors.argumentUndefined(Utility.getComponentName(context) + methodName + '.' + parameterName));
	            }
	        };
	        /**
	         * Ensures the specified value is not null, undefined or empty. Throws a relevent exception if it is.
	         * @param value The value to check.
	         * @param context The context from which the check originated.
	         * @param methodName The name of the method that initiated the check.
	         * @param parameterName The parameter name of the value to check.
	         */
	        Utility.throwIfNullOrEmpty = function (value, context, methodName, parameterName) {
	            Utility.throwIfNullOrUndefined(value, context, methodName, parameterName);
	            if (!value.length) {
	                Utility.throwException(jsCommon.Errors.argumentOutOfRange(Utility.getComponentName(context) + methodName + '.' + parameterName));
	            }
	        };
	        /**
	         * Ensures the specified string is not null, undefined or empty. Throws a relevent exception if it is.
	         * @param value The value to check.
	         * @param context The context from which the check originated.
	         * @param methodName The name of the method that initiated the check.
	         * @param parameterName The parameter name of the value to check.
	         */
	        Utility.throwIfNullOrEmptyString = function (value, context, methodName, parameterName) {
	            Utility.throwIfNullOrUndefined(value, context, methodName, parameterName);
	            if (value.length < 1) {
	                Utility.throwException(jsCommon.Errors.argumentOutOfRange(Utility.getComponentName(context) + methodName + '.' + parameterName));
	            }
	        };
	        /**
	         * Ensures the specified value is not null, undefined, whitespace or empty. Throws a relevent exception if it is.
	         * @param value The value to check.
	         * @param context The context from which the check originated.
	         * @param methodName The name of the method that initiated the check.
	         * @param parameterName The parameter name of the value to check.
	         */
	        Utility.throwIfNullEmptyOrWhitespaceString = function (value, context, methodName, parameterName) {
	            Utility.throwIfNullOrUndefined(value, context, methodName, parameterName);
	            if (StringExtensions.isNullOrUndefinedOrWhiteSpaceString(value)) {
	                Utility.throwException(jsCommon.Errors.argumentOutOfRange(Utility.getComponentName(context) + methodName + '.' + parameterName));
	            }
	        };
	        /**
	         * Ensures the specified condition is true. Throws relevant exception if it isn't.
	         * @param condition The condition to check.
	         * @param context The context from which the check originated.
	         * @param methodName The name of the method that initiated the check.
	         * @param parameterName The parameter name against which the condition is checked.
	         */
	        Utility.throwIfNotTrue = function (condition, context, methodName, parameterName) {
	            if (!condition) {
	                Utility.throwException(jsCommon.Errors.argument(parameterName, Utility.getComponentName(context) + methodName + '.' + parameterName));
	            }
	        };
	        /**
	         * Checks whether the provided value is a 'string'.
	         * @param value The value to test.
	         */
	        Utility.isString = function (value) {
	            return ((typeof value) === 'string');
	        };
	        /**
	         * Checks whether the provided value is a 'boolean'.
	         * @param value The value to test.
	         */
	        Utility.isBoolean = function (value) {
	            return ((typeof value) === 'boolean');
	        };
	        /**
	         * Checks whether the provided value is a 'number'.
	         * @param value The value to test.
	         */
	        Utility.isNumber = function (value) {
	            return ((typeof value) === 'number');
	        };
	        /**
	         * Checks whether the provided value is a Date instance.
	         * @param value The value to test.
	         */
	        Utility.isDate = function (value) {
	            return Utility.isObject(value) && (value instanceof Date);
	        };
	        /**
	         * Checks whether the provided value is an 'object'.
	         * @param value The value to test.
	         */
	        Utility.isObject = function (value) {
	            return (value != null) && ((typeof value) === 'object');
	        };
	        /**
	         * Checks whether the provided value is null or undefined.
	         * @param value The value to test.
	         */
	        Utility.isNullOrUndefined = function (value) {
	            return (value === null) || (typeof (value) === Utility.Undefined);
	        };
	        /**
	         * Combine a base url and a path.
	         * @param baseUrl The base url.
	         * @param path The path to add on to the base url.
	         * @returns The combined url.
	         */
	        Utility.urlCombine = function (baseUrl, path) {
	            Utility.throwIfNullOrUndefined(baseUrl, null, "urlCombine", "baseUrl");
	            Utility.throwIfNullOrUndefined(path, null, "urlCombine", "path");
	            // should any of the components be empty, fail gracefuly - this is important when using the test page
	            if (StringExtensions.isNullOrUndefinedOrWhiteSpaceString(path)) {
	                return baseUrl;
	            }
	            if (StringExtensions.isNullOrUndefinedOrWhiteSpaceString(baseUrl)) {
	                return path;
	            }
	            var finalUrl = baseUrl;
	            if (finalUrl.charAt(finalUrl.length - 1) === '/') {
	                if (path.charAt(0) === '/')
	                    path = path.slice(1);
	            }
	            else {
	                if (path.charAt(0) !== '/')
	                    path = '/' + path;
	            }
	            return finalUrl + path;
	        };
	        Utility.getAbsoluteUri = function (path) {
	            Utility.throwIfNullOrUndefined(path, null, "getAbsoluteUri", "path");
	            var url = path;
	            // Make absolute
	            if (url && url.indexOf('http') === -1) {
	                url = Utility.urlCombine(clusterUri, url);
	            }
	            return url;
	        };
	        Utility.getStaticResourceUri = function (path) {
	            Utility.throwIfNullOrUndefined(path, null, "getStaticResourceUri", "path");
	            var url = path;
	            // Make absolute
	            if (url && url.indexOf('http') === -1) {
	                url = jsCommon.Utility.urlCombine(Utility.staticContentLocation, url);
	            }
	            return url;
	        };
	        Utility.getComponentName = function (context) {
	            return !context ? '' : (typeof context).toString() + '.';
	        };
	        Utility.throwException = function (e) {
	            jsCommon.Trace.error(StringExtensions.format("Throwing exception: {0}", JSON.stringify(e)), 
	            /*includeStackTrace*/ e.stack != null ? false : true);
	            throw e;
	        };
	        Utility.createClassSelector = function (className) {
	            Utility.throwIfNullOrEmptyString(className, null, 'CreateClassSelector', 'className');
	            return '.' + className;
	        };
	        Utility.createIdSelector = function (id) {
	            Utility.throwIfNullOrEmptyString(id, null, 'CreateIdSelector', 'id');
	            return '#' + id;
	        };
	        /**
	         * Creates a client-side Guid string.
	         * @returns A string representation of a Guid.
	         */
	        Utility.generateGuid = function () {
	            var guid = "", idx = 0;
	            for (idx = 0; idx < 32; idx += 1) {
	                var guidDigitsItem = Math.random() * 16 | 0;
	                switch (idx) {
	                    case 8:
	                    case 12:
	                    case 16:
	                    case 20:
	                        guid += "-";
	                        break;
	                }
	                guid += guidDigitsItem.toString(16);
	            }
	            return guid;
	        };
	        /**
	         * Try extract a cookie from {@link document.cookie} identified by key.
	         */
	        Utility.getCookieValue = function (key) {
	            // the cookie is of the format <key1=value1>; <key2=value2>. Split by ';', then by '=' 
	            // to search for the key
	            var keyValuePairs = document.cookie.split(';');
	            for (var i = 0; i < keyValuePairs.length; i++) {
	                var keyValue = keyValuePairs[i];
	                var split = keyValue.split('=');
	                if (split.length > 0 && split[0].trim() === key) {
	                    return keyValue.substr(keyValue.indexOf('=') + 1);
	                }
	            }
	            return null;
	        };
	        /**
	         * Extracts the protocol://hostname section of a url.
	         * @param url The URL from which to extract the section.
	         * @returns The protocol://hostname portion of the given URL.
	         */
	        Utility.getDomainForUrl = function (url) {
	            var hrefObject = Utility.getHrefObjectFromUrl(url);
	            return hrefObject.prop('protocol') + '//' + hrefObject.prop('hostname');
	        };
	        /**
	         * Extracts the hostname and absolute path sections of a url.
	         * @param url The URL from which to extract the section.
	         * @returns The hostname and absolute path portion of the given URL.
	         */
	        Utility.getHostNameForUrl = function (url) {
	            var hrefObject = Utility.getHrefObjectFromUrl(url);
	            return Utility.urlCombine(hrefObject.prop('hostname'), hrefObject.prop('pathname'));
	        };
	        /**
	         * Return the original url with query string stripped.
	         * @param url The URL from which to extract the section.
	         * @returns the original url with query string stripped.
	         */
	        Utility.getUrlWithoutQueryString = function (url) {
	            var hrefObject = Utility.getHrefObjectFromUrl(url);
	            return hrefObject.prop('protocol') + '//' + Utility.urlCombine(hrefObject.prop('host'), hrefObject.prop('pathname'));
	        };
	        /**
	         * Extracts the protocol section of a url.
	         * @param url The URL from which to extract the section.
	         * @returns The protocol for the current URL.
	         */
	        Utility.getProtocolFromUrl = function (url) {
	            return Utility.getHrefObjectFromUrl(url).prop('protocol').replace(':', '');
	        };
	        /**
	         * Returns a formatted href object from a URL.
	         * @param url The URL used to generate the object.
	         * @returns A jQuery object with the url.
	         */
	        Utility.getHrefObjectFromUrl = function (url) {
	            var aObject = $('<a>');
	            aObject = aObject.prop('href', url);
	            return aObject;
	        };
	        /**
	         * Converts a WCF representation of a dictionary to a JavaScript dictionary.
	         * @param wcfDictionary The WCF dictionary to convert.
	         * @returns The native JavaScript representation of this dictionary.
	         */
	        Utility.convertWcfToJsDictionary = function (wcfDictionary) {
	            // convert the WCF JSON representation of a dictionary
	            // to JS dictionary.
	            // WCF representation: [{"Key": Key, "Value": Value}..]
	            // JS representation: [Key: Value ..]
	            var result = {};
	            for (var i = 0; i < wcfDictionary.length; i++) {
	                var keyValuePair = wcfDictionary[i];
	                result[keyValuePair['Key']] = keyValuePair['Value'];
	            }
	            return result;
	        };
	        Utility.getDateFromWcfJsonString = function (jsonDate, fromUtcMilliseconds) {
	            if (StringExtensions.isNullOrEmpty(jsonDate)) {
	                return null;
	            }
	            var begIndex = jsonDate.indexOf('(');
	            var endIndex = jsonDate.indexOf(')');
	            if (begIndex !== -1 && endIndex !== -1) {
	                var milliseconds = parseInt(jsonDate.substring(begIndex + 1, endIndex), 10);
	                if (fromUtcMilliseconds) {
	                    return new Date(milliseconds);
	                }
	                else {
	                    var retValue = new Date(0);
	                    retValue.setUTCMilliseconds(milliseconds);
	                    return retValue;
	                }
	            }
	            return null;
	        };
	        /**
	         * Get the outer html of the given jquery object.
	         * @param content The jquery object.
	         * @returns The entire html representation of the object.
	         */
	        Utility.getOuterHtml = function (content) {
	            return $('<div>').append(content).html();
	        };
	        /**
	         * Comparison Method: Compares two integer numbers.
	         * @param a An integer value.
	         * @param b An integer value.
	         * @returns The comparison result.
	         */
	        Utility.compareInt = function (a, b) {
	            return a - b;
	        };
	        /**
	         * Return the index of the smallest value in a numerical array.
	         * @param a A numeric array.
	         * @returns The index of the smallest value in the array.
	         */
	        Utility.getIndexOfMinValue = function (a) {
	            var retValue = 0;
	            var currentMinValue = a[0];
	            for (var i = 0; i < a.length; i++) {
	                if (a[i] < currentMinValue) {
	                    currentMinValue = a[i];
	                    retValue = i;
	                }
	            }
	            return retValue;
	        };
	        /**
	         * Extracts a url from a background image attribute in the format of: url('www.foobar.com/image.png').
	         * @param input The value of the background-image attribute.
	         * @returns The extracted url.
	         */
	        Utility.extractUrlFromCssBackgroundImage = function (input) {
	            return input.replace(/"/g, "").replace(/url\(|\)$/ig, "");
	        };
	        /**
	         * Verifies image data url of images.
	         */
	        Utility.isValidImageDataUrl = function (url) {
	            var regex = new RegExp('data:(image\/(png|jpg|jpeg|gif|svg))');
	            return regex.test(url);
	        };
	        Utility.isLocalUrl = function (url) {
	            return _.startsWith(url, "data:") || _.startsWith(url, "blob:");
	        };
	        /**
	         * Downloads a content string as a file.
	         * @param content Content stream.
	         * @param fileName File name to use.
	         */
	        Utility.saveAsFile = function (content, fileName) {
	            var contentBlob = new Blob([content], { type: HttpConstants.ApplicationOctetStream });
	            var url = window['webkitURL'] || URL;
	            var urlLink = url.createObjectURL(contentBlob);
	            var fileNameLink = fileName || urlLink;
	            // IE support, use msSaveOrOpenBlob API
	            if (window.navigator.msSaveOrOpenBlob) {
	                window.navigator.msSaveOrOpenBlob(contentBlob, fileNameLink);
	                return;
	            }
	            // WebKit-based browser support requires generating an anchor tag with
	            // download attribute set to blob store and triggering a click event to invoke 
	            // a download to file action
	            var hyperlink = document.createElement('a');
	            hyperlink.href = urlLink;
	            hyperlink.target = '_blank';
	            hyperlink['download'] = fileNameLink;
	            document.body.appendChild(hyperlink);
	            hyperlink.click();
	            document.body.removeChild(hyperlink);
	        };
	        /**
	         * Helper method to get the simple type name from a typed object.
	         * @param obj The typed object.
	         * @returns The simple type name for the object.
	         */
	        Utility.getType = function (obj) {
	            Utility.throwIfNullEmptyOrWhitespaceString(obj.__type, this, 'getType', 'obj');
	            var parts = obj.__type.split(":");
	            if (parts.length !== 2) {
	                jsCommon.Errors.argument("obj.__type", "Type String not in expected format [Type]#[Namespace]: " + obj.__type);
	            }
	            if (parts[1] !== Utility.TypeNamespace) {
	                jsCommon.Errors.argument("obj.__type", "Type Namespace not expected: " + parts[1]);
	            }
	            return parts[0];
	        };
	        /**
	         * Check if an element supports a specific event type.
	         * @param eventName The name of the event.
	         * @param element The element to test for event support.
	         * @returns Whether the even is supported on the provided element.
	         */
	        Utility.isEventSupported = function (eventName, element) {
	            eventName = 'on' + eventName;
	            var isSupported = (eventName in element);
	            if (!isSupported) {
	                // if we can't use setAttribute try a generic element
	                if (!element.setAttribute) {
	                    element = document.createElement('div');
	                }
	                if (element.setAttribute && element.removeAttribute) {
	                    element.setAttribute(eventName, '');
	                    isSupported = typeof element[eventName] === 'function';
	                    // if the property was created - remove it
	                    if (typeof element[eventName] !== 'undefined') {
	                        element[eventName] = null;
	                    }
	                    element.removeAttribute(eventName);
	                }
	            }
	            element = null;
	            return isSupported;
	        };
	        Utility.toPixel = function (pixelAmount) {
	            Utility.throwIfNullOrUndefined(pixelAmount, this, "toPixel", "pixelAmount");
	            return pixelAmount.toString() + jsCommon.CssConstants.pixelUnits;
	        };
	        Utility.getPropertyCount = function (object) {
	            Utility.throwIfNullOrUndefined(object, this, "getPropertyCount", "object");
	            return Object.getOwnPropertyNames(object).length;
	        };
	        /**
	         * Check if an element supports a specific event type.
	         * @param filePath File path.
	         * @returns File extension.
	         */
	        Utility.getFileExtension = function (filePath) {
	            if (filePath) {
	                var index = filePath.lastIndexOf('.');
	                if (index >= 0)
	                    return filePath.substr(index + 1);
	            }
	            return '';
	        };
	        /**
	         * Extract the filename out of a full path delimited by '\' or '/'.
	         * @param filePath File path.
	         * @returns filename File name.
	         */
	        Utility.extractFileNameFromPath = function (filePath) {
	            return filePath.replace(/^.*[\\\/]/, '');
	        };
	        /**
	         * This method indicates whether window.clipboardData is supported.
	         * For example, clipboard support for Windows Store apps is currently disabled
	         * since window.clipboardData is unsupported (it raises access denied error)
	         * since clipboard in Windows Store is being
	         * achieved through Windows.ApplicationModel.DataTransfer.Clipboard class.
	         */
	        Utility.canUseClipboard = function () {
	            return (typeof MSApp === "undefined");
	        };
	        Utility.is64BitOperatingSystem = function () {
	            return navigator.userAgent.indexOf("WOW64") !== -1 ||
	                navigator.userAgent.indexOf("Win64") !== -1;
	        };
	        Utility.parseNumber = function (value, defaultValue) {
	            if (value === null)
	                return null;
	            if (value === undefined)
	                return defaultValue;
	            var result = Number(value);
	            if (isFinite(result))
	                return result;
	            if (isNaN(result) && !(typeof value === "number" || value === "NaN"))
	                return defaultValue;
	            return result;
	        };
	        Utility.getURLParamValue = function (name) {
	            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	            if (results == null) {
	                return null;
	            }
	            else {
	                return results[1] || 0;
	            }
	        };
	        /**
	         * Return local timezone.
	         * This function uses summer and winter offset to determine local time zone.
	         * The result localTimeZoneString must be a subset of the strings used by server,
	         * as documented here: https://msdn.microsoft.com/en-us/library/gg154758.aspx (Dynamic Daylight Savings Time (Compact 2013)).
	         * @return Local timezone string or UTC if timezone cannot be found.
	         */
	        Utility.getLocalTimeZoneString = function () {
	            var timeSummer = new Date(Date.UTC(2005, 6, 30, 0, 0, 0, 0));
	            var summerOffset = -1 * timeSummer.getTimezoneOffset();
	            var timeWinter = new Date(Date.UTC(2005, 12, 30, 0, 0, 0, 0));
	            var winterOffset = -1 * timeWinter.getTimezoneOffset();
	            var localTimeZoneString;
	            if (-720 === summerOffset && -720 === winterOffset) {
	                localTimeZoneString = 'Dateline Standard Time';
	            }
	            else if (-660 === summerOffset && -660 === winterOffset) {
	                localTimeZoneString = 'UTC-11';
	            }
	            else if (-660 === summerOffset && -660 === winterOffset) {
	                localTimeZoneString = 'Samoa Standard Time';
	            }
	            else if (-600 === summerOffset && -600 === winterOffset) {
	                localTimeZoneString = 'Hawaiian Standard Time';
	            }
	            else if (-480 === summerOffset && -540 === winterOffset) {
	                localTimeZoneString = 'Alaskan Standard Time';
	            }
	            else if (-420 === summerOffset && -480 === winterOffset) {
	                localTimeZoneString = 'Pacific Standard Time';
	            }
	            else if (-420 === summerOffset && -420 === winterOffset) {
	                localTimeZoneString = 'US Mountain Standard Time';
	            }
	            else if (-360 === summerOffset && -420 === winterOffset) {
	                localTimeZoneString = 'Mountain Standard Time';
	            }
	            else if (-360 === summerOffset && -360 === winterOffset) {
	                localTimeZoneString = 'Central America Standard Time';
	            }
	            else if (-300 === summerOffset && -360 === winterOffset) {
	                localTimeZoneString = 'Central Standard Time';
	            }
	            else if (-300 === summerOffset && -300 === winterOffset) {
	                localTimeZoneString = 'SA Pacific Standard Time';
	            }
	            else if (-240 === summerOffset && -300 === winterOffset) {
	                localTimeZoneString = 'Eastern Standard Time';
	            }
	            else if (-270 === summerOffset && -270 === winterOffset) {
	                localTimeZoneString = 'Venezuela Standard Time';
	            }
	            else if (-240 === summerOffset && -240 === winterOffset) {
	                localTimeZoneString = 'SA Western Standard Time';
	            }
	            else if (-240 === summerOffset && -180 === winterOffset) {
	                localTimeZoneString = 'Central Brazilian Standard Time';
	            }
	            else if (-180 === summerOffset && -240 === winterOffset) {
	                localTimeZoneString = 'Atlantic Standard Time';
	            }
	            else if (-180 === summerOffset && -180 === winterOffset) {
	                localTimeZoneString = 'Montevideo Standard Time';
	            }
	            else if (-180 === summerOffset && -120 === winterOffset) {
	                localTimeZoneString = 'E. South America Standard Time';
	            }
	            else if (-150 === summerOffset && -210 === winterOffset) {
	                localTimeZoneString = 'Mid-Atlantic Standard Time';
	            }
	            else if (-120 === summerOffset && -120 === winterOffset) {
	                localTimeZoneString = 'SA Eastern Standard Time';
	            }
	            else if (0 === summerOffset && 0 === winterOffset) {
	                localTimeZoneString = 'UTC';
	            }
	            else if (60 === summerOffset && 0 === winterOffset) {
	                localTimeZoneString = 'GMT Standard Time';
	            }
	            else if (60 === summerOffset && 120 === winterOffset) {
	                localTimeZoneString = 'Namibia Standard Time';
	            }
	            else if (120 === summerOffset && 60 === winterOffset) {
	                localTimeZoneString = 'Romance Standard Time';
	            }
	            else if (120 === summerOffset && 120 === winterOffset) {
	                localTimeZoneString = 'South Africa Standard Time';
	            }
	            else if (180 === summerOffset && 120 === winterOffset) {
	                localTimeZoneString = 'GTB Standard Time';
	            }
	            else if (180 === summerOffset && 180 === winterOffset) {
	                localTimeZoneString = 'E. Africa Standard Time';
	            }
	            else if (240 === summerOffset && 180 === winterOffset) {
	                localTimeZoneString = 'Russian Standard Time';
	            }
	            else if (240 === summerOffset && 240 === winterOffset) {
	                localTimeZoneString = 'Arabian Standard Time';
	            }
	            else if (270 === summerOffset && 210 === winterOffset) {
	                localTimeZoneString = 'Iran Standard Time';
	            }
	            else if (270 === summerOffset && 270 === winterOffset) {
	                localTimeZoneString = 'Afghanistan Standard Time';
	            }
	            else if (300 === summerOffset && 240 === winterOffset) {
	                localTimeZoneString = 'Pakistan Standard Time';
	            }
	            else if (300 === summerOffset && 300 === winterOffset) {
	                localTimeZoneString = 'West Asia Standard Time';
	            }
	            else if (330 === summerOffset && 330 === winterOffset) {
	                localTimeZoneString = 'India Standard Time';
	            }
	            else if (345 === summerOffset && 345 === winterOffset) {
	                localTimeZoneString = 'Nepal Standard Time';
	            }
	            else if (360 === summerOffset && 300 === winterOffset) {
	                localTimeZoneString = 'N. Central Asia Standard Time';
	            }
	            else if (360 === summerOffset && 360 === winterOffset) {
	                localTimeZoneString = 'Central Asia Standard Time';
	            }
	            else if (390 === summerOffset && 390 === winterOffset) {
	                localTimeZoneString = 'Myanmar Standard Time';
	            }
	            else if (420 === summerOffset && 360 === winterOffset) {
	                localTimeZoneString = 'North Asia Standard Time';
	            }
	            else if (420 === summerOffset && 420 === winterOffset) {
	                localTimeZoneString = 'SE Asia Standard Time';
	            }
	            else if (480 === summerOffset && 420 === winterOffset) {
	                localTimeZoneString = 'North Asia East Standard Time';
	            }
	            else if (480 === summerOffset && 480 === winterOffset) {
	                localTimeZoneString = 'China Standard Time';
	            }
	            else if (540 === summerOffset && 480 === winterOffset) {
	                localTimeZoneString = 'Yakutsk Standard Time';
	            }
	            else if (540 === summerOffset && 540 === winterOffset) {
	                localTimeZoneString = 'Tokyo Standard Time';
	            }
	            else if (570 === summerOffset && 570 === winterOffset) {
	                localTimeZoneString = 'Cen. Australia Standard Time';
	            }
	            else if (600 === summerOffset && 600 === winterOffset) {
	                localTimeZoneString = 'E. Australia Standard Time';
	            }
	            else if (600 === summerOffset && 660 === winterOffset) {
	                localTimeZoneString = 'AUS Eastern Standard Time';
	            }
	            else if (660 === summerOffset && 600 === winterOffset) {
	                localTimeZoneString = 'Tasmania Standard Time';
	            }
	            else if (660 === summerOffset && 660 === winterOffset) {
	                localTimeZoneString = 'West Pacific Standard Time';
	            }
	            else if (690 === summerOffset && 690 === winterOffset) {
	                localTimeZoneString = 'Central Pacific Standard Time';
	            }
	            else if (720 === summerOffset && 660 === winterOffset) {
	                localTimeZoneString = 'Magadan Standard Time';
	            }
	            else if (720 === summerOffset && 720 === winterOffset) {
	                localTimeZoneString = 'Fiji Standard Time';
	            }
	            else if (720 === summerOffset && 780 === winterOffset) {
	                localTimeZoneString = 'New Zealand Standard Time';
	            }
	            else if (780 === summerOffset && 780 === winterOffset) {
	                localTimeZoneString = 'Tonga Standard Time';
	            }
	            else {
	                localTimeZoneString = 'UTC';
	            }
	            return localTimeZoneString;
	        };
	        Utility.TypeNamespace = 'http://schemas.microsoft.com/sqlbi/2013/01/NLRuntimeService';
	        Utility.JsonContentType = 'application/json';
	        Utility.JpegContentType = 'image/jpeg';
	        Utility.XJavascriptContentType = 'application/x-javascript';
	        Utility.JsonDataType = 'json';
	        Utility.BlobDataType = 'blob';
	        Utility.HttpGetMethod = 'GET';
	        Utility.HttpPostMethod = 'POST';
	        Utility.HttpPutMethod = 'PUT';
	        Utility.HttpDeleteMethod = 'DELETE';
	        Utility.HttpContentTypeHeader = 'Content-Type';
	        Utility.HttpAcceptHeader = 'Accept';
	        Utility.Undefined = 'undefined';
	        Utility.staticContentLocation = window.location.protocol + '//' + window.location.host;
	        return Utility;
	    }());
	    jsCommon.Utility = Utility;
	    var VersionUtility = (function () {
	        function VersionUtility() {
	        }
	        /**
	         * Compares 2 version strings.
	         * @param versionA The first version string.
	         * @param versionB The second version string.
	         * @returns A result for the comparison.
	         */
	        VersionUtility.compareVersions = function (versionA, versionB) {
	            var a = versionA.split('.').map(parseFloat);
	            var b = versionB.split('.').map(parseFloat);
	            var versionParts = Math.max(a.length, b.length);
	            for (var i = 0; i < versionParts; i++) {
	                var partA = a[i] || 0;
	                var partB = b[i] || 0;
	                if (partA > partB)
	                    return 1;
	                if (partA < partB)
	                    return -1;
	            }
	            return 0;
	        };
	        return VersionUtility;
	    }());
	    jsCommon.VersionUtility = VersionUtility;
	    var PerformanceUtil;
	    (function (PerformanceUtil) {
	        var PerfMarker = (function () {
	            function PerfMarker(name) {
	                this._name = name;
	                this._start = PerfMarker.begin(name);
	            }
	            PerfMarker.begin = function (name) {
	                if (window.performance === undefined || performance.mark === undefined)
	                    return;
	                if (console.time) {
	                    console.time(name);
	                }
	                name = 'Begin ' + name;
	                performance.mark(name);
	                return name;
	            };
	            PerfMarker.prototype.end = function () {
	                if (window.performance === undefined || performance.mark === undefined || performance.measure === undefined)
	                    return;
	                var name = this._name;
	                var end = 'End ' + name;
	                performance.mark(end);
	                performance.measure(name, this._start, end);
	                if (console.timeEnd) {
	                    console.timeEnd(name);
	                }
	            };
	            return PerfMarker;
	        }());
	        PerformanceUtil.PerfMarker = PerfMarker;
	        function create(name) {
	            return new PerfMarker(name);
	        }
	        PerformanceUtil.create = create;
	    })(PerformanceUtil = jsCommon.PerformanceUtil || (jsCommon.PerformanceUtil = {}));
	    var DeferUtility;
	    (function (DeferUtility) {
	        /**
	         * Wraps a callback and returns a new function.
	         * The function can be called many times but the callback
	         * will only be executed once on the next frame.
	         * Use this to throttle big UI updates and access to DOM.
	         */
	        function deferUntilNextFrame(callback) {
	            var isWaiting, args, context;
	            if (!window.requestAnimationFrame) {
	                window.requestAnimationFrame = function (func) { return setTimeout(func, 1000 / 50); };
	            }
	            return function () {
	                if (!isWaiting) {
	                    isWaiting = true;
	                    args = arguments;
	                    context = this;
	                    window.requestAnimationFrame(function () {
	                        isWaiting = false;
	                        callback.apply(context, args);
	                    });
	                }
	            };
	        }
	        DeferUtility.deferUntilNextFrame = deferUntilNextFrame;
	    })(DeferUtility = jsCommon.DeferUtility || (jsCommon.DeferUtility = {}));
	})(jsCommon || (jsCommon = {}));

	

/***/ },
/* 77 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	/// <reference path="../_references.ts"/>
	var jsCommon;
	(function (jsCommon) {
	    var TraceItem = (function () {
	        function TraceItem(text, type, sessionId, requestId) {
	            this.text = text;
	            this.type = type;
	            this.sessionId = sessionId;
	            this.requestId = requestId;
	            this.timeStamp = new Date();
	        }
	        TraceItem.prototype.toString = function () {
	            var resultString = '';
	            resultString += (jsCommon.StringExtensions.format('{0} ({1}): {2}', TraceItem.traceTypeStrings[this.type], this.timeStamp.toUTCString(), this.text));
	            if (this.requestId)
	                resultString += ('\n(Request id: ' + this.requestId + ')');
	            return resultString;
	        };
	        TraceItem.traceTypeStrings = [
	            'INFORMATION',
	            'VERBOSE',
	            'WARNING',
	            'ERROR',
	            'EXPECTEDERROR',
	            'UNEXPECTEDERROR',
	            'FATAL',
	        ];
	        return TraceItem;
	    }());
	    jsCommon.TraceItem = TraceItem;
	})(jsCommon || (jsCommon = {}));

	

/***/ },
/* 78 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	/// <reference path="../_references.ts"/>
	var jsCommon;
	(function (jsCommon) {
	    /**
	     * Extensions for Enumerations.
	     */
	    var EnumExtensions;
	    (function (EnumExtensions) {
	        /**
	         * Gets a value indicating whether the value has the bit flags set.
	         */
	        function hasFlag(value, flag) {
	            debug.assert(!!flag, 'flag must be specified and nonzero.');
	            return (value & flag) === flag;
	        }
	        EnumExtensions.hasFlag = hasFlag;
	        /**
	         * Sets a value of a flag without modifying any other flags.
	         */
	        function setFlag(value, flag) {
	            debug.assert(!!flag, "flag must be specified and nonzero.");
	            return value |= flag;
	        }
	        EnumExtensions.setFlag = setFlag;
	        /**
	         * Resets a value of a flag without modifying any other flags.
	         */
	        function resetFlag(value, flag) {
	            debug.assert(!!flag, "flag must be specified and nonzero.");
	            return value &= ~flag;
	        }
	        EnumExtensions.resetFlag = resetFlag;
	        /**
	         * According to the TypeScript Handbook, this is safe to do.
	         */
	        function toString(enumType, value) {
	            return enumType[value];
	        }
	        EnumExtensions.toString = toString;
	    })(EnumExtensions = jsCommon.EnumExtensions || (jsCommon.EnumExtensions = {}));
	    /**
	     * Extensions to String class.
	     */
	    var StringExtensions;
	    (function (StringExtensions) {
	        /**
	         * Checks if a string ends with a sub-string.
	         */
	        function endsWith(str, suffix) {
	            debug.assertValue(str, 'str');
	            debug.assertValue(suffix, 'suffix');
	            return str.indexOf(suffix, str.length - suffix.length) !== -1;
	        }
	        StringExtensions.endsWith = endsWith;
	    })(StringExtensions = jsCommon.StringExtensions || (jsCommon.StringExtensions = {}));
	    var LogicExtensions;
	    (function (LogicExtensions) {
	        function XOR(a, b) {
	            return (a || b) && !(a && b);
	        }
	        LogicExtensions.XOR = XOR;
	    })(LogicExtensions = jsCommon.LogicExtensions || (jsCommon.LogicExtensions = {}));
	    var JsonComparer;
	    (function (JsonComparer) {
	        /**
	         * Performs JSON-style comparison of two objects.
	         */
	        function equals(x, y) {
	            if (x === y)
	                return true;
	            return JSON.stringify(x) === JSON.stringify(y);
	        }
	        JsonComparer.equals = equals;
	    })(JsonComparer = jsCommon.JsonComparer || (jsCommon.JsonComparer = {}));
	    /**
	     * Values are in terms of 'pt'
	     * Convert to pixels using PixelConverter.fromPoint
	     */
	    var TextSizeDefaults;
	    (function (TextSizeDefaults) {
	        /**
	         * Stored in terms of 'pt'
	         * Convert to pixels using PixelConverter.fromPoint
	         */
	        TextSizeDefaults.TextSizeMin = 8;
	        /**
	         * Stored in terms of 'pt'
	         * Convert to pixels using PixelConverter.fromPoint
	         */
	        TextSizeDefaults.TextSizeMax = 40;
	        var TextSizeRange = TextSizeDefaults.TextSizeMax - TextSizeDefaults.TextSizeMin;
	        /**
	         * Returns the percentage of this value relative to the TextSizeMax
	         * @param textSize - should be given in terms of 'pt'
	         */
	        function getScale(textSize) {
	            return (textSize - TextSizeDefaults.TextSizeMin) / TextSizeRange;
	        }
	        TextSizeDefaults.getScale = getScale;
	    })(TextSizeDefaults = jsCommon.TextSizeDefaults || (jsCommon.TextSizeDefaults = {}));
	    var PixelConverter;
	    (function (PixelConverter) {
	        var PxPtRatio = 4 / 3;
	        var PixelString = 'px';
	        /**
	         * Appends 'px' to the end of number value for use as pixel string in styles
	         */
	        function toString(px) {
	            return px + PixelString;
	        }
	        PixelConverter.toString = toString;
	        /**
	         * Converts point value (pt) to pixels
	         * Returns a string for font-size property
	         * e.g. fromPoint(8) => '24px'
	         */
	        function fromPoint(pt) {
	            return toString(fromPointToPixel(pt));
	        }
	        PixelConverter.fromPoint = fromPoint;
	        /**
	         * Converts point value (pt) to pixels
	         * Returns a number for font-size property
	         * e.g. fromPoint(8) => 24px
	         */
	        function fromPointToPixel(pt) {
	            return (PxPtRatio * pt);
	        }
	        PixelConverter.fromPointToPixel = fromPointToPixel;
	        /**
	         * Converts pixel value (px) to pt
	         * e.g. toPoint(24) => 8
	         */
	        function toPoint(px) {
	            return px / PxPtRatio;
	        }
	        PixelConverter.toPoint = toPoint;
	    })(PixelConverter = jsCommon.PixelConverter || (jsCommon.PixelConverter = {}));
	    var RegExpExtensions;
	    (function (RegExpExtensions) {
	        /**
	         * Runs exec on regex starting from 0 index
	         * This is the expected behavior but RegExp actually remember
	         * the last index they stopped at (found match at) and will
	         * return unexpected results when run in sequence.
	         * @param regex - regular expression object
	         * @param value - string to search wiht regex
	         * @param start - index within value to start regex
	         */
	        function run(regex, value, start) {
	            debug.assertValue(regex, 'regex');
	            regex.lastIndex = start || 0;
	            return regex.exec(value);
	        }
	        RegExpExtensions.run = run;
	    })(RegExpExtensions = jsCommon.RegExpExtensions || (jsCommon.RegExpExtensions = {}));
	})(jsCommon || (jsCommon = {}));

	

/***/ },
/* 79 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var data;
	    (function (data) {
	        /** Default IQueryExprVisitorWithArg implementation that others may derive from. */
	        var DefaultSQExprVisitorWithArg = (function () {
	            function DefaultSQExprVisitorWithArg() {
	            }
	            DefaultSQExprVisitorWithArg.prototype.visitEntity = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitColumnRef = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitMeasureRef = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitAggr = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitPercentile = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitHierarchy = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitHierarchyLevel = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitPropertyVariationSource = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitSelectRef = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitBetween = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitIn = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitAnd = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitOr = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitCompare = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitContains = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitExists = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitNot = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitStartsWith = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitConstant = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitDateSpan = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitDateAdd = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitNow = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitDefaultValue = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitAnyValue = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitArithmetic = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitFillRule = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitResourcePackageItem = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitScopedEval = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitWithRef = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitTransformTableRef = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitTransformOutputRoleRef = function (expr, arg) {
	                return this.visitDefault(expr, arg);
	            };
	            DefaultSQExprVisitorWithArg.prototype.visitDefault = function (expr, arg) {
	                return;
	            };
	            return DefaultSQExprVisitorWithArg;
	        }());
	        data.DefaultSQExprVisitorWithArg = DefaultSQExprVisitorWithArg;
	        /** Default ISQExprVisitor implementation that others may derive from. */
	        var DefaultSQExprVisitor = (function (_super) {
	            __extends(DefaultSQExprVisitor, _super);
	            function DefaultSQExprVisitor() {
	                _super.apply(this, arguments);
	            }
	            return DefaultSQExprVisitor;
	        }(DefaultSQExprVisitorWithArg));
	        data.DefaultSQExprVisitor = DefaultSQExprVisitor;
	        /** Default ISQExprVisitor implementation that implements default traversal and that others may derive from. */
	        var DefaultSQExprVisitorWithTraversal = (function () {
	            function DefaultSQExprVisitorWithTraversal() {
	            }
	            DefaultSQExprVisitorWithTraversal.prototype.visitEntity = function (expr) {
	                this.visitDefault(expr);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitColumnRef = function (expr) {
	                expr.source.accept(this);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitMeasureRef = function (expr) {
	                expr.source.accept(this);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitAggr = function (expr) {
	                expr.arg.accept(this);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitPercentile = function (expr) {
	                expr.arg.accept(this);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitHierarchy = function (expr) {
	                expr.arg.accept(this);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitHierarchyLevel = function (expr) {
	                expr.arg.accept(this);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitPropertyVariationSource = function (expr) {
	                expr.arg.accept(this);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitSelectRef = function (expr) {
	                this.visitDefault(expr);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitBetween = function (expr) {
	                expr.arg.accept(this);
	                expr.lower.accept(this);
	                expr.upper.accept(this);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitIn = function (expr) {
	                var args = expr.args;
	                for (var i = 0, len = args.length; i < len; i++)
	                    args[i].accept(this);
	                var values = expr.values;
	                for (var i = 0, len = values.length; i < len; i++) {
	                    var valueTuple = values[i];
	                    for (var j = 0, jlen = valueTuple.length; j < jlen; j++)
	                        valueTuple[j].accept(this);
	                }
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitAnd = function (expr) {
	                expr.left.accept(this);
	                expr.right.accept(this);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitOr = function (expr) {
	                expr.left.accept(this);
	                expr.right.accept(this);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitCompare = function (expr) {
	                expr.left.accept(this);
	                expr.right.accept(this);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitContains = function (expr) {
	                expr.left.accept(this);
	                expr.right.accept(this);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitExists = function (expr) {
	                expr.arg.accept(this);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitNot = function (expr) {
	                expr.arg.accept(this);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitStartsWith = function (expr) {
	                expr.left.accept(this);
	                expr.right.accept(this);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitConstant = function (expr) {
	                this.visitDefault(expr);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitDateSpan = function (expr) {
	                expr.arg.accept(this);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitDateAdd = function (expr) {
	                expr.arg.accept(this);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitNow = function (expr) {
	                this.visitDefault(expr);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitDefaultValue = function (expr) {
	                this.visitDefault(expr);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitAnyValue = function (expr) {
	                this.visitDefault(expr);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitArithmetic = function (expr) {
	                expr.left.accept(this);
	                expr.right.accept(this);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitFillRule = function (expr) {
	                expr.input.accept(this);
	                var rule = expr.rule, gradient2 = rule.linearGradient2, gradient3 = rule.linearGradient3;
	                if (gradient2) {
	                    this.visitLinearGradient2(gradient2);
	                }
	                if (gradient3) {
	                    this.visitLinearGradient3(gradient3);
	                }
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitLinearGradient2 = function (gradient2) {
	                debug.assertValue(gradient2, 'gradient2');
	                this.visitFillRuleStop(gradient2.min);
	                this.visitFillRuleStop(gradient2.max);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitLinearGradient3 = function (gradient3) {
	                debug.assertValue(gradient3, 'gradient3');
	                this.visitFillRuleStop(gradient3.min);
	                this.visitFillRuleStop(gradient3.mid);
	                this.visitFillRuleStop(gradient3.max);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitResourcePackageItem = function (expr) {
	                this.visitDefault(expr);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitScopedEval = function (expr) {
	                expr.expression.accept(this);
	                for (var _i = 0, _a = expr.scope; _i < _a.length; _i++) {
	                    var scopeExpr = _a[_i];
	                    scopeExpr.accept(this);
	                }
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitWithRef = function (expr) {
	                this.visitDefault(expr);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitTransformTableRef = function (expr) {
	                this.visitDefault(expr);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitTransformOutputRoleRef = function (expr) {
	                this.visitDefault(expr);
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitDefault = function (expr) {
	                return;
	            };
	            DefaultSQExprVisitorWithTraversal.prototype.visitFillRuleStop = function (stop) {
	                debug.assertValue(stop, 'stop');
	                stop.color.accept(this);
	                var value = stop.value;
	                if (value)
	                    value.accept(this);
	            };
	            return DefaultSQExprVisitorWithTraversal;
	        }());
	        data.DefaultSQExprVisitorWithTraversal = DefaultSQExprVisitorWithTraversal;
	    })(data = powerbi.data || (powerbi.data = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 80 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var EnumExtensions = jsCommon.EnumExtensions;
	    /** Describes a data value type, including a primitive type and extended type if any (derived from data category). */
	    var ValueType = (function () {
	        /** Do not call the ValueType constructor directly. Use the ValueType.fromXXX methods. */
	        function ValueType(type, category, enumType) {
	            debug.assert((!!type && ExtendedType[type] != null) || type === ExtendedType.Null, 'type');
	            debug.assert(!!category || category === null, 'category');
	            debug.assert(type !== ExtendedType.Enumeration || !!enumType, 'enumType');
	            this.underlyingType = type;
	            this.category = category;
	            if (EnumExtensions.hasFlag(type, ExtendedType.Temporal)) {
	                this.temporalType = new TemporalType(type);
	            }
	            if (EnumExtensions.hasFlag(type, ExtendedType.Geography)) {
	                this.geographyType = new GeographyType(type);
	            }
	            if (EnumExtensions.hasFlag(type, ExtendedType.Miscellaneous)) {
	                this.miscType = new MiscellaneousType(type);
	            }
	            if (EnumExtensions.hasFlag(type, ExtendedType.Formatting)) {
	                this.formattingType = new FormattingType(type);
	            }
	            if (EnumExtensions.hasFlag(type, ExtendedType.Enumeration)) {
	                this.enumType = enumType;
	            }
	            if (EnumExtensions.hasFlag(type, ExtendedType.Scripting)) {
	                this.scriptingType = new ScriptType(type);
	            }
	        }
	        /** Creates or retrieves a ValueType object based on the specified ValueTypeDescriptor. */
	        ValueType.fromDescriptor = function (descriptor) {
	            descriptor = descriptor || {};
	            // Simplified primitive types
	            if (descriptor.text)
	                return ValueType.fromExtendedType(ExtendedType.Text);
	            if (descriptor.integer)
	                return ValueType.fromExtendedType(ExtendedType.Integer);
	            if (descriptor.numeric)
	                return ValueType.fromExtendedType(ExtendedType.Double);
	            if (descriptor.bool)
	                return ValueType.fromExtendedType(ExtendedType.Boolean);
	            if (descriptor.dateTime)
	                return ValueType.fromExtendedType(ExtendedType.DateTime);
	            if (descriptor.duration)
	                return ValueType.fromExtendedType(ExtendedType.Duration);
	            if (descriptor.binary)
	                return ValueType.fromExtendedType(ExtendedType.Binary);
	            if (descriptor.none)
	                return ValueType.fromExtendedType(ExtendedType.None);
	            // Extended types
	            if (descriptor.scripting) {
	                if (descriptor.scripting.source)
	                    return ValueType.fromExtendedType(ExtendedType.ScriptSource);
	            }
	            if (descriptor.enumeration)
	                return ValueType.fromEnum(descriptor.enumeration);
	            if (descriptor.temporal) {
	                if (descriptor.temporal.year)
	                    return ValueType.fromExtendedType(ExtendedType.Year_Integer);
	                if (descriptor.temporal.month)
	                    return ValueType.fromExtendedType(ExtendedType.Month_Integer);
	            }
	            if (descriptor.geography) {
	                if (descriptor.geography.address)
	                    return ValueType.fromExtendedType(ExtendedType.Address);
	                if (descriptor.geography.city)
	                    return ValueType.fromExtendedType(ExtendedType.City);
	                if (descriptor.geography.continent)
	                    return ValueType.fromExtendedType(ExtendedType.Continent);
	                if (descriptor.geography.country)
	                    return ValueType.fromExtendedType(ExtendedType.Country);
	                if (descriptor.geography.county)
	                    return ValueType.fromExtendedType(ExtendedType.County);
	                if (descriptor.geography.region)
	                    return ValueType.fromExtendedType(ExtendedType.Region);
	                if (descriptor.geography.postalCode)
	                    return ValueType.fromExtendedType(ExtendedType.PostalCode_Text);
	                if (descriptor.geography.stateOrProvince)
	                    return ValueType.fromExtendedType(ExtendedType.StateOrProvince);
	                if (descriptor.geography.place)
	                    return ValueType.fromExtendedType(ExtendedType.Place);
	                if (descriptor.geography.latitude)
	                    return ValueType.fromExtendedType(ExtendedType.Latitude_Double);
	                if (descriptor.geography.longitude)
	                    return ValueType.fromExtendedType(ExtendedType.Longitude_Double);
	            }
	            if (descriptor.misc) {
	                if (descriptor.misc.image)
	                    return ValueType.fromExtendedType(ExtendedType.Image);
	                if (descriptor.misc.imageUrl)
	                    return ValueType.fromExtendedType(ExtendedType.ImageUrl);
	                if (descriptor.misc.webUrl)
	                    return ValueType.fromExtendedType(ExtendedType.WebUrl);
	                if (descriptor.misc.barcode)
	                    return ValueType.fromExtendedType(ExtendedType.Barcode_Text);
	            }
	            if (descriptor.formatting) {
	                if (descriptor.formatting.color)
	                    return ValueType.fromExtendedType(ExtendedType.Color);
	                if (descriptor.formatting.formatString)
	                    return ValueType.fromExtendedType(ExtendedType.FormatString);
	                if (descriptor.formatting.alignment)
	                    return ValueType.fromExtendedType(ExtendedType.Alignment);
	                if (descriptor.formatting.labelDisplayUnits)
	                    return ValueType.fromExtendedType(ExtendedType.LabelDisplayUnits);
	                if (descriptor.formatting.fontSize)
	                    return ValueType.fromExtendedType(ExtendedType.FontSize);
	                if (descriptor.formatting.labelDensity)
	                    return ValueType.fromExtendedType(ExtendedType.LabelDensity);
	            }
	            if (descriptor.extendedType) {
	                return ValueType.fromExtendedType(descriptor.extendedType);
	            }
	            if (descriptor.operations) {
	                if (descriptor.operations.searchEnabled)
	                    return ValueType.fromExtendedType(ExtendedType.SearchEnabled);
	            }
	            return ValueType.fromExtendedType(ExtendedType.Null);
	        };
	        /** Advanced: Generally use fromDescriptor instead. Creates or retrieves a ValueType object for the specified ExtendedType. */
	        ValueType.fromExtendedType = function (extendedType) {
	            extendedType = extendedType || ExtendedType.Null;
	            var primitiveType = getPrimitiveType(extendedType), category = getCategoryFromExtendedType(extendedType);
	            debug.assert(primitiveType !== PrimitiveType.Null || extendedType === ExtendedType.Null, 'Cannot create ValueType for abstract extended type. Consider using fromDescriptor instead.');
	            return ValueType.fromPrimitiveTypeAndCategory(primitiveType, category);
	        };
	        /** Creates or retrieves a ValueType object for the specified PrimitiveType and data category. */
	        ValueType.fromPrimitiveTypeAndCategory = function (primitiveType, category) {
	            primitiveType = primitiveType || PrimitiveType.Null;
	            category = category || null;
	            var id = primitiveType.toString();
	            if (category)
	                id += '|' + category;
	            return ValueType.typeCache[id] || (ValueType.typeCache[id] = new ValueType(toExtendedType(primitiveType, category), category));
	        };
	        /** Creates a ValueType to describe the given IEnumType. */
	        ValueType.fromEnum = function (enumType) {
	            debug.assertValue(enumType, 'enumType');
	            return new ValueType(ExtendedType.Enumeration, null, enumType);
	        };
	        /** Determines if the specified type is compatible from at least one of the otherTypes. */
	        ValueType.isCompatibleTo = function (type, otherTypes) {
	            debug.assertValue(type, 'type');
	            debug.assertValue(otherTypes, 'otherTypes');
	            var valueType = ValueType.fromDescriptor(type);
	            for (var _i = 0, otherTypes_1 = otherTypes; _i < otherTypes_1.length; _i++) {
	                var otherType = otherTypes_1[_i];
	                var otherValueType = ValueType.fromDescriptor(otherType);
	                if (otherValueType.isCompatibleFrom(valueType))
	                    return true;
	            }
	            return false;
	        };
	        /** Determines if the instance ValueType is convertable from the 'other' ValueType. */
	        ValueType.prototype.isCompatibleFrom = function (other) {
	            debug.assertValue(other, 'other');
	            var otherPrimitiveType = other.primitiveType;
	            if (this === other ||
	                this.primitiveType === otherPrimitiveType ||
	                otherPrimitiveType === PrimitiveType.Null)
	                return true;
	            return false;
	        };
	        /**
	         * Determines if the instance ValueType is equal to the 'other' ValueType
	         * @param {ValueType} other the other ValueType to check equality against
	         * @returns True if the instance ValueType is equal to the 'other' ValueType
	         */
	        ValueType.prototype.equals = function (other) {
	            return _.isEqual(this, other);
	        };
	        Object.defineProperty(ValueType.prototype, "primitiveType", {
	            /** Gets the exact primitive type of this ValueType. */
	            get: function () {
	                return getPrimitiveType(this.underlyingType);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ValueType.prototype, "extendedType", {
	            /** Gets the exact extended type of this ValueType. */
	            get: function () {
	                return this.underlyingType;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ValueType.prototype, "categoryString", {
	            /** Gets the data category string (if any) for this ValueType. */
	            get: function () {
	                return this.category;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ValueType.prototype, "text", {
	            // Simplified primitive types
	            /** Indicates whether the type represents text values. */
	            get: function () {
	                return this.primitiveType === PrimitiveType.Text;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ValueType.prototype, "numeric", {
	            /** Indicates whether the type represents any numeric value. */
	            get: function () {
	                return EnumExtensions.hasFlag(this.underlyingType, ExtendedType.Numeric);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ValueType.prototype, "integer", {
	            /** Indicates whether the type represents integer numeric values. */
	            get: function () {
	                return this.primitiveType === PrimitiveType.Integer;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ValueType.prototype, "bool", {
	            /** Indicates whether the type represents Boolean values. */
	            get: function () {
	                return this.primitiveType === PrimitiveType.Boolean;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ValueType.prototype, "dateTime", {
	            /** Indicates whether the type represents any date/time values. */
	            get: function () {
	                return this.primitiveType === PrimitiveType.DateTime ||
	                    this.primitiveType === PrimitiveType.Date ||
	                    this.primitiveType === PrimitiveType.Time;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ValueType.prototype, "duration", {
	            /** Indicates whether the type represents duration values. */
	            get: function () {
	                return this.primitiveType === PrimitiveType.Duration;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ValueType.prototype, "binary", {
	            /** Indicates whether the type represents binary values. */
	            get: function () {
	                return this.primitiveType === PrimitiveType.Binary;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ValueType.prototype, "none", {
	            /** Indicates whether the type represents none values. */
	            get: function () {
	                return this.primitiveType === PrimitiveType.None;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ValueType.prototype, "temporal", {
	            // Extended types
	            /** Returns an object describing temporal values represented by the type, if it represents a temporal type. */
	            get: function () {
	                return this.temporalType;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ValueType.prototype, "geography", {
	            /** Returns an object describing geographic values represented by the type, if it represents a geographic type. */
	            get: function () {
	                return this.geographyType;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ValueType.prototype, "misc", {
	            /** Returns an object describing the specific values represented by the type, if it represents a miscellaneous extended type. */
	            get: function () {
	                return this.miscType;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ValueType.prototype, "formatting", {
	            /** Returns an object describing the formatting values represented by the type, if it represents a formatting type. */
	            get: function () {
	                return this.formattingType;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ValueType.prototype, "enum", {
	            /** Returns an object describing the enum values represented by the type, if it represents an enumeration type. */
	            get: function () {
	                return this.enumType;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ValueType.prototype, "scripting", {
	            get: function () {
	                return this.scriptingType;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        ValueType.typeCache = {};
	        return ValueType;
	    }());
	    powerbi.ValueType = ValueType;
	    var ScriptType = (function () {
	        function ScriptType(type) {
	            debug.assert(!!type && EnumExtensions.hasFlag(type, ExtendedType.Scripting), 'type');
	            this.underlyingType = type;
	        }
	        Object.defineProperty(ScriptType.prototype, "source", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.ScriptSource);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return ScriptType;
	    }());
	    powerbi.ScriptType = ScriptType;
	    var TemporalType = (function () {
	        function TemporalType(type) {
	            debug.assert(!!type && EnumExtensions.hasFlag(type, ExtendedType.Temporal), 'type');
	            this.underlyingType = type;
	        }
	        Object.defineProperty(TemporalType.prototype, "year", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Year);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(TemporalType.prototype, "month", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Month);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return TemporalType;
	    }());
	    powerbi.TemporalType = TemporalType;
	    var GeographyType = (function () {
	        function GeographyType(type) {
	            debug.assert(!!type && EnumExtensions.hasFlag(type, ExtendedType.Geography), 'type');
	            this.underlyingType = type;
	        }
	        Object.defineProperty(GeographyType.prototype, "address", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Address);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(GeographyType.prototype, "city", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.City);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(GeographyType.prototype, "continent", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Continent);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(GeographyType.prototype, "country", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Country);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(GeographyType.prototype, "county", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.County);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(GeographyType.prototype, "region", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Region);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(GeographyType.prototype, "postalCode", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.PostalCode);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(GeographyType.prototype, "stateOrProvince", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.StateOrProvince);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(GeographyType.prototype, "place", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Place);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(GeographyType.prototype, "latitude", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Latitude);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(GeographyType.prototype, "longitude", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Longitude);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return GeographyType;
	    }());
	    powerbi.GeographyType = GeographyType;
	    var MiscellaneousType = (function () {
	        function MiscellaneousType(type) {
	            debug.assert(!!type && EnumExtensions.hasFlag(type, ExtendedType.Miscellaneous), 'type');
	            this.underlyingType = type;
	        }
	        Object.defineProperty(MiscellaneousType.prototype, "image", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Image);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(MiscellaneousType.prototype, "imageUrl", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.ImageUrl);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(MiscellaneousType.prototype, "webUrl", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.WebUrl);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(MiscellaneousType.prototype, "barcode", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Barcode);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return MiscellaneousType;
	    }());
	    powerbi.MiscellaneousType = MiscellaneousType;
	    var FormattingType = (function () {
	        function FormattingType(type) {
	            debug.assert(!!type && EnumExtensions.hasFlag(type, ExtendedType.Formatting), 'type');
	            this.underlyingType = type;
	        }
	        Object.defineProperty(FormattingType.prototype, "color", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Color);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormattingType.prototype, "formatString", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.FormatString);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormattingType.prototype, "alignment", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Alignment);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormattingType.prototype, "labelDisplayUnits", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.LabelDisplayUnits);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormattingType.prototype, "fontSize", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.FontSize);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormattingType.prototype, "labelDensity", {
	            get: function () {
	                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.LabelDensity);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return FormattingType;
	    }());
	    powerbi.FormattingType = FormattingType;
	    /** Defines primitive value types. Must be consistent with types defined by server conceptual schema. */
	    (function (PrimitiveType) {
	        PrimitiveType[PrimitiveType["Null"] = 0] = "Null";
	        PrimitiveType[PrimitiveType["Text"] = 1] = "Text";
	        PrimitiveType[PrimitiveType["Decimal"] = 2] = "Decimal";
	        PrimitiveType[PrimitiveType["Double"] = 3] = "Double";
	        PrimitiveType[PrimitiveType["Integer"] = 4] = "Integer";
	        PrimitiveType[PrimitiveType["Boolean"] = 5] = "Boolean";
	        PrimitiveType[PrimitiveType["Date"] = 6] = "Date";
	        PrimitiveType[PrimitiveType["DateTime"] = 7] = "DateTime";
	        PrimitiveType[PrimitiveType["DateTimeZone"] = 8] = "DateTimeZone";
	        PrimitiveType[PrimitiveType["Time"] = 9] = "Time";
	        PrimitiveType[PrimitiveType["Duration"] = 10] = "Duration";
	        PrimitiveType[PrimitiveType["Binary"] = 11] = "Binary";
	        PrimitiveType[PrimitiveType["None"] = 12] = "None";
	    })(powerbi.PrimitiveType || (powerbi.PrimitiveType = {}));
	    var PrimitiveType = powerbi.PrimitiveType;
	    /** Defines extended value types, which include primitive types and known data categories constrained to expected primitive types. */
	    (function (ExtendedType) {
	        // Flags (1 << 8-15 range [0xFF00])
	        // Important: Enum members must be declared before they are used in TypeScript.
	        ExtendedType[ExtendedType["Numeric"] = 256] = "Numeric";
	        ExtendedType[ExtendedType["Temporal"] = 512] = "Temporal";
	        ExtendedType[ExtendedType["Geography"] = 1024] = "Geography";
	        ExtendedType[ExtendedType["Miscellaneous"] = 2048] = "Miscellaneous";
	        ExtendedType[ExtendedType["Formatting"] = 4096] = "Formatting";
	        ExtendedType[ExtendedType["Scripting"] = 8192] = "Scripting";
	        // Primitive types (0-255 range [0xFF] | flags)
	        // The member names and base values must match those in PrimitiveType.
	        ExtendedType[ExtendedType["Null"] = 0] = "Null";
	        ExtendedType[ExtendedType["Text"] = 1] = "Text";
	        ExtendedType[ExtendedType["Decimal"] = 258] = "Decimal";
	        ExtendedType[ExtendedType["Double"] = 259] = "Double";
	        ExtendedType[ExtendedType["Integer"] = 260] = "Integer";
	        ExtendedType[ExtendedType["Boolean"] = 5] = "Boolean";
	        ExtendedType[ExtendedType["Date"] = 518] = "Date";
	        ExtendedType[ExtendedType["DateTime"] = 519] = "DateTime";
	        ExtendedType[ExtendedType["DateTimeZone"] = 520] = "DateTimeZone";
	        ExtendedType[ExtendedType["Time"] = 521] = "Time";
	        ExtendedType[ExtendedType["Duration"] = 10] = "Duration";
	        ExtendedType[ExtendedType["Binary"] = 11] = "Binary";
	        ExtendedType[ExtendedType["None"] = 12] = "None";
	        // Extended types (0-32767 << 16 range [0xFFFF0000] | corresponding primitive type | flags)
	        // Temporal
	        ExtendedType[ExtendedType["Year"] = 66048] = "Year";
	        ExtendedType[ExtendedType["Year_Text"] = 66049] = "Year_Text";
	        ExtendedType[ExtendedType["Year_Integer"] = 66308] = "Year_Integer";
	        ExtendedType[ExtendedType["Year_Date"] = 66054] = "Year_Date";
	        ExtendedType[ExtendedType["Year_DateTime"] = 66055] = "Year_DateTime";
	        ExtendedType[ExtendedType["Month"] = 131584] = "Month";
	        ExtendedType[ExtendedType["Month_Text"] = 131585] = "Month_Text";
	        ExtendedType[ExtendedType["Month_Integer"] = 131844] = "Month_Integer";
	        ExtendedType[ExtendedType["Month_Date"] = 131590] = "Month_Date";
	        ExtendedType[ExtendedType["Month_DateTime"] = 131591] = "Month_DateTime";
	        // Geography
	        ExtendedType[ExtendedType["Address"] = 6554625] = "Address";
	        ExtendedType[ExtendedType["City"] = 6620161] = "City";
	        ExtendedType[ExtendedType["Continent"] = 6685697] = "Continent";
	        ExtendedType[ExtendedType["Country"] = 6751233] = "Country";
	        ExtendedType[ExtendedType["County"] = 6816769] = "County";
	        ExtendedType[ExtendedType["Region"] = 6882305] = "Region";
	        ExtendedType[ExtendedType["PostalCode"] = 6947840] = "PostalCode";
	        ExtendedType[ExtendedType["PostalCode_Text"] = 6947841] = "PostalCode_Text";
	        ExtendedType[ExtendedType["PostalCode_Integer"] = 6948100] = "PostalCode_Integer";
	        ExtendedType[ExtendedType["StateOrProvince"] = 7013377] = "StateOrProvince";
	        ExtendedType[ExtendedType["Place"] = 7078913] = "Place";
	        ExtendedType[ExtendedType["Latitude"] = 7144448] = "Latitude";
	        ExtendedType[ExtendedType["Latitude_Decimal"] = 7144706] = "Latitude_Decimal";
	        ExtendedType[ExtendedType["Latitude_Double"] = 7144707] = "Latitude_Double";
	        ExtendedType[ExtendedType["Longitude"] = 7209984] = "Longitude";
	        ExtendedType[ExtendedType["Longitude_Decimal"] = 7210242] = "Longitude_Decimal";
	        ExtendedType[ExtendedType["Longitude_Double"] = 7210243] = "Longitude_Double";
	        // Miscellaneous
	        ExtendedType[ExtendedType["Image"] = 13109259] = "Image";
	        ExtendedType[ExtendedType["ImageUrl"] = 13174785] = "ImageUrl";
	        ExtendedType[ExtendedType["WebUrl"] = 13240321] = "WebUrl";
	        ExtendedType[ExtendedType["Barcode"] = 13305856] = "Barcode";
	        ExtendedType[ExtendedType["Barcode_Text"] = 13305857] = "Barcode_Text";
	        ExtendedType[ExtendedType["Barcode_Integer"] = 13306116] = "Barcode_Integer";
	        // Formatting
	        ExtendedType[ExtendedType["Color"] = 19664897] = "Color";
	        ExtendedType[ExtendedType["FormatString"] = 19730433] = "FormatString";
	        ExtendedType[ExtendedType["Alignment"] = 20058113] = "Alignment";
	        ExtendedType[ExtendedType["LabelDisplayUnits"] = 20123649] = "LabelDisplayUnits";
	        ExtendedType[ExtendedType["FontSize"] = 20189443] = "FontSize";
	        ExtendedType[ExtendedType["LabelDensity"] = 20254979] = "LabelDensity";
	        // Enumeration
	        ExtendedType[ExtendedType["Enumeration"] = 26214401] = "Enumeration";
	        // Scripting
	        ExtendedType[ExtendedType["ScriptSource"] = 32776193] = "ScriptSource";
	        // NOTE: To avoid confusion, underscores should be used only to delimit primitive type variants of an extended type
	        // (e.g. Year_Integer or Latitude_Double above)
	        //Operations
	        ExtendedType[ExtendedType["SearchEnabled"] = 65541] = "SearchEnabled";
	    })(powerbi.ExtendedType || (powerbi.ExtendedType = {}));
	    var ExtendedType = powerbi.ExtendedType;
	    var PrimitiveTypeMask = 0xFF;
	    var PrimitiveTypeWithFlagsMask = 0xFFFF;
	    var PrimitiveTypeFlagsExcludedMask = 0xFFFF0000;
	    function getPrimitiveType(extendedType) {
	        return extendedType & PrimitiveTypeMask;
	    }
	    function isPrimitiveType(extendedType) {
	        return (extendedType & PrimitiveTypeWithFlagsMask) === extendedType;
	    }
	    function getCategoryFromExtendedType(extendedType) {
	        if (isPrimitiveType(extendedType))
	            return null;
	        var category = ExtendedType[extendedType];
	        if (category) {
	            // Check for ExtendedType declaration without a primitive type.
	            // If exists, use it as category (e.g. Longitude rather than Longitude_Double)
	            // Otherwise use the ExtendedType declaration with a primitive type (e.g. Address)
	            var delimIdx = category.lastIndexOf('_');
	            if (delimIdx > 0) {
	                var baseCategory = category.slice(0, delimIdx);
	                if (ExtendedType[baseCategory]) {
	                    debug.assert((ExtendedType[baseCategory] & PrimitiveTypeFlagsExcludedMask) === (extendedType & PrimitiveTypeFlagsExcludedMask), 'Unexpected value for ExtendedType base member of ' + extendedType);
	                    category = baseCategory;
	                }
	            }
	        }
	        return category || null;
	    }
	    function toExtendedType(primitiveType, category) {
	        var primitiveString = PrimitiveType[primitiveType];
	        var t = ExtendedType[primitiveString];
	        if (t == null) {
	            debug.assertFail('Unexpected primitiveType ' + primitiveType);
	            t = ExtendedType.Null;
	        }
	        if (primitiveType && category) {
	            var categoryType = ExtendedType[category];
	            if (categoryType) {
	                var categoryPrimitiveType = getPrimitiveType(categoryType);
	                if (categoryPrimitiveType === PrimitiveType.Null) {
	                    // Category supports multiple primitive types, check if requested primitive type is supported
	                    // (note: important to use t here rather than primitiveType as it may include primitive type flags)
	                    categoryType = t | categoryType;
	                    if (ExtendedType[categoryType]) {
	                        debug.assert(ExtendedType[categoryType] === (category + '_' + primitiveString), 'Unexpected name for ExtendedType member ' + categoryType);
	                        t = categoryType;
	                    }
	                }
	                else if (categoryPrimitiveType === primitiveType) {
	                    // Primitive type matches the single supported type for the category
	                    t = categoryType;
	                }
	            }
	        }
	        return t;
	    }
	    function matchesExtendedTypeWithAnyPrimitive(a, b) {
	        return (a & PrimitiveTypeFlagsExcludedMask) === (b & PrimitiveTypeFlagsExcludedMask);
	    }
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 81 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var data;
	    (function (data) {
	        (function (EntitySourceType) {
	            EntitySourceType[EntitySourceType["Table"] = 0] = "Table";
	            EntitySourceType[EntitySourceType["Pod"] = 1] = "Pod";
	            EntitySourceType[EntitySourceType["Expression"] = 2] = "Expression";
	        })(data.EntitySourceType || (data.EntitySourceType = {}));
	        var EntitySourceType = data.EntitySourceType;
	        function getArithmeticOperatorName(arithmeticOperatorKind) {
	            switch (arithmeticOperatorKind) {
	                case 0 /* Add */:
	                    return "Add";
	                case 1 /* Subtract */:
	                    return "Subtract";
	                case 2 /* Multiply */:
	                    return "Multiply";
	                case 3 /* Divide */:
	                    return "Divide";
	            }
	            throw new Error('Unexpected ArithmeticOperatorKind: ' + arithmeticOperatorKind);
	        }
	        data.getArithmeticOperatorName = getArithmeticOperatorName;
	        (function (TimeUnit) {
	            TimeUnit[TimeUnit["Day"] = 0] = "Day";
	            TimeUnit[TimeUnit["Week"] = 1] = "Week";
	            TimeUnit[TimeUnit["Month"] = 2] = "Month";
	            TimeUnit[TimeUnit["Year"] = 3] = "Year";
	            TimeUnit[TimeUnit["Decade"] = 4] = "Decade";
	            TimeUnit[TimeUnit["Second"] = 5] = "Second";
	            TimeUnit[TimeUnit["Minute"] = 6] = "Minute";
	            TimeUnit[TimeUnit["Hour"] = 7] = "Hour";
	        })(data.TimeUnit || (data.TimeUnit = {}));
	        var TimeUnit = data.TimeUnit;
	        (function (QueryAggregateFunction) {
	            QueryAggregateFunction[QueryAggregateFunction["Sum"] = 0] = "Sum";
	            QueryAggregateFunction[QueryAggregateFunction["Avg"] = 1] = "Avg";
	            QueryAggregateFunction[QueryAggregateFunction["Count"] = 2] = "Count";
	            QueryAggregateFunction[QueryAggregateFunction["Min"] = 3] = "Min";
	            QueryAggregateFunction[QueryAggregateFunction["Max"] = 4] = "Max";
	            QueryAggregateFunction[QueryAggregateFunction["CountNonNull"] = 5] = "CountNonNull";
	            QueryAggregateFunction[QueryAggregateFunction["Median"] = 6] = "Median";
	            QueryAggregateFunction[QueryAggregateFunction["StandardDeviation"] = 7] = "StandardDeviation";
	            QueryAggregateFunction[QueryAggregateFunction["Variance"] = 8] = "Variance";
	        })(data.QueryAggregateFunction || (data.QueryAggregateFunction = {}));
	        var QueryAggregateFunction = data.QueryAggregateFunction;
	        (function (QueryComparisonKind) {
	            QueryComparisonKind[QueryComparisonKind["Equal"] = 0] = "Equal";
	            QueryComparisonKind[QueryComparisonKind["GreaterThan"] = 1] = "GreaterThan";
	            QueryComparisonKind[QueryComparisonKind["GreaterThanOrEqual"] = 2] = "GreaterThanOrEqual";
	            QueryComparisonKind[QueryComparisonKind["LessThan"] = 3] = "LessThan";
	            QueryComparisonKind[QueryComparisonKind["LessThanOrEqual"] = 4] = "LessThanOrEqual";
	        })(data.QueryComparisonKind || (data.QueryComparisonKind = {}));
	        var QueryComparisonKind = data.QueryComparisonKind;
	        /** Defines semantic data types. */
	        (function (SemanticType) {
	            SemanticType[SemanticType["None"] = 0] = "None";
	            SemanticType[SemanticType["Number"] = 1] = "Number";
	            SemanticType[SemanticType["Integer"] = 3] = "Integer";
	            SemanticType[SemanticType["DateTime"] = 4] = "DateTime";
	            SemanticType[SemanticType["Time"] = 8] = "Time";
	            SemanticType[SemanticType["Date"] = 20] = "Date";
	            SemanticType[SemanticType["Month"] = 35] = "Month";
	            SemanticType[SemanticType["Year"] = 67] = "Year";
	            SemanticType[SemanticType["YearAndMonth"] = 128] = "YearAndMonth";
	            SemanticType[SemanticType["MonthAndDay"] = 256] = "MonthAndDay";
	            SemanticType[SemanticType["Decade"] = 515] = "Decade";
	            SemanticType[SemanticType["YearAndWeek"] = 1024] = "YearAndWeek";
	            SemanticType[SemanticType["String"] = 2048] = "String";
	            SemanticType[SemanticType["Boolean"] = 4096] = "Boolean";
	            SemanticType[SemanticType["Table"] = 8192] = "Table";
	            SemanticType[SemanticType["Range"] = 16384] = "Range";
	        })(data.SemanticType || (data.SemanticType = {}));
	        var SemanticType = data.SemanticType;
	        (function (FilterKind) {
	            FilterKind[FilterKind["Default"] = 0] = "Default";
	            FilterKind[FilterKind["Period"] = 1] = "Period";
	        })(data.FilterKind || (data.FilterKind = {}));
	        var FilterKind = data.FilterKind;
	    })(data = powerbi.data || (powerbi.data = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 82 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	var powerbi;
	(function (powerbi) {
	    var data;
	    (function (data) {
	        var inherit = powerbi.Prototype.inherit;
	        var inheritSingle = powerbi.Prototype.inheritSingle;
	        var ArrayExtensions = jsCommon.ArrayExtensions;
	        var EnumExtensions = jsCommon.EnumExtensions;
	        // TODO: refactor & focus DataViewTransform into a service with well-defined dependencies.
	        var DataViewTransform;
	        (function (DataViewTransform) {
	            var fillRulePropertyDescriptor = { type: { fillRule: {} } };
	            function apply(options) {
	                debug.assertValue(options, 'options');
	                // TODO: Flow a context object through to capture errors/warnings about what happens here for better diagnosability.
	                var prototype = options.prototype, objectDescriptors = options.objectDescriptors, dataViewMappings = options.dataViewMappings, transforms = options.transforms, projectionActiveItems = transforms && transforms.roles && transforms.roles.activeItems, colorAllocatorFactory = options.colorAllocatorFactory, dataRoles = options.dataRoles;
	                if (!prototype)
	                    return transformEmptyDataView(objectDescriptors, transforms, colorAllocatorFactory);
	                if (!transforms)
	                    return [prototype];
	                // Transform Query DataView
	                prototype = data.DataViewPivotCategoricalToPrimaryGroups.unpivotResult(prototype, transforms.selects, dataViewMappings, projectionActiveItems);
	                var visualDataViews = transformQueryToVisualDataView(prototype, transforms, objectDescriptors, dataViewMappings, colorAllocatorFactory, dataRoles);
	                // Transform and generate derived visual DataViews
	                visualDataViews = data.DataViewRegression.run({
	                    dataViewMappings: dataViewMappings,
	                    visualDataViews: visualDataViews,
	                    dataRoles: dataRoles,
	                    objectDescriptors: objectDescriptors,
	                    objectDefinitions: transforms.objects,
	                    colorAllocatorFactory: colorAllocatorFactory,
	                    transformSelects: transforms.selects,
	                    metadata: prototype.metadata,
	                    projectionActiveItems: projectionActiveItems,
	                });
	                return visualDataViews;
	            }
	            DataViewTransform.apply = apply;
	            function transformQueryToVisualDataView(prototype, transforms, objectDescriptors, dataViewMappings, colorAllocatorFactory, dataRoles) {
	                var transformedDataViews = [];
	                var splits = transforms.splits;
	                if (_.isEmpty(splits)) {
	                    transformedDataViews.push(transformDataView(prototype, objectDescriptors, dataViewMappings, transforms, colorAllocatorFactory, dataRoles));
	                }
	                else {
	                    for (var _i = 0, splits_1 = splits; _i < splits_1.length; _i++) {
	                        var split = splits_1[_i];
	                        var transformed = transformDataView(prototype, objectDescriptors, dataViewMappings, transforms, colorAllocatorFactory, dataRoles, split.selects);
	                        transformedDataViews.push(transformed);
	                    }
	                }
	                return transformedDataViews;
	            }
	            function transformEmptyDataView(objectDescriptors, transforms, colorAllocatorFactory) {
	                if (transforms && transforms.objects) {
	                    var emptyDataView = {
	                        metadata: {
	                            columns: [],
	                        }
	                    };
	                    transformObjects(emptyDataView, 0 /* None */, objectDescriptors, transforms.objects, transforms.selects, colorAllocatorFactory);
	                    return [emptyDataView];
	                }
	                return [];
	            }
	            function transformDataView(prototype, objectDescriptors, roleMappings, transforms, colorAllocatorFactory, dataRoles, selectsToInclude) {
	                debug.assertValue(prototype, 'prototype');
	                debug.assertValue(transforms, 'transforms');
	                debug.assert(!selectsToInclude ||
	                    _.filter(Object.keys(selectsToInclude), function (selectIndex) { return selectsToInclude[selectIndex] && (!transforms.selects || !transforms.selects[selectIndex]); })
	                        .length === 0, // asserts that the number of select indices in selectsToInclude without a corresponding Select Transform === 0
	                'If selectsToInclude is specified, every Select Index in it must have a corresponding Select Transform.');
	                var targetKinds = getTargetKinds(roleMappings);
	                var transformed = inherit(prototype);
	                transformed.metadata = inherit(prototype.metadata);
	                var projectionOrdering = transforms.roles && transforms.roles.ordering;
	                var projectionActiveItems = transforms.roles && transforms.roles.activeItems;
	                transformed = transformSelects(transformed, targetKinds, roleMappings, transforms.selects, projectionOrdering);
	                transformObjects(transformed, targetKinds, objectDescriptors, transforms.objects, transforms.selects, colorAllocatorFactory);
	                data.DataViewRemoveSelects.apply(transformed, targetKinds, selectsToInclude);
	                // Note: Do this step after transformObjects() so that metadata columns in 'transformed' have roles and objects.general.formatString populated
	                transformed = data.DataViewConcatenateCategoricalColumns.detectAndApply(transformed, objectDescriptors, roleMappings, projectionOrdering, transforms.selects, projectionActiveItems);
	                data.DataViewNormalizeValues.apply({
	                    dataview: transformed,
	                    dataViewMappings: roleMappings,
	                    dataRoles: dataRoles,
	                });
	                return transformed;
	            }
	            function getTargetKinds(roleMappings) {
	                debug.assertAnyValue(roleMappings, 'roleMappings');
	                if (!roleMappings)
	                    return 0 /* None */;
	                var result = 0 /* None */;
	                for (var _i = 0, roleMappings_1 = roleMappings; _i < roleMappings_1.length; _i++) {
	                    var roleMapping = roleMappings_1[_i];
	                    if (roleMapping.categorical)
	                        result |= 1 /* Categorical */;
	                    if (roleMapping.matrix)
	                        result |= 2 /* Matrix */;
	                    if (roleMapping.single)
	                        result |= 4 /* Single */;
	                    if (roleMapping.table)
	                        result |= 8 /* Table */;
	                    if (roleMapping.tree)
	                        result |= 16 /* Tree */;
	                }
	                return result;
	            }
	            function transformSelects(dataView, targetDataViewKinds, roleMappings, selectTransforms, projectionOrdering) {
	                var columnRewrites = [];
	                if (selectTransforms) {
	                    dataView.metadata.columns = applyTransformsToColumns(dataView.metadata.columns, selectTransforms, columnRewrites);
	                    evaluateAggregateSources(dataView, selectTransforms);
	                }
	                // NOTE: no rewrites necessary for Tree (it doesn't reference the columns)
	                if (dataView.categorical && EnumExtensions.hasFlag(targetDataViewKinds, 1 /* Categorical */)) {
	                    dataView.categorical = applyRewritesToCategorical(dataView.categorical, columnRewrites);
	                    // TODO VSTS 7024199: separate out structural transformations from dataViewTransform.transformSelects(...)
	                    // NOTE: This is slightly DSR-specific.
	                    dataView = pivotIfNecessary(dataView, roleMappings);
	                }
	                // Don't perform this potentially expensive transform unless we actually have a matrix.
	                // When we switch to lazy per-visual DataView creation, we'll be able to remove this check.
	                if (dataView.matrix && EnumExtensions.hasFlag(targetDataViewKinds, 2 /* Matrix */)) {
	                    var matrixTransformationContext = {
	                        rowHierarchyRewritten: false,
	                        columnHierarchyRewritten: false,
	                        hierarchyTreesRewritten: false
	                    };
	                    dataView.matrix = applyRewritesToMatrix(dataView.matrix, columnRewrites, roleMappings, projectionOrdering, matrixTransformationContext);
	                    // TODO VSTS 7024199: separate out structural transformations from dataViewTransform.transformSelects(...)
	                    if (shouldPivotMatrix(dataView.matrix, roleMappings))
	                        data.DataViewPivotMatrix.apply(dataView.matrix, matrixTransformationContext);
	                }
	                // Don't perform this potentially expensive transform unless we actually have a table.
	                // When we switch to lazy per-visual DataView creation, we'll be able to remove this check.
	                if (dataView.table && EnumExtensions.hasFlag(targetDataViewKinds, 8 /* Table */)) {
	                    dataView.table = applyRewritesToTable(dataView.table, columnRewrites, projectionOrdering);
	                }
	                return dataView;
	            }
	            function applyTransformsToColumns(prototypeColumns, selects, rewrites) {
	                debug.assertValue(prototypeColumns, 'columns');
	                if (!selects)
	                    return prototypeColumns;
	                // column may contain undefined entries
	                var columns = inherit(prototypeColumns);
	                for (var i = 0, len = prototypeColumns.length; i < len; i++) {
	                    var prototypeColumn = prototypeColumns[i];
	                    var select = selects[prototypeColumn.index];
	                    if (!select)
	                        continue;
	                    var column = columns[i] = inheritColumnProperties(prototypeColumn, select);
	                    rewrites.push({
	                        from: prototypeColumn,
	                        to: column,
	                    });
	                }
	                debug.assert(_.every(rewrites, function (rewrite) { return rewrite.from.index === rewrite.to.index; }), 'post-condition: DataViewMetadataColumn.index is not expected to be rewritten by select transforms.');
	                return columns;
	            }
	            function inheritColumnProperties(prototypeColumn, select) {
	                debug.assertValue(prototypeColumn, 'prototypeColumn');
	                debug.assertValue(select, 'select');
	                var column = inherit(prototypeColumn);
	                if (select.roles)
	                    column.roles = select.roles;
	                if (select.type)
	                    column.type = select.type;
	                column.format = getFormatForColumn(select, column);
	                if (select.displayName)
	                    column.displayName = select.displayName;
	                if (select.queryName)
	                    column.queryName = select.queryName;
	                if (select.expr)
	                    column.expr = select.expr;
	                if (select.kpi)
	                    column.kpi = select.kpi;
	                if (select.sort)
	                    column.sort = select.sort;
	                if (select.discourageAggregationAcrossGroups)
	                    column.discourageAggregationAcrossGroups = select.discourageAggregationAcrossGroups;
	                return column;
	            }
	            function evaluateAggregateSources(dataView, selects) {
	                debug.assertValue(dataView, 'dataView');
	                debug.assertAnyValue(selects, 'selects');
	                if (!selects)
	                    return;
	                var columns = dataView.metadata.columns, evalContext;
	                for (var selectIdx = 0, len = selects.length; selectIdx < len; selectIdx++) {
	                    var select = selects[selectIdx];
	                    var aggregateSources = select && select.aggregateSources;
	                    if (!aggregateSources)
	                        continue;
	                    if (!evalContext)
	                        evalContext = data.createStaticEvalContext(data.createColorAllocatorCache(), dataView, selects);
	                    var column = findOrCreateColumn(columns, selectIdx, select);
	                    var columnAggregates = column.aggregates = {};
	                    var type = powerbi.ValueType.fromDescriptor(column.type);
	                    var value = evaluateAggregate(evalContext, selects, type, aggregateSources.min);
	                    if (value !== undefined)
	                        columnAggregates.min = value;
	                    value = evaluateAggregate(evalContext, selects, type, aggregateSources.max);
	                    if (value !== undefined)
	                        columnAggregates.max = value;
	                }
	            }
	            function findOrCreateColumn(columns, selectIdx, select) {
	                debug.assertValue(columns, 'columns');
	                debug.assertValue(selectIdx, 'selectIdx');
	                debug.assertValue(select, 'select');
	                for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
	                    var column = columns_1[_i];
	                    if (column.index === selectIdx && column.groupName === undefined)
	                        return column;
	                }
	                var newColumn = inheritColumnProperties({ displayName: select.displayName }, select);
	                columns.push(newColumn);
	                return newColumn;
	            }
	            function evaluateAggregate(evalContext, selects, type, source) {
	                debug.assertValue(evalContext, 'evalContext');
	                debug.assertValue(selects, 'selects');
	                debug.assertValue(type, 'type');
	                debug.assertValue(source, 'source');
	                var select = selects[source.index];
	                if (select)
	                    return data.DataViewObjectEvaluator.evaluateValue(evalContext, select.expr, type);
	            }
	            /**
	             * Get the column format. Order of precendence is:
	             *  1. Select format
	             *  2. Column format
	             */
	            function getFormatForColumn(select, column) {
	                // TODO: we already copied the select.Format to column.format, we probably don't need this check
	                return select.format || column.format;
	            }
	            function applyRewritesToCategorical(prototype, columnRewrites) {
	                debug.assertValue(prototype, 'prototype');
	                debug.assertValue(columnRewrites, 'columnRewrites');
	                var categorical = inherit(prototype);
	                function override(value) {
	                    var rewrittenSource = findOverride(value.source, columnRewrites);
	                    if (rewrittenSource) {
	                        var rewritten = inherit(value);
	                        rewritten.source = rewrittenSource;
	                        return rewritten;
	                    }
	                }
	                // apply metadata column rewrites to categories
	                var categories = powerbi.Prototype.overrideArray(prototype.categories, override);
	                if (categories) {
	                    categorical.categories = categories;
	                }
	                // apply metadata column rewrites to both series and measure
	                // If there is no measure, prototype.values will be an empty array, but it can still have a dynamic series.
	                if (prototype.values) {
	                    var valueColumns = powerbi.Prototype.overrideArray(prototype.values, override) || inheritSingle(prototype.values);
	                    categorical.values = valueColumns;
	                    if (valueColumns.source) {
	                        var rewrittenValuesSource = findOverride(valueColumns.source, columnRewrites);
	                        if (rewrittenValuesSource)
	                            valueColumns.source = rewrittenValuesSource;
	                    }
	                }
	                data.DataViewCategoricalEvalGrouped.apply(categorical);
	                return categorical;
	            }
	            function applyRewritesToTable(prototype, columnRewrites, projectionOrdering) {
	                debug.assertValue(prototype, 'prototype');
	                debug.assertValue(columnRewrites, 'columnRewrites');
	                var table = inherit(prototype);
	                // Copy the rewritten columns into the table view
	                var override = function (metadata) { return findOverride(metadata, columnRewrites); };
	                var columns = powerbi.Prototype.overrideArray(prototype.columns, override);
	                if (columns)
	                    table.columns = columns;
	                if (!projectionOrdering)
	                    return table;
	                var newToOldPositions = createTableColumnPositionMapping(projectionOrdering, columnRewrites);
	                if (!newToOldPositions)
	                    return table;
	                // Reorder the columns
	                var columnsClone = columns.slice(0);
	                var keys = Object.keys(newToOldPositions);
	                for (var i = 0, len = keys.length; i < len; i++) {
	                    var sourceColumn = columnsClone[newToOldPositions[keys[i]]];
	                    // In the case we've hit the end of our columns array, but still have position reordering keys,
	                    // there is a duplicate column so we will need to add a new column for the duplicate data
	                    if (i === columns.length)
	                        columns.push(sourceColumn);
	                    else {
	                        debug.assert(i < columns.length, 'The column index is out of range for reordering.');
	                        columns[i] = sourceColumn;
	                    }
	                }
	                // Reorder the rows
	                var rows = powerbi.Prototype.overrideArray(table.rows, function (row) {
	                    var newRow = [];
	                    for (var i = 0, len = keys.length; i < len; ++i)
	                        newRow[i] = row[newToOldPositions[keys[i]]];
	                    return newRow;
	                });
	                if (rows)
	                    table.rows = rows;
	                return table;
	            }
	            /** Creates a mapping of new position to original position. */
	            function createTableColumnPositionMapping(projectionOrdering, columnRewrites) {
	                var roles = Object.keys(projectionOrdering);
	                // If we have more than one role then the ordering of columns between roles is ambiguous, so don't reorder anything.
	                if (roles.length !== 1)
	                    return;
	                var role = roles[0], originalOrder = _.map(columnRewrites, function (rewrite) { return rewrite.from.index; }), newOrder = projectionOrdering[role];
	                return createOrderMapping(originalOrder, newOrder);
	            }
	            function applyRewritesToMatrix(prototype, columnRewrites, roleMappings, projectionOrdering, context) {
	                debug.assertValue(prototype, 'prototype');
	                debug.assertValue(columnRewrites, 'columnRewrites');
	                debug.assertValue(roleMappings, 'roleMappings');
	                var firstRoleMappingWithMatrix = _.find(roleMappings, function (roleMapping) { return !!roleMapping.matrix; });
	                debug.assertValue(firstRoleMappingWithMatrix, 'roleMappings - at least one role mapping is expected to target DataViewMatrix');
	                var matrixMapping = firstRoleMappingWithMatrix.matrix;
	                var matrix = inherit(prototype);
	                function override(metadata) {
	                    return findOverride(metadata, columnRewrites);
	                }
	                function overrideHierarchy(hierarchy) {
	                    var rewrittenHierarchy = null;
	                    var newLevels = powerbi.Prototype.overrideArray(hierarchy.levels, function (level) {
	                        var newLevel = null;
	                        var levelSources = powerbi.Prototype.overrideArray(level.sources, override);
	                        if (levelSources)
	                            newLevel = ensureRewritten(newLevel, level, function (h) { return h.sources = levelSources; });
	                        return newLevel;
	                    });
	                    if (newLevels)
	                        rewrittenHierarchy = ensureRewritten(rewrittenHierarchy, hierarchy, function (r) { return r.levels = newLevels; });
	                    return rewrittenHierarchy;
	                }
	                var rows = overrideHierarchy(matrix.rows);
	                if (rows) {
	                    matrix.rows = rows;
	                    context.rowHierarchyRewritten = true;
	                }
	                var columns = overrideHierarchy(matrix.columns);
	                if (columns) {
	                    matrix.columns = columns;
	                    context.columnHierarchyRewritten = true;
	                }
	                var valueSources = powerbi.Prototype.overrideArray(matrix.valueSources, override);
	                if (valueSources) {
	                    matrix.valueSources = valueSources;
	                }
	                data.DataViewMatrixProjectionOrder.apply(matrix, matrixMapping, projectionOrdering, context);
	                return matrix;
	            }
	            /**
	             * Creates a mapping of indices, from indices to the specified newOrder array, back to indices to the specified
	             * originalOrder array.
	             * Each of the number value in originalOrder and newOrder is actually the unique key of a column (unqiue
	             * under the context of the caller code), e.g. the Select Index in projection ordering array.
	             * Also, the specified originalOrder must contain every value that exists in newOrder.
	             *
	             * If the specified originalOrder and newOrder are different in sequence order, then this function returns a collection of
	             * key-value pair, each of which represents the new and old indices of a particular column:
	             * - the key in each key-value pair is the index of the particular column key as it exists in the specified newOrder array
	             * - the value in each key-value pair is the index of the particular column key as it exists in the specified originalOrder array
	             *
	             * For example on how the return value is consumed, see functions such as reorderMatrixHierarchyLevelColumnSources(...).
	             *
	             * If the specified originalOrder and newOrder are same, then this function returns undefined.
	             *
	             * @param originalOrder E.g. an array of metadata column "select indices", in the original order as they exist in Query DataView.
	             * @param newOrder E.g. an array of metadata column "select indices", in rojection ordering.
	             */
	            function createOrderMapping(originalOrder, newOrder) {
	                // Optimization: avoid rewriting if the current order is correct
	                if (ArrayExtensions.sequenceEqual(originalOrder, newOrder, function (x, y) { return x === y; }))
	                    return;
	                var mapping = {};
	                for (var i = 0, len = newOrder.length; i < len; ++i) {
	                    var newPosition = newOrder[i];
	                    mapping[i] = originalOrder.indexOf(newPosition);
	                }
	                return mapping;
	            }
	            function findOverride(source, columnRewrites) {
	                for (var i = 0, len = columnRewrites.length; i < len; i++) {
	                    var columnRewrite = columnRewrites[i];
	                    if (columnRewrite.from === source)
	                        return columnRewrite.to;
	                }
	            }
	            function ensureRewritten(rewritten, prototype, callback) {
	                if (!rewritten)
	                    rewritten = inherit(prototype);
	                if (callback)
	                    callback(rewritten);
	                return rewritten;
	            }
	            function transformObjects(dataView, targetDataViewKinds, objectDescriptors, objectDefinitions, selectTransforms, colorAllocatorFactory) {
	                debug.assertValue(dataView, 'dataView');
	                debug.assertValue(targetDataViewKinds, 'targetDataViewKinds');
	                debug.assertAnyValue(objectDescriptors, 'objectDescriptors');
	                debug.assertAnyValue(objectDefinitions, 'objectDefinitions');
	                debug.assertAnyValue(selectTransforms, 'selectTransforms');
	                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
	                if (!objectDescriptors)
	                    return;
	                var objectsForAllSelectors = data.DataViewObjectEvaluationUtils.groupObjectsBySelector(objectDefinitions);
	                data.DataViewObjectEvaluationUtils.addImplicitObjects(objectsForAllSelectors, objectDescriptors, dataView.metadata.columns, selectTransforms);
	                var metadataOnce = objectsForAllSelectors.metadataOnce;
	                var dataObjects = objectsForAllSelectors.data;
	                if (metadataOnce)
	                    evaluateMetadataObjects(dataView, selectTransforms, objectDescriptors, metadataOnce.objects, dataObjects, colorAllocatorFactory);
	                var metadataObjects = objectsForAllSelectors.metadata;
	                if (metadataObjects) {
	                    for (var i = 0, len = metadataObjects.length; i < len; i++) {
	                        var metadataObject = metadataObjects[i];
	                        var objectDefns = metadataObject.objects;
	                        var colorAllocatorCache = populateColorAllocatorCache(dataView, selectTransforms, objectDefns, colorAllocatorFactory);
	                        evaluateMetadataRepetition(dataView, selectTransforms, objectDescriptors, metadataObject.selector, objectDefns, colorAllocatorCache);
	                    }
	                }
	                for (var i = 0, len = dataObjects.length; i < len; i++) {
	                    var dataObject = dataObjects[i];
	                    var objectDefns = dataObject.objects;
	                    var colorAllocatorCache = populateColorAllocatorCache(dataView, selectTransforms, objectDefns, colorAllocatorFactory);
	                    evaluateDataRepetition(dataView, targetDataViewKinds, selectTransforms, objectDescriptors, dataObject.selector, dataObject.rules, objectDefns, colorAllocatorCache);
	                }
	                var userDefined = objectsForAllSelectors.userDefined;
	                if (userDefined) {
	                    // TODO: We only handle user defined objects at the metadata level, but should be able to support them with arbitrary repetition.
	                    evaluateUserDefinedObjects(dataView, selectTransforms, objectDescriptors, userDefined, colorAllocatorFactory);
	                }
	            }
	            DataViewTransform.transformObjects = transformObjects;
	            function evaluateUserDefinedObjects(dataView, selectTransforms, objectDescriptors, objectDefns, colorAllocatorFactory) {
	                debug.assertValue(dataView, 'dataView');
	                debug.assertAnyValue(selectTransforms, 'selectTransforms');
	                debug.assertValue(objectDescriptors, 'objectDescriptors');
	                debug.assertValue(objectDefns, 'objectDefns');
	                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
	                var dataViewObjects = dataView.metadata.objects;
	                if (!dataViewObjects) {
	                    dataViewObjects = dataView.metadata.objects = {};
	                }
	                for (var _i = 0, objectDefns_1 = objectDefns; _i < objectDefns_1.length; _i++) {
	                    var objectDefn = objectDefns_1[_i];
	                    var id = objectDefn.selector.id;
	                    var colorAllocatorCache = populateColorAllocatorCache(dataView, selectTransforms, objectDefn.objects, colorAllocatorFactory);
	                    var evalContext = data.createStaticEvalContext(colorAllocatorCache, dataView, selectTransforms);
	                    var objects = data.DataViewObjectEvaluationUtils.evaluateDataViewObjects(evalContext, objectDescriptors, objectDefn.objects);
	                    for (var objectName in objects) {
	                        var object = objects[objectName];
	                        var map = dataViewObjects[objectName];
	                        if (!map)
	                            map = dataViewObjects[objectName] = [];
	                        debug.assert(powerbi.DataViewObjects.isUserDefined(map), 'expected DataViewObjectMap');
	                        // NOTE: We do not check for duplicate ids.
	                        map.push({ id: id, object: object });
	                    }
	                }
	            }
	            /** Evaluates and sets properties on the DataView metadata. */
	            function evaluateMetadataObjects(dataView, selectTransforms, objectDescriptors, objectDefns, dataObjects, colorAllocatorFactory) {
	                debug.assertValue(dataView, 'dataView');
	                debug.assertAnyValue(selectTransforms, 'selectTransforms');
	                debug.assertValue(objectDescriptors, 'objectDescriptors');
	                debug.assertValue(objectDefns, 'objectDefns');
	                debug.assertValue(dataObjects, 'dataObjects');
	                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
	                var colorAllocatorCache = populateColorAllocatorCache(dataView, selectTransforms, objectDefns, colorAllocatorFactory);
	                var evalContext = data.createStaticEvalContext(colorAllocatorCache, dataView, selectTransforms);
	                var objects = data.DataViewObjectEvaluationUtils.evaluateDataViewObjects(evalContext, objectDescriptors, objectDefns);
	                if (objects) {
	                    dataView.metadata.objects = objects;
	                    for (var objectName in objects) {
	                        var object = objects[objectName], objectDesc = objectDescriptors[objectName];
	                        for (var propertyName in object) {
	                            var propertyDesc = objectDesc.properties[propertyName], ruleDesc = propertyDesc.rule;
	                            if (!ruleDesc)
	                                continue;
	                            var definition = createRuleEvaluationInstance(dataView, colorAllocatorFactory, ruleDesc, objectName, object[propertyName], propertyDesc.type);
	                            if (!definition)
	                                continue;
	                            dataObjects.push(definition);
	                        }
	                    }
	                }
	            }
	            function createRuleEvaluationInstance(dataView, colorAllocatorFactory, ruleDesc, objectName, propertyValue, ruleType) {
	                debug.assertValue(dataView, 'dataView');
	                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
	                debug.assertValue(ruleDesc, 'ruleDesc');
	                debug.assertValue(propertyValue, 'propertyValue');
	                debug.assertValue(ruleType, 'ruleType');
	                var ruleOutput = ruleDesc.output;
	                if (!ruleOutput)
	                    return;
	                var selectorToCreate = findSelectorForRuleInput(dataView, ruleOutput.selector);
	                if (!selectorToCreate)
	                    return;
	                if (ruleType.fillRule) {
	                    return createRuleEvaluationInstanceFillRule(dataView, colorAllocatorFactory, ruleDesc, selectorToCreate, objectName, propertyValue);
	                }
	            }
	            function createRuleEvaluationInstanceFillRule(dataView, colorAllocatorFactory, ruleDesc, selectorToCreate, objectName, propertyValue) {
	                debug.assertValue(dataView, 'dataView');
	                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
	                debug.assertValue(ruleDesc, 'ruleDesc');
	                debug.assertValue(selectorToCreate, 'selectorToCreate');
	                debug.assertValue(propertyValue, 'propertyValue');
	                var colorAllocator = tryCreateColorAllocatorForFillRule(dataView, colorAllocatorFactory, ruleDesc.inputRole, 1 /* Role */, propertyValue);
	                if (!colorAllocator)
	                    return;
	                var rule = new data.ColorRuleEvaluation(ruleDesc.inputRole, colorAllocator);
	                var fillRuleProperties = {};
	                fillRuleProperties[ruleDesc.output.property] = {
	                    solid: { color: rule }
	                };
	                return {
	                    selector: selectorToCreate,
	                    rules: [rule],
	                    objects: [{
	                            name: objectName,
	                            properties: fillRuleProperties,
	                        }]
	                };
	            }
	            function tryCreateColorAllocatorForFillRule(dataView, colorAllocatorFactory, identifier, identifierKind, propertyValue) {
	                debug.assertValue(dataView, 'dataView');
	                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
	                debug.assertValue(identifier, 'identifier');
	                debug.assertValue(identifierKind, 'identifierKind');
	                debug.assertValue(propertyValue, 'propertyValue');
	                if (propertyValue.linearGradient2)
	                    return createColorAllocatorLinearGradient2(dataView, colorAllocatorFactory, identifier, identifierKind, propertyValue, propertyValue.linearGradient2);
	                if (propertyValue.linearGradient3)
	                    return createColorAllocatorLinearGradient3(dataView, colorAllocatorFactory, identifier, identifierKind, propertyValue, propertyValue.linearGradient3);
	            }
	            function createColorAllocatorLinearGradient2(dataView, colorAllocatorFactory, identifier, identifierKind, propertyValueFillRule, linearGradient2) {
	                debug.assertValue(dataView, 'dataView');
	                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
	                debug.assertValue(identifier, 'identifier');
	                debug.assertValue(identifierKind, 'identifierKind');
	                debug.assertValue(linearGradient2, 'linearGradient2');
	                linearGradient2 = propertyValueFillRule.linearGradient2;
	                if (linearGradient2.min.value === undefined ||
	                    linearGradient2.max.value === undefined) {
	                    var inputRange = findRuleInputColumnNumberRange(dataView, identifier, identifierKind);
	                    if (!inputRange)
	                        return;
	                    if (linearGradient2.min.value === undefined)
	                        linearGradient2.min.value = inputRange.min;
	                    if (linearGradient2.max.value === undefined)
	                        linearGradient2.max.value = inputRange.max;
	                }
	                return colorAllocatorFactory.linearGradient2(propertyValueFillRule.linearGradient2);
	            }
	            function createColorAllocatorLinearGradient3(dataView, colorAllocatorFactory, identifier, identifierKind, propertyValueFillRule, linearGradient3) {
	                debug.assertValue(dataView, 'dataView');
	                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
	                debug.assertValue(identifier, 'identifier');
	                debug.assertValue(identifierKind, 'identifierKind');
	                debug.assertValue(linearGradient3, 'linearGradient3');
	                var splitScales;
	                linearGradient3 = propertyValueFillRule.linearGradient3;
	                if (linearGradient3.min.value === undefined ||
	                    linearGradient3.mid.value === undefined ||
	                    linearGradient3.max.value === undefined) {
	                    var inputRange = findRuleInputColumnNumberRange(dataView, identifier, identifierKind);
	                    if (!inputRange)
	                        return;
	                    splitScales =
	                        linearGradient3.min.value === undefined &&
	                            linearGradient3.max.value === undefined &&
	                            linearGradient3.mid.value !== undefined;
	                    if (linearGradient3.min.value === undefined) {
	                        linearGradient3.min.value = inputRange.min;
	                    }
	                    if (linearGradient3.max.value === undefined) {
	                        linearGradient3.max.value = inputRange.max;
	                    }
	                    if (linearGradient3.mid.value === undefined) {
	                        var midValue = (linearGradient3.max.value + linearGradient3.min.value) / 2;
	                        linearGradient3.mid.value = midValue;
	                    }
	                }
	                return colorAllocatorFactory.linearGradient3(propertyValueFillRule.linearGradient3, splitScales);
	            }
	            function populateColorAllocatorCache(dataView, selectTransforms, objectDefns, colorAllocatorFactory) {
	                debug.assertValue(dataView, 'dataView');
	                debug.assertAnyValue(selectTransforms, 'selectTransforms');
	                debug.assertValue(objectDefns, 'objectDefns');
	                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
	                var cache = data.createColorAllocatorCache();
	                var staticEvalContext = data.createStaticEvalContext();
	                for (var i = 0, len = objectDefns.length; i < len; i++) {
	                    var objectDefnProperties = objectDefns[i].properties;
	                    for (var propertyName in objectDefnProperties) {
	                        var fillProperty = objectDefnProperties[propertyName];
	                        if (fillProperty &&
	                            fillProperty.solid &&
	                            fillProperty.solid.color &&
	                            fillProperty.solid.color.kind === 23 /* FillRule */) {
	                            var fillRuleExpr = fillProperty.solid.color;
	                            var inputExprQueryName = findFirstQueryNameForExpr(selectTransforms, fillRuleExpr.input);
	                            if (!inputExprQueryName)
	                                continue;
	                            var fillRule = data.DataViewObjectEvaluator.evaluateProperty(staticEvalContext, fillRulePropertyDescriptor, fillRuleExpr.rule);
	                            var colorAllocator = tryCreateColorAllocatorForFillRule(dataView, colorAllocatorFactory, inputExprQueryName, 0 /* QueryName */, fillRule);
	                            if (colorAllocator)
	                                cache.register(fillRuleExpr, colorAllocator);
	                        }
	                    }
	                }
	                return cache;
	            }
	            function evaluateDataRepetition(dataView, targetDataViewKinds, selectTransforms, objectDescriptors, selector, rules, objectDefns, colorAllocatorCache) {
	                debug.assertValue(dataView, 'dataView');
	                debug.assertValue(targetDataViewKinds, 'targetDataViewKinds');
	                debug.assertAnyValue(selectTransforms, 'selectTransforms');
	                debug.assertValue(objectDescriptors, 'objectDescriptors');
	                debug.assertValue(selector, 'selector');
	                debug.assertAnyValue(rules, 'rules');
	                debug.assertValue(objectDefns, 'objectDefns');
	                debug.assertValue(colorAllocatorCache, 'colorAllocatorFactory');
	                var containsWildcard = data.Selector.containsWildcard(selector);
	                var dataViewCategorical = dataView.categorical;
	                if (dataViewCategorical && EnumExtensions.hasFlag(targetDataViewKinds, 1 /* Categorical */)) {
	                    // 1) Match against categories
	                    evaluateDataRepetitionCategoricalCategory(dataViewCategorical, selectTransforms, objectDescriptors, selector, rules, containsWildcard, objectDefns, colorAllocatorCache);
	                    // 2) Match against valueGrouping
	                    evaluateDataRepetitionCategoricalValueGrouping(dataViewCategorical, selectTransforms, objectDescriptors, selector, rules, containsWildcard, objectDefns, colorAllocatorCache);
	                }
	                var dataViewMatrix = dataView.matrix;
	                if (dataViewMatrix && EnumExtensions.hasFlag(targetDataViewKinds, 2 /* Matrix */)) {
	                    var rewrittenMatrix = evaluateDataRepetitionMatrix(dataViewMatrix, objectDescriptors, selector, rules, containsWildcard, objectDefns, colorAllocatorCache);
	                    if (rewrittenMatrix) {
	                        // TODO: This mutates the DataView -- the assumption is that prototypal inheritance has already occurred.  We should
	                        // revisit this, likely when we do lazy evaluation of DataView.
	                        dataView.matrix = rewrittenMatrix;
	                    }
	                }
	                var dataViewTable = dataView.table;
	                if (dataViewTable && EnumExtensions.hasFlag(targetDataViewKinds, 8 /* Table */)) {
	                    var rewrittenSelector = rewriteTableRoleSelector(dataViewTable, selector);
	                    var rewrittenTable = evaluateDataRepetitionTable(dataViewTable, selectTransforms, objectDescriptors, rewrittenSelector, rules, containsWildcard, objectDefns, colorAllocatorCache);
	                    if (rewrittenTable) {
	                        // TODO: This mutates the DataView -- the assumption is that prototypal inheritance has already occurred.  We should
	                        // revisit this, likely when we do lazy evaluation of DataView.
	                        dataView.table = rewrittenTable;
	                    }
	                }
	            }
	            function rewriteTableRoleSelector(dataViewTable, selector) {
	                if (data.Selector.hasRoleWildcard(selector)) {
	                    selector = findSelectorForRoleWildcard(dataViewTable, selector);
	                }
	                return selector;
	            }
	            function findSelectorForRoleWildcard(dataViewTable, selector) {
	                var resultingSelector = {
	                    data: [],
	                    id: selector.id,
	                    metadata: selector.metadata
	                };
	                for (var _i = 0, _a = selector.data; _i < _a.length; _i++) {
	                    var dataSelector = _a[_i];
	                    if (data.Selector.isRoleWildcard(dataSelector)) {
	                        var selectorRoles = dataSelector.roles;
	                        var allColumnsBelongToSelectorRole = allColumnsBelongToRole(dataViewTable.columns, selectorRoles);
	                        var exprs = dataViewTable.identityFields;
	                        if (allColumnsBelongToSelectorRole && exprs) {
	                            resultingSelector.data.push(data.DataViewScopeWildcard.fromExprs(exprs));
	                            continue;
	                        }
	                    }
	                    if (isUniqueDataSelector(resultingSelector.data, dataSelector)) {
	                        resultingSelector.data.push(dataSelector);
	                    }
	                }
	                return resultingSelector;
	            }
	            function isUniqueDataSelector(dataSelectors, newSelector) {
	                if (_.isEmpty(dataSelectors))
	                    return true;
	                return !_.any(dataSelectors, function (dataSelector) { return dataSelector.key === newSelector.key; });
	            }
	            function allColumnsBelongToRole(columns, selectorRoles) {
	                for (var _i = 0, columns_2 = columns; _i < columns_2.length; _i++) {
	                    var column = columns_2[_i];
	                    var roles = column.roles;
	                    if (!roles || !_.any(selectorRoles, function (selectorRole) { return roles[selectorRole]; }))
	                        return false;
	                }
	                return true;
	            }
	            function evaluateDataRepetitionCategoricalCategory(dataViewCategorical, selectTransforms, objectDescriptors, selector, rules, containsWildcard, objectDefns, colorAllocatorCache) {
	                debug.assertValue(dataViewCategorical, 'dataViewCategorical');
	                debug.assertAnyValue(selectTransforms, 'selectTransforms');
	                debug.assertValue(objectDescriptors, 'objectDescriptors');
	                debug.assertValue(selector, 'selector');
	                debug.assertAnyValue(rules, 'rules');
	                debug.assertValue(containsWildcard, 'containsWildcard');
	                debug.assertValue(objectDefns, 'objectDefns');
	                debug.assertValue(colorAllocatorCache, 'colorAllocatorCache');
	                if (!dataViewCategorical.categories || dataViewCategorical.categories.length === 0)
	                    return;
	                var targetColumn = findSelectedCategoricalColumn(dataViewCategorical, selector);
	                if (!targetColumn)
	                    return;
	                var identities = targetColumn.identities, foundMatch, evalContext = data.createCategoricalEvalContext(colorAllocatorCache, dataViewCategorical, selectTransforms);
	                if (!identities)
	                    return;
	                debug.assert(targetColumn.column.values.length === identities.length, 'Column length mismatch');
	                for (var i = 0, len = identities.length; i < len; i++) {
	                    var identity = identities[i];
	                    if (containsWildcard || data.Selector.matchesData(selector, [identity])) {
	                        evalContext.setCurrentRowIndex(i);
	                        var objects = data.DataViewObjectEvaluationUtils.evaluateDataViewObjects(evalContext, objectDescriptors, objectDefns);
	                        if (objects) {
	                            // TODO: This mutates the DataView -- the assumption is that prototypal inheritance has already occurred.  We should
	                            // revisit this, likely when we do lazy evaluation of DataView.
	                            if (!targetColumn.column.objects) {
	                                targetColumn.column.objects = [];
	                                targetColumn.column.objects.length = len;
	                            }
	                            targetColumn.column.objects[i] = objects;
	                        }
	                        if (!containsWildcard)
	                            return true;
	                        foundMatch = true;
	                    }
	                }
	                return foundMatch;
	            }
	            function evaluateDataRepetitionCategoricalValueGrouping(dataViewCategorical, selectTransforms, objectDescriptors, selector, rules, containsWildcard, objectDefns, colorAllocatorCache) {
	                debug.assertValue(dataViewCategorical, 'dataViewCategorical');
	                debug.assertAnyValue(selectTransforms, 'selectTransforms');
	                debug.assertValue(objectDescriptors, 'objectDescriptors');
	                debug.assertValue(selector, 'selector');
	                debug.assertAnyValue(rules, 'rules');
	                debug.assertValue(containsWildcard, 'containsWildcard');
	                debug.assertValue(objectDefns, 'objectDefns');
	                debug.assertValue(colorAllocatorCache, 'colorAllocatorCache');
	                var dataViewCategoricalValues = dataViewCategorical.values;
	                if (!dataViewCategoricalValues || !dataViewCategoricalValues.identityFields)
	                    return;
	                if (!data.Selector.matchesKeys(selector, [dataViewCategoricalValues.identityFields]))
	                    return;
	                var valuesGrouped = dataViewCategoricalValues.grouped();
	                if (!valuesGrouped)
	                    return;
	                // NOTE: We do not set the evalContext row index below because iteration is over value groups (i.e., columns, no rows).
	                // This should be enhanced in the future.
	                var evalContext = data.createCategoricalEvalContext(colorAllocatorCache, dataViewCategorical, selectTransforms);
	                var foundMatch;
	                for (var i = 0, len = valuesGrouped.length; i < len; i++) {
	                    var valueGroup = valuesGrouped[i];
	                    var selectorMetadata = selector.metadata;
	                    var valuesInGroup = valueGroup.values;
	                    if (containsWildcard || data.Selector.matchesData(selector, [valueGroup.identity])) {
	                        var objects = data.DataViewObjectEvaluationUtils.evaluateDataViewObjects(evalContext, objectDescriptors, objectDefns);
	                        if (objects) {
	                            // TODO: This mutates the DataView -- the assumption is that prototypal inheritance has already occurred.  We should
	                            // revisit this, likely when we do lazy evaluation of DataView.
	                            if (selectorMetadata) {
	                                for (var j = 0, jlen = valuesInGroup.length; j < jlen; j++) {
	                                    var valueColumn = valuesInGroup[j], valueSource = valueColumn.source;
	                                    if (valueSource.queryName === selectorMetadata) {
	                                        var valueSourceOverwrite = powerbi.Prototype.inherit(valueSource);
	                                        valueSourceOverwrite.objects = objects;
	                                        valueColumn.source = valueSourceOverwrite;
	                                        foundMatch = true;
	                                        break;
	                                    }
	                                }
	                            }
	                            else {
	                                valueGroup.objects = objects;
	                                setGrouped(dataViewCategoricalValues, valuesGrouped);
	                                foundMatch = true;
	                            }
	                        }
	                        if (!containsWildcard)
	                            return true;
	                    }
	                }
	                return foundMatch;
	            }
	            function evaluateDataRepetitionMatrix(dataViewMatrix, objectDescriptors, selector, rules, containsWildcard, objectDefns, colorAllocatorCache) {
	                var evalContext = data.createMatrixEvalContext(colorAllocatorCache, dataViewMatrix);
	                var rewrittenRows = evaluateDataRepetitionMatrixHierarchy(evalContext, dataViewMatrix.rows, objectDescriptors, selector, rules, containsWildcard, objectDefns);
	                var rewrittenCols = evaluateDataRepetitionMatrixHierarchy(evalContext, dataViewMatrix.columns, objectDescriptors, selector, rules, containsWildcard, objectDefns);
	                if (rewrittenRows || rewrittenCols) {
	                    var rewrittenMatrix = inheritSingle(dataViewMatrix);
	                    if (rewrittenRows)
	                        rewrittenMatrix.rows = rewrittenRows;
	                    if (rewrittenCols)
	                        rewrittenMatrix.columns = rewrittenCols;
	                    return rewrittenMatrix;
	                }
	            }
	            function evaluateDataRepetitionMatrixHierarchy(evalContext, dataViewMatrixHierarchy, objectDescriptors, selector, rules, containsWildcard, objectDefns) {
	                debug.assertAnyValue(dataViewMatrixHierarchy, 'dataViewMatrixHierarchy');
	                debug.assertValue(objectDescriptors, 'objectDescriptors');
	                debug.assertValue(selector, 'selector');
	                debug.assertAnyValue(rules, 'rules');
	                debug.assertValue(objectDefns, 'objectDefns');
	                if (!dataViewMatrixHierarchy)
	                    return;
	                var root = dataViewMatrixHierarchy.root;
	                if (!root)
	                    return;
	                var rewrittenRoot = evaluateDataRepetitionMatrixNode(evalContext, root, objectDescriptors, selector, rules, containsWildcard, objectDefns);
	                if (rewrittenRoot) {
	                    var rewrittenHierarchy = inheritSingle(dataViewMatrixHierarchy);
	                    rewrittenHierarchy.root = rewrittenRoot;
	                    return rewrittenHierarchy;
	                }
	            }
	            function evaluateDataRepetitionMatrixNode(evalContext, dataViewNode, objectDescriptors, selector, rules, containsWildcard, objectDefns) {
	                debug.assertValue(evalContext, 'evalContext');
	                debug.assertValue(dataViewNode, 'dataViewNode');
	                debug.assertValue(objectDescriptors, 'objectDescriptors');
	                debug.assertValue(selector, 'selector');
	                debug.assertAnyValue(rules, 'rules');
	                debug.assertValue(objectDefns, 'objectDefns');
	                var childNodes = dataViewNode.children;
	                if (!childNodes)
	                    return;
	                var rewrittenNode;
	                var shouldSearchChildren;
	                var childIdentityFields = dataViewNode.childIdentityFields;
	                if (childIdentityFields) {
	                    // NOTE: selector matching in matrix currently only considers the current node, and does not consider parents as part of the match.
	                    shouldSearchChildren = data.Selector.matchesKeys(selector, [childIdentityFields]);
	                }
	                for (var i = 0, len = childNodes.length; i < len; i++) {
	                    var childNode = childNodes[i], identity = childNode.identity, rewrittenChildNode = null;
	                    if (shouldSearchChildren) {
	                        if (containsWildcard || data.Selector.matchesData(selector, [identity])) {
	                            // TODO: Need to initialize context for rule-based properties.  Rule-based properties
	                            // (such as fillRule/gradients) are not currently implemented.
	                            var objects = data.DataViewObjectEvaluationUtils.evaluateDataViewObjects(evalContext, objectDescriptors, objectDefns);
	                            if (objects) {
	                                rewrittenChildNode = inheritSingle(childNode);
	                                rewrittenChildNode.objects = objects;
	                            }
	                        }
	                    }
	                    else {
	                        rewrittenChildNode = evaluateDataRepetitionMatrixNode(evalContext, childNode, objectDescriptors, selector, rules, containsWildcard, objectDefns);
	                    }
	                    if (rewrittenChildNode) {
	                        if (!rewrittenNode)
	                            rewrittenNode = inheritNodeAndChildren(dataViewNode);
	                        rewrittenNode.children[i] = rewrittenChildNode;
	                        if (!containsWildcard) {
	                            // NOTE: once we find a match for a non-wildcard selector, stop looking.
	                            break;
	                        }
	                    }
	                }
	                return rewrittenNode;
	            }
	            function inheritNodeAndChildren(node) {
	                if (Object.getPrototypeOf(node) !== Object.prototype) {
	                    return node;
	                }
	                var inherited = inheritSingle(node);
	                inherited.children = inherit(node.children);
	                return inherited;
	            }
	            function evaluateDataRepetitionTable(dataViewTable, selectTransforms, objectDescriptors, selector, rules, containsWildcard, objectDefns, colorAllocatorCache) {
	                debug.assertValue(dataViewTable, 'dataViewTable');
	                debug.assertAnyValue(selectTransforms, 'selectTransforms');
	                debug.assertValue(objectDescriptors, 'objectDescriptors');
	                debug.assertValue(selector, 'selector');
	                debug.assertAnyValue(rules, 'rules');
	                debug.assertValue(objectDefns, 'objectDefns');
	                debug.assertValue(colorAllocatorCache, 'colorAllocatorCache');
	                var evalContext = data.createTableEvalContext(colorAllocatorCache, dataViewTable, selectTransforms);
	                var rewrittenRows = evaluateDataRepetitionTableRows(evalContext, dataViewTable.columns, dataViewTable.rows, dataViewTable.identity, dataViewTable.identityFields, objectDescriptors, selector, rules, containsWildcard, objectDefns);
	                if (rewrittenRows) {
	                    var rewrittenTable = inheritSingle(dataViewTable);
	                    rewrittenTable.rows = rewrittenRows;
	                    return rewrittenTable;
	                }
	            }
	            function evaluateDataRepetitionTableRows(evalContext, columns, rows, identities, identityFields, objectDescriptors, selector, rules, containsWildcard, objectDefns) {
	                debug.assertValue(evalContext, 'evalContext');
	                debug.assertValue(columns, 'columns');
	                debug.assertValue(rows, 'rows');
	                debug.assertAnyValue(identities, 'identities');
	                debug.assertAnyValue(identityFields, 'identityFields');
	                debug.assertValue(objectDescriptors, 'objectDescriptors');
	                debug.assertValue(selector, 'selector');
	                debug.assertAnyValue(rules, 'rules');
	                debug.assertValue(objectDefns, 'objectDefns');
	                if (_.isEmpty(identities) || _.isEmpty(identityFields))
	                    return;
	                if (!selector.metadata ||
	                    !data.Selector.matchesKeys(selector, [identityFields]))
	                    return;
	                var colIdx = _.findIndex(columns, function (col) { return col.queryName === selector.metadata; });
	                if (colIdx < 0)
	                    return;
	                debug.assert(rows.length === identities.length, 'row length mismatch');
	                var colLen = columns.length;
	                var inheritedRows;
	                for (var rowIdx = 0, rowLen = identities.length; rowIdx < rowLen; rowIdx++) {
	                    var identity = identities[rowIdx];
	                    if (containsWildcard || data.Selector.matchesData(selector, [identity])) {
	                        evalContext.setCurrentRowIndex(rowIdx);
	                        var objects = data.DataViewObjectEvaluationUtils.evaluateDataViewObjects(evalContext, objectDescriptors, objectDefns);
	                        if (objects) {
	                            if (!inheritedRows)
	                                inheritedRows = inheritSingle(rows);
	                            var inheritedRow = inheritedRows[rowIdx] = inheritSingle(inheritedRows[rowIdx]);
	                            var objectsForColumns = inheritedRow.objects;
	                            if (!objectsForColumns)
	                                inheritedRow.objects = objectsForColumns = new Array(colLen);
	                            objectsForColumns[colIdx] = objects;
	                        }
	                        if (!containsWildcard)
	                            break;
	                    }
	                }
	                return inheritedRows;
	            }
	            function evaluateMetadataRepetition(dataView, selectTransforms, objectDescriptors, selector, objectDefns, colorAllocatorCache) {
	                debug.assertValue(dataView, 'dataView');
	                debug.assertAnyValue(selectTransforms, 'selectTransforms');
	                debug.assertValue(objectDescriptors, 'objectDescriptors');
	                debug.assertValue(selector, 'selector');
	                debug.assertValue(objectDefns, 'objectDefns');
	                debug.assertValue(colorAllocatorCache, 'colorAllocatorCache');
	                // TODO: This mutates the DataView -- the assumption is that prototypal inheritance has already occurred.  We should
	                // revisit this, likely when we do lazy evaluation of DataView.
	                var columns = dataView.metadata.columns, metadataId = selector.metadata, evalContext = data.createStaticEvalContext(colorAllocatorCache, dataView, selectTransforms);
	                for (var i = 0, len = columns.length; i < len; i++) {
	                    var column = columns[i];
	                    if (column.queryName === metadataId) {
	                        var objects = data.DataViewObjectEvaluationUtils.evaluateDataViewObjects(evalContext, objectDescriptors, objectDefns);
	                        if (objects)
	                            column.objects = objects;
	                    }
	                }
	            }
	            /** Attempts to find a column that can possibly match the selector. */
	            function findSelectedCategoricalColumn(dataViewCategorical, selector) {
	                debug.assertValue(dataViewCategorical.categories[0], 'dataViewCategorical.categories[0]');
	                var categoricalColumn = dataViewCategorical.categories[0];
	                if (!categoricalColumn.identityFields)
	                    return;
	                if (!data.Selector.matchesKeys(selector, [categoricalColumn.identityFields]))
	                    return;
	                var identities = categoricalColumn.identity, targetColumn = categoricalColumn;
	                var selectedMetadataId = selector.metadata;
	                if (selectedMetadataId) {
	                    var valueColumns = dataViewCategorical.values;
	                    if (valueColumns) {
	                        for (var i = 0, len = valueColumns.length; i < len; i++) {
	                            var valueColumn = valueColumns[i];
	                            if (valueColumn.source.queryName === selectedMetadataId) {
	                                targetColumn = valueColumn;
	                                break;
	                            }
	                        }
	                    }
	                }
	                return {
	                    column: targetColumn,
	                    identities: identities,
	                };
	            }
	            function findSelectorForRuleInput(dataView, selectorRoles) {
	                debug.assertValue(dataView, 'dataView');
	                debug.assertValue(selectorRoles, 'selectorRoles');
	                if (selectorRoles.length !== 1)
	                    return;
	                var dataViewCategorical = dataView.categorical;
	                if (!dataViewCategorical)
	                    return;
	                var categories = dataViewCategorical.categories;
	                if (!categories || categories.length !== 1)
	                    return;
	                var categoryColumn = categories[0], categoryRoles = categoryColumn.source.roles, categoryIdentityFields = categoryColumn.identityFields;
	                if (!categoryRoles || !categoryIdentityFields || !categoryRoles[selectorRoles[0]])
	                    return;
	                return { data: [data.DataViewScopeWildcard.fromExprs(categoryIdentityFields)] };
	            }
	            function findFirstQueryNameForExpr(selectTransforms, expr) {
	                debug.assertAnyValue(selectTransforms, 'selectTransforms');
	                debug.assertValue(expr, 'expr');
	                if (data.SQExpr.isSelectRef(expr))
	                    return expr.expressionName;
	                if (!selectTransforms)
	                    return;
	                for (var i = 0, len = selectTransforms.length; i < len; i++) {
	                    var select = selectTransforms[i], columnExpr = select.expr;
	                    if (!columnExpr || !data.SQExpr.equals(expr, select.expr))
	                        continue;
	                    return select.queryName;
	                }
	            }
	            /** Attempts to find the value range for the single column with the given identifier/identifierKind. */
	            function findRuleInputColumnNumberRange(dataView, identifier, identifierKind) {
	                debug.assertValue(dataView, 'dataView');
	                debug.assertValue(identifier, 'identifier');
	                debug.assertValue(identifierKind, 'identifierKind');
	                var columns = dataView.metadata.columns;
	                for (var i = 0, len = columns.length; i < len; i++) {
	                    var column = columns[i];
	                    if (identifierKind === 1 /* Role */) {
	                        var valueColRoles = column.roles;
	                        if (!valueColRoles || !valueColRoles[identifier])
	                            continue;
	                    }
	                    else {
	                        debug.assert(identifierKind === 0 /* QueryName */, 'identifierKind === ColumnIdentifierKind.QueryName');
	                        if (column.queryName !== identifier)
	                            continue;
	                    }
	                    var aggregates = column.aggregates;
	                    if (!aggregates)
	                        continue;
	                    var min = aggregates.min;
	                    if (min === undefined)
	                        min = aggregates.minLocal;
	                    if (min === undefined)
	                        continue;
	                    var max = aggregates.max;
	                    if (max === undefined)
	                        max = aggregates.maxLocal;
	                    if (max === undefined)
	                        continue;
	                    return { min: min, max: max };
	                }
	            }
	            // TODO: refactor this, setGrouped, and groupValues to a test helper to stop using it in the product
	            function createValueColumns(values, valueIdentityFields, source) {
	                if (values === void 0) { values = []; }
	                var result = values;
	                setGrouped(values);
	                if (valueIdentityFields)
	                    result.identityFields = valueIdentityFields;
	                if (source)
	                    result.source = source;
	                return result;
	            }
	            DataViewTransform.createValueColumns = createValueColumns;
	            function setGrouped(values, groupedResult) {
	                values.grouped = groupedResult
	                    ? function () { return groupedResult; }
	                    : function () { return groupValues(values); };
	            }
	            DataViewTransform.setGrouped = setGrouped;
	            /** Group together the values with a common identity. */
	            function groupValues(values) {
	                debug.assertValue(values, 'values');
	                var groups = [], currentGroup;
	                for (var i = 0, len = values.length; i < len; i++) {
	                    var value = values[i];
	                    if (!currentGroup || currentGroup.identity !== value.identity) {
	                        currentGroup = {
	                            values: []
	                        };
	                        if (value.identity) {
	                            currentGroup.identity = value.identity;
	                            var source = value.source;
	                            // allow null, which will be formatted as (Blank).
	                            if (source.groupName !== undefined)
	                                currentGroup.name = source.groupName;
	                            else if (source.displayName)
	                                currentGroup.name = source.displayName;
	                        }
	                        groups.push(currentGroup);
	                    }
	                    currentGroup.values.push(value);
	                }
	                return groups;
	            }
	            function pivotIfNecessary(dataView, dataViewMappings) {
	                debug.assertValue(dataView, 'dataView');
	                var transformedDataView;
	                switch (determineCategoricalTransformation(dataView.categorical, dataViewMappings)) {
	                    case 1 /* Pivot */:
	                        transformedDataView = data.DataViewPivotCategorical.apply(dataView);
	                        break;
	                    case 2 /* SelfCrossJoin */:
	                        transformedDataView = data.DataViewSelfCrossJoin.apply(dataView);
	                        break;
	                }
	                return transformedDataView || dataView;
	            }
	            function determineCategoricalTransformation(categorical, dataViewMappings) {
	                if (!categorical || _.isEmpty(dataViewMappings))
	                    return;
	                var categories = categorical.categories;
	                if (!categories || categories.length !== 1)
	                    return;
	                var values = categorical.values;
	                if (_.isEmpty(values))
	                    return;
	                if (values.grouped().some(function (vg) { return !!vg.identity; }))
	                    return;
	                // If we made it here, the DataView has a single category and no valueGrouping.
	                var categoryRoles = categories[0].source.roles;
	                for (var i = 0, len = dataViewMappings.length; i < len; i++) {
	                    var roleMappingCategorical = dataViewMappings[i].categorical;
	                    if (!roleMappingCategorical)
	                        continue;
	                    if (!hasRolesGrouped(categoryRoles, roleMappingCategorical.values))
	                        continue;
	                    // If we made it here, the DataView's single category has the value grouping role.
	                    var categoriesMapping = roleMappingCategorical.categories;
	                    var hasCategoryRole = hasRolesBind(categoryRoles, categoriesMapping) ||
	                        hasRolesFor(categoryRoles, categoriesMapping);
	                    if (hasCategoryRole)
	                        return 2 /* SelfCrossJoin */;
	                    return 1 /* Pivot */;
	                }
	            }
	            function shouldPivotMatrix(matrix, dataViewMappings) {
	                if (!matrix || _.isEmpty(dataViewMappings))
	                    return;
	                var rowLevels = matrix.rows.levels;
	                if (rowLevels.length < 1)
	                    return;
	                var rows = matrix.rows.root.children;
	                if (!rows || rows.length === 0)
	                    return;
	                var rowRoles = rowLevels[0].sources[0].roles;
	                for (var i = 0, len = dataViewMappings.length; i < len; i++) {
	                    var roleMappingMatrix = dataViewMappings[i].matrix;
	                    if (!roleMappingMatrix)
	                        continue;
	                    if (!hasRolesFor(rowRoles, roleMappingMatrix.rows) &&
	                        hasRolesFor(rowRoles, roleMappingMatrix.columns)) {
	                        return true;
	                    }
	                }
	            }
	            function hasRolesBind(roles, roleMapping) {
	                if (roles && roleMapping && roleMapping.bind)
	                    return roles[roleMapping.bind.to];
	            }
	            function hasRolesFor(roles, roleMapping) {
	                if (roles && roleMapping && roleMapping.for)
	                    return roles[roleMapping.for.in];
	            }
	            function hasRolesGrouped(roles, roleMapping) {
	                if (roles && roleMapping && roleMapping.group)
	                    return roles[roleMapping.group.by];
	            }
	        })(DataViewTransform = data.DataViewTransform || (data.DataViewTransform = {}));
	    })(data = powerbi.data || (powerbi.data = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 83 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var DataViewScopeIdentity;
	    (function (DataViewScopeIdentity) {
	        /** Compares the two DataViewScopeIdentity values for equality. */
	        function equals(x, y, ignoreCase) {
	            // Normalize falsy to null
	            x = x || null;
	            y = y || null;
	            if (x === y)
	                return true;
	            if (!x !== !y)
	                return false;
	            debug.assertValue(x, 'x');
	            debug.assertValue(y, 'y');
	            return data.SQExpr.equals(x.expr, y.expr, ignoreCase);
	        }
	        DataViewScopeIdentity.equals = equals;
	        function filterFromIdentity(identities, isNot) {
	            if (_.isEmpty(identities))
	                return;
	            var exprs = [];
	            for (var _i = 0, identities_1 = identities; _i < identities_1.length; _i++) {
	                var identity = identities_1[_i];
	                exprs.push(identity.expr);
	            }
	            return filterFromExprs(exprs, isNot);
	        }
	        DataViewScopeIdentity.filterFromIdentity = filterFromIdentity;
	        function filterFromExprs(orExprs, isNot) {
	            if (_.isEmpty(orExprs))
	                return;
	            var resultExpr;
	            for (var _i = 0, orExprs_1 = orExprs; _i < orExprs_1.length; _i++) {
	                var orExpr = orExprs_1[_i];
	                var inExpr = data.ScopeIdentityExtractor.getInExpr(orExpr);
	                if (resultExpr)
	                    resultExpr = data.SQExprBuilder.or(resultExpr, inExpr);
	                else
	                    resultExpr = inExpr || orExpr;
	            }
	            if (resultExpr) {
	                if (isNot)
	                    resultExpr = powerbi.data.SQExprBuilder.not(resultExpr);
	            }
	            return powerbi.data.SemanticFilter.fromSQExpr(resultExpr);
	        }
	        DataViewScopeIdentity.filterFromExprs = filterFromExprs;
	    })(DataViewScopeIdentity = powerbi.DataViewScopeIdentity || (powerbi.DataViewScopeIdentity = {}));
	    var data;
	    (function (data) {
	        var Lazy = jsCommon.Lazy;
	        function createDataViewScopeIdentity(expr) {
	            return new DataViewScopeIdentityImpl(expr);
	        }
	        data.createDataViewScopeIdentity = createDataViewScopeIdentity;
	        var DataViewScopeIdentityImpl = (function () {
	            function DataViewScopeIdentityImpl(expr) {
	                debug.assertValue(expr, 'expr');
	                this._expr = expr;
	                this._key = new Lazy(function () { return data.SQExprShortSerializer.serialize(expr); });
	            }
	            Object.defineProperty(DataViewScopeIdentityImpl.prototype, "expr", {
	                get: function () {
	                    return this._expr;
	                },
	                enumerable: true,
	                configurable: true
	            });
	            Object.defineProperty(DataViewScopeIdentityImpl.prototype, "key", {
	                get: function () {
	                    return this._key.getValue();
	                },
	                enumerable: true,
	                configurable: true
	            });
	            return DataViewScopeIdentityImpl;
	        }());
	    })(data = powerbi.data || (powerbi.data = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 84 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var data;
	    (function (data) {
	        var PrimitiveValueEncoding;
	        (function (PrimitiveValueEncoding) {
	            var SingleQuoteRegex = /'/g;
	            function decimal(value) {
	                debug.assertValue(value, 'value');
	                return value + 'M';
	            }
	            PrimitiveValueEncoding.decimal = decimal;
	            function double(value) {
	                debug.assertValue(value, 'value');
	                return value + 'D';
	            }
	            PrimitiveValueEncoding.double = double;
	            function integer(value) {
	                debug.assertValue(value, 'value');
	                return value + 'L';
	            }
	            PrimitiveValueEncoding.integer = integer;
	            function dateTime(value) {
	                debug.assertValue(value, 'value');
	                // Currently, server doesn't support timezone. All date time data on the server don't have time zone information.
	                // So, when we construct a dateTime object on the client, we will need to ignor user's time zone and force it to be UTC time.
	                // When we subtract the timeZone offset, the date time object will remain the same value as you entered but dropped the local timeZone.
	                var date = new Date(value.getTime() - (value.getTimezoneOffset() * 60000));
	                var dateTimeString = date.toISOString();
	                // If it ends with Z, we want to get rid of it, because with trailing Z, it will assume the dateTime is UTC, but we don't want any timeZone information, so
	                // we will drop it.
	                // Also, we need to add Prefix and Suffix to match the dsr value format for dateTime object.
	                if (jsCommon.StringExtensions.endsWith(dateTimeString, 'Z'))
	                    dateTimeString = dateTimeString.substr(0, dateTimeString.length - 1);
	                return "datetime'" + dateTimeString + "'";
	            }
	            PrimitiveValueEncoding.dateTime = dateTime;
	            function text(value) {
	                debug.assertValue(value, 'value');
	                return "'" + value.replace(SingleQuoteRegex, "''") + "'";
	            }
	            PrimitiveValueEncoding.text = text;
	            function nullEncoding() {
	                return 'null';
	            }
	            PrimitiveValueEncoding.nullEncoding = nullEncoding;
	            function boolean(value) {
	                return value ? 'true' : 'false';
	            }
	            PrimitiveValueEncoding.boolean = boolean;
	        })(PrimitiveValueEncoding = data.PrimitiveValueEncoding || (data.PrimitiveValueEncoding = {}));
	    })(data = powerbi.data || (powerbi.data = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 85 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var data;
	    (function (data) {
	        var ArrayExtensions = jsCommon.ArrayExtensions;
	        /** Rewrites an expression tree, including all descendant nodes. */
	        var SQExprRewriter = (function () {
	            function SQExprRewriter() {
	            }
	            SQExprRewriter.prototype.visitColumnRef = function (expr) {
	                var origArg = expr.source, rewrittenArg = origArg.accept(this);
	                if (origArg === rewrittenArg)
	                    return expr;
	                return new data.SQColumnRefExpr(rewrittenArg, expr.ref);
	            };
	            SQExprRewriter.prototype.visitMeasureRef = function (expr) {
	                var origArg = expr.source, rewrittenArg = origArg.accept(this);
	                if (origArg === rewrittenArg)
	                    return expr;
	                return new data.SQMeasureRefExpr(rewrittenArg, expr.ref);
	            };
	            SQExprRewriter.prototype.visitAggr = function (expr) {
	                var origArg = expr.arg, rewrittenArg = origArg.accept(this);
	                if (origArg === rewrittenArg)
	                    return expr;
	                return new data.SQAggregationExpr(rewrittenArg, expr.func);
	            };
	            SQExprRewriter.prototype.visitSelectRef = function (expr) {
	                return expr;
	            };
	            SQExprRewriter.prototype.visitPercentile = function (expr) {
	                var origArg = expr.arg, rewrittenArg = origArg.accept(this);
	                if (origArg === rewrittenArg)
	                    return expr;
	                return new data.SQPercentileExpr(rewrittenArg, expr.k, expr.exclusive);
	            };
	            SQExprRewriter.prototype.visitHierarchy = function (expr) {
	                var origArg = expr.arg, rewrittenArg = origArg.accept(this);
	                if (origArg === rewrittenArg)
	                    return expr;
	                return new data.SQHierarchyExpr(rewrittenArg, expr.hierarchy);
	            };
	            SQExprRewriter.prototype.visitHierarchyLevel = function (expr) {
	                var origArg = expr.arg, rewrittenArg = origArg.accept(this);
	                if (origArg === rewrittenArg)
	                    return expr;
	                return new data.SQHierarchyLevelExpr(rewrittenArg, expr.level);
	            };
	            SQExprRewriter.prototype.visitPropertyVariationSource = function (expr) {
	                var origArg = expr.arg, rewrittenArg = origArg.accept(this);
	                if (origArg === rewrittenArg)
	                    return expr;
	                return new data.SQPropertyVariationSourceExpr(rewrittenArg, expr.name, expr.property);
	            };
	            SQExprRewriter.prototype.visitEntity = function (expr) {
	                return expr;
	            };
	            SQExprRewriter.prototype.visitAnd = function (orig) {
	                var origLeft = orig.left, rewrittenLeft = origLeft.accept(this), origRight = orig.right, rewrittenRight = origRight.accept(this);
	                if (origLeft === rewrittenLeft && origRight === rewrittenRight)
	                    return orig;
	                return new data.SQAndExpr(rewrittenLeft, rewrittenRight);
	            };
	            SQExprRewriter.prototype.visitBetween = function (orig) {
	                var origArg = orig.arg, rewrittenArg = origArg.accept(this), origLower = orig.lower, rewrittenLower = origLower.accept(this), origUpper = orig.upper, rewrittenUpper = origUpper.accept(this);
	                if (origArg === rewrittenArg && origLower === rewrittenLower && origUpper === rewrittenUpper)
	                    return orig;
	                return new data.SQBetweenExpr(rewrittenArg, rewrittenLower, rewrittenUpper);
	            };
	            SQExprRewriter.prototype.visitIn = function (orig) {
	                var origArgs = orig.args, rewrittenArgs = this.rewriteAll(origArgs), origValues = orig.values, rewrittenValues;
	                for (var i = 0, len = origValues.length; i < len; i++) {
	                    var origValueTuple = origValues[i], rewrittenValueTuple = this.rewriteAll(origValueTuple);
	                    if (origValueTuple !== rewrittenValueTuple && !rewrittenValues)
	                        rewrittenValues = ArrayExtensions.take(origValues, i);
	                    if (rewrittenValues)
	                        rewrittenValues.push(rewrittenValueTuple);
	                }
	                if (origArgs === rewrittenArgs && !rewrittenValues)
	                    return orig;
	                return new data.SQInExpr(rewrittenArgs, rewrittenValues || origValues);
	            };
	            SQExprRewriter.prototype.rewriteAll = function (origExprs) {
	                debug.assertValue(origExprs, 'origExprs');
	                var rewrittenResult;
	                for (var i = 0, len = origExprs.length; i < len; i++) {
	                    var origExpr = origExprs[i], rewrittenExpr = origExpr.accept(this);
	                    if (origExpr !== rewrittenExpr && !rewrittenResult)
	                        rewrittenResult = ArrayExtensions.take(origExprs, i);
	                    if (rewrittenResult)
	                        rewrittenResult.push(rewrittenExpr);
	                }
	                return rewrittenResult || origExprs;
	            };
	            SQExprRewriter.prototype.visitOr = function (orig) {
	                var origLeft = orig.left, rewrittenLeft = origLeft.accept(this), origRight = orig.right, rewrittenRight = origRight.accept(this);
	                if (origLeft === rewrittenLeft && origRight === rewrittenRight)
	                    return orig;
	                return new data.SQOrExpr(rewrittenLeft, rewrittenRight);
	            };
	            SQExprRewriter.prototype.visitCompare = function (orig) {
	                var origLeft = orig.left, rewrittenLeft = origLeft.accept(this), origRight = orig.right, rewrittenRight = origRight.accept(this);
	                if (origLeft === rewrittenLeft && origRight === rewrittenRight)
	                    return orig;
	                return new data.SQCompareExpr(orig.comparison, rewrittenLeft, rewrittenRight);
	            };
	            SQExprRewriter.prototype.visitContains = function (orig) {
	                var origLeft = orig.left, rewrittenLeft = origLeft.accept(this), origRight = orig.right, rewrittenRight = origRight.accept(this);
	                if (origLeft === rewrittenLeft && origRight === rewrittenRight)
	                    return orig;
	                return new data.SQContainsExpr(rewrittenLeft, rewrittenRight);
	            };
	            SQExprRewriter.prototype.visitExists = function (orig) {
	                var origArg = orig.arg, rewrittenArg = origArg.accept(this);
	                if (origArg === rewrittenArg)
	                    return orig;
	                return new data.SQExistsExpr(rewrittenArg);
	            };
	            SQExprRewriter.prototype.visitNot = function (orig) {
	                var origArg = orig.arg, rewrittenArg = origArg.accept(this);
	                if (origArg === rewrittenArg)
	                    return orig;
	                return new data.SQNotExpr(rewrittenArg);
	            };
	            SQExprRewriter.prototype.visitStartsWith = function (orig) {
	                var origLeft = orig.left, rewrittenLeft = origLeft.accept(this), origRight = orig.right, rewrittenRight = origRight.accept(this);
	                if (origLeft === rewrittenLeft && origRight === rewrittenRight)
	                    return orig;
	                return new data.SQStartsWithExpr(rewrittenLeft, rewrittenRight);
	            };
	            SQExprRewriter.prototype.visitConstant = function (expr) {
	                return expr;
	            };
	            SQExprRewriter.prototype.visitDateSpan = function (orig) {
	                var origArg = orig.arg, rewrittenArg = origArg.accept(this);
	                if (origArg === rewrittenArg)
	                    return orig;
	                return new data.SQDateSpanExpr(orig.unit, rewrittenArg);
	            };
	            SQExprRewriter.prototype.visitDateAdd = function (orig) {
	                var origArg = orig.arg, rewrittenArg = origArg.accept(this);
	                if (origArg === rewrittenArg)
	                    return orig;
	                return new data.SQDateAddExpr(orig.unit, orig.amount, rewrittenArg);
	            };
	            SQExprRewriter.prototype.visitNow = function (orig) {
	                return orig;
	            };
	            SQExprRewriter.prototype.visitDefaultValue = function (orig) {
	                return orig;
	            };
	            SQExprRewriter.prototype.visitAnyValue = function (orig) {
	                return orig;
	            };
	            SQExprRewriter.prototype.visitArithmetic = function (orig) {
	                var origLeft = orig.left, rewrittenLeft = origLeft.accept(this), origRight = orig.right, rewrittenRight = origRight.accept(this);
	                if (origLeft === rewrittenLeft && origRight === rewrittenRight)
	                    return orig;
	                return new data.SQArithmeticExpr(rewrittenLeft, rewrittenRight, orig.operator);
	            };
	            SQExprRewriter.prototype.visitScopedEval = function (orig) {
	                var origExpression = orig.expression, rewrittenExpression = origExpression.accept(this), origScope = orig.scope, rewrittenScope = this.rewriteAll(origScope);
	                if (origExpression === rewrittenExpression && origScope === rewrittenScope)
	                    return orig;
	                return new data.SQScopedEvalExpr(rewrittenExpression, rewrittenScope);
	            };
	            SQExprRewriter.prototype.visitWithRef = function (orig) {
	                return orig;
	            };
	            SQExprRewriter.prototype.visitTransformTableRef = function (orig) {
	                return orig;
	            };
	            SQExprRewriter.prototype.visitTransformOutputRoleRef = function (orig) {
	                return orig;
	            };
	            SQExprRewriter.prototype.visitFillRule = function (orig) {
	                var origInput = orig.input, rewrittenInput = origInput.accept(this);
	                var origRule = orig.rule;
	                var origGradient2 = origRule.linearGradient2, rewrittenGradient2 = origGradient2;
	                if (origGradient2) {
	                    rewrittenGradient2 = this.visitLinearGradient2(origGradient2);
	                }
	                var origGradient3 = origRule.linearGradient3, rewrittenGradient3 = origGradient3;
	                if (origGradient3) {
	                    rewrittenGradient3 = this.visitLinearGradient3(origGradient3);
	                }
	                if (origInput !== rewrittenInput ||
	                    origGradient2 !== rewrittenGradient2 ||
	                    origGradient3 !== rewrittenGradient3) {
	                    var rewrittenRule = {};
	                    if (rewrittenGradient2)
	                        rewrittenRule.linearGradient2 = rewrittenGradient2;
	                    if (rewrittenGradient3)
	                        rewrittenRule.linearGradient3 = rewrittenGradient3;
	                    return new data.SQFillRuleExpr(rewrittenInput, rewrittenRule);
	                }
	                return orig;
	            };
	            SQExprRewriter.prototype.visitLinearGradient2 = function (origGradient2) {
	                debug.assertValue(origGradient2, 'origGradient2');
	                var origMin = origGradient2.min, rewrittenMin = this.visitFillRuleStop(origMin), origMax = origGradient2.max, rewrittenMax = this.visitFillRuleStop(origMax);
	                if (origMin !== rewrittenMin || origMax !== rewrittenMax) {
	                    return {
	                        min: rewrittenMin,
	                        max: rewrittenMax,
	                    };
	                }
	                return origGradient2;
	            };
	            SQExprRewriter.prototype.visitLinearGradient3 = function (origGradient3) {
	                debug.assertValue(origGradient3, 'origGradient3');
	                var origMin = origGradient3.min, rewrittenMin = this.visitFillRuleStop(origMin), origMid = origGradient3.mid, rewrittenMid = this.visitFillRuleStop(origMid), origMax = origGradient3.max, rewrittenMax = this.visitFillRuleStop(origMax);
	                if (origMin !== rewrittenMin || origMid !== rewrittenMid || origMax !== rewrittenMax) {
	                    return {
	                        min: rewrittenMin,
	                        mid: rewrittenMid,
	                        max: rewrittenMax,
	                    };
	                }
	                return origGradient3;
	            };
	            SQExprRewriter.prototype.visitFillRuleStop = function (stop) {
	                debug.assertValue(stop, 'stop');
	                var origColor = stop.color, rewrittenColor = stop.color.accept(this);
	                var origValue = stop.value, rewrittenValue = origValue;
	                if (origValue)
	                    rewrittenValue = origValue.accept(this);
	                if (origColor !== rewrittenColor || origValue !== rewrittenValue) {
	                    var rewrittenStop = {
	                        color: rewrittenColor
	                    };
	                    if (rewrittenValue)
	                        rewrittenStop.value = rewrittenValue;
	                    return rewrittenStop;
	                }
	                return stop;
	            };
	            SQExprRewriter.prototype.visitResourcePackageItem = function (orig) {
	                return orig;
	            };
	            return SQExprRewriter;
	        }());
	        data.SQExprRewriter = SQExprRewriter;
	    })(data = powerbi.data || (powerbi.data = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 86 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var data;
	    (function (data) {
	        var StringExtensions = jsCommon.StringExtensions;
	        /** Represents an immutable expression within a SemanticQuery. */
	        var SQExpr = (function () {
	            function SQExpr(kind) {
	                debug.assertValue(kind, 'kind');
	                this._kind = kind;
	            }
	            SQExpr.equals = function (x, y, ignoreCase) {
	                return SQExprEqualityVisitor.run(x, y, ignoreCase);
	            };
	            SQExpr.prototype.validate = function (schema, aggrUtils, errors) {
	                var validator = new SQExprValidationVisitor(schema, aggrUtils, errors);
	                this.accept(validator);
	                return validator.errors;
	            };
	            SQExpr.prototype.accept = function (visitor, arg) {
	                debug.assertFail('abstract method');
	                return;
	            };
	            Object.defineProperty(SQExpr.prototype, "kind", {
	                get: function () {
	                    return this._kind;
	                },
	                enumerable: true,
	                configurable: true
	            });
	            SQExpr.isArithmetic = function (expr) {
	                debug.assertValue(expr, 'expr');
	                return expr.kind === 22 /* Arithmetic */;
	            };
	            SQExpr.isColumn = function (expr) {
	                debug.assertValue(expr, 'expr');
	                return expr.kind === 1 /* ColumnRef */;
	            };
	            SQExpr.isConstant = function (expr) {
	                debug.assertValue(expr, 'expr');
	                return expr.kind === 16 /* Constant */;
	            };
	            SQExpr.isEntity = function (expr) {
	                debug.assertValue(expr, 'expr');
	                return expr.kind === 0 /* Entity */;
	            };
	            SQExpr.isHierarchy = function (expr) {
	                debug.assertValue(expr, 'expr');
	                return expr.kind === 5 /* Hierarchy */;
	            };
	            SQExpr.isHierarchyLevel = function (expr) {
	                debug.assertValue(expr, 'expr');
	                return expr.kind === 6 /* HierarchyLevel */;
	            };
	            SQExpr.isAggregation = function (expr) {
	                debug.assertValue(expr, 'expr');
	                return expr.kind === 3 /* Aggregation */;
	            };
	            SQExpr.isMeasure = function (expr) {
	                debug.assertValue(expr, 'expr');
	                return expr.kind === 2 /* MeasureRef */;
	            };
	            SQExpr.isSelectRef = function (expr) {
	                debug.assertValue(expr, 'expr');
	                return expr.kind === 28 /* SelectRef */;
	            };
	            SQExpr.isScopedEval = function (expr) {
	                debug.assertValue(expr, 'expr');
	                return expr.kind === 25 /* ScopedEval */;
	            };
	            SQExpr.isWithRef = function (expr) {
	                debug.assertValue(expr, 'expr');
	                return expr.kind === 26 /* WithRef */;
	            };
	            SQExpr.isTransformTableRef = function (expr) {
	                debug.assertValue(expr, 'expr');
	                return expr.kind === 29 /* TransformTableRef */;
	            };
	            SQExpr.isTransformOutputRoleRef = function (expr) {
	                debug.assertValue(expr, 'expr');
	                return expr.kind === 30 /* TransformOutputRoleRef */;
	            };
	            SQExpr.isResourcePackageItem = function (expr) {
	                debug.assertValue(expr, 'expr');
	                return expr.kind === 24 /* ResourcePackageItem */;
	            };
	            SQExpr.prototype.getMetadata = function (federatedSchema) {
	                debug.assertValue(federatedSchema, 'federatedSchema');
	                var field = data.SQExprConverter.asFieldPattern(this);
	                if (!field)
	                    return;
	                if (field.column || field.columnAggr || field.measure)
	                    return this.getMetadataForProperty(field, federatedSchema);
	                if (field.hierarchyLevel || field.hierarchyLevelAggr)
	                    return this.getMetadataForHierarchyLevel(field, federatedSchema);
	                if (field.columnHierarchyLevelVariation)
	                    return this.getMetadataForVariation(field, federatedSchema);
	                if (field.percentOfGrandTotal)
	                    return this.getMetadataForPercentOfGrandTotal();
	                return SQExpr.getMetadataForEntity(field, federatedSchema);
	            };
	            SQExpr.prototype.getDefaultAggregate = function (federatedSchema, forceAggregation) {
	                if (forceAggregation === void 0) { forceAggregation = false; }
	                debug.assertValue(federatedSchema, 'federatedSchema');
	                var property = this.getConceptualProperty(federatedSchema) || this.getHierarchyLevelConceptualProperty(federatedSchema);
	                if (!property)
	                    return;
	                var aggregate;
	                if (property && property.kind === 0 /* Column */) {
	                    var propertyDefaultAggregate = property.column ? property.column.defaultAggregate : null;
	                    if ((property.type.integer || property.type.numeric) &&
	                        propertyDefaultAggregate !== 1 /* None */) {
	                        aggregate = defaultAggregateToQueryAggregateFunction(propertyDefaultAggregate);
	                        if (aggregate === undefined)
	                            aggregate = defaultAggregateForDataType(property.type);
	                    }
	                    // If we haven't found an appropriate aggregate, and want to force aggregation anyway, 
	                    // aggregate on CountNonNull.
	                    if (aggregate === undefined && forceAggregation) {
	                        aggregate = data.QueryAggregateFunction.CountNonNull;
	                    }
	                }
	                return aggregate;
	            };
	            /** Return the SQExpr[] of group on columns if it has group on keys otherwise return the SQExpr of the column.*/
	            SQExpr.prototype.getKeyColumns = function (schema) {
	                var columnRefExpr = SQExprColumnRefInfoVisitor.getColumnRefSQExpr(schema, this);
	                if (!columnRefExpr)
	                    return;
	                var keySQExprs = [];
	                var keys = this.getPropertyKeys(schema);
	                if (keys && keys.length > 0) {
	                    for (var i = 0, len = keys.length; i < len; i++) {
	                        keySQExprs.push(SQExprBuilder.columnRef(columnRefExpr.source, keys[i].name));
	                    }
	                }
	                else
	                    keySQExprs.push(columnRefExpr);
	                return keySQExprs;
	            };
	            /** Returns a value indicating whether the expression would group on keys other than itself.*/
	            SQExpr.prototype.hasGroupOnKeys = function (schema) {
	                var columnRefExpr = SQExprColumnRefInfoVisitor.getColumnRefSQExpr(schema, this);
	                if (!columnRefExpr)
	                    return;
	                var keys = this.getPropertyKeys(schema);
	                if (!keys || keys.length < 1)
	                    return false;
	                if (keys.length > 1)
	                    return true;
	                var keySqExpr = SQExprBuilder.columnRef(columnRefExpr.source, keys[0].name);
	                return !SQExpr.equals(keySqExpr, this);
	            };
	            SQExpr.prototype.getPropertyKeys = function (schema) {
	                var property = this.getConceptualProperty(schema) || this.getHierarchyLevelConceptualProperty(schema);
	                if (!property)
	                    return;
	                return property.column ? property.column.keys : undefined;
	            };
	            SQExpr.prototype.getConceptualProperty = function (federatedSchema) {
	                var field = data.SQExprConverter.asFieldPattern(this);
	                if (!field)
	                    return;
	                var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(field);
	                var propertyName = data.FieldExprPattern.getPropertyName(field);
	                if (propertyName)
	                    return federatedSchema
	                        .schema(fieldExprItem.schema)
	                        .findProperty(fieldExprItem.entity, propertyName);
	            };
	            SQExpr.prototype.getTargetEntityForVariation = function (federatedSchema, variationName) {
	                var property = this.getConceptualProperty(federatedSchema);
	                if (property && property.column && !_.isEmpty(property.column.variations)) {
	                    var variations = property.column.variations;
	                    for (var _i = 0, variations_1 = variations; _i < variations_1.length; _i++) {
	                        var variation = variations_1[_i];
	                        if (variation.name === variationName)
	                            return variation.navigationProperty.targetEntity.name;
	                    }
	                }
	            };
	            SQExpr.prototype.getTargetEntity = function (federatedSchema) {
	                return SQEntityExprInfoVisitor.getEntityExpr(federatedSchema, this);
	            };
	            SQExpr.prototype.getHierarchyLevelConceptualProperty = function (federatedSchema) {
	                var field = data.SQExprConverter.asFieldPattern(this);
	                if (!field)
	                    return;
	                var fieldExprHierachyLevel = field.hierarchyLevel || field.hierarchyLevelAggr;
	                if (fieldExprHierachyLevel) {
	                    var fieldExprEntity = data.FieldExprPattern.toFieldExprEntityItemPattern(field);
	                    var hierarchy = federatedSchema
	                        .schema(fieldExprEntity.schema)
	                        .findHierarchy(fieldExprEntity.entity, fieldExprHierachyLevel.name);
	                    if (hierarchy) {
	                        var hierarchyLevel = hierarchy.levels.withName(fieldExprHierachyLevel.level);
	                        if (hierarchyLevel)
	                            return hierarchyLevel.column;
	                    }
	                }
	            };
	            SQExpr.prototype.getMetadataForVariation = function (field, federatedSchema) {
	                debug.assertValue(field, 'field');
	                debug.assertValue(federatedSchema, 'federatedSchema');
	                var columnHierarchyLevelVariation = field.columnHierarchyLevelVariation;
	                var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(field);
	                var sourceProperty = federatedSchema
	                    .schema(fieldExprItem.schema)
	                    .findProperty(fieldExprItem.entity, columnHierarchyLevelVariation.source.name);
	                if (sourceProperty && sourceProperty.column && sourceProperty.column.variations) {
	                    for (var _i = 0, _a = sourceProperty.column.variations; _i < _a.length; _i++) {
	                        var variation = _a[_i];
	                        if (variation.defaultHierarchy && variation.defaultHierarchy.levels) {
	                            for (var _b = 0, _c = variation.defaultHierarchy.levels; _b < _c.length; _b++) {
	                                var level = _c[_b];
	                                if (level.name === columnHierarchyLevelVariation.level.level) {
	                                    var property = level.column;
	                                    return {
	                                        kind: (property.kind === 1 /* Measure */) ? 1 /* Measure */ : 0 /* Column */,
	                                        type: property.type,
	                                        format: property.format,
	                                        idOnEntityKey: property.column ? property.column.idOnEntityKey : false,
	                                        defaultAggregate: property.column ? property.column.defaultAggregate : null
	                                    };
	                                }
	                            }
	                        }
	                    }
	                }
	            };
	            SQExpr.prototype.getMetadataForHierarchyLevel = function (field, federatedSchema) {
	                debug.assertValue(field, 'field');
	                debug.assertValue(federatedSchema, 'federatedSchema');
	                var property = this.getHierarchyLevelConceptualProperty(federatedSchema);
	                if (!property)
	                    return;
	                return this.getPropertyMetadata(field, property);
	            };
	            SQExpr.prototype.getMetadataForPercentOfGrandTotal = function () {
	                return {
	                    kind: 1 /* Measure */,
	                    format: '#,##0.00%',
	                    type: powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Double)
	                };
	            };
	            SQExpr.prototype.getPropertyMetadata = function (field, property) {
	                var format = property.format;
	                var type = property.type;
	                var columnAggregate = field.columnAggr || field.hierarchyLevelAggr;
	                if (columnAggregate) {
	                    switch (columnAggregate.aggregate) {
	                        case data.QueryAggregateFunction.Count:
	                        case data.QueryAggregateFunction.CountNonNull:
	                            type = powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Integer);
	                            format = undefined;
	                            break;
	                        case data.QueryAggregateFunction.Avg:
	                            if (type.integer)
	                                type = powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Double);
	                            break;
	                    }
	                }
	                return {
	                    kind: (property.kind === 1 /* Measure */ || (columnAggregate && columnAggregate.aggregate !== undefined)) ? 1 /* Measure */ : 0 /* Column */,
	                    type: type,
	                    format: format,
	                    idOnEntityKey: property.column ? property.column.idOnEntityKey : false,
	                    aggregate: columnAggregate ? columnAggregate.aggregate : undefined,
	                    defaultAggregate: property.column ? property.column.defaultAggregate : null
	                };
	            };
	            SQExpr.prototype.getMetadataForProperty = function (field, federatedSchema) {
	                debug.assertValue(field, 'field');
	                debug.assertValue(federatedSchema, 'federatedSchema');
	                var property = this.getConceptualProperty(federatedSchema);
	                if (!property)
	                    return;
	                return this.getPropertyMetadata(field, property);
	            };
	            SQExpr.getMetadataForEntity = function (field, federatedSchema) {
	                debug.assertValue(field, 'field');
	                debug.assertValue(federatedSchema, 'federatedSchema');
	                var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(field);
	                var entity = federatedSchema
	                    .schema(fieldExprItem.schema)
	                    .entities
	                    .withName(fieldExprItem.entity);
	                if (!entity)
	                    return;
	                // We only support count and countnonnull for entity.
	                if (field.entityAggr) {
	                    switch (field.entityAggr.aggregate) {
	                        case data.QueryAggregateFunction.Count:
	                        case data.QueryAggregateFunction.CountNonNull:
	                            return {
	                                kind: 1 /* Measure */,
	                                type: powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Integer),
	                                format: undefined,
	                                idOnEntityKey: false,
	                                aggregate: field.entityAggr.aggregate
	                            };
	                    }
	                }
	            };
	            return SQExpr;
	        }());
	        data.SQExpr = SQExpr;
	        /** Note: Exported for testability */
	        function defaultAggregateForDataType(type) {
	            if (type.integer || type.numeric)
	                return data.QueryAggregateFunction.Sum;
	            return data.QueryAggregateFunction.Count;
	        }
	        data.defaultAggregateForDataType = defaultAggregateForDataType;
	        /** Note: Exported for testability */
	        function defaultAggregateToQueryAggregateFunction(aggregate) {
	            switch (aggregate) {
	                case 6 /* Average */:
	                    return data.QueryAggregateFunction.Avg;
	                case 3 /* Count */:
	                    return data.QueryAggregateFunction.CountNonNull;
	                case 7 /* DistinctCount */:
	                    return data.QueryAggregateFunction.Count;
	                case 5 /* Max */:
	                    return data.QueryAggregateFunction.Max;
	                case 4 /* Min */:
	                    return data.QueryAggregateFunction.Min;
	                case 2 /* Sum */:
	                    return data.QueryAggregateFunction.Sum;
	                default:
	                    return;
	            }
	        }
	        data.defaultAggregateToQueryAggregateFunction = defaultAggregateToQueryAggregateFunction;
	        var SQEntityExpr = (function (_super) {
	            __extends(SQEntityExpr, _super);
	            function SQEntityExpr(schema, entity, variable) {
	                debug.assertValue(entity, 'entity');
	                _super.call(this, 0 /* Entity */);
	                this.schema = schema;
	                this.entity = entity;
	                if (variable)
	                    this.variable = variable;
	            }
	            SQEntityExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitEntity(this, arg);
	            };
	            return SQEntityExpr;
	        }(SQExpr));
	        data.SQEntityExpr = SQEntityExpr;
	        var SQArithmeticExpr = (function (_super) {
	            __extends(SQArithmeticExpr, _super);
	            function SQArithmeticExpr(left, right, operator) {
	                debug.assertValue(left, 'left');
	                debug.assertValue(right, 'right');
	                debug.assertValue(operator, 'operator');
	                _super.call(this, 22 /* Arithmetic */);
	                this.left = left;
	                this.right = right;
	                this.operator = operator;
	            }
	            SQArithmeticExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitArithmetic(this, arg);
	            };
	            return SQArithmeticExpr;
	        }(SQExpr));
	        data.SQArithmeticExpr = SQArithmeticExpr;
	        var SQScopedEvalExpr = (function (_super) {
	            __extends(SQScopedEvalExpr, _super);
	            function SQScopedEvalExpr(expression, scope) {
	                debug.assertValue(expression, 'expression');
	                debug.assertValue(scope, 'scope');
	                _super.call(this, 25 /* ScopedEval */);
	                this.expression = expression;
	                this.scope = scope;
	            }
	            SQScopedEvalExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitScopedEval(this, arg);
	            };
	            SQScopedEvalExpr.prototype.getMetadata = function (federatedSchema) {
	                return this.expression.getMetadata(federatedSchema);
	            };
	            return SQScopedEvalExpr;
	        }(SQExpr));
	        data.SQScopedEvalExpr = SQScopedEvalExpr;
	        var SQWithRefExpr = (function (_super) {
	            __extends(SQWithRefExpr, _super);
	            function SQWithRefExpr(expressionName) {
	                debug.assertValue(expressionName, 'expressionName');
	                _super.call(this, 26 /* WithRef */);
	                this.expressionName = expressionName;
	            }
	            SQWithRefExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitWithRef(this, arg);
	            };
	            return SQWithRefExpr;
	        }(SQExpr));
	        data.SQWithRefExpr = SQWithRefExpr;
	        var SQPropRefExpr = (function (_super) {
	            __extends(SQPropRefExpr, _super);
	            function SQPropRefExpr(kind, source, ref) {
	                debug.assertValue(kind, 'kind');
	                debug.assertValue(source, 'source');
	                debug.assertValue(ref, 'ref');
	                _super.call(this, kind);
	                this.source = source;
	                this.ref = ref;
	            }
	            return SQPropRefExpr;
	        }(SQExpr));
	        data.SQPropRefExpr = SQPropRefExpr;
	        var SQColumnRefExpr = (function (_super) {
	            __extends(SQColumnRefExpr, _super);
	            function SQColumnRefExpr(source, ref) {
	                _super.call(this, 1 /* ColumnRef */, source, ref);
	            }
	            SQColumnRefExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitColumnRef(this, arg);
	            };
	            return SQColumnRefExpr;
	        }(SQPropRefExpr));
	        data.SQColumnRefExpr = SQColumnRefExpr;
	        var SQMeasureRefExpr = (function (_super) {
	            __extends(SQMeasureRefExpr, _super);
	            function SQMeasureRefExpr(source, ref) {
	                _super.call(this, 2 /* MeasureRef */, source, ref);
	            }
	            SQMeasureRefExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitMeasureRef(this, arg);
	            };
	            return SQMeasureRefExpr;
	        }(SQPropRefExpr));
	        data.SQMeasureRefExpr = SQMeasureRefExpr;
	        var SQAggregationExpr = (function (_super) {
	            __extends(SQAggregationExpr, _super);
	            function SQAggregationExpr(arg, func) {
	                debug.assertValue(arg, 'arg');
	                debug.assertValue(func, 'func');
	                _super.call(this, 3 /* Aggregation */);
	                this.arg = arg;
	                this.func = func;
	            }
	            SQAggregationExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitAggr(this, arg);
	            };
	            return SQAggregationExpr;
	        }(SQExpr));
	        data.SQAggregationExpr = SQAggregationExpr;
	        var SQPercentileExpr = (function (_super) {
	            __extends(SQPercentileExpr, _super);
	            function SQPercentileExpr(arg, k, exclusive) {
	                debug.assertValue(arg, 'arg');
	                debug.assertValue(k, 'k');
	                debug.assert(0 <= k && k <= 1, '0 <= k && k <= 1');
	                debug.assertValue(exclusive, 'exclusive');
	                _super.call(this, 27 /* Percentile */);
	                this.arg = arg;
	                this.k = k;
	                this.exclusive = exclusive;
	            }
	            SQPercentileExpr.prototype.getMetadata = function (federatedSchema) {
	                debug.assertValue(federatedSchema, 'federatedSchema');
	                var argMetadata = this.arg.getMetadata(federatedSchema);
	                if (argMetadata) {
	                    return {
	                        kind: 1 /* Measure */,
	                        type: argMetadata.type,
	                    };
	                }
	            };
	            SQPercentileExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitPercentile(this, arg);
	            };
	            return SQPercentileExpr;
	        }(SQExpr));
	        data.SQPercentileExpr = SQPercentileExpr;
	        var SQPropertyVariationSourceExpr = (function (_super) {
	            __extends(SQPropertyVariationSourceExpr, _super);
	            function SQPropertyVariationSourceExpr(arg, name, property) {
	                debug.assertValue(arg, 'arg');
	                debug.assertValue(name, 'name');
	                debug.assertValue(property, 'property');
	                _super.call(this, 4 /* PropertyVariationSource */);
	                this.arg = arg;
	                this.name = name;
	                this.property = property;
	            }
	            SQPropertyVariationSourceExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitPropertyVariationSource(this, arg);
	            };
	            return SQPropertyVariationSourceExpr;
	        }(SQExpr));
	        data.SQPropertyVariationSourceExpr = SQPropertyVariationSourceExpr;
	        var SQHierarchyExpr = (function (_super) {
	            __extends(SQHierarchyExpr, _super);
	            function SQHierarchyExpr(arg, hierarchy) {
	                debug.assertValue(arg, 'arg');
	                debug.assertValue(hierarchy, 'hierarchy');
	                _super.call(this, 5 /* Hierarchy */);
	                this.arg = arg;
	                this.hierarchy = hierarchy;
	            }
	            SQHierarchyExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitHierarchy(this, arg);
	            };
	            return SQHierarchyExpr;
	        }(SQExpr));
	        data.SQHierarchyExpr = SQHierarchyExpr;
	        var SQHierarchyLevelExpr = (function (_super) {
	            __extends(SQHierarchyLevelExpr, _super);
	            function SQHierarchyLevelExpr(arg, level) {
	                debug.assertValue(arg, 'arg');
	                debug.assertValue(level, 'level');
	                _super.call(this, 6 /* HierarchyLevel */);
	                this.arg = arg;
	                this.level = level;
	            }
	            SQHierarchyLevelExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitHierarchyLevel(this, arg);
	            };
	            return SQHierarchyLevelExpr;
	        }(SQExpr));
	        data.SQHierarchyLevelExpr = SQHierarchyLevelExpr;
	        var SQSelectRefExpr = (function (_super) {
	            __extends(SQSelectRefExpr, _super);
	            function SQSelectRefExpr(expressionName) {
	                debug.assertValue(expressionName, 'arg');
	                _super.call(this, 28 /* SelectRef */);
	                this.expressionName = expressionName;
	            }
	            SQSelectRefExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitSelectRef(this, arg);
	            };
	            return SQSelectRefExpr;
	        }(SQExpr));
	        data.SQSelectRefExpr = SQSelectRefExpr;
	        var SQAndExpr = (function (_super) {
	            __extends(SQAndExpr, _super);
	            function SQAndExpr(left, right) {
	                debug.assertValue(left, 'left');
	                debug.assertValue(right, 'right');
	                _super.call(this, 7 /* And */);
	                this.left = left;
	                this.right = right;
	            }
	            SQAndExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitAnd(this, arg);
	            };
	            return SQAndExpr;
	        }(SQExpr));
	        data.SQAndExpr = SQAndExpr;
	        var SQBetweenExpr = (function (_super) {
	            __extends(SQBetweenExpr, _super);
	            function SQBetweenExpr(arg, lower, upper) {
	                debug.assertValue(arg, 'arg');
	                debug.assertValue(lower, 'lower');
	                debug.assertValue(upper, 'upper');
	                _super.call(this, 8 /* Between */);
	                this.arg = arg;
	                this.lower = lower;
	                this.upper = upper;
	            }
	            SQBetweenExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitBetween(this, arg);
	            };
	            return SQBetweenExpr;
	        }(SQExpr));
	        data.SQBetweenExpr = SQBetweenExpr;
	        var SQInExpr = (function (_super) {
	            __extends(SQInExpr, _super);
	            function SQInExpr(args, values) {
	                debug.assertValue(args, 'args');
	                debug.assertValue(values, 'values');
	                _super.call(this, 9 /* In */);
	                this.args = args;
	                this.values = values;
	            }
	            SQInExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitIn(this, arg);
	            };
	            return SQInExpr;
	        }(SQExpr));
	        data.SQInExpr = SQInExpr;
	        var SQOrExpr = (function (_super) {
	            __extends(SQOrExpr, _super);
	            function SQOrExpr(left, right) {
	                debug.assertValue(left, 'left');
	                debug.assertValue(right, 'right');
	                _super.call(this, 10 /* Or */);
	                this.left = left;
	                this.right = right;
	            }
	            SQOrExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitOr(this, arg);
	            };
	            return SQOrExpr;
	        }(SQExpr));
	        data.SQOrExpr = SQOrExpr;
	        var SQCompareExpr = (function (_super) {
	            __extends(SQCompareExpr, _super);
	            function SQCompareExpr(comparison, left, right) {
	                debug.assertValue(comparison, 'kind');
	                debug.assertValue(left, 'left');
	                debug.assertValue(right, 'right');
	                _super.call(this, 12 /* Compare */);
	                this.comparison = comparison;
	                this.left = left;
	                this.right = right;
	            }
	            SQCompareExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitCompare(this, arg);
	            };
	            return SQCompareExpr;
	        }(SQExpr));
	        data.SQCompareExpr = SQCompareExpr;
	        var SQContainsExpr = (function (_super) {
	            __extends(SQContainsExpr, _super);
	            function SQContainsExpr(left, right) {
	                debug.assertValue(left, 'left');
	                debug.assertValue(right, 'right');
	                _super.call(this, 11 /* Contains */);
	                this.left = left;
	                this.right = right;
	            }
	            SQContainsExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitContains(this, arg);
	            };
	            return SQContainsExpr;
	        }(SQExpr));
	        data.SQContainsExpr = SQContainsExpr;
	        var SQStartsWithExpr = (function (_super) {
	            __extends(SQStartsWithExpr, _super);
	            function SQStartsWithExpr(left, right) {
	                debug.assertValue(left, 'left');
	                debug.assertValue(right, 'right');
	                _super.call(this, 13 /* StartsWith */);
	                this.left = left;
	                this.right = right;
	            }
	            SQStartsWithExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitStartsWith(this, arg);
	            };
	            return SQStartsWithExpr;
	        }(SQExpr));
	        data.SQStartsWithExpr = SQStartsWithExpr;
	        var SQExistsExpr = (function (_super) {
	            __extends(SQExistsExpr, _super);
	            function SQExistsExpr(arg) {
	                debug.assertValue(arg, 'arg');
	                _super.call(this, 14 /* Exists */);
	                this.arg = arg;
	            }
	            SQExistsExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitExists(this, arg);
	            };
	            return SQExistsExpr;
	        }(SQExpr));
	        data.SQExistsExpr = SQExistsExpr;
	        var SQNotExpr = (function (_super) {
	            __extends(SQNotExpr, _super);
	            function SQNotExpr(arg) {
	                debug.assertValue(arg, 'arg');
	                _super.call(this, 15 /* Not */);
	                this.arg = arg;
	            }
	            SQNotExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitNot(this, arg);
	            };
	            return SQNotExpr;
	        }(SQExpr));
	        data.SQNotExpr = SQNotExpr;
	        var SQConstantExpr = (function (_super) {
	            __extends(SQConstantExpr, _super);
	            function SQConstantExpr(type, value, valueEncoded) {
	                debug.assertValue(type, 'type');
	                _super.call(this, 16 /* Constant */);
	                this.type = type;
	                this.value = value;
	                this.valueEncoded = valueEncoded;
	            }
	            SQConstantExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitConstant(this, arg);
	            };
	            SQConstantExpr.prototype.getMetadata = function (federatedSchema) {
	                debug.assertValue(federatedSchema, 'federatedSchema');
	                return {
	                    // Returning Measure as the kind for a SQConstantExpr is slightly ambiguous allowing the return object to conform to SQEXprMetadata.
	                    // A getType or similiar function in the future would be more appropriate. 
	                    kind: 1 /* Measure */,
	                    type: this.type,
	                };
	            };
	            return SQConstantExpr;
	        }(SQExpr));
	        data.SQConstantExpr = SQConstantExpr;
	        var SQDateSpanExpr = (function (_super) {
	            __extends(SQDateSpanExpr, _super);
	            function SQDateSpanExpr(unit, arg) {
	                debug.assertValue(unit, 'unit');
	                debug.assertValue(arg, 'arg');
	                _super.call(this, 17 /* DateSpan */);
	                this.unit = unit;
	                this.arg = arg;
	            }
	            SQDateSpanExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitDateSpan(this, arg);
	            };
	            return SQDateSpanExpr;
	        }(SQExpr));
	        data.SQDateSpanExpr = SQDateSpanExpr;
	        var SQDateAddExpr = (function (_super) {
	            __extends(SQDateAddExpr, _super);
	            function SQDateAddExpr(unit, amount, arg) {
	                debug.assertValue(unit, 'unit');
	                debug.assertValue(amount, 'amount');
	                debug.assertValue(arg, 'arg');
	                _super.call(this, 18 /* DateAdd */);
	                this.unit = unit;
	                this.arg = arg;
	                this.amount = amount;
	            }
	            SQDateAddExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitDateAdd(this, arg);
	            };
	            return SQDateAddExpr;
	        }(SQExpr));
	        data.SQDateAddExpr = SQDateAddExpr;
	        var SQNowExpr = (function (_super) {
	            __extends(SQNowExpr, _super);
	            function SQNowExpr() {
	                _super.call(this, 19 /* Now */);
	            }
	            SQNowExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitNow(this, arg);
	            };
	            return SQNowExpr;
	        }(SQExpr));
	        data.SQNowExpr = SQNowExpr;
	        var SQDefaultValueExpr = (function (_super) {
	            __extends(SQDefaultValueExpr, _super);
	            function SQDefaultValueExpr() {
	                _super.call(this, 21 /* DefaultValue */);
	            }
	            SQDefaultValueExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitDefaultValue(this, arg);
	            };
	            return SQDefaultValueExpr;
	        }(SQExpr));
	        data.SQDefaultValueExpr = SQDefaultValueExpr;
	        var SQAnyValueExpr = (function (_super) {
	            __extends(SQAnyValueExpr, _super);
	            function SQAnyValueExpr() {
	                _super.call(this, 20 /* AnyValue */);
	            }
	            SQAnyValueExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitAnyValue(this, arg);
	            };
	            return SQAnyValueExpr;
	        }(SQExpr));
	        data.SQAnyValueExpr = SQAnyValueExpr;
	        var SQFillRuleExpr = (function (_super) {
	            __extends(SQFillRuleExpr, _super);
	            function SQFillRuleExpr(input, fillRule) {
	                debug.assertValue(input, 'input');
	                debug.assertValue(fillRule, 'fillRule');
	                _super.call(this, 23 /* FillRule */);
	                this.input = input;
	                this.rule = fillRule;
	            }
	            SQFillRuleExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitFillRule(this, arg);
	            };
	            return SQFillRuleExpr;
	        }(SQExpr));
	        data.SQFillRuleExpr = SQFillRuleExpr;
	        var SQResourcePackageItemExpr = (function (_super) {
	            __extends(SQResourcePackageItemExpr, _super);
	            function SQResourcePackageItemExpr(packageName, packageType, itemName) {
	                debug.assertValue(packageName, 'packageName');
	                debug.assertValue(itemName, 'itemName');
	                _super.call(this, 24 /* ResourcePackageItem */);
	                this.packageName = packageName;
	                this.packageType = packageType;
	                this.itemName = itemName;
	            }
	            SQResourcePackageItemExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitResourcePackageItem(this, arg);
	            };
	            return SQResourcePackageItemExpr;
	        }(SQExpr));
	        data.SQResourcePackageItemExpr = SQResourcePackageItemExpr;
	        var SQTransformTableRefExpr = (function (_super) {
	            __extends(SQTransformTableRefExpr, _super);
	            function SQTransformTableRefExpr(source) {
	                debug.assertValue(source, 'source');
	                _super.call(this, 29 /* TransformTableRef */);
	                this.source = source;
	            }
	            SQTransformTableRefExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitTransformTableRef(this, arg);
	            };
	            return SQTransformTableRefExpr;
	        }(SQExpr));
	        data.SQTransformTableRefExpr = SQTransformTableRefExpr;
	        var SQTransformOutputRoleRefExpr = (function (_super) {
	            __extends(SQTransformOutputRoleRefExpr, _super);
	            function SQTransformOutputRoleRefExpr(role, transform) {
	                debug.assertValue(role, 'role');
	                _super.call(this, 30 /* TransformOutputRoleRef */);
	                this.role = role;
	                if (transform)
	                    this.transform = transform;
	            }
	            SQTransformOutputRoleRefExpr.prototype.accept = function (visitor, arg) {
	                return visitor.visitTransformOutputRoleRef(this, arg);
	            };
	            return SQTransformOutputRoleRefExpr;
	        }(SQExpr));
	        data.SQTransformOutputRoleRefExpr = SQTransformOutputRoleRefExpr;
	        /** Provides utilities for creating & manipulating expressions. */
	        var SQExprBuilder;
	        (function (SQExprBuilder) {
	            function entity(schema, entity, variable) {
	                return new SQEntityExpr(schema, entity, variable);
	            }
	            SQExprBuilder.entity = entity;
	            function columnRef(source, prop) {
	                return new SQColumnRefExpr(source, prop);
	            }
	            SQExprBuilder.columnRef = columnRef;
	            function measureRef(source, prop) {
	                return new SQMeasureRefExpr(source, prop);
	            }
	            SQExprBuilder.measureRef = measureRef;
	            function aggregate(source, aggregate) {
	                return new SQAggregationExpr(source, aggregate);
	            }
	            SQExprBuilder.aggregate = aggregate;
	            function selectRef(expressionName) {
	                return new SQSelectRefExpr(expressionName);
	            }
	            SQExprBuilder.selectRef = selectRef;
	            function percentile(source, k, exclusive) {
	                return new SQPercentileExpr(source, k, exclusive);
	            }
	            SQExprBuilder.percentile = percentile;
	            function arithmetic(left, right, operator) {
	                return new SQArithmeticExpr(left, right, operator);
	            }
	            SQExprBuilder.arithmetic = arithmetic;
	            function scopedEval(expression, scope) {
	                return new SQScopedEvalExpr(expression, scope);
	            }
	            SQExprBuilder.scopedEval = scopedEval;
	            function withRef(expressionName) {
	                return new SQWithRefExpr(expressionName);
	            }
	            SQExprBuilder.withRef = withRef;
	            function hierarchy(source, hierarchy) {
	                return new SQHierarchyExpr(source, hierarchy);
	            }
	            SQExprBuilder.hierarchy = hierarchy;
	            function propertyVariationSource(source, name, property) {
	                return new SQPropertyVariationSourceExpr(source, name, property);
	            }
	            SQExprBuilder.propertyVariationSource = propertyVariationSource;
	            function hierarchyLevel(source, level) {
	                return new SQHierarchyLevelExpr(source, level);
	            }
	            SQExprBuilder.hierarchyLevel = hierarchyLevel;
	            function transformTableRef(source) {
	                return new SQTransformTableRefExpr(source);
	            }
	            SQExprBuilder.transformTableRef = transformTableRef;
	            function transformOutputRoleRef(role, transform) {
	                return new SQTransformOutputRoleRefExpr(role, transform);
	            }
	            SQExprBuilder.transformOutputRoleRef = transformOutputRoleRef;
	            function and(left, right) {
	                if (!left)
	                    return right;
	                if (!right)
	                    return left;
	                return new SQAndExpr(left, right);
	            }
	            SQExprBuilder.and = and;
	            function between(arg, lower, upper) {
	                return new SQBetweenExpr(arg, lower, upper);
	            }
	            SQExprBuilder.between = between;
	            function inExpr(args, values) {
	                return new SQInExpr(args, values);
	            }
	            SQExprBuilder.inExpr = inExpr;
	            function or(left, right) {
	                if (!left)
	                    return right;
	                if (!right)
	                    return left;
	                if (left instanceof SQInExpr && right instanceof SQInExpr) {
	                    var inExpr_1 = tryUseInExprs(left, right);
	                    if (inExpr_1)
	                        return inExpr_1;
	                }
	                return new SQOrExpr(left, right);
	            }
	            SQExprBuilder.or = or;
	            function tryUseInExprs(left, right) {
	                if (!left.args || !right.args)
	                    return;
	                var leftArgLen = left.args.length;
	                var rightArgLen = right.args.length;
	                if (leftArgLen !== rightArgLen)
	                    return;
	                for (var i = 0; i < leftArgLen; ++i) {
	                    if (!SQExpr.equals(left.args[i], right.args[i]))
	                        return;
	                }
	                var combinedValues = left.values.concat(right.values);
	                return SQExprBuilder.inExpr(left.args, combinedValues);
	            }
	            function compare(kind, left, right) {
	                return new SQCompareExpr(kind, left, right);
	            }
	            SQExprBuilder.compare = compare;
	            function contains(left, right) {
	                return new SQContainsExpr(left, right);
	            }
	            SQExprBuilder.contains = contains;
	            function exists(arg) {
	                return new SQExistsExpr(arg);
	            }
	            SQExprBuilder.exists = exists;
	            function equal(left, right) {
	                return compare(data.QueryComparisonKind.Equal, left, right);
	            }
	            SQExprBuilder.equal = equal;
	            function not(arg) {
	                return new SQNotExpr(arg);
	            }
	            SQExprBuilder.not = not;
	            function startsWith(left, right) {
	                return new SQStartsWithExpr(left, right);
	            }
	            SQExprBuilder.startsWith = startsWith;
	            function nullConstant() {
	                return new SQConstantExpr(powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Null), null, data.PrimitiveValueEncoding.nullEncoding());
	            }
	            SQExprBuilder.nullConstant = nullConstant;
	            function now() {
	                return new SQNowExpr();
	            }
	            SQExprBuilder.now = now;
	            function defaultValue() {
	                return new SQDefaultValueExpr();
	            }
	            SQExprBuilder.defaultValue = defaultValue;
	            function anyValue() {
	                return new SQAnyValueExpr();
	            }
	            SQExprBuilder.anyValue = anyValue;
	            function boolean(value) {
	                return new SQConstantExpr(powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Boolean), value, data.PrimitiveValueEncoding.boolean(value));
	            }
	            SQExprBuilder.boolean = boolean;
	            function dateAdd(unit, amount, arg) {
	                return new SQDateAddExpr(unit, amount, arg);
	            }
	            SQExprBuilder.dateAdd = dateAdd;
	            function dateTime(value, valueEncoded) {
	                if (valueEncoded === undefined)
	                    valueEncoded = data.PrimitiveValueEncoding.dateTime(value);
	                return new SQConstantExpr(powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.DateTime), value, valueEncoded);
	            }
	            SQExprBuilder.dateTime = dateTime;
	            function dateSpan(unit, arg) {
	                return new SQDateSpanExpr(unit, arg);
	            }
	            SQExprBuilder.dateSpan = dateSpan;
	            function decimal(value, valueEncoded) {
	                if (valueEncoded === undefined)
	                    valueEncoded = data.PrimitiveValueEncoding.decimal(value);
	                return new SQConstantExpr(powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Decimal), value, valueEncoded);
	            }
	            SQExprBuilder.decimal = decimal;
	            function double(value, valueEncoded) {
	                if (valueEncoded === undefined)
	                    valueEncoded = data.PrimitiveValueEncoding.double(value);
	                return new SQConstantExpr(powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Double), value, valueEncoded);
	            }
	            SQExprBuilder.double = double;
	            function integer(value, valueEncoded) {
	                if (valueEncoded === undefined)
	                    valueEncoded = data.PrimitiveValueEncoding.integer(value);
	                return new SQConstantExpr(powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Integer), value, valueEncoded);
	            }
	            SQExprBuilder.integer = integer;
	            function text(value, valueEncoded) {
	                debug.assert(!valueEncoded || valueEncoded === data.PrimitiveValueEncoding.text(value), 'Incorrect encoded value specified.');
	                return new SQConstantExpr(powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Text), value, valueEncoded || data.PrimitiveValueEncoding.text(value));
	            }
	            SQExprBuilder.text = text;
	            /** Returns an SQExpr that evaluates to the constant value. */
	            function typedConstant(value, type) {
	                if (value == null)
	                    return nullConstant();
	                if (_.isBoolean(value)) {
	                    return boolean(value);
	                }
	                if (_.isString(value)) {
	                    return text(value);
	                }
	                if (_.isNumber(value)) {
	                    if (type.integer && powerbi.Double.isInteger(value))
	                        return integer(value);
	                    return double(value);
	                }
	                if (value instanceof Date) {
	                    return dateTime(value);
	                }
	            }
	            SQExprBuilder.typedConstant = typedConstant;
	            function setAggregate(expr, aggregate) {
	                return FieldExprChangeAggregateRewriter.rewrite(expr, aggregate);
	            }
	            SQExprBuilder.setAggregate = setAggregate;
	            function removeAggregate(expr) {
	                return FieldExprRemoveAggregateRewriter.rewrite(expr);
	            }
	            SQExprBuilder.removeAggregate = removeAggregate;
	            function setPercentOfGrandTotal(expr) {
	                return SQExprSetPercentOfGrandTotalRewriter.rewrite(expr);
	            }
	            SQExprBuilder.setPercentOfGrandTotal = setPercentOfGrandTotal;
	            function removePercentOfGrandTotal(expr) {
	                return SQExprRemovePercentOfGrandTotalRewriter.rewrite(expr);
	            }
	            SQExprBuilder.removePercentOfGrandTotal = removePercentOfGrandTotal;
	            function removeEntityVariables(expr) {
	                return SQExprRemoveEntityVariablesRewriter.rewrite(expr);
	            }
	            SQExprBuilder.removeEntityVariables = removeEntityVariables;
	            function fillRule(expr, rule) {
	                debug.assertValue(expr, 'expr');
	                debug.assertValue(rule, 'rule');
	                return new SQFillRuleExpr(expr, rule);
	            }
	            SQExprBuilder.fillRule = fillRule;
	            function resourcePackageItem(packageName, packageType, itemName) {
	                return new SQResourcePackageItemExpr(packageName, packageType, itemName);
	            }
	            SQExprBuilder.resourcePackageItem = resourcePackageItem;
	        })(SQExprBuilder = data.SQExprBuilder || (data.SQExprBuilder = {}));
	        /** Provides utilities for obtaining information about expressions. */
	        var SQExprInfo;
	        (function (SQExprInfo) {
	            function getAggregate(expr) {
	                return SQExprAggregateInfoVisitor.getAggregate(expr);
	            }
	            SQExprInfo.getAggregate = getAggregate;
	        })(SQExprInfo = data.SQExprInfo || (data.SQExprInfo = {}));
	        var SQExprEqualityVisitor = (function () {
	            function SQExprEqualityVisitor(ignoreCase) {
	                this.ignoreCase = ignoreCase;
	            }
	            SQExprEqualityVisitor.run = function (x, y, ignoreCase) {
	                // Normalize falsy to null
	                x = x || null;
	                y = y || null;
	                if (x === y)
	                    return true;
	                if (!x !== !y)
	                    return false;
	                debug.assertValue(x, 'x');
	                debug.assertValue(y, 'y');
	                if (ignoreCase)
	                    return x.accept(SQExprEqualityVisitor.ignoreCaseInstance, y);
	                return x.accept(SQExprEqualityVisitor.instance, y);
	            };
	            SQExprEqualityVisitor.prototype.visitColumnRef = function (expr, comparand) {
	                return comparand instanceof SQColumnRefExpr &&
	                    expr.ref === comparand.ref &&
	                    this.equals(expr.source, comparand.source);
	            };
	            SQExprEqualityVisitor.prototype.visitMeasureRef = function (expr, comparand) {
	                return comparand instanceof SQMeasureRefExpr &&
	                    expr.ref === comparand.ref &&
	                    this.equals(expr.source, comparand.source);
	            };
	            SQExprEqualityVisitor.prototype.visitAggr = function (expr, comparand) {
	                return comparand instanceof SQAggregationExpr &&
	                    expr.func === comparand.func &&
	                    this.equals(expr.arg, comparand.arg);
	            };
	            SQExprEqualityVisitor.prototype.visitPercentile = function (expr, comparand) {
	                return comparand instanceof SQPercentileExpr &&
	                    expr.exclusive === comparand.exclusive &&
	                    expr.k === comparand.k &&
	                    this.equals(expr.arg, comparand.arg);
	            };
	            SQExprEqualityVisitor.prototype.visitHierarchy = function (expr, comparand) {
	                return comparand instanceof SQHierarchyExpr &&
	                    expr.hierarchy === comparand.hierarchy &&
	                    this.equals(expr.arg, comparand.arg);
	            };
	            SQExprEqualityVisitor.prototype.visitHierarchyLevel = function (expr, comparand) {
	                return comparand instanceof SQHierarchyLevelExpr &&
	                    expr.level === comparand.level &&
	                    this.equals(expr.arg, comparand.arg);
	            };
	            SQExprEqualityVisitor.prototype.visitPropertyVariationSource = function (expr, comparand) {
	                return comparand instanceof SQPropertyVariationSourceExpr &&
	                    expr.name === comparand.name &&
	                    expr.property === comparand.property &&
	                    this.equals(expr.arg, comparand.arg);
	            };
	            SQExprEqualityVisitor.prototype.visitSelectRef = function (expr, comparand) {
	                return comparand instanceof SQSelectRefExpr &&
	                    expr.expressionName === comparand.expressionName;
	            };
	            SQExprEqualityVisitor.prototype.visitBetween = function (expr, comparand) {
	                return comparand instanceof SQBetweenExpr &&
	                    this.equals(expr.arg, comparand.arg) &&
	                    this.equals(expr.lower, comparand.lower) &&
	                    this.equals(expr.upper, comparand.upper);
	            };
	            SQExprEqualityVisitor.prototype.visitIn = function (expr, comparand) {
	                if (!(comparand instanceof SQInExpr) || !this.equalsAll(expr.args, comparand.args))
	                    return false;
	                var values = expr.values, compareValues = comparand.values;
	                if (values.length !== compareValues.length)
	                    return false;
	                for (var i = 0, len = values.length; i < len; i++) {
	                    if (!this.equalsAll(values[i], compareValues[i]))
	                        return false;
	                }
	                return true;
	            };
	            SQExprEqualityVisitor.prototype.visitEntity = function (expr, comparand) {
	                return comparand instanceof SQEntityExpr &&
	                    expr.schema === comparand.schema &&
	                    expr.entity === comparand.entity &&
	                    this.optionalEqual(expr.variable, comparand.variable);
	            };
	            SQExprEqualityVisitor.prototype.visitAnd = function (expr, comparand) {
	                return comparand instanceof SQAndExpr &&
	                    this.equals(expr.left, comparand.left) &&
	                    this.equals(expr.right, comparand.right);
	            };
	            SQExprEqualityVisitor.prototype.visitOr = function (expr, comparand) {
	                return comparand instanceof SQOrExpr &&
	                    this.equals(expr.left, comparand.left) &&
	                    this.equals(expr.right, comparand.right);
	            };
	            SQExprEqualityVisitor.prototype.visitCompare = function (expr, comparand) {
	                return comparand instanceof SQCompareExpr &&
	                    expr.comparison === comparand.comparison &&
	                    this.equals(expr.left, comparand.left) &&
	                    this.equals(expr.right, comparand.right);
	            };
	            SQExprEqualityVisitor.prototype.visitContains = function (expr, comparand) {
	                return comparand instanceof SQContainsExpr &&
	                    this.equals(expr.left, comparand.left) &&
	                    this.equals(expr.right, comparand.right);
	            };
	            SQExprEqualityVisitor.prototype.visitDateSpan = function (expr, comparand) {
	                return comparand instanceof SQDateSpanExpr &&
	                    expr.unit === comparand.unit &&
	                    this.equals(expr.arg, comparand.arg);
	            };
	            SQExprEqualityVisitor.prototype.visitDateAdd = function (expr, comparand) {
	                return comparand instanceof SQDateAddExpr &&
	                    expr.unit === comparand.unit &&
	                    expr.amount === comparand.amount &&
	                    this.equals(expr.arg, comparand.arg);
	            };
	            SQExprEqualityVisitor.prototype.visitExists = function (expr, comparand) {
	                return comparand instanceof SQExistsExpr &&
	                    this.equals(expr.arg, comparand.arg);
	            };
	            SQExprEqualityVisitor.prototype.visitNot = function (expr, comparand) {
	                return comparand instanceof SQNotExpr &&
	                    this.equals(expr.arg, comparand.arg);
	            };
	            SQExprEqualityVisitor.prototype.visitNow = function (expr, comparand) {
	                return comparand instanceof SQNowExpr;
	            };
	            SQExprEqualityVisitor.prototype.visitDefaultValue = function (expr, comparand) {
	                return comparand instanceof SQDefaultValueExpr;
	            };
	            SQExprEqualityVisitor.prototype.visitAnyValue = function (expr, comparand) {
	                return comparand instanceof SQAnyValueExpr;
	            };
	            SQExprEqualityVisitor.prototype.visitResourcePackageItem = function (expr, comparand) {
	                return comparand instanceof SQResourcePackageItemExpr &&
	                    expr.packageName === comparand.packageName &&
	                    expr.packageType === comparand.packageType &&
	                    expr.itemName === comparand.itemName;
	            };
	            SQExprEqualityVisitor.prototype.visitStartsWith = function (expr, comparand) {
	                return comparand instanceof SQStartsWithExpr &&
	                    this.equals(expr.left, comparand.left) &&
	                    this.equals(expr.right, comparand.right);
	            };
	            SQExprEqualityVisitor.prototype.visitConstant = function (expr, comparand) {
	                if (comparand instanceof SQConstantExpr && expr.type === comparand.type)
	                    return expr.type.text && this.ignoreCase ?
	                        StringExtensions.equalIgnoreCase(expr.valueEncoded, comparand.valueEncoded) :
	                        expr.valueEncoded === comparand.valueEncoded;
	                return false;
	            };
	            SQExprEqualityVisitor.prototype.visitFillRule = function (expr, comparand) {
	                if (comparand instanceof SQFillRuleExpr && this.equals(expr.input, comparand.input)) {
	                    var leftRule = expr.rule, rightRule = comparand.rule;
	                    if (leftRule === rightRule)
	                        return true;
	                    var leftLinearGradient2 = leftRule.linearGradient2, rightLinearGradient2 = rightRule.linearGradient2;
	                    if (leftLinearGradient2 && rightLinearGradient2) {
	                        return this.visitLinearGradient2(leftLinearGradient2, rightLinearGradient2);
	                    }
	                    var leftLinearGradient3 = leftRule.linearGradient3, rightLinearGradient3 = rightRule.linearGradient3;
	                    if (leftLinearGradient3 && rightLinearGradient3) {
	                        return this.visitLinearGradient3(leftLinearGradient3, rightLinearGradient3);
	                    }
	                }
	                return false;
	            };
	            SQExprEqualityVisitor.prototype.visitLinearGradient2 = function (left2, right2) {
	                debug.assertValue(left2, 'left2');
	                debug.assertValue(right2, 'right2');
	                return this.equalsFillRuleStop(left2.min, right2.min) &&
	                    this.equalsFillRuleStop(left2.max, right2.max);
	            };
	            SQExprEqualityVisitor.prototype.visitLinearGradient3 = function (left3, right3) {
	                debug.assertValue(left3, 'left3');
	                debug.assertValue(right3, 'right3');
	                return this.equalsFillRuleStop(left3.min, right3.min) &&
	                    this.equalsFillRuleStop(left3.mid, right3.mid) &&
	                    this.equalsFillRuleStop(left3.max, right3.max);
	            };
	            SQExprEqualityVisitor.prototype.equalsFillRuleStop = function (stop1, stop2) {
	                debug.assertValue(stop1, 'stop1');
	                debug.assertValue(stop2, 'stop2');
	                if (!this.equals(stop1.color, stop2.color))
	                    return false;
	                if (!stop1.value)
	                    return stop1.value === stop2.value;
	                return this.equals(stop1.value, stop2.value);
	            };
	            SQExprEqualityVisitor.prototype.visitArithmetic = function (expr, comparand) {
	                return comparand instanceof SQArithmeticExpr &&
	                    expr.operator === comparand.operator &&
	                    this.equals(expr.left, comparand.left) &&
	                    this.equals(expr.right, comparand.right);
	            };
	            SQExprEqualityVisitor.prototype.visitScopedEval = function (expr, comparand) {
	                return comparand instanceof SQScopedEvalExpr &&
	                    this.equals(expr.expression, comparand.expression) &&
	                    this.equalsAll(expr.scope, comparand.scope);
	            };
	            SQExprEqualityVisitor.prototype.visitWithRef = function (expr, comparand) {
	                return comparand instanceof SQWithRefExpr &&
	                    expr.expressionName === comparand.expressionName;
	            };
	            SQExprEqualityVisitor.prototype.visitTransformTableRef = function (expr, comparand) {
	                return comparand instanceof SQTransformTableRefExpr &&
	                    expr.source === comparand.source;
	            };
	            SQExprEqualityVisitor.prototype.visitTransformOutputRoleRef = function (expr, comparand) {
	                return comparand instanceof SQTransformOutputRoleRefExpr &&
	                    expr.role === comparand.role &&
	                    expr.transform === comparand.transform;
	            };
	            SQExprEqualityVisitor.prototype.optionalEqual = function (x, y) {
	                // Only check equality if both values are specified.
	                if (x && y)
	                    return x === y;
	                return true;
	            };
	            SQExprEqualityVisitor.prototype.equals = function (x, y) {
	                return x.accept(this, y);
	            };
	            SQExprEqualityVisitor.prototype.equalsAll = function (x, y) {
	                var len = x.length;
	                if (len !== y.length)
	                    return false;
	                for (var i = 0; i < len; i++) {
	                    if (!this.equals(x[i], y[i]))
	                        return false;
	                }
	                return true;
	            };
	            SQExprEqualityVisitor.instance = new SQExprEqualityVisitor(/* ignoreCase */ false);
	            SQExprEqualityVisitor.ignoreCaseInstance = new SQExprEqualityVisitor(true);
	            return SQExprEqualityVisitor;
	        }());
	        /** Rewrites a root-level expression. */
	        var SQExprRootRewriter = (function (_super) {
	            __extends(SQExprRootRewriter, _super);
	            function SQExprRootRewriter() {
	                _super.apply(this, arguments);
	            }
	            SQExprRootRewriter.prototype.visitDefault = function (expr) {
	                return expr;
	            };
	            return SQExprRootRewriter;
	        }(data.DefaultSQExprVisitor));
	        var SQExprValidationVisitor = (function (_super) {
	            __extends(SQExprValidationVisitor, _super);
	            function SQExprValidationVisitor(schema, aggrUtils, errors) {
	                debug.assertValue(schema, 'schema');
	                debug.assertValue(aggrUtils, 'aggrUtils');
	                _super.call(this);
	                this.schema = schema;
	                this.aggrUtils = aggrUtils;
	                if (errors)
	                    this.errors = errors;
	            }
	            SQExprValidationVisitor.prototype.visitIn = function (expr) {
	                var inExpr = _super.prototype.visitIn.call(this, expr);
	                var args = inExpr.args;
	                var values = inExpr.values;
	                for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
	                    var valueTuple = values_1[_i];
	                    debug.assert(valueTuple.length === args.length, 'args and value tuple are not the same length');
	                    for (var i = 0, len = valueTuple.length; i < len; ++i)
	                        this.validateCompatibleType(args[i], valueTuple[i]);
	                }
	                return inExpr;
	            };
	            SQExprValidationVisitor.prototype.visitCompare = function (expr) {
	                var compareExpr = _super.prototype.visitCompare.call(this, expr);
	                this.validateCompatibleType(compareExpr.left, compareExpr.right);
	                return compareExpr;
	            };
	            SQExprValidationVisitor.prototype.visitColumnRef = function (expr) {
	                var fieldExpr = data.SQExprConverter.asFieldPattern(expr);
	                if (fieldExpr) {
	                    var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(fieldExpr);
	                    var entity = this.validateEntity(fieldExprItem.schema, fieldExprItem.entity);
	                    if (entity) {
	                        var prop = entity.properties.withName(fieldExpr.column.name);
	                        if (!prop ||
	                            prop.kind !== 0 /* Column */ ||
	                            !this.isQueryable(fieldExpr))
	                            this.register(3 /* invalidColumnReference */);
	                    }
	                }
	                return expr;
	            };
	            SQExprValidationVisitor.prototype.visitMeasureRef = function (expr) {
	                var fieldExpr = data.SQExprConverter.asFieldPattern(expr);
	                if (fieldExpr) {
	                    var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(fieldExpr);
	                    var entity = this.validateEntity(fieldExprItem.schema, fieldExprItem.entity);
	                    if (entity) {
	                        var prop = entity.properties.withName(fieldExpr.measure.name);
	                        if (!prop ||
	                            prop.kind !== 1 /* Measure */ ||
	                            !this.isQueryable(fieldExpr))
	                            this.register(4 /* invalidMeasureReference */);
	                    }
	                }
	                return expr;
	            };
	            SQExprValidationVisitor.prototype.visitAggr = function (expr) {
	                var aggregateExpr = _super.prototype.visitAggr.call(this, expr);
	                var columnRefExpr = SQExprColumnRefInfoVisitor.getColumnRefSQExpr(this.schema, aggregateExpr.arg);
	                if (columnRefExpr) {
	                    if (!this.aggrUtils.isSupportedAggregate(expr, this.schema, expr.func, /*targetTypes*/ null))
	                        this.register(0 /* invalidAggregateFunction */);
	                }
	                return aggregateExpr;
	            };
	            SQExprValidationVisitor.prototype.visitHierarchy = function (expr) {
	                var fieldExpr = data.SQExprConverter.asFieldPattern(expr);
	                if (fieldExpr) {
	                    var fieldExprItem = fieldExpr.hierarchy;
	                    if (fieldExprItem) {
	                        this.validateHierarchy(fieldExprItem.schema, fieldExprItem.entity, fieldExprItem.name);
	                    }
	                    else {
	                        this.register(5 /* invalidHierarchyReference */);
	                    }
	                }
	                return expr;
	            };
	            SQExprValidationVisitor.prototype.visitHierarchyLevel = function (expr) {
	                var fieldExpr = data.SQExprConverter.asFieldPattern(expr);
	                if (fieldExpr) {
	                    var hierarchyLevelFieldExprItem = fieldExpr.hierarchyLevel;
	                    if (hierarchyLevelFieldExprItem) {
	                        this.validateHierarchyLevel(hierarchyLevelFieldExprItem.schema, hierarchyLevelFieldExprItem.entity, hierarchyLevelFieldExprItem.name, hierarchyLevelFieldExprItem.level);
	                    }
	                    else if (!fieldExpr.columnHierarchyLevelVariation) {
	                        this.register(6 /* invalidHierarchyLevelReference */);
	                    }
	                }
	                return expr;
	            };
	            SQExprValidationVisitor.prototype.visitPercentile = function (expr) {
	                expr.arg.accept(this);
	                if (_.isEmpty(this.errors)) {
	                    var argMetadata = expr.arg.getMetadata(this.schema);
	                    if (!argMetadata ||
	                        argMetadata.kind !== 0 /* Column */ ||
	                        !(argMetadata.type && (argMetadata.type.integer || argMetadata.type.numeric))) {
	                        this.register(10 /* invalidPercentileArgument */);
	                    }
	                }
	                return expr;
	            };
	            SQExprValidationVisitor.prototype.visitEntity = function (expr) {
	                this.validateEntity(expr.schema, expr.entity);
	                return expr;
	            };
	            SQExprValidationVisitor.prototype.visitContains = function (expr) {
	                this.validateOperandsAndTypeForStartOrContains(expr.left, expr.right);
	                return expr;
	            };
	            SQExprValidationVisitor.prototype.visitStartsWith = function (expr) {
	                this.validateOperandsAndTypeForStartOrContains(expr.left, expr.right);
	                return expr;
	            };
	            SQExprValidationVisitor.prototype.visitArithmetic = function (expr) {
	                this.validateArithmeticTypes(expr.left, expr.right);
	                return expr;
	            };
	            SQExprValidationVisitor.prototype.visitScopedEval = function (expr) {
	                for (var _i = 0, _a = expr.scope; _i < _a.length; _i++) {
	                    var scopeRef = _a[_i];
	                    if (!(SQExpr.isWithRef(scopeRef) || SQExpr.isColumn(scopeRef))) {
	                        this.register(11 /* invalidScopeArgument */);
	                    }
	                }
	                return expr;
	            };
	            SQExprValidationVisitor.prototype.visitWithRef = function (expr) {
	                return expr;
	            };
	            SQExprValidationVisitor.prototype.visitTransformTableRef = function (expr) {
	                return expr;
	            };
	            SQExprValidationVisitor.prototype.visitTransformOutputRoleRef = function (expr) {
	                return expr;
	            };
	            SQExprValidationVisitor.prototype.validateOperandsAndTypeForStartOrContains = function (left, right) {
	                if (left instanceof SQColumnRefExpr) {
	                    this.visitColumnRef(left);
	                }
	                else if (left instanceof SQHierarchyLevelExpr) {
	                    this.visitHierarchyLevel(left);
	                }
	                else {
	                    this.register(7 /* invalidLeftOperandType */);
	                }
	                if (!(right instanceof SQConstantExpr) || !right.type.text)
	                    this.register(8 /* invalidRightOperandType */);
	                else
	                    this.validateCompatibleType(left, right);
	            };
	            SQExprValidationVisitor.prototype.validateArithmeticTypes = function (left, right) {
	                if (!data.SQExprUtils.supportsArithmetic(left, this.schema))
	                    this.register(7 /* invalidLeftOperandType */);
	                if (!data.SQExprUtils.supportsArithmetic(right, this.schema))
	                    this.register(8 /* invalidRightOperandType */);
	            };
	            SQExprValidationVisitor.prototype.validateCompatibleType = function (left, right) {
	                var leftMetadata = left.getMetadata(this.schema), leftType = leftMetadata && leftMetadata.type, rightMetadata = right.getMetadata(this.schema), rightType = rightMetadata && rightMetadata.type;
	                if (leftType && rightType && !leftType.isCompatibleFrom(rightType))
	                    this.register(9 /* invalidValueType */);
	            };
	            SQExprValidationVisitor.prototype.validateEntity = function (schemaName, entityName) {
	                var schema = this.schema.schema(schemaName);
	                if (schema) {
	                    var entity = schema.entities.withName(entityName);
	                    if (entity)
	                        return entity;
	                    this.register(2 /* invalidEntityReference */);
	                }
	                else {
	                    this.register(1 /* invalidSchemaReference */);
	                }
	            };
	            SQExprValidationVisitor.prototype.validateHierarchy = function (schemaName, entityName, hierarchyName) {
	                var entity = this.validateEntity(schemaName, entityName);
	                if (entity) {
	                    var hierarchy = entity.hierarchies.withName(hierarchyName);
	                    if (hierarchy)
	                        return hierarchy;
	                    this.register(5 /* invalidHierarchyReference */);
	                }
	            };
	            SQExprValidationVisitor.prototype.validateHierarchyLevel = function (schemaName, entityName, hierarchyName, levelName) {
	                var hierarchy = this.validateHierarchy(schemaName, entityName, hierarchyName);
	                if (hierarchy) {
	                    var hierarchyLevel = hierarchy.levels.withName(levelName);
	                    if (hierarchyLevel)
	                        return hierarchyLevel;
	                    this.register(6 /* invalidHierarchyLevelReference */);
	                }
	            };
	            SQExprValidationVisitor.prototype.register = function (error) {
	                if (!this.errors)
	                    this.errors = [];
	                this.errors.push(error);
	            };
	            SQExprValidationVisitor.prototype.isQueryable = function (fieldExpr) {
	                var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(fieldExpr);
	                if (fieldExpr.hierarchyLevel || fieldExpr.hierarchyLevelAggr) {
	                    var hierarchyLevelConceptualProperty = data.SQHierarchyExprUtils.getConceptualHierarchyLevelFromExpr(this.schema, fieldExpr);
	                    return hierarchyLevelConceptualProperty && hierarchyLevelConceptualProperty.column.queryable !== 1 /* Error */;
	                }
	                return this.schema.schema(fieldExprItem.schema).findProperty(fieldExprItem.entity, data.FieldExprPattern.getPropertyName(fieldExpr)).queryable !== 1 /* Error */;
	            };
	            return SQExprValidationVisitor;
	        }(data.SQExprRewriter));
	        data.SQExprValidationVisitor = SQExprValidationVisitor;
	        /** Returns an expression's aggregate function, or undefined if it doesn't have one. */
	        var SQExprAggregateInfoVisitor = (function (_super) {
	            __extends(SQExprAggregateInfoVisitor, _super);
	            function SQExprAggregateInfoVisitor() {
	                _super.apply(this, arguments);
	            }
	            SQExprAggregateInfoVisitor.prototype.visitAggr = function (expr) {
	                return expr.func;
	            };
	            SQExprAggregateInfoVisitor.prototype.visitDefault = function (expr) {
	                return;
	            };
	            SQExprAggregateInfoVisitor.getAggregate = function (expr) {
	                var visitor = new SQExprAggregateInfoVisitor();
	                return expr.accept(visitor);
	            };
	            return SQExprAggregateInfoVisitor;
	        }(data.DefaultSQExprVisitor));
	        /** Returns a SQExprColumnRef expression or undefined.*/
	        var SQExprColumnRefInfoVisitor = (function (_super) {
	            __extends(SQExprColumnRefInfoVisitor, _super);
	            function SQExprColumnRefInfoVisitor(schema) {
	                _super.call(this);
	                this.schema = schema;
	            }
	            SQExprColumnRefInfoVisitor.prototype.visitColumnRef = function (expr) {
	                return expr;
	            };
	            SQExprColumnRefInfoVisitor.prototype.visitHierarchyLevel = function (expr) {
	                var ref = expr.level;
	                var hierarchy = (expr.arg);
	                var sourceExpr = hierarchy.accept(this);
	                if (hierarchy && hierarchy.arg instanceof SQPropertyVariationSourceExpr) {
	                    var propertyVariationSource = hierarchy.arg;
	                    var targetEntity = sourceExpr.getTargetEntityForVariation(this.schema, propertyVariationSource.name);
	                    if (sourceExpr && targetEntity) {
	                        var schemaName = (sourceExpr.source).schema;
	                        var targetEntityExpr = SQExprBuilder.entity(schemaName, targetEntity);
	                        var schemaHierarchy = this.schema.schema(schemaName).findHierarchy(targetEntity, hierarchy.hierarchy);
	                        if (schemaHierarchy) {
	                            for (var _i = 0, _a = schemaHierarchy.levels; _i < _a.length; _i++) {
	                                var level = _a[_i];
	                                if (level.name === ref)
	                                    return new SQColumnRefExpr(targetEntityExpr, level.column.name);
	                            }
	                        }
	                    }
	                }
	                else {
	                    var entityExpr = (hierarchy.arg);
	                    var hierarchyLevelRef = data.SQHierarchyExprUtils.getConceptualHierarchyLevel(this.schema, entityExpr.schema, entityExpr.entity, hierarchy.hierarchy, expr.level);
	                    if (hierarchyLevelRef)
	                        return new SQColumnRefExpr(hierarchy.arg, hierarchyLevelRef.column.name);
	                }
	            };
	            SQExprColumnRefInfoVisitor.prototype.visitHierarchy = function (expr) {
	                return expr.arg.accept(this);
	            };
	            SQExprColumnRefInfoVisitor.prototype.visitPropertyVariationSource = function (expr) {
	                var propertyName = expr.property;
	                return new SQColumnRefExpr(expr.arg, propertyName);
	            };
	            SQExprColumnRefInfoVisitor.prototype.visitAggr = function (expr) {
	                return expr.arg.accept(this);
	            };
	            SQExprColumnRefInfoVisitor.prototype.visitDefault = function (expr) {
	                return;
	            };
	            SQExprColumnRefInfoVisitor.getColumnRefSQExpr = function (schema, expr) {
	                var visitor = new SQExprColumnRefInfoVisitor(schema);
	                return expr.accept(visitor);
	            };
	            return SQExprColumnRefInfoVisitor;
	        }(data.DefaultSQExprVisitor));
	        /** Returns a SQEntityExpr expression or undefined.*/
	        var SQEntityExprInfoVisitor = (function (_super) {
	            __extends(SQEntityExprInfoVisitor, _super);
	            function SQEntityExprInfoVisitor(schema) {
	                _super.call(this);
	                this.schema = schema;
	            }
	            SQEntityExprInfoVisitor.prototype.visitEntity = function (expr) {
	                return expr;
	            };
	            SQEntityExprInfoVisitor.prototype.visitColumnRef = function (expr) {
	                return SQEntityExprInfoVisitor.getEntity(expr);
	            };
	            SQEntityExprInfoVisitor.prototype.visitHierarchyLevel = function (expr) {
	                var columnRef = SQEntityExprInfoVisitor.getColumnRefSQExpr(this.schema, expr);
	                return SQEntityExprInfoVisitor.getEntity(columnRef);
	            };
	            SQEntityExprInfoVisitor.prototype.visitHierarchy = function (expr) {
	                return expr.arg.accept(this);
	            };
	            SQEntityExprInfoVisitor.prototype.visitPropertyVariationSource = function (expr) {
	                var columnRef = SQEntityExprInfoVisitor.getColumnRefSQExpr(this.schema, expr);
	                return SQEntityExprInfoVisitor.getEntity(columnRef);
	            };
	            SQEntityExprInfoVisitor.prototype.visitAggr = function (expr) {
	                var columnRef = SQEntityExprInfoVisitor.getColumnRefSQExpr(this.schema, expr);
	                return SQEntityExprInfoVisitor.getEntity(columnRef);
	            };
	            SQEntityExprInfoVisitor.prototype.visitMeasureRef = function (expr) {
	                return expr.source.accept(this);
	            };
	            SQEntityExprInfoVisitor.getColumnRefSQExpr = function (schema, expr) {
	                var visitor = new SQExprColumnRefInfoVisitor(schema);
	                return expr.accept(visitor);
	            };
	            SQEntityExprInfoVisitor.getEntity = function (columnRef) {
	                var field = data.SQExprConverter.asFieldPattern(columnRef);
	                var column = field.column;
	                return SQExprBuilder.entity(column.schema, column.entity, column.entityVar);
	            };
	            SQEntityExprInfoVisitor.getEntityExpr = function (schema, expr) {
	                var visitor = new SQEntityExprInfoVisitor(schema);
	                return expr.accept(visitor);
	            };
	            return SQEntityExprInfoVisitor;
	        }(data.DefaultSQExprVisitor));
	        var SQExprChangeAggregateRewriter = (function (_super) {
	            __extends(SQExprChangeAggregateRewriter, _super);
	            function SQExprChangeAggregateRewriter(func) {
	                debug.assertValue(func, 'func');
	                _super.call(this);
	                this.func = func;
	            }
	            SQExprChangeAggregateRewriter.prototype.visitAggr = function (expr) {
	                if (expr.func === this.func)
	                    return expr;
	                return new SQAggregationExpr(expr.arg, this.func);
	            };
	            SQExprChangeAggregateRewriter.prototype.visitColumnRef = function (expr) {
	                return new SQAggregationExpr(expr, this.func);
	            };
	            SQExprChangeAggregateRewriter.rewrite = function (expr, func) {
	                debug.assertValue(expr, 'expr');
	                debug.assertValue(func, 'func');
	                var rewriter = new SQExprChangeAggregateRewriter(func);
	                return expr.accept(rewriter);
	            };
	            return SQExprChangeAggregateRewriter;
	        }(SQExprRootRewriter));
	        var FieldExprChangeAggregateRewriter = (function () {
	            function FieldExprChangeAggregateRewriter(sqExpr, aggregate) {
	                this.sqExpr = sqExpr;
	                this.aggregate = aggregate;
	            }
	            FieldExprChangeAggregateRewriter.rewrite = function (sqExpr, aggregate) {
	                return data.FieldExprPattern.visit(sqExpr, new FieldExprChangeAggregateRewriter(sqExpr, aggregate));
	            };
	            FieldExprChangeAggregateRewriter.prototype.visitPercentOfGrandTotal = function (pattern) {
	                pattern.baseExpr = data.SQExprConverter.asFieldPattern(SQExprChangeAggregateRewriter.rewrite(SQExprBuilder.fieldExpr(pattern.baseExpr), this.aggregate));
	                return SQExprBuilder.fieldExpr({ percentOfGrandTotal: pattern });
	            };
	            FieldExprChangeAggregateRewriter.prototype.visitColumn = function (column) {
	                return this.defaultRewrite();
	            };
	            FieldExprChangeAggregateRewriter.prototype.visitColumnAggr = function (columnAggr) {
	                return this.defaultRewrite();
	            };
	            FieldExprChangeAggregateRewriter.prototype.visitColumnHierarchyLevelVariation = function (columnHierarchyLevelVariation) {
	                return this.defaultRewrite();
	            };
	            FieldExprChangeAggregateRewriter.prototype.visitSelectRef = function (selectRef) {
	                return this.defaultRewrite();
	            };
	            FieldExprChangeAggregateRewriter.prototype.visitEntity = function (entity) {
	                return this.defaultRewrite();
	            };
	            FieldExprChangeAggregateRewriter.prototype.visitEntityAggr = function (entityAggr) {
	                return this.defaultRewrite();
	            };
	            FieldExprChangeAggregateRewriter.prototype.visitHierarchy = function (hierarchy) {
	                return this.defaultRewrite();
	            };
	            FieldExprChangeAggregateRewriter.prototype.visitHierarchyLevel = function (hierarchyLevel) {
	                return this.defaultRewrite();
	            };
	            FieldExprChangeAggregateRewriter.prototype.visitHierarchyLevelAggr = function (hierarchyLevelAggr) {
	                return this.defaultRewrite();
	            };
	            FieldExprChangeAggregateRewriter.prototype.visitMeasure = function (measure) {
	                return this.defaultRewrite();
	            };
	            FieldExprChangeAggregateRewriter.prototype.visitPercentile = function (percentile) {
	                return this.defaultRewrite();
	            };
	            FieldExprChangeAggregateRewriter.prototype.defaultRewrite = function () {
	                return SQExprChangeAggregateRewriter.rewrite(this.sqExpr, this.aggregate);
	            };
	            return FieldExprChangeAggregateRewriter;
	        }());
	        var FieldExprRemoveAggregateRewriter = (function () {
	            function FieldExprRemoveAggregateRewriter(sqExpr) {
	                this.sqExpr = sqExpr;
	            }
	            FieldExprRemoveAggregateRewriter.rewrite = function (sqExpr) {
	                return data.FieldExprPattern.visit(sqExpr, new FieldExprRemoveAggregateRewriter(sqExpr));
	            };
	            FieldExprRemoveAggregateRewriter.prototype.visitPercentOfGrandTotal = function (pattern) {
	                return FieldExprRemoveAggregateRewriter.rewrite(SQExprBuilder.fieldExpr(pattern.baseExpr));
	            };
	            FieldExprRemoveAggregateRewriter.prototype.visitColumn = function (column) {
	                return this.defaultRewrite();
	            };
	            FieldExprRemoveAggregateRewriter.prototype.visitColumnAggr = function (columnAggr) {
	                return this.defaultRewrite();
	            };
	            FieldExprRemoveAggregateRewriter.prototype.visitColumnHierarchyLevelVariation = function (columnHierarchyLevelVariation) {
	                return this.defaultRewrite();
	            };
	            FieldExprRemoveAggregateRewriter.prototype.visitSelectRef = function (selectRef) {
	                return this.defaultRewrite();
	            };
	            FieldExprRemoveAggregateRewriter.prototype.visitEntity = function (entity) {
	                return this.defaultRewrite();
	            };
	            FieldExprRemoveAggregateRewriter.prototype.visitEntityAggr = function (entityAggr) {
	                return this.defaultRewrite();
	            };
	            FieldExprRemoveAggregateRewriter.prototype.visitHierarchy = function (hierarchy) {
	                return this.defaultRewrite();
	            };
	            FieldExprRemoveAggregateRewriter.prototype.visitHierarchyLevel = function (hierarchyLevel) {
	                return this.defaultRewrite();
	            };
	            FieldExprRemoveAggregateRewriter.prototype.visitHierarchyLevelAggr = function (hierarchyLevelAggr) {
	                return this.defaultRewrite();
	            };
	            FieldExprRemoveAggregateRewriter.prototype.visitMeasure = function (measure) {
	                return this.defaultRewrite();
	            };
	            FieldExprRemoveAggregateRewriter.prototype.visitPercentile = function (percentile) {
	                return this.defaultRewrite();
	            };
	            FieldExprRemoveAggregateRewriter.prototype.defaultRewrite = function () {
	                return SQExprRemoveAggregateRewriter.rewrite(this.sqExpr);
	            };
	            return FieldExprRemoveAggregateRewriter;
	        }());
	        var SQExprRemoveAggregateRewriter = (function (_super) {
	            __extends(SQExprRemoveAggregateRewriter, _super);
	            function SQExprRemoveAggregateRewriter() {
	                _super.apply(this, arguments);
	            }
	            SQExprRemoveAggregateRewriter.prototype.visitAggr = function (expr) {
	                return expr.arg;
	            };
	            SQExprRemoveAggregateRewriter.rewrite = function (expr) {
	                debug.assertValue(expr, 'expr');
	                return expr.accept(SQExprRemoveAggregateRewriter.instance);
	            };
	            SQExprRemoveAggregateRewriter.instance = new SQExprRemoveAggregateRewriter();
	            return SQExprRemoveAggregateRewriter;
	        }(SQExprRootRewriter));
	        var SQExprRemoveEntityVariablesRewriter = (function (_super) {
	            __extends(SQExprRemoveEntityVariablesRewriter, _super);
	            function SQExprRemoveEntityVariablesRewriter() {
	                _super.apply(this, arguments);
	            }
	            SQExprRemoveEntityVariablesRewriter.prototype.visitEntity = function (expr) {
	                if (expr.variable)
	                    return SQExprBuilder.entity(expr.schema, expr.entity);
	                return expr;
	            };
	            SQExprRemoveEntityVariablesRewriter.rewrite = function (expr) {
	                debug.assertValue(expr, 'expr');
	                return expr.accept(SQExprRemoveEntityVariablesRewriter.instance);
	            };
	            SQExprRemoveEntityVariablesRewriter.instance = new SQExprRemoveEntityVariablesRewriter();
	            return SQExprRemoveEntityVariablesRewriter;
	        }(data.SQExprRewriter));
	        var SQExprRemovePercentOfGrandTotalRewriter = (function (_super) {
	            __extends(SQExprRemovePercentOfGrandTotalRewriter, _super);
	            function SQExprRemovePercentOfGrandTotalRewriter() {
	                _super.apply(this, arguments);
	            }
	            SQExprRemovePercentOfGrandTotalRewriter.rewrite = function (expr) {
	                debug.assertValue(expr, 'expr');
	                return expr.accept(SQExprRemovePercentOfGrandTotalRewriter.instance);
	            };
	            SQExprRemovePercentOfGrandTotalRewriter.prototype.visitDefault = function (expr) {
	                var fieldExpr = data.SQExprConverter.asFieldPattern(expr);
	                if (fieldExpr && fieldExpr.percentOfGrandTotal)
	                    expr = SQExprBuilder.fieldExpr(fieldExpr.percentOfGrandTotal.baseExpr);
	                return expr;
	            };
	            SQExprRemovePercentOfGrandTotalRewriter.instance = new SQExprRemovePercentOfGrandTotalRewriter();
	            return SQExprRemovePercentOfGrandTotalRewriter;
	        }(SQExprRootRewriter));
	        var SQExprSetPercentOfGrandTotalRewriter = (function (_super) {
	            __extends(SQExprSetPercentOfGrandTotalRewriter, _super);
	            function SQExprSetPercentOfGrandTotalRewriter() {
	                _super.apply(this, arguments);
	            }
	            SQExprSetPercentOfGrandTotalRewriter.rewrite = function (expr) {
	                debug.assertValue(expr, 'expr');
	                return expr.accept(SQExprSetPercentOfGrandTotalRewriter.instance);
	            };
	            SQExprSetPercentOfGrandTotalRewriter.prototype.visitDefault = function (expr) {
	                var fieldExpr = data.SQExprConverter.asFieldPattern(expr);
	                if (fieldExpr && !fieldExpr.percentOfGrandTotal)
	                    expr = SQExprBuilder.fieldExpr({ percentOfGrandTotal: { baseExpr: data.SQExprConverter.asFieldPattern(expr) } });
	                return expr;
	            };
	            SQExprSetPercentOfGrandTotalRewriter.instance = new SQExprSetPercentOfGrandTotalRewriter();
	            return SQExprSetPercentOfGrandTotalRewriter;
	        }(SQExprRootRewriter));
	    })(data = powerbi.data || (powerbi.data = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 87 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var data;
	    (function (data) {
	        var DataViewTransform = powerbi.data.DataViewTransform;
	        var SQExprBuilder = powerbi.data.SQExprBuilder;
	        function createCategoricalDataViewBuilder() {
	            return new CategoricalDataViewBuilder();
	        }
	        data.createCategoricalDataViewBuilder = createCategoricalDataViewBuilder;
	        var CategoricalDataViewBuilder = (function () {
	            function CategoricalDataViewBuilder() {
	                this.categories = [];
	                this.staticMeasureColumns = [];
	                this.dynamicMeasureColumns = [];
	                this.columnIndex = 0;
	            }
	            CategoricalDataViewBuilder.prototype.withCategory = function (options) {
	                var categoryValues = options.values, identityFrom = options.identityFrom, type = options.source.type;
	                var categoryColumn = {
	                    source: options.source,
	                    identityFields: options.identityFrom.fields,
	                    identity: options.identityFrom.identities || [],
	                    values: categoryValues,
	                };
	                if (!options.identityFrom.identities) {
	                    for (var categoryIndex = 0, categoryLength = categoryValues.length; categoryIndex < categoryLength; categoryIndex++) {
	                        categoryColumn.identity.push(getScopeIdentity(identityFrom, categoryIndex, categoryValues[categoryIndex], type));
	                    }
	                }
	                if (!this.categories)
	                    this.categories = [];
	                this.categories.push(categoryColumn);
	                return this;
	            };
	            CategoricalDataViewBuilder.prototype.withCategories = function (categories) {
	                if (_.isEmpty(this.categories))
	                    this.categories = categories;
	                else
	                    Array.prototype.push.apply(this.categories, categories);
	                return this;
	            };
	            /**
	             * Adds static series columns.
	             *
	             * Note that it is illegal to have both dynamic series and static series in a visual DataViewCategorical.  It is only legal to have them both in
	             * a query DataViewCategorical, where DataViewTransform is expected to split them up into separate visual DataViewCategorical objects.
	             */
	            CategoricalDataViewBuilder.prototype.withValues = function (options) {
	                debug.assertValue(options, 'options');
	                var columns = options.columns;
	                debug.assertValue(columns, 'columns');
	                for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
	                    var column = columns_1[_i];
	                    this.staticMeasureColumns.push(column.source);
	                }
	                this.staticSeriesValues = columns;
	                return this;
	            };
	            /**
	             * Adds dynamic series columns.
	             *
	             * Note that it is illegal to have both dynamic series and static series in a visual DataViewCategorical.  It is only legal to have them both in
	             * a query DataViewCategorical, where DataViewTransform is expected to split them up into separate visual DataViewCategorical objects.
	             */
	            CategoricalDataViewBuilder.prototype.withGroupedValues = function (options) {
	                debug.assertValue(options, 'options');
	                var groupColumn = options.groupColumn;
	                debug.assertValue(groupColumn, 'groupColumn');
	                this.dynamicSeriesMetadata = {
	                    column: groupColumn.source,
	                    identityFrom: groupColumn.identityFrom,
	                    values: groupColumn.values,
	                };
	                var valueColumns = options.valueColumns;
	                for (var _i = 0, valueColumns_1 = valueColumns; _i < valueColumns_1.length; _i++) {
	                    var valueColumn = valueColumns_1[_i];
	                    this.dynamicMeasureColumns.push(valueColumn.source);
	                }
	                this.dynamicSeriesValues = options.data;
	                return this;
	            };
	            CategoricalDataViewBuilder.prototype.fillData = function (dataViewValues) {
	                var categoryColumn = _.first(this.categories);
	                var categoryLength = (categoryColumn && categoryColumn.values) ? categoryColumn.values.length : 0;
	                if (this.hasDynamicSeries()) {
	                    for (var seriesIndex = 0; seriesIndex < this.dynamicSeriesMetadata.values.length; seriesIndex++) {
	                        var seriesMeasures = this.dynamicSeriesValues[seriesIndex];
	                        debug.assert(seriesMeasures.length === this.dynamicMeasureColumns.length, 'seriesMeasures.length === this.dynamicMeasureColumns.length');
	                        for (var measureIndex = 0, measuresLen = this.dynamicMeasureColumns.length; measureIndex < measuresLen; measureIndex++) {
	                            var groupIndex = seriesIndex * measuresLen + measureIndex;
	                            applySeriesData(dataViewValues[groupIndex], seriesMeasures[measureIndex], categoryLength);
	                        }
	                    }
	                }
	                if (this.hasStaticSeries()) {
	                    // Note: when the target categorical has both dynamic and static series, append static measures at the end of the values array.
	                    var staticColumnsStartingIndex = this.hasDynamicSeries() ? (this.dynamicSeriesValues.length * this.dynamicMeasureColumns.length) : 0;
	                    for (var measureIndex = 0, measuresLen = this.staticMeasureColumns.length; measureIndex < measuresLen; measureIndex++) {
	                        applySeriesData(dataViewValues[staticColumnsStartingIndex + measureIndex], this.staticSeriesValues[measureIndex], categoryLength);
	                    }
	                }
	            };
	            /**
	             * Returns the DataView with metadata and DataViewCategorical.
	             * Returns undefined if the combination of parameters is illegal, such as having both dynamic series and static series when building a visual DataView.
	             */
	            CategoricalDataViewBuilder.prototype.build = function () {
	                var metadataColumns = [];
	                var categorical = {};
	                var categoryMetadata = this.categories;
	                var dynamicSeriesMetadata = this.dynamicSeriesMetadata;
	                // --- Build metadata columns and value groups ---
	                for (var _i = 0, categoryMetadata_1 = categoryMetadata; _i < categoryMetadata_1.length; _i++) {
	                    var columnMetadata = categoryMetadata_1[_i];
	                    pushIfNotExists(metadataColumns, columnMetadata.source);
	                }
	                if (this.hasDynamicSeries()) {
	                    // Dynamic series, or Dyanmic & Static series.
	                    pushIfNotExists(metadataColumns, dynamicSeriesMetadata.column);
	                    categorical.values = DataViewTransform.createValueColumns([], dynamicSeriesMetadata.identityFrom.fields, dynamicSeriesMetadata.column);
	                    // For each series value we will make one column per measure
	                    var seriesValues = dynamicSeriesMetadata.values;
	                    for (var seriesIndex = 0; seriesIndex < seriesValues.length; seriesIndex++) {
	                        var seriesValue = seriesValues[seriesIndex];
	                        var seriesIdentity = getScopeIdentity(dynamicSeriesMetadata.identityFrom, seriesIndex, seriesValue, dynamicSeriesMetadata.column.type);
	                        for (var _a = 0, _b = this.dynamicMeasureColumns; _a < _b.length; _a++) {
	                            var measure = _b[_a];
	                            // Note related to VSTS 7705322: It is possible that the 'measure' object is part of visual DataView with prototypal inheritance,
	                            // in which case _.clone() would not copy any inherited properties. Meanwhile, this builder class can also be used for building
	                            // query DataView, hence this code should not produce an inherited object from 'measure'.
	                            var column = _.toPlainObject(measure);
	                            column.groupName = seriesValue;
	                            pushIfNotExists(metadataColumns, column);
	                            categorical.values.push({
	                                source: column,
	                                values: [],
	                                identity: seriesIdentity,
	                            });
	                        }
	                    }
	                    if (this.hasStaticSeries()) {
	                        // IMPORTANT: In the Dyanmic & Static series case, the groups array shall not include any static group. This is to match the behavior of production code that creates query DataView objects.
	                        // Get the current return value of grouped() before adding static measure columns, an use that as the return value of this categorical.
	                        // Otherwise, the default behavior of DataViewValueColumns.grouped() from DataViewTransform.createValueColumns() is to create series groups from all measure columns.
	                        var dynamicSeriesGroups_1 = categorical.values.grouped();
	                        categorical.values.grouped = function () { return dynamicSeriesGroups_1; };
	                        this.appendStaticMeasureColumns(metadataColumns, categorical.values);
	                    }
	                }
	                else {
	                    // Static series only / no series
	                    categorical.values = DataViewTransform.createValueColumns();
	                    this.appendStaticMeasureColumns(metadataColumns, categorical.values);
	                }
	                var categories = this.categories;
	                if (!_.isEmpty(categories))
	                    categorical.categories = categories;
	                // --- Fill in data point values ---
	                this.fillData(categorical.values);
	                var dataView = {
	                    metadata: {
	                        columns: metadataColumns,
	                    },
	                    categorical: categorical,
	                };
	                if (this.isLegalDataView(dataView)) {
	                    return dataView;
	                }
	            };
	            CategoricalDataViewBuilder.prototype.appendStaticMeasureColumns = function (metadataColumns, valueColumns) {
	                debug.assertValue(metadataColumns, 'metadataColumns');
	                debug.assertValue(valueColumns, 'valueColumns');
	                if (!_.isEmpty(this.staticMeasureColumns)) {
	                    for (var _i = 0, _a = this.staticMeasureColumns; _i < _a.length; _i++) {
	                        var column = _a[_i];
	                        pushIfNotExists(metadataColumns, column);
	                        valueColumns.push({
	                            source: column,
	                            values: [],
	                        });
	                    }
	                }
	            };
	            CategoricalDataViewBuilder.prototype.isLegalDataView = function (dataView) {
	                if (this.hasDynamicSeries() && this.hasStaticSeries() && CategoricalDataViewBuilder.isVisualDataView(dataView.metadata.columns)) {
	                    // It is illegal to have both dynamic series and static series in a visual DataViewCategorical,
	                    // because the DataViewValueColumns interface today cannot express that 100% (see its 'source' property and return value of its 'grouped()' function).
	                    return false;
	                }
	                return true;
	            };
	            /**
	             * This function infers that if any metadata column has 'queryName',
	             * then the user of this builder is building a visual DataView (as opposed to query DataView).
	             *
	             * @param metadataColumns The complete collection of metadata columns in the categorical.
	             */
	            CategoricalDataViewBuilder.isVisualDataView = function (metadataColumns) {
	                return !_.isEmpty(metadataColumns) &&
	                    _.any(metadataColumns, function (metadataColumn) { return !!metadataColumn.queryName; });
	            };
	            CategoricalDataViewBuilder.prototype.hasDynamicSeries = function () {
	                return !!this.dynamicSeriesMetadata; // In Map visual scenarios, you can have dynamic series without measure columns
	            };
	            CategoricalDataViewBuilder.prototype.hasStaticSeries = function () {
	                return !!this.staticSeriesValues;
	            };
	            return CategoricalDataViewBuilder;
	        }());
	        function getScopeIdentity(source, index, value, valueType) {
	            var identities = source.identities;
	            if (identities) {
	                return identities[index];
	            }
	            debug.assert(source.fields && source.fields.length === 1, 'Inferring identity, expect exactly one field.');
	            return data.createDataViewScopeIdentity(SQExprBuilder.equal(source.fields[0], SQExprBuilder.typedConstant(value, valueType)));
	        }
	        function pushIfNotExists(items, itemToAdd) {
	            if (_.contains(items, itemToAdd))
	                return;
	            items.push(itemToAdd);
	        }
	        function applySeriesData(target, source, categoryLength) {
	            debug.assertValue(target, 'target');
	            debug.assertValue(source, 'source');
	            debug.assertValue(categoryLength, 'categoryLength');
	            var values = source.values;
	            debug.assert(categoryLength === values.length || categoryLength === 0, 'categoryLength === values.length || categoryLength === 0');
	            target.values = values;
	            var highlights = source.highlights;
	            if (highlights) {
	                debug.assert(categoryLength === highlights.length, 'categoryLength === highlights.length');
	                target.highlights = highlights;
	            }
	            var aggregates;
	            if (source.minLocal !== undefined) {
	                if (!aggregates)
	                    aggregates = {};
	                aggregates.minLocal = source.minLocal;
	            }
	            if (source.maxLocal !== undefined) {
	                if (!aggregates)
	                    aggregates = {};
	                aggregates.maxLocal = source.maxLocal;
	            }
	            if (aggregates) {
	                target.source.aggregates = aggregates;
	                _.extend(target, aggregates);
	            }
	        }
	    })(data = powerbi.data || (powerbi.data = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 88 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var data;
	    (function (data) {
	        /** Serializes SQExpr in a form optimized in-memory comparison, but not intended for storage on disk. */
	        var SQExprShortSerializer;
	        (function (SQExprShortSerializer) {
	            function serialize(expr) {
	                return JSON.stringify(expr.accept(SQExprSerializer.instance));
	            }
	            SQExprShortSerializer.serialize = serialize;
	            function serializeArray(exprs) {
	                var str = '[';
	                for (var i = 0, len = exprs.length; i < len; i++) {
	                    if (i > 0)
	                        str += ',';
	                    str += SQExprShortSerializer.serialize(exprs[i]);
	                }
	                return str + ']';
	            }
	            SQExprShortSerializer.serializeArray = serializeArray;
	            /** Responsible for serializing an SQExpr into a comparable string. */
	            var SQExprSerializer = (function (_super) {
	                __extends(SQExprSerializer, _super);
	                function SQExprSerializer() {
	                    _super.apply(this, arguments);
	                }
	                SQExprSerializer.prototype.visitColumnRef = function (expr) {
	                    return {
	                        col: {
	                            s: expr.source.accept(this),
	                            r: expr.ref,
	                        }
	                    };
	                };
	                SQExprSerializer.prototype.visitMeasureRef = function (expr) {
	                    return {
	                        measure: {
	                            s: expr.source.accept(this),
	                            r: expr.ref,
	                        }
	                    };
	                };
	                SQExprSerializer.prototype.visitAggr = function (expr) {
	                    return {
	                        agg: {
	                            a: expr.arg.accept(this),
	                            f: expr.func,
	                        }
	                    };
	                };
	                SQExprSerializer.prototype.visitEntity = function (expr) {
	                    debug.assertValue(expr, 'expr');
	                    debug.assertValue(expr.entity, 'expr.entity');
	                    return {
	                        e: expr.entity
	                    };
	                };
	                SQExprSerializer.prototype.visitHierarchyLevel = function (expr) {
	                    return {
	                        h: expr.arg.accept(this),
	                        l: expr.level,
	                    };
	                };
	                SQExprSerializer.prototype.visitHierarchy = function (expr) {
	                    return {
	                        e: expr.arg.accept(this),
	                        h: expr.hierarchy,
	                    };
	                };
	                SQExprSerializer.prototype.visitPropertyVariationSource = function (expr) {
	                    return {
	                        e: expr.arg.accept(this),
	                        n: expr.name,
	                        p: expr.property,
	                    };
	                };
	                SQExprSerializer.prototype.visitAnd = function (expr) {
	                    debug.assertValue(expr, 'expr');
	                    return {
	                        and: {
	                            l: expr.left.accept(this),
	                            r: expr.right.accept(this),
	                        }
	                    };
	                };
	                SQExprSerializer.prototype.visitCompare = function (expr) {
	                    debug.assertValue(expr, 'expr');
	                    return {
	                        comp: {
	                            k: expr.comparison,
	                            l: expr.left.accept(this),
	                            r: expr.right.accept(this),
	                        }
	                    };
	                };
	                SQExprSerializer.prototype.visitConstant = function (expr) {
	                    debug.assertValue(expr, 'expr');
	                    return {
	                        const: {
	                            t: expr.type.primitiveType,
	                            v: expr.value,
	                        }
	                    };
	                };
	                SQExprSerializer.prototype.visitArithmetic = function (expr) {
	                    debug.assertValue(expr, 'expr');
	                    return {
	                        arithmetic: {
	                            o: expr.operator,
	                            l: expr.left.accept(this),
	                            r: expr.right.accept(this)
	                        }
	                    };
	                };
	                SQExprSerializer.prototype.visitScopedEval = function (expr) {
	                    debug.assertValue(expr, 'expr');
	                    return {
	                        scopedEval: {
	                            e: expr.expression.accept(this),
	                            s: serializeArray(expr.scope)
	                        }
	                    };
	                };
	                SQExprSerializer.prototype.visitWithRef = function (expr) {
	                    debug.assertValue(expr, 'expr');
	                    return {
	                        withRef: {
	                            e: expr.expressionName
	                        }
	                    };
	                };
	                SQExprSerializer.prototype.visitTransformTableRef = function (expr) {
	                    debug.assertValue(expr, 'expr');
	                    return {
	                        transformTableRef: {
	                            source: expr.source,
	                        }
	                    };
	                };
	                SQExprSerializer.prototype.visitTransformOutputRoleRef = function (expr) {
	                    debug.assertValue(expr, 'expr');
	                    var ref = {
	                        transformOutputRoleRef: {
	                            role: expr.role
	                        }
	                    };
	                    if (expr.transform)
	                        ref.transformOutputRoleRef['transform'] = expr.transform;
	                    return ref;
	                };
	                SQExprSerializer.prototype.visitDefault = function (expr) {
	                    debug.assertFail('Unexpected expression type found in DataViewScopeIdentity.');
	                    return;
	                };
	                SQExprSerializer.instance = new SQExprSerializer();
	                return SQExprSerializer;
	            }(data.DefaultSQExprVisitor));
	        })(SQExprShortSerializer = data.SQExprShortSerializer || (data.SQExprShortSerializer = {}));
	    })(data = powerbi.data || (powerbi.data = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 89 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	/// <reference path="../../_references.ts"/>
	var powerbitests;
	(function (powerbitests) {
	    var customVisuals;
	    (function (customVisuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var SQExprBuilder = powerbi.data.SQExprBuilder;
	            var DataViewBuilder = (function () {
	                function DataViewBuilder() {
	                    this.aggregateFunction = _.sum;
	                }
	                DataViewBuilder.setDefaultQueryName = function (source) {
	                    if (!source.queryName) {
	                        debug.assertValue(source && source.displayName, "source.displayName is not defined");
	                        source.queryName = DataViewBuilder.DataViewName + "." + source.displayName;
	                    }
	                    return source;
	                };
	                DataViewBuilder.constExpr = function (fakeValue) {
	                    if (fakeValue === null)
	                        return SQExprBuilder.nullConstant();
	                    if (fakeValue === true || fakeValue === false)
	                        return SQExprBuilder.boolean(fakeValue);
	                    if (typeof (fakeValue) === 'number')
	                        return SQExprBuilder.double(fakeValue);
	                    if (fakeValue instanceof Date)
	                        return SQExprBuilder.dateTime(fakeValue);
	                    return SQExprBuilder.text(fakeValue);
	                };
	                DataViewBuilder.getDataViewBuilderColumnIdentitySources = function (options) {
	                    var optionsArray = (_.isArray(options) ? options : [options]);
	                    var fields = optionsArray.map(function (opt) {
	                        debug.assertValue(opt && opt.source && opt.source.displayName, "source.displayName is not defined");
	                        return SQExprBuilder.columnRef(SQExprBuilder.entity(undefined, DataViewBuilder.DataViewName), opt.source.displayName);
	                    });
	                    var optionsIdentityExpressions = optionsArray.map(function (opt, i) {
	                        return opt.values.map(function (x) { return SQExprBuilder.equal(fields[i].source, DataViewBuilder.constExpr(x)); });
	                    });
	                    var identityExpressions = [];
	                    if (optionsIdentityExpressions.length > 1) {
	                        var identityExpressionsLength = optionsIdentityExpressions.length;
	                        var identityExpressionsValuesLength = _.max(_.map(optionsIdentityExpressions, function (x) { return x.length; }));
	                        for (var vi = 0; vi < identityExpressionsValuesLength; vi++) {
	                            var current = optionsIdentityExpressions[0][vi];
	                            for (var ci = 1; ci < identityExpressionsLength; ci++) {
	                                current = SQExprBuilder.and(current, optionsIdentityExpressions[ci][vi]);
	                            }
	                            identityExpressions.push(current);
	                        }
	                    }
	                    else {
	                        identityExpressions = optionsIdentityExpressions[0];
	                    }
	                    return optionsArray.map(function (opt, i) { return {
	                        fields: fields,
	                        identities: identityExpressions.map(powerbi.data.createDataViewScopeIdentity)
	                    }; });
	                };
	                DataViewBuilder.getValuesTable = function (categories, values) {
	                    var columns = _.sortBy((categories || []).concat(values || []), function (x) { return x.source.index; });
	                    var maxLength = _.max(columns.map(function (x) { return x.values.length; }));
	                    return _.range(maxLength).map(function (i) { return columns.map(function (x) { return x.values[i]; }); });
	                };
	                DataViewBuilder.createDataViewBuilderColumnOptions = function (categoriesColumns, valuesColumns, filter) {
	                    var filterColumns = filter
	                        ? function (options) { return _.isArray(options.values) && filter(options); }
	                        : function (options) { return _.isArray(options.values); };
	                    var resultCategoriesColumns = _.isEmpty(categoriesColumns) ? [] : _
	                        .flatten(categoriesColumns).filter(filterColumns);
	                    var resultValuesColumns = _.isEmpty(valuesColumns) ? [] : _
	                        .flatten(valuesColumns).filter(filterColumns);
	                    var allColumns = (resultCategoriesColumns || []).concat(resultValuesColumns || []);
	                    allColumns.forEach(function (x, i) { return x.source.index = i; });
	                    return {
	                        categories: resultCategoriesColumns.filter(function (x) { return !x.isGroup; }),
	                        grouped: resultCategoriesColumns.filter(function (x) { return x.isGroup; }),
	                        values: resultValuesColumns
	                    };
	                };
	                DataViewBuilder.setUpDataViewBuilderColumnOptions = function (options, aggregateFunction) {
	                    var resultOptions = _.clone(options);
	                    resultOptions.categories = resultOptions.categories && resultOptions.categories.map(function (x) { return _.clone(x); });
	                    resultOptions.values = resultOptions.values && resultOptions.values.map(function (x) { return _.clone(x); });
	                    resultOptions.grouped = resultOptions.grouped && resultOptions.grouped.map(function (x) { return _.clone(x); });
	                    ;
	                    if (!_.isEmpty(options.categories)) {
	                        resultOptions.categories.forEach(function (x) { return x.source = DataViewBuilder.setDefaultQueryName(x.source); });
	                        var allRows = DataViewBuilder.getValuesTable(options.categories, options.values);
	                        var categoriesLength_1 = options.categories.length;
	                        var grouped_1 = _.toArray(_.groupBy(allRows, function (x) { return _.take(x, categoriesLength_1); }));
	                        resultOptions.categories.forEach(function (c, i) { return c.values = grouped_1.map(function (x) { return x[0][i] === undefined ? null : x[0][i]; }); });
	                        if (!_.isEmpty(options.values) && _.isEmpty(options.grouped)) {
	                            resultOptions.values.forEach(function (c, i) {
	                                return c.values = grouped_1.map(function (v) { return aggregateFunction(v.map(function (x) { return x[categoriesLength_1 + i] || 0; })); });
	                            });
	                        }
	                    }
	                    if (!_.isEmpty(options.values)) {
	                        resultOptions.values.forEach(function (x) { return x.source = DataViewBuilder.setDefaultQueryName(x.source); });
	                    }
	                    if (!_.isEmpty(options.grouped)) {
	                        resultOptions.grouped.forEach(function (x) { return x.source = DataViewBuilder.setDefaultQueryName(x.source); });
	                    }
	                    return resultOptions;
	                };
	                DataViewBuilder.setUpDataView = function (dataView, options) {
	                    if (!_.isEmpty(options.categories) && _.isEmpty(options.grouped)) {
	                        var category_1 = dataView.categorical.categories[0];
	                        //Tree. (completed only for one category)
	                        dataView.tree = {
	                            root: {
	                                childIdentityFields: category_1.identityFields,
	                                children: category_1.values.map(function (v, i) { return { values: [v], name: v, identity: category_1.identity[i] }; })
	                            }
	                        };
	                        //Table.
	                        dataView.table = {
	                            columns: dataView.categorical.categories.concat(dataView.categorical.values || []).map(function (x) { return x.source; }),
	                            identityFields: category_1.identityFields,
	                            rows: DataViewBuilder.getValuesTable(dataView.categorical.categories, dataView.categorical.values)
	                        };
	                        if (_.isEmpty(options.values)) {
	                            delete dataView.categorical.values;
	                        }
	                    }
	                    return dataView;
	                };
	                DataViewBuilder.prototype.createCategoricalDataViewBuilder = function (categoriesColumns, valuesColumns, columnNames) {
	                    var builder = powerbi.data.createCategoricalDataViewBuilder();
	                    var originalOptions = DataViewBuilder.createDataViewBuilderColumnOptions(categoriesColumns, valuesColumns, columnNames && (function (options) { return _.contains(columnNames, options.source.displayName); }));
	                    var options = DataViewBuilder.setUpDataViewBuilderColumnOptions(originalOptions, this.aggregateFunction);
	                    if (!_.isEmpty(options.categories)) {
	                        var identityFrom_1 = DataViewBuilder.getDataViewBuilderColumnIdentitySources(options.categories);
	                        builder.withCategories(options.categories.map(function (category, i) { return {
	                            source: category.source,
	                            values: category.values,
	                            objects: category.objects,
	                            identity: identityFrom_1[i].identities,
	                            identityFields: identityFrom_1[i].fields
	                        }; }));
	                    }
	                    if (!_.isEmpty(options.grouped)) {
	                        var groupedCategory_1 = options.grouped[0]; //Finished only for one category.
	                        var categoryValues_1 = originalOptions.categories
	                            && originalOptions.categories[0]
	                            && originalOptions.categories[0].values
	                            || [];
	                        var uniqueCategoryValues_1 = _.unique(categoryValues_1) || [undefined];
	                        var uniqueGroupedValues = _.unique(groupedCategory_1.values);
	                        builder.withGroupedValues({
	                            groupColumn: {
	                                source: groupedCategory_1.source,
	                                values: uniqueGroupedValues,
	                                identityFrom: DataViewBuilder.getDataViewBuilderColumnIdentitySources(groupedCategory_1)[0]
	                            },
	                            valueColumns: options.values.map(function (x) { return { source: x.source }; }),
	                            data: uniqueGroupedValues.map(function (groupedValue) { return options.values.map(function (column, columnIndex) {
	                                return {
	                                    values: column.values && uniqueCategoryValues_1
	                                        .map(function (categoryValue) {
	                                        var index = _.findIndex(d3.range(categoryValues_1.length), function (i) { return categoryValues_1[i] === categoryValue && groupedCategory_1.values[i] === groupedValue; });
	                                        return column.values[index] === undefined ? null : column.values[index];
	                                    }),
	                                    highlights: column.highlights,
	                                    minLocal: column.minLocal,
	                                    maxLocal: column.maxLocal
	                                };
	                            }); })
	                        });
	                    }
	                    else if (!_.isEmpty(options.values)) {
	                        builder.withValues({ columns: options.values });
	                    }
	                    var builderBuild = builder.build.bind(builder);
	                    builder.build = function () { return DataViewBuilder.setUpDataView(builderBuild(), options); };
	                    return builder;
	                };
	                DataViewBuilder.DataViewName = "Data";
	                return DataViewBuilder;
	            }());
	            sampleDataViews.DataViewBuilder = DataViewBuilder;
	        })(sampleDataViews = customVisuals.sampleDataViews || (customVisuals.sampleDataViews = {}));
	    })(customVisuals = powerbitests.customVisuals || (powerbitests.customVisuals = {}));
	})(powerbitests || (powerbitests = {}));

	

/***/ },
/* 90 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="./_references.ts"/>
	var powerbitests;
	(function (powerbitests) {
	    var customVisuals;
	    (function (customVisuals) {
	        var helpers;
	        (function (helpers) {
	            var EnglishAlphabetLowerCase = "abcdefghijklmnopqrstuwxyz";
	            var EnglishAlphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUWXYZ";
	            function getTableDataValues(categoryValues, columns) {
	                return categoryValues.map(function (category, idx) {
	                    var categoryDataValues = columns.map(function (x) { return x.values[idx]; });
	                    categoryDataValues.unshift(category);
	                    return categoryDataValues;
	                });
	            }
	            helpers.getTableDataValues = getTableDataValues;
	            function getDateYearRange(start, stop, yearStep) {
	                return _.range(start.getFullYear(), stop.getFullYear(), yearStep)
	                    .map(function (x) { return new Date(new Date(start.getTime()).setFullYear(x)); });
	            }
	            helpers.getDateYearRange = getDateYearRange;
	            function getDateRange(start, stop, step) {
	                return _.range(start.getTime(), stop.getTime(), step).map(function (x) { return new Date(x); });
	            }
	            helpers.getDateRange = getDateRange;
	            function getRandomNumbers(count, min, max) {
	                if (min === void 0) { min = 0; }
	                if (max === void 0) { max = 1; }
	                return _.range(count).map(function (x) { return getRandomNumber(min, max); });
	            }
	            helpers.getRandomNumbers = getRandomNumbers;
	            function getRandomUniqueNumbers(count, min, max) {
	                if (min === void 0) { min = 0; }
	                if (max === void 0) { max = 1; }
	                var result = [];
	                for (var i = 0; i < count; i++) {
	                    result.push(getRandomNumber(min, max, result));
	                }
	                return result;
	            }
	            helpers.getRandomUniqueNumbers = getRandomUniqueNumbers;
	            function getRandomNumber(min, max, exceptionList, changeResult) {
	                if (changeResult === void 0) { changeResult = function (x) { return x; }; }
	                var result = changeResult(Math.random() * (max - min) + min);
	                if (exceptionList && exceptionList.length && _.contains(exceptionList, result)) {
	                    return getRandomNumber(min, max, exceptionList);
	                }
	                return result;
	            }
	            helpers.getRandomNumber = getRandomNumber;
	            function getRandomIntegers(count, min, max) {
	                if (min === void 0) { min = 0; }
	                if (max === void 0) { max = 1; }
	                return getRandomNumbers(count, min, max).map(Math.round);
	            }
	            helpers.getRandomIntegers = getRandomIntegers;
	            function getRandomUniqueIntegers(count, min, max) {
	                if (min === void 0) { min = 0; }
	                if (max === void 0) { max = 1; }
	                var result = [];
	                for (var i = 0; i < count; i++) {
	                    result.push(getRandomNumber(min, max, result, Math.round));
	                }
	                return result;
	            }
	            helpers.getRandomUniqueIntegers = getRandomUniqueIntegers;
	            function getRandomInteger(min, max, exceptionList) {
	                return getRandomNumber(max, min, exceptionList, Math.floor);
	            }
	            helpers.getRandomInteger = getRandomInteger;
	            function getRandomDates(count, start, end) {
	                return getRandomNumbers(count, start.getTime(), end.getTime()).map(function (x) { return new Date(x); });
	            }
	            helpers.getRandomDates = getRandomDates;
	            function getRandomUniqueDates(count, start, end) {
	                return getRandomUniqueNumbers(count, start.getTime(), end.getTime()).map(function (x) { return new Date(x); });
	            }
	            helpers.getRandomUniqueDates = getRandomUniqueDates;
	            function getRandomUniqueSortedDates(count, start, end) {
	                return getRandomUniqueDates(count, start, end).sort(function (a, b) { return a.getTime() - b.getTime(); });
	            }
	            helpers.getRandomUniqueSortedDates = getRandomUniqueSortedDates;
	            function getRandomDate(start, end, exceptionList) {
	                return new Date(getRandomNumber(start.getTime(), end.getTime(), exceptionList.map(function (x) { return x.getTime(); })));
	            }
	            helpers.getRandomDate = getRandomDate;
	            function getRandomWord(minLength, maxLength, alphabet) {
	                if (alphabet === void 0) { alphabet = EnglishAlphabetLowerCase + EnglishAlphabetUpperCase; }
	                var alphabetLength = alphabet.length;
	                var length = getRandomInteger(minLength, maxLength);
	                var strings = _.range(length).map(function (x) { return alphabet[getRandomInteger(0, alphabetLength)]; });
	                return strings.join('');
	            }
	            helpers.getRandomWord = getRandomWord;
	            function getRandomWords(wordCount, minLength, maxLength, alphabet) {
	                if (alphabet === void 0) { alphabet = EnglishAlphabetLowerCase + EnglishAlphabetUpperCase; }
	                return _.range(wordCount).map(function (x) { return getRandomWord(minLength, maxLength, alphabet); });
	            }
	            helpers.getRandomWords = getRandomWords;
	            function getRandomText(wordCount, minLength, maxLength, alphabet) {
	                if (alphabet === void 0) { alphabet = EnglishAlphabetLowerCase + EnglishAlphabetUpperCase; }
	                return getRandomWords(wordCount, minLength, maxLength, alphabet).join(' ');
	            }
	            helpers.getRandomText = getRandomText;
	            function getRandomBoolean(trueProbability) {
	                if (trueProbability === void 0) { trueProbability = 0; }
	                return (Math.random() - trueProbability / 2) < 0.5;
	            }
	            helpers.getRandomBoolean = getRandomBoolean;
	            function getRandomBooleans(count, trueProbability) {
	                if (trueProbability === void 0) { trueProbability = 0; }
	                return _.range(count).map(function (x) { return getRandomBoolean(trueProbability); });
	            }
	            helpers.getRandomBooleans = getRandomBooleans;
	        })(helpers = customVisuals.helpers || (customVisuals.helpers = {}));
	    })(customVisuals = powerbitests.customVisuals || (powerbitests.customVisuals = {}));
	})(powerbitests || (powerbitests = {}));
	var powerbitests;
	(function (powerbitests) {
	    var customVisuals;
	    (function (customVisuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var ValueType = powerbi.ValueType;
	            var ArrayToDataview = (function (_super) {
	                __extends(ArrayToDataview, _super);
	                function ArrayToDataview(series, valuesCategory) {
	                    _super.call(this);
	                    this.series = series;
	                    this.valuesCategory = valuesCategory;
	                }
	                ArrayToDataview.prototype.getDataView = function (columnNames) {
	                    var arr = [];
	                    if (this.series) {
	                        for (var _i = 0, _a = this.series; _i < _a.length; _i++) {
	                            var s = _a[_i];
	                            s.source.type = ValueType.fromDescriptor(s.source.type);
	                        }
	                    }
	                    if (this.valuesCategory) {
	                        for (var _b = 0, _c = this.valuesCategory; _b < _c.length; _b++) {
	                            var s = _c[_b];
	                            s.source.type = ValueType.fromDescriptor(s.source.type);
	                        }
	                    }
	                    return this.createCategoricalDataViewBuilder(this.valuesCategory, this.series, columnNames).build();
	                };
	                return ArrayToDataview;
	            }(sampleDataViews.DataViewBuilder));
	            sampleDataViews.ArrayToDataview = ArrayToDataview;
	            var Sand = (function (_super) {
	                __extends(Sand, _super);
	                function Sand() {
	                    _super.apply(this, arguments);
	                    this.valuesValue1 = [
	                        "ANDREWS, Miss Kornelia Theodosia",
	                        "ASTOR, Mrs Madeleine Talmage",
	                        "BAXTER, MrsHÃ©lÃ¨ne",
	                        "BISHOP, MrsHelen",
	                        "BROWN, MrsMargaret",
	                        "BUCKNELL, MrsEmmaEliza",
	                        "CANDEE, MrsHelenChurchill",
	                        "CARDEZA, MrsCharlotteWardle",
	                        "CASSEBEER, MrsEleanorGenevieve",
	                        "CLARK, MrsVirginiaEstelle",
	                        "COMPTON, MissSaraRebecca",
	                        "COMPTON, MrsMaryEliza",
	                        "CUMINGS, MrsFlorenceBriggs",
	                        "DAVIDSON, MrsOrian",
	                        "DOUGLAS, MrWalterDonald",
	                        "DOUGLAS, MrsMahala",
	                        "DOUGLAS, MrsMaryHÃ©lÃ¨ne",
	                        "EUSTIS, MissElizabethMussey",
	                        "EVANS, MissEdithCorse",
	                        "FLEGENHEIM, MrsAntoinette",
	                        "FRÃ¶LICHER, MissHedwigMargaritha",
	                        "FRÃ¶LICHER-STEHLI, MrsMargarethaEmerentia",
	                        "GIBSON, MissDorothyWinifred",
	                        "GIBSON, MrsPaulineCaroline",
	                        "GOLDENBERG, MrsNella",
	                        "GREENFIELD, MrsBlanche",
	                        "HARDER, MrsDorothy",
	                        "HARPER, MrsMyraRaymond",
	                        "HAYS, MissMargaretBechstein",
	                        "HIPPACH, MissJeanGertrude",
	                        "HIPPACH, MrsIdaSophia",
	                        "ISHAM, MissAnnElizabeth",
	                        "LINDSTRÃ¶M, MrsSigrid",
	                        "LINES, MissMaryConover",
	                        "LINES, MrsElizabethLindsey",
	                        "LONGLEY, MissGretchenFiske",
	                        "MEYER, MrsLeila"
	                    ];
	                    this.valuesValue2 = powerbitests.customVisuals.helpers.getRandomIntegers(this.valuesValue1.length, 15, 70);
	                    this.valuesValue3 = powerbitests.customVisuals.helpers.getRandomNumbers(this.valuesValue1.length, 30, 200);
	                    this.valuesValue4 = powerbitests.customVisuals.helpers.getRandomBooleans(this.valuesValue1.length, 0.7);
	                }
	                Sand.prototype.getDataView = function (columnNames) {
	                    return this.createCategoricalDataViewBuilder([
	                        [
	                            {
	                                source: {
	                                    displayName: Sand.ColumnValues1,
	                                    isMeasure: true,
	                                    type: ValueType.fromDescriptor({ text: true }),
	                                },
	                                values: this.valuesValue1
	                            },
	                            {
	                                source: {
	                                    displayName: Sand.ColumnValues2,
	                                    isMeasure: true,
	                                    type: ValueType.fromDescriptor({ numeric: true }),
	                                },
	                                values: this.valuesValue2
	                            },
	                            {
	                                source: {
	                                    displayName: Sand.ColumnValues3,
	                                    isMeasure: true,
	                                    type: ValueType.fromDescriptor({ numeric: true }),
	                                },
	                                values: this.valuesValue3
	                            },
	                            {
	                                source: {
	                                    displayName: Sand.ColumnValues4,
	                                    isMeasure: true,
	                                    type: ValueType.fromDescriptor({ bool: true }),
	                                },
	                                values: this.valuesValue4
	                            }
	                        ]
	                    ], null, columnNames).build();
	                };
	                Sand.ColumnValues1 = "Name";
	                Sand.ColumnValues2 = "Age";
	                Sand.ColumnValues3 = "Ticket Cost";
	                Sand.ColumnValues4 = "Survived";
	                return Sand;
	            }(sampleDataViews.DataViewBuilder));
	            sampleDataViews.Sand = Sand;
	        })(sampleDataViews = customVisuals.sampleDataViews || (customVisuals.sampleDataViews = {}));
	    })(customVisuals = powerbitests.customVisuals || (powerbitests.customVisuals = {}));
	})(powerbitests || (powerbitests = {}));

	

/***/ }
/******/ ]);
//# sourceMappingURL=DataViewCreator.js.map