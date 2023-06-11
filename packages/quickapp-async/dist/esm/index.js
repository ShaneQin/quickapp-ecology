var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/device.ts
import device from "@system.device";
var asyncDeviceGetInfo = () => {
  return new Promise((resolve, reject) => {
    device.getInfo({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetId = ({ type }) => {
  return new Promise((resolve, reject) => {
    device.getId({
      type,
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetDeviceId = () => {
  return new Promise((resolve, reject) => {
    device.getDeviceId({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetUserId = () => {
  return new Promise((resolve, reject) => {
    device.getUserId({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetAdvertisingId = () => {
  return new Promise((resolve, reject) => {
    device.getAdvertisingId({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetSerial = () => {
  return new Promise((resolve, reject) => {
    device.getSerial({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetTotalStorage = () => {
  return new Promise((resolve, reject) => {
    device.getTotalStorage({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetAvailableStorage = () => {
  return new Promise((resolve, reject) => {
    device.getAvailableStorage({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetCpuInfo = () => {
  return new Promise((resolve, reject) => {
    device.getCpuInfo({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetOAID = () => {
  return new Promise((resolve, reject) => {
    device.getOAID({
      success: resolve,
      fail: reject
    });
  });
};

// src/network.ts
import network from "@system.network";
var asyncNetworkGetType = () => {
  return new Promise((resolve, reject) => {
    network.getType({
      success: resolve,
      fail: reject
    });
  });
};
var asyncNetworkGetSimOperators = () => {
  return new Promise((resolve, reject) => {
    network.getSimOperators({
      success: resolve,
      fail: reject
    });
  });
};

// src/prompt.ts
import prompt from "@system.prompt";
var asyncPromptShowDialog = (args) => {
  return new Promise((resolve, reject) => {
    prompt.showDialog(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      cancel: reject
    }));
  });
};
var asyncPromptShowContextMenu = (args) => {
  return new Promise((resolve, reject) => {
    prompt.showContextMenu(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      cancel: reject
    }));
  });
};

// src/request.ts
import request from "@system.request";
var asyncRequestUpload = (args) => {
  return new Promise((resolve, reject) => {
    request.upload(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncRequestDownload = (args) => {
  return new Promise((resolve, reject) => {
    request.download(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncRequestOnDownloadComplete = (args) => {
  return new Promise((resolve, reject) => {
    request.onDownloadComplete(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};

// src/share.ts
import share from "@system.share";
var asyncShareShare = (args) => {
  return new Promise((resolve, reject) => {
    share.share(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject,
      cancel: reject
    }));
  });
};

// src/shortcut.ts
import shortcut from "@system.shortcut";
var asyncShortcutHasInstalled = () => {
  return new Promise((resolve, reject) => {
    shortcut.hasInstalled({
      success: resolve,
      fail: reject
    });
  });
};
var asyncShortcuInstall = ({ message }) => {
  return new Promise((resolve, reject) => {
    shortcut.install({
      message,
      success: resolve,
      fail: reject
    });
  });
};

// src/storage.ts
import storage from "@system.storage";
var asyncStorageGet = (args) => {
  return new Promise((resolve, reject) => {
    storage.get(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncStorageSet = (args) => {
  return new Promise((resolve, reject) => {
    storage.set(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncStorageClear = () => {
  return new Promise((resolve, reject) => {
    storage.clear({
      success: resolve,
      fail: reject
    });
  });
};
var asyncStorageDelete = (args) => {
  return new Promise((resolve, reject) => {
    storage.delete(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncStorageKey = (args) => {
  return new Promise((resolve, reject) => {
    storage.key(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};

// src/webview.ts
import webview from "@system.webview";
var asyncWebviewSetCookie = (args) => {
  return new Promise((resolve, reject) => {
    webview.setCookie(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
export {
  asyncDeviceGetAdvertisingId,
  asyncDeviceGetAvailableStorage,
  asyncDeviceGetCpuInfo,
  asyncDeviceGetDeviceId,
  asyncDeviceGetId,
  asyncDeviceGetInfo,
  asyncDeviceGetOAID,
  asyncDeviceGetSerial,
  asyncDeviceGetTotalStorage,
  asyncDeviceGetUserId,
  asyncNetworkGetSimOperators,
  asyncNetworkGetType,
  asyncPromptShowContextMenu,
  asyncPromptShowDialog,
  asyncRequestDownload,
  asyncRequestOnDownloadComplete,
  asyncRequestUpload,
  asyncShareShare,
  asyncShortcuInstall,
  asyncShortcutHasInstalled,
  asyncStorageClear,
  asyncStorageDelete,
  asyncStorageGet,
  asyncStorageKey,
  asyncStorageSet,
  asyncWebviewSetCookie
};
