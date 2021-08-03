import ClientInfoInstanceFactory from './module/ClientInfoInstanceFactory'
import ClientInfoInstance from "./domain/ClientInfoInstance";
export {ClientInfoInstanceFactory}


declare global {
    interface Window {
        info: ClientInfoInstance
        extension: ClientInfoInstance
    }
}

window.info = ClientInfoInstanceFactory.getInstance()
window.extension = ClientInfoInstanceFactory.getInstance()