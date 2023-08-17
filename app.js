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

const http = require("http");
const server = http.createServer(app);

server.listen(process.env.PORT || 3000, process.env.LOCAL_HOST || "0.0.0.0", () => {
    console.log(`Server is up and runing on port ${process.env.PORT}!`)
})
