const sequelize = require("../configration/config")

let CreateTables =()=>{
    sequelize.sync().then(res=>{
        console.log(res)

    }).catch(err=>console.log(err))
};

module.exports = CreateTables