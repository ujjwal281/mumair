"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (

      <motion.div className="flex md:justify-between py-3 md:flex-row flex-col"
      whileInView={{opacity : 1 , y: 0 }}
      initial ={{opacity : 0 , x:0}}
      transition={{duration : 1.5}}
      >
        <h1 className=" flex gap-2 justify-center items-center text-2xl cursor-pointer">
          <div style={{ fontFamily : "Corvetta Personal Use"}} className=" rounded-full bg-orange-500 text-white py-3 text-lg">MU</div>
          <div className="">
            <span className=" font-bold ">M</span>
            umair
          </div>
        </h1>
        <nav className="list-none md:flex md:gap-3  md:justify-end justify-center items-center font-medium  md:text-sm text-xs md:px-0 px-12"
        >
          <li className="p-2 cursor-pointer hover:text-orange-500 flex justify-center" onClick={()=>{window.scrollTo(0,0)}}>Home</li>
          <li className="p-2 cursor-pointer hover:text-orange-500 flex justify-center" onClick={()=>{window.scrollTo(400,500)}}>About</li>
          <li className="p-2 cursor-pointer hover:text-orange-500 flex justify-center" onClick={()=>{window.scrollTo(850,950)}}>Services</li>
          <li className="p-2 cursor-pointer hover:text-orange-500 flex justify-center" onClick={()=>{window.scrollTo(1300,1400)}}>Projects</li>
          <li className="p-2 cursor-pointer hover:text-orange-500 flex justify-center" onClick={()=>{window.scrollTo(1900,2000)}}>Testimonals</li>
          <li className="p-2 cursor-pointer hover:text-orange-500 flex justify-center" onClick={()=>{window.scrollTo(3000,3000)}}>Contact</li>
          <div className="p-2 cursor-pointer hover: flex justify-center">
          <motion.button
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }} 
           className=" bg-orange-500 p-2 rounded-md text-white ">Download CV</motion.button>
           </div>
        </nav>
      </motion.div>
  )
}

export default Navbar