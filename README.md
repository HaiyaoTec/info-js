# InfoJs ⚡
更方便的获取客户端信息

![infoJs](https://static01.imgkr.com/temp/a4132579f1c94298a3b47d8707b1ef72.png)
## Install 💡
```shell
npm install @imf/info-js --save

npm install @imf/infojs-plugin --save-dev

or

yarn add @imf/info-js

yarn add @imf/infojs-plugin --dev
```

## Useage 🌲

###
**step1: 配置vite插件**

```ts
//在vite.config.js中进行配置
//引入我们安装的vite插件
import infoJsPlugin from '@imf/infojs-plugin'
export default defineConfig({
  plugins: [vue(),infoJsPlugin()],
  //优化包依赖
  optimizeDeps:{
      //！！！在这里排除我们插件生成的虚拟路径
    exclude:['@infoJs-plugin-virtual-module']
  }
})

```

**step2: 使用极其方便，并且在任意地方都可以使用**

 
```ts
import '@imf/info-js'//仅需在main.ts导入即可
```

tips:完成导入后,所有的信息对象都会被注入到window对象上

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
| userAgent | MacIntel | 客户度浏览器 |
| appPackageName | vue-demo-web | app包名 |
| appVersion |5.0 (Macintosh; Intel Mac OS X 10_15_7)...| 客户端浏览器的平台和版本信息 |
| appVersionCode | 1.0.1 | app版本号 |
| platform | MacIntel | 客户端运行浏览器的操作系统平台 |
| appIpAddress | 2409:8a62:810:93f0:1dd4:52b4:ab29:d752 | 客户端ip地址 |
| appIpCountry | CN | 客户端ip所在地理位置 |
| appMode | beta｜prod | App的运行环境 |
| viteMode | development｜build | App的运行环境 |

### example 📦
```ts
console.log(window.browserInfo.platform)//MacIntel
console.log(window.browserInfo.screenResolution)//1440*900
console.log(window.browserInfo.isMobileDevice)// false
console.log(window.browserInfo.appIpAddress)//2409:8a62:810:93f0:1dd4:52b4:ab29:d752
console.log(window.browserInfo.appIpCountry)//CN
console.log(window.browserInfo.appMode)//beta
console.log(window.browserInfo.appPackageName)//vue-demo-web
console.log(window.browserInfo.appVersionCode)//1.0.0
console.log(window.browserInfo.appMode)//beta
console.log(window.browserInfo.viteMode)//production

......

console.log(window.browserExtension.language)//zh-cn
window.browserExtension.language='zh-cn'//set language
```
## Future 🛠️

已完成:✅&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;未完成:❌
* 应用版本号 ✅
* 浏览器指纹 ✅
* 用户ip地址 ✅
* 用户所在国家 ✅
* 项目运行的环境类型（prod beat ）✅
