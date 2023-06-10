import contact from '@system.contact';
import { AsyncContactPick, AsyncContactList } from './types';

export const asyncContactPick: AsyncContactPick = () => {
  return new Promise((resolve, reject) => {
    contact.pick({
      success: resolve,
      fail: reject
    });
  });
};

export const asyncContactList: AsyncContactList = () => {
  return new Promise((resolve, reject) => {
    contact.list({
      success: resolve,
      fail: reject
    });
  });
};
