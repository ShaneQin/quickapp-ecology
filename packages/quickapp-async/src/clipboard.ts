import clipboard from '@system.clipboard';
import { AsyncClipboardSet, AsyncClipboardGet } from './types';

export const asyncClipboardSet: AsyncClipboardSet = (args) => {
  return new Promise((resolve, reject) => {
    clipboard.set({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncClipboardGet: AsyncClipboardGet = () => {
  return new Promise((resolve, reject) => {
    clipboard.get({
      success: resolve,
      fail: reject
    });
  });
};
