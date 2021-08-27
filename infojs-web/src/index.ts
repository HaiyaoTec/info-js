import {BrowserInfo, BrowserExtension} from './domain'
import CountryInfoQueryImpl = Country.CountryInfoQueryImpl;

declare global {
    interface Window {
        browserInfo: BrowserInfo
        browserExtension: BrowserExtension
    }
}

window.browserInfo = new BrowserInfo()

window.browserExtension = new BrowserExtension()

export {CountryInfoQueryImpl}