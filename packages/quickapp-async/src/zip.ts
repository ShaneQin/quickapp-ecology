import zip from '@system.zip';
import { AsyncZipDecompress } from './types';

export const asyncZipDecompress: AsyncZipDecompress = (args) => {
  return new Promise((resolve, reject) => {
    zip.decompress({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};
