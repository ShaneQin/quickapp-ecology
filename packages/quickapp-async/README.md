# quickapp-async
一个使用 `Promise` 封装的的快应用工具库。解决了快应用开发过程中调用框架提供的 API 不能使用 `async`/`await` 的问题。
## 用法
### 安装
```
npm install quickapp-async -S
```
### 调用
以获取存储内容方法为例
```js
import { asyncStorageGet } from 'quickapp-async';

export default {
  async onInit() {
    const test = await asyncStorageGet({ 
      key: 'test' 
    })
  }
}

```
## 方法索引
方法名通常是 `async` + 模块名 + 方法。例如 `network.getType()` 对应的方法名 `asyncNetworkGetType`
### 界面交互
#### 分享 share
* `asyncShareShare`：[share.share(OBJECT)](https://doc.quickapp.cn/features/system/share.html#shareshareobject) 分享数据到其他 app
#### 弹窗 prompt
* `asyncPromptShowDialog`：[prompt.showDialog(OBJECT)](https://doc.quickapp.cn/features/system/prompt.html#promptshowdialogobject) 显示对话框
* `asyncPromptShowContextMenu`：[prompt.showContextMenu(OBJECT)](https://doc.quickapp.cn/features/system/prompt.html#promptshowcontextmenuobject) 显示上下文菜单
#### 打开网页 webview
* `asyncWebviewSetCookie`：[webview.setCookie(OBJECT)](https://doc.quickapp.cn/features/system/webview.html#webviewsetcookieobject-1100) 设置WebView的Cookie信息
### 网络访问
#### 上传下载 request
* `asyncRequestUpload`：[request.upload(OBJECT)](https://doc.quickapp.cn/features/system/request.html#requestuploadobject) 上传文件
* `asyncRequestDownload`：[request.download(OBJECT)](https://doc.quickapp.cn/features/system/request.html#requestdownloadobject) 下载文件
* `asyncRequestOnDownloadComplete`：[request.onDownloadComplete(OBJECT)](https://doc.quickapp.cn/features/system/request.html#requestondownloadcompleteobject) 监听下载任务
### 文件数据
#### 数据存储 storage
* `asyncStorageGet`：[storage.get(OBJECT)](https://doc.quickapp.cn/features/system/storage.html#storagegetobject) 读取存储内容
* `asyncStorageSet`：[storage.set(OBJECT)](https://doc.quickapp.cn/features/system/storage.html#storagesetobject) 修改存储内容
* `asyncStorageClear`：[storage.clear(OBJECT)](https://doc.quickapp.cn/features/system/storage.html#storageclearobject) 清空存储内容
* `asyncStorageDelete`：[storage.delete(OBJECT)](https://doc.quickapp.cn/features/system/storage.html#storageclearobject) 删除存储内容
* `asyncStorageKey`：[storage.key(OBJECT)](https://doc.quickapp.cn/features/system/storage.html#storagekeyobject-1050) 返回存储中某个 `index` 的键名
#### 文件存储 file
* `asyncStorageGet`：[file.move(OBJECT)](https://doc.quickapp.cn/features/system/file.html#filemoveobject) 将源文件移动到指定位置
* `asyncFileCopy`：[file.copy(OBJECT)](https://doc.quickapp.cn/features/system/file.html#filecopyobject) 将源文件复制一份并存储到指定位置
* `asyncFileList`：[file.list(OBJECT)](https://doc.quickapp.cn/features/system/file.html#filelistobject) 获取指定目录下的文件列表
* `asyncFileGet`：[file.get(OBJECT)](https://doc.quickapp.cn/features/system/file.html#filegetobject) 获取本地文件的文件信息
* `asyncFileDelete`：[file.delete(OBJECT)](https://doc.quickapp.cn/features/system/file.html#filedeleteobject) 删除本地存储的文件
* `asyncFileWriteText`：[file.writeText(OBJECT)](https://doc.quickapp.cn/features/system/file.html#filewritetextobject1010) 写文本到文件
* `asyncFileWriteArrayBuffer`：[file.writeArrayBuffer(OBJECT)](https://doc.quickapp.cn/features/system/file.html#filewritearraybufferobject1010) 写 `Buffer` 到文件
* `asyncFileReadText`：[file.readText(OBJECT)](https://doc.quickapp.cn/features/system/file.html#filereadtextobject1010) 从文件中读取文本
* `asyncFileReadArrayBuffer`：[file.readArrayBuffer(OBJECT)](https://doc.quickapp.cn/features/system/file.html#filereadarraybufferobject1010) 从文件中读取 `Buffer`
* `asyncFileAccess`：[file.access(OBJECT)](https://doc.quickapp.cn/features/system/file.html#fileaccessobject1060) 判断文件或目录是否存在
* `asyncFileMkdir`：[file.mkdir(OBJECT)](https://doc.quickapp.cn/features/system/file.html#filemkdirobject1060) 创建目录
* `asyncFileRmdir`：[file.rmdir(OBJECT)](https://doc.quickapp.cn/features/system/file.html#filermdirobject1060) 删除目录
#### 交换数据 exchange
* `asyncExchangeGet`：[exchange.get(OBJECT)](https://doc.quickapp.cn/features/service/exchange.html#exchangeget-object) 读取快应用平台数据
* `asyncExchangeSet`：[exchange.set(OBJECT)](https://doc.quickapp.cn/features/service/exchange.html#exchangeset-object) 发布数据到快应用平台
* `asyncExchangeRemove`：[exchange.remove(OBJECT)](https://doc.quickapp.cn/features/service/exchange.html#exchangeremove-object) 从快应用平台删除发布到应用空间（`application`）的数据
* `asyncExchangeClear`：[exchange.clear(OBJECT)](https://doc.quickapp.cn/features/service/exchange.html#exchangeclear-object) 从快应用平台清除当前快应用的应用空间的数据
* `asyncExchangeGrantPermission`：[exchange.grantPermission(OBJECT)](https://doc.quickapp.cn/features/service/exchange.html#exchangegrantpermission-object) 授予指定快应用读取 `get`、修改 `set`、删除 `remove` 数据的权限
* `asyncExchangeRevokePermission`：[exchange.revokePermission(OBJECT)](https://doc.quickapp.cn/features/service/exchange.html#exchangerevokepermission-object) 取消授予指定快应用读取 `get`、修改 `set`、删除 `remove` 数据的权限
### 系统能力
#### 二维码 barcode
* `asyncBarcodeScan`：[barcode.scan(OBJECT)](https://doc.quickapp.cn/features/system/barcode.html#barcodescanobject) 扫描二维码
#### 剪贴板 clipboard
* `asyncClipboardSet`：[clipboard.set(OBJECT)](https://doc.quickapp.cn/features/system/clipboard.html#clipboardsetobject) 修改剪贴板内容
* `asyncClipboardGet`：[clipboard.get(OBJECT)](https://doc.quickapp.cn/features/system/clipboard.html#clipboardgetobject) 读取剪贴板内容
#### 地理位置 geolocation
* `asyncGeolocationGetLocation`：[geolocation.getLocation(OBJECT)](https://doc.quickapp.cn/features/system/geolocation.html#geolocationgetlocationobject) 获取地理位置
* `asyncGeolocationOpenLocation`：[geolocation.openLocation(OBJECT)](https://doc.quickapp.cn/features/system/geolocation.html#geolocationopenlocationobject-1070) 使用快应用内置地图查看位置，并且允许拉起第三方地图应用发起导航
* `asyncGeolocationChooseLocation`：[geolocation.chooseLocation(OBJECT)](https://doc.quickapp.cn/features/system/geolocation.html#geolocationchooselocationobject-1070) 打开快应用内置地图选择位置
* `asyncGeolocationGetLocationType`：[geolocation.getLocationType(OBJECT)](https://doc.quickapp.cn/features/system/geolocation.html#geolocationgetlocationtypeobject-1010) 获取系统当前支持的定位类型
* `asyncGeolocationGeocodeQuery`：[geolocation.geocodeQuery(OBJECT)](https://doc.quickapp.cn/features/system/geolocation.html#geolocationgeocodequeryobject-1080) 地理编码，只支持国内地理位置
* `asyncGeolocationReverseGeocodeQuery`：[geolocation.reverseGeocodeQuery(OBJECT)](https://doc.quickapp.cn/features/system/geolocation.html#geolocationreversegeocodequeryobject-1080) 逆地理编码，只支持国内地理位置
#### 桌面图标 shortcut
* `asyncShortcutHasInstalled`：[shortcut.hasInstalled(OBJECT)](https://doc.quickapp.cn/features/system/shortcut.html#shortcuthasinstalledobject) 获取桌面图标是否创建
* `asyncShortcuInstall`：[shortcut.install(OBJECT)](https://doc.quickapp.cn/features/system/shortcut.html#shortcutinstallobject) 创建桌面图标
#### 日历事件 calendar
* `asyncCalendarInsert`：[calendar.insert(OBJECT)](https://doc.quickapp.cn/features/system/calendar.html#calendarinsertobject) 插入日历事件
#### 网络状态 network
* `asyncNetworkGetType`：[network.getType(OBJECT)](https://doc.quickapp.cn/features/system/network.html#networkgettypeobject) 获取网络类型
* `asyncNetworkGetSimOperators`：[network.getSimOperators(OBJECT)](https://doc.quickapp.cn/features/system/network.html#networkgetsimoperatorsobject-1070) 获取Sim卡的运营商信息
#### 设备信息 device
* `asyncDeviceGetInfo`：[device.getInfo(OBJECT)](https://doc.quickapp.cn/features/system/device.html#devicegetinfoobject) 获取设备信息
* `asyncDeviceGetId`：[device.getId(OBJECT)](https://doc.quickapp.cn/features/system/device.html#devicegetinfoobject) 批量获取设备标识
* `asyncDeviceGetDeviceId`：[device.getDeviceId(OBJECT)](https://doc.quickapp.cn/features/system/device.html#devicegetdeviceidobject-1000) 获取设备唯一标识
* `asyncDeviceGetUserId`：[device.getUserId(OBJECT)](https://doc.quickapp.cn/features/system/device.html#devicegetuseridobject-1000) 获取用户唯一标识
* `asyncDeviceGetAdvertisingId`：[device.getAdvertisingId(OBJECT)](https://doc.quickapp.cn/features/system/device.html#devicegetadvertisingidobject-1000) 获取广告唯一标识
* `asyncDeviceGetSerial`：[device.getSerial(OBJECT)](https://doc.quickapp.cn/features/system/device.html#devicegetserialobject-1040) 获取设备序列号
* `asyncDeviceGetTotalStorage`：[device.getTotalStorage(OBJECT)](https://doc.quickapp.cn/features/system/device.html#devicegettotalstorageobject-1000) 获取存储空间的总大小
* `asyncDeviceGetAvailableStorage`：[device.getAvailableStorage(OBJECT)](https://doc.quickapp.cn/features/system/device.html#devicegetavailablestorageobject-1000) 获取存储空间的可用大小
* `asyncDeviceGetCpuInfo`：[device.getCpuInfo(OBJECT)](https://doc.quickapp.cn/features/system/device.html#devicegetcpuinfoobject-1000) 返回 CPU 信息
* `asyncDeviceGetOAID`：[device.getOAID(OBJECT)](https://doc.quickapp.cn/features/system/device.html#devicegetoaidobject-1060) 返回厂商设备标识符中的 OAID（匿名设备标识符）
#### 通信信息 telecom
* `asyncTelecomGetTelecomInfo`：[telecom.getTelecomInfo(OBJECT)](https://doc.quickapp.cn/features/system/telecom.html#telecomgettelecominfoobject) 获取设备通信信息
#### 屏幕亮度 brightness
* `asyncBrightnessGetValue`：[brightness.getValue(OBJECT)](https://doc.quickapp.cn/features/system/brightness.html#brightnessgetvalueobject) 获得当前屏幕亮度值
* `asyncBrightnessSetValue`：[brightness.setValue(OBJECT)](https://doc.quickapp.cn/features/system/brightness.html#brightnesssetvalueobject) 设置当前屏幕亮度值
* `asyncBrightnessGetMode`：[brightness.getMode(OBJECT)](https://doc.quickapp.cn/features/system/brightness.html#brightnessgetmodeobject) 获得当前屏幕亮度模式
* `asyncBrightnessSetMode`：[brightness.setMode(OBJECT)](https://doc.quickapp.cn/features/system/brightness.html#brightnesssetmodeobject) 设置当前屏幕亮度模式
* `asyncBrightnessSetKeepScreenOn`：[brightness.setKeepScreenOn(OBJECT)](https://doc.quickapp.cn/features/system/brightness.html#brightnesssetkeepscreenonobject-1060) 设置是否保持常亮状态
#### 系统音量 volume
* `asyncVolumeGetMediaValue`：[volume.getMediaValue(OBJECT)](https://doc.quickapp.cn/features/system/volume.html#volumegetmediavalueobject) 获取当前多媒体音量
* `asyncVolumeSetMediaValue`：[volume.setMediaValue(OBJECT)](https://doc.quickapp.cn/features/system/volume.html#volumesetmediavalueobject) 设置当前多媒体音量
#### 电量信息 battery
* `asyncBatteryGetStatus`：[battery.getStatus(OBJECT)](https://doc.quickapp.cn/features/system/battery.html#batterygetstatusobject) 获取当前设备的电量信息
#### 应用管理 package
* `asyncPkgHasInstalled`：[pkg.hasInstalled(OBJECT)](https://doc.quickapp.cn/features/system/package.html#pkghasinstalledobject) 检测应用是否存在
* `asyncPkgInstall`：[pkg.install(OBJECT)](https://doc.quickapp.cn/features/system/package.html#pkginstallobject) 安装应用
* `asyncPkgGetInfo`：[pkg.getInfo(OBJECT)](https://doc.quickapp.cn/features/system/package.html#pkggetinfoobject-1070) 获取应用版本号、版本名称信息
* `asyncPkgGetSignatureDigests`：[pkg.getSignatureDigests(OBJECT)](https://doc.quickapp.cn/features/system/package.html#pkggetsignaturedigestsobject-1070) 获取应用签名摘要信息
#### 录音 record
* `asyncRecordStart`：[record.start(OBJECT)](https://doc.quickapp.cn/features/system/record.html#recordstartobject) 开始录音
#### 联系人 contact
* `asyncContactPick`：[contact.pick(OBJECT)](https://doc.quickapp.cn/features/system/contact.html#contactpickobject) 选择联系人
* `asyncContactList`：[contact.list(OBJECT)](https://doc.quickapp.cn/features/system/contact.html#contactlistobject-1050) 获取通讯录所有联系人列表
#### 发送短信 sms
* `asyncSmsSend`：[sms.send(OBJECT)](https://doc.quickapp.cn/features/system/sms.html#smssendobject) 发送短信
* `asyncSmsReadSafely`：[sms.readSafely(OBJECT)](https://doc.quickapp.cn/features/system/sms.html#smsreadsafelyobject-1050) 获取手机短信内容
#### Wi-Fi wifi
* `asyncWifiConnect`：[wifi.connect(OBJECT)](https://doc.quickapp.cn/features/system/wifi.html#wificonnectobject) 连接 Wi-Fi
* `asyncWifiScan`：[wifi.scan(OBJECT)](https://doc.quickapp.cn/features/system/wifi.html#wifiscanobject) 请求获取 Wi-Fi 列表
* `asyncWifiGetConnectedWifi`：[wifi.getConnectedWifi(OBJECT)](https://doc.quickapp.cn/features/system/wifi.html#wifigetconnectedwifiobject) 获取已连接中的 Wi-Fi 信息
#### 蓝牙 bluetooth
* `asyncBluetoothOpenAdapter`：[bluetooth.openAdapter(OBJECT)](https://doc.quickapp.cn/features/system/bluetooth.html#bluetoothopenadapterobject) 初始化蓝牙模块
* `asyncBluetoothCloseAdapter`：[bluetooth.closeAdapter(OBJECT)](https://doc.quickapp.cn/features/system/bluetooth.html#bluetoothcloseadapterobject) 关闭蓝牙模块
* `asyncBluetoothGetAdapterState`：[bluetooth.getAdapterState(OBJECT)](https://doc.quickapp.cn/features/system/bluetooth.html#bluetoothgetadapterstateobject) 获取本机蓝牙适配器状态
* `asyncBluetoothStartDevicesDiscovery`：[bluetooth.startDevicesDiscovery(OBJECT)](https://doc.quickapp.cn/features/system/bluetooth.html#bluetoothstartdevicesdiscoveryobject) 开始搜寻附近的蓝牙外围设备
* `asyncBluetoothStopDevicesDiscovery`：[bluetooth.getAdapterState(OBJECT)](https://doc.quickapp.cn/features/system/bluetooth.html#bluetoothstopdevicesdiscoveryobject) 停止搜寻附近的蓝牙外围设备
* `asyncBluetoothGetDevices`：[bluetooth.getDevices(OBJECT)](https://doc.quickapp.cn/features/system/bluetooth.html#bluetoothstopdevicesdiscoveryobject) 获取在蓝牙模块生效期间所有已发现的蓝牙设备
* `asyncBluetoothGetConnectedDevices`：[bluetooth.getConnectedDevices(OBJECT)](https://doc.quickapp.cn/features/system/bluetooth.html#bluetoothgetconnecteddevicesobject) 根据 uuid 获取处于已连接状态的设备
* `AsyncBluetoothCreateBLEConnection`：[bluetooth.createBLEConnection(OBJECT)](https://doc.quickapp.cn/features/system/bluetooth.html#bluetoothcreatebleconnectionobject) 连接低功耗蓝牙设备
* `AsyncBluetoothCloseBLEConnection`：[bluetooth.closeBLEConnection (OBJECT)](https://doc.quickapp.cn/features/system/bluetooth.html#bluetoothclosebleconnection-object) 断开与低功耗蓝牙设备的连接
* `AsyncBluetoothGetBLEDeviceServices`：[bluetooth.getBLEDeviceServices(OBJECT)](https://doc.quickapp.cn/features/system/bluetooth.html#bluetoothgetbledeviceservicesobject) 获取蓝牙设备所有服务(service)
* `AsyncBluetoothGetBLEDeviceCharacteristics`：[bluetooth.getBLEDeviceCharacteristics(OBJECT)](https://doc.quickapp.cn/features/system/bluetooth.html#bluetoothgetbledevicecharacteristicsobject) 获取蓝牙设备某个服务中所有特征值(characteristic)
* `AsyncBluetoothReadBLECharacteristicValue`：[bluetooth.readBLECharacteristicValue(OBJECT)](https://doc.quickapp.cn/features/system/bluetooth.html#bluetoothreadblecharacteristicvalueobject) 读取低功耗蓝牙设备的特征值的二进制数据值
* `AsyncBluetoothWriteBLECharacteristicValue`：[bluetooth.writeBLECharacteristicValue(OBJECT)](https://doc.quickapp.cn/features/system/bluetooth.html#bluetoothwriteblecharacteristicvalueobject) 向低功耗蓝牙设备特征值中写入二进制数据
* `AsyncBluetootNotifyBLECharacteristicValueChange`：[bluetooth.notifyBLECharacteristicValueChange(OBJECT)](https://doc.quickapp.cn/features/system/bluetooth.html#bluetoothnotifyblecharacteristicvaluechangeobject) 启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值
#### 闹钟 alarm
* `asyncAlarmSetAlarm`：[alarm.setAlarm (OBJECT)](https://doc.quickapp.cn/features/system/alarm.html#alarmsetalarm-object) 设置闹钟，每次添加弹出提示框，同意后调用接口添加
* `asyncAlarmIsAvailable`：[alarm.isAvailable(OBJECT)](https://doc.quickapp.cn/features/system/alarm.html#alarmisavailableobject-1120) 获取闹钟能力可用状态
#### 解压缩 zip
* `asyncZipDecompress`：[zip.decompress(OBJECT)](https://doc.quickapp.cn/features/system/zip.html#zipdecompressobject) 解压文件
#### 锁屏 keyguard
* `asyncKeyguardGetKeyguardLockedStatus`：[keyguard.getKeyguardLockedStatus(OBJECT)](https://doc.quickapp.cn/features/system/keyguard.html#keyguardgetkeyguardlockedstatusobject) 获取快应用当前环境是否为锁屏状态

### 更多方法稍后带来……
