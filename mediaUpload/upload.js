const multer = require("multer");

function fileFilter(req,file,cb){
    if(file.mimetype=="png/ipgj") {
        cb(null,false);
    }
    else {
        cb(null,true); 
    };
}

const storage = multer.diskStorage({
    // destination : function(req,file,cb){
    //     cb(null, "")
    // },
    filename : function(req,file,cb){
        let pre = Date.now()+'_'+file.originalname;
        cb(null,pre);
    }
})

const upload = multer({storage,fileFilter});

module.exports = upload ; 