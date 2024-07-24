import Image from "next/image";
import React from "react";

const Misha = () => {
  return (
    <div>
   <Image
   width={500}
   height={500}
   className="w-full h-full object-cover "
   src="/images/misha.svg"
   /> 
    </div>
  );
};

export default Misha;
