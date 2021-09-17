//获取客户端的ip地址
module.exports.getClientIpAddress=(req,res) => {

    let ip=req.clientIp;
    ip=ip.toString().replace("::ffff:","")
    console.log('IPADDRESS',ip);
    // console.log(req.ip)
    // let ipAddress=req.headers.host;
    // if(req.headers.host.indexOf(":")!==-1)
    //     ipAddress =req.headers.host.substring(0,req.headers.host.indexOf(":"));
    res.send(ip)
}
