const User=require('../models/user.model.js')

const transfer=async(req,res)=>{
    try
    {
        const {myAccountId,accountId,amount}=req.body;

        if(!accountId || !amount)
        {
            return res.status(400).json({status:false,msg:"Please enter all details!!"});
        }

        if(Number(amount)<=0)
        {
            return res.status(400).json({status:false,msg:"Amount must be greater than 0"});
        }

        if(accountId.toString().length!==4)
        {
            return res.status(400).json({status:false,msg:"Account Id length must be 12 characters"});
        }

        console.log("All validations passed");

        const user= await User.findOne({accountId});

        if(!user)
        {
            return res.status(400).json({status:false,msg:"Reciever's account does not exist!!"});
        }
        else
        {
            const new_balance=Number(user.balance)+Number(amount);
            const user_update=await User.updateOne({accountId:user.accountId},{
                $set: {balance: new_balance.toString()}
            });
            // console.log(user_update)
            // console.log("Reciever's account updated successfully");
        }

    
        const sender=await User.findOne({accountId:myAccountId});
        console.log(sender);
        const new_balance_sender=Number(sender.balance)-Number(amount);
        const sender_update=await User.updateOne({accountId:myAccountId},{
            $set: {balance: new_balance_sender.toString()}
        });
        
        // console.log(sender);
        // console.log(sender_update);
        // console.log("Sender's account updated successfully");

        res.status(200).json({status:true,msg:"Transfer successfull",balance:new_balance_sender});
    }
    catch(err)
    {
        console.error(err);
        return res.status(500).json({status:false,msg:"Internal Server Error"});
    }
}

exports.transfer=transfer;