import Image from 'next/image'
import React from 'react'

const ReviewCard = ({image}) => {
  return (
    <div className='flex bg-slate-400 h-full w-full object-cover gap-6 px-8 py-5'>
        <section className='flex justify-center items-center p-4'>
            <Image
                src= {`/reviewimage/${image}.png`}
                alt='profile'
                width={700}
                height={700}
            />
        </section>
        <section className='flex flex-col justify-center relative'>
            <sup className='text-orange-500 text-xl abosulute -left-3 top-4'>"</sup>
            <p className=''> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora vero voluptatibus corrupti minima pariatur repellendus commodi adipisci culpa voluptatem vel eveniet quia reprehenderit ut doloremque, illum temporibus repellat sunt cupiditate! <span className= 'text-orange-500 text-xl'>"</span></p>
            <b className='flex font-semibold mt-4 right-11'>Name</b>
            <p>CEO</p>
        </section>
    </div>
  )
}

export default ReviewCard