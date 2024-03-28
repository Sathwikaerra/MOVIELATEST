const express=require('express')
const app=express()
const path=require('path')
const mongoose=require('mongoose')
const schema=require('./schema')
const cors=require('cors')
const dotenv=require('dotenv')
app.use(cors());
dotenv.config()
app.use(express.json())


const router=require('./routes/User')



mongoose.connect('mongodb+srv://shiva143:shiva143@cluster0.3baatam.mongodb.net/MOVIES?retryWrites=true&w=majority&appName=Cluster0').then(r=>console.log('conneted succesfully'))
app.use(express.json())

app.use('/', router)

app.post('/login',(req,res)=>{
    const {email,password}=req.body
    
   const user= schema.findOne({email:email})

   if(!user)
   {
    return res.json({msg:'user is not yet registered'})
   }
    
   const validpass=bcrypt.compare(password,user.password)

   if(!validpass)
   {
    return res.json({msg:"password is incorrect"})
   }

   return res.send('success')

     
    
    
})







app.post('/signup',async(req,res)=>{

    const {email,password}=req.body;

    const user=await schema.findOne({email})
    if(user)
    {
        return res.json({msg:"user already exists"})
    }

    const hashpass=bcrypt.hash(password,10)
    const newuser=new schema({
        email,
        password:hashpass,
    })

    await newuser.save()
    return res.json({msg:"regstred succesfully"})

    
})



app.listen(8000,()=>{
    console.log("listening")
})
