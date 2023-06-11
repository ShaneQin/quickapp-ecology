declare class QuickAppPlugins {
    promiseFinally(): void;
}
declare const asyncStorageGetS: (key: string, dVal?: string) => Promise<any>;

export { asyncStorageGetS, QuickAppPlugins as default };
