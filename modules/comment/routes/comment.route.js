const app = require("express").Router();
const {addComment,postComments} = require("../controller/comment.controller") 
const validator = require("../../../validatore/comman.validate");
const {addCommentvalid} = require("../joi/comment.validate")

app.post('/addComment',validator(addCommentvalid),addComment)
app.get('/postComments',postComments)
// app.post('/commentCounter',commentCounter)

module.exports = app;