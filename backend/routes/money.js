const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Transaction = require('../models/Transaction');
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All the Notes using: GET "/api/notes/getuser". Login required

router.get('/view', async (req, res) => {
    try {
        const trans = await User.find({});
        res.json(trans)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


router.put('/view/depositMoney',fetchuser,async(req,res)=>{
    const user= await User.findById(req.user.id)
    const {addMoney}= req.body
    try {
        if(addMoney>0 || typeof credit === 'string'){
            let newBalance= parseInt(user.balance) + parseInt(addMoney)
            await User.findByIdAndUpdate(req.user.id, {balance : newBalance}, {new: true });
        
        let newTransaction = new Transaction({
            user: req.user.id,
            sender : user.name,
            receiver : user.name,
            transfer : addMoney
        })
        await newTransaction.save()
        res.redirect(303,"http://localhost:3000/api/transactions/view");
    }
        else{
            return res.status(400).json({error: "Enter a Valid amount" })
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.get('/view/user',fetchuser, async (req,res)=>{
	const id = req.user.id;
    const user = await User.findById(id).select("-password")
	const users = await User.find({}).select("-password");
    let data={
        user,
        users
    }
	res.send(data);
})

router.get("/view/user/:id",fetchuser, async(req, res) =>{
    const id = req.params.id
    const fromUser = await User.findById(req.user.id).select("-password");
    const toUser = await User.findById(id).select("-password");
    let data={
        fromUser,
        toUser
    }
    res.send(data);
});

router.put(`/view/user/:id`,fetchuser,async(req,res)=>{
    const id1=req.user.id
    const id2=req.params.id
    const fromUser = await User.findById(id1).select("-password");
    const toUser = await User.findById(id2).select("-password");
    const {credit} = req.body;
    try{
        if(credit <= fromUser.balance && credit > 0){
        
            let fromBalanceNew = fromUser.balance - credit;
            let toBalanceNew = parseInt(toUser.balance) + parseInt(credit);
            await User.findByIdAndUpdate(id1, {balance : fromBalanceNew}, {new: true });
            await User.findByIdAndUpdate(id2, {balance : toBalanceNew}, {new: true });
        
                let newTransaction = new Transaction({
                    user: req.user.id,
                    sender : fromUser.name,
                    receiver : toUser.name,
                    transfer : credit
                });
                await newTransaction.save();
                // res.json({transactions})
                res.redirect(303,"http://localhost:3000/api/transactions/view");
            }
            else{
                if(credit<=0 || typeof credit === 'string'){return res.status(400).json({error: "Please Enter Valid amount" }) }
                return res.status(400).json({error: "You Don't have enough credits in your account" })
            }
        }
            catch (error) {
                console.error(error.message);
                res.status(500).send("Internal Server Error");
            }
})

router.get("/history",fetchuser, async(req, res)=>{
    try {
        const trans = await Transaction.find({ user: req.user.id });
        res.json(trans)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});
module.exports=router