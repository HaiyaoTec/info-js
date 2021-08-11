/**
 * 定义platform枚举
 */
enum LogLevel {
    Android,
    ios
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
    private _platform: LogLevel | undefined = LogLevel.Android
    //平台版本号
    private _platformVersion: string = 'unKnown'
    //设备Id
    private _deviceId: string = 'unKnown'
    //设备品牌
    private _deviceBrand: string = 'unKnown'

    constructor() {
        //初始化客户端信息对象
        this.initClientInfo();
    }

    private initClientInfo() {

    }

    get packageName(): string {
        return this._packageName;
    }

    set packageName(value: string) {
        this._packageName = value;
    }

    get appVersionCode(): number {
        return this._appVersionCode;
    }

    set appVersionCode(value: number) {
        this._appVersionCode = value;
    }

    get appVersionName(): string {
        return this._appVersionName;
    }

    set appVersionName(value: string) {
        this._appVersionName = value;
    }


    get platformVersion(): string {
        return this._platformVersion;
    }

    set platformVersion(value: string) {
        this._platformVersion = value;
    }

    get deviceId(): string {
        return this._deviceId;
    }

    set deviceId(value: string) {
        this._deviceId = value;
    }

    get deviceBrand(): string {
        return this._deviceBrand;
    }

    set deviceBrand(value: string) {
        this._deviceBrand = value;
    }

    get platform(): LogLevel | undefined {
        return this._platform;
    }

    set platform(value: LogLevel | undefined) {
        this._platform = value;
    }
}


export default ClientInfo

