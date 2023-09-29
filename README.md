# koko note : 

#### koko notes is the place where you can add/update/delete your notes , tasks and more  

#### I used these technologies :
![Static Badge](https://img.shields.io/badge/bcrypt-5.1.1-red)
![Static Badge](https://img.shields.io/badge/cloudinary-1.40.0-purple)
![Static Badge](https://img.shields.io/badge/cloudinary_multer-1.0.2-yellow)
![Static Badge](https://img.shields.io/badge/16.3.1-dotenv-yellow)
![Static Badge](https://img.shields.io/badge/cors-2.8.5-0f3)
![Static Badge](https://img.shields.io/badge/4.18.2-express-blue)
![Static Badge](https://img.shields.io/badge/17.8.2-joi-green)
![Static Badge](https://img.shields.io/badge/9.0.1-jsonwebtoken-white)
![Static Badge](https://img.shields.io/badge/6.11.5-mongoose-black)
![Static Badge](https://img.shields.io/badge/1.4.5_lts.1-multer-darkgreen)
![Static Badge](https://img.shields.io/badge/19.4.0-node-darkgreen)
![Static Badge](https://img.shields.io/badge/3.0.1-nodemon-09c)
![Static Badge](https://img.shields.io/badge/3.0.2-node_cron-01F)



#### The objective is to ensure accurate recording, computation, and production of sales reports, providing reliable insights into business performance. By achieving these goals, the project aims to enhance mentorint , recording , keep track of products , bussiness and inventory management processes

# User module :

#### user schema : 

```JavaScript
{
    email  : { type : String, required : true } , 
    bussinesName  : { type : String, required : true } , 
    inventoryName  : { type : String, required : true  } , 
    userName  : { type : String, required : true  } , 
    password  : { type : String, required : true  } , 
    bussinesIndustry : {type : String , required : true },
    isVerified : {type : Boolean , default : false },
}

```

#### User endPoints : 

|Endpoint|Method|Usage
|-------:|-----:|-----
|/signUp|POST|allows you t ocreate account 
|/login|POST|allows you to sign in your account
|/forgetPassword|POST|allows you to ask for a new password
|/changePassword|PATCH|allows you to update/change your password
|/editProfile|PATCH|allows you to edit/update youe prodile data
|/verifyAccount|GET|allows you to send a verification mail after creating account


# Product module :

#### Product schema : 

```JavaScript
{
    userName : {type : String , required : true},
    userId : {type : mongoose.Types.ObjectId , required : true },
    inventoryName  : { type : String, required : true  } , 
    productName : {type : String, required : true  },
    productSerialNumber : {type : String, required : true  },
    productQuantity : {type : Number, required : true  },
    limit : {type : Number, required : true  },
    productCategory : {type : String, required : true  },
    countryOfProductOrigin : {type : String, required : true  },
    productPrice : {type : Number, required : true  },
    addedAt : {type : Date, required : true},
    islimited : {type : Boolean , default : false }
}

```

#### Product endPoints : 

|Endpoint|Method|Usage
|-------:|-----:|-----
|/addProduct|POST|allows you to add your products
|/deleteProduct/:productId|DELETE|allows you to delete any product
|/updateProduct/:productId|PUT|allows you to update/edit any product
|/getSpecificCategory/:categoryName|GET|allows you to get all products that belongs a specific category
|/getLimitedItems|GET|allows you to get all the limited products which need to be refiled
|/getAllProducts|GET|allows you to get all the products you have in your inventory system
|/getSpecificProduct/:productId|GET|allows you to search for any product




#### note : all the services is full production using `onrender` cloud services

#### you can run the project using the following command : `npm start`


#### all get requests has a pagination you can send page ( default = 1 ) and limit default = 10 ) in the URL 

