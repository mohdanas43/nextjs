import Image from "next/image";
import React from "react";

const Fruitfulogo = () => {
  return (
    <div className="w-[10px] " >
    <Image
    width={500}
    height={500}
    className="w-full h-full object-cover "
    src="/images/log.png"
    /> 
    </div>
  );
};

export default Fruitfulogo;
