import Image from 'next/image'
import React from 'react'

const Self = () => {
  return (
    <div>
    <Image
    width={500}
    height={500}
    className="w-full h-full object-cover "
    src="/images/self.svg"
    /> 
     </div>
  )
}

export default Self