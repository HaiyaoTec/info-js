//获取客户端的ip地址
module.exports.getClientIpAddress=(req,res) => {
    console.log(req.headers)
    let ipAddress= req.headers["True-Client-IP"]??'unKnow'
        let ipCountry= req.headers["CF-IPCountry"]??'unKnow'
    res.json({
        "ipAddress":ipAddress,
        "ipCountry":ipCountry
    })
}
