const taskModel = require("../model/task.model");
const doneTaskModel = require("../model/doneTask.model");
const { rejects } = require("assert");


const addTask = async(req,res)=>{
    try{
       let userMail = req.user.email;
        let {title,content} =req.body ; 
        await taskModel.insertMany({title,content,userMail : userMail}).then(()=>{
        res.status(200).json({
            msesage : "sucess"
        })
    })
}
    catch(err){
        res.status(500).json({
            msesage : "error",
            err
        })
    }

};

const markAsPinned = async(req,res)=>{
    try{
        const {taskId} = req.body ;
        let task = await taskModel.findOne({_id : taskId});
        let mark ;
        if(task.isPined) {task.isPined = false }
        else {task.isPined = true ; }  
        mark  = task.isPined ;     
        await taskModel.updateOne({ taskId});
        task.isPined = mark ;
        await task.save().then(()=>{
            res.status(200).json({
                message : "success"
            })
        });
    }
    catch(err){
        res.status(500).json({
            msesage : "error",
            err
        })
    }     
};

const getAllTasks = async(req,res)=>{
    try{
        const userMail = req.user.email;
        let {page,size } = req.query;
        if(!page) page = 1;
        if(!size) size =10;
        const limit = parseInt(size);
        const skip = (page-1)*limit;
        const tasks = await taskModel.find({userMail}).limit(limit).skip(skip);
        const totalRes = await taskModel.count();
        const totalPages = Math.ceil(totalRes/limit);
       
        if(Object.keys(tasks).length === 0) {  
            res.status(200).json({
                message : "success",
                data : "no data to be displayed"
            })  
        }
        else {
            res.status(200).json({
            message : "success",
            data : tasks,
            page , 
            size,
            totalPages,
            totalRes
            })  
            }         
    }
    catch(err){
        res.status(500).json({
            msesage : "error",
            err
        })
    }

};

const editTask = async(req,res)=>{
    try{
        const {taskId,title,content} = req.body;
        await taskModel.updateOne({taskId,title : title , content : content}).then(()=>{
            res.status(200).json({
                msesage : "success"
            })
        })
    }
    catch(err){
        res.status(500).json({
            msesage  : "error",
            err
        })
    }


};

const deleteTask = async(req,res)=>{
    try{
        const {taskId} = req.body;
        await taskModel.deleteOne({_id :taskId}).then(()=>{
        res.status(200).json({
            message : "success"
        })
    });
}
    catch(err){
        res.status(500).json({
            msesage : "error",
            err
        })
    }

};

const deletAllTasks = async(req,res)=>{
    try{
        let userMail = req.user.email;
        await taskModel.deleteMany({userMail}).then(()=>{
            res.status(200).json({
                message : "success"
            })
        });
    }
    catch(err){
        res.status(500).json({
            msesage : "error",
            err
        })
    }
};

const markAsDone = async (req,res)=>{
    try{
        let {taskId} =req.body ; 
        await taskModel.findOneAndUpdate( {_id :  taskId} ).then(async (docs)=>{
            let tmp = new doneTaskModel({
                title: docs.title,
                content: docs.content,
                userMail: docs.userMail
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
            msesage : "error",
            err
        })
    }

};

const getAlLDoneTasks = async(req,res)=>{
    try{
        const userMail = req.user.email;
        let {page,size } = req.query;
        if(!page) page = 1;
        if(!size) size =10;
        const limit = parseInt(size);
        const skip = (page-1)*limit;
        const doneTasks = await doneTaskModel.find({userMail}).limit(limit).skip(skip);
        const totalRes = await taskModel.count();
        const totalPages = Math.ceil(totalRes/limit);
       
        if(Object.keys(doneTasks).length === 0) {  
            res.status(200).json({
                message : "success",
                data : "no data to be displayed"
            })  
        }
        else {
            res.status(200).json({
            message : "success",
            data : doneTasks,
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

const deleteAllDoneTasks = async(req,res)=>{
    try{
        let userMail = req.user.email;
        await doneTaskModel.deleteMany({userMail}).then(()=>{
            res.status(200).json({
                message : "success"
            })
        });
    }
    catch(err){
        res.status(500).json({
            msesage : "error",
            err
        })
    }

};

const deleteSingleDoneTask = async(req,res)=>{
    try{
        let {taskId} = req.body;
        await doneTaskModel.deleteOne({_id :taskId}).then(()=>{
            res.status(200).json({
                message : "success"
            })
        })
    }
    catch(err){
        re.status(500).json({
            message : "error",
            err
        })
    }

};


module.exports = {
    addTask,
    getAllTasks,
    getAlLDoneTasks,
    editTask,
    markAsPinned,
    markAsDone,
    deleteTask,
    deletAllTasks,
    deleteAllDoneTasks,
    deleteSingleDoneTask,
}
