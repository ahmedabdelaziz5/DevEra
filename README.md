# DevEra

#### DevEra is a social media app that allows programmers to create groups and share posts about technologies they use , make comments and reacts . 

### It is made with the following technologies:
`Node.js` `Express` `Sequelize` `MySQL` `Bcrypt` `Dotenv` `Joi`  `JSONWebToken` `Http-status-codes`

### Installation
To run DevEra, you will need to have NodeJs and the previous npm packcages .

you can run DevEra by running the following command int the terminal : `node app` .


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

#### User APIs
|Endpoint|Method|
|-------:|-----:
|/addComment|POST|
|/postComments|POST|

// rest of documentation -> loading .....

Group module
Post module
React module

The configuration file contains the code to connect to the MySQL database.

