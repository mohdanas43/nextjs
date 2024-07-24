"use client";

import Speaker from "@/public/icons/speaker";
import Play from "@/public/icons/play";
import React, { useState } from "react";
import Speakoff from "@/public/icons/speakoff";
import Cross from "@/public/icons/cross";
import Play1 from "@/public/icons/play1";
import { motion } from "framer-motion";

const Guideinfo = ({
  vid,
  name,
  profession,
  description,
  style,
  button1,
  button2,
  button3,
}) => {
  const [onClick, setClick] = useState(false);
  return (
    <motion.div
      className=" relative  w-full  border-2 rounded-[10px] bg-[#FFFF] "
      initial={{ translateY: 20, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.1 }}
    >
      <div className="flex items-center w-full justify-around">
        <div
          className=" z-[100] absolute top-5 left-3  px-7 py-5 "
          onClick={() => {
            setClick(!onClick);
          }}
        >
          <div className={`${onClick ? "hidden" : "block"}`}>
            <Speaker />
          </div>
          <div className={` absolute top-5 ${onClick ? "block" : "hidden"}`}>
            <Speakoff />
          </div>
        </div>
        <div className=" z-[100] absolute top-5 left-[38rem] flex items-center  px-7 py-5 ">
          <div className=" ">
            <Cross />
          </div>
        </div>
      </div>

      <div className="absolute h-5 w-5 top-[48%] left-[25%] rounded-full   ">
        {" "}
        <Play1 />
      </div>
      <div className="flex py-5 px-5">
        <div className="w-[50%] h-full ">
          {" "}
          <video
            className=" h-full w-full object-cover rounded-[10px]"
            autoPlay
            muted
            loop
            src={vid}
          ></video>
        </div>
        <div className="flex flex-col px-4 w-[50%] py-5 ">
          <div className="">
            <div className="text-[2.5em] font-medium leading-[1]">{name}</div>
            <div className="text-[.875rem] font-medium ">{profession}</div>
          </div>
          <div>
            <div className="text-[0.75rem] w-full min-w-[21rem] leading-[1.375] py-5 ">
              {description}
            </div>
          </div>
          <div>
            <div>{style}</div>
          </div>
          <div className="flex py-3 gap-3 ">
            <div className=" flex items-center  rounded-full border-2 border-solid border-[#deecf9] bg-[#deecf9] py-[10px] px-[12px] text-[.875rem] text-center w-[12rem] ">
              {button1}
            </div>
            <div className=" flex items-center  rounded-full border-2 border-solid border-[#deecf9] bg-[#deecf9] py-[10px] px-[12px] text-[.875rem] text-center  w-[10rem]">
              {button2}
            </div>
          </div>
          <div className="  ">
            <div className="rounded-full border-2 border-solid border-[#deecf9] bg-[#deecf9] py-[10px] px-[12px] text-[.875rem] text-center w-fit ">
              {button3}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Guideinfo;
