import keyguard from '@system.keyguard';
import { AsyncKeyguardGetKeyguardLockedStatus } from './types';

export const asyncKeyguardGetKeyguardLockedStatus: AsyncKeyguardGetKeyguardLockedStatus = () => {
  return new Promise((resolve, reject) => {
    keyguard.getKeyguardLockedStatus({
      success: resolve,
      fail: reject
    });
  });
};
