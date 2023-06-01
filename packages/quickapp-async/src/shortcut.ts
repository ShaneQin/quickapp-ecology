import shortcut from '@system.shortcut';
import { AsyncShortcutHasInstalled, AsyncShortcuInstall } from './types';

export const asyncShortcutHasInstalled: AsyncShortcutHasInstalled = () => {
  return new Promise((resolve, reject) => {
    shortcut.hasInstalled({
      success: resolve,
      fail: reject
    });
  });
};

export const asyncShortcuInstall: AsyncShortcuInstall = ({ message }) => {
  return new Promise((resolve, reject) => {
    shortcut.install({
      message,
      success: resolve,
      fail: reject
    });
  });
};
