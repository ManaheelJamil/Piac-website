import React from 'react'
import Image from "next/image";
export default function Courses() {
  return (
    <div>

      <div className='mt-20'>
        <div className='&apos;relative bg-cover'>
          <Image alt="image" src="/cloud.png" className='bg-cover mb-20' />
        </div>
        <div >
          <h1 className='absolute inset-0 lg:text-8xl text-2xl text-center md:text-5xl md:mt-48 lg:mt-80 mt-32  text-white'>|  Cloud Native And Mobile Web</h1>
        </div>
      </div>
      <div className='lg:text-6xl md:text-4xl text-2xl lg:mt-40 mt-10 mb-20 font-bold text-white text-center my-10'>
        <h1>| Program Structure</h1>
      </div>
      <div className=' mx-10 lg:flex lg:justify-center md:flex-wrap md:flex md:ml-32 gap-6 grid text-center mt-24 mb-20 text-white'>
        <div className='border-2 rounded-lg lg:w-96 w-60 h-40  mr-2 bg-sky-900 hover:bg-white  hover:text-sky-900'>
          <h1 className='bg-stone-400 py-2 font-bold hover:text-2xl hover:font-bold cursor-pointer'>Quarter 1</h1>
          <p className='mt-10 hover:text-xl hover:font-bold cursor-pointer' >Foundations of Blockchain</p></div>
        <div className='border-2 lg:w-96 w-60 h-40 mr-2 rounded-lg bg-sky-900 hover:bg-white  hover:text-sky-900'>
          <h1 className='bg-stone-400 py-2 font-bold hover:text-2xl hover:font-bold cursor-pointer'>Quarter 2</h1>
          <p className='mt-10 hover:text-xl hover:font-bold cursor-pointer'>Smart Contract Development</p>
        </div>
        <div className='border-2  rounded-lg lg:w-96 w-60 h-40 mr-2 bg-sky-900 hover:bg-white  hover:text-sky-900'>
          <h1 className='bg-stone-400 py-2 font-bold hover:text-2xl hover:font-bold cursor-pointer'>Quarter 3</h1>
          <p className='mt-10 hover:text-2xl hover:font-bold cursor-pointer px-3'>Dapp Development</p>
        </div>
        <div className='border-2 rounded-lg lg:w-96 w-60 h-40 mr-2 bg-sky-900 hover:bg-white  hover:text-sky-900'>
          <h1 className='bg-stone-400 py-2 font-bold hover:text-2xl hover:font-bold cursor-pointer'>Quarter 4 </h1>
          <p className='mt-10 hover:text-xl hover:font-bold cursor-pointer'>Advanced Blockchain Topics</p>
        </div>
      </div>


      <div >
        <h1 className='py-5 lg:text-6xl md:text-3xl text-xl font-bold text-center text-white mt-10 lg:mt-40 mb-10 '>| Detailed Program Structure</h1>
      </div>
      {/* <div className='text-center mt-20  m-auto '>
        <div className='border-2 rounded-lg bg-sky-900 hover:bg-white mx-60 mb-5 hover:text-sky-900 mt-5 text-white  py-5'>
          <h1 className='text-3xl underline-offset-8 '>Digital Money, Bitcoin and Blockchain</h1><br />
          <p className='px-10 text-xs'>n this module, students will get an introduction to digital money, bitcoin and the blockchain. Students will learn about trestles systems and proof of work. Students will also learn the difference between private, consortium, and public blockchain networks. This module will also provide an introduction to hashing and cryptography.</p>
        </div>
        <div className='border-2 rounded-lg  bg-sky-900 hover:bg-white mx-60 mb-5 hover:text-sky-900 mt-5 text-white  py-5'>
          <h1 className='text-3xl underline-offset-8 mx-10'>Crypto Tokens</h1><br />
          <p className='px-10 text-xs'>In this module, students will learn about crypto tokens, how intrinsic tokens come into existence, how bitcoins, ripples, ethereal, and NXT come into existence. Students will also learn the difference between utility and security tokens. This module will also cover the legal implications of token classification. Students will also learn the eight categories of tokens. In this module, students will learn how to create their own utility tokens.</p>
        </div>
        <div className='border-2 rounded-lg bg-sky-900 hover:bg-white mx-60 mb-5 hover:text-sky-900 mt-5 text-white  py-5'>
          <h1 className='text-3xl underline-offset-8 mx-5'>Blockchain Revolution</h1><br />
          <p className='px-10 text-xs'>In this module, students will learn how permissionless systems work. Students will also learn about enterprise blockchain and the future of finance. This module will cover how blockchain can disrupt industries including finance, banking, insurance, and even music.
          </p>
        </div>
        <div className='border-2 rounded-lg  bg-sky-900 hover:bg-white mx-60 mb-5 hover:text-sky-900 mt-5 text-white  py-5'>
          <h1 className='text-3xl underline-offset-8 '>
            Introduction to Decentralized Apps</h1><br />
          <p className='px-10 text-xs'>In this module, students will learn about Ethereum, Decentralized Apps, Smart Contracts, and the EVM. Students will learn the benefits of the Ethereum Decentralized Platform and the fourth generation blockchain.</p>
        </div>
        <div className='border-2 rounded-lg  bg-sky-900 hover:bg-white mx-60 mb-5 hover:text-sky-900 mt-5 text-white  py-5'>
          <h1 className='text-3xl underline-offset-8 '>Ethereum and Hyperledger Fabric Basics</h1><br />
          <p className='px-10 text-xs'>In this module, students will learn about blockchain nodes and how to run them. Students will also learn about the Ethereum ecosystem, Mist, and Faucets. After this completing this module, students will be able to compile, deploy and instantiate contracts. Students will also have an understanding of the different stages of a contract deployment.

          </p>
        </div>
        <div className='border-2 rounded-lg  bg-sky-900 hover:bg-white mx-60 mb-5 hover:text-sky-900 mt-5 text-white  py-5'>
          <h1 className='text-3xl underline-offset-8 '>Crypto Mining and Operations</h1><br />
          <p className='px-10 text-xs'>In this module students will learn the process by which Bitcoins are mined and what roles do miners play in creation of Bitcoins. The details of this module would help students understand in great details how various mining strategies are applied by various miners and the powerful hardware custom built for mining. The students would also learn about the role of consensus in mining and the 51% attacks, how the incentives of mining attract miners and the energy consumption and ecological impact of mining.</p>
        </div>
        <div className='border-2 rounded-lg  bg-sky-900 hover:bg-white mx-60 mb-5 hover:text-sky-900 mt-5 text-white  py-5'>
          <h1 className='text-3xl underline-offset-8 '>Introduction to Smart Contracts</h1><br />
          <p className='px-10 text-xs'>In this module students will be introduced to the programming and development side of Blockchain, especially that of Ethereum. The students will learn how to use a Remix IDE to program in Solidity. The students will go over various Blockchain concepts again such as Blockchain Basics, Blockchain Transactions, and Blockchain Blocks. The students will learn the infrastructural concepts of the Ethereum Blockchain, such as The Ethereum Virtual Machine, how Ethereum Accounts are formed and how Ethereum Transactions occur. They will also go over other concepts like Gas, Storage, Memory and the Stack, Instruction Set, Message Calls, Delegatecall / Callcode and Libraries, Logs, Creating contracts, and Self-destruct.
          </p>
        </div>
        <div className='border-2 rounded-lg  bg-sky-900 hover:bg-white mx-60 mb-5 hover:text-sky-900 mt-5 text-white  py-5'>
          <h1 className='text-3xl underline-offset-8 '>Solidity in Depth</h1><br />
          <p className='px-10 text-xs'>In this module students will take an in depth look at Solidity language and learn about concepts like mapping, data types, events, operators, parameters, control structures, and error handling.Students will also begin creating Solidity contracts, event handling and layout of memory and storage variables.
          </p>
        </div>
       
      </div> */}
    </div>
  )
}




