// import jwt from "jsonwebtoken"

// const authUser = async(req, res,next) => {
//     const { token} = req.headers;
//     if (!token) {
//         return res.json({success:false, message:"Not Authorized Login Again"})
//     }
//     try {
//         const token_decode = jwt.verify(token,process.env.JWT_SECRET)
//      req.userId = token_decode.userId
//      next()
      
//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:error.message})
//     }
// }

// export default authUser



import jwt from "jsonwebtoken"

const authUser = async(req, res, next) => {
    // 1. Token nikalna
    // Assuming token is sent in headers as {token: "..."}
    const token = req.headers.token; 
    
    if (!token) {
        // Agar token missing hai, toh order controller tak nahi jaayega
        return res.json({success:false, message:"Not Authorized, Login Again"})
    }
    
    try {
        // 2. Token decode karna
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        
        // 3. ✅ FINAL FIX: ID ko correct key se nikalna
        // Mongoose/JWT mein ID generally 'id' ya 'userId' key se store hoti hai.
        const decodedId = token_decode.id || token_decode.userId;
        
        if (!decodedId) {
             // Agar token decode hua par ID nahi mili
            return res.json({success: false, message: "Decoded token missing User ID"});
        }
        
        // 4. req object mein set karna
        // Yeh line orderController.js mein 'req.userId' se match karti hai.
        req.userId = decodedId; 
        
        // 5. Request ko placOrder controller tak bhejna
        next()
        
    } catch (error) {
        console.log("JWT Verification Error:", error.message)
        // Agar token expired ya tampered hai
        res.json({success:false, message:"Invalid or Expired Token"})
    }
}

export default authUser;