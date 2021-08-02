//导入express模块
const express = require('express');
// 创建路由对象
const router = express.Router();

//导入客户端信息处理handler模块
const clientInfo_Handler = require('../router_handler/clientInfo');

//获取客户端ip信息
router.get('/getIpAddress',clientInfo_Handler.getClientIpAddress)


// 向外共享路由对象
module.exports = router;