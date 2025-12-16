


//Placing order using COD 

import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const placOrder = async (req, res) => {
 try {
   const userId = req.userId;

   const {items, amount, address} = req.body;
    const orderData = {

        userId,
        items,
        address,
        amount,
        paymentMethoud:"COD",
        payment:false,
        date:Date.now()
    }

    const newOrder = new orderModel(orderData)

    await newOrder.save()
    await userModel.findByIdAndUpdate(userId,{cartData:{}})
    res.json({success:true, message:"Order Placed"})
 } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
 }
}

// Placing order using Stripe methoud

const placOrderStripe = async (req, res) => {

}

// Placing order using Razorpay methoud

const placOrderRazorpay = async (req, res) => {

}
/// All orders data for admin pannel 

const allOrders = async (req, res) => {
try {
    const orders = await orderModel.find({})
    res.json({success:true, orders})
} catch (error) {
    console.log("User Orders Fetch Error:", error);
    res.json({success:false,message:error.message});
}
}






// orderController.js

const userOrders = async (req, res) => {
 try {
    // 🛑 FIX: req.body ko hatakar req.userId use karein (jo auth middleware set karta hai)
    const userId = req.userId; 
    
    // Check karte hain ki userId undefined toh nahi hai
    if (!userId) {
        return res.json({ success: false, message: "User not authenticated." });
    }
    
    // Find orders for the correctly authenticated user ID
    const orders = await orderModel.find({userId});
    
    res.json({success:true, orders});
 } catch (error) {
    console.log("User Orders Fetch Error:", error);
    res.json({success:false,message:error.message});
 }
}

// Update order stataus from admin pannel 
const updateStatus = async (req, res) => {

}

export {placOrder, placOrderStripe, placOrderRazorpay, 
    allOrders, userOrders, updateStatus}




//new system



