

// Add product to user cart

// import userModel from "../models/userModel.js"

// const addTocart = async(req,res) =>{
// try {
//     const {userId,itemId,size} = req.body

//     const userData = await userModel.findById(userId)
//     let cartData = await userData.cartData;

//     if (cartData[itemId]) {
//         if (cartData[itemId][size]) {
//             cartData[itemId][size] += 1
//         }
//         else{
//             cartData[itemId][size] = 1
//         }
//     }else{
//         cartData[itemId] = {}
//         cartData[itemId][size] = 1
//     }

//     await userModel.findByIdAndUpdate(userId,{cartData})

//     res.json({success:true,message: "Added to Cart"})
// } catch (error) {
//     console.log(error)
//     res.json({success:false,message:error.message})
// }
// }

// // Update user cart user cart

// const updateCart = async(req,res) =>{
//     try {
//         const {userId,itemId,size,quantity} = req.body
//         const userData = await userModel.findById(userId)
//         let cartData = await userData.cartData;
//         cartData[itemId][size] = quantity

//        await userModel.findByIdAndUpdate(userId,{cartData})

//        res.json({success:true,message: "Card Updated"})

//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:error.message})
//     }
// }


// // user cart data

// const getUserCart = async(req,res) =>{
//     try {
//         const {userId} = req.body
//          const userData = await userModel.findById(userId)
//         let cartData = await userData.cartData;
//         res.json({success:true,cartData})
//     } catch (error) {
//          console.log(error)
//         res.json({success:false,message:error.message})
//     }
// }

// export { addTocart,updateCart,getUserCart}




import userModel from "../models/userModel.js"

// Helper function for user check (optional, but clean)
const checkUserAndGetCart = async (userId, res) => {
    const userData = await userModel.findById(userId);
    
    // Agar user nahi mila, toh early return karo
    if (!userData) {
        res.json({ success: false, message: "User not found or Invalid ID" });
        return null;
    }

    // Agar user mila, toh user data return karo
    return userData;
}


// Add item to user cart
const addTocart = async(req,res) =>{
    try {
        const {userId,itemId,size} = req.body

        // User check
        const userData = await checkUserAndGetCart(userId, res);
        if (!userData) return; // Agar user null hai, toh function yahi ruk jayega

        let cartData = userData.cartData; // Ab yeh safe hai

        // Cart initialization check (Agar schema mein default value nahi di hai toh)
        if (!cartData) {
            cartData = {};
        }

        // Logic to add item/size
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            }
            else{
                cartData[itemId][size] = 1
            }
        }else{
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }

        // Update in database
        await userModel.findByIdAndUpdate(userId,{cartData})

        res.json({success:true,message: "Added to Cart"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:`Error in addTocart: ${error.message}`})
    }
}

// Update user cart quantity
const updateCart = async(req,res) =>{
    try {
        const {userId,itemId,size,quantity} = req.body
        
        // User check
        const userData = await checkUserAndGetCart(userId, res);
        if (!userData) return;

        let cartData = userData.cartData; // Ab yeh safe hai

        // Quantity update
        // WARNING: Agar itemId ya size exist nahi karta, toh yahan bhi crash aa sakta hai
        if(cartData && cartData[itemId] && cartData[itemId][size]){
            cartData[itemId][size] = quantity
        } else {
             return res.json({success:false, message: "Item or Size not found in cart for update."});
        }
        
        // Update in database
        await userModel.findByIdAndUpdate(userId,{cartData})

        res.json({success:true,message: "Cart Updated"})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:`Error in updateCart: ${error.message}`})
    }
}


// Get user cart data
const getUserCart = async(req,res) =>{
    try {
        const {userId} = req.body
        
        // User check
        const userData = await checkUserAndGetCart(userId, res);
        if (!userData) return;

        let cartData = userData.cartData; // Ab yeh safe hai

        res.json({success:true,cartData})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:`Error in getUserCart: ${error.message}`})
    }
}

export { addTocart, updateCart, getUserCart}