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