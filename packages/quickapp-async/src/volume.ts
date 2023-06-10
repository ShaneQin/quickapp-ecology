import volume from '@system.volume'
import { AsyncVolumeGetMediaValue, AsyncVolumeSetMediaValue } from './types';

export const asyncVolumeGetMediaValue: AsyncVolumeGetMediaValue = () => {
  return new Promise((resolve, reject) => {
    volume.getMediaValue({
      success: resolve,
      fail: reject
    });
  });
};

export const asyncVolumeSetMediaValue: AsyncVolumeSetMediaValue = (args) => {
  return new Promise((resolve, reject) => {
    volume.setMediaValue({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};