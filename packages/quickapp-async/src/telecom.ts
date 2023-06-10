import telecom from '@system.telecom';
import { AsyncTelecomGetTelecomInfo } from './types';

export const asyncTelecomGetTelecomInfo: AsyncTelecomGetTelecomInfo = () => {
  return new Promise((resolve, reject) => {
    telecom.getTelecomInfo({
      success: resolve,
      fail: reject
    });
  });
};
