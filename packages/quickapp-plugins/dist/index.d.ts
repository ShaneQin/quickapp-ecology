declare class QuickAppPlugins {
    promiseFinally(): void;
}
declare const asyncStorageGetS: (key: string, dVal?: any) => Promise<any>;

export { asyncStorageGetS, QuickAppPlugins as default };
