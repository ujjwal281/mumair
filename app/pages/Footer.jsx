"use client"

import React from 'react'
import Media from '../components/media'
import { SOCIALMEDIA } from '@/constants'
import { motion } from 'framer-motion'


const Footer = () => {
  return (
    <motion.div  className="mt-28 bg-blue-gray-800"
    whileInView={{opacity : 1 , y: 0 }}
      initial ={{opacity : 0 , x:0}}
      transition={{duration : 1.5}}
    >
        <div className='flex flex-col items-center gap-4 bg-gray-200 py-9 w-full '>
      <div className="flex justify-center gap-7 mt-6">
        <div style={{ fontFamily: "Corvetta Personal Use"}} className=" text-xl flex justify-center rounded-full items-center bg-orange-500 text-white py-4 ">MU</div>
        <div className=" flex text-4xl justify-center items-center">
          <span className=" font-bold ">M</span>
          umair
        </div>
      </div>

        <div className=" list-none flex gap-3 justify-center items-center font-medium text-sm">
          <li className="p-2">Home</li>
          <li className="p-2">About</li>
          <li className="p-2">Services</li>
          <li className="p-2">Projects</li>
          <li className="p-2">Testimonals</li>
          <li className="p-2">Contact</li>
        </div>

        <div className='flex justify-center gap-4'>
          {
            SOCIALMEDIA.map((media,index)=>{
              return <Media key={index} media={media} />

            })
          }
        </div>


        </div>

        <footer  className='flex justify-center text-white py-3 items-center mt-1'>
            @ 2023 <span className='text-orange-300 mx-1'>Munair</span> All Rights Reserved , Inc
        </footer>
    </motion.div>
  )
}

export default Footer