import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cartproduct=useSelector((state)=>state.cart.cartitem)
  return (
   <>
   
     {
      cartproduct.length==0?<div className='text-center my-4 capitalize'>
      <h2 className='my-4'>cart is empty </h2>
      <Link to={"/"} className='border no-underline bg-orange-500 text-white py-2 px-4 my-3 capitalize text-2xl'>Please continue shopping</Link>
      </div>: <div className='flex flex-col justify-center items-center p-5 gap-5 shadow-2xl border-2'>
      {
        cartproduct.map((item)=>(
          <>
           <div className='w-1/2 sm:full gap-10  shadow-xl flex  items-center p-4 '>
             <img src={item.img} alt=""  className='w-40'/>
              <div>
              <p className=' text-2xl capitalize font-bold'>{item.defprice} Rs</p>
              <p className=' text-2xl capitalize font-bold'>{item.cateo}</p>
              <button className='bg-orange-500 text-white py-2 px-3 text-2xl rounded-lg shadow-xl'>check out</button>
              </div>
           </div>
          </>
        ))
      } 
  </div>
     }
   
   </>
  )
}

export default Cart