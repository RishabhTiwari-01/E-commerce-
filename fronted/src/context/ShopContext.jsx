import { createContext, useState, useEffect } from "react";
// import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios"

export const ShopContext = createContext();



const ShopContextProvider = (props) => {
  
  const currency = "$";
  const delivery_fee = 10;

const backendUrl = import.meta.env.VITE_BACKEND_URL
  
  
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  
  const [cartItems, setCartItems] = useState({});

const [products,setProducts] = useState([]);


// login vala system

const [token,setToken] = useState("")



  const navigate = useNavigate();

  

  // --- Cart Logic: Add Item with Size ---
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }

    // Using structuredClone for deep copy
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1; // Increment count for existing size
      } else {
        cartData[itemId][size] = 1; // Add new size for existing item
      }
    } else {
      cartData[itemId] = {}; // Add new item
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
    
if (token) {
    try {
        await axios.post("/api/cart/add",{itemId,size},{headers:{token}})
    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
}

  };




  // --- Cart Logic: Total Items Count (across all sizes) ---
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item  in cartItems[items]) {
        try {
    if(cartItems[items][item] > 0){
        totalCount += cartItems[items][item]
    }
} catch (error) {
    console.log(error)
        toast.error(error.message)
}
}

}
    return totalCount;
  };

  // --- Cart Logic: Update Quantity ---
  const updateQuantity = async (itemId, size, quantity) => {
    if (quantity < 0) return;

    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity
setCartItems(cartData);

if (token) {
    try {
        await axios.post("/api/cart/update",{itemId, size, quantity},{headers:{token}})
    } catch (error) {
        
    }
}
}


  // --- Cart Logic: Total Cart Amount Calculation ---
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product)=> product._id === items);
for (const item in cartItems[items]){
    try {
        if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
        }
    } catch (error) {
        
    }
}
  }
return totalAmount;
}

// new system
const getProductsData = async () => {
 try {
    // API Call via Vite Proxy
    const response = await axios.get("/api/product/list"); 
    
    // Data Check aur State Update
    if(response.data.success){
       // Sirf yahi ek baar setProducts ko call karein
       setProducts(response.data.products);
    } else{
       // Agar success: false hai, toh message dikhaayein
       toast.error(response.data.message);
    }
  
 } catch (error) {
    // Error Handling (Network/CORS/Server)
    console.error("Error fetching products:", error);
    toast.error(error.message);
 }
};

const getUserCart = async (token) =>{
    try {
        const response = await axios.post("/api/cart/get",{},{headers:{token}})
  if (response.data.success) {
    setCartItems(response.data.cartData)
  }

    } catch (error) {
        console.error("Error fetching products:", error);
    toast.error(error.message);
    }
}

useEffect(() => {
    getProductsData();
}, []);

useEffect(()=>{
if (!token && localStorage.getItem("token")) {
    setToken(localStorage.getItem("token"))
    getUserCart(localStorage.getItem("token"))
}
},[])

  // --- Context Value Object ---
  const Value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
  setCartItems,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    
    backendUrl,
    setToken,
    token
   
    
  };

  return (
    <ShopContext.Provider value={Value}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;






// NEW SYSTEM

