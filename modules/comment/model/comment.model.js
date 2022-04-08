const Sequelize = require("sequelize"); 
const sequelize = require("../../../configration/config")
const User = require("../../user/model/user.model")
const Post = require("../../post/model/post.model")

const commentModel = sequelize.define("comment",{
    commentAbstract : {
        type : Sequelize.STRING  
    },
    userId: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    userName : {
        type : Sequelize.STRING  
    },
    postId: {
        type: Sequelize.INTEGER,
        references: {
            model: Post,
            key: 'id'
        }
    },
})


module.exports = commentModel 