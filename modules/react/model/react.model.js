const Sequelize = require("sequelize"); 
const sequelize = require("../../../configration/config")
const User = require("../../user/model/user.model")
const Post = require("../../post/model/post.model")

const reactModel = sequelize.define("react",{
    isUpVoted : {
      type : Sequelize.BOOLEAN  
    },
    isDownVoted : {
        type : Sequelize.BOOLEAN 
    },
    postId : {
      type : Sequelize.INTEGER,
      references: {
            model: Post,
            key: 'id'
      }
    },
    userId : {
      //allowNull : false,
      type : Sequelize.INTEGER,
      references: {
            model: User,
            key: 'id'
      }  
  },
})


module.exports = reactModel;