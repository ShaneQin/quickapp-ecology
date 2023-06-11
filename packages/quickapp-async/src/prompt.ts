import prompt from '@system.prompt';
import { AsyncPromptShowDialog, AsyncPromptShowContextMenu } from './types';

export const asyncPromptShowDialog: AsyncPromptShowDialog = (args) => {
  return new Promise((resolve, reject) => {
    // 文档上写可以支持三个按钮，和 ts 对应不上
    // @ts-ignore
    prompt.showDialog({
      ...args,
      success: resolve,
      cancel: reject
    });
  });
};

export const asyncPromptShowContextMenu: AsyncPromptShowContextMenu = (args) => {
  return new Promise((resolve, reject) => {
    prompt.showContextMenu({
      ...args,
      success: resolve,
      cancel: reject
    });
  });
};
