/**
 * 定义platform枚举
 */
enum Platform {
    Android,
    iOS
}

/***
 * 客户端信息类(PC不可读)
 */
class ClientInfo {
    //包名
    private _packageName: string = 'unKnown'
    //app版本号
    private _appVersionCode: number = -1
    //app版本名称
    private _appVersionName: string = 'unKnown'
    //平台
    private _platform: Platform | undefined = Platform.Android
    //平台版本号
    private _platformVersion: string = 'unKnown'
    //设备Id
    private _deviceId: string = 'unKnown'
    //设备品牌
    private _deviceBrand: string = 'unKnown'
    
    get packageName(): string {
        return this._packageName;
    }


    get appVersionCode(): number {
        return this._appVersionCode;
    }


    get appVersionName(): string {
        return this._appVersionName;
    }


    get platformVersion(): string {
        return this._platformVersion;
    }


    get deviceId(): string {
        return this._deviceId;
    }


    get deviceBrand(): string {
        return this._deviceBrand;
    }


    get platform(): Platform | undefined {
        return this._platform;
    }

}


export default ClientInfo

