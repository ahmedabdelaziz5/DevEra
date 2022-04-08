const app = require("express").Router();
const {addPost,homePage,groupPage,ProfilePosts} = require("../controller/post.controller");
const validator = require("../../../validatore/comman.validate");
const {addPostvalid} = require("../joi/post.validate")

app.post("/addPost",validator(addPostvalid),addPost);
app.get("/homePage",homePage);
app.get("/groupPage",groupPage);
app.get("/ProfilePosts",ProfilePosts);



module.exports = app;