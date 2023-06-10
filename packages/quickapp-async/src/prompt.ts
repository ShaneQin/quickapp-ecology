import prompt from '@system.prompt';
import { AsyncPromptShowDialog, AsyncPromptShowContextMenu } from './types';

export const asyncPromptShowDialog: AsyncPromptShowDialog = (args) => {
  return new Promise((resolve, reject) => {
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
