import Image from "next/image";
import React from "react";

const Moderate = () => {
  return (
    <div>
      <Image
        width={500}
        height={500}
        className="w-full h-full object-cover "
        src="/images/moderate.svg"
      />{" "}
    </div>
  );
};

export default Moderate;
