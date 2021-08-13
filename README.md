# InfoJs ⚡
更方便的获取客户端信息

## Install 💡
```shell
npm install @imf/info-js --save

yarn add @imf/info-js
```

## Start ⚡️

#### 使用
使用极其方便，并且在任意地方都可以使用
```ts
import '@imf/info-js'//仅需导入即可
```
## API 🍉

### Window

```typescript
window.browserInfo : BrowserInfo
window.browserExtension : BrowserExtension
```


### BrowserExtension  (<font color=red>Writable/Readable</font>)
| key | value | 解释 |
| :-----| ----: | :----: |
| language | zh-cn |客户端当前浏览器语言  |

### BrowserInfo (<font color=red>OnlyRead</font>)
| key | value | 解释 |
| :-----| ----: | :----: |
| screenResolution | 1080*1920 | 客户端浏览器的分辨率 |
| isMobileDevice | false| 客户端是否为移动设备 |
| platform | MacIntel | 客户端运行浏览器的操作系统平台 |
| userAgent | MacIntel | 客户度浏览器 |
| client | ClientInfo | 客户端信息对象 |

### ClientInfo


#### example 📦
```ts
console.log(window.browserInfo.platform)//MacIntel
console.log(window.browserInfo.screenResolution)//1440*900
console.log(window.browserInfo.client)// a Object ^_^
console.log(window.browserInfo.isMobileDevice)// false
console.log(window.browserExtension.language)//zh-cn
console.log(window.browserInfo.userAgent)//Chrome
window.browserExtension.language='zh-cn'//set language
```
## Future 🛠️
* 应用版本号
* 浏览器指纹
* 用户ip地址
* 用户所在国家
* 项目运行的环境类型（prod beat ）
