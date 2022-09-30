const mongoose = require("mongoose");
const doneTaskSchema = require("../schema/doneTask.schema");

const doneTaskModel = mongoose.model("done task",doneTaskSchema);

module.exports = doneTaskModel ;