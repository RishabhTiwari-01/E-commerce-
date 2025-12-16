// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// import { backendUrl } from '../App'
// import { toast } from 'react-toastify'
// import { assets } from '../assets/assets'
// const Orders = ({token}) => {
//   const [orders,setOrders] = useState([])
//   const fetchAllOrders = async () => {
//   if (!token) {
//     return null;
//   }

//   try {
//     const response = await axios.post(backendUrl + "/api/order/list",{},{headers:{token}})
//     if (response.data.success) {
//       setOrders(response.data.orderd)
//     } else{
//       toast.error(response.data.message)
//     }
//   } catch (error) {
//     toast.error(error.message)
//   }
//   }
//   useEffect(()=>{
// fetchAllOrders()
//   },[token])
//   return (
//     <div>
//        <h3>Order page</h3> 
//        <div>
//         {
//       orders?.map((order,index) => (
//        <div key={index}>
//       <img src={assets.parcel_icon} alt=''/>
//       <div>
//         {order.items?.map((item,index)=>{
//      if (index === order.items.length - 1 ) {
//       return <p key={index}> {item.name} x {item.quantity} <span>{item.size}</span></p>
//      }
//      else {
//      return <p key={index}> {item.name} x {item.quantity} <span>{item.size}</span> ,</p>
//      }
//         })}
//       </div>
//       <p>{order.address.firstName + " "+ order.address.lastName}</p>
//       <div>

//       </div>
//        </div>

//       ))
//         }
//        </div>
//     </div>
//   )
// }

// export default Orders



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';
import './Orders.css';

const Orders = ({token}) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false); 
    
    // Status update function 
    const statusHandler = async (event, orderId) => {
        try {
            const response = await axios.post(backendUrl + "/api/order/status", {
                orderId,
                status: event.target.value
            }, { headers: { token } });
    
            if (response.data.success) {
                await fetchAllOrders(); 
                toast.success("Order status updated successfully!");
            } else {
                toast.error("Failed to update status.");
            }
        } catch (error) {
            toast.error("Error updating status.");
        }
    }
  
    // Data fetching function
    const fetchAllOrders = async () => {
        if (!token) {
            console.log("Token not available, cannot fetch orders.");
            return null;
        }
  
        setLoading(true);
        try {
            // Admin endpoint call
            const response = await axios.post(
                backendUrl + "/api/order/list",
                {},
                { headers: { token } }
            );
            
            if (response.data.success) {
                // 💡 FIX APPLIED HERE: response.data.orders use kiya
                setOrders(response.data.orders || []); 
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Failed to fetch orders. " + error.message);
        } finally {
            setLoading(false);
        }
    }
  
    useEffect(() => {
        fetchAllOrders();
    }, [token]);
  
    return (
        <div className='order add'> 
            <h3>Order Page</h3>
            {loading && <p>Loading orders...</p>}
            
            <div className="order-list">
                {orders.length === 0 && !loading ? (
                    <p>No orders found.</p>
                ) : (
                    orders.map((order, index) => (
                        <div key={index} className='order-item'>
                            
                            <img src={assets.parcel_icon} alt='Parcel Icon'/>
    
                            <div>
                                {/* Order items list (Safe check) */}
                                <p className='order-item-food'>
                                    {(order.items || []).map((item, i, arr) => (
                                        <span key={i}>
                                            {item.name} x {item.quantity}
                                            {item.size && <span> ({item.size})</span>}
                                            {i === arr.length - 1 ? '' : ', '} 
                                        </span>
                                    ))}
                                </p>
    
                                {/* Address details (Safe check) */}
                                <p className='order-item-name'>
                                    {order.address?.firstName || "N/A"} {order.address?.lastName || ""}
                                </p>
                                <p className='order-item-address'>
                                    {order.address?.street ? order.address.street + ", " : ""}
                                    {order.address?.city ? order.address.city + ", " : ""}
                                    {order.address?.state ? order.address.state + ", " : ""}
                                    {order.address?.zipcode || "N/A"}
                                </p>
                                <p className='order-item-phone'>{order.address?.phone || "N/A"}</p>
                            </div>
                            
                            <p>Items: {order.items?.length || 0}</p>
                            <p>${order.amount}</p> 
                            
                            <select onChange={(e) => statusHandler(e, order._id)} value={order.status}>
                <option value="Order Placed">Order Placed</option>
                 <option value="Out for delivery">Out for delivery</option>
               <option value="Delivered">Delivered</option>
                            </select>
    
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
  
export default Orders;