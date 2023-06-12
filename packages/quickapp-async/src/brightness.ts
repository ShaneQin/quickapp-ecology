import brightness from '@system.brightness';
import { AsyncBrightnessGetValue, AsyncBrightnessSetValue, AsyncBrightnessGetMode, AsyncBrightnessSetMode, AsyncBrightnessSetKeepScreenOn } from './types';

export const asyncBrightnessGetValue: AsyncBrightnessGetValue = () => {
  return new Promise((resolve, reject) => {
    brightness.getValue({
      success: resolve,
      fail: reject
    });
  });
};

export const asyncBrightnessSetValue: AsyncBrightnessSetValue = (args) => {
  return new Promise((resolve, reject) => {
    brightness.setValue({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncBrightnessGetMode: AsyncBrightnessGetMode = () => {
  return new Promise((resolve, reject) => {
    brightness.getMode({
      success: resolve,
      fail: reject
    });
  });
};

export const asyncBrightnessSetMode: AsyncBrightnessSetMode = (args) => {
  return new Promise((resolve, reject) => {
    brightness.setMode({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncBrightnessSetKeepScreenOn: AsyncBrightnessSetKeepScreenOn = (args) => {
  return new Promise((resolve, reject) => {
    brightness.setKeepScreenOn({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};
