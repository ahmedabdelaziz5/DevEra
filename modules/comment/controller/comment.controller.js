const Sequelize = require("../../../configration/config")
const commentModel = require("../model/comment.model")
const postModel = require("../../post/model/post.model")
const userModel = require("../../user/model/user.model")
const {getUserById} = require ("../../../modules/user/controller/user.controller.js")
const statuscode = require("http-status-codes");

let counter = 0;
const addComment = async (req, res) => {
    try{
        let { commentAbstract, userId, postId } = req.body;
        let comment = await commentModel.create({ commentAbstract, userId, postId })
        if (comment) {
            counter += 1;
            res.status(200).json({ status: true, message:"comment was added",counter })
        }
        else { res.status(400).json({ status: false, message: " missing data" }) }
    }
    catch(err){ res.status(500).json({ status: false, message: "something went wrong " }) }
}

const postComments = async (req, res) => {
    let { postId } = req.body; 
    try {
        let comments = await commentModel.findAll({
            where: { postId }
        })
        
        if (comments) { res.status(200).json({ status: true, comments, counter,getUserById }) }
        else { res.status(400).json({ status: false }) }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: "Something went wrong" })
    }
}

// const commentCounter = async (req, res) => {
//     res.send({ message: counter });
// }

module.exports = {
    addComment,
    postComments
    // commentCounter,
}