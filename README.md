# DevEra

#### DevEra is a social media app that allows programmers to create groups and share posts about technologies they use , make comments and reacts . 

#### you can find UI , ERD model and postman collection here : `https://drive.google.com/drive/folders/1msTwzIOWRYVEpFRxN8CAHwEBGXvuXWy1?usp=sharing`

### It is made with the following technologies:
`Node.js` `Express` `Sequelize` `MySQL` `Bcrypt` `Dotenv` `Joi`  `JSONWebToken` `Http-status-codes`

### Installation
To run DevEra, you will need to have NodeJs and the previous npm packcages .

you can run DevEra by running the following command int the terminal : `node app` .

The configuration file contains the code to connect to the MySQL database.

# app modules 

## User module :

#### User schema 
```JavaScript
{
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
    }
}
```

#### User APIs
|Endpoint|Method|
|-------:|-----:
|/login|POST|
|/signUp|POST|
|/getUserById|GET|
|/updateNames|UPDATE|
|/updatePassword|UPDATE|

## Comment module :

#### Comment schema 
```JavaScript
{
    commentAbstract : {
        type : Sequelize.STRING  
    },
    userId: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    userName : {
        type : Sequelize.STRING  
    },
    postId: {
        type: Sequelize.INTEGER,
        references: {
            model: Post,
            key: 'id'
        }
    },
}
```

#### Comment APIs
|Endpoint|Method|
|-------:|-----:
|/addComment|POST|
|/postComments|POST|


## Group module :

#### Group schema 
```JavaScript
{
    groupName : {
        type : Sequelize.STRING  
    }
}
```

#### Group APIs
|Endpoint|Method|
|-------:|-----:
|/groupData|GET|
|/addGroup|POST|

## Post module :

#### Post schema 
```JavaScript
{
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

}
```

#### Post APIs
|Endpoint|Method|
|-------:|-----:
|/addPost|POST|
|/homePage|GET|
|/groupPage|GET|
|/ProfilePosts|GET|

// rest of documentation -> loading .....

## React module :

#### React schema 
```JavaScript
{
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
}
```

#### React APIs
|Endpoint|Method|
|-------:|-----:
|/upVote|POST|
|/downVote|POST|
|/postReacts|GET|



