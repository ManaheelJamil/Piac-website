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
                    <div className={`tablet:flex items-center w-full m-auto pb-20 z-10`}>
                        <div className='w-full relative'>
                            <div className='border-2 rounded-lg text-center p-3 bg-sky-900 hover:bg-white mx-5 lg:mx-60 lg:mb-5 hover:text-sky-900 lg:mt-5 text-white  lg:py-5'>
                                <h1 className='lg:text-3xl text-xl  underline-offset-8 '>Version Control with Git</h1><br />
                                <p className='lg:px-10 px-2 lg:text-xl mb-5 text-xs'>
                                    You won't find a top programmer, web developer, or AI engineer who doesn't use version control.
                                    This is true because version control helps developers produce better results and makes collaboration easy. Around the world, in teams both large and small, Git is an essential part of the toolchain. This module covers Git and Github.</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className={`tablet:flex items-center w-full m-auto z-10`}>
                    <div className='w-full relative'>
                        <div className='border-2 rounded-lg text-center p-3 bg-sky-900 hover:bg-white mx-5 lg:mx-60 lg:mb-5 hover:text-sky-900 lg:mt-5 text-white  lg:py-5'>
                            <h1 className='lg:text-3xl text-xl  underline-offset-8 mx-2 lg:mx-10'>Object Oriented & Functional Programming </h1>
                            <p className='lg:px-10 px-2 lg:text-xl text-xs'>In the second module of the program, students will learn about basic programming concepts such as lists, dictionaries, classes, functions and loops,
                                and practice writing clean and readable code with exercises for each topic. Students will also learn how to make programs interactive and how to test code safely before adding it to a project. </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='w-full'>
                <div className={`tablet:flex items-center w-full m-auto z-10`}>
                    <div className='w-full relative'>
                        <div className='border-2 rounded-lg text-center p-3 bg-sky-900 hover:bg-white mx-5 lg:mx-60 lg:mb-5 hover:text-sky-900 lg:mt-5 text-white  lg:py-5'>
                            <h1 className='lg:text-3xl text-xl  underline-offset-8  mx-5'>Introduction to Linear Algebra and Statistics</h1><br />
                            <p className='lg:px-10 px-2 mb-3 lg:text-xl text-xs'>
                                In this module, students will learn the basic mathematical and statistical concepts that are needed to practice data science and understand deep learning.
                                Students will also implement these concepts in Python and TensorFlow</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='w-full'>
                <div className={`tablet:flex items-center w-full m-auto z-10`}>
                    <div className='w-full relative'>
                        <div className='border-2 rounded-lg text-center p-3 bg-sky-900 hover:bg-white mx-5 lg:mx-60 lg:mb-5 hover:text-sky-900 lg:mt-5 text-white  lg:py-5'>
                            <h1 className='lg:text-3xl text-xl  underline-offset-8  '>Advanced Python Libraries with Anaconda</h1><br />
                            <p className='lg:px-10 px-2 lg:text-xl text-xs'>In this module, students will be introduced to Anaconda, the leading open data science platform powered by Python.
                                The open source version of Anaconda is a high performance distribution of Python and R and includes over 100 of the most popular Python and R packages for data science, such as NumPy, Matplotlib, etc.</p>
                        </div>

                    </div>

                </div>
            </div>
            <div className='w-full'>
                <div className={`tablet:flex items-center w-full m-auto z-10`}>
                    <div className='w-full relative'>
                        <div className='border-2 rounded-lg text-center p-3 bg-sky-900 hover:bg-white mx-5 lg:mx-60 lg:mb-5 hover:text-sky-900 lg:mt-5 text-white  lg:py-5'>
                            <h1 className='lg:text-3xl text-xl  underline-offset-8 '>The Fundamentals of Deep Learning </h1><br />
                            <p className='lg:px-10 px-2 lg:text-xl text-xs'>Before implementing deep-learning algorithms, students will first become familiar with the mathematical blocks of the neural networks theory.
                                Students will get a chance to get their hands dirty writing some simple Keras code right away! Then they will move on to advanced deep learning concepts. </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='w-full'>
                <div className={`tablet:flex items-center w-full m-auto z-10`}>
                    <div className='w-full relative'>
                        <div className='border-2 rounded-lg   text-center p-3 bg-sky-900 hover:bg-white mx-5 lg:mx-60 lg:mb-5 hover:text-sky-900 lg:mt-5 text-white  lg:py-5'>
                            <h1 className='lg:text-3xl text-xl  underline-offset-8 '>Data Science Essentials</h1><br />
                            <p className='lg:px-10 px-2 lg:text-xl mb-14 text-xs'>In this module, students will learn key concepts and techniques used to perform data science; including statistical analysis, data cleansing and transformation, and data visualization with Python.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='w-full'>
                <div className={`tablet:flex items-center w-full m-auto z-10`}>
                    <div className='w-full relative'>
                        <div className='border-2 rounded-lg text-center p-3 bg-sky-900 hover:bg-white mx-5 lg:mx-60 lg:mb-5 hover:text-sky-900 lg:mt-5 text-white  lg:py-5'>
                            <h1 className='lg:text-3xl text-xl  underline-offset-8 '>Introduction to Linux and Bash</h1><br />
                            <p className='lg:px-10 px-2 lg:text-xl mb-5 text-xs'>Linux containers are poised to take over the world.
                                In this module, students will begin learning with an introduction of Linux and the command line interface. For many non-technical people, the command line (also referred to as CLI, Terminal, bash, or shell) is a place of mystery. </p>
                        </div>
                    </div>

                </div>
            </div>

        </Slider>
    );
};

export default ImageSlider;