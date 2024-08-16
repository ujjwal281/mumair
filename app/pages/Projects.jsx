"use client"
import { TECHBUTTON, WEB } from "@/constants"
import Backweb from "../components/backweb"
import Button from "../components/Button"
import { motion } from "framer-motion"


const Projects = () => {
  return (
    <motion.div className="flex flex-col gap-5 justify-center items-center"
    whileInView={{opacity : 1 , y: 0 }}
      initial ={{opacity : 0 , x:0}}
      transition={{duration : 1.5}}
    >
      <h1 className=" flex justify-center text-3xl font-bold items-center">My Projects</h1>
      <p className="flex justify-center text-center">Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus</p>
      <div className="flex justify-between gap-3">
        {
          TECHBUTTON.map((tech,index)=>{
            return<Button  key={index} tech = {tech}/>
          })
        }
      </div>
      <div className="flex justify-evenly gap-6 md:flex-row flex-col ">
        {
          WEB.map((web,index)=>{
            return<Backweb key={index} image1 = {web.image1} image2 = {web.image2}/>
          })
        }
      </div>

      

    </motion.div>
  )
}
export default Projects