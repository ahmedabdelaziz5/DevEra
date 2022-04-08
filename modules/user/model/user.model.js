const Sequelize = require("sequelize"); 
const sequelize = require("../../../configration/config")


const User = sequelize.define("user",{
    fullName : {
        type : Sequelize.STRING
    },
    email : {
        type : Sequelize.STRING
    },
    userName : {
        type : Sequelize.STRING
    },
    password : {
        type : Sequelize.STRING
    },
})


module.exports = User