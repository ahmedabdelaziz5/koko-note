const mongoose = require("mongoose");
const taskSchema = require("../schema/task.schema");

const taskModel = mongoose.model("task",taskSchema);

module.exports = taskModel ;