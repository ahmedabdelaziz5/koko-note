const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 6;


const userSchema = new mongoose.Schema({
    userName : {type : String,required : true},
    email : {type : String,required : true},
    password : {type : String,required : true},
})

userSchema.pre("save",async function(next){
    this.password = await bcrypt.hash(this.password,saltRounds);
    next();
});

module.exports = userSchema;