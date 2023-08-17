const mongoose = require("mongoose");

const connection = ()=>{
    mongoose.set("strictQuery", false);
    return mongoose.connect(
        process.env.CONNECTION_STRING,
        {
            useNewUrlParser:true ,
            useUnifiedTopology:true
        })
        .then(()=>{console.log("DB config is done ...")})
}

module.exports = connection;