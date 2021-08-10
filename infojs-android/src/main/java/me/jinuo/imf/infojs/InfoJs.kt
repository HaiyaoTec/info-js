package me.jinuo.imf.infojs

import android.os.Build
import android.webkit.WebView
import com.google.gson.Gson
import me.jinuo.foundation.common.Application
import me.jinuo.foundation.common.Device
import me.jinuo.imf.tyrant.TyrantUtils

object InfoJs {

    fun inject(webView: WebView) {
        val obj = Gson().toJson(getInfo())
        val exp = "if(window.jsField == undefined){\n" +
                "window.jsField=$obj;\n" +
                "window.dispatchEvent(new Event('WebViewInfoJsReady'));\n" +
                "}\n"
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            webView.evaluateJavascript(exp) { println(it) }
        } else {
            webView.settings.databasePath = webView.context.cacheDir.absolutePath
            webView.loadUrl("javascript:$exp")
        }
    }

    private fun getInfo(): Map<String, Any> {
        return mapOf(
            "packageName" to Application.getPackageName(),
            "appVersionCode" to Application.getVersionCode(),
            "appVersionName" to Application.getPackageName(),
            "platform" to "Android",
            "platformVersion" to Device.getOSVersion(),
            "deviceId" to Device.getFoundationDeviceId(),
            "deviceBrand" to Device.getBrand(),
            "channel" to TyrantUtils.channel()
        )
    }

}