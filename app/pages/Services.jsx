"use client"
import { TECH } from "@/constants"
import TechCard from "../components/techCard"
import { motion } from "framer-motion"

const Services = () => {
  return (
    <motion.div className="flex justify-center flex-col gap-5"
    whileInView={{opacity : 1 , y: 0 }}
      initial ={{opacity : 0 , x:0}}
      transition={{duration : 1.5}}
    >
      <div className="flex justify-center flex-col gap-3">
        <h1 className=" text-3xl font-bold flex justify-center">Services</h1>
        <p className="flex md:px-20 justify-center text-center px-5">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
      </div>
      <div className="flex gap-4 md:justify-evenly px-7 flex-col md:flex-row items-center">
        {
          TECH.map((value,index)=>{
            return<TechCard key={index} image = {value}/>
          })
        }
      </div>
    </motion.div>
  )
}

export default Services