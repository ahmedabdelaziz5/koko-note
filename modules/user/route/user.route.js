const app = require('express').Router();
const {signUp,login,verfiyEmail,forgetPassword,resetPassword} = require("../controller/user.controller");
const {loginValidation,signUpValidation,forgetPasswordValidation,resetPasswordValidation} = require("../joi/user.validation");
const validator = require("../../../validator/common");

app.post("/signUp",validator(signUpValidation),signUp);
app.post("/login",validator(loginValidation),login);
app.post("/forgetPassword",validator(forgetPasswordValidation),forgetPassword);
app.put("/resetPassword",validator(resetPasswordValidation),resetPassword);
app.get("/verfiyEmail",verfiyEmail);



module.exports = app;
