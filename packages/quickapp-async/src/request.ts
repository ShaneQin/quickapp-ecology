import request from '@system.request';
import {
  AsyncRequestUpload,
  AsyncRequestDownload,
  AsyncRequestOnDownloadComplete
} from './types';

export const asyncRequestUpload: AsyncRequestUpload = ({
  url,
  header,
  method,
  files,
  data
}) => {
  return new Promise((resolve, reject) => {
    request.upload({
      url,
      header,
      method,
      files,
      data,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncRequestDownload: AsyncRequestDownload = ({
  url,
  header,
  description,
  filename
}) => {
  return new Promise((resolve, reject) => {
    request.download({
      url,
      header,
      description,
      filename,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncRequestOnDownloadComplete: AsyncRequestOnDownloadComplete = ({
  token
}) => {
  return new Promise((resolve, reject) => {
    request.onDownloadComplete({
      token,
      success: resolve,
      fail: reject
    });
  });
};
