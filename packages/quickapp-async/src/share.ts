import share from '@system.share';
import { AsyncShare } from './types';

export const asyncShare: AsyncShare = ({ type, data }) => {
  return new Promise((resolve, reject) => {
    share.share({
      type,
      data,
      success: resolve,
      fail: reject,
      cancel: reject
    });
  });
};
