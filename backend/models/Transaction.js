const mongoose = require('mongoose')
const { Schema } = mongoose;

const transactionSchema= new Schema ({
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
    }
})

module.exports=mongoose.model('transactions',transactionSchema)