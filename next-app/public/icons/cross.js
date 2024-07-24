import Image from "next/image";
import React from "react";

const Cross = () => {
  return (
    <div>
    <Image
    height={500}
    width={500}
    className=" object-cover h-full w-full"
    src={"/images/cross.svg"}
    />
    </div>
  );
};

export default Cross;
