"use client"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <motion.section className="flex flex-col gap-3 justify-center items-center px-4"
    whileInView={{opacity : 1 , y: 0 }}
      initial ={{opacity : 0 , x:0}}
      transition={{duration : 1.5}}
    >
    <h1 className="text-3xl font-extrabold justify-center flex">Let&apos;s Design Together</h1>
    <p className="justify-center flex">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eaque accusantium </p> 
    <div className="justify-center flex items-center flex-col md:flex-row gap-3 mt-6">
      <input className="p-3 w-80 rounded-lg border" type="text" placeholder="Enter your Email" />
      <motion.button 
      whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
     className="bg-orange-400 p-3 px-6 rounded-lg text-white flex justify-center w-fit">Contact Me</motion.button>
    </div>
  </motion.section>
  )
}

export default Contact