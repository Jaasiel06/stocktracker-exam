"use strict";(self.webpackChunkstocktracker_exam=self.webpackChunkstocktracker_exam||[]).push([[540],{3540:(Xn,pt,l)=>{l.r(pt),l.d(pt,{StocksModule:()=>Jn});var h=l(9808),D=l(8698),o=l(1223),ke=l(2076),Oe=l(8306),Fe=l(4742),we=l(8421),Ne=l(7669),xe=l(5403),Ge=l(3268),Te=l(1810),Ie=l(4004);let gt=(()=>{class n{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),y=(()=>{class n extends gt{}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const f=new o.OlP("NgValueAccessor"),Re={provide:f,useExisting:(0,o.Gpc)(()=>E),multi:!0},Le=new o.OlP("CompositionEventMode");let E=(()=>{class n extends gt{constructor(t,r,i){super(t,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Ue(){const n=(0,h.q)()?(0,h.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(t){this.setProperty("value",null==t?"":t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Le,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,r){1&t&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([Re]),o.qOj]}),n})();function g(n){return null==n||0===n.length}function _t(n){return null!=n&&"number"==typeof n.length}const c=new o.OlP("NgValidators"),m=new o.OlP("NgAsyncValidators"),He=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class yt{static min(e){return function vt(n){return e=>{if(g(e.value)||g(n))return null;const t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}(e)}static max(e){return function Ct(n){return e=>{if(g(e.value)||g(n))return null;const t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}(e)}static required(e){return function Vt(n){return g(n.value)?{required:!0}:null}(e)}static requiredTrue(e){return function At(n){return!0===n.value?null:{required:!0}}(e)}static email(e){return function bt(n){return g(n.value)||He.test(n.value)?null:{email:!0}}(e)}static minLength(e){return function Mt(n){return e=>g(e.value)||!_t(e.value)?null:e.value.length<n?{minlength:{requiredLength:n,actualLength:e.value.length}}:null}(e)}static maxLength(e){return function St(n){return e=>_t(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null}(e)}static pattern(e){return function Dt(n){if(!n)return k;let e,t;return"string"==typeof n?(t="","^"!==n.charAt(0)&&(t+="^"),t+=n,"$"!==n.charAt(n.length-1)&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),r=>{if(g(r.value))return null;const i=r.value;return e.test(i)?null:{pattern:{requiredPattern:t,actualValue:i}}}}(e)}static nullValidator(e){return null}static compose(e){return Nt(e)}static composeAsync(e){return xt(e)}}function k(n){return null}function Et(n){return null!=n}function kt(n){const e=(0,o.QGY)(n)?(0,ke.D)(n):n;return(0,o.CqO)(e),e}function Ot(n){let e={};return n.forEach(t=>{e=null!=t?Object.assign(Object.assign({},e),t):e}),0===Object.keys(e).length?null:e}function Ft(n,e){return e.map(t=>t(n))}function wt(n){return n.map(e=>function je(n){return!n.validate}(e)?e:t=>e.validate(t))}function Nt(n){if(!n)return null;const e=n.filter(Et);return 0==e.length?null:function(t){return Ot(Ft(t,e))}}function H(n){return null!=n?Nt(wt(n)):null}function xt(n){if(!n)return null;const e=n.filter(Et);return 0==e.length?null:function(t){return function Be(...n){const e=(0,Ne.jO)(n),{args:t,keys:r}=(0,Fe.D)(n),i=new Oe.y(s=>{const{length:a}=t;if(!a)return void s.complete();const u=new Array(a);let p=a,V=a;for(let L=0;L<a;L++){let ft=!1;(0,we.Xf)(t[L]).subscribe((0,xe.x)(s,Kn=>{ft||(ft=!0,V--),u[L]=Kn},()=>p--,void 0,()=>{(!p||!ft)&&(V||s.next(r?(0,Te.n)(r,u):u),s.complete())}))}});return e?i.pipe((0,Ge.Z)(e)):i}(Ft(t,e).map(kt)).pipe((0,Ie.U)(Ot))}}function j(n){return null!=n?xt(wt(n)):null}function Gt(n,e){return null===n?[e]:Array.isArray(n)?[...n,e]:[n,e]}function Tt(n){return n._rawValidators}function Bt(n){return n._rawAsyncValidators}function Y(n){return n?Array.isArray(n)?n:[n]:[]}function O(n,e){return Array.isArray(n)?n.includes(e):n===e}function It(n,e){const t=Y(e);return Y(n).forEach(i=>{O(t,i)||t.push(i)}),t}function Pt(n,e){return Y(e).filter(t=>!O(n,t))}class Rt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=H(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=j(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e){this.control&&this.control.reset(e)}hasError(e,t){return!!this.control&&this.control.hasError(e,t)}getError(e,t){return this.control?this.control.getError(e,t):null}}class _ extends Rt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class d extends Rt{get formDirective(){return null}get path(){return null}}class Ut{constructor(e){this._cd=e}is(e){var t,r,i;return"submitted"===e?!!(null===(t=this._cd)||void 0===t?void 0:t.submitted):!!(null===(i=null===(r=this._cd)||void 0===r?void 0:r.control)||void 0===i?void 0:i[e])}}let Lt=(()=>{class n extends Ut{constructor(t){super(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(_,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){2&t&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[o.qOj]}),n})(),Ht=(()=>{class n extends Ut{constructor(t){super(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(d,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){2&t&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))("ng-submitted",r.is("submitted"))},features:[o.qOj]}),n})();function A(n,e){W(n,e),e.valueAccessor.writeValue(n.value),function Je(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Yt(n,e)})}(n,e),function Xe(n,e){const t=(r,i)=>{e.valueAccessor.writeValue(r),i&&e.viewToModelUpdate(r)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}(n,e),function Ke(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Yt(n,e),"submit"!==n.updateOn&&n.markAsTouched()})}(n,e),function Qe(n,e){if(e.valueAccessor.setDisabledState){const t=r=>{e.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}(n,e)}function N(n,e,t=!0){const r=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(r),e.valueAccessor.registerOnTouched(r)),G(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function x(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function W(n,e){const t=Tt(n);null!==e.validator?n.setValidators(Gt(t,e.validator)):"function"==typeof t&&n.setValidators([t]);const r=Bt(n);null!==e.asyncValidator?n.setAsyncValidators(Gt(r,e.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();x(e._rawValidators,i),x(e._rawAsyncValidators,i)}function G(n,e){let t=!1;if(null!==n){if(null!==e.validator){const i=Tt(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==e.validator);s.length!==i.length&&(t=!0,n.setValidators(s))}}if(null!==e.asyncValidator){const i=Bt(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==e.asyncValidator);s.length!==i.length&&(t=!0,n.setAsyncValidators(s))}}}const r=()=>{};return x(e._rawValidators,r),x(e._rawAsyncValidators,r),t}function Yt(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Q(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const b="VALID",T="INVALID",C="PENDING",M="DISABLED";function K(n){return(B(n)?n.validators:n)||null}function $t(n){return Array.isArray(n)?H(n):n||null}function X(n,e){return(B(e)?e.asyncValidators:n)||null}function zt(n){return Array.isArray(n)?j(n):n||null}function B(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}const tt=n=>n instanceof nt,I=n=>n instanceof P,Qt=n=>n instanceof te;function Jt(n){return tt(n)?n.value:n.getRawValue()}function Kt(n,e){const t=I(n),r=n.controls;if(!(t?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[e])throw new o.vHH(1001,"")}function Xt(n,e){I(n),n._forEachChild((r,i)=>{if(void 0===e[i])throw new o.vHH(1002,"")})}class et{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=e,this._rawAsyncValidators=t,this._composedValidatorFn=$t(this._rawValidators),this._composedAsyncValidatorFn=zt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===b}get invalid(){return this.status===T}get pending(){return this.status==C}get disabled(){return this.status===M}get enabled(){return this.status!==M}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._rawValidators=e,this._composedValidatorFn=$t(e)}setAsyncValidators(e){this._rawAsyncValidators=e,this._composedAsyncValidatorFn=zt(e)}addValidators(e){this.setValidators(It(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(It(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Pt(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Pt(e,this._rawAsyncValidators))}hasValidator(e){return O(this._rawValidators,e)}hasAsyncValidator(e){return O(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=C,!1!==e.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=M,this.errors=null,this._forEachChild(r=>{r.disable(Object.assign(Object.assign({},e),{onlySelf:!0}))}),this._updateValue(),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=b,this._forEachChild(r=>{r.enable(Object.assign(Object.assign({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===b||this.status===C)&&this._runAsyncValidator(e.emitEvent)),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?M:b}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;const t=kt(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(!1!==t.emitEvent)}get(e){return function rn(n,e,t){if(null==e||(Array.isArray(e)||(e=e.split(t)),Array.isArray(e)&&0===e.length))return null;let r=n;return e.forEach(i=>{r=I(r)?r.controls.hasOwnProperty(i)?r.controls[i]:null:Qt(r)&&r.at(i)||null}),r}(this,e,".")}getError(e,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?M:this.errors?T:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(T)?T:b}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_isBoxedValue(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){B(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class nt extends et{constructor(e=null,t,r){super(K(t),X(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),B(t)&&t.initialValueIsDefault&&(this.defaultValue=this._isBoxedValue(e)?e.value:e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Q(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Q(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(e){this._isBoxedValue(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}}class P extends et{constructor(e,t,r){super(K(t),X(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,r={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){Xt(this,e),Object.keys(e).forEach(r=>{Kt(this,r),this.controls[r].setValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){null!=e&&(Object.keys(e).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((r,i)=>{r.reset(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,r)=>(e[r]=Jt(t),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,r)=>!!r._syncPendingControls()||t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{const r=this.controls[t];r&&e(r,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(const t of Object.keys(this.controls)){const r=this.controls[t];if(this.contains(t)&&e(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(e,t){let r=e;return this._forEachChild((i,s)=>{r=t(r,i,s)}),r}_allControlsDisabled(){for(const e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}}class te extends et{constructor(e,t,r){super(K(t),X(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[e]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,r={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),this.controls.splice(e,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),this.controls.splice(e,1),t&&(this.controls.splice(e,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){Xt(this,e),e.forEach((r,i)=>{Kt(this,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){null!=e&&(e.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((r,i)=>{r.reset(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>Jt(e))}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_syncPendingControls(){let e=this.controls.reduce((t,r)=>!!r._syncPendingControls()||t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,r)=>{e(t,r)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(const e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}}let ie=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),ae=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const ot=new o.OlP("NgModelWithFormControlWarning"),fn={provide:d,useExisting:(0,o.Gpc)(()=>R)};let R=(()=>{class n extends d{constructor(t,r){super(),this.validators=t,this.asyncValidators=r,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.vpe,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(G(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const r=this.form.get(t.path);return A(r,t),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){N(t.control||null,t,!1),Q(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,function Wt(n,e){n._syncPendingControls(),e.forEach(t=>{const r=t.control;"submit"===r.updateOn&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(t),!1}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const r=t.control,i=this.form.get(t.path);r!==i&&(N(r||null,t),tt(i)&&(A(i,t),t.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const r=this.form.get(t.path);(function qt(n,e){W(n,e)})(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const r=this.form.get(t.path);r&&function tn(n,e){return G(n,e)}(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){W(this.form,this),this._oldForm&&G(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(c,10),o.Y36(m,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,r){1&t&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([fn]),o.qOj,o.TTD]}),n})();const mn={provide:_,useExisting:(0,o.Gpc)(()=>at)};let at=(()=>{class n extends _{constructor(t,r,i,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.update=new o.vpe,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function z(n,e){if(!e)return null;let t,r,i;return Array.isArray(e),e.forEach(s=>{s.constructor===E?t=s:function nn(n){return Object.getPrototypeOf(n.constructor)===y}(s)?r=s:i=s}),i||r||t||null}(0,s)}set isDisabled(t){}ngOnChanges(t){this._added||this._setUpControl(),function $(n,e){if(!n.hasOwnProperty("model"))return!1;const t=n.model;return!!t.isFirstChange()||!Object.is(e,t.currentValue)}(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return function w(n,e){return[...e.path,n]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this._added=!0}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(t){return new(t||n)(o.Y36(d,13),o.Y36(c,10),o.Y36(m,10),o.Y36(f,10),o.Y36(ot,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[o._Bn([mn]),o.qOj,o.TTD]}),n})(),Nn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[ae]]}),n})(),be=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:ot,useValue:t.warnOnNgModelWithFormControl}]}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Nn]}),n})(),Gn=(()=>{class n{group(t,r=null){const i=this._reduceControls(t);let u,s=null,a=null;return null!=r&&(function xn(n){return void 0!==n.asyncValidators||void 0!==n.validators||void 0!==n.updateOn}(r)?(s=null!=r.validators?r.validators:null,a=null!=r.asyncValidators?r.asyncValidators:null,u=null!=r.updateOn?r.updateOn:void 0):(s=null!=r.validator?r.validator:null,a=null!=r.asyncValidator?r.asyncValidator:null)),new P(i,{asyncValidators:a,updateOn:u,validators:s})}control(t,r,i){return new nt(t,r,i)}array(t,r,i){const s=t.map(a=>this._createControl(a));return new te(s,r,i)}_reduceControls(t){const r={};return Object.keys(t).forEach(i=>{r[i]=this._createControl(t[i])}),r}_createControl(t){return tt(t)||I(t)||Qt(t)?t:Array.isArray(t)?this.control(t[0],t.length>1?t[1]:null,t.length>2?t[2]:null):this.control(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:be}),n})();var U=l(5861),Tn=l(7579),Me=l(727),dt=l(765),Bn=l(2340),In=l(1976);let Se=(()=>{class n{constructor(t){this.restService=t,this.token=Bn.N.TOKEN,this.stocksQuotes=[],this._stocksQuoteSource=new Tn.x,this.stockQuote$=this._stocksQuoteSource.asObservable(),this.subscription=new Me.w0}ngOnDestroy(){this.subscription.unsubscribe()}getStocksQuote(t){var r=this;return(0,U.Z)(function*(){r.restService.get(dt.W.QUOTE,"?",{symbol:t,token:r.token}).subscribe(function(){var i=(0,U.Z)(function*(s){s.symbol=t;try{s.companyProfile=yield r.getCompanyProfile(t)}catch(a){console.log(a)}r._stocksQuoteSource.next(s),r.stocksQuotes.push(s)});return function(s){return i.apply(this,arguments)}}())})()}getCompanyProfile(t){var r=this;return(0,U.Z)(function*(){return r.restService.get(dt.W.COMPANY_PROFILE,"?",{symbol:t,token:r.token}).toPromise()})()}getSymbols(t){var r=this;return(0,U.Z)(function*(){r.restService.get(dt.W.SYMBOL_SEARCH,"?",{q:t,token:r.token}).subscribe(i=>{r._stocksQuoteSource.next(i),r.stocksQuotes.push(i)})})()}}return n.\u0275fac=function(t){return new(t||n)(o.LFG(In.e))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),De=(()=>{class n{setWithExpiry(t,r,i){const a={value:r,expiry:(new Date).getMonth()+i};localStorage.setItem(t,JSON.stringify(a))}setItem(t,r){localStorage.setItem(t,JSON.stringify({value:r}))}getWithExpiry(t){const r=localStorage.getItem(t);if(!r)return null;const i=JSON.parse(r);return(new Date).getMonth()>i.expiry?(localStorage.removeItem(t),null):i.value}removeLs(t){try{localStorage.removeItem(t)}catch(r){console.log(r)}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var Ee=l(2290);function Pn(n,e){1&n&&(o.TgZ(0,"span"),o._uU(1," Please enter Stock Symbol. "),o.qZA())}function Rn(n,e){1&n&&(o.TgZ(0,"span"),o._uU(1," The stock symbol cannot be longer than 5 characters. "),o.qZA())}const Un=function(n){return{"is-invalid":n}};let Ln=(()=>{class n{constructor(t,r,i,s){this.fb=t,this.stockService=r,this.localStorageService=i,this.toastr=s}ngOnInit(){this.stockTrackForm=this.fb.group({stockSymbol:["",[yt.required,yt.maxLength(5)]]}),this.loadStocksQuotes()}loadStocksQuotes(){let r=[],i=this.localStorageService.getWithExpiry("STOCKSSYMBOLSTRACKED");i&&(r=JSON.parse(i),this.getStockQuotesFromApi(r))}trackStock(){let t="STOCKSSYMBOLSTRACKED",r=[],i=this.stockTrackForm.value.stockSymbol;i=i.toUpperCase();try{let s=this.localStorageService.getWithExpiry(t);if(s&&(r=JSON.parse(s)),r.filter(u=>u==i).length>0)return void this.toastr.error("This Stock Symbol: "+i+" already in the list.");r.push(i);let a=JSON.stringify(r);this.localStorageService.setItem(t,a),this.getStockQuotesFromApi([i]),this.toastr.success("Stock symbol being tracked")}catch(s){this.toastr.error("Something went wrong with Stock Symbol "+i+", please try again.")}}getStockQuotesFromApi(t){for(let r=0;r<t.length;r++){const i=t[r];try{this.stockService.getStocksQuote(i)}catch(s){this.toastr.error("Something went wrong with Stock Symbol "+i+", please try again.")}}}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(Gn),o.Y36(Se),o.Y36(De),o.Y36(Ee._W))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-stocks-track"]],decls:15,vars:10,consts:[[1,"card","m-3"],[1,"card-body"],[1,"card-title"],[1,"row","g-3","mt-2",3,"formGroup"],[1,"col-auto"],["id","stockSymbolId","type","text","placeholder","Stock Symbol (required)","formControlName","stockSymbol",1,"form-control",3,"value","ngClass"],[1,"invalid-feedback"],[4,"ngIf"],[1,"btn","btn-success","mb-3",3,"disabled","click"],[1,"bi","bi-graph-up-arrow"]],template:function(t,r){if(1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"h6",2),o._uU(3,"Enter the symbol of a stock to track (i.e. AAPL, TSLA, GOOGL)"),o.qZA(),o.TgZ(4,"form",3)(5,"div",4),o._UZ(6,"input",5),o.ALo(7,"uppercase"),o.TgZ(8,"span",6),o.YNc(9,Pn,2,0,"span",7),o.YNc(10,Rn,2,0,"span",7),o.qZA()(),o.TgZ(11,"div",4)(12,"button",8),o.NdJ("click",function(){return r.trackStock()}),o._UZ(13,"i",9),o._uU(14," Track Stock "),o.qZA()()()()()),2&t){let i,s,a;o.xp6(4),o.Q6J("formGroup",r.stockTrackForm),o.xp6(2),o.Q6J("value",o.lcZ(7,6,r.stockTrackForm.value.stockSymbol))("ngClass",o.VKq(8,Un,((null==(i=r.stockTrackForm.get("stockSymbol"))?null:i.touched)||(null==(i=r.stockTrackForm.get("stockSymbol"))?null:i.dirty))&&!(null!=(i=r.stockTrackForm.get("stockSymbol"))&&i.valid))),o.xp6(3),o.Q6J("ngIf",null==(s=r.stockTrackForm.get("stockSymbol"))||null==s.errors?null:s.errors.required),o.xp6(1),o.Q6J("ngIf",null==(a=r.stockTrackForm.get("stockSymbol"))||null==a.errors?null:a.errors.maxlength),o.xp6(2),o.Q6J("disabled",!r.stockTrackForm.valid)}},directives:[ie,Ht,R,E,Lt,at,h.mk,h.O5],pipes:[h.gd],styles:[""]}),n})();function Hn(n,e){1&n&&(o.TgZ(0,"span",15),o._UZ(1,"i",16),o.qZA())}function jn(n,e){1&n&&(o.TgZ(0,"span",17),o._UZ(1,"i",18),o.qZA())}function Yn(n,e){1&n&&(o.TgZ(0,"span"),o._uU(1,"+"),o.qZA())}const qn=function(n,e){return{symbol:n,companyName:e}},Zn=function(n){return["/sentiment",n]};function Wn(n,e){if(1&n){const t=o.EpF();o.TgZ(0,"div")(1,"div",1)(2,"div",2)(3,"span",3),o.NdJ("click",function(){const s=o.CHM(t).$implicit;return o.oxw().unTrackStock(s.symbol)}),o._UZ(4,"i",4),o.qZA(),o.TgZ(5,"h3",5),o._uU(6),o.YNc(7,Hn,2,0,"span",6),o.YNc(8,jn,2,0,"span",7),o.qZA(),o.TgZ(9,"div",8)(10,"div",9)(11,"label",10),o._uU(12,"Change today: "),o.YNc(13,Yn,2,0,"span",11),o._uU(14),o.ALo(15,"number"),o.qZA()(),o.TgZ(16,"div",12)(17,"div",9)(18,"label",10),o._uU(19),o.ALo(20,"currency"),o.qZA()()()(),o.TgZ(21,"div",8)(22,"div",9)(23,"label",10),o._uU(24),o.ALo(25,"currency"),o.qZA()(),o.TgZ(26,"div",9)(27,"label",10),o._uU(28),o.ALo(29,"currency"),o.qZA()(),o.TgZ(30,"div",13)(31,"button",14),o._uU(32," Go to social sentimental details > "),o.qZA()()()()()()}if(2&n){const t=e.$implicit;o.xp6(6),o.AsE("",null==t.companyProfile?null:t.companyProfile.name," (",t.symbol,") "),o.xp6(1),o.Q6J("ngIf",t.dp<0),o.xp6(1),o.Q6J("ngIf",t.dp>=0),o.xp6(5),o.Q6J("ngIf",t.dp>0),o.xp6(1),o.Oqu(o.xi3(15,10,t.dp,"1.2-2")),o.xp6(5),o.hij("Opening price: ",o.lcZ(20,13,t.o),""),o.xp6(5),o.hij("Current price: ",o.lcZ(25,15,t.c),""),o.xp6(4),o.hij("High price: ",o.lcZ(29,17,t.h),""),o.xp6(3),o.Q6J("routerLink",o.VKq(22,Zn,o.WLB(19,qn,t.symbol,null==t.companyProfile?null:t.companyProfile.name)))}}let $n=(()=>{class n{constructor(t,r,i){this.stockService=t,this.localStorageService=r,this.toastr=i,this.stocksQuotes=[],this.subscription=new Me.w0}ngOnInit(){this.subscribeToStocksQuotes()}ngOnDestroy(){this.subscription.unsubscribe()}subscribeToStocksQuotes(){this.stockService.stockQuote$.subscribe(t=>{this.stocksQuotes.push(t)})}unTrackStock(t){this.stocksQuotes=this.stocksQuotes.filter(p=>p.symbol!=t);let r="STOCKSSYMBOLSTRACKED",i=[],s=this.localStorageService.getWithExpiry(r);if(!s)return;i=JSON.parse(s);let a=i.indexOf(t);-1!=a&&i.splice(a,1);let u=JSON.stringify(i);this.localStorageService.setItem(r,u),this.toastr.success("Stock symbol being untracked")}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(Se),o.Y36(De),o.Y36(Ee._W))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-stocks-list"]],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"card","m-3"],[1,"card-body"],["role","button",1,"float-end",3,"click"],[1,"bi","bi-x-lg"],[1,"card-title","text-bold","col-6"],["class","text-danger display-6 ",4,"ngIf"],["class","text-success display-6",4,"ngIf"],[1,"row"],[1,"col-3"],["for",""],[4,"ngIf"],[1,"col-9","row"],[1,"col-3","float-end"],[1,"form-control","btn","btn-outline-secondary",3,"routerLink"],[1,"text-danger","display-6"],[1,"bi","bi-arrow-down"],[1,"text-success","display-6"],[1,"bi","bi-arrow-up"]],template:function(t,r){1&t&&o.YNc(0,Wn,33,24,"div",0),2&t&&o.Q6J("ngForOf",r.stocksQuotes)},directives:[h.sg,h.O5,D.rH],pipes:[h.JJ,h.H9],styles:[""]}),n})(),ht=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-stocks-index"]],decls:2,vars:0,template:function(t,r){1&t&&o._UZ(0,"app-stocks-track")(1,"app-stocks-list")},directives:[Ln,$n],styles:[""]}),n})();const zn=[{path:"",redirectTo:"stocks",component:ht,data:{title:"stocks"}},{path:"index",component:ht,data:{title:"stocks"}}];let Qn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[D.Bz.forChild(zn)],D.Bz]}),n})(),Jn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[D.Bz.forChild([{path:"",component:ht}]),h.ez,Qn,be]]}),n})()}}]);