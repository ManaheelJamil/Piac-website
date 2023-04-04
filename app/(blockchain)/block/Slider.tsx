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
          <h1 className='lg:text-3xl text-xl  underline-offset-8 '>Digital Money, Bitcoin </h1><br/>
          <p className='lg:px-10 px-2 lg:text-xl mb-1  text-xs'>n this module, students will get an introduction to digital money, bitcoin and the blockchain. Students will learn about trestles systems and proof of work. Students will also learn the difference between private, consortium, and public blockchain networks. This module will also provide an introduction to hashing and cryptography.</p>
        </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className={`tablet:flex items-center w-full m-auto z-10`}>
                    <div className='w-full relative'>
                    <div className='border-2 rounded-lg text-center p-3 bg-sky-900 hover:bg-white mx-5 lg:mx-60 lg:mb-5 hover:text-sky-900 lg:mt-5 text-white  lg:py-5'>
          <h1 className='lg:text-3xl text-xl  underline-offset-8 mx-10'>Crypto Tokens</h1><br />
          <p className='lg:px-10 px-2 mb-1 lg:text-xl text-xs'>In this module, students will learn about crypto tokens, how intrinsic tokens come into existence, how bitcoins, ripples, ethereal, and NXT come into existence. Students will also learn the difference between utility and security tokens. This module will also cover the legal implications of token classification. Students will also learn the eight categories of tokens. .</p>
        </div>
                    </div>

                </div>
            </div>

            <div className='w-full'>
                <div className={`tablet:flex items-center w-full m-auto z-10`}>
                    <div className='w-full relative'>
                    <div className='border-2 rounded-lg text-center p-3 bg-sky-900 hover:bg-white mx-5 lg:mx-60 lg:mb-5 hover:text-sky-900 lg:mt-5 text-white  lg:py-5'>
          <h1 className='lg:text-3xl text-xl  underline-offset-8mx-5'>Blockchain Revolution</h1><br />
          <p className='lg:px-10 px-2 lg:text-xl  mb-7 text-xs'>In this module, students will learn how permissionless systems work. Students will also learn about enterprise blockchain and the future of finance. This module will cover how blockchain can disrupt industries including finance, banking, insurance, and even music.
          </p>
        </div>
                    </div>

                </div>
            </div>

            <div className='w-full'>
                <div className={`tablet:flex items-center w-full m-auto z-10`}>
                    <div className='w-full relative'>
                    <div className='border-2 rounded-lg text-center p-3 bg-sky-900 hover:bg-white mx-5 lg:mx-60 lg:mb-5 hover:text-sky-900 lg:mt-5 text-white  lg:py-5'>
          <h1 className='lg:text-3xl text-xl  underline-offset-8'>
            Introduction to Decentralized Apps</h1><br />
          <p className='lg:px-10 px-2 mb-6 lg:text-xl text-xs'>In this module, students will learn about Ethereum, Decentralized Apps, Smart Contracts, and the EVM. Students will learn the benefits of the Ethereum Decentralized Platform and the fourth generation blockchain.</p>
        </div>

                    </div>

                </div>
            </div>
            <div className='w-full'>
                <div className={`tablet:flex items-center w-full m-auto z-10`}>
                    <div className='w-full relative'>
                    <div className='border-2 rounded-lg text-center p-3 bg-sky-900 hover:bg-white mx-5 lg:mx-60 lg:mb-5 hover:text-sky-900 lg:mt-5 text-white  lg:py-5'>
          <h1 className='lg:text-3xl text-xl  underline-offset-8'>Ethereum and Hyperledger Fabric Basics</h1><br />
          <p className='lg:px-10 px-2 lg:text-xl text-xs'>In this module, students will learn about blockchain nodes and how to run them. Students will also learn about the Ethereum ecosystem, Mist, and Faucets. After this completing this module, students will be able to compile, deploy and instantiate contracts.

          </p>
        </div>
                    </div>

                </div>
            </div>

            <div className='w-full'>
                <div className={`tablet:flex items-center w-full m-auto z-10`}>
                    <div className='w-full relative'>
                    <div className='border-2 rounded-lg text-center p-3 bg-sky-900 hover:bg-white mx-5 lg:mx-60 lg:mb-5 hover:text-sky-900 lg:mt-5 text-white  lg:py-5'>
          <h1 className='lg:text-3xl text-xl  underline-offset-8 '>Crypto Mining and Operations</h1><br />
          <p className='lg:px-10 px-2 lg:text-xl  mb-3  text-xs'>In this module students will learn the process by which Bitcoins are mined and what roles do miners play in creation of Bitcoins. The details of this module would help students understand in great details how various mining strategies are applied by various miners and the powerful hardware custom built for mining.</p>
        </div>
                    </div>

                </div>
            </div>

            <div className='w-full'>
                <div className={`tablet:flex items-center w-full m-auto z-10`}>
                    <div className='w-full relative'>
                    <div className='border-2 rounded-lg text-center p-3 bg-sky-900 hover:bg-white mx-5 lg:mx-60 lg:mb-5 hover:text-sky-900 lg:mt-5 text-white  lg:py-5'>
          <h1 className='lg:text-3xl text-xl  underline-offset-8 '>Introduction to Smart Contracts</h1><br />
          <p className='lg:px-10 px-2 lg:text-xl mb-2 text-xs'>In this module students will be introduced to the programming and development side of Blockchain, especially that of Ethereum. The students will learn how to use a Remix IDE to program in Solidity. The students will go over various Blockchain concepts again such as Blockchain Basics, Blockchain Transactions, 
          </p>
        </div>
                    </div>

                </div>
            </div>

        </Slider>
    );
};

export default ImageSlider;