const noteModel = require("../model/note.model");


const  addNote  = async (req,res)=>{
    try{
        const {noteAbstract} = req.body;
        let mail = req.user.email;
        if(req.file===undefined){
            await noteModel.insertMany({noteAbstract,userMail: mail,createdAt : new Date.now().getTime}).then(()=>{
                res.status(200).json({
                    message : "success"
                })
            })
        }
    else{
        await noteModel.insertMany({noteAbstract,userMail: mail,imageUrl : req.file.path,createdAt : Date.now()}).then(()=>{
            res.status(200).json({
                message : "success"
            })
        })
    }
}
    catch(err){
        res.status(500).json({
       message : "error",
        err
    })   
}
};

const  getAllNotes = async (req,res)=>{
    try{
        let userMail = req.user.email;
        let {page,size } = req.query;
        if(!page) page = 1;
        if(!size) size =10;
        const limit = parseInt(size);
        const skip = (page-1)*limit;
        const notes = await noteModel.find({userMail}).limit(limit).skip(skip);
        const totalRes = await noteModel.count();
        const totalPages = Math.ceil(totalRes/limit);
        if(notes){
            res.status(200).json({
                message : "success",
                data : notes ,
                page , 
                size,
                totalPages,
                totalRes
            })
        }
        else{
            res.status(417).json({
                message : "error",
            })
        } 
    }
    catch(err){
        res.status(500).json({
            message : "error",
            err
        })
    }
   
};

const  editNote = async (req,res)=>{
    try{
        const {noteId,noteAbstract} = req.body;
        if(req.file){
            await noteModel.findOneAndUpdate({noteId, noteAbstract : noteAbstract , imageUrl : req.file.path}).then(()=>{
                res.status(200).json({
                    message : "success"
                })
            })
        }
        else {
            await noteModel.findOneAndUpdate({noteId, noteAbstract : noteAbstract}).then(()=>{
                res.status(200).json({
                    message : "success"
                })
            })
        }

    }
    catch(err){
        res.status(500).json({
            message : "error",
            err
        })
    }

};


module.exports = {
    editNote,
    getAllNotes,
    addNote
}