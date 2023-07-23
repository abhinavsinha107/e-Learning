function zm(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Bm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xd={exports:{}},us={},Zd={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Li=Symbol.for("react.element"),$m=Symbol.for("react.portal"),Vm=Symbol.for("react.fragment"),Wm=Symbol.for("react.strict_mode"),Hm=Symbol.for("react.profiler"),Km=Symbol.for("react.provider"),Gm=Symbol.for("react.context"),qm=Symbol.for("react.forward_ref"),Ym=Symbol.for("react.suspense"),Qm=Symbol.for("react.memo"),Jm=Symbol.for("react.lazy"),sc=Symbol.iterator;function Xm(t){return t===null||typeof t!="object"?null:(t=sc&&t[sc]||t["@@iterator"],typeof t=="function"?t:null)}var ef={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tf=Object.assign,nf={};function gr(t,e,n){this.props=t,this.context=e,this.refs=nf,this.updater=n||ef}gr.prototype.isReactComponent={};gr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};gr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function rf(){}rf.prototype=gr.prototype;function Dl(t,e,n){this.props=t,this.context=e,this.refs=nf,this.updater=n||ef}var Ml=Dl.prototype=new rf;Ml.constructor=Dl;tf(Ml,gr.prototype);Ml.isPureReactComponent=!0;var ac=Array.isArray,of=Object.prototype.hasOwnProperty,bl={current:null},sf={key:!0,ref:!0,__self:!0,__source:!0};function af(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)of.call(e,r)&&!sf.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Li,type:t,key:o,ref:s,props:i,_owner:bl.current}}function Zm(t,e){return{$$typeof:Li,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ul(t){return typeof t=="object"&&t!==null&&t.$$typeof===Li}function eg(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lc=/\/+/g;function js(t,e){return typeof t=="object"&&t!==null&&t.key!=null?eg(""+t.key):e.toString(36)}function co(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Li:case $m:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+js(s,0):r,ac(i)?(n="",t!=null&&(n=t.replace(lc,"$&/")+"/"),co(i,e,n,"",function(u){return u})):i!=null&&(Ul(i)&&(i=Zm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(lc,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",ac(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+js(o,a);s+=co(o,e,n,l,i)}else if(l=Xm(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+js(o,a++),s+=co(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ki(t,e,n){if(t==null)return t;var r=[],i=0;return co(t,r,"","",function(o){return e.call(n,o,i++)}),r}function tg(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var we={current:null},fo={transition:null},ng={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:fo,ReactCurrentOwner:bl};D.Children={map:Ki,forEach:function(t,e,n){Ki(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ki(t,function(){e++}),e},toArray:function(t){return Ki(t,function(e){return e})||[]},only:function(t){if(!Ul(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};D.Component=gr;D.Fragment=Vm;D.Profiler=Hm;D.PureComponent=Dl;D.StrictMode=Wm;D.Suspense=Ym;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ng;D.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=tf({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=bl.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)of.call(e,l)&&!sf.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Li,type:t.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(t){return t={$$typeof:Gm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Km,_context:t},t.Consumer=t};D.createElement=af;D.createFactory=function(t){var e=af.bind(null,t);return e.type=t,e};D.createRef=function(){return{current:null}};D.forwardRef=function(t){return{$$typeof:qm,render:t}};D.isValidElement=Ul;D.lazy=function(t){return{$$typeof:Jm,_payload:{_status:-1,_result:t},_init:tg}};D.memo=function(t,e){return{$$typeof:Qm,type:t,compare:e===void 0?null:e}};D.startTransition=function(t){var e=fo.transition;fo.transition={};try{t()}finally{fo.transition=e}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(t,e){return we.current.useCallback(t,e)};D.useContext=function(t){return we.current.useContext(t)};D.useDebugValue=function(){};D.useDeferredValue=function(t){return we.current.useDeferredValue(t)};D.useEffect=function(t,e){return we.current.useEffect(t,e)};D.useId=function(){return we.current.useId()};D.useImperativeHandle=function(t,e,n){return we.current.useImperativeHandle(t,e,n)};D.useInsertionEffect=function(t,e){return we.current.useInsertionEffect(t,e)};D.useLayoutEffect=function(t,e){return we.current.useLayoutEffect(t,e)};D.useMemo=function(t,e){return we.current.useMemo(t,e)};D.useReducer=function(t,e,n){return we.current.useReducer(t,e,n)};D.useRef=function(t){return we.current.useRef(t)};D.useState=function(t){return we.current.useState(t)};D.useSyncExternalStore=function(t,e,n){return we.current.useSyncExternalStore(t,e,n)};D.useTransition=function(){return we.current.useTransition()};D.version="18.2.0";Zd.exports=D;var S=Zd.exports;const lf=Bm(S),rg=zm({__proto__:null,default:lf},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig=S,og=Symbol.for("react.element"),sg=Symbol.for("react.fragment"),ag=Object.prototype.hasOwnProperty,lg=ig.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ug={key:!0,ref:!0,__self:!0,__source:!0};function uf(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)ag.call(e,r)&&!ug.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:og,type:t,key:o,ref:s,props:i,_owner:lg.current}}us.Fragment=sg;us.jsx=uf;us.jsxs=uf;Xd.exports=us;var E=Xd.exports,Ta={},cf={exports:{}},De={},df={exports:{}},ff={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,O){var x=C.length;C.push(O);e:for(;0<x;){var q=x-1>>>1,oe=C[q];if(0<i(oe,O))C[q]=O,C[x]=oe,x=q;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var O=C[0],x=C.pop();if(x!==O){C[0]=x;e:for(var q=0,oe=C.length,Wi=oe>>>1;q<Wi;){var sn=2*(q+1)-1,Fs=C[sn],an=sn+1,Hi=C[an];if(0>i(Fs,x))an<oe&&0>i(Hi,Fs)?(C[q]=Hi,C[an]=x,q=an):(C[q]=Fs,C[sn]=x,q=sn);else if(an<oe&&0>i(Hi,x))C[q]=Hi,C[an]=x,q=an;else break e}}return O}function i(C,O){var x=C.sortIndex-O.sortIndex;return x!==0?x:C.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,m=3,g=!1,y=!1,v=!1,A=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=C)r(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function w(C){if(v=!1,p(C),!y)if(n(l)!==null)y=!0,bs(k);else{var O=n(u);O!==null&&Us(w,O.startTime-C)}}function k(C,O){y=!1,v&&(v=!1,h(N),N=-1),g=!0;var x=m;try{for(p(O),f=n(l);f!==null&&(!(f.expirationTime>O)||C&&!Ve());){var q=f.callback;if(typeof q=="function"){f.callback=null,m=f.priorityLevel;var oe=q(f.expirationTime<=O);O=t.unstable_now(),typeof oe=="function"?f.callback=oe:f===n(l)&&r(l),p(O)}else r(l);f=n(l)}if(f!==null)var Wi=!0;else{var sn=n(u);sn!==null&&Us(w,sn.startTime-O),Wi=!1}return Wi}finally{f=null,m=x,g=!1}}var R=!1,P=null,N=-1,z=5,L=-1;function Ve(){return!(t.unstable_now()-L<z)}function Pr(){if(P!==null){var C=t.unstable_now();L=C;var O=!0;try{O=P(!0,C)}finally{O?Nr():(R=!1,P=null)}}else R=!1}var Nr;if(typeof d=="function")Nr=function(){d(Pr)};else if(typeof MessageChannel<"u"){var oc=new MessageChannel,jm=oc.port2;oc.port1.onmessage=Pr,Nr=function(){jm.postMessage(null)}}else Nr=function(){A(Pr,0)};function bs(C){P=C,R||(R=!0,Nr())}function Us(C,O){N=A(function(){C(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,bs(k))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var x=m;m=O;try{return C()}finally{m=x}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,O){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var x=m;m=C;try{return O()}finally{m=x}},t.unstable_scheduleCallback=function(C,O,x){var q=t.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?q+x:q):x=q,C){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=x+oe,C={id:c++,callback:O,priorityLevel:C,startTime:x,expirationTime:oe,sortIndex:-1},x>q?(C.sortIndex=x,e(u,C),n(l)===null&&C===n(u)&&(v?(h(N),N=-1):v=!0,Us(w,x-q))):(C.sortIndex=oe,e(l,C),y||g||(y=!0,bs(k))),C},t.unstable_shouldYield=Ve,t.unstable_wrapCallback=function(C){var O=m;return function(){var x=m;m=O;try{return C.apply(this,arguments)}finally{m=x}}}})(ff);df.exports=ff;var cg=df.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf=S,Le=cg;function _(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pf=new Set,ai={};function An(t,e){ar(t,e),ar(t+"Capture",e)}function ar(t,e){for(ai[t]=e,t=0;t<e.length;t++)pf.add(e[t])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ca=Object.prototype.hasOwnProperty,dg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uc={},cc={};function fg(t){return Ca.call(cc,t)?!0:Ca.call(uc,t)?!1:dg.test(t)?cc[t]=!0:(uc[t]=!0,!1)}function hg(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pg(t,e,n,r){if(e===null||typeof e>"u"||hg(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _e(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){de[t]=new _e(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];de[e]=new _e(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){de[t]=new _e(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){de[t]=new _e(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){de[t]=new _e(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){de[t]=new _e(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){de[t]=new _e(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){de[t]=new _e(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){de[t]=new _e(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fl=/[\-:]([a-z])/g;function jl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fl,jl);de[e]=new _e(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fl,jl);de[e]=new _e(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fl,jl);de[e]=new _e(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){de[t]=new _e(t,1,!1,t.toLowerCase(),null,!1,!1)});de.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){de[t]=new _e(t,1,!1,t.toLowerCase(),null,!0,!0)});function zl(t,e,n,r){var i=de.hasOwnProperty(e)?de[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pg(e,n,i,r)&&(n=null),r||i===null?fg(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var St=hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gi=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),Bl=Symbol.for("react.strict_mode"),Ra=Symbol.for("react.profiler"),mf=Symbol.for("react.provider"),gf=Symbol.for("react.context"),$l=Symbol.for("react.forward_ref"),Pa=Symbol.for("react.suspense"),Na=Symbol.for("react.suspense_list"),Vl=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),vf=Symbol.for("react.offscreen"),dc=Symbol.iterator;function Ar(t){return t===null||typeof t!="object"?null:(t=dc&&t[dc]||t["@@iterator"],typeof t=="function"?t:null)}var K=Object.assign,zs;function Br(t){if(zs===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zs=e&&e[1]||""}return`
`+zs+t}var Bs=!1;function $s(t,e){if(!t||Bs)return"";Bs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Bs=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Br(t):""}function mg(t){switch(t.tag){case 5:return Br(t.type);case 16:return Br("Lazy");case 13:return Br("Suspense");case 19:return Br("SuspenseList");case 0:case 2:case 15:return t=$s(t.type,!1),t;case 11:return t=$s(t.type.render,!1),t;case 1:return t=$s(t.type,!0),t;default:return""}}function Aa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case jn:return"Fragment";case Fn:return"Portal";case Ra:return"Profiler";case Bl:return"StrictMode";case Pa:return"Suspense";case Na:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gf:return(t.displayName||"Context")+".Consumer";case mf:return(t._context.displayName||"Context")+".Provider";case $l:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vl:return e=t.displayName||null,e!==null?e:Aa(t.type)||"Memo";case Nt:e=t._payload,t=t._init;try{return Aa(t(e))}catch{}}return null}function gg(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Aa(e);case 8:return e===Bl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vg(t){var e=yf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qi(t){t._valueTracker||(t._valueTracker=vg(t))}function wf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=yf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function No(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Oa(t,e){var n=e.checked;return K({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=qt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _f(t,e){e=e.checked,e!=null&&zl(t,"checked",e,!1)}function xa(t,e){_f(t,e);var n=qt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?La(t,e.type,n):e.hasOwnProperty("defaultValue")&&La(t,e.type,qt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function La(t,e,n){(e!=="number"||No(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $r=Array.isArray;function Jn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+qt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Da(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(_(91));return K({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(_(92));if($r(n)){if(1<n.length)throw Error(_(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qt(n)}}function Ef(t,e){var n=qt(e.value),r=qt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function If(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ma(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?If(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Yi,Sf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Yi=Yi||document.createElement("div"),Yi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Yi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function li(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yg=["Webkit","ms","Moz","O"];Object.keys(Yr).forEach(function(t){yg.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Yr[e]=Yr[t]})});function kf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Yr.hasOwnProperty(t)&&Yr[t]?(""+e).trim():e+"px"}function Tf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=kf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var wg=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ba(t,e){if(e){if(wg[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(_(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(_(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(_(61))}if(e.style!=null&&typeof e.style!="object")throw Error(_(62))}}function Ua(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fa=null;function Wl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ja=null,Xn=null,Zn=null;function gc(t){if(t=bi(t)){if(typeof ja!="function")throw Error(_(280));var e=t.stateNode;e&&(e=ps(e),ja(t.stateNode,t.type,e))}}function Cf(t){Xn?Zn?Zn.push(t):Zn=[t]:Xn=t}function Rf(){if(Xn){var t=Xn,e=Zn;if(Zn=Xn=null,gc(t),e)for(t=0;t<e.length;t++)gc(e[t])}}function Pf(t,e){return t(e)}function Nf(){}var Vs=!1;function Af(t,e,n){if(Vs)return t(e,n);Vs=!0;try{return Pf(t,e,n)}finally{Vs=!1,(Xn!==null||Zn!==null)&&(Nf(),Rf())}}function ui(t,e){var n=t.stateNode;if(n===null)return null;var r=ps(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(_(231,e,typeof n));return n}var za=!1;if(yt)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){za=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{za=!1}function _g(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Qr=!1,Ao=null,Oo=!1,Ba=null,Eg={onError:function(t){Qr=!0,Ao=t}};function Ig(t,e,n,r,i,o,s,a,l){Qr=!1,Ao=null,_g.apply(Eg,arguments)}function Sg(t,e,n,r,i,o,s,a,l){if(Ig.apply(this,arguments),Qr){if(Qr){var u=Ao;Qr=!1,Ao=null}else throw Error(_(198));Oo||(Oo=!0,Ba=u)}}function On(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Of(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vc(t){if(On(t)!==t)throw Error(_(188))}function kg(t){var e=t.alternate;if(!e){if(e=On(t),e===null)throw Error(_(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return vc(i),t;if(o===r)return vc(i),e;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?t:e}function xf(t){return t=kg(t),t!==null?Lf(t):null}function Lf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Lf(t);if(e!==null)return e;t=t.sibling}return null}var Df=Le.unstable_scheduleCallback,yc=Le.unstable_cancelCallback,Tg=Le.unstable_shouldYield,Cg=Le.unstable_requestPaint,Y=Le.unstable_now,Rg=Le.unstable_getCurrentPriorityLevel,Hl=Le.unstable_ImmediatePriority,Mf=Le.unstable_UserBlockingPriority,xo=Le.unstable_NormalPriority,Pg=Le.unstable_LowPriority,bf=Le.unstable_IdlePriority,cs=null,st=null;function Ng(t){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(cs,t,void 0,(t.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:xg,Ag=Math.log,Og=Math.LN2;function xg(t){return t>>>=0,t===0?32:31-(Ag(t)/Og|0)|0}var Qi=64,Ji=4194304;function Vr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Lo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Vr(a):(o&=s,o!==0&&(r=Vr(o)))}else s=n&~i,s!==0?r=Vr(s):o!==0&&(r=Vr(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qe(e),i=1<<n,r|=t[n],e&=~i;return r}function Lg(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dg(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-qe(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Lg(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function $a(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Uf(){var t=Qi;return Qi<<=1,!(Qi&4194240)&&(Qi=64),t}function Ws(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Di(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qe(e),t[e]=n}function Mg(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-qe(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Kl(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qe(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var U=0;function Ff(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var jf,Gl,zf,Bf,$f,Va=!1,Xi=[],Ut=null,Ft=null,jt=null,ci=new Map,di=new Map,Ot=[],bg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wc(t,e){switch(t){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":ci.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(e.pointerId)}}function xr(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=bi(e),e!==null&&Gl(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ug(t,e,n,r,i){switch(e){case"focusin":return Ut=xr(Ut,t,e,n,r,i),!0;case"dragenter":return Ft=xr(Ft,t,e,n,r,i),!0;case"mouseover":return jt=xr(jt,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return ci.set(o,xr(ci.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,di.set(o,xr(di.get(o)||null,t,e,n,r,i)),!0}return!1}function Vf(t){var e=dn(t.target);if(e!==null){var n=On(e);if(n!==null){if(e=n.tag,e===13){if(e=Of(n),e!==null){t.blockedOn=e,$f(t.priority,function(){zf(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ho(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Fa=r,n.target.dispatchEvent(r),Fa=null}else return e=bi(n),e!==null&&Gl(e),t.blockedOn=n,!1;e.shift()}return!0}function _c(t,e,n){ho(t)&&n.delete(e)}function Fg(){Va=!1,Ut!==null&&ho(Ut)&&(Ut=null),Ft!==null&&ho(Ft)&&(Ft=null),jt!==null&&ho(jt)&&(jt=null),ci.forEach(_c),di.forEach(_c)}function Lr(t,e){t.blockedOn===e&&(t.blockedOn=null,Va||(Va=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,Fg)))}function fi(t){function e(i){return Lr(i,t)}if(0<Xi.length){Lr(Xi[0],t);for(var n=1;n<Xi.length;n++){var r=Xi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ut!==null&&Lr(Ut,t),Ft!==null&&Lr(Ft,t),jt!==null&&Lr(jt,t),ci.forEach(e),di.forEach(e),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)Vf(n),n.blockedOn===null&&Ot.shift()}var er=St.ReactCurrentBatchConfig,Do=!0;function jg(t,e,n,r){var i=U,o=er.transition;er.transition=null;try{U=1,ql(t,e,n,r)}finally{U=i,er.transition=o}}function zg(t,e,n,r){var i=U,o=er.transition;er.transition=null;try{U=4,ql(t,e,n,r)}finally{U=i,er.transition=o}}function ql(t,e,n,r){if(Do){var i=Wa(t,e,n,r);if(i===null)ea(t,e,r,Mo,n),wc(t,r);else if(Ug(i,t,e,n,r))r.stopPropagation();else if(wc(t,r),e&4&&-1<bg.indexOf(t)){for(;i!==null;){var o=bi(i);if(o!==null&&jf(o),o=Wa(t,e,n,r),o===null&&ea(t,e,r,Mo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ea(t,e,r,null,n)}}var Mo=null;function Wa(t,e,n,r){if(Mo=null,t=Wl(r),t=dn(t),t!==null)if(e=On(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Of(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Mo=t,null}function Wf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rg()){case Hl:return 1;case Mf:return 4;case xo:case Pg:return 16;case bf:return 536870912;default:return 16}default:return 16}}var Lt=null,Yl=null,po=null;function Hf(){if(po)return po;var t,e=Yl,n=e.length,r,i="value"in Lt?Lt.value:Lt.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return po=i.slice(t,1<r?1-r:void 0)}function mo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zi(){return!0}function Ec(){return!1}function Me(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Zi:Ec,this.isPropagationStopped=Ec,this}return K(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),e}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=Me(vr),Mi=K({},vr,{view:0,detail:0}),Bg=Me(Mi),Hs,Ks,Dr,ds=K({},Mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Dr&&(Dr&&t.type==="mousemove"?(Hs=t.screenX-Dr.screenX,Ks=t.screenY-Dr.screenY):Ks=Hs=0,Dr=t),Hs)},movementY:function(t){return"movementY"in t?t.movementY:Ks}}),Ic=Me(ds),$g=K({},ds,{dataTransfer:0}),Vg=Me($g),Wg=K({},Mi,{relatedTarget:0}),Gs=Me(Wg),Hg=K({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),Kg=Me(Hg),Gg=K({},vr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qg=Me(Gg),Yg=K({},vr,{data:0}),Sc=Me(Yg),Qg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zg(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Xg[t])?!!e[t]:!1}function Jl(){return Zg}var ev=K({},Mi,{key:function(t){if(t.key){var e=Qg[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=mo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jl,charCode:function(t){return t.type==="keypress"?mo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tv=Me(ev),nv=K({},ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kc=Me(nv),rv=K({},Mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jl}),iv=Me(rv),ov=K({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sv=Me(ov),av=K({},ds,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lv=Me(av),uv=[9,13,27,32],Xl=yt&&"CompositionEvent"in window,Jr=null;yt&&"documentMode"in document&&(Jr=document.documentMode);var cv=yt&&"TextEvent"in window&&!Jr,Kf=yt&&(!Xl||Jr&&8<Jr&&11>=Jr),Tc=String.fromCharCode(32),Cc=!1;function Gf(t,e){switch(t){case"keyup":return uv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zn=!1;function dv(t,e){switch(t){case"compositionend":return qf(e);case"keypress":return e.which!==32?null:(Cc=!0,Tc);case"textInput":return t=e.data,t===Tc&&Cc?null:t;default:return null}}function fv(t,e){if(zn)return t==="compositionend"||!Xl&&Gf(t,e)?(t=Hf(),po=Yl=Lt=null,zn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kf&&e.locale!=="ko"?null:e.data;default:return null}}var hv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hv[t.type]:e==="textarea"}function Yf(t,e,n,r){Cf(r),e=bo(e,"onChange"),0<e.length&&(n=new Ql("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Xr=null,hi=null;function pv(t){sh(t,0)}function fs(t){var e=Vn(t);if(wf(e))return t}function mv(t,e){if(t==="change")return e}var Qf=!1;if(yt){var qs;if(yt){var Ys="oninput"in document;if(!Ys){var Pc=document.createElement("div");Pc.setAttribute("oninput","return;"),Ys=typeof Pc.oninput=="function"}qs=Ys}else qs=!1;Qf=qs&&(!document.documentMode||9<document.documentMode)}function Nc(){Xr&&(Xr.detachEvent("onpropertychange",Jf),hi=Xr=null)}function Jf(t){if(t.propertyName==="value"&&fs(hi)){var e=[];Yf(e,hi,t,Wl(t)),Af(pv,e)}}function gv(t,e,n){t==="focusin"?(Nc(),Xr=e,hi=n,Xr.attachEvent("onpropertychange",Jf)):t==="focusout"&&Nc()}function vv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fs(hi)}function yv(t,e){if(t==="click")return fs(e)}function wv(t,e){if(t==="input"||t==="change")return fs(e)}function _v(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qe=typeof Object.is=="function"?Object.is:_v;function pi(t,e){if(Qe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ca.call(e,i)||!Qe(t[i],e[i]))return!1}return!0}function Ac(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Oc(t,e){var n=Ac(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ac(n)}}function Xf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Xf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zf(){for(var t=window,e=No();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=No(t.document)}return e}function Zl(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ev(t){var e=Zf(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Xf(n.ownerDocument.documentElement,n)){if(r!==null&&Zl(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Oc(n,o);var s=Oc(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Iv=yt&&"documentMode"in document&&11>=document.documentMode,Bn=null,Ha=null,Zr=null,Ka=!1;function xc(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ka||Bn==null||Bn!==No(r)||(r=Bn,"selectionStart"in r&&Zl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&pi(Zr,r)||(Zr=r,r=bo(Ha,"onSelect"),0<r.length&&(e=new Ql("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Bn)))}function eo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $n={animationend:eo("Animation","AnimationEnd"),animationiteration:eo("Animation","AnimationIteration"),animationstart:eo("Animation","AnimationStart"),transitionend:eo("Transition","TransitionEnd")},Qs={},eh={};yt&&(eh=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function hs(t){if(Qs[t])return Qs[t];if(!$n[t])return t;var e=$n[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in eh)return Qs[t]=e[n];return t}var th=hs("animationend"),nh=hs("animationiteration"),rh=hs("animationstart"),ih=hs("transitionend"),oh=new Map,Lc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(t,e){oh.set(t,e),An(e,[t])}for(var Js=0;Js<Lc.length;Js++){var Xs=Lc[Js],Sv=Xs.toLowerCase(),kv=Xs[0].toUpperCase()+Xs.slice(1);en(Sv,"on"+kv)}en(th,"onAnimationEnd");en(nh,"onAnimationIteration");en(rh,"onAnimationStart");en("dblclick","onDoubleClick");en("focusin","onFocus");en("focusout","onBlur");en(ih,"onTransitionEnd");ar("onMouseEnter",["mouseout","mouseover"]);ar("onMouseLeave",["mouseout","mouseover"]);ar("onPointerEnter",["pointerout","pointerover"]);ar("onPointerLeave",["pointerout","pointerover"]);An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));An("onBeforeInput",["compositionend","keypress","textInput","paste"]);An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));function Dc(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Sg(r,e,void 0,t),t.currentTarget=null}function sh(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Dc(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Dc(i,a,u),o=l}}}if(Oo)throw t=Ba,Oo=!1,Ba=null,t}function B(t,e){var n=e[Ja];n===void 0&&(n=e[Ja]=new Set);var r=t+"__bubble";n.has(r)||(ah(e,t,2,!1),n.add(r))}function Zs(t,e,n){var r=0;e&&(r|=4),ah(n,t,r,e)}var to="_reactListening"+Math.random().toString(36).slice(2);function mi(t){if(!t[to]){t[to]=!0,pf.forEach(function(n){n!=="selectionchange"&&(Tv.has(n)||Zs(n,!1,t),Zs(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[to]||(e[to]=!0,Zs("selectionchange",!1,e))}}function ah(t,e,n,r){switch(Wf(e)){case 1:var i=jg;break;case 4:i=zg;break;default:i=ql}n=i.bind(null,e,n,t),i=void 0,!za||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ea(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=dn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Af(function(){var u=o,c=Wl(n),f=[];e:{var m=oh.get(t);if(m!==void 0){var g=Ql,y=t;switch(t){case"keypress":if(mo(n)===0)break e;case"keydown":case"keyup":g=tv;break;case"focusin":y="focus",g=Gs;break;case"focusout":y="blur",g=Gs;break;case"beforeblur":case"afterblur":g=Gs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Vg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=iv;break;case th:case nh:case rh:g=Kg;break;case ih:g=sv;break;case"scroll":g=Bg;break;case"wheel":g=lv;break;case"copy":case"cut":case"paste":g=qg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=kc}var v=(e&4)!==0,A=!v&&t==="scroll",h=v?m!==null?m+"Capture":null:m;v=[];for(var d=u,p;d!==null;){p=d;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,h!==null&&(w=ui(d,h),w!=null&&v.push(gi(d,w,p)))),A)break;d=d.return}0<v.length&&(m=new g(m,y,null,n,c),f.push({event:m,listeners:v}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",m&&n!==Fa&&(y=n.relatedTarget||n.fromElement)&&(dn(y)||y[wt]))break e;if((g||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?dn(y):null,y!==null&&(A=On(y),y!==A||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=Ic,w="onMouseLeave",h="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(v=kc,w="onPointerLeave",h="onPointerEnter",d="pointer"),A=g==null?m:Vn(g),p=y==null?m:Vn(y),m=new v(w,d+"leave",g,n,c),m.target=A,m.relatedTarget=p,w=null,dn(c)===u&&(v=new v(h,d+"enter",y,n,c),v.target=p,v.relatedTarget=A,w=v),A=w,g&&y)t:{for(v=g,h=y,d=0,p=v;p;p=Mn(p))d++;for(p=0,w=h;w;w=Mn(w))p++;for(;0<d-p;)v=Mn(v),d--;for(;0<p-d;)h=Mn(h),p--;for(;d--;){if(v===h||h!==null&&v===h.alternate)break t;v=Mn(v),h=Mn(h)}v=null}else v=null;g!==null&&Mc(f,m,g,v,!1),y!==null&&A!==null&&Mc(f,A,y,v,!0)}}e:{if(m=u?Vn(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var k=mv;else if(Rc(m))if(Qf)k=wv;else{k=vv;var R=gv}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=yv);if(k&&(k=k(t,u))){Yf(f,k,n,c);break e}R&&R(t,m,u),t==="focusout"&&(R=m._wrapperState)&&R.controlled&&m.type==="number"&&La(m,"number",m.value)}switch(R=u?Vn(u):window,t){case"focusin":(Rc(R)||R.contentEditable==="true")&&(Bn=R,Ha=u,Zr=null);break;case"focusout":Zr=Ha=Bn=null;break;case"mousedown":Ka=!0;break;case"contextmenu":case"mouseup":case"dragend":Ka=!1,xc(f,n,c);break;case"selectionchange":if(Iv)break;case"keydown":case"keyup":xc(f,n,c)}var P;if(Xl)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else zn?Gf(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Kf&&n.locale!=="ko"&&(zn||N!=="onCompositionStart"?N==="onCompositionEnd"&&zn&&(P=Hf()):(Lt=c,Yl="value"in Lt?Lt.value:Lt.textContent,zn=!0)),R=bo(u,N),0<R.length&&(N=new Sc(N,t,null,n,c),f.push({event:N,listeners:R}),P?N.data=P:(P=qf(n),P!==null&&(N.data=P)))),(P=cv?dv(t,n):fv(t,n))&&(u=bo(u,"onBeforeInput"),0<u.length&&(c=new Sc("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=P))}sh(f,e)})}function gi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ui(t,n),o!=null&&r.unshift(gi(t,o,i)),o=ui(t,e),o!=null&&r.push(gi(t,o,i))),t=t.return}return r}function Mn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mc(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ui(n,o),l!=null&&s.unshift(gi(n,l,a))):i||(l=ui(n,o),l!=null&&s.push(gi(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Cv=/\r\n?/g,Rv=/\u0000|\uFFFD/g;function bc(t){return(typeof t=="string"?t:""+t).replace(Cv,`
`).replace(Rv,"")}function no(t,e,n){if(e=bc(e),bc(t)!==e&&n)throw Error(_(425))}function Uo(){}var Ga=null,qa=null;function Ya(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qa=typeof setTimeout=="function"?setTimeout:void 0,Pv=typeof clearTimeout=="function"?clearTimeout:void 0,Uc=typeof Promise=="function"?Promise:void 0,Nv=typeof queueMicrotask=="function"?queueMicrotask:typeof Uc<"u"?function(t){return Uc.resolve(null).then(t).catch(Av)}:Qa;function Av(t){setTimeout(function(){throw t})}function ta(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),fi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fi(e)}function zt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var yr=Math.random().toString(36).slice(2),et="__reactFiber$"+yr,vi="__reactProps$"+yr,wt="__reactContainer$"+yr,Ja="__reactEvents$"+yr,Ov="__reactListeners$"+yr,xv="__reactHandles$"+yr;function dn(t){var e=t[et];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wt]||n[et]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fc(t);t!==null;){if(n=t[et])return n;t=Fc(t)}return e}t=n,n=t.parentNode}return null}function bi(t){return t=t[et]||t[wt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(_(33))}function ps(t){return t[vi]||null}var Xa=[],Wn=-1;function tn(t){return{current:t}}function $(t){0>Wn||(t.current=Xa[Wn],Xa[Wn]=null,Wn--)}function j(t,e){Wn++,Xa[Wn]=t.current,t.current=e}var Yt={},ge=tn(Yt),ke=tn(!1),_n=Yt;function lr(t,e){var n=t.type.contextTypes;if(!n)return Yt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Te(t){return t=t.childContextTypes,t!=null}function Fo(){$(ke),$(ge)}function jc(t,e,n){if(ge.current!==Yt)throw Error(_(168));j(ge,e),j(ke,n)}function lh(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(_(108,gg(t)||"Unknown",i));return K({},n,r)}function jo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yt,_n=ge.current,j(ge,t),j(ke,ke.current),!0}function zc(t,e,n){var r=t.stateNode;if(!r)throw Error(_(169));n?(t=lh(t,e,_n),r.__reactInternalMemoizedMergedChildContext=t,$(ke),$(ge),j(ge,t)):$(ke),j(ke,n)}var ct=null,ms=!1,na=!1;function uh(t){ct===null?ct=[t]:ct.push(t)}function Lv(t){ms=!0,uh(t)}function nn(){if(!na&&ct!==null){na=!0;var t=0,e=U;try{var n=ct;for(U=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ct=null,ms=!1}catch(i){throw ct!==null&&(ct=ct.slice(t+1)),Df(Hl,nn),i}finally{U=e,na=!1}}return null}var Hn=[],Kn=0,zo=null,Bo=0,be=[],Ue=0,En=null,dt=1,ft="";function ln(t,e){Hn[Kn++]=Bo,Hn[Kn++]=zo,zo=t,Bo=e}function ch(t,e,n){be[Ue++]=dt,be[Ue++]=ft,be[Ue++]=En,En=t;var r=dt;t=ft;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var o=32-qe(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,dt=1<<32-qe(e)+i|n<<i|r,ft=o+t}else dt=1<<o|n<<i|r,ft=t}function eu(t){t.return!==null&&(ln(t,1),ch(t,1,0))}function tu(t){for(;t===zo;)zo=Hn[--Kn],Hn[Kn]=null,Bo=Hn[--Kn],Hn[Kn]=null;for(;t===En;)En=be[--Ue],be[Ue]=null,ft=be[--Ue],be[Ue]=null,dt=be[--Ue],be[Ue]=null}var xe=null,Ae=null,V=!1,Ge=null;function dh(t,e){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xe=t,Ae=zt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xe=t,Ae=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=En!==null?{id:dt,overflow:ft}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xe=t,Ae=null,!0):!1;default:return!1}}function Za(t){return(t.mode&1)!==0&&(t.flags&128)===0}function el(t){if(V){var e=Ae;if(e){var n=e;if(!Bc(t,e)){if(Za(t))throw Error(_(418));e=zt(n.nextSibling);var r=xe;e&&Bc(t,e)?dh(r,n):(t.flags=t.flags&-4097|2,V=!1,xe=t)}}else{if(Za(t))throw Error(_(418));t.flags=t.flags&-4097|2,V=!1,xe=t}}}function $c(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xe=t}function ro(t){if(t!==xe)return!1;if(!V)return $c(t),V=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ya(t.type,t.memoizedProps)),e&&(e=Ae)){if(Za(t))throw fh(),Error(_(418));for(;e;)dh(t,e),e=zt(e.nextSibling)}if($c(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(_(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ae=zt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ae=null}}else Ae=xe?zt(t.stateNode.nextSibling):null;return!0}function fh(){for(var t=Ae;t;)t=zt(t.nextSibling)}function ur(){Ae=xe=null,V=!1}function nu(t){Ge===null?Ge=[t]:Ge.push(t)}var Dv=St.ReactCurrentBatchConfig;function He(t,e){if(t&&t.defaultProps){e=K({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var $o=tn(null),Vo=null,Gn=null,ru=null;function iu(){ru=Gn=Vo=null}function ou(t){var e=$o.current;$($o),t._currentValue=e}function tl(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function tr(t,e){Vo=t,ru=Gn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Se=!0),t.firstContext=null)}function ze(t){var e=t._currentValue;if(ru!==t)if(t={context:t,memoizedValue:e,next:null},Gn===null){if(Vo===null)throw Error(_(308));Gn=t,Vo.dependencies={lanes:0,firstContext:t}}else Gn=Gn.next=t;return e}var fn=null;function su(t){fn===null?fn=[t]:fn.push(t)}function hh(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,su(e)):(n.next=i.next,i.next=n),e.interleaved=n,_t(t,r)}function _t(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var At=!1;function au(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ph(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,_t(t,n)}return i=r.interleaved,i===null?(e.next=e,su(r)):(e.next=i.next,i.next=e),r.interleaved=e,_t(t,n)}function go(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kl(t,n)}}function Vc(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wo(t,e,n,r){var i=t.updateQueue;At=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var m=a.lane,g=a.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(m=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(g,f,m);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,m=typeof y=="function"?y.call(g,f,m):y,m==null)break e;f=K({},f,m);break e;case 2:At=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Sn|=s,t.lanes=s,t.memoizedState=f}}function Wc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var mh=new hf.Component().refs;function nl(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:K({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gs={isMounted:function(t){return(t=t._reactInternals)?On(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ye(),i=Vt(t),o=mt(r,i);o.payload=e,n!=null&&(o.callback=n),e=Bt(t,o,i),e!==null&&(Ye(e,t,i,r),go(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ye(),i=Vt(t),o=mt(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Bt(t,o,i),e!==null&&(Ye(e,t,i,r),go(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ye(),r=Vt(t),i=mt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Bt(t,i,r),e!==null&&(Ye(e,t,r,n),go(e,t,r))}};function Hc(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!pi(n,r)||!pi(i,o):!0}function gh(t,e,n){var r=!1,i=Yt,o=e.contextType;return typeof o=="object"&&o!==null?o=ze(o):(i=Te(e)?_n:ge.current,r=e.contextTypes,o=(r=r!=null)?lr(t,i):Yt),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gs,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Kc(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&gs.enqueueReplaceState(e,e.state,null)}function rl(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=mh,au(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=ze(o):(o=Te(e)?_n:ge.current,i.context=lr(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(nl(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&gs.enqueueReplaceState(i,i.state,null),Wo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Mr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===mh&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,t))}return t}function io(t,e){throw t=Object.prototype.toString.call(e),Error(_(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gc(t){var e=t._init;return e(t._payload)}function vh(t){function e(h,d){if(t){var p=h.deletions;p===null?(h.deletions=[d],h.flags|=16):p.push(d)}}function n(h,d){if(!t)return null;for(;d!==null;)e(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=Wt(h,d),h.index=0,h.sibling=null,h}function o(h,d,p){return h.index=p,t?(p=h.alternate,p!==null?(p=p.index,p<d?(h.flags|=2,d):p):(h.flags|=2,d)):(h.flags|=1048576,d)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,d,p,w){return d===null||d.tag!==6?(d=ua(p,h.mode,w),d.return=h,d):(d=i(d,p),d.return=h,d)}function l(h,d,p,w){var k=p.type;return k===jn?c(h,d,p.props.children,w,p.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Nt&&Gc(k)===d.type)?(w=i(d,p.props),w.ref=Mr(h,d,p),w.return=h,w):(w=Io(p.type,p.key,p.props,null,h.mode,w),w.ref=Mr(h,d,p),w.return=h,w)}function u(h,d,p,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=ca(p,h.mode,w),d.return=h,d):(d=i(d,p.children||[]),d.return=h,d)}function c(h,d,p,w,k){return d===null||d.tag!==7?(d=gn(p,h.mode,w,k),d.return=h,d):(d=i(d,p),d.return=h,d)}function f(h,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ua(""+d,h.mode,p),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Gi:return p=Io(d.type,d.key,d.props,null,h.mode,p),p.ref=Mr(h,null,d),p.return=h,p;case Fn:return d=ca(d,h.mode,p),d.return=h,d;case Nt:var w=d._init;return f(h,w(d._payload),p)}if($r(d)||Ar(d))return d=gn(d,h.mode,p,null),d.return=h,d;io(h,d)}return null}function m(h,d,p,w){var k=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:a(h,d,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Gi:return p.key===k?l(h,d,p,w):null;case Fn:return p.key===k?u(h,d,p,w):null;case Nt:return k=p._init,m(h,d,k(p._payload),w)}if($r(p)||Ar(p))return k!==null?null:c(h,d,p,w,null);io(h,p)}return null}function g(h,d,p,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(p)||null,a(d,h,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Gi:return h=h.get(w.key===null?p:w.key)||null,l(d,h,w,k);case Fn:return h=h.get(w.key===null?p:w.key)||null,u(d,h,w,k);case Nt:var R=w._init;return g(h,d,p,R(w._payload),k)}if($r(w)||Ar(w))return h=h.get(p)||null,c(d,h,w,k,null);io(d,w)}return null}function y(h,d,p,w){for(var k=null,R=null,P=d,N=d=0,z=null;P!==null&&N<p.length;N++){P.index>N?(z=P,P=null):z=P.sibling;var L=m(h,P,p[N],w);if(L===null){P===null&&(P=z);break}t&&P&&L.alternate===null&&e(h,P),d=o(L,d,N),R===null?k=L:R.sibling=L,R=L,P=z}if(N===p.length)return n(h,P),V&&ln(h,N),k;if(P===null){for(;N<p.length;N++)P=f(h,p[N],w),P!==null&&(d=o(P,d,N),R===null?k=P:R.sibling=P,R=P);return V&&ln(h,N),k}for(P=r(h,P);N<p.length;N++)z=g(P,h,N,p[N],w),z!==null&&(t&&z.alternate!==null&&P.delete(z.key===null?N:z.key),d=o(z,d,N),R===null?k=z:R.sibling=z,R=z);return t&&P.forEach(function(Ve){return e(h,Ve)}),V&&ln(h,N),k}function v(h,d,p,w){var k=Ar(p);if(typeof k!="function")throw Error(_(150));if(p=k.call(p),p==null)throw Error(_(151));for(var R=k=null,P=d,N=d=0,z=null,L=p.next();P!==null&&!L.done;N++,L=p.next()){P.index>N?(z=P,P=null):z=P.sibling;var Ve=m(h,P,L.value,w);if(Ve===null){P===null&&(P=z);break}t&&P&&Ve.alternate===null&&e(h,P),d=o(Ve,d,N),R===null?k=Ve:R.sibling=Ve,R=Ve,P=z}if(L.done)return n(h,P),V&&ln(h,N),k;if(P===null){for(;!L.done;N++,L=p.next())L=f(h,L.value,w),L!==null&&(d=o(L,d,N),R===null?k=L:R.sibling=L,R=L);return V&&ln(h,N),k}for(P=r(h,P);!L.done;N++,L=p.next())L=g(P,h,N,L.value,w),L!==null&&(t&&L.alternate!==null&&P.delete(L.key===null?N:L.key),d=o(L,d,N),R===null?k=L:R.sibling=L,R=L);return t&&P.forEach(function(Pr){return e(h,Pr)}),V&&ln(h,N),k}function A(h,d,p,w){if(typeof p=="object"&&p!==null&&p.type===jn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Gi:e:{for(var k=p.key,R=d;R!==null;){if(R.key===k){if(k=p.type,k===jn){if(R.tag===7){n(h,R.sibling),d=i(R,p.props.children),d.return=h,h=d;break e}}else if(R.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Nt&&Gc(k)===R.type){n(h,R.sibling),d=i(R,p.props),d.ref=Mr(h,R,p),d.return=h,h=d;break e}n(h,R);break}else e(h,R);R=R.sibling}p.type===jn?(d=gn(p.props.children,h.mode,w,p.key),d.return=h,h=d):(w=Io(p.type,p.key,p.props,null,h.mode,w),w.ref=Mr(h,d,p),w.return=h,h=w)}return s(h);case Fn:e:{for(R=p.key;d!==null;){if(d.key===R)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(h,d.sibling),d=i(d,p.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else e(h,d);d=d.sibling}d=ca(p,h.mode,w),d.return=h,h=d}return s(h);case Nt:return R=p._init,A(h,d,R(p._payload),w)}if($r(p))return y(h,d,p,w);if(Ar(p))return v(h,d,p,w);io(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(h,d.sibling),d=i(d,p),d.return=h,h=d):(n(h,d),d=ua(p,h.mode,w),d.return=h,h=d),s(h)):n(h,d)}return A}var cr=vh(!0),yh=vh(!1),Ui={},at=tn(Ui),yi=tn(Ui),wi=tn(Ui);function hn(t){if(t===Ui)throw Error(_(174));return t}function lu(t,e){switch(j(wi,e),j(yi,t),j(at,Ui),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ma(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ma(e,t)}$(at),j(at,e)}function dr(){$(at),$(yi),$(wi)}function wh(t){hn(wi.current);var e=hn(at.current),n=Ma(e,t.type);e!==n&&(j(yi,t),j(at,n))}function uu(t){yi.current===t&&($(at),$(yi))}var W=tn(0);function Ho(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ra=[];function cu(){for(var t=0;t<ra.length;t++)ra[t]._workInProgressVersionPrimary=null;ra.length=0}var vo=St.ReactCurrentDispatcher,ia=St.ReactCurrentBatchConfig,In=0,H=null,ne=null,se=null,Ko=!1,ei=!1,_i=0,Mv=0;function he(){throw Error(_(321))}function du(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qe(t[n],e[n]))return!1;return!0}function fu(t,e,n,r,i,o){if(In=o,H=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vo.current=t===null||t.memoizedState===null?jv:zv,t=n(r,i),ei){o=0;do{if(ei=!1,_i=0,25<=o)throw Error(_(301));o+=1,se=ne=null,e.updateQueue=null,vo.current=Bv,t=n(r,i)}while(ei)}if(vo.current=Go,e=ne!==null&&ne.next!==null,In=0,se=ne=H=null,Ko=!1,e)throw Error(_(300));return t}function hu(){var t=_i!==0;return _i=0,t}function Ze(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?H.memoizedState=se=t:se=se.next=t,se}function Be(){if(ne===null){var t=H.alternate;t=t!==null?t.memoizedState:null}else t=ne.next;var e=se===null?H.memoizedState:se.next;if(e!==null)se=e,ne=t;else{if(t===null)throw Error(_(310));ne=t,t={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},se===null?H.memoizedState=se=t:se=se.next=t}return se}function Ei(t,e){return typeof e=="function"?e(t):e}function oa(t){var e=Be(),n=e.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=t;var r=ne,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((In&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,H.lanes|=c,Sn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Qe(r,e.memoizedState)||(Se=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,H.lanes|=o,Sn|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sa(t){var e=Be(),n=e.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Qe(o,e.memoizedState)||(Se=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function _h(){}function Eh(t,e){var n=H,r=Be(),i=e(),o=!Qe(r.memoizedState,i);if(o&&(r.memoizedState=i,Se=!0),r=r.queue,pu(kh.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,Ii(9,Sh.bind(null,n,r,i,e),void 0,null),ae===null)throw Error(_(349));In&30||Ih(n,e,i)}return i}function Ih(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=H.updateQueue,e===null?(e={lastEffect:null,stores:null},H.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Sh(t,e,n,r){e.value=n,e.getSnapshot=r,Th(e)&&Ch(t)}function kh(t,e,n){return n(function(){Th(e)&&Ch(t)})}function Th(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qe(t,n)}catch{return!0}}function Ch(t){var e=_t(t,1);e!==null&&Ye(e,t,1,-1)}function qc(t){var e=Ze();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ei,lastRenderedState:t},e.queue=t,t=t.dispatch=Fv.bind(null,H,t),[e.memoizedState,t]}function Ii(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=H.updateQueue,e===null?(e={lastEffect:null,stores:null},H.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Rh(){return Be().memoizedState}function yo(t,e,n,r){var i=Ze();H.flags|=t,i.memoizedState=Ii(1|e,n,void 0,r===void 0?null:r)}function vs(t,e,n,r){var i=Be();r=r===void 0?null:r;var o=void 0;if(ne!==null){var s=ne.memoizedState;if(o=s.destroy,r!==null&&du(r,s.deps)){i.memoizedState=Ii(e,n,o,r);return}}H.flags|=t,i.memoizedState=Ii(1|e,n,o,r)}function Yc(t,e){return yo(8390656,8,t,e)}function pu(t,e){return vs(2048,8,t,e)}function Ph(t,e){return vs(4,2,t,e)}function Nh(t,e){return vs(4,4,t,e)}function Ah(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Oh(t,e,n){return n=n!=null?n.concat([t]):null,vs(4,4,Ah.bind(null,e,t),n)}function mu(){}function xh(t,e){var n=Be();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&du(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Lh(t,e){var n=Be();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&du(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Dh(t,e,n){return In&21?(Qe(n,e)||(n=Uf(),H.lanes|=n,Sn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Se=!0),t.memoizedState=n)}function bv(t,e){var n=U;U=n!==0&&4>n?n:4,t(!0);var r=ia.transition;ia.transition={};try{t(!1),e()}finally{U=n,ia.transition=r}}function Mh(){return Be().memoizedState}function Uv(t,e,n){var r=Vt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bh(t))Uh(e,n);else if(n=hh(t,e,n,r),n!==null){var i=ye();Ye(n,t,r,i),Fh(n,e,r)}}function Fv(t,e,n){var r=Vt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bh(t))Uh(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Qe(a,s)){var l=e.interleaved;l===null?(i.next=i,su(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=hh(t,e,i,r),n!==null&&(i=ye(),Ye(n,t,r,i),Fh(n,e,r))}}function bh(t){var e=t.alternate;return t===H||e!==null&&e===H}function Uh(t,e){ei=Ko=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fh(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kl(t,n)}}var Go={readContext:ze,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},jv={readContext:ze,useCallback:function(t,e){return Ze().memoizedState=[t,e===void 0?null:e],t},useContext:ze,useEffect:Yc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yo(4194308,4,Ah.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yo(4194308,4,t,e)},useInsertionEffect:function(t,e){return yo(4,2,t,e)},useMemo:function(t,e){var n=Ze();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ze();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Uv.bind(null,H,t),[r.memoizedState,t]},useRef:function(t){var e=Ze();return t={current:t},e.memoizedState=t},useState:qc,useDebugValue:mu,useDeferredValue:function(t){return Ze().memoizedState=t},useTransition:function(){var t=qc(!1),e=t[0];return t=bv.bind(null,t[1]),Ze().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=H,i=Ze();if(V){if(n===void 0)throw Error(_(407));n=n()}else{if(n=e(),ae===null)throw Error(_(349));In&30||Ih(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Yc(kh.bind(null,r,o,t),[t]),r.flags|=2048,Ii(9,Sh.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Ze(),e=ae.identifierPrefix;if(V){var n=ft,r=dt;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_i++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Mv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zv={readContext:ze,useCallback:xh,useContext:ze,useEffect:pu,useImperativeHandle:Oh,useInsertionEffect:Ph,useLayoutEffect:Nh,useMemo:Lh,useReducer:oa,useRef:Rh,useState:function(){return oa(Ei)},useDebugValue:mu,useDeferredValue:function(t){var e=Be();return Dh(e,ne.memoizedState,t)},useTransition:function(){var t=oa(Ei)[0],e=Be().memoizedState;return[t,e]},useMutableSource:_h,useSyncExternalStore:Eh,useId:Mh,unstable_isNewReconciler:!1},Bv={readContext:ze,useCallback:xh,useContext:ze,useEffect:pu,useImperativeHandle:Oh,useInsertionEffect:Ph,useLayoutEffect:Nh,useMemo:Lh,useReducer:sa,useRef:Rh,useState:function(){return sa(Ei)},useDebugValue:mu,useDeferredValue:function(t){var e=Be();return ne===null?e.memoizedState=t:Dh(e,ne.memoizedState,t)},useTransition:function(){var t=sa(Ei)[0],e=Be().memoizedState;return[t,e]},useMutableSource:_h,useSyncExternalStore:Eh,useId:Mh,unstable_isNewReconciler:!1};function fr(t,e){try{var n="",r=e;do n+=mg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function aa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function il(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $v=typeof WeakMap=="function"?WeakMap:Map;function jh(t,e,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Yo||(Yo=!0,pl=r),il(t,e)},n}function zh(t,e,n){n=mt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){il(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){il(t,e),typeof r!="function"&&($t===null?$t=new Set([this]):$t.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Qc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new $v;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ny.bind(null,t,e,n),e.then(t,t))}function Jc(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xc(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mt(-1,1),e.tag=2,Bt(n,e,1))),n.lanes|=1),t)}var Vv=St.ReactCurrentOwner,Se=!1;function ve(t,e,n,r){e.child=t===null?yh(e,null,n,r):cr(e,t.child,n,r)}function Zc(t,e,n,r,i){n=n.render;var o=e.ref;return tr(e,i),r=fu(t,e,n,r,o,i),n=hu(),t!==null&&!Se?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Et(t,e,i)):(V&&n&&eu(e),e.flags|=1,ve(t,e,r,i),e.child)}function ed(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Su(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Bh(t,e,o,r,i)):(t=Io(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:pi,n(s,r)&&t.ref===e.ref)return Et(t,e,i)}return e.flags|=1,t=Wt(o,r),t.ref=e.ref,t.return=e,e.child=t}function Bh(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(pi(o,r)&&t.ref===e.ref)if(Se=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Se=!0);else return e.lanes=t.lanes,Et(t,e,i)}return ol(t,e,n,r,i)}function $h(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(Yn,Pe),Pe|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,j(Yn,Pe),Pe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,j(Yn,Pe),Pe|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,j(Yn,Pe),Pe|=r;return ve(t,e,i,n),e.child}function Vh(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ol(t,e,n,r,i){var o=Te(n)?_n:ge.current;return o=lr(e,o),tr(e,i),n=fu(t,e,n,r,o,i),r=hu(),t!==null&&!Se?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Et(t,e,i)):(V&&r&&eu(e),e.flags|=1,ve(t,e,n,i),e.child)}function td(t,e,n,r,i){if(Te(n)){var o=!0;jo(e)}else o=!1;if(tr(e,i),e.stateNode===null)wo(t,e),gh(e,n,r),rl(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ze(u):(u=Te(n)?_n:ge.current,u=lr(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Kc(e,s,r,u),At=!1;var m=e.memoizedState;s.state=m,Wo(e,r,s,i),l=e.memoizedState,a!==r||m!==l||ke.current||At?(typeof c=="function"&&(nl(e,n,c,r),l=e.memoizedState),(a=At||Hc(e,n,a,r,m,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,ph(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:He(e.type,a),s.props=u,f=e.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ze(l):(l=Te(n)?_n:ge.current,l=lr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||m!==l)&&Kc(e,s,r,l),At=!1,m=e.memoizedState,s.state=m,Wo(e,r,s,i);var y=e.memoizedState;a!==f||m!==y||ke.current||At?(typeof g=="function"&&(nl(e,n,g,r),y=e.memoizedState),(u=At||Hc(e,n,u,r,m,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return sl(t,e,n,r,o,i)}function sl(t,e,n,r,i,o){Vh(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&zc(e,n,!1),Et(t,e,o);r=e.stateNode,Vv.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=cr(e,t.child,null,o),e.child=cr(e,null,a,o)):ve(t,e,a,o),e.memoizedState=r.state,i&&zc(e,n,!0),e.child}function Wh(t){var e=t.stateNode;e.pendingContext?jc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jc(t,e.context,!1),lu(t,e.containerInfo)}function nd(t,e,n,r,i){return ur(),nu(i),e.flags|=256,ve(t,e,n,r),e.child}var al={dehydrated:null,treeContext:null,retryLane:0};function ll(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hh(t,e,n){var r=e.pendingProps,i=W.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),j(W,i&1),t===null)return el(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=_s(s,r,0,null),t=gn(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=ll(n),e.memoizedState=al,t):gu(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Wv(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Wt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Wt(a,o):(o=gn(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?ll(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=al,r}return o=t.child,t=o.sibling,r=Wt(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function gu(t,e){return e=_s({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function oo(t,e,n,r){return r!==null&&nu(r),cr(e,t.child,null,n),t=gu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Wv(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=aa(Error(_(422))),oo(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=_s({mode:"visible",children:r.children},i,0,null),o=gn(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&cr(e,t.child,null,s),e.child.memoizedState=ll(s),e.memoizedState=al,o);if(!(e.mode&1))return oo(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(_(419)),r=aa(o,r,void 0),oo(t,e,s,r)}if(a=(s&t.childLanes)!==0,Se||a){if(r=ae,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,_t(t,i),Ye(r,t,i,-1))}return Iu(),r=aa(Error(_(421))),oo(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ry.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Ae=zt(i.nextSibling),xe=e,V=!0,Ge=null,t!==null&&(be[Ue++]=dt,be[Ue++]=ft,be[Ue++]=En,dt=t.id,ft=t.overflow,En=e),e=gu(e,r.children),e.flags|=4096,e)}function rd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),tl(t.return,e,n)}function la(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Kh(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(ve(t,e,r.children,n),r=W.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rd(t,n,e);else if(t.tag===19)rd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(j(W,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ho(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),la(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ho(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}la(e,!0,n,null,o);break;case"together":la(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Et(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Sn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(_(153));if(e.child!==null){for(t=e.child,n=Wt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Hv(t,e,n){switch(e.tag){case 3:Wh(e),ur();break;case 5:wh(e);break;case 1:Te(e.type)&&jo(e);break;case 4:lu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;j($o,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(j(W,W.current&1),e.flags|=128,null):n&e.child.childLanes?Hh(t,e,n):(j(W,W.current&1),t=Et(t,e,n),t!==null?t.sibling:null);j(W,W.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Kh(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(W,W.current),r)break;return null;case 22:case 23:return e.lanes=0,$h(t,e,n)}return Et(t,e,n)}var Gh,ul,qh,Yh;Gh=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ul=function(){};qh=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,hn(at.current);var o=null;switch(n){case"input":i=Oa(t,i),r=Oa(t,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=Da(t,i),r=Da(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Uo)}ba(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ai.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ai.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&B("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Yh=function(t,e,n,r){n!==r&&(e.flags|=4)};function br(t,e){if(!V)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Kv(t,e,n){var r=e.pendingProps;switch(tu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(e),null;case 1:return Te(e.type)&&Fo(),pe(e),null;case 3:return r=e.stateNode,dr(),$(ke),$(ge),cu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ro(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ge!==null&&(vl(Ge),Ge=null))),ul(t,e),pe(e),null;case 5:uu(e);var i=hn(wi.current);if(n=e.type,t!==null&&e.stateNode!=null)qh(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(_(166));return pe(e),null}if(t=hn(at.current),ro(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[et]=e,r[vi]=o,t=(e.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<Wr.length;i++)B(Wr[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":fc(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":pc(r,o),B("invalid",r)}ba(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&no(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&no(r.textContent,a,t),i=["children",""+a]):ai.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&B("scroll",r)}switch(n){case"input":qi(r),hc(r,o,!0);break;case"textarea":qi(r),mc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Uo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=If(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[et]=e,t[vi]=r,Gh(t,e,!1,!1),e.stateNode=t;e:{switch(s=Ua(n,r),n){case"dialog":B("cancel",t),B("close",t),i=r;break;case"iframe":case"object":case"embed":B("load",t),i=r;break;case"video":case"audio":for(i=0;i<Wr.length;i++)B(Wr[i],t);i=r;break;case"source":B("error",t),i=r;break;case"img":case"image":case"link":B("error",t),B("load",t),i=r;break;case"details":B("toggle",t),i=r;break;case"input":fc(t,r),i=Oa(t,r),B("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),B("invalid",t);break;case"textarea":pc(t,r),i=Da(t,r),B("invalid",t);break;default:i=r}ba(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Tf(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sf(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&li(t,l):typeof l=="number"&&li(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ai.hasOwnProperty(o)?l!=null&&o==="onScroll"&&B("scroll",t):l!=null&&zl(t,o,l,s))}switch(n){case"input":qi(t),hc(t,r,!1);break;case"textarea":qi(t),mc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+qt(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Jn(t,!!r.multiple,o,!1):r.defaultValue!=null&&Jn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Uo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pe(e),null;case 6:if(t&&e.stateNode!=null)Yh(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(_(166));if(n=hn(wi.current),hn(at.current),ro(e)){if(r=e.stateNode,n=e.memoizedProps,r[et]=e,(o=r.nodeValue!==n)&&(t=xe,t!==null))switch(t.tag){case 3:no(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&no(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=e,e.stateNode=r}return pe(e),null;case 13:if($(W),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(V&&Ae!==null&&e.mode&1&&!(e.flags&128))fh(),ur(),e.flags|=98560,o=!1;else if(o=ro(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(_(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[et]=e}else ur(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pe(e),o=!1}else Ge!==null&&(vl(Ge),Ge=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||W.current&1?re===0&&(re=3):Iu())),e.updateQueue!==null&&(e.flags|=4),pe(e),null);case 4:return dr(),ul(t,e),t===null&&mi(e.stateNode.containerInfo),pe(e),null;case 10:return ou(e.type._context),pe(e),null;case 17:return Te(e.type)&&Fo(),pe(e),null;case 19:if($(W),o=e.memoizedState,o===null)return pe(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)br(o,!1);else{if(re!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Ho(t),s!==null){for(e.flags|=128,br(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return j(W,W.current&1|2),e.child}t=t.sibling}o.tail!==null&&Y()>hr&&(e.flags|=128,r=!0,br(o,!1),e.lanes=4194304)}else{if(!r)if(t=Ho(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),br(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!V)return pe(e),null}else 2*Y()-o.renderingStartTime>hr&&n!==1073741824&&(e.flags|=128,r=!0,br(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Y(),e.sibling=null,n=W.current,j(W,r?n&1|2:n&1),e):(pe(e),null);case 22:case 23:return Eu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Pe&1073741824&&(pe(e),e.subtreeFlags&6&&(e.flags|=8192)):pe(e),null;case 24:return null;case 25:return null}throw Error(_(156,e.tag))}function Gv(t,e){switch(tu(e),e.tag){case 1:return Te(e.type)&&Fo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return dr(),$(ke),$(ge),cu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return uu(e),null;case 13:if($(W),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(_(340));ur()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return $(W),null;case 4:return dr(),null;case 10:return ou(e.type._context),null;case 22:case 23:return Eu(),null;case 24:return null;default:return null}}var so=!1,me=!1,qv=typeof WeakSet=="function"?WeakSet:Set,T=null;function qn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(t,e,r)}else n.current=null}function cl(t,e,n){try{n()}catch(r){G(t,e,r)}}var id=!1;function Yv(t,e){if(Ga=Do,t=Zf(),Zl(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=t,m=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)m=f,f=g;for(;;){if(f===t)break t;if(m===n&&++u===i&&(a=s),m===o&&++c===r&&(l=s),(g=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qa={focusedElem:t,selectionRange:n},Do=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,A=y.memoizedState,h=e.stateNode,d=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:He(e.type,v),A);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){G(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return y=id,id=!1,y}function ti(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&cl(e,n,o)}i=i.next}while(i!==r)}}function ys(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function dl(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qh(t){var e=t.alternate;e!==null&&(t.alternate=null,Qh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[et],delete e[vi],delete e[Ja],delete e[Ov],delete e[xv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jh(t){return t.tag===5||t.tag===3||t.tag===4}function od(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Uo));else if(r!==4&&(t=t.child,t!==null))for(fl(t,e,n),t=t.sibling;t!==null;)fl(t,e,n),t=t.sibling}function hl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(hl(t,e,n),t=t.sibling;t!==null;)hl(t,e,n),t=t.sibling}var le=null,Ke=!1;function Rt(t,e,n){for(n=n.child;n!==null;)Xh(t,e,n),n=n.sibling}function Xh(t,e,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(cs,n)}catch{}switch(n.tag){case 5:me||qn(n,e);case 6:var r=le,i=Ke;le=null,Rt(t,e,n),le=r,Ke=i,le!==null&&(Ke?(t=le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Ke?(t=le,n=n.stateNode,t.nodeType===8?ta(t.parentNode,n):t.nodeType===1&&ta(t,n),fi(t)):ta(le,n.stateNode));break;case 4:r=le,i=Ke,le=n.stateNode.containerInfo,Ke=!0,Rt(t,e,n),le=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&cl(n,e,s),i=i.next}while(i!==r)}Rt(t,e,n);break;case 1:if(!me&&(qn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){G(n,e,a)}Rt(t,e,n);break;case 21:Rt(t,e,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,Rt(t,e,n),me=r):Rt(t,e,n);break;default:Rt(t,e,n)}}function sd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qv),e.forEach(function(r){var i=iy.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:le=a.stateNode,Ke=!1;break e;case 3:le=a.stateNode.containerInfo,Ke=!0;break e;case 4:le=a.stateNode.containerInfo,Ke=!0;break e}a=a.return}if(le===null)throw Error(_(160));Xh(o,s,i),le=null,Ke=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){G(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Zh(e,t),e=e.sibling}function Zh(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(We(e,t),Xe(t),r&4){try{ti(3,t,t.return),ys(3,t)}catch(v){G(t,t.return,v)}try{ti(5,t,t.return)}catch(v){G(t,t.return,v)}}break;case 1:We(e,t),Xe(t),r&512&&n!==null&&qn(n,n.return);break;case 5:if(We(e,t),Xe(t),r&512&&n!==null&&qn(n,n.return),t.flags&32){var i=t.stateNode;try{li(i,"")}catch(v){G(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&_f(i,o),Ua(a,s);var u=Ua(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?Tf(i,f):c==="dangerouslySetInnerHTML"?Sf(i,f):c==="children"?li(i,f):zl(i,c,f,u)}switch(a){case"input":xa(i,o);break;case"textarea":Ef(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Jn(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?Jn(i,!!o.multiple,o.defaultValue,!0):Jn(i,!!o.multiple,o.multiple?[]:"",!1))}i[vi]=o}catch(v){G(t,t.return,v)}}break;case 6:if(We(e,t),Xe(t),r&4){if(t.stateNode===null)throw Error(_(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(v){G(t,t.return,v)}}break;case 3:if(We(e,t),Xe(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fi(e.containerInfo)}catch(v){G(t,t.return,v)}break;case 4:We(e,t),Xe(t);break;case 13:We(e,t),Xe(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(wu=Y())),r&4&&sd(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(me=(u=me)||c,We(e,t),me=u):We(e,t),Xe(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(T=t,c=t.child;c!==null;){for(f=T=c;T!==null;){switch(m=T,g=m.child,m.tag){case 0:case 11:case 14:case 15:ti(4,m,m.return);break;case 1:qn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){G(r,n,v)}}break;case 5:qn(m,m.return);break;case 22:if(m.memoizedState!==null){ld(f);continue}}g!==null?(g.return=m,T=g):ld(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=kf("display",s))}catch(v){G(t,t.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){G(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:We(e,t),Xe(t),r&4&&sd(t);break;case 21:break;default:We(e,t),Xe(t)}}function Xe(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jh(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(li(i,""),r.flags&=-33);var o=od(t);hl(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=od(t);fl(t,a,s);break;default:throw Error(_(161))}}catch(l){G(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Qv(t,e,n){T=t,ep(t)}function ep(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||so;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||me;a=so;var u=me;if(so=s,(me=l)&&!u)for(T=i;T!==null;)s=T,l=s.child,s.tag===22&&s.memoizedState!==null?ud(i):l!==null?(l.return=s,T=l):ud(i);for(;o!==null;)T=o,ep(o),o=o.sibling;T=i,so=a,me=u}ad(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,T=o):ad(t)}}function ad(t){for(;T!==null;){var e=T;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:me||ys(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:He(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Wc(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wc(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&fi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}me||e.flags&512&&dl(e)}catch(m){G(e,e.return,m)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function ld(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function ud(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ys(4,e)}catch(l){G(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){G(e,i,l)}}var o=e.return;try{dl(e)}catch(l){G(e,o,l)}break;case 5:var s=e.return;try{dl(e)}catch(l){G(e,s,l)}}}catch(l){G(e,e.return,l)}if(e===t){T=null;break}var a=e.sibling;if(a!==null){a.return=e.return,T=a;break}T=e.return}}var Jv=Math.ceil,qo=St.ReactCurrentDispatcher,vu=St.ReactCurrentOwner,je=St.ReactCurrentBatchConfig,M=0,ae=null,Z=null,ue=0,Pe=0,Yn=tn(0),re=0,Si=null,Sn=0,ws=0,yu=0,ni=null,Ie=null,wu=0,hr=1/0,ut=null,Yo=!1,pl=null,$t=null,ao=!1,Dt=null,Qo=0,ri=0,ml=null,_o=-1,Eo=0;function ye(){return M&6?Y():_o!==-1?_o:_o=Y()}function Vt(t){return t.mode&1?M&2&&ue!==0?ue&-ue:Dv.transition!==null?(Eo===0&&(Eo=Uf()),Eo):(t=U,t!==0||(t=window.event,t=t===void 0?16:Wf(t.type)),t):1}function Ye(t,e,n,r){if(50<ri)throw ri=0,ml=null,Error(_(185));Di(t,n,r),(!(M&2)||t!==ae)&&(t===ae&&(!(M&2)&&(ws|=n),re===4&&xt(t,ue)),Ce(t,r),n===1&&M===0&&!(e.mode&1)&&(hr=Y()+500,ms&&nn()))}function Ce(t,e){var n=t.callbackNode;Dg(t,e);var r=Lo(t,t===ae?ue:0);if(r===0)n!==null&&yc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&yc(n),e===1)t.tag===0?Lv(cd.bind(null,t)):uh(cd.bind(null,t)),Nv(function(){!(M&6)&&nn()}),n=null;else{switch(Ff(r)){case 1:n=Hl;break;case 4:n=Mf;break;case 16:n=xo;break;case 536870912:n=bf;break;default:n=xo}n=lp(n,tp.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tp(t,e){if(_o=-1,Eo=0,M&6)throw Error(_(327));var n=t.callbackNode;if(nr()&&t.callbackNode!==n)return null;var r=Lo(t,t===ae?ue:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Jo(t,r);else{e=r;var i=M;M|=2;var o=rp();(ae!==t||ue!==e)&&(ut=null,hr=Y()+500,mn(t,e));do try{ey();break}catch(a){np(t,a)}while(1);iu(),qo.current=o,M=i,Z!==null?e=0:(ae=null,ue=0,e=re)}if(e!==0){if(e===2&&(i=$a(t),i!==0&&(r=i,e=gl(t,i))),e===1)throw n=Si,mn(t,0),xt(t,r),Ce(t,Y()),n;if(e===6)xt(t,r);else{if(i=t.current.alternate,!(r&30)&&!Xv(i)&&(e=Jo(t,r),e===2&&(o=$a(t),o!==0&&(r=o,e=gl(t,o))),e===1))throw n=Si,mn(t,0),xt(t,r),Ce(t,Y()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(_(345));case 2:un(t,Ie,ut);break;case 3:if(xt(t,r),(r&130023424)===r&&(e=wu+500-Y(),10<e)){if(Lo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ye(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Qa(un.bind(null,t,Ie,ut),e);break}un(t,Ie,ut);break;case 4:if(xt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-qe(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Jv(r/1960))-r,10<r){t.timeoutHandle=Qa(un.bind(null,t,Ie,ut),r);break}un(t,Ie,ut);break;case 5:un(t,Ie,ut);break;default:throw Error(_(329))}}}return Ce(t,Y()),t.callbackNode===n?tp.bind(null,t):null}function gl(t,e){var n=ni;return t.current.memoizedState.isDehydrated&&(mn(t,e).flags|=256),t=Jo(t,e),t!==2&&(e=Ie,Ie=n,e!==null&&vl(e)),t}function vl(t){Ie===null?Ie=t:Ie.push.apply(Ie,t)}function Xv(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Qe(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xt(t,e){for(e&=~yu,e&=~ws,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qe(e),r=1<<n;t[n]=-1,e&=~r}}function cd(t){if(M&6)throw Error(_(327));nr();var e=Lo(t,0);if(!(e&1))return Ce(t,Y()),null;var n=Jo(t,e);if(t.tag!==0&&n===2){var r=$a(t);r!==0&&(e=r,n=gl(t,r))}if(n===1)throw n=Si,mn(t,0),xt(t,e),Ce(t,Y()),n;if(n===6)throw Error(_(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,un(t,Ie,ut),Ce(t,Y()),null}function _u(t,e){var n=M;M|=1;try{return t(e)}finally{M=n,M===0&&(hr=Y()+500,ms&&nn())}}function kn(t){Dt!==null&&Dt.tag===0&&!(M&6)&&nr();var e=M;M|=1;var n=je.transition,r=U;try{if(je.transition=null,U=1,t)return t()}finally{U=r,je.transition=n,M=e,!(M&6)&&nn()}}function Eu(){Pe=Yn.current,$(Yn)}function mn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Pv(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(tu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fo();break;case 3:dr(),$(ke),$(ge),cu();break;case 5:uu(r);break;case 4:dr();break;case 13:$(W);break;case 19:$(W);break;case 10:ou(r.type._context);break;case 22:case 23:Eu()}n=n.return}if(ae=t,Z=t=Wt(t.current,null),ue=Pe=e,re=0,Si=null,yu=ws=Sn=0,Ie=ni=null,fn!==null){for(e=0;e<fn.length;e++)if(n=fn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}fn=null}return t}function np(t,e){do{var n=Z;try{if(iu(),vo.current=Go,Ko){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ko=!1}if(In=0,se=ne=H=null,ei=!1,_i=0,vu.current=null,n===null||n.return===null){re=1,Si=e,Z=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=ue,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Jc(s);if(g!==null){g.flags&=-257,Xc(g,s,a,o,e),g.mode&1&&Qc(o,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Qc(o,u,e),Iu();break e}l=Error(_(426))}}else if(V&&a.mode&1){var A=Jc(s);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Xc(A,s,a,o,e),nu(fr(l,a));break e}}o=l=fr(l,a),re!==4&&(re=2),ni===null?ni=[o]:ni.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=jh(o,l,e);Vc(o,h);break e;case 1:a=l;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&($t===null||!$t.has(p)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=zh(o,a,e);Vc(o,w);break e}}o=o.return}while(o!==null)}op(n)}catch(k){e=k,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(1)}function rp(){var t=qo.current;return qo.current=Go,t===null?Go:t}function Iu(){(re===0||re===3||re===2)&&(re=4),ae===null||!(Sn&268435455)&&!(ws&268435455)||xt(ae,ue)}function Jo(t,e){var n=M;M|=2;var r=rp();(ae!==t||ue!==e)&&(ut=null,mn(t,e));do try{Zv();break}catch(i){np(t,i)}while(1);if(iu(),M=n,qo.current=r,Z!==null)throw Error(_(261));return ae=null,ue=0,re}function Zv(){for(;Z!==null;)ip(Z)}function ey(){for(;Z!==null&&!Tg();)ip(Z)}function ip(t){var e=ap(t.alternate,t,Pe);t.memoizedProps=t.pendingProps,e===null?op(t):Z=e,vu.current=null}function op(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Gv(n,e),n!==null){n.flags&=32767,Z=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{re=6,Z=null;return}}else if(n=Kv(n,e,Pe),n!==null){Z=n;return}if(e=e.sibling,e!==null){Z=e;return}Z=e=t}while(e!==null);re===0&&(re=5)}function un(t,e,n){var r=U,i=je.transition;try{je.transition=null,U=1,ty(t,e,n,r)}finally{je.transition=i,U=r}return null}function ty(t,e,n,r){do nr();while(Dt!==null);if(M&6)throw Error(_(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(_(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Mg(t,o),t===ae&&(Z=ae=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ao||(ao=!0,lp(xo,function(){return nr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=je.transition,je.transition=null;var s=U;U=1;var a=M;M|=4,vu.current=null,Yv(t,n),Zh(n,t),Ev(qa),Do=!!Ga,qa=Ga=null,t.current=n,Qv(n),Cg(),M=a,U=s,je.transition=o}else t.current=n;if(ao&&(ao=!1,Dt=t,Qo=i),o=t.pendingLanes,o===0&&($t=null),Ng(n.stateNode),Ce(t,Y()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Yo)throw Yo=!1,t=pl,pl=null,t;return Qo&1&&t.tag!==0&&nr(),o=t.pendingLanes,o&1?t===ml?ri++:(ri=0,ml=t):ri=0,nn(),null}function nr(){if(Dt!==null){var t=Ff(Qo),e=je.transition,n=U;try{if(je.transition=null,U=16>t?16:t,Dt===null)var r=!1;else{if(t=Dt,Dt=null,Qo=0,M&6)throw Error(_(331));var i=M;for(M|=4,T=t.current;T!==null;){var o=T,s=o.child;if(T.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(T=u;T!==null;){var c=T;switch(c.tag){case 0:case 11:case 15:ti(8,c,o)}var f=c.child;if(f!==null)f.return=c,T=f;else for(;T!==null;){c=T;var m=c.sibling,g=c.return;if(Qh(c),c===u){T=null;break}if(m!==null){m.return=g,T=m;break}T=g}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var A=v.sibling;v.sibling=null,v=A}while(v!==null)}}T=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,T=s;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ti(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,T=h;break e}T=o.return}}var d=t.current;for(T=d;T!==null;){s=T;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,T=p;else e:for(s=d;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ys(9,a)}}catch(k){G(a,a.return,k)}if(a===s){T=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,T=w;break e}T=a.return}}if(M=i,nn(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(cs,t)}catch{}r=!0}return r}finally{U=n,je.transition=e}}return!1}function dd(t,e,n){e=fr(n,e),e=jh(t,e,1),t=Bt(t,e,1),e=ye(),t!==null&&(Di(t,1,e),Ce(t,e))}function G(t,e,n){if(t.tag===3)dd(t,t,n);else for(;e!==null;){if(e.tag===3){dd(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($t===null||!$t.has(r))){t=fr(n,t),t=zh(e,t,1),e=Bt(e,t,1),t=ye(),e!==null&&(Di(e,1,t),Ce(e,t));break}}e=e.return}}function ny(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ye(),t.pingedLanes|=t.suspendedLanes&n,ae===t&&(ue&n)===n&&(re===4||re===3&&(ue&130023424)===ue&&500>Y()-wu?mn(t,0):yu|=n),Ce(t,e)}function sp(t,e){e===0&&(t.mode&1?(e=Ji,Ji<<=1,!(Ji&130023424)&&(Ji=4194304)):e=1);var n=ye();t=_t(t,e),t!==null&&(Di(t,e,n),Ce(t,n))}function ry(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),sp(t,n)}function iy(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(e),sp(t,n)}var ap;ap=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ke.current)Se=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Se=!1,Hv(t,e,n);Se=!!(t.flags&131072)}else Se=!1,V&&e.flags&1048576&&ch(e,Bo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;wo(t,e),t=e.pendingProps;var i=lr(e,ge.current);tr(e,n),i=fu(null,e,r,t,i,n);var o=hu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Te(r)?(o=!0,jo(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,au(e),i.updater=gs,e.stateNode=i,i._reactInternals=e,rl(e,r,t,n),e=sl(null,e,r,!0,o,n)):(e.tag=0,V&&o&&eu(e),ve(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(wo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=sy(r),t=He(r,t),i){case 0:e=ol(null,e,r,t,n);break e;case 1:e=td(null,e,r,t,n);break e;case 11:e=Zc(null,e,r,t,n);break e;case 14:e=ed(null,e,r,He(r.type,t),n);break e}throw Error(_(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),ol(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),td(t,e,r,i,n);case 3:e:{if(Wh(e),t===null)throw Error(_(387));r=e.pendingProps,o=e.memoizedState,i=o.element,ph(t,e),Wo(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=fr(Error(_(423)),e),e=nd(t,e,r,n,i);break e}else if(r!==i){i=fr(Error(_(424)),e),e=nd(t,e,r,n,i);break e}else for(Ae=zt(e.stateNode.containerInfo.firstChild),xe=e,V=!0,Ge=null,n=yh(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ur(),r===i){e=Et(t,e,n);break e}ve(t,e,r,n)}e=e.child}return e;case 5:return wh(e),t===null&&el(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Ya(r,i)?s=null:o!==null&&Ya(r,o)&&(e.flags|=32),Vh(t,e),ve(t,e,s,n),e.child;case 6:return t===null&&el(e),null;case 13:return Hh(t,e,n);case 4:return lu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=cr(e,null,r,n):ve(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),Zc(t,e,r,i,n);case 7:return ve(t,e,e.pendingProps,n),e.child;case 8:return ve(t,e,e.pendingProps.children,n),e.child;case 12:return ve(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,j($o,r._currentValue),r._currentValue=s,o!==null)if(Qe(o.value,s)){if(o.children===i.children&&!ke.current){e=Et(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=mt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),tl(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(_(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),tl(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ve(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,tr(e,n),i=ze(i),r=r(i),e.flags|=1,ve(t,e,r,n),e.child;case 14:return r=e.type,i=He(r,e.pendingProps),i=He(r.type,i),ed(t,e,r,i,n);case 15:return Bh(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),wo(t,e),e.tag=1,Te(r)?(t=!0,jo(e)):t=!1,tr(e,n),gh(e,r,i),rl(e,r,i,n),sl(null,e,r,!0,t,n);case 19:return Kh(t,e,n);case 22:return $h(t,e,n)}throw Error(_(156,e.tag))};function lp(t,e){return Df(t,e)}function oy(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(t,e,n,r){return new oy(t,e,n,r)}function Su(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sy(t){if(typeof t=="function")return Su(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$l)return 11;if(t===Vl)return 14}return 2}function Wt(t,e){var n=t.alternate;return n===null?(n=Fe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Io(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Su(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case jn:return gn(n.children,i,o,e);case Bl:s=8,i|=8;break;case Ra:return t=Fe(12,n,e,i|2),t.elementType=Ra,t.lanes=o,t;case Pa:return t=Fe(13,n,e,i),t.elementType=Pa,t.lanes=o,t;case Na:return t=Fe(19,n,e,i),t.elementType=Na,t.lanes=o,t;case vf:return _s(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mf:s=10;break e;case gf:s=9;break e;case $l:s=11;break e;case Vl:s=14;break e;case Nt:s=16,r=null;break e}throw Error(_(130,t==null?t:typeof t,""))}return e=Fe(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function gn(t,e,n,r){return t=Fe(7,t,r,e),t.lanes=n,t}function _s(t,e,n,r){return t=Fe(22,t,r,e),t.elementType=vf,t.lanes=n,t.stateNode={isHidden:!1},t}function ua(t,e,n){return t=Fe(6,t,null,e),t.lanes=n,t}function ca(t,e,n){return e=Fe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ay(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ws(0),this.expirationTimes=Ws(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ws(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ku(t,e,n,r,i,o,s,a,l){return t=new ay(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Fe(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},au(o),t}function ly(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function up(t){if(!t)return Yt;t=t._reactInternals;e:{if(On(t)!==t||t.tag!==1)throw Error(_(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Te(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(_(171))}if(t.tag===1){var n=t.type;if(Te(n))return lh(t,n,e)}return e}function cp(t,e,n,r,i,o,s,a,l){return t=ku(n,r,!0,t,i,o,s,a,l),t.context=up(null),n=t.current,r=ye(),i=Vt(n),o=mt(r,i),o.callback=e??null,Bt(n,o,i),t.current.lanes=i,Di(t,i,r),Ce(t,r),t}function Es(t,e,n,r){var i=e.current,o=ye(),s=Vt(i);return n=up(n),e.context===null?e.context=n:e.pendingContext=n,e=mt(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Bt(i,e,s),t!==null&&(Ye(t,i,s,o),go(t,i,s)),s}function Xo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tu(t,e){fd(t,e),(t=t.alternate)&&fd(t,e)}function uy(){return null}var dp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cu(t){this._internalRoot=t}Is.prototype.render=Cu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(_(409));Es(t,e,null,null)};Is.prototype.unmount=Cu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kn(function(){Es(null,t,null,null)}),e[wt]=null}};function Is(t){this._internalRoot=t}Is.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ot.length&&e!==0&&e<Ot[n].priority;n++);Ot.splice(n,0,t),n===0&&Vf(t)}};function Ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ss(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hd(){}function cy(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Xo(s);o.call(u)}}var s=cp(e,r,t,0,null,!1,!1,"",hd);return t._reactRootContainer=s,t[wt]=s.current,mi(t.nodeType===8?t.parentNode:t),kn(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Xo(l);a.call(u)}}var l=ku(t,0,!1,null,null,!1,!1,"",hd);return t._reactRootContainer=l,t[wt]=l.current,mi(t.nodeType===8?t.parentNode:t),kn(function(){Es(e,l,n,r)}),l}function ks(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Xo(s);a.call(l)}}Es(e,s,t,i)}else s=cy(n,e,t,i,r);return Xo(s)}jf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vr(e.pendingLanes);n!==0&&(Kl(e,n|1),Ce(e,Y()),!(M&6)&&(hr=Y()+500,nn()))}break;case 13:kn(function(){var r=_t(t,1);if(r!==null){var i=ye();Ye(r,t,1,i)}}),Tu(t,1)}};Gl=function(t){if(t.tag===13){var e=_t(t,134217728);if(e!==null){var n=ye();Ye(e,t,134217728,n)}Tu(t,134217728)}};zf=function(t){if(t.tag===13){var e=Vt(t),n=_t(t,e);if(n!==null){var r=ye();Ye(n,t,e,r)}Tu(t,e)}};Bf=function(){return U};$f=function(t,e){var n=U;try{return U=t,e()}finally{U=n}};ja=function(t,e,n){switch(e){case"input":if(xa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ps(r);if(!i)throw Error(_(90));wf(r),xa(r,i)}}}break;case"textarea":Ef(t,n);break;case"select":e=n.value,e!=null&&Jn(t,!!n.multiple,e,!1)}};Pf=_u;Nf=kn;var dy={usingClientEntryPoint:!1,Events:[bi,Vn,ps,Cf,Rf,_u]},Ur={findFiberByHostInstance:dn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},fy={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xf(t),t===null?null:t.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||uy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{cs=lo.inject(fy),st=lo}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dy;De.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ru(e))throw Error(_(200));return ly(t,e,null,n)};De.createRoot=function(t,e){if(!Ru(t))throw Error(_(299));var n=!1,r="",i=dp;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ku(t,1,!1,null,null,n,!1,r,i),t[wt]=e.current,mi(t.nodeType===8?t.parentNode:t),new Cu(e)};De.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(_(188)):(t=Object.keys(t).join(","),Error(_(268,t)));return t=xf(e),t=t===null?null:t.stateNode,t};De.flushSync=function(t){return kn(t)};De.hydrate=function(t,e,n){if(!Ss(e))throw Error(_(200));return ks(null,t,e,!0,n)};De.hydrateRoot=function(t,e,n){if(!Ru(t))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=dp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=cp(e,null,t,1,n??null,i,!1,o,s),t[wt]=e.current,mi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Is(e)};De.render=function(t,e,n){if(!Ss(e))throw Error(_(200));return ks(null,t,e,!1,n)};De.unmountComponentAtNode=function(t){if(!Ss(t))throw Error(_(40));return t._reactRootContainer?(kn(function(){ks(null,null,t,!1,function(){t._reactRootContainer=null,t[wt]=null})}),!0):!1};De.unstable_batchedUpdates=_u;De.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ss(n))throw Error(_(200));if(t==null||t._reactInternals===void 0)throw Error(_(38));return ks(t,e,n,!1,r)};De.version="18.2.0-next-9e3b772b8-20220608";function fp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fp)}catch(t){console.error(t)}}fp(),cf.exports=De;var hy=cf.exports,pd=hy;Ta.createRoot=pd.createRoot,Ta.hydrateRoot=pd.hydrateRoot;/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ki(){return ki=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ki.apply(this,arguments)}var Mt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Mt||(Mt={}));const md="popstate";function py(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return yl("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Zo(i)}return gy(e,n,null,t)}function Q(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Pu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function my(){return Math.random().toString(36).substr(2,8)}function gd(t,e){return{usr:t.state,key:t.key,idx:e}}function yl(t,e,n,r){return n===void 0&&(n=null),ki({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?wr(e):e,{state:n,key:e&&e.key||r||my()})}function Zo(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function wr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function gy(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Mt.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(ki({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){a=Mt.Pop;let A=c(),h=A==null?null:A-u;u=A,l&&l({action:a,location:v.location,delta:h})}function m(A,h){a=Mt.Push;let d=yl(v.location,A,h);n&&n(d,A),u=c()+1;let p=gd(d,u),w=v.createHref(d);try{s.pushState(p,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}o&&l&&l({action:a,location:v.location,delta:1})}function g(A,h){a=Mt.Replace;let d=yl(v.location,A,h);n&&n(d,A),u=c();let p=gd(d,u),w=v.createHref(d);s.replaceState(p,"",w),o&&l&&l({action:a,location:v.location,delta:0})}function y(A){let h=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof A=="string"?A:Zo(A);return Q(h,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,h)}let v={get action(){return a},get location(){return t(i,s)},listen(A){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(md,f),l=A,()=>{i.removeEventListener(md,f),l=null}},createHref(A){return e(i,A)},createURL:y,encodeLocation(A){let h=y(A);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:g,go(A){return s.go(A)}};return v}var vd;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(vd||(vd={}));function vy(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?wr(e):e,i=Nu(r.pathname||"/",n);if(i==null)return null;let o=hp(t);yy(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=Ry(o[a],Ay(i));return s}function hp(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Q(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ht([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(Q(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),hp(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:Ty(u,o.index),routesMeta:c})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of pp(o.path))i(o,s,l)}),e}function pp(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=pp(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function yy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Cy(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const wy=/^:\w+$/,_y=3,Ey=2,Iy=1,Sy=10,ky=-2,yd=t=>t==="*";function Ty(t,e){let n=t.split("/"),r=n.length;return n.some(yd)&&(r+=ky),e&&(r+=Ey),n.filter(i=>!yd(i)).reduce((i,o)=>i+(wy.test(o)?_y:o===""?Iy:Sy),r)}function Cy(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Ry(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Py({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;o.push({params:r,pathname:Ht([i,c.pathname]),pathnameBase:Dy(Ht([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Ht([i,c.pathnameBase]))}return o}function Py(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Ny(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let m=a[f]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[c]=Oy(a[f]||"",c),u},{}),pathname:o,pathnameBase:s,pattern:t}}function Ny(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Pu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Ay(t){try{return decodeURI(t)}catch(e){return Pu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Oy(t,e){try{return decodeURIComponent(t)}catch(n){return Pu(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Nu(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function xy(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?wr(t):t;return{pathname:n?n.startsWith("/")?n:Ly(n,e):e,search:My(r),hash:by(i)}}function Ly(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function da(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Au(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ou(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=wr(t):(i=ki({},t),Q(!i.pathname||!i.pathname.includes("?"),da("?","pathname","search",i)),Q(!i.pathname||!i.pathname.includes("#"),da("#","pathname","hash",i)),Q(!i.search||!i.search.includes("#"),da("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let f=e.length-1;if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=xy(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Ht=t=>t.join("/").replace(/\/\/+/g,"/"),Dy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),My=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,by=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Uy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const mp=["post","put","patch","delete"];new Set(mp);const Fy=["get",...mp];new Set(Fy);/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function es(){return es=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},es.apply(this,arguments)}const xu=S.createContext(null),jy=S.createContext(null),_r=S.createContext(null),Ts=S.createContext(null),kt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),gp=S.createContext(null);function zy(t,e){let{relative:n}=e===void 0?{}:e;Er()||Q(!1);let{basename:r,navigator:i}=S.useContext(_r),{hash:o,pathname:s,search:a}=yp(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Ht([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Er(){return S.useContext(Ts)!=null}function rn(){return Er()||Q(!1),S.useContext(Ts).location}function vp(t){S.useContext(_r).static||S.useLayoutEffect(t)}function Fi(){let{isDataRoute:t}=S.useContext(kt);return t?t0():By()}function By(){Er()||Q(!1);let t=S.useContext(xu),{basename:e,navigator:n}=S.useContext(_r),{matches:r}=S.useContext(kt),{pathname:i}=rn(),o=JSON.stringify(Au(r).map(l=>l.pathnameBase)),s=S.useRef(!1);return vp(()=>{s.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let c=Ou(l,JSON.parse(o),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Ht([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,o,i,t])}const $y=S.createContext(null);function Vy(t){let e=S.useContext(kt).outlet;return e&&S.createElement($y.Provider,{value:t},e)}function yp(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(kt),{pathname:i}=rn(),o=JSON.stringify(Au(r).map(s=>s.pathnameBase));return S.useMemo(()=>Ou(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function Wy(t,e){return Hy(t,e)}function Hy(t,e,n){Er()||Q(!1);let{navigator:r}=S.useContext(_r),{matches:i}=S.useContext(kt),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=rn(),u;if(e){var c;let v=typeof e=="string"?wr(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||Q(!1),u=v}else u=l;let f=u.pathname||"/",m=a==="/"?f:f.slice(a.length)||"/",g=vy(t,{pathname:m}),y=Qy(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:Ht([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Ht([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&y?S.createElement(Ts.Provider,{value:{location:es({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Mt.Pop}},y):y}function Ky(){let t=e0(),e=Uy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,o)}const Gy=S.createElement(Ky,null);class qy extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(kt.Provider,{value:this.props.routeContext},S.createElement(gp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yy(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(xu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(kt.Provider,{value:e},r)}function Qy(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let o=t,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||Q(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let c=l.route.id?s==null?void 0:s[l.route.id]:null,f=null;n&&(f=l.route.errorElement||Gy);let m=e.concat(o.slice(0,u+1)),g=()=>{let y;return c?y=f:l.route.Component?y=S.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,S.createElement(Yy,{match:l,routeContext:{outlet:a,matches:m,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(qy,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var wl;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(wl||(wl={}));var Ti;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Ti||(Ti={}));function Jy(t){let e=S.useContext(xu);return e||Q(!1),e}function Xy(t){let e=S.useContext(jy);return e||Q(!1),e}function Zy(t){let e=S.useContext(kt);return e||Q(!1),e}function wp(t){let e=Zy(),n=e.matches[e.matches.length-1];return n.route.id||Q(!1),n.route.id}function e0(){var t;let e=S.useContext(gp),n=Xy(Ti.UseRouteError),r=wp(Ti.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function t0(){let{router:t}=Jy(wl.UseNavigateStable),e=wp(Ti.UseNavigateStable),n=S.useRef(!1);return vp(()=>{n.current=!0}),S.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,es({fromRouteId:e},o)))},[t,e])}function n0(t){let{to:e,replace:n,state:r,relative:i}=t;Er()||Q(!1);let{matches:o}=S.useContext(kt),{pathname:s}=rn(),a=Fi(),l=Ou(e,Au(o).map(c=>c.pathnameBase),s,i==="path"),u=JSON.stringify(l);return S.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function r0(t){return Vy(t.context)}function Un(t){Q(!1)}function i0(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Mt.Pop,navigator:o,static:s=!1}=t;Er()&&Q(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=wr(r));let{pathname:u="/",search:c="",hash:f="",state:m=null,key:g="default"}=r,y=S.useMemo(()=>{let v=Nu(u,a);return v==null?null:{location:{pathname:v,search:c,hash:f,state:m,key:g},navigationType:i}},[a,u,c,f,m,g,i]);return y==null?null:S.createElement(_r.Provider,{value:l},S.createElement(Ts.Provider,{children:n,value:y}))}function o0(t){let{children:e,location:n}=t;return Wy(_l(e),n)}var wd;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(wd||(wd={}));new Promise(()=>{});function _l(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let o=[...e,i];if(r.type===S.Fragment){n.push.apply(n,_l(r.props.children,o));return}r.type!==Un&&Q(!1),!r.props.index||!r.props.children||Q(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=_l(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function El(){return El=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},El.apply(this,arguments)}function s0(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function a0(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function l0(t,e){return t.button===0&&(!e||e==="_self")&&!a0(t)}const u0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],c0="startTransition",_d=rg[c0];function d0(t){let{basename:e,children:n,future:r,window:i}=t,o=S.useRef();o.current==null&&(o.current=py({window:i,v5Compat:!0}));let s=o.current,[a,l]=S.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=S.useCallback(f=>{u&&_d?_d(()=>l(f)):l(f)},[l,u]);return S.useLayoutEffect(()=>s.listen(c),[s,c]),S.createElement(i0,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s})}const f0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",h0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hr=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c}=e,f=s0(e,u0),{basename:m}=S.useContext(_r),g,y=!1;if(typeof u=="string"&&h0.test(u)&&(g=u,f0))try{let d=new URL(window.location.href),p=u.startsWith("//")?new URL(d.protocol+u):new URL(u),w=Nu(p.pathname,m);p.origin===d.origin&&w!=null?u=w+p.search+p.hash:y=!0}catch{}let v=zy(u,{relative:i}),A=p0(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i});function h(d){r&&r(d),d.defaultPrevented||A(d)}return S.createElement("a",El({},f,{href:g||v,onClick:y||o?r:h,ref:n,target:l}))});var Ed;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Ed||(Ed={}));var Id;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Id||(Id={}));function p0(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=e===void 0?{}:e,a=Fi(),l=rn(),u=yp(t,{relative:s});return S.useCallback(c=>{if(l0(c,n)){c.preventDefault();let f=r!==void 0?r:Zo(l)===Zo(u);a(t,{replace:f,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,t,o,s])}const m0="/e-Learning/assets/header-aace57d5.png",g0=()=>E.jsxs("header",{className:"header",children:[E.jsxs("div",{className:"header__description",children:[E.jsx("h1",{children:"Learn Something from Us"}),E.jsx("p",{children:"We are a team of industry experts"}),E.jsx("p",{children:"with everyone having an experience of"}),E.jsx("h3",{children:"atleast 5+ YEARS"})]}),E.jsx("div",{className:"header__image",children:E.jsx("img",{src:m0,alt:""})})]});const v0=()=>E.jsxs(E.Fragment,{children:[E.jsxs("section",{className:"section",children:[E.jsx("h1",{children:"Let's start Learning, User with our Sample Videos"}),E.jsxs("div",{className:"container",children:[E.jsx("iframe",{src:"https://www.youtube.com/embed/zJSY8tbf_ys",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),E.jsx("iframe",{src:"https://www.youtube.com/embed/bMknfKXIFA8",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),E.jsx("iframe",{src:"https://www.youtube.com/embed/2-crBg6wpp0",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),E.jsx("iframe",{src:"https://www.youtube.com/embed/u6gSSpfsoOQ",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]}),E.jsxs("div",{className:"navigateToDashboard",children:[E.jsx("h1",{children:"To access our Premium Courses"}),E.jsx("h2",{children:"Go to Dashboard"}),E.jsx(Hr,{to:"/dashboard",children:E.jsx("button",{className:"button",children:"Go to Dashboard"})})]})]}),y0=()=>E.jsxs("div",{children:[E.jsx(g0,{}),E.jsx(v0,{})]});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},w0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},Ep={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(m=64)),r.push(n[c],n[f],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_p(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):w0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new _0;const m=o<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const E0=function(t){const e=_p(t);return Ep.encodeByteArray(e,!0)},Ip=function(t){return E0(t).replace(/\./g,"")},Sp=function(t){try{return Ep.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ts(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!I0(n)||(t[n]=ts(t[n],e[n]));return t}function I0(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=()=>S0().__FIREBASE_DEFAULTS__,T0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},C0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sp(t[1]);return e&&JSON.parse(e)},Lu=()=>{try{return k0()||T0()||C0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},kp=()=>{var t;return(t=Lu())===null||t===void 0?void 0:t.config},R0=t=>{var e;return(e=Lu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function N0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ee())}function Tp(){var t;const e=(t=Lu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function A0(){return typeof self=="object"&&self.self===self}function Cp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Du(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rp(){const t=ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ns(){try{return typeof indexedDB=="object"}catch{return!1}}function O0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0="FirebaseError";class Re extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=x0,Object.setPrototypeOf(this,Re.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xn.prototype.create)}}class xn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?L0(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Re(i,a,r)}}function L0(t,e){return t.replace(D0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const D0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function M0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Il(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(kd(o)&&kd(s)){if(!Il(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function kd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Kr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Pp(t,e){const n=new b0(t,e);return n.subscribe.bind(n)}class b0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");U0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=fa),i.error===void 0&&(i.error=fa),i.complete===void 0&&(i.complete=fa);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function U0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t){return t&&t._delegate?t._delegate:t}class Qt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new P0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(z0(e))try{this.getOrInitializeService({instanceIdentifier:cn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cn){return this.instances.has(e)}getOptions(e=cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:j0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cn){return this.component?this.component.multipleInstances?e:cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function j0(t){return t===cn?void 0:t}function z0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new F0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=[];var F;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(F||(F={}));const Np={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},$0=F.INFO,V0={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},W0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=V0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bu{constructor(e){this.name=e,this._logLevel=$0,this._logHandler=W0,this._userLogHandler=null,Mu.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Np[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}function H0(t){Mu.forEach(e=>{e.setLogLevel(t)})}function K0(t,e){for(const n of Mu){let r=null;e&&e.level&&(r=Np[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,o,...s)=>{const a=s.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");o>=(r??i.logLevel)&&t({level:F[o].toLowerCase(),message:a,args:s,type:i.name})}}}const G0=(t,e)=>e.some(n=>t instanceof n);let Td,Cd;function q0(){return Td||(Td=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Y0(){return Cd||(Cd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ap=new WeakMap,Sl=new WeakMap,Op=new WeakMap,ha=new WeakMap,Uu=new WeakMap;function Q0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Kt(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Ap.set(n,t)}).catch(()=>{}),Uu.set(e,t),e}function J0(t){if(Sl.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Sl.set(t,e)}let kl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Op.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function X0(t){kl=t(kl)}function Z0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(pa(this),e,...n);return Op.set(r,e.sort?e.sort():[e]),Kt(r)}:Y0().includes(t)?function(...e){return t.apply(pa(this),e),Kt(Ap.get(this))}:function(...e){return Kt(t.apply(pa(this),e))}}function ew(t){return typeof t=="function"?Z0(t):(t instanceof IDBTransaction&&J0(t),G0(t,q0())?new Proxy(t,kl):t)}function Kt(t){if(t instanceof IDBRequest)return Q0(t);if(ha.has(t))return ha.get(t);const e=ew(t);return e!==t&&(ha.set(t,e),Uu.set(e,t)),e}const pa=t=>Uu.get(t);function tw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Kt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Kt(s.result),l.oldVersion,l.newVersion,Kt(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const nw=["get","getKey","getAll","getAllKeys","count"],rw=["put","add","delete","clear"],ma=new Map;function Rd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ma.get(e))return ma.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=rw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nw.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ma.set(e,o),o}X0(t=>({...t,get:(e,n,r)=>Rd(e,n)||t.get(e,n,r),has:(e,n)=>!!Rd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ow(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ow(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tl="@firebase/app",Pd="0.9.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new bu("@firebase/app"),sw="@firebase/app-compat",aw="@firebase/analytics-compat",lw="@firebase/analytics",uw="@firebase/app-check-compat",cw="@firebase/app-check",dw="@firebase/auth",fw="@firebase/auth-compat",hw="@firebase/database",pw="@firebase/database-compat",mw="@firebase/functions",gw="@firebase/functions-compat",vw="@firebase/installations",yw="@firebase/installations-compat",ww="@firebase/messaging",_w="@firebase/messaging-compat",Ew="@firebase/performance",Iw="@firebase/performance-compat",Sw="@firebase/remote-config",kw="@firebase/remote-config-compat",Tw="@firebase/storage",Cw="@firebase/storage-compat",Rw="@firebase/firestore",Pw="@firebase/firestore-compat",Nw="firebase",Aw="10.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="[DEFAULT]",Ow={[Tl]:"fire-core",[sw]:"fire-core-compat",[lw]:"fire-analytics",[aw]:"fire-analytics-compat",[cw]:"fire-app-check",[uw]:"fire-app-check-compat",[dw]:"fire-auth",[fw]:"fire-auth-compat",[hw]:"fire-rtdb",[pw]:"fire-rtdb-compat",[mw]:"fire-fn",[gw]:"fire-fn-compat",[vw]:"fire-iid",[yw]:"fire-iid-compat",[ww]:"fire-fcm",[_w]:"fire-fcm-compat",[Ew]:"fire-perf",[Iw]:"fire-perf-compat",[Sw]:"fire-rc",[kw]:"fire-rc-compat",[Tw]:"fire-gcs",[Cw]:"fire-gcs-compat",[Rw]:"fire-fst",[Pw]:"fire-fst-compat","fire-js":"fire-js",[Nw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new Map,Ci=new Map;function rs(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xp(t,e){t.container.addOrOverwriteComponent(e)}function Cn(t){const e=t.name;if(Ci.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;Ci.set(e,t);for(const n of Xt.values())rs(n,t);return!0}function Lp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xw(t,e,n=Jt){Lp(t,e).clearInstance(n)}function Lw(){Ci.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gt=new xn("app","Firebase",Dw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mw=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=Aw;function Fu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw gt.create("bad-app-name",{appName:String(i)});if(n||(n=kp()),!n)throw gt.create("no-options");const o=Xt.get(i);if(o){if(Il(n,o.options)&&Il(r,o.config))return o;throw gt.create("duplicate-app",{appName:i})}const s=new B0(i);for(const l of Ci.values())s.addComponent(l);const a=new Mw(n,r,s);return Xt.set(i,a),a}function bw(t=Jt){const e=Xt.get(t);if(!e&&t===Jt&&kp())return Fu();if(!e)throw gt.create("no-app",{appName:t});return e}function Uw(){return Array.from(Xt.values())}async function Dp(t){const e=t.name;Xt.has(e)&&(Xt.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Gt(t,e,n){var r;let i=(r=Ow[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(a.join(" "));return}Cn(new Qt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Mp(t,e){if(t!==null&&typeof t!="function")throw gt.create("invalid-log-argument");K0(t,e)}function bp(t){H0(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw="firebase-heartbeat-database",jw=1,Ri="firebase-heartbeat-store";let ga=null;function Up(){return ga||(ga=tw(Fw,jw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ri)}}}).catch(t=>{throw gt.create("idb-open",{originalErrorMessage:t.message})})),ga}async function zw(t){try{return await(await Up()).transaction(Ri).objectStore(Ri).get(Fp(t))}catch(e){if(e instanceof Re)Tn.warn(e.message);else{const n=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(n.message)}}}async function Nd(t,e){try{const r=(await Up()).transaction(Ri,"readwrite");await r.objectStore(Ri).put(e,Fp(t)),await r.done}catch(n){if(n instanceof Re)Tn.warn(n.message);else{const r=gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(r.message)}}}function Fp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=1024,$w=30*24*60*60*1e3;class Vw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ad();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=$w}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ad(),{heartbeatsToSend:n,unsentEntries:r}=Ww(this._heartbeatsCache.heartbeats),i=Ip(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ad(){return new Date().toISOString().substring(0,10)}function Ww(t,e=Bw){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Od(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Od(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Hw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ns()?O0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Od(t){return Ip(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(t){Cn(new Qt("platform-logger",e=>new iw(e),"PRIVATE")),Cn(new Qt("heartbeat",e=>new Vw(e),"PRIVATE")),Gt(Tl,Pd,t),Gt(Tl,Pd,"esm2017"),Gt("fire-js","")}Kw("");const Gw=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Re,SDK_VERSION:Ln,_DEFAULT_ENTRY_NAME:Jt,_addComponent:rs,_addOrOverwriteComponent:xp,_apps:Xt,_clearComponents:Lw,_components:Ci,_getProvider:Lp,_registerComponent:Cn,_removeServiceInstance:xw,deleteApp:Dp,getApp:bw,getApps:Uw,initializeApp:Fu,onLog:Mp,registerVersion:Gt,setLogLevel:bp},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,n){this._delegate=e,this.firebase=n,rs(e,new Qt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Dp(this._delegate)))}_getService(e,n=Jt){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Jt){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){rs(this._delegate,e)}_addOrOverwriteComponent(e){xp(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},xd=new xn("app-compat","Firebase",Yw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(t){const e={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:Gt,setLogLevel:bp,onLog:Mp,apps:null,SDK_VERSION:Ln,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:Gw}};n.default=n,Object.defineProperty(n,"apps",{get:s});function r(u){delete e[u]}function i(u){if(u=u||Jt,!Sd(e,u))throw xd.create("no-app",{appName:u});return e[u]}i.App=t;function o(u,c={}){const f=Fu(u,c);if(Sd(e,f.name))return e[f.name];const m=new t(f,n);return e[f.name]=m,m}function s(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,f=c.replace("-compat","");if(Cn(u)&&u.type==="PUBLIC"){const m=(g=i())=>{if(typeof g[f]!="function")throw xd.create("invalid-app-argument",{appName:c});return g[f]()};u.serviceProps!==void 0&&ts(m,u.serviceProps),n[f]=m,t.prototype[f]=function(...g){return this._getService.bind(this,c).apply(this,u.multipleInstances?g:[])}}return u.type==="PUBLIC"?n[f]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(){const t=Qw(qw);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:jp,extendNamespace:e,createSubscribe:Pp,ErrorFactory:xn,deepExtend:ts});function e(n){ts(t,n)}return t}const Jw=jp();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld=new bu("@firebase/app-compat"),Xw="@firebase/app-compat",Zw="0.2.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(t){Gt(Xw,Zw,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(A0()&&self.firebase!==void 0){Ld.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Ld.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Sr=Jw;e_();var t_="firebase",n_="10.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sr.registerVersion(t_,n_,"app-compat");function ju(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Fr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},bn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend."}}function zp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const i_=r_,o_=zp,Bp=new xn("auth","Firebase",zp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new bu("@firebase/auth");function s_(t,...e){is.logLevel<=F.WARN&&is.warn(`Auth (${Ln}): ${t}`,...e)}function So(t,...e){is.logLevel<=F.ERROR&&is.error(`Auth (${Ln}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t,...e){throw zu(t,...e)}function ce(t,...e){return zu(t,...e)}function $p(t,e,n){const r=Object.assign(Object.assign({},o_()),{[e]:n});return new xn("auth","Firebase",r).create(e,{appName:t.name})}function kr(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&fe(t,"argument-error"),$p(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Bp.create(t,...e)}function I(t,e,...n){if(!t)throw zu(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw So(e),new Error(e)}function Je(t,e){t||ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Bu(){return Dd()==="http:"||Dd()==="https:"}function Dd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Bu()||Cp()||"connection"in navigator)?navigator.onLine:!0}function l_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n){this.shortDelay=e,this.longDelay=n,Je(n>e,"Short delay should be less than long delay!"),this.isMobile=N0()||Du()}get(){return a_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t,e){Je(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=new ji(3e4,6e4);function te(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ie(t,e,n,r,i={}){return Wp(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Ir(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Vp.fetch()(Hp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function Wp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},u_),e);try{const i=new d_(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Gr(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gr(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Gr(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw Gr(t,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $p(t,c,u);fe(t,c)}}catch(i){if(i instanceof Re)throw i;fe(t,"network-request-failed",{message:String(i)})}}async function Tt(t,e,n,r,i={}){const o=await ie(t,e,n,r,i);return"mfaPendingCredential"in o&&fe(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Hp(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?$u(t.config,i):`${t.config.apiScheme}://${i}`}class d_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ce(this.auth,"network-request-failed")),c_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ce(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(t,e){return ie(t,"POST","/v1/accounts:delete",e)}async function h_(t,e){return ie(t,"POST","/v1/accounts:update",e)}async function p_(t,e){return ie(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function m_(t,e=!1){const n=b(t),r=await n.getIdToken(e),i=Cs(r);I(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ii(va(i.auth_time)),issuedAtTime:ii(va(i.iat)),expirationTime:ii(va(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function va(t){return Number(t)*1e3}function Cs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return So("JWT malformed, contained fewer than 3 sections"),null;try{const i=Sp(n);return i?JSON.parse(i):(So("Failed to decode base64 JWT payload"),null)}catch(i){return So("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function g_(t){const e=Cs(t);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Re&&v_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function v_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ii(this.lastLoginAt),this.creationTime=ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(t){var e;const n=t.auth,r=await t.getIdToken(),i=await It(t,p_(n,{idToken:r}));I(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?E_(o.providerUserInfo):[],a=__(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Kp(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function w_(t){const e=b(t);await Ni(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function __(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function E_(t){return t.map(e=>{var{providerId:n}=e,r=ju(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I_(t,e){const n=await Wp(t,{},async()=>{const r=Ir({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Hp(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Vp.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):g_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await I_(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Ai;return r&&(I(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(I(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(I(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ai,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t,e){I(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=ju(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new y_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Kp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await It(this,this.stsTokenManager.getToken(this.auth,e));return I(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return m_(this,e)}reload(){return w_(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ni(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await It(this,f_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:p,emailVerified:w,isAnonymous:k,providerData:R,stsTokenManager:P}=n;I(p&&P,e,"internal-error");const N=Ai.fromJSON(this.name,P);I(typeof p=="string",e,"internal-error"),Pt(f,e.name),Pt(m,e.name),I(typeof w=="boolean",e,"internal-error"),I(typeof k=="boolean",e,"internal-error"),Pt(g,e.name),Pt(y,e.name),Pt(v,e.name),Pt(A,e.name),Pt(h,e.name),Pt(d,e.name);const z=new vn({uid:p,auth:e,email:m,emailVerified:w,displayName:f,isAnonymous:k,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:N,createdAt:h,lastLoginAt:d});return R&&Array.isArray(R)&&(z.providerData=R.map(L=>Object.assign({},L))),A&&(z._redirectEventId=A),z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ai;i.updateFromServerResponse(n);const o=new vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ni(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md=new Map;function Oe(t){Je(t instanceof Function,"Expected a class definition");let e=Md.get(t);return e?(Je(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Md.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gp.type="NONE";const pr=Gp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,e,n){return`firebase:${t}:${e}:${n}`}class rr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=yn(this.userKey,i.apiKey,o),this.fullPersistenceKey=yn("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rr(Oe(pr),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Oe(pr);const s=yn(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const f=vn._fromJSON(e,c);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new rr(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new rr(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jp(e))return"Blackberry";if(Xp(e))return"Webos";if(Vu(e))return"Safari";if((e.includes("chrome/")||Yp(e))&&!e.includes("edge/"))return"Chrome";if(zi(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qp(t=ee()){return/firefox\//i.test(t)}function Vu(t=ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yp(t=ee()){return/crios\//i.test(t)}function Qp(t=ee()){return/iemobile/i.test(t)}function zi(t=ee()){return/android/i.test(t)}function Jp(t=ee()){return/blackberry/i.test(t)}function Xp(t=ee()){return/webos/i.test(t)}function Tr(t=ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function S_(t=ee()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function k_(t=ee()){var e;return Tr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function T_(){return Rp()&&document.documentMode===10}function Zp(t=ee()){return Tr(t)||zi(t)||Xp(t)||Jp(t)||/windows phone/i.test(t)||Qp(t)}function C_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t,e=[]){let n;switch(t){case"Browser":n=bd(ee());break;case"Worker":n=`${bd(ee())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ln}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(t){return(await ie(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function tm(t,e){return ie(t,"GET","/v2/recaptchaConfig",te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(t){return t!==void 0&&t.getResponse!==void 0}function Fd(t){return t!==void 0&&t.enterprise!==void 0}class nm{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Wu(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=ce("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",P_().appendChild(r)})}function rm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const N_="https://www.google.com/recaptcha/enterprise.js?render=",A_="recaptcha-enterprise",O_="NO_RECAPTCHA";class im{constructor(e){this.type=A_,this.auth=J(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{tm(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new nm(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Fd(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(O_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Fd(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}Wu(N_+a).then(()=>{i(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}}async function Zt(t,e,n,r=!1){const i=new im(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jd(this),this.idTokenSubscription=new jd(this),this.beforeStateQueue=new x_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Oe(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await rr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ni(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=l_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?b(e):null;return n&&I(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Oe(e))})}async initializeRecaptchaConfig(){const e=await tm(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new nm(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new im(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Oe(e)||this._popupRedirectResolver;I(n,this,"argument-error"),this.redirectPersistenceManager=await rr.create(this,[Oe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return I(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=em(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&s_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function J(t){return b(t)}class jd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Pp(n=>this.observer=n)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function D_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Oe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function M_(t,e,n){const r=J(t);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=om(e),{host:s,port:a}=b_(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||U_()}function om(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function b_(t){const e=om(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:zd(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:zd(s)}}}function zd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function U_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sm(t,e){return ie(t,"POST","/v1/accounts:resetPassword",te(t,e))}async function am(t,e){return ie(t,"POST","/v1/accounts:update",e)}async function F_(t,e){return ie(t,"POST","/v1/accounts:update",te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ya(t,e){return Tt(t,"POST","/v1/accounts:signInWithPassword",te(t,e))}async function Rs(t,e){return ie(t,"POST","/v1/accounts:sendOobCode",te(t,e))}async function j_(t,e){return Rs(t,e)}async function wa(t,e){return Rs(t,e)}async function _a(t,e){return Rs(t,e)}async function z_(t,e){return Rs(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B_(t,e){return Tt(t,"POST","/v1/accounts:signInWithEmailLink",te(t,e))}async function $_(t,e){return Tt(t,"POST","/v1/accounts:signInWithEmailLink",te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends Cr{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Oi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Oi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Zt(e,r,"signInWithPassword");return ya(e,i)}else return ya(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const o=await Zt(e,r,"signInWithPassword");return ya(e,o)}else return Promise.reject(i)});case"emailLink":return B_(e,{email:this._email,oobCode:this._password});default:fe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return am(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $_(e,{idToken:n,email:this._email,oobCode:this._password});default:fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(t,e){return Tt(t,"POST","/v1/accounts:signInWithIdp",te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="http://localhost";class lt extends Cr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=ju(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new lt(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return vt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vt(e,n)}buildRequest(){const e={requestUri:V_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ir(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W_(t,e){return ie(t,"POST","/v1/accounts:sendVerificationCode",te(t,e))}async function H_(t,e){return Tt(t,"POST","/v1/accounts:signInWithPhoneNumber",te(t,e))}async function K_(t,e){const n=await Tt(t,"POST","/v1/accounts:signInWithPhoneNumber",te(t,e));if(n.temporaryProof)throw Gr(t,"account-exists-with-different-credential",n);return n}const G_={USER_NOT_FOUND:"user-not-found"};async function q_(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Tt(t,"POST","/v1/accounts:signInWithPhoneNumber",te(t,n),G_)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Cr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new wn({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new wn({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return H_(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return K_(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return q_(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o}=e;return!r&&!n&&!i&&!o?null:new wn({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Q_(t){const e=Qn(Kr(t)).link,n=e?Qn(Kr(e)).deep_link_id:null,r=Qn(Kr(t)).deep_link_id;return(r?Qn(Kr(r)).link:null)||r||n||e||t}class Ps{constructor(e){var n,r,i,o,s,a;const l=Qn(Kr(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=Y_((i=l.mode)!==null&&i!==void 0?i:null);I(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Q_(e);try{return new Ps(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(){this.providerId=on.PROVIDER_ID}static credential(e,n){return Oi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ps.parseLink(n);return I(r,"argument-error"),Oi._fromEmailAndCode(e,r.code,r.tenantId)}}on.PROVIDER_ID="password";on.EMAIL_PASSWORD_SIGN_IN_METHOD="password";on.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Ct{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ir extends Rr{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return I("providerId"in n&&"signInMethod"in n,"argument-error"),lt._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return I(e.idToken||e.accessToken,"argument-error"),lt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ir.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ir.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:a}=e;if(!r&&!i&&!n&&!o||!a)return null;try{return new ir(a)._credential({idToken:n,accessToken:r,nonce:s,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends Rr{constructor(){super("facebook.com")}static credential(e){return lt._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tt.credential(e.oauthAccessToken)}catch{return null}}}tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";tt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends Rr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nt.credential(n,r)}catch{return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com";nt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Rr{constructor(){super("github.com")}static credential(e){return lt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rt.credential(e.oauthAccessToken)}catch{return null}}}rt.GITHUB_SIGN_IN_METHOD="github.com";rt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_="http://localhost";class mr extends Cr{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return vt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vt(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:o}=n;return!r||!i||!o||r!==i?null:new mr(r,o)}static _create(e,n){return new mr(e,n)}buildRequest(){return{requestUri:J_,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="saml.";class os extends Ct{constructor(e){I(e.startsWith(X_),"argument-error"),super(e)}static credentialFromResult(e){return os.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return os.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=mr.fromJSON(e);return I(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return mr._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Rr{constructor(){super("twitter.com")}static credential(e,n){return lt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return it.credential(n,r)}catch{return null}}}it.TWITTER_SIGN_IN_METHOD="twitter.com";it.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(t,e){return Tt(t,"POST","/v1/accounts:signUp",te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await vn._fromIdTokenResponse(e,r,i),s=Bd(r);return new $e({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Bd(r);return new $e({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Bd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z_(t){var e;const n=J(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new $e({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await ko(n,{returnSecureToken:!0}),i=await $e._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends Re{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ss.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ss(e,n,r,i)}}function lm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ss._fromErrorAndOperation(t,o,e,r):o})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eE(t,e){const n=b(t);await Ns(!0,n,e);const{providerUserInfo:r}=await h_(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=um(r||[]);return n.providerData=n.providerData.filter(o=>i.has(o.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Hu(t,e,n=!1){const r=await It(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $e._forOperation(t,"link",r)}async function Ns(t,e,n){await Ni(e);const r=um(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";I(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cm(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await It(t,lm(r,i,e,t),n);I(o.idToken,r,"internal-error");const s=Cs(o.idToken);I(s,r,"internal-error");const{sub:a}=s;return I(t.uid===a,r,"user-mismatch"),$e._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&fe(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dm(t,e,n=!1){const r="signIn",i=await lm(t,r,e),o=await $e._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function As(t,e){return dm(J(t),e)}async function fm(t,e){const n=b(t);return await Ns(!1,n,e.providerId),Hu(n,e)}async function hm(t,e){return cm(b(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tE(t,e){return Tt(t,"POST","/v1/accounts:signInWithCustomToken",te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nE(t,e){const n=J(t),r=await tE(n,{token:e,returnSecureToken:!0}),i=await $e._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Ku._fromServerResponse(e,n):"totpInfo"in n?Gu._fromServerResponse(e,n):fe(e,"internal-error")}}class Ku extends Bi{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Ku(n)}}class Gu extends Bi{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Gu(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,e,n){var r;I(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),I(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rE(t,e,n){var r;const i=J(t),o={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const s=await Zt(i,o,"getOobCode",!0);n&&or(i,s,n),await wa(i,s)}else n&&or(i,o,n),await wa(i,o).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Zt(i,o,"getOobCode",!0);n&&or(i,a,n),await wa(i,a)}else return Promise.reject(s)})}async function iE(t,e,n){await sm(b(t),{oobCode:e,newPassword:n})}async function oE(t,e){await F_(b(t),{oobCode:e})}async function pm(t,e){const n=b(t),r=await sm(n,{oobCode:e}),i=r.requestType;switch(I(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(r.mfaInfo,n,"internal-error");default:I(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=Bi._fromServerResponse(J(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:i}}async function sE(t,e){const{data:n}=await pm(b(t),e);return n.email}async function aE(t,e,n){var r;const i=J(t),o={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Zt(i,o,"signUpPassword");s=ko(i,u)}else s=ko(i,o).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Zt(i,o,"signUpPassword");return ko(i,c)}else return Promise.reject(u)});const a=await s.catch(u=>Promise.reject(u)),l=await $e._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function lE(t,e,n){return As(b(t),on.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uE(t,e,n){var r;const i=J(t),o={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(a,l){I(l.handleCodeInApp,i,"argument-error"),l&&or(i,a,l)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await Zt(i,o,"getOobCode",!0);s(a,n),await _a(i,a)}else s(o,n),await _a(i,o).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await Zt(i,o,"getOobCode",!0);s(l,n),await _a(i,l)}else return Promise.reject(a)})}function cE(t,e){const n=Ps.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function dE(t,e,n){const r=b(t),i=on.credentialWithLink(e,n||Pi());return I(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),As(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fE(t,e){return ie(t,"POST","/v1/accounts:createAuthUri",te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hE(t,e){const n=Bu()?Pi():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await fE(b(t),r);return i||[]}async function pE(t,e){const n=b(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&or(n.auth,i,e);const{email:o}=await j_(n.auth,i);o!==t.email&&await t.reload()}async function mE(t,e,n){const r=b(t),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&or(r.auth,o,n);const{email:s}=await z_(r.auth,o);s!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gE(t,e){return ie(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vE(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=b(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await It(r,gE(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function yE(t,e){return mm(b(t),e,null)}function wE(t,e){return mm(b(t),null,e)}async function mm(t,e,n){const{auth:r}=t,o={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(o.email=e),n&&(o.password=n);const s=await It(t,am(r,o));await t._updateTokensIfNecessary(s,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},o=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const s=(n=(e=Cs(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(s){const a=s!=="anonymous"&&s!=="custom"?s:null;return new sr(o,a)}}if(!r)return null;switch(r){case"facebook.com":return new EE(o,i);case"github.com":return new IE(o,i);case"google.com":return new SE(o,i);case"twitter.com":return new kE(o,i,t.screenName||null);case"custom":case"anonymous":return new sr(o,null);default:return new sr(o,r,i)}}class sr{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class gm extends sr{constructor(e,n,r,i){super(e,n,r),this.username=i}}class EE extends sr{constructor(e,n){super(e,"facebook.com",n)}}class IE extends gm{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class SE extends sr{constructor(e,n){super(e,"google.com",n)}}class kE extends gm{constructor(e,n,r){super(e,"twitter.com",n,r)}}function TE(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:_E(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new pn("enroll",e,n)}static _fromMfaPendingCredential(e){return new pn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return pn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return pn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=J(e),i=n.customData._serverResponse,o=(i.mfaInfo||[]).map(a=>Bi._fromServerResponse(r,a));I(i.mfaPendingCredential,r,"internal-error");const s=pn._fromMfaPendingCredential(i.mfaPendingCredential);return new qu(s,o,async a=>{const l=await a._process(r,s);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await $e._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return I(n.user,r,"internal-error"),$e._forOperation(n.user,n.operationType,u);default:fe(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function CE(t,e){var n;const r=b(t),i=e;return I(e.customData.operationType,r,"argument-error"),I((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),qu._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t,e){return ie(t,"POST","/v2/accounts/mfaEnrollment:start",te(t,e))}function PE(t,e){return ie(t,"POST","/v2/accounts/mfaEnrollment:finalize",te(t,e))}function NE(t,e){return ie(t,"POST","/v2/accounts/mfaEnrollment:withdraw",te(t,e))}class Yu{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Bi._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Yu(e)}async getSession(){return pn._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),o=await It(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await It(this.user,NE(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Ea=new WeakMap;function AE(t){const e=b(t);return Ea.has(e)||Ea.set(e,Yu._fromUser(e)),Ea.get(e)}const as="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(as,"1"),this.storage.removeItem(as),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(){const t=ee();return Vu(t)||Tr(t)}const xE=1e3,LE=10;class ym extends vm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=OE()&&C_(),this.fallbackToPolling=Zp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);T_()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,LE):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ym.type="LOCAL";const Qu=ym;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm extends vm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wm.type="SESSION";const Rn=wm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Os(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await DE(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Os.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=$i("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(){return window}function bE(t){X().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(){return typeof X().WorkerGlobalScope<"u"&&typeof X().importScripts=="function"}async function UE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jE(){return Ju()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m="firebaseLocalStorageDb",zE=1,ls="firebaseLocalStorage",Em="fbase_key";class Vi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xs(t,e){return t.transaction([ls],e?"readwrite":"readonly").objectStore(ls)}function BE(){const t=indexedDB.deleteDatabase(_m);return new Vi(t).toPromise()}function Cl(){const t=indexedDB.open(_m,zE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ls,{keyPath:Em})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ls)?e(r):(r.close(),await BE(),e(await Cl()))})})}async function $d(t,e,n){const r=xs(t,!0).put({[Em]:e,value:n});return new Vi(r).toPromise()}async function $E(t,e){const n=xs(t,!1).get(e),r=await new Vi(n).toPromise();return r===void 0?null:r.value}function Vd(t,e){const n=xs(t,!0).delete(e);return new Vi(n).toPromise()}const VE=800,WE=3;class Im{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>WE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ju()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Os._getInstance(jE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await UE(),!this.activeServiceWorker)return;this.sender=new ME(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cl();return await $d(e,as,"1"),await Vd(e,as),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$d(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$E(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=xs(i,!1).getAll();return new Vi(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Im.type="LOCAL";const xi=Im;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(t,e){return ie(t,"POST","/v2/accounts/mfaSignIn:start",te(t,e))}function KE(t,e){return ie(t,"POST","/v2/accounts/mfaSignIn:finalize",te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE=500,qE=6e4,uo=1e12;class YE{constructor(e){this.auth=e,this.counter=uo,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new QE(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||uo;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||uo;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||uo;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class QE{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;I(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=JE(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},qE)},GE))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function JE(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=rm("rcb"),XE=new ji(3e4,6e4),ZE="https://www.google.com/recaptcha/api.js?";class eI{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=X().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return I(tI(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Ud(X().grecaptcha)?Promise.resolve(X().grecaptcha):new Promise((r,i)=>{const o=X().setTimeout(()=>{i(ce(e,"network-request-failed"))},XE.get());X()[Ia]=()=>{X().clearTimeout(o),delete X()[Ia];const a=X().grecaptcha;if(!a||!Ud(a)){i(ce(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const f=l(u,c);return this.counter++,f},this.hostLanguage=n,r(a)};const s=`${ZE}?${Ir({onload:Ia,render:"explicit",hl:n})}`;Wu(s).catch(()=>{clearTimeout(o),i(ce(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=X().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function tI(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class nI{async load(e){return new YE(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm="recaptcha",rI={theme:"light",type:"image"};let iI=class{constructor(e,n,r=Object.assign({},rI)){this.parameters=r,this.type=Sm,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=J(e),this.isInvisible=this.parameters.size==="invisible",I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;I(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new nI:new eI,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const o=s=>{s&&(this.tokenChangeListeners.delete(o),i(s))};this.tokenChangeListeners.add(o),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=X()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(Bu()&&!Ju(),this.auth,"internal-error"),await oI(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await R_(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function oI(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=wn._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function sI(t,e,n){const r=J(t),i=await Ls(r,e,b(n));return new Xu(i,o=>As(r,o))}async function aI(t,e,n){const r=b(t);await Ns(!1,r,"phone");const i=await Ls(r.auth,e,b(n));return new Xu(i,o=>fm(r,o))}async function lI(t,e,n){const r=b(t),i=await Ls(r.auth,e,b(n));return new Xu(i,o=>hm(r,o))}async function Ls(t,e,n){var r;const i=await n.verify();try{I(typeof i=="string",t,"argument-error"),I(n.type===Sm,t,"argument-error");let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){const s=o.session;if("phoneNumber"in o)return I(s.type==="enroll",t,"internal-error"),(await RE(t,{idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{I(s.type==="signin",t,"internal-error");const a=((r=o.multiFactorHint)===null||r===void 0?void 0:r.uid)||o.multiFactorUid;return I(a,t,"missing-multi-factor-info"),(await HE(t,{mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:s}=await W_(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return s}}finally{n._reset()}}async function uI(t,e){await Hu(b(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pn=class To{constructor(e){this.providerId=To.PROVIDER_ID,this.auth=J(e)}verifyPhoneNumber(e,n){return Ls(this.auth,e,b(n))}static credential(e,n){return wn._fromVerification(e,n)}static credentialFromResult(e){const n=e;return To.credentialFromTaggedObject(n)}static credentialFromError(e){return To.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?wn._fromTokenResponse(n,r):null}};Pn.PROVIDER_ID="phone";Pn.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t,e){return e?Oe(e):(I(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu extends Cr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cI(t){return dm(t.auth,new Zu(t),t.bypassAuthState)}function dI(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),cm(n,new Zu(t),t.bypassAuthState)}async function fI(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),Hu(n,new Zu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cI;case"linkViaPopup":case"linkViaRedirect":return fI;case"reauthViaPopup":case"reauthViaRedirect":return dI;default:fe(this.auth,"internal-error")}}resolve(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=new ji(2e3,1e4);async function pI(t,e,n){const r=J(t);kr(t,e,Ct);const i=Dn(r,n);return new ht(r,"signInViaPopup",e,i).executeNotNull()}async function mI(t,e,n){const r=b(t);kr(r.auth,e,Ct);const i=Dn(r.auth,n);return new ht(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function gI(t,e,n){const r=b(t);kr(r.auth,e,Ct);const i=Dn(r.auth,n);return new ht(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class ht extends km{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,ht.currentPopupAction&&ht.currentPopupAction.cancel(),ht.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){Je(this.filter.length===1,"Popup operations only handle one event");const e=$i();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ce(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ce(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ht.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ce(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hI.get())};e()}}ht.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="pendingRedirect",oi=new Map;class yI extends km{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=oi.get(this.auth._key());if(!e){try{const r=await wI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}oi.set(this.auth._key(),e)}return this.bypassAuthState||oi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wI(t,e){const n=Cm(e),r=Tm(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function ec(t,e){return Tm(t)._set(Cm(e),"true")}function _I(){oi.clear()}function tc(t,e){oi.set(t._key(),e)}function Tm(t){return Oe(t._redirectPersistence)}function Cm(t){return yn(vI,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(t,e,n){return II(t,e,n)}async function II(t,e,n){const r=J(t);kr(t,e,Ct),await r._initializationPromise;const i=Dn(r,n);return await ec(i,r),i._openRedirect(r,e,"signInViaRedirect")}function SI(t,e,n){return kI(t,e,n)}async function kI(t,e,n){const r=b(t);kr(r.auth,e,Ct),await r.auth._initializationPromise;const i=Dn(r.auth,n);await ec(i,r.auth);const o=await Rm(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",o)}function TI(t,e,n){return CI(t,e,n)}async function CI(t,e,n){const r=b(t);kr(r.auth,e,Ct),await r.auth._initializationPromise;const i=Dn(r.auth,n);await Ns(!1,r,e.providerId),await ec(i,r.auth);const o=await Rm(r);return i._openRedirect(r.auth,e,"linkViaRedirect",o)}async function RI(t,e){return await J(t)._initializationPromise,Ds(t,e,!1)}async function Ds(t,e,n=!1){const r=J(t),i=Dn(r,e),s=await new yI(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}async function Rm(t){const e=$i(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=10*60*1e3;class Pm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Nm(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ce(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wd(e))}saveEventToCache(e){this.cachedEventUids.add(Wd(e)),this.lastProcessedEventTime=Date.now()}}function Wd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Nm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Am(t,e={}){return ie(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OI=/^https?/;async function xI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Am(t);for(const n of e)try{if(LI(n))return}catch{}fe(t,"unauthorized-domain")}function LI(t){const e=Pi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!OI.test(n))return!1;if(AI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=new ji(3e4,6e4);function Hd(){const t=X().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MI(t){return new Promise((e,n)=>{var r,i,o;function s(){Hd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hd(),n(ce(t,"network-request-failed"))},timeout:DI.get()})}if(!((i=(r=X().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=X().gapi)===null||o===void 0)&&o.load)s();else{const a=rm("iframefcb");return X()[a]=()=>{gapi.load?s():n(ce(t,"network-request-failed"))},Wu(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Co=null,e})}let Co=null;function bI(t){return Co=Co||MI(t),Co}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=new ji(5e3,15e3),FI="__/auth/iframe",jI="emulator/auth/iframe",zI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $I(t){const e=t.config;I(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$u(e,jI):`https://${t.config.authDomain}/${FI}`,r={apiKey:e.apiKey,appName:t.name,v:Ln},i=BI.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Ir(r).slice(1)}`}async function VI(t){const e=await bI(t),n=X().gapi;return I(n,t,"internal-error"),e.open({where:document.body,url:$I(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zI,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=ce(t,"network-request-failed"),a=X().setTimeout(()=>{o(s)},UI.get());function l(){X().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HI=500,KI=600,GI="_blank",qI="http://localhost";class Kd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YI(t,e,n,r=HI,i=KI){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},WI),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ee().toLowerCase();n&&(a=Yp(u)?GI:n),qp(u)&&(e=e||qI,l.scrollbars="yes");const c=Object.entries(l).reduce((m,[g,y])=>`${m}${g}=${y},`,"");if(k_(u)&&a!=="_self")return QI(e||"",a),new Kd(null);const f=window.open(e||"",a,c);I(f,t,"popup-blocked");try{f.focus()}catch{}return new Kd(f)}function QI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="__/auth/handler",XI="emulator/auth/handler",ZI=encodeURIComponent("fac");async function Rl(t,e,n,r,i,o){I(t.config.authDomain,t,"auth-domain-config-required"),I(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ln,eventId:i};if(e instanceof Ct){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",M0(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(o||{}))s[c]=f}if(e instanceof Rr){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(s.scopes=c.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${ZI}=${encodeURIComponent(l)}`:"";return`${eS(t)}?${Ir(a).slice(1)}${u}`}function eS({config:t}){return t.emulator?$u(t,XI):`https://${t.authDomain}/${JI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="webStorageSupport";class tS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rn,this._completeRedirectFn=Ds,this._overrideRedirectResult=tc}async _openPopup(e,n,r,i){var o;Je((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Rl(e,n,r,Pi(),i);return YI(e,s,$i())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await Rl(e,n,r,Pi(),i);return bE(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Je(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VI(e),r=new Pm(e);return n.register("authEvent",i=>(I(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sa,{type:Sa},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Sa];s!==void 0&&n(!!s),fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zp()||Vu()||Tr()}}const nS=tS;class rS{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return ot("unexpected MultiFactorSessionType")}}}class nc extends rS{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new nc(e)}_finalizeEnroll(e,n,r){return PE(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return KE(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Om{constructor(){}static assertion(e){return nc._fromCredential(e)}}Om.FACTOR_ID="phone";var Gd="@firebase/auth",qd="1.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sS(t){Cn(new Qt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;I(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:em(t)},u=new L_(r,i,o,l);return D_(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Cn(new Qt("auth-internal",e=>{const n=J(e.getProvider("auth").getImmediate());return(r=>new iS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(Gd,qd,oS(t)),Gt(Gd,qd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=5*60;R0("authIdTokenMaxAge");sS("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=2e3;async function uS(t,e,n){var r;const{BuildInfo:i}=Nn();Je(e.sessionId,"AuthEvent did not contain a session ID");const o=await pS(e.sessionId),s={};return Tr()?s.ibi=i.packageName:zi()?s.apn=i.packageName:fe(t,"operation-not-supported-in-this-environment"),i.displayName&&(s.appDisplayName=i.displayName),s.sessionId=o,Rl(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,s)}async function cS(t){const{BuildInfo:e}=Nn(),n={};Tr()?n.iosBundleId=e.packageName:zi()?n.androidPackageName=e.packageName:fe(t,"operation-not-supported-in-this-environment"),await Am(t,n)}function dS(t){const{cordova:e}=Nn();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,S_()?"_blank":"_system","location=yes"),n(i)})})}async function fS(t,e,n){const{cordova:r}=Nn();let i=()=>{};try{await new Promise((o,s)=>{let a=null;function l(){var f;o();const m=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof m=="function"&&m(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{s(ce(t,"redirect-cancelled-by-user"))},lS))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),zi()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function hS(t){var e,n,r,i,o,s,a,l,u,c;const f=Nn();I(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),I(typeof((n=f==null?void 0:f.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),I(typeof((o=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I(typeof((l=(a=(s=f==null?void 0:f.cordova)===null||s===void 0?void 0:s.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I(typeof((c=(u=f==null?void 0:f.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function pS(t){const e=mS(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function mS(t){if(Je(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=20;class vS extends Pm{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function yS(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:ES(),postBody:null,tenantId:t.tenantId,error:ce(t,"no-auth-event")}}function wS(t,e){return Pl()._set(Nl(t),e)}async function Yd(t){const e=await Pl()._get(Nl(t));return e&&await Pl()._remove(Nl(t)),e}function _S(t,e){var n,r;const i=SS(e);if(i.includes("/__/auth/callback")){const o=Ro(i),s=o.firebaseError?IS(decodeURIComponent(o.firebaseError)):null,a=(r=(n=s==null?void 0:s.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?ce(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function ES(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<gS;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Pl(){return Oe(Qu)}function Nl(t){return yn("authEvent",t.config.apiKey,t.name)}function IS(t){try{return JSON.parse(t)}catch{return null}}function SS(t){const e=Ro(t),n=e.link?decodeURIComponent(e.link):void 0,r=Ro(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Ro(i).link||i||r||n||t}function Ro(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Qn(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=500;class TS{constructor(){this._redirectPersistence=Rn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ds,this._overrideRedirectResult=tc}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new vS(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){fe(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){hS(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),_I(),await this._originValidation(e);const s=yS(e,r,i);await wS(e,s);const a=await uS(e,s,n),l=await dS(a);return fS(e,o,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cS(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:o}=Nn(),s=setTimeout(async()=>{await Yd(e),n.onEvent(Qd())},kS),a=async c=>{clearTimeout(s);const f=await Yd(e);let m=null;f&&(c!=null&&c.url)&&(m=_S(f,c.url)),n.onEvent(m||Qd())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${o.packageName.toLowerCase()}://`;Nn().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(f){console.error(f)}}}}const CS=TS;function Qd(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ce("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(t,e){J(t)._logFramework(e)}var PS="@firebase/auth-compat",NS="0.4.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=1e3;function si(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function OS(){return si()==="http:"||si()==="https:"}function xm(t=ee()){return!!((si()==="file:"||si()==="ionic:"||si()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function xS(){return Du()||Tp()}function LS(){return Rp()&&(document==null?void 0:document.documentMode)===11}function DS(t=ee()){return/Edge\/\d+/.test(t)}function MS(t=ee()){return LS()||DS(t)}function Lm(){try{const t=self.localStorage,e=$i();if(t)return t.setItem(e,"1"),t.removeItem(e),MS()?ns():!0}catch{return rc()&&ns()}return!1}function rc(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function ka(){return(OS()||Cp()||xm())&&!xS()&&Lm()&&!rc()}function Dm(){return xm()&&typeof document<"u"}async function bS(){return Dm()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},AS);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function US(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne={LOCAL:"local",NONE:"none",SESSION:"session"},jr=I,Mm="persistence";function FS(t,e){if(jr(Object.values(Ne).includes(e),t,"invalid-persistence-type"),Du()){jr(e!==Ne.SESSION,t,"unsupported-persistence-type");return}if(Tp()){jr(e===Ne.NONE,t,"unsupported-persistence-type");return}if(rc()){jr(e===Ne.NONE||e===Ne.LOCAL&&ns(),t,"unsupported-persistence-type");return}jr(e===Ne.NONE||Lm(),t,"unsupported-persistence-type")}async function Al(t){await t._initializationPromise;const e=bm(),n=yn(Mm,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function jS(t,e){const n=bm();if(!n)return[];const r=yn(Mm,t,e);switch(n.getItem(r)){case Ne.NONE:return[pr];case Ne.LOCAL:return[xi,Rn];case Ne.SESSION:return[Rn];default:return[]}}function bm(){var t;try{return((t=US())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=I;class bt{constructor(){this.browserResolver=Oe(nS),this.cordovaResolver=Oe(CS),this.underlyingResolver=null,this._redirectPersistence=Rn,this._completeRedirectFn=Ds,this._overrideRedirectResult=tc}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Dm()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return zS(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await bS();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t){return t.unwrap()}function BS(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(t){return Fm(t)}function VS(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new WS(t,CE(t,e))}else if(r){const i=Fm(e),o=e;i&&(o.credential=i,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function Fm(t){const{_tokenResponse:e}=t instanceof Re?t.customData:t;if(!e)return null;if(!(t instanceof Re)&&"temporaryProof"in e&&"phoneNumber"in e)return Pn.credentialFromResult(t);const n=e.providerId;if(!n||n===Fr.PASSWORD)return null;let r;switch(n){case Fr.GOOGLE:r=nt;break;case Fr.FACEBOOK:r=tt;break;case Fr.GITHUB:r=rt;break;case Fr.TWITTER:r=it;break;default:const{oauthIdToken:i,oauthAccessToken:o,oauthTokenSecret:s,pendingToken:a,nonce:l}=e;return!o&&!s&&!i&&!a?null:a?n.startsWith("saml.")?mr._create(n,a):lt._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:o}):new ir(n).credential({idToken:i,accessToken:o,rawNonce:l})}return t instanceof Re?r.credentialFromError(t):r.credentialFromResult(t)}function Ee(t,e){return e.catch(n=>{throw n instanceof Re&&VS(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:$S(n),additionalUserInfo:TE(n),user:pt.getOrCreate(i)}})}async function Ol(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ee(t,n.confirm(r))}}class WS{constructor(e,n){this.resolver=n,this.auth=BS(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ee(Um(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this._delegate=e,this.multiFactor=AE(e)}static getOrCreate(e){return pt.USER_MAP.has(e)||pt.USER_MAP.set(e,new pt(e)),pt.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ee(this.auth,fm(this._delegate,e))}async linkWithPhoneNumber(e,n){return Ol(this.auth,aI(this._delegate,e,n))}async linkWithPopup(e){return Ee(this.auth,gI(this._delegate,e,bt))}async linkWithRedirect(e){return await Al(J(this.auth)),TI(this._delegate,e,bt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ee(this.auth,hm(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Ol(this.auth,lI(this._delegate,e,n))}reauthenticateWithPopup(e){return Ee(this.auth,mI(this._delegate,e,bt))}async reauthenticateWithRedirect(e){return await Al(J(this.auth)),SI(this._delegate,e,bt)}sendEmailVerification(e){return pE(this._delegate,e)}async unlink(e){return await eE(this._delegate,e),this}updateEmail(e){return yE(this._delegate,e)}updatePassword(e){return wE(this._delegate,e)}updatePhoneNumber(e){return uI(this._delegate,e)}updateProfile(e){return vE(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return mE(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}pt.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=I;class xl{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;zr(r,"invalid-api-key",{appName:e.name}),zr(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?bt:void 0;this._delegate=n.initialize({options:{persistence:HS(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(i_),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?pt.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){M_(this._delegate,e,n)}applyActionCode(e){return oE(this._delegate,e)}checkActionCode(e){return pm(this._delegate,e)}confirmPasswordReset(e,n){return iE(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ee(this._delegate,aE(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return hE(this._delegate,e)}isSignInWithEmailLink(e){return cE(this._delegate,e)}async getRedirectResult(){zr(ka(),this._delegate,"operation-not-supported-in-this-environment");const e=await RI(this._delegate,bt);return e?Ee(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){RS(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:o,complete:s}=Jd(e,n,r);return this._delegate.onAuthStateChanged(i,o,s)}onIdTokenChanged(e,n,r){const{next:i,error:o,complete:s}=Jd(e,n,r);return this._delegate.onIdTokenChanged(i,o,s)}sendSignInLinkToEmail(e,n){return uE(this._delegate,e,n)}sendPasswordResetEmail(e,n){return rE(this._delegate,e,n||void 0)}async setPersistence(e){FS(this._delegate,e);let n;switch(e){case Ne.SESSION:n=Rn;break;case Ne.LOCAL:n=await Oe(xi)._isAvailable()?xi:Qu;break;case Ne.NONE:n=pr;break;default:return fe("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ee(this._delegate,Z_(this._delegate))}signInWithCredential(e){return Ee(this._delegate,As(this._delegate,e))}signInWithCustomToken(e){return Ee(this._delegate,nE(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ee(this._delegate,lE(this._delegate,e,n))}signInWithEmailLink(e,n){return Ee(this._delegate,dE(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Ol(this._delegate,sI(this._delegate,e,n))}async signInWithPopup(e){return zr(ka(),this._delegate,"operation-not-supported-in-this-environment"),Ee(this._delegate,pI(this._delegate,e,bt))}async signInWithRedirect(e){return zr(ka(),this._delegate,"operation-not-supported-in-this-environment"),await Al(this._delegate),EI(this._delegate,e,bt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return sE(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}xl.Persistence=Ne;function Jd(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:s=>i(s&&pt.getOrCreate(s)),error:e,complete:n}}function HS(t,e){const n=jS(t,e);if(typeof self<"u"&&!n.includes(xi)&&n.push(xi),typeof window<"u")for(const r of[Qu,Rn])n.includes(r)||n.push(r);return n.includes(pr)||n.push(pr),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this.providerId="phone",this._delegate=new Pn(Um(Sr.auth()))}static credential(e,n){return Pn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}ic.PHONE_SIGN_IN_METHOD=Pn.PHONE_SIGN_IN_METHOD;ic.PROVIDER_ID=Pn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=I;class GS{constructor(e,n,r=Sr.app()){var i;KS((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new iI(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS="auth-compat";function YS(t){t.INTERNAL.registerComponent(new Qt(qS,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new xl(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:bn.EMAIL_SIGNIN,PASSWORD_RESET:bn.PASSWORD_RESET,RECOVER_EMAIL:bn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:bn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:bn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:bn.VERIFY_EMAIL}},EmailAuthProvider:on,FacebookAuthProvider:tt,GithubAuthProvider:rt,GoogleAuthProvider:nt,OAuthProvider:ir,SAMLAuthProvider:os,PhoneAuthProvider:ic,PhoneMultiFactorGenerator:Om,RecaptchaVerifier:GS,TwitterAuthProvider:it,Auth:xl,AuthCredential:Cr,Error:Re}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(PS,NS)}YS(Sr);const QS={apiKey:"AIzaSyDAzR2BKT3KXZn_BVj2C0b6j848GMp5HyA",authDomain:"e-learning-dbbac.firebaseapp.com",projectId:"e-learning-dbbac",storageBucket:"e-learning-dbbac.appspot.com",messagingSenderId:"975024195855",appId:"1:975024195855:web:09a6fb2d53198cf926967a"};Sr.initializeApp(QS);const Ms=Sr.auth();let qr=null;const JS=async(t,e)=>{qr=null;try{const n=await Ms.signInWithEmailAndPassword(t,e);return qr=null,n}catch(n){qr=n.message,console.log(qr)}},XS=()=>({error:qr,login:JS});const ZS=t=>{var g,y;const[e,n]=S.useState(""),[r,i]=S.useState(""),[o,s]=S.useState(null),a=Fi(),u=((y=(g=rn().state)==null?void 0:g.from)==null?void 0:y.pathname)||"/dashboard",{error:c,login:f}=XS(),m=async v=>{if(v.preventDefault(),await f(e,r),c)s(c);else{a(u,{replace:!0}),n(""),i("");return}};return E.jsxs("div",{className:"form",children:[E.jsx("h2",{children:"Login to your account"}),E.jsxs("form",{onSubmit:m,className:"inputBody",children:[E.jsx("input",{type:"email",placeholder:"Email",value:e,onChange:v=>n(v.target.value)}),E.jsx("input",{type:"password",placeholder:"Password",value:r,onChange:v=>i(v.target.value)}),c&&E.jsx("p",{children:o}),E.jsx("button",{type:"submit",children:"Login"})]}),E.jsx("p",{children:"Have no account?"}),E.jsx("button",{onClick:t.toggleForm,children:"Sign Up"})]})};let Po=null;const ek=async(t,e)=>{Po=null;try{if(!await Ms.createUserWithEmailAndPassword(t,e))throw new Error("Something went wrong")}catch(n){Po=n.message,console.log(Po)}},tk=()=>({error:Po,signup:ek}),nk=t=>{var g,y;const[e,n]=S.useState(""),[r,i]=S.useState(""),[o,s]=S.useState(null),a=Fi(),u=((y=(g=rn().state)==null?void 0:g.from)==null?void 0:y.pathname)||"./dashboard",{error:c,signup:f}=tk(),m=async v=>{if(v.preventDefault(),await f(e,r),c)s(c);else{a(u,{replace:!0}),n(""),i("");return}};return E.jsxs("div",{className:"form",children:[E.jsx("h2",{children:"Create your account"}),E.jsxs("form",{onSubmit:m,className:"inputBody",children:[E.jsx("input",{type:"email",placeholder:"Email",value:e,onChange:v=>n(v.target.value)}),E.jsx("input",{type:"password",placeholder:"Password",value:r,onChange:v=>i(v.target.value)}),c&&E.jsx("p",{children:o}),E.jsx("button",{type:"submit",children:"Sign Up"})]}),E.jsx("p",{children:"Have an account?"}),E.jsx("button",{onClick:t.toggleForm,children:"Login"})]})},rk=()=>{const[t,e]=S.useState(!0),n=()=>{e(!t)};return E.jsx("div",{children:t?E.jsx(ZS,{toggleForm:n}):E.jsx(nk,{toggleForm:n})})},ik=()=>E.jsx("div",{children:"This page does not exist!"});let Ll=null;const ok=async()=>{Ll=null;try{await Ms.signOut()}catch(t){Ll=t.message}},sk=()=>({error:Ll,logout:ok});const ak=()=>{const t=Fi(),{error:e,logout:n}=sk(),r=async()=>{await n(),e||t("/")};return E.jsxs("section",{className:"dashboard",children:[E.jsxs("div",{className:"welcome",children:[E.jsx("h1",{children:"Welcome to Dashboard"}),E.jsx("button",{onClick:r,children:"Log Out"})]}),E.jsxs("div",{className:"courses",children:[E.jsx("iframe",{src:"https://www.youtube.com/embed/0fYi8SGA20k",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),E.jsx("iframe",{src:"https://www.youtube.com/embed/XxXyfkrP298",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),E.jsx("iframe",{src:"https://www.youtube.com/embed/I1cpb0tYV74",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),E.jsx("iframe",{src:"https://www.youtube.com/embed/FHTbsZEJspU",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),E.jsx("iframe",{src:"https://www.youtube.com/embed/CcBHZ0t2Qwc",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),E.jsx("iframe",{src:"https://www.youtube.com/embed/KBpoBc98BwM",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),E.jsx("iframe",{src:"https://www.youtube.com/embed/jx5hdo50a2M",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),E.jsx("iframe",{src:"https://www.youtube.com/embed/4mOkFXyxfsU",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),E.jsx("iframe",{src:"https://www.youtube.com/embed/1RHDhtbqo94",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]})},lk=()=>{const t=rn();return Ms.currentUser?E.jsx(r0,{}):E.jsx(n0,{to:"/authentication",state:{from:t},replace:!0})};const uk=()=>E.jsx("nav",{className:"nav",children:E.jsxs("div",{className:"nav__container",children:[E.jsx(Hr,{to:"./",children:E.jsx("h4",{children:"e-Learning Platform"})}),E.jsxs("ul",{className:"nav__menu",children:[E.jsx("li",{children:E.jsx(Hr,{to:"./",children:"Home"})}),E.jsx("li",{children:E.jsx(Hr,{to:"./dashboard",children:"Dashboard"})}),E.jsx("li",{children:E.jsx(Hr,{to:"./authentication",children:"Login"})})]})]})});function ck(){return E.jsxs(E.Fragment,{children:[E.jsx(uk,{}),E.jsxs(o0,{children:[E.jsx(Un,{path:"/",element:E.jsx(y0,{})}),E.jsx(Un,{path:"/authentication",element:E.jsx(rk,{})}),E.jsx(Un,{path:"*",element:E.jsx(ik,{})}),E.jsx(Un,{element:E.jsx(lk,{}),children:E.jsx(Un,{path:"/dashboard",element:E.jsx(ak,{})})})]})]})}Ta.createRoot(document.getElementById("root")).render(E.jsx(lf.StrictMode,{children:E.jsx(d0,{children:E.jsx(ck,{})})}));
