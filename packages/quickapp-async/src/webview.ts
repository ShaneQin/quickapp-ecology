import webview from '@system.webview';
import { AsyncWebviewSetCookie } from './types';

export const asyncWebviewSetCookie: AsyncWebviewSetCookie = (args) => {
  return new Promise((resolve, reject) => {
    webview.setCookie({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};
