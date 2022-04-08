const Sequelize = require("sequelize"); 
const sequelize = require("../../../configration/config")

const Group = sequelize.define("group",{
    groupName : {
        type : Sequelize.STRING  
    }
})

module.exports = Group 
