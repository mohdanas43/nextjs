import Image from 'next/image'
import React from 'react'

const Speakoff = () => {
  return (
    <div>
    <div>
    <Image
    height={500}
    width={500}
    className=" object-cover h-full w-full"
    src={"/images/speaker2.svg"}
    />
   </div>
    </div>
  )
}

export default Speakoff