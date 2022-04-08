const sequelize = require("sequelize")
const Sequelize = new sequelize ("DevEra","root","",{
    host:"localhost",
    dialect: "mysql" // type of database
});

module.exports = Sequelize;