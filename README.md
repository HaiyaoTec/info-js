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

#### 参数解释
| key | value | 解释 |
| :-----| ----: | :----: |
| appVersion | 5.0 (Macintosh; Intel Mac OS X 10_15_7)... | 客户端浏览器的平台和版本信息|
| language | zh-cn |客户端当前浏览器语言  |
| screenResolution | 1080*1920 | 客户端浏览器的分辨率 |
| isMobileDevice | false| 客户端是否为移动设备 |
| platform | MacIntel | 客户端运行浏览器的操作系统平台 |
#### example 📦
```ts
console.log(window.browserInfo.appVersion)//5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36
console.log(window.browserInfo.platform)//MacIntel
console.log(window.browserInfo.screenResolution)//1080*1920
console.log(window.browserInfo.isMobileDevice)//false
```
## Future 🛠️
* 浏览器指纹
* 用户ip地址
* 用户所在国家
* 项目运行的环境类型（prod beat ）
