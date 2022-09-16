const mongoose = require('mongoose')
const mongoURI=('mongodb+srv://Vinay:9968393810ab@cluster0.blhljtt.mongodb.net/bankingapp?retryWrites=true&w=majority');

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo")
    })
}
module.exports=connectToMongo;