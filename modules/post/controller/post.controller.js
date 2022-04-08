const Sequelize = require("../../../configration/config");
const Post = require("../model/post.model");
const reactModel = require("../../react/model/react.model");
const commentModel = require("../../comment/model/comment.model")
const statuscode = require("http-status-codes");


const addPost = async(req,res)=>{
    let {userId,userName,groupId,postAbstract} = req.body;
    try{
        if( {userName, postAbstract} ){ 
            await Post.create({userId,userName,groupId,postAbstract}); 
            res.status(statuscode.OK).json({status : true})
    
        }else{res.status(statuscode.BAD_REQUEST).json({status : false})}
    }
    catch(err){console.log(err)}
}  
// abstract reacts comments  1 
// donia 1 ahmed x1 
// donia ok
// ahmed xx 
const homePage = async(req,res)=>{
    let fullPosts = [];
    try{ let posts = await Post.findAll({})
    const {id} = req.body;
    for(let i =0;i<posts.length;i++){
        let react = await reactModel.findAll({
            where :{
                postId : posts[i].id,
                userId : id
            }
        })

        let userReact;
        if (react.length==0){userReact=-1}
        else if(react[0].isUpVoted==true){
            userReact=1;
        }else if(react[0].isDownVoted==false){
            userReact=0;
        }
        let reactCount =  await reactModel.findAll({
            where :{
                postId : posts[i].id,
            }
        })
        let upVoteCounter =  await reactModel.findAll({
            where :{
                postId : posts[i].id,
                isUpVoted : true
            }
        })
        let downVoteCounter =  await reactModel.findAll({
            where :{
                postId : posts[i].id,
                isDownVoted : true
            }
        })
        fullPosts.push({post:posts[i],userReact,downVoteCounter:downVoteCounter.length,upVoteCounter:upVoteCounter.length})

        
    }
    let data = {message : fullPosts}
    res.send({data : data})}

    catch(err){console.log(err)}
};

const groupPage = async(req, res)=>{
    let groupPosts = [];
    try{ 
        let {groupId,id} = req.body
        let posts = await Post.findAll({where:{groupId}})
    for(let i =0;i<posts.length;i++){
        let react = await reactModel.findAll({
            where :{
                postId : posts[i].id,
                userId : id
            }
        })
        let userReact;
        if (react.length==0){userReact=-1}
        else if(react[0].isUpVoted==true){
            userReact=1;
        }else if(react[0].isDownVoted==false){
            userReact=0;
        }
        let reactCount =  await reactModel.findAll({
            where :{
                postId : posts[i].id,
            }
        })
        let upVoteCounter =  await reactModel.findAll({
            where :{
                postId : posts[i].id,
                isUpVoted : true
            }
        })
        let downVoteCounter =  await reactModel.findAll({
            where :{
                postId : posts[i].id,
                isDownVoted : true
            }
        })
        groupPosts.push({post:posts[i],userReact,downVoteCounter:downVoteCounter.length,
            upVoteCounter:upVoteCounter.length})
    }
    //res.send({message : groupPosts,})
        res.status(200).json({status:true,groupPosts:groupPosts})
}
    catch(err){console.log(err)}
}

const ProfilePosts = async (req,res)=>{
    let userPosts = [];
        try{ 
            let {userId} = req.body
            let posts = await Post.findAll({where:{userId}})
        for(let i =0;i<posts.length;i++){
            let reacts = await reactModel.findAll({
                where :{
                    postId : posts[i].id
                }
            })
            let commnets = await commentModel.findAll({
                where :{
                    postId : posts[i].id
                }
            })
            userPosts.push({post:posts[i],reacts,commnets})
        }
        res.send({data : userPosts})}
        catch(err){console.log(err)}
}

module.exports= {
    addPost,
    homePage,
    groupPage,
    ProfilePosts
}



