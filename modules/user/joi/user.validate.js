const Joi = require("joi")


module.exports = {
    signUpValid : {
        body : Joi.object().required().keys({
           fullName : Joi.string().empty('').required().messages({
               "string.empty" : "please,enter your fullName",
               "any.required" :  "please,enter your fullName"
           }),
            userName:Joi.string().empty('').required().messages({
            "string.empty": " please,enter your userName",
            "any.required" :  "please,enter your userName"
           }),
            email:Joi.string().empty('').email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required().messages({
            "string.empty": " please,enter your email",
            "any.required" :  "please,enter your email"
           }),
           password:Joi.string().empty('').required().messages({
            "string.empty": " please,enter your password",
            "any.required" :  "please,enter your password"
           }),
           confirmPassword:Joi.string().empty('').required().messages({
            "string.empty": " please,confirmPassword",
            "any.required" :  "please,enter your confirmPassword"
           }),
       })
    },
    loginValid :{
       body : Joi.object().required().keys({
            userName:Joi.string().empty('').required().messages({
            "string.empty": " please,enter your userName",
            "any.required" :  "please,enter your userName"
           }),
            password : Joi.string().required().messages({
                "string.empty": " please,enter your password",
                "any.required" :  "please,enter your password"
            }),
        })
    },
    updateNameValid: {
        body : Joi.object().empty('').required().keys({
            fullName : Joi.string().optional().messages({
                "string.empty" : "please,enter your new fullName",
            }),
             userName:Joi.string().empty('').optional().messages({
             "string.empty": " please,enter your new userName",
            }),
            email:Joi.string().empty('').email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .optional().messages({
            "string.empty": " please,enter your new email",
           }),
           id:Joi.string().required().empty('').messages({
            "string.empty": " Invalid data",
            "any.required" :  "please,enter the id "
           })
    })
  },
  updatePasswordValid :{
  body : Joi.object().required().keys({
        password:Joi.string().empty('').required().messages({
        "string.empty": " please,enter your new password"
       }),
        confirmPassword:Joi.string().empty('').required().messages({
        "string.empty": " please,confirmPassword"
       }),
       id:Joi.string().required().empty('').messages({
        "string.empty": " Invalid data",
        "any.required" :  "please,enter the id "

       })
   })
}
     
}