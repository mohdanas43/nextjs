import Image from 'next/image'
import React from 'react'

const Newguide = () => {
  return (
    <div>  <Image
    width={500}
    height={500}
    className="w-full h-full object-cover  rounded-3xl  "
    src="/images/new.png"
    /> </div>
  )
}

export default Newguide