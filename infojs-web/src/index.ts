import {BrowserInfo, BrowserExtension} from './domain'
import ClientInfo from "./domain/ClientInfo";

declare global {
    interface Window {
        browserInfo: BrowserInfo
        browserExtension: BrowserExtension
        webViewInfoJs :ClientInfo
    }
}

window.browserInfo = new BrowserInfo()

window.browserExtension = new BrowserExtension()
