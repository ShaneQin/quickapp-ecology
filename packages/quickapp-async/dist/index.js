"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
  asyncAlarmIsAvailable: () => asyncAlarmIsAvailable,
  asyncAlarmSetAlarm: () => asyncAlarmSetAlarm,
  asyncBarcodeScan: () => asyncBarcodeScan,
  asyncBatteryGetStatus: () => asyncBatteryGetStatus,
  asyncBluetootNotifyBLECharacteristicValueChange: () => asyncBluetootNotifyBLECharacteristicValueChange,
  asyncBluetoothCloseAdapter: () => asyncBluetoothCloseAdapter,
  asyncBluetoothCloseBLEConnection: () => asyncBluetoothCloseBLEConnection,
  asyncBluetoothCreateBLEConnection: () => asyncBluetoothCreateBLEConnection,
  asyncBluetoothGetAdapterState: () => asyncBluetoothGetAdapterState,
  asyncBluetoothGetBLEDeviceCharacteristics: () => asyncBluetoothGetBLEDeviceCharacteristics,
  asyncBluetoothGetBLEDeviceServices: () => asyncBluetoothGetBLEDeviceServices,
  asyncBluetoothGetConnectedDevices: () => asyncBluetoothGetConnectedDevices,
  asyncBluetoothGetDevices: () => asyncBluetoothGetDevices,
  asyncBluetoothOpenAdapter: () => asyncBluetoothOpenAdapter,
  asyncBluetoothReadBLECharacteristicValue: () => asyncBluetoothReadBLECharacteristicValue,
  asyncBluetoothStartDevicesDiscovery: () => asyncBluetoothStartDevicesDiscovery,
  asyncBluetoothStopDevicesDiscovery: () => asyncBluetoothStopDevicesDiscovery,
  asyncBluetoothWriteBLECharacteristicValue: () => asyncBluetoothWriteBLECharacteristicValue,
  asyncBrightnessGetMode: () => asyncBrightnessGetMode,
  asyncBrightnessGetValue: () => asyncBrightnessGetValue,
  asyncBrightnessSetKeepScreenOn: () => asyncBrightnessSetKeepScreenOn,
  asyncBrightnessSetMode: () => asyncBrightnessSetMode,
  asyncBrightnessSetValue: () => asyncBrightnessSetValue,
  asyncCalendarInsert: () => asyncCalendarInsert,
  asyncClipboardGet: () => asyncClipboardGet,
  asyncClipboardSet: () => asyncClipboardSet,
  asyncContactList: () => asyncContactList,
  asyncContactPick: () => asyncContactPick,
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
  asyncExchangeClear: () => asyncExchangeClear,
  asyncExchangeGet: () => asyncExchangeGet,
  asyncExchangeGrantPermission: () => asyncExchangeGrantPermission,
  asyncExchangeRemove: () => asyncExchangeRemove,
  asyncExchangeRevokePermission: () => asyncExchangeRevokePermission,
  asyncExchangeSet: () => asyncExchangeSet,
  asyncFileAccess: () => asyncFileAccess,
  asyncFileCopy: () => asyncFileCopy,
  asyncFileDelete: () => asyncFileDelete,
  asyncFileGet: () => asyncFileGet,
  asyncFileList: () => asyncFileList,
  asyncFileMkdir: () => asyncFileMkdir,
  asyncFileMove: () => asyncFileMove,
  asyncFileReadArrayBuffer: () => asyncFileReadArrayBuffer,
  asyncFileReadText: () => asyncFileReadText,
  asyncFileRmdir: () => asyncFileRmdir,
  asyncFileWriteArrayBuffer: () => asyncFileWriteArrayBuffer,
  asyncFileWriteText: () => asyncFileWriteText,
  asyncGeolocationChooseLocation: () => asyncGeolocationChooseLocation,
  asyncGeolocationGeocodeQuery: () => asyncGeolocationGeocodeQuery,
  asyncGeolocationGetLocation: () => asyncGeolocationGetLocation,
  asyncGeolocationGetLocationType: () => asyncGeolocationGetLocationType,
  asyncGeolocationOpenLocation: () => asyncGeolocationOpenLocation,
  asyncGeolocationReverseGeocodeQuery: () => asyncGeolocationReverseGeocodeQuery,
  asyncKeyguardGetKeyguardLockedStatus: () => asyncKeyguardGetKeyguardLockedStatus,
  asyncNetworkGetSimOperators: () => asyncNetworkGetSimOperators,
  asyncNetworkGetType: () => asyncNetworkGetType,
  asyncPkgGetInfo: () => asyncPkgGetInfo,
  asyncPkgGetSignatureDigests: () => asyncPkgGetSignatureDigests,
  asyncPkgHasInstalled: () => asyncPkgHasInstalled,
  asyncPkgInstall: () => asyncPkgInstall,
  asyncPromptShowContextMenu: () => asyncPromptShowContextMenu,
  asyncPromptShowDialog: () => asyncPromptShowDialog,
  asyncRecordStart: () => asyncRecordStart,
  asyncRequestDownload: () => asyncRequestDownload,
  asyncRequestOnDownloadComplete: () => asyncRequestOnDownloadComplete,
  asyncRequestUpload: () => asyncRequestUpload,
  asyncShareShare: () => asyncShareShare,
  asyncShortcuInstall: () => asyncShortcuInstall,
  asyncShortcutHasInstalled: () => asyncShortcutHasInstalled,
  asyncSmsReadSafely: () => asyncSmsReadSafely,
  asyncSmsSend: () => asyncSmsSend,
  asyncStorageClear: () => asyncStorageClear,
  asyncStorageDelete: () => asyncStorageDelete,
  asyncStorageGet: () => asyncStorageGet,
  asyncStorageKey: () => asyncStorageKey,
  asyncStorageSet: () => asyncStorageSet,
  asyncTelecomGetTelecomInfo: () => asyncTelecomGetTelecomInfo,
  asyncVolumeGetMediaValue: () => asyncVolumeGetMediaValue,
  asyncVolumeSetMediaValue: () => asyncVolumeSetMediaValue,
  asyncWebviewSetCookie: () => asyncWebviewSetCookie,
  asyncWifiConnect: () => asyncWifiConnect,
  asyncWifiGetConnectedWifi: () => asyncWifiGetConnectedWifi,
  asyncWifiScan: () => asyncWifiScan,
  asyncZipDecompress: () => asyncZipDecompress
});
module.exports = __toCommonJS(src_exports);

// src/alarm.ts
var import_system = __toESM(require("@system.alarm"));
var asyncAlarmSetAlarm = (args) => {
  return new Promise((resolve, reject) => {
    import_system.default.setAlarm(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncAlarmIsAvailable = () => {
  return new Promise((resolve, reject) => {
    import_system.default.isAvailable({
      success: resolve,
      fail: reject
    });
  });
};

// src/barcode.ts
var import_system2 = __toESM(require("@system.barcode"));
var asyncBarcodeScan = () => {
  return new Promise((resolve, reject) => {
    import_system2.default.scan({
      success: resolve,
      fail: reject,
      cancel: reject
    });
  });
};

// src/battery.ts
var import_system3 = __toESM(require("@system.battery"));
var asyncBatteryGetStatus = () => {
  return new Promise((resolve, reject) => {
    import_system3.default.getStatus({
      success: resolve,
      fail: reject
    });
  });
};

// src/bluetooth.ts
var import_system4 = __toESM(require("@system.bluetooth"));
var asyncBluetoothOpenAdapter = (args = {}) => {
  return new Promise((resolve, reject) => {
    import_system4.default.openAdapter(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBluetoothCloseAdapter = (args = {}) => {
  return new Promise((resolve, reject) => {
    import_system4.default.closeAdapter(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBluetoothGetAdapterState = () => {
  return new Promise((resolve, reject) => {
    import_system4.default.getAdapterState({
      success: resolve,
      fail: reject
    });
  });
};
var asyncBluetoothStartDevicesDiscovery = (args = {}) => {
  return new Promise((resolve, reject) => {
    import_system4.default.startDevicesDiscovery(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBluetoothStopDevicesDiscovery = () => {
  return new Promise((resolve, reject) => {
    import_system4.default.stopDevicesDiscovery({
      success: resolve,
      fail: reject
    });
  });
};
var asyncBluetoothGetDevices = () => {
  return new Promise((resolve, reject) => {
    import_system4.default.getDevices({
      success: resolve,
      fail: reject
    });
  });
};
var asyncBluetoothGetConnectedDevices = (args) => {
  return new Promise((resolve, reject) => {
    import_system4.default.getConnectedDevices(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBluetoothCreateBLEConnection = (args) => {
  return new Promise((resolve, reject) => {
    import_system4.default.createBLEConnection(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBluetoothCloseBLEConnection = (args) => {
  return new Promise((resolve, reject) => {
    import_system4.default.closeBLEConnection(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBluetoothGetBLEDeviceServices = (args) => {
  return new Promise((resolve, reject) => {
    import_system4.default.getBLEDeviceServices(__spreadProps(__spreadValues({}, args), {
      // 类型定义和文档不符
      // @ts-ignore
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBluetoothGetBLEDeviceCharacteristics = (args) => {
  return new Promise((resolve, reject) => {
    import_system4.default.getBLEDeviceCharacteristics(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBluetoothReadBLECharacteristicValue = (args) => {
  return new Promise((resolve, reject) => {
    import_system4.default.readBLECharacteristicValue(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBluetoothWriteBLECharacteristicValue = (args) => {
  return new Promise((resolve, reject) => {
    import_system4.default.writeBLECharacteristicValue(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBluetootNotifyBLECharacteristicValueChange = (args) => {
  return new Promise((resolve, reject) => {
    import_system4.default.notifyBLECharacteristicValueChange(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};

// src/brightness.ts
var import_system5 = __toESM(require("@system.brightness"));
var asyncBrightnessGetValue = () => {
  return new Promise((resolve, reject) => {
    import_system5.default.getValue({
      success: resolve,
      fail: reject
    });
  });
};
var asyncBrightnessSetValue = (args) => {
  return new Promise((resolve, reject) => {
    import_system5.default.setValue(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBrightnessGetMode = () => {
  return new Promise((resolve, reject) => {
    import_system5.default.getMode({
      success: resolve,
      fail: reject
    });
  });
};
var asyncBrightnessSetMode = (args) => {
  return new Promise((resolve, reject) => {
    import_system5.default.setMode(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBrightnessSetKeepScreenOn = (args) => {
  return new Promise((resolve, reject) => {
    import_system5.default.setKeepScreenOn(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};

// src/calendar.ts
var import_system6 = __toESM(require("@system.calendar"));
var asyncCalendarInsert = (args) => {
  return new Promise((resolve, reject) => {
    import_system6.default.insert(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};

// src/clipboard.ts
var import_system7 = __toESM(require("@system.clipboard"));
var asyncClipboardSet = (args) => {
  return new Promise((resolve, reject) => {
    import_system7.default.set(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncClipboardGet = () => {
  return new Promise((resolve, reject) => {
    import_system7.default.get({
      success: resolve,
      fail: reject
    });
  });
};

// src/contact.ts
var import_system8 = __toESM(require("@system.contact"));
var asyncContactPick = () => {
  return new Promise((resolve, reject) => {
    import_system8.default.pick({
      success: resolve,
      fail: reject
    });
  });
};
var asyncContactList = () => {
  return new Promise((resolve, reject) => {
    import_system8.default.list({
      success: resolve,
      fail: reject
    });
  });
};

// src/device.ts
var import_system9 = __toESM(require("@system.device"));
var asyncDeviceGetInfo = () => {
  return new Promise((resolve, reject) => {
    import_system9.default.getInfo({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetId = ({ type }) => {
  return new Promise((resolve, reject) => {
    import_system9.default.getId({
      type,
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetDeviceId = () => {
  return new Promise((resolve, reject) => {
    import_system9.default.getDeviceId({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetUserId = () => {
  return new Promise((resolve, reject) => {
    import_system9.default.getUserId({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetAdvertisingId = () => {
  return new Promise((resolve, reject) => {
    import_system9.default.getAdvertisingId({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetSerial = () => {
  return new Promise((resolve, reject) => {
    import_system9.default.getSerial({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetTotalStorage = () => {
  return new Promise((resolve, reject) => {
    import_system9.default.getTotalStorage({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetAvailableStorage = () => {
  return new Promise((resolve, reject) => {
    import_system9.default.getAvailableStorage({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetCpuInfo = () => {
  return new Promise((resolve, reject) => {
    import_system9.default.getCpuInfo({
      success: resolve,
      fail: reject
    });
  });
};
var asyncDeviceGetOAID = () => {
  return new Promise((resolve, reject) => {
    import_system9.default.getOAID({
      success: resolve,
      fail: reject
    });
  });
};

// src/exchange.ts
var import_service = __toESM(require("@service.exchange"));
var asyncExchangeGet = (args) => {
  return new Promise((resolve, reject) => {
    import_service.default.get(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncExchangeSet = (args) => {
  return new Promise((resolve, reject) => {
    import_service.default.set(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncExchangeRemove = (args) => {
  return new Promise((resolve, reject) => {
    import_service.default.remove(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncExchangeClear = () => {
  return new Promise((resolve, reject) => {
    import_service.default.clear({
      success: resolve,
      fail: reject
    });
  });
};
var asyncExchangeGrantPermission = (args) => {
  return new Promise((resolve, reject) => {
    import_service.default.grantPermission(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncExchangeRevokePermission = (args) => {
  return new Promise((resolve, reject) => {
    import_service.default.revokePermission(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};

// src/file.ts
var import_system10 = __toESM(require("@system.file"));
var asyncFileMove = (args) => {
  return new Promise((resolve, reject) => {
    import_system10.default.move(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncFileCopy = (args) => {
  return new Promise((resolve, reject) => {
    import_system10.default.copy(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncFileList = (args) => {
  return new Promise((resolve, reject) => {
    import_system10.default.list(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncFileGet = (args) => {
  return new Promise((resolve, reject) => {
    import_system10.default.get(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncFileDelete = (args) => {
  return new Promise((resolve, reject) => {
    import_system10.default.delete(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncFileWriteText = (args) => {
  return new Promise((resolve, reject) => {
    import_system10.default.writeText(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncFileWriteArrayBuffer = (args) => {
  return new Promise((resolve, reject) => {
    import_system10.default.writeArrayBuffer(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncFileReadText = (args) => {
  return new Promise((resolve, reject) => {
    import_system10.default.readText(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncFileReadArrayBuffer = (args) => {
  return new Promise((resolve, reject) => {
    import_system10.default.readArrayBuffer(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncFileAccess = (args) => {
  return new Promise((resolve, reject) => {
    import_system10.default.access(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncFileMkdir = (args) => {
  return new Promise((resolve, reject) => {
    import_system10.default.mkdir(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncFileRmdir = (args) => {
  return new Promise((resolve, reject) => {
    import_system10.default.rmdir(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};

// src/geolocation.ts
var import_system11 = __toESM(require("@system.geolocation"));
var asyncGeolocationGetLocation = (args) => {
  return new Promise((resolve, reject) => {
    import_system11.default.getLocation(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncGeolocationOpenLocation = (args) => {
  return new Promise((resolve, reject) => {
    import_system11.default.openLocation(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncGeolocationChooseLocation = (args) => {
  return new Promise((resolve, reject) => {
    import_system11.default.chooseLocation(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncGeolocationGetLocationType = () => {
  return new Promise((resolve, reject) => {
    import_system11.default.getLocationType({
      success: resolve,
      fail: reject
    });
  });
};
var asyncGeolocationGeocodeQuery = (args) => {
  return new Promise((resolve, reject) => {
    import_system11.default.geocodeQuery(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncGeolocationReverseGeocodeQuery = (args) => {
  return new Promise((resolve, reject) => {
    import_system11.default.reverseGeocodeQuery(__spreadProps(__spreadValues({}, args), {
      // 类型有误，按照文档 poiInfoList 是数组
      // @ts-ignore
      success: resolve,
      fail: reject
    }));
  });
};

// src/keyguard.ts
var import_system12 = __toESM(require("@system.keyguard"));
var asyncKeyguardGetKeyguardLockedStatus = () => {
  return new Promise((resolve, reject) => {
    import_system12.default.getKeyguardLockedStatus({
      success: resolve,
      fail: reject
    });
  });
};

// src/network.ts
var import_system13 = __toESM(require("@system.network"));
var asyncNetworkGetType = () => {
  return new Promise((resolve, reject) => {
    import_system13.default.getType({
      success: resolve,
      fail: reject
    });
  });
};
var asyncNetworkGetSimOperators = () => {
  return new Promise((resolve, reject) => {
    import_system13.default.getSimOperators({
      success: resolve,
      fail: reject
    });
  });
};

// src/package.ts
var import_system14 = __toESM(require("@system.package"));
var asyncPkgHasInstalled = (args) => {
  return new Promise((resolve, reject) => {
    import_system14.default.hasInstalled(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncPkgInstall = (args) => {
  return new Promise((resolve, reject) => {
    import_system14.default.install(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncPkgGetInfo = (args) => {
  return new Promise((resolve, reject) => {
    import_system14.default.getInfo(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncPkgGetSignatureDigests = (args) => {
  return new Promise((resolve, reject) => {
    import_system14.default.getSignatureDigests(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};

// src/prompt.ts
var import_system15 = __toESM(require("@system.prompt"));
var asyncPromptShowDialog = (args) => {
  return new Promise((resolve, reject) => {
    import_system15.default.showDialog(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      cancel: reject
    }));
  });
};
var asyncPromptShowContextMenu = (args) => {
  return new Promise((resolve, reject) => {
    import_system15.default.showContextMenu(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      cancel: reject
    }));
  });
};

// src/record.ts
var import_system16 = __toESM(require("@system.record"));
var asyncRecordStart = (args = {}) => {
  return new Promise((resolve, reject) => {
    import_system16.default.start(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};

// src/request.ts
var import_system17 = __toESM(require("@system.request"));
var asyncRequestUpload = (args) => {
  return new Promise((resolve, reject) => {
    import_system17.default.upload(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncRequestDownload = (args) => {
  return new Promise((resolve, reject) => {
    import_system17.default.download(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncRequestOnDownloadComplete = (args) => {
  return new Promise((resolve, reject) => {
    import_system17.default.onDownloadComplete(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};

// src/share.ts
var import_system18 = __toESM(require("@system.share"));
var asyncShareShare = (args) => {
  return new Promise((resolve, reject) => {
    import_system18.default.share(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject,
      cancel: reject
    }));
  });
};

// src/shortcut.ts
var import_system19 = __toESM(require("@system.shortcut"));
var asyncShortcutHasInstalled = () => {
  return new Promise((resolve, reject) => {
    import_system19.default.hasInstalled({
      success: resolve,
      fail: reject
    });
  });
};
var asyncShortcuInstall = ({ message }) => {
  return new Promise((resolve, reject) => {
    import_system19.default.install({
      message,
      success: resolve,
      fail: reject
    });
  });
};

// src/sms.ts
var import_system20 = __toESM(require("@system.sms"));
var asyncSmsSend = (args) => {
  return new Promise((resolve, reject) => {
    import_system20.default.send(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncSmsReadSafely = (args) => {
  return new Promise((resolve, reject) => {
    import_system20.default.readSafely(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};

// src/storage.ts
var import_system21 = __toESM(require("@system.storage"));
var asyncStorageGet = (args) => {
  return new Promise((resolve, reject) => {
    import_system21.default.get(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncStorageSet = (args) => {
  return new Promise((resolve, reject) => {
    import_system21.default.set(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncStorageClear = () => {
  return new Promise((resolve, reject) => {
    import_system21.default.clear({
      success: resolve,
      fail: reject
    });
  });
};
var asyncStorageDelete = (args) => {
  return new Promise((resolve, reject) => {
    import_system21.default.delete(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncStorageKey = (args) => {
  return new Promise((resolve, reject) => {
    import_system21.default.key(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};

// src/telecom.ts
var import_system22 = __toESM(require("@system.telecom"));
var asyncTelecomGetTelecomInfo = () => {
  return new Promise((resolve, reject) => {
    import_system22.default.getTelecomInfo({
      success: resolve,
      fail: reject
    });
  });
};

// src/volume.ts
var import_system23 = __toESM(require("@system.volume"));
var asyncVolumeGetMediaValue = () => {
  return new Promise((resolve, reject) => {
    import_system23.default.getMediaValue({
      success: resolve,
      fail: reject
    });
  });
};
var asyncVolumeSetMediaValue = (args) => {
  return new Promise((resolve, reject) => {
    import_system23.default.setMediaValue(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};

// src/webview.ts
var import_system24 = __toESM(require("@system.webview"));
var asyncWebviewSetCookie = (args) => {
  return new Promise((resolve, reject) => {
    import_system24.default.setCookie(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};

// src/wifi.ts
var import_system25 = __toESM(require("@system.wifi"));
var asyncWifiConnect = (args) => {
  return new Promise((resolve, reject) => {
    import_system25.default.connect(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncWifiScan = () => {
  return new Promise((resolve, reject) => {
    import_system25.default.scan({
      success: resolve,
      fail: reject
    });
  });
};
var asyncWifiGetConnectedWifi = () => {
  return new Promise((resolve, reject) => {
    import_system25.default.getConnectedWifi({
      success: resolve,
      fail: reject
    });
  });
};

// src/zip.ts
var import_system26 = __toESM(require("@system.zip"));
var asyncZipDecompress = (args) => {
  return new Promise((resolve, reject) => {
    import_system26.default.decompress(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  asyncAlarmIsAvailable,
  asyncAlarmSetAlarm,
  asyncBarcodeScan,
  asyncBatteryGetStatus,
  asyncBluetootNotifyBLECharacteristicValueChange,
  asyncBluetoothCloseAdapter,
  asyncBluetoothCloseBLEConnection,
  asyncBluetoothCreateBLEConnection,
  asyncBluetoothGetAdapterState,
  asyncBluetoothGetBLEDeviceCharacteristics,
  asyncBluetoothGetBLEDeviceServices,
  asyncBluetoothGetConnectedDevices,
  asyncBluetoothGetDevices,
  asyncBluetoothOpenAdapter,
  asyncBluetoothReadBLECharacteristicValue,
  asyncBluetoothStartDevicesDiscovery,
  asyncBluetoothStopDevicesDiscovery,
  asyncBluetoothWriteBLECharacteristicValue,
  asyncBrightnessGetMode,
  asyncBrightnessGetValue,
  asyncBrightnessSetKeepScreenOn,
  asyncBrightnessSetMode,
  asyncBrightnessSetValue,
  asyncCalendarInsert,
  asyncClipboardGet,
  asyncClipboardSet,
  asyncContactList,
  asyncContactPick,
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
  asyncExchangeClear,
  asyncExchangeGet,
  asyncExchangeGrantPermission,
  asyncExchangeRemove,
  asyncExchangeRevokePermission,
  asyncExchangeSet,
  asyncFileAccess,
  asyncFileCopy,
  asyncFileDelete,
  asyncFileGet,
  asyncFileList,
  asyncFileMkdir,
  asyncFileMove,
  asyncFileReadArrayBuffer,
  asyncFileReadText,
  asyncFileRmdir,
  asyncFileWriteArrayBuffer,
  asyncFileWriteText,
  asyncGeolocationChooseLocation,
  asyncGeolocationGeocodeQuery,
  asyncGeolocationGetLocation,
  asyncGeolocationGetLocationType,
  asyncGeolocationOpenLocation,
  asyncGeolocationReverseGeocodeQuery,
  asyncKeyguardGetKeyguardLockedStatus,
  asyncNetworkGetSimOperators,
  asyncNetworkGetType,
  asyncPkgGetInfo,
  asyncPkgGetSignatureDigests,
  asyncPkgHasInstalled,
  asyncPkgInstall,
  asyncPromptShowContextMenu,
  asyncPromptShowDialog,
  asyncRecordStart,
  asyncRequestDownload,
  asyncRequestOnDownloadComplete,
  asyncRequestUpload,
  asyncShareShare,
  asyncShortcuInstall,
  asyncShortcutHasInstalled,
  asyncSmsReadSafely,
  asyncSmsSend,
  asyncStorageClear,
  asyncStorageDelete,
  asyncStorageGet,
  asyncStorageKey,
  asyncStorageSet,
  asyncTelecomGetTelecomInfo,
  asyncVolumeGetMediaValue,
  asyncVolumeSetMediaValue,
  asyncWebviewSetCookie,
  asyncWifiConnect,
  asyncWifiGetConnectedWifi,
  asyncWifiScan,
  asyncZipDecompress
});
