const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    
    title : {type : String, required : true },
    content : {type : String, required : true , default : "descreption"},
    isPined : {type : Boolean, required : true , default : false },
    userMail : {type : String, required : true },
});

module.exports = taskSchema ;


