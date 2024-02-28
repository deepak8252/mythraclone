import React, { useEffect, useState } from 'react';
import { brand } from '../util/Hero';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Addtocart } from '../store/cartSlice';

const SearchTerm = () => {
    const { term } = useParams();
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        let searchFilter = brand.filter((item) => item.cateo.toLowerCase().includes(term.toLowerCase()));
        setProducts(searchFilter);
    }, [term]);

    const addtocart = (itemId) => {
        dispatch(Addtocart(itemId));
    };

    return (
        <div className='flex bg-gray-100 justify-between items-center flex-wrap mx-auto'>
            {products.length > 0 ? (
                products.map((item, index) => (
                    <Link to={`/product/${item.id}`} key={item.id} className='flex py-5 items-center shadow-lg p-3 justify-center bg-teal-200 flex-col mx-auto my-3 w-72 rounded-2xl'>
                        <img src={item.img} alt="" className='w-52 h-52 rounded-2xl' />
                        <div className='flex justify-center mt-3 items-center gap-6'>
                            <p className='font-bold capitalize'>rs {item.defprice}</p>
                            <p className='font-bold capitalize'>{item.cateo}</p>
                        </div>
                        <div>
                            <button className='bg-orange-500 text-white py-2 px-3 capitalize font-semibold shadow-lg' onClick={() => addtocart(item.id)}>Buy Now</button>
                        </div>
                    </Link>
                ))
            ) : (
                <p>No products found</p>
            )}
        </div>
    );
};

export default SearchTerm;
