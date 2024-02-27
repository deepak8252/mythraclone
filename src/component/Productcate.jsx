import React from 'react'
import { brand } from '../util/Hero'
import { Link, useParams } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Productcate = () => {
   
  return (
<>
<h2 className=' my-5 text-center capitalize font-serif font-semibold'>all product cateogery</h2>
<div className='flex flex-wrap gap-5 items-center justify-between px-12'>
       
       {
           brand.map((item)=>(
               <>
               <Link to={`/product/${item.id}`} key={item.id} className=' -z-0 relative cursor-pointer  my-4 bg-white shadow-lg w-60 flex justify-center items-center flex-col p-4 '>
                <span className=' absolute right-2 top-3'><FavoriteBorderIcon/></span>
                   <img src={item.img} alt="" className='w-44 h-44' />
                   <p className='mt-4 font-bold capitalize'>rs{" "}{item.defprice}</p>
        <p className='font-bold capitalize'>{item.cateo}</p>
        <div>
          <button className='bg-orange-500 text-white py-2 px-3 capitalize font-semibold shadow-lg' > view product </button>
               </div>
               </Link>
               </>
           ))
       }
   </div>
</>
  )
}

export default Productcate