//获取客户端的ip地址
module.exports.getClientIpAddress=(req,res) => {
    // console.log(req.ipv6Only)
    const ipAddress=req.headers.host.substring(0,req.headers.host.indexOf(":"));
    // console.log(ipAddress)
    res.send(ipAddress)
}
