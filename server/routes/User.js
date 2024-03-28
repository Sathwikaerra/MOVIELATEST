const express=require('express')
const router=express.Router();
const schema=require('../schema')
const jwt =require('jsonwebtoken')
const dotenv=require('dotenv')
dotenv.config()
const bcrypt=require('bcrypt');
const upMoviesData=require('../upcmngmovies')



router.get('/movies',async(req,res)=>{
    res.send(upMoviesData)
})

router.post('/signup',async(req,res)=>{
    const {email,password,confirmPassword}=req.body

   

    const user=await schema.findOne({email:email})
    if(user)
    {
        console.log(user.email)
        return res.json({msg:"user already exits"})

    }
    const salt =await bcrypt.genSalt(10)
    const hashpassword=await bcrypt.hash(password,salt)

    const newUser=new schema({
        email,
        password:hashpassword
    })

    await newUser.save()
    return res.send('success')



})


router.post('/login',async(req,res)=>{
    const {email,password}=req.body
    
   const user= await schema.findOne({email:email})

    if(!user)
    {
        return res.json({msg:"no user exits"})
    }
    const validpassword=await bcrypt.compare(password,user.password)
    if(!validpassword)
    {
        return res.json({msg:"passwrd incrct"})
    }
    return  res.send('success')

   

  





})

module.exports=router