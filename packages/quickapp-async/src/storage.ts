import storage from '@system.storage';
import {
  AsyncStorageGet,
  AsyncStorageSet,
  AsyncStorageClear,
  AsyncStorageDelete,
  AsyncStorageKey
} from './types';

export const asyncStorageGet: AsyncStorageGet = (args) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    storage.get({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncStorageSet: AsyncStorageSet = (args) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    storage.set({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncStorageClear: AsyncStorageClear = () => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    storage.clear({
      success: resolve,
      fail: reject
    });
  });
};

export const asyncStorageDelete: AsyncStorageDelete = (args) => {
  return new Promise((resolve, reject) => {
    storage.delete({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncStorageKey: AsyncStorageKey = (args) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    storage.key({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};
