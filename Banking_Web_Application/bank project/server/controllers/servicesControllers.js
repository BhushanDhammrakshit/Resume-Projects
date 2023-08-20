const User=require('../models/user.model');

const deposit=async(req,res)=>{
    console.log(req.body);
    let {myAccountId,depositAmount}=req.body;
    console.log(depositAmount);

    try
    {
        if(!depositAmount)
        {
            return res.status(400).json({status:false,msg:"Please enter all details!!"});
        }
        if(Number(depositAmount)<=0)
        {
            return res.status(400).json({status:false,msg:"Amount must be greater than 0"});
        }

        const user=await User.findOne({accountId:myAccountId});
        console.log(user);
        

        const newBalance=Number(user.balance)+Number(depositAmount);
        const userUpdate=await User.updateOne({accountId:myAccountId},{
            $set: {balance: newBalance.toString()} 
        });

        if(!userUpdate.acknowledged)
        {
            return res.status(400).json({status:false,msg:"Deposit failed"});
        }
        return res.status(200).json({status:true,msg:"Deposit successfull",balance:newBalance});
    }
    catch(err)
    {
        console.error(err);
        return res.status(500).json({status:false,msg:"Internal Server Error"});
    }
}

const withdraw=async(req,res)=>{
    const {myAccountId,withdrawAmount}=req.body;
    try
    {
        if(!withdrawAmount)
        {
            return res.status(400).json({status:false,msg:"Please enter all details!!"});
        }
        if(Number(withdrawAmount)<=0)
        {
            return res.status(400).json({status:false,msg:"Amount must be greater than 0"});
        }

        const user=await User.findOne({accountId:myAccountId});
        console.log(user);

        if(Number(user.balance)<Number(withdrawAmount))
        {
            return res.status(400).json({status:false,msg:"Insufficient Balance"});
        }

        const newBalance=Number(user.balance)-Number(withdrawAmount);
        const userUpdate=await User.updateOne({accountId:myAccountId},{
            $set: {balance: newBalance.toString()} 
        });

        if(!userUpdate.acknowledged)
        {
            return res.status(400).json({status:false,msg:"Withdraw failed"});
        }
        console.log(userUpdate);
        console.log("withdraw successfull");
        return res.status(200).json({status:true,msg:"Withdraw successfull",balance:newBalance});
    }
    catch(err)
    {
        console.error(err);
        return res.status(500).json({status:false,msg:"Internal Server Error"});
    }
}

exports.deposit=deposit;
exports.withdraw=withdraw;