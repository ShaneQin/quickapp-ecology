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

// src/alarm.ts
import alarm from "@system.alarm";
var asyncAlarmSetAlarm = (args) => {
  return new Promise((resolve, reject) => {
    alarm.setAlarm(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncAlarmIsAvailable = () => {
  return new Promise((resolve, reject) => {
    alarm.isAvailable({
      success: resolve,
      fail: reject
    });
  });
};

// src/barcode.ts
import barcode from "@system.barcode";
var asyncBarcodeScan = () => {
  return new Promise((resolve, reject) => {
    barcode.scan({
      success: resolve,
      fail: reject,
      cancel: reject
    });
  });
};

// src/battery.ts
import battery from "@system.battery";
var asyncBatteryGetStatus = () => {
  return new Promise((resolve, reject) => {
    battery.getStatus({
      success: resolve,
      fail: reject
    });
  });
};

// src/bluetooth.ts
import bluetooth from "@system.bluetooth";
var asyncBluetoothOpenAdapter = (args = {}) => {
  return new Promise((resolve, reject) => {
    bluetooth.openAdapter(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBluetoothCloseAdapter = (args = {}) => {
  return new Promise((resolve, reject) => {
    bluetooth.closeAdapter(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBluetoothGetAdapterState = () => {
  return new Promise((resolve, reject) => {
    bluetooth.getAdapterState({
      success: resolve,
      fail: reject
    });
  });
};
var asyncBluetoothStartDevicesDiscovery = (args = {}) => {
  return new Promise((resolve, reject) => {
    bluetooth.startDevicesDiscovery(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBluetoothStopDevicesDiscovery = () => {
  return new Promise((resolve, reject) => {
    bluetooth.stopDevicesDiscovery({
      success: resolve,
      fail: reject
    });
  });
};
var asyncBluetoothGetDevices = () => {
  return new Promise((resolve, reject) => {
    bluetooth.getDevices({
      success: resolve,
      fail: reject
    });
  });
};
var asyncBluetoothGetConnectedDevices = (args) => {
  return new Promise((resolve, reject) => {
    bluetooth.getConnectedDevices(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBluetoothCreateBLEConnection = (args) => {
  return new Promise((resolve, reject) => {
    bluetooth.createBLEConnection(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBluetoothCloseBLEConnection = (args) => {
  return new Promise((resolve, reject) => {
    bluetooth.closeBLEConnection(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBluetoothGetBLEDeviceServices = (args) => {
  return new Promise((resolve, reject) => {
    bluetooth.getBLEDeviceServices(__spreadProps(__spreadValues({}, args), {
      // 类型定义和文档不符
      // @ts-ignore
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBluetoothGetBLEDeviceCharacteristics = (args) => {
  return new Promise((resolve, reject) => {
    bluetooth.getBLEDeviceCharacteristics(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBluetoothReadBLECharacteristicValue = (args) => {
  return new Promise((resolve, reject) => {
    bluetooth.readBLECharacteristicValue(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBluetoothWriteBLECharacteristicValue = (args) => {
  return new Promise((resolve, reject) => {
    bluetooth.writeBLECharacteristicValue(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBluetootNotifyBLECharacteristicValueChange = (args) => {
  return new Promise((resolve, reject) => {
    bluetooth.notifyBLECharacteristicValueChange(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};

// src/brightness.ts
import brightness from "@system.brightness";
var asyncBrightnessGetValue = () => {
  return new Promise((resolve, reject) => {
    brightness.getValue({
      success: resolve,
      fail: reject
    });
  });
};
var asyncBrightnessSetValue = (args) => {
  return new Promise((resolve, reject) => {
    brightness.setValue(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBrightnessGetMode = () => {
  return new Promise((resolve, reject) => {
    brightness.getMode({
      success: resolve,
      fail: reject
    });
  });
};
var asyncBrightnessSetMode = (args) => {
  return new Promise((resolve, reject) => {
    brightness.setMode(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncBrightnessSetKeepScreenOn = (args) => {
  return new Promise((resolve, reject) => {
    brightness.setKeepScreenOn(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};

// src/calendar.ts
import calendar from "@system.calendar";
var asyncCalendarInsert = (args) => {
  return new Promise((resolve, reject) => {
    calendar.insert(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};

// src/clipboard.ts
import clipboard from "@system.clipboard";
var asyncClipboardSet = (args) => {
  return new Promise((resolve, reject) => {
    clipboard.set(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncClipboardGet = () => {
  return new Promise((resolve, reject) => {
    clipboard.get({
      success: resolve,
      fail: reject
    });
  });
};

// src/contact.ts
import contact from "@system.contact";
var asyncContactPick = () => {
  return new Promise((resolve, reject) => {
    contact.pick({
      success: resolve,
      fail: reject
    });
  });
};
var asyncContactList = () => {
  return new Promise((resolve, reject) => {
    contact.list({
      success: resolve,
      fail: reject
    });
  });
};

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

// src/exchange.ts
import exchange from "@service.exchange";
var asyncExchangeGet = (args) => {
  return new Promise((resolve, reject) => {
    exchange.get(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncExchangeSet = (args) => {
  return new Promise((resolve, reject) => {
    exchange.set(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncExchangeRemove = (args) => {
  return new Promise((resolve, reject) => {
    exchange.remove(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncExchangeClear = () => {
  return new Promise((resolve, reject) => {
    exchange.clear({
      success: resolve,
      fail: reject
    });
  });
};
var asyncExchangeGrantPermission = (args) => {
  return new Promise((resolve, reject) => {
    exchange.grantPermission(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncExchangeRevokePermission = (args) => {
  return new Promise((resolve, reject) => {
    exchange.revokePermission(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};

// src/file.ts
import file from "@system.file";
var asyncFileMove = (args) => {
  return new Promise((resolve, reject) => {
    file.move(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncFileCopy = (args) => {
  return new Promise((resolve, reject) => {
    file.copy(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncFileList = (args) => {
  return new Promise((resolve, reject) => {
    file.list(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncFileGet = (args) => {
  return new Promise((resolve, reject) => {
    file.get(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncFileDelete = (args) => {
  return new Promise((resolve, reject) => {
    file.delete(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncFileWriteText = (args) => {
  return new Promise((resolve, reject) => {
    file.writeText(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncFileWriteArrayBuffer = (args) => {
  return new Promise((resolve, reject) => {
    file.writeArrayBuffer(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncFileReadText = (args) => {
  return new Promise((resolve, reject) => {
    file.readText(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncFileReadArrayBuffer = (args) => {
  return new Promise((resolve, reject) => {
    file.readArrayBuffer(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncFileAccess = (args) => {
  return new Promise((resolve, reject) => {
    file.access(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncFileMkdir = (args) => {
  return new Promise((resolve, reject) => {
    file.mkdir(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncFileRmdir = (args) => {
  return new Promise((resolve, reject) => {
    file.rmdir(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};

// src/geolocation.ts
import geolocation from "@system.geolocation";
var asyncGeolocationGetLocation = (args) => {
  return new Promise((resolve, reject) => {
    geolocation.getLocation(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncGeolocationOpenLocation = (args) => {
  return new Promise((resolve, reject) => {
    geolocation.openLocation(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncGeolocationChooseLocation = (args) => {
  return new Promise((resolve, reject) => {
    geolocation.chooseLocation(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncGeolocationGetLocationType = () => {
  return new Promise((resolve, reject) => {
    geolocation.getLocationType({
      success: resolve,
      fail: reject
    });
  });
};
var asyncGeolocationGeocodeQuery = (args) => {
  return new Promise((resolve, reject) => {
    geolocation.geocodeQuery(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncGeolocationReverseGeocodeQuery = (args) => {
  return new Promise((resolve, reject) => {
    geolocation.reverseGeocodeQuery(__spreadProps(__spreadValues({}, args), {
      // 类型有误，按照文档 poiInfoList 是数组
      // @ts-ignore
      success: resolve,
      fail: reject
    }));
  });
};

// src/keyguard.ts
import keyguard from "@system.keyguard";
var asyncKeyguardGetKeyguardLockedStatus = () => {
  return new Promise((resolve, reject) => {
    keyguard.getKeyguardLockedStatus({
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

// src/package.ts
import pkg from "@system.package";
var asyncPkgHasInstalled = (args) => {
  return new Promise((resolve, reject) => {
    pkg.hasInstalled(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncPkgInstall = (args) => {
  return new Promise((resolve, reject) => {
    pkg.install(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncPkgGetInfo = (args) => {
  return new Promise((resolve, reject) => {
    pkg.getInfo(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncPkgGetSignatureDigests = (args) => {
  return new Promise((resolve, reject) => {
    pkg.getSignatureDigests(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
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

// src/record.ts
import record from "@system.record";
var asyncRecordStart = (args = {}) => {
  return new Promise((resolve, reject) => {
    record.start(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
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

// src/sms.ts
import sms from "@system.sms";
var asyncSmsSend = (args) => {
  return new Promise((resolve, reject) => {
    sms.send(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncSmsReadSafely = (args) => {
  return new Promise((resolve, reject) => {
    sms.readSafely(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
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

// src/telecom.ts
import telecom from "@system.telecom";
var asyncTelecomGetTelecomInfo = () => {
  return new Promise((resolve, reject) => {
    telecom.getTelecomInfo({
      success: resolve,
      fail: reject
    });
  });
};

// src/volume.ts
import volume from "@system.volume";
var asyncVolumeGetMediaValue = () => {
  return new Promise((resolve, reject) => {
    volume.getMediaValue({
      success: resolve,
      fail: reject
    });
  });
};
var asyncVolumeSetMediaValue = (args) => {
  return new Promise((resolve, reject) => {
    volume.setMediaValue(__spreadProps(__spreadValues({}, args), {
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

// src/wifi.ts
import wifi from "@system.wifi";
var asyncWifiConnect = (args) => {
  return new Promise((resolve, reject) => {
    wifi.connect(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
var asyncWifiScan = () => {
  return new Promise((resolve, reject) => {
    wifi.scan({
      success: resolve,
      fail: reject
    });
  });
};
var asyncWifiGetConnectedWifi = () => {
  return new Promise((resolve, reject) => {
    wifi.getConnectedWifi({
      success: resolve,
      fail: reject
    });
  });
};

// src/zip.ts
import zip from "@system.zip";
var asyncZipDecompress = (args) => {
  return new Promise((resolve, reject) => {
    zip.decompress(__spreadProps(__spreadValues({}, args), {
      success: resolve,
      fail: reject
    }));
  });
};
export {
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
};
