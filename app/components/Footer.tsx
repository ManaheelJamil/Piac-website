import React from 'react';
import {CiFacebook} from 'react-icons/ci'
import {BsTwitter} from 'react-icons/bs'
import {RiWhatsappFill} from 'react-icons/ri'
import {AiFillInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <>
    <div className='bg-gray-500  mt-20 pt-5 px-10 lg:px-40 lg:py-10 lg:mt-40 pb-10'>
        <div className='border-2 md:ml-96  rounded-full flex lg:ml-60 w-60  lg:pl-2 pl-0 lg:w-96 lg:mb-10 lg:py-1   '>
            <input type="text" placeholder=' E-Mail' className='ml-2 w-20  bg-gray-500   text-center  ' /><button className=' rounded-full bg-gray-300 lg:px-8 ml-9 px-2 text-sm py-1 lg:ml-32 lg:py-3' >Subscribe Now</button>
        </div>
        <div className='lg:flex mt-10 md:flex justify-around'>
            <div>
                <ul>
                   <li className='lg:text-xl text-md font-bold underline underline-offset-2'>Partnership</li>
                    <li>Sylani</li>
                    <li>Pana Cloud</li>
                </ul>
            </div>
            <div>
                <ul>
                   <li className='lg:text-xl mt-5 text-md font-bold underline underline-offset-2'>About Us</li>
                    <li>Our Projects</li>
                    <li>Carrer</li>
                </ul>
            </div>
            <div>
                <ul>
                   <li className='lg:text-xl text-md mt-5 font-bold underline underline-offset-2'>Contact Us</li>
                    <li>Whatsapp</li>
                    <li>Help Line</li>
                    <li>Facebook</li>
                </ul>
            </div>
        </div>
    </div><hr/>
    <footer className=" py-4 text-center ">
      <div className="container mx-auto  text-sm  text-white">
        <p>&copy; 2023 My Company. All Rights Reserved.</p>
      </div>
      <div >
        <ul className='flex   justify-center mt-2'>
            <li><CiFacebook/></li>
            <li><BsTwitter/></li>
            <li><RiWhatsappFill/></li>
            <li><AiFillInstagram/></li>
        </ul>
      </div>
    </footer>
    </>
  );
};

export default Footer;