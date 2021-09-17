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
interface ClientInfo {
    //包名
    _packageName: string
    //app版本号
    _appVersionCode: number
    //app版本名称
    _appVersionName: string
    //平台
    _platform: Platform | undefined
    //平台版本号
    _platformVersion: string
    //设备Id
    _deviceId: string
    //设备品牌
    _deviceBrand: string

}


export default ClientInfo

