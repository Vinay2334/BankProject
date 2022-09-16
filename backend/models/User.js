const mongoose =require('mongoose');
const {Schema}=mongoose;
const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    accountNo:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    balance:{
        type:Number,
        min:0,
        default:12000
    }
})

module.exports=mongoose.model('user',UserSchema)