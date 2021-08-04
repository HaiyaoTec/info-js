import ClientInfoInstanceFactory from './module/ClientInfoInstanceFactory'
import ClientInfo from "./domain/ClientInfo";
import ClientInfoExtension from './domain/ClientInfoExtension'

declare global {
    interface Window {
        clientInfo: ClientInfo
        clientInfoExtension: ClientInfoExtension
    }
}

window.clientInfo = ClientInfoInstanceFactory.getClientInfoInstance()

window.clientInfoExtension = ClientInfoInstanceFactory.getClientInfoExtensionInstance()
