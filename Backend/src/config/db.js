
import mongoose from "mongoose"




export const connectDB =async() =>{
    try{
await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB Atlas connected")
    }catch(error){
console.error("error conenctoing to mongo db ", error);
process.exit(1);
    }
}