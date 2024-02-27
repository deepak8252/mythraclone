import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Productcate from './Productcate';
import { brand } from '../util/Hero';
import { Addtocart } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

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
    <div className='flex py-10 bg-indigo-300 flex-wrap gap-10 justify-center items-center'>
      {relatedProduct && relatedProduct.map((item) => (
        <div  className='flex py-5 items-center shadow-lg p-3 justify-center bg-teal-200 flex-col w-72 rounded-2xl' key={item.id}>
        <img  src={item.img} alt="" className=' w-52 h-52 rounded-2xl' />
        <div className='flex justify-center mt-3 items-center gap-6'>
        <p className=' font-bold capitalize'>rs{" "}{item.defprice}</p>
        <p className='font-bold capitalize'>{item.cateo}</p>
        </div>
        <div>
          <button className='bg-orange-500 text-white py-2 px-3 capitalize font-semibold shadow-lg'onClick={()=>addtocart(item)} > buy now </button>
         
        </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
