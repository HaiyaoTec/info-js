//导入express模块
const express = require('express');
//导入跨域访问模块
const cors = require('cors');
// 创建 express 的服务器实例
const app = express();

//导入校验表单数据的模块
// const joi = require('@hapi/joi')
//Write you code
//将cors添加到全局中间件解决跨域访问的问题
app.use(cors());
//配置解析 `application/x-www-form-urlencoded` 格式的表单数据的中间件：
app.use(express.urlencoded({extended: false}));
//配置解析 json 格式的表单数据的中间件：
// 通过 express.json() 这个中间件，解析表单中的 JSON 格式的数据
// app.use(express.json());
//注册全局中间件
// 响应数据的中间件
app.use(function (req, res, next) {

    // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
    res.cc = function (err, status = 1) {
        res.send({
            // 状态
            status,
            // 状态描述，判断 err 是 错误对象 还是 字符串
            message: err instanceof Error ? err.message : err,
        })
    }
    next()
})


// require request-ip and register it as middleware
//获取ip地址的包
let requestIp = require('request-ip');
app.use(requestIp.mw())

// on localhost you'll see 127.0.0.1 if you're using IPv4
// or ::1, ::ffff:127.0.0.1 if you're using IPv6



//获取ip路由
const clientInfoRouter = require('./router/clientInfo')
app.use('/api', clientInfoRouter)
// 托管静态资源文件
app.use(express.static('./public'))

//注册全局错误级别中间件
//错误中间件
app.use((err, req, res, next) => {
    //未知错误
    res.cc(err);
})

//开启服务器
app.listen(80, () => {
    console.log('api server running at http://127.0.0.1:80')
})
