import Image from 'next/image'
import React from 'react'

const Media = ({media}) => {
  return (
    <div>
        <Image
        src={`/socialMedia/${media}.png`}
        alt=''
        width={20}
        height={20}
        />

    </div>
  )
}

export default Media