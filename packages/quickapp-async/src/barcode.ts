import barcode from '@system.barcode';
import { AsyncBarcodeScan } from './types';

export const asyncBarcodeScan: AsyncBarcodeScan = () => {
  return new Promise((resolve, reject) => {
    barcode.scan({
      success: resolve,
      fail: reject,
      cancel: reject
    });
  });
};
