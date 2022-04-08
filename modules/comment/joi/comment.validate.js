const Joi = require("joi")

module.exports = {
    addCommentvalid : {
        body : Joi.object().required().keys({
            commentAbstract : Joi.string().empty('').required().messages({
               "string.empty" : "please,enter your comment",
               "any.required" :  "please,enter your comment"
           }),
           userId:Joi.required().messages({
            "string.empty": " please,enter the userId",
            "any.required" :  "please,enter the userId"
           }),
           postId:Joi.required().messages({
            "string.empty": " please,enter the postId",
            "any.required" :  "please,enter your postId"
           }),
       })
    }
}