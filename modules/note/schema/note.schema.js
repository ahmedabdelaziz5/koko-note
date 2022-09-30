const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    noteAbstract : {type : String, reqired : true },
    userMail : {type :String , ref : "user"},
    imageUrl : {type : String, optional : true},
    createdAt : {type : Date },
});

module.exports = noteSchema ;