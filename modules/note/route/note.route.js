const app = require("express").Router();
const validator  = require("../../../validator/common");
const {addNote,getAllNotes,editNote} = require("../controller/note.controller");
const {addNoteValidation,editNoteValidation} = require("../joi/note.validation");
const upload = require("../../../mediaUpload/upload");
const auth = require("../../../config/Auth");

app.post("/addNote",auth(),upload.single("imageUrl"),validator(addNoteValidation),addNote);
app.get("/getAllNotes",auth(),getAllNotes);
app.put("/editNote",auth(),upload.single("imageUrl"),validator(editNoteValidation),editNote);


module.exports = app;