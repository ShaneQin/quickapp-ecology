// src/index.ts
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
export {
  QuickAppPlugins as default
};
