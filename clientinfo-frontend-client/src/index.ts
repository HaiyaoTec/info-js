import ClientInfoInstanceFactory from './module/ClientInfoInstanceFactory'
import ClientInfo from "./domain/ClientInfo";
import ClientExtension from './domain/ClientExtension'

declare global {
    interface Window {
        clientInfo: ClientInfo
        clientExtension: ClientExtension
    }
}

window.clientInfo = ClientInfoInstanceFactory.getClientInfoInstance()

window.clientExtension = ClientInfoInstanceFactory.getClientExtensionInstance()
