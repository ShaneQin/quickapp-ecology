export interface IAppGetInfoRes {
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
export type AsyncShareShare = (args: IShareShareArgs) => Promise<{} | undefined>;

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

export type AsyncPromptShowDialog = (args: IPromptShowDialogArgs) => Promise<{ index: number } | undefined>;

interface IPromptShowContextMenuArgs {
  itemList: string[];
  itemColor?: string;
}

export type AsyncPromptShowContextMenu = (args: IPromptShowContextMenuArgs) => Promise<{ index: number } | undefined>;

interface IWebviewSetCookieArgs {
  domain: string;
  name: string;
  value?: string;
  path?: string;
  expires?: string;
  maxAge?: string;
  extra?: string;
}

export type AsyncWebviewSetCookie = (args: IWebviewSetCookieArgs) => Promise<void>;

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

export type AsyncRequestUpload = (args: IRequestUploadArgs) => Promise<IRequestUploadRes>;

interface IRequestDownloadArgs {
  url: string;
  header?: string;
  description?: string;
  filename?: string;
}

export type AsyncRequestDownload = (args: IRequestDownloadArgs) => Promise<{ token: string }>;

export type AsyncRequestOnDownloadComplete = (args: { token: string }) => Promise<{ uri: string }>;

export interface IFetchFetchArgs {
  url: string;
  data?: string | object | ArrayBuffer;
  header?: object;
  method?: string;
  responseType?: string;
}

export interface IFetchFetchRes {
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

export type AsyncStorageGet = (args: IStorageGetArgs) => Promise<any>;

interface IStorageSetArgs {
  key: string;
  value?: string;
}

export type AsyncStorageSet = (args: IStorageSetArgs) => Promise<void>;

export type AsyncStorageClear = () => Promise<void>;

export type AsyncStorageDelete = (args: { key: string }) => Promise<any>;

export type AsyncStorageKey = (args: { index: number }) => Promise<string>;

export type AsyncFileMove = (args: { srcUri: string; dstUri: string }) => Promise<string>;

export type AsyncFileCopy = (args: { srcUri: string; dstUri: string }) => Promise<string>;

interface IFileListItem {
  uri: string;
  length: number;
  lastModifiedTime: number;
}

export type AsyncFileList = (args: { uri: string }) => Promise<{ fileList: IFileListItem[] }>;

interface IFileGetRes {
  uri: string;
  length: number;
  lastModifiedTime: number;
  type: string;
  subFiles: string[];
}

export type AsyncFileGet = (args: { uri: string; recursive?: boolean }) => Promise<IFileGetRes>;

export type AsyncFileDelete = (args: { uri: string }) => Promise<void>;

interface AsyncFileWriteTextArgs {
  uri: string;
  text: string;
  encoding?: string;
  append?: boolean;
}

export type AsyncFileWriteText = (args: AsyncFileWriteTextArgs) => Promise<void>;

interface AsyncFileWriteArrayBufferArgs {
  uri: string;
  buffer: Uint8Array[];
  position?: number;
  append?: boolean;
}

export type AsyncFileWriteArrayBuffer = (args: AsyncFileWriteArrayBufferArgs) => Promise<void>;

export type AsyncFileReadText = (args: { uri: string; encoding?: string }) => Promise<{ text: string }>;

interface AsyncFileReadArrayBufferArgs {
  uri: string;
  position?: number;
  length?: number;
}

export type AsyncFileReadArrayBuffer = (args: AsyncFileReadArrayBufferArgs) => Promise<{ buffer: Uint8Array }>;

export type AsyncFileAccess = (args: { uri: string }) => Promise<void>;

export type AsyncFileMkdir = (args: { uri: string; recursive?: boolean }) => Promise<void>;

export type AsyncFileRmdir = (args: { uri: string; recursive?: boolean }) => Promise<void>;

interface AsyncExchangeGetArgs {
  key: string;
  package?: string;
  sign?: string;
  scope?: string;
}

export type AsyncExchangeGet = (args: AsyncExchangeGetArgs) => Promise<{ value: string }>;

interface AsyncExchangeSetArgs {
  key: string;
  value: string;
  scope?: string;
  package?: string;
  sign?: string;
}

export type AsyncExchangeSet = (args: AsyncExchangeSetArgs) => Promise<void>;

interface AsyncExchangeRemoveArgs {
  key: string;
  package: string;
  sign: string;
}

export type AsyncExchangeRemove = (args: AsyncExchangeRemoveArgs) => Promise<void>;

export type AsyncExchangeClear = () => Promise<void>;

interface AsyncExchangeGrantPermissionArgs {
  package: string;
  sign: string;
  key?: string;
  writable?: boolean;
}

export type AsyncExchangeGrantPermission = (args: AsyncExchangeGrantPermissionArgs) => Promise<void>;

export type AsyncExchangeRevokePermission = (args: { package: string; key?: string }) => Promise<void>;

export type AsyncBarcodeScan = () => Promise<{ result: string }>;

export type AsyncClipboardSet = (args: { text: string }) => Promise<void>;

export type AsyncClipboardGet = () => Promise<{ text: string }>;

interface AsyncGeolocationGetLocationRes {
  longitude: number;
  latitude: number;
  accuracy: number;
  time: number;
}

export type AsyncGeolocationGetLocation = (args: { timeout?: number; coorType?: string }) => Promise<AsyncGeolocationGetLocationRes>;

interface AsyncGeolocationOpenLocationArgs {
  latitude: number;
  longitude: number;
  coordType?: string;
  scale?: number;
  name?: string;
  address?: string;
}

export type AsyncGeolocationOpenLocation = (args: AsyncGeolocationOpenLocationArgs) => Promise<void>;

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

export type AsyncGeolocationChooseLocation = (args: AsyncGeolocationChooseLocationArgs) => Promise<AsyncGeolocationChooseLocationRes>;

export type AsyncGeolocationGetLocationType = () => Promise<{
  types: string[];
}>;

export type AsyncGeolocationGeocodeQuery = (args: { city: string; address: string }) => Promise<{ longitude: number; latitude: number }>;

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

export type AsyncGeolocationReverseGeocodeQuery = (args: AsyncGeolocationReverseGeocodeQueryArgs) => Promise<AsyncGeolocationReverseGeocodeQueryRes>;

export type AsyncShortcutHasInstalled = () => Promise<boolean>;

export type AsyncShortcuInstall = (args: { message?: string }) => Promise<void>;

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

export type AsyncCalendarInsert = (args: AsyncCalendarInsertArgs) => Promise<any>;

export interface AsyncNetworkGetTypeRes {
  metered: boolean;
  type: string;
}

export type AsyncNetworkGetType = () => Promise<AsyncNetworkGetTypeRes>;

interface SimOperators {
  operator: string;
  slotIndex: number;
  isDefaultDataOperator: boolean;
}

interface AsyncNetworkGetSimOperatorsRes {
  operators: SimOperators[];
  size: string;
}

export type AsyncNetworkGetSimOperators = () => Promise<AsyncNetworkGetSimOperatorsRes>;

export interface IDeviceGetInfoRes {
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

export type AsyncDeviceGetInfo = () => Promise<IDeviceGetInfoRes>;

type GetIdType = 'device' | 'mac' | 'user' | 'advertising';

interface AsyncDeviceGetIdRes {
  device?: string;
  mac?: string;
  user?: string;
  advertising?: string;
}

export type AsyncDeviceGetId = (args: { type: GetIdType[] }) => Promise<AsyncDeviceGetIdRes>;

export type AsyncDeviceGetDeviceId = () => Promise<{ deviceId: string }>;

export type AsyncDeviceGetUserId = () => Promise<{ userId: string }>;

export type AsyncDeviceGetAdvertisingId = () => Promise<{
  advertisingId: string;
}>;

export type AsyncDeviceGetSerial = () => Promise<{ serial: string }>;

export type AsyncDeviceGetTotalStorage = () => Promise<{
  totalStorage: number;
}>;

export type AsyncDeviceGetAvailableStorage = () => Promise<{
  availableStorage: number;
}>;

export type AsyncDeviceGetCpuInfo = () => Promise<{ cpuInfo: string }>;

export type AsyncDeviceGetOAID = () => Promise<{ oaid: string | undefined }>;

export type AsyncTelecomGetTelecomInfo = () => Promise<{
  is5GDevice: boolean;
  is5GSwitchOpened: boolean;
}>;

export type AsyncBrightnessGetValue = () => Promise<{ value: number }>;

export type AsyncBrightnessSetValue = (args: { value: number }) => Promise<void>;

export type AsyncBrightnessGetMode = () => Promise<{ mode: number }>;

export type AsyncBrightnessSetMode = (args: { mode: number }) => Promise<void>;

export type AsyncBrightnessSetKeepScreenOn = (args: { keepScreenOn: boolean }) => Promise<void>;

export type AsyncVolumeGetMediaValue = () => Promise<{ value: number }>;

export type AsyncVolumeSetMediaValue = (args: { value: number }) => Promise<void>;

export type AsyncBatteryGetStatus = () => Promise<{
  charging: boolean;
  level: number;
}>;

export type AsyncPkgHasInstalled = (args: { package: string }) => Promise<{ result: boolean }>;

export type AsyncPkgInstall = (args: { package: string }) => Promise<{ result: boolean }>;

export type AsyncPkgGetInfo = (args: { package: string }) => Promise<{ versionCode: number; versionName: string }>;

export type AsyncPkgGetSignatureDigests = (args: { package: string }) => Promise<{ signatureDigests: any[] }>;

interface AsyncRecordStartArgs {
  duration?: number;
  sampleRate?: number;
  numberOfChannels?: number;
  encodeBitRate?: number;
  format?: string;
}

export type AsyncRecordStart = (args?: AsyncRecordStartArgs) => Promise<{ uri: string }>;

interface IContactItem {
  displayName: string;
  number: string;
}

export type AsyncContactPick = () => Promise<IContactItem>;

export type AsyncContactList = () => Promise<{ contactList: IContactItem[] }>;

export type AsyncSmsSend = (args: { address: string; content: string }) => Promise<void>;

export type AsyncSmsReadSafely = (args: { timeout?: number }) => Promise<{ message: string }>;

interface AsyncWifiConnectArgs {
  SSID: string;
  BSSID: string;
  password?: string;
}

export type AsyncWifiConnect = (args: AsyncWifiConnectArgs) => Promise<void>;

export type AsyncWifiScan = () => Promise<void>;

interface AsyncWifiGetConnectedWifiRes {
  SSID: string;
  BSSID: string;
  secure: boolean;
  signalStrength: number;
}

export type AsyncWifiGetConnectedWifi = () => Promise<AsyncWifiGetConnectedWifiRes>;

export type AsyncBluetoothOpenAdapter = (args?: { operateAdapter?: boolean }) => Promise<void>;

export type AsyncBluetoothCloseAdapter = (args?: { operateAdapter?: boolean }) => Promise<void>;

export type AsyncBluetoothGetAdapterState = () => Promise<{
  available: boolean;
  discovering: boolean;
}>;

interface AsyncBluetoothStartDevicesDiscoveryArgs {
  service?: string[];
  allowDuplicatesKey?: boolean;
  interval?: number;
}

export type AsyncBluetoothStartDevicesDiscovery = (args?: AsyncBluetoothStartDevicesDiscoveryArgs) => Promise<void>;

export type AsyncBluetoothStopDevicesDiscovery = () => Promise<void>;

interface IBluetoothDeviceItem {
  name: string;
  deviceId: string;
  
}

interface IBluetoothDeviceItemPlus extends IBluetoothDeviceItem{
  RSSI: number;
  advertisData: ArrayBuffer;
  advertisServiceUUIDs: string[];
  localName: string;
  serviceData: object;
}

export type AsyncBluetoothGetDevices = () => Promise<{devices: IBluetoothDeviceItemPlus[]}>;

export type AsyncBluetoothGetConnectedDevices = (args: { services: string[] }) => Promise<{devices: IBluetoothDeviceItem[]}>;

export type AsyncBluetoothCreateBLEConnection = (args: { deviceId: string; timeout?: number }) => Promise<void>;

export type AsyncBluetoothCloseBLEConnection = (args: { deviceId: string }) => Promise<void>;

export type AsyncBluetoothGetBLEDeviceServices = (args: { deviceId: string }) => Promise<{ services: { uuid: string; isPrimary: boolean }[] }>;

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

export type AsyncBluetoothGetBLEDeviceCharacteristics = (args: AsyncBluetoothGetBLEDeviceCharacteristicsArgs) => Promise<{ characteristics: IBLEDeviceCharacteristicsItem[] }>;

interface AsyncBluetoothReadBLECharacteristicValueArgs extends AsyncBluetoothGetBLEDeviceCharacteristicsArgs {
  characteristicId: string;
}

export type AsyncBluetoothReadBLECharacteristicValue = (args: AsyncBluetoothReadBLECharacteristicValueArgs) => Promise<void>;

interface AsyncBluetoothWriteBLECharacteristicValueArgs extends AsyncBluetoothReadBLECharacteristicValueArgs {
  value: ArrayBuffer;
}

export type AsyncBluetoothWriteBLECharacteristicValue = (args: AsyncBluetoothWriteBLECharacteristicValueArgs) => Promise<void>;

interface AsyncBluetootNotifyBLECharacteristicValueChangeArgs extends AsyncBluetoothReadBLECharacteristicValueArgs {
  state: boolean;
}

export type AsyncBluetootNotifyBLECharacteristicValueChange = (args: AsyncBluetootNotifyBLECharacteristicValueChangeArgs) => Promise<void>;

interface AsyncAlarmSetAlarmArgs {
  hour: number;
  minute: number;
  message?: string;
  vibrate?: boolean;
  days?: number[];
  ringtone: string;
}

export type AsyncAlarmSetAlarm = (args: AsyncAlarmSetAlarmArgs) => Promise<void>;

export type AsyncAlarmIsAvailable = () => Promise<{ isAvailable: boolean }>;

export type AsyncZipDecompress = (args: { srcUri: string; dstUri: string }) => Promise<void>;

export type AsyncKeyguardGetKeyguardLockedStatus = () => Promise<{
  isKeyguardLocked: boolean;
}>;
