const noteModel = require("../model/note.model");
const cloudinary = require("../../../cloudConfig/config");


const addNote = async (req, res) => {
    try {
        const { noteAbstract } = req.body;
        let mail = req.user.email;
        if (req.file) {
            var url = "" ;
            await cloudinary.v2.uploader.upload(req.file.path,{ public_id: `${req.file.originalname}` },function (error, result) { url = result.url ; }); 
        }
        await noteModel.create({noteAbstract,userMail: mail,createdAt : Date.now(),imageUrl : url }).then(()=>{
            res.status(200).json({
                message : "success"
            })
        })
    }
    catch (err) {
        res.status(500).json({
            message: "error",
            err
        })
    }
};

const getAllNotes = async (req, res) => {
    try {
        let userMail = req.user.email;
        let { page, size } = req.query;
        if (!page) page = 1;
        if (!size) size = 10;
        const limit = parseInt(size);
        const skip = (page - 1) * limit;
        const notes = await noteModel.find({ userMail }).limit(limit).skip(skip);
        const totalRes = await noteModel.count();
        const totalPages = Math.ceil(totalRes / limit);
        if (notes) {
            res.status(200).json({
                message: "success",
                data: notes,
                page,
                size,
                totalPages,
                totalRes
            })
        }
        else {
            res.status(417).json({
                message: "error",
            })
        }
    }
    catch (err) {
        res.status(500).json({
            message: "error",
            err
        })
    }

};

const editNote = async (req, res) => {
    try {
        const { noteId, noteAbstract } = req.body;
        if (req.file) {
            if (req.file) {
                var url = "" ;
                await cloudinary.v2.uploader.upload(req.file.path,{ public_id: `${req.file.originalname}` },function (error, result) { url = result.url ; }); 
            }
        }   
        await noteModel.updateOne({ _id : noteId },{noteAbstract , imageUrl : url}).then(() => {
            res.status(200).json({
                message: "success"
            })
        })

    }
    catch (err) {
        res.status(500).json({
            message: "error",
            err
        })
    }

};


module.exports = {
    editNote,
    getAllNotes,
    addNote
}