const mongoose = require("mongoose");

const doneTaskSchema = new mongoose.Schema({
    title : {type : String, required : true },
    content : {type : String, required : true },
    userMail : {type : String, required : true },

});

module.exports = doneTaskSchema ;


