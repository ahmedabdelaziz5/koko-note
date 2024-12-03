const mongoose = require("mongoose");

const databaseConnection = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("DB config is done ...");
        return true
    }
    catch (error) {
        console.log({
            errorType: "Database Error",
            errorMessage: error.message,
            errorStatement: error 
        })
    }
};

module.exports = databaseConnection;
