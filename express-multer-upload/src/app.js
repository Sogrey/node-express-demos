const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const Config = require('./config/config')
// 导入定义的路由
const router = require('./routers/index.js')

// 创建 app 实例
const app = express()

// 开启跨域支持
app.use(cors())
// 解析表单
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/public/', express.static('./public/'))

// 注册路由
app.use('/user', router)

// * 简单测试接口，后面会删掉
app.get('/', (req, res) => {
  res.send('ok')
})

// 开启监听服务
app.listen(Config.httpPort, () => {
  console.log(`express serve running at http://localhost:${Config.httpPort}`);
})