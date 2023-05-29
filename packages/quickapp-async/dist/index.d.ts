interface AsyncShareArgs {
    type: string;
    data: string;
}
type AsyncShare = (args: AsyncShareArgs) => Promise<{} | undefined>;
type AsyncshowDialog = (args: AsyncshowDialogArgs) => Promise<{
    index: number;
} | undefined>;
interface AsyncshowDialogArgs {
    title?: string;
    message?: string;
    buttons?: [
        {
            text: string;
            color?: string;
        }
    ];
    autocancel?: boolean;
}
interface AsyncshowDialogArgs {
    itemList: string[];
    itemColor?: string;
}
type AsyncShowContextMenu = (args: AsyncshowDialogArgs) => Promise<{
    index: number;
} | undefined>;
interface AsyncWebviewSetCookieArgs {
    domain: string;
    name: string;
    value?: string;
    path?: string;
    expires?: string;
    maxAge?: string;
    extra?: string;
}
type AsyncWebviewSetCookie = (args: AsyncWebviewSetCookieArgs) => Promise<void>;
interface AsyncRequestUploadArgs {
    url: string;
    header?: object;
    method?: string;
    files: [
        {
            filename?: string;
            name?: string;
            uri: string;
            type?: string;
        }
    ];
    data?: [
        {
            name: string;
            value: string;
        }
    ];
}
interface AsyncRequestUploadRes {
    code: number;
    data: string;
    headers: object;
}
type AsyncRequestUpload = (args: AsyncRequestUploadArgs) => Promise<AsyncRequestUploadRes>;
interface AsyncRequestDownloadArgs {
    url: string;
    header?: string;
    description?: string;
    filename?: string;
}
type AsyncRequestDownload = (args: AsyncRequestDownloadArgs) => Promise<{
    token: string;
}>;
type AsyncRequestOnDownloadComplete = (args: {
    token: string;
}) => Promise<{
    uri: string;
}>;
interface AsyncStorageGetArgs {
    key: string;
    default?: string;
}
type AsyncStorageGet = (args: AsyncStorageGetArgs) => Promise<any>;
interface AsyncStorageSetArgs {
    key: string;
    value?: string;
}
type AsyncStorageSet = (args: AsyncStorageSetArgs) => Promise<void>;
type AsyncStorageClear = () => Promise<void>;
type AsyncStorageDelete = (args: {
    key: string;
}) => Promise<any>;
type AsyncStorageKey = (args: {
    index: number;
}) => Promise<string>;
type AsyncShortcutHasInstalled = () => Promise<boolean>;
type AsyncShortcuInstall = (args: {
    message?: string;
}) => Promise<void>;
interface AsyncNetworkGetTypeRes {
    metered: boolean;
    type: string;
}
type AsyncNetworkGetType = () => Promise<AsyncNetworkGetTypeRes>;
interface SimOperators {
    operator: string;
    slotIndex: number;
    isDefaultDataOperator: boolean;
}
interface AsyncNetworkGetSimOperatorsRes {
    operators: SimOperators[];
    size: string;
}
type AsyncNetworkGetSimOperators = () => Promise<AsyncNetworkGetSimOperatorsRes>;
interface AsyncDeviceGetInfoRes {
    brand: string;
    manufacturer: string;
    model: string;
    product: string;
    osType: string;
    osVersionName: string;
    osVersionCode: number;
    platformVersionName: string;
    platformVersionCode: number;
    language: string;
    region: string;
    screenWidth: number;
    screenHeight: number;
    windowWidth: number;
    windowHeight: number;
    statusBarHeight: number;
    screenDensity: number;
    vendorOsName: string;
    vendorOsVersion: string;
    cutout: any[];
    deviceType: string;
    screenRefreshRate: number;
}
type AsyncDeviceGetInfo = () => Promise<AsyncDeviceGetInfoRes>;
type GetIdType = 'device' | 'mac' | 'user' | 'advertising';
interface AsyncDeviceGetIdRes {
    device?: string;
    mac?: string;
    user?: string;
    advertising?: string;
}
type AsyncDeviceGetId = (args: {
    type: GetIdType[];
}) => Promise<AsyncDeviceGetIdRes>;
type AsyncDeviceGetDeviceId = () => Promise<{
    deviceId: string;
}>;
type AsyncDeviceGetUserId = () => Promise<{
    userId: string;
}>;
type AsyncDeviceGetAdvertisingId = () => Promise<{
    advertisingId: string;
}>;
type AsyncDeviceGetSerial = () => Promise<{
    serial: string;
}>;
type AsyncDeviceGetTotalStorage = () => Promise<{
    totalStorage: number;
}>;
type AsyncDeviceGetAvailableStorage = () => Promise<{
    availableStorage: number;
}>;
type AsyncDeviceGetCpuInfo = () => Promise<{
    cpuInfo: string;
}>;
type AsyncDeviceGetOAID = () => Promise<{
    oaid: string | undefined;
}>;
interface AsyncFetchFetchArgs {
    url: string;
    data?: string | object | ArrayBuffer;
    header?: object;
    method?: string;
    responseType?: string;
}
interface AsyncFetchFetchRes {
    data: {
        code: number;
        data: string | object | ArrayBuffer;
        headers: object;
    };
}

declare const asyncDeviceGetInfo: AsyncDeviceGetInfo;
declare const asyncDeviceGetId: AsyncDeviceGetId;
declare const asyncDeviceGetDeviceId: AsyncDeviceGetDeviceId;
declare const asyncDeviceGetUserId: AsyncDeviceGetUserId;
declare const asyncDeviceGetAdvertisingId: AsyncDeviceGetAdvertisingId;
declare const asyncDeviceGetSerial: AsyncDeviceGetSerial;
declare const asyncDeviceGetTotalStorage: AsyncDeviceGetTotalStorage;
declare const asyncDeviceGetAvailableStorage: AsyncDeviceGetAvailableStorage;
declare const asyncDeviceGetCpuInfo: AsyncDeviceGetCpuInfo;
declare const asyncDeviceGetOAID: AsyncDeviceGetOAID;

declare const asyncNetworkGetType: AsyncNetworkGetType;
declare const asyncNetworkGetSimOperators: AsyncNetworkGetSimOperators;

declare const asyncshowDialog: AsyncshowDialog;
declare const asyncShowContextMenu: AsyncShowContextMenu;

declare const asyncRequestUpload: AsyncRequestUpload;
declare const asyncRequestDownload: AsyncRequestDownload;
declare const asyncRequestOnDownloadComplete: AsyncRequestOnDownloadComplete;

declare const asyncShare: AsyncShare;

declare const asyncShortcutHasInstalled: AsyncShortcutHasInstalled;
declare const asyncShortcuInstall: AsyncShortcuInstall;

declare const asyncStorageGet: AsyncStorageGet;
declare const asyncStorageSet: AsyncStorageSet;
declare const asyncStorageClear: AsyncStorageClear;
declare const asyncStorageDelete: AsyncStorageDelete;
declare const asyncStorageKey: AsyncStorageKey;

declare const asyncWebviewSetCookie: AsyncWebviewSetCookie;

export { AsyncDeviceGetAdvertisingId, AsyncDeviceGetAvailableStorage, AsyncDeviceGetCpuInfo, AsyncDeviceGetDeviceId, AsyncDeviceGetId, AsyncDeviceGetInfo, AsyncDeviceGetInfoRes, AsyncDeviceGetOAID, AsyncDeviceGetSerial, AsyncDeviceGetTotalStorage, AsyncDeviceGetUserId, AsyncFetchFetchArgs, AsyncFetchFetchRes, AsyncNetworkGetSimOperators, AsyncNetworkGetType, AsyncNetworkGetTypeRes, AsyncRequestDownload, AsyncRequestOnDownloadComplete, AsyncRequestUpload, AsyncShare, AsyncShortcuInstall, AsyncShortcutHasInstalled, AsyncShowContextMenu, AsyncStorageClear, AsyncStorageDelete, AsyncStorageGet, AsyncStorageKey, AsyncStorageSet, AsyncWebviewSetCookie, AsyncshowDialog, asyncDeviceGetAdvertisingId, asyncDeviceGetAvailableStorage, asyncDeviceGetCpuInfo, asyncDeviceGetDeviceId, asyncDeviceGetId, asyncDeviceGetInfo, asyncDeviceGetOAID, asyncDeviceGetSerial, asyncDeviceGetTotalStorage, asyncDeviceGetUserId, asyncNetworkGetSimOperators, asyncNetworkGetType, asyncRequestDownload, asyncRequestOnDownloadComplete, asyncRequestUpload, asyncShare, asyncShortcuInstall, asyncShortcutHasInstalled, asyncShowContextMenu, asyncStorageClear, asyncStorageDelete, asyncStorageGet, asyncStorageKey, asyncStorageSet, asyncWebviewSetCookie, asyncshowDialog };
