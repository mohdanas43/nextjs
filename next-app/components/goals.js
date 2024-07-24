"use client";
import React, { useRef, useState } from "react";
import Card from "./card";
import { motion, useInView } from "framer-motion";
import { InView } from "react-intersection-observer";
const Goals = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [Hovered, setonHovered] = useState(0);
  return (
    <div className="h-[130vh] md:h-[84vh] lg:h-[145vh] overflow-hidden ">
      <div className="flex relative top-0 md:justify-center md:pt-[10rem] ">
        <motion.div
          className="relative lg:z-[999]  left-[0.5rem] top-10 rotate-12 z-50 md:left-[12.5rem] md:top-[0.5rem] lg:left-[8rem]  lg:top-[-1rem] xl:left-[5rem] xl:top-[2rem] "
          ref={ref}
          initial={{ y: -404 }}
          animate={
            inView ? { y: -100, rotate: "12deg" } : { y: 300, rotate: "0deg" }
          }
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Card image={"/images/cup.png"} para={"Change job or career"}></Card>
        </motion.div>
        <motion.div
          className="relative top-3 left-4 z-30 md:left-[12rem] md:top-[-5.25rem] xl:top-0 xl:left-[15rem] "
          ref={ref}
          initial={{ y: -404 }}
          animate={inView ? { y: -100 } : { y: 300 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Card
            image={"/images/flower.png"}
            para={"Eliminate money stress"}
          ></Card>
        </motion.div>
        <motion.div
          className="relative top-10 right-[-1.5rem] -rotate-12 z-0 overflow-hidden md:right-[-17rem] md:top-0 lg:right-[-14rem] lg:top-[-4rem] xl:top-0 xl:right-[-25rem] "
          ref={ref}
          initial={{ y: -404 }}
          animate={
            inView ? { y: -100, rotate: "-10deg" } : { y: 300, rotate: "0deg" }
          }
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Card
            image={"/images/Discovery.png"}
            para={"Go on a dream vacation"}
          ></Card>
        </motion.div>
        <motion.div
          className="relative  left-[-32rem] top-[16rem] lg:top-[11rem] lg:left-[-34rem] -rotate-12 z-10  "
          ref={ref}
          initial={{ x: 300 }}
          animate={
            inView ? { x: -340, rotate: "-10deg" } : { x: 300, rotate: "0deg" }
          }
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Card image={"/images/cup.png"} para={"Change job or career"}></Card>
        </motion.div>
        <motion.div
          className="relative  left-[2rem] top-[16rem] rotate-12 z-50 xl:top-[12rem] "
          ref={ref}
          initial={{ x: -300 }}
          animate={
            inView ? { x: 140, rotate: "10deg" } : { x: -300, rotate: "0deg" }
          }
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Card image={"/images/cup.png"} para={"Change job or career"}></Card>
        </motion.div>
      </div>
      <div className="pt-[4rem] w-full flex flex-col justify-center items-center px-5 gap-4  ">
        <motion.div
          className="text-[32px] font-medium leading-none md:text-[52px] "
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 3 }}
        >
          Your goals <br /> are ours too
        </motion.div>
        <div className="text-center font-medium md:text-[16px] md:w-[22rem]  ">
          We’ll guide and support you though all money moments and milestones.
        </div>
        <div className="relative  overflow-hidden ">
          <motion.div
            className="flex w-[15rem] bg-[#054F31] z-[999]  text-[#D5FCDD] justify-center h-[4rem]  md:h-[3rem] xl:w-[10rem] items-center rounded-2xl "
            onMouseEnter={() => {
              setonHovered(1);
            }}
            onMouseLeave={() => {
              setonHovered(0);
            }}
          >
            <div className="">Learn more</div>
          </motion.div>
          <motion.div
            className=" absolute flex w-[15rem] bg-[#D9FFE0] z-[999] text-[green] justify-center h-[4rem]  md:h-[3rem] xl:w-[10rem] items-center rounded-2xl "
            onMouseEnter={() => {
              setonHovered(1);
            }}
            onMouseLeave={() => {
              setonHovered(0);
            }}
            animate={{
              translateY: Hovered ? "-100%" : 0,
            }}
            transition={{
              duration: 0.5,
              ease: "circInOut",
            }}
          >
            <div className="">Learn more</div>
          </motion.div>
        </div>
      </div>
      <div className="flex relative top-[60px] md:justify-center">
        <motion.div
          className="relative  left-[0.5rem] top-0 -rotate-12 md:left-[-6.5rem] lg:top-[-14rem] z-0 xl:left-[-14rem] "
          ref={ref}
          initial={{ y: -300 }}
          animate={
            inView ? { y: 100, rotate: "-12deg" } : { y: -300, rotate: "0deg" }
          }
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Card image={"/images/cup.png"} para={"Change job or career"}></Card>
        </motion.div>
        <motion.div
          className="relative top-10 left-3 z-50 rotate-12 lg:top-[-7rem] "
          ref={ref}
          initial={{ y: -300 }}
          animate={
            inView ? { y: 60, rotate: "10deg" } : { y: -300, rotate: "0deg" }
          }
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Card
            image={"/images/flower.png"}
            para={"Eliminate money stress"}
          ></Card>
        </motion.div>
        <motion.div
          className="relative top-0 right-[-1rem] md:right-[-6rem] lg:top-[-7.5rem] rotate-12 z-[100] overflow-hidden xl:right-[-13rem] "
          ref={ref}
          initial={{ y: -300 }}
          animate={
            inView ? { y: 100, rotate: "10deg" } : { y: -300, rotate: "0deg" }
          }
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Card
            image={"/images/Discovery.png"}
            para={"Go on a dream vacation"}
          ></Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Goals;
