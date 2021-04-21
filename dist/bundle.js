/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var i=t.g.document;if(!e&&i&&(i.currentScript&&(e=i.currentScript.src),!e)){var n=i.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.p,(()=>{var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(e,i)};function e(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}var i=function(){return(i=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function n(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,r,a=i.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(n=a.next()).done;)o.push(n.value)}catch(t){r={error:t}}finally{try{n&&!n.done&&(i=a.return)&&i.call(a)}finally{if(r)throw r.error}}return o}function r(t,e){for(var i=0,n=e.length,r=t.length;i<n;i++,r++)t[r]=e[i];return t}Object.create,Object.create;var a=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),o=function(){function t(t,e){for(var i=[],a=2;a<arguments.length;a++)i[a-2]=arguments[a];this.root=t,this.initialize.apply(this,r([],n(i))),this.foundation=void 0===e?this.getDefaultFoundation():e,this.foundation.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new a({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation.destroy()},t.prototype.listen=function(t,e,i){this.root.addEventListener(t,e,i)},t.prototype.unlisten=function(t,e,i){this.root.removeEventListener(t,e,i)},t.prototype.emit=function(t,e,i){var n;void 0===i&&(i=!1),"function"==typeof CustomEvent?n=new CustomEvent(t,{bubbles:i,detail:e}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root.dispatchEvent(n)},t}();function s(t){return void 0===t&&(t=window),!!function(t){void 0===t&&(t=window);var e=!1;try{var i={get passive(){return e=!0,!1}},n=function(){};t.document.addEventListener("test",n,i),t.document.removeEventListener("test",n,i)}catch(t){e=!1}return e}(t)&&{passive:!0}}var c,u={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},d={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},l={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},p=["touchstart","pointerdown","mousedown","keydown"],h=["touchend","pointerup","mouseup","contextmenu"],f=[],_=function(t){function n(e){var r=t.call(this,i(i({},n.defaultAdapter),e))||this;return r.activationAnimationHasEnded_=!1,r.activationTimer_=0,r.fgDeactivationRemovalTimer_=0,r.fgScale_="0",r.frame_={width:0,height:0},r.initialSize_=0,r.layoutFrame_=0,r.maxRadius_=0,r.unboundedCoords_={left:0,top:0},r.activationState_=r.defaultActivationState_(),r.activationTimerCallback_=function(){r.activationAnimationHasEnded_=!0,r.runDeactivationUXLogicIfReady_()},r.activateHandler_=function(t){return r.activate_(t)},r.deactivateHandler_=function(){return r.deactivate_()},r.focusHandler_=function(){return r.handleFocus()},r.blurHandler_=function(){return r.handleBlur()},r.resizeHandler_=function(){return r.layout()},r}return e(n,t),Object.defineProperty(n,"cssClasses",{get:function(){return u},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return d},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),n.prototype.init=function(){var t=this,e=this.supportsPressRipple_();if(this.registerRootHandlers_(e),e){var i=n.cssClasses,r=i.ROOT,a=i.UNBOUNDED;requestAnimationFrame((function(){t.adapter.addClass(r),t.adapter.isUnbounded()&&(t.adapter.addClass(a),t.layoutInternal_())}))}},n.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter.removeClass(n.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter.removeClass(n.cssClasses.FG_DEACTIVATION));var e=n.cssClasses,i=e.ROOT,r=e.UNBOUNDED;requestAnimationFrame((function(){t.adapter.removeClass(i),t.adapter.removeClass(r),t.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},n.prototype.activate=function(t){this.activate_(t)},n.prototype.deactivate=function(){this.deactivate_()},n.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){t.layoutInternal_(),t.layoutFrame_=0}))},n.prototype.setUnbounded=function(t){var e=n.cssClasses.UNBOUNDED;t?this.adapter.addClass(e):this.adapter.removeClass(e)},n.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter.addClass(n.cssClasses.BG_FOCUSED)}))},n.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter.removeClass(n.cssClasses.BG_FOCUSED)}))},n.prototype.supportsPressRipple_=function(){return this.adapter.browserSupportsCssVars()},n.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},n.prototype.registerRootHandlers_=function(t){var e=this;t&&(p.forEach((function(t){e.adapter.registerInteractionHandler(t,e.activateHandler_)})),this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler_)),this.adapter.registerInteractionHandler("focus",this.focusHandler_),this.adapter.registerInteractionHandler("blur",this.blurHandler_)},n.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter.registerInteractionHandler("keyup",this.deactivateHandler_):h.forEach((function(t){e.adapter.registerDocumentInteractionHandler(t,e.deactivateHandler_)}))},n.prototype.deregisterRootHandlers_=function(){var t=this;p.forEach((function(e){t.adapter.deregisterInteractionHandler(e,t.activateHandler_)})),this.adapter.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler_)},n.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler_),h.forEach((function(e){t.adapter.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)}))},n.prototype.removeCssVars_=function(){var t=this,e=n.strings;Object.keys(e).forEach((function(i){0===i.indexOf("VAR_")&&t.adapter.updateCssVariable(e[i],null)}))},n.prototype.activate_=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState_;if(!i.isActivated){var n=this.previousActivationEvent_;n&&void 0!==t&&n.type!==t.type||(i.isActivated=!0,i.isProgrammatic=void 0===t,i.activationEvent=t,i.wasActivatedByPointer=!i.isProgrammatic&&void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),void 0!==t&&f.length>0&&f.some((function(t){return e.adapter.containsEventTarget(t)}))?this.resetActivationState_():(void 0!==t&&(f.push(t.target),this.registerDeactivationHandlers_(t)),i.wasElementMadeActive=this.checkElementMadeActive_(t),i.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){f=[],i.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(i.wasElementMadeActive=e.checkElementMadeActive_(t),i.wasElementMadeActive&&e.animateActivation_()),i.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())}))))}}},n.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter.isSurfaceActive()},n.prototype.animateActivation_=function(){var t=this,e=n.strings,i=e.VAR_FG_TRANSLATE_START,r=e.VAR_FG_TRANSLATE_END,a=n.cssClasses,o=a.FG_DEACTIVATION,s=a.FG_ACTIVATION,c=n.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var u="",d="";if(!this.adapter.isUnbounded()){var l=this.getFgTranslationCoordinates_(),p=l.startPoint,h=l.endPoint;u=p.x+"px, "+p.y+"px",d=h.x+"px, "+h.y+"px"}this.adapter.updateCssVariable(i,u),this.adapter.updateCssVariable(r,d),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter.removeClass(o),this.adapter.computeBoundingRect(),this.adapter.addClass(s),this.activationTimer_=setTimeout((function(){return t.activationTimerCallback_()}),c)},n.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,i=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?function(t,e,i){if(!t)return{x:0,y:0};var n,r,a=e.x,o=e.y,s=a+i.left,c=o+i.top;if("touchstart"===t.type){var u=t;n=u.changedTouches[0].pageX-s,r=u.changedTouches[0].pageY-c}else{var d=t;n=d.pageX-s,r=d.pageY-c}return{x:n,y:r}}(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},n.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,e=n.cssClasses.FG_DEACTIVATION,i=this.activationState_,r=i.hasDeactivationUXRun,a=i.isActivated;(r||!a)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter.addClass(e),this.fgDeactivationRemovalTimer_=setTimeout((function(){t.adapter.removeClass(e)}),l.FG_DEACTIVATION_MS))},n.prototype.rmBoundedActivationClasses_=function(){var t=n.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter.computeBoundingRect()},n.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return t.previousActivationEvent_=void 0}),n.numbers.TAP_DELAY_MS)},n.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var n=i({},e);e.isProgrammatic?(requestAnimationFrame((function(){return t.animateDeactivation_(n)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(n),t.resetActivationState_()})))}},n.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,i=t.wasElementMadeActive;(e||i)&&this.runDeactivationUXLogicIfReady_()},n.prototype.layoutInternal_=function(){this.frame_=this.adapter.computeBoundingRect();var t=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter.isUnbounded()?t:Math.sqrt(Math.pow(this.frame_.width,2)+Math.pow(this.frame_.height,2))+n.numbers.PADDING;var e=Math.floor(t*n.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&e%2!=0?this.initialSize_=e-1:this.initialSize_=e,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},n.prototype.updateLayoutCssVars_=function(){var t=n.strings,e=t.VAR_FG_SIZE,i=t.VAR_LEFT,r=t.VAR_TOP,a=t.VAR_FG_SCALE;this.adapter.updateCssVariable(e,this.initialSize_+"px"),this.adapter.updateCssVariable(a,this.fgScale_),this.adapter.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter.updateCssVariable(i,this.unboundedCoords_.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords_.top+"px"))},n}(a),v=function(t){function i(){var e=null!==t&&t.apply(this,arguments)||this;return e.disabled=!1,e}return e(i,t),i.attachTo=function(t,e){void 0===e&&(e={isUnbounded:void 0});var n=new i(t);return void 0!==e.isUnbounded&&(n.unbounded=e.isUnbounded),n},i.createAdapter=function(t){return{addClass:function(e){return t.root.classList.add(e)},browserSupportsCssVars:function(){return function(t,e){void 0===e&&(e=!1);var i,n=window.CSS;if("boolean"==typeof c&&!e)return c;if(!n||"function"!=typeof n.supports)return!1;var r=n.supports("--css-vars","yes"),a=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return i=r||a,e||(c=i),i}()},computeBoundingRect:function(){return t.root.getBoundingClientRect()},containsEventTarget:function(e){return t.root.contains(e)},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,s())},deregisterInteractionHandler:function(e,i){return t.root.removeEventListener(e,i,s())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return e=t.root,i=":active",(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,i);var e,i},isSurfaceDisabled:function(){return Boolean(t.disabled)},isUnbounded:function(){return Boolean(t.unbounded)},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,s())},registerInteractionHandler:function(e,i){return t.root.addEventListener(e,i,s())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(e){return t.root.classList.remove(e)},updateCssVariable:function(e,i){return t.root.style.setProperty(e,i)}}},Object.defineProperty(i.prototype,"unbounded",{get:function(){return Boolean(this.unbounded_)},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()},enumerable:!1,configurable:!0}),i.prototype.activate=function(){this.foundation.activate()},i.prototype.deactivate=function(){this.foundation.deactivate()},i.prototype.layout=function(){this.foundation.layout()},i.prototype.getDefaultFoundation=function(){return new _(i.createAdapter(this))},i.prototype.initialSyncWithDOM=function(){var t=this.root;this.unbounded="mdcRippleIsUnbounded"in t.dataset},i.prototype.setUnbounded_=function(){this.foundation.setUnbounded(Boolean(this.unbounded_))},i}(o),g={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},m={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},y={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"},A=function(t){function n(e){return t.call(this,i(i({},n.defaultAdapter),e))||this}return e(n,t),Object.defineProperty(n,"strings",{get:function(){return y},enumerable:!1,configurable:!0}),Object.defineProperty(n,"cssClasses",{get:function(){return g},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return m},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),n.prototype.handleTargetScroll=function(){},n.prototype.handleWindowResize=function(){},n.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},n}(a),T=function(t){function i(e){var i=t.call(this,e)||this;return i.wasDocked_=!0,i.isDockedShowing_=!0,i.currentAppBarOffsetTop_=0,i.isCurrentlyBeingResized_=!1,i.resizeThrottleId_=0,i.resizeDebounceId_=0,i.lastScrollPosition_=i.adapter.getViewportScrollY(),i.topAppBarHeight_=i.adapter.getTopAppBarHeight(),i}return e(i,t),i.prototype.destroy=function(){t.prototype.destroy.call(this),this.adapter.setStyle("top","")},i.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),e=t-this.lastScrollPosition_;this.lastScrollPosition_=t,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=e,this.currentAppBarOffsetTop_>0?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())},i.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout((function(){t.resizeThrottleId_=0,t.throttledResizeHandler_()}),m.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout((function(){t.handleTargetScroll(),t.isCurrentlyBeingResized_=!1,t.resizeDebounceId_=0}),m.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},i.prototype.checkForUpdate_=function(){var t=-this.topAppBarHeight_,e=this.currentAppBarOffsetTop_<0,i=this.currentAppBarOffsetTop_>t,n=e&&i;if(n)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0,!0;if(this.isDockedShowing_!==i)return this.isDockedShowing_=i,!0}return n},i.prototype.moveTopAppBar_=function(){if(this.checkForUpdate_()){var t=this.currentAppBarOffsetTop_;Math.abs(t)>=this.topAppBarHeight_&&(t=-m.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",t+"px")}},i.prototype.throttledResizeHandler_=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight_!==t&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-t,this.topAppBarHeight_=t),this.handleTargetScroll()},i}(A),S=function(t){function i(){var e=null!==t&&t.apply(this,arguments)||this;return e.wasScrolled_=!1,e}return e(i,t),i.prototype.handleTargetScroll=function(){this.adapter.getViewportScrollY()<=0?this.wasScrolled_&&(this.adapter.removeClass(g.FIXED_SCROLLED_CLASS),this.wasScrolled_=!1):this.wasScrolled_||(this.adapter.addClass(g.FIXED_SCROLLED_CLASS),this.wasScrolled_=!0)},i}(T),C=function(t){function i(e){var i=t.call(this,e)||this;return i.isCollapsed_=!1,i.isAlwaysCollapsed_=!1,i}return e(i,t),Object.defineProperty(i.prototype,"isCollapsed",{get:function(){return this.isCollapsed_},enumerable:!1,configurable:!0}),i.prototype.init=function(){t.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(g.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(g.SHORT_COLLAPSED_CLASS))},i.prototype.setAlwaysCollapsed=function(t){this.isAlwaysCollapsed_=!!t,this.isAlwaysCollapsed_?this.collapse_():this.maybeCollapseBar_()},i.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed_},i.prototype.handleTargetScroll=function(){this.maybeCollapseBar_()},i.prototype.maybeCollapseBar_=function(){this.isAlwaysCollapsed_||(this.adapter.getViewportScrollY()<=0?this.isCollapsed_&&this.uncollapse_():this.isCollapsed_||this.collapse_())},i.prototype.uncollapse_=function(){this.adapter.removeClass(g.SHORT_COLLAPSED_CLASS),this.isCollapsed_=!1},i.prototype.collapse_=function(){this.adapter.addClass(g.SHORT_COLLAPSED_CLASS),this.isCollapsed_=!0},i}(A);new(function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return e(i,t),i.attachTo=function(t){return new i(t)},i.prototype.initialize=function(t){void 0===t&&(t=function(t){return v.attachTo(t)}),this.navIcon_=this.root.querySelector(y.NAVIGATION_ICON_SELECTOR);var e=[].slice.call(this.root.querySelectorAll(y.ACTION_ITEM_SELECTOR));this.navIcon_&&e.push(this.navIcon_),this.iconRipples_=e.map((function(e){var i=t(e);return i.unbounded=!0,i})),this.scrollTarget_=window},i.prototype.initialSyncWithDOM=function(){this.handleNavigationClick_=this.foundation.handleNavigationClick.bind(this.foundation),this.handleWindowResize_=this.foundation.handleWindowResize.bind(this.foundation),this.handleTargetScroll_=this.foundation.handleTargetScroll.bind(this.foundation),this.scrollTarget_.addEventListener("scroll",this.handleTargetScroll_),this.navIcon_&&this.navIcon_.addEventListener("click",this.handleNavigationClick_);var t=this.root.classList.contains(g.FIXED_CLASS);this.root.classList.contains(g.SHORT_CLASS)||t||window.addEventListener("resize",this.handleWindowResize_)},i.prototype.destroy=function(){this.iconRipples_.forEach((function(t){return t.destroy()})),this.scrollTarget_.removeEventListener("scroll",this.handleTargetScroll_),this.navIcon_&&this.navIcon_.removeEventListener("click",this.handleNavigationClick_);var e=this.root.classList.contains(g.FIXED_CLASS);this.root.classList.contains(g.SHORT_CLASS)||e||window.removeEventListener("resize",this.handleWindowResize_),t.prototype.destroy.call(this)},i.prototype.setScrollTarget=function(t){this.scrollTarget_.removeEventListener("scroll",this.handleTargetScroll_),this.scrollTarget_=t,this.handleTargetScroll_=this.foundation.handleTargetScroll.bind(this.foundation),this.scrollTarget_.addEventListener("scroll",this.handleTargetScroll_)},i.prototype.getDefaultFoundation=function(){var t=this,e={hasClass:function(e){return t.root.classList.contains(e)},addClass:function(e){return t.root.classList.add(e)},removeClass:function(e){return t.root.classList.remove(e)},setStyle:function(e,i){return t.root.style.setProperty(e,i)},getTopAppBarHeight:function(){return t.root.clientHeight},notifyNavigationIconClicked:function(){return t.emit(y.NAVIGATION_EVENT,{})},getViewportScrollY:function(){var e=t.scrollTarget_,i=t.scrollTarget_;return void 0!==e.pageYOffset?e.pageYOffset:i.scrollTop},getTotalActionItems:function(){return t.root.querySelectorAll(y.ACTION_ITEM_SELECTOR).length}};return this.root.classList.contains(g.SHORT_CLASS)?new C(e):this.root.classList.contains(g.FIXED_CLASS)?new S(e):new T(e)},i}(o))(document.querySelector(".mdc-top-app-bar")),console.log("hello world")})()})();