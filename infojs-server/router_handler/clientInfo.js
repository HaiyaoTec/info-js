//获取客户端的ip地址
module.exports.getClientIpAddress=(req,res) => {
    let ipAddress=req.headers.host;
    if(req.headers.host.indexOf(":")!==-1)
        ipAddress =req.headers.host.substring(0,req.headers.host.indexOf(":"));
    res.send(ipAddress)
}
