# ClientInfo
更方便的获取客户端信息

## Install
```ts
import {ClientInfoInstanceFactory} from '@imf/ClientInfo'
```

## Start

#### 使用
使用极其方便，并且在任意地方都可以使用
```ts
import {ClientInfoInstanceFactory} from '@imf/ClientInfo'
const ClientInfo=ClientInfoInstanceFactory.getInstance()
console.log(ClientInfo.language)//zh-cn
```

#### 参数解释
| key | value | 解释 |
| :-----| ----: | :----: |
| appVersion | 5.0 (Macintosh; Intel Mac OS X 10_15_7)... | 客户端浏览器的平台和版本信息|
| language | zh-cn |客户端当前浏览器语言  |
| screenResolution | 1080*1920 | 客户端浏览器的分辨率 |
| isMobileDevice | false| 客户端是否为移动设备 |
| platform | MacIntel | 客户端运行浏览器的操作系统平台 |
#### example
```ts
console.log(ClientInfoInstanceFactory.getInstance().appVersion)//5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36
console.log(ClientInfoInstanceFactory.getInstance().platform)//MacIntel
console.log(ClientInfoInstanceFactory.getInstance().language)//zh-cn
console.log(ClientInfoInstanceFactory.getInstance().screenResolution)//1080*1920
console.log(ClientInfoInstanceFactory.getInstance().isMobileDevice)//false
```