import ClientInfoInstanceFactory from './moduel/ClientInfoInstanceFactory'
const ClientInfoInstance=ClientInfoInstanceFactory.getInstance()
console.log(ClientInfoInstance.userAgent)
console.log(ClientInfoInstance.appVersion)
console.log(ClientInfoInstance.language)
console.log(ClientInfoInstance.platform)
console.log(ClientInfoInstance.screenResolution)
console.log(ClientInfoInstance.isMobileDevice)


