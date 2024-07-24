import Image from "next/image";
import React from "react";

const Play1 = () => {
  return (
    <div>
      <Image
        height={500}
        width={500}
        className=" object-cover h-full w-full"
        src={"/images/playicon.svg"}
      />
    </div>
  );
};

export default Play1;
