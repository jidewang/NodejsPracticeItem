const db = require('./db.js');
module.exports = {
  getUsers:async ()=> await db.q('select * from users',[]), 
}