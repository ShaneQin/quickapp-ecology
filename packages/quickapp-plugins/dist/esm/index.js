var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
import { asyncStorageGet } from "quickapp-async";
var QuickAppPlugins = class {
  promiseFinally() {
    Promise.prototype.finally = function(callback) {
      const P = this.constructor;
      return this.then(
        (value) => P.resolve(callback()).then(() => value),
        (reason) => P.resolve(callback()).then(() => {
          throw reason;
        })
      );
    };
  }
};
var asyncStorageGetS = (key, dVal = "") => __async(void 0, null, function* () {
  const data = yield asyncStorageGet({ key });
  if (data) {
    try {
      return JSON.parse(data);
    } catch (err) {
      return data || dVal;
    }
  } else {
    return dVal;
  }
});
export {
  asyncStorageGetS,
  QuickAppPlugins as default
};
