import {getExplorer, getScreenResolution, isMobileDevice} from '../hooks'

/***
 * 客户端信息类
 */
class ClientInfoExtension {
    //客户端Window对象
    private _window: Window
    //客户端浏览器对象
    private _navigator: Navigator
    //客户端浏览器的平台和版本信息
    private _appVersion: string = 'unknown'
    //客户机发送服务器的user-agent头部的值
    private _userAgent: string = 'unknown'
    //客户端运行浏览器的操作系统平台
    private _platform: string = 'unknown'
    //客户端当前浏览器语言
    private _language: string = 'unknown'
    //客户端浏览器的分辨率
    private _screenResolution: string = 'unknown'
    //客户端是否为移动设备
    private _isMobileDevice: boolean = false

    constructor() {
        //初始化window和nacigator对象
        this._window = window
        this._navigator = this._window.navigator
        //初始化客户端信息对象
        this.initClientInfo();
    }

    get appVersion(): string {
        return this._appVersion
    }

    set appVersion(value) {
        this._appVersion = value
    }

    get userAgent(): string {
        return this._userAgent
    }

    set userAgent(value) {
        this._userAgent = value
    }

    get platform(): string {
        return this._platform
    }

    set platform(value) {
        this._platform = value
    }

    get language(): string {
        return this._language
    }

    set language(value) {
        this._language = value
    }

    get screenResolution(): string {
        return this._screenResolution
    }

    set screenResolution(value) {
        this._screenResolution = value
    }
    get isMobileDevice(): boolean {
        return this._isMobileDevice
    }

    set isMobileDevice(value) {
        this._isMobileDevice = value
    }


    private initClientInfo() {
        //获取客户端浏览器版本信息
        this.appVersion = this._navigator.appVersion
        //获取客户端浏览器厂商
        this.userAgent = getExplorer(this._window)
        //获取运行浏览器的操作系统平台
        this.platform = this._navigator.platform
        //@ts-ignore
        this.language = (this._navigator.language || this._navigator.browserLanguage).toLowerCase()
        //获取客户端浏览器的分辨率
        this.screenResolution = getScreenResolution(this._window)
        //获取客户端是否为移动设备
        this._isMobileDevice=isMobileDevice(this._window)

    }
}


export default ClientInfoExtension

