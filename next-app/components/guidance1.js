"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Info from "./info";
import Image from "next/image";
import Misha from "@/public/icons/misha";
import Durriya from "@/public/icons/durriya";
import Newguide from "@/public/icons/newguide";
import Vacation from "@/public/icons/vacation";
import Home from "@/public/icons/home";
import Self from "@/public/icons/self";
import Perfo from "@/public/icons/perfo";
import Total from "@/public/icons/total";
import Moderate from "@/public/icons/moderate";

const Guidance1 = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();
  const { ref: ref3, inView: inView3 } = useInView();

  useEffect(() => {
    if (inView1) {
      controls1.start({ scale: 1, backdropFilter: "blur(0px)" });
    } else {
      controls1.start({ scale: 0.8, backdropFilter: "blur(10px)" });
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start({ scale: 1, backdropFilter: "blur(0px)" });
    } else {
      controls2.start({ scale: 0.8, backdropFilter: "blur(10px)" });
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start({ scale: 1, backdropFilter: "blur(0px)" });
    } else {
      controls3.start({ scale: 0.8, backdropFilter: "blur(10px)" });
    }
  }, [controls3, inView3]);

  return (
    <div className="relative">
      <motion.div
        ref={ref1}
        animate={controls1}
        initial={{ scale: 1, backdropFilter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 left-0 bg-[#E1F1FF] h-[100vh] w-full py-10 px-10"
      >
        <div className="w-full h-[80vh] bg-[#ffff] rounded-3xl">
          <div className="w-[50%] px-8 lg:pl-[4rem] lg:pr-[3rem] xl:px-[10rem] xl:py-16 h-full flex flex-col justify-center items-center lg:block lg:pt-10">
            <Info
              para={"Talk to a human. An expert. A Fruitful Guide."}
              dot1={"."}
              dot2={"."}
              dot3={"."}
              dot4={"."}
              list1={
                "Dedicated advice and support on all aspects of your finances from a Fruitful Guide."
              }
              list2={
                "1-to-1 video sessions focused on organizing your finances, building wealth, and making real progress."
              }
              list3={
                "Ongoing progress check-ins, quick syncs and anytime messaging."
              }
              list4={
                "A clear blueprint to hit your goals with simple steps that your Guide helps you implement."
              }
              button={"Tell me more"}
            />
          </div>
          <div className="w-[50%] px-8 flex flex-col justify-center items-center">
            <div className="absolute top-[-5rem] left-[5.5rem] md:w-[21rem] md:h-[25rem] md:top-[14rem] md:left-[27.5rem] lg:w-[14rem] lg:h-[16rem] lg:top-[4rem] lg:left-[35.5rem] xl:left-[60rem] xl:w-[25rem] xl:h-[28rem] xl:top-[2.5rem] rounded-3xl z-10 bg-[#FEE9D1] w-[12rem] h-[12rem]">
              <Image
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/images/Durriya.webp"
                alt="Durriya Image"
              />
            </div>
            <div className="z-50 absolute top-0 w-[12rem] md:w-[16rem] md:left-[35rem] lg:w-[12rem] lg:left-[31rem] xl:w-[18rem] xl:left-[52rem] xl:top-12 lg:top-5">
              <Misha />
            </div>
            <div className="z-50 absolute left-[10rem] md:w-[16rem] md:top-[9rem] md:left-[25rem] lg:w-[12rem] lg:left-[27rem] xl:w-[18rem] lg:top-[8rem] xl:left-[47rem] xl:top-[14rem] top-[1rem] w-[12rem]">
              <Durriya />
            </div>
            <div className="z-50 absolute left-[10rem] md:w-[16rem] md:top-[45rem] md:left-[30rem] lg:top-[18rem] lg:left-[40rem] xl:w-[18rem] bg-blend-multiply xl:top-[23rem] xl:left-[75rem] rounded-3xl top-[1rem] w-[12rem]">
              <Newguide />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={ref2}
        animate={controls2}
        initial={{ scale: 1, backdropFilter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 left-0 bg-[#E1F1FF] h-[100vh] w-full py-10 px-10"
      >
        <div className="w-full h-[80vh] bg-[#ffff] rounded-3xl">
          <div className="w-[50%] px-8 lg:pl-[4rem] lg:pr-[3rem] xl:px-[12rem] xl:py-[8rem] h-full flex flex-col justify-center items-center lg:block lg:pt-10">
            <Info
              para={"Earn 5% on savings set up for your goals."}
              dot1={"."}
              dot2={"."}
              dot3={"."}
              list1={
                "5.00% APY savings account, more than 10x the national average*."
              }
              list2={"Dedicated savings spaces for all of your specific goals."}
              list3={"Automated transfers that power your progress."}
              button={"Tell me more"}
            />
          </div>
          <div className="w-[50%] px-8 flex flex-col justify-center items-center">
            <div className="absolute top-[-5rem] left-[5.5rem] md:w-[20rem] md:h-[46rem] md:top-[9rem] md:left-[27.5rem] lg:w-[10rem] lg:h-[21rem] lg:top-[4rem] lg:left-[37.5rem] xl:left-[60rem] xl:w-[12rem] xl:h-[28rem] xl:top-[4.5rem] rounded-3xl z-10 bg-[#FEE9D1] w-[12rem] h-[12rem]">
              <Image
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/images/screen.svg"
                alt="Screen Image"
              />
            </div>
            <div className="z-50 absolute top-[21rem] w-[8rem] md:left-[40rem] lg:left-[46rem] xl:w-[18rem] xl:left-[72rem] xl:top-[12rem] lg:top-[9.25rem]">
              <Vacation />
            </div>
            <div className="z-50 absolute top-[27rem] w-[8rem] left-[25rem] lg:left-[32rem] xl:w-[18rem] xl:left-[42rem] xl:top-[14em] lg:top-[12rem]">
              <Home />
            </div>
            <div className="z-50 absolute left-[10rem] md:w-[8rem] md:left-[25rem] lg:left-[31rem] xl:w-[18rem] lg:top-[16.5rem] xl:left-[42rem] xl:top-[19rem] top-[40rem] w-[12rem]">
              <Self />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={ref3}
        animate={controls3}
        initial={{ scale: 1, backdropFilter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 left-0 bg-[#E1F1FF] h-[100vh] w-full py-10 px-10"
      >
        <div className="w-full h-[80vh] bg-[#ffff] rounded-3xl">
          <div className="w-[50%] px-8 lg:pl-[4rem] lg:pr-[3rem] xl:px-[12rem] xl:py-[8rem] h-full flex flex-col justify-center items-center lg:block lg:pt-10">
            <Info
              para={"Invest for the future and watch your money grow."}
              dot1={"."}
              dot2={"."}
              dot3={"."}
              list1={
                "Grow your savings with high-yield investment options."
              }
              list2={"Personalized investment strategies for your goals."}
              list3={"Automated portfolio management and rebalancing."}
              button={"Tell me more"}
            />
          </div>
          <div className="w-[50%] px-8 flex flex-col justify-center items-center">
            <div className="absolute top-[-5rem] left-[5.5rem] md:w-[21rem] md:h-[31rem] md:top-[9rem] md:left-[27.5rem] lg:w-[14rem] lg:h-[21rem] lg:top-[4rem] lg:left-[37.5rem] xl:left-[60rem] xl:w-[24rem] xl:h-[35rem] xl:top-[4.5rem] rounded-3xl z-10 bg-[#FEE9D1] w-[12rem] h-[12rem]">
              <Image
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-3xl"
                src="/images/invest.webp"
                alt="Invest Image"
              />
            </div>
            <div className="z-50 absolute top-[8rem] w-[18rem] lg:w-[11rem] md:left-[28rem] xl:z-30 lg:left-[32rem] xl:w-[18rem] xl:left-[50rem] xl:top-[15rem] lg:top-[7.25rem]">
              <Perfo />
            </div>
            <div className="z-50 absolute top-[27rem] w-[15rem] lg:w-[8rem] left-[30rem] lg:left-[47rem] xl:w-[15rem] xl:left-[80rem] xl:top-[14em] lg:top-[12rem]">
              <Total />
            </div>
            <div className="z-40 absolute left-[10rem] md:w-[20rem] lg:w-[13rem] md:left-[26rem] lg:left-[33rem] xl:w-[21rem] lg:top-[13.5rem] xl:z-50 xl:left-[51rem] xl:top-[19rem] top-[30rem] w-[12rem]">
              <Moderate />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Guidance1;
