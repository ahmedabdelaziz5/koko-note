const joi = require("joi");

module.exports  = {

    addNoteValidation  :  {
    body : joi.object().required().keys({
            noteAbstract : joi.string().required().messages({
                "string.empty" : "you should enter a note !"
            })
        }),
    },

    editNoteValidation  :  {

        body : joi.object().required().keys({

            noteId : joi.string().required().messages({
                "string.empty" : "you should send noteId !"
            }),

            noteAbstract : joi.string().optional().messages({
                "string.empty" : "you should enter a note !"
            })

        }),
    }
};