import Image from "next/image";
import React from "react";

const Speaker = () => {
  return (
    <div>
     <Image
     height={500}
     width={500}
     className=" object-cover h-full w-full"
     src={"/images/speaker.svg"}
     />
    </div>
  );
};

export default Speaker;
