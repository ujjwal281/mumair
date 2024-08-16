import Image from 'next/image'
import React from 'react'

const Backweb = ({image1,image2}) => {
  return (
    <div className='flex flex-col gap-1'>
        <div className='bg-orange-100 relative w-64 flex flex-row-reverse pr-5 p-1'>
            <Image
            className='absolute bottom-0 left-9'
            src={`/web/${image1}.png`}
            alt=''
            width={150}
            height={150}
            />
            <Image
            className=''
            src={`/web/${image2}.png`}
            alt=''
            width={150}
            height={150}
            />
        </div>
        <h6 className='text-orange-300 text-sm'>Web Design</h6>
        <section className='font-bold'>AirCalling Landing Page Design</section>
    </div>
  )
}

export default Backweb