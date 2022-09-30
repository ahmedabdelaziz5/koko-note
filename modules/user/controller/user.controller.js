const userModel  = require("../model/user.model");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const saltRounds = 6;
var cron = require('node-cron');



const login = async(req,res)=>{

    try{
        const {email,password} = req.body;
        let user = await userModel.findOne({email});
    
        if(!user)
        {
            res.status(401).json({
                message : "you should register first "
            });
        }

        else
        {
            const passwordMatch = await bcrypt.compare(password,user.password);
            if(passwordMatch)
            {
                var token = jwt.sign({email : user.email},process.env.SECRET_TOKEN);
                res.status(200).json({
                    message : "success",  
                    token              
                });
                
            }
            else 
            {
                res.status(401).json({
                    message : "incorrct password "
                });
            }
        }
    }
    catch(err){
        res.status(500),
        res.send({
            message : "error",
            err
        })
    };
};

const signUp = async(req,res)=>{
    try{
        const {userName,email,password,confirmPassword} = req.body;
        const user = await userModel.findOne({email});
        if(user)
        {
            res.status(400).json({
                message : "this email already registerd"
            })
        }

        else
        {
            let sentMail = email;
            if(password!=confirmPassword){
                res.send("password and confirm passowrd must be the same ")
            }
            else{
                let newUser = new userModel({
                    userName : `${userName}` ,
                    email  : `${email}`,
                    password: `${password}`,
                });
                await newUser.save();
                let transporter = nodemailer.createTransport({
                        service : 'hotmail',
                        auth: {
                        user:process.env.USER_NAME , 
                        pass: process.env.PASSWOARD, 
                    },
                  });
                  
                  let token = jwt.sign({email},process.env.SECRET_TOKEN);
    
                  let mailOptions  = {
                    from: '"koko note team" <ahmedabdelaziz6019@hotmail.com>', 
                    to: `${sentMail}`,
                    subject: "email verification", 
                    text: "e-mail verification !",
                    html: `<b> <a href= 'http://localhost:8888/verfiyEmail?token=${token}' target= '_blank'>verify</b>`, 
                  };
            
                transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    res.json({message : "success but couldnt send a verfication mail",error},)
                } 
                else {
                    res.json({message : "success and a verfication mail was sent"})
                }
           });
        }           
    }
}

    catch(err)
    {
        res.status(500),
        res.send({
            message : "error",
            err
        })
    };

};

const verfiyEmail = async(req,res)=>{
    try{
        let {token} = req.query
        let decodedMail = jwt.verify(token,process.env.SECRET_TOKEN)
        let user = userModel.findOne(decodedMail)
        if(user){
            res.send("verified ... ")
        }
        else{
            res.send("not verified ... ")
        }
    }
    catch(err){
        res.status(500).json({
            message : "error",
            err
        })
    }

};

const forgetPassword = async(req,res)=>{
    try{
        const {userMail}  = req.body;
        let barerToken = req.headers.authorization;
        let token = barerToken.split(" ")[1];
        let isFound = userModel.find({userMail});
        if(isFound){
            let transporter = nodemailer.createTransport({
                service : 'hotmail',
                auth: {
                user:process.env.USER_NAME , 
                pass: process.env.PASSWOARD, 
            },
          });
          let mailOptions  = {
            from: '"koko note team" <ahmedabdelaziz6019@hotmail.com>', 
            to: `${userMail}`,
            subject: "forget passowrd access", 
            text: "forget passowrd ",
            html: `<b> <a href= 'http://localhost:8888/resetPassword?token=${token}' target= '_blank'>reset</b>`, 
            };
            
            transporter.sendMail(mailOptions, function(error, info){
            if (error) {
            res.json({message : "success but couldnt send the reset password mail",error},)
            } 
            else {
            res.json({message : "success and the reset password mail was sent"})
            }
            });
    }
        else{
            res.status(200).json({
                message : "you must register first "
            })
        }
    } 
   catch(error){
    res.status(500).json({message : "error",err});
   }
};

const resetPassword = async(req,res)=>{
    try{
        let barerToken= req.headers.authorization;
        let token = barerToken.split(" ")[1];
        let decodedMail = jwt.verify(token,process.env.SECRET_TOKEN)
        const {password,confirmPassword}  = req.body;
        if(password!=confirmPassword){
            res.send("password and confirm passowrd must be the same ")
        }
        else{
            let newPassword = await bcrypt.hash(confirmPassword,saltRounds);
            await userModel.findOneAndUpdate({decodedMail, password : newPassword });
            res.status(200).json({
                message : "success"
            })

        }
    }
    catch(err){
        res.status(500).json({
            message  :" error",
            err
        })
    }
}

module.exports = {
    login,
    verfiyEmail,
    forgetPassword,
    signUp,
    resetPassword,
}


