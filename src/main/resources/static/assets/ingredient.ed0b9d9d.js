import{x as Ee,aC as De,a1 as L,L as he,a2 as ce,B as ue,D as Z,c as y,ar as Oe,aD as qe,aw as Te,ap as Fe,W as $e,Z as te,at as Pe,au as Ne,aE as Ie,s as w,Y as ne,O as ze,S as je,aF as Le,M as pe,aG as Ze,v as oe,ao as Ke,a6 as Ue,aA as He,q as Ae,ay as be,d as Qe,o as Ye,p as We,f as de,g as m,w as h,i as Ce,k as G,l as J,m as P,t as X}from"./index.d24fbe54.js";import{a as N}from"./route-block.50262eb6.js";function Ge({validate:e,resetValidation:t,requiresQForm:r}){const i=Ee(De,!1);if(i!==!1){const{props:f,proxy:d}=ue();Object.assign(d,{validate:e,resetValidation:t}),L(()=>f.disable,c=>{c===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),he(()=>{f.disable!==!0&&i.bindComponent(d)}),ce(()=>{f.disable!==!0&&i.unbindComponent(d)})}else r===!0&&console.error("Parent QForm not found on useFormChild()!")}const ye=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ke=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,xe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,re=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ie=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ve={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ye.test(e),hexaColor:e=>ke.test(e),hexOrHexaColor:e=>xe.test(e),rgbColor:e=>re.test(e),rgbaColor:e=>ie.test(e),rgbOrRgbaColor:e=>re.test(e)||ie.test(e),hexOrRgbColor:e=>ye.test(e)||re.test(e),hexaOrRgbaColor:e=>ke.test(e)||ie.test(e),anyColor:e=>xe.test(e)||re.test(e)||ie.test(e)},Je=[!0,!1,"ondemand"],Xe={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Je.includes(e)}};function et(e,t){const{props:r,proxy:i}=ue(),f=Z(!1),d=Z(null),c=Z(null);Ge({validate:I,resetValidation:E});let _=0,T;const q=y(()=>r.rules!==void 0&&r.rules!==null&&r.rules.length!==0),x=y(()=>r.disable!==!0&&q.value===!0&&t.value===!1),C=y(()=>r.error===!0||f.value===!0),ee=y(()=>typeof r.errorMessage=="string"&&r.errorMessage.length!==0?r.errorMessage:d.value);L(()=>r.modelValue,()=>{c.value=!0,x.value===!0&&r.lazyRules===!1&&z()}),L(()=>r.reactiveRules,D=>{D===!0?T===void 0&&(T=L(()=>r.rules,()=>{x.value===!0&&c.value===!0&&r.lazyRules!=="ondemand"&&z()},{immediate:!0})):T!==void 0&&(T(),T=void 0)},{immediate:!0}),L(()=>r.lazyRules,D=>{D===!1&&x.value===!0&&c.value===!0&&z()}),L(e,D=>{D===!0?c.value===null&&(c.value=r.lazyRules===!0):x.value===!0&&(r.lazyRules===!1||r.lazyRules===!0&&c.value===!0)&&z()});function E(){_++,t.value=!1,c.value=null,f.value=!1,d.value=null,z.cancel()}function I(D=r.modelValue){if(r.disable===!0||q.value===!1)return!0;const Y=++_,O=t.value!==!0?()=>{c.value=!0}:()=>{},K=(F,A)=>{F===!0&&O(),f.value=F,d.value=A||null,t.value=!1},Q=[];for(let F=0;F<r.rules.length;F++){const A=r.rules[F];let M;if(typeof A=="function"?M=A(D,ve):typeof A=="string"&&ve[A]!==void 0&&(M=ve[A](D)),M===!1||typeof M=="string")return K(!0,M),!1;M!==!0&&M!==void 0&&Q.push(M)}return Q.length===0?(K(!1),!0):(t.value=!0,Promise.all(Q).then(F=>{if(F===void 0||Array.isArray(F)===!1||F.length===0)return Y===_&&K(!1),!0;const A=F.find(M=>M===!1||typeof M=="string");return Y===_&&K(A!==void 0,A),A===void 0},F=>(Y===_&&(console.error(F),K(!0)),!1)))}const z=Oe(I,0);return ce(()=>{T!==void 0&&T(),z.cancel()}),Object.assign(i,{resetValidation:E,validate:I}),qe(i,"hasError",()=>C.value),{isDirtyModel:c,hasRules:q,hasError:C,errorMessage:ee,validate:I,resetValidation:E}}const we=/^on[A-Z]/;function tt(e,t){const r={listeners:Z({}),attributes:Z({})};function i(){const f={},d={};for(const c in e)c!=="class"&&c!=="style"&&we.test(c)===!1&&(f[c]=e[c]);for(const c in t.props)we.test(c)===!0&&(d[c]=t.props[c]);r.attributes.value=f,r.listeners.value=d}return Te(i),i(),r}let ge,se=0;const $=new Array(256);for(let e=0;e<256;e++)$[e]=(e+256).toString(16).substring(1);const lt=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const r=new Uint8Array(t);return e.getRandomValues(r),r}}return t=>{const r=[];for(let i=t;i>0;i--)r.push(Math.floor(Math.random()*256));return r}})(),_e=4096;function Re(){(ge===void 0||se+16>_e)&&(se=0,ge=lt(_e));const e=Array.prototype.slice.call(ge,se,se+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,$[e[0]]+$[e[1]]+$[e[2]]+$[e[3]]+"-"+$[e[4]]+$[e[5]]+"-"+$[e[6]]+$[e[7]]+"-"+$[e[8]]+$[e[9]]+"-"+$[e[10]]+$[e[11]]+$[e[12]]+$[e[13]]+$[e[14]]+$[e[15]]}function Be(e,t){return e===void 0?t===!0?`f_${Re()}`:void 0:e}function me(e){return e!=null&&(""+e).length!==0}const at={...ze,...Xe,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},nt=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function ut({requiredForAttr:e=!0,tagProp:t}={}){const{props:r,attrs:i,proxy:f,vnode:d}=ue(),c=je(r,f.$q);return{requiredForAttr:e,tag:t===!0?y(()=>r.tag):{value:"label"},isDark:c,editable:y(()=>r.disable!==!0&&r.readonly!==!0),innerLoading:Z(!1),focused:Z(!1),hasPopupOpen:!1,splitAttrs:tt(i,d),targetUid:Z(Be(r.for,e)),rootRef:Z(null),targetRef:Z(null),controlRef:Z(null)}}function ot(e){const{props:t,emit:r,slots:i,attrs:f,proxy:d}=ue(),{$q:c}=d;let _=null;e.hasValue===void 0&&(e.hasValue=y(()=>me(t.modelValue))),e.emitValue===void 0&&(e.emitValue=a=>{r("update:modelValue",a)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:u,onFocusout:n}),Object.assign(e,{clearValue:s,onControlFocusin:u,onControlFocusout:n,focus:M}),e.computedCounter===void 0&&(e.computedCounter=y(()=>{if(t.counter!==!1){const a=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,b=t.maxlength!==void 0?t.maxlength:t.maxValues;return a+(b!==void 0?" / "+b:"")}}));const{isDirtyModel:T,hasRules:q,hasError:x,errorMessage:C,resetValidation:ee}=et(e.focused,e.innerLoading),E=e.floatingLabel!==void 0?y(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):y(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),I=y(()=>t.bottomSlots===!0||t.hint!==void 0||q.value===!0||t.counter===!0||t.error!==null),z=y(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),D=y(()=>`q-field row no-wrap items-start q-field--${z.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(E.value===!0?" q-field--float":"")+(O.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(x.value===!0?" q-field--error":"")+(x.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&I.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),Y=y(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(x.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),O=y(()=>t.labelSlot===!0||t.label!==void 0),K=y(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&x.value!==!0?` text-${t.labelColor}`:"")),Q=y(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:E.value,modelValue:t.modelValue,emitValue:e.emitValue})),F=y(()=>{const a={for:e.targetUid.value};return t.disable===!0&&(a["aria-disabled"]="true"),a});L(()=>t.for,a=>{e.targetUid.value=Be(a,e.requiredForAttr)});function A(){const a=document.activeElement;let b=e.targetRef!==void 0&&e.targetRef.value;b&&(a===null||a.id!==e.targetUid.value)&&(b.hasAttribute("tabindex")===!0||(b=b.querySelector("[tabindex]")),b&&b!==a&&b.focus({preventScroll:!0}))}function M(){Fe(A)}function le(){Le(A);const a=document.activeElement;a!==null&&e.rootRef.value.contains(a)&&a.blur()}function u(a){_!==null&&(clearTimeout(_),_=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,r("focus",a))}function n(a,b){_!==null&&clearTimeout(_),_=setTimeout(()=>{_=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,r("blur",a)),b!==void 0&&b())})}function s(a){$e(a),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),r("update:modelValue",null),r("clear",t.modelValue),te(()=>{ee(),c.platform.is.mobile!==!0&&(T.value=!1)})}function o(){const a=[];return i.prepend!==void 0&&a.push(w("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:ne},i.prepend())),a.push(w("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),x.value===!0&&t.noErrorIcon===!1&&a.push(S("error",[w(pe,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?a.push(S("inner-loading-append",i.loading!==void 0?i.loading():[w(Ze,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&a.push(S("inner-clearable-append",[w(pe,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&a.push(w("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:ne},i.append())),e.getInnerAppend!==void 0&&a.push(S("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&a.push(e.getControlChild()),a}function g(){const a=[];return t.prefix!==void 0&&t.prefix!==null&&a.push(w("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&a.push(e.getShadowControl()),e.getControl!==void 0?a.push(e.getControl()):i.rawControl!==void 0?a.push(i.rawControl()):i.control!==void 0&&a.push(w("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(Q.value))),O.value===!0&&a.push(w("div",{class:K.value},oe(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&a.push(w("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),a.concat(oe(i.default))}function v(){let a,b;x.value===!0?C.value!==null?(a=[w("div",{role:"alert"},C.value)],b=`q--slot-error-${C.value}`):(a=oe(i.error),b="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(a=[w("div",t.hint)],b=`q--slot-hint-${t.hint}`):(a=oe(i.hint),b="q--slot-hint"));const U=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&U===!1&&a===void 0)return;const k=w("div",{key:b,class:"q-field__messages col"},a);return w("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:ne},[t.hideBottomSpace===!0?k:w(Ke,{name:"q-transition--field-message"},()=>k),U===!0?w("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function S(a,b){return b===null?null:w("div",{key:a,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},b)}let p=!1;return Pe(()=>{p=!0}),Ne(()=>{p===!0&&t.autofocus===!0&&d.focus()}),he(()=>{Ie.value===!0&&e.requiredForAttr===!0&&t.for===void 0&&(e.targetUid.value=`f_${Re()}`),t.autofocus===!0&&d.focus()}),ce(()=>{_!==null&&clearTimeout(_)}),Object.assign(d,{focus:M,blur:le}),function(){const b=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...F.value}:F.value;return w(e.tag.value,{ref:e.rootRef,class:[D.value,f.class],style:f.style,...b},[i.before!==void 0?w("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:ne},i.before()):null,w("div",{class:"q-field__inner relative-position col self-stretch"},[w("div",{ref:e.controlRef,class:Y.value,tabindex:-1,...e.controlEvents},o()),I.value===!0?v():null]),i.after!==void 0?w("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:ne},i.after()):null])}}const rt={name:String};function it(e){return y(()=>e.name||e.for)}const st=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,dt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,ft=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,ct=/[a-z0-9_ -]$/i;function vt(e){return function(r){if(r.type==="compositionend"||r.type==="change"){if(r.target.qComposing!==!0)return;r.target.qComposing=!1,e(r)}else r.type==="compositionupdate"&&r.target.qComposing!==!0&&typeof r.data=="string"&&(Ue.is.firefox===!0?ct.test(r.data)===!1:st.test(r.data)===!0||dt.test(r.data)===!0||ft.test(r.data)===!0)===!0&&(r.target.qComposing=!0)}}const Me={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},fe={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Ve=Object.keys(fe);Ve.forEach(e=>{fe[e].regex=new RegExp(fe[e].pattern)});const gt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Ve.join("")+"])|(.)","g"),Se=/[.*+?^${}()|[\]\\]/g,B=String.fromCharCode(1),mt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function ht(e,t,r,i){let f,d,c,_,T,q;const x=Z(null),C=Z(E());function ee(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}L(()=>e.type+e.autogrow,z),L(()=>e.mask,u=>{if(u!==void 0)D(C.value,!0);else{const n=M(C.value);z(),e.modelValue!==n&&t("update:modelValue",n)}}),L(()=>e.fillMask+e.reverseFillMask,()=>{x.value===!0&&D(C.value,!0)}),L(()=>e.unmaskedValue,()=>{x.value===!0&&D(C.value)});function E(){if(z(),x.value===!0){const u=F(M(e.modelValue));return e.fillMask!==!1?le(u):u}return e.modelValue}function I(u){if(u<f.length)return f.slice(-u);let n="",s=f;const o=s.indexOf(B);if(o>-1){for(let g=u-s.length;g>0;g--)n+=B;s=s.slice(0,o)+n+s.slice(o)}return s}function z(){if(x.value=e.mask!==void 0&&e.mask.length!==0&&ee(),x.value===!1){_=void 0,f="",d="";return}const u=Me[e.mask]===void 0?e.mask:Me[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=n.replace(Se,"\\$&"),o=[],g=[],v=[];let S=e.reverseFillMask===!0,p="",a="";u.replace(gt,(V,l,R,W,H)=>{if(W!==void 0){const j=fe[W];v.push(j),a=j.negate,S===!0&&(g.push("(?:"+a+"+)?("+j.pattern+"+)?(?:"+a+"+)?("+j.pattern+"+)?"),S=!1),g.push("(?:"+a+"+)?("+j.pattern+")?")}else if(R!==void 0)p="\\"+(R==="\\"?"":R),v.push(R),o.push("([^"+p+"]+)?"+p+"?");else{const j=l!==void 0?l:H;p=j==="\\"?"\\\\\\\\":j.replace(Se,"\\\\$&"),v.push(j),o.push("([^"+p+"]+)?"+p+"?")}});const b=new RegExp("^"+o.join("")+"("+(p===""?".":"[^"+p+"]")+"+)?"+(p===""?"":"["+p+"]*")+"$"),U=g.length-1,k=g.map((V,l)=>l===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+V):l===U?new RegExp("^"+V+"("+(a===""?".":a)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+V));c=v,_=V=>{const l=b.exec(e.reverseFillMask===!0?V:V.slice(0,v.length+1));l!==null&&(V=l.slice(1).join(""));const R=[],W=k.length;for(let H=0,j=V;H<W;H++){const ae=k[H].exec(j);if(ae===null)break;j=j.slice(ae.shift().length),R.push(...ae)}return R.length!==0?R.join(""):V},f=v.map(V=>typeof V=="string"?V:B).join(""),d=f.split(B).join(n)}function D(u,n,s){const o=i.value,g=o.selectionEnd,v=o.value.length-g,S=M(u);n===!0&&z();const p=F(S),a=e.fillMask!==!1?le(p):p,b=C.value!==a;o.value!==a&&(o.value=a),b===!0&&(C.value=a),document.activeElement===o&&te(()=>{if(a===d){const k=e.reverseFillMask===!0?d.length:0;o.setSelectionRange(k,k,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const k=o.selectionEnd;let V=g-1;for(let l=T;l<=V&&l<k;l++)f[l]!==B&&V++;O.right(o,V);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const k=e.reverseFillMask===!0?g===0?a.length>p.length?1:0:Math.max(0,a.length-(a===d?0:Math.min(p.length,v)+1))+1:g;o.setSelectionRange(k,k,"forward");return}if(e.reverseFillMask===!0)if(b===!0){const k=Math.max(0,a.length-(a===d?0:Math.min(p.length,v+1)));k===1&&g===1?o.setSelectionRange(k,k,"forward"):O.rightReverse(o,k)}else{const k=a.length-v;o.setSelectionRange(k,k,"backward")}else if(b===!0){const k=Math.max(0,f.indexOf(B),Math.min(p.length,g)-1);O.right(o,k)}else{const k=g-1;O.right(o,k)}});const U=e.unmaskedValue===!0?M(a):a;String(e.modelValue)!==U&&(e.modelValue!==null||U!=="")&&r(U,!0)}function Y(u,n,s){const o=F(M(u.value));n=Math.max(0,f.indexOf(B),Math.min(o.length,n)),T=n,u.setSelectionRange(n,s,"forward")}const O={left(u,n){const s=f.slice(n-1).indexOf(B)===-1;let o=Math.max(0,n-1);for(;o>=0;o--)if(f[o]===B){n=o,s===!0&&n++;break}if(o<0&&f[n]!==void 0&&f[n]!==B)return O.right(u,0);n>=0&&u.setSelectionRange(n,n,"backward")},right(u,n){const s=u.value.length;let o=Math.min(s,n+1);for(;o<=s;o++)if(f[o]===B){n=o;break}else f[o-1]===B&&(n=o);if(o>s&&f[n-1]!==void 0&&f[n-1]!==B)return O.left(u,s);u.setSelectionRange(n,n,"forward")},leftReverse(u,n){const s=I(u.value.length);let o=Math.max(0,n-1);for(;o>=0;o--)if(s[o-1]===B){n=o;break}else if(s[o]===B&&(n=o,o===0))break;if(o<0&&s[n]!==void 0&&s[n]!==B)return O.rightReverse(u,0);n>=0&&u.setSelectionRange(n,n,"backward")},rightReverse(u,n){const s=u.value.length,o=I(s),g=o.slice(0,n+1).indexOf(B)===-1;let v=Math.min(s,n+1);for(;v<=s;v++)if(o[v-1]===B){n=v,n>0&&g===!0&&n--;break}if(v>s&&o[n-1]!==void 0&&o[n-1]!==B)return O.leftReverse(u,s);u.setSelectionRange(n,n,"forward")}};function K(u){t("click",u),q=void 0}function Q(u){if(t("keydown",u),He(u)===!0||u.altKey===!0)return;const n=i.value,s=n.selectionStart,o=n.selectionEnd;if(u.shiftKey||(q=void 0),u.keyCode===37||u.keyCode===39){u.shiftKey&&q===void 0&&(q=n.selectionDirection==="forward"?s:o);const g=O[(u.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(u.preventDefault(),g(n,q===s?o:s),u.shiftKey){const v=n.selectionStart;n.setSelectionRange(Math.min(q,v),Math.max(q,v),"forward")}}else u.keyCode===8&&e.reverseFillMask!==!0&&s===o?(O.left(n,s),n.setSelectionRange(n.selectionStart,o,"backward")):u.keyCode===46&&e.reverseFillMask===!0&&s===o&&(O.rightReverse(n,o),n.setSelectionRange(s,n.selectionEnd,"forward"))}function F(u){if(u==null||u==="")return"";if(e.reverseFillMask===!0)return A(u);const n=c;let s=0,o="";for(let g=0;g<n.length;g++){const v=u[s],S=n[g];if(typeof S=="string")o+=S,v===S&&s++;else if(v!==void 0&&S.regex.test(v))o+=S.transform!==void 0?S.transform(v):v,s++;else return o}return o}function A(u){const n=c,s=f.indexOf(B);let o=u.length-1,g="";for(let v=n.length-1;v>=0&&o>-1;v--){const S=n[v];let p=u[o];if(typeof S=="string")g=S+g,p===S&&o--;else if(p!==void 0&&S.regex.test(p))do g=(S.transform!==void 0?S.transform(p):p)+g,o--,p=u[o];while(s===v&&p!==void 0&&S.regex.test(p));else return g}return g}function M(u){return typeof u!="string"||_===void 0?typeof u=="number"?_(""+u):u:_(u)}function le(u){return d.length-u.length<=0?u:e.reverseFillMask===!0&&u.length!==0?d.slice(0,-u.length)+u:u+d.slice(u.length)}return{innerValue:C,hasMask:x,moveCursorForPaste:Y,updateMaskValue:D,onMaskedKeydown:Q,onMaskedClick:K}}function pt(e,t){function r(){const i=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?y(()=>{if(e.type==="file")return r()}):y(r)}var qt=Ae({name:"QInput",inheritAttrs:!1,props:{...at,...mt,...rt,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...nt,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:r}){const{proxy:i}=ue(),{$q:f}=i,d={};let c=NaN,_,T,q=null,x;const C=Z(null),ee=it(e),{innerValue:E,hasMask:I,moveCursorForPaste:z,updateMaskValue:D,onMaskedKeydown:Y,onMaskedClick:O}=ht(e,t,p,C),K=pt(e,!0),Q=y(()=>me(E.value)),F=vt(v),A=ut(),M=y(()=>e.type==="textarea"||e.autogrow===!0),le=y(()=>M.value===!0||["text","search","url","tel","password"].includes(e.type)),u=y(()=>{const l={...A.splitAttrs.listeners.value,onInput:v,onPaste:g,onChange:b,onBlur:U,onFocus:be};return l.onCompositionstart=l.onCompositionupdate=l.onCompositionend=F,I.value===!0&&(l.onKeydown=Y,l.onClick=O),e.autogrow===!0&&(l.onAnimationend=S),l}),n=y(()=>{const l={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:ee.value,...A.splitAttrs.attributes.value,id:A.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return M.value===!1&&(l.type=e.type),e.autogrow===!0&&(l.rows=1),l});L(()=>e.type,()=>{C.value&&(C.value.value=e.modelValue)}),L(()=>e.modelValue,l=>{if(I.value===!0){if(T===!0&&(T=!1,String(l)===c))return;D(l)}else E.value!==l&&(E.value=l,e.type==="number"&&d.hasOwnProperty("value")===!0&&(_===!0?_=!1:delete d.value));e.autogrow===!0&&te(a)}),L(()=>e.autogrow,l=>{l===!0?te(a):C.value!==null&&r.rows>0&&(C.value.style.height="auto")}),L(()=>e.dense,()=>{e.autogrow===!0&&te(a)});function s(){Fe(()=>{const l=document.activeElement;C.value!==null&&C.value!==l&&(l===null||l.id!==A.targetUid.value)&&C.value.focus({preventScroll:!0})})}function o(){C.value!==null&&C.value.select()}function g(l){if(I.value===!0&&e.reverseFillMask!==!0){const R=l.target;z(R,R.selectionStart,R.selectionEnd)}t("paste",l)}function v(l){if(!l||!l.target)return;if(e.type==="file"){t("update:modelValue",l.target.files);return}const R=l.target.value;if(l.target.qComposing===!0){d.value=R;return}if(I.value===!0)D(R,!1,l.inputType);else if(p(R),le.value===!0&&l.target===document.activeElement){const{selectionStart:W,selectionEnd:H}=l.target;W!==void 0&&H!==void 0&&te(()=>{l.target===document.activeElement&&R.indexOf(l.target.value)===0&&l.target.setSelectionRange(W,H)})}e.autogrow===!0&&a()}function S(l){t("animationend",l),a()}function p(l,R){x=()=>{q=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==l&&c!==l&&(c=l,R===!0&&(T=!0),t("update:modelValue",l),te(()=>{c===l&&(c=NaN)})),x=void 0},e.type==="number"&&(_=!0,d.value=l),e.debounce!==void 0?(q!==null&&clearTimeout(q),d.value=l,q=setTimeout(x,e.debounce)):x()}function a(){requestAnimationFrame(()=>{const l=C.value;if(l!==null){const R=l.parentNode.style,{scrollTop:W}=l,{overflowY:H,maxHeight:j}=f.platform.is.firefox===!0?{}:window.getComputedStyle(l),ae=H!==void 0&&H!=="scroll";ae===!0&&(l.style.overflowY="hidden"),R.marginBottom=l.scrollHeight-1+"px",l.style.height="1px",l.style.height=l.scrollHeight+"px",ae===!0&&(l.style.overflowY=parseInt(j,10)<l.scrollHeight?"auto":"hidden"),R.marginBottom="",l.scrollTop=W}})}function b(l){F(l),q!==null&&(clearTimeout(q),q=null),x!==void 0&&x(),t("change",l.target.value)}function U(l){l!==void 0&&be(l),q!==null&&(clearTimeout(q),q=null),x!==void 0&&x(),_=!1,T=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{C.value!==null&&(C.value.value=E.value!==void 0?E.value:"")})}function k(){return d.hasOwnProperty("value")===!0?d.value:E.value!==void 0?E.value:""}ce(()=>{U()}),he(()=>{e.autogrow===!0&&a()}),Object.assign(A,{innerValue:E,fieldClass:y(()=>`q-${M.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:y(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:C,emitValue:p,hasValue:Q,floatingLabel:y(()=>Q.value===!0&&(e.type!=="number"||isNaN(E.value)===!1)||me(e.displayValue)),getControl:()=>w(M.value===!0?"textarea":"input",{ref:C,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...n.value,...u.value,...e.type!=="file"?{value:k()}:K.value}),getShadowControl:()=>w("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(M.value===!0?"":" text-no-wrap")},[w("span",{class:"invisible"},k()),w("span",e.shadowText)])});const V=ot(A);return Object.assign(i,{focus:s,select:o,getNativeElement:()=>C.value}),qe(i,"nativeEl",()=>C.value),V}});const bt=w("div",{class:"q-space"});var Ft=Ae({name:"QSpace",setup(){return()=>bt}});const Ct=de("div",{class:"text-subtitle2 q-mb-sm"},"\uC601\uC591\uC131\uBD84",-1),yt={class:"row"},kt={class:"col-6"},xt={class:"col-6"},At=Qe({__name:"NutritionPanel",props:{calories:{type:Number,required:!0},carbohydrates:{type:Number,required:!0},sugar:{type:Number,required:!0},fiber:{type:Number,required:!0},fat:{type:Number,required:!0},saturatedFat:{type:Number,required:!0},protein:{type:Number,required:!0},caffeine:{type:Number,required:!0}},setup(e){return(t,r)=>(Ye(),We("div",null,[Ct,de("div",yt,[de("div",kt,[m(Ce,{bordered:""},{default:h(()=>[m(G,null,{default:h(()=>[m(J,null,{default:h(()=>[m(N,null,{default:h(()=>[P(X(e.calories.toFixed(2)),1)]),_:1}),m(N,{caption:"",lines:"1"},{default:h(()=>[P("\uCE7C\uB85C\uB9AC(Kcal)")]),_:1})]),_:1})]),_:1}),m(G,null,{default:h(()=>[m(J,null,{default:h(()=>[m(N,null,{default:h(()=>[P(X(e.sugar.toFixed(2)),1)]),_:1}),m(N,{caption:"",lines:"1"},{default:h(()=>[P("\uB2F9\uB958(g)")]),_:1})]),_:1})]),_:1}),m(G,null,{default:h(()=>[m(J,null,{default:h(()=>[m(N,null,{default:h(()=>[P(X(e.fat.toFixed(2)),1)]),_:1}),m(N,{caption:"",lines:"1"},{default:h(()=>[P("\uC9C0\uBC29(g)")]),_:1})]),_:1})]),_:1}),m(G,null,{default:h(()=>[m(J,null,{default:h(()=>[m(N,null,{default:h(()=>[P(X(e.protein.toFixed(2)),1)]),_:1}),m(N,{caption:"",lines:"1"},{default:h(()=>[P("\uB2E8\uBC31\uC9C8(g)")]),_:1})]),_:1})]),_:1})]),_:1})]),de("div",xt,[m(Ce,{bordered:""},{default:h(()=>[m(G,null,{default:h(()=>[m(J,null,{default:h(()=>[m(N,null,{default:h(()=>[P(X(e.carbohydrates.toFixed(2)),1)]),_:1}),m(N,{caption:"",lines:"1"},{default:h(()=>[P("\uD0C4\uC218\uD654\uBB3C(g)")]),_:1})]),_:1})]),_:1}),m(G,null,{default:h(()=>[m(J,null,{default:h(()=>[m(N,null,{default:h(()=>[P(X(e.fiber.toFixed(2)),1)]),_:1}),m(N,{caption:"",lines:"1"},{default:h(()=>[P("\uC2DD\uC774\uC12C\uC720(g)")]),_:1})]),_:1})]),_:1}),m(G,null,{default:h(()=>[m(J,null,{default:h(()=>[m(N,null,{default:h(()=>[P(X(e.saturatedFat.toFixed(2)),1)]),_:1}),m(N,{caption:"",lines:"1"},{default:h(()=>[P("\uD3EC\uD654\uC9C0\uBC29(g)")]),_:1})]),_:1})]),_:1}),m(G,null,{default:h(()=>[m(J,null,{default:h(()=>[m(N,null,{default:h(()=>[P(X(e.caffeine.toFixed(2)),1)]),_:1}),m(N,{caption:"",lines:"1"},{default:h(()=>[P("\uCE74\uD398\uC778(mg)")]),_:1})]),_:1})]),_:1})]),_:1})])])]))}});var wt=(e=>(e.fresh="fresh",e.fruits="fruits",e.flour="flour",e.coffee="coffee",e.topping="topping",e.additives="additives",e.packaging="packaging",e))(wt||{});const _t=[{value:"fresh",label:"\uC2E0\uC120 \uC2DD\uD488"},{value:"fruits",label:"\uACFC\uC77C & \uCC44\uC18C"},{value:"flour",label:"\uAC00\uB8E8\uB958 & \uACE1\uB958"},{value:"coffee",label:"\uCEE4\uD53C \uC6D0\uB450 & \uCC28"},{value:"topping",label:"\uD1A0\uD551 \uC7AC\uB8CC"},{value:"additives",label:"\uC2DD\uD488 \uCCA8\uAC00\uBB3C"},{value:"packaging",label:"\uD3EC\uC7A5 \uC6A9\uD488"}],Rt=e=>{const t=_t.find(r=>r.value===e);return t?t.label:""},Bt={caffeine:0,calories:0,carbohydrates:0,category:"fresh",fat:0,fiber:0,id:0,name:"",protein:0,saturatedFat:0,sugar:0,unitPrice:0};export{wt as I,Ft as Q,At as _,qt as a,nt as b,ot as c,ut as d,Bt as e,rt as f,it as g,me as h,_t as i,vt as j,Rt as l,at as u};
