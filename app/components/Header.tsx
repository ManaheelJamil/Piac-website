// "use client"
// import Link from 'next/link'
// import React from 'react'
// import Typewriter from "typewriter-effect";
// const Navbar = () => {

//   return (
//     <>  
//         {/* wave image */}
//         <div className=' inset-0  mt-48'>
//           <div className='relative '><Image src="/bg.jpg" className=' h-96 mt-14'/>
//             <p className='absolute inset-0 text-center mt-40 text-7xl shadow-2xl text-white mx-5'> 
//                <Typewriter
//         onInit={(typewriter) => {
//           typewriter.typeString('| Available Program')
//             .callFunction(() => {
//               console.log('String typed out!');
//             })
//             .pauseFor(2500)
//             // .deleteAll()
//             .callFunction(() => {
//               console.log('All strings were deleted');
//             })
//             .start();
//         }}
//       /></p>
//           </div>
//        <div className='flex justify-around mx-10  text-center mt-24 mb-40 text-white'>
//         <div className='border-2 rounded-lg w-96 h-40 mr-2 bg-sky-900 hover:bg-white  hover:text-sky-900'>
//           <h1 className='bg-stone-400 py-2 font-bold'>Quarter 1</h1>
//           <p className='mt-10 hover:text-2xl hover:font-bold cursor-pointer' ><Link href="/course1">Artificial Intelligence</Link></p></div>
//         <div className='border-2 w-96 mr-2 rounded-lg bg-sky-900 hover:bg-white  hover:text-sky-900'>
//           <h1 className='bg-stone-400 py-2 font-bold'>Quarter 2</h1>
//           <p className='mt-10 hover:text-xl hover:font-bold cursor-pointer'><Link href="/block">Cloud Native And Mobile Web</Link></p>
//         </div>
//         <div className='border-2  rounded-lg w-96 mr-2 bg-sky-900 hover:bg-white  hover:text-sky-900'>
//           <h1 className='bg-stone-400 py-2 font-bold'>Quarter 3</h1>
//           <p className='mt-10 hover:text-2xl hover:font-bold px-3 cursor-pointer'><Link href="datascience">Blockchain</Link></p>
//         </div>
//         <div className='border-2 rounded-lg w-96 mr-2 bg-sky-900 hover:bg-white  hover:text-sky-900'>
//           <h1 className='bg-stone-400 py-2 font-bold'>Quarter 4 </h1>
//           <p className='mt-10 hover:text-xl hover:font-bold cursor-pointer'><Link href="">Internet of Things and AI</Link></p>
//         </div>
//      </div>
//    </div>
//     </>
//   )
// }
// export default Navbar

"use client"
import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import Typewriter from "typewriter-effect";
const Navbar = () => {

  return (
    <>  
        {/* wave image */}
        <div className=' inset-0 lg:mt-60 mt-20'>
          <div className='relative '><Image  alt="image"src="/bg.jpg" className=' h-32 lg:h-80 md:h-60 lg:mx-2 shadow-2xl mt-0'/>
            <p className='absolute inset-0 text-center mt-14 md:text-6xl md:mt-20 text-3xl shadow-2xl lg:text-6xl lg:mt-40 text-white mx-5'> 
               <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('| Available Program')
            .callFunction(() => {
              console.log('String typed out!');
            })
            .pauseFor(2500)
            // .deleteAll()
            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .start();
        }}
      /></p>
          </div>
       <div className='mx-10 lg:flex lg:justify-center md:flex-wrap md:flex md:ml-32 gap-6 grid text-center mt-24 mb-20 text-white'>
        <div className='border-2 rounded-lg w-60 lg:w-96 h-40 mr-2  bg-sky-900 hover:bg-white  hover:text-sky-900'>
          <h1 className='bg-stone-400 py-2 font-bold'>Quarter 1</h1>
          <p className='mt-10 hover:text-2xl hover:font-bold cursor-pointer' ><Link href="/course1">Artificial Intelligence</Link></p></div>
        <div className='border-2 w-60 mr-2 h-40 lg:w-96 rounded-lg bg-sky-900 hover:bg-white  hover:text-sky-900'>
          <h1 className='bg-stone-400 py-2 font-bold'>Quarter 2</h1>
          <p className='mt-10 hover:text-xl hover:font-bold cursor-pointer'><Link href="/block">Cloud Native And Mobile Web</Link></p>
        </div>
        <div className='border-2  rounded-lg h-40 lg:w-96 w-60 mr-2 bg-sky-900 hover:bg-white  hover:text-sky-900'>
          <h1 className='bg-stone-400 py-2 font-bold'>Quarter 3</h1>
          <p className='mt-10 hover:text-2xl hover:font-bold px-3 cursor-pointer'><Link href="datascience">Blockchain</Link></p>
        </div>
        <div className='border-2 rounded-lg w-60 h-40  lg:w-96 mr-2 bg-sky-900 hover:bg-white  hover:text-sky-900'>
          <h1 className='bg-stone-400 py-2 font-bold'>Quarter 4 </h1>
          <p className='mt-10 hover:text-xl hover:font-bold cursor-pointer'><Link href="">Internet of Things and AI</Link></p>
        </div>
     </div>
   </div>
    </>
  )
}
export default Navbar

