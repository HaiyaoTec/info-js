import {getExplorer, getScreenResolution, isMobileDevice} from '../hooks'
import ClientInfo from "./ClientInfo";

/***
 * 浏览器信息类(ReadOnly)
 */
class BrowserInfo {

    //客户端浏览器Window对象
    private _window: Window
    //客户端浏览器对象
    private _navigator: Navigator
    //客户端浏览器的平台和版本信息
    private _appVersion: string = 'unknown'
    //客户机浏览器发送给服务器的user-agent头部的值
    private _userAgent: string = 'unknown'
    //客户端运行浏览器的操作系统平台
    private _platform: string = 'unknown'
    //客户端浏览器的分辨率
    private _screenResolution: string = 'unknown'
    //客户端是否为移动设备
    private _isMobileDevice: boolean = false
    //客户端信息对象
    private _client: ClientInfo | null = null

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


    get userAgent(): string {
        return this._userAgent
    }


    get platform(): string {
        return this._platform
    }


    get screenResolution(): string {
        return this._screenResolution
    }


    get isMobileDevice(): boolean {
        return this._isMobileDevice
    }

    get client(): ClientInfo | null {
        return this._client;
    }


    private initClientInfo() {
        //获取客户端浏览器版本信息
        this._appVersion = this._navigator.appVersion
        //获取客户端浏览器厂商
        this._userAgent = getExplorer(this._window)
        //获取运行浏览器的操作系统平台
        this._platform = this._navigator.platform
        //获取客户端浏览器的分辨率
        this._screenResolution = getScreenResolution(this._window)
        //获取客户端是否为移动设备
        this._isMobileDevice = isMobileDevice(this._window)
        //获取从安卓注入的webViewClient
        //1.1当webViewInfoJs已存在
        if (window.webViewInfoJs) {
            this._client = window.webViewInfoJs
            console.log("webViewInfoJs: " + JSON.stringify(window.webViewInfoJs))
        } else {
            //1.2当webViewnInfoJs还未加载完成
            console.log("webViewInfoJs no exist")
            window.addEventListener("WebViewInfoJsReady", () => {
                //当webViewInfoJs加载完毕添加到window对象上
                console.log("webViewInfoJs from message: " + JSON.stringify(window.webViewInfoJs))
                this._client = window.webViewInfoJs
            }, false)
        }
    }
}


export {BrowserInfo}

