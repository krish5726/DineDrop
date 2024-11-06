import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://krishspatel10704:krish123@cluster0.fj9wkdx.mongodb.net/zomato').then(()=>console.log("DB Connected"))
}