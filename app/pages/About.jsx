"use client"
import Image from 'next/image'
import React from 'react'
import ProgressBar from '../components/ProgressBar'
import { motion } from 'framer-motion'
import { METER } from '@/constants'

const About = () => {
  return (
      <motion.div className='md:grid md:grid-cols-2 flex flex-col-reverse items-center justify-center'
      whileInView={{opacity : 1 , y: 0 }}
      initial ={{opacity : 0 , x:0}}
      transition={{duration : 1.5}}
      >
      <section className='flex flex-col items-start pt-16 justify-end md:m-0 m-20'>
          <section className='relative'>
          <div className='absolute bg-orange-900 w-4/5 h-1/6 left-8 z-20 opacity-30 -top-4'>
          </div>
            <Image
            style={{ scale : "1.22" , top : "-47px"}}
            className=' absolute'
            src='/face/face3.png'
            alt='face'
            height='300'
            width= '300'
            />
          <Image
          className='rounded-full shadow-inner border-red-200 '
          src='/face/face4.png'
          alt='face'
          height='300'
          width='300'
          />

        </section>
          </section>
        <section className='flex flex-col md:justify-start justify-center md:w-full w-4/5'>
          <div className='text-3xl font-bold md:justify-start justify-center flex'>About Me</div>
          <p className='mt-3 md:text-start text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, commodi a esse explicabo eaque libero voluptates, voluptas fugit alias ea quisquam necessitatibus tenetur aliquam perferendis vitae deleniti molestiae odit doloribus!</p>
          <div className=' flex flex-col gap-2'>
            {
              METER.map((meter,index)=>{
                return <ProgressBar key={index} meter = {meter.title} perc = {meter.perc}/>
              })
            }
          </div>
        </section>
      </motion.div>
  )
}

export default About