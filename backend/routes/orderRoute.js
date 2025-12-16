import express from "express"
import {placOrder, placOrderStripe, placOrderRazorpay, 
    allOrders, userOrders, updateStatus} from "../controllers/orderController.js"
import adminAuth from "../middleware/adminAuth.js"
import authUser from "../middleware/auth.js"
    const orderRouter = express.Router()

    // Adin features
    orderRouter.post("/list",adminAuth,allOrders)
    orderRouter.post("/status",adminAuth,updateStatus)

    // payment Features

    orderRouter.post("/place",authUser,placOrder)
    orderRouter.post("/stripe",authUser,placOrderStripe)
    orderRouter.post("/razorpay",authUser,placOrderRazorpay)


    // User Features


    orderRouter.post("/userorders",authUser,userOrders)

    export default orderRouter