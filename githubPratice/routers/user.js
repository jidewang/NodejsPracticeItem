const Router = require('koa-router');
let userRouter = new Router();
let userController = require('../controllers/user');

userRouter
  .get('/', async ctx => {
    ctx.body = {
      code: '200',
      msg: "sucess"
    }
  }).post('/creatTable', userController.creatTable)
  ;

module.exports = userRouter;