const mongoose = require("mongoose");

const trashSchema = new mongoose.Schema({
    noteAbstract : {type : String, reqired : true },
    userMail : {type :String , ref : "user"},
    imageUrl : {type : String, optional : true},
    createdAt : {type : Date, ref : "note"},
}) 

module.exports = trashSchema ;   