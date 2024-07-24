"use client";
import React, { useRef, useState } from "react";
import clsx from "clsx";
import { motion, useInView } from "framer-motion";

const Fruitfullg = () => {
  const [activeItem, setActiveItem] = useState("Solo");

  const handleClick = (item) => {
    setActiveItem(item === activeItem ? null : item);
  };
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div>
      <div className="flex flex-col w-full justify-center items-center overflow-hidden">
        <div className="text-[1.7rem] font-medium">Fruitful Membership</div>
        <div>Membership is risk-free for 30 days ⓘ</div>
      </div>
      <div className="px-2 py-5 flex justify-center  items-center w-full ">
        <div className="Salit flex bg-gray-200 rounded-full">
          <div
            className={clsx(
              "item m-1  transition-colors duration-300 cursor-pointer py-2 px-16 rounded-full",
              activeItem === "Solo"
                ? "bg-white text-black"
                : "bg-gray-200 text-[#A6AFBD]"
            )}
            onClick={() => handleClick("Solo")}
          >
            Solo
          </div>
          <div
            className={clsx(
              "item m-1  transition-colors duration-300 cursor-pointer py-2 px-16 rounded-full",
              activeItem === "Joint"
                ? "bg-white text-black"
                : "bg-gray-200 text-[#A6AFBD]"
            )}
            onClick={() => handleClick("Joint")}
          >
            Joint
          </div>
        </div>
      </div>
      <div className="bg-[#F3F3F3] px-5 py-5 flex flex-col gap-9 pb-16  w-full justify-center md:items-center lg:flex-row">
        <motion.div
          className="bg-[#FFFFFF]  rounded-xl h-[15rem] xl:h-[20rem] p-4 md:w-[23rem] shadow-lg "
          ref={ref}
          initial={{ x: 404, scale: 1, backgroundColor: "white" }}
          animate={inView ? { x: 13, rotate: "-3deg" } : { x: 403, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.1, backgroundColor: "#FEE9D1" }}
        >
          <div>Monthly</div>
          <div className="flex leading-none">
            {" "}
            <div className="text-[26.4px] font-medium ">$</div>
            <div className="text-[80px] font-medium ">98</div>
            <div className="text-[12px] text-end flex items-end ">
              per month
            </div>
          </div>
          <div className="flex w-full h-[8rem] text-[12px] pb-6 text-[#D4D8DF] items-end xl:pb-0 ">
            $98 paid every month.
          </div>
        </motion.div>
        <motion.div
          className="bg-[#054F31]  rounded-xl xl:h-[20rem] h-[15rem] p-4 md:w-[23rem] xl:pb-0 shadow-lg "
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="flex w-full justify-between ">
            {" "}
            <div className="text-[#D9FFE0] ">Quarterly</div>{" "}
            <div className="bg-white px-2 py-1 rounded-full text-[10px] font-bold ">
              Most popular
            </div>{" "}
          </div>
          <div className="flex leading-none">
            {" "}
            <div className="text-[26.4px] text-[#D9FFE0]  font-medium ">$</div>
            <div className="text-[80px] text-[#D9FFE0] font-medium ">92</div>
            <div className="text-[12px] text-[#D9FFE0] text-end flex items-end ">
              per month
            </div>
          </div>
          <div className="flex w-full h-[8rem] text-[12px] pb-6 text-[#D9FFE0] items-end">
            $275 paid every 3 months.
          </div>
        </motion.div>
        <motion.div
          className="bg-[#FFFFFF]  rounded-xl h-[15rem] xl:h-[20rem] p-4 md:w-[23rem] shadow-lg "
          ref={ref}
          initial={{ x: -404, scale: 1, backgroundColor: "white" }}
          animate={inView ? { x: -1, rotate: "3deg" } : { x: -404, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.1, backgroundColor: "#FEE9D1" }}
        >
          <div>Annually</div>
          <div className="flex leading-none">
            {" "}
            <div className="text-[26.4px] font-medium ">$</div>
            <div className="text-[80px] font-medium ">83</div>
            <div className="text-[12px] text-end flex items-end ">
              per month
            </div>
          </div>
          <div className="flex w-full h-[8rem] text-[12px] pb-6 text-[#D4D8DF] items-end">
            $998 paid every year.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Fruitfullg;
