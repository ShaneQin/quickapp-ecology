# quickapp-async
一个使用 `Promise` 封装的的快应用工具库。解决了快应用开发过程中调用框架提供的 API 不能使用 `async`/`await` 的问题。
## 用法
```
npm install quickapp-async -S
```
## 方法索引
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
