//获取客户端的ip地址
module.exports.getClientIpAddress=(req,res) => {
    // console.log(req.ipv6Only)
    res.send({
        ipAddress:req.headers.host
    })
}