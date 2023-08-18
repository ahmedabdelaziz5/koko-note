const trashModel = require("../model/trash.model");
const noteModel = require("../../note/model/note.model");
const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
    


const moveNoteToTrash = async(req,res)=>{
    try{
        const {noteId} = req.body;
        await noteModel.findOneAndDelete({_id : noteId}).then(async (docs)=>{
            let tmp = new trashModel({
                noteAbstract: docs.noteAbstract,
                userMail: docs.userMail,
                imageUrl: docs.imageUrl,
                createdAt : Date.now()
            });
            await tmp.save().then(()=>{
                res.status(200).json({
                    message : "success"
                })
            })
        })
    }
    catch(err){
        res.status(500).json({
            message : "error",
            err
        })
    }
   
};

const getAllNotesInTrash = async(req,res)=>{
    try{
        const userMail = req.user.email;
        let {page,size } = req.query;
        if(!page) page = 1;
        if(!size) size =10;
        const limit = parseInt(size);
        const skip = (page-1)*limit;
        const trash = await trashModel.find({userMail}).limit(limit).skip(skip);
        const totalRes = await trashModel.count();
        const totalPages = Math.ceil(totalRes/limit);
       
        if(Object.keys(trash).length === 0) {  
            res.status(200).json({
                message : "success",
                data : "no data to be displayed"
            })  
        }
        else {
            res.status(200).json({
            message : "success",
            data : trash,
            page , 
            size,
            totalPages,
            totalRes
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

const  removeAllTrash = async(req,res)=>{
try{
    const userMail = req.user.email;
    await trashModel.deleteMany({userMail}).then(()=>{
        res.status(200).json({
            message : "success"
        })
    })
} 
catch(err){
    res.status(500).json({
        message : " error",
        err

    })
  } 
};


let monthlyDelete =  async function(){
    try{
        let trash = trashModel.find({}).cursor();
        for(let item = await trash.next();item!=null;item = await trash.next()){    
        const now = new Date().getTime();
        let pastTime = new Date(item.createdAt).getTime();
        let timeDiffInMs = now - pastTime;
        if(timeDiffInMs>=thirtyDaysInMs) {
            await trashModel.deleteOne({_id : item._id});
        }
    }
    console.log("success....")
}
    catch(err){
        res.status(500).json({
            message : "error",
            err
        })
    }

};


module.exports = {
    moveNoteToTrash,
    getAllNotesInTrash,
    removeAllTrash,
    monthlyDelete
}