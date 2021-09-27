//获取客户端的ip地址
module.exports.getClientIpAddress=(req,res) => {
    console.log(req.headers)
    let ipAddress= req.headers["cf-connecting-ip"]??'unKnow'
        let ipCountry= req.headers["cf-ipcountry"]??'unKnow'
    res.json({
        "ipAddress":ipAddress,
        "ipCountry":ipCountry
    })
}
