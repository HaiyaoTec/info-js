import ClientInfo from '../domain/ClientInfo'
import ClientInfoExtension from "../domain/ClientInfoExtension";

class ClientInfoInstanceFactory {

    //创建 clientInfoInstance 的一个对象
    public static clientInfoInstance = new ClientInfo();

    //创建 clientInfoInstanceExtensionInstance的一个对象
    public static clientInfoExtensionInstance = new ClientInfoExtension();

    //获取客户端信息对象实例
    public static getClientInfoInstance(): ClientInfo {
        return this.clientInfoInstance;
    }
    
    //获取客户端扩展信息对象实例
    public static getClientInfoExtensionInstance(): ClientInfoExtension {
        return this.clientInfoExtensionInstance;
    }
}

export default ClientInfoInstanceFactory
