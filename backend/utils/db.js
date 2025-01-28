 import mongoose from "mongoose";
 const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI; 
        await mongoose.connect(process.env.MONGO_URI);
         console.log('MongoDB connected');
    } catch (error) {
        console.log( error);
       
    }
 }
 export default connectDB;