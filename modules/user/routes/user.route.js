const app = require("express").Router();
const {login,signUp,updateNames,updatePassword,updateImage,getUserById} = require("../controller/user.controller");
const validator = require("../../../validatore/comman.validate");
const {signUpValid, loginValid, updateNameValid,updatePasswordValid} = require("../joi/user.validate")

app.post("/login",validator(loginValid),login);
app.post("/signUp",validator(signUpValid),signUp);
app.get('/getUserById',getUserById)
app.put("/updateNames",validator(updateNameValid),updateNames);//+image
app.put("/updatePassword",validator(updatePasswordValid),updatePassword);
app.put("/updateImage",validator(signUpValid),updateImage);


module.exports = app;
