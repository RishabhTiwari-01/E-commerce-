// import React, { useContext, useState } from 'react';
// import Title from '../components/title'; // Assuming this component exists
// import CartTotal from '../components/CartTotal'; // Assuming this component exists
// import { assets } from '../assets/assets';
// import { ShopContext } from '../context/ShopContext';
// const PlaceOrder = () => {
//   const [methoud, setMethoud] =  useState("cod");

//   const [ formData, setFormData] = useState({
//     firstName:"",
//     lastName:"",
//     email:"",
//     street:"",
//     city:"",
//     state:"",
//     zipcode:"",
//     country:"",
//     phone:""
//   })

//   const onChangeHandler = (event) =>{
//     const name = event.target.name
//     const value = event.target.value

//     setFormData(data =>({...data,[name]: value}))
//   }
//   const {navigate} = useContext(ShopContext);

//   return (
//     // Main div mein ab sirf ek hi child div hoga (Delivery Information)
//     <form  className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]'>
      
//       {/* DELIVERY INFORMATION Section (Left Side) */}
//       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        
//         {/* Title */}
//         <div className='text-xl sm:text-2xl my-3'>
//           <Title text1={"DELIVERY"} text2={"INFORMATION"}/>
//         </div>
        
//         {/* Form elements ko <form> tag mein wrap kiya gaya hai */}
//         <form className='flex flex-col gap-4'> 
          
//           {/* --- 1. First Name aur Last Name Row (Side-by-Side) --- */}
//           <div className='flex gap-3'>
//             {/* First Name Field */}
//             <input onChange={onChangeHandler} name='firstName' value={formData.firstName}
//               className='border border-gray-300 rounded py-2 px-4 w-full text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500' 
//               type='text'
//               placeholder='First name'
//               required
//             />
            
//             {/* Last Name Field */}
//             <input onChange={onChangeHandler} name='lastName' value={formData.lastName} 
//               className='border border-gray-300 rounded py-2 px-4 w-full text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500' 
//               type='text'
//               placeholder='Last name'
//               required
//             />
//           </div>
          
//           {/* --- 2. Email Address Field (Full Width) --- */}
//           <div> 
//             <input onChange={onChangeHandler} name='email' value={formData.email} 
//               className='border border-gray-300 rounded py-2 px-4 w-full text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500' 
//               type='email'
//               placeholder='Email address'
//               required
//             />
//           </div>

//           {/* --- 3. Street Address Field (Full Width) --- */}
//           <div> 
//             <input onChange={onChangeHandler} name='street' value={formData.street} 
//               className='border border-gray-300 rounded py-2 px-4 w-full text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500' 
//               type='text'
//               placeholder='Street, House No., or Apartment'
//               required
//             />
//           </div>

//           {/* --- 4. City aur State Row (Side-by-Side) --- */}
//           <div className='flex gap-3'>
//             {/* City Field */}
//             <input onChange={onChangeHandler} name='city' value={formData.city} 
//               className='border border-gray-300 rounded py-2 px-4 w-full text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500' 
//               type='text'
//               placeholder='City'
//               required
//             />
            
//             {/* State Field */}
//             <input onChange={onChangeHandler} name='state' value={formData.state} 
//               className='border border-gray-300 rounded py-2 px-4 w-full text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500' 
//               type='text'
//               placeholder='State / Province'
//               required
//             />
//           </div>

//           {/* --- 5. Zip Code aur Phone Number Row (Side-by-Side) --- */}
//           <div className='flex gap-3'>
//             {/* Zip Code Field */}
//             <input onChange={onChangeHandler} name='zipcode' value={formData.zipcode} 
//               className='border border-gray-300 rounded py-2 px-4 w-full text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500' 
//               type='text'
//               placeholder='Zip Code'
//               required
//             />
            
//             {/* Phone Number Field */}
//             <input onChange={onChangeHandler} name='phone' value={formData.phone}
//               className='border border-gray-300 rounded py-2 px-4 w-full text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500' 
//               type='tel'
//               placeholder='Phone Number'
//               required
//             />
//           </div>

          
          
//         </form>
        
//       </div>
      
      
//      {/* {Right side } */}
// <div className='mt-8'>
// <div className='mt-8 min-w-80'>
// <CartTotal />
// </div>
// <div className='mt-12'>
// <Title text1={"PAYMENT"} text2={"METHOD"}/>
// {/* {Payment vala methoud} */}

// <div className='flex gap-3 flex-col lg:flex-row'>
// <div onClick={()=>setMethoud("stripe")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
// <p 
//   className={`
//     h-5 w-5 rounded-full border-2 border-gray-400 
//     ${methoud === "stripe" ? "bg-green-400 border-green-400" : ""}
//   `}
// ></p>
// <img className='h-5 mx-4' src={assets.stripe_logo} alt=''/>
// </div>
// <div onClick={()=>setMethoud("razorpay")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
// <p 
//   className={`
//     h-5 w-5 rounded-full border-2 border-gray-400 
//     ${methoud === "razorpay" ? "bg-green-400 border-green-400" : ""}
//   `}
// ></p>
// <img className='h-5 mx-4' src={assets.razorpay_logo} alt=''/>
// </div>
// <div onClick={()=>setMethoud("cod")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
// <p 
//   className={`
//     h-5 w-5 rounded-full border-2 border-gray-400 
//     ${methoud === "cod" ? "bg-green-400 border-green-400" : ""}
//   `}
// ></p>
// <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
// </div>
// </div>
// <div className='w-full text-end mt-8'>
// <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
// </div>
// </div>
// </div>

//     </div>
//   )
// }

// export default PlaceOrder;



import React, { useContext, useState } from 'react';
import Title from '../components/Title'; 
import CartTotal from '../components/CartTotal'; 
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  const [methoud, setMethoud] = useState("cod");

const {navigate, backendUrl,  token, cartItems, setCartItems, getCartAmount,  delivery_fee, products  } = useContext(ShopContext);


  const [ formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  });

  // ✅ Change 1: 'event' ko argument mein pass kiya
  const onChangeHandler = (event) =>{ 
    const name = event.target.name
    const value = event.target.value

    setFormData(data =>({...data,[name]: value}))
  }
  
  

  // ✅ New function to handle form submission
  const onSubmitHandler = async (event) => {
    event.preventDefault(); // Form submit ko roke
    try {
      let orderItems = []
      for (const items in cartItems) {
      for(const item in cartItems[items]){
        if (cartItems[items][item] > 0) {
          const itemInfo = structuredClone(products.find(product => product._id  === items))
        if (itemInfo) {
          itemInfo.size = item
          itemInfo.quantity = cartItems[items][item]
          orderItems.push(itemInfo)
        }
        }
      }
      }

      
      let orderData = {
        address: formData,
       items: orderItems,
       amount: getCartAmount() + delivery_fee,
      
       
      }

      switch (methoud) {
     // Apis call for cod
     case "cod":

     
const response = await axios.post("/api/order/place", 
  orderData, {headers:{token}} );
  

     if (response.data.success) {
      setCartItems({})
      navigate("/orders")
     } else{
      toast.error(response.data.message)
     }
     
     break;


      default:
        break;
     
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
    // Yahaan order placement API call ka logic aayega
    // Success hone par: navigate('/orders');
  }

  return (
    // ✅ Change 2: Outermost form par onSubmit lagaya
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]'>
      
      {/* DELIVERY INFORMATION Section (Left Side) */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        
        {/* Title */}
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={"DELIVERY"} text2={"INFORMATION"}/>
        </div>
        
        {/* ✅ Change 3: Inner <form> tag ko <div> se replace kiya */}
        <div className='flex flex-col gap-4'> 
          
          {/* --- 1. First Name aur Last Name Row (Side-by-Side) --- */}
          <div className='flex gap-3'>
            <input onChange={onChangeHandler} name='firstName' value={formData.firstName}
              className='border border-gray-300 rounded py-2 px-4 w-full text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500' 
              type='text'
              placeholder='First name'
              required
            />
            
            <input onChange={onChangeHandler} name='lastName' value={formData.lastName} 
              className='border border-gray-300 rounded py-2 px-4 w-full text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500' 
              type='text'
              placeholder='Last name'
              required
            />
          </div>
          
          {/* --- 2. Email Address Field (Full Width) --- */}
          <div> 
            <input onChange={onChangeHandler} name='email' value={formData.email} 
              className='border border-gray-300 rounded py-2 px-4 w-full text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500' 
              type='email'
              placeholder='Email address'
              required
            />
          </div>

          {/* --- 3. Street Address Field (Full Width) --- */}
          <div> 
            <input onChange={onChangeHandler} name='street' value={formData.street} 
              className='border border-gray-300 rounded py-2 px-4 w-full text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500' 
              type='text'
              placeholder='Street, House No., or Apartment'
              required
            />
          </div>

          {/* --- 4. City aur State Row (Side-by-Side) --- */}
          <div className='flex gap-3'>
            <input onChange={onChangeHandler} name='city' value={formData.city} 
              className='border border-gray-300 rounded py-2 px-4 w-full text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500' 
              type='text'
              placeholder='City'
              required
            />
            
            <input onChange={onChangeHandler} name='state' value={formData.state} 
              className='border border-gray-300 rounded py-2 px-4 w-full text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500' 
              type='text'
              placeholder='State / Province'
              required
            />
          </div>

          {/* --- 5. Zip Code aur Phone Number Row (Side-by-Side) --- */}
          <div className='flex gap-3'>
            <input onChange={onChangeHandler} name='zipcode' value={formData.zipcode} 
              className='border border-gray-300 rounded py-2 px-4 w-full text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500' 
              type='text'
              placeholder='Zip Code'
              required
            />

 {/* --- 3. Street Address Field (Full Width) --- */}
          <div> 
            <input onChange={onChangeHandler} name='country' value={formData.country} 
              className='border border-gray-300 rounded py-2 px-4 w-full text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500' 
              type='text'
              placeholder='Country'
              required
            />
          </div>   
            
            <input onChange={onChangeHandler} name='phone' value={formData.phone}
              className='border border-gray-300 rounded py-2 px-4 w-full text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500' 
              type='tel'
              placeholder='Phone Number'
              required
            />
          </div>
          
        </div>
      </div>
      
      
     {/* {Right side } */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={"PAYMENT"} text2={"METHOD"}/>
          
          {/* {Payment vala methoud} */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethoud("stripe")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p 
                className={`
                  h-5 w-5 rounded-full border-2 border-gray-400 
                  ${methoud === "stripe" ? "bg-green-400 border-green-400" : ""}
                `}
              ></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt='Stripe Logo'/>
            </div>
            <div onClick={()=>setMethoud("razorpay")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p 
                className={`
                  h-5 w-5 rounded-full border-2 border-gray-400 
                  ${methoud === "razorpay" ? "bg-green-400 border-green-400" : ""}
                `}
              ></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt='Razorpay Logo'/>
            </div>
            <div onClick={()=>setMethoud("cod")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p 
                className={`
                  h-5 w-5 rounded-full border-2 border-gray-400 
                  ${methoud === "cod" ? "bg-green-400 border-green-400" : ""}
                `}
              ></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            {/* Button ka type 'submit' hona chahiye taaki placeOrderHandler call ho */}
            <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>
                PLACE ORDER
            </button> 
          </div>
        </div>
      </div>

    </form>
  )
}

export default PlaceOrder;



// new era


