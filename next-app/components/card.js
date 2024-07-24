import Image from "next/image";
import React from "react";

const Card = ({ image, para }) => {
  return (
    <div className="h-fit " >
      <div className="flex flex-col w-[130px] h-[160px] md:w-[178px] md:h-[223px] xl:w-[237px] xl:h-[260px]  justify-center items-center pl-[12px] py-4 pr-[18px] bg-[#EFF7FF] rounded-lg shadow-lg ">
        <div className="w-[5rem] md:w-[10rem] ">
          <Image
            width={500}
            height={500}
            className="w-full h-full object-cover"
            src={image}
          />
        </div>
        <div className="leading-none text-[14px] xl:text-[20px]">{para}</div>
      </div>
    </div>
  );
};

export default Card;
