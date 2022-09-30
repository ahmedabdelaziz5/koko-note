const joi = require("joi");

module.exports  = {

    addTaskValidation  :  {
    body : joi.object().required().keys({

            title : joi.string().required().empty().messages({
                "string.empty" : "you should enter a title !"
            }),

            content : joi.string().optional().messages({
                // no message 
            })

        }),
    },

    markAsPinnedValidation  :  {

        body : joi.object().required().keys({

            taskId : joi.string().required().messages({
                // no message 
            }),

        }),
    },

    editTaskValidation  :  {
        body : joi.object().required().keys({

                taskId : joi.string().required().messages({
                    // no message 
                }),

                title : joi.string().optional().messages({
                    // no message 
                }),

                content : joi.string().optional().messages({
                   // no message 
                }),

            }),
    },

    deleteTaskValidaion : {
        body : joi.object().required().keys({
            taskId : joi.string().required().empty().messages({
                "string.empty" : "send taskId with req !"
            })
        })
    },

    markAsDoneValidaion : {
        body : joi.object().required().keys({
            taskId : joi.string().required().empty().messages({
                "string.empty" : "send taskId with req !"
            })
        })
    },

    deleteSingleDoneTaskValidation : {
        body : joi.object().required().keys({
            taskId : joi.string().required().empty().messages({
                "string.empty" : "send taskId with req !"
            })
        })
    },
    
};