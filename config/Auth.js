const jwt =  require("jsonwebtoken");

module.exports = ()=>{
    return async(req,res,next)=>{
        let barerToken = req.headers.authorization;
        let token = barerToken.split(" ")[1];
        let decoded = jwt.verify(token,process.env.SECRET_TOKEN);
        req.user = decoded;
        next();
    }
};