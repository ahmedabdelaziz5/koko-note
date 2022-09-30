const mongoose = require("mongoose");
const trashSchema = require("../schema/trash.schema");

const trashModel = mongoose.model("trash",trashSchema);

module.exports = trashModel ;