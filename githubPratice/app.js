const Koa = require('koa');
const path = require('path'); // 核心对象
const bodyParser = require('koa-bodyparser');
// 创建服务器
let app = new Koa();
const userRouter = require('./routers/user');
// 开启服务器
app.listen(8888,()=>{
  console.log('服务器启动在8888端口');
});
app.use(bodyParser());
app.use(userRouter.routes());
