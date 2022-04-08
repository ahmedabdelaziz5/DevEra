const app = require("express").Router();
const {groupData,getgroupImage,addGroup} = require("../controller/group.controller") 

app.get('/groupData',groupData)
app.post('/getgroupImage',getgroupImage)
app.post("/addGroup",addGroup)
module.exports = app;