const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Provide unique address name"],
        unique:[true,"username exits"]

    },
    password:{
        type:String,
        required:true,

    },
    
})

const schema=mongoose.model("registration",UserSchema)


module.exports=schema;