import record from '@system.record';
import { AsyncRecordStart } from './types';

export const asyncRecordStart: AsyncRecordStart = (args = {}) => {
  return new Promise((resolve, reject) => {
    record.start({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};
