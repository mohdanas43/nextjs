import Image from "next/image";
import React from "react";

const Perfo = () => {
  return (
    <div>
      {" "}
      <Image
        width={500}
        height={500}
        className="w-full h-full object-cover "
        src="/images/perfo.svg"
      />{" "}
    </div>
  );
};

export default Perfo;
