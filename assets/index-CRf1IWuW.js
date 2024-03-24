(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ki(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const ae={},Ut=[],Ce=()=>{},pl=()=>!1,hr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Si=e=>e.startsWith("onUpdate:"),me=Object.assign,Ai=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},gl=Object.prototype.hasOwnProperty,K=(e,t)=>gl.call(e,t),U=Array.isArray,Bt=e=>pr(e)==="[object Map]",Po=e=>pr(e)==="[object Set]",B=e=>typeof e=="function",de=e=>typeof e=="string",Zt=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",Co=e=>(oe(e)||B(e))&&B(e.then)&&B(e.catch),Ro=Object.prototype.toString,pr=e=>Ro.call(e),vl=e=>pr(e).slice(8,-1),Io=e=>pr(e)==="[object Object]",Oi=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,cn=ki(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},bl=/-(\w)/g,Ke=gr(e=>e.replace(bl,(t,n)=>n?n.toUpperCase():"")),yl=/\B([A-Z])/g,en=gr(e=>e.replace(yl,"-$1").toLowerCase()),vr=gr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Mr=gr(e=>e?`on${vr(e)}`:""),mt=(e,t)=>!Object.is(e,t),Lr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ar=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},_l=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let oa;const To=()=>oa||(oa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pi(e){if(U(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=de(r)?kl(r):Pi(r);if(i)for(const a in i)t[a]=i[a]}return t}else if(de(e)||oe(e))return e}const xl=/;(?![^(]*\))/g,wl=/:([^]+)/,El=/\/\*[^]*?\*\//g;function kl(e){const t={};return e.replace(El,"").split(xl).forEach(n=>{if(n){const r=n.split(wl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function br(e){let t="";if(de(e))t=e;else if(U(e))for(let n=0;n<e.length;n++){const r=br(e[n]);r&&(t+=r+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Sl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Al=ki(Sl);function No(e){return!!e||e===""}const Ol=e=>de(e)?e:e==null?"":U(e)||oe(e)&&(e.toString===Ro||!B(e.toString))?JSON.stringify(e,Mo,2):String(e),Mo=(e,t)=>t&&t.__v_isRef?Mo(e,t.value):Bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],a)=>(n[Fr(r,a)+" =>"]=i,n),{})}:Po(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Fr(n))}:Zt(t)?Fr(t):oe(t)&&!U(t)&&!Io(t)?String(t):t,Fr=(e,t="")=>{var n;return Zt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ie;class Pl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ie,!t&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ie;try{return Ie=this,t()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Cl(e,t=Ie){t&&t.active&&t.effects.push(e)}function Rl(){return Ie}let St;class Ci{constructor(t,n,r,i){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Cl(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,It();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Il(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Tt()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=ut,n=St;try{return ut=!0,St=this,this._runnings++,sa(this),this.fn()}finally{la(this),this._runnings--,St=n,ut=t}}stop(){var t;this.active&&(sa(this),la(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function Il(e){return e.value}function sa(e){e._trackId++,e._depsLength=0}function la(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Lo(e.deps[t],e);e.deps.length=e._depsLength}}function Lo(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let ut=!0,Xr=0;const Fo=[];function It(){Fo.push(ut),ut=!1}function Tt(){const e=Fo.pop();ut=e===void 0?!0:e}function Ri(){Xr++}function Ii(){for(Xr--;!Xr&&Qr.length;)Qr.shift()()}function jo(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Lo(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Qr=[];function $o(e,t,n){Ri();for(const r of e.keys()){let i;r._dirtyLevel<t&&(i??(i=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(i??(i=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Qr.push(r.scheduler)))}Ii()}const zo=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Jr=new WeakMap,At=Symbol(""),Zr=Symbol("");function Ee(e,t,n){if(ut&&St){let r=Jr.get(e);r||Jr.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=zo(()=>r.delete(n))),jo(St,i)}}function Xe(e,t,n,r,i,a){const o=Jr.get(e);if(!o)return;let l=[];if(t==="clear")l=[...o.values()];else if(n==="length"&&U(e)){const s=Number(r);o.forEach((f,c)=>{(c==="length"||!Zt(c)&&c>=s)&&l.push(f)})}else switch(n!==void 0&&l.push(o.get(n)),t){case"add":U(e)?Oi(n)&&l.push(o.get("length")):(l.push(o.get(At)),Bt(e)&&l.push(o.get(Zr)));break;case"delete":U(e)||(l.push(o.get(At)),Bt(e)&&l.push(o.get(Zr)));break;case"set":Bt(e)&&l.push(o.get(At));break}Ri();for(const s of l)s&&$o(s,4);Ii()}const Tl=ki("__proto__,__v_isRef,__isVue"),Do=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Zt)),ca=Nl();function Nl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let a=0,o=this.length;a<o;a++)Ee(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(V)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){It(),Ri();const r=V(this)[t].apply(this,n);return Ii(),Tt(),r}}),e}function Ml(e){const t=V(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class Ho{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const i=this._isReadonly,a=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return a;if(n==="__v_raw")return r===(i?a?Vl:Yo:a?Wo:Bo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=U(t);if(!i){if(o&&K(ca,n))return Reflect.get(ca,n,r);if(n==="hasOwnProperty")return Ml}const l=Reflect.get(t,n,r);return(Zt(n)?Do.has(n):Tl(n))||(i||Ee(t,"get",n),a)?l:ke(l)?o&&Oi(n)?l:l.value:oe(l)?i?Vo(l):_r(l):l}}class Uo extends Ho{constructor(t=!1){super(!1,t)}set(t,n,r,i){let a=t[n];if(!this._isShallow){const s=Gt(a);if(!or(r)&&!Gt(r)&&(a=V(a),r=V(r)),!U(t)&&ke(a)&&!ke(r))return s?!1:(a.value=r,!0)}const o=U(t)&&Oi(n)?Number(n)<t.length:K(t,n),l=Reflect.set(t,n,r,i);return t===V(i)&&(o?mt(r,a)&&Xe(t,"set",n,r):Xe(t,"add",n,r)),l}deleteProperty(t,n){const r=K(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&Xe(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!Zt(n)||!Do.has(n))&&Ee(t,"has",n),r}ownKeys(t){return Ee(t,"iterate",U(t)?"length":At),Reflect.ownKeys(t)}}class Ll extends Ho{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Fl=new Uo,jl=new Ll,$l=new Uo(!0),Ti=e=>e,yr=e=>Reflect.getPrototypeOf(e);function Ln(e,t,n=!1,r=!1){e=e.__v_raw;const i=V(e),a=V(t);n||(mt(t,a)&&Ee(i,"get",t),Ee(i,"get",a));const{has:o}=yr(i),l=r?Ti:n?Li:bn;if(o.call(i,t))return l(e.get(t));if(o.call(i,a))return l(e.get(a));e!==i&&e.get(t)}function Fn(e,t=!1){const n=this.__v_raw,r=V(n),i=V(e);return t||(mt(e,i)&&Ee(r,"has",e),Ee(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function jn(e,t=!1){return e=e.__v_raw,!t&&Ee(V(e),"iterate",At),Reflect.get(e,"size",e)}function fa(e){e=V(e);const t=V(this);return yr(t).has.call(t,e)||(t.add(e),Xe(t,"add",e,e)),this}function ua(e,t){t=V(t);const n=V(this),{has:r,get:i}=yr(n);let a=r.call(n,e);a||(e=V(e),a=r.call(n,e));const o=i.call(n,e);return n.set(e,t),a?mt(t,o)&&Xe(n,"set",e,t):Xe(n,"add",e,t),this}function da(e){const t=V(this),{has:n,get:r}=yr(t);let i=n.call(t,e);i||(e=V(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&Xe(t,"delete",e,void 0),a}function ma(){const e=V(this),t=e.size!==0,n=e.clear();return t&&Xe(e,"clear",void 0,void 0),n}function $n(e,t){return function(r,i){const a=this,o=a.__v_raw,l=V(o),s=t?Ti:e?Li:bn;return!e&&Ee(l,"iterate",At),o.forEach((f,c)=>r.call(i,s(f),s(c),a))}}function zn(e,t,n){return function(...r){const i=this.__v_raw,a=V(i),o=Bt(a),l=e==="entries"||e===Symbol.iterator&&o,s=e==="keys"&&o,f=i[e](...r),c=n?Ti:t?Li:bn;return!t&&Ee(a,"iterate",s?Zr:At),{next(){const{value:m,done:h}=f.next();return h?{value:m,done:h}:{value:l?[c(m[0]),c(m[1])]:c(m),done:h}},[Symbol.iterator](){return this}}}}function it(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function zl(){const e={get(a){return Ln(this,a)},get size(){return jn(this)},has:Fn,add:fa,set:ua,delete:da,clear:ma,forEach:$n(!1,!1)},t={get(a){return Ln(this,a,!1,!0)},get size(){return jn(this)},has:Fn,add:fa,set:ua,delete:da,clear:ma,forEach:$n(!1,!0)},n={get(a){return Ln(this,a,!0)},get size(){return jn(this,!0)},has(a){return Fn.call(this,a,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:$n(!0,!1)},r={get(a){return Ln(this,a,!0,!0)},get size(){return jn(this,!0)},has(a){return Fn.call(this,a,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:$n(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=zn(a,!1,!1),n[a]=zn(a,!0,!1),t[a]=zn(a,!1,!0),r[a]=zn(a,!0,!0)}),[e,n,t,r]}const[Dl,Hl,Ul,Bl]=zl();function Ni(e,t){const n=t?e?Bl:Ul:e?Hl:Dl;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(K(n,i)&&i in r?n:r,i,a)}const Wl={get:Ni(!1,!1)},Yl={get:Ni(!1,!0)},Kl={get:Ni(!0,!1)},Bo=new WeakMap,Wo=new WeakMap,Yo=new WeakMap,Vl=new WeakMap;function Gl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ql(e){return e.__v_skip||!Object.isExtensible(e)?0:Gl(vl(e))}function _r(e){return Gt(e)?e:Mi(e,!1,Fl,Wl,Bo)}function Ko(e){return Mi(e,!1,$l,Yl,Wo)}function Vo(e){return Mi(e,!0,jl,Kl,Yo)}function Mi(e,t,n,r,i){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const o=ql(e);if(o===0)return e;const l=new Proxy(e,o===2?r:n);return i.set(e,l),l}function Wt(e){return Gt(e)?Wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Gt(e){return!!(e&&e.__v_isReadonly)}function or(e){return!!(e&&e.__v_isShallow)}function Go(e){return Wt(e)||Gt(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function qo(e){return Object.isExtensible(e)&&ar(e,"__v_skip",!0),e}const bn=e=>oe(e)?_r(e):e,Li=e=>oe(e)?Vo(e):e;class Xo{constructor(t,n,r,i){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ci(()=>t(this._value),()=>Xn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=V(this);return(!t._cacheable||t.effect.dirty)&&mt(t._value,t._value=t.effect.run())&&Xn(t,4),Qo(t),t.effect._dirtyLevel>=2&&Xn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Xl(e,t,n=!1){let r,i;const a=B(e);return a?(r=e,i=Ce):(r=e.get,i=e.set),new Xo(r,i,a||!i,n)}function Qo(e){var t;ut&&St&&(e=V(e),jo(St,(t=e.dep)!=null?t:e.dep=zo(()=>e.dep=void 0,e instanceof Xo?e:void 0)))}function Xn(e,t=4,n){e=V(e);const r=e.dep;r&&$o(r,t)}function ke(e){return!!(e&&e.__v_isRef===!0)}function Qn(e){return Jo(e,!1)}function Ql(e){return Jo(e,!0)}function Jo(e,t){return ke(e)?e:new Jl(e,t)}class Jl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:bn(t)}get value(){return Qo(this),this._value}set value(t){const n=this.__v_isShallow||or(t)||Gt(t);t=n?t:V(t),mt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:bn(t),Xn(this,4))}}function Yt(e){return ke(e)?e.value:e}const Zl={get:(e,t,n)=>Yt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return ke(i)&&!ke(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Zo(e){return Wt(e)?e:new Proxy(e,Zl)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function dt(e,t,n,r){try{return r?e(...r):e()}catch(i){xr(i,t,n)}}function Le(e,t,n,r){if(B(e)){const a=dt(e,t,n,r);return a&&Co(a)&&a.catch(o=>{xr(o,t,n)}),a}const i=[];for(let a=0;a<e.length;a++)i.push(Le(e[a],t,n,r));return i}function xr(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,l)===!1)return}a=a.parent}const s=t.appContext.config.errorHandler;if(s){dt(s,null,10,[e,o,l]);return}}ec(e,n,i,r)}function ec(e,t,n,r=!0){console.error(e)}let yn=!1,ei=!1;const ve=[];let Be=0;const Kt=[];let st=null,wt=0;const es=Promise.resolve();let Fi=null;function ts(e){const t=Fi||es;return e?t.then(this?e.bind(this):e):t}function tc(e){let t=Be+1,n=ve.length;for(;t<n;){const r=t+n>>>1,i=ve[r],a=_n(i);a<e||a===e&&i.pre?t=r+1:n=r}return t}function ji(e){(!ve.length||!ve.includes(e,yn&&e.allowRecurse?Be+1:Be))&&(e.id==null?ve.push(e):ve.splice(tc(e.id),0,e),ns())}function ns(){!yn&&!ei&&(ei=!0,Fi=es.then(is))}function nc(e){const t=ve.indexOf(e);t>Be&&ve.splice(t,1)}function rc(e){U(e)?Kt.push(...e):(!st||!st.includes(e,e.allowRecurse?wt+1:wt))&&Kt.push(e),ns()}function ha(e,t,n=yn?Be+1:0){for(;n<ve.length;n++){const r=ve[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;ve.splice(n,1),n--,r()}}}function rs(e){if(Kt.length){const t=[...new Set(Kt)].sort((n,r)=>_n(n)-_n(r));if(Kt.length=0,st){st.push(...t);return}for(st=t,wt=0;wt<st.length;wt++)st[wt]();st=null,wt=0}}const _n=e=>e.id==null?1/0:e.id,ic=(e,t)=>{const n=_n(e)-_n(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function is(e){ei=!1,yn=!0,ve.sort(ic);try{for(Be=0;Be<ve.length;Be++){const t=ve[Be];t&&t.active!==!1&&dt(t,null,14)}}finally{Be=0,ve.length=0,rs(),yn=!1,Fi=null,(ve.length||Kt.length)&&is()}}function ac(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ae;let i=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[c]||ae;h&&(i=n.map(g=>de(g)?g.trim():g)),m&&(i=n.map(_l))}let l,s=r[l=Mr(t)]||r[l=Mr(Ke(t))];!s&&a&&(s=r[l=Mr(en(t))]),s&&Le(s,e,6,i);const f=r[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Le(f,e,6,i)}}function as(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let o={},l=!1;if(!B(e)){const s=f=>{const c=as(f,t,!0);c&&(l=!0,me(o,c))};!n&&t.mixins.length&&t.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}return!a&&!l?(oe(e)&&r.set(e,null),null):(U(a)?a.forEach(s=>o[s]=null):me(o,a),oe(e)&&r.set(e,o),o)}function wr(e,t){return!e||!hr(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,en(t))||K(e,t))}let Te=null,Er=null;function sr(e){const t=Te;return Te=e,Er=e&&e.type.__scopeId||null,t}function oc(e){Er=e}function sc(){Er=null}function lc(e,t=Te,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Sa(-1);const a=sr(t);let o;try{o=e(...i)}finally{sr(a),r._d&&Sa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function jr(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[o],slots:l,attrs:s,emit:f,render:c,renderCache:m,data:h,setupState:g,ctx:A,inheritAttrs:R}=e;let F,y;const x=sr(e);try{if(n.shapeFlag&4){const z=i||r,W=z;F=Ue(c.call(W,z,m,a,g,h,A)),y=s}else{const z=t;F=Ue(z.length>1?z(a,{attrs:s,slots:l,emit:f}):z(a,null)),y=t.props?s:cc(s)}}catch(z){mn.length=0,xr(z,e,1),F=te(Ot)}let C=F;if(y&&R!==!1){const z=Object.keys(y),{shapeFlag:W}=C;z.length&&W&7&&(o&&z.some(Si)&&(y=fc(y,o)),C=qt(C,y))}return n.dirs&&(C=qt(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),F=C,sr(x),F}const cc=e=>{let t;for(const n in e)(n==="class"||n==="style"||hr(n))&&((t||(t={}))[n]=e[n]);return t},fc=(e,t)=>{const n={};for(const r in e)(!Si(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function uc(e,t,n){const{props:r,children:i,component:a}=e,{props:o,children:l,patchFlag:s}=t,f=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&s>=0){if(s&1024)return!0;if(s&16)return r?pa(r,o,f):!!o;if(s&8){const c=t.dynamicProps;for(let m=0;m<c.length;m++){const h=c[m];if(o[h]!==r[h]&&!wr(f,h))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?pa(r,o,f):!0:!!o;return!1}function pa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!wr(n,a))return!0}return!1}function dc({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const os="components";function ti(e,t){return hc(os,e,!0,t)||e}const mc=Symbol.for("v-ndc");function hc(e,t,n=!0,r=!1){const i=Te||be;if(i){const a=i.type;if(e===os){const l=uf(a,!1);if(l&&(l===t||l===Ke(t)||l===vr(Ke(t))))return a}const o=ga(i[e]||a[e],t)||ga(i.appContext[e],t);return!o&&r?a:o}}function ga(e,t){return e&&(e[t]||e[Ke(t)]||e[vr(Ke(t))])}const pc=e=>e.__isSuspense;function gc(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):rc(e)}const vc=Symbol.for("v-scx"),bc=()=>Ye(vc),Dn={};function fn(e,t,n){return ss(e,t,n)}function ss(e,t,{immediate:n,deep:r,flush:i,once:a,onTrack:o,onTrigger:l}=ae){if(t&&a){const $=t;t=(...Z)=>{$(...Z),W()}}const s=be,f=$=>r===!0?$:zt($,r===!1?1:void 0);let c,m=!1,h=!1;if(ke(e)?(c=()=>e.value,m=or(e)):Wt(e)?(c=()=>f(e),m=!0):U(e)?(h=!0,m=e.some($=>Wt($)||or($)),c=()=>e.map($=>{if(ke($))return $.value;if(Wt($))return f($);if(B($))return dt($,s,2)})):B(e)?t?c=()=>dt(e,s,2):c=()=>(g&&g(),Le(e,s,3,[A])):c=Ce,t&&r){const $=c;c=()=>zt($())}let g,A=$=>{g=C.onStop=()=>{dt($,s,4),g=C.onStop=void 0}},R;if(Or)if(A=Ce,t?n&&Le(t,s,3,[c(),h?[]:void 0,A]):c(),i==="sync"){const $=bc();R=$.__watcherHandles||($.__watcherHandles=[])}else return Ce;let F=h?new Array(e.length).fill(Dn):Dn;const y=()=>{if(!(!C.active||!C.dirty))if(t){const $=C.run();(r||m||(h?$.some((Z,he)=>mt(Z,F[he])):mt($,F)))&&(g&&g(),Le(t,s,3,[$,F===Dn?void 0:h&&F[0]===Dn?[]:F,A]),F=$)}else C.run()};y.allowRecurse=!!t;let x;i==="sync"?x=y:i==="post"?x=()=>we(y,s&&s.suspense):(y.pre=!0,s&&(y.id=s.uid),x=()=>ji(y));const C=new Ci(c,Ce,x),z=Rl(),W=()=>{C.stop(),z&&Ai(z.effects,C)};return t?n?y():F=C.run():i==="post"?we(C.run.bind(C),s&&s.suspense):C.run(),R&&R.push(W),W}function yc(e,t,n){const r=this.proxy,i=de(e)?e.includes(".")?ls(r,e):()=>r[e]:e.bind(r,r);let a;B(t)?a=t:(a=t.handler,n=t);const o=Cn(this),l=ss(i,a.bind(r),n);return o(),l}function ls(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function zt(e,t,n=0,r){if(!oe(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),ke(e))zt(e.value,t,n,r);else if(U(e))for(let i=0;i<e.length;i++)zt(e[i],t,n,r);else if(Po(e)||Bt(e))e.forEach(i=>{zt(i,t,n,r)});else if(Io(e))for(const i in e)zt(e[i],t,n,r);return e}function _t(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){const l=i[o];a&&(l.oldValue=a[o].value);let s=l.dir[r];s&&(It(),Le(s,n,8,[e.el,l,e,t]),Tt())}}/*! #__NO_SIDE_EFFECTS__ */function bt(e,t){return B(e)?me({name:e.name},t,{setup:e}):e}const Jn=e=>!!e.type.__asyncLoader,cs=e=>e.type.__isKeepAlive;function _c(e,t){fs(e,"a",t)}function xc(e,t){fs(e,"da",t)}function fs(e,t,n=be){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(kr(t,r,n),n){let i=n.parent;for(;i&&i.parent;)cs(i.parent.vnode)&&wc(r,t,n,i),i=i.parent}}function wc(e,t,n,r){const i=kr(t,e,r,!0);us(()=>{Ai(r[t],i)},n)}function kr(e,t,n=be,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;It();const l=Cn(n),s=Le(t,n,e,o);return l(),Tt(),s});return r?i.unshift(a):i.push(a),a}}const et=e=>(t,n=be)=>(!Or||e==="sp")&&kr(e,(...r)=>t(...r),n),Ec=et("bm"),kc=et("m"),Sc=et("bu"),Ac=et("u"),Oc=et("bum"),us=et("um"),Pc=et("sp"),Cc=et("rtg"),Rc=et("rtc");function Ic(e,t=be){kr("ec",e,t)}const ni=e=>e?ks(e)?Hi(e)||e.proxy:ni(e.parent):null,un=me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ni(e.parent),$root:e=>ni(e.root),$emit:e=>e.emit,$options:e=>$i(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,ji(e.update)}),$nextTick:e=>e.n||(e.n=ts.bind(e.proxy)),$watch:e=>yc.bind(e)}),$r=(e,t)=>e!==ae&&!e.__isScriptSetup&&K(e,t),Tc={get({_:e},t){const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:l,appContext:s}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if($r(r,t))return o[t]=1,r[t];if(i!==ae&&K(i,t))return o[t]=2,i[t];if((f=e.propsOptions[0])&&K(f,t))return o[t]=3,a[t];if(n!==ae&&K(n,t))return o[t]=4,n[t];ri&&(o[t]=0)}}const c=un[t];let m,h;if(c)return t==="$attrs"&&Ee(e,"get",t),c(e);if((m=l.__cssModules)&&(m=m[t]))return m;if(n!==ae&&K(n,t))return o[t]=4,n[t];if(h=s.config.globalProperties,K(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return $r(i,t)?(i[t]=n,!0):r!==ae&&K(r,t)?(r[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let l;return!!n[o]||e!==ae&&K(e,o)||$r(t,o)||(l=a[0])&&K(l,o)||K(r,o)||K(un,o)||K(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:K(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function va(e){return U(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ri=!0;function Nc(e){const t=$i(e),n=e.proxy,r=e.ctx;ri=!1,t.beforeCreate&&ba(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:o,watch:l,provide:s,inject:f,created:c,beforeMount:m,mounted:h,beforeUpdate:g,updated:A,activated:R,deactivated:F,beforeDestroy:y,beforeUnmount:x,destroyed:C,unmounted:z,render:W,renderTracked:$,renderTriggered:Z,errorCaptured:he,serverPrefetch:pe,expose:Oe,inheritAttrs:nt,components:yt,directives:je,filters:nn}=t;if(f&&Mc(f,r,null),o)for(const Q in o){const G=o[Q];B(G)&&(r[Q]=G.bind(n))}if(i){const Q=i.call(n,n);oe(Q)&&(e.data=_r(Q))}if(ri=!0,a)for(const Q in a){const G=a[Q],Ve=B(G)?G.bind(n,n):B(G.get)?G.get.bind(n,n):Ce,rt=!B(G)&&B(G.set)?G.set.bind(n):Ce,$e=ue({get:Ve,set:rt});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>$e.value,set:_e=>$e.value=_e})}if(l)for(const Q in l)ds(l[Q],r,n,Q);if(s){const Q=B(s)?s.call(n):s;Reflect.ownKeys(Q).forEach(G=>{Zn(G,Q[G])})}c&&ba(c,e,"c");function ce(Q,G){U(G)?G.forEach(Ve=>Q(Ve.bind(n))):G&&Q(G.bind(n))}if(ce(Ec,m),ce(kc,h),ce(Sc,g),ce(Ac,A),ce(_c,R),ce(xc,F),ce(Ic,he),ce(Rc,$),ce(Cc,Z),ce(Oc,x),ce(us,z),ce(Pc,pe),U(Oe))if(Oe.length){const Q=e.exposed||(e.exposed={});Oe.forEach(G=>{Object.defineProperty(Q,G,{get:()=>n[G],set:Ve=>n[G]=Ve})})}else e.exposed||(e.exposed={});W&&e.render===Ce&&(e.render=W),nt!=null&&(e.inheritAttrs=nt),yt&&(e.components=yt),je&&(e.directives=je)}function Mc(e,t,n=Ce){U(e)&&(e=ii(e));for(const r in e){const i=e[r];let a;oe(i)?"default"in i?a=Ye(i.from||r,i.default,!0):a=Ye(i.from||r):a=Ye(i),ke(a)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):t[r]=a}}function ba(e,t,n){Le(U(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ds(e,t,n,r){const i=r.includes(".")?ls(n,r):()=>n[r];if(de(e)){const a=t[e];B(a)&&fn(i,a)}else if(B(e))fn(i,e.bind(n));else if(oe(e))if(U(e))e.forEach(a=>ds(a,t,n,r));else{const a=B(e.handler)?e.handler.bind(n):t[e.handler];B(a)&&fn(i,a,e)}}function $i(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,l=a.get(t);let s;return l?s=l:!i.length&&!n&&!r?s=t:(s={},i.length&&i.forEach(f=>lr(s,f,o,!0)),lr(s,t,o)),oe(t)&&a.set(t,s),s}function lr(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&lr(e,a,n,!0),i&&i.forEach(o=>lr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const l=Lc[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Lc={data:ya,props:_a,emits:_a,methods:sn,computed:sn,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:sn,directives:sn,watch:jc,provide:ya,inject:Fc};function ya(e,t){return t?e?function(){return me(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function Fc(e,t){return sn(ii(e),ii(t))}function ii(e){if(U(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ye(e,t){return e?[...new Set([].concat(e,t))]:t}function sn(e,t){return e?me(Object.create(null),e,t):t}function _a(e,t){return e?U(e)&&U(t)?[...new Set([...e,...t])]:me(Object.create(null),va(e),va(t??{})):t}function jc(e,t){if(!e)return t;if(!t)return e;const n=me(Object.create(null),e);for(const r in t)n[r]=ye(e[r],t[r]);return n}function ms(){return{app:null,config:{isNativeTag:pl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $c=0;function zc(e,t){return function(r,i=null){B(r)||(r=me({},r)),i!=null&&!oe(i)&&(i=null);const a=ms(),o=new WeakSet;let l=!1;const s=a.app={_uid:$c++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:mf,get config(){return a.config},set config(f){},use(f,...c){return o.has(f)||(f&&B(f.install)?(o.add(f),f.install(s,...c)):B(f)&&(o.add(f),f(s,...c))),s},mixin(f){return a.mixins.includes(f)||a.mixins.push(f),s},component(f,c){return c?(a.components[f]=c,s):a.components[f]},directive(f,c){return c?(a.directives[f]=c,s):a.directives[f]},mount(f,c,m){if(!l){const h=te(r,i);return h.appContext=a,m===!0?m="svg":m===!1&&(m=void 0),c&&t?t(h,f):e(h,f,m),l=!0,s._container=f,f.__vue_app__=s,Hi(h.component)||h.component.proxy}},unmount(){l&&(e(null,s._container),delete s._container.__vue_app__)},provide(f,c){return a.provides[f]=c,s},runWithContext(f){const c=dn;dn=s;try{return f()}finally{dn=c}}};return s}}let dn=null;function Zn(e,t){if(be){let n=be.provides;const r=be.parent&&be.parent.provides;r===n&&(n=be.provides=Object.create(r)),n[e]=t}}function Ye(e,t,n=!1){const r=be||Te;if(r||dn){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:dn._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&B(t)?t.call(r&&r.proxy):t}}function Dc(e,t,n,r=!1){const i={},a={};ar(a,Ar,1),e.propsDefaults=Object.create(null),hs(e,t,i,a);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Ko(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Hc(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=e,l=V(i),[s]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let m=0;m<c.length;m++){let h=c[m];if(wr(e.emitsOptions,h))continue;const g=t[h];if(s)if(K(a,h))g!==a[h]&&(a[h]=g,f=!0);else{const A=Ke(h);i[A]=ai(s,l,A,g,e,!1)}else g!==a[h]&&(a[h]=g,f=!0)}}}else{hs(e,t,i,a)&&(f=!0);let c;for(const m in l)(!t||!K(t,m)&&((c=en(m))===m||!K(t,c)))&&(s?n&&(n[m]!==void 0||n[c]!==void 0)&&(i[m]=ai(s,l,m,void 0,e,!0)):delete i[m]);if(a!==l)for(const m in a)(!t||!K(t,m))&&(delete a[m],f=!0)}f&&Xe(e,"set","$attrs")}function hs(e,t,n,r){const[i,a]=e.propsOptions;let o=!1,l;if(t)for(let s in t){if(cn(s))continue;const f=t[s];let c;i&&K(i,c=Ke(s))?!a||!a.includes(c)?n[c]=f:(l||(l={}))[c]=f:wr(e.emitsOptions,s)||(!(s in r)||f!==r[s])&&(r[s]=f,o=!0)}if(a){const s=V(n),f=l||ae;for(let c=0;c<a.length;c++){const m=a[c];n[m]=ai(i,s,m,f[m],e,!K(f,m))}}return o}function ai(e,t,n,r,i,a){const o=e[n];if(o!=null){const l=K(o,"default");if(l&&r===void 0){const s=o.default;if(o.type!==Function&&!o.skipFactory&&B(s)){const{propsDefaults:f}=i;if(n in f)r=f[n];else{const c=Cn(i);r=f[n]=s.call(null,t),c()}}else r=s}o[0]&&(a&&!l?r=!1:o[1]&&(r===""||r===en(n))&&(r=!0))}return r}function ps(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,o={},l=[];let s=!1;if(!B(e)){const c=m=>{s=!0;const[h,g]=ps(m,t,!0);me(o,h),g&&l.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!a&&!s)return oe(e)&&r.set(e,Ut),Ut;if(U(a))for(let c=0;c<a.length;c++){const m=Ke(a[c]);xa(m)&&(o[m]=ae)}else if(a)for(const c in a){const m=Ke(c);if(xa(m)){const h=a[c],g=o[m]=U(h)||B(h)?{type:h}:me({},h);if(g){const A=ka(Boolean,g.type),R=ka(String,g.type);g[0]=A>-1,g[1]=R<0||A<R,(A>-1||K(g,"default"))&&l.push(m)}}}const f=[o,l];return oe(e)&&r.set(e,f),f}function xa(e){return e[0]!=="$"&&!cn(e)}function wa(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Ea(e,t){return wa(e)===wa(t)}function ka(e,t){return U(t)?t.findIndex(n=>Ea(n,e)):B(t)&&Ea(t,e)?0:-1}const gs=e=>e[0]==="_"||e==="$stable",zi=e=>U(e)?e.map(Ue):[Ue(e)],Uc=(e,t,n)=>{if(t._n)return t;const r=lc((...i)=>zi(t(...i)),n);return r._c=!1,r},vs=(e,t,n)=>{const r=e._ctx;for(const i in e){if(gs(i))continue;const a=e[i];if(B(a))t[i]=Uc(i,a,r);else if(a!=null){const o=zi(a);t[i]=()=>o}}},bs=(e,t)=>{const n=zi(t);e.slots.default=()=>n},Bc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),ar(t,"_",n)):vs(t,e.slots={})}else e.slots={},t&&bs(e,t);ar(e.slots,Ar,1)},Wc=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,o=ae;if(r.shapeFlag&32){const l=t._;l?n&&l===1?a=!1:(me(i,t),!n&&l===1&&delete i._):(a=!t.$stable,vs(t,i)),o=t}else t&&(bs(e,t),o={default:1});if(a)for(const l in i)!gs(l)&&o[l]==null&&delete i[l]};function oi(e,t,n,r,i=!1){if(U(e)){e.forEach((h,g)=>oi(h,t&&(U(t)?t[g]:t),n,r,i));return}if(Jn(r)&&!i)return;const a=r.shapeFlag&4?Hi(r.component)||r.component.proxy:r.el,o=i?null:a,{i:l,r:s}=e,f=t&&t.r,c=l.refs===ae?l.refs={}:l.refs,m=l.setupState;if(f!=null&&f!==s&&(de(f)?(c[f]=null,K(m,f)&&(m[f]=null)):ke(f)&&(f.value=null)),B(s))dt(s,l,12,[o,c]);else{const h=de(s),g=ke(s);if(h||g){const A=()=>{if(e.f){const R=h?K(m,s)?m[s]:c[s]:s.value;i?U(R)&&Ai(R,a):U(R)?R.includes(a)||R.push(a):h?(c[s]=[a],K(m,s)&&(m[s]=c[s])):(s.value=[a],e.k&&(c[e.k]=s.value))}else h?(c[s]=o,K(m,s)&&(m[s]=o)):g&&(s.value=o,e.k&&(c[e.k]=o))};o?(A.id=-1,we(A,n)):A()}}}const we=gc;function Yc(e){return Kc(e)}function Kc(e,t){const n=To();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:l,createComment:s,setText:f,setElementText:c,parentNode:m,nextSibling:h,setScopeId:g=Ce,insertStaticContent:A}=e,R=(u,d,p,_=null,v=null,k=null,P=void 0,E=null,S=!!d.dynamicChildren)=>{if(u===d)return;u&&!an(u,d)&&(_=b(u),_e(u,v,k,!0),u=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:w,ref:N,shapeFlag:D}=d;switch(w){case Sr:F(u,d,p,_);break;case Ot:y(u,d,p,_);break;case er:u==null&&x(d,p,_,P);break;case He:yt(u,d,p,_,v,k,P,E,S);break;default:D&1?W(u,d,p,_,v,k,P,E,S):D&6?je(u,d,p,_,v,k,P,E,S):(D&64||D&128)&&w.process(u,d,p,_,v,k,P,E,S,L)}N!=null&&v&&oi(N,u&&u.ref,k,d||u,!d)},F=(u,d,p,_)=>{if(u==null)r(d.el=l(d.children),p,_);else{const v=d.el=u.el;d.children!==u.children&&f(v,d.children)}},y=(u,d,p,_)=>{u==null?r(d.el=s(d.children||""),p,_):d.el=u.el},x=(u,d,p,_)=>{[u.el,u.anchor]=A(u.children,d,p,_,u.el,u.anchor)},C=({el:u,anchor:d},p,_)=>{let v;for(;u&&u!==d;)v=h(u),r(u,p,_),u=v;r(d,p,_)},z=({el:u,anchor:d})=>{let p;for(;u&&u!==d;)p=h(u),i(u),u=p;i(d)},W=(u,d,p,_,v,k,P,E,S)=>{d.type==="svg"?P="svg":d.type==="math"&&(P="mathml"),u==null?$(d,p,_,v,k,P,E,S):pe(u,d,v,k,P,E,S)},$=(u,d,p,_,v,k,P,E)=>{let S,w;const{props:N,shapeFlag:D,transition:j,dirs:H}=u;if(S=u.el=o(u.type,k,N&&N.is,N),D&8?c(S,u.children):D&16&&he(u.children,S,null,_,v,zr(u,k),P,E),H&&_t(u,null,_,"created"),Z(S,u,u.scopeId,P,_),N){for(const J in N)J!=="value"&&!cn(J)&&a(S,J,null,N[J],k,u.children,_,v,ge);"value"in N&&a(S,"value",null,N.value,k),(w=N.onVnodeBeforeMount)&&De(w,_,u)}H&&_t(u,null,_,"beforeMount");const Y=Vc(v,j);Y&&j.beforeEnter(S),r(S,d,p),((w=N&&N.onVnodeMounted)||Y||H)&&we(()=>{w&&De(w,_,u),Y&&j.enter(S),H&&_t(u,null,_,"mounted")},v)},Z=(u,d,p,_,v)=>{if(p&&g(u,p),_)for(let k=0;k<_.length;k++)g(u,_[k]);if(v){let k=v.subTree;if(d===k){const P=v.vnode;Z(u,P,P.scopeId,P.slotScopeIds,v.parent)}}},he=(u,d,p,_,v,k,P,E,S=0)=>{for(let w=S;w<u.length;w++){const N=u[w]=E?lt(u[w]):Ue(u[w]);R(null,N,d,p,_,v,k,P,E)}},pe=(u,d,p,_,v,k,P)=>{const E=d.el=u.el;let{patchFlag:S,dynamicChildren:w,dirs:N}=d;S|=u.patchFlag&16;const D=u.props||ae,j=d.props||ae;let H;if(p&&xt(p,!1),(H=j.onVnodeBeforeUpdate)&&De(H,p,d,u),N&&_t(d,u,p,"beforeUpdate"),p&&xt(p,!0),w?Oe(u.dynamicChildren,w,E,p,_,zr(d,v),k):P||G(u,d,E,null,p,_,zr(d,v),k,!1),S>0){if(S&16)nt(E,d,D,j,p,_,v);else if(S&2&&D.class!==j.class&&a(E,"class",null,j.class,v),S&4&&a(E,"style",D.style,j.style,v),S&8){const Y=d.dynamicProps;for(let J=0;J<Y.length;J++){const ie=Y[J],fe=D[ie],Re=j[ie];(Re!==fe||ie==="value")&&a(E,ie,fe,Re,v,u.children,p,_,ge)}}S&1&&u.children!==d.children&&c(E,d.children)}else!P&&w==null&&nt(E,d,D,j,p,_,v);((H=j.onVnodeUpdated)||N)&&we(()=>{H&&De(H,p,d,u),N&&_t(d,u,p,"updated")},_)},Oe=(u,d,p,_,v,k,P)=>{for(let E=0;E<d.length;E++){const S=u[E],w=d[E],N=S.el&&(S.type===He||!an(S,w)||S.shapeFlag&70)?m(S.el):p;R(S,w,N,null,_,v,k,P,!0)}},nt=(u,d,p,_,v,k,P)=>{if(p!==_){if(p!==ae)for(const E in p)!cn(E)&&!(E in _)&&a(u,E,p[E],null,P,d.children,v,k,ge);for(const E in _){if(cn(E))continue;const S=_[E],w=p[E];S!==w&&E!=="value"&&a(u,E,w,S,P,d.children,v,k,ge)}"value"in _&&a(u,"value",p.value,_.value,P)}},yt=(u,d,p,_,v,k,P,E,S)=>{const w=d.el=u?u.el:l(""),N=d.anchor=u?u.anchor:l("");let{patchFlag:D,dynamicChildren:j,slotScopeIds:H}=d;H&&(E=E?E.concat(H):H),u==null?(r(w,p,_),r(N,p,_),he(d.children||[],p,N,v,k,P,E,S)):D>0&&D&64&&j&&u.dynamicChildren?(Oe(u.dynamicChildren,j,p,v,k,P,E),(d.key!=null||v&&d===v.subTree)&&ys(u,d,!0)):G(u,d,p,N,v,k,P,E,S)},je=(u,d,p,_,v,k,P,E,S)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?v.ctx.activate(d,p,_,P,S):nn(d,p,_,v,k,P,S):Nt(u,d,S)},nn=(u,d,p,_,v,k,P)=>{const E=u.component=of(u,_,v);if(cs(u)&&(E.ctx.renderer=L),sf(E),E.asyncDep){if(v&&v.registerDep(E,ce),!u.el){const S=E.subTree=te(Ot);y(null,S,d,p)}}else ce(E,u,d,p,v,k,P)},Nt=(u,d,p)=>{const _=d.component=u.component;if(uc(u,d,p))if(_.asyncDep&&!_.asyncResolved){Q(_,d,p);return}else _.next=d,nc(_.update),_.effect.dirty=!0,_.update();else d.el=u.el,_.vnode=d},ce=(u,d,p,_,v,k,P)=>{const E=()=>{if(u.isMounted){let{next:N,bu:D,u:j,parent:H,vnode:Y}=u;{const Ft=_s(u);if(Ft){N&&(N.el=Y.el,Q(u,N,P)),Ft.asyncDep.then(()=>{u.isUnmounted||E()});return}}let J=N,ie;xt(u,!1),N?(N.el=Y.el,Q(u,N,P)):N=Y,D&&Lr(D),(ie=N.props&&N.props.onVnodeBeforeUpdate)&&De(ie,H,N,Y),xt(u,!0);const fe=jr(u),Re=u.subTree;u.subTree=fe,R(Re,fe,m(Re.el),b(Re),u,v,k),N.el=fe.el,J===null&&dc(u,fe.el),j&&we(j,v),(ie=N.props&&N.props.onVnodeUpdated)&&we(()=>De(ie,H,N,Y),v)}else{let N;const{el:D,props:j}=d,{bm:H,m:Y,parent:J}=u,ie=Jn(d);if(xt(u,!1),H&&Lr(H),!ie&&(N=j&&j.onVnodeBeforeMount)&&De(N,J,d),xt(u,!0),D&&re){const fe=()=>{u.subTree=jr(u),re(D,u.subTree,u,v,null)};ie?d.type.__asyncLoader().then(()=>!u.isUnmounted&&fe()):fe()}else{const fe=u.subTree=jr(u);R(null,fe,p,_,u,v,k),d.el=fe.el}if(Y&&we(Y,v),!ie&&(N=j&&j.onVnodeMounted)){const fe=d;we(()=>De(N,J,fe),v)}(d.shapeFlag&256||J&&Jn(J.vnode)&&J.vnode.shapeFlag&256)&&u.a&&we(u.a,v),u.isMounted=!0,d=p=_=null}},S=u.effect=new Ci(E,Ce,()=>ji(w),u.scope),w=u.update=()=>{S.dirty&&S.run()};w.id=u.uid,xt(u,!0),w()},Q=(u,d,p)=>{d.component=u;const _=u.vnode.props;u.vnode=d,u.next=null,Hc(u,d.props,_,p),Wc(u,d.children,p),It(),ha(u),Tt()},G=(u,d,p,_,v,k,P,E,S=!1)=>{const w=u&&u.children,N=u?u.shapeFlag:0,D=d.children,{patchFlag:j,shapeFlag:H}=d;if(j>0){if(j&128){rt(w,D,p,_,v,k,P,E,S);return}else if(j&256){Ve(w,D,p,_,v,k,P,E,S);return}}H&8?(N&16&&ge(w,v,k),D!==w&&c(p,D)):N&16?H&16?rt(w,D,p,_,v,k,P,E,S):ge(w,v,k,!0):(N&8&&c(p,""),H&16&&he(D,p,_,v,k,P,E,S))},Ve=(u,d,p,_,v,k,P,E,S)=>{u=u||Ut,d=d||Ut;const w=u.length,N=d.length,D=Math.min(w,N);let j;for(j=0;j<D;j++){const H=d[j]=S?lt(d[j]):Ue(d[j]);R(u[j],H,p,null,v,k,P,E,S)}w>N?ge(u,v,k,!0,!1,D):he(d,p,_,v,k,P,E,S,D)},rt=(u,d,p,_,v,k,P,E,S)=>{let w=0;const N=d.length;let D=u.length-1,j=N-1;for(;w<=D&&w<=j;){const H=u[w],Y=d[w]=S?lt(d[w]):Ue(d[w]);if(an(H,Y))R(H,Y,p,null,v,k,P,E,S);else break;w++}for(;w<=D&&w<=j;){const H=u[D],Y=d[j]=S?lt(d[j]):Ue(d[j]);if(an(H,Y))R(H,Y,p,null,v,k,P,E,S);else break;D--,j--}if(w>D){if(w<=j){const H=j+1,Y=H<N?d[H].el:_;for(;w<=j;)R(null,d[w]=S?lt(d[w]):Ue(d[w]),p,Y,v,k,P,E,S),w++}}else if(w>j)for(;w<=D;)_e(u[w],v,k,!0),w++;else{const H=w,Y=w,J=new Map;for(w=Y;w<=j;w++){const Se=d[w]=S?lt(d[w]):Ue(d[w]);Se.key!=null&&J.set(Se.key,w)}let ie,fe=0;const Re=j-Y+1;let Ft=!1,ra=0;const rn=new Array(Re);for(w=0;w<Re;w++)rn[w]=0;for(w=H;w<=D;w++){const Se=u[w];if(fe>=Re){_e(Se,v,k,!0);continue}let ze;if(Se.key!=null)ze=J.get(Se.key);else for(ie=Y;ie<=j;ie++)if(rn[ie-Y]===0&&an(Se,d[ie])){ze=ie;break}ze===void 0?_e(Se,v,k,!0):(rn[ze-Y]=w+1,ze>=ra?ra=ze:Ft=!0,R(Se,d[ze],p,null,v,k,P,E,S),fe++)}const ia=Ft?Gc(rn):Ut;for(ie=ia.length-1,w=Re-1;w>=0;w--){const Se=Y+w,ze=d[Se],aa=Se+1<N?d[Se+1].el:_;rn[w]===0?R(null,ze,p,aa,v,k,P,E,S):Ft&&(ie<0||w!==ia[ie]?$e(ze,p,aa,2):ie--)}}},$e=(u,d,p,_,v=null)=>{const{el:k,type:P,transition:E,children:S,shapeFlag:w}=u;if(w&6){$e(u.component.subTree,d,p,_);return}if(w&128){u.suspense.move(d,p,_);return}if(w&64){P.move(u,d,p,L);return}if(P===He){r(k,d,p);for(let D=0;D<S.length;D++)$e(S[D],d,p,_);r(u.anchor,d,p);return}if(P===er){C(u,d,p);return}if(_!==2&&w&1&&E)if(_===0)E.beforeEnter(k),r(k,d,p),we(()=>E.enter(k),v);else{const{leave:D,delayLeave:j,afterLeave:H}=E,Y=()=>r(k,d,p),J=()=>{D(k,()=>{Y(),H&&H()})};j?j(k,Y,J):J()}else r(k,d,p)},_e=(u,d,p,_=!1,v=!1)=>{const{type:k,props:P,ref:E,children:S,dynamicChildren:w,shapeFlag:N,patchFlag:D,dirs:j}=u;if(E!=null&&oi(E,null,p,u,!0),N&256){d.ctx.deactivate(u);return}const H=N&1&&j,Y=!Jn(u);let J;if(Y&&(J=P&&P.onVnodeBeforeUnmount)&&De(J,d,u),N&6)Mn(u.component,p,_);else{if(N&128){u.suspense.unmount(p,_);return}H&&_t(u,null,d,"beforeUnmount"),N&64?u.type.remove(u,d,p,v,L,_):w&&(k!==He||D>0&&D&64)?ge(w,d,p,!1,!0):(k===He&&D&384||!v&&N&16)&&ge(S,d,p),_&&Mt(u)}(Y&&(J=P&&P.onVnodeUnmounted)||H)&&we(()=>{J&&De(J,d,u),H&&_t(u,null,d,"unmounted")},p)},Mt=u=>{const{type:d,el:p,anchor:_,transition:v}=u;if(d===He){Lt(p,_);return}if(d===er){z(u);return}const k=()=>{i(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:E}=v,S=()=>P(p,k);E?E(u.el,k,S):S()}else k()},Lt=(u,d)=>{let p;for(;u!==d;)p=h(u),i(u),u=p;i(d)},Mn=(u,d,p)=>{const{bum:_,scope:v,update:k,subTree:P,um:E}=u;_&&Lr(_),v.stop(),k&&(k.active=!1,_e(P,u,d,p)),E&&we(E,d),we(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ge=(u,d,p,_=!1,v=!1,k=0)=>{for(let P=k;P<u.length;P++)_e(u[P],d,p,_,v)},b=u=>u.shapeFlag&6?b(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el);let T=!1;const O=(u,d,p)=>{u==null?d._vnode&&_e(d._vnode,null,null,!0):R(d._vnode||null,u,d,null,null,null,p),T||(T=!0,ha(),rs(),T=!1),d._vnode=u},L={p:R,um:_e,m:$e,r:Mt,mt:nn,mc:he,pc:G,pbc:Oe,n:b,o:e};let q,re;return t&&([q,re]=t(L)),{render:O,hydrate:q,createApp:zc(O,q)}}function zr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function xt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Vc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ys(e,t,n=!1){const r=e.children,i=t.children;if(U(r)&&U(i))for(let a=0;a<r.length;a++){const o=r[a];let l=i[a];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[a]=lt(i[a]),l.el=o.el),n||ys(o,l)),l.type===Sr&&(l.el=o.el)}}function Gc(e){const t=e.slice(),n=[0];let r,i,a,o,l;const s=e.length;for(r=0;r<s;r++){const f=e[r];if(f!==0){if(i=n[n.length-1],e[i]<f){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)l=a+o>>1,e[n[l]]<f?a=l+1:o=l;f<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function _s(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:_s(t)}const qc=e=>e.__isTeleport,He=Symbol.for("v-fgt"),Sr=Symbol.for("v-txt"),Ot=Symbol.for("v-cmt"),er=Symbol.for("v-stc"),mn=[];let Ne=null;function ht(e=!1){mn.push(Ne=e?null:[])}function Xc(){mn.pop(),Ne=mn[mn.length-1]||null}let xn=1;function Sa(e){xn+=e}function xs(e){return e.dynamicChildren=xn>0?Ne||Ut:null,Xc(),xn>0&&Ne&&Ne.push(e),e}function Pt(e,t,n,r,i,a){return xs(Pe(e,t,n,r,i,a,!0))}function Qc(e,t,n,r,i){return xs(te(e,t,n,r,i,!0))}function si(e){return e?e.__v_isVNode===!0:!1}function an(e,t){return e.type===t.type&&e.key===t.key}const Ar="__vInternal",ws=({key:e})=>e??null,tr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?de(e)||ke(e)||B(e)?{i:Te,r:e,k:t,f:!!n}:e:null);function Pe(e,t=null,n=null,r=0,i=null,a=e===He?0:1,o=!1,l=!1){const s={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ws(t),ref:t&&tr(t),scopeId:Er,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Te};return l?(Di(s,n),a&128&&e.normalize(s)):n&&(s.shapeFlag|=de(n)?8:16),xn>0&&!o&&Ne&&(s.patchFlag>0||a&6)&&s.patchFlag!==32&&Ne.push(s),s}const te=Jc;function Jc(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===mc)&&(e=Ot),si(e)){const l=qt(e,t,!0);return n&&Di(l,n),xn>0&&!a&&Ne&&(l.shapeFlag&6?Ne[Ne.indexOf(e)]=l:Ne.push(l)),l.patchFlag|=-2,l}if(df(e)&&(e=e.__vccOpts),t){t=Zc(t);let{class:l,style:s}=t;l&&!de(l)&&(t.class=br(l)),oe(s)&&(Go(s)&&!U(s)&&(s=me({},s)),t.style=Pi(s))}const o=de(e)?1:pc(e)?128:qc(e)?64:oe(e)?4:B(e)?2:0;return Pe(e,t,n,r,i,o,a,!0)}function Zc(e){return e?Go(e)||Ar in e?me({},e):e:null}function qt(e,t,n=!1){const{props:r,ref:i,patchFlag:a,children:o}=e,l=t?nf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&ws(l),ref:t&&t.ref?n&&i?U(i)?i.concat(tr(t)):[i,tr(t)]:tr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==He?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qt(e.ssContent),ssFallback:e.ssFallback&&qt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Es(e=" ",t=0){return te(Sr,null,e,t)}function ef(e,t){const n=te(er,null,e);return n.staticCount=t,n}function tf(e="",t=!1){return t?(ht(),Qc(Ot,null,e)):te(Ot,null,e)}function Ue(e){return e==null||typeof e=="boolean"?te(Ot):U(e)?te(He,null,e.slice()):typeof e=="object"?lt(e):te(Sr,null,String(e))}function lt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:qt(e)}function Di(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(U(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Di(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Ar in t)?t._ctx=Te:i===3&&Te&&(Te.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:Te},n=32):(t=String(t),r&64?(n=16,t=[Es(t)]):n=8);e.children=t,e.shapeFlag|=n}function nf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=br([t.class,r.class]));else if(i==="style")t.style=Pi([t.style,r.style]);else if(hr(i)){const a=t[i],o=r[i];o&&a!==o&&!(U(a)&&a.includes(o))&&(t[i]=a?[].concat(a,o):o)}else i!==""&&(t[i]=r[i])}return t}function De(e,t,n,r=null){Le(e,t,7,[n,r])}const rf=ms();let af=0;function of(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||rf,a={uid:af++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ps(r,i),emitsOptions:as(r,i),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=ac.bind(null,a),e.ce&&e.ce(a),a}let be=null,cr,li;{const e=To(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),a=>{i.length>1?i.forEach(o=>o(a)):i[0](a)}};cr=t("__VUE_INSTANCE_SETTERS__",n=>be=n),li=t("__VUE_SSR_SETTERS__",n=>Or=n)}const Cn=e=>{const t=be;return cr(e),e.scope.on(),()=>{e.scope.off(),cr(t)}},Aa=()=>{be&&be.scope.off(),cr(null)};function ks(e){return e.vnode.shapeFlag&4}let Or=!1;function sf(e,t=!1){t&&li(t);const{props:n,children:r}=e.vnode,i=ks(e);Dc(e,n,i,t),Bc(e,r);const a=i?lf(e,t):void 0;return t&&li(!1),a}function lf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=qo(new Proxy(e.ctx,Tc));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?ff(e):null,a=Cn(e);It();const o=dt(r,e,0,[e.props,i]);if(Tt(),a(),Co(o)){if(o.then(Aa,Aa),t)return o.then(l=>{Oa(e,l,t)}).catch(l=>{xr(l,e,0)});e.asyncDep=o}else Oa(e,o,t)}else Ss(e,t)}function Oa(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=Zo(t)),Ss(e,n)}let Pa;function Ss(e,t,n){const r=e.type;if(!e.render){if(!t&&Pa&&!r.render){const i=r.template||$i(e).template;if(i){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:l,compilerOptions:s}=r,f=me(me({isCustomElement:a,delimiters:l},o),s);r.render=Pa(i,f)}}e.render=r.render||Ce}{const i=Cn(e);It();try{Nc(e)}finally{Tt(),i()}}}function cf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ee(e,"get","$attrs"),t[n]}}))}function ff(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return cf(e)},slots:e.slots,emit:e.emit,expose:t}}function Hi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Zo(qo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in un)return un[n](e)},has(t,n){return n in t||n in un}}))}function uf(e,t=!0){return B(e)?e.displayName||e.name:e.name||t&&e.__name}function df(e){return B(e)&&"__vccOpts"in e}const ue=(e,t)=>Xl(e,t,Or);function Ui(e,t,n){const r=arguments.length;return r===2?oe(t)&&!U(t)?si(t)?te(e,null,[t]):te(e,t):te(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&si(n)&&(n=[n]),te(e,t,n))}const mf="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const hf="http://www.w3.org/2000/svg",pf="http://www.w3.org/1998/Math/MathML",ct=typeof document<"u"?document:null,Ca=ct&&ct.createElement("template"),gf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?ct.createElementNS(hf,e):t==="mathml"?ct.createElementNS(pf,e):ct.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>ct.createTextNode(e),createComment:e=>ct.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ct.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,a){const o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ca.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const l=Ca.content;if(r==="svg"||r==="mathml"){const s=l.firstChild;for(;s.firstChild;)l.appendChild(s.firstChild);l.removeChild(s)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},vf=Symbol("_vtc");function bf(e,t,n){const r=e[vf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ra=Symbol("_vod"),yf=Symbol("_vsh"),_f=Symbol(""),xf=/(^|;)\s*display\s*:/;function wf(e,t,n){const r=e.style,i=de(n);let a=!1;if(n&&!i){if(t)if(de(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&nr(r,l,"")}else for(const o in t)n[o]==null&&nr(r,o,"");for(const o in n)o==="display"&&(a=!0),nr(r,o,n[o])}else if(i){if(t!==n){const o=r[_f];o&&(n+=";"+o),r.cssText=n,a=xf.test(n)}}else t&&e.removeAttribute("style");Ra in e&&(e[Ra]=a?r.display:"",e[yf]&&(r.display="none"))}const Ia=/\s*!important$/;function nr(e,t,n){if(U(n))n.forEach(r=>nr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Ef(e,t);Ia.test(n)?e.setProperty(en(r),n.replace(Ia,""),"important"):e[r]=n}}const Ta=["Webkit","Moz","ms"],Dr={};function Ef(e,t){const n=Dr[t];if(n)return n;let r=Ke(t);if(r!=="filter"&&r in e)return Dr[t]=r;r=vr(r);for(let i=0;i<Ta.length;i++){const a=Ta[i]+r;if(a in e)return Dr[t]=a}return t}const Na="http://www.w3.org/1999/xlink";function kf(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Na,t.slice(6,t.length)):e.setAttributeNS(Na,t,n);else{const a=Al(t);n==null||a&&!No(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function Sf(e,t,n,r,i,a,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,a),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const f=l==="OPTION"?e.getAttribute("value")||"":e.value,c=n??"";(f!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=No(n):n==null&&f==="string"?(n="",s=!0):f==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function Af(e,t,n,r){e.addEventListener(t,n,r)}function Of(e,t,n,r){e.removeEventListener(t,n,r)}const Ma=Symbol("_vei");function Pf(e,t,n,r,i=null){const a=e[Ma]||(e[Ma]={}),o=a[t];if(r&&o)o.value=r;else{const[l,s]=Cf(t);if(r){const f=a[t]=Tf(r,i);Af(e,l,f,s)}else o&&(Of(e,l,o,s),a[t]=void 0)}}const La=/(?:Once|Passive|Capture)$/;function Cf(e){let t;if(La.test(e)){t={};let r;for(;r=e.match(La);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):en(e.slice(2)),t]}let Hr=0;const Rf=Promise.resolve(),If=()=>Hr||(Rf.then(()=>Hr=0),Hr=Date.now());function Tf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Le(Nf(r,n.value),t,5,[r])};return n.value=e,n.attached=If(),n}function Nf(e,t){if(U(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Fa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Mf=(e,t,n,r,i,a,o,l,s)=>{const f=i==="svg";t==="class"?bf(e,r,f):t==="style"?wf(e,n,r):hr(t)?Si(t)||Pf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Lf(e,t,r,f))?Sf(e,t,r,a,o,l,s):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),kf(e,t,r,f))};function Lf(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Fa(t)&&B(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Fa(t)&&de(n)?!1:t in e}const Ff=me({patchProp:Mf},gf);let ja;function jf(){return ja||(ja=Yc(Ff))}const $f=(...e)=>{const t=jf().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Df(r);if(!i)return;const a=t._component;!B(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,zf(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function zf(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Df(e){return de(e)?document.querySelector(e):e}/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const $t=typeof document<"u";function Hf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const X=Object.assign;function Ur(e,t){const n={};for(const r in t){const i=t[r];n[r]=Fe(i)?i.map(e):e(i)}return n}const hn=()=>{},Fe=Array.isArray,As=/#/g,Uf=/&/g,Bf=/\//g,Wf=/=/g,Yf=/\?/g,Os=/\+/g,Kf=/%5B/g,Vf=/%5D/g,Ps=/%5E/g,Gf=/%60/g,Cs=/%7B/g,qf=/%7C/g,Rs=/%7D/g,Xf=/%20/g;function Bi(e){return encodeURI(""+e).replace(qf,"|").replace(Kf,"[").replace(Vf,"]")}function Qf(e){return Bi(e).replace(Cs,"{").replace(Rs,"}").replace(Ps,"^")}function ci(e){return Bi(e).replace(Os,"%2B").replace(Xf,"+").replace(As,"%23").replace(Uf,"%26").replace(Gf,"`").replace(Cs,"{").replace(Rs,"}").replace(Ps,"^")}function Jf(e){return ci(e).replace(Wf,"%3D")}function Zf(e){return Bi(e).replace(As,"%23").replace(Yf,"%3F")}function eu(e){return e==null?"":Zf(e).replace(Bf,"%2F")}function wn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const tu=/\/$/,nu=e=>e.replace(tu,"");function Br(e,t,n="/"){let r,i={},a="",o="";const l=t.indexOf("#");let s=t.indexOf("?");return l<s&&l>=0&&(s=-1),s>-1&&(r=t.slice(0,s),a=t.slice(s+1,l>-1?l:t.length),i=e(a)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=ou(r??t,n),{fullPath:r+(a&&"?")+a+o,path:r,query:i,hash:wn(o)}}function ru(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function $a(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function iu(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Xt(t.matched[r],n.matched[i])&&Is(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Xt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Is(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!au(e[n],t[n]))return!1;return!0}function au(e,t){return Fe(e)?za(e,t):Fe(t)?za(t,e):e===t}function za(e,t){return Fe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function ou(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let a=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(o).join("/")}var En;(function(e){e.pop="pop",e.push="push"})(En||(En={}));var pn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(pn||(pn={}));function su(e){if(!e)if($t){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),nu(e)}const lu=/^[^#]+#/;function cu(e,t){return e.replace(lu,"#")+t}function fu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Pr=()=>({left:window.scrollX,top:window.scrollY});function uu(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=fu(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Da(e,t){return(history.state?history.state.position-t:-1)+e}const fi=new Map;function du(e,t){fi.set(e,t)}function mu(e){const t=fi.get(e);return fi.delete(e),t}let hu=()=>location.protocol+"//"+location.host;function Ts(e,t){const{pathname:n,search:r,hash:i}=t,a=e.indexOf("#");if(a>-1){let l=i.includes(e.slice(a))?e.slice(a).length:1,s=i.slice(l);return s[0]!=="/"&&(s="/"+s),$a(s,"")}return $a(n,e)+r+i}function pu(e,t,n,r){let i=[],a=[],o=null;const l=({state:h})=>{const g=Ts(e,location),A=n.value,R=t.value;let F=0;if(h){if(n.value=g,t.value=h,o&&o===A){o=null;return}F=R?h.position-R.position:0}else r(g);i.forEach(y=>{y(n.value,A,{delta:F,type:En.pop,direction:F?F>0?pn.forward:pn.back:pn.unknown})})};function s(){o=n.value}function f(h){i.push(h);const g=()=>{const A=i.indexOf(h);A>-1&&i.splice(A,1)};return a.push(g),g}function c(){const{history:h}=window;h.state&&h.replaceState(X({},h.state,{scroll:Pr()}),"")}function m(){for(const h of a)h();a=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:s,listen:f,destroy:m}}function Ha(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Pr():null}}function gu(e){const{history:t,location:n}=window,r={value:Ts(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(s,f,c){const m=e.indexOf("#"),h=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+s:hu()+e+s;try{t[c?"replaceState":"pushState"](f,"",h),i.value=f}catch(g){console.error(g),n[c?"replace":"assign"](h)}}function o(s,f){const c=X({},t.state,Ha(i.value.back,s,i.value.forward,!0),f,{position:i.value.position});a(s,c,!0),r.value=s}function l(s,f){const c=X({},i.value,t.state,{forward:s,scroll:Pr()});a(c.current,c,!0);const m=X({},Ha(r.value,s,null),{position:c.position+1},f);a(s,m,!1),r.value=s}return{location:r,state:i,push:l,replace:o}}function vu(e){e=su(e);const t=gu(e),n=pu(e,t.state,t.location,t.replace);function r(a,o=!0){o||n.pauseListeners(),history.go(a)}const i=X({location:"",base:e,go:r,createHref:cu.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function bu(e){return typeof e=="string"||e&&typeof e=="object"}function Ns(e){return typeof e=="string"||typeof e=="symbol"}const at={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ms=Symbol("");var Ua;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ua||(Ua={}));function Qt(e,t){return X(new Error,{type:e,[Ms]:!0},t)}function Ge(e,t){return e instanceof Error&&Ms in e&&(t==null||!!(e.type&t))}const Ba="[^/]+?",yu={sensitive:!1,strict:!1,start:!0,end:!0},_u=/[.+*?^${}()[\]/\\]/g;function xu(e,t){const n=X({},yu,t),r=[];let i=n.start?"^":"";const a=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(i+="/");for(let m=0;m<f.length;m++){const h=f[m];let g=40+(n.sensitive?.25:0);if(h.type===0)m||(i+="/"),i+=h.value.replace(_u,"\\$&"),g+=40;else if(h.type===1){const{value:A,repeatable:R,optional:F,regexp:y}=h;a.push({name:A,repeatable:R,optional:F});const x=y||Ba;if(x!==Ba){g+=10;try{new RegExp(`(${x})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${A}" (${x}): `+z.message)}}let C=R?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;m||(C=F&&f.length<2?`(?:/${C})`:"/"+C),F&&(C+="?"),i+=C,g+=20,F&&(g+=-8),R&&(g+=-20),x===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(f){const c=f.match(o),m={};if(!c)return null;for(let h=1;h<c.length;h++){const g=c[h]||"",A=a[h-1];m[A.name]=g&&A.repeatable?g.split("/"):g}return m}function s(f){let c="",m=!1;for(const h of e){(!m||!c.endsWith("/"))&&(c+="/"),m=!1;for(const g of h)if(g.type===0)c+=g.value;else if(g.type===1){const{value:A,repeatable:R,optional:F}=g,y=A in f?f[A]:"";if(Fe(y)&&!R)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const x=Fe(y)?y.join("/"):y;if(!x)if(F)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):m=!0);else throw new Error(`Missing required param "${A}"`);c+=x}}return c||"/"}return{re:o,score:r,keys:a,parse:l,stringify:s}}function wu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Eu(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const a=wu(r[n],i[n]);if(a)return a;n++}if(Math.abs(i.length-r.length)===1){if(Wa(r))return 1;if(Wa(i))return-1}return i.length-r.length}function Wa(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ku={type:0,value:""},Su=/[a-zA-Z0-9_]/;function Au(e){if(!e)return[[]];if(e==="/")return[[ku]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const i=[];let a;function o(){a&&i.push(a),a=[]}let l=0,s,f="",c="";function m(){f&&(n===0?a.push({type:0,value:f}):n===1||n===2||n===3?(a.length>1&&(s==="*"||s==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:f,regexp:c,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):t("Invalid state to consume buffer"),f="")}function h(){f+=s}for(;l<e.length;){if(s=e[l++],s==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:s==="/"?(f&&m(),o()):s===":"?(m(),n=1):h();break;case 4:h(),n=r;break;case 1:s==="("?n=2:Su.test(s)?h():(m(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&l--);break;case 2:s===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+s:n=3:c+=s;break;case 3:m(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&l--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),m(),o(),i}function Ou(e,t,n){const r=xu(Au(e.path),n),i=X(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Pu(e,t){const n=[],r=new Map;t=Va({strict:!1,end:!0,sensitive:!1},t);function i(c){return r.get(c)}function a(c,m,h){const g=!h,A=Cu(c);A.aliasOf=h&&h.record;const R=Va(t,c),F=[A];if("alias"in c){const C=typeof c.alias=="string"?[c.alias]:c.alias;for(const z of C)F.push(X({},A,{components:h?h.record.components:A.components,path:z,aliasOf:h?h.record:A}))}let y,x;for(const C of F){const{path:z}=C;if(m&&z[0]!=="/"){const W=m.record.path,$=W[W.length-1]==="/"?"":"/";C.path=m.record.path+(z&&$+z)}if(y=Ou(C,m,R),h?h.alias.push(y):(x=x||y,x!==y&&x.alias.push(y),g&&c.name&&!Ka(y)&&o(c.name)),A.children){const W=A.children;for(let $=0;$<W.length;$++)a(W[$],y,h&&h.children[$])}h=h||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&s(y)}return x?()=>{o(x)}:hn}function o(c){if(Ns(c)){const m=r.get(c);m&&(r.delete(c),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(c);m>-1&&(n.splice(m,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function l(){return n}function s(c){let m=0;for(;m<n.length&&Eu(c,n[m])>=0&&(c.record.path!==n[m].record.path||!Ls(c,n[m]));)m++;n.splice(m,0,c),c.record.name&&!Ka(c)&&r.set(c.record.name,c)}function f(c,m){let h,g={},A,R;if("name"in c&&c.name){if(h=r.get(c.name),!h)throw Qt(1,{location:c});R=h.record.name,g=X(Ya(m.params,h.keys.filter(x=>!x.optional).concat(h.parent?h.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),c.params&&Ya(c.params,h.keys.map(x=>x.name))),A=h.stringify(g)}else if(c.path!=null)A=c.path,h=n.find(x=>x.re.test(A)),h&&(g=h.parse(A),R=h.record.name);else{if(h=m.name?r.get(m.name):n.find(x=>x.re.test(m.path)),!h)throw Qt(1,{location:c,currentLocation:m});R=h.record.name,g=X({},m.params,c.params),A=h.stringify(g)}const F=[];let y=h;for(;y;)F.unshift(y.record),y=y.parent;return{name:R,path:A,params:g,matched:F,meta:Iu(F)}}return e.forEach(c=>a(c)),{addRoute:a,resolve:f,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function Ya(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Cu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ru(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Ru(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ka(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Iu(e){return e.reduce((t,n)=>X(t,n.meta),{})}function Va(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ls(e,t){return t.children.some(n=>n===e||Ls(e,n))}function Tu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const a=r[i].replace(Os," "),o=a.indexOf("="),l=wn(o<0?a:a.slice(0,o)),s=o<0?null:wn(a.slice(o+1));if(l in t){let f=t[l];Fe(f)||(f=t[l]=[f]),f.push(s)}else t[l]=s}return t}function Ga(e){let t="";for(let n in e){const r=e[n];if(n=Jf(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Fe(r)?r.map(a=>a&&ci(a)):[r&&ci(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function Nu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Fe(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const Mu=Symbol(""),qa=Symbol(""),Cr=Symbol(""),Fs=Symbol(""),ui=Symbol("");function on(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ft(e,t,n,r,i,a=o=>o()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((l,s)=>{const f=h=>{h===!1?s(Qt(4,{from:n,to:t})):h instanceof Error?s(h):bu(h)?s(Qt(2,{from:t,to:h})):(o&&r.enterCallbacks[i]===o&&typeof h=="function"&&o.push(h),l())},c=a(()=>e.call(r&&r.instances[i],t,n,f));let m=Promise.resolve(c);e.length<3&&(m=m.then(f)),m.catch(h=>s(h))})}function Wr(e,t,n,r,i=a=>a()){const a=[];for(const o of e)for(const l in o.components){let s=o.components[l];if(!(t!=="beforeRouteEnter"&&!o.instances[l]))if(Lu(s)){const c=(s.__vccOpts||s)[t];c&&a.push(ft(c,n,r,o,l,i))}else{let f=s();a.push(()=>f.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${o.path}"`));const m=Hf(c)?c.default:c;o.components[l]=m;const g=(m.__vccOpts||m)[t];return g&&ft(g,n,r,o,l,i)()}))}}return a}function Lu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Xa(e){const t=Ye(Cr),n=Ye(Fs),r=ue(()=>t.resolve(Yt(e.to))),i=ue(()=>{const{matched:s}=r.value,{length:f}=s,c=s[f-1],m=n.matched;if(!c||!m.length)return-1;const h=m.findIndex(Xt.bind(null,c));if(h>-1)return h;const g=Qa(s[f-2]);return f>1&&Qa(c)===g&&m[m.length-1].path!==g?m.findIndex(Xt.bind(null,s[f-2])):h}),a=ue(()=>i.value>-1&&zu(n.params,r.value.params)),o=ue(()=>i.value>-1&&i.value===n.matched.length-1&&Is(n.params,r.value.params));function l(s={}){return $u(s)?t[Yt(e.replace)?"replace":"push"](Yt(e.to)).catch(hn):Promise.resolve()}return{route:r,href:ue(()=>r.value.href),isActive:a,isExactActive:o,navigate:l}}const Fu=bt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xa,setup(e,{slots:t}){const n=_r(Xa(e)),{options:r}=Ye(Cr),i=ue(()=>({[Ja(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ja(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:Ui("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},a)}}}),ju=Fu;function $u(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function zu(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Fe(i)||i.length!==r.length||r.some((a,o)=>a!==i[o]))return!1}return!0}function Qa(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ja=(e,t,n)=>e??t??n,Du=bt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ye(ui),i=ue(()=>e.route||r.value),a=Ye(qa,0),o=ue(()=>{let f=Yt(a);const{matched:c}=i.value;let m;for(;(m=c[f])&&!m.components;)f++;return f}),l=ue(()=>i.value.matched[o.value]);Zn(qa,ue(()=>o.value+1)),Zn(Mu,l),Zn(ui,i);const s=Qn();return fn(()=>[s.value,l.value,e.name],([f,c,m],[h,g,A])=>{c&&(c.instances[m]=f,g&&g!==c&&f&&f===h&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!Xt(c,g)||!h)&&(c.enterCallbacks[m]||[]).forEach(R=>R(f))},{flush:"post"}),()=>{const f=i.value,c=e.name,m=l.value,h=m&&m.components[c];if(!h)return Za(n.default,{Component:h,route:f});const g=m.props[c],A=g?g===!0?f.params:typeof g=="function"?g(f):g:null,F=Ui(h,X({},A,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(m.instances[c]=null)},ref:s}));return Za(n.default,{Component:F,route:f})||F}}});function Za(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Hu=Du;function Uu(e){const t=Pu(e.routes,e),n=e.parseQuery||Tu,r=e.stringifyQuery||Ga,i=e.history,a=on(),o=on(),l=on(),s=Ql(at);let f=at;$t&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Ur.bind(null,b=>""+b),m=Ur.bind(null,eu),h=Ur.bind(null,wn);function g(b,T){let O,L;return Ns(b)?(O=t.getRecordMatcher(b),L=T):L=b,t.addRoute(L,O)}function A(b){const T=t.getRecordMatcher(b);T&&t.removeRoute(T)}function R(){return t.getRoutes().map(b=>b.record)}function F(b){return!!t.getRecordMatcher(b)}function y(b,T){if(T=X({},T||s.value),typeof b=="string"){const d=Br(n,b,T.path),p=t.resolve({path:d.path},T),_=i.createHref(d.fullPath);return X(d,p,{params:h(p.params),hash:wn(d.hash),redirectedFrom:void 0,href:_})}let O;if(b.path!=null)O=X({},b,{path:Br(n,b.path,T.path).path});else{const d=X({},b.params);for(const p in d)d[p]==null&&delete d[p];O=X({},b,{params:m(d)}),T.params=m(T.params)}const L=t.resolve(O,T),q=b.hash||"";L.params=c(h(L.params));const re=ru(r,X({},b,{hash:Qf(q),path:L.path})),u=i.createHref(re);return X({fullPath:re,hash:q,query:r===Ga?Nu(b.query):b.query||{}},L,{redirectedFrom:void 0,href:u})}function x(b){return typeof b=="string"?Br(n,b,s.value.path):X({},b)}function C(b,T){if(f!==b)return Qt(8,{from:T,to:b})}function z(b){return Z(b)}function W(b){return z(X(x(b),{replace:!0}))}function $(b){const T=b.matched[b.matched.length-1];if(T&&T.redirect){const{redirect:O}=T;let L=typeof O=="function"?O(b):O;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=x(L):{path:L},L.params={}),X({query:b.query,hash:b.hash,params:L.path!=null?{}:b.params},L)}}function Z(b,T){const O=f=y(b),L=s.value,q=b.state,re=b.force,u=b.replace===!0,d=$(O);if(d)return Z(X(x(d),{state:typeof d=="object"?X({},q,d.state):q,force:re,replace:u}),T||O);const p=O;p.redirectedFrom=T;let _;return!re&&iu(r,L,O)&&(_=Qt(16,{to:p,from:L}),$e(L,L,!0,!1)),(_?Promise.resolve(_):Oe(p,L)).catch(v=>Ge(v)?Ge(v,2)?v:rt(v):G(v,p,L)).then(v=>{if(v){if(Ge(v,2))return Z(X({replace:u},x(v.to),{state:typeof v.to=="object"?X({},q,v.to.state):q,force:re}),T||p)}else v=yt(p,L,!0,u,q);return nt(p,L,v),v})}function he(b,T){const O=C(b,T);return O?Promise.reject(O):Promise.resolve()}function pe(b){const T=Lt.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(b):b()}function Oe(b,T){let O;const[L,q,re]=Bu(b,T);O=Wr(L.reverse(),"beforeRouteLeave",b,T);for(const d of L)d.leaveGuards.forEach(p=>{O.push(ft(p,b,T))});const u=he.bind(null,b,T);return O.push(u),ge(O).then(()=>{O=[];for(const d of a.list())O.push(ft(d,b,T));return O.push(u),ge(O)}).then(()=>{O=Wr(q,"beforeRouteUpdate",b,T);for(const d of q)d.updateGuards.forEach(p=>{O.push(ft(p,b,T))});return O.push(u),ge(O)}).then(()=>{O=[];for(const d of re)if(d.beforeEnter)if(Fe(d.beforeEnter))for(const p of d.beforeEnter)O.push(ft(p,b,T));else O.push(ft(d.beforeEnter,b,T));return O.push(u),ge(O)}).then(()=>(b.matched.forEach(d=>d.enterCallbacks={}),O=Wr(re,"beforeRouteEnter",b,T,pe),O.push(u),ge(O))).then(()=>{O=[];for(const d of o.list())O.push(ft(d,b,T));return O.push(u),ge(O)}).catch(d=>Ge(d,8)?d:Promise.reject(d))}function nt(b,T,O){l.list().forEach(L=>pe(()=>L(b,T,O)))}function yt(b,T,O,L,q){const re=C(b,T);if(re)return re;const u=T===at,d=$t?history.state:{};O&&(L||u?i.replace(b.fullPath,X({scroll:u&&d&&d.scroll},q)):i.push(b.fullPath,q)),s.value=b,$e(b,T,O,u),rt()}let je;function nn(){je||(je=i.listen((b,T,O)=>{if(!Mn.listening)return;const L=y(b),q=$(L);if(q){Z(X(q,{replace:!0}),L).catch(hn);return}f=L;const re=s.value;$t&&du(Da(re.fullPath,O.delta),Pr()),Oe(L,re).catch(u=>Ge(u,12)?u:Ge(u,2)?(Z(u.to,L).then(d=>{Ge(d,20)&&!O.delta&&O.type===En.pop&&i.go(-1,!1)}).catch(hn),Promise.reject()):(O.delta&&i.go(-O.delta,!1),G(u,L,re))).then(u=>{u=u||yt(L,re,!1),u&&(O.delta&&!Ge(u,8)?i.go(-O.delta,!1):O.type===En.pop&&Ge(u,20)&&i.go(-1,!1)),nt(L,re,u)}).catch(hn)}))}let Nt=on(),ce=on(),Q;function G(b,T,O){rt(b);const L=ce.list();return L.length?L.forEach(q=>q(b,T,O)):console.error(b),Promise.reject(b)}function Ve(){return Q&&s.value!==at?Promise.resolve():new Promise((b,T)=>{Nt.add([b,T])})}function rt(b){return Q||(Q=!b,nn(),Nt.list().forEach(([T,O])=>b?O(b):T()),Nt.reset()),b}function $e(b,T,O,L){const{scrollBehavior:q}=e;if(!$t||!q)return Promise.resolve();const re=!O&&mu(Da(b.fullPath,0))||(L||!O)&&history.state&&history.state.scroll||null;return ts().then(()=>q(b,T,re)).then(u=>u&&uu(u)).catch(u=>G(u,b,T))}const _e=b=>i.go(b);let Mt;const Lt=new Set,Mn={currentRoute:s,listening:!0,addRoute:g,removeRoute:A,hasRoute:F,getRoutes:R,resolve:y,options:e,push:z,replace:W,go:_e,back:()=>_e(-1),forward:()=>_e(1),beforeEach:a.add,beforeResolve:o.add,afterEach:l.add,onError:ce.add,isReady:Ve,install(b){const T=this;b.component("RouterLink",ju),b.component("RouterView",Hu),b.config.globalProperties.$router=T,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Yt(s)}),$t&&!Mt&&s.value===at&&(Mt=!0,z(i.location).catch(q=>{}));const O={};for(const q in at)Object.defineProperty(O,q,{get:()=>s.value[q],enumerable:!0});b.provide(Cr,T),b.provide(Fs,Ko(O)),b.provide(ui,s);const L=b.unmount;Lt.add(b),b.unmount=function(){Lt.delete(b),Lt.size<1&&(f=at,je&&je(),je=null,s.value=at,Mt=!1,Q=!1),L()}}};function ge(b){return b.reduce((T,O)=>T.then(()=>pe(O)),Promise.resolve())}return Mn}function Bu(e,t){const n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){const l=t.matched[o];l&&(e.matched.find(f=>Xt(f,l))?r.push(l):n.push(l));const s=e.matched[o];s&&(t.matched.find(f=>Xt(f,s))||i.push(s))}return[n,r,i]}function Wu(){return Ye(Cr)}const Yu={id:"Navbar"},Ku=bt({__name:"Navbar",setup(e){const t=Wu(),n=()=>{t.push("/")},r=()=>{t.push("/resume")},i=()=>{t.push("/profile")},a=()=>{t.push("/travel")};return(o,l)=>(ht(),Pt("div",Yu,[Pe("div",{class:"nav-title"},[Pe("div",{class:"a-link",onClick:n},"Home"),Pe("div",{class:"a-link",onClick:r},"Resume"),Pe("div",{class:"a-link",onClick:i},"Profile"),Pe("div",{class:"a-link",onClick:a},"Travel")])]))}}),Rn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},Vu=Rn(Ku,[["__scopeId","data-v-649cefb3"]]),Gu=bt({__name:"App",setup(e){return(t,n)=>{const r=ti("RouterView"),i=ti("ZTag");return ht(),Pt(He,null,[te(Vu),te(r),te(i)],64)}}}),qu="/assets/500704706730393764-CtoBJG3k.jpg",Xu={id:"Experience"},Qu=ef('<h3 data-v-132924f2>Experience</h3><div class="area" data-v-132924f2><ul class="tiemCircle" data-v-132924f2><li data-v-132924f2><div class="title" data-v-132924f2>2024/02-2024/07<div class="content-title" data-v-132924f2>國泰人壽保險股份有限公司</div><div class="content-detail" data-v-132924f2>前端實習生</div></div></li><li data-v-132924f2><div class="title" data-v-132924f2>2022/09-2023/11<div class="content-title" data-v-132924f2>八曜和茶國際有限公司</div><div class="content-detail" data-v-132924f2>外場工讀生（勤美門市）</div></div></li><li data-v-132924f2><div class="title" data-v-132924f2>2022/02-2022/07<div class="content-title" data-v-132924f2>泰爾科技股份有限公司</div><div class="content-detail" data-v-132924f2>前端實習生</div></div></li><li data-v-132924f2><div class="title" data-v-132924f2>2021/09-2021/12<div class="content-title" data-v-132924f2>台中科技大學 就業輔導組</div><div class="content-detail" data-v-132924f2>專案助理工讀生</div></div></li><li data-v-132924f2><div class="title" data-v-132924f2>2020/07-2021/07<div class="content-title" data-v-132924f2>平祿壽司</div><div class="content-detail" data-v-132924f2>外場工讀生</div></div></li></ul></div>',2),Ju=[Qu];function Zu(e,t){return ht(),Pt("div",Xu,Ju)}const ed={},td=Rn(ed,[["render",Zu],["__scopeId","data-v-132924f2"]]),js=e=>(oc("data-v-4b412f28"),e=e(),sc(),e),nd={id:"Index"},rd=js(()=>Pe("img",{class:"img-title",src:qu},null,-1)),id=js(()=>Pe("h1",null,"My Work",-1)),ad=bt({__name:"index",setup(e){return(t,n)=>(ht(),Pt("div",nd,[rd,id,te(td)]))}}),od=Rn(ad,[["__scopeId","data-v-4b412f28"]]),sd={id:"ZTag"},ld={key:0,class:"icon-left"},cd=bt({__name:"ZTag",props:{iconColor:{type:String,default:""},tagText:{type:String,default:""},tagIcon:{type:String,default:null}},setup(e){const t=e,n=ue(()=>t.iconColor);return(r,i)=>{const a=ti("font-awesome-icon");return ht(),Pt("div",sd,[Pe("div",{class:br(["tag-area",n.value])},[e.tagIcon?(ht(),Pt("div",ld,[te(a,{icon:e.tagIcon},null,8,["icon"])])):tf("",!0),Pe("div",null,Ol(t.tagText),1)],2)])}}}),jt=Rn(cd,[["__scopeId","data-v-f7b5a179"]]),fd={id:"Components"},ud={class:"tag-area"},dd=bt({__name:"components",setup(e){const t=Qn("secondary"),n=Qn("Default Tag Text"),r=Qn("user-secret");return(i,a)=>(ht(),Pt("div",fd,[Pe("h3",ud,[Es("tagComponent"),te(jt,{iconColor:"primary",tagText:"primary"}),te(jt,{iconColor:"secondary",tagText:"secondary"}),te(jt,{iconColor:"info",tagText:"info"}),te(jt,{iconColor:"danger",tagText:"danger"}),te(jt,{iconColor:"warning",tagText:"warning"}),te(jt,{iconColor:t.value,tagText:n.value,tagIcon:r.value},null,8,["iconColor","tagText","tagIcon"])])]))}}),md=Rn(dd,[["__scopeId","data-v-1f8e7a9f"]]),hd=vu(),pd=Uu({history:hd,routes:[{path:"/",component:od},{path:"/componentStyle",component:md}]});function eo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?eo(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fr(e){"@babel/helpers - typeof";return fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fr(e)}function gd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function to(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function vd(e,t,n){return t&&to(e.prototype,t),n&&to(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wi(e,t){return yd(e)||xd(e,t)||$s(e,t)||Ed()}function In(e){return bd(e)||_d(e)||$s(e)||wd()}function bd(e){if(Array.isArray(e))return di(e)}function yd(e){if(Array.isArray(e))return e}function _d(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,l;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(s){a=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw l}}return r}}function $s(e,t){if(e){if(typeof e=="string")return di(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return di(e,t)}}function di(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function wd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ed(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var no=function(){},Yi={},zs={},Ds=null,Hs={mark:no,measure:no};try{typeof window<"u"&&(Yi=window),typeof document<"u"&&(zs=document),typeof MutationObserver<"u"&&(Ds=MutationObserver),typeof performance<"u"&&(Hs=performance)}catch{}var kd=Yi.navigator||{},ro=kd.userAgent,io=ro===void 0?"":ro,pt=Yi,ne=zs,ao=Ds,Hn=Hs;pt.document;var tt=!!ne.documentElement&&!!ne.head&&typeof ne.addEventListener=="function"&&typeof ne.createElement=="function",Us=~io.indexOf("MSIE")||~io.indexOf("Trident/"),Un,Bn,Wn,Yn,Kn,Qe="___FONT_AWESOME___",mi=16,Bs="fa",Ws="svg-inline--fa",Ct="data-fa-i2svg",hi="data-fa-pseudo-element",Sd="data-fa-pseudo-element-pending",Ki="data-prefix",Vi="data-icon",oo="fontawesome-i2svg",Ad="async",Od=["HTML","HEAD","STYLE","SCRIPT"],Ys=function(){try{return!0}catch{return!1}}(),ee="classic",se="sharp",Gi=[ee,se];function Tn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ee]}})}var kn=Tn((Un={},le(Un,ee,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),le(Un,se,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Un)),Sn=Tn((Bn={},le(Bn,ee,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),le(Bn,se,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Bn)),An=Tn((Wn={},le(Wn,ee,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),le(Wn,se,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Wn)),Pd=Tn((Yn={},le(Yn,ee,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),le(Yn,se,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Yn)),Cd=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Ks="fa-layers-text",Rd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Id=Tn((Kn={},le(Kn,ee,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),le(Kn,se,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Kn)),Vs=[1,2,3,4,5,6,7,8,9,10],Td=Vs.concat([11,12,13,14,15,16,17,18,19,20]),Nd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},On=new Set;Object.keys(Sn[ee]).map(On.add.bind(On));Object.keys(Sn[se]).map(On.add.bind(On));var Md=[].concat(Gi,In(On),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Et.GROUP,Et.SWAP_OPACITY,Et.PRIMARY,Et.SECONDARY]).concat(Vs.map(function(e){return"".concat(e,"x")})).concat(Td.map(function(e){return"w-".concat(e)})),gn=pt.FontAwesomeConfig||{};function Ld(e){var t=ne.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Fd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ne&&typeof ne.querySelector=="function"){var jd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];jd.forEach(function(e){var t=Wi(e,2),n=t[0],r=t[1],i=Fd(Ld(n));i!=null&&(gn[r]=i)})}var Gs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Bs,replacementClass:Ws,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};gn.familyPrefix&&(gn.cssPrefix=gn.familyPrefix);var Jt=I(I({},Gs),gn);Jt.autoReplaceSvg||(Jt.observeMutations=!1);var M={};Object.keys(Gs).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Jt[e]=n,vn.forEach(function(r){return r(M)})},get:function(){return Jt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Jt.cssPrefix=t,vn.forEach(function(n){return n(M)})},get:function(){return Jt.cssPrefix}});pt.FontAwesomeConfig=M;var vn=[];function $d(e){return vn.push(e),function(){vn.splice(vn.indexOf(e),1)}}var ot=mi,We={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zd(e){if(!(!e||!tt)){var t=ne.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ne.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return ne.head.insertBefore(t,r),e}}var Dd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Pn(){for(var e=12,t="";e-- >0;)t+=Dd[Math.random()*62|0];return t}function tn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function qi(e){return e.classList?tn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function qs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Hd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(qs(e[n]),'" ')},"").trim()}function Rr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Xi(e){return e.size!==We.size||e.x!==We.x||e.y!==We.y||e.rotate!==We.rotate||e.flipX||e.flipY}function Ud(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(a," ").concat(o," ").concat(l)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:f}}function Bd(e){var t=e.transform,n=e.width,r=n===void 0?mi:n,i=e.height,a=i===void 0?mi:i,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&Us?s+="translate(".concat(t.x/ot-r/2,"em, ").concat(t.y/ot-a/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/ot,"em), calc(-50% + ").concat(t.y/ot,"em)) "):s+="translate(".concat(t.x/ot,"em, ").concat(t.y/ot,"em) "),s+="scale(".concat(t.size/ot*(t.flipX?-1:1),", ").concat(t.size/ot*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Wd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Xs(){var e=Bs,t=Ws,n=M.cssPrefix,r=M.replacementClass,i=Wd;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var so=!1;function Yr(){M.autoAddCss&&!so&&(zd(Xs()),so=!0)}var Yd={mixout:function(){return{dom:{css:Xs,insertCss:Yr}}},hooks:function(){return{beforeDOMElementCreation:function(){Yr()},beforeI2svg:function(){Yr()}}}},Je=pt||{};Je[Qe]||(Je[Qe]={});Je[Qe].styles||(Je[Qe].styles={});Je[Qe].hooks||(Je[Qe].hooks={});Je[Qe].shims||(Je[Qe].shims=[]);var Me=Je[Qe],Qs=[],Kd=function e(){ne.removeEventListener("DOMContentLoaded",e),ur=1,Qs.map(function(t){return t()})},ur=!1;tt&&(ur=(ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ne.readyState),ur||ne.addEventListener("DOMContentLoaded",Kd));function Vd(e){tt&&(ur?setTimeout(e,0):Qs.push(e))}function Nn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?qs(e):"<".concat(t," ").concat(Hd(r),">").concat(a.map(Nn).join(""),"</").concat(t,">")}function lo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Gd=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Kr=function(t,n,r,i){var a=Object.keys(t),o=a.length,l=i!==void 0?Gd(n,i):n,s,f,c;for(r===void 0?(s=1,c=t[a[0]]):(s=0,c=r);s<o;s++)f=a[s],c=l(c,t[f],f,t);return c};function qd(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function pi(e){var t=qd(e);return t.length===1?t[0].toString(16):null}function Xd(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function co(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function gi(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=co(t);typeof Me.hooks.addPack=="function"&&!i?Me.hooks.addPack(e,co(t)):Me.styles[e]=I(I({},Me.styles[e]||{}),a),e==="fas"&&gi("fa",t)}var Vn,Gn,qn,Dt=Me.styles,Qd=Me.shims,Jd=(Vn={},le(Vn,ee,Object.values(An[ee])),le(Vn,se,Object.values(An[se])),Vn),Qi=null,Js={},Zs={},el={},tl={},nl={},Zd=(Gn={},le(Gn,ee,Object.keys(kn[ee])),le(Gn,se,Object.keys(kn[se])),Gn);function em(e){return~Md.indexOf(e)}function tm(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!em(i)?i:null}var rl=function(){var t=function(a){return Kr(Dt,function(o,l,s){return o[s]=Kr(l,a,{}),o},{})};Js=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var l=a[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){i[s.toString(16)]=o})}return i}),Zs=t(function(i,a,o){if(i[o]=o,a[2]){var l=a[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){i[s]=o})}return i}),nl=t(function(i,a,o){var l=a[2];return i[o]=o,l.forEach(function(s){i[s]=o}),i});var n="far"in Dt||M.autoFetchSvg,r=Kr(Qd,function(i,a){var o=a[0],l=a[1],s=a[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(i.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:l,iconName:s}),i},{names:{},unicodes:{}});el=r.names,tl=r.unicodes,Qi=Ir(M.styleDefault,{family:M.familyDefault})};$d(function(e){Qi=Ir(e.styleDefault,{family:M.familyDefault})});rl();function Ji(e,t){return(Js[e]||{})[t]}function nm(e,t){return(Zs[e]||{})[t]}function kt(e,t){return(nl[e]||{})[t]}function il(e){return el[e]||{prefix:null,iconName:null}}function rm(e){var t=tl[e],n=Ji("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function gt(){return Qi}var Zi=function(){return{prefix:null,iconName:null,rest:[]}};function Ir(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ee:n,i=kn[r][e],a=Sn[r][e]||Sn[r][i],o=e in Me.styles?e:null;return a||o||null}var fo=(qn={},le(qn,ee,Object.keys(An[ee])),le(qn,se,Object.keys(An[se])),qn);function Tr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},le(t,ee,"".concat(M.cssPrefix,"-").concat(ee)),le(t,se,"".concat(M.cssPrefix,"-").concat(se)),t),o=null,l=ee;(e.includes(a[ee])||e.some(function(f){return fo[ee].includes(f)}))&&(l=ee),(e.includes(a[se])||e.some(function(f){return fo[se].includes(f)}))&&(l=se);var s=e.reduce(function(f,c){var m=tm(M.cssPrefix,c);if(Dt[c]?(c=Jd[l].includes(c)?Pd[l][c]:c,o=c,f.prefix=c):Zd[l].indexOf(c)>-1?(o=c,f.prefix=Ir(c,{family:l})):m?f.iconName=m:c!==M.replacementClass&&c!==a[ee]&&c!==a[se]&&f.rest.push(c),!i&&f.prefix&&f.iconName){var h=o==="fa"?il(f.iconName):{},g=kt(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||g||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!Dt.far&&Dt.fas&&!M.autoFetchSvg&&(f.prefix="fas")}return f},Zi());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===se&&(Dt.fass||M.autoFetchSvg)&&(s.prefix="fass",s.iconName=kt(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=gt()||"fas"),s}var im=function(){function e(){gd(this,e),this.definitions={}}return vd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=I(I({},n.definitions[l]||{}),o[l]),gi(l,o[l]);var s=An[ee][l];s&&gi(s,o[l]),rl()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],l=o.prefix,s=o.iconName,f=o.icon,c=f[2];n[l]||(n[l]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[l][m]=f)}),n[l][s]=f}),n}}]),e}(),uo=[],Ht={},Vt={},am=Object.keys(Vt);function om(e,t){var n=t.mixoutsTo;return uo=e,Ht={},Object.keys(Vt).forEach(function(r){am.indexOf(r)===-1&&delete Vt[r]}),uo.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),fr(i[o])==="object"&&Object.keys(i[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=i[o][l]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Ht[o]||(Ht[o]=[]),Ht[o].push(a[o])})}r.provides&&r.provides(Vt)}),n}function vi(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Ht[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Rt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Ht[e]||[];i.forEach(function(a){a.apply(null,n)})}function Ze(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Vt[e]?Vt[e].apply(null,t):void 0}function bi(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||gt();if(t)return t=kt(n,t)||t,lo(al.definitions,n,t)||lo(Me.styles,n,t)}var al=new im,sm=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Rt("noAuto")},lm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return tt?(Rt("beforeI2svg",t),Ze("pseudoElements2svg",t),Ze("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Vd(function(){fm({autoReplaceSvgRoot:n}),Rt("watch",t)})}},cm={icon:function(t){if(t===null)return null;if(fr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:kt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ir(t[0]);return{prefix:r,iconName:kt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(Cd))){var i=Tr(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||gt(),iconName:kt(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=gt();return{prefix:a,iconName:kt(a,t)||t}}}},Ae={noAuto:sm,config:M,dom:lm,parse:cm,library:al,findIconDefinition:bi,toHtml:Nn},fm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ne:n;(Object.keys(Me.styles).length>0||M.autoFetchSvg)&&tt&&M.autoReplaceSvg&&Ae.dom.i2svg({node:r})};function Nr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Nn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(tt){var r=ne.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function um(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Xi(o)&&n.found&&!r.found){var l=n.width,s=n.height,f={x:l/s/2,y:.5};i.style=Rr(I(I({},a),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function dm(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},i),{},{id:o}),children:r}]}]}function ea(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,l=e.symbol,s=e.title,f=e.maskId,c=e.titleId,m=e.extra,h=e.watchable,g=h===void 0?!1:h,A=r.found?r:n,R=A.width,F=A.height,y=i==="fak",x=[M.replacementClass,a?"".concat(M.cssPrefix,"-").concat(a):""].filter(function(pe){return m.classes.indexOf(pe)===-1}).filter(function(pe){return pe!==""||!!pe}).concat(m.classes).join(" "),C={children:[],attributes:I(I({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:x,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(F)})},z=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(R/F*16*.0625,"em")}:{};g&&(C.attributes[Ct]=""),s&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(c||Pn())},children:[s]}),delete C.attributes.title);var W=I(I({},C),{},{prefix:i,iconName:a,main:n,mask:r,maskId:f,transform:o,symbol:l,styles:I(I({},z),m.styles)}),$=r.found&&n.found?Ze("generateAbstractMask",W)||{children:[],attributes:{}}:Ze("generateAbstractIcon",W)||{children:[],attributes:{}},Z=$.children,he=$.attributes;return W.children=Z,W.attributes=he,l?dm(W):um(W)}function mo(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,f=I(I(I({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});s&&(f[Ct]="");var c=I({},o.styles);Xi(i)&&(c.transform=Bd({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var m=Rr(c);m.length>0&&(f.style=m);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function mm(e){var t=e.content,n=e.title,r=e.extra,i=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Rr(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Vr=Me.styles;function yi(e){var t=e[0],n=e[1],r=e.slice(4),i=Wi(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(Et.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Et.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Et.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var hm={found:!1,width:512,height:512};function pm(e,t){!Ys&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function _i(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=gt()),new Promise(function(r,i){if(Ze("missingIconAbstract"),n==="fa"){var a=il(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Vr[t]&&Vr[t][e]){var o=Vr[t][e];return r(yi(o))}pm(e,t),r(I(I({},hm),{},{icon:M.showMissingIcons&&e?Ze("missingIconAbstract")||{}:{}}))})}var ho=function(){},xi=M.measurePerformance&&Hn&&Hn.mark&&Hn.measure?Hn:{mark:ho,measure:ho},ln='FA "6.5.1"',gm=function(t){return xi.mark("".concat(ln," ").concat(t," begins")),function(){return ol(t)}},ol=function(t){xi.mark("".concat(ln," ").concat(t," ends")),xi.measure("".concat(ln," ").concat(t),"".concat(ln," ").concat(t," begins"),"".concat(ln," ").concat(t," ends"))},ta={begin:gm,end:ol},rr=function(){};function po(e){var t=e.getAttribute?e.getAttribute(Ct):null;return typeof t=="string"}function vm(e){var t=e.getAttribute?e.getAttribute(Ki):null,n=e.getAttribute?e.getAttribute(Vi):null;return t&&n}function bm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function ym(){if(M.autoReplaceSvg===!0)return ir.replace;var e=ir[M.autoReplaceSvg];return e||ir.replace}function _m(e){return ne.createElementNS("http://www.w3.org/2000/svg",e)}function xm(e){return ne.createElement(e)}function sl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?_m:xm:n;if(typeof e=="string")return ne.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(sl(o,{ceFn:r}))}),i}function wm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ir={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(sl(i),n)}),n.getAttribute(Ct)===null&&M.keepOriginalSource){var r=ne.createComment(wm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~qi(n).indexOf(M.replacementClass))return ir.replace(t);var i=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(l,s){return s===M.replacementClass||s.match(i)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(l){return Nn(l)}).join(`
`);n.setAttribute(Ct,""),n.innerHTML=o}};function go(e){e()}function ll(e,t){var n=typeof t=="function"?t:rr;if(e.length===0)n();else{var r=go;M.mutateApproach===Ad&&(r=pt.requestAnimationFrame||go),r(function(){var i=ym(),a=ta.begin("mutate");e.map(i),a(),n()})}}var na=!1;function cl(){na=!0}function wi(){na=!1}var dr=null;function vo(e){if(ao&&M.observeMutations){var t=e.treeCallback,n=t===void 0?rr:t,r=e.nodeCallback,i=r===void 0?rr:r,a=e.pseudoElementsCallback,o=a===void 0?rr:a,l=e.observeMutationsRoot,s=l===void 0?ne:l;dr=new ao(function(f){if(!na){var c=gt();tn(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!po(m.addedNodes[0])&&(M.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&M.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&po(m.target)&&~Nd.indexOf(m.attributeName))if(m.attributeName==="class"&&vm(m.target)){var h=Tr(qi(m.target)),g=h.prefix,A=h.iconName;m.target.setAttribute(Ki,g||c),A&&m.target.setAttribute(Vi,A)}else bm(m.target)&&i(m.target)})}}),tt&&dr.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Em(){dr&&dr.disconnect()}function km(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],l=a.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function Sm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Tr(qi(e));return i.prefix||(i.prefix=gt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=nm(i.prefix,e.innerText)||Ji(i.prefix,pi(e.innerText))),!i.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Am(e){var t=tn(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Pn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Om(){return{iconName:null,title:null,titleId:null,prefix:null,transform:We,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function bo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Sm(e),r=n.iconName,i=n.prefix,a=n.rest,o=Am(e),l=vi("parseNodeAttributes",{},e),s=t.styleParser?km(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:We,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o}},l)}var Pm=Me.styles;function fl(e){var t=M.autoReplaceSvg==="nest"?bo(e,{styleParser:!1}):bo(e);return~t.extra.classes.indexOf(Ks)?Ze("generateLayersText",e,t):Ze("generateSvgReplacementMutation",e,t)}var vt=new Set;Gi.map(function(e){vt.add("fa-".concat(e))});Object.keys(kn[ee]).map(vt.add.bind(vt));Object.keys(kn[se]).map(vt.add.bind(vt));vt=In(vt);function yo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!tt)return Promise.resolve();var n=ne.documentElement.classList,r=function(m){return n.add("".concat(oo,"-").concat(m))},i=function(m){return n.remove("".concat(oo,"-").concat(m))},a=M.autoFetchSvg?vt:Gi.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Pm));a.includes("fa")||a.push("fa");var o=[".".concat(Ks,":not([").concat(Ct,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(Ct,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=tn(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var s=ta.begin("onTree"),f=l.reduce(function(c,m){try{var h=fl(m);h&&c.push(h)}catch(g){Ys||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,m){Promise.all(f).then(function(h){ll(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),c()})}).catch(function(h){s(),m(h)})})}function Cm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fl(e).then(function(n){n&&ll([n],t)})}function Rm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:bi(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:bi(i||{})),e(r,I(I({},n),{},{mask:i}))}}var Im=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?We:r,a=n.symbol,o=a===void 0?!1:a,l=n.mask,s=l===void 0?null:l,f=n.maskId,c=f===void 0?null:f,m=n.title,h=m===void 0?null:m,g=n.titleId,A=g===void 0?null:g,R=n.classes,F=R===void 0?[]:R,y=n.attributes,x=y===void 0?{}:y,C=n.styles,z=C===void 0?{}:C;if(t){var W=t.prefix,$=t.iconName,Z=t.icon;return Nr(I({type:"icon"},t),function(){return Rt("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(h?x["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(A||Pn()):(x["aria-hidden"]="true",x.focusable="false")),ea({icons:{main:yi(Z),mask:s?yi(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:$,transform:I(I({},We),i),symbol:o,title:h,maskId:c,titleId:A,extra:{attributes:x,styles:z,classes:F}})})}},Tm={mixout:function(){return{icon:Rm(Im)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=yo,n.nodeCallback=Cm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ne:r,a=n.callback,o=a===void 0?function(){}:a;return yo(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,l=r.prefix,s=r.transform,f=r.symbol,c=r.mask,m=r.maskId,h=r.extra;return new Promise(function(g,A){Promise.all([_i(i,l),c.iconName?_i(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var F=Wi(R,2),y=F[0],x=F[1];g([n,ea({icons:{main:y,mask:x},prefix:l,iconName:i,transform:s,symbol:f,maskId:m,title:a,titleId:o,extra:h,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,l=n.styles,s=Rr(l);s.length>0&&(i.style=s);var f;return Xi(o)&&(f=Ze("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(f||a.icon),{children:r,attributes:i}}}},Nm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Nr({type:"layer"},function(){Rt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(In(a)).join(" ")},children:o}]})}}}},Mm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,s=r.attributes,f=s===void 0?{}:s,c=r.styles,m=c===void 0?{}:c;return Nr({type:"counter",content:n},function(){return Rt("beforeDOMElementCreation",{content:n,params:r}),mm({content:n.toString(),title:a,extra:{attributes:f,styles:m,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(In(l))}})})}}}},Lm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?We:i,o=r.title,l=o===void 0?null:o,s=r.classes,f=s===void 0?[]:s,c=r.attributes,m=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return Nr({type:"text",content:n},function(){return Rt("beforeDOMElementCreation",{content:n,params:r}),mo({content:n,transform:I(I({},We),a),title:l,extra:{attributes:m,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(In(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,l=null,s=null;if(Us){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();l=c.width/f,s=c.height/f}return M.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,mo({content:n.innerHTML,width:l,height:s,transform:a,title:i,extra:o,watchable:!0})])}}},Fm=new RegExp('"',"ug"),_o=[1105920,1112319];function jm(e){var t=e.replace(Fm,""),n=Xd(t,0),r=n>=_o[0]&&n<=_o[1],i=t.length===2?t[0]===t[1]:!1;return{value:pi(i?t[0]:t),isSecondary:r||i}}function xo(e,t){var n="".concat(Sd).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=tn(e.children),o=a.filter(function(Z){return Z.getAttribute(hi)===t})[0],l=pt.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(Rd),f=l.getPropertyValue("font-weight"),c=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&c!=="none"&&c!==""){var m=l.getPropertyValue("content"),h=~["Sharp"].indexOf(s[2])?se:ee,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Sn[h][s[2].toLowerCase()]:Id[h][f],A=jm(m),R=A.value,F=A.isSecondary,y=s[0].startsWith("FontAwesome"),x=Ji(g,R),C=x;if(y){var z=rm(R);z.iconName&&z.prefix&&(x=z.iconName,g=z.prefix)}if(x&&!F&&(!o||o.getAttribute(Ki)!==g||o.getAttribute(Vi)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);var W=Om(),$=W.extra;$.attributes[hi]=t,_i(x,g).then(function(Z){var he=ea(I(I({},W),{},{icons:{main:Z,mask:Zi()},prefix:g,iconName:C,extra:$,watchable:!0})),pe=ne.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(pe,e.firstChild):e.appendChild(pe),pe.outerHTML=he.map(function(Oe){return Nn(Oe)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function $m(e){return Promise.all([xo(e,"::before"),xo(e,"::after")])}function zm(e){return e.parentNode!==document.head&&!~Od.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(hi)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function wo(e){if(tt)return new Promise(function(t,n){var r=tn(e.querySelectorAll("*")).filter(zm).map($m),i=ta.begin("searchPseudoElements");cl(),Promise.all(r).then(function(){i(),wi(),t()}).catch(function(){i(),wi(),n()})})}var Dm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=wo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ne:r;M.searchPseudoElements&&wo(i)}}},Eo=!1,Hm={mixout:function(){return{dom:{unwatch:function(){cl(),Eo=!0}}}},hooks:function(){return{bootstrap:function(){vo(vi("mutationObserverCallbacks",{}))},noAuto:function(){Em()},watch:function(n){var r=n.observeMutationsRoot;Eo?wi():vo(vi("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ko=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],l=a.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},Um={mixout:function(){return{parse:{transform:function(n){return ko(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=ko(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),f="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(s," ").concat(f," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:l,inner:m,path:h};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},Gr={x:0,y:0,width:"100%",height:"100%"};function So(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Bm(e){return e.tag==="g"?e.children:[e]}var Wm={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Tr(i.split(" ").map(function(o){return o.trim()})):Zi();return a.prefix||(a.prefix=gt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,l=n.maskId,s=n.transform,f=a.width,c=a.icon,m=o.width,h=o.icon,g=Ud({transform:s,containerWidth:m,iconWidth:f}),A={tag:"rect",attributes:I(I({},Gr),{},{fill:"white"})},R=c.children?{children:c.children.map(So)}:{},F={tag:"g",attributes:I({},g.inner),children:[So(I({tag:c.tag,attributes:I(I({},c.attributes),g.path)},R))]},y={tag:"g",attributes:I({},g.outer),children:[F]},x="mask-".concat(l||Pn()),C="clip-".concat(l||Pn()),z={tag:"mask",attributes:I(I({},Gr),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,y]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:Bm(h)},z]};return r.push(W,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(x,")")},Gr)}),{children:r,attributes:i}}}},Ym={provides:function(t){var n=!1;pt.matchMedia&&(n=pt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},a),{},{attributeName:"opacity"}),l={tag:"circle",attributes:I(I({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:I(I({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:I(I({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Km={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},Vm=[Yd,Tm,Nm,Mm,Lm,Dm,Hm,Um,Wm,Ym,Km];om(Vm,{mixoutsTo:Ae});Ae.noAuto;Ae.config;var Gm=Ae.library;Ae.dom;var Ei=Ae.parse;Ae.findIconDefinition;Ae.toHtml;var qm=Ae.icon;Ae.layer;Ae.text;Ae.counter;var Xm={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]};function Ao(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function qe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ao(Object(n),!0).forEach(function(r){xe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ao(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mr(e){"@babel/helpers - typeof";return mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mr(e)}function xe(e,t,n){return t=eh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Jm(e,t){if(e==null)return{};var n=Qm(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Zm(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function eh(e){var t=Zm(e,"string");return typeof t=="symbol"?t:String(t)}var th=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ul={exports:{}};(function(e){(function(t){var n=function(y,x,C){if(!f(x)||m(x)||h(x)||g(x)||s(x))return x;var z,W=0,$=0;if(c(x))for(z=[],$=x.length;W<$;W++)z.push(n(y,x[W],C));else{z={};for(var Z in x)Object.prototype.hasOwnProperty.call(x,Z)&&(z[y(Z,C)]=n(y,x[Z],C))}return z},r=function(y,x){x=x||{};var C=x.separator||"_",z=x.split||/(?=[A-Z])/;return y.split(z).join(C)},i=function(y){return A(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(x,C){return C?C.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},a=function(y){var x=i(y);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(y,x){return r(y,x).toLowerCase()},l=Object.prototype.toString,s=function(y){return typeof y=="function"},f=function(y){return y===Object(y)},c=function(y){return l.call(y)=="[object Array]"},m=function(y){return l.call(y)=="[object Date]"},h=function(y){return l.call(y)=="[object RegExp]"},g=function(y){return l.call(y)=="[object Boolean]"},A=function(y){return y=y-0,y===y},R=function(y,x){var C=x&&"process"in x?x.process:x;return typeof C!="function"?y:function(z,W){return C(z,y,W)}},F={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(y,x){return n(R(i,x),y)},decamelizeKeys:function(y,x){return n(R(o,x),y,x)},pascalizeKeys:function(y,x){return n(R(a,x),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=F:t.humps=F})(th)})(ul);var nh=ul.exports,rh=["class","style"];function ih(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=nh.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function ah(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function dl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(s){return dl(s)}),i=Object.keys(e.attributes||{}).reduce(function(s,f){var c=e.attributes[f];switch(f){case"class":s.class=ah(c);break;case"style":s.style=ih(c);break;default:s.attrs[f]=c}return s},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,l=Jm(n,rh);return Ui(e.tag,qe(qe(qe({},t),{},{class:i.class,style:qe(qe({},i.style),o)},i.attrs),l),r)}var ml=!1;try{ml=!0}catch{}function oh(){if(!ml&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function qr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?xe({},e,t):{}}function sh(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},xe(t,"fa-".concat(e.size),e.size!==null),xe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),xe(t,"fa-pull-".concat(e.pull),e.pull!==null),xe(t,"fa-swap-opacity",e.swapOpacity),xe(t,"fa-bounce",e.bounce),xe(t,"fa-shake",e.shake),xe(t,"fa-beat",e.beat),xe(t,"fa-fade",e.fade),xe(t,"fa-beat-fade",e.beatFade),xe(t,"fa-flash",e.flash),xe(t,"fa-spin-pulse",e.spinPulse),xe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Oo(e){if(e&&mr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ei.icon)return Ei.icon(e);if(e===null)return null;if(mr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var lh=bt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=ue(function(){return Oo(t.icon)}),a=ue(function(){return qr("classes",sh(t))}),o=ue(function(){return qr("transform",typeof t.transform=="string"?Ei.transform(t.transform):t.transform)}),l=ue(function(){return qr("mask",Oo(t.mask))}),s=ue(function(){return qm(i.value,qe(qe(qe(qe({},a.value),o.value),l.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});fn(s,function(c){if(!c)return oh("Could not find one or more icon(s)",i.value,l.value)},{immediate:!0});var f=ue(function(){return s.value?dl(s.value.abstract[0],{},r):null});return function(){return f.value}}});Gm.add(Xm);const hl=$f(Gu);hl.use(pd).component("font-awesome-icon",lh);hl.mount("#app");
