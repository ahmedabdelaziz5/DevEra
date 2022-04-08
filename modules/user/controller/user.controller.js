const Sequelize = require("../../../configration/config")
const User = require("../model/user.model")
const { Op } = require("sequelize");
const statuscode = require("http-status-codes");
const bcrypt = require('bcrypt');
const StatusCodes  = require("http-status-codes");
const saltRounds = 5;

const login = async (req, res) => {
    const { userName, password } = req.body;
    try {
        let user = await User.findOne({ 
            where:{userName} ,
            attributes : ['id','email','fullName','userName']
        })
        let data = await User.findOne({where:{userName}})
        if (!user) {
            res.status(400).json({ message: "Please enter a valid userName" })
        }
        else {
            let match = await bcrypt.compare(password, data.password);
            if (match) {
                res.status(200).json({ message: "Success",user});
            }
            else {
                res.status(422).json({ message: "This password is invalid" })
            }
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
}

const signUp = async (req, res) => {
    try {
        let { fullName, userName, email, password, confirmPassword } = req.body
        let user = await User.findOne({where:{userName}})
        if(user){res.status(400).json({status:false, message:"you already have an email"})}
        else if (password == confirmPassword) {
            let hashedPassword = await bcrypt.hash(password,saltRounds);
            await User.create({ fullName, userName, email, password :hashedPassword });
            res.status(200).json({ status: true, })
        } else { res.status(400).json({ status: false, message: "missing data in this request" }) }
    } catch (err) { res.status(500).json({ status: false, message:"something went wrong" }) }
}

const updateNames = async (req, res) => {
    try {
        let { fullName, userName, email, id } = req.body;
        let user = User.update(
            { fullName, userName, email },
            { where: { id } }
        )
        if(user){{res.status(200).json({ status: true, message:"user updated" }) }}
    }
    catch (err) { res.status(500).json({ status: false, message : "something went wrong" }) }
}

const updatePassword = async (req, res) => {
    try{
        let {password,confirmPassword,id} = req.body;
        if(password == confirmPassword){
            let hashedPassword = await bcrypt.hash(password,saltRounds);
            let data = User.update(
                {password : hashedPassword},
                { where: {id} }
            )
            res.status(200).json({status:true,message:"password updated"})
        }
        else{
            res.status(400).json({status:false ,
                 message :"password and connfirm password aren`t the same"})
        }
    }
    catch(err){res.status(500).json({status :false, message:"something went wrong",error})}
}
const getUserById = async (req,res)=>{
    let {id} = req.body
let userName = await User.findOne({
    where : {id},
    attributes : ['userName']
})
res.send(userName)
}

const updateImage = async (req, res) => {

}
//$2b$05$ZTaImCTJg/217YSwte55uOKWr59u4yEPKqHPZICufnN

module.exports = {
    login,
    signUp,
    updateNames,
    updatePassword,
    updateImage,
    getUserById
}
