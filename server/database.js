const mongoose=require("mongoose");
const dotenv =require("dotenv");

// connecting to database

dotenv.config()
const connectToMongo=()=>{
    mongoose.connect(process.env.mongo).then(()=>{
        console.log("connected to mongo succesfully")
    });
   
    }
module.export =connectToMongo;