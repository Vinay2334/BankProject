const mongoose = require('mongoose')
const { Schema } = mongoose;

const transactionSchema= new Schema ({
    message:{
        type: String
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    sender : {
        type : String,
        required: true
    },
    receiver : {
        type : String,
        required: true
    },
    transfer : {
        type : Number,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('transactions',transactionSchema)