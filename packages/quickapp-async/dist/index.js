"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  asyncDeviceGetAdvertisingId: () => asyncDeviceGetAdvertisingId,
  asyncDeviceGetAvailableStorage: () => asyncDeviceGetAvailableStorage,
  asyncDeviceGetCpuInfo: () => asyncDeviceGetCpuInfo,
  asyncDeviceGetDeviceId: () => asyncDeviceGetDeviceId,
  asyncDeviceGetId: () => asyncDeviceGetId,
  asyncDeviceGetInfo: () => asyncDeviceGetInfo,
  asyncDeviceGetOAID: () => asyncDeviceGetOAID,
  asyncDeviceGetSerial: () => asyncDeviceGetSerial,
  asyncDeviceGetTotalStorage: () => asyncDeviceGetTotalStorage,
  asyncDeviceGetUserId: () => asyncDeviceGetUserId,
  asyncNetworkGetSimOperators: () => asyncNetworkGetSimOperators,
  asyncNetworkGetType: () => asyncNetworkGetType,
  asyncRequestDownload: () => asyncRequestDownload,
  asyncRequestOnDownloadComplete: () => asyncRequestOnDownloadComplete,
  asyncRequestUpload: () => asyncRequestUpload,
  asyncShare: () => asyncShare,
  asyncShortcuInstall: () => asyncShortcuInstall,
  asyncShortcutHasInstalled: () => asyncShortcutHasInstalled,
  asyncShowContextMenu: () => asyncShowContextMenu,
  asyncStorageClear: () => asyncStorageClear,
  asyncStorageDelete: () => asyncStorageDelete,
  asyncStorageGet: () => asyncStorageGet,
  asyncStorageKey: () => asyncStorageKey,
  asyncStorageSet: () => asyncStorageSet,
  asyncWebviewSetCookie: () => asyncWebviewSetCookie,
  asyncshowDialog: () => asyncshowDialog
});
module.exports = __toCommonJS(src_exports);

// src/device.ts
var import_system = __toESM(require("@system.device"));
var asyncDeviceGetInfo = () => {
  return new Promise((resolve, reject) => {
    import_system.default.getInfo({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetId = ({ type }) => {
  return new Promise((resolve, reject) => {
    import_system.default.getId({
      type,
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetDeviceId = () => {
  return new Promise((resolve, reject) => {
    import_system.default.getDeviceId({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetUserId = () => {
  return new Promise((resolve, reject) => {
    import_system.default.getUserId({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetAdvertisingId = () => {
  return new Promise((resolve, reject) => {
    import_system.default.getAdvertisingId({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetSerial = () => {
  return new Promise((resolve, reject) => {
    import_system.default.getSerial({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetTotalStorage = () => {
  return new Promise((resolve, reject) => {
    import_system.default.getTotalStorage({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetAvailableStorage = () => {
  return new Promise((resolve, reject) => {
    import_system.default.getAvailableStorage({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetCpuInfo = () => {
  return new Promise((resolve, reject) => {
    import_system.default.getCpuInfo({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetOAID = () => {
  return new Promise((resolve, reject) => {
    import_system.default.getOAID({
      success: resolve,
      fail: reject
    });
  });
};

// src/network.ts
var import_system2 = __toESM(require("@system.network"));
var asyncNetworkGetType = () => {
  return new Promise((resolve, reject) => {
    import_system2.default.getType({
      success: resolve,
      fail: reject
    });
  });
};
var asyncNetworkGetSimOperators = () => {
  return new Promise((resolve, reject) => {
    import_system2.default.getSimOperators({
      success: resolve,
      fail: reject
    });
  });
};

// src/prompt.ts
var import_system3 = __toESM(require("@system.prompt"));
var asyncshowDialog = ({ title, message, buttons, autocancel }) => {
  return new Promise((resolve, reject) => {
    import_system3.default.showDialog({
      title,
      message,
      buttons,
      autocancel,
      success: resolve,
      cancel: reject
    });
  });
};
var asyncShowContextMenu = ({ itemList, itemColor }) => {
  return new Promise((resolve, reject) => {
    import_system3.default.showContextMenu({
      itemList,
      itemColor,
      success: resolve,
      cancel: reject
    });
  });
};

// src/request.ts
var import_system4 = __toESM(require("@system.request"));
var asyncRequestUpload = ({ url, header, method, files, data }) => {
  return new Promise((resolve, reject) => {
    import_system4.default.upload({
      url,
      header,
      method,
      files,
      data,
      success: resolve,
      fail: reject
    });
  });
};
var asyncRequestDownload = ({ url, header, description, filename }) => {
  return new Promise((resolve, reject) => {
    import_system4.default.download({
      url,
      header,
      description,
      filename,
      success: resolve,
      fail: reject
    });
  });
};
var asyncRequestOnDownloadComplete = ({ token }) => {
  return new Promise((resolve, reject) => {
    import_system4.default.onDownloadComplete({
      token,
      success: resolve,
      fail: reject
    });
  });
};

// src/share.ts
var import_system5 = __toESM(require("@system.share"));
var asyncShare = ({ type, data }) => {
  return new Promise((resolve, reject) => {
    import_system5.default.share({
      type,
      data,
      success: resolve,
      fail: reject,
      cancel: reject
    });
  });
};

// src/shortcut.ts
var import_system6 = __toESM(require("@system.shortcut"));
var asyncShortcutHasInstalled = () => {
  return new Promise((resolve, reject) => {
    import_system6.default.hasInstalled({
      success: resolve,
      fail: reject
    });
  });
};
var asyncShortcuInstall = ({ message }) => {
  return new Promise((resolve, reject) => {
    import_system6.default.install({
      message,
      success: resolve,
      fail: reject
    });
  });
};

// src/storage.ts
var import_system7 = __toESM(require("@system.storage"));
var asyncStorageGet = ({ key }) => {
  return new Promise((resolve, reject) => {
    import_system7.default.get({
      key,
      success: resolve,
      fail: reject
    });
  });
};
var asyncStorageSet = ({ key, value }) => {
  return new Promise((resolve, reject) => {
    import_system7.default.set({
      key,
      value,
      success: resolve,
      fail: reject
    });
  });
};
var asyncStorageClear = () => {
  return new Promise((resolve, reject) => {
    import_system7.default.clear({
      success: resolve,
      fail: reject
    });
  });
};
var asyncStorageDelete = ({ key }) => {
  return new Promise((resolve, reject) => {
    import_system7.default.delete({
      key,
      success: resolve,
      fail: reject
    });
  });
};
var asyncStorageKey = ({ index }) => {
  return new Promise((resolve, reject) => {
    import_system7.default.key({
      index,
      success: resolve,
      fail: reject
    });
  });
};

// src/webview.ts
var import_system8 = __toESM(require("@system.webview"));
var asyncWebviewSetCookie = ({ domain, name, value, maxAge, path }) => {
  return new Promise((resolve, reject) => {
    import_system8.default.setCookie({
      domain,
      name,
      value,
      maxAge,
      path,
      success: resolve,
      fail: reject
    });
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
  asyncRequestDownload,
  asyncRequestOnDownloadComplete,
  asyncRequestUpload,
  asyncShare,
  asyncShortcuInstall,
  asyncShortcutHasInstalled,
  asyncShowContextMenu,
  asyncStorageClear,
  asyncStorageDelete,
  asyncStorageGet,
  asyncStorageKey,
  asyncStorageSet,
  asyncWebviewSetCookie,
  asyncshowDialog
});
