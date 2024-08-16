"use client"
import { Carousel } from "@material-tailwind/react"
import ReviewCard from "../components/reviewCard"
import { REVIEWIMAGE } from "@/constants"
import { motion } from "framer-motion"


const Testimonals = () => {
  return (
    <motion.div className="flex flex-col gap-5 "
    whileInView={{opacity : 1 , y: 0 }}
      initial ={{opacity : 0 , x:0}}
      transition={{duration : 1.5}}
    >
      <h1 className="flex justify-center font-bold text-3xl">Testimonals</h1>
      <p className="flex justify-center text-center px-5"><span className="text-orange-500"></span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis laborum omnis ut et non ipsa odit dolorum alias, ad enim blanditiis pariatur, aperiam rem, assumenda illo sed cumque inventore quod?<span></span></p>
      <section className="flex justify-center items-center gap-14 overflow-auto ">

      <Carousel className="rounded-xl bg-gray-200 mx-6"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-orange-400" : "w-4 bg-white"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}>
        {
          REVIEWIMAGE.map((image,index)=>{
            return <ReviewCard key={index}  image={image}/>
          })
        }
    </Carousel>
      </section>
    </motion.div>
  )
}

export default Testimonals