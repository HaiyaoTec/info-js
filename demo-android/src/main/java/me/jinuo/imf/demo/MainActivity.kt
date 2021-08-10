package me.jinuo.imf.demo

import android.annotation.SuppressLint
import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity
import me.jinuo.imf.infojs.InfoJs

class MainActivity : AppCompatActivity() {

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val webView: WebView = findViewById(R.id.wdnmd)
        webView.loadUrl("http://172.18.1.23:3000/")

        // 必须开启js
        webView.settings.javaScriptEnabled = true
        webView.webViewClient = object : WebViewClient() {
            override fun onLoadResource(view: WebView, url: String) {
                super.onLoadResource(view, url)
                InfoJs.inject(view)
            }
        }
    }
}