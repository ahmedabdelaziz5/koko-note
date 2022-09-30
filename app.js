const express = require("express");
const app = express();
app.use(express.json());

require("dotenv").config(); 

const dbConnection = require("./config/db.config");
dbConnection();

app.use(require("./modules/user/route/user.route"));
app.use(require("./modules/note/route/note.route"));
app.use(require("./modules/task/route/task.route"));
app.use(require("./modules/trash/route/trash.route"));

let flushTrashMonthly = require("./cron servies/monthlyDelete");
flushTrashMonthly();

app.listen(process.env.PORT);