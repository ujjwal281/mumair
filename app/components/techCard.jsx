import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const TechCard = ({image}) => {
  return (
    <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
     className=' flex-col bg-gray-100 p-6 rounded-xl flex justify-center w-fit md:items-start items-center cursor-pointer'>
      <div className=' flex justify-start items-center p-2'>
        <Image
        className='h-fit w-fit'
        src={`/tech/${image}.png`}
        width={40}
        height={60}
        alt=''
        />
      </div>
      <h1 className=' font-bold text-2xl'>Web Design</h1>
      <div>asdasdasdd a sd asdas d asd ad aas d  s d ad sd  w as da d aw d</div>
    </motion.div>
  )
}

export default TechCard