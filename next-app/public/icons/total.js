import Image from 'next/image'
import React from 'react'

const Total = () => {
  return (
    <div><Image
    width={500}
    height={500}
    className="w-full h-full object-cover "
    src="/images/total.svg"
  />{" "}</div>
  )
}

export default Total