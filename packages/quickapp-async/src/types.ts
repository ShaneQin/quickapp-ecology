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

interface IFileWriteTextArgs {
  uri: string;
  text: string;
  encoding?: string;
  append?: boolean;
}

export type AsyncFileWriteText = (args: IFileWriteTextArgs) => Promise<void>;

interface IFileWriteArrayBufferArgs {
  uri: string;
  buffer: Uint8Array[];
  position?: number;
  append?: boolean;
}

export type AsyncFileWriteArrayBuffer = (args: IFileWriteArrayBufferArgs) => Promise<void>;

export type AsyncFileReadText = (args: { uri: string; encoding?: string }) => Promise<{ text: string }>;

interface IFileReadArrayBufferArgs {
  uri: string;
  position?: number;
  length?: number;
}

export type AsyncFileReadArrayBuffer = (args: IFileReadArrayBufferArgs) => Promise<{ buffer: Uint8Array }>;

export type AsyncFileAccess = (args: { uri: string }) => Promise<void>;

export type AsyncFileMkdir = (args: { uri: string; recursive?: boolean }) => Promise<void>;

export type AsyncFileRmdir = (args: { uri: string; recursive?: boolean }) => Promise<void>;

interface IExchangeGetArgs {
  key: string;
  package?: string;
  sign?: string;
  scope?: string;
}

export type AsyncExchangeGet = (args: IExchangeGetArgs) => Promise<{ value: string }>;

interface IExchangeSetArgs {
  key: string;
  value: string;
  scope?: string;
  package?: string;
  sign?: string;
}

export type AsyncExchangeSet = (args: IExchangeSetArgs) => Promise<void>;

interface IExchangeRemoveArgs {
  key: string;
  package: string;
  sign: string;
}

export type AsyncExchangeRemove = (args: IExchangeRemoveArgs) => Promise<void>;

export type AsyncExchangeClear = () => Promise<void>;

interface IExchangeGrantPermissionArgs {
  package: string;
  sign: string;
  key?: string;
  writable?: boolean;
}

export type AsyncExchangeGrantPermission = (args: IExchangeGrantPermissionArgs) => Promise<void>;

export type AsyncExchangeRevokePermission = (args: { package: string; key?: string }) => Promise<void>;

export type AsyncBarcodeScan = () => Promise<{ result: string }>;

export type AsyncClipboardSet = (args: { text: string }) => Promise<void>;

export type AsyncClipboardGet = () => Promise<{ text: string }>;

interface IGeolocationGetLocationRes {
  longitude: number;
  latitude: number;
  accuracy: number;
  time: number;
}

export type AsyncGeolocationGetLocation = (args: { timeout?: number; coorType?: string }) => Promise<IGeolocationGetLocationRes>;

interface IGeolocationOpenLocationArgs {
  latitude: number;
  longitude: number;
  coordType?: string;
  scale?: number;
  name?: string;
  address?: string;
}

export type AsyncGeolocationOpenLocation = (args: IGeolocationOpenLocationArgs) => Promise<void>;

interface IGeolocationChooseLocationArgs {
  latitude?: number;
  longitude?: number;
  coordType?: string;
}

interface IGeolocationChooseLocationRes {
  name: string;
  address: string;
  coordType: string;
  latitude: number;
  longitude: number;
}

export type AsyncGeolocationChooseLocation = (args: IGeolocationChooseLocationArgs) => Promise<IGeolocationChooseLocationRes>;

export type AsyncGeolocationGetLocationType = () => Promise<{ types: string[] }>;

export type AsyncGeolocationGeocodeQuery = (args: { city: string; address: string }) => Promise<{ longitude: number; latitude: number }>;

interface IGeolocationReverseGeocodeQueryArgs {
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

interface IGeolocationReverseGeocodeQueryRes {
  countryName: string;
  province: string;
  city: string;
  district: string;
  street: string;
  address: string;
  poiInfoList: IGeolocationReverseGeocodeQueryPoiInfo[];
}

export type AsyncGeolocationReverseGeocodeQuery = (args: IGeolocationReverseGeocodeQueryArgs) => Promise<IGeolocationReverseGeocodeQueryRes>;

export type AsyncShortcutHasInstalled = () => Promise<boolean>;

export type AsyncShortcuInstall = (args: { message?: string }) => Promise<void>;

interface ICalendarInsertArgs {
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

export type AsyncCalendarInsert = (args: ICalendarInsertArgs) => Promise<any>;

export interface INetworkGetTypeRes {
  metered: boolean;
  type: string;
}

export type AsyncNetworkGetType = () => Promise<INetworkGetTypeRes>;

interface SimOperators {
  operator: string;
  slotIndex: number;
  isDefaultDataOperator: boolean;
}

interface INetworkGetSimOperatorsRes {
  operators: SimOperators[];
  size: string;
}

export type AsyncNetworkGetSimOperators = () => Promise<INetworkGetSimOperatorsRes>;

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

type TDeviceGetIdType = 'device' | 'mac' | 'user' | 'advertising';

interface IDeviceGetIdRes {
  device?: string;
  mac?: string;
  user?: string;
  advertising?: string;
}

export type AsyncDeviceGetId = (args: { type: TDeviceGetIdType[] }) => Promise<IDeviceGetIdRes>;

export type AsyncDeviceGetDeviceId = () => Promise<{ deviceId: string }>;

export type AsyncDeviceGetUserId = () => Promise<{ userId: string }>;

export type AsyncDeviceGetAdvertisingId = () => Promise<{ advertisingId: string }>;

export type AsyncDeviceGetSerial = () => Promise<{ serial: string }>;

export type AsyncDeviceGetTotalStorage = () => Promise<{ totalStorage: number }>;

export type AsyncDeviceGetAvailableStorage = () => Promise<{ availableStorage: number }>;

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

interface IRecordStartArgs {
  duration?: number;
  sampleRate?: number;
  numberOfChannels?: number;
  encodeBitRate?: number;
  format?: string;
}

export type AsyncRecordStart = (args?: IRecordStartArgs) => Promise<{ uri: string }>;

interface IContactItem {
  displayName: string;
  number: string;
}

export type AsyncContactPick = () => Promise<IContactItem>;

export type AsyncContactList = () => Promise<{ contactList: IContactItem[] }>;

export type AsyncSmsSend = (args: { address: string; content: string }) => Promise<void>;

export type AsyncSmsReadSafely = (args: { timeout?: number }) => Promise<{ message: string }>;

interface IWifiConnectArgs {
  SSID: string;
  BSSID: string;
  password?: string;
}

export type AsyncWifiConnect = (args: IWifiConnectArgs) => Promise<void>;

export type AsyncWifiScan = () => Promise<void>;

interface IWifiGetConnectedWifiRes {
  SSID: string;
  BSSID: string;
  secure: boolean;
  signalStrength: number;
}

export type AsyncWifiGetConnectedWifi = () => Promise<IWifiGetConnectedWifiRes>;

export type AsyncBluetoothOpenAdapter = (args?: { operateAdapter?: boolean }) => Promise<void>;

export type AsyncBluetoothCloseAdapter = (args?: { operateAdapter?: boolean }) => Promise<void>;

export type AsyncBluetoothGetAdapterState = () => Promise<{
  available: boolean;
  discovering: boolean;
}>;

interface IBluetoothStartDevicesDiscoveryArgs {
  service?: string[];
  allowDuplicatesKey?: boolean;
  interval?: number;
}

export type AsyncBluetoothStartDevicesDiscovery = (args?: IBluetoothStartDevicesDiscoveryArgs) => Promise<void>;

export type AsyncBluetoothStopDevicesDiscovery = () => Promise<void>;

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

export type AsyncBluetoothGetDevices = () => Promise<{ devices: IBluetoothDeviceItemPlus[] }>;

export type AsyncBluetoothGetConnectedDevices = (args: { services: string[] }) => Promise<{ devices: IBluetoothDeviceItem[] }>;

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

interface IBluetoothGetBLEDeviceCharacteristicsArgs {
  deviceId: string;
  serviceId: string;
}

export type AsyncBluetoothGetBLEDeviceCharacteristics = (args: IBluetoothGetBLEDeviceCharacteristicsArgs) => Promise<{ characteristics: IBLEDeviceCharacteristicsItem[] }>;

interface IBluetoothReadBLECharacteristicValueArgs extends IBluetoothGetBLEDeviceCharacteristicsArgs {
  characteristicId: string;
}

export type AsyncBluetoothReadBLECharacteristicValue = (args: IBluetoothReadBLECharacteristicValueArgs) => Promise<void>;

interface IBluetoothWriteBLECharacteristicValueArgs extends IBluetoothReadBLECharacteristicValueArgs {
  value: ArrayBuffer;
}

export type AsyncBluetoothWriteBLECharacteristicValue = (args: IBluetoothWriteBLECharacteristicValueArgs) => Promise<void>;

interface IBluetootNotifyBLECharacteristicValueChangeArgs extends IBluetoothReadBLECharacteristicValueArgs {
  state: boolean;
}

export type AsyncBluetootNotifyBLECharacteristicValueChange = (args: IBluetootNotifyBLECharacteristicValueChangeArgs) => Promise<void>;

interface IAlarmSetAlarmArgs {
  hour: number;
  minute: number;
  message?: string;
  vibrate?: boolean;
  days?: number[];
  ringtone: string;
}

export type AsyncAlarmSetAlarm = (args: IAlarmSetAlarmArgs) => Promise<void>;

export type AsyncAlarmIsAvailable = () => Promise<{ isAvailable: boolean }>;

export type AsyncZipDecompress = (args: { srcUri: string; dstUri: string }) => Promise<void>;

export type AsyncKeyguardGetKeyguardLockedStatus = () => Promise<{ isKeyguardLocked: boolean }>;
