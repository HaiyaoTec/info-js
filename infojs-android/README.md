# Info.JS Android
Info.JS 的 Android客户端

# Dependencies
```groovy
implementation "me.jinuo.imf:infojs:1.0.1"
```

# Usage
### Android 端接入
```java
webView.webViewClient = object : WebViewClient() {
    override fun onLoadResource(view: WebView, url: String) {
        // 只需一行代码，一行升天
        InfoJs.inject(view)
    }
}
```

### JS 端使用信息
```js
    if (window.webViewInfoJs) {
        console.log("webViewInfoJs: " + JSON.stringify(window.webViewInfoJs))
    } else {
        console.log("webViewInfoJs no exist")
        window.addEventListener("WebViewInfoJsReady", () => {
            console.log("webViewInfoJs from message: " + JSON.stringify(window.webViewInfoJs))
        }, false)
    }
```
获取到的 `window.webViewInfoJs` 内容为下：
```json
{
    "packageName":"me.jinuo.gaia.demo",
    "appVersionCode":1,
    "appVersionName":"me.jinuo.gaia.demo",
    "platform":"Android",
    "platformVersion":"11",
    "deviceId":"d79bd126-56ab-30bc-82f4-2bdb62d034b2",
    "deviceBrand":"OnePlus"
}
```