const Sequelize = require("../../../configration/config")
const groupModel = require("../model/group.model")
const{Op}= require("sequelize")
const statuscode = require("http-status-codes");


// static back-end API
const addGroup = async(req,res)=>{
    let {groupName} = req.body;
    let group = await groupModel.create({groupName})
    if (groupName){ res.status(200).json({status : true,group})  } 
    else{ res.status(400).json({status : false})  }
} 

const groupData = async(req,res)=>{
    try{
        let data = await groupModel.findAll({})
        if(data){res.status(200).json({status : true, data : data })}
    }
    catch(err){res.status(500).json({status : false })}
}

const getgroupImage = async(req,res)=>{
}

module.exports = {
    addGroup,
    groupData,
    getgroupImage
}
