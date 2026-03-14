const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async(req,res)=>{

try{

const {name,email,password} = req.body;

const hash = await bcrypt.hash(password,10);

await User.create({
name,
email,
password:hash
});

res.json({message:"User Registered"});

}catch(err){

res.status(500).json(err);

}

});

router.post("/login", async(req,res)=>{

const {email,password} = req.body;

const user = await User.findOne({email});

if(!user){
return res.status(400).json({message:"User not found"});
}

const valid = await bcrypt.compare(password,user.password);

if(!valid){
return res.status(400).json({message:"Wrong password"});
}

const token = jwt.sign(
{ id:user._id },
process.env.JWT_SECRET
);

res.cookie("token",token,{
httpOnly:true
});

res.json({message:"Login success"});

});

module.exports = router;