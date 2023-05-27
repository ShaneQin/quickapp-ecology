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
var asyncshowDialog = ({ title, message, buttons, autocancel }) => {
  return new Promise((resolve, reject) => {
    prompt.showDialog({
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
    prompt.showContextMenu({
      itemList,
      itemColor,
      success: resolve,
      cancel: reject
    });
  });
};

// src/request.ts
import request from "@system.request";
var asyncRequestUpload = ({ url, header, method, files, data }) => {
  return new Promise((resolve, reject) => {
    request.upload({
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
    request.download({
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
    request.onDownloadComplete({
      token,
      success: resolve,
      fail: reject
    });
  });
};

// src/share.ts
import share from "@system.share";
var asyncShare = ({ type, data }) => {
  return new Promise((resolve, reject) => {
    share.share({
      type,
      data,
      success: resolve,
      fail: reject,
      cancel: reject
    });
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
var asyncStorageGet = ({ key }) => {
  return new Promise((resolve, reject) => {
    storage.get({
      key,
      success: resolve,
      fail: reject
    });
  });
};
var asyncStorageSet = ({ key, value }) => {
  return new Promise((resolve, reject) => {
    storage.set({
      key,
      value,
      success: resolve,
      fail: reject
    });
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
var asyncStorageDelete = ({ key }) => {
  return new Promise((resolve, reject) => {
    storage.delete({
      key,
      success: resolve,
      fail: reject
    });
  });
};
var asyncStorageKey = ({ index }) => {
  return new Promise((resolve, reject) => {
    storage.key({
      index,
      success: resolve,
      fail: reject
    });
  });
};

// src/webview.ts
import webview from "@system.webview";
var asyncWebviewSetCookie = ({ domain, name, value, maxAge, path }) => {
  return new Promise((resolve, reject) => {
    webview.setCookie({
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
};
