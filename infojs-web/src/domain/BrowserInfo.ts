import {getExplorer, getScreenResolution, isMobileDevice} from '../hooks'
import ClientInfo from "./ClientInfo";
//@ts-ignore
import {appInfo} from '@infoJs-plugin-virtual-module'
//接入浏览器指纹
import {getBrowserId} from '@imf/browserid'

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

    //当前app包名
    private _appPackageName: string = 'unknown'
    //当前项目的app版本号
    private _appVersionCode: string = 'unknown'
    //当前app运行的环境变量
    private _viteMode: string = 'unknown'
    //客户端ip
    private _appIpAddress: string = 'unknown'
    //客户端ip所在国家
    private _appIpCountry: string = 'unknown'
    //WebApp mode
    private _appMode: string = 'unknown'
    //浏览器指纹
    private _browserId: string = 'unknown'


    constructor() {
        //初始化window和nacigator对象
        this._window = window
        this._navigator = this._window.navigator
        //初始化客户端信息对象
        this.initClientInfo();
    }

    get browserId(): string {
        return this._browserId;
    }

    get appPackageName(): string {
        return this._appPackageName;
    }

    get viteMode(): string {
        return this._viteMode;
    }

    get appVersionCode(): string {
        return this._appVersionCode;
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

    get appIpAddress(): string {
        return this._appIpAddress;
    }

    get appIpCountry(): string {
        return this._appIpCountry;
    }

    get appMode(): string {
        return this._appMode;
    }

    get isMobileDevice(): boolean {
        return this._isMobileDevice
    }


    get client(): ClientInfo | null {
        return this._client;
    }

    //TODO
    public hasClient(): boolean {
        return !!this._client
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
        //获取app版本号
        this._appVersionCode = appInfo.appVersion
        //获取app运行环境
        this._viteMode = appInfo.viteMode
        //获取app包名
        this._appPackageName = appInfo.appPackageName

        //获取浏览器指纹
        getBrowserId().then(value => {
            this._browserId = value
        }).catch(e => {
            console.log(e)
        })

        //获取ip和country信息
        fetch('http://infojs.xyz/api/getipaddress')
            .then(response => response.json())
            .then(data => {
                this._appIpAddress = data.ipAddress;
                this._appIpCountry = data.ipCountry;
            })
            .catch(e => console.log('获取客户端ip和ip所在地理位置失败～'))
        //初始化appMode
        try {
            this._appMode = appInfo.appMode ?? 'unknown'
        } catch (e) {
            console.log('获取appMode失败～')
        }
        //获取从安卓注入的webViewClient
        //1.1当webViewInfoJs已存在
        //@ts-ignore
        if (window.webViewInfoJs) {
            //@ts-ignore
            this._client = window.webViewInfoJs
        } else {
            //1.2当webViewnInfoJs还未加载完成
            console.log("webViewInfoJs no exist")
            window.addEventListener("WebViewInfoJsReady", () => {
                //当webViewInfoJs加载完毕添加到window对象上
                //@ts-ignore
                this._client = window.webViewInfoJs
            }, false)
        }
    }
}


export {BrowserInfo}

