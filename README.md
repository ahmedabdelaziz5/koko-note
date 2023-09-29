# koko note : 

#### koko notes is the place where you can add/update/delete your notes , tasks and more  

#### I used these technologies :
![Static Badge](https://img.shields.io/badge/bcrypt-5.1.1-red)
![Static Badge](https://img.shields.io/badge/cloudinary-1.40.0-purple)
![Static Badge](https://img.shields.io/badge/cloudinary_multer-1.0.2-yellow)
![Static Badge](https://img.shields.io/badge/dotenv-16.3.1-yellow)
![Static Badge](https://img.shields.io/badge/cors-2.8.5-0f3)
![Static Badge](https://img.shields.io/badge/express-4.18.2-blue)
![Static Badge](https://img.shields.io/badge/joi-17.8.2-green)
![Static Badge](https://img.shields.io/badge/jsonwebtoken-9.0.1-white)
![Static Badge](https://img.shields.io/badge/mongoose-6.11.5-black)
![Static Badge](https://img.shields.io/badge/multer-1.4.5_lts.1-darkgreen)
![Static Badge](https://img.shields.io/badge/node-19.4.0-darkgreen)
![Static Badge](https://img.shields.io/badge/nodemon-3.0.1-09c)
![Static Badge](https://img.shields.io/badge/node_cron-3.0.2-01F)

# Modules : 

# User module :

#### User schema : 

```JavaScript
{
    userName : {type : String,required : true},
    email : {type : String,required : true},
    password : {type : String,required : true},
}

```

#### User endPoints : 

|Endpoint|Method|Usage
|-------:|-----:|-----
|/signUp|POST|allows you t ocreate account 
|/login|POST|allows you to sign in your account
|/forgetPassword|POST|allows you to ask for a new password
|/resetPassword|PUT|allows you to update/change your password


# Note module :

#### Note schema : 

```JavaScript
{
    noteAbstract : {type : String, reqired : true },
    userMail : {type :String , ref : "user"},
    imageUrl : {type : String, optional : true},
    createdAt : {type : Date },
}

```

#### Note endPoints : 

|Endpoint|Method|Usage
|-------:|-----:|-----
|/addNote|POST|allows you to add a note ( note can contain a photo )
|/getAllNotes|DELETE|allows you to see all your notes 
|/editNote|PUT|allows you to update/edit any note



#### note : all the services is full production using `onrender` cloud services

#### you can run the project using the following command : `npm start`


#### all get requests has a pagination you can send page ( default = 1 ) and limit default = 10 ) in the URL 

