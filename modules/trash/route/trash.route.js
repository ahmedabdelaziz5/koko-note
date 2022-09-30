const app = require("express").Router();
const tokenHandling = require("../../../config/Auth");

const{
    moveNoteToTrash,
    getAllNotesInTrash,
    removeAllTrash,
} = require("../controller/trash.controller");

app.post("/moveNoteToTrash",moveNoteToTrash);
app.get("/getAllNotesInTrash",tokenHandling(),getAllNotesInTrash);
app.delete("/removeAllTrash",tokenHandling(),removeAllTrash);

module.exports = app;