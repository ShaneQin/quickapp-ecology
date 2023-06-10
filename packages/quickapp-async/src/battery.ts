import battery from '@system.battery';
import { AsyncBatteryGetStatus } from './types';

export const asyncBatteryGetStatus: AsyncBatteryGetStatus = () => {
  return new Promise((resolve, reject) => {
    battery.getStatus({
      success: resolve,
      fail: reject
    });
  });
};
