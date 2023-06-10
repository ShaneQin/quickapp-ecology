type asyncFunc = () => Promise<any>;

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

export type AsyncPromptShowDialog = (
  args: IPromptShowDialogArgs
) => Promise<{ index: number } | undefined>;

interface IPromptShowContextMenuArgs {
  itemList: string[];
  itemColor?: string;
}

export type AsyncPromptShowContextMenu = (
  args: IPromptShowContextMenuArgs
) => Promise<{ index: number } | undefined>;

interface IWebviewSetCookieArgs {
  domain: string;
  name: string;
  value?: string;
  path?: string;
  expires?: string;
  maxAge?: string;
  extra?: string;
}

export type AsyncWebviewSetCookie = (
  args: IWebviewSetCookieArgs
) => Promise<void>;

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
  files: IRequestUploadFile[];
  data?: IRequestUploadData[];
}

interface IRequestUploadRes {
  code: number;
  data: string;
  headers: object;
}

export type AsyncRequestUpload = (
  args: IRequestUploadArgs
) => Promise<IRequestUploadRes>;

interface IRequestDownloadArgs {
  url: string;
  header?: string;
  description?: string;
  filename?: string;
}

export type AsyncRequestDownload = (
  args: IRequestDownloadArgs
) => Promise<{ token: string }>;

export type AsyncRequestOnDownloadComplete = (args: {
  token: string;
}) => Promise<{ uri: string }>;

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

export type AsyncFileMove = (args: { srcUri: string, dstUri: string }) => Promise<string>;

export type AsyncFileCopy = (args: { srcUri: string, dstUri: string }) => Promise<string>;

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

export type AsyncFileGet = (args: { uri: string, recursive?: boolean }) => Promise<IFileGetRes>;

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

export type AsyncFileReadText = (args: { uri: string, encoding?: string }) => Promise<{ text: string }>;

interface AsyncFileReadArrayBufferArgs {
  uri: string;
  position?: number;
  length?: number;
}

export type AsyncFileReadArrayBuffer = (args: AsyncFileReadArrayBufferArgs) => Promise<{ buffer: Uint8Array }>;

export type AsyncFileAccess = (args: { uri: string }) => Promise<void>;

export type AsyncFileMkdir = (args: { uri: string, recursive?: boolean }) => Promise<void>;

export type AsyncFileRmdir = (args: { uri: string, recursive?: boolean }) => Promise<void>;

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

export type AsyncExchangeRevokePermission = (args: { package: string, key?: string }) => Promise<void>;

export type AsyncShortcutHasInstalled = () => Promise<boolean>;

export type AsyncShortcuInstall = (args: { message?: string }) => Promise<void>;

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

export type AsyncNetworkGetSimOperators =
  () => Promise<AsyncNetworkGetSimOperatorsRes>;

export interface AsyncDeviceGetInfoRes {
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

export type AsyncDeviceGetInfo = () => Promise<AsyncDeviceGetInfoRes>;

type GetIdType = 'device' | 'mac' | 'user' | 'advertising';

interface AsyncDeviceGetIdRes {
  device?: string;
  mac?: string;
  user?: string;
  advertising?: string;
}

export type AsyncDeviceGetId = (args: {
  type: GetIdType[];
}) => Promise<AsyncDeviceGetIdRes>;

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

export interface AsyncFetchFetchArgs {
  url: string;
  data?: string | object | ArrayBuffer;
  header?: object;
  method?: string;
  responseType?: string;
}

export interface AsyncFetchFetchRes {
  data: {
    code: number;
    data: string | object | ArrayBuffer;
    headers: object;
  };
}

export interface AppGetInfoRes {
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
