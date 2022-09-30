var cron = require('node-cron');
const {monthlyDelete } = require("../modules/trash/controller/trash.controller");


let flushTrashMonthly =  ()=>{
  cron.schedule(' * */24 * * *', () => {
  monthlyDelete()
});
};

module.exports = flushTrashMonthly;