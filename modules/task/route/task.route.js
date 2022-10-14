const app = require("express").Router();
const {
    addTask,
    getAllTasks,
    getAlLDoneTasks,
    editTask,
    markAsDone,
    deleteTask,
    deletAllTasks,
    deleteAllDoneTasks,
    deleteSingleDoneTask,
    markAsPinned

} = require("../controller/task.controller");
const tokenHandling = require("../../../config/Auth");
const validator = require("../../../validator/common");
const {
    addTaskValidation,
    editTaskValidation,
    markAsPinnedValidation,
    deleteTaskValidaion,
    markAsDoneValidaion,
    deleteSingleDoneTaskValidation
}  = require("../joi/task.validation");

app.post("/addTask",tokenHandling(),validator(addTaskValidation),addTask);
app.put("/markAsPinned",validator(markAsPinnedValidation),markAsPinned);
app.get("/getAllTasks",tokenHandling(),getAllTasks);
app.put("/editTask",validator(editTaskValidation),editTask);
app.delete("/deleteTask",validator(deleteTaskValidaion),deleteTask);
app.delete("/deletAllTasks",tokenHandling(),deletAllTasks);
app.post("/markAsDone",validator(markAsDoneValidaion),markAsDone);
app.get("/getAlLDoneTasks",tokenHandling(),getAlLDoneTasks);
app.delete("/deleteAllDoneTasks",tokenHandling(),deleteAllDoneTasks);
app.delete("/deleteSingleDoneTask",validator(deleteSingleDoneTaskValidation),deleteSingleDoneTask);



module.exports = app ;