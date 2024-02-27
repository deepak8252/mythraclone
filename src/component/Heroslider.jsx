import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { herodata } from '../util/Hero';
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    navs:false,
    slidesToShow: 1,
    slidesToScroll: 1
  };
const Heroslider = () => {
  return (
    <div className=" w-full -z-10">
      <div className='row'>
            <Slider {...settings}>

        {
            herodata.map(item=>(
                <>
                 <div className=''>
                    <img src={item.img} alt=""  className='h-52 ' />
                 </div>
                </>
            ))
        }
        </Slider>
    </div>
    </div>
  )
}

export default Heroslider