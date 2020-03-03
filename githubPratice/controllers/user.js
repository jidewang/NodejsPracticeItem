const userModel = require('../models/user');
module.exports = {
  creatTable:async (ctx,next)=>{
    console.log(ctx.request.body);
    ctx.body = {
      code: '200',
      msg: "sucess"
    }
      // let users = await userModel.getUsers();
      // console.log(users);
      // ctx.render('register',{users});
  }
}