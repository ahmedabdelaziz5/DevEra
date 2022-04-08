const Sequelize = require("../../../configration/config");
const reactModel = require("../model/react.model");
const postModel = require("../../post/model/post.model");
const User = require("../../user/model/user.model");
const statuscode = require("http-status-codes");

let upCounter = 0 , downCounter = 0;
let isUpVoted = false , isDownVoted = false; 

const upVote = async(req,res)=>{
try{
    let{userId,postId} = req.body;
    let reactStatus = await reactModel.findOne({
        where : {
            postId : req.body.postId,
            userId : req.body.userId
    },
        attributes : ['isUpVoted'],
        attributes : ['isDownVoted'],
    })
    if(reactStatus){
        if(reactStatus.isDownVoted == 1){
        upCounter+=1
         downCounter-=1
         isUpVoted = 1
         isDownVoted=0 
         await reactModel.update(
            {isUpVoted ,isDownVoted},
            {where:{
                postId : req.body.postId,
                userId : req.body.userId
            },
        })
        res.status(statuscode.OK).json({status : true,isDownVoted,isUpVoted,upCounter,downCounter})
    }
    else{
        upCounter-=1
        isUpVoted = 0
        await reactModel.destroy(
            {where:{
                postId : req.body.postId,
                userId : req.body.userId
            },
        })
        res.status(200).json({status : true,isDownVoted,isUpVoted,upCounter,downCounter})
    }
}
else
    {        
        isUpVoted = 1;
        isDownVoted = 0;
        upCounter+=1; 
        reactModel.create({userId,postId,isUpVoted,isDownVoted})
        res.status(statuscode.OK).json({status : true,isDownVoted,isUpVoted,upCounter,downCounter})        
    };

}catch(err){res.status(500).json({status : false, message : "something went wrong"})        
}
}
    
const downVote = async(req,res)=>{
    try{
        let{userId,postId} = req.body;
        let reactStatus = await reactModel.findOne({
            where : {
                postId : req.body.postId,
                userId : req.body.userId
        },
            attributes : ['isUpVoted'],
            attributes : ['isDownVoted'],
        })
        if(reactStatus){
            if(reactStatus.isUpVoted == 1){
            upCounter-=1
             downCounter+=1
             isUpVoted = 0
             isDownVoted=1
             await reactModel.update(
                {isUpVoted ,isDownVoted},
                {where:{
                    postId : req.body.postId,
                    userId : req.body.userId
                },
            })
            res.status(200).json({status : true,isDownVoted,isUpVoted,upCounter,downCounter})        
        }
        else{
            downCounter-=1
            isDownVoted = 0
            await reactModel.destroy(
                {where:{
                    postId : req.body.postId,
                    userId : req.body.userId
                },
            })
            res.status(200).json({status : true,isDownVoted,isUpVoted,upCounter,downCounter})        
        }
        }
    else
        {        
            isUpVoted = 0;
            isDownVoted = 1;
            downCounter+=1; 
            let downVote = reactModel.create({userId,postId,isUpVoted,isDownVoted})
            res.status(200).json({status : true,isDownVoted,isUpVoted,upCounter,downCounter})        
            
        }
    }catch(err){res.status(500).json({status : false,isDownVoted,isUpVoted,upCounter,downCounter})     }
}

//static Back-End method 
const postReacts = async(req,res)=>{
    let {postId} = req.body;
    let reacts = await reactModel.findAll({
        where : {postId},
        attributes : ['userId','isUpVoted','isDownVoted']
    })
    if (reacts){ res.status(200).json({status : true,reacts :reacts})  }
    else { res.status(400).json({status : false , message : "missing data"})}
}

module.exports = {
    upVote,
    downVote,
    postReacts
} 


