import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { brand } from '../util/Hero'; // Fix typo in import statement
import { Link, useParams } from 'react-router-dom';


const Brand1 = () => {
  // Set a default value for pro if it's undefined
  // pro = pro || 'default';

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='mt-16 px-10 py-10 bg-violet-300'>
      <h2 className='pb-5 text-center'>MEDAL WORTHY BRANDS TO BAG</h2>
      <div className=''>
        <Slider {...settings}>
          {
            brand.map(item => (
              <>
                    <div className='sm:w-52 w-full mx-auto'>
                    <Link to={`/product/${item.id}`} className='p-4 rounded-lg bg-white cursor-pointer shadow-xl no-underline  flex flex-col justify-center items-center' key={item.id}>
                <img src={item.img} alt="" className='w-52  h-52' />
                <p className='font-bold capitalize text-black no-underline text-lg py-3'>{item.price} rs</p>
              </Link>
                    </div>
              </>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default Brand1;
