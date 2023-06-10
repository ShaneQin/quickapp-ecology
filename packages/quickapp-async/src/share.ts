import share from '@system.share';
import { AsyncShareShare } from './types';

export const asyncShareShare: AsyncShareShare = (args) => {
  return new Promise((resolve, reject) => {
    share.share({
      ...args,
      success: resolve,
      fail: reject,
      cancel: reject
    });
  });
};
