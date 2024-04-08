const UserData=require('../Models/UserData');
const { unsubscribe } = require('../Routes/userRoutes');
const {mailSender}=require('../Utils/mailSender');

exports.User=async (req,res)=>{
    try{
        //get data from req's body
        const {name,email,query}=req.body;

        console.log(name, " ",email, " ",query);
        //validation
        if(!name || !email || !query)
        {
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }

        //create entry in DB
        const userDetails=await UserData.create({
            name,
            email,
            query
        })

        //sending mail
        // mailSender(userDetails);

        //return response
        return res.status(200).json({
            success:true,
            message:"Created entry in DB",
            data:userDetails
        })
    }
    catch(error){
        console.log(error);
        return res.status(200).json({
            success:false,
            message:"Error while creating entry in DB"
        })
    }
}