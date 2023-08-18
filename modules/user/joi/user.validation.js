const joi = require("joi");

module.exports  =  {

    loginValidation : {
        body  : joi.object().required().keys({

            email : joi.string().required().email().messages({
                "string.empty" : "you must enter your e-mail ",
                "string.email" : "must be an e-mail"
            }),
    
            password : joi.string().required().messages({
                "string.empty" : "you must enter your e-mail ",
            }),
        })

    },

    signUpValidation : {

        body  : joi.object().required().keys({
            userName : joi.string().required().messages({
                "string.empty" : "you must enter your user name",
            }),
    
            email : joi.string().required().email().messages({
                "string.empty" : "you must enter your e-mail ",
            }),
    
            password : joi.string().required().messages({
                "string.empty" : "you must enter your password ",
            }),
    
            confirmPassword : joi.string().required().messages({
                "string.empty" : "you must enter the confirm password ",
            }),

        })

        
    }, 

    forgetPasswordValidation : {
        body  : joi.object().required().keys({
            
            userMail  : joi.string().required().email().messages({
                "string.empty" : "you must enter your e-mail ",
            }),

        })
    
    }, 
    
    resetPasswordValidation : {

        body  : joi.object().required().keys({

            password : joi.string().required().messages({
                "string.empty" : "you must enter your password ",
            }),
    
            confirmPassword : joi.string().required().messages({
                "string.empty" : "you must enter the confirm password ",
            }),

        })
    },
    
};


