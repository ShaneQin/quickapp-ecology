import calendar from '@system.calendar'
import { AsyncCalendarInsert } from './types';

export const asyncCalendarInsert: AsyncCalendarInsert = (args) => {
  return new Promise((resolve, reject) => {
    calendar.insert({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};