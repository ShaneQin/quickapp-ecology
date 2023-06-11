import { asyncStorageGet } from 'quickapp-async';

export default class QuickAppPlugins {
  promiseFinally() {
    Promise.prototype.finally = function (callback: any) {
      const P = this.constructor as PromiseConstructor;
      return this.then(
        (value) => P.resolve(callback()).then(() => value),
        (reason) =>
          P.resolve(callback()).then(() => {
            throw reason;
          })
      );
    };
  }
}

export const asyncStorageGetS = async (key: string, dVal: any = '') => {
  const data = await asyncStorageGet({ key });
  if (data) {
    try {
      return JSON.parse(data);
    } catch (err) {
      return data || dVal
    }
  } else {
    return dVal
  }
}
