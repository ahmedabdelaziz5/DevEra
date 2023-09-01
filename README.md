# DevEra

#### DevEra is a social media app that allows programmers to create groups and share posts about technologies they use , make comments and reacts . 

### It is made with the following technologies:
`Node.js` `Express` `Sequelize` `MySQL` `Bcrypt` `Dotenv` `Joi`  `JSONWebToken` `Http-status-codes`

### Installation
To run DevEra, you will need to have NodeJs and the previous npm packcages .

you can install DevEra by running the following command: `node app` .


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
|/signUp|POST|Get user info|
|/getUserById|GET|
|/updateNames|UPDATE|
|/updatePassword|UPDATE|


// rest of documentation -> loading .....
Comment module
Group module
Post module
React module
The comment module allows users to add comments to posts.

The group module allows users to create and join groups.

The post module allows users to create and view posts.

The react module handles the user interface of the app.

The user module handles user authentication and authorization.

The configuration file contains the code to connect to the MySQL database.

