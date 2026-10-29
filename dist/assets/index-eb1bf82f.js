(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ru(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ne={},qr=[],Xt=()=>{},Dp=()=>!1,Wa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Qa=n=>n.startsWith("onUpdate:"),st=Object.assign,iu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Zy=Object.prototype.hasOwnProperty,xe=(n,e)=>Zy.call(n,e),ce=Array.isArray,ar=n=>lo(n)==="[object Map]",Yr=n=>lo(n)==="[object Set]",_d=n=>lo(n)==="[object Date]",ge=n=>typeof n=="function",Qe=n=>typeof n=="string",_n=n=>typeof n=="symbol",De=n=>n!==null&&typeof n=="object",kp=n=>(De(n)||ge(n))&&ge(n.then)&&ge(n.catch),Np=Object.prototype.toString,lo=n=>Np.call(n),ev=n=>lo(n).slice(8,-1),Op=n=>lo(n)==="[object Object]",su=n=>Qe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,xs=ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ja=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},tv=/-\w/g,Zt=Ja(n=>n.replace(tv,e=>e.slice(1).toUpperCase())),nv=/\B([A-Z])/g,ai=Ja(n=>n.replace(nv,"-$1").toLowerCase()),Mp=Ja(n=>n.charAt(0).toUpperCase()+n.slice(1)),Gl=Ja(n=>n?`on${Mp(n)}`:""),hn=(n,e)=>!Object.is(n,e),na=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Fp=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Ya=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let yd;const Xa=()=>yd||(yd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ou(n){if(ce(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],i=Qe(r)?ov(r):ou(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(Qe(n)||De(n))return n}const rv=/;(?![^(]*\))/g,iv=/:([^]+)/,sv=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function ov(n){const e={};return n.replace(sv,t=>t.startsWith("/*")?"":t).split(rv).forEach(t=>{if(t){const r=t.split(iv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ct(n){let e="";if(Qe(n))e=n;else if(ce(n))for(let t=0;t<n.length;t++){const r=ct(n[t]);r&&(e+=r+" ")}else if(De(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const av="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",lv=ru(av);function Lp(n){return!!n||n===""}function cv(n,e,t){if(n.length!==e.length)return!1;let r=!0;for(let i=0;r&&i<n.length;i++)r=gr(n[i],e[i],t);return r}function vd(n,e,t){if(n.size!==e.size)return!1;const r=Array.from(e),i=new Uint8Array(r.length);for(const s of n){let o=-1;for(let l=0;l<r.length;l++)if(!i[l]&&gr(s,r[l],t)){o=l;break}if(o<0)return!1;i[o]=1}return!0}function uv(n,e,t){let r=ar(n),i=ar(e);if(r||i||(r=Yr(n),i=Yr(e),r||i))return r&&i?vd(n,e,t):!1;const s=Object.keys(n).length,o=Object.keys(e).length;if(s!==o)return!1;for(const l in n){const c=n.hasOwnProperty(l),u=e.hasOwnProperty(l);if(c&&!u||!c&&u||!gr(n[l],e[l],t))return!1}return String(n)===String(e)}function bd(n,e,t,r){t||(t=[new Map,new Map]);const[i,s]=t;if(i.has(n)||s.has(e))return i.get(n)===e&&s.get(e)===n;i.set(n,e),s.set(e,n);const o=r(n,e,t);return i.delete(n),s.delete(e),o}function gr(n,e,t){if(n===e)return!0;let r=_d(n),i=_d(e);return r||i?r&&i?n.getTime()===e.getTime():!1:(r=_n(n),i=_n(e),r||i?n===e:(r=ce(n),i=ce(e),r||i?r&&i?bd(n,e,t,cv):!1:(r=De(n),i=De(e),r||i?!r||!i?!1:bd(n,e,t,uv):String(n)===String(e))))}function hv(n,e){return n.findIndex(t=>gr(t,e))}const Up=n=>!!(n&&n.__v_isRef===!0),ue=n=>Qe(n)?n:n==null?"":ce(n)||De(n)&&(n.toString===Np||!ge(n.toString))?Up(n)?ue(n.value):JSON.stringify(n,Bp,2):String(n),Bp=(n,e)=>Up(e)?Bp(n,e.value):ar(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,i],s)=>(t[Kl(r,s)+" =>"]=i,t),{})}:Yr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Kl(t))}:_n(e)?Kl(e):De(e)&&!ce(e)&&!Op(e)?String(e):e,Kl=(n,e="")=>{var t;return _n(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let lt;class dv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&lt&&(lt.active?(this.parent=lt,this.index=(lt.scopes||(lt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}const r=this.effects.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}}run(e){if(this._active){const t=lt;try{return lt=this,e()}finally{lt=t}}}on(){++this._on===1&&(this.prevScope=lt,lt=this)}off(){if(this._on>0&&--this._on===0){if(lt===this)lt=this.prevScope;else{let e=lt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const i=this.scopes.slice();for(t=0,r=i.length;t<r;t++)i[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function fv(){return lt}let Fe;const Hl=new WeakSet;class $p{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,lt&&(lt.active?lt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hl.has(this)&&(Hl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Id(this),zp(this);const e=Fe,t=en;Fe=this,en=!0;try{return this.fn()}finally{Gp(this),Fe=e,en=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)cu(e);this.deps=this.depsTail=void 0,Id(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gc(this)&&this.run()}get dirty(){return gc(this)}}let jp=0,As,Ss;function qp(n,e=!1){if(n.flags|=8,e){n.next=Ss,Ss=n;return}n.next=As,As=n}function au(){jp++}function lu(){if(--jp>0)return;if(Ss){let e=Ss;for(Ss=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;As;){let e=As;for(As=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function zp(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Gp(n){let e,t=n.depsTail,r=t;for(;r;){const i=r.prevDep;r.version===-1?(r===t&&(t=i),cu(r),pv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}n.deps=e,n.depsTail=t}function gc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Kp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Kp(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ls)||(n.globalVersion=Ls,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!gc(n))))return;n.flags|=2;const e=n.dep,t=Fe,r=en;Fe=n,en=!0;try{zp(n);const i=n.fn(n._value);(e.version===0||hn(i,n._value))&&(n.flags|=128,n._value=i,e.version++)}catch(i){throw e.version++,i}finally{Fe=t,en=r,Gp(n),n.flags&=-3}}function cu(n,e=!1){const{dep:t,prevSub:r,nextSub:i}=n;if(r&&(r.nextSub=i,n.prevSub=void 0),i&&(i.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)cu(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function pv(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let en=!0;const Hp=[];function yn(){Hp.push(en),en=!1}function vn(){const n=Hp.pop();en=n===void 0?!0:n}function Id(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Fe;Fe=void 0;try{e()}finally{Fe=t}}}let Ls=0;class mv{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class uu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Fe||!en||Fe===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Fe)t=this.activeLink=new mv(Fe,this),Fe.deps?(t.prevDep=Fe.depsTail,Fe.depsTail.nextDep=t,Fe.depsTail=t):Fe.deps=Fe.depsTail=t,Wp(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Fe.depsTail,t.nextDep=void 0,Fe.depsTail.nextDep=t,Fe.depsTail=t,Fe.deps===t&&(Fe.deps=r)}return t}trigger(e){this.version++,Ls++,this.notify(e)}notify(e){au();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{lu()}}}function Wp(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Wp(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const _c=new WeakMap,Kr=Symbol(""),yc=Symbol(""),Us=Symbol("");function gt(n,e,t){if(en&&Fe){let r=_c.get(n);r||_c.set(n,r=new Map);let i=r.get(t);i||(r.set(t,i=new uu),i.map=r,i.key=t),i.track()}}function Pn(n,e,t,r,i,s){const o=_c.get(n);if(!o){Ls++;return}const l=c=>{c&&c.trigger()};if(au(),e==="clear")o.forEach(l);else{const c=ce(n),u=c&&su(t);if(c&&t==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===Us||!_n(m)&&m>=d)&&l(p)})}else switch((t!==void 0||o.has(void 0))&&l(o.get(t)),u&&l(o.get(Us)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Kr)),ar(n)&&l(o.get(yc)));break;case"delete":c||(l(o.get(Kr)),ar(n)&&l(o.get(yc)));break;case"set":ar(n)&&l(o.get(Kr));break}}lu()}function mi(n){const e=Ae(n);return e===n||(gt(e,"iterate",Us),Gt(n))?e:bn(n)?lr(n)?e.map(t=>_r(Ht(t))):e.map(_r):e.map(Ht)}function Za(n){return gt(n=Ae(n),"iterate",Us),n}function ln(n,e){return bn(n)?_r(lr(n)?Ht(e):e):Ht(e)}const gv={__proto__:null,[Symbol.iterator](){return Wl(this,Symbol.iterator,n=>ln(this,n))},concat(...n){return mi(this).concat(...n.map(e=>ce(e)?mi(e):e))},entries(){return Wl(this,"entries",n=>(n[1]=ln(this,n[1]),n))},every(n,e){return An(this,"every",n,e,void 0,arguments)},filter(n,e){return An(this,"filter",n,e,t=>t.map(r=>ln(this,r)),arguments)},find(n,e){return An(this,"find",n,e,t=>ln(this,t),arguments)},findIndex(n,e){return An(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return An(this,"findLast",n,e,t=>ln(this,t),arguments)},findLastIndex(n,e){return An(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return An(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ql(this,"includes",n)},indexOf(...n){return Ql(this,"indexOf",n)},join(n){return mi(this).join(n)},lastIndexOf(...n){return Ql(this,"lastIndexOf",n)},map(n,e){return An(this,"map",n,e,void 0,arguments)},pop(){return hs(this,"pop")},push(...n){return hs(this,"push",n)},reduce(n,...e){return wd(this,"reduce",n,e)},reduceRight(n,...e){return wd(this,"reduceRight",n,e)},shift(){return hs(this,"shift")},some(n,e){return An(this,"some",n,e,void 0,arguments)},splice(...n){return hs(this,"splice",n)},toReversed(){return mi(this).toReversed()},toSorted(n){return mi(this).toSorted(n)},toSpliced(...n){return mi(this).toSpliced(...n)},unshift(...n){return hs(this,"unshift",n)},values(){return Wl(this,"values",n=>ln(this,n))}};function Wl(n,e,t){const r=Za(n),i=r[e],s=i.call(r);if(r!==n&&!Gt(n)){if(s[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(s));return o.next=()=>Ed(s.next(),t),i!==Qp[e]&&Object.defineProperties(o,{return:{get(){const l=s.return;return typeof l=="function"?l.bind(s):l}},throw:{get(){const l=s.throw;return typeof l=="function"?l.bind(s):l}}}),o}s._next=s.next,s.next=()=>Ed(s._next(),t)}return s}function Ed(n,e){return n.done||(n.value=e(n.value)),n}const Qp=Array.prototype;function An(n,e,t,r,i,s){const o=Za(n),l=o!==n&&!Gt(n),c=o[e];if(c!==Qp[e]){const p=c.apply(n,s);return l?Ht(p):p}let u=t;o!==n&&(l?u=function(p,m){return t.call(this,ln(n,p),m,n)}:t.length>2&&(u=function(p,m){return t.call(this,p,m,n)}));const d=c.call(o,u,r);return l&&i?i(d):d}function wd(n,e,t,r){const i=Za(n),s=i!==n&&!Gt(n);let o=t,l=!1;i!==n&&(s?(l=r.length===0,o=function(u,d,p){return l&&(l=!1,u=ln(n,u)),t.call(this,u,ln(n,d),p,n)}):t.length>3&&(o=function(u,d,p){return t.call(this,u,d,p,n)}));const c=i[e](o,...r);return l?ln(n,c):c}function Ql(n,e,t){const r=Ae(n);gt(r,"iterate",Us);const i=r[e](...t);return(i===-1||i===!1)&&pu(t[0])?(t[0]=Ae(t[0]),r[e](...t)):i}function hs(n,e,t=[]){yn(),au();const r=Ae(n)[e].apply(n,t);return lu(),vn(),r}const _v=ru("__proto__,__v_isRef,__isVue"),Jp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(_n));function yv(n){_n(n)||(n=String(n));const e=Ae(this);return gt(e,"has",n),e.hasOwnProperty(n)}class Yp{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const i=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return s;if(t==="__v_raw")return r===(i?s?Rv:tm:s?em:Zp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!i){let c;if(o&&(c=gv[t]))return c;if(t==="hasOwnProperty")return yv}const l=Reflect.get(e,t,vt(e)?e:r);if((_n(t)?Jp.has(t):_v(t))||(i||gt(e,"get",t),s))return l;if(vt(l)){const c=o&&su(t)?l:l.value;return i&&De(c)?bc(c):c}return De(l)?i?bc(l):du(l):l}}class Xp extends Yp{constructor(e=!1){super(!1,e)}set(e,t,r,i){let s=e[t];const o=ce(e)&&su(t);if(!this._isShallow){const u=bn(s);if(!Gt(r)&&!bn(r)&&(s=Ae(s),r=Ae(r)),!o&&vt(s)&&!vt(r))return u||(s.value=r),!0}const l=o?Number(t)<e.length:xe(e,t),c=Reflect.set(e,t,r,vt(e)?e:i);return e===Ae(i)&&c&&(l?hn(r,s)&&Pn(e,"set",t,r):Pn(e,"add",t,r)),c}deleteProperty(e,t){const r=xe(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&r&&Pn(e,"delete",t,void 0),i}has(e,t){const r=Reflect.has(e,t);return(!_n(t)||!Jp.has(t))&&gt(e,"has",t),r}ownKeys(e){return gt(e,"iterate",ce(e)?"length":Kr),Reflect.ownKeys(e)}}class vv extends Yp{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const bv=new Xp,Iv=new vv,Ev=new Xp(!0);const vc=n=>n,zo=n=>Reflect.getPrototypeOf(n);function wv(n,e,t){return function(...r){const i=this.__v_raw,s=Ae(i),o=ar(s),l=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=i[n](...r),d=t?vc:e?_r:Ht;return!e&&gt(s,"iterate",c?yc:Kr),st(Object.create(u),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}}})}}function Go(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Tv(n,e){const t={get(i){const s=this.__v_raw,o=Ae(s),l=Ae(i);n||(hn(i,l)&&gt(o,"get",i),gt(o,"get",l));const{has:c}=zo(o),u=e?vc:n?_r:Ht;if(c.call(o,i))return u(s.get(i));if(c.call(o,l))return u(s.get(l));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!n&&gt(Ae(i),"iterate",Kr),i.size},has(i){const s=this.__v_raw,o=Ae(s),l=Ae(i);return n||(hn(i,l)&&gt(o,"has",i),gt(o,"has",l)),i===l?s.has(i):s.has(i)||s.has(l)},forEach(i,s){const o=this,l=o.__v_raw,c=Ae(l),u=e?vc:n?_r:Ht;return!n&&gt(c,"iterate",Kr),l.forEach((d,p)=>i.call(s,u(d),u(p),o))}};return st(t,n?{add:Go("add"),set:Go("set"),delete:Go("delete"),clear:Go("clear")}:{add(i){const s=Ae(this),o=zo(s),l=Ae(i),c=!e&&!Gt(i)&&!bn(i)?l:i;return o.has.call(s,c)||hn(i,c)&&o.has.call(s,i)||hn(l,c)&&o.has.call(s,l)||(s.add(c),Pn(s,"add",c,c)),this},set(i,s){!e&&!Gt(s)&&!bn(s)&&(s=Ae(s));const o=Ae(this),{has:l,get:c}=zo(o);let u=l.call(o,i);u||(i=Ae(i),u=l.call(o,i));const d=c.call(o,i);return o.set(i,s),u?hn(s,d)&&Pn(o,"set",i,s):Pn(o,"add",i,s),this},delete(i){const s=Ae(this),{has:o,get:l}=zo(s);let c=o.call(s,i);c||(i=Ae(i),c=o.call(s,i)),l&&l.call(s,i);const u=s.delete(i);return c&&Pn(s,"delete",i,void 0),u},clear(){const i=Ae(this),s=i.size!==0,o=i.clear();return s&&Pn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=wv(i,n,e)}),t}function hu(n,e){const t=Tv(n,e);return(r,i,s)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_isShallow"?e:i==="__v_raw"?r:Reflect.get(xe(t,i)&&i in r?t:r,i,s)}const xv={get:hu(!1,!1)},Av={get:hu(!1,!0)},Sv={get:hu(!0,!1)};const Zp=new WeakMap,em=new WeakMap,tm=new WeakMap,Rv=new WeakMap;function Pv(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function du(n){return bn(n)?n:fu(n,!1,bv,xv,Zp)}function Cv(n){return fu(n,!1,Ev,Av,em)}function bc(n){return fu(n,!0,Iv,Sv,tm)}function fu(n,e,t,r,i){if(!De(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=i.get(n);if(s)return s;const o=Pv(ev(n));if(o===0)return n;const l=new Proxy(n,o===2?r:t);return i.set(n,l),l}function lr(n){return bn(n)?lr(n.__v_raw):!!(n&&n.__v_isReactive)}function bn(n){return!!(n&&n.__v_isReadonly)}function Gt(n){return!!(n&&n.__v_isShallow)}function pu(n){return n?!!n.__v_raw:!1}function Ae(n){const e=n&&n.__v_raw;return e?Ae(e):n}function Vv(n){return!xe(n,"__v_skip")&&Object.isExtensible(n)&&Fp(n,"__v_skip",!0),n}const Ht=n=>De(n)?du(n):n,_r=n=>De(n)?bc(n):n;function vt(n){return n?n.__v_isRef===!0:!1}function te(n){return Dv(n,!1)}function Dv(n,e){return vt(n)?n:new kv(n,e)}class kv{constructor(e,t){this.dep=new uu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ae(e),this._value=t?e:Ht(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Gt(e)||bn(e);e=r?e:Ae(e),hn(e,t)&&(this._rawValue=e,this._value=r?e:Ht(e),this.dep.trigger())}}function Nv(n){return vt(n)?n.value:n}const Ov={get:(n,e,t)=>e==="__v_raw"?n:Nv(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const i=n[e];return vt(i)&&!vt(t)?(i.value=t,!0):Reflect.set(n,e,t,r)}};function nm(n){return lr(n)?n:new Proxy(n,Ov)}class Mv{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new uu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ls-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Fe!==this)return qp(this,!0),!0}get value(){const e=this.dep.track();return Kp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Fv(n,e,t=!1){let r,i;return ge(n)?r=n:(r=n.get,i=n.set),new Mv(r,i,t)}const Ko={},va=new WeakMap;let Or;function Lv(n,e=!1,t=Or){if(t){let r=va.get(t);r||va.set(t,r=[]),r.push(n)}}function Uv(n,e,t=Ne){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:l,call:c}=t,u=$=>i?$:Gt($)||i===!1||i===0?Cn($,1):Cn($);let d,p,m,y,x=!1,R=!1;if(vt(n)?(p=()=>n.value,x=Gt(n)):lr(n)?(p=()=>u(n),x=!0):ce(n)?(R=!0,x=n.some($=>lr($)||Gt($)),p=()=>n.map($=>{if(vt($))return $.value;if(lr($))return u($);if(ge($))return c?c($,2):$()})):ge(n)?e?p=c?()=>c(n,2):n:p=()=>{if(m){yn();try{m()}finally{vn()}}const $=Or;Or=d;try{return c?c(n,3,[y]):n(y)}finally{Or=$}}:p=Xt,e&&i){const $=p,L=i===!0?1/0:i;p=()=>Cn($(),L)}const D=fv(),G=()=>{d.stop(),D&&D.active&&iu(D.effects,d)};if(s&&e){const $=e;e=(...L)=>{try{return $(...L)}finally{G()}}}let q=R?new Array(n.length).fill(Ko):Ko;const K=$=>{if(!(!(d.flags&1)||!d.dirty&&!$))if(e){const L=d.run();if($||i||x||(R?L.some((k,T)=>hn(k,q[T])):hn(L,q))){const k=Or;yn();try{m&&m(),Or=d;const T=[L,q===Ko?void 0:R&&q[0]===Ko?[]:q,y];q=L,c?c(e,3,T):e(...T)}finally{Or=k,vn()}}}else d.run()};return l&&l(K),d=new $p(p),d.scheduler=o?()=>o(K,!1):K,y=$=>Lv($,!1,d),m=d.onStop=()=>{const $=va.get(d);if($){if(c)c($,4);else for(const L of $)L();va.delete(d)}},e?r?K(!0):q=d.run():o?o(K.bind(null,!0),!0):d.run(),G.pause=d.pause.bind(d),G.resume=d.resume.bind(d),G.stop=G,G}function Cn(n,e=1/0,t){if(e<=0||!De(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,vt(n))Cn(n.value,e,t);else if(ce(n))for(let r=0;r<n.length;r++)Cn(n[r],e,t);else if(Yr(n)||ar(n))n.forEach(r=>{Cn(r,e,t)});else if(Op(n)){for(const r in n)Cn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Cn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function co(n,e,t,r){try{return r?n(...r):n()}catch(i){el(i,e,t)}}function nn(n,e,t,r){if(ge(n)){const i=co(n,e,t,r);return i&&kp(i)&&i.catch(s=>{el(s,e,t)}),i}if(ce(n)){const i=[];for(let s=0;s<n.length;s++)i.push(nn(n[s],e,t,r));return i}}function el(n,e,t,r=!0){const i=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,c,u)===!1)return}l=l.parent}if(s){yn(),co(s,null,10,[n,c,u]),vn();return}}Bv(n,t,i,r,o)}function Bv(n,e,t,r=!0,i=!1){if(i)throw n;console.error(n)}const xt=[];let Yt=-1;const cn=[];let tr=null,bi=0;const rm=Promise.resolve();let ba=null;function im(n){const e=ba||rm;return n?e.then(this?n.bind(this):n):e}function $v(n){let e=Yt+1,t=xt.length;for(;e<t;){const r=e+t>>>1,i=xt[r],s=Bs(i);s<n||s===n&&i.flags&2?e=r+1:t=r}return e}function mu(n){if(!(n.flags&1)){const e=Bs(n),t=xt[xt.length-1];!t||!(n.flags&2)&&e>=Bs(t)?xt.push(n):xt.splice($v(e),0,n),n.flags|=1,sm()}}function sm(){ba||(ba=rm.then(lm))}function jv(n){if(!ce(n))tr&&n.id===-1?tr.splice(bi+1,0,n):n.flags&1||(cn.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)cn.push(n[e]);sm()}function om(n,e,t,r=Yt+1){for(;r<xt.length;r++){const i=xt[r];if(i&&i.flags&2){if(n&&i.id!==n.uid||e!==void 0&&!(i.id>=e))continue;xt.splice(r,1),r=n?r-1:Yt,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function am(n,e,t=0){if(cn.length){let r=cn,i=0;if(e){r=[];for(let o=0;o<cn.length;o++){const l=cn[o];(l.i!==void 0?!l.i||l.i.uid<t:e.has(l))?cn[i++]=l:r.push(l)}}const s=[...new Set(r)].sort((o,l)=>Bs(o)-Bs(l));if(cn.length=i,tr){for(let o=0;o<s.length;o++)tr.push(s[o]);return}for(tr=s,bi=0;bi<tr.length;bi++){const o=tr[bi];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}tr=null,bi=0}}let Jl=!1;function qv(n,e){if(Jl){n();return}const t=e===void 0?void 0:new Set(cn);n(),Jl=!0;try{om(void 0,e),am(void 0,t,e)}finally{Jl=!1}}const Bs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function lm(n){const e=Xt;try{for(Yt=0;Yt<xt.length;Yt++){const t=xt[Yt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),co(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Yt<xt.length;Yt++){const t=xt[Yt];t&&(t.flags&=-2)}Yt=-1,xt.length=0,am(),ba=null,(xt.length||cn.length)&&lm()}}let qt=null,cm=null;function Ia(n){const e=qt;return qt=n,cm=n&&n.type.__scopeId||null,e}function zv(n,e=qt,t){if(!e||n._n)return n;const r=(...i)=>{r._d&&kd(-1);const s=Ia(e),o=Hr.length;let l;try{l=n(...i)}finally{for(let c=Hr.length;c>o;c--)Vm();Ia(s),r._d&&kd(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function Te(n,e){if(qt===null)return n;const t=sl(qt),r=n.dirs||(n.dirs=[]);for(let i=0;i<e.length;i++){let[s,o,l,c=Ne]=e[i];s&&(ge(s)&&(s={mounted:s,updated:s}),s.deep&&Cn(o),r.push({dir:s,instance:t,value:o,oldValue:void 0,arg:l,modifiers:c}))}return n}function Dr(n,e,t,r){const i=n.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];s&&(l.oldValue=s[o].value);let c=l.dir[r];c&&(yn(),nn(c,t,8,[n.el,l,n,e]),vn())}}function Gv(n,e){if(At){let t=At.provides;const r=At.parent&&At.parent.provides;r===t&&(t=At.provides=Object.create(r)),t[n]=e}}function ra(n,e,t=!1){const r=jb();if(r||Si){let i=Si?Si._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&n in i)return i[n];if(arguments.length>1)return t&&ge(e)?e.call(r&&r.proxy):e}}const Kv=Symbol.for("v-scx"),Hv=()=>ra(Kv);function Ai(n,e,t){return um(n,e,t)}function um(n,e,t=Ne){const{immediate:r,deep:i,flush:s,once:o}=t,l=st({},t),c=e&&r||!e&&s!=="post";let u;if(zs){if(s==="sync"){const y=Hv();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=Xt,y.resume=Xt,y.pause=Xt,y}}const d=At;l.call=(y,x,R)=>nn(y,d,x,R);let p=!1;s==="post"?l.scheduler=y=>{y.i=d,Dt(y,d&&d.suspense)}:s!=="sync"&&(p=!0,l.scheduler=(y,x)=>{x?y():mu(y)}),l.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,d&&(y.id=d.uid,y.i=d))};const m=Uv(n,e,l);return zs&&(u?u.push(m):c&&m()),m}function Wv(n,e,t){const r=this.proxy,i=Qe(n)?n.includes(".")?hm(r,n):()=>r[n]:n.bind(r,r);let s;ge(e)?s=e:(s=e.handler,t=e);const o=uo(this),l=um(i,s.bind(r),t);return o(),l}function hm(n,e){const t=e.split(".");return()=>{let r=n;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}const Qv=Symbol("_vte"),tl=n=>n.__isTeleport,Yl=Symbol("_leaveCb");function Jv(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==rn){e=t;break}}return e}function dm(n){if(!gu(n))return tl(n.type)&&n.children?Jv(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ge(t.default))return t.default()}}function Ea(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Ea(tl(t.type)&&dm(t)||t,e)}else if(n.shapeFlag&128)n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback);else if(n.transition=e,n.type===je&&ce(n.children)){const t=ym(n.children,!1);t&&Ea(t,e)}}function Ic(n){if(n.component)return Ic(n.component.subTree);if(n.type===je){const e=ce(n.children)&&ym(n.children,!1);return e?Ic(e):void 0}if(n.type!==rn)return n}function fm(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Td(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const wa=new WeakMap;function Rs(n,e,t,r,i=!1){if(ce(n)){n.forEach((R,D)=>Rs(R,e&&(ce(e)?e[D]:e),t,r,i));return}if(Ps(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Rs(n,e,t,r.component.subTree);return}const s=r.shapeFlag&4?sl(r.component):r.el,o=i?null:s,{i:l,r:c}=n,u=e&&e.r,d=l.refs===Ne?l.refs={}:l.refs,p=l.setupState,m=Ae(p),y=p===Ne?Dp:R=>Td(d,R)?!1:xe(m,R),x=(R,D)=>!(D&&Td(d,D));if(u!=null&&u!==c){if(xd(e),Qe(u))d[u]=null,y(u)&&(p[u]=null);else if(vt(u)){const R=e;x(u,R.k)&&(u.value=null),R.k&&(d[R.k]=null)}}if(ge(c))co(c,l,12,[o,d]);else{const R=Qe(c),D=vt(c);if(R||D){const G=()=>{if(n.f){const q=R?y(c)?p[c]:d[c]:x()||!n.k?c.value:d[n.k];if(i)ce(q)&&iu(q,s);else if(ce(q))q.includes(s)||q.push(s);else if(R)d[c]=[s],y(c)&&(p[c]=d[c]);else{const K=[s];x(c,n.k)&&(c.value=K),n.k&&(d[n.k]=K)}}else R?(d[c]=o,y(c)&&(p[c]=o)):D&&(x(c,n.k)&&(c.value=o),n.k&&(d[n.k]=o))};if(o){const q=()=>{G(),wa.delete(n)};q.id=-1,wa.set(n,q),Dt(q,t)}else xd(n),G()}}}function xd(n){const e=wa.get(n);e&&(e.flags|=8,wa.delete(n))}Xa().requestIdleCallback;Xa().cancelIdleCallback;const Ps=n=>!!n.type.__asyncLoader,gu=n=>n.type.__isKeepAlive;function Yv(n,e){pm(n,"a",e)}function Xv(n,e){pm(n,"da",e)}function pm(n,e,t=At){const r=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(nl(e,r,t),t){let i=t.parent;for(;i&&i.parent;)gu(i.parent.vnode)&&Zv(r,e,t,i),i=i.parent}}function Zv(n,e,t,r){const i=nl(e,n,r,!0);Er(()=>{iu(r[e],i)},t)}function nl(n,e,t=At,r=!1){if(t){const i=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{yn();const l=uo(t),c=nn(e,t,n,o);return l(),vn(),c});return r?i.unshift(s):i.push(s),s}}const $n=n=>(e,t=At)=>{(!zs||n==="sp")&&nl(n,(...r)=>e(...r),t)},eb=$n("bm"),jn=$n("m"),tb=$n("bu"),nb=$n("u"),rb=$n("bum"),Er=$n("um"),ib=$n("sp"),sb=$n("rtg"),ob=$n("rtc");function ab(n,e=At){nl("ec",n,e)}const lb=Symbol.for("v-ndc");function Ut(n,e,t,r){let i;const s=t&&t[r],o=ce(n);if(o||Qe(n)){const l=o&&lr(n);let c=!1,u=!1;l&&(c=!Gt(n),u=bn(n),n=Za(n)),i=new Array(n.length);for(let d=0,p=n.length;d<p;d++)i[d]=e(c?u?_r(Ht(n[d])):Ht(n[d]):n[d],d,void 0,s&&s[d])}else if(typeof n=="number")if(!Number.isInteger(n)||n<0)i=[];else{i=new Array(n);for(let l=0;l<n;l++)i[l]=e(l+1,l,void 0,s&&s[l])}else if(De(n))if(n[Symbol.iterator])i=Array.from(n,(l,c)=>e(l,c,void 0,s&&s[c]));else{const l=Object.keys(n);i=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];i[c]=e(n[d],d,c,s&&s[c])}}else i=[];return t&&(t[r]=i),i}const Ec=n=>n?Om(n)?sl(n):Ec(n.parent):null,Cs=st(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ec(n.parent),$root:n=>Ec(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>_u(n),$forceUpdate:n=>n.f||(n.f=()=>{mu(n.update)}),$nextTick:n=>n.n||(n.n=im.bind(n.proxy)),$watch:n=>Wv.bind(n)}),Xl=(n,e)=>n!==Ne&&!n.__isScriptSetup&&xe(n,e),cb={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:i,props:s,accessCache:o,type:l,appContext:c}=n;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(Xl(r,e))return o[e]=1,r[e];if(i!==Ne&&xe(i,e))return o[e]=2,i[e];if(xe(s,e))return o[e]=3,s[e];if(t!==Ne&&xe(t,e))return o[e]=4,t[e];wc&&(o[e]=0)}}const u=Cs[e];let d,p;if(u)return e==="$attrs"&&gt(n.attrs,"get",""),u(n);if((d=l.__cssModules)&&(d=d[e]))return d;if(t!==Ne&&xe(t,e))return o[e]=4,t[e];if(p=c.config.globalProperties,xe(p,e))return p[e]},set({_:n},e,t){const{data:r,setupState:i,ctx:s}=n;return Xl(i,e)?(i[e]=t,!0):r!==Ne&&xe(r,e)?(r[e]=t,!0):xe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:i,props:s,type:o}},l){let c;return!!(t[l]||n!==Ne&&l[0]!=="$"&&xe(n,l)||Xl(e,l)||xe(s,l)||xe(r,l)||xe(Cs,l)||xe(i.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:xe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ad(n){return ce(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let wc=!0;function ub(n){const e=_u(n),t=n.proxy,r=n.ctx;wc=!1,e.beforeCreate&&Sd(e.beforeCreate,n,"bc");const{data:i,computed:s,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:y,updated:x,activated:R,deactivated:D,beforeDestroy:G,beforeUnmount:q,destroyed:K,unmounted:$,render:L,renderTracked:k,renderTriggered:T,errorCaptured:b,serverPrefetch:v,expose:E,inheritAttrs:S,components:P,directives:w,filters:Me}=e;if(u&&hb(u,r,null),o)for(const Pe in o){const Ee=o[Pe];ge(Ee)&&(r[Pe]=Ee.bind(t))}if(i){const Pe=i.call(t,t);De(Pe)&&(n.data=du(Pe))}if(wc=!0,s)for(const Pe in s){const Ee=s[Pe],Wt=ge(Ee)?Ee.bind(t,t):ge(Ee.get)?Ee.get.bind(t,t):Xt,xr=!ge(Ee)&&ge(Ee.set)?Ee.set.bind(t):Xt,wn=Fm({get:Wt,set:xr});Object.defineProperty(r,Pe,{enumerable:!0,configurable:!0,get:()=>wn.value,set:Ye=>wn.value=Ye})}if(l)for(const Pe in l)mm(l[Pe],r,t,Pe);if(c){const Pe=ge(c)?c.call(t):c;Reflect.ownKeys(Pe).forEach(Ee=>{Gv(Ee,Pe[Ee])})}d&&Sd(d,n,"c");function Le(Pe,Ee){ce(Ee)?Ee.forEach(Wt=>Pe(Wt.bind(t))):Ee&&Pe(Ee.bind(t))}if(Le(eb,p),Le(jn,m),Le(tb,y),Le(nb,x),Le(Yv,R),Le(Xv,D),Le(ab,b),Le(ob,k),Le(sb,T),Le(rb,q),Le(Er,$),Le(ib,v),ce(E))if(E.length){const Pe=n.exposed||(n.exposed={});E.forEach(Ee=>{Object.defineProperty(Pe,Ee,{get:()=>t[Ee],set:Wt=>t[Ee]=Wt,enumerable:!0})})}else n.exposed||(n.exposed={});L&&n.render===Xt&&(n.render=L),S!=null&&(n.inheritAttrs=S),P&&(n.components=P),w&&(n.directives=w),v&&fm(n)}function hb(n,e,t=Xt){ce(n)&&(n=Tc(n));for(const r in n){const i=n[r];let s;De(i)?"default"in i?s=ra(i.from||r,i.default,!0):s=ra(i.from||r):s=ra(i),vt(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Sd(n,e,t){nn(ce(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function mm(n,e,t,r){let i=r.includes(".")?hm(t,r):()=>t[r];if(Qe(n)){const s=e[n];ge(s)&&Ai(i,s)}else if(ge(n))Ai(i,n.bind(t));else if(De(n))if(ce(n))n.forEach(s=>mm(s,e,t,r));else{const s=ge(n.handler)?n.handler.bind(t):e[n.handler];ge(s)&&Ai(i,s,n)}}function _u(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,l=s.get(e);let c;return l?c=l:!i.length&&!t&&!r?c=e:(c={},i.length&&i.forEach(u=>Ta(c,u,o,!0)),Ta(c,e,o)),De(e)&&s.set(e,c),c}function Ta(n,e,t,r=!1){const{mixins:i,extends:s}=e;s&&Ta(n,s,t,!0),i&&i.forEach(o=>Ta(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const l=db[o]||t&&t[o];n[o]=l?l(n[o],e[o]):e[o]}return n}const db={data:Rd,props:Pd,emits:Pd,methods:ys,computed:ys,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:ys,directives:ys,watch:pb,provide:Rd,inject:fb};function Rd(n,e){return e?n?function(){return st(ge(n)?n.call(this,this):n,ge(e)?e.call(this,this):e)}:e:n}function fb(n,e){return ys(Tc(n),Tc(e))}function Tc(n){if(ce(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function wt(n,e){return n?[...new Set([].concat(n,e))]:e}function ys(n,e){return n?st(Object.create(null),n,e):e}function Pd(n,e){return n?ce(n)&&ce(e)?[...new Set([...n,...e])]:st(Object.create(null),Ad(n),Ad(e??{})):e}function pb(n,e){if(!n)return e;if(!e)return n;const t=st(Object.create(null),n);for(const r in e)t[r]=wt(n[r],e[r]);return t}function gm(){return{app:null,config:{isNativeTag:Dp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mb=0;function gb(n,e){return function(r,i=null){ge(r)||(r=st({},r)),i!=null&&!De(i)&&(i=null);const s=gm(),o=new WeakSet,l=[];let c=!1;const u=s.app={_uid:mb++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Wb,get config(){return s.config},set config(d){},use(d,...p){return o.has(d)||(d&&ge(d.install)?(o.add(d),d.install(u,...p)):ge(d)&&(o.add(d),d(u,...p))),u},mixin(d){return s.mixins.includes(d)||s.mixins.push(d),u},component(d,p){return p?(s.components[d]=p,u):s.components[d]},directive(d,p){return p?(s.directives[d]=p,u):s.directives[d]},mount(d,p,m){if(!c){const y=u._ceVNode||Bt(r,i);return y.appContext=s,m===!0?m="svg":m===!1&&(m=void 0),p&&e?e(y,d):n(y,d,m),c=!0,u._container=d,d.__vue_app__=u,sl(y.component)}},onUnmount(d){l.push(d)},unmount(){c&&(nn(l,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(d,p){return s.provides[d]=p,u},runWithContext(d){const p=Si;Si=u;try{return d()}finally{Si=p}}};return u}}let Si=null;const _b=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Zt(e)}Modifiers`]||n[`${ai(e)}Modifiers`];function yb(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ne;let i=t;const s=e.startsWith("update:"),o=s&&_b(r,e.slice(7));o&&(o.trim&&(i=t.map(d=>Qe(d)?d.trim():d)),o.number&&(i=i.map(Ya)));let l,c=r[l=Gl(e)]||r[l=Gl(Zt(e))];!c&&s&&(c=r[l=Gl(ai(e))]),c&&nn(c,n,6,i);const u=r[l+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,nn(u,n,6,i)}}const vb=new WeakMap;function _m(n,e,t=!1){const r=t?vb:e.emitsCache,i=r.get(n);if(i!==void 0)return i;const s=n.emits;let o={},l=!1;if(!ge(n)){const c=u=>{const d=_m(u,e,!0);d&&(l=!0,st(o,d))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!l?(De(n)&&r.set(n,null),null):(ce(s)?s.forEach(c=>o[c]=null):st(o,s),De(n)&&r.set(n,o),o)}function rl(n,e){return!n||!Wa(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),xe(n,e[0].toLowerCase()+e.slice(1))||xe(n,ai(e))||xe(n,e))}function Zl(n){const{type:e,vnode:t,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:y,ctx:x,inheritAttrs:R}=n,D=Ia(n);let G,q;try{if(t.shapeFlag&4){const $=i||r,L=$;G=un(u.call(L,$,d,p,y,m,x)),q=l}else{const $=e;G=un($.length>1?$(p,{attrs:l,slots:o,emit:c}):$(p,null)),q=e.props?l:bb(l)}}catch($){Hr.length=0,el($,n,1),G=Bt(rn)}let K=G;if(q&&R!==!1){const $=Object.keys(q),{shapeFlag:L}=K;$.length&&L&7&&(s&&$.some(Qa)&&(q=Ib(q,s)),K=Di(K,q,!1,!0))}if(t.dirs&&(K=Di(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(t.dirs):t.dirs),t.transition){const $=tl(K.type)&&dm(K)||K;Ea($,t.transition)}return G=K,Ia(D),G}function ym(n,e=!0){let t;for(let r=0;r<n.length;r++){const i=n[r];if(bu(i)){if(i.type!==rn||i.children==="v-if"){if(t)return;t=i}}else return}return t}const bb=n=>{let e;for(const t in n)(t==="class"||t==="style"||Wa(t))&&((e||(e={}))[t]=n[t]);return e},Ib=(n,e)=>{const t={};for(const r in n)(!Qa(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function Eb(n,e,t){const{props:r,children:i,component:s}=n,{props:o,children:l,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Cd(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(vm(o,r,m)&&!rl(u,m))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Cd(r,o,u):!0:!!o;return!1}function Cd(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(!xe(n,s)||vm(e,n,s)&&!rl(t,s))return!0}return!1}function vm(n,e,t){const r=n[t],i=e[t];return t==="style"&&De(r)&&De(i)?!gr(r,i):r!==i}function wb({vnode:n,parent:e,suspense:t},r){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.suspense.vnode.el=i.el=r,n=i),i===n)(n=e.vnode).el=r,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=r)}const bm={},Im=()=>Object.create(bm),Em=n=>Object.getPrototypeOf(n)===bm;function Tb(n,e,t,r=!1){const i={},s=Im();n.propsDefaults=Object.create(null),wm(n,e,i,s);for(const o in n.propsOptions[0])o in i||(i[o]=void 0);t?n.props=r?i:Cv(i):n.type.props?n.props=i:n.props=s,n.attrs=s}function xb(n,e,t,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=n,l=Ae(i),[c]=n.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(rl(n.emitsOptions,m))continue;const y=e[m];if(c)if(xe(s,m))y!==s[m]&&(s[m]=y,u=!0);else{const x=Zt(m);i[x]=xc(c,l,x,y,n,!1)}else y!==s[m]&&(s[m]=y,u=!0)}}}else{wm(n,e,i,s)&&(u=!0);let d;for(const p in l)(!e||!xe(e,p)&&((d=ai(p))===p||!xe(e,d)))&&(c?t&&(t[p]!==void 0||t[d]!==void 0)&&(i[p]=xc(c,l,p,void 0,n,!0)):delete i[p]);if(s!==l)for(const p in s)(!e||!xe(e,p))&&(delete s[p],u=!0)}u&&Pn(n.attrs,"set","")}function wm(n,e,t,r){const[i,s]=n.propsOptions;let o=!1,l;if(e)for(let c in e){if(xs(c))continue;const u=e[c];let d;i&&xe(i,d=Zt(c))?!s||!s.includes(d)?t[d]=u:(l||(l={}))[d]=u:rl(n.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(s){const c=Ae(t),u=l||Ne;for(let d=0;d<s.length;d++){const p=s[d];t[p]=xc(i,c,p,u[p],n,!xe(u,p))}}return o}function xc(n,e,t,r,i,s){const o=n[t];if(o!=null){const l=xe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:u}=i;if(t in u)r=u[t];else{const d=uo(i);r=u[t]=c.call(null,e),d()}}else r=c;i.ce&&i.ce._setProp(t,r)}o[0]&&(s&&!l?r=!1:o[1]&&(r===""||r===ai(t))&&(r=!0))}return r}const Ab=new WeakMap;function Tm(n,e,t=!1){const r=t?Ab:e.propsCache,i=r.get(n);if(i)return i;const s=n.props,o={},l=[];let c=!1;if(!ge(n)){const d=p=>{c=!0;const[m,y]=Tm(p,e,!0);st(o,m),y&&l.push(...y)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!s&&!c)return De(n)&&r.set(n,qr),qr;if(ce(s))for(let d=0;d<s.length;d++){const p=Zt(s[d]);Vd(p)&&(o[p]=Ne)}else if(s)for(const d in s){const p=Zt(d);if(Vd(p)){const m=s[d],y=o[p]=ce(m)||ge(m)?{type:m}:st({},m),x=y.type;let R=!1,D=!0;if(ce(x))for(let G=0;G<x.length;++G){const q=x[G],K=ge(q)&&q.name;if(K==="Boolean"){R=!0;break}else K==="String"&&(D=!1)}else R=ge(x)&&x.name==="Boolean";y[0]=R,y[1]=D,(R||xe(y,"default"))&&l.push(p)}}const u=[o,l];return De(n)&&r.set(n,u),u}function Vd(n){return n[0]!=="$"&&!xs(n)}const yu=n=>n==="_"||n==="_ctx"||n==="$stable",vu=n=>ce(n)?n.map(un):[un(n)],Sb=(n,e,t)=>{if(e._n)return e;const r=zv((...i)=>vu(e(...i)),t);return r._c=!1,r},xm=(n,e,t)=>{const r=n._ctx;for(const i in n){if(yu(i))continue;const s=n[i];if(ge(s))e[i]=Sb(i,s,r);else if(s!=null){const o=vu(s);e[i]=()=>o}}},Am=(n,e)=>{const t=vu(e);n.slots.default=()=>t},Sm=(n,e,t)=>{for(const r in e)(t||!yu(r))&&(n[r]=e[r])},Rb=(n,e,t)=>{const r=n.slots=Im();if(n.vnode.shapeFlag&32){const i=e._;i?(Sm(r,e,t),t&&Fp(r,"_",i,!0)):xm(e,r)}else e&&Am(n,e)},Pb=(n,e,t)=>{const{vnode:r,slots:i}=n;let s=!0,o=Ne;if(r.shapeFlag&32){const l=e._;l?t&&l===1?s=!1:Sm(i,e,t):(s=!e.$stable,xm(e,i)),o=e}else e&&(Am(n,e),o={default:1});if(s)for(const l in i)!yu(l)&&o[l]==null&&delete i[l]},Dt=Nb;function Cb(n){return Vb(n)}function Vb(n,e){const t=Xa();t.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:y=Xt,insertStaticContent:x}=n,R=(I,A,O,j=null,U=null,B=null,Q=void 0,W=null,H=!!A.dynamicChildren)=>{if(I===A)return;I&&!ds(I,A)&&(j=sn(I),Ye(I,U,B,!0),I=null),A.patchFlag===-2&&(H=!1,A.dynamicChildren=null),A.dynamicChildren&&I&&I.dynamicChildren&&I.dynamicChildren.hasOnce&&(A.dynamicChildren===qr&&(A.dynamicChildren=[]),A.dynamicChildren.hasOnce=!0);const{type:F,ref:se,shapeFlag:X}=A;switch(F){case il:D(I,A,O,j);break;case rn:G(I,A,O,j);break;case ia:I==null&&q(A,O,j,Q);break;case je:P(I,A,O,j,U,B,Q,W,H);break;default:X&1?L(I,A,O,j,U,B,Q,W,H):X&6?w(I,A,O,j,U,B,Q,W,H):(X&64||X&128)&&F.process(I,A,O,j,U,B,Q,W,H,Kn)}se!=null&&U?Rs(se,I&&I.ref,B,A||I,!A):se==null&&I&&I.ref!=null&&Rs(I.ref,null,B,I,!0)},D=(I,A,O,j)=>{if(I==null)r(A.el=l(A.children),O,j);else{const U=A.el=I.el;A.children!==I.children&&u(U,A.children)}},G=(I,A,O,j)=>{I==null?r(A.el=c(A.children||""),O,j):A.el=I.el},q=(I,A,O,j)=>{[I.el,I.anchor]=x(I.children,A,O,j,I.el,I.anchor)},K=({el:I,anchor:A},O,j)=>{let U;for(;I&&I!==A;)U=m(I),r(I,O,j),I=U;r(A,O,j)},$=({el:I,anchor:A})=>{let O;for(;I&&I!==A;)O=m(I),i(I),I=O;i(A)},L=(I,A,O,j,U,B,Q,W,H)=>{if(A.type==="svg"?Q="svg":A.type==="math"&&(Q="mathml"),I==null)k(A,O,j,U,B,Q,W,H);else{const F=I.el&&I.el._isVueCE?I.el:null;try{F&&F._beginPatch(),v(I,A,U,B,Q,W,H)}finally{F&&F._endPatch()}}},k=(I,A,O,j,U,B,Q,W)=>{let H,F;const{props:se,shapeFlag:X,transition:ie,dirs:le}=I;if(H=I.el=o(I.type,B,se&&se.is,se),X&8?d(H,I.children):X&16&&b(I.children,H,null,j,U,ec(I,B),Q,W),le&&Dr(I,null,j,"created"),T(H,I,I.scopeId,Q,j),se){for(const fe in se)fe!=="value"&&!xs(fe)&&s(H,fe,null,se[fe],B,j);"value"in se&&s(H,"value",null,se.value,B),(F=se.onVnodeBeforeMount)&&on(F,j,I)}le&&Dr(I,null,j,"beforeMount");const ye=Db(U,ie);ye&&ie.beforeEnter(H),r(H,A,O),((F=se&&se.onVnodeMounted)||ye||le)&&Dt(()=>{try{F&&on(F,j,I),ye&&ie.enter(H),le&&Dr(I,null,j,"mounted")}finally{}},U)},T=(I,A,O,j,U)=>{if(O&&y(I,O),j)for(let B=0;B<j.length;B++)y(I,j[B]);if(U){let B=U.subTree;if(A===B||Cm(B.type)&&(B.ssContent===A||B.ssFallback===A)){const Q=U.vnode;T(I,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},b=(I,A,O,j,U,B,Q,W,H=0)=>{for(let F=H;F<I.length;F++){const se=I[F]=W?Rn(I[F]):un(I[F]);R(null,se,A,O,j,U,B,Q,W)}},v=(I,A,O,j,U,B,Q)=>{const W=A.el=I.el;let{patchFlag:H,dynamicChildren:F,dirs:se}=A;H|=I.patchFlag&16;const X=I.props||Ne,ie=A.props||Ne;let le;if(O&&kr(O,!1),(le=ie.onVnodeBeforeUpdate)&&on(le,O,A,I),se&&Dr(A,I,O,"beforeUpdate"),O&&kr(O,!0),F&&(!I.dynamicChildren||I.dynamicChildren.length!==F.length)&&(H=0,Q=!1,F=null),(X.innerHTML&&ie.innerHTML==null||X.textContent&&ie.textContent==null)&&d(W,""),F?E(I.dynamicChildren,F,W,O,j,ec(A,U),B):Q||Ee(I,A,W,null,O,j,ec(A,U),B,!1),H>0){if(H&16)S(W,X,ie,O,U);else if(H&2&&X.class!==ie.class&&s(W,"class",null,ie.class,U),H&4&&s(W,"style",X.style,ie.style,U),H&8){const ye=A.dynamicProps;for(let fe=0;fe<ye.length;fe++){const pe=ye[fe],Ue=X[pe],Ke=ie[pe];(Ke!==Ue||pe==="value")&&s(W,pe,Ue,Ke,U,O)}}H&1&&I.children!==A.children&&d(W,A.children)}else!Q&&F==null&&S(W,X,ie,O,U);((le=ie.onVnodeUpdated)||se)&&Dt(()=>{le&&on(le,O,A,I),se&&Dr(A,I,O,"updated")},j)},E=(I,A,O,j,U,B,Q)=>{for(let W=0;W<A.length;W++){const H=I[W],F=A[W],se=H.el||Ac(H),X=se&&(H.type===je||!ds(H,F)||H.shapeFlag&198)?p(se):O;R(H,F,X,null,j,U,B,Q,!0)}},S=(I,A,O,j,U)=>{if(A!==O){if(A!==Ne)for(const B in A)!xs(B)&&!(B in O)&&s(I,B,A[B],null,U,j);for(const B in O){if(xs(B))continue;const Q=O[B],W=A[B];Q!==W&&B!=="value"&&s(I,B,W,Q,U,j)}"value"in O&&s(I,"value",A.value,O.value,U)}},P=(I,A,O,j,U,B,Q,W,H)=>{const F=A.el=I?I.el:l(""),se=A.anchor=I?I.anchor:l("");let{patchFlag:X,dynamicChildren:ie,slotScopeIds:le}=A;le&&(W=W?W.concat(le):le),I==null?(r(F,O,j),r(se,O,j),b(A.children||[],O,se,U,B,Q,W,H)):X>0&&X&64&&ie&&I.dynamicChildren&&I.dynamicChildren.length===ie.length?(E(I.dynamicChildren,ie,O,U,B,Q,W),(A.key!=null||U&&A===U.subTree)&&Rm(I,A,!0)):Ee(I,A,O,se,U,B,Q,W,H)},w=(I,A,O,j,U,B,Q,W,H)=>{A.slotScopeIds=W,I==null?A.shapeFlag&512?U.ctx.activate(A,O,j,Q,H):Me(A,O,j,U,B,Q,H):et(I,A,H)},Me=(I,A,O,j,U,B,Q)=>{const W=I.component=$b(I,j,U);if(gu(I)&&(W.ctx.renderer=Kn),qb(W,!1,Q),W.asyncDep){if(U&&U.registerDep(W,Le,Q,B),!I.el){const H=W.subTree=Bt(rn);G(null,H,A,O),I.placeholder=H.el}}else Le(W,I,A,O,U,B,Q)},et=(I,A,O)=>{const j=A.component=I.component;if(Eb(I,A,O))if(j.asyncDep&&!j.asyncResolved){A.el=I.el,A.placeholder=I.placeholder,Pe(j,A,O);return}else j.next=A,j.update();else A.el=I.el,A.placeholder=I.placeholder,j.vnode=A},Le=(I,A,O,j,U,B,Q)=>{const W=()=>{if(I.isMounted){let{next:X,bu:ie,u:le,parent:ye,vnode:fe}=I;{const It=Pm(I);if(It){X&&(X.el=fe.el,Pe(I,X,Q)),It.asyncDep.then(()=>{Dt(()=>{I.isUnmounted||F()},U)});return}}let pe=X,Ue;kr(I,!1),X?(X.el=fe.el,Pe(I,X,Q)):X=fe,ie&&na(ie),(Ue=X.props&&X.props.onVnodeBeforeUpdate)&&on(Ue,ye,X,fe),kr(I,!0);const Ke=Zl(I),Ct=I.subTree;I.subTree=Ke,R(Ct,Ke,p(Ct.el),sn(Ct),I,U,B),X.el=Ke.el,pe===null&&wb(I,Ke.el),le&&Dt(le,U),(Ue=X.props&&X.props.onVnodeUpdated)&&Dt(()=>on(Ue,ye,X,fe),U)}else{let X;const{el:ie,props:le}=A,{bm:ye,m:fe,parent:pe,root:Ue,type:Ke}=I,Ct=Ps(A);if(kr(I,!1),ye&&na(ye),!Ct&&(X=le&&le.onVnodeBeforeMount)&&on(X,pe,A),kr(I,!0),ie&&Wn){const It=()=>{I.subTree=Zl(I),Wn(ie,I.subTree,I,U,null)};Ct&&Ke.__asyncHydrate?Ke.__asyncHydrate(ie,I,It):It()}else{Ue.ce&&Ue.ce._hasShadowRoot()&&Ue.ce._injectChildStyle(Ke,I.parent?I.parent.type:void 0);const It=I.subTree=Zl(I);R(null,It,O,j,I,U,B),A.el=It.el}if(fe&&Dt(fe,U),!Ct&&(X=le&&le.onVnodeMounted)){const It=A;Dt(()=>on(X,pe,It),U)}(A.shapeFlag&256||pe&&Ps(pe.vnode)&&pe.vnode.shapeFlag&256)&&I.a&&Dt(I.a,U),I.isMounted=!0,A=O=j=null}};I.scope.on();const H=I.effect=new $p(W);I.scope.off();const F=I.update=H.run.bind(H),se=I.job=H.runIfDirty.bind(H);se.i=I,se.id=I.uid,H.scheduler=()=>mu(se),kr(I,!0),F()},Pe=(I,A,O)=>{A.component=I;const j=I.vnode.props;I.vnode=A,I.next=null,xb(I,A.props,j,O),Pb(I,A.children,O),yn(),om(I),vn()},Ee=(I,A,O,j,U,B,Q,W,H=!1)=>{const F=I&&I.children,se=I?I.shapeFlag:0,X=A.children,{patchFlag:ie,shapeFlag:le}=A;if(ie>0){if(ie&128){xr(F,X,O,j,U,B,Q,W,H);return}else if(ie&256){Wt(F,X,O,j,U,B,Q,W,H);return}}le&8?(se&16&&Sr(F,U,B),X!==F&&d(O,X)):se&16?le&16?xr(F,X,O,j,U,B,Q,W,H):Sr(F,U,B,!0):(se&8&&d(O,""),le&16&&b(X,O,j,U,B,Q,W,H))},Wt=(I,A,O,j,U,B,Q,W,H)=>{I=I||qr,A=A||qr;const F=I.length,se=A.length,X=Math.min(F,se);let ie;for(ie=0;ie<X;ie++){const le=A[ie]=H?Rn(A[ie]):un(A[ie]);R(I[ie],le,O,null,U,B,Q,W,H)}F>se?Sr(I,U,B,!0,!1,X):b(A,O,j,U,B,Q,W,H,X)},xr=(I,A,O,j,U,B,Q,W,H)=>{let F=0;const se=A.length;let X=I.length-1,ie=se-1;for(;F<=X&&F<=ie;){const le=I[F],ye=A[F]=H?Rn(A[F]):un(A[F]);if(ds(le,ye))R(le,ye,O,null,U,B,Q,W,H);else break;F++}for(;F<=X&&F<=ie;){const le=I[X],ye=A[ie]=H?Rn(A[ie]):un(A[ie]);if(ds(le,ye))R(le,ye,O,null,U,B,Q,W,H);else break;X--,ie--}if(F>X){if(F<=ie){const le=ie+1,ye=le<se?A[le].el:j;for(;F<=ie;)R(null,A[F]=H?Rn(A[F]):un(A[F]),O,ye,U,B,Q,W,H),F++}}else if(F>ie)for(;F<=X;)Ye(I[F],U,B,!0),F++;else{const le=F,ye=F,fe=new Map;for(F=ye;F<=ie;F++){const dt=A[F]=H?Rn(A[F]):un(A[F]);dt.key!=null&&fe.set(dt.key,F)}let pe,Ue=0;const Ke=ie-ye+1;let Ct=!1,It=0;const Qt=new Array(Ke);for(F=0;F<Ke;F++)Qt[F]=0;for(F=le;F<=X;F++){const dt=I[F];if(Ue>=Ke){Ye(dt,U,B,!0);continue}let Vt;if(dt.key!=null)Vt=fe.get(dt.key);else for(pe=ye;pe<=ie;pe++)if(Qt[pe-ye]===0&&ds(dt,A[pe])){Vt=pe;break}Vt===void 0?Ye(dt,U,B,!0):(Qt[Vt-ye]=F+1,Vt>=It?It=Vt:Ct=!0,R(dt,A[Vt],O,null,U,B,Q,W,H),Ue++)}const Xi=Ct?kb(Qt):qr;for(pe=Xi.length-1,F=Ke-1;F>=0;F--){const dt=ye+F,Vt=A[dt],So=A[dt+1],Ro=dt+1<se?So.el||Ac(So):j;Qt[F]===0?R(null,Vt,O,Ro,U,B,Q,W,H):Ct&&(pe<0||F!==Xi[pe]?wn(Vt,O,Ro,2):pe--)}}},wn=(I,A,O,j,U=null)=>{const{el:B,type:Q,transition:W,children:H,shapeFlag:F}=I;if(F&6){wn(I.component.subTree,A,O,j);return}if(F&128){I.suspense.move(A,O,j);return}if(F&64){Q.move(I,A,O,Kn);return}if(Q===je){r(B,A,O);for(let X=0;X<H.length;X++)wn(H[X],A,O,j);r(I.anchor,A,O);return}if(Q===ia){K(I,A,O);return}if(j!==2&&F&1&&W)if(j===0)W.persisted&&!B[Yl]?r(B,A,O):(W.beforeEnter(B),r(B,A,O),Dt(()=>W.enter(B),U));else{const{leave:X,delayLeave:ie,afterLeave:le}=W,ye=()=>{I.ctx.isUnmounted?i(B):r(B,A,O)},fe=()=>{const pe=B._isLeaving||!!B[Yl];B._isLeaving&&B[Yl](!0),W.persisted&&!pe?ye():X(B,()=>{ye(),le&&le()})};ie?ie(B,ye,fe):fe()}else r(B,A,O)},Ye=(I,A,O,j=!1,U=!1)=>{const{type:B,props:Q,ref:W,children:H,dynamicChildren:F,shapeFlag:se,patchFlag:X,dirs:ie,cacheIndex:le,memo:ye}=I;if((X===-2||F&&F.hasOnce)&&(U=!1),W!=null&&(yn(),Rs(W,null,O,I,!0),vn()),le!=null&&(!I.ctx||I.ctx===A)&&(A.renderCache[le]=void 0),se&256){A.ctx.deactivate(I);return}const fe=se&1&&ie,pe=!Ps(I);let Ue;if(pe&&(Ue=Q&&Q.onVnodeBeforeUnmount)&&on(Ue,A,I),se&6)Ar(I.component,O,j);else{if(se&128){I.suspense.unmount(O,j);return}fe&&Dr(I,null,A,"beforeUnmount"),se&64?I.type.remove(I,A,O,Kn,j):F&&!F.hasOnce&&(B!==je||X>0&&X&64)?Sr(F,A,O,!1,!0):(B===je&&X&384||!U&&se&16)&&Sr(H,A,O),j&&tt(I)}const Ke=ye!=null&&le==null;(pe&&(Ue=Q&&Q.onVnodeUnmounted)||fe||Ke)&&Dt(()=>{Ue&&on(Ue,A,I),fe&&Dr(I,null,A,"unmounted"),Ke&&(I.el=null)},O)},tt=I=>{const{type:A,el:O,anchor:j,transition:U}=I,B=A===je;if(B&&!U){xo(O,j);return}if(A===ia){$(I),U&&!U.persisted&&U.afterLeave&&U.afterLeave();return}const Q=B?Ic(I):I,W=()=>{B?p(O)&&xo(O,j):i(O),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(Q&&Q.shapeFlag&1&&U&&!U.persisted){const{leave:H,delayLeave:F}=U,se=Q.el,X=()=>H(se,W);F?F(se,W,X):X()}else W()},xo=(I,A)=>{let O;for(;I!==A;)O=m(I),i(I),I=O;i(A)},Ar=(I,A,O)=>{const{bum:j,scope:U,job:B,subTree:Q,um:W,m:H,a:F}=I;Dd(H),Dd(F),j&&na(j),U.stop(),B?(B.flags|=8,Ye(Q,I,A,O)):I.vnode.el&&Q&&(Q.transition=I.vnode.transition,Ye(Q,I,A,O)),W&&Dt(W,A),Dt(()=>{I.isUnmounted=!0},A)},Sr=(I,A,O,j=!1,U=!1,B=0)=>{for(let Q=B;Q<I.length;Q++)Ye(I[Q],A,O,j,U)},sn=I=>{if(I.shapeFlag&6)return sn(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const A=m(I.anchor||I.el),O=A&&A[Qv];return O?m(O):A},Ao=(I,A,O)=>{const j=I&&A._vnode?void 0:I&&I.component?I.component.uid:Bb();qv(()=>{I==null?A._vnode&&Ye(A._vnode,null,null,!0):R(A._vnode||null,I,A,null,null,null,O),A._vnode=I},j)},Kn={p:R,um:Ye,m:wn,r:tt,mt:Me,mc:b,pc:Ee,pbc:E,n:sn,o:n};let Hn,Wn;return e&&([Hn,Wn]=e(Kn)),{render:Ao,hydrate:Hn,createApp:gb(Ao,Hn)}}function ec({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function kr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Db(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Rm(n,e,t=!1){const r=n.children,i=e.children;if(ce(r)&&ce(i))for(let s=0;s<r.length;s++){const o=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=Rn(i[s]),l.el=o.el),!t&&l.patchFlag!==-2&&Rm(o,l)),l.type===il&&(l.patchFlag===-1&&(l=i[s]=Rn(l)),l.el=o.el),l.type===rn&&!l.el&&(l.el=o.el)}}function kb(n){const e=n.slice(),t=[0];let r,i,s,o,l;const c=n.length;for(r=0;r<c;r++){const u=n[r];if(u!==0){if(i=t[t.length-1],n[i]<u){e[r]=i,t.push(r);continue}for(s=0,o=t.length-1;s<o;)l=s+o>>1,n[t[l]]<u?s=l+1:o=l;u<n[t[s]]&&(s>0&&(e[r]=t[s-1]),t[s]=r)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Pm(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Pm(e)}function Dd(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Ac(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Ac(e.subTree):null}const Cm=n=>n.__isSuspense;function Nb(n,e){e&&e.pendingBranch?ce(n)?e.effects.push(...n):e.effects.push(n):jv(n)}const je=Symbol.for("v-fgt"),il=Symbol.for("v-txt"),rn=Symbol.for("v-cmt"),ia=Symbol.for("v-stc"),Hr=[];let Ft=null;function ee(n=!1){Hr.push(Ft=n?null:[])}function Vm(){Hr.pop(),Ft=Hr[Hr.length-1]||null}let $s=1;function kd(n,e=!1){$s+=n,n<0&&Ft&&e&&(Ft.hasOnce=!0)}function Dm(n){return n.dynamicChildren=$s>0?Ft||qr:null,Vm(),$s>0&&Ft&&Ft.push(n),n}function ne(n,e,t,r,i,s){return Dm(_(n,e,t,r,i,s,!0))}function an(n,e,t,r,i){return Dm(Bt(n,e,t,r,i,!0))}function bu(n){return n?n.__v_isVNode===!0:!1}function ds(n,e){return n.type===e.type&&n.key===e.key}const km=({key:n})=>n??null,sa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Qe(n)||vt(n)||ge(n)?{i:qt,r:n,k:e,f:!!t}:n:null);function _(n,e=null,t=null,r=0,i=null,s=n===je?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&km(e),ref:e&&sa(e),scopeId:cm,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:qt};return l?(xa(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=Qe(t)?8:16),$s>0&&!o&&Ft&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Ft.push(c),c}const Bt=Ob;function Ob(n,e=null,t=null,r=0,i=null,s=!1){if((!n||n===lb)&&(n=rn),bu(n)){const l=Di(n,e,!0);return t&&xa(l,t),$s>0&&!s&&Ft&&(l.shapeFlag&6?Ft[Ft.indexOf(n)]=l:Ft.push(l)),l.patchFlag=-2,l}if(Hb(n)&&(n=n.__vccOpts),e){e=Mb(e);let{class:l,style:c}=e;l&&!Qe(l)&&(e.class=ct(l)),De(c)&&(pu(c)&&!ce(c)&&(c=st({},c)),e.style=ou(c))}const o=Qe(n)?1:Cm(n)?128:tl(n)?64:De(n)?4:ge(n)?2:0;return _(n,e,t,r,i,o,s,!0)}function Mb(n){return n?pu(n)||Em(n)?st({},n):n:null}function Di(n,e,t=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:l,transition:c}=n,u=e?Lb(i||{},e):i,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&km(u),ref:e&&e.ref?t&&s?ce(s)?s.concat(sa(e)):[s,sa(e)]:sa(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==je?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Di(n.ssContent),ssFallback:n.ssFallback&&Di(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return c&&r&&Ea(d,c.clone(d)),d}function js(n=" ",e=0){return Bt(il,null,n,e)}function Fb(n,e){const t=Bt(ia,null,n);return t.staticCount=e,t}function Je(n="",e=!1){return e?(ee(),an(rn,null,n)):Bt(rn,null,n)}function un(n){return n==null||typeof n=="boolean"?Bt(rn):ce(n)?Bt(je,null,n.slice()):bu(n)?Rn(n):Bt(il,null,String(n))}function Rn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Di(n)}function xa(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ce(e))t=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),xa(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!Em(e)?e._ctx=qt:i===3&&qt&&(qt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(ge(e)){if(r&65){xa(n,{default:e});return}e={default:e,_ctx:qt},t=32}else e=String(e),r&64?(t=16,e=[js(e)]):t=8;n.children=e,n.shapeFlag|=t}function Lb(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=ct([e.class,r.class]));else if(i==="style")e.style=ou([e.style,r.style]);else if(Wa(i)){const s=e[i],o=r[i];o&&s!==o&&!(ce(s)&&s.includes(o))?e[i]=s?[].concat(s,o):o:o==null&&s==null&&!Qa(i)&&(e[i]=o)}else i!==""&&(e[i]=r[i])}return e}function on(n,e,t,r=null){nn(n,e,7,[t,r])}const Ub=gm();let Nm=0;function Bb(){return Nm}function $b(n,e,t){const r=n.type,i=(e?e.appContext:n.appContext)||Ub,s={uid:Nm++,vnode:n,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new dv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tm(r,i),emitsOptions:_m(r,i),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=yb.bind(null,s),n.ce&&n.ce(s),s}let At=null;const jb=()=>At||qt;let Aa,qs;{const n=Xa(),e=(t,r)=>{let i;return(i=n[t])||(i=n[t]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};Aa=e("__VUE_INSTANCE_SETTERS__",t=>At=t),qs=e("__VUE_SSR_SETTERS__",t=>zs=t)}const uo=n=>{const e=At;return Aa(n),n.scope.on(),()=>{n.scope.off(),Aa(e)}},Nd=()=>{At&&At.scope.off(),Aa(null)};function Om(n){return n.vnode.shapeFlag&4}let zs=!1;function qb(n,e=!1,t=!1){e&&qs(e);const{props:r,children:i}=n.vnode,s=Om(n);Tb(n,r,s,e),Rb(n,i,t||e);const o=s?zb(n,e):void 0;return e&&qs(!1),o}function zb(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,cb);const{setup:r}=t;if(r){yn();const i=n.setupContext=r.length>1?Kb(n):null,s=uo(n),o=co(r,n,0,[n.props,i]),l=kp(o);if(vn(),s(),(l||n.sp)&&!Ps(n)&&fm(n),l){if(o.then(Nd,Nd),e)return o.then(c=>{qs(!0);try{Od(n,c,e)}finally{qs(!1)}}).catch(c=>{el(c,n,0)});n.asyncDep=o}else Od(n,o,e)}else Mm(n,e)}function Od(n,e,t){ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:De(e)&&(n.setupState=nm(e)),Mm(n,t)}let Md;function Mm(n,e,t){const r=n.type;if(!n.render){if(!e&&Md&&!r.render){const i=r.template||_u(n).template;if(i){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:l,compilerOptions:c}=r,u=st(st({isCustomElement:s,delimiters:l},o),c);r.render=Md(i,u)}}n.render=r.render||Xt}{const i=uo(n);yn();try{ub(n)}finally{vn(),i()}}}const Gb={get(n,e){return gt(n,"get",""),n[e]}};function Kb(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Gb),slots:n.slots,emit:n.emit,expose:e}}function sl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(nm(Vv(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Cs)return Cs[t](n)},has(e,t){return t in e||t in Cs}})):n.proxy}function Hb(n){return ge(n)&&"__vccOpts"in n}const Fm=(n,e)=>Fv(n,e,zs),Wb="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Sc;const Fd=typeof window<"u"&&window.trustedTypes;if(Fd)try{Sc=Fd.createPolicy("vue",{createHTML:n=>n})}catch{}const Lm=Sc?n=>Sc.createHTML(n):n=>n,Qb="http://www.w3.org/2000/svg",Jb="http://www.w3.org/1998/Math/MathML",Sn=typeof document<"u"?document:null,Ld=Sn&&Sn.createElement("template"),Yb={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const i=e==="svg"?Sn.createElementNS(Qb,n):e==="mathml"?Sn.createElementNS(Jb,n):t?Sn.createElement(n,{is:t}):Sn.createElement(n);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>Sn.createTextNode(n),createComment:n=>Sn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Sn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{Ld.innerHTML=Lm(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=Ld.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Xb=Symbol("_vtc");function Zb(n,e,t){const r=n[Xb];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ud=Symbol("_vod"),eI=Symbol("_vsh"),tI=Symbol(""),nI=/(?:^|;)\s*display\s*:/;function rI(n,e,t){const r=n.style,i=Qe(t);let s=!1;if(t&&!i){if(e)if(Qe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();t[l]==null&&vs(r,l,"")}else for(const o in e)t[o]==null&&vs(r,o,"");for(const o in t){o==="display"&&(s=!0);const l=t[o];l!=null?sI(n,o,!Qe(e)&&e?e[o]:void 0,l)||vs(r,o,l):vs(r,o,"")}}else if(i){if(e!==t){const o=r[tI];o&&(t+=";"+o),r.cssText=t,s=nI.test(t)}}else e&&n.removeAttribute("style");Ud in n&&((!i||e!==t)&&(n[Ud]=s?r.display:""),n[eI]&&(r.display="none"))}const Ho=/\s*!important$/;function vs(n,e,t){if(ce(t))t.forEach(r=>vs(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))Ho.test(t)?n.setProperty(e,t.replace(Ho,""),"important"):n.setProperty(e,t);else{const r=iI(n,e);Ho.test(t)?n.setProperty(ai(r),t.replace(Ho,""),"important"):n[r]=t}}const Bd=["Webkit","Moz","ms"],tc={};function iI(n,e){const t=tc[e];if(t)return t;let r=Zt(e);if(r!=="filter"&&r in n)return tc[e]=r;r=Mp(r);for(let i=0;i<Bd.length;i++){const s=Bd[i]+r;if(s in n)return tc[e]=s}return e}function sI(n,e,t,r){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Qe(r)&&t===r}const $d="http://www.w3.org/1999/xlink";function jd(n,e,t,r,i,s=lv(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS($d,e.slice(6,e.length)):n.setAttributeNS($d,e,t):t==null||s&&!Lp(t)?n.removeAttribute(e):n.setAttribute(e,s?"":_n(t)?String(t):t)}function qd(n,e,t,r,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Lm(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const l=s==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Lp(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(i||e)}function Lr(n,e,t,r){n.addEventListener(e,t,r)}function oI(n,e,t,r){n.removeEventListener(e,t,r)}const zd=Symbol("_vei");function aI(n,e,t,r,i=null){const s=n[zd]||(n[zd]={}),o=s[e];if(r&&o)o.value=r;else{const[l,c]=uI(e);if(r){const u=s[e]=fI(r,i);Lr(n,l,u,c)}else o&&(oI(n,l,o,c),s[e]=void 0)}}const lI=/(Once|Passive|Capture)$/,cI=/^on:?(?:Once|Passive|Capture)$/;function uI(n){let e,t;for(;(t=n.match(lI))&&!cI.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):ai(n.slice(2)),e]}let nc=0;const hI=Promise.resolve(),dI=()=>nc||(hI.then(()=>nc=0),nc=Date.now());function fI(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;const i=t.value;if(ce(i)){const s=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{s.call(r),r._stopped=!0};const o=i.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const u=o[c];u&&nn(u,e,5,l)}}else nn(i,e,5,[r])};return t.value=n,t.attached=dI(),t}const Gd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,pI=(n,e,t,r,i,s)=>{const o=i==="svg";e==="class"?Zb(n,r,o):e==="style"?rI(n,t,r):Wa(e)?Qa(e)||aI(n,e,t,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mI(n,e,r,o))?(qd(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&jd(n,e,r,o,s,e!=="value")):n._isVueCE&&(gI(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Qe(r)))?qd(n,Zt(e),r,s,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),jd(n,e,r,o))};function mI(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Gd(e)&&ge(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=n.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Gd(e)&&Qe(t)?!1:e in n}function gI(n,e){const t=n._def.props;if(!t)return!1;const r=Zt(e);return Array.isArray(t)?t.some(i=>Zt(i)===r):Object.keys(t).some(i=>Zt(i)===r)}const Sa=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ce(e)?t=>na(e,t):e};function _I(n){n.target.composing=!0}function Kd(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zr=Symbol("_assign"),Wo=Symbol("_initialValue");function rc(n,e,t){return e&&(n=n.trim()),t&&(n=Ya(n)),n}const Oe={created(n,{modifiers:{lazy:e,trim:t,number:r}},i){n.parentNode&&(n.type==="text"?n[Wo]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Wo]=n.defaultValue.replace(/\r\n?/g,`
`))),n[zr]=Sa(i);const s=r||i.props&&i.props.type==="number";Lr(n,e?"change":"input",o=>{o.target.composing||n[zr](rc(n.value,t,s))}),(t||s)&&Lr(n,"change",()=>{n.value=rc(n.value,t,s)}),e||(Lr(n,"compositionstart",_I),Lr(n,"compositionend",Kd),Lr(n,"change",Kd))},mounted(n,{value:e,modifiers:{trim:t,number:r}}){const i=e??"",s=n[Wo];delete n[Wo],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[zr](rc(n.value,t,r)):n.value=i},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:i,number:s}},o){if(n[zr]=Sa(o),n.composing)return;const l=(s||n.type==="number")&&!/^0\d/.test(n.value)?Ya(n.value):n.value,c=e??"";if(l===c)return;const u=n.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===n&&n.type!=="range"&&(r&&e===t||i&&n.value.trim()===c)||(n.value=c)}},Gs={deep:!0,created(n,{value:e,modifiers:{number:t}},r){n._modelValue=e,Lr(n,"change",()=>{const i=Array.prototype.filter.call(n.options,c=>c.selected).map(c=>t?Ya(Ra(c)):Ra(c)),s=n.multiple,o=s?Yr(n._modelValue)?new Set(i):i:i[0],l=n._pendingValue=[s,s?ce(o)?i.slice():i:o];try{n[zr](o)}finally{im(()=>{n._pendingValue===l&&(n._pendingValue=void 0)})}}),n[zr]=Sa(r)},mounted(n,{value:e}){Hd(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[zr]=Sa(t)},updated(n,{value:e}){const t=n._pendingValue;n._pendingValue=void 0,(!t||t[0]!==n.multiple||!yI(e,t[1],t[0]))&&Hd(n,e)}};function yI(n,e,t){if(!t||ce(n))return gr(n,e);if(Yr(n)){if(n.size!==e.length)return!1;for(const r of e)if(!n.has(r))return!1;return!0}return!1}function Hd(n,e){const t=n.multiple,r=ce(e);if(!(t&&!r&&!Yr(e))){for(let i=0,s=n.options.length;i<s;i++){const o=n.options[i],l=Ra(o);if(t)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=hv(e,l)>-1}else o.selected=e.has(l);else if(gr(Ra(o),e)){n.selectedIndex!==i&&(n.selectedIndex=i);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Ra(n){return"_value"in n?n._value:n.value}const vI=st({patchProp:pI},Yb);let Wd;function bI(){return Wd||(Wd=Cb(vI))}const II=(...n)=>{const e=bI().createApp(...n),{mount:t}=e;return e.mount=r=>{const i=wI(r);if(!i)return;const s=e._component;!ge(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=t(i,!1,EI(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function EI(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function wI(n){return Qe(n)?document.querySelector(n):n}/**
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
 */const Um=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},TI=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],l=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Bm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,l=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|u>>6,y=u&63;c||(y=64,o||(m=64)),r.push(t[d],t[p],t[m],t[y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Um(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):TI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||u==null||p==null)throw new xI;const m=s<<2|l>>4;if(r.push(m),u!==64){const y=l<<4&240|u>>2;if(r.push(y),p!==64){const x=u<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class xI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AI=function(n){const e=Um(n);return Bm.encodeByteArray(e,!0)},$m=function(n){return AI(n).replace(/\./g,"")},jm=function(n){try{return Bm.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function SI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const RI=()=>SI().__FIREBASE_DEFAULTS__,PI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},CI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&jm(n[1]);return e&&JSON.parse(e)},ol=()=>{try{return RI()||PI()||CI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},VI=n=>{var e,t;return(t=(e=ol())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},qm=()=>{var n;return(n=ol())===null||n===void 0?void 0:n.config},zm=n=>{var e;return(e=ol())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class DI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function NI(){var n;const e=(n=ol())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function OI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function MI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function FI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LI(){const n=nt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Gm(){return!NI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Km(){try{return typeof indexedDB=="object"}catch{return!1}}function UI(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const BI="FirebaseError";class qn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=BI,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ho.prototype.create)}}class ho{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$I(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new qn(i,l,r)}}function $I(n,e){return n.replace(jI,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const jI=/\{\$([^}]+)}/g;function qI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ks(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Qd(s)&&Qd(o)){if(!Ks(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Qd(n){return n!==null&&typeof n=="object"}/**
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
 */function fo(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zI(n,e){const t=new GI(n,e);return t.subscribe.bind(t)}class GI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");KI(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ic),i.error===void 0&&(i.error=ic),i.complete===void 0&&(i.complete=ic);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ic(){}/**
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
 */function ot(n){return n&&n._delegate?n._delegate:n}class Xr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mr="[DEFAULT]";/**
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
 */class HI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new DI;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QI(e))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mr){return this.instances.has(e)}getOptions(e=Mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WI(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mr){return this.component?this.component.multipleInstances?e:Mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WI(n){return n===Mr?void 0:n}function QI(n){return n.instantiationMode==="EAGER"}/**
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
 */class JI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new HI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ve||(ve={}));const YI={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},XI=ve.INFO,ZI={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},eE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=ZI[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Iu{constructor(e){this.name=e,this._logLevel=XI,this._logHandler=eE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const tE=(n,e)=>e.some(t=>n instanceof t);let Jd,Yd;function nE(){return Jd||(Jd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rE(){return Yd||(Yd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hm=new WeakMap,Rc=new WeakMap,Wm=new WeakMap,sc=new WeakMap,Eu=new WeakMap;function iE(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(cr(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Hm.set(t,n)}).catch(()=>{}),Eu.set(e,n),e}function sE(n){if(Rc.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Rc.set(n,e)}let Pc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Rc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Wm.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return cr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function oE(n){Pc=n(Pc)}function aE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(oc(this),e,...t);return Wm.set(r,e.sort?e.sort():[e]),cr(r)}:rE().includes(n)?function(...e){return n.apply(oc(this),e),cr(Hm.get(this))}:function(...e){return cr(n.apply(oc(this),e))}}function lE(n){return typeof n=="function"?aE(n):(n instanceof IDBTransaction&&sE(n),tE(n,nE())?new Proxy(n,Pc):n)}function cr(n){if(n instanceof IDBRequest)return iE(n);if(sc.has(n))return sc.get(n);const e=lE(n);return e!==n&&(sc.set(n,e),Eu.set(e,n)),e}const oc=n=>Eu.get(n);function cE(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),l=cr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(cr(o.result),c.oldVersion,c.newVersion,cr(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const uE=["get","getKey","getAll","getAllKeys","count"],hE=["put","add","delete","clear"],ac=new Map;function Xd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ac.get(e))return ac.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=hE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uE.includes(t)))return;const s=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),i&&c.done]))[0]};return ac.set(e,s),s}oE(n=>({...n,get:(e,t,r)=>Xd(e,t)||n.get(e,t,r),has:(e,t)=>!!Xd(e,t)||n.has(e,t)}));/**
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
 */class dE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(fE(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function fE(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cc="@firebase/app",Zd="0.10.13";/**
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
 */const Fn=new Iu("@firebase/app"),pE="@firebase/app-compat",mE="@firebase/analytics-compat",gE="@firebase/analytics",_E="@firebase/app-check-compat",yE="@firebase/app-check",vE="@firebase/auth",bE="@firebase/auth-compat",IE="@firebase/database",EE="@firebase/data-connect",wE="@firebase/database-compat",TE="@firebase/functions",xE="@firebase/functions-compat",AE="@firebase/installations",SE="@firebase/installations-compat",RE="@firebase/messaging",PE="@firebase/messaging-compat",CE="@firebase/performance",VE="@firebase/performance-compat",DE="@firebase/remote-config",kE="@firebase/remote-config-compat",NE="@firebase/storage",OE="@firebase/storage-compat",ME="@firebase/firestore",FE="@firebase/vertexai-preview",LE="@firebase/firestore-compat",UE="firebase",BE="10.14.1";/**
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
 */const Vc="[DEFAULT]",$E={[Cc]:"fire-core",[pE]:"fire-core-compat",[gE]:"fire-analytics",[mE]:"fire-analytics-compat",[yE]:"fire-app-check",[_E]:"fire-app-check-compat",[vE]:"fire-auth",[bE]:"fire-auth-compat",[IE]:"fire-rtdb",[EE]:"fire-data-connect",[wE]:"fire-rtdb-compat",[TE]:"fire-fn",[xE]:"fire-fn-compat",[AE]:"fire-iid",[SE]:"fire-iid-compat",[RE]:"fire-fcm",[PE]:"fire-fcm-compat",[CE]:"fire-perf",[VE]:"fire-perf-compat",[DE]:"fire-rc",[kE]:"fire-rc-compat",[NE]:"fire-gcs",[OE]:"fire-gcs-compat",[ME]:"fire-fst",[LE]:"fire-fst-compat",[FE]:"fire-vertex","fire-js":"fire-js",[UE]:"fire-js-all"};/**
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
 */const Pa=new Map,jE=new Map,Dc=new Map;function ef(n,e){try{n.container.addComponent(e)}catch(t){Fn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ki(n){const e=n.name;if(Dc.has(e))return Fn.debug(`There were multiple attempts to register component ${e}.`),!1;Dc.set(e,n);for(const t of Pa.values())ef(t,n);for(const t of jE.values())ef(t,n);return!0}function wu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Dn(n){return n.settings!==void 0}/**
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
 */const qE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ur=new ho("app","Firebase",qE);/**
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
 */class zE{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
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
 */const Ki=BE;function Qm(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ur.create("bad-app-name",{appName:String(i)});if(t||(t=qm()),!t)throw ur.create("no-options");const s=Pa.get(i);if(s){if(Ks(t,s.options)&&Ks(r,s.config))return s;throw ur.create("duplicate-app",{appName:i})}const o=new JI(i);for(const c of Dc.values())o.addComponent(c);const l=new zE(t,r,o);return Pa.set(i,l),l}function GE(n=Vc){const e=Pa.get(n);if(!e&&n===Vc&&qm())return Qm();if(!e)throw ur.create("no-app",{appName:n});return e}function hr(n,e,t){var r;let i=(r=$E[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fn.warn(l.join(" "));return}ki(new Xr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const KE="firebase-heartbeat-database",HE=1,Hs="firebase-heartbeat-store";let lc=null;function Jm(){return lc||(lc=cE(KE,HE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Hs)}catch(t){console.warn(t)}}}}).catch(n=>{throw ur.create("idb-open",{originalErrorMessage:n.message})})),lc}async function WE(n){try{const t=(await Jm()).transaction(Hs),r=await t.objectStore(Hs).get(Ym(n));return await t.done,r}catch(e){if(e instanceof qn)Fn.warn(e.message);else{const t=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fn.warn(t.message)}}}async function tf(n,e){try{const r=(await Jm()).transaction(Hs,"readwrite");await r.objectStore(Hs).put(e,Ym(n)),await r.done}catch(t){if(t instanceof qn)Fn.warn(t.message);else{const r=ur.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Fn.warn(r.message)}}}function Ym(n){return`${n.name}!${n.options.appId}`}/**
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
 */const QE=1024,JE=30*24*60*60*1e3;class YE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ZE(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=JE}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Fn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nf(),{heartbeatsToSend:r,unsentEntries:i}=XE(this._heartbeatsCache.heartbeats),s=$m(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Fn.warn(t),""}}}function nf(){return new Date().toISOString().substring(0,10)}function XE(n,e=QE){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),rf(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),rf(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ZE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Km()?UI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await WE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return tf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return tf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rf(n){return $m(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function ew(n){ki(new Xr("platform-logger",e=>new dE(e),"PRIVATE")),ki(new Xr("heartbeat",e=>new YE(e),"PRIVATE")),hr(Cc,Zd,n),hr(Cc,Zd,"esm2017"),hr("fire-js","")}ew("");var tw="firebase",nw="10.14.1";/**
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
 */hr(tw,nw,"app");var sf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wr,Xm;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,b){function v(){}v.prototype=b.prototype,T.D=b.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(E,S,P){for(var w=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)w[Me-2]=arguments[Me];return b.prototype[S].apply(E,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,b,v){v||(v=0);var E=Array(16);if(typeof b=="string")for(var S=0;16>S;++S)E[S]=b.charCodeAt(v++)|b.charCodeAt(v++)<<8|b.charCodeAt(v++)<<16|b.charCodeAt(v++)<<24;else for(S=0;16>S;++S)E[S]=b[v++]|b[v++]<<8|b[v++]<<16|b[v++]<<24;b=T.g[0],v=T.g[1],S=T.g[2];var P=T.g[3],w=b+(P^v&(S^P))+E[0]+3614090360&4294967295;b=v+(w<<7&4294967295|w>>>25),w=P+(S^b&(v^S))+E[1]+3905402710&4294967295,P=b+(w<<12&4294967295|w>>>20),w=S+(v^P&(b^v))+E[2]+606105819&4294967295,S=P+(w<<17&4294967295|w>>>15),w=v+(b^S&(P^b))+E[3]+3250441966&4294967295,v=S+(w<<22&4294967295|w>>>10),w=b+(P^v&(S^P))+E[4]+4118548399&4294967295,b=v+(w<<7&4294967295|w>>>25),w=P+(S^b&(v^S))+E[5]+1200080426&4294967295,P=b+(w<<12&4294967295|w>>>20),w=S+(v^P&(b^v))+E[6]+2821735955&4294967295,S=P+(w<<17&4294967295|w>>>15),w=v+(b^S&(P^b))+E[7]+4249261313&4294967295,v=S+(w<<22&4294967295|w>>>10),w=b+(P^v&(S^P))+E[8]+1770035416&4294967295,b=v+(w<<7&4294967295|w>>>25),w=P+(S^b&(v^S))+E[9]+2336552879&4294967295,P=b+(w<<12&4294967295|w>>>20),w=S+(v^P&(b^v))+E[10]+4294925233&4294967295,S=P+(w<<17&4294967295|w>>>15),w=v+(b^S&(P^b))+E[11]+2304563134&4294967295,v=S+(w<<22&4294967295|w>>>10),w=b+(P^v&(S^P))+E[12]+1804603682&4294967295,b=v+(w<<7&4294967295|w>>>25),w=P+(S^b&(v^S))+E[13]+4254626195&4294967295,P=b+(w<<12&4294967295|w>>>20),w=S+(v^P&(b^v))+E[14]+2792965006&4294967295,S=P+(w<<17&4294967295|w>>>15),w=v+(b^S&(P^b))+E[15]+1236535329&4294967295,v=S+(w<<22&4294967295|w>>>10),w=b+(S^P&(v^S))+E[1]+4129170786&4294967295,b=v+(w<<5&4294967295|w>>>27),w=P+(v^S&(b^v))+E[6]+3225465664&4294967295,P=b+(w<<9&4294967295|w>>>23),w=S+(b^v&(P^b))+E[11]+643717713&4294967295,S=P+(w<<14&4294967295|w>>>18),w=v+(P^b&(S^P))+E[0]+3921069994&4294967295,v=S+(w<<20&4294967295|w>>>12),w=b+(S^P&(v^S))+E[5]+3593408605&4294967295,b=v+(w<<5&4294967295|w>>>27),w=P+(v^S&(b^v))+E[10]+38016083&4294967295,P=b+(w<<9&4294967295|w>>>23),w=S+(b^v&(P^b))+E[15]+3634488961&4294967295,S=P+(w<<14&4294967295|w>>>18),w=v+(P^b&(S^P))+E[4]+3889429448&4294967295,v=S+(w<<20&4294967295|w>>>12),w=b+(S^P&(v^S))+E[9]+568446438&4294967295,b=v+(w<<5&4294967295|w>>>27),w=P+(v^S&(b^v))+E[14]+3275163606&4294967295,P=b+(w<<9&4294967295|w>>>23),w=S+(b^v&(P^b))+E[3]+4107603335&4294967295,S=P+(w<<14&4294967295|w>>>18),w=v+(P^b&(S^P))+E[8]+1163531501&4294967295,v=S+(w<<20&4294967295|w>>>12),w=b+(S^P&(v^S))+E[13]+2850285829&4294967295,b=v+(w<<5&4294967295|w>>>27),w=P+(v^S&(b^v))+E[2]+4243563512&4294967295,P=b+(w<<9&4294967295|w>>>23),w=S+(b^v&(P^b))+E[7]+1735328473&4294967295,S=P+(w<<14&4294967295|w>>>18),w=v+(P^b&(S^P))+E[12]+2368359562&4294967295,v=S+(w<<20&4294967295|w>>>12),w=b+(v^S^P)+E[5]+4294588738&4294967295,b=v+(w<<4&4294967295|w>>>28),w=P+(b^v^S)+E[8]+2272392833&4294967295,P=b+(w<<11&4294967295|w>>>21),w=S+(P^b^v)+E[11]+1839030562&4294967295,S=P+(w<<16&4294967295|w>>>16),w=v+(S^P^b)+E[14]+4259657740&4294967295,v=S+(w<<23&4294967295|w>>>9),w=b+(v^S^P)+E[1]+2763975236&4294967295,b=v+(w<<4&4294967295|w>>>28),w=P+(b^v^S)+E[4]+1272893353&4294967295,P=b+(w<<11&4294967295|w>>>21),w=S+(P^b^v)+E[7]+4139469664&4294967295,S=P+(w<<16&4294967295|w>>>16),w=v+(S^P^b)+E[10]+3200236656&4294967295,v=S+(w<<23&4294967295|w>>>9),w=b+(v^S^P)+E[13]+681279174&4294967295,b=v+(w<<4&4294967295|w>>>28),w=P+(b^v^S)+E[0]+3936430074&4294967295,P=b+(w<<11&4294967295|w>>>21),w=S+(P^b^v)+E[3]+3572445317&4294967295,S=P+(w<<16&4294967295|w>>>16),w=v+(S^P^b)+E[6]+76029189&4294967295,v=S+(w<<23&4294967295|w>>>9),w=b+(v^S^P)+E[9]+3654602809&4294967295,b=v+(w<<4&4294967295|w>>>28),w=P+(b^v^S)+E[12]+3873151461&4294967295,P=b+(w<<11&4294967295|w>>>21),w=S+(P^b^v)+E[15]+530742520&4294967295,S=P+(w<<16&4294967295|w>>>16),w=v+(S^P^b)+E[2]+3299628645&4294967295,v=S+(w<<23&4294967295|w>>>9),w=b+(S^(v|~P))+E[0]+4096336452&4294967295,b=v+(w<<6&4294967295|w>>>26),w=P+(v^(b|~S))+E[7]+1126891415&4294967295,P=b+(w<<10&4294967295|w>>>22),w=S+(b^(P|~v))+E[14]+2878612391&4294967295,S=P+(w<<15&4294967295|w>>>17),w=v+(P^(S|~b))+E[5]+4237533241&4294967295,v=S+(w<<21&4294967295|w>>>11),w=b+(S^(v|~P))+E[12]+1700485571&4294967295,b=v+(w<<6&4294967295|w>>>26),w=P+(v^(b|~S))+E[3]+2399980690&4294967295,P=b+(w<<10&4294967295|w>>>22),w=S+(b^(P|~v))+E[10]+4293915773&4294967295,S=P+(w<<15&4294967295|w>>>17),w=v+(P^(S|~b))+E[1]+2240044497&4294967295,v=S+(w<<21&4294967295|w>>>11),w=b+(S^(v|~P))+E[8]+1873313359&4294967295,b=v+(w<<6&4294967295|w>>>26),w=P+(v^(b|~S))+E[15]+4264355552&4294967295,P=b+(w<<10&4294967295|w>>>22),w=S+(b^(P|~v))+E[6]+2734768916&4294967295,S=P+(w<<15&4294967295|w>>>17),w=v+(P^(S|~b))+E[13]+1309151649&4294967295,v=S+(w<<21&4294967295|w>>>11),w=b+(S^(v|~P))+E[4]+4149444226&4294967295,b=v+(w<<6&4294967295|w>>>26),w=P+(v^(b|~S))+E[11]+3174756917&4294967295,P=b+(w<<10&4294967295|w>>>22),w=S+(b^(P|~v))+E[2]+718787259&4294967295,S=P+(w<<15&4294967295|w>>>17),w=v+(P^(S|~b))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+b&4294967295,T.g[1]=T.g[1]+(S+(w<<21&4294967295|w>>>11))&4294967295,T.g[2]=T.g[2]+S&4294967295,T.g[3]=T.g[3]+P&4294967295}r.prototype.u=function(T,b){b===void 0&&(b=T.length);for(var v=b-this.blockSize,E=this.B,S=this.h,P=0;P<b;){if(S==0)for(;P<=v;)i(this,T,P),P+=this.blockSize;if(typeof T=="string"){for(;P<b;)if(E[S++]=T.charCodeAt(P++),S==this.blockSize){i(this,E),S=0;break}}else for(;P<b;)if(E[S++]=T[P++],S==this.blockSize){i(this,E),S=0;break}}this.h=S,this.o+=b},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var b=1;b<T.length-8;++b)T[b]=0;var v=8*this.o;for(b=T.length-8;b<T.length;++b)T[b]=v&255,v/=256;for(this.u(T),T=Array(16),b=v=0;4>b;++b)for(var E=0;32>E;E+=8)T[v++]=this.g[b]>>>E&255;return T};function s(T,b){var v=l;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=b(T)}function o(T,b){this.h=b;for(var v=[],E=!0,S=T.length-1;0<=S;S--){var P=T[S]|0;E&&P==b||(v[S]=P,E=!1)}this.g=v}var l={};function c(T){return-128<=T&&128>T?s(T,function(b){return new o([b|0],0>b?-1:0)}):new o([T|0],0>T?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return D(u(-T));for(var b=[],v=1,E=0;T>=v;E++)b[E]=T/v|0,v*=4294967296;return new o(b,0)}function d(T,b){if(T.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(T.charAt(0)=="-")return D(d(T.substring(1),b));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(b,8)),E=p,S=0;S<T.length;S+=8){var P=Math.min(8,T.length-S),w=parseInt(T.substring(S,S+P),b);8>P?(P=u(Math.pow(b,P)),E=E.j(P).add(u(w))):(E=E.j(v),E=E.add(u(w)))}return E}var p=c(0),m=c(1),y=c(16777216);n=o.prototype,n.m=function(){if(R(this))return-D(this).m();for(var T=0,b=1,v=0;v<this.g.length;v++){var E=this.i(v);T+=(0<=E?E:4294967296+E)*b,b*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(x(this))return"0";if(R(this))return"-"+D(this).toString(T);for(var b=u(Math.pow(T,6)),v=this,E="";;){var S=$(v,b).g;v=G(v,S.j(b));var P=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=S,x(v))return P+E;for(;6>P.length;)P="0"+P;E=P+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function x(T){if(T.h!=0)return!1;for(var b=0;b<T.g.length;b++)if(T.g[b]!=0)return!1;return!0}function R(T){return T.h==-1}n.l=function(T){return T=G(this,T),R(T)?-1:x(T)?0:1};function D(T){for(var b=T.g.length,v=[],E=0;E<b;E++)v[E]=~T.g[E];return new o(v,~T.h).add(m)}n.abs=function(){return R(this)?D(this):this},n.add=function(T){for(var b=Math.max(this.g.length,T.g.length),v=[],E=0,S=0;S<=b;S++){var P=E+(this.i(S)&65535)+(T.i(S)&65535),w=(P>>>16)+(this.i(S)>>>16)+(T.i(S)>>>16);E=w>>>16,P&=65535,w&=65535,v[S]=w<<16|P}return new o(v,v[v.length-1]&-2147483648?-1:0)};function G(T,b){return T.add(D(b))}n.j=function(T){if(x(this)||x(T))return p;if(R(this))return R(T)?D(this).j(D(T)):D(D(this).j(T));if(R(T))return D(this.j(D(T)));if(0>this.l(y)&&0>T.l(y))return u(this.m()*T.m());for(var b=this.g.length+T.g.length,v=[],E=0;E<2*b;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var S=0;S<T.g.length;S++){var P=this.i(E)>>>16,w=this.i(E)&65535,Me=T.i(S)>>>16,et=T.i(S)&65535;v[2*E+2*S]+=w*et,q(v,2*E+2*S),v[2*E+2*S+1]+=P*et,q(v,2*E+2*S+1),v[2*E+2*S+1]+=w*Me,q(v,2*E+2*S+1),v[2*E+2*S+2]+=P*Me,q(v,2*E+2*S+2)}for(E=0;E<b;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=b;E<2*b;E++)v[E]=0;return new o(v,0)};function q(T,b){for(;(T[b]&65535)!=T[b];)T[b+1]+=T[b]>>>16,T[b]&=65535,b++}function K(T,b){this.g=T,this.h=b}function $(T,b){if(x(b))throw Error("division by zero");if(x(T))return new K(p,p);if(R(T))return b=$(D(T),b),new K(D(b.g),D(b.h));if(R(b))return b=$(T,D(b)),new K(D(b.g),b.h);if(30<T.g.length){if(R(T)||R(b))throw Error("slowDivide_ only works with positive integers.");for(var v=m,E=b;0>=E.l(T);)v=L(v),E=L(E);var S=k(v,1),P=k(E,1);for(E=k(E,2),v=k(v,2);!x(E);){var w=P.add(E);0>=w.l(T)&&(S=S.add(v),P=w),E=k(E,1),v=k(v,1)}return b=G(T,S.j(b)),new K(S,b)}for(S=p;0<=T.l(b);){for(v=Math.max(1,Math.floor(T.m()/b.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),P=u(v),w=P.j(b);R(w)||0<w.l(T);)v-=E,P=u(v),w=P.j(b);x(P)&&(P=m),S=S.add(P),T=G(T,w)}return new K(S,T)}n.A=function(T){return $(this,T).h},n.and=function(T){for(var b=Math.max(this.g.length,T.g.length),v=[],E=0;E<b;E++)v[E]=this.i(E)&T.i(E);return new o(v,this.h&T.h)},n.or=function(T){for(var b=Math.max(this.g.length,T.g.length),v=[],E=0;E<b;E++)v[E]=this.i(E)|T.i(E);return new o(v,this.h|T.h)},n.xor=function(T){for(var b=Math.max(this.g.length,T.g.length),v=[],E=0;E<b;E++)v[E]=this.i(E)^T.i(E);return new o(v,this.h^T.h)};function L(T){for(var b=T.g.length+1,v=[],E=0;E<b;E++)v[E]=T.i(E)<<1|T.i(E-1)>>>31;return new o(v,T.h)}function k(T,b){var v=b>>5;b%=32;for(var E=T.g.length-v,S=[],P=0;P<E;P++)S[P]=0<b?T.i(P+v)>>>b|T.i(P+v+1)<<32-b:T.i(P+v);return new o(S,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Xm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Wr=o}).apply(typeof sf<"u"?sf:typeof self<"u"?self:typeof window<"u"?window:{});var Qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zm,bs,eg,oa,kc,tg,ng,rg;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qo=="object"&&Qo];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in f))break e;f=f[C]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,g=!1,C={next:function(){if(!g&&f<a.length){var N=f++;return{value:h(N,a[N]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function y(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function x(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,C,N){for(var J=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)J[ke-2]=arguments[ke];return h.prototype[C].apply(g,J)}}function R(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function D(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const C=a.length||0,N=g.length||0;a.length=C+N;for(let J=0;J<N;J++)a[C+J]=g[J]}else a.push(g)}}class G{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function q(a){return/^[\s\xa0]*$/.test(a)}function K(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var L=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function k(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function T(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function b(a){const h={};for(const f in a)h[f]=a[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,h){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)a[f]=g[f];for(let N=0;N<v.length;N++)f=v[N],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function S(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function P(a){l.setTimeout(()=>{throw a},0)}function w(){var a=Wt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Me{constructor(){this.h=this.g=null}add(h,f){const g=et.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var et=new G(()=>new Le,a=>a.reset());class Le{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Pe,Ee=!1,Wt=new Me,xr=()=>{const a=l.Promise.resolve(void 0);Pe=()=>{a.then(wn)}};var wn=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){P(f)}var h=et;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ee=!1};function Ye(){this.s=this.s,this.C=this.C}Ye.prototype.s=!1,Ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function tt(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var xo=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Ar(a,h){if(tt.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(L){e:{try{$(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Sr[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ar.aa.h.call(this)}}x(Ar,tt);var Sr={2:"touch",3:"pen",4:"mouse"};Ar.prototype.h=function(){Ar.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var sn="closure_listenable_"+(1e6*Math.random()|0),Ao=0;function Kn(a,h,f,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=C,this.key=++Ao,this.da=this.fa=!1}function Hn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Wn(a){this.src=a,this.g={},this.h=0}Wn.prototype.add=function(a,h,f,g,C){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var J=A(a,h,g,C);return-1<J?(h=a[J],f||(h.fa=!1)):(h=new Kn(h,this.src,N,!!g,C),h.fa=f,a.push(h)),h};function I(a,h){var f=h.type;if(f in a.g){var g=a.g[f],C=Array.prototype.indexOf.call(g,h,void 0),N;(N=0<=C)&&Array.prototype.splice.call(g,C,1),N&&(Hn(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function A(a,h,f,g){for(var C=0;C<a.length;++C){var N=a[C];if(!N.da&&N.listener==h&&N.capture==!!f&&N.ha==g)return C}return-1}var O="closure_lm_"+(1e6*Math.random()|0),j={};function U(a,h,f,g,C){if(g&&g.once)return W(a,h,f,g,C);if(Array.isArray(h)){for(var N=0;N<h.length;N++)U(a,h[N],f,g,C);return null}return f=ye(f),a&&a[sn]?a.K(h,f,u(g)?!!g.capture:!!g,C):B(a,h,f,!1,g,C)}function B(a,h,f,g,C,N){if(!h)throw Error("Invalid event type");var J=u(C)?!!C.capture:!!C,ke=ie(a);if(ke||(a[O]=ke=new Wn(a)),f=ke.add(h,f,g,J,N),f.proxy)return f;if(g=Q(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)xo||(C=J),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent(se(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Q(){function a(f){return h.call(a.src,a.listener,f)}const h=X;return a}function W(a,h,f,g,C){if(Array.isArray(h)){for(var N=0;N<h.length;N++)W(a,h[N],f,g,C);return null}return f=ye(f),a&&a[sn]?a.L(h,f,u(g)?!!g.capture:!!g,C):B(a,h,f,!0,g,C)}function H(a,h,f,g,C){if(Array.isArray(h))for(var N=0;N<h.length;N++)H(a,h[N],f,g,C);else g=u(g)?!!g.capture:!!g,f=ye(f),a&&a[sn]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],f=A(N,f,g,C),-1<f&&(Hn(N[f]),Array.prototype.splice.call(N,f,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=ie(a))&&(h=a.g[h.toString()],a=-1,h&&(a=A(h,f,g,C)),(f=-1<a?h[a]:null)&&F(f))}function F(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[sn])I(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(se(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=ie(h))?(I(f,a),f.h==0&&(f.src=null,h[O]=null)):Hn(a)}}}function se(a){return a in j?j[a]:j[a]="on"+a}function X(a,h){if(a.da)a=!0;else{h=new Ar(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&F(a),a=f.call(g,h)}return a}function ie(a){return a=a[O],a instanceof Wn?a:null}var le="__closure_events_fn_"+(1e9*Math.random()>>>0);function ye(a){return typeof a=="function"?a:(a[le]||(a[le]=function(h){return a.handleEvent(h)}),a[le])}function fe(){Ye.call(this),this.i=new Wn(this),this.M=this,this.F=null}x(fe,Ye),fe.prototype[sn]=!0,fe.prototype.removeEventListener=function(a,h,f,g){H(this,a,h,f,g)};function pe(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new tt(h,a);else if(h instanceof tt)h.target=h.target||a;else{var C=h;h=new tt(g,a),E(h,C)}if(C=!0,f)for(var N=f.length-1;0<=N;N--){var J=h.g=f[N];C=Ue(J,g,!0,h)&&C}if(J=h.g=a,C=Ue(J,g,!0,h)&&C,C=Ue(J,g,!1,h)&&C,f)for(N=0;N<f.length;N++)J=h.g=f[N],C=Ue(J,g,!1,h)&&C}fe.prototype.N=function(){if(fe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)Hn(f[g]);delete a.g[h],a.h--}}this.F=null},fe.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},fe.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Ue(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,N=0;N<h.length;++N){var J=h[N];if(J&&!J.da&&J.capture==f){var ke=J.listener,at=J.ha||J.src;J.fa&&I(a.i,J),C=ke.call(at,g)!==!1&&C}}return C&&!g.defaultPrevented}function Ke(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Ct(a){a.g=Ke(()=>{a.g=null,a.i&&(a.i=!1,Ct(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class It extends Ye{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ct(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qt(a){Ye.call(this),this.h=a,this.g={}}x(Qt,Ye);var Xi=[];function dt(a){k(a.g,function(h,f){this.g.hasOwnProperty(f)&&F(h)},a),a.g={}}Qt.prototype.N=function(){Qt.aa.N.call(this),dt(this)},Qt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vt=l.JSON.stringify,So=l.JSON.parse,Ro=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Cl(){}Cl.prototype.h=null;function Ah(a){return a.h||(a.h=a.i())}function Sh(){}var Zi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vl(){tt.call(this,"d")}x(Vl,tt);function Dl(){tt.call(this,"c")}x(Dl,tt);var Rr={},Rh=null;function Po(){return Rh=Rh||new fe}Rr.La="serverreachability";function Ph(a){tt.call(this,Rr.La,a)}x(Ph,tt);function es(a){const h=Po();pe(h,new Ph(h))}Rr.STAT_EVENT="statevent";function Ch(a,h){tt.call(this,Rr.STAT_EVENT,a),this.stat=h}x(Ch,tt);function Et(a){const h=Po();pe(h,new Ch(h,a))}Rr.Ma="timingevent";function Vh(a,h){tt.call(this,Rr.Ma,a),this.size=h}x(Vh,tt);function ts(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function ns(){this.g=!0}ns.prototype.xa=function(){this.g=!1};function Cy(a,h,f,g,C,N){a.info(function(){if(a.g)if(N)for(var J="",ke=N.split("&"),at=0;at<ke.length;at++){var we=ke[at].split("=");if(1<we.length){var ft=we[0];we=we[1];var pt=ft.split("_");J=2<=pt.length&&pt[1]=="type"?J+(ft+"="+we+"&"):J+(ft+"=redacted&")}}else J=null;else J=N;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+f+`
`+J})}function Vy(a,h,f,g,C,N,J){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+f+`
`+N+" "+J})}function hi(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ky(a,f)+(g?" "+g:"")})}function Dy(a,h){a.info(function(){return"TIMEOUT: "+h})}ns.prototype.info=function(){};function ky(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var N=C[0];if(N!="noop"&&N!="stop"&&N!="close")for(var J=1;J<C.length;J++)C[J]=""}}}}return Vt(f)}catch{return h}}var Co={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Dh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},kl;function Vo(){}x(Vo,Cl),Vo.prototype.g=function(){return new XMLHttpRequest},Vo.prototype.i=function(){return{}},kl=new Vo;function Qn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new Qt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new kh}function kh(){this.i=null,this.g="",this.h=!1}var Nh={},Nl={};function Ol(a,h,f){a.L=1,a.v=Oo(Tn(h)),a.m=f,a.P=!0,Oh(a,null)}function Oh(a,h){a.F=Date.now(),Do(a),a.A=Tn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Qh(f.i,"t",g),a.C=0,f=a.j.J,a.h=new kh,a.g=fd(a.j,f?h:null,!a.m),0<a.O&&(a.M=new It(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Xi[0]=C.toString()),C=Xi);for(var N=0;N<C.length;N++){var J=U(f,C[N],g||h.handleEvent,!1,h.h||h);if(!J)break;h.g[J.key]=J}h=a.H?b(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),es(),Cy(a.i,a.u,a.A,a.l,a.R,a.m)}Qn.prototype.ca=function(a){a=a.target;const h=this.M;h&&xn(a)==3?h.j():this.Y(a)},Qn.prototype.Y=function(a){try{if(a==this.g)e:{const pt=xn(this.g);var h=this.g.Ba();const pi=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||nd(this.g)))){this.J||pt!=4||h==7||(h==8||0>=pi?es(3):es(2)),Ml(this);var f=this.g.Z();this.X=f;t:if(Mh(this)){var g=nd(this.g);a="";var C=g.length,N=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pr(this),rs(this);var J="";break t}this.h.i=new l.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(N&&h==C-1)});g.length=0,this.h.g+=a,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=f==200,Vy(this.i,this.u,this.A,this.l,this.R,pt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,at=this.g;if((ke=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(ke)){var we=ke;break t}}we=null}if(f=we)hi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fl(this,f);else{this.o=!1,this.s=3,Et(12),Pr(this),rs(this);break e}}if(this.P){f=!0;let Jt;for(;!this.J&&this.C<J.length;)if(Jt=Ny(this,J),Jt==Nl){pt==4&&(this.s=4,Et(14),f=!1),hi(this.i,this.l,null,"[Incomplete Response]");break}else if(Jt==Nh){this.s=4,Et(15),hi(this.i,this.l,J,"[Invalid Chunk]"),f=!1;break}else hi(this.i,this.l,Jt,null),Fl(this,Jt);if(Mh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||J.length!=0||this.h.h||(this.s=1,Et(16),f=!1),this.o=this.o&&f,!f)hi(this.i,this.l,J,"[Invalid Chunked Response]"),Pr(this),rs(this);else if(0<J.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),ql(ft),ft.M=!0,Et(11))}}else hi(this.i,this.l,J,null),Fl(this,J);pt==4&&Pr(this),this.o&&!this.J&&(pt==4?cd(this.j,this):(this.o=!1,Do(this)))}else Yy(this.g),f==400&&0<J.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),Pr(this),rs(this)}}}catch{}finally{}};function Mh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ny(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Nl:(f=Number(h.substring(f,g)),isNaN(f)?Nh:(g+=1,g+f>h.length?Nl:(h=h.slice(g,g+f),a.C=g+f,h)))}Qn.prototype.cancel=function(){this.J=!0,Pr(this)};function Do(a){a.S=Date.now()+a.I,Fh(a,a.I)}function Fh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ts(m(a.ba,a),h)}function Ml(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Qn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Dy(this.i,this.A),this.L!=2&&(es(),Et(17)),Pr(this),this.s=2,rs(this)):Fh(this,this.S-a)};function rs(a){a.j.G==0||a.J||cd(a.j,a)}function Pr(a){Ml(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,dt(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Fl(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Ll(f.h,a))){if(!a.K&&Ll(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)$o(f),Uo(f);else break e;jl(f),Et(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=ts(m(f.Za,f),6e3));if(1>=Bh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Vr(f,11)}else if((a.K||f.g==a)&&$o(f),!q(h))for(C=f.Da.g.parse(h),h=0;h<C.length;h++){let we=C[h];if(f.T=we[0],we=we[1],f.G==2)if(we[0]=="c"){f.K=we[1],f.ia=we[2];const ft=we[3];ft!=null&&(f.la=ft,f.j.info("VER="+f.la));const pt=we[4];pt!=null&&(f.Aa=pt,f.j.info("SVER="+f.Aa));const pi=we[5];pi!=null&&typeof pi=="number"&&0<pi&&(g=1.5*pi,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Jt=a.g;if(Jt){const qo=Jt.g?Jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qo){var N=g.h;N.g||qo.indexOf("spdy")==-1&&qo.indexOf("quic")==-1&&qo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Ul(N,N.h),N.h=null))}if(g.D){const zl=Jt.g?Jt.g.getResponseHeader("X-HTTP-Session-Id"):null;zl&&(g.ya=zl,Be(g.I,g.D,zl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var J=a;if(g.qa=dd(g,g.J?g.ia:null,g.W),J.K){$h(g.h,J);var ke=J,at=g.L;at&&(ke.I=at),ke.B&&(Ml(ke),Do(ke)),g.g=J}else ad(g);0<f.i.length&&Bo(f)}else we[0]!="stop"&&we[0]!="close"||Vr(f,7);else f.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?Vr(f,7):$l(f):we[0]!="noop"&&f.l&&f.l.ta(we),f.v=0)}}es(4)}catch{}}var Oy=class{constructor(a,h){this.g=a,this.map=h}};function Lh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Uh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Bh(a){return a.h?1:a.g?a.g.size:0}function Ll(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ul(a,h){a.g?a.g.add(h):a.h=h}function $h(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Lh.prototype.cancel=function(){if(this.i=jh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function jh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return R(a.i)}function My(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function Fy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function qh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Fy(a),g=My(a),C=g.length,N=0;N<C;N++)h.call(void 0,g[N],f&&f[N],a)}var zh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ly(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),C=null;if(0<=g){var N=a[f].substring(0,g);C=a[f].substring(g+1)}else N=a[f];h(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Cr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Cr){this.h=a.h,ko(this,a.j),this.o=a.o,this.g=a.g,No(this,a.s),this.l=a.l;var h=a.i,f=new os;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Gh(this,f),this.m=a.m}else a&&(h=String(a).match(zh))?(this.h=!1,ko(this,h[1]||"",!0),this.o=is(h[2]||""),this.g=is(h[3]||"",!0),No(this,h[4]),this.l=is(h[5]||"",!0),Gh(this,h[6]||"",!0),this.m=is(h[7]||"")):(this.h=!1,this.i=new os(null,this.h))}Cr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ss(h,Kh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ss(h,Kh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ss(f,f.charAt(0)=="/"?$y:By,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ss(f,qy)),a.join("")};function Tn(a){return new Cr(a)}function ko(a,h,f){a.j=f?is(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function No(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Gh(a,h,f){h instanceof os?(a.i=h,zy(a.i,a.h)):(f||(h=ss(h,jy)),a.i=new os(h,a.h))}function Be(a,h,f){a.i.set(h,f)}function Oo(a){return Be(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function is(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ss(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Uy),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Uy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Kh=/[#\/\?@]/g,By=/[#\?:]/g,$y=/[#\?]/g,jy=/[#\?@]/g,qy=/#/g;function os(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Jn(a){a.g||(a.g=new Map,a.h=0,a.i&&Ly(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=os.prototype,n.add=function(a,h){Jn(this),this.i=null,a=di(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Hh(a,h){Jn(a),h=di(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Wh(a,h){return Jn(a),h=di(a,h),a.g.has(h)}n.forEach=function(a,h){Jn(this),this.g.forEach(function(f,g){f.forEach(function(C){a.call(h,C,g,this)},this)},this)},n.na=function(){Jn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const C=a[g];for(let N=0;N<C.length;N++)f.push(h[g])}return f},n.V=function(a){Jn(this);let h=[];if(typeof a=="string")Wh(this,a)&&(h=h.concat(this.g.get(di(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},n.set=function(a,h){return Jn(this),this.i=null,a=di(this,a),Wh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Qh(a,h,f){Hh(a,h),0<f.length&&(a.i=null,a.g.set(di(a,h),R(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const N=encodeURIComponent(String(g)),J=this.V(g);for(g=0;g<J.length;g++){var C=N;J[g]!==""&&(C+="="+encodeURIComponent(String(J[g]))),a.push(C)}}return this.i=a.join("&")};function di(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function zy(a,h){h&&!a.j&&(Jn(a),a.i=null,a.g.forEach(function(f,g){var C=g.toLowerCase();g!=C&&(Hh(this,g),Qh(this,C,f))},a)),a.j=h}function Gy(a,h){const f=new ns;if(l.Image){const g=new Image;g.onload=y(Yn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=y(Yn,f,"TestLoadImage: error",!1,h,g),g.onabort=y(Yn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=y(Yn,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function Ky(a,h){const f=new ns,g=new AbortController,C=setTimeout(()=>{g.abort(),Yn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(C),N.ok?Yn(f,"TestPingServer: ok",!0,h):Yn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),Yn(f,"TestPingServer: error",!1,h)})}function Yn(a,h,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function Hy(){this.g=new Ro}function Wy(a,h,f){const g=f||"";try{qh(a,function(C,N){let J=C;u(C)&&(J=Vt(C)),h.push(g+N+"="+encodeURIComponent(J))})}catch(C){throw h.push(g+"type="+encodeURIComponent("_badmap")),C}}function Mo(a){this.l=a.Ub||null,this.j=a.eb||!1}x(Mo,Cl),Mo.prototype.g=function(){return new Fo(this.l,this.j)},Mo.prototype.i=function(a){return function(){return a}}({});function Fo(a,h){fe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Fo,fe),n=Fo.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ls(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,as(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ls(this)),this.g&&(this.readyState=3,ls(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Jh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Jh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?as(this):ls(this),this.readyState==3&&Jh(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,as(this))},n.Qa=function(a){this.g&&(this.response=a,as(this))},n.ga=function(){this.g&&as(this)};function as(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ls(a)}n.setRequestHeader=function(a,h){this.u.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function ls(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Fo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Yh(a){let h="";return k(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Bl(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Yh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Be(a,h,f))}function He(a){fe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(He,fe);var Qy=/^https?$/i,Jy=["POST","PUT"];n=He.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kl.g(),this.v=this.o?Ah(this.o):Ah(kl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){Xh(this,N);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())f.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Jy,h,void 0))||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,J]of f)this.g.setRequestHeader(N,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{td(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Xh(this,N)}};function Xh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Zh(a),Lo(a)}function Zh(a){a.A||(a.A=!0,pe(a,"complete"),pe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pe(this,"complete"),pe(this,"abort"),Lo(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lo(this,!0)),He.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ed(this):this.bb())},n.bb=function(){ed(this)};function ed(a){if(a.h&&typeof o<"u"&&(!a.v[1]||xn(a)!=4||a.Z()!=2)){if(a.u&&xn(a)==4)Ke(a.Ea,0,a);else if(pe(a,"readystatechange"),xn(a)==4){a.h=!1;try{const J=a.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=J===0){var C=String(a.D).match(zh)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),g=!Qy.test(C?C.toLowerCase():"")}f=g}if(f)pe(a,"complete"),pe(a,"success");else{a.m=6;try{var N=2<xn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Zh(a)}}finally{Lo(a)}}}}function Lo(a,h){if(a.g){td(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||pe(a,"ready");try{f.onreadystatechange=g}catch{}}}function td(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function xn(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),So(h)}};function nd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Yy(a){const h={};a=(a.g&&2<=xn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(q(a[g]))continue;var f=S(a[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=h[C]||[];h[C]=N,N.push(f)}T(h,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function cs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function rd(a){this.Aa=0,this.i=[],this.j=new ns,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=cs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=cs("baseRetryDelayMs",5e3,a),this.cb=cs("retryDelaySeedMs",1e4,a),this.Wa=cs("forwardChannelMaxRetries",2,a),this.wa=cs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Lh(a&&a.concurrentRequestLimit),this.Da=new Hy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=rd.prototype,n.la=8,n.G=1,n.connect=function(a,h,f,g){Et(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=dd(this,null,this.W),Bo(this)};function $l(a){if(id(a),a.G==3){var h=a.U++,f=Tn(a.I);if(Be(f,"SID",a.K),Be(f,"RID",h),Be(f,"TYPE","terminate"),us(a,f),h=new Qn(a,a.j,h),h.L=2,h.v=Oo(Tn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=fd(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Do(h)}hd(a)}function Uo(a){a.g&&(ql(a),a.g.cancel(),a.g=null)}function id(a){Uo(a),a.u&&(l.clearTimeout(a.u),a.u=null),$o(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Bo(a){if(!Uh(a.h)&&!a.s){a.s=!0;var h=a.Ga;Pe||xr(),Ee||(Pe(),Ee=!0),Wt.add(h,a),a.B=0}}function Xy(a,h){return Bh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ts(m(a.Ga,a,h),ud(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Qn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=b(N),E(N,this.S)):N=this.S),this.m!==null||this.O||(C.H=N,N=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=od(this,C,h),f=Tn(this.I),Be(f,"RID",a),Be(f,"CVER",22),this.D&&Be(f,"X-HTTP-Session-Id",this.D),us(this,f),N&&(this.O?h="headers="+encodeURIComponent(String(Yh(N)))+"&"+h:this.m&&Bl(f,this.m,N)),Ul(this.h,C),this.Ua&&Be(f,"TYPE","init"),this.P?(Be(f,"$req",h),Be(f,"SID","null"),C.T=!0,Ol(C,f,null)):Ol(C,f,h),this.G=2}}else this.G==3&&(a?sd(this,a):this.i.length==0||Uh(this.h)||sd(this))};function sd(a,h){var f;h?f=h.l:f=a.U++;const g=Tn(a.I);Be(g,"SID",a.K),Be(g,"RID",f),Be(g,"AID",a.T),us(a,g),a.m&&a.o&&Bl(g,a.m,a.o),f=new Qn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=od(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ul(a.h,f),Ol(f,g,h)}function us(a,h){a.H&&k(a.H,function(f,g){Be(h,g,f)}),a.l&&qh({},function(f,g){Be(h,g,f)})}function od(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var C=a.i;let N=-1;for(;;){const J=["count="+f];N==-1?0<f?(N=C[0].g,J.push("ofs="+N)):N=0:J.push("ofs="+N);let ke=!0;for(let at=0;at<f;at++){let we=C[at].g;const ft=C[at].map;if(we-=N,0>we)N=Math.max(0,C[at].g-100),ke=!1;else try{Wy(ft,J,"req"+we+"_")}catch{g&&g(ft)}}if(ke){g=J.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function ad(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Pe||xr(),Ee||(Pe(),Ee=!0),Wt.add(h,a),a.v=0}}function jl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ts(m(a.Fa,a),ud(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,ld(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ts(m(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Uo(this),ld(this))};function ql(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ld(a){a.g=new Qn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Tn(a.qa);Be(h,"RID","rpc"),Be(h,"SID",a.K),Be(h,"AID",a.T),Be(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Be(h,"TO",a.ja),Be(h,"TYPE","xmlhttp"),us(a,h),a.m&&a.o&&Bl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Oo(Tn(h)),f.m=null,f.P=!0,Oh(f,a)}n.Za=function(){this.C!=null&&(this.C=null,Uo(this),jl(this),Et(19))};function $o(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function cd(a,h){var f=null;if(a.g==h){$o(a),ql(a),a.g=null;var g=2}else if(Ll(a.h,h))f=h.D,$h(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;g=Po(),pe(g,new Vh(g,f)),Bo(a)}else ad(a);else if(C=h.s,C==3||C==0&&0<h.X||!(g==1&&Xy(a,h)||g==2&&jl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),C){case 1:Vr(a,5);break;case 4:Vr(a,10);break;case 3:Vr(a,6);break;default:Vr(a,2)}}}function ud(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Vr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const C=!g;g=new Cr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ko(g,"https"),Oo(g),C?Gy(g.toString(),f):Ky(g.toString(),f)}else Et(2);a.G=0,a.l&&a.l.sa(h),hd(a),id(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function hd(a){if(a.G=0,a.ka=[],a.l){const h=jh(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ka,h),D(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function dd(a,h,f){var g=f instanceof Cr?Tn(f):new Cr(f);if(g.g!="")h&&(g.g=h+"."+g.g),No(g,g.s);else{var C=l.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var N=new Cr(null);g&&ko(N,g),h&&(N.g=h),C&&No(N,C),f&&(N.l=f),g=N}return f=a.D,h=a.ya,f&&h&&Be(g,f,h),Be(g,"VER",a.la),us(a,g),g}function fd(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new He(new Mo({eb:f})):new He(a.pa),h.Ha(a.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function pd(){}n=pd.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function jo(){}jo.prototype.g=function(a,h){return new Mt(a,h)};function Mt(a,h){fe.call(this),this.g=new rd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!q(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!q(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new fi(this)}x(Mt,fe),Mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){$l(this.g)},Mt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Vt(a),a=f);h.i.push(new Oy(h.Ya++,a)),h.G==3&&Bo(h)},Mt.prototype.N=function(){this.g.l=null,delete this.j,$l(this.g),delete this.g,Mt.aa.N.call(this)};function md(a){Vl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}x(md,Vl);function gd(){Dl.call(this),this.status=1}x(gd,Dl);function fi(a){this.g=a}x(fi,pd),fi.prototype.ua=function(){pe(this.g,"a")},fi.prototype.ta=function(a){pe(this.g,new md(a))},fi.prototype.sa=function(a){pe(this.g,new gd)},fi.prototype.ra=function(){pe(this.g,"b")},jo.prototype.createWebChannel=jo.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,rg=function(){return new jo},ng=function(){return Po()},tg=Rr,kc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Co.NO_ERROR=0,Co.TIMEOUT=8,Co.HTTP_ERROR=6,oa=Co,Dh.COMPLETE="complete",eg=Dh,Sh.EventType=Zi,Zi.OPEN="a",Zi.CLOSE="b",Zi.ERROR="c",Zi.MESSAGE="d",fe.prototype.listen=fe.prototype.K,bs=Sh,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,Zm=He}).apply(typeof Qo<"u"?Qo:typeof self<"u"?self:typeof window<"u"?window:{});const of="@firebase/firestore";/**
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
 */class Tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
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
 */let Hi="10.14.0";/**
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
 */const Zr=new Iu("@firebase/firestore");function Ii(){return Zr.logLevel}function z(n,...e){if(Zr.logLevel<=ve.DEBUG){const t=e.map(Tu);Zr.debug(`Firestore (${Hi}): ${n}`,...t)}}function St(n,...e){if(Zr.logLevel<=ve.ERROR){const t=e.map(Tu);Zr.error(`Firestore (${Hi}): ${n}`,...t)}}function Ws(n,...e){if(Zr.logLevel<=ve.WARN){const t=e.map(Tu);Zr.warn(`Firestore (${Hi}): ${n}`,...t)}}function Tu(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function re(n="Unexpected state"){const e=`FIRESTORE (${Hi}) INTERNAL ASSERTION FAILED: `+n;throw St(e),new Error(e)}function oe(n,e){n||re()}function de(n,e){return n}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends qn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class rw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Tt.UNAUTHENTICATED))}shutdown(){}}class sw{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){oe(this.o===void 0);let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new pn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string"),new rw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Tt(e)}}class ow{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class aw{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new ow(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){oe(this.o===void 0);const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(oe(typeof t.token=="string"),this.R=t.token,new lw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function uw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class ig{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=uw(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function me(n,e){return n<e?-1:n>e?1:0}function Ni(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function sg(n){return n+"\0"}/**
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
 */class Ge{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Y(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Y(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Y(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ge(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new Ge(0,0))}static max(){return new ae(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Qs{constructor(e,t,r){t===void 0?t=0:t>e.length&&re(),r===void 0?r=e.length-t:r>e.length-t&&re(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Qs.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qs?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Re extends Qs{construct(e,t,r){return new Re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Re(t)}static emptyPath(){return new Re([])}}const hw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends Qs{construct(e,t,r){return new ze(e,t,r)}static isValidIdentifier(e){return hw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Y(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new Y(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new Y(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(t)}static emptyPath(){return new ze([])}}/**
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
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Re.fromString(e))}static fromName(e){return new Z(Re.fromString(e).popFirst(5))}static empty(){return new Z(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Re(e.slice()))}}/**
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
 */class Ca{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Nc(n){return n.fields.find(e=>e.kind===2)}function Fr(n){return n.fields.filter(e=>e.kind!==2)}Ca.UNKNOWN_ID=-1;class aa{constructor(e,t){this.fieldPath=e,this.kind=t}}class Js{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Js(0,jt.min())}}function dw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ae.fromTimestamp(r===1e9?new Ge(t+1,0):new Ge(t,r));return new jt(i,Z.empty(),e)}function og(n){return new jt(n.readTime,n.key,-1)}class jt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new jt(ae.min(),Z.empty(),-1)}static max(){return new jt(ae.max(),Z.empty(),-1)}}function xu(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(n.documentKey,e.documentKey),t!==0?t:me(n.largestBatchId,e.largestBatchId))}/**
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
 */const ag="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function li(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==ag)throw n;z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(i=>i?V.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new V((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(d=>{o[u]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,t){return new V((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
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
 */class al{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new pn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Vs(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Au(r.target.error);this.V.reject(new Vs(e,i))}}static open(e,t,r,i){try{return new al(t,e.transaction(i,r))}catch(s){throw new Vs(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(z("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new pw(t)}}class dr{constructor(e,t,r){this.name=e,this.version=t,this.p=r,dr.S(nt())===12.2&&St("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return z("SimpleDb","Removing database:",e),Ur(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Km())return!1;if(dr.v())return!0;const e=nt(),t=dr.S(e),r=0<t&&t<10,i=cg(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(z("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Vs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new Y(M.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new Y(M.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Vs(e,o))},i.onupgradeneeded=s=>{z("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{z("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const l=al.open(this.db,e,s?"readonly":"readwrite",r),c=i(l).next(u=>(l.g(),u)).catch(u=>(l.abort(u),V.reject(u))).toPromise();return c.catch(()=>{}),await l.m,c}catch(l){const c=l,u=c.name!=="FirebaseError"&&o<3;if(z("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function cg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class fw{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Ur(this.B.delete())}}class Vs extends Y{constructor(e,t){super(M.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function wr(n){return n.name==="IndexedDbTransactionError"}class pw{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(z("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(z("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ur(r)}add(e){return z("SimpleDb","ADD",this.store.name,e,e),Ur(this.store.add(e))}get(e){return Ur(this.store.get(e)).next(t=>(t===void 0&&(t=null),z("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return z("SimpleDb","DELETE",this.store.name,e),Ur(this.store.delete(e))}count(){return z("SimpleDb","COUNT",this.store.name),Ur(this.store.count())}U(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new V((o,l)=>{s.onerror=c=>{l(c.target.error)},s.onsuccess=c=>{o(c.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(l,c)=>{o.push(c)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new V((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,t){z("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,l)=>l.delete())}J(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Y(e){const t=this.cursor({});return new V((r,i)=>{t.onerror=s=>{const o=Au(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(l=>{l?o.continue():r()}):r()}})}W(e,t){const r=[];return new V((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const l=o.target.result;if(!l)return void i();const c=new fw(l),u=t(l.primaryKey,l.value,c);if(u instanceof V){const d=u.catch(p=>(c.done(),V.reject(p)));r.push(d)}c.isDone?i():c.K===null?l.continue():l.continue(c.K)}}).next(()=>V.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ur(n){return new V((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Au(r.target.error);t(i)}})}let af=!1;function Au(n){const e=dr.S(nt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new Y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return af||(af=!0,setTimeout(()=>{throw r},0)),r}}return n}class mw{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){z("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{z("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){wr(t)?z("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await li(t)}await this.X(6e4)})}}class gw{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let i=t,s=!0;return V.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return z("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(l=>{i-=l,r.add(o)});s=!1})).next(()=>t-i)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(l=>(z("IndexBackfiller",`Updating offset: ${l}`),this.localStore.indexManager.updateCollectionGroup(e,t,l))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=og(s);xu(o,r)>0&&(r=o)}),new jt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class zt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}zt.oe=-1;function ll(n){return n==null}function Ys(n){return n===0&&1/n==-1/0}function _w(n){return typeof n=="number"&&Number.isInteger(n)&&!Ys(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Rt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=lf(e)),e=yw(n.get(t),e);return lf(e)}function yw(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function lf(n){return n+""}function dn(n){const e=n.length;if(oe(e>=2),e===2)return oe(n.charAt(0)===""&&n.charAt(1)===""),Re.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&re(),n.charAt(o+1)){case"":const l=n.substring(s,o);let c;i.length===0?c=l:(i+=l,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:re()}s=o+2}return new Re(r)}/**
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
 */const cf=["userId","batchId"];/**
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
 */function la(n,e){return[n,Rt(e)]}function ug(n,e,t){return[n,Rt(e),t]}const vw={},bw=["prefixPath","collectionGroup","readTime","documentId"],Iw=["prefixPath","collectionGroup","documentId"],Ew=["collectionGroup","readTime","prefixPath","documentId"],ww=["canonicalId","targetId"],Tw=["targetId","path"],xw=["path","targetId"],Aw=["collectionId","parent"],Sw=["indexId","uid"],Rw=["uid","sequenceNumber"],Pw=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Cw=["indexId","uid","orderedDocumentKey"],Vw=["userId","collectionPath","documentId"],Dw=["userId","collectionPath","largestBatchId"],kw=["userId","collectionGroup","largestBatchId"],hg=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Nw=[...hg,"documentOverlays"],dg=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],fg=dg,Su=[...fg,"indexConfiguration","indexState","indexEntries"],Ow=Su,Mw=[...Su,"globals"];/**
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
 */class Oc extends lg{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function rt(n,e){const t=de(n);return dr.F(t._e,e)}/**
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
 */function uf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ci(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function pg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class qe{constructor(e,t){this.comparator=e,this.root=t||ut.EMPTY}insert(e,t){return new qe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jo(this.root,e,this.comparator,!0)}}class Jo{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??ut.RED,this.left=i??ut.EMPTY,this.right=s??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ut(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ut.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ut(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ve{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hf(this.data.getIterator())}getIteratorFrom(e){return new hf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ve(this.comparator);return t.data=e,t}}class hf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function gi(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Ot{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new Ot([])}unionWith(e){let t=new Ve(ze.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ot(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ni(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class mg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new mg("Invalid base64 string: "+s):s}}(e);return new Ze(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ze(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const Fw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ln(n){if(oe(!!n),typeof n=="string"){let e=0;const t=Fw.exec(n);if(oe(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$e(n.seconds),nanos:$e(n.nanos)}}function $e(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function yr(n){return typeof n=="string"?Ze.fromBase64String(n):Ze.fromUint8Array(n)}/**
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
 */function Ru(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Pu(n){const e=n.mapValue.fields.__previous_value__;return Ru(e)?Pu(e):e}function Xs(n){const e=Ln(n.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
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
 */class Lw{constructor(e,t,r,i,s,o,l,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class ei{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ei("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ei&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const or={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ca={nullValue:"NULL_VALUE"};function ti(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ru(n)?4:gg(n)?9007199254740991:cl(n)?10:11:re()}function In(n,e){if(n===e)return!0;const t=ti(n);if(t!==ti(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Xs(n).isEqual(Xs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ln(i.timestampValue),l=Ln(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return yr(i.bytesValue).isEqual(yr(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return $e(i.geoPointValue.latitude)===$e(s.geoPointValue.latitude)&&$e(i.geoPointValue.longitude)===$e(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return $e(i.integerValue)===$e(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=$e(i.doubleValue),l=$e(s.doubleValue);return o===l?Ys(o)===Ys(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return Ni(n.arrayValue.values||[],e.arrayValue.values||[],In);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(uf(o)!==uf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!In(o[c],l[c])))return!1;return!0}(n,e);default:return re()}}function Zs(n,e){return(n.values||[]).find(t=>In(t,e))!==void 0}function vr(n,e){if(n===e)return 0;const t=ti(n),r=ti(e);if(t!==r)return me(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return me(n.booleanValue,e.booleanValue);case 2:return function(s,o){const l=$e(s.integerValue||s.doubleValue),c=$e(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return df(n.timestampValue,e.timestampValue);case 4:return df(Xs(n),Xs(e));case 5:return me(n.stringValue,e.stringValue);case 6:return function(s,o){const l=yr(s),c=yr(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=me(l[u],c[u]);if(d!==0)return d}return me(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const l=me($e(s.latitude),$e(o.latitude));return l!==0?l:me($e(s.longitude),$e(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ff(n.arrayValue,e.arrayValue);case 10:return function(s,o){var l,c,u,d;const p=s.fields||{},m=o.fields||{},y=(l=p.value)===null||l===void 0?void 0:l.arrayValue,x=(c=m.value)===null||c===void 0?void 0:c.arrayValue,R=me(((u=y==null?void 0:y.values)===null||u===void 0?void 0:u.length)||0,((d=x==null?void 0:x.values)===null||d===void 0?void 0:d.length)||0);return R!==0?R:ff(y,x)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===or.mapValue&&o===or.mapValue)return 0;if(s===or.mapValue)return 1;if(o===or.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=me(c[p],d[p]);if(m!==0)return m;const y=vr(l[c[p]],u[d[p]]);if(y!==0)return y}return me(c.length,d.length)}(n.mapValue,e.mapValue);default:throw re()}}function df(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return me(n,e);const t=Ln(n),r=Ln(e),i=me(t.seconds,r.seconds);return i!==0?i:me(t.nanos,r.nanos)}function ff(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=vr(t[i],r[i]);if(s)return s}return me(t.length,r.length)}function Oi(n){return Mc(n)}function Mc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ln(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return yr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Mc(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Mc(t.fields[o])}`;return i+"}"}(n.mapValue):re()}function eo(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Fc(n){return!!n&&"integerValue"in n}function to(n){return!!n&&"arrayValue"in n}function pf(n){return!!n&&"nullValue"in n}function mf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ua(n){return!!n&&"mapValue"in n}function cl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ds(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ci(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ds(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ds(n.arrayValue.values[t]);return e}return Object.assign({},n)}function gg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const _g={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function Uw(n){return"nullValue"in n?ca:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?eo(ei.empty(),Z.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?cl(n)?_g:{mapValue:{}}:re()}function Bw(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?eo(ei.empty(),Z.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?_g:"mapValue"in n?cl(n)?{mapValue:{}}:or:re()}function gf(n,e){const t=vr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function _f(n,e){const t=vr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ua(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ds(t)}setAll(e){let t=ze.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=l.popLast()}o?r[l.lastSegment()]=Ds(o):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ua(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ua(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){ci(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _t(Ds(this.value))}}function yg(n){const e=[];return ci(n.fields,(t,r)=>{const i=new ze([t]);if(ua(r)){const s=yg(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ot(e)}/**
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
 */class We{constructor(e,t,r,i,s,o,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new We(e,0,ae.min(),ae.min(),ae.min(),_t.empty(),0)}static newFoundDocument(e,t,r,i){return new We(e,1,t,ae.min(),r,i,0)}static newNoDocument(e,t){return new We(e,2,t,ae.min(),ae.min(),_t.empty(),0)}static newUnknownDocument(e,t){return new We(e,3,t,ae.min(),ae.min(),_t.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof We&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new We(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Mi{constructor(e,t){this.position=e,this.inclusive=t}}function yf(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=Z.comparator(Z.fromName(o.referenceValue),t.key):r=vr(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function vf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!In(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class no{constructor(e,t="asc"){this.field=e,this.dir=t}}function $w(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class vg{}class be extends vg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new jw(e,t,r):t==="array-contains"?new Gw(e,r):t==="in"?new xg(e,r):t==="not-in"?new Kw(e,r):t==="array-contains-any"?new Hw(e,r):new be(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new qw(e,r):new zw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(vr(t,this.value)):t!==null&&ti(this.value)===ti(t)&&this.matchesComparison(vr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ce extends vg{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ce(e,t)}matches(e){return Fi(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Fi(n){return n.op==="and"}function Lc(n){return n.op==="or"}function Cu(n){return bg(n)&&Fi(n)}function bg(n){for(const e of n.filters)if(e instanceof Ce)return!1;return!0}function Uc(n){if(n instanceof be)return n.field.canonicalString()+n.op.toString()+Oi(n.value);if(Cu(n))return n.filters.map(e=>Uc(e)).join(",");{const e=n.filters.map(t=>Uc(t)).join(",");return`${n.op}(${e})`}}function Ig(n,e){return n instanceof be?function(r,i){return i instanceof be&&r.op===i.op&&r.field.isEqual(i.field)&&In(r.value,i.value)}(n,e):n instanceof Ce?function(r,i){return i instanceof Ce&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Ig(o,i.filters[l]),!0):!1}(n,e):void re()}function Eg(n,e){const t=n.filters.concat(e);return Ce.create(t,n.op)}function wg(n){return n instanceof be?function(t){return`${t.field.canonicalString()} ${t.op} ${Oi(t.value)}`}(n):n instanceof Ce?function(t){return t.op.toString()+" {"+t.getFilters().map(wg).join(" ,")+"}"}(n):"Filter"}class jw extends be{constructor(e,t,r){super(e,t,r),this.key=Z.fromName(r.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}}class qw extends be{constructor(e,t){super(e,"in",t),this.keys=Tg("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class zw extends be{constructor(e,t){super(e,"not-in",t),this.keys=Tg("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Tg(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Z.fromName(r.referenceValue))}class Gw extends be{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return to(t)&&Zs(t.arrayValue,this.value)}}class xg extends be{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Zs(this.value.arrayValue,t)}}class Kw extends be{constructor(e,t){super(e,"not-in",t)}matches(e){if(Zs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Zs(this.value.arrayValue,t)}}class Hw extends be{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!to(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Zs(this.value.arrayValue,r))}}/**
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
 */class Ww{constructor(e,t=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Bc(n,e=null,t=[],r=[],i=null,s=null,o=null){return new Ww(n,e,t,r,i,s,o)}function ni(n){const e=de(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Uc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ll(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Oi(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Oi(r)).join(",")),e.ue=t}return e.ue}function po(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!$w(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ig(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!vf(n.startAt,e.startAt)&&vf(n.endAt,e.endAt)}function Va(n){return Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Da(n,e){return n.filters.filter(t=>t instanceof be&&t.field.isEqual(e))}function bf(n,e,t){let r=ca,i=!0;for(const s of Da(n,e)){let o=ca,l=!0;switch(s.op){case"<":case"<=":o=Uw(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,l=!1;break;case"!=":case"not-in":o=ca}gf({value:r,inclusive:i},{value:o,inclusive:l})<0&&(r=o,i=l)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];gf({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function If(n,e,t){let r=or,i=!0;for(const s of Da(n,e)){let o=or,l=!0;switch(s.op){case">=":case">":o=Bw(s.value),l=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,l=!1;break;case"!=":case"not-in":o=or}_f({value:r,inclusive:i},{value:o,inclusive:l})>0&&(r=o,i=l)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];_f({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Wi{constructor(e,t=null,r=[],i=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Qw(n,e,t,r,i,s,o,l){return new Wi(n,e,t,r,i,s,o,l)}function mo(n){return new Wi(n)}function Ef(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ag(n){return n.collectionGroup!==null}function ks(n){const e=de(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ve(ze.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new no(s,r))}),t.has(ze.keyField().canonicalString())||e.ce.push(new no(ze.keyField(),r))}return e.ce}function Kt(n){const e=de(n);return e.le||(e.le=Jw(e,ks(n))),e.le}function Jw(n,e){if(n.limitType==="F")return Bc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new no(i.field,s)});const t=n.endAt?new Mi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Mi(n.startAt.position,n.startAt.inclusive):null;return Bc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function $c(n,e){const t=n.filters.concat([e]);return new Wi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ka(n,e,t){return new Wi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ul(n,e){return po(Kt(n),Kt(e))&&n.limitType===e.limitType}function Sg(n){return`${ni(Kt(n))}|lt:${n.limitType}`}function Ei(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>wg(i)).join(", ")}]`),ll(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Oi(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Oi(i)).join(",")),`Target(${r})`}(Kt(n))}; limitType=${n.limitType})`}function go(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Z.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of ks(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,l,c){const u=yf(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,ks(r),i)||r.endAt&&!function(o,l,c){const u=yf(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,ks(r),i))}(n,e)}function Yw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Rg(n){return(e,t)=>{let r=!1;for(const i of ks(n)){const s=Xw(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Xw(n,e,t){const r=n.field.isKeyField()?Z.comparator(e.key,t.key):function(s,o,l){const c=o.data.field(s),u=l.data.field(s);return c!==null&&u!==null?vr(c,u):re()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
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
 */class Tr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ci(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return pg(this.inner)}size(){return this.innerSize}}/**
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
 */const Zw=new qe(Z.comparator);function Lt(){return Zw}const Pg=new qe(Z.comparator);function Is(...n){let e=Pg;for(const t of n)e=e.insert(t.key,t);return e}function Cg(n){let e=Pg;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function fn(){return Ns()}function Vg(){return Ns()}function Ns(){return new Tr(n=>n.toString(),(n,e)=>n.isEqual(e))}const eT=new qe(Z.comparator),tT=new Ve(Z.comparator);function _e(...n){let e=tT;for(const t of n)e=e.add(t);return e}const nT=new Ve(me);function rT(){return nT}/**
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
 */function Vu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ys(e)?"-0":e}}function Dg(n){return{integerValue:""+n}}function iT(n,e){return _w(e)?Dg(e):Vu(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class hl{constructor(){this._=void 0}}function sT(n,e,t){return n instanceof Li?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ru(s)&&(s=Pu(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Ui?Ng(n,e):n instanceof Bi?Og(n,e):function(i,s){const o=kg(i,s),l=wf(o)+wf(i.Pe);return Fc(o)&&Fc(i.Pe)?Dg(l):Vu(i.serializer,l)}(n,e)}function oT(n,e,t){return n instanceof Ui?Ng(n,e):n instanceof Bi?Og(n,e):t}function kg(n,e){return n instanceof ro?function(r){return Fc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Li extends hl{}class Ui extends hl{constructor(e){super(),this.elements=e}}function Ng(n,e){const t=Mg(e);for(const r of n.elements)t.some(i=>In(i,r))||t.push(r);return{arrayValue:{values:t}}}class Bi extends hl{constructor(e){super(),this.elements=e}}function Og(n,e){let t=Mg(e);for(const r of n.elements)t=t.filter(i=>!In(i,r));return{arrayValue:{values:t}}}class ro extends hl{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function wf(n){return $e(n.integerValue||n.doubleValue)}function Mg(n){return to(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Fg{constructor(e,t){this.field=e,this.transform=t}}function aT(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Ui&&i instanceof Ui||r instanceof Bi&&i instanceof Bi?Ni(r.elements,i.elements,In):r instanceof ro&&i instanceof ro?In(r.Pe,i.Pe):r instanceof Li&&i instanceof Li}(n.transform,e.transform)}class lT{constructor(e,t){this.version=e,this.transformResults=t}}class yt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new yt}static exists(e){return new yt(void 0,e)}static updateTime(e){return new yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ha(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class dl{}function Lg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new fl(n.key,yt.none()):new Qi(n.key,n.data,yt.none());{const t=n.data,r=_t.empty();let i=new Ve(ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zn(n.key,r,new Ot(i.toArray()),yt.none())}}function cT(n,e,t){n instanceof Qi?function(i,s,o){const l=i.value.clone(),c=xf(i.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof zn?function(i,s,o){if(!ha(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=xf(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Ug(i)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Os(n,e,t,r){return n instanceof Qi?function(s,o,l,c){if(!ha(s.precondition,o))return l;const u=s.value.clone(),d=Af(s.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof zn?function(s,o,l,c){if(!ha(s.precondition,o))return l;const u=Af(s.fieldTransforms,c,o),d=o.data;return d.setAll(Ug(s)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(s,o,l){return ha(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function uT(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=kg(r.transform,i||null);s!=null&&(t===null&&(t=_t.empty()),t.set(r.field,s))}return t||null}function Tf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ni(r,i,(s,o)=>aT(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Qi extends dl{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zn extends dl{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ug(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function xf(n,e,t){const r=new Map;oe(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,oT(o,l,t[i]))}return r}function Af(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,sT(s,o,e))}return r}class fl extends dl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Bg extends dl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Du{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&cT(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Os(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Os(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Vg();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=t.has(i.key)?null:l;const c=Lg(o,l);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),_e())}isEqual(e){return this.batchId===e.batchId&&Ni(this.mutations,e.mutations,(t,r)=>Tf(t,r))&&Ni(this.baseMutations,e.baseMutations,(t,r)=>Tf(t,r))}}class ku{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){oe(e.mutations.length===r.length);let i=function(){return eT}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ku(e,t,r,i)}}/**
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
 */class Nu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class hT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Xe,Ie;function dT(n){switch(n){default:return re();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function $g(n){if(n===void 0)return St("GRPC error has no .code"),M.UNKNOWN;switch(n){case Xe.OK:return M.OK;case Xe.CANCELLED:return M.CANCELLED;case Xe.UNKNOWN:return M.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return M.INTERNAL;case Xe.UNAVAILABLE:return M.UNAVAILABLE;case Xe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Xe.NOT_FOUND:return M.NOT_FOUND;case Xe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Xe.ABORTED:return M.ABORTED;case Xe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Xe.DATA_LOSS:return M.DATA_LOSS;default:return re()}}(Ie=Xe||(Xe={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function fT(){return new TextEncoder}/**
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
 */const pT=new Wr([4294967295,4294967295],0);function Sf(n){const e=fT().encode(n),t=new Xm;return t.update(e),new Uint8Array(t.digest())}function Rf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Wr([t,r],0),new Wr([i,s],0)]}class Ou{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Es(`Invalid padding: ${t}`);if(r<0)throw new Es(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Es(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Es(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Wr.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(Wr.fromNumber(r)));return i.compare(pT)===1&&(i=new Wr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Sf(e),[r,i]=Rf(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ou(s,i,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const t=Sf(e),[r,i]=Rf(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Es extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class pl{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,_o.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new pl(ae.min(),i,new qe(me),Lt(),_e())}}class _o{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new _o(r,t,_e(),_e(),_e())}}/**
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
 */class da{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class jg{constructor(e,t){this.targetId=e,this.me=t}}class qg{constructor(e,t,r=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Pf{constructor(){this.fe=0,this.ge=Vf(),this.pe=Ze.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=_e(),t=_e(),r=_e();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:re()}}),new _o(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Vf()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,oe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class mT{constructor(e){this.Le=e,this.Be=new Map,this.ke=Lt(),this.qe=Cf(),this.Qe=new qe(me)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:re()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Va(s))if(r===0){const o=new Z(s.path);this.Ue(t,o,We.newNoDocument(o,ae.min()))}else oe(r===1);else{const o=this.Ye(t);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,u)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,l;try{o=yr(r).toUint8Array()}catch(c){if(c instanceof mg)return Ws("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ou(o,i,s)}catch(c){return Ws(c instanceof Es?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Va(l.target)){const c=new Z(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,We.newNoDocument(c,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let r=_e();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new pl(e,t,this.Qe,this.ke,r);return this.ke=Lt(),this.qe=Cf(),this.Qe=new qe(me),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Pf,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ve(me),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||z("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Pf),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Cf(){return new qe(Z.comparator)}function Vf(){return new qe(Z.comparator)}const gT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),_T=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),yT=(()=>({and:"AND",or:"OR"}))();class vT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function jc(n,e){return n.useProto3Json||ll(e)?e:{value:e}}function $i(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function bT(n,e){return $i(n,e.toTimestamp())}function Pt(n){return oe(!!n),ae.fromTimestamp(function(t){const r=Ln(t);return new Ge(r.seconds,r.nanos)}(n))}function Mu(n,e){return qc(n,e).canonicalString()}function qc(n,e){const t=function(i){return new Re(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Gg(n){const e=Re.fromString(n);return oe(e_(e)),e}function Na(n,e){return Mu(n.databaseId,e.path)}function Qr(n,e){const t=Gg(e);if(t.get(1)!==n.databaseId.projectId)throw new Y(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Y(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Z(Wg(t))}function Kg(n,e){return Mu(n.databaseId,e)}function Hg(n){const e=Gg(n);return e.length===4?Re.emptyPath():Wg(e)}function zc(n){return new Re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Wg(n){return oe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Df(n,e,t){return{name:Na(n,e),fields:t.value.mapValue.fields}}function IT(n,e,t){const r=Qr(n,e.name),i=Pt(e.updateTime),s=e.createTime?Pt(e.createTime):ae.min(),o=new _t({mapValue:{fields:e.fields}}),l=We.newFoundDocument(r,i,s,o);return t&&l.setHasCommittedMutations(),t?l.setHasCommittedMutations():l}function ET(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,d){return u.useProto3Json?(oe(d===void 0||typeof d=="string"),Ze.fromBase64String(d||"")):(oe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Ze.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?M.UNKNOWN:$g(u.code);return new Y(d,u.message||"")}(o);t=new qg(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Qr(n,r.document.name),s=Pt(r.document.updateTime),o=r.document.createTime?Pt(r.document.createTime):ae.min(),l=new _t({mapValue:{fields:r.document.fields}}),c=We.newFoundDocument(i,s,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];t=new da(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Qr(n,r.document),s=r.readTime?Pt(r.readTime):ae.min(),o=We.newNoDocument(i,s),l=r.removedTargetIds||[];t=new da([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Qr(n,r.document),s=r.removedTargetIds||[];t=new da([],s,i,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new hT(i,s),l=r.targetId;t=new jg(l,o)}}return t}function Oa(n,e){let t;if(e instanceof Qi)t={update:Df(n,e.key,e.value)};else if(e instanceof fl)t={delete:Na(n,e.key)};else if(e instanceof zn)t={update:Df(n,e.key,e.data),updateMask:RT(e.fieldMask)};else{if(!(e instanceof Bg))return re();t={verify:Na(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Li)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ui)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Bi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ro)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw re()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:bT(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:re()}(n,e.precondition)),t}function Gc(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?yt.updateTime(Pt(s.updateTime)):s.exists!==void 0?yt.exists(s.exists):yt.none()}(e.currentDocument):yt.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,l){let c=null;if("setToServerValue"in l)oe(l.setToServerValue==="REQUEST_TIME"),c=new Li;else if("appendMissingElements"in l){const d=l.appendMissingElements.values||[];c=new Ui(d)}else if("removeAllFromArray"in l){const d=l.removeAllFromArray.values||[];c=new Bi(d)}else"increment"in l?c=new ro(o,l.increment):re();const u=ze.fromServerFormat(l.fieldPath);return new Fg(u,c)}(n,i)):[];if(e.update){e.update.name;const i=Qr(n,e.update.name),s=new _t({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new Ot(u.map(d=>ze.fromServerFormat(d)))}(e.updateMask);return new zn(i,s,o,t,r)}return new Qi(i,s,t,r)}if(e.delete){const i=Qr(n,e.delete);return new fl(i,t)}if(e.verify){const i=Qr(n,e.verify);return new Bg(i,t)}return re()}function wT(n,e){return n&&n.length>0?(oe(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?Pt(i.updateTime):Pt(s);return o.isEqual(ae.min())&&(o=Pt(s)),new lT(o,i.transformResults||[])}(t,e))):[]}function Qg(n,e){return{documents:[Kg(n,e.path)]}}function Jg(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Kg(n,i);const s=function(u){if(u.length!==0)return Zg(Ce.create(u,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:wi(m.field),direction:xT(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=jc(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:t,parent:i}}function Yg(n){let e=Hg(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){oe(r===1);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=function(p){const m=Xg(p);return m instanceof Ce&&Cu(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(x){return new no(Ti(x.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,ll(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(p){const m=!!p.before,y=p.values||[];return new Mi(y,m)}(t.startAt));let u=null;return t.endAt&&(u=function(p){const m=!p.before,y=p.values||[];return new Mi(y,m)}(t.endAt)),Qw(e,i,o,s,l,"F",c,u)}function TT(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Xg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ti(t.unaryFilter.field);return be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ti(t.unaryFilter.field);return be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ti(t.unaryFilter.field);return be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ti(t.unaryFilter.field);return be.create(o,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(n):n.fieldFilter!==void 0?function(t){return be.create(Ti(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ce.create(t.compositeFilter.filters.map(r=>Xg(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re()}}(t.compositeFilter.op))}(n):re()}function xT(n){return gT[n]}function AT(n){return _T[n]}function ST(n){return yT[n]}function wi(n){return{fieldPath:n.canonicalString()}}function Ti(n){return ze.fromServerFormat(n.fieldPath)}function Zg(n){return n instanceof be?function(t){if(t.op==="=="){if(mf(t.value))return{unaryFilter:{field:wi(t.field),op:"IS_NAN"}};if(pf(t.value))return{unaryFilter:{field:wi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(mf(t.value))return{unaryFilter:{field:wi(t.field),op:"IS_NOT_NAN"}};if(pf(t.value))return{unaryFilter:{field:wi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wi(t.field),op:AT(t.op),value:t.value}}}(n):n instanceof Ce?function(t){const r=t.getFilters().map(i=>Zg(i));return r.length===1?r[0]:{compositeFilter:{op:ST(t.op),filters:r}}}(n):re()}function RT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function e_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class kn{constructor(e,t,r,i,s=ae.min(),o=ae.min(),l=Ze.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class t_{constructor(e){this.ct=e}}function PT(n,e){let t;if(e.document)t=IT(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=Z.fromSegments(e.noDocument.path),i=ii(e.noDocument.readTime);t=We.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return re();{const r=Z.fromSegments(e.unknownDocument.path),i=ii(e.unknownDocument.version);t=We.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new Ge(i[0],i[1]);return ae.fromTimestamp(s)}(e.readTime)),t}function kf(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ma(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Na(s,o.key),fields:o.data.value.mapValue.fields,updateTime:$i(s,o.version.toTimestamp()),createTime:$i(s,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:ri(e.version)};else{if(!e.isUnknownDocument())return re();r.unknownDocument={path:t.path.toArray(),version:ri(e.version)}}return r}function Ma(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function ri(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ii(n){const e=new Ge(n.seconds,n.nanoseconds);return ae.fromTimestamp(e)}function Br(n,e){const t=(e.baseMutations||[]).map(s=>Gc(n.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const l=e.mutations[s+1];o.updateTransforms=l.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Gc(n.ct,s)),i=Ge.fromMillis(e.localWriteTimeMs);return new Du(e.batchId,i,t,r)}function ws(n){const e=ii(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?ii(n.lastLimboFreeSnapshotVersion):ae.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return oe(s.documents.length===1),Kt(mo(Hg(s.documents[0])))}(n.query):function(s){return Kt(Yg(s))}(n.query),new kn(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ze.fromBase64String(n.resumeToken))}function n_(n,e){const t=ri(e.snapshotVersion),r=ri(e.lastLimboFreeSnapshotVersion);let i;i=Va(e.target)?Qg(n.ct,e.target):Jg(n.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ni(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function r_(n){const e=Yg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ka(e,e.limit,"L"):e}function cc(n,e){return new Nu(e.largestBatchId,Gc(n.ct,e.overlayMutation))}function Nf(n,e){const t=e.path.lastSegment();return[n,Rt(e.path.popLast()),t]}function Of(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:ri(r.readTime),documentKey:Rt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class CT{getBundleMetadata(e,t){return Mf(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:ii(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return Mf(e).put(function(i){return{bundleId:i.id,createTime:ri(Pt(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Ff(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:r_(s.bundledQuery),readTime:ii(s.readTime)}}(r)})}saveNamedQuery(e,t){return Ff(e).put(function(i){return{name:i.name,readTime:ri(Pt(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Mf(n){return rt(n,"bundles")}function Ff(n){return rt(n,"namedQueries")}/**
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
 */class ml{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new ml(e,r)}getOverlay(e,t){return fs(e).get(Nf(this.userId,t)).next(r=>r?cc(this.serializer,r):null)}getOverlays(e,t){const r=fn();return V.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const l=new Nu(t,o);i.push(this.ht(e,l))}),V.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Rt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const l=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(fs(e).j("collectionPathOverlayIndex",l))}),V.waitFor(s)}getOverlaysForCollection(e,t,r){const i=fn(),s=Rt(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return fs(e).U("collectionPathOverlayIndex",o).next(l=>{for(const c of l){const u=cc(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=fn();let o;const l=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return fs(e).J({index:"collectionGroupOverlayIndex",range:l},(c,u,d)=>{const p=cc(this.serializer,u);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):d.done()}).next(()=>s)}ht(e,t){return fs(e).put(function(i,s,o){const[l,c,u]=Nf(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Oa(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function fs(n){return rt(n,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class VT{Pt(e){return rt(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Ze.fromUint8Array(r):Ze.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class $r{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At($e(e.integerValue));else if("doubleValue"in e){const r=$e(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),Ys(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=Ln(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(yr(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?gg(e)?this.dt(t,Number.MAX_SAFE_INTEGER):cl(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):re()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const i of Object.keys(r))this.Vt(i,t),this.Tt(r[i],t)}wt(e,t){var r,i;const s=e.fields||{};this.dt(t,53);const o="value",l=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At($e(l)),this.Vt(o,t),this.Tt(s[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const i of r)this.Tt(i,t)}yt(e,t){this.dt(t,37),Z.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}$r.vt=new $r;function DT(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Lf(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=DT(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class kT{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const t=this.qt(e),r=Lf(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),r=Lf(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class NT{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class OT{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class ps{constructor(){this.jt=new kT,this.Ht=new NT(this.jt),this.Jt=new OT(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class jr{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new jr(this.indexId,this.documentKey,this.arrayValue,r)}}function Xn(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Uf(n.arrayValue,e.arrayValue),t!==0?t:(t=Uf(n.directionalValue,e.directionalValue),t!==0?t:Z.comparator(n.documentKey,e.documentKey)))}function Uf(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class Bf{constructor(e){this.Xt=new Ve((t,r)=>ze.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(oe(e.collectionGroup===this.collectionId),this.nn)return!1;const t=Nc(e);if(t!==void 0&&!this.sn(t))return!1;const r=Fr(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const l=this.Xt.getIterator().getNext();if(!i.has(l.field.canonicalString())){const c=r[s];if(!this.on(l,c)||!this._n(this.en[o++],c))return!1}++s}for(;s<r.length;++s){const l=r[s];if(o>=this.en.length||!this._n(this.en[o++],l))return!1}return!0}an(){if(this.nn)return null;let e=new Ve(ze.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new aa(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new aa(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new aa(r.field,r.dir==="asc"?0:1)));return new Ca(Ca.UNKNOWN_ID,this.collectionId,t,Js.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function i_(n){var e,t;if(oe(n instanceof be||n instanceof Ce),n instanceof be){if(n instanceof xg){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>be.create(n.field,"==",s)))||[];return Ce.create(i,"or")}return n}const r=n.filters.map(i=>i_(i));return Ce.create(r,n.op)}function MT(n){if(n.getFilters().length===0)return[];const e=Wc(i_(n));return oe(s_(e)),Kc(e)||Hc(e)?[e]:e.getFilters()}function Kc(n){return n instanceof be}function Hc(n){return n instanceof Ce&&Cu(n)}function s_(n){return Kc(n)||Hc(n)||function(t){if(t instanceof Ce&&Lc(t)){for(const r of t.getFilters())if(!Kc(r)&&!Hc(r))return!1;return!0}return!1}(n)}function Wc(n){if(oe(n instanceof be||n instanceof Ce),n instanceof be)return n;if(n.filters.length===1)return Wc(n.filters[0]);const e=n.filters.map(r=>Wc(r));let t=Ce.create(e,n.op);return t=Fa(t),s_(t)?t:(oe(t instanceof Ce),oe(Fi(t)),oe(t.filters.length>1),t.filters.reduce((r,i)=>Fu(r,i)))}function Fu(n,e){let t;return oe(n instanceof be||n instanceof Ce),oe(e instanceof be||e instanceof Ce),t=n instanceof be?e instanceof be?function(i,s){return Ce.create([i,s],"and")}(n,e):$f(n,e):e instanceof be?$f(e,n):function(i,s){if(oe(i.filters.length>0&&s.filters.length>0),Fi(i)&&Fi(s))return Eg(i,s.getFilters());const o=Lc(i)?i:s,l=Lc(i)?s:i,c=o.filters.map(u=>Fu(u,l));return Ce.create(c,"or")}(n,e),Fa(t)}function $f(n,e){if(Fi(e))return Eg(e,n.getFilters());{const t=e.filters.map(r=>Fu(n,r));return Ce.create(t,"or")}}function Fa(n){if(oe(n instanceof be||n instanceof Ce),n instanceof be)return n;const e=n.getFilters();if(e.length===1)return Fa(e[0]);if(bg(n))return n;const t=e.map(i=>Fa(i)),r=[];return t.forEach(i=>{i instanceof be?r.push(i):i instanceof Ce&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Ce.create(r,n.op)}/**
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
 */class FT{constructor(){this.un=new Lu}addToCollectionParentIndex(e,t){return this.un.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(jt.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(jt.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class Lu{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ve(Re.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ve(Re.comparator)).toArray()}}/**
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
 */const Yo=new Uint8Array(0);class LT{constructor(e,t){this.databaseId=t,this.cn=new Lu,this.ln=new Tr(r=>ni(r),(r,i)=>po(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const s={collectionId:r,parent:Rt(i)};return jf(e).put(s)}return V.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[sg(t),""],!1,!0);return jf(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(dn(o.parent))}return r})}addFieldIndex(e,t){const r=ms(e),i=function(l){return{indexId:l.indexId,collectionGroup:l.collectionGroup,fields:l.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=yi(e);return s.next(l=>{o.put(Of(l,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=ms(e),i=yi(e),s=_i(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=ms(e),r=_i(e),i=yi(e);return t.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,t){return V.forEach(this.hn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Bf(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=_i(e);let i=!0;const s=new Map;return V.forEach(this.hn(t),o=>this.Pn(e,o).next(l=>{i&&(i=!!l),s.set(o,l)})).next(()=>{if(i){let o=_e();const l=[];return V.forEach(s,(c,u)=>{z("IndexedDbIndexManager",`Using index ${function(K){return`id=${K.indexId}|cg=${K.collectionGroup}|f=${K.fields.map($=>`${$.fieldPath}:${$.kind}`).join(",")}`}(c)} to execute ${ni(t)}`);const d=function(K,$){const L=Nc($);if(L===void 0)return null;for(const k of Da(K,L.fieldPath))switch(k.op){case"array-contains-any":return k.value.arrayValue.values||[];case"array-contains":return[k.value]}return null}(u,c),p=function(K,$){const L=new Map;for(const k of Fr($))for(const T of Da(K,k.fieldPath))switch(T.op){case"==":case"in":L.set(k.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return L.set(k.fieldPath.canonicalString(),T.value),Array.from(L.values())}return null}(u,c),m=function(K,$){const L=[];let k=!0;for(const T of Fr($)){const b=T.kind===0?bf(K,T.fieldPath,K.startAt):If(K,T.fieldPath,K.startAt);L.push(b.value),k&&(k=b.inclusive)}return new Mi(L,k)}(u,c),y=function(K,$){const L=[];let k=!0;for(const T of Fr($)){const b=T.kind===0?If(K,T.fieldPath,K.endAt):bf(K,T.fieldPath,K.endAt);L.push(b.value),k&&(k=b.inclusive)}return new Mi(L,k)}(u,c),x=this.In(c,u,m),R=this.In(c,u,y),D=this.Tn(c,u,p),G=this.En(c.indexId,d,x,m.inclusive,R,y.inclusive,D);return V.forEach(G,q=>r.G(q,t.limit).next(K=>{K.forEach($=>{const L=Z.fromSegments($.documentKey);o.has(L)||(o=o.add(L),l.push(L))})}))}).next(()=>l)}return V.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=MT(Ce.create(e.filters,"and")).map(r=>Bc(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,i,s,o,l){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),d=[];for(let p=0;p<c;++p){const m=t?this.dn(t[p/u]):Yo,y=this.An(e,m,r[p%u],i),x=this.Rn(e,m,s[p%u],o),R=l.map(D=>this.An(e,m,D,!0));d.push(...this.createRange(y,x,R))}return d}An(e,t,r,i){const s=new jr(e,Z.empty(),t,r);return i?s:s.Zt()}Rn(e,t,r,i){const s=new jr(e,Z.empty(),t,r);return i?s.Zt():s}Pn(e,t){const r=new Bf(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const l of s)r.rn(l)&&(!o||l.fields.length>o.fields.length)&&(o=l);return o})}getIndexType(e,t){let r=2;const i=this.hn(t);return V.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new Ve(ze.comparator),d=!1;for(const p of c.filters)for(const m of p.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:u=u.add(m.field));for(const p of c.orderBy)p.field.isKeyField()||(u=u.add(p.field));return u.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}Vn(e,t){const r=new ps;for(const i of Fr(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);$r.vt.It(s,o)}return r.zt()}dn(e){const t=new ps;return $r.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new ps;return $r.vt.It(eo(this.databaseId,t),r.Yt(function(s){const o=Fr(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let i=[];i.push(new ps);let s=0;for(const o of Fr(e)){const l=r[s++];for(const c of i)if(this.fn(t,o.fieldPath)&&to(l))i=this.gn(i,o,l);else{const u=c.Yt(o.kind);$r.vt.It(l,u)}}return this.pn(i)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const l of i){const c=new ps;c.seed(l.zt()),$r.vt.It(o,c.Yt(t.kind)),s.push(c)}return s}fn(e,t){return!!e.filters.find(r=>r instanceof be&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=ms(e),i=yi(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(s=>{const o=[];return V.forEach(s,l=>i.get([l.indexId,this.uid]).next(c=>{o.push(function(d,p){const m=p?new Js(p.sequenceNumber,new jt(ii(p.readTime),new Z(dn(p.documentKey)),p.largestBatchId)):Js.empty(),y=d.fields.map(([x,R])=>new aa(ze.fromServerFormat(x),R));return new Ca(d.indexId,d.collectionGroup,y,m)}(l,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:me(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=ms(e),s=yi(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(l=>V.forEach(l,c=>s.put(Of(c.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return V.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?V.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(l=>(r.set(i.collectionGroup,l),V.forEach(l,c=>this.wn(e,i,c).next(u=>{const d=this.Sn(s,c);return u.isEqual(d)?V.resolve():this.bn(e,s,c,u,d)}))))})}Dn(e,t,r,i){return _i(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,i){return _i(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const i=_i(e);let s=new Ve(Xn);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,l)=>{s=s.add(new jr(r.indexId,t,l.arrayValue,l.directionalValue))}).next(()=>s)}Sn(e,t){let r=new Ve(Xn);const i=this.Vn(t,e);if(i==null)return r;const s=Nc(t);if(s!=null){const o=e.data.field(s.fieldPath);if(to(o))for(const l of o.arrayValue.values||[])r=r.add(new jr(t.indexId,e.key,this.dn(l),i))}else r=r.add(new jr(t.indexId,e.key,Yo,i));return r}bn(e,t,r,i,s){z("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(c,u,d,p,m){const y=c.getIterator(),x=u.getIterator();let R=gi(y),D=gi(x);for(;R||D;){let G=!1,q=!1;if(R&&D){const K=d(R,D);K<0?q=!0:K>0&&(G=!0)}else R!=null?q=!0:G=!0;G?(p(D),D=gi(x)):q?(m(R),R=gi(y)):(R=gi(y),D=gi(x))}}(i,s,Xn,l=>{o.push(this.Dn(e,t,r,l))},l=>{o.push(this.vn(e,t,r,l))}),V.waitFor(o)}yn(e){let t=1;return yi(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,l)=>Xn(o,l)).filter((o,l,c)=>!l||Xn(o,c[l-1])!==0);const i=[];i.push(e);for(const o of r){const l=Xn(o,e),c=Xn(o,t);if(l===0)i[0]=e.Zt();else if(l>0&&c<0)i.push(o),i.push(o.Zt());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const l=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Yo,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Yo,[]];s.push(IDBKeyRange.bound(l,c))}return s}Cn(e,t){return Xn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(qf)}getMinOffset(e,t){return V.mapArray(this.hn(t),r=>this.Pn(e,r).next(i=>i||re())).next(qf)}}function jf(n){return rt(n,"collectionParents")}function _i(n){return rt(n,"indexEntries")}function ms(n){return rt(n,"indexConfiguration")}function yi(n){return rt(n,"indexState")}function qf(n){oe(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;xu(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new jt(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const zf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class kt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new kt(e,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function o_(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let l=0;const c=r.J({range:o},(d,p,m)=>(l++,m.delete()));s.push(c.next(()=>{oe(l===1)}));const u=[];for(const d of t.mutations){const p=ug(e,d.key.path,t.batchId);s.push(i.delete(p)),u.push(d.key)}return V.waitFor(s).next(()=>u)}function La(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw re();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */kt.DEFAULT_COLLECTION_PERCENTILE=10,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kt.DEFAULT=new kt(41943040,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kt.DISABLED=new kt(-1,0,0);class gl{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,t,r,i){oe(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new gl(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Zn(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=xi(e),o=Zn(e);return o.add({}).next(l=>{oe(typeof l=="number");const c=new Du(l,t,r,i),u=function(y,x,R){const D=R.baseMutations.map(q=>Oa(y.ct,q)),G=R.mutations.map(q=>Oa(y.ct,q));return{userId:x,batchId:R.batchId,localWriteTimeMs:R.localWriteTime.toMillis(),baseMutations:D,mutations:G}}(this.serializer,this.userId,c),d=[];let p=new Ve((m,y)=>me(m.canonicalString(),y.canonicalString()));for(const m of i){const y=ug(this.userId,m.key.path,l);p=p.add(m.key.path.popLast()),d.push(o.put(u)),d.push(s.put(y,vw))}return p.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Fn[l]=c.keys()}),V.waitFor(d).next(()=>c)})}lookupMutationBatch(e,t){return Zn(e).get(t).next(r=>r?(oe(r.userId===this.userId),Br(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?V.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Zn(e).J({index:"userMutationsIndex",range:i},(o,l,c)=>{l.userId===this.userId&&(oe(l.batchId>=r),s=Br(this.serializer,l)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Zn(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Zn(e).U("userMutationsIndex",t).next(r=>r.map(i=>Br(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=la(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return xi(e).J({range:i},(o,l,c)=>{const[u,d,p]=o,m=dn(d);if(u===this.userId&&t.path.isEqual(m))return Zn(e).get(p).next(y=>{if(!y)throw re();oe(y.userId===this.userId),s.push(Br(this.serializer,y))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ve(me);const i=[];return t.forEach(s=>{const o=la(this.userId,s.path),l=IDBKeyRange.lowerBound(o),c=xi(e).J({range:l},(u,d,p)=>{const[m,y,x]=u,R=dn(y);m===this.userId&&s.path.isEqual(R)?r=r.add(x):p.done()});i.push(c)}),V.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=la(this.userId,r),o=IDBKeyRange.lowerBound(s);let l=new Ve(me);return xi(e).J({range:o},(c,u,d)=>{const[p,m,y]=c,x=dn(m);p===this.userId&&r.isPrefixOf(x)?x.length===i&&(l=l.add(y)):d.done()}).next(()=>this.xn(e,l))}xn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(Zn(e).get(s).next(o=>{if(o===null)throw re();oe(o.userId===this.userId),r.push(Br(this.serializer,o))}))}),V.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return o_(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),V.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return V.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return xi(e).J({range:r},(s,o,l)=>{if(s[0]===this.userId){const c=dn(s[1]);i.push(c)}else l.done()}).next(()=>{oe(i.length===0)})})}containsKey(e,t){return a_(e,this.userId,t)}Nn(e){return l_(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function a_(n,e,t){const r=la(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return xi(n).J({range:s,H:!0},(l,c,u)=>{const[d,p,m]=l;d===e&&p===i&&(o=!0),u.done()}).next(()=>o)}function Zn(n){return rt(n,"mutations")}function xi(n){return rt(n,"documentMutations")}function l_(n){return rt(n,"mutationQueues")}/**
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
 */class si{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new si(0)}static kn(){return new si(-1)}}/**
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
 */class UT{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new si(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>ae.fromTimestamp(new Ge(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>vi(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(oe(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return vi(e).J((o,l)=>{const c=ws(l);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>V.waitFor(s)).next(()=>i)}forEachTarget(e,t){return vi(e).J((r,i)=>{const s=ws(i);t(s)})}qn(e){return Gf(e).get("targetGlobalKey").next(t=>(oe(t!==null),t))}Qn(e,t){return Gf(e).put("targetGlobalKey",t)}Kn(e,t){return vi(e).put(n_(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=ni(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return vi(e).J({range:i,index:"queryTargetsIndex"},(o,l,c)=>{const u=ws(l);po(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=nr(e);return t.forEach(o=>{const l=Rt(o.path);i.push(s.put({targetId:r,path:l})),i.push(this.referenceDelegate.addReference(e,r,o))}),V.waitFor(i)}removeMatchingKeys(e,t,r){const i=nr(e);return V.forEach(t,s=>{const o=Rt(s.path);return V.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=nr(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=nr(e);let s=_e();return i.J({range:r,H:!0},(o,l,c)=>{const u=dn(o[1]),d=new Z(u);s=s.add(d)}).next(()=>s)}containsKey(e,t){const r=Rt(t.path),i=IDBKeyRange.bound([r],[sg(r)],!1,!0);let s=0;return nr(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,l],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}ot(e,t){return vi(e).get(t).next(r=>r?ws(r):null)}}function vi(n){return rt(n,"targets")}function Gf(n){return rt(n,"targetGlobal")}function nr(n){return rt(n,"targetDocuments")}/**
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
 */function Kf([n,e],[t,r]){const i=me(n,t);return i===0?me(e,r):i}class BT{constructor(e){this.Un=e,this.buffer=new Ve(Kf),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Kf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class $T{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){wr(t)?z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await li(t)}await this.Hn(3e5)})}}class jT{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return V.resolve(zt.oe);const r=new BT(t);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(zf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zf):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,i,s,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(s=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),Ii()<=ve.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function qT(n,e){return new jT(n,e)}/**
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
 */class zT{constructor(e,t){this.db=e,this.garbageCollector=qT(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,i)=>t(i))}addReference(e,t,r){return Xo(e,r)}removeReference(e,t,r){return Xo(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Xo(e,t)}nr(e,t){return function(i,s){let o=!1;return l_(i).Y(l=>a_(i,l,s).next(c=>(c&&(o=!0),V.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,l)=>{if(l<=t){const c=this.nr(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,ae.min()),nr(e).delete(function(p){return[0,Rt(p.path)]}(o))))});i.push(c)}}).next(()=>V.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Xo(e,t)}tr(e,t){const r=nr(e);let i,s=zt.oe;return r.J({index:"documentTargetsIndex"},([o,l],{path:c,sequenceNumber:u})=>{o===0?(s!==zt.oe&&t(new Z(dn(i)),s),s=u,i=c):s=zt.oe}).next(()=>{s!==zt.oe&&t(new Z(dn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Xo(n,e){return nr(n).put(function(r,i){return{targetId:0,path:Rt(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
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
 */class c_{constructor(){this.changes=new Tr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,We.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class GT{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Nr(e).put(r)}removeEntry(e,t,r){return Nr(e).delete(function(s,o){const l=s.path.toArray();return[l.slice(0,l.length-2),l[l.length-2],Ma(o),l[l.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=We.newInvalidDocument(t);return Nr(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(gs(t))},(i,s)=>{r=this.ir(t,s)}).next(()=>r)}sr(e,t){let r={size:0,document:We.newInvalidDocument(t)};return Nr(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(gs(t))},(i,s)=>{r={document:this.ir(t,s),size:La(s)}}).next(()=>r)}getEntries(e,t){let r=Lt();return this._r(e,t,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,t){let r=Lt(),i=new qe(Z.comparator);return this._r(e,t,(s,o)=>{const l=this.ir(s,o);r=r.insert(s,l),i=i.insert(s,La(o))}).next(()=>({documents:r,ur:i}))}_r(e,t,r){if(t.isEmpty())return V.resolve();let i=new Ve(Qf);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(gs(i.first()),gs(i.last())),o=i.getIterator();let l=o.getNext();return Nr(e).J({index:"documentKeyIndex",range:s},(c,u,d)=>{const p=Z.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;l&&Qf(l,p)<0;)r(l,null),l=o.getNext();l&&l.isEqual(p)&&(r(l,u),l=o.hasNext()?o.getNext():null),l?d.$(gs(l)):d.done()}).next(()=>{for(;l;)r(l,null),l=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,l=[o.popLast().toArray(),o.lastSegment(),Ma(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Nr(e).U(IDBKeyRange.bound(l,c,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let d=Lt();for(const p of u){const m=this.ir(Z.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);m.isFoundDocument()&&(go(t,m)||i.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,t,r,i){let s=Lt();const o=Wf(t,r),l=Wf(t,jt.max());return Nr(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,l,!0)},(c,u,d)=>{const p=this.ir(Z.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(p.key,p),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new KT(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Hf(e).get("remoteDocumentGlobalKey").next(t=>(oe(!!t),t))}rr(e,t){return Hf(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=PT(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(ae.min())))return r}return We.newInvalidDocument(e)}}function u_(n){return new GT(n)}class KT extends c_{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new Tr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new Ve((s,o)=>me(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const l=this.lr.get(s);if(t.push(this.cr.removeEntry(e,s,l.readTime)),o.isValidDocument()){const c=kf(this.cr.serializer,o);i=i.add(s.path.popLast());const u=La(c);r+=u-l.size,t.push(this.cr.addEntry(e,s,c))}else if(r-=l.size,this.trackRemovals){const c=kf(this.cr.serializer,o.convertToNoDocument(ae.min()));t.push(this.cr.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.cr.updateMetadata(e,r)),V.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Hf(n){return rt(n,"remoteDocumentGlobal")}function Nr(n){return rt(n,"remoteDocumentsV14")}function gs(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Wf(n,e){const t=e.documentKey.path.toArray();return[n,Ma(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Qf(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=me(t[s],r[s]),i)return i;return i=me(t.length,r.length),i||(i=me(t[t.length-2],r[r.length-2]),i||me(t[t.length-1],r[r.length-1]))}/**
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
 */class HT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class h_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Os(r.mutation,i,Ot.empty(),Ge.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,t,r=_e()){const i=fn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Is();return s.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=fn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,_e()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,i){let s=Lt();const o=Ns(),l=function(){return Ns()}();return t.forEach((c,u)=>{const d=r.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof zn)?s=s.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Os(d.mutation,u,d.mutation.getFieldMask(),Ge.now())):o.set(u.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,d)=>o.set(u,d)),t.forEach((u,d)=>{var p;return l.set(u,new HT(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Ns();let i=new qe((o,l)=>o-l),s=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let d=r.get(c)||Ot.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(i.get(l.batchId)||_e()).add(c);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=Vg();d.forEach(m=>{if(!s.has(m)){const y=Lg(t.get(m),r.get(m));y!==null&&p.set(m,y),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return Z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ag(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):V.resolve(fn());let l=-1,c=s;return o.next(u=>V.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,_e())).next(d=>({batchId:l,changes:Cg(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next(r=>{let i=Is();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=Is();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,c=>{const u=function(p,m){return new Wi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,We.newInvalidDocument(d)))});let l=Is();return o.forEach((c,u)=>{const d=s.get(c);d!==void 0&&Os(d.mutation,u,Ot.empty(),Ge.now()),go(t,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class WT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return V.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Pt(i.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:r_(i.bundledQuery),readTime:Pt(i.readTime)}}(t)),V.resolve()}}/**
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
 */class QT{constructor(){this.overlays=new qe(Z.comparator),this.Ir=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=fn();return V.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const i=fn(),s=t.length+1,o=new Z(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return V.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new qe((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let d=s.get(u.largestBatchId);d===null&&(d=fn(),s=s.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=fn(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=i)););return V.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Nu(t,r));let s=this.Ir.get(t);s===void 0&&(s=_e(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class JT{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
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
 */class Uu{constructor(){this.Tr=new Ve(it.Er),this.dr=new Ve(it.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new it(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new it(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new Z(new Re([])),r=new it(t,e),i=new it(t,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new Z(new Re([])),r=new it(t,e),i=new it(t,e+1);let s=_e();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new it(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return Z.comparator(e.key,t.key)||me(e.wr,t.wr)}static Ar(e,t){return me(e.wr,t.wr)||Z.comparator(e.key,t.key)}}/**
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
 */class YT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ve(it.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Du(s,t,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new it(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,t){return V.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new it(t,0),i=new it(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ve(me);return t.forEach(i=>{const s=new it(i,0),o=new it(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;Z.isDocumentKey(s)||(s=s.child(""));const o=new it(new Z(s),0);let l=new Ve(me);return this.br.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.wr)),!0)},o),V.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){oe(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(t.mutations,i=>{const s=new it(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new it(t,0),i=this.br.firstAfterOrEqual(r);return V.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class XT{constructor(e){this.Mr=e,this.docs=function(){return new qe(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():We.newInvalidDocument(t))}getEntries(e,t){let r=Lt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():We.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Lt();const o=t.path,l=new Z(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||xu(og(d),r)<=0||(i.has(d.key)||go(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,t,r,i){re()}Or(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new ZT(this)}getSize(e){return V.resolve(this.size)}}class ZT extends c_{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class e0{constructor(e){this.persistence=e,this.Nr=new Tr(t=>ni(t),po),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Uu,this.targetCount=0,this.kr=si.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),V.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new si(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Kn(t),V.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.Br.containsKey(t))}}/**
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
 */class d_{constructor(e,t){this.qr={},this.overlays={},this.Qr=new zt(0),this.Kr=!1,this.Kr=!0,this.$r=new JT,this.referenceDelegate=e(this),this.Ur=new e0(this),this.indexManager=new FT,this.remoteDocumentCache=function(i){return new XT(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new t_(t),this.Gr=new WT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new QT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new YT(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){z("MemoryPersistence","Starting transaction:",e);const i=new t0(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class t0 extends lg{constructor(e){super(),this.currentSequenceNumber=e}}class _l{constructor(e){this.persistence=e,this.Jr=new Uu,this.Yr=null}static Zr(e){return new _l(e)}get Xr(){if(this.Yr)return this.Yr;throw re()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),V.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=Z.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,ae.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return V.or([()=>V.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class n0{constructor(e){this.serializer=e}O(e,t,r,i){const s=new al("createOrUpgrade",t);r<1&&i>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",cf,{unique:!0}),c.createObjectStore("documentMutations")}(e),Jf(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=V.resolve();return r<3&&i>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),Jf(e)),o=o.next(()=>function(c){const u=c.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ae.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store("mutations").U().next(d=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",cf,{unique:!0});const p=u.store("mutations"),m=d.map(y=>p.put(y));return V.waitFor(m)})}(e,s))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore("documentOverlays",{keyPath:Vw});u.createIndex("collectionPathOverlayIndex",Dw,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",kw,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore("remoteDocumentsV14",{keyPath:bw});u.createIndex("documentKeyIndex",Iw),u.createIndex("collectionGroupIndex",Ew)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:Sw}).createIndex("sequenceNumberIndex",Rw,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:Pw}).createIndex("documentKeyIndex",Cw,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(c){c.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,i)=>{t+=La(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(i=>V.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(l=>V.forEach(l,c=>{oe(c.userId===s.userId);const u=Br(this.serializer,c);return o_(e,s.userId,u).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,l)=>{const c=new Re(o),u=function(p){return[0,Rt(p)]}(c);s.push(t.get(u).next(d=>d?V.resolve():(p=>t.put({targetId:0,path:Rt(p),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>V.waitFor(s))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:Aw});const r=t.store("collectionParents"),i=new Lu,s=o=>{if(i.add(o)){const l=o.lastSegment(),c=o.popLast();return r.put({collectionId:l,parent:Rt(c)})}};return t.store("remoteDocuments").J({H:!0},(o,l)=>{const c=new Re(o);return s(c.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,l,c],u)=>{const d=dn(l);return s(d.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,i)=>{const s=ws(i),o=n_(this.serializer,s);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),i=[];return r.J((s,o)=>{const l=t.store("remoteDocumentsV14"),c=function(p){return p.document?new Z(Re.fromString(p.document.name).popFirst(5)):p.noDocument?Z.fromSegments(p.noDocument.path):p.unknownDocument?Z.fromSegments(p.unknownDocument.path):re()}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(l.put(u))}).next(()=>V.waitFor(i))}ai(e,t){const r=t.store("mutations"),i=u_(this.serializer),s=new d_(_l.Zr,this.serializer.ct);return r.U().next(o=>{const l=new Map;return o.forEach(c=>{var u;let d=(u=l.get(c.userId))!==null&&u!==void 0?u:_e();Br(this.serializer,c).keys().forEach(p=>d=d.add(p)),l.set(c.userId,d)}),V.forEach(l,(c,u)=>{const d=new Tt(u),p=ml.lt(this.serializer,d),m=s.getIndexManager(d),y=gl.lt(d,this.serializer,m,s.referenceDelegate);return new h_(i,y,p,m).recalculateAndSaveOverlaysForDocumentKeys(new Oc(t,zt.oe),c).next()})})}}function Jf(n){n.createObjectStore("targetDocuments",{keyPath:Tw}).createIndex("documentTargetsIndex",xw,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ww,{unique:!0}),n.createObjectStore("targetGlobal")}const uc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Bu{constructor(e,t,r,i,s,o,l,c,u,d,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=s,this.window=o,this.document=l,this.ci=u,this.li=d,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=m=>Promise.resolve(),!Bu.D())throw new Y(M.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new zT(this,i),this.Ai=t+"main",this.serializer=new t_(c),this.Ri=new dr(this.Ai,this.hi,new n0(this.serializer)),this.$r=new VT,this.Ur=new UT(this.referenceDelegate,this.serializer),this.remoteDocumentCache=u_(this.serializer),this.Gr=new CT,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,d===!1&&St("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Y(M.FAILED_PRECONDITION,uc);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new zt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Zo(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(wr(e))return z("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return z("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return _s(e).get("owner").next(t=>V.resolve(this.vi(t)))}Ci(e){return Zo(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=rt(t,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(l=>s.indexOf(l)===-1);return V.forEach(o,l=>r.delete(l.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?V.resolve(!0):_s(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new Y(M.FAILED_PRECONDITION,uc);return!1}}return!(!this.networkEnabled||!this.inForeground)||Zo(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,l=this.networkEnabled===i.networkEnabled;if(s||o&&l)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&z("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Oc(e,zt.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Zo(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return gl.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new LT(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return ml.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){z("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(c){return c===17?Mw:c===16?Ow:c===15?Su:c===14?fg:c===13?dg:c===12?Nw:c===11?hg:void re()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,l=>(o=new Oc(l,this.Qr?this.Qr.next():zt.oe),t==="readwrite-primary"?this.wi(o).next(c=>!!c||this.Si(o)).next(c=>{if(!c)throw St(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new Y(M.FAILED_PRECONDITION,ag);return r(o)}).next(c=>this.Di(o).next(()=>c)):this.Ki(o).next(()=>r(o)))).then(l=>(o.raiseOnCommittedEvent(),l))}Ki(e){return _s(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new Y(M.FAILED_PRECONDITION,uc)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return _s(e).put("owner",t)}static D(){return dr.D()}bi(e){const t=_s(e);return t.get("owner").next(r=>this.vi(r)?(z("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):V.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(St(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;Gm()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return z("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return St("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){St("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function _s(n){return rt(n,"owner")}function Zo(n){return rt(n,"clientMetadata")}function r0(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class $u{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=_e(),i=_e();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new $u(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class i0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class f_{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Gm()?8:cg(nt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new i0;return this.Xi(e,t,o).next(l=>{if(s.result=l,this.zi)return this.es(e,t,o,l.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(Ii()<=ve.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Ei(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Ii()<=ve.DEBUG&&z("QueryEngine","Query:",Ei(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ii()<=ve.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Ei(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(t))):V.resolve())}Yi(e,t){if(Ef(t))return V.resolve(null);let r=Kt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ka(t,null,"F"),r=Kt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=_e(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ts(t,l);return this.ns(t,u,o,c.readTime)?this.Yi(e,ka(t,null,"F")):this.rs(e,u,t,c)}))})))}Zi(e,t,r,i){return Ef(t)||i.isEqual(ae.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(t,s);return this.ns(t,o,r,i)?V.resolve(null):(Ii()<=ve.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ei(t)),this.rs(e,o,t,dw(i,-1)).next(l=>l))})}ts(e,t){let r=new Ve(Rg(e));return t.forEach((i,s)=>{go(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return Ii()<=ve.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Ei(t)),this.Ji.getDocumentsMatchingQuery(e,t,jt.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class s0{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new qe(me),this._s=new Tr(s=>ni(s),po),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new h_(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function p_(n,e,t,r){return new s0(n,e,t,r)}async function m_(n,e){const t=de(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let c=_e();for(const u of i){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of s){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:l}))})})}function o0(n,e){const t=de(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,m=p.keys();let y=V.resolve();return m.forEach(x=>{y=y.next(()=>d.getEntry(c,x)).next(R=>{const D=u.docVersions.get(x);oe(D!==null),R.version.compareTo(D)<0&&(p.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),d.addEntry(R)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=_e();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function g_(n){const e=de(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function a0(n,e){const t=de(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(t.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(s,d.addedDocuments,p)));let y=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(Ze.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),i=i.insert(p,y),function(R,D,G){return R.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(m,y,d)&&l.push(t.Ur.updateTargetData(s,y))});let c=Lt(),u=_e();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(l0(s,o,e.documentUpdates).next(d=>{c=d.Ps,u=d.Is})),!r.isEqual(ae.min())){const d=t.Ur.getLastRemoteSnapshotVersion(s).next(p=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return V.waitFor(l).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.os=i,s))}function l0(n,e,t){let r=_e(),i=_e();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Lt();return t.forEach((l,c)=>{const u=s.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(ae.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:i}})}function c0(n,e){const t=de(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function u0(n,e){const t=de(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):t.Ur.allocateTargetId(r).next(o=>(i=new kn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Qc(n,e,t){const r=de(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!wr(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Yf(n,e,t){const r=de(n);let i=ae.min(),s=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=de(c),m=p._s.get(d);return m!==void 0?V.resolve(p.os.get(m)):p.Ur.getTargetData(u,d)}(r,o,Kt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{s=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?i:ae.min(),t?s:_e())).next(l=>(h0(r,Yw(e),l),{documents:l,Ts:s})))}function h0(n,e,t){let r=n.us.get(e)||ae.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}class Xf{constructor(){this.activeTargetIds=rT()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class __{constructor(){this.so=new Xf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Xf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class d0{_o(e){}shutdown(){}}/**
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
 */class Zf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let ea=null;function hc(){return ea===null?ea=function(){return 268435456+Math.round(2147483648*Math.random())}():ea++,"0x"+ea.toString(16)}/**
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
 */const f0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class p0{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const mt="WebChannelConnection";class m0 extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,o){const l=hc(),c=this.xo(t,r.toUriEncodedString());z("RestConnection",`Sending RPC '${t}' ${l}:`,c,i);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,s,o),this.No(t,c,u,i).then(d=>(z("RestConnection",`Received RPC '${t}' ${l}: `,d),d),d=>{throw Ws("RestConnection",`RPC '${t}' ${l} failed with error: `,d,"url: ",c,"request:",i),d})}Lo(t,r,i,s,o,l){return this.Mo(t,r,i,s,o)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hi}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}xo(t,r){const i=f0[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=hc();return new Promise((o,l)=>{const c=new Zm;c.setWithCredentials(!0),c.listenOnce(eg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case oa.NO_ERROR:const d=c.getResponseJson();z(mt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case oa.TIMEOUT:z(mt,`RPC '${e}' ${s} timed out`),l(new Y(M.DEADLINE_EXCEEDED,"Request time out"));break;case oa.HTTP_ERROR:const p=c.getStatus();if(z(mt,`RPC '${e}' ${s} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const x=function(D){const G=D.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(G)>=0?G:M.UNKNOWN}(y.status);l(new Y(x,y.message))}else l(new Y(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Y(M.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{z(mt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);z(mt,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",u,r,15)})}Bo(e,t,r){const i=hc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=rg(),l=ng(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=s.join("");z(mt,`Creating RPC '${e}' stream ${i}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,y=!1;const x=new p0({Io:D=>{y?z(mt,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(m||(z(mt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),z(mt,`RPC '${e}' stream ${i} sending:`,D),p.send(D))},To:()=>p.close()}),R=(D,G,q)=>{D.listen(G,K=>{try{q(K)}catch($){setTimeout(()=>{throw $},0)}})};return R(p,bs.EventType.OPEN,()=>{y||(z(mt,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),R(p,bs.EventType.CLOSE,()=>{y||(y=!0,z(mt,`RPC '${e}' stream ${i} transport closed`),x.So())}),R(p,bs.EventType.ERROR,D=>{y||(y=!0,Ws(mt,`RPC '${e}' stream ${i} transport errored:`,D),x.So(new Y(M.UNAVAILABLE,"The operation could not be completed")))}),R(p,bs.EventType.MESSAGE,D=>{var G;if(!y){const q=D.data[0];oe(!!q);const K=q,$=K.error||((G=K[0])===null||G===void 0?void 0:G.error);if($){z(mt,`RPC '${e}' stream ${i} received error:`,$);const L=$.status;let k=function(v){const E=Xe[v];if(E!==void 0)return $g(E)}(L),T=$.message;k===void 0&&(k=M.INTERNAL,T="Unknown error status: "+L+" with message "+$.message),y=!0,x.So(new Y(k,T)),p.close()}else z(mt,`RPC '${e}' stream ${i} received:`,q),x.bo(q)}}),R(l,tg.STAT_EVENT,D=>{D.stat===kc.PROXY?z(mt,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===kc.NOPROXY&&z(mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}/**
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
 *//**
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
 */function g0(){return typeof window<"u"?window:null}function fa(){return typeof document<"u"?document:null}/**
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
 */function yl(n){return new vT(n,!0)}/**
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
 */class y_{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class v_{constructor(e,t,r,i,s,o,l,c){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new y_(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(St(t.toString()),St("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new Y(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _0 extends v_{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=ET(this.serializer,e),r=function(s){if(!("targetChange"in s))return ae.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?Pt(o.readTime):ae.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=zc(this.serializer),t.addTarget=function(s,o){let l;const c=o.target;if(l=Va(c)?{documents:Qg(s,c)}:{query:Jg(s,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=zg(s,o.resumeToken);const u=jc(s,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ae.min())>0){l.readTime=$i(s,o.snapshotVersion.toTimestamp());const u=jc(s,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=TT(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=zc(this.serializer),t.removeTarget=e,this.a_(t)}}class y0 extends v_{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return oe(!!e.streamToken),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=wT(e.writeResults,e.commitTime),r=Pt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=zc(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Oa(this.serializer,r))};this.a_(t)}}/**
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
 */class v0 extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new Y(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,qc(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(M.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,qc(t,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class b0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(St(t),this.D_=!1):z("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class I0{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ui(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=de(c);u.L_.add(4),await yo(u),u.q_.set("Unknown"),u.L_.delete(4),await vl(u)}(this))})}),this.q_=new b0(r,i)}}async function vl(n){if(ui(n))for(const e of n.B_)await e(!0)}async function yo(n){for(const e of n.B_)await e(!1)}function b_(n,e){const t=de(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Gu(t)?zu(t):Ji(t).r_()&&qu(t,e))}function ju(n,e){const t=de(n),r=Ji(t);t.N_.delete(e),r.r_()&&I_(t,e),t.N_.size===0&&(r.r_()?r.o_():ui(t)&&t.q_.set("Unknown"))}function qu(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ji(n).A_(e)}function I_(n,e){n.Q_.xe(e),Ji(n).R_(e)}function zu(n){n.Q_=new mT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Ji(n).start(),n.q_.v_()}function Gu(n){return ui(n)&&!Ji(n).n_()&&n.N_.size>0}function ui(n){return de(n).L_.size===0}function E_(n){n.Q_=void 0}async function E0(n){n.q_.set("Online")}async function w0(n){n.N_.forEach((e,t)=>{qu(n,e)})}async function T0(n,e){E_(n),Gu(n)?(n.q_.M_(e),zu(n)):n.q_.set("Unknown")}async function x0(n,e,t){if(n.q_.set("Online"),e instanceof qg&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(n,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ua(n,r)}else if(e instanceof da?n.Q_.Ke(e):e instanceof jg?n.Q_.He(e):n.Q_.We(e),!t.isEqual(ae.min()))try{const r=await g_(n.localStore);t.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=s.N_.get(u);d&&s.N_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=s.N_.get(c);if(!d)return;s.N_.set(c,d.withResumeToken(Ze.EMPTY_BYTE_STRING,d.snapshotVersion)),I_(s,c);const p=new kn(d.target,c,u,d.sequenceNumber);qu(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await Ua(n,r)}}async function Ua(n,e,t){if(!wr(e))throw e;n.L_.add(1),await yo(n),n.q_.set("Offline"),t||(t=()=>g_(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await vl(n)})}function w_(n,e){return e().catch(t=>Ua(n,t,e))}async function vo(n){const e=de(n),t=br(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;A0(e);)try{const i=await c0(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,S0(e,i)}catch(i){await Ua(e,i)}T_(e)&&x_(e)}function A0(n){return ui(n)&&n.O_.length<10}function S0(n,e){n.O_.push(e);const t=br(n);t.r_()&&t.V_&&t.m_(e.mutations)}function T_(n){return ui(n)&&!br(n).n_()&&n.O_.length>0}function x_(n){br(n).start()}async function R0(n){br(n).p_()}async function P0(n){const e=br(n);for(const t of n.O_)e.m_(t.mutations)}async function C0(n,e,t){const r=n.O_.shift(),i=ku.from(r,e,t);await w_(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await vo(n)}async function V0(n,e){e&&br(n).V_&&await async function(r,i){if(function(o){return dT(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();br(r).s_(),await w_(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await vo(r)}}(n,e),T_(n)&&x_(n)}async function ep(n,e){const t=de(n);t.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=ui(t);t.L_.add(3),await yo(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await vl(t)}async function D0(n,e){const t=de(n);e?(t.L_.delete(2),await vl(t)):e||(t.L_.add(2),await yo(t),t.q_.set("Unknown"))}function Ji(n){return n.K_||(n.K_=function(t,r,i){const s=de(t);return s.w_(),new _0(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:E0.bind(null,n),Ro:w0.bind(null,n),mo:T0.bind(null,n),d_:x0.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Gu(n)?zu(n):n.q_.set("Unknown")):(await n.K_.stop(),E_(n))})),n.K_}function br(n){return n.U_||(n.U_=function(t,r,i){const s=de(t);return s.w_(),new y0(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:R0.bind(null,n),mo:V0.bind(null,n),f_:P0.bind(null,n),g_:C0.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await vo(n)):(await n.U_.stop(),n.O_.length>0&&(z("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Ku{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,l=new Ku(e,t,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hu(n,e){if(St("AsyncQueue",`${e}: ${n}`),wr(n))return new Y(M.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ri{constructor(e){this.comparator=e?(t,r)=>e(t,r)||Z.comparator(t.key,r.key):(t,r)=>Z.comparator(t.key,r.key),this.keyedMap=Is(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new Ri(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ri)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ri;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class tp{constructor(){this.W_=new qe(Z.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):re():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class ji{constructor(e,t,r,i,s,o,l,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new ji(e,t,Ri.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ul(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class k0{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class N0{constructor(){this.queries=np(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=de(t),s=i.queries;i.queries=np(),s.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new Y(M.ABORTED,"Firestore shutting down"))}}function np(){return new Tr(n=>Sg(n),ul)}async function Wu(n,e){const t=de(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new k0,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const l=Hu(o,`Initialization of query '${Ei(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&Ju(t)}async function Qu(n,e){const t=de(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function O0(n,e){const t=de(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Ju(t)}function M0(n,e,t){const r=de(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function Ju(n){n.Y_.forEach(e=>{e.next()})}var Jc,rp;(rp=Jc||(Jc={})).ea="default",rp.Cache="cache";class Yu{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ji(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=ji.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Jc.Cache}}/**
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
 */class A_{constructor(e){this.key=e}}class S_{constructor(e){this.key=e}}class F0{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=_e(),this.mutatedKeys=_e(),this.Aa=Rg(e),this.Ra=new Ri(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new tp,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),y=go(this.query,p)?p:null,x=!!m&&this.mutatedKeys.has(m.key),R=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let D=!1;m&&y?m.data.isEqual(y.data)?x!==R&&(r.track({type:3,doc:y}),D=!0):this.ga(m,y)||(r.track({type:2,doc:y}),D=!0,(c&&this.Aa(y,c)>0||u&&this.Aa(y,u)<0)&&(l=!0)):!m&&y?(r.track({type:0,doc:y}),D=!0):m&&!y&&(r.track({type:1,doc:m}),D=!0,(c||u)&&(l=!0)),D&&(y?(o=o.add(y),s=R?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(y,x){const R=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return R(y)-R(x)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=t&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new ji(this.query,e.Ra,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new tp,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=_e(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new S_(r))}),this.da.forEach(r=>{e.has(r)||t.push(new A_(r))}),t}ba(e){this.Ta=e.Ts,this.da=_e();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return ji.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class L0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class U0{constructor(e){this.key=e,this.va=!1}}class B0{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Tr(l=>Sg(l),ul),this.Ma=new Map,this.xa=new Set,this.Oa=new qe(Z.comparator),this.Na=new Map,this.La=new Uu,this.Ba={},this.ka=new Map,this.qa=si.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function $0(n,e,t=!0){const r=k_(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await R_(r,e,t,!0),i}async function j0(n,e){const t=k_(n);await R_(t,e,!0,!1)}async function R_(n,e,t,r){const i=await u0(n.localStore,Kt(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await q0(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&b_(n.remoteStore,i),l}async function q0(n,e,t,r,i){n.Ka=(p,m,y)=>async function(R,D,G,q){let K=D.view.ma(G);K.ns&&(K=await Yf(R.localStore,D.query,!1).then(({documents:T})=>D.view.ma(T,K)));const $=q&&q.targetChanges.get(D.targetId),L=q&&q.targetMismatches.get(D.targetId)!=null,k=D.view.applyChanges(K,R.isPrimaryClient,$,L);return sp(R,D.targetId,k.wa),k.snapshot}(n,p,m,y);const s=await Yf(n.localStore,e,!0),o=new F0(e,s.Ts),l=o.ma(s.documents),c=_o.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(l,n.isPrimaryClient,c);sp(n,t,u.wa);const d=new L0(e,t,o);return n.Fa.set(e,d),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),u.snapshot}async function z0(n,e,t){const r=de(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!ul(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Qc(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&ju(r.remoteStore,i.targetId),Yc(r,i.targetId)}).catch(li)):(Yc(r,i.targetId),await Qc(r.localStore,i.targetId,!0))}async function G0(n,e){const t=de(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ju(t.remoteStore,r.targetId))}async function K0(n,e,t){const r=N_(n);try{const i=await function(o,l){const c=de(o),u=Ge.now(),d=l.reduce((y,x)=>y.add(x.key),_e());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let x=Lt(),R=_e();return c.cs.getEntries(y,d).next(D=>{x=D,x.forEach((G,q)=>{q.isValidDocument()||(R=R.add(G))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,x)).next(D=>{p=D;const G=[];for(const q of l){const K=uT(q,p.get(q.key).overlayedDocument);K!=null&&G.push(new zn(q.key,K,yg(K.value.mapValue),yt.exists(!0)))}return c.mutationQueue.addMutationBatch(y,u,G,l)}).next(D=>{m=D;const G=D.applyToLocalDocumentSet(p,R);return c.documentOverlayCache.saveOverlays(y,D.batchId,G)})}).then(()=>({batchId:m.batchId,changes:Cg(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new qe(me)),u=u.insert(l,c),o.Ba[o.currentUser.toKey()]=u}(r,i.batchId,t),await bo(r,i.changes),await vo(r.remoteStore)}catch(i){const s=Hu(i,"Failed to persist write");t.reject(s)}}async function P_(n,e){const t=de(n);try{const r=await a0(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Na.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?oe(o.va):i.removedDocuments.size>0&&(oe(o.va),o.va=!1))}),await bo(t,r,e)}catch(r){await li(r)}}function ip(n,e,t){const r=de(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=de(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(u=!0)}),u&&Ju(c)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function H0(n,e,t){const r=de(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new qe(Z.comparator);o=o.insert(s,We.newNoDocument(s,ae.min()));const l=_e().add(s),c=new pl(ae.min(),new Map,new qe(me),o,l);await P_(r,c),r.Oa=r.Oa.remove(s),r.Na.delete(e),Xu(r)}else await Qc(r.localStore,e,!1).then(()=>Yc(r,e,t)).catch(li)}async function W0(n,e){const t=de(n),r=e.batch.batchId;try{const i=await o0(t.localStore,e);V_(t,r,null),C_(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await bo(t,i)}catch(i){await li(i)}}async function Q0(n,e,t){const r=de(n);try{const i=await function(o,l){const c=de(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(oe(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);V_(r,e,t),C_(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await bo(r,i)}catch(i){await li(i)}}function C_(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function V_(n,e,t){const r=de(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Yc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||D_(n,r)})}function D_(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(ju(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Xu(n))}function sp(n,e,t){for(const r of t)r instanceof A_?(n.La.addReference(r.key,e),J0(n,r)):r instanceof S_?(z("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||D_(n,r.key)):re()}function J0(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(z("SyncEngine","New document in limbo: "+t),n.xa.add(r),Xu(n))}function Xu(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new Z(Re.fromString(e)),r=n.qa.next();n.Na.set(r,new U0(t)),n.Oa=n.Oa.insert(t,r),b_(n.remoteStore,new kn(Kt(mo(t.path)),r,"TargetPurposeLimboResolution",zt.oe))}}async function bo(n,e,t){const r=de(n),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,t).then(u=>{var d;if((u||t)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){i.push(u);const p=$u.Wi(c.targetId,u);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(c,u){const d=de(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(u,m=>V.forEach(m.$i,y=>d.persistence.referenceDelegate.addReference(p,m.targetId,y)).next(()=>V.forEach(m.Ui,y=>d.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))}catch(p){if(!wr(p))throw p;z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const y=d.os.get(m),x=y.snapshotVersion,R=y.withLastLimboFreeSnapshotVersion(x);d.os=d.os.insert(m,R)}}}(r.localStore,s))}async function Y0(n,e){const t=de(n);if(!t.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await m_(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(c=>{c.reject(new Y(M.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bo(t,r.hs)}}function X0(n,e){const t=de(n),r=t.Na.get(e);if(r&&r.va)return _e().add(r.key);{let i=_e();const s=t.Ma.get(e);if(!s)return i;for(const o of s){const l=t.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function k_(n){const e=de(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=P_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=X0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=H0.bind(null,e),e.Ca.d_=O0.bind(null,e.eventManager),e.Ca.$a=M0.bind(null,e.eventManager),e}function N_(n){const e=de(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=W0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Q0.bind(null,e),e}class io{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return p_(this.persistence,new f_,e.initialUser,this.serializer)}Ga(e){return new d_(_l.Zr,this.serializer)}Wa(e){return new __}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}io.provider={build:()=>new io};class Z0 extends io{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await N_(this.Ja.syncEngine),await vo(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return p_(this.persistence,new f_,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new $T(r,e.asyncQueue,t)}Ha(e,t){const r=new gw(t,this.persistence);return new mw(e.asyncQueue,r)}Ga(e){const t=r0(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?kt.withCacheSize(this.cacheSizeBytes):kt.DEFAULT;return new Bu(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,g0(),fa(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new __}}class Ba{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ip(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Y0.bind(null,this.syncEngine),await D0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new N0}()}createDatastore(e){const t=yl(e.databaseInfo.databaseId),r=function(s){return new m0(s)}(e.databaseInfo);return function(s,o,l,c){return new v0(s,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,l){return new I0(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>ip(this.syncEngine,t,0),function(){return Zf.D()?new Zf:new d0}())}createSyncEngine(e,t){return function(i,s,o,l,c,u,d){const p=new B0(i,s,o,l,c,u);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=de(i);z("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await yo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ba.provider={build:()=>new Ba};/**
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
 */class Zu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):St("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class ex{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Tt.UNAUTHENTICATED,this.clientId=ig.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Hu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function dc(n,e){n.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await m_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function op(n,e){n.asyncQueue.verifyOperationInProgress();const t=await tx(n);z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>ep(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>ep(e.remoteStore,i)),n._onlineComponents=e}async function tx(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await dc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Ws("Error using user provided cache. Falling back to memory cache: "+t),await dc(n,new io)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await dc(n,new io);return n._offlineComponents}async function O_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await op(n,n._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await op(n,new Ba))),n._onlineComponents}function nx(n){return O_(n).then(e=>e.syncEngine)}async function $a(n){const e=await O_(n),t=e.eventManager;return t.onListen=$0.bind(null,e.syncEngine),t.onUnlisten=z0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=j0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=G0.bind(null,e.syncEngine),t}function rx(n,e,t={}){const r=new pn;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const d=new Zu({next:m=>{d.Za(),o.enqueueAndForget(()=>Qu(s,p));const y=m.docs.has(l);!y&&m.fromCache?u.reject(new Y(M.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&c&&c.source==="server"?u.reject(new Y(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Yu(mo(l.path),d,{includeMetadataChanges:!0,_a:!0});return Wu(s,p)}(await $a(n),n.asyncQueue,e,t,r)),r.promise}function ix(n,e,t={}){const r=new pn;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const d=new Zu({next:m=>{d.Za(),o.enqueueAndForget(()=>Qu(s,p)),m.fromCache&&c.source==="server"?u.reject(new Y(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Yu(l,d,{includeMetadataChanges:!0,_a:!0});return Wu(s,p)}(await $a(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function M_(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const ap=new Map;/**
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
 */function F_(n,e,t){if(!t)throw new Y(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function sx(n,e,t,r){if(e===!0&&r===!0)throw new Y(M.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function lp(n){if(!Z.isDocumentKey(n))throw new Y(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function cp(n){if(Z.isDocumentKey(n))throw new Y(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function bl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":re()}function $t(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Y(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=bl(n);throw new Y(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function ox(n,e){if(e<=0)throw new Y(M.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class up{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=M_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Y(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Y(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Y(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class eh{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new up({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new up(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new iw;switch(r.type){case"firstParty":return new aw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=ap.get(t);r&&(z("ComponentProvider","Removing Datastore"),ap.delete(t),r.terminate())}(this),Promise.resolve()}}/**
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
 */class Gn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Gn(this.firestore,e,this._query)}}class bt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}}class fr extends Gn{constructor(e,t,r){super(e,t,mo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new Z(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function ht(n,e,...t){if(n=ot(n),F_("collection","path",e),n instanceof eh){const r=Re.fromString(e,...t);return cp(r),new fr(n,null,r)}{if(!(n instanceof bt||n instanceof fr))throw new Y(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return cp(r),new fr(n.firestore,null,r)}}function Nt(n,e,...t){if(n=ot(n),arguments.length===1&&(e=ig.newId()),F_("doc","path",e),n instanceof eh){const r=Re.fromString(e,...t);return lp(r),new bt(n,null,new Z(r))}{if(!(n instanceof bt||n instanceof fr))throw new Y(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return lp(r),new bt(n.firestore,n instanceof fr?n.converter:null,new Z(r))}}/**
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
 */class hp{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new y_(this,"async_queue_retry"),this.Vu=()=>{const r=fa();r&&z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=fa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=fa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new pn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!wr(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw St("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Ku.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&re()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function dp(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Un extends eh{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new hp,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hp(e),this._firestoreClient=void 0,await e}}}function ax(n,e,t){t||(t="(default)");const r=wu(n,"firestore");if(r.isInitialized(t)){const i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(Ks(s,e))return i;throw new Y(M.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new Y(M.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function Il(n){if(n._terminated)throw new Y(M.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||lx(n),n._firestoreClient}function lx(n){var e,t,r;const i=n._freezeSettings(),s=function(l,c,u,d){return new Lw(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,M_(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new ex(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class qi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qi(Ze.fromBase64String(e))}catch(t){throw new Y(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new qi(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class El{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Y(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class wl{constructor(e){this._methodName=e}}/**
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
 */class th{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Y(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Y(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class nh{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const cx=/^__.*__$/;class ux{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new zn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qi(e,this.data,t,this.fieldTransforms)}}class L_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new zn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function U_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class rh{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new rh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ja(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(U_(this.Cu)&&cx.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class hx{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||yl(e)}Qu(e,t,r,i=!1){return new rh({Cu:e,methodName:t,qu:r,path:ze.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tl(n){const e=n._freezeSettings(),t=yl(n._databaseId);return new hx(n._databaseId,!!e.ignoreUndefinedProperties,t)}function B_(n,e,t,r,i,s={}){const o=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);sh("Data must be an object, but it was:",o,r);const l=$_(r,o);let c,u;if(s.merge)c=new Ot(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=Xc(e,p,t);if(!o.contains(m))throw new Y(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);q_(d,m)||d.push(m)}c=new Ot(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new ux(new _t(l),c,u)}class xl extends wl{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xl}}class ih extends wl{_toFieldTransform(e){return new Fg(e.path,new Li)}isEqual(e){return e instanceof ih}}function dx(n,e,t,r){const i=n.Qu(1,e,t);sh("Data must be an object, but it was:",i,r);const s=[],o=_t.empty();ci(r,(c,u)=>{const d=oh(e,c,t);u=ot(u);const p=i.Nu(d);if(u instanceof xl)s.push(d);else{const m=Io(u,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new Ot(s);return new L_(o,l,i.fieldTransforms)}function fx(n,e,t,r,i,s){const o=n.Qu(1,e,t),l=[Xc(e,r,t)],c=[i];if(s.length%2!=0)throw new Y(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Xc(e,s[m])),c.push(s[m+1]);const u=[],d=_t.empty();for(let m=l.length-1;m>=0;--m)if(!q_(u,l[m])){const y=l[m];let x=c[m];x=ot(x);const R=o.Nu(y);if(x instanceof xl)u.push(y);else{const D=Io(x,R);D!=null&&(u.push(y),d.set(y,D))}}const p=new Ot(u);return new L_(d,p,o.fieldTransforms)}function px(n,e,t,r=!1){return Io(t,n.Qu(r?4:3,e))}function Io(n,e){if(j_(n=ot(n)))return sh("Unsupported field value:",e,n),$_(n,e);if(n instanceof wl)return function(r,i){if(!U_(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let c=Io(l,i.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return iT(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ge.fromDate(r);return{timestampValue:$i(i.serializer,s)}}if(r instanceof Ge){const s=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$i(i.serializer,s)}}if(r instanceof th)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qi)return{bytesValue:zg(i.serializer,r._byteString)};if(r instanceof bt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Mu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof nh)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Vu(l.serializer,c)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${bl(r)}`)}(n,e)}function $_(n,e){const t={};return pg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ci(n,(r,i)=>{const s=Io(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function j_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ge||n instanceof th||n instanceof qi||n instanceof bt||n instanceof wl||n instanceof nh)}function sh(n,e,t){if(!j_(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=bl(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Xc(n,e,t){if((e=ot(e))instanceof El)return e._internalPath;if(typeof e=="string")return oh(n,e);throw ja("Field path arguments must be of type string or ",n,!1,void 0,t)}const mx=new RegExp("[~\\*/\\[\\]]");function oh(n,e,t){if(e.search(mx)>=0)throw ja(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new El(...e.split("."))._internalPath}catch{throw ja(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ja(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Y(M.INVALID_ARGUMENT,l+n+c)}function q_(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class z_{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ah("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class gx extends z_{data(){return super.data()}}function ah(n,e){return typeof e=="string"?oh(n,e):e instanceof El?e._internalPath:e._delegate._internalPath}/**
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
 */function G_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Y(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lh{}class ch extends lh{}function pr(n,e,...t){let r=[];e instanceof lh&&r.push(e),r=r.concat(t),function(s){const o=s.filter(c=>c instanceof hh).length,l=s.filter(c=>c instanceof uh).length;if(o>1||o>0&&l>0)throw new Y(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class uh extends ch{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new uh(e,t,r)}_apply(e){const t=this._parse(e);return K_(e._query,t),new Gn(e.firestore,e.converter,$c(e._query,t))}_parse(e){const t=Tl(e.firestore);return function(s,o,l,c,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Y(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){pp(p,d);const y=[];for(const x of p)y.push(fp(c,s,x));m={arrayValue:{values:y}}}else m=fp(c,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||pp(p,d),m=px(l,o,p,d==="in"||d==="not-in");return be.create(u,d,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class hh extends lh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new hh(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ce.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const c of l)K_(o,c),o=$c(o,c)}(e._query,t),new Gn(e.firestore,e.converter,$c(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class dh extends ch{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new dh(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new Y(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Y(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new no(s,o)}(e._query,this._field,this._direction);return new Gn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Wi(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function mr(n,e="asc"){const t=e,r=ah("orderBy",n);return dh._create(r,t)}class fh extends ch{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new fh(e,t,r)}_apply(e){return new Gn(e.firestore,e.converter,ka(e._query,this._limit,this._limitType))}}function _x(n){return ox("limit",n),fh._create("limit",n,"F")}function fp(n,e,t){if(typeof(t=ot(t))=="string"){if(t==="")throw new Y(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ag(e)&&t.indexOf("/")!==-1)throw new Y(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Re.fromString(t));if(!Z.isDocumentKey(r))throw new Y(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return eo(n,new Z(r))}if(t instanceof bt)return eo(n,t._key);throw new Y(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bl(t)}.`)}function pp(n,e){if(!Array.isArray(n)||n.length===0)throw new Y(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function K_(n,e){const t=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new Y(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class yx{convertValue(e,t="none"){switch(ti(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw re()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ci(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>$e(o.doubleValue));return new nh(s)}convertGeoPoint(e){return new th($e(e.latitude),$e(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Pu(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Xs(e));default:return null}}convertTimestamp(e){const t=Ln(e);return new Ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Re.fromString(e);oe(e_(r));const i=new ei(r.get(1),r.get(3)),s=new Z(r.popFirst(5));return i.isEqual(t)||St(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function H_(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class Ts{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class W_ extends z_{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new pa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ah("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class pa extends W_{data(e={}){return super.data(e)}}class Q_{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ts(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new pa(this._firestore,this._userDataWriter,r.key,r,new Ts(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Y(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const c=new pa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ts(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new pa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ts(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:vx(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function vx(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
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
 */function Zc(n){n=$t(n,bt);const e=$t(n.firestore,Un);return rx(Il(e),n._key).then(t=>J_(e,n,t))}class ph extends yx{constructor(e){super(),this.firestore=e}convertBytes(e){return new qi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new bt(this.firestore,null,t)}}function fc(n){n=$t(n,Gn);const e=$t(n.firestore,Un),t=Il(e),r=new ph(e);return G_(n._query),ix(t,n._query).then(i=>new Q_(e,r,n,i))}function bx(n,e,t){n=$t(n,bt);const r=$t(n.firestore,Un),i=H_(n.converter,e,t);return Al(r,[B_(Tl(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,yt.none())])}function Ms(n,e,t,...r){n=$t(n,bt);const i=$t(n.firestore,Un),s=Tl(i);let o;return o=typeof(e=ot(e))=="string"||e instanceof El?fx(s,"updateDoc",n._key,e,t,r):dx(s,"updateDoc",n._key,e),Al(i,[o.toMutation(n._key,yt.exists(!0))])}function so(n){return Al($t(n.firestore,Un),[new fl(n._key,yt.none())])}function oo(n,e){const t=$t(n.firestore,Un),r=Nt(n),i=H_(n.converter,e);return Al(t,[B_(Tl(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,yt.exists(!1))]).then(()=>r)}function mn(n,...e){var t,r,i;n=ot(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||dp(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(dp(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let c,u,d;if(n instanceof bt)u=$t(n.firestore,Un),d=mo(n._key.path),c={next:p=>{e[o]&&e[o](J_(u,n,p))},error:e[o+1],complete:e[o+2]};else{const p=$t(n,Gn);u=$t(p.firestore,Un),d=p._query;const m=new ph(u);c={next:y=>{e[o]&&e[o](new Q_(u,m,p,y))},error:e[o+1],complete:e[o+2]},G_(n._query)}return function(m,y,x,R){const D=new Zu(R),G=new Yu(y,D,x);return m.asyncQueue.enqueueAndForget(async()=>Wu(await $a(m),G)),()=>{D.Za(),m.asyncQueue.enqueueAndForget(async()=>Qu(await $a(m),G))}}(Il(u),d,l,c)}function Al(n,e){return function(r,i){const s=new pn;return r.asyncQueue.enqueueAndForget(async()=>K0(await nx(r),i,s)),s.promise}(Il(n),e)}function J_(n,e,t){const r=t.docs.get(e._key),i=new ph(n);return new W_(n,i,e._key,r,new Ts(t.hasPendingWrites,t.fromCache),e.converter)}class Ix{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Tx(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function Ex(n){return new Ix(n)}class wx{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ba.provider,this._offlineComponentProvider={build:t=>new Z0(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}function Tx(n){return new wx(n==null?void 0:n.forceOwnership)}function zi(){return new ih("serverTimestamp")}(function(e,t=!0){(function(i){Hi=i})(Ki),ki(new Xr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Un(new sw(r.getProvider("auth-internal")),new cw(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Y(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ei(u.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),hr(of,"4.7.3",e),hr(of,"4.7.3","esm2017")})();function mh(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Y_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xx=Y_,X_=new ho("auth","Firebase",Y_());/**
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
 */const qa=new Iu("@firebase/auth");function Ax(n,...e){qa.logLevel<=ve.WARN&&qa.warn(`Auth (${Ki}): ${n}`,...e)}function ma(n,...e){qa.logLevel<=ve.ERROR&&qa.error(`Auth (${Ki}): ${n}`,...e)}/**
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
 */function En(n,...e){throw _h(n,...e)}function tn(n,...e){return _h(n,...e)}function gh(n,e,t){const r=Object.assign(Object.assign({},xx()),{[e]:t});return new ho("auth","Firebase",r).create(e,{appName:n.name})}function Jr(n){return gh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sx(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&En(n,"argument-error"),gh(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _h(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return X_.create(n,...e)}function he(n,e,...t){if(!n)throw _h(e,...t)}function Nn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ma(e),new Error(e)}function Bn(n,e){n||Nn(e)}/**
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
 */function eu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Rx(){return mp()==="http:"||mp()==="https:"}function mp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Px(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rx()||MI()||"connection"in navigator)?navigator.onLine:!0}function Cx(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Eo{constructor(e,t){this.shortDelay=e,this.longDelay=t,Bn(t>e,"Short delay should be less than long delay!"),this.isMobile=kI()||FI()}get(){return Px()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yh(n,e){Bn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Z_{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Vx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Dx=new Eo(3e4,6e4);function vh(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Yi(n,e,t,r,i={}){return ey(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=fo(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:c},s);return OI()||(u.referrerPolicy="no-referrer"),Z_.fetch()(ty(n,n.config.apiHost,t,l),u)})}async function ey(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Vx),e);try{const i=new Nx(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ta(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ta(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ta(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ta(n,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw gh(n,d,u);En(n,d)}}catch(i){if(i instanceof qn)throw i;En(n,"network-request-failed",{message:String(i)})}}async function kx(n,e,t,r,i={}){const s=await Yi(n,e,t,r,i);return"mfaPendingCredential"in s&&En(n,"multi-factor-auth-required",{_serverResponse:s}),s}function ty(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?yh(n.config,i):`${n.config.apiScheme}://${i}`}class Nx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),Dx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ta(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=tn(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function Ox(n,e){return Yi(n,"POST","/v1/accounts:delete",e)}async function ny(n,e){return Yi(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mx(n,e=!1){const t=ot(n),r=await t.getIdToken(e),i=bh(r);he(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fs(pc(i.auth_time)),issuedAtTime:Fs(pc(i.iat)),expirationTime:Fs(pc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function pc(n){return Number(n)*1e3}function bh(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ma("JWT malformed, contained fewer than 3 sections"),null;try{const i=jm(t);return i?JSON.parse(i):(ma("Failed to decode base64 JWT payload"),null)}catch(i){return ma("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gp(n){const e=bh(n);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ao(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof qn&&Fx(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Fx({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Lx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fs(this.lastLoginAt),this.creationTime=Fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function za(n){var e;const t=n.auth,r=await n.getIdToken(),i=await ao(n,ny(t,{idToken:r}));he(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ry(s.providerUserInfo):[],l=Bx(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new tu(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function Ux(n){const e=ot(n);await za(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Bx(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ry(n){return n.map(e=>{var{providerId:t}=e,r=mh(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function $x(n,e){const t=await ey(n,{},async()=>{const r=fo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=ty(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Z_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function jx(n,e){return Yi(n,"POST","/v2/accounts:revokeToken",vh(n,e))}/**
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
 */class Pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){he(e.length!==0,"internal-error");const t=gp(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await $x(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Pi;return r&&(he(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(he(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(he(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pi,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
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
 */function er(n,e){he(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class On{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=mh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Lx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new tu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ao(this,this.stsTokenManager.getToken(this.auth,e));return he(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Mx(this,e)}reload(){return Ux(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new On(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await za(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dn(this.auth.app))return Promise.reject(Jr(this.auth));const e=await this.getIdToken();return await ao(this,Ox(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,l,c,u,d;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(i=t.email)!==null&&i!==void 0?i:void 0,y=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=t.photoURL)!==null&&o!==void 0?o:void 0,R=(l=t.tenantId)!==null&&l!==void 0?l:void 0,D=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,G=(u=t.createdAt)!==null&&u!==void 0?u:void 0,q=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:K,emailVerified:$,isAnonymous:L,providerData:k,stsTokenManager:T}=t;he(K&&T,e,"internal-error");const b=Pi.fromJSON(this.name,T);he(typeof K=="string",e,"internal-error"),er(p,e.name),er(m,e.name),he(typeof $=="boolean",e,"internal-error"),he(typeof L=="boolean",e,"internal-error"),er(y,e.name),er(x,e.name),er(R,e.name),er(D,e.name),er(G,e.name),er(q,e.name);const v=new On({uid:K,auth:e,email:m,emailVerified:$,displayName:p,isAnonymous:L,photoURL:x,phoneNumber:y,tenantId:R,stsTokenManager:b,createdAt:G,lastLoginAt:q});return k&&Array.isArray(k)&&(v.providerData=k.map(E=>Object.assign({},E))),D&&(v._redirectEventId=D),v}static async _fromIdTokenResponse(e,t,r=!1){const i=new Pi;i.updateFromServerResponse(t);const s=new On({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await za(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];he(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ry(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Pi;l.updateFromIdToken(r);const c=new On({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new tu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
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
 */const _p=new Map;function Mn(n){Bn(n instanceof Function,"Expected a class definition");let e=_p.get(n);return e?(Bn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,_p.set(n,e),e)}/**
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
 */class iy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}iy.type="NONE";const yp=iy;/**
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
 */function ga(n,e,t){return`firebase:${n}:${e}:${t}`}class Ci{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ga(this.userKey,i.apiKey,s),this.fullPersistenceKey=ga("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?On._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ci(Mn(yp),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Mn(yp);const o=ga(r,e.config.apiKey,e.name);let l=null;for(const u of t)try{const d=await u._get(o);if(d){const p=On._fromJSON(e,d);u!==s&&(l=p),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ci(s,e,r):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ci(s,e,r))}}/**
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
 */function vp(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ly(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uy(e))return"Blackberry";if(hy(e))return"Webos";if(oy(e))return"Safari";if((e.includes("chrome/")||ay(e))&&!e.includes("edge/"))return"Chrome";if(cy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sy(n=nt()){return/firefox\//i.test(n)}function oy(n=nt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ay(n=nt()){return/crios\//i.test(n)}function ly(n=nt()){return/iemobile/i.test(n)}function cy(n=nt()){return/android/i.test(n)}function uy(n=nt()){return/blackberry/i.test(n)}function hy(n=nt()){return/webos/i.test(n)}function Ih(n=nt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function qx(n=nt()){var e;return Ih(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zx(){return LI()&&document.documentMode===10}function dy(n=nt()){return Ih(n)||cy(n)||hy(n)||uy(n)||/windows phone/i.test(n)||ly(n)}/**
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
 */function fy(n,e=[]){let t;switch(n){case"Browser":t=vp(nt());break;case"Worker":t=`${vp(nt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ki}/${r}`}/**
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
 */class Gx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Kx(n,e={}){return Yi(n,"GET","/v2/passwordPolicy",vh(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Hx=6;class Wx{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Hx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Qx{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bp(this),this.idTokenSubscription=new bp(this),this.beforeStateQueue=new Gx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=X_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mn(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ci.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ny(this,{idToken:e}),r=await On._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Dn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await za(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Cx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dn(this.app))return Promise.reject(Jr(this));const t=e?ot(e):null;return t&&he(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dn(this.app)?Promise.reject(Jr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dn(this.app)?Promise.reject(Jr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Kx(this),t=new Wx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ho("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await jx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Mn(e)||this._popupRedirectResolver;he(t,this,"argument-error"),this.redirectPersistenceManager=await Ci.create(this,[Mn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Ax(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Sl(n){return ot(n)}class bp{constructor(e){this.auth=e,this.observer=null,this.addObserver=zI(t=>this.observer=t)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Eh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jx(n){Eh=n}function Yx(n){return Eh.loadJS(n)}function Xx(){return Eh.gapiScript}function Zx(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function eA(n,e){const t=wu(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Ks(s,e??{}))return i;En(i,"already-initialized")}return t.initialize({options:e})}function tA(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Mn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function nA(n,e,t){const r=Sl(n);he(r._canInitEmulator,r,"emulator-config-failed"),he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=py(e),{host:o,port:l}=rA(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||iA()}function py(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function rA(n){const e=py(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ip(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ip(o)}}}function Ip(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function iA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class my{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,t){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}/**
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
 */async function Vi(n,e){return kx(n,"POST","/v1/accounts:signInWithIdp",vh(n,e))}/**
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
 */const sA="http://localhost";class oi extends my{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):En("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=mh(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new oi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Vi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Vi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Vi(e,t)}buildRequest(){const e={requestUri:sA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=fo(t)}return e}}/**
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
 */class wh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wo extends wh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class rr extends wo{constructor(){super("facebook.com")}static credential(e){return oi._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";rr.PROVIDER_ID="facebook.com";/**
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
 */class Vn extends wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return oi._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Vn.credential(t,r)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com";Vn.PROVIDER_ID="google.com";/**
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
 */class ir extends wo{constructor(){super("github.com")}static credential(e){return oi._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
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
 */class sr extends wo{constructor(){super("twitter.com")}static credential(e,t){return oi._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return sr.credential(t,r)}catch{return null}}}sr.TWITTER_SIGN_IN_METHOD="twitter.com";sr.PROVIDER_ID="twitter.com";/**
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
 */class Gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await On._fromIdTokenResponse(e,r,i),o=Ep(r);return new Gi({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Ep(r);return new Gi({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Ep(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ga extends qn{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ga.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ga(e,t,r,i)}}function gy(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ga._fromErrorAndOperation(n,s,e,r):s})}async function oA(n,e,t=!1){const r=await ao(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Gi._forOperation(n,"link",r)}/**
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
 */async function aA(n,e,t=!1){const{auth:r}=n;if(Dn(r.app))return Promise.reject(Jr(r));const i="reauthenticate";try{const s=await ao(n,gy(r,i,e,n),t);he(s.idToken,r,"internal-error");const o=bh(s.idToken);he(o,r,"internal-error");const{sub:l}=o;return he(n.uid===l,r,"user-mismatch"),Gi._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&En(r,"user-mismatch"),s}}/**
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
 */async function lA(n,e,t=!1){if(Dn(n.app))return Promise.reject(Jr(n));const r="signIn",i=await gy(n,r,e),s=await Gi._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function cA(n,e,t,r){return ot(n).onIdTokenChanged(e,t,r)}function uA(n,e,t){return ot(n).beforeAuthStateChanged(e,t)}function hA(n,e,t,r){return ot(n).onAuthStateChanged(e,t,r)}function _y(n){return ot(n).signOut()}const Ka="__sak";/**
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
 */class yy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ka,"1"),this.storage.removeItem(Ka),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const dA=1e3,fA=10;class vy extends yy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,fA):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},dA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vy.type="LOCAL";const pA=vy;/**
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
 */class by extends yy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}by.type="SESSION";const Iy=by;/**
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
 */function mA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Rl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Rl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(t.origin,s)),c=await mA(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rl.receivers=[];/**
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
 */function Th(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class gA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const u=Th("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function gn(){return window}function _A(n){gn().location.href=n}/**
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
 */function Ey(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function yA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function bA(){return Ey()?self:null}/**
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
 */const wy="firebaseLocalStorageDb",IA=1,Ha="firebaseLocalStorage",Ty="fbase_key";class To{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Pl(n,e){return n.transaction([Ha],e?"readwrite":"readonly").objectStore(Ha)}function EA(){const n=indexedDB.deleteDatabase(wy);return new To(n).toPromise()}function nu(){const n=indexedDB.open(wy,IA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ha,{keyPath:Ty})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ha)?e(r):(r.close(),await EA(),e(await nu()))})})}async function wp(n,e,t){const r=Pl(n,!0).put({[Ty]:e,value:t});return new To(r).toPromise()}async function wA(n,e){const t=Pl(n,!1).get(e),r=await new To(t).toPromise();return r===void 0?null:r.value}function Tp(n,e){const t=Pl(n,!0).delete(e);return new To(t).toPromise()}const TA=800,xA=3;class xy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>xA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ey()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rl._getInstance(bA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yA(),!this.activeServiceWorker)return;this.sender=new gA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nu();return await wp(e,Ka,"1"),await Tp(e,Ka),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>wp(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>wA(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Tp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Pl(i,!1).getAll();return new To(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xy.type="LOCAL";const AA=xy;new Eo(3e4,6e4);/**
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
 */function Ay(n,e){return e?Mn(e):(he(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class xh extends my{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Vi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Vi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function SA(n){return lA(n.auth,new xh(n),n.bypassAuthState)}function RA(n){const{auth:e,user:t}=n;return he(t,e,"internal-error"),aA(t,new xh(n),n.bypassAuthState)}async function PA(n){const{auth:e,user:t}=n;return he(t,e,"internal-error"),oA(t,new xh(n),n.bypassAuthState)}/**
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
 */class Sy{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SA;case"linkViaPopup":case"linkViaRedirect":return PA;case"reauthViaPopup":case"reauthViaRedirect":return RA;default:En(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const CA=new Eo(2e3,1e4);async function VA(n,e,t){if(Dn(n.app))return Promise.reject(tn(n,"operation-not-supported-in-this-environment"));const r=Sl(n);Sx(n,e,wh);const i=Ay(r,t);return new Gr(r,"signInViaPopup",e,i).executeNotNull()}class Gr extends Sy{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Gr.currentPopupAction&&Gr.currentPopupAction.cancel(),Gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=Th();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CA.get())};e()}}Gr.currentPopupAction=null;/**
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
 */const DA="pendingRedirect",_a=new Map;class kA extends Sy{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=_a.get(this.auth._key());if(!e){try{const r=await NA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}_a.set(this.auth._key(),e)}return this.bypassAuthState||_a.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NA(n,e){const t=FA(e),r=MA(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function OA(n,e){_a.set(n._key(),e)}function MA(n){return Mn(n._redirectPersistence)}function FA(n){return ga(DA,n.config.apiKey,n.name)}async function LA(n,e,t=!1){if(Dn(n.app))return Promise.reject(Jr(n));const r=Sl(n),i=Ay(r,e),o=await new kA(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const UA=10*60*1e3;class BA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$A(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ry(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(tn(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UA&&this.cachedEventUids.clear(),this.cachedEventUids.has(xp(e))}saveEventToCache(e){this.cachedEventUids.add(xp(e)),this.lastProcessedEventTime=Date.now()}}function xp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ry({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $A(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ry(n);default:return!1}}/**
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
 */async function jA(n,e={}){return Yi(n,"GET","/v1/projects",e)}/**
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
 */const qA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zA=/^https?/;async function GA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await jA(n);for(const t of e)try{if(KA(t))return}catch{}En(n,"unauthorized-domain")}function KA(n){const e=eu(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!zA.test(t))return!1;if(qA.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const HA=new Eo(3e4,6e4);function Ap(){const n=gn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function WA(n){return new Promise((e,t)=>{var r,i,s;function o(){Ap(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ap(),t(tn(n,"network-request-failed"))},timeout:HA.get()})}if(!((i=(r=gn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=gn().gapi)===null||s===void 0)&&s.load)o();else{const l=Zx("iframefcb");return gn()[l]=()=>{gapi.load?o():t(tn(n,"network-request-failed"))},Yx(`${Xx()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw ya=null,e})}let ya=null;function QA(n){return ya=ya||WA(n),ya}/**
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
 */const JA=new Eo(5e3,15e3),YA="__/auth/iframe",XA="emulator/auth/iframe",ZA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},e1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function t1(n){const e=n.config;he(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?yh(e,XA):`https://${n.config.authDomain}/${YA}`,r={apiKey:e.apiKey,appName:n.name,v:Ki},i=e1.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${fo(r).slice(1)}`}async function n1(n){const e=await QA(n),t=gn().gapi;return he(t,n,"internal-error"),e.open({where:document.body,url:t1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=tn(n,"network-request-failed"),l=gn().setTimeout(()=>{s(o)},JA.get());function c(){gn().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const r1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},i1=500,s1=600,o1="_blank",a1="http://localhost";class Sp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function l1(n,e,t,r=i1,i=s1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},r1),{width:r.toString(),height:i.toString(),top:s,left:o}),u=nt().toLowerCase();t&&(l=ay(u)?o1:t),sy(u)&&(e=e||a1,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[y,x])=>`${m}${y}=${x},`,"");if(qx(u)&&l!=="_self")return c1(e||"",l),new Sp(null);const p=window.open(e||"",l,d);he(p,n,"popup-blocked");try{p.focus()}catch{}return new Sp(p)}function c1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const u1="__/auth/handler",h1="emulator/auth/handler",d1=encodeURIComponent("fac");async function Rp(n,e,t,r,i,s){he(n.config.authDomain,n,"auth-domain-config-required"),he(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ki,eventId:i};if(e instanceof wh){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",qI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries(s||{}))o[d]=p}if(e instanceof wo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),u=c?`#${d1}=${encodeURIComponent(c)}`:"";return`${f1(n)}?${fo(l).slice(1)}${u}`}function f1({config:n}){return n.emulator?yh(n,h1):`https://${n.authDomain}/${u1}`}/**
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
 */const mc="webStorageSupport";class p1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Iy,this._completeRedirectFn=LA,this._overrideRedirectResult=OA}async _openPopup(e,t,r,i){var s;Bn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Rp(e,t,r,eu(),i);return l1(e,o,Th())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Rp(e,t,r,eu(),i);return _A(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await n1(e),r=new BA(e);return t.register("authEvent",i=>(he(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(mc,{type:mc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[mc];o!==void 0&&t(!!o),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=GA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return dy()||oy()||Ih()}}const m1=p1;var Pp="@firebase/auth",Cp="1.7.9";/**
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
 */class g1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function y1(n){ki(new Xr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fy(n)},u=new Qx(r,i,s,c);return tA(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ki(new Xr("auth-internal",e=>{const t=Sl(e.getProvider("auth").getImmediate());return(r=>new g1(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),hr(Pp,Cp,_1(n)),hr(Pp,Cp,"esm2017")}/**
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
 */const v1=5*60,b1=zm("authIdTokenMaxAge")||v1;let Vp=null;const I1=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>b1)return;const i=t==null?void 0:t.token;Vp!==i&&(Vp=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function E1(n=GE()){const e=wu(n,"auth");if(e.isInitialized())return e.getImmediate();const t=eA(n,{popupRedirectResolver:m1,persistence:[AA,pA,Iy]}),r=zm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=I1(s.toString());uA(t,o,()=>o(t.currentUser)),cA(t,l=>o(l))}}const i=VI("auth");return i&&nA(t,`http://${i}`),t}function w1(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Jx({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=tn("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",w1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});y1("Browser");const T1={apiKey:"AIzaSyA2QU3c02jKh4P6h0MQDdlx2pGgzdh_9gY",authDomain:"app-geotecnia-4de8d.firebaseapp.com",projectId:"app-geotecnia-4de8d",storageBucket:"app-geotecnia-4de8d.firebasestorage.app",messagingSenderId:"222134670710",appId:"1:222134670710:web:527c58e0c1932c8e039657"},Py=Qm(T1),Se=ax(Py,{localCache:Ex()}),Ir=E1(Py),x1=new Vn,A1={class:"flex-1 flex flex-col items-center justify-center p-6 z-50 bg-fondo absolute inset-0"},S1={__name:"Login",setup(n){const e=async()=>{try{await VA(Ir,x1)}catch(t){alert("Error de Google: "+t.message)}};return(t,r)=>(ee(),ne("div",A1,[_("div",{class:"w-full max-w-sm bg-superficie p-8 rounded-[32px] shadow-2xl flex flex-col gap-6 items-center"},[r[1]||(r[1]=_("div",{class:"text-center"},[_("h1",{class:"text-[28px] font-bold text-white"},"Geotecnia Pro"),_("p",{class:"text-[14px] text-etiqueta mt-1"},"Acceso seguro a la plataforma")],-1)),_("button",{onClick:e,class:"w-full bg-white text-black rounded-full min-h-[56px] text-[16px] font-bold tracking-wide active:scale-95 transition-transform flex items-center justify-center gap-3 mt-2"},[...r[0]||(r[0]=[Fb('<svg width="24" height="24" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg> Entrar con Google ',2)])])])]))}},R1={class:"flex-1 flex flex-col items-center justify-center p-6 z-40 bg-fondo absolute inset-0"},P1={__name:"Espera",setup(n){const e=()=>{_y(Ir)};return(t,r)=>(ee(),ne("div",R1,[_("div",{class:"w-full max-w-sm bg-superficie p-8 rounded-[32px] shadow-2xl text-center flex flex-col gap-4 items-center"},[r[0]||(r[0]=_("h2",{class:"text-[20px] font-bold text-white"},"Cuenta en Revisión",-1)),r[1]||(r[1]=_("p",{class:"text-[14px] text-etiqueta"},"Espera a que el Administrador apruebe tu acceso.",-1)),_("button",{onClick:e,class:"mt-4 text-[14px] text-acento font-semibold border border-acento/30 px-6 py-2 rounded-full"}," Cerrar Sesión ")])]))}};const C1=(n,e)=>{const t=n.__vccOpts||n;for(const[r,i]of e)t[r]=i;return t},V1={class:"p-6 border-b border-fondo flex justify-between items-center"},D1={class:"flex-1 flex flex-col py-4"},k1={__name:"Sidebar",props:{isOpen:Boolean,activeTab:String,isAdmin:Boolean},emits:["close","change-tab"],setup(n,{emit:e}){const t=e,r=i=>{t("change-tab",i),t("close")};return(i,s)=>(ee(),ne("div",null,[n.isOpen?(ee(),ne("div",{key:0,onClick:s[0]||(s[0]=o=>i.$emit("close")),class:"fixed inset-0 bg-black/60 z-40"})):Je("",!0),_("div",{class:ct([n.isOpen?"translate-x-0":"-translate-x-full","fixed top-0 left-0 w-64 h-full bg-superficie z-50 transform transition-transform duration-300 flex flex-col overflow-y-auto"])},[_("div",V1,[s[9]||(s[9]=_("div",{class:"text-[20px] font-bold text-acento"},"Geotecnia Pro",-1)),_("button",{onClick:s[1]||(s[1]=o=>i.$emit("close")),class:"text-etiqueta text-[28px]"},"×")]),_("div",D1,[_("button",{onClick:s[2]||(s[2]=o=>r("inicio")),class:ct([n.activeTab==="inicio"?"active text-white":"text-etiqueta","sidebar-link text-left px-6 py-4 text-[15px] font-medium"])},"1. Inicio",2),_("button",{onClick:s[3]||(s[3]=o=>r("campo")),class:ct([n.activeTab==="campo"?"active text-white":"text-etiqueta","sidebar-link text-left px-6 py-4 text-[15px] font-medium"])},"2. Registro Muestras",2),_("button",{onClick:s[4]||(s[4]=o=>r("nq")),class:ct([n.activeTab==="nq"?"active text-white":"text-etiqueta","sidebar-link text-left px-6 py-4 text-[15px] font-medium"])},"3. Tubería NQ",2),_("button",{onClick:s[5]||(s[5]=o=>r("resumen")),class:ct([n.activeTab==="resumen"?"active text-white":"text-etiqueta","sidebar-link text-left px-6 py-4 text-[15px] font-medium"])},"4. Resumen & PDF",2),_("button",{onClick:s[6]||(s[6]=o=>r("fotos")),class:ct([n.activeTab==="fotos"?"active text-white":"text-[#38BDF8]","sidebar-link text-left px-6 py-4 text-[15px] font-medium"])},"📸 Fotos de Campo",2),s[10]||(s[10]=_("div",{class:"h-[1px] bg-fondo my-2"},null,-1)),_("button",{onClick:s[7]||(s[7]=o=>r("reportes")),class:ct([n.activeTab==="reportes"?"active text-white":"text-[#10B981]","sidebar-link text-left px-6 py-4 text-[15px] font-medium"])},"📊 Reportes y Avance",2),n.isAdmin?(ee(),ne("button",{key:0,onClick:s[8]||(s[8]=o=>r("admin")),class:ct([n.activeTab==="admin"?"active text-white":"text-[#F59E0B]","sidebar-link text-left px-6 py-4 text-[15px] font-medium hidden sm:block"])},"👑 Panel Admin",2)):Je("",!0)])],2)]))}},N1=C1(k1,[["__scopeId","data-v-64a67471"]]),O1={class:"flex flex-col px-5 py-3 bg-fondo border-b border-superficie z-30 relative"},M1={class:"flex justify-between items-center mb-2"},F1={class:"flex items-center gap-3"},L1={class:"text-[18px] font-bold text-white"},U1={class:"flex justify-between items-center pl-1"},B1={class:"text-[10px] text-acento font-medium uppercase tracking-wider"},$1={__name:"Header",props:{title:String,userRole:String,userEmail:String},emits:["open-sidebar","logout"],setup(n){return(e,t)=>(ee(),ne("div",O1,[_("div",M1,[_("div",F1,[_("button",{onClick:t[0]||(t[0]=r=>e.$emit("open-sidebar"))},[...t[2]||(t[2]=[_("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[_("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),_("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),_("line",{x1:"3",y1:"18",x2:"21",y2:"18"})],-1)])]),_("h1",L1,ue(n.title),1)])]),_("div",U1,[_("span",B1,ue(n.userRole==="admin"?"Admin ":"Operador 👷‍♂️")+" • "+ue(n.userEmail),1),_("button",{onClick:t[1]||(t[1]=r=>e.$emit("logout")),class:"text-[10px] text-[#EF4444] border border-[#EF4444]/30 px-3 py-1 rounded-full font-semibold"},"Salir")])]))}},j1={class:"px-6 mt-6 flex flex-col gap-6 w-full max-w-4xl mx-auto"},q1={class:"bg-superficie rounded-[32px] p-6 shadow-lg"},z1={class:"bg-fondo rounded-[20px] px-4 py-1 border border-transparent focus-within:border-acento/50 transition-colors"},G1=["value"],K1={class:"bg-fondo rounded-[20px] px-4 py-1 border border-transparent focus-within:border-acento/50 transition-colors"},H1=["disabled"],W1=["value"],Q1=["innerHTML"],J1={key:0,class:"fixed inset-0 bg-fondo/90 backdrop-blur z-50 flex items-center justify-center p-6 animate-fade-in"},Y1={class:"bg-superficie w-full max-w-md rounded-[32px] p-8 flex flex-col gap-4 shadow-2xl border border-fondo"},X1={class:"text-[20px] font-bold text-white mb-2"},Z1={key:0,class:"flex flex-col gap-4"},eS={key:1,class:"flex flex-col gap-4"},tS={class:"flex gap-4 mt-4"},nS=["disabled"],rS={__name:"Inicio",emits:["proyecto-seleccionado","sondeo-seleccionado"],setup(n,{emit:e}){const t=e,r=te([]),i=te([]),s=te(""),o=te(""),l=te("Selecciona un proyecto para empezar."),c=te(!1),u=te(""),d=te(!1),p=te({nombre:"",ubicacion:"",cliente:""}),m=te({nombre:"",profEstimada:null,equipo:""});let y=null,x=null;jn(()=>{const $=pr(ht(Se,"Proyectos"),mr("creadoEn","desc"));y=mn($,L=>{r.value=L.docs.map(k=>({id:k.id,...k.data()}))})});const R=()=>{if(o.value="",i.value=[],!s.value){l.value="Selecciona un proyecto para empezar.",x&&x(),t("proyecto-seleccionado","");return}l.value="Ahora selecciona o crea un sondeo.",t("proyecto-seleccionado",s.value),x&&x();const $=pr(ht(Se,`Proyectos/${s.value}/Sondeos`),mr("creadoEn","desc"));x=mn($,L=>{i.value=L.docs.map(k=>({id:k.id,...k.data()}))})},D=()=>{o.value?(l.value='<span class="text-acento font-bold">¡Listo!</span> Puedes cambiar a otra pestaña.',t("sondeo-seleccionado",o.value)):(l.value="Selecciona un sondeo.",t("sondeo-seleccionado",""))},G=$=>{u.value=$,c.value=!0,p.value={nombre:"",ubicacion:"",cliente:""},m.value={nombre:"",profEstimada:null,equipo:""}},q=()=>{c.value=!1},K=async()=>{d.value=!0;const $=Ir.currentUser?Ir.currentUser.email:"usuario@desconocido.com";try{if(u.value==="proyecto"){if(!p.value.nombre)throw new Error("El nombre del proyecto es obligatorio.");await oo(ht(Se,"Proyectos"),{nombre:p.value.nombre,ubicacion:p.value.ubicacion,cliente:p.value.cliente,creadoPor:$,creadoEn:zi()})}else if(u.value==="sondeo"){if(!s.value)throw new Error("No hay proyecto activo.");if(!m.value.nombre)throw new Error("El nombre del sondeo es obligatorio.");await oo(ht(Se,`Proyectos/${s.value}/Sondeos`),{nombre:m.value.nombre,profEstimada:m.value.profEstimada||0,equipo:m.value.equipo,creadoPor:$,creadoEn:zi()})}q()}catch(L){alert("Error: "+L.message)}finally{d.value=!1}};return Er(()=>{y&&y(),x&&x()}),($,L)=>(ee(),ne("div",j1,[_("div",q1,[L[12]||(L[12]=_("h2",{class:"text-[12px] text-acento font-bold uppercase tracking-widest mb-4"},"Seleccionar Proyecto",-1)),_("div",z1,[Te(_("select",{"onUpdate:modelValue":L[0]||(L[0]=k=>s.value=k),onChange:R,class:"text-[16px] font-medium py-3 w-full bg-transparent outline-none text-white appearance-none cursor-pointer"},[L[10]||(L[10]=_("option",{value:"",disabled:""},"-- Seleccionar Proyecto --",-1)),(ee(!0),ne(je,null,Ut(r.value,k=>(ee(),ne("option",{key:k.id,value:k.id,class:"text-black"},ue(k.nombre),9,G1))),128))],544),[[Gs,s.value]])]),_("button",{onClick:L[1]||(L[1]=k=>G("proyecto")),class:"mt-4 text-[13px] text-acento font-semibold flex items-center justify-end gap-1 w-full active:scale-95 transition-transform"},[...L[11]||(L[11]=[_("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round"},[_("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),_("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),js(" Crear Nuevo Proyecto ",-1)])])]),_("div",{class:ct(["bg-superficie rounded-[32px] p-6 shadow-lg transition-opacity duration-300",{"opacity-50 pointer-events-none":!s.value}])},[L[15]||(L[15]=_("h2",{class:"text-[12px] text-acento font-bold uppercase tracking-widest mb-4"},"Seleccionar Sondeo",-1)),_("div",K1,[Te(_("select",{"onUpdate:modelValue":L[2]||(L[2]=k=>o.value=k),onChange:D,disabled:!s.value,class:"text-[16px] font-medium py-3 w-full bg-transparent outline-none text-white appearance-none cursor-pointer"},[L[13]||(L[13]=_("option",{value:"",disabled:""},"-- Seleccionar Sondeo --",-1)),(ee(!0),ne(je,null,Ut(i.value,k=>(ee(),ne("option",{key:k.id,value:k.id,class:"text-black"},ue(k.nombre),9,W1))),128))],40,H1),[[Gs,o.value]])]),_("button",{onClick:L[3]||(L[3]=k=>G("sondeo")),class:"mt-4 text-[13px] text-acento font-semibold flex items-center justify-end gap-1 w-full active:scale-95 transition-transform"},[...L[14]||(L[14]=[_("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round"},[_("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),_("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),js(" Añadir Sondeo ",-1)])])],2),_("div",{id:"estado_trabajo",class:"text-center text-[14px] text-etiqueta font-medium px-4",innerHTML:l.value},null,8,Q1),c.value?(ee(),ne("div",J1,[_("div",Y1,[_("h2",X1,ue(u.value==="proyecto"?"Crear Proyecto":"Añadir Sondeo"),1),u.value==="proyecto"?(ee(),ne("div",Z1,[Te(_("input",{type:"text","onUpdate:modelValue":L[4]||(L[4]=k=>p.value.nombre=k),placeholder:"Nombre del Proyecto",class:"bg-fondo rounded-[20px] px-4 py-4 text-[15px] outline-none text-white"},null,512),[[Oe,p.value.nombre]]),Te(_("input",{type:"text","onUpdate:modelValue":L[5]||(L[5]=k=>p.value.ubicacion=k),placeholder:"Ubicación",class:"bg-fondo rounded-[20px] px-4 py-4 text-[15px] outline-none text-white"},null,512),[[Oe,p.value.ubicacion]]),Te(_("input",{type:"text","onUpdate:modelValue":L[6]||(L[6]=k=>p.value.cliente=k),placeholder:"Cliente",class:"bg-fondo rounded-[20px] px-4 py-4 text-[15px] outline-none text-white"},null,512),[[Oe,p.value.cliente]])])):Je("",!0),u.value==="sondeo"?(ee(),ne("div",eS,[Te(_("input",{type:"text","onUpdate:modelValue":L[7]||(L[7]=k=>m.value.nombre=k),placeholder:"Nombre (Ej: S-01)",class:"bg-fondo rounded-[20px] px-4 py-4 text-[15px] outline-none text-white"},null,512),[[Oe,m.value.nombre]]),Te(_("input",{type:"number","onUpdate:modelValue":L[8]||(L[8]=k=>m.value.profEstimada=k),placeholder:"Prof. Estimada (m)",class:"bg-fondo rounded-[20px] px-4 py-4 text-[15px] outline-none text-white"},null,512),[[Oe,m.value.profEstimada,void 0,{number:!0}]]),Te(_("input",{type:"text","onUpdate:modelValue":L[9]||(L[9]=k=>m.value.equipo=k),placeholder:"Equipo / Máquina",class:"bg-fondo rounded-[20px] px-4 py-4 text-[15px] outline-none text-white"},null,512),[[Oe,m.value.equipo]])])):Je("",!0),_("div",tS,[_("button",{onClick:q,class:"flex-1 bg-fondo text-etiqueta rounded-full min-h-[48px] font-semibold active:scale-95 transition-transform"},"Cancelar"),_("button",{onClick:K,disabled:d.value,class:"flex-1 bg-acento text-fondo rounded-full min-h-[48px] font-bold active:scale-95 transition-transform flex justify-center items-center"},ue(d.value?"Guardando...":"Guardar"),9,nS)])])])):Je("",!0)]))}},iS={class:"px-6 mt-6 flex flex-col gap-6 w-full max-w-4xl mx-auto"},sS={class:"bg-fondo border-2 border-superficie rounded-[32px] p-8 text-center shadow-lg"},oS={class:"text-[72px] font-black leading-none text-white"},aS={class:"bg-superficie rounded-[32px] p-6 shadow-lg flex flex-col gap-4"},lS={class:"bg-fondo rounded-[20px] p-3"},cS={class:"grid grid-cols-2 gap-3"},uS={class:"bg-fondo rounded-[20px] p-3"},hS={class:"bg-fondo rounded-[20px] p-3"},dS=["disabled"],fS={class:"bg-superficie rounded-[32px] p-6 shadow-lg mb-6"},pS={class:"flex justify-between items-center mb-4"},mS={class:"text-[11px] text-etiqueta"},gS={class:"flex flex-col gap-3"},_S={class:"flex items-center gap-3"},yS=["onClick"],vS={class:"text-[15px] text-white font-semibold"},bS={class:"text-[12px] text-acento font-bold uppercase tracking-widest"},IS={key:0,class:"text-[12px] text-etiqueta text-center py-4"},ES={__name:"TuberiaNQ",props:{idProyecto:String,idSondeo:String},setup(n){const e=n,t=te(null),r=te(null),i=te(null),s=te(0),o=te([]),l=te(0),c=te(!1);let u=null;const d=()=>{const y=parseFloat(t.value)||0,x=parseFloat(r.value)||0,R=parseFloat(i.value)||0;s.value=l.value+y-(x+R)},p=async()=>{if(!e.idSondeo)return alert("Selecciona un sondeo primero en la pestaña de Inicio.");const y=parseFloat(t.value);if(!y)return alert("Ingresa un valor válido para la tubería.");c.value=!0;try{await oo(ht(Se,`Proyectos/${e.idProyecto}/Sondeos/${e.idSondeo}/NQ`),{tuberia:y,profundidad:parseFloat(r.value)||0,altura:parseFloat(i.value)||0,creadoEn:zi()}),t.value=null}catch(x){alert("Error al guardar: "+x.message)}c.value=!1},m=async y=>{if(confirm("¿Eliminar este tubo de NQ? Los consecutivos y el sobrante se recalcularán automáticamente."))try{await so(Nt(Se,`Proyectos/${e.idProyecto}/Sondeos/${e.idSondeo}/NQ`,y))}catch(x){alert("Error al eliminar: "+x.message)}};return jn(()=>{if(!e.idSondeo)return;const y=pr(ht(Se,`Proyectos/${e.idProyecto}/Sondeos/${e.idSondeo}/NQ`),mr("creadoEn","desc"));u=mn(y,x=>{let R=0,D=[];x.forEach(G=>{const q=G.data();R+=parseFloat(q.tuberia)||0,D.push({id:G.id,...q})}),o.value=D,l.value=R,D.length>0?(r.value=D[0].profundidad,i.value=D[0].altura):(r.value=null,i.value=null),d()})}),Er(()=>{u&&u()}),(y,x)=>(ee(),ne("div",iS,[_("div",sS,[x[3]||(x[3]=_("div",{class:"text-[12px] uppercase text-acento font-bold tracking-widest mb-1"},"Sobrante Actual",-1)),_("div",oS,ue(s.value.toFixed(2)),1)]),_("div",aS,[x[7]||(x[7]=_("h2",{class:"text-[12px] text-acento font-bold uppercase tracking-widest"},"Registrar Tubería NQ",-1)),_("div",lS,[x[4]||(x[4]=_("label",{class:"block text-[11px] uppercase text-etiqueta text-center font-semibold mb-1"},"Tubería NQ (m)",-1)),Te(_("input",{type:"number","onUpdate:modelValue":x[0]||(x[0]=R=>t.value=R),onInput:d,class:"text-[28px] font-bold text-center w-full",placeholder:"0.00"},null,544),[[Oe,t.value,void 0,{number:!0}]])]),_("div",cS,[_("div",uS,[x[5]||(x[5]=_("label",{class:"block text-[11px] uppercase text-etiqueta text-center font-semibold mb-1"},"Profundidad (m)",-1)),Te(_("input",{type:"number","onUpdate:modelValue":x[1]||(x[1]=R=>r.value=R),onInput:d,class:"text-[20px] font-bold text-center w-full"},null,544),[[Oe,r.value,void 0,{number:!0}]])]),_("div",hS,[x[6]||(x[6]=_("label",{class:"block text-[11px] uppercase text-acento text-center font-semibold mb-1"},"Altura Suelo (m)",-1)),Te(_("input",{type:"number","onUpdate:modelValue":x[2]||(x[2]=R=>i.value=R),onInput:d,class:"text-[20px] font-bold text-center text-acento w-full"},null,544),[[Oe,i.value,void 0,{number:!0}]])])]),_("button",{onClick:p,disabled:c.value,class:"w-full bg-acento text-fondo rounded-full min-h-[56px] text-[16px] font-bold tracking-wide active:scale-95 transition-transform mt-2"},ue(c.value?"Guardando...":"Agregar Tubería"),9,dS)]),_("div",fS,[_("div",pS,[x[8]||(x[8]=_("div",{class:"text-[12px] uppercase text-acento font-bold tracking-widest"},"Historial de Tubería Instalada",-1)),_("span",mS,"Total tubos: "+ue(o.value.length),1)]),_("div",gS,[(ee(!0),ne(je,null,Ut(o.value,(R,D)=>(ee(),ne("div",{key:R.id,class:"bg-fondo rounded-[16px] p-4 flex justify-between items-center border border-superficie"},[_("div",_S,[_("button",{onClick:G=>m(R.id),class:"text-[11px] bg-[#EF4444]/10 text-[#EF4444] px-3 py-1.5 rounded-full font-bold active:scale-95 transition-transform"},"🗑 Borrar",8,yS),_("span",vS,ue(R.tuberia)+" m",1)]),_("span",bS,"# "+ue(o.value.length-D),1)]))),128)),o.value.length===0?(ee(),ne("div",IS," No hay registros de tubería NQ. ")):Je("",!0)])])]))}},wS={class:"px-6 mt-6 flex flex-col gap-6 w-full max-w-4xl mx-auto mb-6"},TS={class:"flex gap-4"},xS={class:"flex-1 bg-superficie rounded-[24px] p-4 shadow-lg"},AS={class:"flex-1 bg-superficie rounded-[24px] p-4 shadow-lg"},SS={class:"bg-superficie rounded-[24px] p-5 shadow-lg"},RS={class:"flex flex-wrap gap-2"},PS=["onClick"],CS={class:"flex items-center gap-4 mt-5"},VS={class:"flex-1"},DS={class:"flex-1"},kS={key:0,class:"bg-superficie rounded-[24px] p-5 shadow-lg animate-fade-in"},NS={class:"grid grid-cols-3 gap-3"},OS={class:"bg-superficie rounded-[24px] p-5 shadow-lg"},MS={class:"flex gap-2"},FS={class:"bg-superficie rounded-[24px] p-5 shadow-lg"},LS={class:"flex justify-between items-center mb-3"},US={key:0,class:"flex flex-col gap-3 mb-3 p-4 bg-fondo border border-purple-500/30 rounded-[16px] animate-fade-in"},BS={class:"flex gap-2"},$S={class:"flex-1 bg-superficie border border-dashed border-purple-500/50 rounded-xl p-3 flex flex-col items-center justify-center gap-1 cursor-pointer active:scale-95"},jS={class:"flex-1 bg-superficie border border-dashed border-purple-500/50 rounded-xl p-3 flex flex-col items-center justify-center gap-1 cursor-pointer active:scale-95"},qS={key:0,class:"flex flex-wrap gap-2 justify-center mt-1"},zS=["onClick"],GS=["src"],KS=["disabled"],HS=["disabled"],WS={__name:"RegistroCampo",props:{idProyecto:String,idSondeo:String},setup(n){const e=n,t=te(0),r=te(null),i=te("Standard"),s=te(1),o=te(null),l=te(null),c=te(null),u=te(null),d=te("NO"),p=te(""),m=te(!1),y=te(!1),x=te([]),R=te(!1),D=te("");let G=null;const q=()=>{if(!e.idProyecto||!e.idSondeo)return;G&&G();const b=pr(ht(Se,`Proyectos/${e.idProyecto}/Sondeos/${e.idSondeo}/Registros`),mr("profIni","desc"),_x(1));G=mn(b,v=>{if(v.empty)t.value=0,s.value=1;else{const E=v.docs[0].data();t.value=E.profFin||0,s.value=(E.muestraNum||0)+1}})};Ai(()=>e.idSondeo,q),jn(q),Er(()=>{G&&G()});const K=(b,v=800)=>new Promise(E=>{const S=new FileReader;S.readAsDataURL(b),S.onload=P=>{const w=new Image;w.src=P.target.result,w.onload=()=>{const Me=document.createElement("canvas"),et=v/w.width;Me.width=v,Me.height=w.height*et,Me.getContext("2d").drawImage(w,0,0,Me.width,Me.height),E(Me.toDataURL("image/jpeg",.8))}}}),$=async b=>{const v=b.target.files;if(v.length)for(let E=0;E<v.length;E++){const S=await K(v[E]);x.value.push({file:v[E],base64:S})}},L=async(b,v=3,E=2e3)=>{var w;const S="https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent",P="AQ.Ab8RN6Lucpvdx6dUEEiMzPaEubVu_xpwu00PM7tMn2VfivO7CA";for(let Me=0;Me<v;Me++)try{const et=await fetch(S,{method:"POST",headers:{"Content-Type":"application/json","X-goog-api-key":P},body:JSON.stringify(b)}),Le=await et.json();if(!et.ok)throw et.status===503?new Error("503"):new Error(((w=Le.error)==null?void 0:w.message)||`HTTP Error ${et.status}`);if(Le.candidates&&Le.candidates.length>0)return Le.candidates[0].content.parts[0].text;throw new Error("La IA no devolvió ningún texto.")}catch(et){if(Me===v-1)throw et;if(et.message.includes("503"))D.value=`Red ocupada, reintentando (${Me+1}/${v})...`,await new Promise(Le=>setTimeout(Le,E*(Me+1)));else throw et}},k=async()=>{if(x.value.length){R.value=!0,D.value="Analizando Litología...";try{const v=[{text:`Eres un ingeniero geotecnista. Describe la litología de la muestra de suelo en la foto usando estrictamente el Sistema Unificado de Clasificación de Suelos (SUCS). 
    Incluye: tipo de suelo, color, humedad relativa, plasticidad (si aplica), consistencia o compacidad, y tamaño de granos. 
    Genera un solo párrafo técnico y directo. Evita introducciones como "La imagen muestra".`}];x.value.forEach(P=>{const w=P.base64.split(",")[1];v.push({inlineData:{mimeType:"image/jpeg",data:w}})});const S=await L({contents:[{parts:v}]});p.value=S,x.value=[],y.value=!1}catch(b){alert("Error de IA: "+b.message)}finally{R.value=!1,D.value=""}}},T=async()=>{if(!e.idSondeo)return alert("Selecciona un sondeo primero.");if(r.value===null||r.value<=t.value)return alert("Profundidad final inválida.");m.value=!0;try{await oo(ht(Se,`Proyectos/${e.idProyecto}/Sondeos/${e.idSondeo}/Registros`),{profIni:t.value,profFin:r.value,tipoMuestra:i.value,muestraNum:s.value,spt1:l.value,spt2:c.value,spt3:u.value,nf:d.value,recuperacion:o.value||0,descripcion:p.value,creadoEn:zi()}),r.value=null,l.value=null,c.value=null,u.value=null,o.value=null,p.value=""}catch(b){alert("Error al guardar: "+b.message)}finally{m.value=!1}};return(b,v)=>(ee(),ne("div",wS,[_("div",TS,[_("div",xS,[v[11]||(v[11]=_("label",{class:"block text-[11px] uppercase text-etiqueta mb-2 text-center font-semibold"},"Prof. Inicial",-1)),Te(_("input",{type:"number","onUpdate:modelValue":v[0]||(v[0]=E=>t.value=E),class:"text-center text-[20px] font-bold w-full bg-transparent outline-none text-white"},null,512),[[Oe,t.value,void 0,{number:!0}]])]),_("div",AS,[v[12]||(v[12]=_("label",{class:"block text-[11px] uppercase text-etiqueta mb-2 text-center font-semibold"},"Prof. Final",-1)),Te(_("input",{type:"number","onUpdate:modelValue":v[1]||(v[1]=E=>r.value=E),class:"text-center text-[20px] font-bold w-full bg-transparent outline-none text-white"},null,512),[[Oe,r.value,void 0,{number:!0}]])])]),_("div",SS,[v[15]||(v[15]=_("label",{class:"block text-[11px] uppercase text-etiqueta mb-3 font-semibold"},"Tipo Muestreo",-1)),_("div",RS,[(ee(),ne(je,null,Ut(["Standard","Shelby","NQ","Manual"],E=>_("button",{key:E,onClick:S=>i.value=E,class:ct([i.value===E?"bg-acento text-fondo font-bold":"bg-fondo text-white border border-fondo font-medium","rounded-full py-2 px-4 text-[12px] transition-colors"])},ue(E),11,PS)),64))]),_("div",CS,[_("div",VS,[v[13]||(v[13]=_("label",{class:"block text-[11px] uppercase text-etiqueta mb-2 font-semibold"},"Muestra N°",-1)),Te(_("input",{type:"number","onUpdate:modelValue":v[2]||(v[2]=E=>s.value=E),class:"bg-fondo rounded-[16px] px-4 py-3 text-[16px] font-bold text-center w-full outline-none text-white"},null,512),[[Oe,s.value,void 0,{number:!0}]])]),_("div",DS,[v[14]||(v[14]=_("label",{class:"block text-[11px] uppercase text-etiqueta mb-2 font-semibold"},"Recuperación (cm)",-1)),Te(_("input",{type:"number","onUpdate:modelValue":v[3]||(v[3]=E=>o.value=E),class:"bg-fondo rounded-[16px] px-4 py-3 text-[16px] font-bold text-center w-full outline-none text-white"},null,512),[[Oe,o.value,void 0,{number:!0}]])])])]),["Standard","Shelby"].includes(i.value)?(ee(),ne("div",kS,[v[16]||(v[16]=_("label",{class:"block text-[11px] uppercase text-etiqueta mb-3 font-semibold text-center"},"Golpes SPT",-1)),_("div",NS,[Te(_("input",{type:"number","onUpdate:modelValue":v[4]||(v[4]=E=>l.value=E),class:"bg-fondo rounded-[16px] py-4 text-center text-[18px] font-bold w-full outline-none text-white",placeholder:"0-15"},null,512),[[Oe,l.value,void 0,{number:!0}]]),Te(_("input",{type:"number","onUpdate:modelValue":v[5]||(v[5]=E=>c.value=E),class:"bg-fondo rounded-[16px] py-4 text-center text-[18px] font-bold w-full outline-none text-white",placeholder:"15-30"},null,512),[[Oe,c.value,void 0,{number:!0}]]),Te(_("input",{type:"number","onUpdate:modelValue":v[6]||(v[6]=E=>u.value=E),class:"bg-fondo rounded-[16px] py-4 text-center text-[18px] font-bold w-full outline-none text-white",placeholder:"30-45"},null,512),[[Oe,u.value,void 0,{number:!0}]])])])):Je("",!0),_("div",OS,[v[17]||(v[17]=_("label",{class:"block text-[11px] uppercase text-etiqueta mb-3 font-semibold"},"Nivel Freático",-1)),_("div",MS,[_("button",{onClick:v[7]||(v[7]=E=>d.value="SI"),class:ct([d.value==="SI"?"bg-fondo border border-fondo text-white font-medium":"bg-acento text-fondo font-bold","flex-1 rounded-[16px] py-3 text-[14px] transition-colors"])},"SI",2),_("button",{onClick:v[8]||(v[8]=E=>d.value="NO"),class:ct([d.value==="NO"?"bg-fondo border border-fondo text-white font-medium":"bg-acento text-fondo font-bold","flex-1 rounded-[16px] py-3 text-[14px] transition-colors"])},"NO",2)])]),_("div",FS,[_("div",LS,[v[18]||(v[18]=_("label",{class:"block text-[11px] uppercase text-etiqueta font-semibold"},"Descripción Visual",-1)),_("button",{onClick:v[9]||(v[9]=E=>y.value=!y.value),class:"text-[10px] bg-gradient-to-r from-purple-500 to-[#38BDF8] text-white px-3 py-1.5 rounded-full font-bold shadow-md active:scale-95 transition-transform"}," ✨ Asistente IA ")]),y.value?(ee(),ne("div",US,[v[23]||(v[23]=_("div",{class:"text-[10px] text-purple-400 font-bold uppercase tracking-widest text-center"},"Analizar Litología",-1)),_("div",BS,[_("label",$S,[v[19]||(v[19]=_("span",{class:"text-[20px]"},"📷",-1)),v[20]||(v[20]=_("span",{class:"text-[10px] font-bold text-purple-400"},"Cámara",-1)),_("input",{type:"file",accept:"image/*",capture:"environment",class:"hidden",onChange:$},null,32)]),_("label",jS,[v[21]||(v[21]=_("span",{class:"text-[20px]"},"🖼️",-1)),v[22]||(v[22]=_("span",{class:"text-[10px] font-bold text-white"},"Galería",-1)),_("input",{type:"file",multiple:"",accept:"image/jpeg, image/png, image/jpg",class:"hidden",onChange:$},null,32)])]),x.value.length>0?(ee(),ne("div",qS,[(ee(!0),ne(je,null,Ut(x.value,(E,S)=>(ee(),ne("div",{key:S,class:"relative w-12 h-12"},[_("button",{onClick:P=>x.value.splice(S,1),class:"absolute -top-2 -right-2 bg-[#EF4444] text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold shadow-md z-10"},"✕",8,zS),_("img",{src:E.base64,class:"w-full h-full object-cover rounded-lg border border-purple-500"},null,8,GS)]))),128))])):Je("",!0),x.value.length>0?(ee(),ne("button",{key:1,onClick:k,disabled:R.value,class:"w-full bg-purple-600 text-white rounded-full py-2 text-[12px] font-bold active:scale-95 mt-1 disabled:opacity-50"},ue(R.value?D.value:"Analizar Muestra con IA"),9,KS)):Je("",!0)])):Je("",!0),Te(_("textarea",{"onUpdate:modelValue":v[10]||(v[10]=E=>p.value=E),class:"bg-fondo rounded-[16px] p-4 text-[14px] min-h-[100px] w-full outline-none text-white",placeholder:"Ej: Arcilla limosa, humedad baja..."},null,512),[[Oe,p.value]])]),_("button",{onClick:T,disabled:m.value,class:"w-full bg-acento text-fondo rounded-full min-h-[56px] text-[16px] font-bold tracking-wide active:scale-95 transition-transform mb-6"},ue(m.value?"Guardando...":"Guardar Muestra"),9,HS)]))}},QS={key:0,class:"fixed inset-0 bg-fondo/90 backdrop-blur z-50 flex items-center justify-center p-6"},JS={class:"bg-superficie w-full max-w-md rounded-[32px] p-6 flex flex-col gap-4 shadow-2xl overflow-y-auto max-h-full border border-[#10B981]/20"},YS={class:"grid grid-cols-2 gap-3"},XS={class:"bg-fondo rounded-[16px] p-3"},ZS={class:"bg-fondo rounded-[16px] p-3"},eR={class:"grid grid-cols-3 gap-3"},tR={class:"bg-fondo rounded-[16px] p-3"},nR={class:"bg-fondo rounded-[16px] p-3"},rR={class:"bg-fondo rounded-[16px] p-3"},iR={class:"bg-fondo rounded-[16px] p-3"},sR={class:"bg-fondo rounded-[16px] p-3"},oR={class:"flex gap-3 mt-2"},aR=["disabled"],lR={__name:"ModalEdicion",props:{visible:Boolean,registroData:Object,idProyecto:String,idSondeo:String},emits:["close"],setup(n,{emit:e}){const t=n,r=e,i=te({id:"",profIni:null,profFin:null,spt1:null,spt2:null,spt3:null,recuperacion:null,descripcion:""}),s=te(!1);Ai(()=>t.registroData,u=>{u&&(i.value={...u})},{deep:!0,immediate:!0});const o=()=>{r("close")},l=async()=>{if(!(!t.idProyecto||!t.idSondeo||!i.value.id)){s.value=!0;try{const u=Nt(Se,`Proyectos/${t.idProyecto}/Sondeos/${t.idSondeo}/Registros`,i.value.id);await Ms(u,{profIni:parseFloat(i.value.profIni)||0,profFin:parseFloat(i.value.profFin)||0,spt1:i.value.spt1,spt2:i.value.spt2,spt3:i.value.spt3,recuperacion:parseFloat(i.value.recuperacion)||0,descripcion:i.value.descripcion}),o()}catch(u){alert("Error al actualizar: "+u.message)}finally{s.value=!1}}},c=async()=>{if(!(!t.idProyecto||!t.idSondeo||!i.value.id)&&confirm("¿Borrar permanentemente este registro?")){s.value=!0;try{const u=Nt(Se,`Proyectos/${t.idProyecto}/Sondeos/${t.idSondeo}/Registros`,i.value.id);await so(u),o()}catch(u){alert("Error al eliminar: "+u.message)}finally{s.value=!1}}};return(u,d)=>n.visible?(ee(),ne("div",QS,[_("div",JS,[_("div",{class:"flex justify-between items-center mb-2"},[d[7]||(d[7]=_("h2",{class:"text-[18px] font-bold text-white"},"Editar Muestra",-1)),_("button",{onClick:c,class:"text-[12px] bg-[#EF4444]/10 text-[#EF4444] px-3 py-1.5 rounded-full font-bold active:scale-95 transition-transform"},"🗑 Borrar")]),_("div",YS,[_("div",XS,[d[8]||(d[8]=_("label",{class:"block text-[10px] uppercase text-etiqueta mb-1 font-semibold"},"Prof Inicial",-1)),Te(_("input",{type:"number","onUpdate:modelValue":d[0]||(d[0]=p=>i.value.profIni=p),class:"font-bold w-full outline-none"},null,512),[[Oe,i.value.profIni,void 0,{number:!0}]])]),_("div",ZS,[d[9]||(d[9]=_("label",{class:"block text-[10px] uppercase text-etiqueta mb-1 font-semibold"},"Prof Final",-1)),Te(_("input",{type:"number","onUpdate:modelValue":d[1]||(d[1]=p=>i.value.profFin=p),class:"font-bold w-full outline-none"},null,512),[[Oe,i.value.profFin,void 0,{number:!0}]])])]),_("div",eR,[_("div",tR,[d[10]||(d[10]=_("label",{class:"block text-[10px] uppercase text-etiqueta mb-1 text-center font-semibold"},"SPT 1",-1)),Te(_("input",{type:"number","onUpdate:modelValue":d[2]||(d[2]=p=>i.value.spt1=p),class:"text-center font-bold w-full outline-none"},null,512),[[Oe,i.value.spt1,void 0,{number:!0}]])]),_("div",nR,[d[11]||(d[11]=_("label",{class:"block text-[10px] uppercase text-etiqueta mb-1 text-center font-semibold"},"SPT 2",-1)),Te(_("input",{type:"number","onUpdate:modelValue":d[3]||(d[3]=p=>i.value.spt2=p),class:"text-center font-bold w-full outline-none"},null,512),[[Oe,i.value.spt2,void 0,{number:!0}]])]),_("div",rR,[d[12]||(d[12]=_("label",{class:"block text-[10px] uppercase text-etiqueta mb-1 text-center font-semibold"},"SPT 3",-1)),Te(_("input",{type:"number","onUpdate:modelValue":d[4]||(d[4]=p=>i.value.spt3=p),class:"text-center font-bold w-full outline-none"},null,512),[[Oe,i.value.spt3,void 0,{number:!0}]])])]),_("div",iR,[d[13]||(d[13]=_("label",{class:"block text-[10px] uppercase text-etiqueta mb-1 font-semibold"},"Recup (cm)",-1)),Te(_("input",{type:"number","onUpdate:modelValue":d[5]||(d[5]=p=>i.value.recuperacion=p),class:"font-bold w-full outline-none"},null,512),[[Oe,i.value.recuperacion,void 0,{number:!0}]])]),_("div",sR,[d[14]||(d[14]=_("label",{class:"block text-[10px] uppercase text-etiqueta mb-1 font-semibold"},"Descripción",-1)),Te(_("textarea",{"onUpdate:modelValue":d[6]||(d[6]=p=>i.value.descripcion=p),class:"font-bold min-h-[80px] w-full outline-none resize-none"},null,512),[[Oe,i.value.descripcion]])]),_("div",oR,[_("button",{onClick:o,class:"flex-1 bg-fondo text-etiqueta rounded-full min-h-[44px] font-semibold active:scale-95 transition-transform"},"Cancelar"),_("button",{onClick:l,disabled:s.value,class:"flex-1 bg-acento text-fondo rounded-full min-h-[44px] font-bold active:scale-95 transition-transform flex justify-center items-center"},ue(s.value?"Guardando...":"Actualizar"),9,aR)])])])):Je("",!0)}},cR={class:"px-6 mt-6 flex flex-col gap-4 w-full max-w-4xl mx-auto mb-6"},uR=["disabled"],hR={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round"},dR={class:"bg-superficie rounded-[24px] overflow-hidden w-full overflow-x-auto shadow-lg"},fR={class:"w-full text-center text-[12px]"},pR={class:"divide-y divide-fondo text-white"},mR=["onClick"],gR={class:"p-3 border-r border-fondo font-medium text-acento"},_R={class:"p-3 border-r border-fondo"},yR={class:"p-3 border-r border-fondo"},vR={class:"p-3"},bR={key:0},IR={__name:"ResumenPDF",props:{idProyecto:String,idSondeo:String},setup(n){const e=n,t=te([]),r=te(!1),i=te({pryNombre:"",sndNombre:"",sndProf:""});let s=null;const o=te(!1),l=te(null),c=d=>{l.value={...d},o.value=!0};jn(async()=>{if(!e.idProyecto||!e.idSondeo)return;try{const p=await Zc(Nt(Se,"Proyectos",e.idProyecto));p.exists()&&(i.value.pryNombre=p.data().nombre);const m=await Zc(Nt(Se,`Proyectos/${e.idProyecto}/Sondeos`,e.idSondeo));m.exists()&&(i.value.sndNombre=m.data().nombre,i.value.sndProf=m.data().profEstimada)}catch(p){console.error("Error leyendo metadatos:",p)}const d=pr(ht(Se,`Proyectos/${e.idProyecto}/Sondeos/${e.idSondeo}/Registros`),mr("profIni","asc"));s=mn(d,p=>{const m=[];p.forEach(y=>m.push({id:y.id,...y.data()})),t.value=m})}),Er(()=>{s&&s()});const u=()=>{if(t.value.length===0)return alert("No hay datos para exportar.");r.value=!0,document.getElementById("pdf_pry_nom").innerText=i.value.pryNombre||"-",document.getElementById("pdf_snd_nom").innerText=i.value.sndNombre||"-",document.getElementById("pdf_snd_prof").innerText=(i.value.sndProf||"-")+" m";const d=new Date;document.getElementById("pdf_fecha").innerText=`${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;let p="";t.value.forEach(x=>{p+=`<tr>
            <td>${x.profIni} - ${x.profFin}</td>
            <td>${x.tipoMuestra||""}</td>
            <td>${x.muestraNum||""}</td>
            <td>${x.spt1||""}</td>
            <td>${x.spt2||""}</td>
            <td>${x.spt3||""}</td>
            <td>${x.nf||""}</td>
            <td>${x.recuperacion||""}</td>
            <td style="text-align:left;">${x.descripcion||""}</td>
          </tr>`}),document.getElementById("pdf_body_table").innerHTML=p;const m=document.getElementById("pdf_template");m.style.display="block";const y={margin:.5,filename:`Sondeo_${i.value.sndNombre||"Desconocido"}.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"in",format:"letter",orientation:"landscape"},pagebreak:{mode:"css",avoid:"tr"}};window.html2pdf().set(y).from(m).save().then(()=>{m.style.display="none",r.value=!1}).catch(x=>{alert("Error al generar PDF: "+x.message),m.style.display="none",r.value=!1})};return(d,p)=>(ee(),ne("div",cR,[_("button",{onClick:u,disabled:r.value,class:"w-full border-2 border-acento text-acento rounded-full min-h-[56px] text-[15px] font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform bg-acento/10"},[r.value?Je("",!0):(ee(),ne("svg",hR,[...p[1]||(p[1]=[_("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},null,-1),_("polyline",{points:"7 10 12 15 17 10"},null,-1),_("line",{x1:"12",y1:"15",x2:"12",y2:"3"},null,-1)])])),js(" "+ue(r.value?"Generando PDF...":"Generar Reporte PDF del Sondeo"),1)],8,uR),_("div",dR,[_("table",fR,[p[3]||(p[3]=_("thead",{class:"bg-fondo text-etiqueta text-[10px] uppercase tracking-wider"},[_("tr",null,[_("th",{class:"p-3"},"Prof (m)"),_("th",{class:"p-3"},"N°"),_("th",{class:"p-3"},"Tipo"),_("th",{class:"p-3"},"Recup")])],-1)),_("tbody",pR,[(ee(!0),ne(je,null,Ut(t.value,m=>(ee(),ne("tr",{key:m.id,onClick:y=>c(m),class:"active:bg-superficie/80 transition-colors cursor-pointer"},[_("td",gR,ue(m.profIni)+" - "+ue(m.profFin),1),_("td",_R,ue(m.muestraNum||"-"),1),_("td",yR,ue(m.tipoMuestra||"-"),1),_("td",vR,ue(m.recuperacion||"-"),1)],8,mR))),128)),t.value.length===0?(ee(),ne("tr",bR,[...p[2]||(p[2]=[_("td",{colspan:"4",class:"p-4 text-etiqueta text-center"},"No hay datos en este sondeo.",-1)])])):Je("",!0)])])]),p[4]||(p[4]=_("p",{class:"text-center text-[10px] text-etiqueta mt-1"},"Toca cualquier registro en la tabla para editarlo. (Modal de edición próximamente)",-1)),Bt(lR,{visible:o.value,registroData:l.value,idProyecto:n.idProyecto,idSondeo:n.idSondeo,onClose:p[0]||(p[0]=m=>o.value=!1)},null,8,["visible","registroData","idProyecto","idSondeo"])]))}},ER={class:"px-6 mt-6 flex flex-col gap-6 w-full max-w-4xl mx-auto mb-6"},wR={class:"bg-superficie rounded-[32px] p-6 shadow-lg"},TR={class:"bg-fondo rounded-[20px] px-4 py-1 border border-transparent focus-within:border-acento/50"},xR=["value"],AR={key:0,class:"text-center text-acento font-bold animate-pulse"},SR={key:1,id:"cuadro_reporte",class:"bg-white text-black rounded-[32px] p-6 shadow-lg"},RR={class:"text-[18px] font-bold text-center uppercase mb-4 border-b-2 border-gray-200 pb-2"},PR={class:"grid grid-cols-2 gap-4 mb-6"},CR={class:"bg-gray-100 p-4 rounded-[16px] text-center border border-gray-200"},VR={class:"text-[24px] font-black text-[#10B981]"},DR={class:"bg-gray-100 p-4 rounded-[16px] text-center border border-gray-200"},kR={class:"text-[24px] font-black text-[#38BDF8]"},NR={class:"overflow-x-auto"},OR={class:"w-full text-center text-[12px] border-collapse"},MR={class:"p-2 border border-gray-300 font-bold text-left pl-2"},FR={class:"p-2 border border-gray-300"},LR={class:"p-2 border border-gray-300"},UR={class:"p-2 border border-gray-300 font-bold bg-gray-50 text-[#047857]"},BR={class:"p-2 border border-gray-300 font-bold"},$R={class:"bg-[#0F172A] text-white font-bold text-[12px]"},jR={class:"p-2 border border-[#0F172A] text-[#10B981]"},qR={class:"p-2 border border-[#0F172A] text-[#38BDF8]"},zR={class:"p-2 border border-[#0F172A] text-white"},GR={key:2,class:"flex flex-col gap-3"},KR={__name:"Reportes",setup(n){const e=te([]),t=te(""),r=te(""),i=te(!1),s=te(!1),o=te({spt:0,nq:0}),l=te([]);jn(async()=>{const p=await fc(ht(Se,"Proyectos"));e.value=p.docs.map(m=>({id:m.id,nombre:m.data().nombre}))});const c=async()=>{if(t.value){i.value=!0,s.value=!1,o.value={spt:0,nq:0},l.value=[];try{const p=e.value.find(y=>y.id===t.value);r.value=p?p.nombre:"Desconocido";const m=await fc(ht(Se,`Proyectos/${t.value}/Sondeos`));for(const y of m.docs){const x=y.id,R=y.data().nombre;let D=0,G=0,q=0;const K=await fc(ht(Se,`Proyectos/${t.value}/Sondeos/${x}/Registros`));let $=[];K.forEach(k=>$.push(k.data())),$.sort((k,T)=>(parseFloat(k.profFin)||0)-(parseFloat(T.profFin)||0)),$.forEach(k=>{const T=parseFloat(k.profFin)||0,b=T-q;b>0&&((k.tipoMuestra?k.tipoMuestra.toLowerCase():"standard").includes("nq")?G+=b:D+=b,q=T)});const L=D+G;l.value.push({nombre:R,spt:D,nq:G,total:L,profFinal:q}),o.value.spt+=D,o.value.nq+=G}s.value=!0}catch(p){alert("Error al calcular: "+p.message)}finally{i.value=!1}}},u=()=>{const p=o.value.spt+o.value.nq;let m=`📊 *Reporte de Avance*
🏗️ *Proyecto:* ${r.value}

`;m+=`*TOTAL PERFORADO: ${p.toFixed(2)} m*
`,m+=`(SPT/Manual/Shelby: ${o.value.spt.toFixed(2)}m | NQ: ${o.value.nq.toFixed(2)}m)

`,m+=`*Desglose por Sondeo:*
`,l.value.forEach(y=>{m+=`• *${y.nombre}*: ${y.total.toFixed(2)}m (Prof. Alcanzada: ${y.profFinal.toFixed(2)}m)
`}),navigator.clipboard.writeText(m).then(()=>{alert("¡Reporte copiado al portapapeles! Abre WhatsApp y dale Pegar.")})},d=()=>{const p=document.getElementById("cuadro_reporte"),m={margin:.3,filename:`Avance_${r.value.replace(/ /g,"_")}.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"in",format:"letter",orientation:"portrait"},pagebreak:{mode:"css",avoid:"tr"}};window.html2pdf().set(m).from(p).save()};return(p,m)=>(ee(),ne("div",ER,[_("div",wR,[m[2]||(m[2]=_("h2",{class:"text-[12px] text-acento font-bold uppercase tracking-widest mb-4"},"Generar Reporte de Avance",-1)),_("div",TR,[Te(_("select",{"onUpdate:modelValue":m[0]||(m[0]=y=>t.value=y),onChange:c,class:"text-[16px] font-medium py-3 w-full bg-transparent outline-none text-white appearance-none cursor-pointer"},[m[1]||(m[1]=_("option",{value:"",disabled:""},"-- Seleccionar Proyecto --",-1)),(ee(!0),ne(je,null,Ut(e.value,y=>(ee(),ne("option",{key:y.id,value:y.id,class:"text-black"},ue(y.nombre),9,xR))),128))],544),[[Gs,t.value]])])]),i.value?(ee(),ne("div",AR," Calculando avance real de perforación... ")):Je("",!0),s.value&&!i.value?(ee(),ne("div",SR,[_("h2",RR,"Reporte de Avance: "+ue(r.value),1),_("div",PR,[_("div",CR,[m[3]||(m[3]=_("div",{class:"text-[10px] uppercase font-bold text-gray-500"},"Total SPT (Incl. Manual/Shelby)",-1)),_("div",VR,ue(o.value.spt.toFixed(2))+" m",1)]),_("div",DR,[m[4]||(m[4]=_("div",{class:"text-[10px] uppercase font-bold text-gray-500"},"Total Corazonamiento NQ",-1)),_("div",kR,ue(o.value.nq.toFixed(2))+" m",1)])]),_("div",NR,[_("table",OR,[m[7]||(m[7]=_("thead",null,[_("tr",{class:"bg-gray-200 text-gray-700 uppercase tracking-wider text-[10px]"},[_("th",{class:"p-2 border border-gray-300"},"Sondeo"),_("th",{class:"p-2 border border-gray-300"},"SPT (m)"),_("th",{class:"p-2 border border-gray-300"},"NQ (m)"),_("th",{class:"p-2 border border-gray-300 font-bold bg-[#10B981]/20 text-[#047857]"},"TOTAL (m)"),_("th",{class:"p-2 border border-gray-300 bg-gray-300"},"Prof. Final")])],-1)),_("tbody",null,[(ee(!0),ne(je,null,Ut(l.value,y=>(ee(),ne("tr",{key:y.nombre},[_("td",MR,ue(y.nombre),1),_("td",FR,ue(y.spt.toFixed(2)),1),_("td",LR,ue(y.nq.toFixed(2)),1),_("td",UR,ue(y.total.toFixed(2)),1),_("td",BR,ue(y.profFinal.toFixed(2))+" m",1)]))),128)),_("tr",$R,[m[5]||(m[5]=_("td",{class:"p-2 border border-[#0F172A] text-right pr-2"},"TOTAL GRAL:",-1)),_("td",jR,ue(o.value.spt.toFixed(2)),1),_("td",qR,ue(o.value.nq.toFixed(2)),1),_("td",zR,ue((o.value.spt+o.value.nq).toFixed(2))+" m",1),m[6]||(m[6]=_("td",{class:"p-2 border border-[#0F172A] text-gray-400"},"-",-1))])])])])])):Je("",!0),s.value&&!i.value?(ee(),ne("div",GR,[_("button",{onClick:u,class:"w-full bg-[#25D366] text-white rounded-full min-h-[50px] font-bold shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"}," 📋 Copiar Resumen para WhatsApp "),_("button",{onClick:d,class:"w-full bg-acento text-fondo rounded-full min-h-[50px] font-bold shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"}," 📄 Exportar PDF ")])):Je("",!0)]))}},HR={class:"px-6 mt-6 flex flex-col gap-6 w-full max-w-4xl mx-auto mb-6"},WR={class:"bg-superficie rounded-[32px] p-6 shadow-lg"},QR={class:"flex flex-col gap-3"},JR={class:"flex flex-col"},YR={class:"text-[14px] font-bold text-white"},XR=["onClick"],ZR={key:0,class:"text-center text-[12px] text-etiqueta py-2"},eP={class:"bg-superficie rounded-[32px] p-6 shadow-lg"},tP={class:"bg-fondo rounded-[20px] px-4 py-1 border border-transparent focus-within:border-[#F59E0B]/50 mb-4 transition-colors"},nP=["value"],rP={key:0,class:"flex flex-col gap-4 animate-fade-in"},iP={class:"bg-fondo rounded-[16px] p-4 border border-[#F59E0B]/30"},sP={class:"flex justify-between items-center mb-4 pb-3 border-b border-superficie"},oP={class:"font-bold text-[#F59E0B] text-[16px] uppercase"},aP={class:"flex flex-col gap-2 pl-2 border-l-2 border-[#F59E0B]/20"},lP={class:"text-[14px] text-white font-medium"},cP={class:"flex gap-2"},uP=["onClick"],hP=["onClick"],dP={key:0,class:"text-[11px] text-etiqueta py-2"},fP={__name:"Admin",setup(n){const e=te([]),t=te([]),r=te(null),i=te([]);let s=null,o=null,l=null;jn(()=>{const y=pr(ht(Se,"Usuarios"),mr("creadoEn","desc"));s=mn(y,R=>{e.value=R.docs.map(D=>({id:D.id,...D.data()})).filter(D=>D.rol!=="admin")});const x=pr(ht(Se,"Proyectos"),mr("creadoEn","desc"));o=mn(x,R=>{if(t.value=R.docs.map(D=>({id:D.id,...D.data()})),r.value){const D=t.value.find(G=>G.id===r.value.id);r.value=D||null}})}),Ai(r,y=>{if(l&&(l(),l=null),y){const x=pr(ht(Se,`Proyectos/${y.id}/Sondeos`),mr("creadoEn","desc"));l=mn(x,R=>{i.value=R.docs.map(D=>({id:D.id,...D.data()}))})}else i.value=[]}),Er(()=>{s&&s(),o&&o(),l&&l()});const c=async y=>{const x=y.estado==="activo"?"pendiente":"activo";try{await Ms(Nt(Se,"Usuarios",y.id),{estado:x})}catch(R){alert("Error al cambiar estado: "+R.message)}},u=async()=>{const y=prompt("Ingresa el nuevo nombre del proyecto:",r.value.nombre);if(!(!y||y===r.value.nombre))try{await Ms(Nt(Se,"Proyectos",r.value.id),{nombre:y})}catch(x){alert("Error al editar: "+x.message)}},d=async()=>{if(confirm(`¿Estás seguro de ELIMINAR el proyecto "${r.value.nombre}" y todos sus sondeos? Esta acción es irreversible.`))try{await so(Nt(Se,"Proyectos",r.value.id)),r.value=null}catch(y){alert("Error al eliminar: "+y.message)}},p=async y=>{const x=prompt("Ingresa el nuevo nombre del sondeo (Ej: S-02):",y.nombre);if(!(!x||x===y.nombre))try{await Ms(Nt(Se,`Proyectos/${r.value.id}/Sondeos`,y.id),{nombre:x})}catch(R){alert("Error al editar: "+R.message)}},m=async y=>{if(confirm(`¿Eliminar permanentemente el sondeo "${y.nombre}"?`))try{await so(Nt(Se,`Proyectos/${r.value.id}/Sondeos`,y.id))}catch(x){alert("Error al eliminar: "+x.message)}};return(y,x)=>(ee(),ne("div",HR,[_("div",WR,[x[1]||(x[1]=_("h2",{class:"text-[12px] text-[#F59E0B] font-bold uppercase tracking-widest mb-4"},"Gestión de Operadores",-1)),_("div",QR,[(ee(!0),ne(je,null,Ut(e.value,R=>(ee(),ne("div",{key:R.id,class:"bg-fondo rounded-[16px] p-4 flex justify-between items-center border border-superficie"},[_("div",JR,[_("span",YR,ue(R.email),1),_("span",{class:ct([R.estado==="activo"?"text-[#10B981] bg-[#10B981]/10":"text-[#F59E0B] bg-[#F59E0B]/10","text-[10px] uppercase font-bold px-2 py-0.5 rounded w-max mt-1"])},ue(R.estado),3)]),_("button",{onClick:D=>c(R),class:ct([R.estado==="activo"?"text-[#EF4444] border-[#EF4444]/30":"text-[#10B981] border-[#10B981]/30","text-[11px] font-bold border px-3 py-1.5 rounded-full transition-transform active:scale-95"])},ue(R.estado==="activo"?"Bloquear":"Aprobar"),11,XR)]))),128)),e.value.length===0?(ee(),ne("div",ZR," No hay operadores registrados. ")):Je("",!0)])]),_("div",eP,[x[4]||(x[4]=_("h2",{class:"text-[12px] text-[#F59E0B] font-bold uppercase tracking-widest mb-4"},"Estructura de Datos",-1)),_("div",tP,[Te(_("select",{"onUpdate:modelValue":x[0]||(x[0]=R=>r.value=R),class:"text-[16px] font-medium py-3 w-full bg-transparent outline-none text-white appearance-none cursor-pointer"},[x[2]||(x[2]=_("option",{value:null,disabled:""},"-- Seleccionar Proyecto a Editar --",-1)),(ee(!0),ne(je,null,Ut(t.value,R=>(ee(),ne("option",{key:R.id,value:R,class:"text-black"},ue(R.nombre),9,nP))),128))],512),[[Gs,r.value]])]),r.value?(ee(),ne("div",rP,[_("div",iP,[_("div",sP,[_("div",oP,ue(r.value.nombre),1),_("div",{class:"flex gap-2"},[_("button",{onClick:u,class:"text-[11px] bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30 px-3 py-1.5 rounded-full font-bold active:scale-95 transition-transform"},"✏️ Renombrar"),_("button",{onClick:d,class:"text-[11px] bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/30 px-3 py-1.5 rounded-full font-bold active:scale-95 transition-transform"},"🗑 Borrar Proyecto")])]),x[3]||(x[3]=_("h3",{class:"text-[11px] text-etiqueta uppercase tracking-widest mb-3"},"Sondeos Asociados:",-1)),_("div",aP,[(ee(!0),ne(je,null,Ut(i.value,R=>(ee(),ne("div",{key:R.id,class:"flex justify-between items-center bg-superficie px-3 py-3 rounded-[12px]"},[_("span",lP,ue(R.nombre),1),_("div",cP,[_("button",{onClick:D=>p(R),class:"text-[11px] text-[#F59E0B] font-bold active:scale-95 transition-transform"},"✏️ Editar",8,uP),_("button",{onClick:D=>m(R),class:"text-[11px] text-[#EF4444] font-bold active:scale-95 transition-transform"},"🗑 Borrar",8,hP)])]))),128)),i.value.length===0?(ee(),ne("div",dP," No hay sondeos en este proyecto. ")):Je("",!0)])])])):Je("",!0)])]))}},pP={class:"px-6 mt-6 flex flex-col gap-6 w-full max-w-4xl mx-auto mb-6"},mP={class:"bg-superficie rounded-[32px] p-6 shadow-lg flex flex-col gap-4"},gP={class:"flex gap-2"},_P={class:"bg-fondo rounded-[20px] px-4 py-1 flex-1 border border-superficie focus-within:border-[#38BDF8]/50 transition-colors"},yP=["value"],vP=["disabled"],bP=["disabled"],IP={class:"flex gap-3"},EP=["disabled"],wP={class:"mt-2"},TP={class:"flex gap-3"},xP={class:"flex-1 bg-fondo border-2 border-dashed border-[#38BDF8]/50 rounded-[24px] p-6 flex flex-col items-center justify-center gap-2 cursor-pointer active:scale-95 transition-transform shadow-sm"},AP={class:"flex-1 bg-fondo border-2 border-dashed border-etiqueta/50 rounded-[24px] p-6 flex flex-col items-center justify-center gap-2 cursor-pointer active:scale-95 transition-transform shadow-sm"},SP={key:0,class:"flex flex-col gap-3 bg-fondo border-2 border-solid border-[#38BDF8] rounded-[24px] p-4 relative mt-4 animate-fade-in"},RP={class:"flex justify-between items-center w-full border-b border-[#38BDF8]/30 pb-2"},PP={class:"text-[13px] text-[#38BDF8] font-bold"},CP={class:"flex flex-wrap gap-2 justify-center w-full max-h-48 overflow-y-auto"},VP=["src"],DP=["disabled"],kP={key:0,class:"fixed inset-0 bg-fondo/90 backdrop-blur z-50 flex items-center justify-center p-6 animate-fade-in"},NP={class:"bg-superficie w-full max-w-md rounded-[32px] p-8 flex flex-col gap-4 shadow-2xl"},OP={class:"text-[20px] font-bold text-white mb-2"},MP={class:"flex flex-col gap-4"},FP={class:"flex gap-4 mt-4"},LP=["disabled"],UP={__name:"Fotos",props:{idProyecto:String,idSondeo:String},setup(n){const e=n,t=te([]),r=te("");let i=null;const s=te(!1),o=te("crear"),l=te(!1),c=te({id:"",nombre:"",urlScript:"",idCarpetaRaiz:""}),u=te([]),d=te([]),p=te(!1),m=te("");jn(()=>{i=mn(ht(Se,"ConfiguracionesDrive"),L=>{t.value=L.docs.map(k=>({id:k.id,...k.data()}))})}),Er(()=>{i&&i()});const y=L=>{if(o.value=L,L==="crear")c.value={id:"",nombre:"",urlScript:"",idCarpetaRaiz:""};else{const k=t.value.find(T=>T.id===r.value);k&&(c.value={...k})}s.value=!0},x=()=>s.value=!1,R=async()=>{if(!c.value.nombre||!c.value.urlScript||!c.value.idCarpetaRaiz)return alert("Llena todos los campos.");l.value=!0;try{const L=Ir.currentUser?Ir.currentUser.email:"usuario@local";o.value==="crear"?await oo(ht(Se,"ConfiguracionesDrive"),{nombre:c.value.nombre,urlScript:c.value.urlScript,idCarpetaRaiz:c.value.idCarpetaRaiz,creadoPor:L,creadoEn:zi()}):await Ms(Nt(Se,"ConfiguracionesDrive",c.value.id),{nombre:c.value.nombre,urlScript:c.value.urlScript,idCarpetaRaiz:c.value.idCarpetaRaiz}),x()}catch(L){alert("Error al guardar configuración: "+L.message)}finally{l.value=!1}},D=async()=>{if(r.value&&confirm("¿Seguro que deseas eliminar esta conexión a Drive de la base de datos?"))try{await so(Nt(Se,"ConfiguracionesDrive",r.value)),r.value=""}catch(L){alert("Error al borrar: "+L.message)}},G=()=>{alert("La sincronización de estructura se ha activado para la nube seleccionada.")},q=L=>{const k=L.target.files;if(!(!k||k.length===0))for(let T=0;T<k.length;T++)u.value.push(k[T]),d.value.push({url:URL.createObjectURL(k[T])})},K=()=>{u.value=[],d.value=[]},$=async()=>{if(!r.value)return alert("Selecciona una Nube/Drive de la lista primero.");if(u.value.length===0)return;const L=t.value.find(k=>k.id===r.value);p.value=!0;try{for(let k=0;k<u.value.length;k++){m.value=`Subiendo ${k+1} de ${u.value.length}...`;const T=u.value[k],b=new FileReader;await new Promise((v,E)=>{b.onload=async()=>{const P={base64:b.result.split(",")[1],filename:`S${e.idSondeo||"00"}M${k+1}_(${k+1}).jpg`,folderId:L.idCarpetaRaiz,mimeType:T.type};try{await fetch(L.urlScript,{method:"POST",body:JSON.stringify(P),headers:{"Content-Type":"text/plain;charset=utf-8"}}),v()}catch(w){E(w)}},b.readAsDataURL(T)})}alert("¡Fotos subidas exitosamente!"),K()}catch(k){alert("Error al subir: "+k.message)}finally{p.value=!1,m.value=""}};return(L,k)=>(ee(),ne("div",pP,[_("div",mP,[k[7]||(k[7]=_("div",{class:"flex justify-between items-center mb-1"},[_("h2",{class:"text-[12px] text-[#38BDF8] font-bold uppercase tracking-widest"},"Nube del Proyecto")],-1)),_("div",gP,[_("div",_P,[Te(_("select",{"onUpdate:modelValue":k[0]||(k[0]=T=>r.value=T),class:"text-[14px] font-medium py-3 w-full bg-transparent outline-none text-white appearance-none cursor-pointer"},[k[6]||(k[6]=_("option",{value:"",disabled:""},"-- Seleccionar Nube / Drive --",-1)),(ee(!0),ne(je,null,Ut(t.value,T=>(ee(),ne("option",{key:T.id,value:T.id,class:"text-black"},ue(T.nombre)+" (por "+ue(T.creadoPor.split("@")[0])+") ",9,yP))),128))],512),[[Gs,r.value]])]),_("button",{onClick:k[1]||(k[1]=T=>y("editar")),disabled:!r.value,class:"bg-fondo border border-superficie rounded-[20px] w-12 flex items-center justify-center text-[16px] active:scale-95 transition-transform disabled:opacity-50",title:"Editar enlace"},"✏️",8,vP),_("button",{onClick:D,disabled:!r.value,class:"bg-fondo border border-[#EF4444]/30 rounded-[20px] w-12 flex items-center justify-center text-[16px] active:scale-95 transition-transform text-[#EF4444] disabled:opacity-50",title:"Borrar enlace"},"🗑",8,bP)]),_("div",IP,[_("button",{onClick:k[2]||(k[2]=T=>y("crear")),class:"flex-1 bg-fondo border-2 border-[#38BDF8]/30 text-[#38BDF8] rounded-full min-h-[48px] font-bold text-[14px] active:scale-95 transition-transform"}," ➕ Crear Enlace "),_("button",{onClick:G,disabled:!r.value,class:"flex-1 bg-[#38BDF8] text-fondo rounded-full min-h-[48px] font-bold text-[14px] active:scale-95 transition-transform disabled:opacity-50"}," 🔄 Sincronizar ",8,EP)])]),_("div",wP,[_("div",TP,[_("label",xP,[k[8]||(k[8]=_("span",{class:"text-[32px]"},"📷",-1)),k[9]||(k[9]=_("span",{class:"text-[13px] font-bold text-[#38BDF8]"},"Cámara",-1)),_("input",{type:"file",accept:"image/*",capture:"environment",class:"hidden",onChange:q},null,32)]),_("label",AP,[k[10]||(k[10]=_("span",{class:"text-[32px]"},"🖼️",-1)),k[11]||(k[11]=_("span",{class:"text-[13px] font-bold text-white"},"Galería",-1)),_("input",{type:"file",accept:"image/*",multiple:"",class:"hidden",onChange:q},null,32)])]),d.value.length>0?(ee(),ne("div",SP,[_("div",RP,[_("span",PP,ue(d.value.length)+" fotos listas",1),_("button",{onClick:K,class:"bg-[#EF4444] text-white rounded-full px-3 py-1 text-[11px] font-bold shadow-md active:scale-95"},"Borrar Todas")]),_("div",CP,[(ee(!0),ne(je,null,Ut(d.value,(T,b)=>(ee(),ne("div",{key:b,class:"relative"},[_("img",{src:T.url,class:"w-16 h-16 object-cover rounded-lg border border-[#38BDF8]"},null,8,VP)]))),128))]),_("button",{onClick:$,disabled:p.value,class:"w-full bg-[#38BDF8] text-fondo rounded-full min-h-[48px] font-bold text-[14px] mt-2 active:scale-95 transition-transform"},ue(p.value?m.value:"Subir Fotos a Drive"),9,DP)])):Je("",!0)]),s.value?(ee(),ne("div",kP,[_("div",NP,[_("h2",OP,ue(o.value==="crear"?"Vincular Nuevo Drive":"Editar Servidor Drive"),1),_("div",MP,[_("div",null,[k[12]||(k[12]=_("label",{class:"block text-[10px] uppercase text-etiqueta mb-1 font-semibold pl-2"},"Nombre Identificador",-1)),Te(_("input",{type:"text","onUpdate:modelValue":k[3]||(k[3]=T=>c.value.nombre=T),placeholder:"Ej: Proyecto Norte - Drive",class:"bg-fondo rounded-[20px] px-4 py-4 font-bold text-[14px] w-full text-white outline-none"},null,512),[[Oe,c.value.nombre]])]),_("div",null,[k[13]||(k[13]=_("label",{class:"block text-[10px] uppercase text-etiqueta mb-1 font-semibold pl-2"},"URL del Apps Script",-1)),Te(_("input",{type:"text","onUpdate:modelValue":k[4]||(k[4]=T=>c.value.urlScript=T),placeholder:"https://script.google.com/macros/s/.../exec",class:"bg-fondo rounded-[20px] px-4 py-4 text-[13px] text-acento w-full outline-none"},null,512),[[Oe,c.value.urlScript]])]),_("div",null,[k[14]||(k[14]=_("label",{class:"block text-[10px] uppercase text-etiqueta mb-1 font-semibold pl-2"},"ID Carpeta Raíz",-1)),Te(_("input",{type:"text","onUpdate:modelValue":k[5]||(k[5]=T=>c.value.idCarpetaRaiz=T),placeholder:"1XyZ_abc123...",class:"bg-fondo rounded-[20px] px-4 py-4 text-[13px] text-acento w-full outline-none"},null,512),[[Oe,c.value.idCarpetaRaiz]])])]),_("div",FP,[_("button",{onClick:x,class:"flex-1 bg-fondo text-etiqueta rounded-full min-h-[48px] font-semibold active:scale-95 transition-transform"},"Cancelar"),_("button",{onClick:R,disabled:l.value,class:"flex-1 bg-acento text-fondo rounded-full min-h-[48px] font-bold active:scale-95 transition-transform"},ue(l.value?"Guardando...":"Guardar"),9,LP)])])])):Je("",!0)]))}},BP={class:"flex-1 flex flex-col min-h-screen relative bg-fondo"},$P={key:2,class:"flex-1 flex flex-col"},jP={class:"flex-1 overflow-y-auto"},qP={key:7,class:"p-6 flex flex-col items-center justify-center text-center mt-10"},zP={class:"text-[14px] text-etiqueta"},GP={key:3,class:"flex-1 flex items-center justify-center"},KP={__name:"App",setup(n){const e=te("cargando"),t=te(""),r=te(""),i=te(""),s=te(""),o=te(!1),l=te("inicio"),c={inicio:"Inicio",campo:"Registro de Campo",nq:"Tubería NQ",resumen:"Resumen & PDF",fotos:"Fotos de Campo",reportes:"Reportes y Avance",admin:"Panel Admin"},u=Fm(()=>c[l.value]),d=m=>{l.value=m};jn(()=>{hA(Ir,async m=>{if(m){r.value=m.email.split("@")[0];const y=m.email==="robertsrivas89@gmail.com"||m.email.includes("admin"),x=Nt(Se,"Usuarios",m.uid);(await Zc(x)).exists()||await bx(x,{email:m.email,rol:y?"admin":"operador",estado:y?"activo":"creadoEn",creadoEn:zi()}),mn(x,D=>{const G=D.data();G&&G.estado==="activo"?(t.value=G.rol,e.value="app"):e.value="espera"})}else e.value="login"})});const p=()=>_y(Ir);return(m,y)=>(ee(),ne("div",BP,[e.value==="login"?(ee(),an(S1,{key:0})):e.value==="espera"?(ee(),an(P1,{key:1})):e.value==="app"?(ee(),ne("div",$P,[Bt(N1,{isOpen:o.value,activeTab:l.value,isAdmin:t.value==="admin",onClose:y[0]||(y[0]=x=>o.value=!1),onChangeTab:d},null,8,["isOpen","activeTab","isAdmin"]),Bt($1,{title:u.value,userRole:t.value,userEmail:r.value,onOpenSidebar:y[1]||(y[1]=x=>o.value=!0),onLogout:p},null,8,["title","userRole","userEmail"]),_("div",jP,[l.value==="inicio"?(ee(),an(rS,{key:0,onProyectoSeleccionado:y[2]||(y[2]=x=>i.value=x),onSondeoSeleccionado:y[3]||(y[3]=x=>s.value=x)})):l.value==="campo"?(ee(),an(WS,{key:1,idProyecto:i.value,idSondeo:s.value},null,8,["idProyecto","idSondeo"])):l.value==="nq"?(ee(),an(ES,{key:2,idProyecto:i.value,idSondeo:s.value},null,8,["idProyecto","idSondeo"])):l.value==="resumen"?(ee(),an(IR,{key:3,idProyecto:i.value,idSondeo:s.value},null,8,["idProyecto","idSondeo"])):l.value==="reportes"?(ee(),an(KR,{key:4})):l.value==="admin"?(ee(),an(fP,{key:5})):l.value==="fotos"?(ee(),an(UP,{key:6,idProyecto:i.value,idSondeo:s.value},null,8,["idProyecto","idSondeo"])):(ee(),ne("div",qP,[y[5]||(y[5]=_("div",{class:"w-24 h-24 bg-superficie rounded-full flex items-center justify-center mb-4 border-2 border-dashed border-acento"},[_("span",{class:"text-[32px]"},"🚧")],-1)),y[6]||(y[6]=_("h2",{class:"text-[20px] font-bold text-white mb-2"},"Pantalla en construcción",-1)),_("p",zP,[y[4]||(y[4]=js("Próximamente: ",-1)),_("strong",null,ue(u.value),1)])]))])])):(ee(),ne("div",GP,[...y[7]||(y[7]=[_("span",{class:"text-acento font-bold animate-pulse"},"Cargando sistema...",-1)])]))]))}};II(KP).mount("#app");
