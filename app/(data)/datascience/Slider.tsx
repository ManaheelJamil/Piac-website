"use client"
import React, { lazy, Suspense } from 'react';

import Image from "next/image";
import 'swiper/css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
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
                    slidesToShow: 2,
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
                <div className='w-full'>
                    <div className={`tablet:flex items-center w-full m-auto z-10`}>
                        <div className='w-full relative'>
                            <div className='border-2 rounded-lg text-center p-3 bg-sky-900 hover:bg-white mx-5 lg:mx-60 lg:mb-5 hover:text-sky-900 lg:mt-5 text-white  lg:py-5'>
                                <h1 className='lg:text-3xl text-xl  underline-offset-8 '>Introduction to Cloud Native Computing</h1><br />
                                <p className='lg:px-10 px-1 lg:text-xl mb-3  text-xs'>Cloud native computing uses open-source software stacks to deploy applications as microservices, packaging each part into its own container and dynamically orchestrating those containers to optimize resource utilization. In the last 15 years, cloud application delivery has moved from being bound to physical servers to running on virtual  
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className={`tablet:flex items-center w-full m-auto z-10`}>
                    <div className='w-full relative'>
                        <div className='border-2 rounded-lg text-center p-3 bg-sky-900 hover:bg-white mx-5 lg:mx-60 lg:mb-5 hover:text-sky-900 lg:mt-5 text-white  lg:py-5'>
                            <h1 className='lg:text-3xl text-xl  underline-offset-8   mx-5 lg:mx-10'>Introduction to Linux and Bash using Python</h1><br />
                            <p className='lg:px-10 px-1 lg:text-xl text-xs'>Linux containers are poised to take over the world; we will start our course with an introduction of Linux and the command line. For many non-technical people, the command line (also referred to as CLI, Terminal, bash, or shell) is a place of mystery. However, you only have to know a handful of basic commands to start feeling comfortable.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='w-full'>
                <div className={`tablet:flex items-center w-full m-auto z-10`}>
                    <div className='w-full relative'>
                        <div className='border-2 rounded-lg text-center p-3 bg-sky-900 hover:bg-white mx-5 lg:mx-60 lg:mb-5 hover:text-sky-900 lg:mt-5 text-white  lg:py-5'>
                            <h1 className='lg:text-3xl text-xl  underline-offset-8  mx-5'>Docker Deep Dive</h1><br />
                            <p className='lg:px-10 px-2 lg:text-xl mb-5 text-xs'>This course provides a soup-to-nuts learning experience for core Docker technologies, including the Docker Engine, Images, Containers, Registries, Networking, Storage, and more. All of the behind the scenes theory is explained, and all concepts are clearly demonstrated on the command line. No prior knowledge of Docker or Linux is required.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='w-full'>
                <div className={`tablet:flex items-center w-full m-auto z-10`}>
                    <div className='w-full relative'>
                        <div className='border-2 rounded-lg text-center p-3 bg-sky-900 hover:bg-white mx-5 lg:mx-60 lg:mb-5 hover:text-sky-900 lg:mt-5 text-white  lg:py-5'>
                            <h1 className='lg:text-3xl text-xl  underline-offset-8 '>JavaScript/TypeScript Programming</h1><br />
                            <p className='lg:px-10 px-2 lg:text-xl text-xs'>JavaScript is the default language of the web and the first universal programming language. In this module, students will dig through all the genuinely elegant parts of JavaScript, including syntax, objects, functions, inheritance, arrays, methods, etc. This module will build a solid foundation in functional and object-oriented programming using JavaScript (ES 2016) and TypeScript using Node.js. </p>
                        </div>

                    </div>

                </div>
            </div>
            <div className='w-full'>
                <div className={`tablet:flex items-center w-full m-auto z-10`}>
                    <div className='w-full relative'>
                        <div className='border-2 rounded-lg text-center p-3 bg-sky-900 hover:bg-white mx-5 lg:mx-60 lg:mb-5 hover:text-sky-900 lg:mt-5 text-white  lg:py-5'>
                            <h1 className='lg:text-3xl text-xl  underline-offset-8 '>JavaScript/TypeScript Programming</h1><br />
                            <p className='lg:px-10 px-2 lg:text-xl text-xs'>JavaScript is the default language of the web and the first universal programming language. In this module, students will dig through all the genuinely elegant parts of JavaScript, including syntax, objects, functions, inheritance, arrays, methods, etc. This module will build a solid foundation in functional and object-oriented programming using JavaScript (ES 2016) and TypeScript using Node.js.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='w-full'>
                <div className={`tablet:flex items-center w-full m-auto z-10`}>
                    <div className='w-full relative'>
                        <div className='border-2 rounded-lg text-center p-3 bg-sky-900 hover:bg-white mx-5 lg:mx-60 lg:mb-5 hover:text-sky-900 lg:mt-5 text-white  lg:py-5'>
                            <h1 className='lg:text-3xl text-xl  underline-offset-8 '>Developing Microservices using Node.js and Express</h1><br />
                            <p className='lg:px-10 px-2 lg:text-xl  text-xs'>This module includes how to build microservices using Node.js. It starts by introducing Node’s powerful traits and shows students how they map to the features of microservices using JavaScript. Students will explore key development techniques, meet the rich ecosystem of companion tools and libraries, and get a glimpse into its inner workings.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='w-full'>
                <div className={`tablet:flex items-center w-full m-auto z-10`}>
                    <div className='w-full relative'>
                        <div className='border-2 rounded-lg text-center p-3 bg-sky-900 hover:bg-white mx-5 lg:mx-60 lg:mb-5 hover:text-sky-900 lg:mt-5 text-white  lg:py-5'>
                            <h1 className='lg:text-3xl text-xl  underline-offset-8  '>Version Control with Git</h1><br />
                            <p className='lg:px-10 px-2 lg:text-xl  mb-10 text-xs'>You won’t find a top programmer, cloud developer, or AI engineer who doesn’t use version control. This is true because version control helps developers produce better results and makes collaboration easy. Around the world, in teams both large and small, Git is an essential part of the toolchain. This module covers Git and Github.</p>
                        </div>
                    </div>

                </div>
            </div>

        </Slider>
    );
};

export default ImageSlider;