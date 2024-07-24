import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div>
    <Image
    width={500}
    height={500}
    className="w-full h-full object-cover "
    src="/images/home.svg"
    /> 
     </div>
  )
}

export default Home