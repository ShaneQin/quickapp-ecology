import pkg from '@system.package';
import { AsyncPkgHasInstalled, AsyncPkgInstall, AsyncPkgGetInfo, AsyncPkgGetSignatureDigests } from './types';

export const asyncPkgHasInstalled: AsyncPkgHasInstalled = (args) => {
  return new Promise((resolve, reject) => {
    pkg.hasInstalled({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncPkgInstall: AsyncPkgInstall = (args) => {
  return new Promise((resolve, reject) => {
    pkg.install({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncPkgGetInfo: AsyncPkgGetInfo = (args) => {
  return new Promise((resolve, reject) => {
    pkg.getInfo({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncPkgGetSignatureDigests: AsyncPkgGetSignatureDigests = (args) => {
  return new Promise((resolve, reject) => {
    pkg.getSignatureDigests({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};
