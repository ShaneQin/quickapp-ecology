import bluetooth from '@system.bluetooth';
import {
  AsyncBluetoothOpenAdapter,
  AsyncBluetoothCloseAdapter,
  AsyncBluetoothGetAdapterState,
  AsyncBluetoothStartDevicesDiscovery,
  AsyncBluetoothStopDevicesDiscovery,
  AsyncBluetoothGetDevices,
  AsyncBluetoothCreateBLEConnection,
  AsyncBluetoothCloseBLEConnection,
  AsyncBluetoothGetBLEDeviceServices,
  AsyncBluetoothGetBLEDeviceCharacteristics,
  AsyncBluetoothReadBLECharacteristicValue,
  AsyncBluetoothWriteBLECharacteristicValue,
  AsyncBluetootNotifyBLECharacteristicValueChange
} from './types';

export const asyncBluetoothOpenAdapter: AsyncBluetoothOpenAdapter = (args = {}) => {
  return new Promise((resolve, reject) => {
    bluetooth.openAdapter({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncBluetoothCloseAdapter: AsyncBluetoothCloseAdapter = (args = {}) => {
  return new Promise((resolve, reject) => {
    bluetooth.closeAdapter({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncBluetoothGetAdapterState: AsyncBluetoothGetAdapterState = () => {
  return new Promise((resolve, reject) => {
    bluetooth.getAdapterState({
      success: resolve,
      fail: reject
    });
  });
};

export const asyncBluetoothStartDevicesDiscovery: AsyncBluetoothStartDevicesDiscovery = (args = {}) => {
  return new Promise((resolve, reject) => {
    // 必填参数与文档不一致
    // @ts-ignore
    bluetooth.startDevicesDiscovery({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncBluetoothStopDevicesDiscovery: AsyncBluetoothStopDevicesDiscovery = () => {
  return new Promise((resolve, reject) => {
    bluetooth.stopDevicesDiscovery({
      success: resolve,
      fail: reject
    });
  });
};

export const asyncBluetoothGetDevices: AsyncBluetoothGetDevices = () => {
  return new Promise((resolve, reject) => {
    bluetooth.getDevices({
      success: resolve,
      fail: reject
    });
  });
};

export const asyncBluetoothCreateBLEConnection: AsyncBluetoothCreateBLEConnection = (args) => {
  return new Promise((resolve, reject) => {
    bluetooth.createBLEConnection({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncBluetoothCloseBLEConnection: AsyncBluetoothCloseBLEConnection = (args) => {
  return new Promise((resolve, reject) => {
    bluetooth.closeBLEConnection({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncBluetoothGetBLEDeviceServices: AsyncBluetoothGetBLEDeviceServices = (args) => {
  return new Promise((resolve, reject) => {
    bluetooth.getBLEDeviceServices({
      ...args,
      // 类型定义和文档不符
      // @ts-ignore
      success: resolve,
      fail: reject
    });
  });
};

export const asyncBluetoothGetBLEDeviceCharacteristics: AsyncBluetoothGetBLEDeviceCharacteristics = (args) => {
  return new Promise((resolve, reject) => {
    bluetooth.getBLEDeviceCharacteristics({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncBluetoothReadBLECharacteristicValue: AsyncBluetoothReadBLECharacteristicValue = (args) => {
  return new Promise((resolve, reject) => {
    bluetooth.readBLECharacteristicValue({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncBluetoothWriteBLECharacteristicValue: AsyncBluetoothWriteBLECharacteristicValue = (args) => {
  return new Promise((resolve, reject) => {
    bluetooth.writeBLECharacteristicValue({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncBluetootNotifyBLECharacteristicValueChange: AsyncBluetootNotifyBLECharacteristicValueChange = (args) => {
  return new Promise((resolve, reject) => {
    bluetooth.notifyBLECharacteristicValueChange({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};
