import request from '@system.request';
import {
  AsyncRequestUpload,
  AsyncRequestDownload,
  AsyncRequestOnDownloadComplete
} from './types';

export const asyncRequestUpload: AsyncRequestUpload = (args) => {
  return new Promise((resolve, reject) => {
    request.upload({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncRequestDownload: AsyncRequestDownload = (args) => {
  return new Promise((resolve, reject) => {
    request.download({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncRequestOnDownloadComplete: AsyncRequestOnDownloadComplete = (args) => {
  return new Promise((resolve, reject) => {
    request.onDownloadComplete({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};
