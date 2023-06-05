var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

// src/action.ts
import { isFunction } from "lodash";
var handlePageAction = (options) => {
  const originOnShow = options.onShow;
  const originOnHide = options.onHide;
  const originOnBackPress = options.onBackPress;
  options.onShow = function() {
    if (isFunction(originOnShow)) {
      originOnShow.call(this);
    }
    this.$broadcast("__onPageShow__");
  };
  options.onHide = function() {
    if (isFunction(originOnHide)) {
      originOnHide.call(this);
    }
    this.$broadcast("__onPageHide__");
  };
  options.onBackPress = function() {
    if (isFunction(originOnBackPress)) {
      originOnBackPress.call(this);
    }
    this.$broadcast("__onPageBackPress__");
  };
};
var handleComponentAction = (options) => {
  const originOnInit = options.onInit;
  options.onInit = function() {
    if (isFunction(originOnInit)) {
      originOnInit.call(this);
    }
    this.$on("__onPageShow__", () => {
      if (isFunction(options.onPageShow)) {
        options.onPageShow.call(this);
      }
    });
    this.$on("__onPageHide__", () => {
      if (isFunction(options.onPageHide)) {
        options.onPageHide.call(this);
      }
    });
    this.$on("__onPageBackPress__", () => {
      if (isFunction(options.onPageBackPress)) {
        options.onPageBackPress.call(this);
      }
    });
  };
};
var actionWrapper = (type) => {
  return function(options) {
    if (type === "page") {
      handlePageAction(options);
    } else if (type === "component") {
      handleComponentAction(options);
    }
  };
};
var action_default = actionWrapper;

// src/mixin.ts
import { isPlainObject } from "lodash";

// src/config.ts
var appLifecycle = ["onCreate", "onRequest", "onShow", "onHide", "onDestroy", "onError", "onPageNotFound"];
var componentLifecycle = ["onInit", "onReady", "onDestroy"];
var pageLifecycle = [...componentLifecycle, "onShow", "onHide", "onBackPress", "onMenuPress", "onRefresh", "onConfigurationChanged", "onReachTop", "onReachBottom", "onPageScroll"];
var optionsDataKey = ["data", "private", "public", "props", "computed"];
var lifecycleMap = {
  app: appLifecycle,
  page: pageLifecycle,
  component: componentLifecycle
};

// src/mixin.ts
var _merge = (mixins, options, type) => {
  mixins.forEach((mixin) => {
    if (isPlainObject(mixin)) {
      Object.keys(mixin).forEach((key) => {
        if (optionsDataKey.includes(key)) {
          options[key] = __spreadValues(__spreadValues({}, mixin[key]), options[key]);
        } else if (lifecycleMap[type].includes(key)) {
          const nativeLifecycle = options[key];
          options[key] = function(...args) {
            mixin[key].apply(this, args);
            return nativeLifecycle && nativeLifecycle.apply(this, args);
          };
        } else {
          options[key] = mixin[key];
        }
      });
    }
  });
};
var mixinWrapper = (type) => {
  return function(options) {
    const { mixins } = options;
    if (Array.isArray(mixins) && mixins.length) {
      Reflect.deleteProperty(options, "mixins");
      _merge(mixins, options, type);
    }
  };
};
var mixin_default = mixinWrapper;

// src/utils.ts
var compose = (...funcs) => {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
};

// src/index.ts
var pageActionWrapper = action_default("page");
var componentActionWrapper = action_default("component");
var pageMixinWrapper = mixin_default("page");
var componentMixinWrapper = mixin_default("component");
var pageWrapper = compose(pageActionWrapper, pageMixinWrapper);
var componentWrapper = compose(componentActionWrapper, componentMixinWrapper);
export {
  componentActionWrapper,
  componentMixinWrapper,
  componentWrapper,
  pageActionWrapper,
  pageMixinWrapper,
  pageWrapper
};
