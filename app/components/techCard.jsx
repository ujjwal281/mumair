import Image from 'next/image'
import React from 'react'

const TechCard = ({image}) => {
  return (
    <div className=' flex-col bg-gray-100 p-6 rounded-xl flex justify-center w-fit md:items-start items-center'>
      <div className=' h-20 flex justify-start items-center'>
        <Image
        className='h-fit w-fit '
        src={`/tech/${image}.png`}
        width={50}
        height={90}
        alt=''
        />
      </div>
      <h1 className=' font-bold text-2xl'>Web Design</h1>
      <div>asdasdasdd a sd asdas d asd ad aas d  s d ad sd  w as da d aw d</div>
    </div>
  )
}

export default TechCard