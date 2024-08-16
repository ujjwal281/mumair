"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'


const Home = () => {
  return (
      <motion.div whileInView={{opacity : 1 , y: 0 }}
      initial ={{opacity : 0 , x:0}}
      transition={{duration : 1.5}}
       className='md:grid md:grid-cols-2 flex flex-col justify-center items-center gap-7'>
        <section className='pr-16 flex flex-col max-md:justify-center md:w-full w-4/5'>
          <h1 className='font-semibold '>Hi ,I am</h1>
          <header className='font-semibold text-orange-600'>Muhammad Umair</header>
          <div className='text-6xl font-extrabold '>UI & UX</div>
          <div className='text-6xl font-extrabold flex lg:justify-end'>Designer</div>
          <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, commodi a esse explicabo eaque libero voluptates, voluptas fugit alias ea quisquam necessitatibus tenetur aliquam perferendis vitae deleniti molestiae odit doloribus!</p>
          <motion.button  whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}  className='bg-orange-600 p-2 rounded-lg px-8 text-white flex justify-center items-center w-fit mt-4'>Hire Me</motion.button>
        </section>

        <section className='flex flex-col items-end justify-end pt-16 w-60 '>
          <section className='relative w-full'>
            <div className='absolute bg-orange-900 w-4/5 h-1/5 left-8 z-20 opacity-30 -top-7'>
            </div>
            <Image
            style={{ scale : "1.11" , top : "-58px", left : "5px"}}
            className=' absolute -top-14 left-1 '
            src='/face/face1.png'
            alt='face'
            height='300'
            width= '300'
            />
          <Image
          className='rounded-full shadow-inner border-red-200 '
          src='/face/face2.png'
          alt='face'
          height='250'
          width='250'
          />

        </section>
          </section>
      </motion.div>
  )
}

export default Home