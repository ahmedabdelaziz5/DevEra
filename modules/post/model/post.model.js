const Sequelize = require("sequelize"); 
const sequelize = require("../../../configration/config")
const Group = require("../../group/model/group.model");
const User = require("../../user/model/user.model");

const Post = sequelize.define("post",{
    postAbstract : {
        type : Sequelize.STRING
    },
    groupId : {
        type : Sequelize.INTEGER,
        references: {
            model: Group,
            key: 'id'
        }
    },
    postImage : {
        type : Sequelize.BLOB('long')
    },
    userName : { 
        type : Sequelize.STRING
    },
    userId : {
        type : Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },

});


module.exports = Post