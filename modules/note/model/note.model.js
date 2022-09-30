const mongoose = require("mongoose");
const noteSchema = require("../schema/note.schema");

const noteModel = mongoose.model("note",noteSchema);

module.exports = noteModel ;