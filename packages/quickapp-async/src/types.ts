type asyncFunc = () => Promise<any>;

interface AsyncShareArgs {
  type: string;
  data: string;
}
export type AsyncShare = (args: AsyncShareArgs) => Promise<{} | undefined>;

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
export type AsyncshowDialog = (
  args: AsyncshowDialogArgs
) => Promise<{ index: number } | undefined>;

interface AsyncshowDialogArgs {
  itemList: string[];
  itemColor?: string;
}

export type AsyncShowContextMenu = (
  args: AsyncshowDialogArgs
) => Promise<{ index: number } | undefined>;

interface AsyncWebviewSetCookieArgs {
  domain: string;
  name: string;
  value?: string;
  path?: string;
  expires?: string;
  maxAge?: string;
  extra?: string;
}

export type AsyncWebviewSetCookie = (
  args: AsyncWebviewSetCookieArgs
) => Promise<void>;

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

export type AsyncRequestUpload = (
  args: AsyncRequestUploadArgs
) => Promise<AsyncRequestUploadRes>;

interface AsyncRequestDownloadArgs {
  url: string;
  header?: string;
  description?: string;
  filename?: string;
}

export type AsyncRequestDownload = (
  args: AsyncRequestDownloadArgs
) => Promise<{ token: string }>;

export type AsyncRequestOnDownloadComplete = (args: {
  token: string;
}) => Promise<{ uri: string }>;

interface AsyncStorageGetArgs {
  key: string;
  default?: string;
}

export type AsyncStorageGet = (args: AsyncStorageGetArgs) => Promise<any>;

interface AsyncStorageSetArgs {
  key: string;
  value?: string;
}

export type AsyncStorageSet = (args: AsyncStorageSetArgs) => Promise<void>;

export type AsyncStorageClear = () => Promise<void>;

export type AsyncStorageDelete = (args: { key: string }) => Promise<any>;

export type AsyncStorageKey = (args: { index: number }) => Promise<string>;

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
