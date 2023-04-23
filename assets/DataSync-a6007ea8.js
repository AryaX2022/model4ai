import{a as fc}from"./axios-aba6f0e0.js";import{_ as gc,b as mc,e as pc,m as Vt,bn as yc,be as vc,p as wc}from"./index-f80cd59f.js";const Ec=fc.create({baseURL:"https://civitai.com/api/v1"});function Tc(e){return Ec.get("/models?limit=30&page="+e)}/**
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
 */const Pi=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Ic=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Fi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,h=i>>2,l=(i&3)<<4|a>>4;let g=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(g=64)),s.push(n[h],n[l],n[g],n[m])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Pi(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ic(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const l=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||l==null)throw new Sc;const g=i<<2|a>>4;if(s.push(g),u!==64){const m=a<<4&240|u>>2;if(s.push(m),l!==64){const b=u<<6&192|l;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Sc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cc=function(e){const t=Pi(e);return Fi.encodeByteArray(t,!0)},an=function(e){return Cc(e).replace(/\./g,"")},bc=function(e){try{return Fi.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Dc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ac=()=>Dc().__FIREBASE_DEFAULTS__,_c=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Nc=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&bc(e[1]);return t&&JSON.parse(t)},Vi=()=>{try{return Ac()||_c()||Nc()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},kc=e=>{var t,n;return(n=(t=Vi())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Rc=e=>{const t=kc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},xc=()=>{var e;return(e=Vi())===null||e===void 0?void 0:e.config};/**
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
 */class Lc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function Oc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[an(JSON.stringify(n)),an(JSON.stringify(o)),a].join(".")}function Mc(){try{return typeof indexedDB=="object"}catch{return!1}}function Pc(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const Fc="FirebaseError";class Zt extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Fc,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ui.prototype.create)}}class Ui{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Vc(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Zt(r,a,s)}}function Vc(e,t){return e.replace(Uc,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Uc=/\{\$([^}]+)}/g;function ms(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(Pr(i)&&Pr(o)){if(!ms(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Pr(e){return e!==null&&typeof e=="object"}/**
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
 */function ye(e){return e&&e._delegate?e._delegate:e}class ve{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Dt="[DEFAULT]";/**
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
 */class Bc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Lc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jc(t))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Dt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Dt){return this.instances.has(t)}getOptions(t=Dt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$c(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Dt){return this.component?this.component.multipleInstances?t:Dt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $c(e){return e===Dt?void 0:e}function jc(e){return e.instantiationMode==="EAGER"}/**
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
 */class qc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Bc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(_||(_={}));const zc={debug:_.DEBUG,verbose:_.VERBOSE,info:_.INFO,warn:_.WARN,error:_.ERROR,silent:_.SILENT},Kc=_.INFO,Hc={[_.DEBUG]:"log",[_.VERBOSE]:"log",[_.INFO]:"info",[_.WARN]:"warn",[_.ERROR]:"error"},Gc=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Hc[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Bi{constructor(t){this.name=t,this._logLevel=Kc,this._logHandler=Gc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in _))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?zc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,_.DEBUG,...t),this._logHandler(this,_.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,_.VERBOSE,...t),this._logHandler(this,_.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,_.INFO,...t),this._logHandler(this,_.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,_.WARN,...t),this._logHandler(this,_.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,_.ERROR,...t),this._logHandler(this,_.ERROR,...t)}}const Qc=(e,t)=>t.some(n=>e instanceof n);let Fr,Vr;function Wc(){return Fr||(Fr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yc(){return Vr||(Vr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $i=new WeakMap,ps=new WeakMap,ji=new WeakMap,Zn=new WeakMap,qs=new WeakMap;function Xc(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(yt(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&$i.set(n,e)}).catch(()=>{}),qs.set(t,e),t}function Jc(e){if(ps.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});ps.set(e,t)}let ys={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ps.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ji.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Zc(e){ys=e(ys)}function tu(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(ts(this),t,...n);return ji.set(s,t.sort?t.sort():[t]),yt(s)}:Yc().includes(e)?function(...t){return e.apply(ts(this),t),yt($i.get(this))}:function(...t){return yt(e.apply(ts(this),t))}}function eu(e){return typeof e=="function"?tu(e):(e instanceof IDBTransaction&&Jc(e),Qc(e,Wc())?new Proxy(e,ys):e)}function yt(e){if(e instanceof IDBRequest)return Xc(e);if(Zn.has(e))return Zn.get(e);const t=eu(e);return t!==e&&(Zn.set(e,t),qs.set(t,e)),t}const ts=e=>qs.get(e);function nu(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=yt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(yt(o.result),c.oldVersion,c.newVersion,yt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const su=["get","getKey","getAll","getAllKeys","count"],ru=["put","add","delete","clear"],es=new Map;function Ur(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(es.get(t))return es.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=ru.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||su.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return es.set(t,i),i}Zc(e=>({...e,get:(t,n,s)=>Ur(t,n)||e.get(t,n,s),has:(t,n)=>!!Ur(t,n)||e.has(t,n)}));/**
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
 */class iu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ou(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ou(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const vs="@firebase/app",Br="0.9.7";/**
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
 */const xt=new Bi("@firebase/app"),au="@firebase/app-compat",cu="@firebase/analytics-compat",uu="@firebase/analytics",hu="@firebase/app-check-compat",lu="@firebase/app-check",du="@firebase/auth",fu="@firebase/auth-compat",gu="@firebase/database",mu="@firebase/database-compat",pu="@firebase/functions",yu="@firebase/functions-compat",vu="@firebase/installations",wu="@firebase/installations-compat",Eu="@firebase/messaging",Tu="@firebase/messaging-compat",Iu="@firebase/performance",Su="@firebase/performance-compat",Cu="@firebase/remote-config",bu="@firebase/remote-config-compat",Du="@firebase/storage",Au="@firebase/storage-compat",_u="@firebase/firestore",Nu="@firebase/firestore-compat",ku="firebase",Ru="9.19.1";/**
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
 */const ws="[DEFAULT]",xu={[vs]:"fire-core",[au]:"fire-core-compat",[uu]:"fire-analytics",[cu]:"fire-analytics-compat",[lu]:"fire-app-check",[hu]:"fire-app-check-compat",[du]:"fire-auth",[fu]:"fire-auth-compat",[gu]:"fire-rtdb",[mu]:"fire-rtdb-compat",[pu]:"fire-fn",[yu]:"fire-fn-compat",[vu]:"fire-iid",[wu]:"fire-iid-compat",[Eu]:"fire-fcm",[Tu]:"fire-fcm-compat",[Iu]:"fire-perf",[Su]:"fire-perf-compat",[Cu]:"fire-rc",[bu]:"fire-rc-compat",[Du]:"fire-gcs",[Au]:"fire-gcs-compat",[_u]:"fire-fst",[Nu]:"fire-fst-compat","fire-js":"fire-js",[ku]:"fire-js-all"};/**
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
 */const cn=new Map,Es=new Map;function Lu(e,t){try{e.container.addComponent(t)}catch(n){xt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function un(e){const t=e.name;if(Es.has(t))return xt.debug(`There were multiple attempts to register component ${t}.`),!1;Es.set(t,e);for(const n of cn.values())Lu(n,e);return!0}function Ou(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Mu={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vt=new Ui("app","Firebase",Mu);/**
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
 */class Pu{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ve("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
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
 */const Fu=Ru;function qi(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:ws,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw vt.create("bad-app-name",{appName:String(r)});if(n||(n=xc()),!n)throw vt.create("no-options");const i=cn.get(r);if(i){if(ms(n,i.options)&&ms(s,i.config))return i;throw vt.create("duplicate-app",{appName:r})}const o=new qc(r);for(const c of Es.values())o.addComponent(c);const a=new Pu(n,s,o);return cn.set(r,a),a}function Vu(e=ws){const t=cn.get(e);if(!t&&e===ws)return qi();if(!t)throw vt.create("no-app",{appName:e});return t}function jt(e,t,n){var s;let r=(s=xu[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xt.warn(a.join(" "));return}un(new ve(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Uu="firebase-heartbeat-database",Bu=1,we="firebase-heartbeat-store";let ns=null;function zi(){return ns||(ns=nu(Uu,Bu,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(we)}}}).catch(e=>{throw vt.create("idb-open",{originalErrorMessage:e.message})})),ns}async function $u(e){try{return(await zi()).transaction(we).objectStore(we).get(Ki(e))}catch(t){if(t instanceof Zt)xt.warn(t.message);else{const n=vt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});xt.warn(n.message)}}}async function $r(e,t){try{const s=(await zi()).transaction(we,"readwrite");return await s.objectStore(we).put(t,Ki(e)),s.done}catch(n){if(n instanceof Zt)xt.warn(n.message);else{const s=vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xt.warn(s.message)}}}function Ki(e){return`${e.name}!${e.options.appId}`}/**
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
 */const ju=1024,qu=30*24*60*60*1e3;class zu{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hu(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=jr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=qu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=jr(),{heartbeatsToSend:n,unsentEntries:s}=Ku(this._heartbeatsCache.heartbeats),r=an(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function jr(){return new Date().toISOString().substring(0,10)}function Ku(e,t=ju){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),qr(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),qr(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Hu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mc()?Pc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $u(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return $r(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return $r(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function qr(e){return an(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Gu(e){un(new ve("platform-logger",t=>new iu(t),"PRIVATE")),un(new ve("heartbeat",t=>new zu(t),"PRIVATE")),jt(vs,Br,e),jt(vs,Br,"esm2017"),jt("fire-js","")}Gu("");var Qu="firebase",Wu="9.19.1";/**
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
 */jt(Qu,Wu,"app");var Yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p,zs=zs||{},T=Yu||self;function hn(){}function Dn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function xe(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Xu(e){return Object.prototype.hasOwnProperty.call(e,ss)&&e[ss]||(e[ss]=++Ju)}var ss="closure_uid_"+(1e9*Math.random()>>>0),Ju=0;function Zu(e,t,n){return e.call.apply(e.bind,arguments)}function th(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function Y(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Y=Zu:Y=th,Y.apply(null,arguments)}function Ge(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function K(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function Ct(){this.s=this.s,this.o=this.o}var eh=0;Ct.prototype.s=!1;Ct.prototype.na=function(){!this.s&&(this.s=!0,this.M(),eh!=0)&&Xu(this)};Ct.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hi=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ks(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function zr(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Dn(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function X(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var nh=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",hn,t),T.removeEventListener("test",hn,t)}catch{}return e}();function ln(e){return/^[\s\xa0]*$/.test(e)}var Kr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function rs(e,t){return e<t?-1:e>t?1:0}function An(){var e=T.navigator;return e&&(e=e.userAgent)?e:""}function ot(e){return An().indexOf(e)!=-1}function Hs(e){return Hs[" "](e),e}Hs[" "]=hn;function sh(e){var t=oh;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var rh=ot("Opera"),Kt=ot("Trident")||ot("MSIE"),Gi=ot("Edge"),Ts=Gi||Kt,Qi=ot("Gecko")&&!(An().toLowerCase().indexOf("webkit")!=-1&&!ot("Edge"))&&!(ot("Trident")||ot("MSIE"))&&!ot("Edge"),ih=An().toLowerCase().indexOf("webkit")!=-1&&!ot("Edge");function Wi(){var e=T.document;return e?e.documentMode:void 0}var dn;t:{var is="",os=function(){var e=An();if(Qi)return/rv:([^\);]+)(\)|;)/.exec(e);if(Gi)return/Edge\/([\d\.]+)/.exec(e);if(Kt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(ih)return/WebKit\/(\S+)/.exec(e);if(rh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(os&&(is=os?os[1]:""),Kt){var as=Wi();if(as!=null&&as>parseFloat(is)){dn=String(as);break t}}dn=is}var oh={};function ah(){return sh(function(){let e=0;const t=Kr(String(dn)).split("."),n=Kr("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=rs(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||rs(r[2].length==0,i[2].length==0)||rs(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var Is;if(T.document&&Kt){var Hr=Wi();Is=Hr||parseInt(dn,10)||void 0}else Is=void 0;var ch=Is;function Ee(e,t){if(X.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Qi){t:{try{Hs(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:uh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ee.X.h.call(this)}}K(Ee,X);var uh={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),hh=0;function lh(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=r,this.key=++hh,this.ba=this.ea=!1}function _n(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Gs(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Yi(e){const t={};for(const n in e)t[n]=e[n];return t}const Gr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xi(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<Gr.length;i++)n=Gr[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Nn(e){this.src=e,this.g={},this.h=0}Nn.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Cs(e,t,s,r);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new lh(t,this.src,i,!!s,r),t.ea=n,e.push(t)),t};function Ss(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=Hi(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(_n(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Cs(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==s)return r}return-1}var Qs="closure_lm_"+(1e6*Math.random()|0),cs={};function Ji(e,t,n,s,r){if(s&&s.once)return to(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ji(e,t[i],n,s,r);return null}return n=Xs(n),e&&e[Le]?e.N(t,n,xe(s)?!!s.capture:!!s,r):Zi(e,t,n,!1,s,r)}function Zi(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=xe(r)?!!r.capture:!!r,a=Ys(e);if(a||(e[Qs]=a=new Nn(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=dh(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)nh||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(no(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function dh(){function e(n){return t.call(e.src,e.listener,n)}const t=fh;return e}function to(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)to(e,t[i],n,s,r);return null}return n=Xs(n),e&&e[Le]?e.O(t,n,xe(s)?!!s.capture:!!s,r):Zi(e,t,n,!0,s,r)}function eo(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)eo(e,t[i],n,s,r);else s=xe(s)?!!s.capture:!!s,n=Xs(n),e&&e[Le]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Cs(i,n,s,r),-1<n&&(_n(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ys(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Cs(t,n,s,r)),(n=-1<e?t[e]:null)&&Ws(n))}function Ws(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Le])Ss(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(no(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Ys(t))?(Ss(n,e),n.h==0&&(n.src=null,t[Qs]=null)):_n(e)}}}function no(e){return e in cs?cs[e]:cs[e]="on"+e}function fh(e,t){if(e.ba)e=!0;else{t=new Ee(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&Ws(e),e=n.call(s,t)}return e}function Ys(e){return e=e[Qs],e instanceof Nn?e:null}var us="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xs(e){return typeof e=="function"?e:(e[us]||(e[us]=function(t){return e.handleEvent(t)}),e[us])}function j(){Ct.call(this),this.i=new Nn(this),this.P=this,this.I=null}K(j,Ct);j.prototype[Le]=!0;j.prototype.removeEventListener=function(e,t,n,s){eo(this,e,t,n,s)};function z(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new X(t,e);else if(t instanceof X)t.target=t.target||e;else{var r=t;t=new X(s,e),Xi(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=Qe(o,s,!0,t)&&r}if(o=t.g=e,r=Qe(o,s,!0,t)&&r,r=Qe(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=Qe(o,s,!1,t)&&r}j.prototype.M=function(){if(j.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)_n(n[s]);delete e.g[t],e.h--}}this.I=null};j.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};j.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Qe(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ss(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Js=T.JSON.stringify;function gh(){var e=io;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class mh{constructor(){this.h=this.g=null}add(t,n){const s=so.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var so=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new ph,e=>e.reset());class ph{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function yh(e){T.setTimeout(()=>{throw e},0)}function ro(e,t){bs||vh(),Ds||(bs(),Ds=!0),io.add(e,t)}var bs;function vh(){var e=T.Promise.resolve(void 0);bs=function(){e.then(wh)}}var Ds=!1,io=new mh;function wh(){for(var e;e=gh();){try{e.h.call(e.g)}catch(n){yh(n)}var t=so;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ds=!1}function kn(e,t){j.call(this),this.h=e||1,this.g=t||T,this.j=Y(this.lb,this),this.l=Date.now()}K(kn,j);p=kn.prototype;p.ca=!1;p.R=null;p.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),z(this,"tick"),this.ca&&(Zs(this),this.start()))}};p.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Zs(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}p.M=function(){kn.X.M.call(this),Zs(this),delete this.g};function tr(e,t,n){if(typeof e=="function")n&&(e=Y(e,n));else if(e&&typeof e.handleEvent=="function")e=Y(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function oo(e){e.g=tr(()=>{e.g=null,e.i&&(e.i=!1,oo(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Eh extends Ct{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:oo(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Te(e){Ct.call(this),this.h=e,this.g={}}K(Te,Ct);var Qr=[];function ao(e,t,n,s){Array.isArray(n)||(n&&(Qr[0]=n.toString()),n=Qr);for(var r=0;r<n.length;r++){var i=Ji(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function co(e){Gs(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ws(t)},e),e.g={}}Te.prototype.M=function(){Te.X.M.call(this),co(this)};Te.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Rn(){this.g=!0}Rn.prototype.Aa=function(){this.g=!1};function Th(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function Ih(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function $t(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Ch(e,n)+(s?" "+s:"")})}function Sh(e,t){e.info(function(){return"TIMEOUT: "+t})}Rn.prototype.info=function(){};function Ch(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Js(n)}catch{return t}}var Mt={},Wr=null;function xn(){return Wr=Wr||new j}Mt.Pa="serverreachability";function uo(e){X.call(this,Mt.Pa,e)}K(uo,X);function Ie(e){const t=xn();z(t,new uo(t))}Mt.STAT_EVENT="statevent";function ho(e,t){X.call(this,Mt.STAT_EVENT,e),this.stat=t}K(ho,X);function tt(e){const t=xn();z(t,new ho(t,e))}Mt.Qa="timingevent";function lo(e,t){X.call(this,Mt.Qa,e),this.size=t}K(lo,X);function Oe(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var Ln={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},fo={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function er(){}er.prototype.h=null;function Yr(e){return e.h||(e.h=e.i())}function go(){}var Me={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function nr(){X.call(this,"d")}K(nr,X);function sr(){X.call(this,"c")}K(sr,X);var As;function On(){}K(On,er);On.prototype.g=function(){return new XMLHttpRequest};On.prototype.i=function(){return{}};As=new On;function Pe(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new Te(this),this.O=bh,e=Ts?125:void 0,this.T=new kn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new mo}function mo(){this.i=null,this.g="",this.h=!1}var bh=45e3,_s={},fn={};p=Pe.prototype;p.setTimeout=function(e){this.O=e};function Ns(e,t,n){e.K=1,e.v=Pn(ft(t)),e.s=n,e.P=!0,po(e,null)}function po(e,t){e.F=Date.now(),Fe(e),e.A=ft(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),Co(n.i,"t",s),e.C=0,n=e.l.H,e.h=new mo,e.g=Ko(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Eh(Y(e.La,e,e.g),e.N)),ao(e.S,e.g,"readystatechange",e.ib),t=e.H?Yi(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Ie(),Th(e.j,e.u,e.A,e.m,e.U,e.s)}p.ib=function(e){e=e.target;const t=this.L;t&&lt(e)==3?t.l():this.La(e)};p.La=function(e){try{if(e==this.g)t:{const h=lt(this.g);var t=this.g.Ea();const l=this.g.aa();if(!(3>h)&&(h!=3||Ts||this.g&&(this.h.h||this.g.fa()||ti(this.g)))){this.I||h!=4||t==7||(t==8||0>=l?Ie(3):Ie(2)),Mn(this);var n=this.g.aa();this.Y=n;e:if(yo(this)){var s=ti(this.g);e="";var r=s.length,i=lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){At(this),de(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Ih(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ln(a)){var u=a;break e}}u=null}if(n=u)$t(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ks(this,n);else{this.i=!1,this.o=3,tt(12),At(this),de(this);break t}}this.P?(vo(this,h,o),Ts&&this.i&&h==3&&(ao(this.S,this.T,"tick",this.hb),this.T.start())):($t(this.j,this.m,o,null),ks(this,o)),h==4&&At(this),this.i&&!this.I&&(h==4?$o(this.l,this):(this.i=!1,Fe(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),At(this),de(this)}}}catch{}finally{}};function yo(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function vo(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=Dh(e,n),r==fn){t==4&&(e.o=4,tt(14),s=!1),$t(e.j,e.m,null,"[Incomplete Response]");break}else if(r==_s){e.o=4,tt(15),$t(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else $t(e.j,e.m,r,null),ks(e,r);yo(e)&&r!=fn&&r!=_s&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,tt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(t),t.K=!0,tt(11))):($t(e.j,e.m,n,"[Invalid Chunked Response]"),At(e),de(e))}p.hb=function(){if(this.g){var e=lt(this.g),t=this.g.fa();this.C<t.length&&(Mn(this),vo(this,e,t),this.i&&e!=4&&Fe(this))}};function Dh(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?fn:(n=Number(t.substring(n,s)),isNaN(n)?_s:(s+=1,s+n>t.length?fn:(t=t.substr(s,n),e.C=s+n,t)))}p.cancel=function(){this.I=!0,At(this)};function Fe(e){e.V=Date.now()+e.O,wo(e,e.O)}function wo(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Oe(Y(e.gb,e),t)}function Mn(e){e.B&&(T.clearTimeout(e.B),e.B=null)}p.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Sh(this.j,this.A),this.K!=2&&(Ie(),tt(17)),At(this),this.o=2,de(this)):wo(this,this.V-e)};function de(e){e.l.G==0||e.I||$o(e.l,e)}function At(e){Mn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Zs(e.T),co(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function ks(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Rs(n.h,e))){if(!e.J&&Rs(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)pn(n),Un(n);else break t;ur(n),tt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Oe(Y(n.cb,n),6e3));if(1>=Ao(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else _t(n,11)}else if((e.J||n.g==e)&&pn(n),!ln(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const h=u[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const l=u[4];l!=null&&(n.Ca=l,n.j.info("SVER="+n.Ca));const g=u[5];g!=null&&typeof g=="number"&&0<g&&(s=1.5*g,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const b=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(b){var i=s.h;i.g||b.indexOf("spdy")==-1&&b.indexOf("quic")==-1&&b.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(rr(i,i.h),i.h=null))}if(s.D){const C=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(s.za=C,x(s.F,s.D,C))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=zo(s,s.H?s.ka:null,s.V),o.J){_o(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Mn(a),Fe(a)),s.g=o}else Uo(s);0<n.i.length&&Bn(n)}else u[0]!="stop"&&u[0]!="close"||_t(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?_t(n,7):cr(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ie(4)}catch{}}function Ah(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Dn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function _h(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Dn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Eo(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Dn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=_h(e),s=Ah(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var To=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function kt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof kt){this.h=t!==void 0?t:e.h,gn(this,e.j),this.s=e.s,this.g=e.g,mn(this,e.m),this.l=e.l,t=e.i;var n=new Se;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Xr(this,n),this.o=e.o}else e&&(n=String(e).match(To))?(this.h=!!t,gn(this,n[1]||"",!0),this.s=ue(n[2]||""),this.g=ue(n[3]||"",!0),mn(this,n[4]),this.l=ue(n[5]||"",!0),Xr(this,n[6]||"",!0),this.o=ue(n[7]||"")):(this.h=!!t,this.i=new Se(null,this.h))}kt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(he(t,Jr,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(he(t,Jr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(he(n,n.charAt(0)=="/"?xh:Rh,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",he(n,Oh)),e.join("")};function ft(e){return new kt(e)}function gn(e,t,n){e.j=n?ue(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function mn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Xr(e,t,n){t instanceof Se?(e.i=t,Mh(e.i,e.h)):(n||(t=he(t,Lh)),e.i=new Se(t,e.h))}function x(e,t,n){e.i.set(t,n)}function Pn(e){return x(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ue(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function he(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,kh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function kh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Jr=/[#\/\?@]/g,Rh=/[#\?:]/g,xh=/[#\?]/g,Lh=/[#\?@]/g,Oh=/#/g;function Se(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function bt(e){e.g||(e.g=new Map,e.h=0,e.i&&Nh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}p=Se.prototype;p.add=function(e,t){bt(this),this.i=null,e=te(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Io(e,t){bt(e),t=te(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function So(e,t){return bt(e),t=te(e,t),e.g.has(t)}p.forEach=function(e,t){bt(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};p.oa=function(){bt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};p.W=function(e){bt(this);let t=[];if(typeof e=="string")So(this,e)&&(t=t.concat(this.g.get(te(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};p.set=function(e,t){return bt(this),this.i=null,e=te(this,e),So(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};p.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Co(e,t,n){Io(e,t),0<n.length&&(e.i=null,e.g.set(te(e,t),Ks(n)),e.h+=n.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function te(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Mh(e,t){t&&!e.j&&(bt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Io(this,s),Co(this,r,n))},e)),e.j=t}var Ph=class{constructor(t,n){this.h=t,this.g=n}};function bo(e){this.l=e||Fh,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ga&&T.g.Ga()&&T.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Fh=10;function Do(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ao(e){return e.h?1:e.g?e.g.size:0}function Rs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function rr(e,t){e.g?e.g.add(t):e.h=t}function _o(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}bo.prototype.cancel=function(){if(this.i=No(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function No(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Ks(e.i)}function ir(){}ir.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};ir.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function Vh(){this.g=new ir}function Uh(e,t,n){const s=n||"";try{Eo(e,function(r,i){let o=r;xe(r)&&(o=Js(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function Bh(e,t){const n=new Rn;if(T.Image){const s=new Image;s.onload=Ge(We,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Ge(We,n,s,"TestLoadImage: error",!1,t),s.onabort=Ge(We,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Ge(We,n,s,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function We(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function Ve(e){this.l=e.ac||null,this.j=e.jb||!1}K(Ve,er);Ve.prototype.g=function(){return new Fn(this.l,this.j)};Ve.prototype.i=function(e){return function(){return e}}({});function Fn(e,t){j.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=or,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}K(Fn,j);var or=0;p=Fn.prototype;p.open=function(e,t){if(this.readyState!=or)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ce(this)};p.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||T).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ue(this)),this.readyState=or};p.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ce(this)),this.g&&(this.readyState=3,Ce(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof T.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ko(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function ko(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}p.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ue(this):Ce(this),this.readyState==3&&ko(this)}};p.Va=function(e){this.g&&(this.response=this.responseText=e,Ue(this))};p.Ua=function(e){this.g&&(this.response=e,Ue(this))};p.ga=function(){this.g&&Ue(this)};function Ue(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ce(e)}p.setRequestHeader=function(e,t){this.v.append(e,t)};p.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ce(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Fn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var $h=T.JSON.parse;function O(e){j.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ro,this.K=this.L=!1}K(O,j);var Ro="",jh=/^https?$/i,qh=["POST","PUT"];p=O.prototype;p.Ka=function(e){this.L=e};p.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():As.g(),this.C=this.u?Yr(this.u):Yr(As),this.g.onreadystatechange=Y(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){Zr(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=T.FormData&&e instanceof T.FormData,!(0<=Hi(qh,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Oo(this),0<this.B&&((this.K=zh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Y(this.qa,this)):this.A=tr(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Zr(this,i)}};function zh(e){return Kt&&ah()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}p.qa=function(){typeof zs<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,z(this,"timeout"),this.abort(8))};function Zr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,xo(e),Vn(e)}function xo(e){e.D||(e.D=!0,z(e,"complete"),z(e,"error"))}p.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,z(this,"complete"),z(this,"abort"),Vn(this))};p.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vn(this,!0)),O.X.M.call(this)};p.Ha=function(){this.s||(this.F||this.v||this.l?Lo(this):this.fb())};p.fb=function(){Lo(this)};function Lo(e){if(e.h&&typeof zs<"u"&&(!e.C[1]||lt(e)!=4||e.aa()!=2)){if(e.v&&lt(e)==4)tr(e.Ha,0,e);else if(z(e,"readystatechange"),lt(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(To)[1]||null;if(!r&&T.self&&T.self.location){var i=T.self.location.protocol;r=i.substr(0,i.length-1)}s=!jh.test(r?r.toLowerCase():"")}n=s}if(n)z(e,"complete"),z(e,"success");else{e.m=6;try{var o=2<lt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",xo(e)}}finally{Vn(e)}}}}function Vn(e,t){if(e.g){Oo(e);const n=e.g,s=e.C[0]?hn:null;e.g=null,e.C=null,t||z(e,"ready");try{n.onreadystatechange=s}catch{}}}function Oo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function lt(e){return e.g?e.g.readyState:0}p.aa=function(){try{return 2<lt(this)?this.g.status:-1}catch{return-1}};p.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};p.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),$h(t)}};function ti(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Ro:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}p.Ea=function(){return this.m};p.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Mo(e){let t="";return Gs(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function ar(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Mo(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):x(e,t,n))}function ce(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Po(e){this.Ca=0,this.i=[],this.j=new Rn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ce("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ce("baseRetryDelayMs",5e3,e),this.bb=ce("retryDelaySeedMs",1e4,e),this.$a=ce("forwardChannelMaxRetries",2,e),this.ta=ce("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new bo(e&&e.concurrentRequestLimit),this.Fa=new Vh,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}p=Po.prototype;p.ma=8;p.G=1;function cr(e){if(Fo(e),e.G==3){var t=e.U++,n=ft(e.F);x(n,"SID",e.I),x(n,"RID",t),x(n,"TYPE","terminate"),Be(e,n),t=new Pe(e,e.j,t,void 0),t.K=2,t.v=Pn(ft(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=Ko(t.l,null),t.g.da(t.v)),t.F=Date.now(),Fe(t)}qo(e)}function Un(e){e.g&&(hr(e),e.g.cancel(),e.g=null)}function Fo(e){Un(e),e.u&&(T.clearTimeout(e.u),e.u=null),pn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function Bn(e){Do(e.h)||e.m||(e.m=!0,ro(e.Ja,e),e.C=0)}function Kh(e,t){return Ao(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Oe(Y(e.Ja,e,t),jo(e,e.C)),e.C++,!0)}p.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new Pe(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=Yi(i),Xi(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Vo(this,r,t),n=ft(this.F),x(n,"RID",e),x(n,"CVER",22),this.D&&x(n,"X-HTTP-Session-Id",this.D),Be(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(Mo(i)))+"&"+t:this.o&&ar(n,this.o,i)),rr(this.h,r),this.Ya&&x(n,"TYPE","init"),this.O?(x(n,"$req",t),x(n,"SID","null"),r.Z=!0,Ns(r,n,null)):Ns(r,n,t),this.G=2}}else this.G==3&&(e?ei(this,e):this.i.length==0||Do(this.h)||ei(this))};function ei(e,t){var n;t?n=t.m:n=e.U++;const s=ft(e.F);x(s,"SID",e.I),x(s,"RID",n),x(s,"AID",e.T),Be(e,s),e.o&&e.s&&ar(s,e.o,e.s),n=new Pe(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Vo(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),rr(e.h,n),Ns(n,s,t)}function Be(e,t){e.ia&&Gs(e.ia,function(n,s){x(t,s,n)}),e.l&&Eo({},function(n,s){x(t,s,n)})}function Vo(e,t,n){n=Math.min(e.i.length,n);var s=e.l?Y(e.l.Ra,e.l,e):null;t:{var r=e.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const h=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{Uh(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function Uo(e){e.g||e.u||(e.Z=1,ro(e.Ia,e),e.A=0)}function ur(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Oe(Y(e.Ia,e),jo(e,e.A)),e.A++,!0)}p.Ia=function(){if(this.u=null,Bo(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Oe(Y(this.eb,this),e)}};p.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,tt(10),Un(this),Bo(this))};function hr(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function Bo(e){e.g=new Pe(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=ft(e.sa);x(t,"RID","rpc"),x(t,"SID",e.I),x(t,"CI",e.L?"0":"1"),x(t,"AID",e.T),x(t,"TYPE","xmlhttp"),Be(e,t),e.o&&e.s&&ar(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Pn(ft(t)),n.s=null,n.P=!0,po(n,e)}p.cb=function(){this.v!=null&&(this.v=null,Un(this),ur(this),tt(19))};function pn(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function $o(e,t){var n=null;if(e.g==t){pn(e),hr(e),e.g=null;var s=2}else if(Rs(e.h,t))n=t.D,_o(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=xn(),z(s,new lo(s,n)),Bn(e)}else Uo(e);else if(r=t.o,r==3||r==0&&0<e.pa||!(s==1&&Kh(e,t)||s==2&&ur(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:_t(e,5);break;case 4:_t(e,10);break;case 3:_t(e,6);break;default:_t(e,2)}}}function jo(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function _t(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=Y(e.kb,e);n||(n=new kt("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||gn(n,"https"),Pn(n)),Bh(n.toString(),s)}else tt(2);e.G=0,e.l&&e.l.va(t),qo(e),Fo(e)}p.kb=function(e){e?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function qo(e){if(e.G=0,e.la=[],e.l){const t=No(e.h);(t.length!=0||e.i.length!=0)&&(zr(e.la,t),zr(e.la,e.i),e.h.i.length=0,Ks(e.i),e.i.length=0),e.l.ua()}}function zo(e,t,n){var s=n instanceof kt?ft(n):new kt(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),mn(s,s.m);else{var r=T.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new kt(null,void 0);s&&gn(i,s),t&&(i.g=t),r&&mn(i,r),n&&(i.l=n),s=i}return n=e.D,t=e.za,n&&t&&x(s,n,t),x(s,"VER",e.ma),Be(e,s),s}function Ko(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new O(new Ve({jb:!0})):new O(e.ra),t.Ka(e.H),t}function Ho(){}p=Ho.prototype;p.xa=function(){};p.wa=function(){};p.va=function(){};p.ua=function(){};p.Ra=function(){};function yn(){if(Kt&&!(10<=Number(ch)))throw Error("Environmental error: no available transport.")}yn.prototype.g=function(e,t){return new nt(e,t)};function nt(e,t){j.call(this),this.g=new Po(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!ln(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ln(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ee(this)}K(nt,j);nt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;tt(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=zo(e,null,e.V),Bn(e)};nt.prototype.close=function(){cr(this.g)};nt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Js(e),e=n);t.i.push(new Ph(t.ab++,e)),t.G==3&&Bn(t)};nt.prototype.M=function(){this.g.l=null,delete this.j,cr(this.g),delete this.g,nt.X.M.call(this)};function Go(e){nr.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}K(Go,nr);function Qo(){sr.call(this),this.status=1}K(Qo,sr);function ee(e){this.g=e}K(ee,Ho);ee.prototype.xa=function(){z(this.g,"a")};ee.prototype.wa=function(e){z(this.g,new Go(e))};ee.prototype.va=function(e){z(this.g,new Qo)};ee.prototype.ua=function(){z(this.g,"b")};yn.prototype.createWebChannel=yn.prototype.g;nt.prototype.send=nt.prototype.u;nt.prototype.open=nt.prototype.m;nt.prototype.close=nt.prototype.close;Ln.NO_ERROR=0;Ln.TIMEOUT=8;Ln.HTTP_ERROR=6;fo.COMPLETE="complete";go.EventType=Me;Me.OPEN="a";Me.CLOSE="b";Me.ERROR="c";Me.MESSAGE="d";j.prototype.listen=j.prototype.N;O.prototype.listenOnce=O.prototype.O;O.prototype.getLastError=O.prototype.Oa;O.prototype.getLastErrorCode=O.prototype.Ea;O.prototype.getStatus=O.prototype.aa;O.prototype.getResponseJson=O.prototype.Sa;O.prototype.getResponseText=O.prototype.fa;O.prototype.send=O.prototype.da;O.prototype.setWithCredentials=O.prototype.Ka;var Hh=function(){return new yn},Gh=function(){return xn()},hs=Ln,Qh=fo,Wh=Mt,ni={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Yh=Ve,Ye=go,Xh=O;const si="@firebase/firestore";/**
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
 */class G{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}G.UNAUTHENTICATED=new G(null),G.GOOGLE_CREDENTIALS=new G("google-credentials-uid"),G.FIRST_PARTY=new G("first-party-uid"),G.MOCK_USER=new G("mock-user");/**
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
 */let ne="9.19.0";/**
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
 */const Lt=new Bi("@firebase/firestore");function ri(){return Lt.logLevel}function y(e,...t){if(Lt.logLevel<=_.DEBUG){const n=t.map(lr);Lt.debug(`Firestore (${ne}): ${e}`,...n)}}function gt(e,...t){if(Lt.logLevel<=_.ERROR){const n=t.map(lr);Lt.error(`Firestore (${ne}): ${e}`,...n)}}function vn(e,...t){if(Lt.logLevel<=_.WARN){const n=t.map(lr);Lt.warn(`Firestore (${ne}): ${e}`,...n)}}function lr(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function E(e="Unexpected state"){const t=`FIRESTORE (${ne}) INTERNAL ASSERTION FAILED: `+e;throw gt(t),new Error(t)}function R(e,t){e||E()}function S(e,t){return e}/**
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
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Zt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class wt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Wo{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Jh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(G.UNAUTHENTICATED))}shutdown(){}}class Zh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tl{constructor(t){this.t=t,this.currentUser=G.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new wt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new wt,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new wt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(R(typeof s.accessToken=="string"),new Wo(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return R(t===null||typeof t=="string"),new G(t)}}class el{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=G.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class nl{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new el(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(G.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rl{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const s=i=>{i.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(R(typeof n.token=="string"),this.T=n.token,new sl(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function il(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Yo{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=il(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function N(e,t){return e<t?-1:e>t?1:0}function Ht(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
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
 */class V{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return V.fromMillis(Date.now())}static fromDate(t){return V.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new V(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?N(this.nanoseconds,t.nanoseconds):N(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class I{constructor(t){this.timestamp=t}static fromTimestamp(t){return new I(t)}static min(){return new I(new V(0,0))}static max(){return new I(new V(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class be{constructor(t,n,s){n===void 0?n=0:n>t.length&&E(),s===void 0?s=t.length-n:s>t.length-n&&E(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return be.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof be?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class L extends be{construct(t,n,s){return new L(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new w(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new L(n)}static emptyPath(){return new L([])}}const ol=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends be{construct(t,n,s){return new W(t,n,s)}static isValidIdentifier(t){return ol.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new W(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new w(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new w(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new w(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new W(n)}static emptyPath(){return new W([])}}/**
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
 */class v{constructor(t){this.path=t}static fromPath(t){return new v(L.fromString(t))}static fromName(t){return new v(L.fromString(t).popFirst(5))}static empty(){return new v(L.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&L.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return L.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new v(new L(t.slice()))}}function al(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=I.fromTimestamp(s===1e9?new V(n+1,0):new V(n,s));return new Tt(r,v.empty(),t)}function cl(e){return new Tt(e.readTime,e.key,-1)}class Tt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Tt(I.min(),v.empty(),-1)}static max(){return new Tt(I.max(),v.empty(),-1)}}function ul(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=v.comparator(e.documentKey,t.documentKey),n!==0?n:N(e.largestBatchId,t.largestBatchId))}/**
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
 */const hl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ll{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function $e(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==hl)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&E(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,s)=>{n(t)})}static reject(t){return new f((n,s)=>{s(t)})}static waitFor(t){return new f((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=f.resolve(!1);for(const s of t)n=n.next(r=>r?f.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new f((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(h=>{o[u]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(t,n){return new f((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function je(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class dr{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}dr.ct=-1;function $n(e){return e==null}function wn(e){return e===0&&1/e==-1/0}function dl(e){return typeof e=="number"&&Number.isInteger(e)&&!wn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function ii(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function se(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Xo(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class B{constructor(t,n){this.comparator=t,this.root=n||q.EMPTY}insert(t,n){return new B(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,q.BLACK,null,null))}remove(t){return new B(this.comparator,this.root.remove(t,this.comparator).copy(null,null,q.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xe(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xe(this.root,t,this.comparator,!0)}}class Xe{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class q{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s??q.RED,this.left=r??q.EMPTY,this.right=i??q.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new q(t??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return q.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return q.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,q.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw E();const t=this.left.check();if(t!==this.right.check())throw E();return t+(this.isRed()?0:1)}}q.EMPTY=null,q.RED=!0,q.BLACK=!1;q.EMPTY=new class{constructor(){this.size=0}get key(){throw E()}get value(){throw E()}get color(){throw E()}get left(){throw E()}get right(){throw E()}copy(e,t,n,s,r){return this}insert(e,t,n){return new q(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class U{constructor(t){this.comparator=t,this.data=new B(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new oi(this.data.getIterator())}getIteratorFrom(t){return new oi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof U)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new U(this.comparator);return n.data=t,n}}class oi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class it{constructor(t){this.fields=t,t.sort(W.comparator)}static empty(){return new it([])}unionWith(t){let n=new U(W.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new it(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ht(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class fl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class J{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new fl("Invalid base64 string: "+r):r}}(t);return new J(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new J(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return N(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}J.EMPTY_BYTE_STRING=new J("");const gl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function It(e){if(R(!!e),typeof e=="string"){let t=0;const n=gl.exec(e);if(R(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:P(e.seconds),nanos:P(e.nanos)}}function P(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Gt(e){return typeof e=="string"?J.fromBase64String(e):J.fromUint8Array(e)}/**
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
 */function Jo(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Zo(e){const t=e.mapValue.fields.__previous_value__;return Jo(t)?Zo(t):t}function De(e){const t=It(e.mapValue.fields.__local_write_time__.timestampValue);return new V(t.seconds,t.nanos)}/**
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
 */class ml{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ae{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ae("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ae&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Je={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ot(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Jo(e)?4:pl(e)?9007199254740991:10:E()}function ct(e,t){if(e===t)return!0;const n=Ot(e);if(n!==Ot(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return De(e).isEqual(De(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=It(s.timestampValue),o=It(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return Gt(s.bytesValue).isEqual(Gt(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return P(s.geoPointValue.latitude)===P(r.geoPointValue.latitude)&&P(s.geoPointValue.longitude)===P(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return P(s.integerValue)===P(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=P(s.doubleValue),o=P(r.doubleValue);return i===o?wn(i)===wn(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return Ht(e.arrayValue.values||[],t.arrayValue.values||[],ct);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(ii(i)!==ii(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ct(i[a],o[a])))return!1;return!0}(e,t);default:return E()}}function _e(e,t){return(e.values||[]).find(n=>ct(n,t))!==void 0}function Qt(e,t){if(e===t)return 0;const n=Ot(e),s=Ot(t);if(n!==s)return N(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return N(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=P(r.integerValue||r.doubleValue),a=P(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return ai(e.timestampValue,t.timestampValue);case 4:return ai(De(e),De(t));case 5:return N(e.stringValue,t.stringValue);case 6:return function(r,i){const o=Gt(r),a=Gt(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=N(o[c],a[c]);if(u!==0)return u}return N(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=N(P(r.latitude),P(i.latitude));return o!==0?o:N(P(r.longitude),P(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Qt(o[c],a[c]);if(u)return u}return N(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===Je.mapValue&&i===Je.mapValue)return 0;if(r===Je.mapValue)return 1;if(i===Je.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const l=N(a[h],u[h]);if(l!==0)return l;const g=Qt(o[a[h]],c[u[h]]);if(g!==0)return g}return N(a.length,u.length)}(e.mapValue,t.mapValue);default:throw E()}}function ai(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return N(e,t);const n=It(e),s=It(t),r=N(n.seconds,s.seconds);return r!==0?r:N(n.nanos,s.nanos)}function Wt(e){return xs(e)}function xs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=It(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Gt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,v.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=xs(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${xs(s.fields[a])}`;return i+"}"}(e.mapValue):E();var t,n}function Ls(e){return!!e&&"integerValue"in e}function fr(e){return!!e&&"arrayValue"in e}function ci(e){return!!e&&"nullValue"in e}function ui(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function nn(e){return!!e&&"mapValue"in e}function fe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return se(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=fe(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=fe(e.arrayValue.values[n]);return t}return Object.assign({},e)}function pl(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class st{constructor(t){this.value=t}static empty(){return new st({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!nn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=fe(n)}setAll(t){let n=W.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=fe(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());nn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ct(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];nn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){se(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new st(fe(this.value))}}function ta(e){const t=[];return se(e.fields,(n,s)=>{const r=new W([n]);if(nn(s)){const i=ta(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new it(t)}/**
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
 */class Q{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Q(t,0,I.min(),I.min(),I.min(),st.empty(),0)}static newFoundDocument(t,n,s,r){return new Q(t,1,n,I.min(),s,r,0)}static newNoDocument(t,n){return new Q(t,2,n,I.min(),I.min(),st.empty(),0)}static newUnknownDocument(t,n){return new Q(t,3,n,I.min(),I.min(),st.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(I.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=I.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Q&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Q(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class En{constructor(t,n){this.position=t,this.inclusive=n}}function hi(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=v.comparator(v.fromName(o.referenceValue),n.key):s=Qt(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function li(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ct(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class ge{constructor(t,n="asc"){this.field=t,this.dir=n}}function yl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class ea{}class F extends ea{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new wl(t,n,s):n==="array-contains"?new Il(t,s):n==="in"?new Sl(t,s):n==="not-in"?new Cl(t,s):n==="array-contains-any"?new bl(t,s):new F(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new El(t,s):new Tl(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Qt(n,this.value)):n!==null&&Ot(this.value)===Ot(n)&&this.matchesComparison(Qt(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return E()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ut extends ea{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new ut(t,n)}matches(t){return na(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function na(e){return e.op==="and"}function sa(e){return vl(e)&&na(e)}function vl(e){for(const t of e.filters)if(t instanceof ut)return!1;return!0}function Os(e){if(e instanceof F)return e.field.canonicalString()+e.op.toString()+Wt(e.value);if(sa(e))return e.filters.map(t=>Os(t)).join(",");{const t=e.filters.map(n=>Os(n)).join(",");return`${e.op}(${t})`}}function ra(e,t){return e instanceof F?function(n,s){return s instanceof F&&n.op===s.op&&n.field.isEqual(s.field)&&ct(n.value,s.value)}(e,t):e instanceof ut?function(n,s){return s instanceof ut&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&ra(i,s.filters[o]),!0):!1}(e,t):void E()}function ia(e){return e instanceof F?function(t){return`${t.field.canonicalString()} ${t.op} ${Wt(t.value)}`}(e):e instanceof ut?function(t){return t.op.toString()+" {"+t.getFilters().map(ia).join(" ,")+"}"}(e):"Filter"}class wl extends F{constructor(t,n,s){super(t,n,s),this.key=v.fromName(s.referenceValue)}matches(t){const n=v.comparator(t.key,this.key);return this.matchesComparison(n)}}class El extends F{constructor(t,n){super(t,"in",n),this.keys=oa("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Tl extends F{constructor(t,n){super(t,"not-in",n),this.keys=oa("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function oa(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>v.fromName(s.referenceValue))}class Il extends F{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return fr(n)&&_e(n.arrayValue,this.value)}}class Sl extends F{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&_e(this.value.arrayValue,n)}}class Cl extends F{constructor(t,n){super(t,"not-in",n)}matches(t){if(_e(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!_e(this.value.arrayValue,n)}}class bl extends F{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!fr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>_e(this.value.arrayValue,s))}}/**
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
 */class Dl{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function di(e,t=null,n=[],s=[],r=null,i=null,o=null){return new Dl(e,t,n,s,r,i,o)}function gr(e){const t=S(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Os(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),$n(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Wt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Wt(s)).join(",")),t.ft=n}return t.ft}function mr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!yl(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!ra(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!li(e.startAt,t.startAt)&&li(e.endAt,t.endAt)}function Ms(e){return v.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class jn{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Al(e,t,n,s,r,i,o,a){return new jn(e,t,n,s,r,i,o,a)}function aa(e){return new jn(e)}function fi(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function _l(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Nl(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function kl(e){return e.collectionGroup!==null}function qt(e){const t=S(e);if(t.dt===null){t.dt=[];const n=Nl(t),s=_l(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new ge(n)),t.dt.push(new ge(W.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new ge(W.keyField(),i))}}}return t.dt}function mt(e){const t=S(e);if(!t.wt)if(t.limitType==="F")t.wt=di(t.path,t.collectionGroup,qt(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of qt(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new ge(i.field,o))}const s=t.endAt?new En(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new En(t.startAt.position,t.startAt.inclusive):null;t.wt=di(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t.wt}function Ps(e,t,n){return new jn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function qn(e,t){return mr(mt(e),mt(t))&&e.limitType===t.limitType}function ca(e){return`${gr(mt(e))}|lt:${e.limitType}`}function Fs(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>ia(s)).join(", ")}]`),$n(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Wt(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Wt(s)).join(",")),`Target(${n})`}(mt(e))}; limitType=${e.limitType})`}function zn(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):v.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of qt(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=hi(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,qt(n),s)||n.endAt&&!function(r,i,o){const a=hi(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,qt(n),s))}(e,t)}function Rl(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ua(e){return(t,n)=>{let s=!1;for(const r of qt(e)){const i=xl(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function xl(e,t,n){const s=e.field.isKeyField()?v.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Qt(a,c):E()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return E()}}/**
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
 */class re{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){se(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Xo(this.inner)}size(){return this.innerSize}}/**
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
 */const Ll=new B(v.comparator);function pt(){return Ll}const ha=new B(v.comparator);function le(...e){let t=ha;for(const n of e)t=t.insert(n.key,n);return t}function la(e){let t=ha;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Nt(){return me()}function da(){return me()}function me(){return new re(e=>e.toString(),(e,t)=>e.isEqual(t))}const Ol=new B(v.comparator),Ml=new U(v.comparator);function D(...e){let t=Ml;for(const n of e)t=t.add(n);return t}const Pl=new U(N);function fa(){return Pl}/**
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
 */function ga(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wn(t)?"-0":t}}function ma(e){return{integerValue:""+e}}function Fl(e,t){return dl(t)?ma(t):ga(e,t)}/**
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
 */class Kn{constructor(){this._=void 0}}function Vl(e,t,n){return e instanceof Tn?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof Ne?ya(e,t):e instanceof ke?va(e,t):function(s,r){const i=pa(s,r),o=gi(i)+gi(s._t);return Ls(i)&&Ls(s._t)?ma(o):ga(s.serializer,o)}(e,t)}function Ul(e,t,n){return e instanceof Ne?ya(e,t):e instanceof ke?va(e,t):n}function pa(e,t){return e instanceof In?Ls(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Tn extends Kn{}class Ne extends Kn{constructor(t){super(),this.elements=t}}function ya(e,t){const n=wa(t);for(const s of e.elements)n.some(r=>ct(r,s))||n.push(s);return{arrayValue:{values:n}}}class ke extends Kn{constructor(t){super(),this.elements=t}}function va(e,t){let n=wa(t);for(const s of e.elements)n=n.filter(r=>!ct(r,s));return{arrayValue:{values:n}}}class In extends Kn{constructor(t,n){super(),this.serializer=t,this._t=n}}function gi(e){return P(e.integerValue||e.doubleValue)}function wa(e){return fr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Bl(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Ne&&s instanceof Ne||n instanceof ke&&s instanceof ke?Ht(n.elements,s.elements,ct):n instanceof In&&s instanceof In?ct(n._t,s._t):n instanceof Tn&&s instanceof Tn}(e.transform,t.transform)}class $l{constructor(t,n){this.version=t,this.transformResults=n}}class dt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new dt}static exists(t){return new dt(void 0,t)}static updateTime(t){return new dt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function sn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Hn{}function Ea(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Ia(e.key,dt.none()):new qe(e.key,e.data,dt.none());{const n=e.data,s=st.empty();let r=new U(W.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Pt(e.key,s,new it(r.toArray()),dt.none())}}function jl(e,t,n){e instanceof qe?function(s,r,i){const o=s.value.clone(),a=pi(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Pt?function(s,r,i){if(!sn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=pi(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Ta(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function pe(e,t,n,s){return e instanceof qe?function(r,i,o,a){if(!sn(r.precondition,i))return o;const c=r.value.clone(),u=yi(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof Pt?function(r,i,o,a){if(!sn(r.precondition,i))return o;const c=yi(r.fieldTransforms,a,i),u=i.data;return u.setAll(Ta(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(r,i,o){return sn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function ql(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=pa(s.transform,r||null);i!=null&&(n===null&&(n=st.empty()),n.set(s.field,i))}return n||null}function mi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ht(n,s,(r,i)=>Bl(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class qe extends Hn{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Pt extends Hn{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ta(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function pi(e,t,n){const s=new Map;R(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Ul(o,a,n[r]))}return s}function yi(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Vl(i,o,t))}return s}class Ia extends Hn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zl extends Hn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Kl{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&jl(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=pe(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=pe(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=da();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Ea(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(I.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),D())}isEqual(t){return this.batchId===t.batchId&&Ht(this.mutations,t.mutations,(n,s)=>mi(n,s))&&Ht(this.baseMutations,t.baseMutations,(n,s)=>mi(n,s))}}class pr{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){R(t.mutations.length===s.length);let r=Ol;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new pr(t,n,s,r)}}/**
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
 */class Hl{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Gl{constructor(t){this.count=t}}/**
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
 */var M,A;function Ql(e){switch(e){default:return E();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function Sa(e){if(e===void 0)return gt("GRPC error has no .code"),d.UNKNOWN;switch(e){case M.OK:return d.OK;case M.CANCELLED:return d.CANCELLED;case M.UNKNOWN:return d.UNKNOWN;case M.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case M.INTERNAL:return d.INTERNAL;case M.UNAVAILABLE:return d.UNAVAILABLE;case M.UNAUTHENTICATED:return d.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case M.NOT_FOUND:return d.NOT_FOUND;case M.ALREADY_EXISTS:return d.ALREADY_EXISTS;case M.PERMISSION_DENIED:return d.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case M.ABORTED:return d.ABORTED;case M.OUT_OF_RANGE:return d.OUT_OF_RANGE;case M.UNIMPLEMENTED:return d.UNIMPLEMENTED;case M.DATA_LOSS:return d.DATA_LOSS;default:return E()}}(A=M||(M={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class yr{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ze}static getOrCreateInstance(){return Ze===null&&(Ze=new yr),Ze}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let Ze=null;/**
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
 */class Gn{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,ze.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Gn(I.min(),r,fa(),pt(),D())}}class ze{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new ze(s,n,D(),D(),D())}}/**
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
 */class rn{constructor(t,n,s,r){this.It=t,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Ca{constructor(t,n){this.targetId=t,this.Et=n}}class ba{constructor(t,n,s=J.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class vi{constructor(){this.At=0,this.Rt=Ei(),this.vt=J.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(t){t.approximateByteSize()>0&&(this.Pt=!0,this.vt=t)}Ct(){let t=D(),n=D(),s=D();return this.Rt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:E()}}),new ze(this.vt,this.bt,t,n,s)}xt(){this.Pt=!1,this.Rt=Ei()}Nt(t,n){this.Pt=!0,this.Rt=this.Rt.insert(t,n)}kt(t){this.Pt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class Wl{constructor(t){this.Ft=t,this.Bt=new Map,this.Lt=pt(),this.qt=wi(),this.Ut=new U(N)}Kt(t){for(const n of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(n,t.Tt):this.Qt(n,t.key,t.Tt);for(const n of t.removedTargetIds)this.Qt(n,t.key,t.Tt)}zt(t){this.forEachTarget(t,n=>{const s=this.jt(n);switch(t.state){case 0:this.Wt(n)&&s.Dt(t.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(t.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(t.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(t.resumeToken));break;default:E()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.Wt(r)&&n(r)})}Jt(t){var n;const s=t.targetId,r=t.Et.count,i=this.Yt(s);if(i){const o=i.target;if(Ms(o))if(r===0){const a=new v(o.path);this.Qt(s,a,Q.newNoDocument(a,I.min()))}else R(r===1);else{const a=this.Zt(s);a!==r&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=yr.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:t.Et.count}))}}}Xt(t){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Ms(a.target)){const c=new v(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Q.newNoDocument(c,t))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=D();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(t));const r=new Gn(t,n,this.Ut,this.Lt,s);return this.Lt=pt(),this.qt=wi(),this.Ut=new U(N),r}Gt(t,n){if(!this.Wt(t))return;const s=this.te(t,n.key)?2:0;this.jt(t).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(t))}Qt(t,n,s){if(!this.Wt(t))return;const r=this.jt(t);this.te(t,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(t)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(t){this.Bt.delete(t)}Zt(t){const n=this.jt(t).Ct();return this.Ft.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.jt(t).Ot()}jt(t){let n=this.Bt.get(t);return n||(n=new vi,this.Bt.set(t,n)),n}ee(t){let n=this.qt.get(t);return n||(n=new U(N),this.qt=this.qt.insert(t,n)),n}Wt(t){const n=this.Yt(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}Yt(t){const n=this.Bt.get(t);return n&&n.Vt?null:this.Ft.ne(t)}Ht(t){this.Bt.set(t,new vi),this.Ft.getRemoteKeysForTarget(t).forEach(n=>{this.Qt(t,n,null)})}te(t,n){return this.Ft.getRemoteKeysForTarget(t).has(n)}}function wi(){return new B(v.comparator)}function Ei(){return new B(v.comparator)}/**
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
 */const Yl=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Xl=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Jl=(()=>({and:"AND",or:"OR"}))();class Zl{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Sn(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Da(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function td(e,t){return Sn(e,t.toTimestamp())}function at(e){return R(!!e),I.fromTimestamp(function(t){const n=It(t);return new V(n.seconds,n.nanos)}(e))}function vr(e,t){return function(n){return new L(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Aa(e){const t=L.fromString(e);return R(Ra(t)),t}function Vs(e,t){return vr(e.databaseId,t.path)}function ls(e,t){const n=Aa(t);if(n.get(1)!==e.databaseId.projectId)throw new w(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new v(_a(n))}function Us(e,t){return vr(e.databaseId,t)}function ed(e){const t=Aa(e);return t.length===4?L.emptyPath():_a(t)}function Bs(e){return new L(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function _a(e){return R(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Ti(e,t,n){return{name:Vs(e,t),fields:n.value.mapValue.fields}}function nd(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:E()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(R(u===void 0||typeof u=="string"),J.fromBase64String(u||"")):(R(u===void 0||u instanceof Uint8Array),J.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?d.UNKNOWN:Sa(c.code);return new w(u,c.message||"")}(o);n=new ba(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=ls(e,s.document.name),i=at(s.document.updateTime),o=s.document.createTime?at(s.document.createTime):I.min(),a=new st({mapValue:{fields:s.document.fields}}),c=Q.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new rn(u,h,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=ls(e,s.document),i=s.readTime?at(s.readTime):I.min(),o=Q.newNoDocument(r,i),a=s.removedTargetIds||[];n=new rn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=ls(e,s.document),i=s.removedTargetIds||[];n=new rn([],i,r,null)}else{if(!("filter"in t))return E();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new Gl(r),o=s.targetId;n=new Ca(o,i)}}return n}function sd(e,t){let n;if(t instanceof qe)n={update:Ti(e,t.key,t.value)};else if(t instanceof Ia)n={delete:Vs(e,t.key)};else if(t instanceof Pt)n={update:Ti(e,t.key,t.data),updateMask:dd(t.fieldMask)};else{if(!(t instanceof zl))return E();n={verify:Vs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Tn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ne)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ke)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof In)return{fieldPath:i.field.canonicalString(),increment:o._t};throw E()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:td(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:E()}(e,t.precondition)),n}function rd(e,t){return e&&e.length>0?(R(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?at(s.updateTime):at(r);return i.isEqual(I.min())&&(i=at(r)),new $l(i,s.transformResults||[])}(n,t))):[]}function id(e,t){return{documents:[Us(e,t.path)]}}function od(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Us(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Us(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return ka(ut.create(c,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Ut(h.field),direction:ud(h.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.useProto3Json||$n(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function ad(e){let t=ed(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){R(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let i=[];n.where&&(i=function(h){const l=Na(h);return l instanceof ut&&sa(l)?l.getFilters():[l]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new ge(Bt(l.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,$n(l)?null:l}(n.limit));let c=null;n.startAt&&(c=function(h){const l=!!h.before,g=h.values||[];return new En(g,l)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const l=!h.before,g=h.values||[];return new En(g,l)}(n.endAt)),Al(t,r,o,i,a,"F",c,u)}function cd(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return E()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Na(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Bt(t.unaryFilter.field);return F.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Bt(t.unaryFilter.field);return F.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Bt(t.unaryFilter.field);return F.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Bt(t.unaryFilter.field);return F.create(i,"!=",{nullValue:"NULL_VALUE"});default:return E()}}(e):e.fieldFilter!==void 0?function(t){return F.create(Bt(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return E()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return ut.create(t.compositeFilter.filters.map(n=>Na(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return E()}}(t.compositeFilter.op))}(e):E()}function ud(e){return Yl[e]}function hd(e){return Xl[e]}function ld(e){return Jl[e]}function Ut(e){return{fieldPath:e.canonicalString()}}function Bt(e){return W.fromServerFormat(e.fieldPath)}function ka(e){return e instanceof F?function(t){if(t.op==="=="){if(ui(t.value))return{unaryFilter:{field:Ut(t.field),op:"IS_NAN"}};if(ci(t.value))return{unaryFilter:{field:Ut(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ui(t.value))return{unaryFilter:{field:Ut(t.field),op:"IS_NOT_NAN"}};if(ci(t.value))return{unaryFilter:{field:Ut(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ut(t.field),op:hd(t.op),value:t.value}}}(e):e instanceof ut?function(t){const n=t.getFilters().map(s=>ka(s));return n.length===1?n[0]:{compositeFilter:{op:ld(t.op),filters:n}}}(e):E()}function dd(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Ra(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Rt{constructor(t,n,s,r,i=I.min(),o=I.min(),a=J.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Rt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
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
 */class fd{constructor(t){this.se=t}}function gd(e){const t=ad({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ps(t,t.limit,"L"):t}/**
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
 */class md{constructor(){this.He=new pd}addToCollectionParentIndex(t,n){return this.He.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.He.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getIndexType(t,n){return f.resolve(0)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,n){return f.resolve(Tt.min())}getMinOffsetFromCollectionGroup(t,n){return f.resolve(Tt.min())}updateCollectionGroup(t,n,s){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class pd{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new U(L.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new U(L.comparator)).toArray()}}/**
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
 */class Yt{constructor(t){this.Rn=t}next(){return this.Rn+=2,this.Rn}static vn(){return new Yt(0)}static bn(){return new Yt(-1)}}/**
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
 */class yd{constructor(){this.changes=new re(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Q.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?f.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class vd{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class wd{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&pe(s.mutation,r,it.empty(),V.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,D()).next(()=>s))}getLocalViewOfDocuments(t,n,s=D()){const r=Nt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=le();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Nt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,D()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=pt();const o=me(),a=me();return n.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Pt)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),pe(h.mutation,u,h.mutation.getFieldMask(),V.now())):o.set(u.key,it.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var l;return a.set(u,new vd(h,(l=o.get(u))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=me();let r=new B((o,a)=>o-a),i=D();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||it.empty();h=a.applyToLocalView(u,h),s.set(c,h);const l=(r.get(a.batchId)||D()).add(c);r=r.insert(a.batchId,l)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,l=da();h.forEach(g=>{if(!i.has(g)){const m=Ea(n.get(g),s.get(g));m!==null&&l.set(g,m),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,l))}return f.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return v.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):kl(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):f.resolve(Nt());let a=-1,c=i;return o.next(u=>f.forEach(u,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),i.get(h)?f.resolve():this.remoteDocumentCache.getEntry(t,h).next(g=>{c=c.insert(h,g)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,D())).next(h=>({batchId:a,changes:la(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new v(n)).next(s=>{let r=le();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=le();return this.indexManager.getCollectionParents(t,r).next(o=>f.forEach(o,a=>{const c=function(u,h){return new jn(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((h,l)=>{i=i.insert(h,l)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,Q.newInvalidDocument(u)))});let o=le();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&pe(u.mutation,c,it.empty(),V.now()),zn(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class Ed{constructor(t){this.serializer=t,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(t,n){return f.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:at(s.createTime)}),f.resolve()}getNamedQuery(t,n){return f.resolve(this.Xn.get(n))}saveNamedQuery(t,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:gd(s.bundledQuery),readTime:at(s.readTime)}}(n)),f.resolve()}}/**
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
 */class Td{constructor(){this.overlays=new B(v.comparator),this.ts=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Nt();return f.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.re(t,n,i)}),f.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.ts.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(s)),f.resolve()}getOverlaysForCollection(t,n,s){const r=Nt(),i=n.length+1,o=new v(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return f.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new B((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=Nt(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Nt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return f.resolve(a)}re(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(s.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Hl(n,s));let i=this.ts.get(n);i===void 0&&(i=D(),this.ts.set(n,i)),this.ts.set(n,i.add(s.key))}}/**
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
 */class wr{constructor(){this.es=new U($.ns),this.ss=new U($.rs)}isEmpty(){return this.es.isEmpty()}addReference(t,n){const s=new $(t,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.us(new $(t,n))}cs(t,n){t.forEach(s=>this.removeReference(s,n))}hs(t){const n=new v(new L([])),s=new $(n,t),r=new $(n,t+1),i=[];return this.ss.forEachInRange([s,r],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(t=>this.us(t))}us(t){this.es=this.es.delete(t),this.ss=this.ss.delete(t)}fs(t){const n=new v(new L([])),s=new $(n,t),r=new $(n,t+1);let i=D();return this.ss.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new $(t,0),s=this.es.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class ${constructor(t,n){this.key=t,this.ds=n}static ns(t,n){return v.comparator(t.key,n.key)||N(t.ds,n.ds)}static rs(t,n){return N(t.ds,n.ds)||v.comparator(t.key,n.key)}}/**
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
 */class Id{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new U($.ns)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Kl(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new $(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.ys(s),i=r<0?0:r;return f.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new $(n,0),r=new $(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([s,r],o=>{const a=this.gs(o.ds);i.push(a)}),f.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new U(N);return n.forEach(r=>{const i=new $(r,0),o=new $(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{s=s.add(a.ds)})}),f.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;v.isDocumentKey(i)||(i=i.child(""));const o=new $(new v(i),0);let a=new U(N);return this._s.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.ds)),!0)},o),f.resolve(this.ps(a))}ps(t){const n=[];return t.forEach(s=>{const r=this.gs(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){R(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return f.forEach(n.mutations,r=>{const i=new $(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this._s=s})}En(t){}containsKey(t,n){const s=new $(n,0),r=this._s.firstAfterOrEqual(s);return f.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}Is(t,n){return this.ys(t)}ys(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}gs(t){const n=this.ys(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Sd{constructor(t){this.Ts=t,this.docs=new B(v.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return f.resolve(s?s.document.mutableCopy():Q.newInvalidDocument(n))}getEntries(t,n){let s=pt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Q.newInvalidDocument(r))}),f.resolve(s)}getDocumentsMatchingQuery(t,n,s,r){let i=pt();const o=n.path,a=new v(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||ul(cl(h),s)<=0||(r.has(h.key)||zn(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(t,n,s,r){E()}Es(t,n){return f.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Cd(this)}getSize(t){return f.resolve(this.size)}}class Cd extends yd{constructor(t){super(),this.Jn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(t,r)):this.Jn.removeEntry(s)}),f.waitFor(n)}getFromCache(t,n){return this.Jn.getEntry(t,n)}getAllFromCache(t,n){return this.Jn.getEntries(t,n)}}/**
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
 */class bd{constructor(t){this.persistence=t,this.As=new re(n=>gr(n),mr),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.Rs=0,this.vs=new wr,this.targetCount=0,this.bs=Yt.vn()}forEachTarget(t,n){return this.As.forEach((s,r)=>n(r)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.Rs)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),f.resolve()}Sn(t){this.As.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.bs=new Yt(n),this.highestTargetId=n),t.sequenceNumber>this.Rs&&(this.Rs=t.sequenceNumber)}addTargetData(t,n){return this.Sn(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.Sn(n),f.resolve()}removeTargetData(t,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),f.waitFor(i).next(()=>r)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const s=this.As.get(n)||null;return f.resolve(s)}addMatchingKeys(t,n,s){return this.vs.os(n,s),f.resolve()}removeMatchingKeys(t,n,s){this.vs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),f.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.vs.hs(n),f.resolve()}getMatchingKeysForTargetId(t,n){const s=this.vs.fs(n);return f.resolve(s)}containsKey(t,n){return f.resolve(this.vs.containsKey(n))}}/**
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
 */class Dd{constructor(t,n){this.Ps={},this.overlays={},this.Vs=new dr(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=t(this),this.Ds=new bd(this),this.indexManager=new md,this.remoteDocumentCache=function(s){return new Sd(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new fd(n),this.xs=new Ed(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Td,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Ps[t.toKey()];return s||(s=new Id(n,this.referenceDelegate),this.Ps[t.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(t,n,s){y("MemoryPersistence","Starting transaction:",t);const r=new Ad(this.Vs.next());return this.referenceDelegate.Ns(),s(r).next(i=>this.referenceDelegate.ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(t,n){return f.or(Object.values(this.Ps).map(s=>()=>s.containsKey(t,n)))}}class Ad extends ll{constructor(t){super(),this.currentSequenceNumber=t}}class Er{constructor(t){this.persistence=t,this.$s=new wr,this.Ms=null}static Fs(t){return new Er(t)}get Bs(){if(this.Ms)return this.Ms;throw E()}addReference(t,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),f.resolve()}removeReference(t,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.Bs.add(n.toString()),f.resolve()}removeTarget(t,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Bs.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Ns(){this.Ms=new Set}ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Bs,s=>{const r=v.fromPath(s);return this.Ls(t,r).next(i=>{i||n.removeEntry(r,I.min())})}).next(()=>(this.Ms=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ls(t,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(t){return 0}Ls(t,n){return f.or([()=>f.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Os(t,n)])}}/**
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
 */class Tr{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Vi=s,this.Si=r}static Di(t,n){let s=D(),r=D();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Tr(t,n.fromCache,s,r)}}/**
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
 */class _d{constructor(){this.Ci=!1}initialize(t,n){this.xi=t,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(t,n,s,r){return this.Ni(t,n).next(i=>i||this.ki(t,n,r,s)).next(i=>i||this.Oi(t,n))}Ni(t,n){if(fi(n))return f.resolve(null);let s=mt(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Ps(n,null,"F"),s=mt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=D(...i);return this.xi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.$i(n,a);return this.Mi(n,u,o,c.readTime)?this.Ni(t,Ps(n,null,"F")):this.Fi(t,u,n,c)}))})))}ki(t,n,s,r){return fi(n)||r.isEqual(I.min())?this.Oi(t,n):this.xi.getDocuments(t,s).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,s,r)?this.Oi(t,n):(ri()<=_.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Fs(n)),this.Fi(t,o,n,al(r,-1)))})}$i(t,n){let s=new U(ua(t));return n.forEach((r,i)=>{zn(t,i)&&(s=s.add(i))}),s}Mi(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(t,n){return ri()<=_.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Fs(n)),this.xi.getDocumentsMatchingQuery(t,n,Tt.min())}Fi(t,n,s,r){return this.xi.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Nd{constructor(t,n,s,r){this.persistence=t,this.Bi=n,this.serializer=r,this.Li=new B(N),this.qi=new re(i=>gr(i),mr),this.Ui=new Map,this.Ki=t.getRemoteDocumentCache(),this.Ds=t.getTargetCache(),this.xs=t.getBundleCache(),this.Gi(s)}Gi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new wd(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Li))}}function kd(e,t,n,s){return new Nd(e,t,n,s)}async function xa(e,t){const n=S(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Gi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=D();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function Rd(e,t){const n=S(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const h=c.batch,l=h.keys();let g=f.resolve();return l.forEach(m=>{g=g.next(()=>u.getEntry(a,m)).next(b=>{const C=c.docVersions.get(m);R(C!==null),b.version.compareTo(C)<0&&(h.applyToRemoteDocument(b,c),b.isValidDocument()&&(b.setReadTime(c.commitVersion),u.addEntry(b)))})}),g.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=D();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function La(e){const t=S(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ds.getLastRemoteSnapshotVersion(n))}function xd(e,t){const n=S(e),s=t.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];t.targetChanges.forEach((h,l)=>{const g=r.get(l);if(!g)return;a.push(n.Ds.removeMatchingKeys(i,h.removedDocuments,l).next(()=>n.Ds.addMatchingKeys(i,h.addedDocuments,l)));let m=g.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(l)?m=m.withResumeToken(J.EMPTY_BYTE_STRING,I.min()).withLastLimboFreeSnapshotVersion(I.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),r=r.insert(l,m),function(b,C,k){return b.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(g,m,h)&&a.push(n.Ds.updateTargetData(i,m))});let c=pt(),u=D();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(Ld(i,o,t.documentUpdates).next(h=>{c=h.zi,u=h.ji})),!s.isEqual(I.min())){const h=n.Ds.getLastRemoteSnapshotVersion(i).next(l=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return f.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Li=r,i))}function Ld(e,t,n){let s=D(),r=D();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=pt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(I.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{zi:o,ji:r}})}function Od(e,t){const n=S(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Md(e,t){const n=S(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ds.getTargetData(s,t).next(i=>i?(r=i,f.resolve(r)):n.Ds.allocateTargetId(s).next(o=>(r=new Rt(t,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Li.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(t,s.targetId)),s})}async function $s(e,t,n){const s=S(e),r=s.Li.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!je(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Li=s.Li.remove(t),s.qi.delete(r.target)}function Ii(e,t,n){const s=S(e);let r=I.min(),i=D();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=S(a),l=h.qi.get(u);return l!==void 0?f.resolve(h.Li.get(l)):h.Ds.getTargetData(c,u)}(s,o,mt(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,t,n?r:I.min(),n?i:D())).next(a=>(Pd(s,Rl(t),a),{documents:a,Wi:i})))}function Pd(e,t,n){let s=e.Ui.get(t)||I.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Ui.set(t,s)}class Si{constructor(){this.activeTargetIds=fa()}tr(t){this.activeTargetIds=this.activeTargetIds.add(t)}er(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Fd{constructor(){this.Br=new Si,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Br.tr(t),this.Lr[t]||"not-current"}updateQueryState(t,n,s){this.Lr[t]=n}removeLocalQueryTarget(t){this.Br.er(t)}isLocalQueryTarget(t){return this.Br.activeTargetIds.has(t)}clearQueryState(t){delete this.Lr[t]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(t){return this.Br.activeTargetIds.has(t)}start(){return this.Br=new Si,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Vd{qr(t){}shutdown(){}}/**
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
 */class Ci{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Qr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let tn=null;function ds(){return tn===null?tn=268435456+Math.round(2147483648*Math.random()):tn++,"0x"+tn.toString(16)}/**
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
 */const Ud={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Bd{constructor(t){this.Wr=t.Wr,this.Hr=t.Hr}Jr(t){this.Yr=t}Zr(t){this.Xr=t}onMessage(t){this.eo=t}close(){this.Hr()}send(t){this.Wr(t)}no(){this.Yr()}so(t){this.Xr(t)}io(t){this.eo(t)}}/**
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
 */const H="WebChannelConnection";class $d extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.ro=n+"://"+t.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(t,n,s,r,i){const o=ds(),a=this.ao(t,n);y("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const c={};return this.ho(c,r,i),this.lo(t,a,c,s).then(u=>(y("RestConnection",`Received RPC '${t}' ${o}: `,u),u),u=>{throw vn("RestConnection",`RPC '${t}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}fo(t,n,s,r,i,o){return this.co(t,n,s,r,i)}ho(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+ne,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}ao(t,n){const s=Ud[t];return`${this.ro}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,n,s,r){const i=ds();return new Promise((o,a)=>{const c=new Xh;c.setWithCredentials(!0),c.listenOnce(Qh.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case hs.NO_ERROR:const h=c.getResponseJson();y(H,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(h)),o(h);break;case hs.TIMEOUT:y(H,`RPC '${t}' ${i} timed out`),a(new w(d.DEADLINE_EXCEEDED,"Request time out"));break;case hs.HTTP_ERROR:const l=c.getStatus();if(y(H,`RPC '${t}' ${i} failed with status:`,l,"response text:",c.getResponseText()),l>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const m=g==null?void 0:g.error;if(m&&m.status&&m.message){const b=function(C){const k=C.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(k)>=0?k:d.UNKNOWN}(m.status);a(new w(b,m.message))}else a(new w(d.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new w(d.UNAVAILABLE,"Connection failed."));break;default:E()}}finally{y(H,`RPC '${t}' ${i} completed.`)}});const u=JSON.stringify(r);y(H,`RPC '${t}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}wo(t,n,s){const r=ds(),i=[this.ro,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Hh(),a=Gh(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new Yh({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");y(H,`Creating RPC '${t}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let l=!1,g=!1;const m=new Bd({Wr:C=>{g?y(H,`Not sending because RPC '${t}' stream ${r} is closed:`,C):(l||(y(H,`Opening RPC '${t}' stream ${r} transport.`),h.open(),l=!0),y(H,`RPC '${t}' stream ${r} sending:`,C),h.send(C))},Hr:()=>h.close()}),b=(C,k,Z)=>{C.listen(k,et=>{try{Z(et)}catch(ht){setTimeout(()=>{throw ht},0)}})};return b(h,Ye.EventType.OPEN,()=>{g||y(H,`RPC '${t}' stream ${r} transport opened.`)}),b(h,Ye.EventType.CLOSE,()=>{g||(g=!0,y(H,`RPC '${t}' stream ${r} transport closed`),m.so())}),b(h,Ye.EventType.ERROR,C=>{g||(g=!0,vn(H,`RPC '${t}' stream ${r} transport errored:`,C),m.so(new w(d.UNAVAILABLE,"The operation could not be completed")))}),b(h,Ye.EventType.MESSAGE,C=>{var k;if(!g){const Z=C.data[0];R(!!Z);const et=Z,ht=et.error||((k=et[0])===null||k===void 0?void 0:k.error);if(ht){y(H,`RPC '${t}' stream ${r} received error:`,ht);const oe=ht.status;let ae=function(dc){const Mr=M[dc];if(Mr!==void 0)return Sa(Mr)}(oe),Or=ht.message;ae===void 0&&(ae=d.INTERNAL,Or="Unknown error status: "+oe+" with message "+ht.message),g=!0,m.so(new w(ae,Or)),h.close()}else y(H,`RPC '${t}' stream ${r} received:`,Z),m.io(Z)}}),b(a,Wh.STAT_EVENT,C=>{C.stat===ni.PROXY?y(H,`RPC '${t}' stream ${r} detected buffering proxy`):C.stat===ni.NOPROXY&&y(H,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{m.no()},0),m}}function fs(){return typeof document<"u"?document:null}/**
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
 */function Qn(e){return new Zl(e,!0)}/**
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
 */class Oa{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Ws=t,this.timerId=n,this._o=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&y("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),t())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class Ma{constructor(t,n,s,r,i,o,a,c){this.Ws=t,this.bo=s,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Oa(t,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(t){this.Bo(),this.stream.send(t)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(t,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,t!==4?this.Co.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(gt(n.toString()),gt("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const t=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.Ko(s,r)},s=>{t(()=>{const r=new w(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(r)})})}Ko(t,n){const s=this.Uo(this.Vo);this.stream=this.Qo(t,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{s(()=>this.Go(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jd extends Ma{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}Qo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.Co.reset();const n=nd(this.serializer,t),s=function(r){if(!("targetChange"in r))return I.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?I.min():i.readTime?at(i.readTime):I.min()}(t);return this.listener.zo(n,s)}jo(t){const n={};n.database=Bs(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;return o=Ms(a)?{documents:id(r,a)}:{query:od(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Da(r,i.resumeToken):i.snapshotVersion.compareTo(I.min())>0&&(o.readTime=Sn(r,i.snapshotVersion.toTimestamp())),o}(this.serializer,t);const s=cd(this.serializer,t);s&&(n.labels=s),this.Fo(n)}Wo(t){const n={};n.database=Bs(this.serializer),n.removeTarget=t,this.Fo(n)}}class qd extends Ma{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(R(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Ho){this.Co.reset();const n=rd(t.writeResults,t.commitTime),s=at(t.commitTime);return this.listener.Zo(s,n)}return R(!t.writeResults||t.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const t={};t.database=Bs(this.serializer),this.Fo(t)}Yo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>sd(this.serializer,s))};this.Fo(n)}}/**
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
 */class zd extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new w(d.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(d.UNKNOWN,r.toString())})}fo(t,n,s,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(d.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class Kd{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(t){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.uu("Offline")))}set(t){this.hu(),this.su=0,t==="Online"&&(this.ru=!1),this.uu(t)}uu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}cu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(gt(n),this.ru=!1):y("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class Hd{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{s.enqueueAndForget(async()=>{Ft(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=S(a);c.du.add(4),await Ke(c),c.mu.set("Unknown"),c.du.delete(4),await Wn(c)}(this))})}),this.mu=new Kd(s,r)}}async function Wn(e){if(Ft(e))for(const t of e.wu)await t(!0)}async function Ke(e){for(const t of e.wu)await t(!1)}function Pa(e,t){const n=S(e);n.fu.has(t.targetId)||(n.fu.set(t.targetId,t),Cr(n)?Sr(n):ie(n).No()&&Ir(n,t))}function Fa(e,t){const n=S(e),s=ie(n);n.fu.delete(t),s.No()&&Va(n,t),n.fu.size===0&&(s.No()?s.$o():Ft(n)&&n.mu.set("Unknown"))}function Ir(e,t){e.gu.Ot(t.targetId),ie(e).jo(t)}function Va(e,t){e.gu.Ot(t),ie(e).Wo(t)}function Sr(e){e.gu=new Wl({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.fu.get(t)||null}),ie(e).start(),e.mu.ou()}function Cr(e){return Ft(e)&&!ie(e).xo()&&e.fu.size>0}function Ft(e){return S(e).du.size===0}function Ua(e){e.gu=void 0}async function Gd(e){e.fu.forEach((t,n)=>{Ir(e,t)})}async function Qd(e,t){Ua(e),Cr(e)?(e.mu.au(t),Sr(e)):e.mu.set("Unknown")}async function Wd(e,t,n){if(e.mu.set("Online"),t instanceof ba&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.fu.delete(o),s.gu.removeTarget(o))}(e,t)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Cn(e,s)}else if(t instanceof rn?e.gu.Kt(t):t instanceof Ca?e.gu.Jt(t):e.gu.zt(t),!n.isEqual(I.min()))try{const s=await La(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.fu.get(c);u&&r.fu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken(J.EMPTY_BYTE_STRING,c.snapshotVersion)),Va(r,a);const u=new Rt(c.target,a,1,c.sequenceNumber);Ir(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await Cn(e,s)}}async function Cn(e,t,n){if(!je(t))throw t;e.du.add(1),await Ke(e),e.mu.set("Offline"),n||(n=()=>La(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.du.delete(1),await Wn(e)})}function Ba(e,t){return t().catch(n=>Cn(e,n,t))}async function Yn(e){const t=S(e),n=St(t);let s=t.lu.length>0?t.lu[t.lu.length-1].batchId:-1;for(;Yd(t);)try{const r=await Od(t.localStore,s);if(r===null){t.lu.length===0&&n.$o();break}s=r.batchId,Xd(t,r)}catch(r){await Cn(t,r)}$a(t)&&ja(t)}function Yd(e){return Ft(e)&&e.lu.length<10}function Xd(e,t){e.lu.push(t);const n=St(e);n.No()&&n.Jo&&n.Yo(t.mutations)}function $a(e){return Ft(e)&&!St(e).xo()&&e.lu.length>0}function ja(e){St(e).start()}async function Jd(e){St(e).tu()}async function Zd(e){const t=St(e);for(const n of e.lu)t.Yo(n.mutations)}async function tf(e,t,n){const s=e.lu.shift(),r=pr.from(s,t,n);await Ba(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Yn(e)}async function ef(e,t){t&&St(e).Jo&&await async function(n,s){if(r=s.code,Ql(r)&&r!==d.ABORTED){const i=n.lu.shift();St(n).Oo(),await Ba(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Yn(n)}var r}(e,t),$a(e)&&ja(e)}async function bi(e,t){const n=S(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=Ft(n);n.du.add(3),await Ke(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.du.delete(3),await Wn(n)}async function nf(e,t){const n=S(e);t?(n.du.delete(2),await Wn(n)):t||(n.du.add(2),await Ke(n),n.mu.set("Unknown"))}function ie(e){return e.yu||(e.yu=function(t,n,s){const r=S(t);return r.nu(),new jd(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{Jr:Gd.bind(null,e),Zr:Qd.bind(null,e),zo:Wd.bind(null,e)}),e.wu.push(async t=>{t?(e.yu.Oo(),Cr(e)?Sr(e):e.mu.set("Unknown")):(await e.yu.stop(),Ua(e))})),e.yu}function St(e){return e.pu||(e.pu=function(t,n,s){const r=S(t);return r.nu(),new qd(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{Jr:Jd.bind(null,e),Zr:ef.bind(null,e),Xo:Zd.bind(null,e),Zo:tf.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Oo(),await Yn(e)):(await e.pu.stop(),e.lu.length>0&&(y("RemoteStore",`Stopping write stream with ${e.lu.length} pending writes`),e.lu=[]))})),e.pu}/**
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
 */class br{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new br(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dr(e,t){if(gt("AsyncQueue",`${t}: ${e}`),je(e))return new w(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class zt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||v.comparator(n.key,s.key):(n,s)=>v.comparator(n.key,s.key),this.keyedMap=le(),this.sortedSet=new B(this.comparator)}static emptySet(t){return new zt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof zt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new zt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class Di{constructor(){this.Iu=new B(v.comparator)}track(t){const n=t.doc.key,s=this.Iu.get(n);s?t.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,t):t.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Iu=this.Iu.remove(n):t.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:t.doc}):E():this.Iu=this.Iu.insert(n,t)}Tu(){const t=[];return this.Iu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Xt{constructor(t,n,s,r,i,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Xt(t,n,zt.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&qn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class sf{constructor(){this.Eu=void 0,this.listeners=[]}}class rf{constructor(){this.queries=new re(t=>ca(t),qn),this.onlineState="Unknown",this.Au=new Set}}async function of(e,t){const n=S(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new sf),r)try{i.Eu=await n.onListen(s)}catch(o){const a=Dr(o,`Initialization of query '${Fs(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.Ru(n.onlineState),i.Eu&&t.vu(i.Eu)&&Ar(n)}async function af(e,t){const n=S(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function cf(e,t){const n=S(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Eu=r}}s&&Ar(n)}function uf(e,t,n){const s=S(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function Ar(e){e.Au.forEach(t=>{t.next()})}class hf{constructor(t,n,s){this.query=t,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new Xt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Pu?this.Su(t)&&(this.bu.next(t),n=!0):this.Du(t,this.onlineState)&&(this.Cu(t),n=!0),this.Vu=t,n}onError(t){this.bu.error(t)}Ru(t){this.onlineState=t;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,t)&&(this.Cu(this.Vu),n=!0),n}Du(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Su(t){if(t.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(t){t=Xt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Pu=!0,this.bu.next(t)}}/**
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
 */class qa{constructor(t){this.key=t}}class za{constructor(t){this.key=t}}class lf{constructor(t,n){this.query=t,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=D(),this.mutatedKeys=D(),this.Ku=ua(t),this.Gu=new zt(this.Ku)}get Qu(){return this.Lu}zu(t,n){const s=n?n.ju:new Di,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((h,l)=>{const g=r.get(h),m=zn(this.query,l)?l:null,b=!!g&&this.mutatedKeys.has(g.key),C=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let k=!1;g&&m?g.data.isEqual(m.data)?b!==C&&(s.track({type:3,doc:m}),k=!0):this.Wu(g,m)||(s.track({type:2,doc:m}),k=!0,(c&&this.Ku(m,c)>0||u&&this.Ku(m,u)<0)&&(a=!0)):!g&&m?(s.track({type:0,doc:m}),k=!0):g&&!m&&(s.track({type:1,doc:g}),k=!0,(c||u)&&(a=!0)),k&&(m?(o=o.add(m),i=C?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{Gu:o,ju:s,Mi:a,mutatedKeys:i}}Wu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const i=t.ju.Tu();i.sort((u,h)=>function(l,g){const m=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return E()}};return m(l)-m(g)}(u.type,h.type)||this.Ku(u.doc,h.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Xt(this.query,t.Gu,r,i,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Di,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.Uu;this.Uu=D(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return t.forEach(s=>{this.Uu.has(s)||n.push(new za(s))}),this.Uu.forEach(s=>{t.has(s)||n.push(new qa(s))}),n}Xu(t){this.Lu=t.Wi,this.Uu=D();const n=this.zu(t.documents);return this.applyChanges(n,!0)}tc(){return Xt.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class df{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class ff{constructor(t){this.key=t,this.ec=!1}}class gf{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new re(a=>ca(a),qn),this.ic=new Map,this.rc=new Set,this.oc=new B(v.comparator),this.uc=new Map,this.cc=new wr,this.ac={},this.hc=new Map,this.lc=Yt.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function mf(e,t){const n=bf(e);let s,r;const i=n.sc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await Md(n.localStore,mt(t));n.isPrimaryClient&&Pa(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await pf(n,t,s,a==="current",o.resumeToken)}return r}async function pf(e,t,n,s,r){e.dc=(l,g,m)=>async function(b,C,k,Z){let et=C.view.zu(k);et.Mi&&(et=await Ii(b.localStore,C.query,!1).then(({documents:ae})=>C.view.zu(ae,et)));const ht=Z&&Z.targetChanges.get(C.targetId),oe=C.view.applyChanges(et,b.isPrimaryClient,ht);return _i(b,C.targetId,oe.Yu),oe.snapshot}(e,l,g,m);const i=await Ii(e.localStore,t,!0),o=new lf(t,i.Wi),a=o.zu(i.documents),c=ze.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),u=o.applyChanges(a,e.isPrimaryClient,c);_i(e,n,u.Yu);const h=new df(t,n,o);return e.sc.set(t,h),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),u.snapshot}async function yf(e,t){const n=S(e),s=n.sc.get(t),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!qn(i,t))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await $s(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Fa(n.remoteStore,s.targetId),js(n,s.targetId)}).catch($e)):(js(n,s.targetId),await $s(n.localStore,s.targetId,!0))}async function vf(e,t,n){const s=Df(e);try{const r=await function(i,o){const a=S(i),c=V.now(),u=o.reduce((g,m)=>g.add(m.key),D());let h,l;return a.persistence.runTransaction("Locally write mutations","readwrite",g=>{let m=pt(),b=D();return a.Ki.getEntries(g,u).next(C=>{m=C,m.forEach((k,Z)=>{Z.isValidDocument()||(b=b.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(g,m)).next(C=>{h=C;const k=[];for(const Z of o){const et=ql(Z,h.get(Z.key).overlayedDocument);et!=null&&k.push(new Pt(Z.key,et,ta(et.value.mapValue),dt.exists(!0)))}return a.mutationQueue.addMutationBatch(g,c,k,o)}).next(C=>{l=C;const k=C.applyToLocalDocumentSet(h,b);return a.documentOverlayCache.saveOverlays(g,C.batchId,k)})}).then(()=>({batchId:l.batchId,changes:la(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new B(N)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await He(s,r.changes),await Yn(s.remoteStore)}catch(r){const i=Dr(r,"Failed to persist write");n.reject(i)}}async function Ka(e,t){const n=S(e);try{const s=await xd(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(R(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?R(o.ec):r.removedDocuments.size>0&&(R(o.ec),o.ec=!1))}),await He(n,s,t)}catch(s){await $e(s)}}function Ai(e,t,n){const s=S(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.Ru(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=S(i);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const l of h.listeners)l.Ru(o)&&(c=!0)}),c&&Ar(a)}(s.eventManager,t),r.length&&s.nc.zo(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function wf(e,t,n){const s=S(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.uc.get(t),i=r&&r.key;if(i){let o=new B(v.comparator);o=o.insert(i,Q.newNoDocument(i,I.min()));const a=D().add(i),c=new Gn(I.min(),new Map,new U(N),o,a);await Ka(s,c),s.oc=s.oc.remove(i),s.uc.delete(t),_r(s)}else await $s(s.localStore,t,!1).then(()=>js(s,t,n)).catch($e)}async function Ef(e,t){const n=S(e),s=t.batch.batchId;try{const r=await Rd(n.localStore,t);Ga(n,s,null),Ha(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await He(n,r)}catch(r){await $e(r)}}async function Tf(e,t,n){const s=S(e);try{const r=await function(i,o){const a=S(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(h=>(R(h!==null),u=h.keys(),a.mutationQueue.removeMutationBatch(c,h))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);Ga(s,t,n),Ha(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await He(s,r)}catch(r){await $e(r)}}function Ha(e,t){(e.hc.get(t)||[]).forEach(n=>{n.resolve()}),e.hc.delete(t)}function Ga(e,t,n){const s=S(e);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.ac[s.currentUser.toKey()]=r}}function js(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ic.get(t))e.sc.delete(s),n&&e.nc.wc(s,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach(s=>{e.cc.containsKey(s)||Qa(e,s)})}function Qa(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);n!==null&&(Fa(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),_r(e))}function _i(e,t,n){for(const s of n)s instanceof qa?(e.cc.addReference(s.key,t),If(e,s)):s instanceof za?(y("SyncEngine","Document no longer in limbo: "+s.key),e.cc.removeReference(s.key,t),e.cc.containsKey(s.key)||Qa(e,s.key)):E()}function If(e,t){const n=t.key,s=n.path.canonicalString();e.oc.get(n)||e.rc.has(s)||(y("SyncEngine","New document in limbo: "+n),e.rc.add(s),_r(e))}function _r(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new v(L.fromString(t)),s=e.lc.next();e.uc.set(s,new ff(n)),e.oc=e.oc.insert(n,s),Pa(e.remoteStore,new Rt(mt(aa(n.path)),s,2,dr.ct))}}async function He(e,t,n){const s=S(e),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,t,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const h=Tr.Di(c.targetId,u);i.push(h)}}))}),await Promise.all(o),s.nc.zo(r),await async function(a,c){const u=S(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>f.forEach(c,l=>f.forEach(l.Vi,g=>u.persistence.referenceDelegate.addReference(h,l.targetId,g)).next(()=>f.forEach(l.Si,g=>u.persistence.referenceDelegate.removeReference(h,l.targetId,g)))))}catch(h){if(!je(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const l=h.targetId;if(!h.fromCache){const g=u.Li.get(l),m=g.snapshotVersion,b=g.withLastLimboFreeSnapshotVersion(m);u.Li=u.Li.insert(l,b)}}}(s.localStore,i))}async function Sf(e,t){const n=S(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await xa(n.localStore,t);n.currentUser=t,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new w(d.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await He(n,s.Qi)}}function Cf(e,t){const n=S(e),s=n.uc.get(t);if(s&&s.ec)return D().add(s.key);{let r=D();const i=n.ic.get(t);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function bf(e){const t=S(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ka.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Cf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=wf.bind(null,t),t.nc.zo=cf.bind(null,t.eventManager),t.nc.wc=uf.bind(null,t.eventManager),t}function Df(e){const t=S(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ef.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Tf.bind(null,t),t}class Ni{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Qn(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return kd(this.persistence,new _d,t.initialUser,this.serializer)}createPersistence(t){return new Dd(Er.Fs,this.serializer)}createSharedClientState(t){return new Fd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Af{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ai(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sf.bind(null,this.syncEngine),await nf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new rf}createDatastore(t){const n=Qn(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new $d(r));var r;return function(i,o,a,c){return new zd(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>Ai(this.syncEngine,a,0),o=Ci.D()?new Ci:new Vd,new Hd(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,u){const h=new gf(s,r,i,o,a,c);return u&&(h.fc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=S(t);y("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Ke(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class _f{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.gc(this.observer.next,t)}error(t){this.observer.error?this.gc(this.observer.error,t):gt("Uncaught Error in snapshot listener:",t.toString())}yc(){this.muted=!0}gc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class Nf{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=G.UNAUTHENTICATED,this.clientId=Yo.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{y("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(y("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Dr(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function gs(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await xa(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ki(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Rf(e);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>bi(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>bi(t.remoteStore,i)),e._onlineComponents=t}function kf(e){return e.name==="FirebaseError"?e.code===d.FAILED_PRECONDITION||e.code===d.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Rf(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await gs(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!kf(n))throw n;vn("Error using user provided cache. Falling back to memory cache: "+n),await gs(e,new Ni)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await gs(e,new Ni);return e._offlineComponents}async function Wa(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await ki(e,e._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await ki(e,new Af))),e._onlineComponents}function xf(e){return Wa(e).then(t=>t.syncEngine)}async function Lf(e){const t=await Wa(e),n=t.eventManager;return n.onListen=mf.bind(null,t.syncEngine),n.onUnlisten=yf.bind(null,t.syncEngine),n}function Of(e,t,n={}){const s=new wt;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new _f({next:l=>{i.enqueueAndForget(()=>af(r,h)),l.fromCache&&a.source==="server"?c.reject(new w(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(l)},error:l=>c.reject(l)}),h=new hf(o,u,{includeMetadataChanges:!0,xu:!0});return of(r,h)}(await Lf(e),e.asyncQueue,t,n,s)),s.promise}/**
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
 */const Ri=new Map;/**
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
 */function Ya(e,t,n){if(!n)throw new w(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Mf(e,t,n,s){if(t===!0&&s===!0)throw new w(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function xi(e){if(!v.isDocumentKey(e))throw new w(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Li(e){if(v.isDocumentKey(e))throw new w(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Nr(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":E()}function Re(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nr(e);throw new w(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Oi{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new w(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Mf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Xn{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oi({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oi(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Jh;switch(n.type){case"firstParty":return new nl(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new w(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Ri.get(t);n&&(y("ComponentProvider","Removing Datastore"),Ri.delete(t),n.terminate())}(this),Promise.resolve()}}function Pf(e,t,n,s={}){var r;const i=(e=Re(e,Xn))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&vn("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=G.MOCK_USER;else{o=Oc(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new w(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new G(c)}e._authCredentials=new Zh(new Wo(o,a))}}/**
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
 */class rt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Et(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new rt(this.firestore,t,this._key)}}class Jn{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Jn(this.firestore,t,this._query)}}class Et extends Jn{constructor(t,n,s){super(t,n,aa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new rt(this.firestore,null,new v(t))}withConverter(t){return new Et(this.firestore,t,this._path)}}function Ff(e,t,...n){if(e=ye(e),Ya("collection","path",t),e instanceof Xn){const s=L.fromString(t,...n);return Li(s),new Et(e,null,s)}{if(!(e instanceof rt||e instanceof Et))throw new w(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(L.fromString(t,...n));return Li(s),new Et(e.firestore,null,s)}}function Vf(e,t,...n){if(e=ye(e),arguments.length===1&&(t=Yo.A()),Ya("doc","path",t),e instanceof Xn){const s=L.fromString(t,...n);return xi(s),new rt(e,null,new v(s))}{if(!(e instanceof rt||e instanceof Et))throw new w(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(L.fromString(t,...n));return xi(s),new rt(e.firestore,e instanceof Et?e.converter:null,new v(s))}}/**
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
 */class Uf{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Oa(this,"async_queue_retry"),this.qc=()=>{const n=fs();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const t=fs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Uc(),this.Kc(t)}enterRestrictedMode(t){if(!this.Oc){this.Oc=!0,this.Bc=t||!1;const n=fs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(t){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new wt;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.kc.push(t),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(t){if(!je(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(t){const n=this.Nc.then(()=>(this.Fc=!0,t().catch(s=>{this.Mc=s,this.Fc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw gt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(t,n,s){this.Uc(),this.Lc.indexOf(t)>-1&&(n=0);const r=br.createAndSchedule(this,t,n,s,i=>this.Qc(i));return this.$c.push(r),r}Uc(){this.Mc&&E()}verifyOperationInProgress(){}async zc(){let t;do t=this.Nc,await t;while(t!==this.Nc)}jc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Wc(t){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Hc(t){this.Lc.push(t)}Qc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}class kr extends Xn{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new Uf,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ja(this),this._firestoreClient.terminate()}}function Bf(e,t){const n=typeof e=="object"?e:Vu(),s=typeof e=="string"?e:t||"(default)",r=Ou(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Rc("firestore");i&&Pf(r,...i)}return r}function Xa(e){return e._firestoreClient||Ja(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ja(e){var t,n,s;const r=e._freezeSettings(),i=function(o,a,c,u){return new ml(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new Nf(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class Jt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Jt(J.fromBase64String(t))}catch(n){throw new w(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Jt(J.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Rr{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Za{constructor(t){this._methodName=t}}/**
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
 */class xr{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return N(this._lat,t._lat)||N(this._long,t._long)}}/**
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
 */const $f=/^__.*__$/;class jf{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Pt(t,this.data,this.fieldMask,n,this.fieldTransforms):new qe(t,this.data,n,this.fieldTransforms)}}function tc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E()}}class Lr{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(t){return new Lr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Zc({path:s,ta:!1});return r.ea(t),r}na(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Zc({path:s,ta:!1});return r.Jc(),r}sa(t){return this.Zc({path:void 0,ta:!0})}ia(t){return bn(t,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let t=0;t<this.path.length;t++)this.ea(this.path.get(t))}ea(t){if(t.length===0)throw this.ia("Document fields must not be empty");if(tc(this.Yc)&&$f.test(t))throw this.ia('Document fields cannot begin and end with "__"')}}class qf{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Qn(t)}ua(t,n,s,r=!1){return new Lr({Yc:t,methodName:n,oa:s,path:W.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zf(e){const t=e._freezeSettings(),n=Qn(e._databaseId);return new qf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Kf(e,t,n,s,r,i={}){const o=e.ua(i.merge||i.mergeFields?2:0,t,n,r);rc("Data must be an object, but it was:",o,s);const a=nc(s,o);let c,u;if(i.merge)c=new it(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const l of i.mergeFields){const g=Hf(t,l,n);if(!o.contains(g))throw new w(d.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Qf(h,g)||h.push(g)}c=new it(h),u=o.fieldTransforms.filter(l=>c.covers(l.field))}else c=null,u=o.fieldTransforms;return new jf(new st(a),c,u)}function ec(e,t){if(sc(e=ye(e)))return rc("Unsupported field value:",t,e),nc(e,t);if(e instanceof Za)return function(n,s){if(!tc(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&t.Yc!==4)throw t.ia("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=ec(o,s.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=ye(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Fl(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=V.fromDate(n);return{timestampValue:Sn(s.serializer,r)}}if(n instanceof V){const r=new V(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Sn(s.serializer,r)}}if(n instanceof xr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Jt)return{bytesValue:Da(s.serializer,n._byteString)};if(n instanceof rt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:vr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${Nr(n)}`)}(e,t)}function nc(e,t){const n={};return Xo(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):se(e,(s,r)=>{const i=ec(r,t.Xc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function sc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof V||e instanceof xr||e instanceof Jt||e instanceof rt||e instanceof Za)}function rc(e,t,n){if(!sc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Nr(n);throw s==="an object"?t.ia(e+" a custom object"):t.ia(e+" "+s)}}function Hf(e,t,n){if((t=ye(t))instanceof Rr)return t._internalPath;if(typeof t=="string")return ic(e,t);throw bn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Gf=new RegExp("[~\\*/\\[\\]]");function ic(e,t,n){if(t.search(Gf)>=0)throw bn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Rr(...t.split("."))._internalPath}catch{throw bn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function bn(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new w(d.INVALID_ARGUMENT,a+e+c)}function Qf(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class oc{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Wf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(ac("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Wf extends oc{data(){return super.data()}}function ac(e,t){return typeof t=="string"?ic(e,t):t instanceof Rr?t._internalPath:t._delegate._internalPath}/**
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
 */function Yf(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new w(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xf{convertValue(t,n="none"){switch(Ot(t)){case 0:return null;case 1:return t.booleanValue;case 2:return P(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Gt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw E()}}convertObject(t,n){const s={};return se(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new xr(P(t.latitude),P(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Zo(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(De(t));default:return null}}convertTimestamp(t){const n=It(t);return new V(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=L.fromString(t);R(Ra(s));const r=new Ae(s.get(1),s.get(3)),i=new v(s.popFirst(5));return r.isEqual(n)||gt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Jf(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
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
 */class en{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Zf extends oc{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new on(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(ac("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class on extends Zf{data(t={}){return super.data(t)}}class tg{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new en(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new on(this._firestore,this._userDataWriter,s.key,s,new en(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new on(s._firestore,s._userDataWriter,o.doc.key,o.doc,new en(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new on(s._firestore,s._userDataWriter,o.doc.key,o.doc,new en(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:eg(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function eg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return E()}}class ng extends Xf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Jt(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new rt(this.firestore,null,n)}}function sg(e){e=Re(e,Jn);const t=Re(e.firestore,kr),n=Xa(t),s=new ng(t);return Yf(e._query),Of(n,e._query).then(r=>new tg(t,s,e,r))}function rg(e,t,n){e=Re(e,rt);const s=Re(e.firestore,kr),r=Jf(e.converter,t,n);return ig(s,[Kf(zf(s),"setDoc",e._key,r,e.converter!==null,n).toMutation(e._key,dt.none())])}function ig(e,t){return function(n,s){const r=new wt;return n.asyncQueue.enqueueAndForget(async()=>vf(await xf(n),s,r)),r.promise}(Xa(e),t)}(function(e,t=!0){(function(n){ne=n})(Fu),un(new ve("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new kr(new tl(n.getProvider("auth-internal")),new rl(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new w(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ae(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),jt(si,"3.10.0",e),jt(si,"3.10.0","esm2017")})();const og={apiKey:"AIzaSyCoMs2TP-zPIa5b7QnzVfjhetfq7t_4NEo",authDomain:"aihub-992d3.firebaseapp.com",projectId:"aihub-992d3",storageBucket:"aihub-992d3.appspot.com",messagingSenderId:"110086387351",appId:"1:110086387351:web:c6f5b7d3198c028715dbd2",measurementId:"G-HZ8XK13BEB"},ag=qi(og),cc="models",uc=Bf(ag);function hc(e,t){console.log("start...."+e),rg(Vf(uc,cc,e),t)}async function lc(){const e=await sg(Ff(uc,cc));var t=[];return e.forEach(n=>{t.push(n.data())}),t}function cg(e){Tc(e).then(async t=>{console.log(t.data.items);for(var n=0,s=t.data.items.length;n<s;n++)hc(t.data.items[n].id.toString(),t.data.items[n]);console.log("Done")}).catch(t=>{console.log(t)})}function ug(){lc().then(e=>{hg(e)})}function hg(e){for(var t=0,n=e.length;t<n;t++)e[t];console.log("Done")}var Mi=[];function lg(){lc().then(e=>{dg(e)})}async function dg(e){for(var t=0,n=e.length;t<n;t++){let c=!1,u=e[t];for(var s=0,r=u.modelVersions.length;s<r;s++)for(var i=0,o=u.modelVersions[s].images.length;i<o;i++){let h=u.modelVersions[s].images[i];if(h.url.startsWith("https://imagecache.civitai.com"))if(c=!0,h.nsfw)h.url="cover02.png";else{let l=h.url;Mi.push(l);var a=l.split("/").pop();h.url=a}}c&&hc(u.id.toString(),e[t])}console.log(Mi),console.log("Done")}const fg={name:"DataSync",data(){return{page:1}},methods:{syncData(){console.log(this.page),cg(this.page)},printImgList(){lg()},setConverImgUrl(){ug()},testFun(){console.log(Math.random())}},mounted(){}};function gg(e,t,n,s,r,i){return mc(),pc("div",null,[Vt("div",null,[yc(Vt("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>r.page=o)},null,512),[[vc,r.page]]),wc(),Vt("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=(...o)=>i.syncData&&i.syncData(...o))},"1,开始同步"),Vt("button",{type:"button",class:"btn btn-primary",onClick:t[2]||(t[2]=(...o)=>i.printImgList&&i.printImgList(...o))},"2,Print & Update Image URL List"),Vt("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=(...o)=>i.setConverImgUrl&&i.setConverImgUrl(...o))},"3,更新Cover"),Vt("button",{type:"button",class:"btn btn-primary",onClick:t[4]||(t[4]=(...o)=>i.testFun&&i.testFun(...o))},"Fun")])])}const vg=gc(fg,[["render",gg]]);export{vg as default};
