"use client";
import Image from "next/image";
import React from "react";

const Faqs = ({ question, arrow }) => {
  return (
    <div className="z-10">
      <div className="flex  bg-[#F5F7FB] justify-between w-[20rem] md:w-[40rem] md:h-[4rem] lg:w-[55rem] xl:w-[70rem] xl:h-[5rem] rounded-[10px] h-[3rem] items-center px-5 ">
        <div>{question}</div>
        <div>
          {" "}
          <Image
            width={500}
            height={500}
            className="w-full h-full object-cover"
            src={arrow}
          />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
