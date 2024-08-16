import { motion } from 'framer-motion'
import React from 'react'

const Button = ({tech}) => {
  return (
    <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} 
    className=' p-2 rounded-lg bg-gray-200 border-0 border-black hover:bg-orange-400 hover:text-white cursor-pointer'>{tech}</motion.div>
  )
}

export default Button 