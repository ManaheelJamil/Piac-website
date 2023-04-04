import React from 'react'
import Image from "next/image";
export default function Courses() {
  return (
    <>
        <div className='mt-20'>
          <div className='relative'>
          <Image alt='image'src='/ai.jpg'/>
          </div>
          <div >
            <h1 className='absolute inset-0 lg:text-8xl text-2xl text-center md:text-5xl md:mt-48 lg:mt-80 mt-32  text-white'>|  Artificial Intelligence</h1>
          </div>
        </div>     
       <div className='lg:text-6xl md:text-4xl text-2xl lg:mt-40 mt-10 mb-20 font-bold text-white text-center my-10'>
        <h1>Program Structure</h1>
      </div>
      <div className='mx-10 lg:flex lg:justify-center md:flex-wrap md:flex md:ml-32 gap-6 grid text-center mt-24 mb-20 text-white'>
        <div className='border-2 rounded-lg lg:w-96 w-60 h-40 mr-2 bg-sky-900 hover:bg-white  hover:text-sky-900'>
          <h1 className='bg-stone-400 py-2 font-bold '>Quarter 1</h1>
          <p className='mt-10 hover:text-2xl hover:font-bold cursor-pointer' >AI Foundations</p></div>
        <div className='border-2 lg:w-96 h-40 w-60 mr-2 rounded-lg bg-sky-900 hover:bg-white  hover:text-sky-900'>
          <h1 className='bg-stone-400 py-2 font-bold'>Quarter 2</h1>
          <p className='mt-10 hover:text-2xl hover:font-bold cursor-pointer'>Introduction to Data Science & Deep Learning</p>
        </div>
        <div className='border-2  rounded-lg  h-40 lg:w-96 w-60 mr-2 bg-sky-900 hover:bg-white  hover:text-sky-900'>
          <h1 className='bg-stone-400 py-2 font-bold'>Quarter 3</h1>
          <p className='mt-10  hover:text-2xl hover:font-bold cursor-pointer px-3'>Deploying AI Solutions</p>
        </div>
        <div className='border-2 rounded-lg  h-40 lg:w-96 w-60 mr-2 bg-sky-900 hover:bg-white  hover:text-sky-900'>
          <h1 className='bg-stone-400 py-2 font-bold'>Quarter 4 </h1>
          <p className='mt-10 hover:text-2xl hover:font-bold cursor-pointer'>All in Practice</p>
        </div>
      </div>
      <div className="relative mt-10">
        <div className='absolute inset-0  '>
        
        </div>
      </div>
      <div >
        <h1 className='py-5 lg:text-6xl md:text-3xl text-xl font-bold text-center text-white mt-10 lg:mt-40 mb-10 '>| Detailed Program Structure</h1>
      </div>
    </> 
  )
}


