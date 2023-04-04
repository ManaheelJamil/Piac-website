"use client"
import React from 'react';
import 'swiper/css';
import Image from "next/image";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

const ImageSlider = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleHover = (hovering: any) => {
        setIsHovering(hovering);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true,
          autoplay: true,
          autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        beforeChange: (currentSlide: any, nextSlide: any) => {
            if (isHovering) {
                return false;
            }
        },
        afterChange: () => {
            setIsHovering(false);
        },
    };

    return (
        <Slider {...settings}>

            <div onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)} >
                <div className='lg:mx-40 mx-0'>
                    <div className={`m-auto`}>
                        <div className='m-auto'>
                            <Image className="rounded-md drop-shadow-2xl" src={"/pic1.jpg"} alt="Slide 1" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:mx-40 mx-0'>
                    <div className={''}>
                        <div className='h-96'>
                            <Image className=" " src={"/pic2.jpg"} alt="Slide 1" />
                        </div>
                    </div>
                </div>
            
            <div className='lg:mx-40 mx-0'>
                    <div className={``}>
                        <div className='lg:h-96 h-60'>
                            <Image className=" " src={"/pic3.jpg"} alt="Slide 1" />
                        </div>
                    </div>
                </div>
            
            {/* <div className='mx-40'>
                    <div className={``}>
                        <div className='w-96 h-96'>
                            <img className="  " src={"/pic4.jpg"} alt="Slide 1" />
                        </div>
                    </div>
                </div>
             */}
        </Slider>
    );
};

export default ImageSlider;