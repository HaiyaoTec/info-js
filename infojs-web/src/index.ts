import {CountryInfoQueryImpl as CountryInfo} from './country'
import {BrowserInfo, BrowserExtension} from './domain'

declare global {
    interface Window {
        browserInfo: BrowserInfo
        browserExtension: BrowserExtension
    }
}

window.browserInfo = new BrowserInfo()

window.browserExtension = new BrowserExtension()

export {CountryInfo}