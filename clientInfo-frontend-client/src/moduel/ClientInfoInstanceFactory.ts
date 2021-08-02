import ClientInfoInstance from '../domain/ClientInfoInstance'
class ClientInfoInstanceFactory {

    //创建 clientInfoInstance 的一个对象
    private static clientInfoInstance = new ClientInfoInstance();

    //获取唯一可用的对象
    public static getInstance():ClientInfoInstance{
        if(this.clientInfoInstance===null){
            this.clientInfoInstance = new ClientInfoInstance();
        }
        return this.clientInfoInstance;
    }
}
export default ClientInfoInstanceFactory
