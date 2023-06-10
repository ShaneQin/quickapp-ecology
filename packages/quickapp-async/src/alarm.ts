import alarm from '@system.alarm';
import { AsyncAlarmSetAlarm, AsyncAlarmIsAvailable } from './types';

export const asyncAlarmSetAlarm: AsyncAlarmSetAlarm = (args) => {
  return new Promise((resolve, reject) => {
    alarm.setAlarm({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncAlarmIsAvailable: AsyncAlarmIsAvailable = () => {
  return new Promise((resolve, reject) => {
    // 1120 方法，ts 未更新
    // @ts-ignore
    alarm.isAvailable({
      success: resolve,
      fail: reject
    });
  });
};
