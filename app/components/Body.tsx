
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Body = () => {
  return (
    <div>
      <div className='  lg:flex lg:mx-20 lg:mt-48 mt-40'>
        <div className='flex justify-center lg:w-[90%]'>
           <Image  alt="image"src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/President_of_Pakistan_Dr_Arif_Alvi_%28cropped%29.jpg/220px-President_of_Pakistan_Dr_Arif_Alvi_%28cropped%29.jpg " className='rounded-2xl justify-center lg:h-96  ' />
        </div>
        <div className='ml-5 lg:mr-10'>
          <h1 className='text-4xl lg:ml-16  lg:text-6xl md:text-center mt-5 font-bold text-white'>President Of Pakistan Arif Alvi</h1>
          <p className=' text-sm lg:ml-16 md:text-center md:mx-10 lg:text-lg mt-10 text-white'>
            President Dr. Arif Alvi launching the Official website of the PIAIC on December 2018
            from left to right: Mr.Adil Altaf(Director Panacloud), Mr. Zia Ulla Khan(CEO Panacloud),
            Mr. Hunaid Lakhani(Chancellor Iqra University),President Dr. Arif Alvi , Mr. Sulaiman S. Mehndi
            (Chairman Pakistan Stock Exchange) , Mr. Zeeshan Hanif(CTO Panacloud) Maulana Bashir Farooqui
            (Founder Sylani Welfare Trust)
          </p>
          <button className='text-xl border-2 lg:text-2xl lg:font-bold  lg:px-4 lg:py-3 md:ml-80 lg:ml-80 text-white py-2 px-3 rounded-full hover:bg-white hover:text-sky-900 mt-5'>Apply Here</button>
        </div>
      </div>
    </div>
  )
}

export default Body
