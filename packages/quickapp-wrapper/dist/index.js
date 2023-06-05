"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  componentActionWrapper: () => componentActionWrapper,
  componentMixinWrapper: () => componentMixinWrapper,
  componentWrapper: () => componentWrapper,
  pageActionWrapper: () => pageActionWrapper,
  pageMixinWrapper: () => pageMixinWrapper,
  pageWrapper: () => pageWrapper
});
module.exports = __toCommonJS(src_exports);

// src/action.ts
var import_lodash = require("lodash");
var handlePageAction = (options) => {
  const originOnShow = options.onShow;
  const originOnHide = options.onHide;
  const originOnBackPress = options.onBackPress;
  options.onShow = function() {
    if ((0, import_lodash.isFunction)(originOnShow)) {
      originOnShow.call(this);
    }
    this.$broadcast("__onPageShow__");
  };
  options.onHide = function() {
    if ((0, import_lodash.isFunction)(originOnHide)) {
      originOnHide.call(this);
    }
    this.$broadcast("__onPageHide__");
  };
  options.onBackPress = function() {
    if ((0, import_lodash.isFunction)(originOnBackPress)) {
      originOnBackPress.call(this);
    }
    this.$broadcast("__onPageBackPress__");
  };
};
var handleComponentAction = (options) => {
  const originOnInit = options.onInit;
  options.onInit = function() {
    if ((0, import_lodash.isFunction)(originOnInit)) {
      originOnInit.call(this);
    }
    this.$on("__onPageShow__", () => {
      if ((0, import_lodash.isFunction)(options.onPageShow)) {
        options.onPageShow.call(this);
      }
    });
    this.$on("__onPageHide__", () => {
      if ((0, import_lodash.isFunction)(options.onPageHide)) {
        options.onPageHide.call(this);
      }
    });
    this.$on("__onPageBackPress__", () => {
      if ((0, import_lodash.isFunction)(options.onPageBackPress)) {
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
    return options;
  };
};
var action_default = actionWrapper;

// src/mixin.ts
var import_lodash2 = require("lodash");

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
    if ((0, import_lodash2.isPlainObject)(mixin)) {
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
    return options;
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
  return funcs.reduce((a, b) => {
    return (...args) => {
      return a(b(...args));
    };
  });
};

// src/index.ts
var pageActionWrapper = action_default("page");
var componentActionWrapper = action_default("component");
var pageMixinWrapper = mixin_default("page");
var componentMixinWrapper = mixin_default("component");
var pageWrapper = compose(pageActionWrapper, pageMixinWrapper);
var componentWrapper = compose(componentActionWrapper, componentMixinWrapper);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  componentActionWrapper,
  componentMixinWrapper,
  componentWrapper,
  pageActionWrapper,
  pageMixinWrapper,
  pageWrapper
});
