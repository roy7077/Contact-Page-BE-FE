const express=require('express');
const cors = require('cors');
const {dbConnect}=require('./Config/dbConnect');
const userRoutes=require('./Routes/userRoutes');
require('dotenv').config();

const app=express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    
})

app.use("/api/v1",userRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log("Server has started at port ",PORT)
})

//connecting to mongoDB
dbConnect();