import storage from '@system.storage';
import {
  AsyncStorageGet,
  AsyncStorageSet,
  AsyncStorageClear,
  AsyncStorageDelete,
  AsyncStorageKey
} from './types';

export const asyncStorageGet: AsyncStorageGet = ({ key }) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    storage.get({
      key,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncStorageSet: AsyncStorageSet = ({ key, value }) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    storage.set({
      key,
      value,
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

export const asyncStorageDelete: AsyncStorageDelete = ({ key }) => {
  return new Promise((resolve, reject) => {
    storage.delete({
      key,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncStorageKey: AsyncStorageKey = ({ index }) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    storage.key({
      index,
      success: resolve,
      fail: reject
    });
  });
};
