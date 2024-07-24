import Image from "next/image";
import React from "react";

const Right = () => {
  return (
    <div className=" w-[1.2rem]  ">
      <Image
        width={500}
        height={500}
        className="w-full h-full object-cover "
        src="/images/right.svg"
      />
    </div>
  );
};

export default Right;
