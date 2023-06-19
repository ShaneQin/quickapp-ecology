import file from '@system.file';
import {
  AsyncFileMove,
  AsyncFileCopy,
  AsyncFileList,
  AsyncFileGet,
  AsyncFileDelete,
  AsyncFileWriteText,
  AsyncFileWriteArrayBuffer,
  AsyncFileReadText,
  AsyncFileReadArrayBuffer,
  AsyncFileAccess,
  AsyncFileMkdir,
  AsyncFileRmdir
} from './types';

export const asyncFileMove: AsyncFileMove = (args) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    file.move({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncFileCopy: AsyncFileCopy = (args) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    file.copy({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncFileList: AsyncFileList = (args) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    file.list({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncFileGet: AsyncFileGet = (args) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    file.get({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncFileDelete: AsyncFileDelete = (args) => {
  return new Promise((resolve, reject) => {
    file.delete({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncFileWriteText: AsyncFileWriteText = (args) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    file.writeText({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncFileWriteArrayBuffer: AsyncFileWriteArrayBuffer = (args) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    file.writeArrayBuffer({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncFileReadText: AsyncFileReadText = (args) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    file.readText({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncFileReadArrayBuffer: AsyncFileReadArrayBuffer = (args) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    file.readArrayBuffer({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncFileAccess: AsyncFileAccess = (args) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    file.access({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncFileMkdir: AsyncFileMkdir = (args) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    file.mkdir({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncFileRmdir: AsyncFileRmdir = (args) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    file.rmdir({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};
