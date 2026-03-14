const router = require("express").Router();
const Task = require("../models/Task");
const auth = require("../middleware/auth");

router.post("/",auth,async(req,res)=>{

const task = await Task.create({

userId:req.user.id,
title:req.body.title,
description:req.body.description

});

res.json(task);

});

router.get("/",auth,async(req,res)=>{

const tasks = await Task.find({
userId:req.user.id
});

res.json(tasks);

});

router.delete("/:id",auth,async(req,res)=>{

await Task.findByIdAndDelete(req.params.id);

res.json({message:"Task deleted"});

});

module.exports = router;