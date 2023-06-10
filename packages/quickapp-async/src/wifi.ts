import wifi from '@system.wifi';
import { AsyncWifiConnect, AsyncWifiScan, AsyncWifiGetConnectedWifi } from './types';

export const asyncWifiConnect: AsyncWifiConnect = (args) => {
  return new Promise((resolve, reject) => {
    wifi.connect({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncWifiScan: AsyncWifiScan = () => {
  return new Promise((resolve, reject) => {
    wifi.scan({
      success: resolve,
      fail: reject
    });
  });
};

export const asyncWifiGetConnectedWifi: AsyncWifiGetConnectedWifi = () => {
  return new Promise((resolve, reject) => {
    wifi.getConnectedWifi({
      success: resolve,
      fail: reject
    });
  });
};