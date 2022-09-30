const mongoose = require("mongoose");

const connection = ()=>{
    return mongoose.connect(
        process.env.CONNECTION_STRING,
        {
            useNewUrlParser:true ,
            useUnifiedTopology:true
        })
        // .then(()=>{console.log("db configration done ...")})
}

module.exports = connection;