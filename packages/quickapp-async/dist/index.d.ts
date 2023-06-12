interface IAppGetInfoRes {
    packageName: string;
    icon: string;
    name: string;
    versionName: string;
    versionCode: number;
    logLevel: string;
    source: {
        packageName: string;
        type: string;
        extra: object;
    };
}
interface IShareShareArgs {
    type: string;
    data: string;
}
type AsyncShareShare = (args: IShareShareArgs) => Promise<{} | undefined>;
interface IPromptShowDialogButton {
    text: string;
    color?: string;
}
interface IPromptShowDialogArgs {
    title?: string;
    message?: string;
    buttons?: IPromptShowDialogButton[];
    autocancel?: boolean;
}
type AsyncPromptShowDialog = (args: IPromptShowDialogArgs) => Promise<{
    index: number;
} | undefined>;
interface IPromptShowContextMenuArgs {
    itemList: string[];
    itemColor?: string;
}
type AsyncPromptShowContextMenu = (args: IPromptShowContextMenuArgs) => Promise<{
    index: number;
} | undefined>;
interface IWebviewSetCookieArgs {
    domain: string;
    name: string;
    value?: string;
    path?: string;
    expires?: string;
    maxAge?: string;
    extra?: string;
}
type AsyncWebviewSetCookie = (args: IWebviewSetCookieArgs) => Promise<void>;
interface IRequestUploadFile {
    filename?: string;
    name?: string;
    uri: string;
    type?: string;
}
interface IRequestUploadData {
    name: string;
    value: string;
}
interface IRequestUploadArgs {
    url: string;
    header?: object;
    method?: string;
    files: [IRequestUploadFile];
    data?: [IRequestUploadData];
}
interface IRequestUploadRes {
    code: number;
    data: string;
    headers: object;
}
type AsyncRequestUpload = (args: IRequestUploadArgs) => Promise<IRequestUploadRes>;
interface IRequestDownloadArgs {
    url: string;
    header?: string;
    description?: string;
    filename?: string;
}
type AsyncRequestDownload = (args: IRequestDownloadArgs) => Promise<{
    token: string;
}>;
type AsyncRequestOnDownloadComplete = (args: {
    token: string;
}) => Promise<{
    uri: string;
}>;
interface IFetchFetchArgs {
    url: string;
    data?: string | object | ArrayBuffer;
    header?: object;
    method?: string;
    responseType?: string;
}
interface IFetchFetchRes {
    data: {
        code: number;
        data: string | object | ArrayBuffer;
        headers: object;
    };
}
interface IStorageGetArgs {
    key: string;
    default?: string;
}
type AsyncStorageGet = (args: IStorageGetArgs) => Promise<any>;
interface IStorageSetArgs {
    key: string;
    value?: string;
}
type AsyncStorageSet = (args: IStorageSetArgs) => Promise<void>;
type AsyncStorageClear = () => Promise<void>;
type AsyncStorageDelete = (args: {
    key: string;
}) => Promise<any>;
type AsyncStorageKey = (args: {
    index: number;
}) => Promise<string>;
type AsyncFileMove = (args: {
    srcUri: string;
    dstUri: string;
}) => Promise<string>;
type AsyncFileCopy = (args: {
    srcUri: string;
    dstUri: string;
}) => Promise<string>;
interface IFileListItem {
    uri: string;
    length: number;
    lastModifiedTime: number;
}
type AsyncFileList = (args: {
    uri: string;
}) => Promise<{
    fileList: IFileListItem[];
}>;
interface IFileGetRes {
    uri: string;
    length: number;
    lastModifiedTime: number;
    type: string;
    subFiles: string[];
}
type AsyncFileGet = (args: {
    uri: string;
    recursive?: boolean;
}) => Promise<IFileGetRes>;
type AsyncFileDelete = (args: {
    uri: string;
}) => Promise<void>;
interface AsyncFileWriteTextArgs {
    uri: string;
    text: string;
    encoding?: string;
    append?: boolean;
}
type AsyncFileWriteText = (args: AsyncFileWriteTextArgs) => Promise<void>;
interface AsyncFileWriteArrayBufferArgs {
    uri: string;
    buffer: Uint8Array[];
    position?: number;
    append?: boolean;
}
type AsyncFileWriteArrayBuffer = (args: AsyncFileWriteArrayBufferArgs) => Promise<void>;
type AsyncFileReadText = (args: {
    uri: string;
    encoding?: string;
}) => Promise<{
    text: string;
}>;
interface AsyncFileReadArrayBufferArgs {
    uri: string;
    position?: number;
    length?: number;
}
type AsyncFileReadArrayBuffer = (args: AsyncFileReadArrayBufferArgs) => Promise<{
    buffer: Uint8Array;
}>;
type AsyncFileAccess = (args: {
    uri: string;
}) => Promise<void>;
type AsyncFileMkdir = (args: {
    uri: string;
    recursive?: boolean;
}) => Promise<void>;
type AsyncFileRmdir = (args: {
    uri: string;
    recursive?: boolean;
}) => Promise<void>;
interface AsyncExchangeGetArgs {
    key: string;
    package?: string;
    sign?: string;
    scope?: string;
}
type AsyncExchangeGet = (args: AsyncExchangeGetArgs) => Promise<{
    value: string;
}>;
interface AsyncExchangeSetArgs {
    key: string;
    value: string;
    scope?: string;
    package?: string;
    sign?: string;
}
type AsyncExchangeSet = (args: AsyncExchangeSetArgs) => Promise<void>;
interface AsyncExchangeRemoveArgs {
    key: string;
    package: string;
    sign: string;
}
type AsyncExchangeRemove = (args: AsyncExchangeRemoveArgs) => Promise<void>;
type AsyncExchangeClear = () => Promise<void>;
interface AsyncExchangeGrantPermissionArgs {
    package: string;
    sign: string;
    key?: string;
    writable?: boolean;
}
type AsyncExchangeGrantPermission = (args: AsyncExchangeGrantPermissionArgs) => Promise<void>;
type AsyncExchangeRevokePermission = (args: {
    package: string;
    key?: string;
}) => Promise<void>;
type AsyncBarcodeScan = () => Promise<{
    result: string;
}>;
type AsyncClipboardSet = (args: {
    text: string;
}) => Promise<void>;
type AsyncClipboardGet = () => Promise<{
    text: string;
}>;
interface AsyncGeolocationGetLocationRes {
    longitude: number;
    latitude: number;
    accuracy: number;
    time: number;
}
type AsyncGeolocationGetLocation = (args: {
    timeout?: number;
    coorType?: string;
}) => Promise<AsyncGeolocationGetLocationRes>;
interface AsyncGeolocationOpenLocationArgs {
    latitude: number;
    longitude: number;
    coordType?: string;
    scale?: number;
    name?: string;
    address?: string;
}
type AsyncGeolocationOpenLocation = (args: AsyncGeolocationOpenLocationArgs) => Promise<void>;
interface AsyncGeolocationChooseLocationArgs {
    latitude?: number;
    longitude?: number;
    coordType?: string;
}
interface AsyncGeolocationChooseLocationRes {
    name: string;
    address: string;
    coordType: string;
    latitude: number;
    longitude: number;
}
type AsyncGeolocationChooseLocation = (args: AsyncGeolocationChooseLocationArgs) => Promise<AsyncGeolocationChooseLocationRes>;
type AsyncGeolocationGetLocationType = () => Promise<{
    types: string[];
}>;
type AsyncGeolocationGeocodeQuery = (args: {
    city: string;
    address: string;
}) => Promise<{
    longitude: number;
    latitude: number;
}>;
interface AsyncGeolocationReverseGeocodeQueryArgs {
    longitude: number;
    latitude: number;
    coordType?: string;
    includePoiInfo?: boolean;
}
interface IGeolocationReverseGeocodeQueryPoiInfo {
    poiName: string;
    longitude: number;
    latitude: number;
    city: string;
    address: string;
    phone: string;
}
interface AsyncGeolocationReverseGeocodeQueryRes {
    countryName: string;
    province: string;
    city: string;
    district: string;
    street: string;
    address: string;
    poiInfoList: IGeolocationReverseGeocodeQueryPoiInfo[];
}
type AsyncGeolocationReverseGeocodeQuery = (args: AsyncGeolocationReverseGeocodeQueryArgs) => Promise<AsyncGeolocationReverseGeocodeQueryRes>;
type AsyncShortcutHasInstalled = () => Promise<boolean>;
type AsyncShortcuInstall = (args: {
    message?: string;
}) => Promise<void>;
interface AsyncCalendarInsertArgs {
    title: string;
    startDate: number;
    endDate: number;
    description?: string;
    timezone?: string;
    allDay?: boolean;
    rrule?: string;
    remindMinutes?: number[];
    organizer?: string;
}
type AsyncCalendarInsert = (args: AsyncCalendarInsertArgs) => Promise<any>;
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
interface IDeviceGetInfoRes {
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
type AsyncDeviceGetInfo = () => Promise<IDeviceGetInfoRes>;
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
type AsyncTelecomGetTelecomInfo = () => Promise<{
    is5GDevice: boolean;
    is5GSwitchOpened: boolean;
}>;
type AsyncBrightnessGetValue = () => Promise<{
    value: number;
}>;
type AsyncBrightnessSetValue = (args: {
    value: number;
}) => Promise<void>;
type AsyncBrightnessGetMode = () => Promise<{
    mode: number;
}>;
type AsyncBrightnessSetMode = (args: {
    mode: number;
}) => Promise<void>;
type AsyncBrightnessSetKeepScreenOn = (args: {
    keepScreenOn: boolean;
}) => Promise<void>;
type AsyncVolumeGetMediaValue = () => Promise<{
    value: number;
}>;
type AsyncVolumeSetMediaValue = (args: {
    value: number;
}) => Promise<void>;
type AsyncBatteryGetStatus = () => Promise<{
    charging: boolean;
    level: number;
}>;
type AsyncPkgHasInstalled = (args: {
    package: string;
}) => Promise<{
    result: boolean;
}>;
type AsyncPkgInstall = (args: {
    package: string;
}) => Promise<{
    result: boolean;
}>;
type AsyncPkgGetInfo = (args: {
    package: string;
}) => Promise<{
    versionCode: number;
    versionName: string;
}>;
type AsyncPkgGetSignatureDigests = (args: {
    package: string;
}) => Promise<{
    signatureDigests: any[];
}>;
interface AsyncRecordStartArgs {
    duration?: number;
    sampleRate?: number;
    numberOfChannels?: number;
    encodeBitRate?: number;
    format?: string;
}
type AsyncRecordStart = (args?: AsyncRecordStartArgs) => Promise<{
    uri: string;
}>;
interface IContactItem {
    displayName: string;
    number: string;
}
type AsyncContactPick = () => Promise<IContactItem>;
type AsyncContactList = () => Promise<{
    contactList: IContactItem[];
}>;
type AsyncSmsSend = (args: {
    address: string;
    content: string;
}) => Promise<void>;
type AsyncSmsReadSafely = (args: {
    timeout?: number;
}) => Promise<{
    message: string;
}>;
interface AsyncWifiConnectArgs {
    SSID: string;
    BSSID: string;
    password?: string;
}
type AsyncWifiConnect = (args: AsyncWifiConnectArgs) => Promise<void>;
type AsyncWifiScan = () => Promise<void>;
interface AsyncWifiGetConnectedWifiRes {
    SSID: string;
    BSSID: string;
    secure: boolean;
    signalStrength: number;
}
type AsyncWifiGetConnectedWifi = () => Promise<AsyncWifiGetConnectedWifiRes>;
type AsyncBluetoothOpenAdapter = (args?: {
    operateAdapter?: boolean;
}) => Promise<void>;
type AsyncBluetoothCloseAdapter = (args?: {
    operateAdapter?: boolean;
}) => Promise<void>;
type AsyncBluetoothGetAdapterState = () => Promise<{
    available: boolean;
    discovering: boolean;
}>;
interface AsyncBluetoothStartDevicesDiscoveryArgs {
    service?: string[];
    allowDuplicatesKey?: boolean;
    interval?: number;
}
type AsyncBluetoothStartDevicesDiscovery = (args?: AsyncBluetoothStartDevicesDiscoveryArgs) => Promise<void>;
type AsyncBluetoothStopDevicesDiscovery = () => Promise<void>;
interface IBluetoothDeviceItem {
    name: string;
    deviceId: string;
}
interface IBluetoothDeviceItemPlus extends IBluetoothDeviceItem {
    RSSI: number;
    advertisData: ArrayBuffer;
    advertisServiceUUIDs: string[];
    localName: string;
    serviceData: object;
}
type AsyncBluetoothGetDevices = () => Promise<{
    devices: IBluetoothDeviceItemPlus[];
}>;
type AsyncBluetoothGetConnectedDevices = (args: {
    services: string[];
}) => Promise<{
    devices: IBluetoothDeviceItem[];
}>;
type AsyncBluetoothCreateBLEConnection = (args: {
    deviceId: string;
    timeout?: number;
}) => Promise<void>;
type AsyncBluetoothCloseBLEConnection = (args: {
    deviceId: string;
}) => Promise<void>;
type AsyncBluetoothGetBLEDeviceServices = (args: {
    deviceId: string;
}) => Promise<{
    services: {
        uuid: string;
        isPrimary: boolean;
    }[];
}>;
interface IBLEDeviceCharacteristicsItem {
    uuid: string;
    properties: {
        read: boolean;
        write: boolean;
        notify: boolean;
        indicate: boolean;
    };
}
interface AsyncBluetoothGetBLEDeviceCharacteristicsArgs {
    deviceId: string;
    serviceId: string;
}
type AsyncBluetoothGetBLEDeviceCharacteristics = (args: AsyncBluetoothGetBLEDeviceCharacteristicsArgs) => Promise<{
    characteristics: IBLEDeviceCharacteristicsItem[];
}>;
interface AsyncBluetoothReadBLECharacteristicValueArgs extends AsyncBluetoothGetBLEDeviceCharacteristicsArgs {
    characteristicId: string;
}
type AsyncBluetoothReadBLECharacteristicValue = (args: AsyncBluetoothReadBLECharacteristicValueArgs) => Promise<void>;
interface AsyncBluetoothWriteBLECharacteristicValueArgs extends AsyncBluetoothReadBLECharacteristicValueArgs {
    value: ArrayBuffer;
}
type AsyncBluetoothWriteBLECharacteristicValue = (args: AsyncBluetoothWriteBLECharacteristicValueArgs) => Promise<void>;
interface AsyncBluetootNotifyBLECharacteristicValueChangeArgs extends AsyncBluetoothReadBLECharacteristicValueArgs {
    state: boolean;
}
type AsyncBluetootNotifyBLECharacteristicValueChange = (args: AsyncBluetootNotifyBLECharacteristicValueChangeArgs) => Promise<void>;
interface AsyncAlarmSetAlarmArgs {
    hour: number;
    minute: number;
    message?: string;
    vibrate?: boolean;
    days?: number[];
    ringtone: string;
}
type AsyncAlarmSetAlarm = (args: AsyncAlarmSetAlarmArgs) => Promise<void>;
type AsyncAlarmIsAvailable = () => Promise<{
    isAvailable: boolean;
}>;
type AsyncZipDecompress = (args: {
    srcUri: string;
    dstUri: string;
}) => Promise<void>;
type AsyncKeyguardGetKeyguardLockedStatus = () => Promise<{
    isKeyguardLocked: boolean;
}>;

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

declare const asyncPromptShowDialog: AsyncPromptShowDialog;
declare const asyncPromptShowContextMenu: AsyncPromptShowContextMenu;

declare const asyncRequestUpload: AsyncRequestUpload;
declare const asyncRequestDownload: AsyncRequestDownload;
declare const asyncRequestOnDownloadComplete: AsyncRequestOnDownloadComplete;

declare const asyncShareShare: AsyncShareShare;

declare const asyncShortcutHasInstalled: AsyncShortcutHasInstalled;
declare const asyncShortcuInstall: AsyncShortcuInstall;

declare const asyncStorageGet: AsyncStorageGet;
declare const asyncStorageSet: AsyncStorageSet;
declare const asyncStorageClear: AsyncStorageClear;
declare const asyncStorageDelete: AsyncStorageDelete;
declare const asyncStorageKey: AsyncStorageKey;

declare const asyncWebviewSetCookie: AsyncWebviewSetCookie;

export { AsyncAlarmIsAvailable, AsyncAlarmSetAlarm, AsyncBarcodeScan, AsyncBatteryGetStatus, AsyncBluetootNotifyBLECharacteristicValueChange, AsyncBluetoothCloseAdapter, AsyncBluetoothCloseBLEConnection, AsyncBluetoothCreateBLEConnection, AsyncBluetoothGetAdapterState, AsyncBluetoothGetBLEDeviceCharacteristics, AsyncBluetoothGetBLEDeviceServices, AsyncBluetoothGetConnectedDevices, AsyncBluetoothGetDevices, AsyncBluetoothOpenAdapter, AsyncBluetoothReadBLECharacteristicValue, AsyncBluetoothStartDevicesDiscovery, AsyncBluetoothStopDevicesDiscovery, AsyncBluetoothWriteBLECharacteristicValue, AsyncBrightnessGetMode, AsyncBrightnessGetValue, AsyncBrightnessSetKeepScreenOn, AsyncBrightnessSetMode, AsyncBrightnessSetValue, AsyncCalendarInsert, AsyncClipboardGet, AsyncClipboardSet, AsyncContactList, AsyncContactPick, AsyncDeviceGetAdvertisingId, AsyncDeviceGetAvailableStorage, AsyncDeviceGetCpuInfo, AsyncDeviceGetDeviceId, AsyncDeviceGetId, AsyncDeviceGetInfo, AsyncDeviceGetOAID, AsyncDeviceGetSerial, AsyncDeviceGetTotalStorage, AsyncDeviceGetUserId, AsyncExchangeClear, AsyncExchangeGet, AsyncExchangeGrantPermission, AsyncExchangeRemove, AsyncExchangeRevokePermission, AsyncExchangeSet, AsyncFileAccess, AsyncFileCopy, AsyncFileDelete, AsyncFileGet, AsyncFileList, AsyncFileMkdir, AsyncFileMove, AsyncFileReadArrayBuffer, AsyncFileReadText, AsyncFileRmdir, AsyncFileWriteArrayBuffer, AsyncFileWriteText, AsyncGeolocationChooseLocation, AsyncGeolocationGeocodeQuery, AsyncGeolocationGetLocation, AsyncGeolocationGetLocationType, AsyncGeolocationOpenLocation, AsyncGeolocationReverseGeocodeQuery, AsyncKeyguardGetKeyguardLockedStatus, AsyncNetworkGetSimOperators, AsyncNetworkGetType, AsyncNetworkGetTypeRes, AsyncPkgGetInfo, AsyncPkgGetSignatureDigests, AsyncPkgHasInstalled, AsyncPkgInstall, AsyncPromptShowContextMenu, AsyncPromptShowDialog, AsyncRecordStart, AsyncRequestDownload, AsyncRequestOnDownloadComplete, AsyncRequestUpload, AsyncShareShare, AsyncShortcuInstall, AsyncShortcutHasInstalled, AsyncSmsReadSafely, AsyncSmsSend, AsyncStorageClear, AsyncStorageDelete, AsyncStorageGet, AsyncStorageKey, AsyncStorageSet, AsyncTelecomGetTelecomInfo, AsyncVolumeGetMediaValue, AsyncVolumeSetMediaValue, AsyncWebviewSetCookie, AsyncWifiConnect, AsyncWifiGetConnectedWifi, AsyncWifiScan, AsyncZipDecompress, IAppGetInfoRes, IDeviceGetInfoRes, IFetchFetchArgs, IFetchFetchRes, asyncDeviceGetAdvertisingId, asyncDeviceGetAvailableStorage, asyncDeviceGetCpuInfo, asyncDeviceGetDeviceId, asyncDeviceGetId, asyncDeviceGetInfo, asyncDeviceGetOAID, asyncDeviceGetSerial, asyncDeviceGetTotalStorage, asyncDeviceGetUserId, asyncNetworkGetSimOperators, asyncNetworkGetType, asyncPromptShowContextMenu, asyncPromptShowDialog, asyncRequestDownload, asyncRequestOnDownloadComplete, asyncRequestUpload, asyncShareShare, asyncShortcuInstall, asyncShortcutHasInstalled, asyncStorageClear, asyncStorageDelete, asyncStorageGet, asyncStorageKey, asyncStorageSet, asyncWebviewSetCookie };
