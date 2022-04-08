const express = require("express")
const app = express();
app.use(express.json())

app.use(require("./modules/user/routes/user.route"))
app.use(require("./modules/comment/routes/comment.route"))
app.use(require("./modules/react/routes/react.route"))
app.use(require("./modules/group/routes/group.route"))
app.use(require("./modules/post/routes/post.route"))


const CreateTables = require("./modules/index")
CreateTables();
app.get('/',(req,res)=>{
res.send("app is running")
})

app.listen(3000)