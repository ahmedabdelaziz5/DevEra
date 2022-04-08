const Joi = require("joi")

module.exports = {
    addPostvalid : {
        body : Joi.object().required().keys({

            userId : Joi.required().messages({
               "any.required" :  "please,enter the userId"
           }),

           userName:Joi.string().empty('').required().messages({
            "string.empty": " please,enter the userName",
            "any.required" :  "please,enter the userName"
           }),

           groupId:Joi.required().messages({
            "any.required" :  "please,enter your groupId"
           }),

           postAbstract:Joi.string().empty('').required().messages({
            "string.empty": " please,enter the postAbstract",
            "any.required" :  "please,enter your postAbstract"
           }),

       })
    }
}