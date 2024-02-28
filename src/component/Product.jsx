import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Productcate from './Productcate';
import { brand } from '../util/Hero';
import { Addtocart } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import StarIcon from '@mui/icons-material/Star';
const Product = () => {
  const { pro } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const dispatch=useDispatch();
 
  useEffect(() => {
    const filterdata = brand.filter((item) => item.id == pro);
    const productFound = filterdata[0];
    setProduct(productFound);

    if (productFound) {
      const realadted = brand.filter((products) => products.cateo === productFound.cateo);
      setRelatedProduct(realadted);
    }
  }, [pro]);
  const addtocart=(item)=>{
    dispatch(Addtocart(item))
    
   }
  return (
   <>
   <div className='p-2 bg-blue-200 px-5 py-4 rounded-2xl sm:p-5 sm:w-9/12 w-full flex-col  sm:flex-row  mx-auto sm:my-5 my-2 flex items-center justify-center '>
    <img src={product.img} alt={product.cateo} className=' sm:w-64 w-9/12 h-64 shadow-lg rounded-2xl mr-6' />
    <div className='text-center'>
      <p className=' text-center font-bold capitalize text-3xl text-teal-600'>{product.cateo}</p>
      <p className='text-center  font-bold capitalize text-3xl text-teal-600'>RS{" "}{product.defprice}</p>
      <p className=' text-center font-bold capitalize text-3xl text-blue-600'>product details</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, inventore fugiat officiis molestiae, excepturi, minima beatae obcaecati id laudantium atque consequatur sit deserunt soluta voluptas facilis? Magni dolores consequuntur alias.</p>
      <button className='bg-orange-500 text-white py-2 px-3 capitalize font-semibold shadow-lg'onClick={()=>addtocart(product)} > buy now </button>
    </div>
   </div>
   <h2 className='text-center my-4'>Related product</h2>
    <div className='flex  py-10 bg-indigo-100 flex-wrap gap-10 justify-center items-center'>
      
      {relatedProduct && relatedProduct.map((item) => (
        <Link to={`/product/${item.id}`}className='flex py-5 no-underline text-black items-center shadow-lg p-3 justify-center bg-white flex-col w-72 rounded-2xl' key={item.id}>
        <img  src={item.img} alt="" className=' w-52 h-52 rounded-2xl' />
        <div className='flex justify-center mt-3 items-center gap-6'>
        <p className=' font-bold capitalize'>rs{" "}{item.defprice}</p>
       
       <p className='font-bold capitalize'>{item.cateo}</p>
        <p className='text-orange-500 '>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
        </p>
     
        </div>
        <div>
          <button className='bg-orange-500 text-white py-2 px-3 capitalize font-semibold shadow-lg'onClick={()=>addtocart(item)} > buy now </button>
         
        </div>
        </Link>
      ))}
    </div>
   </>
  );
};

export default Product;
