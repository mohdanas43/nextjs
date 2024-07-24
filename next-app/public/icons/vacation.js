import Image from "next/image";
import React from "react";

const Vacation = () => {
  return (
    <div>
    <Image
    width={500}
    height={500}
    className="w-full h-full object-cover "
    src="/images/vacation.svg"
    /> 
     </div>
  );
};

export default Vacation;
