# Info.JS Android
Info.JS 的 Android客户端

# Dependencies
```groovy
implementation "me.jinuo.imf:infojs:1.0.0"
```

# Usage
```java
webView.webViewClient = object : WebViewClient() {
    override fun onLoadResource(view: WebView, url: String) {
        // 只需一行代码，一行升天
        InfoJs.inject(view)
    }
}
```