"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Guides = () => {
  const [borderColor, setBorderColor] = useState(0);
  const [Hovered, setonHovered] = useState(0);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  useEffect(() => {
    if (borderColor == 1) {
      ref1.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    } else if (borderColor == 2) {
      ref2.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    } else if (borderColor == 3) {
      ref3.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    } else if (borderColor == 4) {
      ref4.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    } else if (borderColor == 5) {
      ref5.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    } else if (borderColor == 6) {
      ref6.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [borderColor]);

  useEffect(() => {
    const scroll = () => {
      ref3.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    };
    scroll();
  }, []);

  return (
    <div className="flex w-full justify-center items-center flex-col px-[1rem] py-[7rem] gap-3 ">
      <div className="leading-[28px]">
        {" "}
        <motion.div className="text-[27px] font-medium w-[22rem] text-center">
          Guides that helps you
        </motion.div>
        <div className="text-[27px] font-medium w-[22rem] text-center">
          grow
        </div>
      </div>
      <div className="text-[14px] font-medium w-[23rem] text-center ">
        Talk to someone who understands you and your money. Make progress and
        feel empowered.
      </div>
      <div className="flex gap-3 ">
        <div className="border-2 rounded-[25px] border-solid border-[#3A3A3A] w-[10rem] text-center h-[2.5rem] flex items-center justify-center ">
          How it works
        </div>
        <div className="border-2 rounded-[25px] border-solid border-[#3A3A3A] w-[10rem] text-center h-[2.5rem] flex items-center justify-center ">
          Who are Guides
        </div>
      </div>
      <div className="flex gap-2 w-full items-center justify-center ">
        <div
          className={`max-w-[3rem] min-h-[2.05rem] bg-[#FEE9D1] border border-solid  rounded-[25px] flex items-center ${
            borderColor == 1 ? " border-[green]" : ""
          }  `}
          onClick={() => {
            setBorderColor(1);
          }}
        >
          <img
            className="max-w-[2.5rem] min-h-[2rem] object-cover   "
            src="https://cdn.prod.website-files.com/65b22d2d8aafb9c10048b930/66018fb1ba04c4ced64004a6_20240325_Fruitful_Guide_Headshot_Andrea.png"
            alt=""
          />
        </div>
        <div
          className={`max-w-[3rem] min-h-[2.05rem] bg-[#FEE9D1] border border-solid  rounded-[25px] flex items-center ${
            borderColor == 2 ? "border-[green]" : ""
          }  `}
          onClick={() => {
            setBorderColor(2);
          }}
        >
          <img
            className="max-w-[2.5rem] min-h-[2rem] object-cover   "
            src="https://cdn.prod.website-files.com/65b22d2d8aafb9c10048b930/65cf43738d5103f7a55ba9d1_guide_headshot_andrew_FEE9D1.png"
            alt=""
          />
        </div>
        <div
          className={`max-w-[3rem] min-h-[2.05rem] bg-[#FEE9D1] border border-solid  rounded-[25px] flex items-center ${
            borderColor == 3 || borderColor == 0 ? "border-[green]" : ""
          }  `}
          onClick={() => {
            setBorderColor(3);
          }}
        >
          <img
            className="max-w-[2.5rem] min-h-[2rem] object-cover   "
            src="https://cdn.prod.website-files.com/65b22d2d8aafb9c10048b930/66018c0620ee3d30a2c417c7_20240325_Fruitful_Guide_Headshot_Bri.png"
            alt=""
          />
        </div>
        <div
          className={`max-w-[3rem] min-h-[2.05rem] bg-[#FEE9D1] border border-solid  rounded-[25px] flex items-center ${
            borderColor == 4 ? "border-[green]" : ""
          }  `}
          onClick={() => {
            setBorderColor(4);
          }}
        >
          <img
            className="max-w-[2.5rem] min-h-[2rem] object-cover  "
            src="https://cdn.prod.website-files.com/65b22d2d8aafb9c10048b930/660196bb99f851d6a36f5df4_20240325_Fruitful_Guide_Headshot_Matt.png"
            alt=""
          />
        </div>
        <div
          className={`max-w-[3rem] min-h-[2.05rem] bg-[#FEE9D1] border border-solid  rounded-[25px] flex items-center ${
            borderColor == 5 ? "border-[green]" : ""
          }  `}
          onClick={() => {
            setBorderColor(5);
          }}
        >
          <img
            className="max-w-[2.5rem] min-h-[2rem] object-cover   "
            src="https://cdn.prod.website-files.com/65b22d2d8aafb9c10048b930/661f0f3359c8b887ad549738_20240305_FF_guide_headshot_mckenna_FEE9D1.png"
            alt=""
          />
        </div>
        <div
          className={`max-w-[3rem] min-h-[2.05rem] bg-[#FEE9D1] border border-solid  rounded-[25px] flex items-center ${
            borderColor == 6 ? "border-[green]" : ""
          }  `}
          onClick={() => {
            setBorderColor(6);
          }}
        >
          <img
            className="max-w-[2.5rem] min-h-[2rem] object-cover  "
            src="https://cdn.prod.website-files.com/65b22d2d8aafb9c10048b930/65e74efba487812a0c399d5f_Raquel%20headshot.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex gap-[1rem] max-w-full overflow-hidden overflow-x-scroll pl-[6rem] ">
        <div className="w-full" ref={ref1}>
          <video
            className="max-w-[14rem] border border-solid  rounded-[12px]"
            muted
            autoPlay
            loop
            src="https://d1pwidzl9kib4u.cloudfront.net/marketing/20240305/4x3_Low_Quality_Low_Captions/20240304_Fruitful_Guide_4x3_Andrea_sm_locap.mp4  "
          ></video>
        </div>
        <div className="w-full" ref={ref2}>
          <video
            className="max-w-[14rem] border border-solid  rounded-[12px]"
            muted
            autoPlay
            loop
            src="https://d1pwidzl9kib4u.cloudfront.net/marketing/20240305/4x3_Low_Quality_Low_Captions/20240304_Fruitful_Guide_4x3_Andrew_sm_locap.mp4"
          ></video>
        </div>
        <div className="w-full" ref={ref3}>
          <video
            className="max-w-[14rem] border border-solid  rounded-[12px]"
            muted
            autoPlay
            loop
            src="https://d1pwidzl9kib4u.cloudfront.net/marketing/20240305/4x3_Low_Quality_Low_Captions/20240304_Fruitful_Guide_4x3_Bri_sm_locap.mp4"
          ></video>
        </div>
        <div className="w-full" ref={ref4}>
          <video
            className="max-w-[14rem] border border-solid  rounded-[12px] "
            muted
            autoPlay
            loop
            src="https://d1pwidzl9kib4u.cloudfront.net/marketing/20240305/4x3_Low_Quality_Low_Captions/20240304_Fruitful_Guide_4x3_Matt_sm_locap.mp4"
          ></video>
        </div>
        <div className="w-full" ref={ref5}>
          <video
            className="max-w-[14rem] border border-solid  rounded-[12px]"
            muted
            autoPlay
            loop
            src="https://d1pwidzl9kib4u.cloudfront.net/marketing/20240305/4x3_Low_Quality_Low_Captions/20240305_Fruitful_Guide_4x3_Mckenna_sm_locap.mp4"
          ></video>
        </div>
        <div className="w-full" ref={ref6}>
          <video
            className="max-w-[14rem] border border-solid  rounded-[12px]"
            muted
            autoPlay
            loop
            src="https://d1pwidzl9kib4u.cloudfront.net/marketing/20240305/4x3_Low_Quality_Low_Captions/20240304_Fruitful_Guide_4x3_Raquel_sm_locap.mp4"
          ></video>
        </div>
      </div>
      <div className="relative  overflow-hidden ">
        <div
          onMouseEnter={() => {
            setonHovered(1);
          }}
          onMouseLeave={() => {
            setonHovered(0);
          }}
          className="bg-[#054F31] text-[#D9FFE0] w-[15rem] text-center h-[4rem]  flex items-center justify-center border border-solid  rounded-[22px]"
        >
          Choose your Guide
        </div>
        <motion.di
          onMouseEnter={() => {
            setonHovered(1);
          }}
          onMouseLeave={() => {
            setonHovered(0);
          }}
          animate={{
            translateY: Hovered == 1 ? "-100%" : 0,
          }}
          transition={{
            duration: 0.5,
            ease: "circInOut",
          }}
          className=" absolute bg-[#054F31] text-[#D9FFE0] w-[15rem] text-center h-[4rem]  flex items-center justify-center border border-solid  rounded-[22px]"
        >
          Choose your Guide
        </motion.di>
      </div>
    </div>
  );
};

export default Guides;
