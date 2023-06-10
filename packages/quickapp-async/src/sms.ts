import sms from '@system.sms';
import { AsyncSmsSend, AsyncSmsReadSafely } from './types';

export const asyncSmsSend: AsyncSmsSend = (args) => {
  return new Promise((resolve, reject) => {
    sms.send({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncSmsReadSafely: AsyncSmsReadSafely = (args) => {
  return new Promise((resolve, reject) => {
    sms.readSafely({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};