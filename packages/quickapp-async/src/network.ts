import network from '@system.network';
import { AsyncNetworkGetType, AsyncNetworkGetSimOperators } from './types';

export const asyncNetworkGetType: AsyncNetworkGetType = () => {
  return new Promise((resolve, reject) => {
    network.getType({
      success: resolve,
      fail: reject
    });
  });
};

export const asyncNetworkGetSimOperators: AsyncNetworkGetSimOperators = () => {
  return new Promise((resolve, reject) => {
    network.getSimOperators({
      success: resolve,
      fail: reject
    });
  });
};
