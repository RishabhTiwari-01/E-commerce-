// import express from "express";
// import cors from "cors";
// import "dotenv/config"
// import connectDB from "./config/mongodb.js";
// import connectCloudinary from "./config/cloudinary.js";
// import userRouter from "./routes/userRoute.js";
// import productRouter from "./routes/productRoute.js";
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";



const express = require('express');
const cors = require('cors');
require('dotenv/config');
const connectDB = require('./config/mongodb.js');
const connectCloudinary = require('./config/cloudinary.js');
const userRouter = require('./routes/userRoute.js');
const productRouter = require('./routes/productRoute.js');
const cartRouter = require('./routes/cartRoute.js');
const orderRouter = require('./routes/orderRoute.js');



// App config

const app = express();
const port = process.env.Port || 4000
connectDB()
connectCloudinary()

// Midiileware

app.use(express.json());
app.use(cors())

// api end point
app.use("/api/user",userRouter)
app.use("/api/product",productRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
app.get ("/",(req,res)=>{
res.send("API WORKING")
})

app.listen(port, ()=> console.log("Server started on port:"+port))