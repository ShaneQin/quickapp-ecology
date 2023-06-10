import exchange from '@service.exchange';
import { AsyncExchangeGet, AsyncExchangeSet, AsyncExchangeRemove, AsyncExchangeClear, AsyncExchangeGrantPermission, AsyncExchangeRevokePermission } from './types';

export const asyncExchangeGet: AsyncExchangeGet = (args) => {
  return new Promise((resolve, reject) => {
    exchange.get({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncExchangeSet: AsyncExchangeSet = (args) => {
  return new Promise((resolve, reject) => {
    exchange.set({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncExchangeRemove: AsyncExchangeRemove = (args) => {
  return new Promise((resolve, reject) => {
    exchange.remove({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncExchangeClear: AsyncExchangeClear = () => {
  return new Promise((resolve, reject) => {
    exchange.clear({
      success: resolve,
      fail: reject
    });
  });
};

export const asyncExchangeGrantPermission: AsyncExchangeGrantPermission = (args) => {
  return new Promise((resolve, reject) => {
    exchange.grantPermission({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncExchangeRevokePermission: AsyncExchangeRevokePermission = (args) => {
  return new Promise((resolve, reject) => {
    exchange.revokePermission({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};
