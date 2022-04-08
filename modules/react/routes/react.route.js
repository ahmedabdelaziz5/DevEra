const app = require("express").Router();
const {upVote,downVote,postReacts} = require("../controller/react.controller")

app.post('/upVote',upVote);
app.post('/downVote',downVote)
app.get("/postReacts",postReacts)
module.exports = app;