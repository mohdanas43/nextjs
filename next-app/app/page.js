"use client";
import Faqssec from "@/components/faqssec";
import Footer from "@/components/footer";
import Fruitful from "@/components/fruitful";
import Fruitfullg from "@/components/fruitfullg";
import Goals from "@/components/goals";
import Guidance from "@/components/guidance";
import Guidance1 from "@/components/guidance1";
import Guide1 from "@/components/guide1";
import Guidelg from "@/components/guidelg";
import Guides from "@/components/guides";
import Lgpage from "@/components/lgpage";
import Maya from "@/components/maya";
import Members from "@/components/members";
import Membership from "@/components/membership";
import Membershiplg from "@/components/membershiplg";
import Newpage from "@/components/newpage";
import Partner from "@/components/partner";
import Plans from "@/components/plans";
import Progress from "@/components/progress";
import Progreslg from "@/components/progresslg";
import Work from "@/components/work";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Memberslg from "@/components/memberslg";
import Worklg from "@/components/worklg";
import Partnerlg from "@/components/partnerlg";
const Page = () => {
  const [Hovered, setonHovered] = useState(0);
  return (
    <div>
      <div className=" relative z-[1000] bg-white">
        {" "}
        <Newpage />
        <div className="fixed z-[12000] flex md:w-[80%]  lg:w-[95%] xl:w-[97%] justify-end  items-center mt-[30px]  overflow-hidden ">
          <div
            className="   bg-[#054F31] flex min-w-[10rem] max-w-[10rem]  2xl:min-w-[10rem] 2xl:max-w-[10rem]  w-full justify-center items-center text-center text-[#D6FDDE] mt-3  border-solid rounded-[1rem] text-[16px]  h-[3.25rem]  "
            onMouseEnter={() => {
              setonHovered(1);
            }}
            onMouseLeave={() => {
              setonHovered(0);
            }}
          >
            Get Started
          </div>

          <motion.div
            onMouseEnter={() => {
              setonHovered(1);
            }}
            onMouseLeave={() => {
              setonHovered(0);
            }}
            className="absolute z-10  top-[3.25rem] bg-[#D9FFE0] flex min-w-[10rem] max-w-[10rem] 2xl:min-w-[10rem] 2xl:max-w-[10rem] w-full justify-center items-center text-center text-[#054F31] mt-3 border-solid rounded-[1rem] text-[16px] h-[3.25rem]"
            animate={{
              translateY: Hovered == 1 ? "-100%" : 0,
            }}
            transition={{
              duration: 0.5,
              ease: "circInOut",
            }}
          >
            Get Started
          </motion.div>
        </div>
        <Lgpage />
        <div className="block lg:hidden">
          <Work />
        </div>
        <div className="hidden lg:block ">
          <Worklg />
        </div>

        <div className="block lg:hidden">
        <Partner />
      </div>
      <div className="hidden lg:block ">
      <Partnerlg />
      </div>
       
        <div className="block lg:hidden">
          <Progress />
        </div>
        <div className="hidden lg:block ">
          <Progreslg />{" "}
        </div>
        <div className="block md:hidden">
          <Guides />
        </div>
        <div className=" hidden md:block lg:hidden ">
          <Guide1 />
        </div>
        <div className="hidden lg:block ">
          <Guidelg />
        </div>
        <div className="block lg:hidden">
          {" "}
          <Membership />
        </div>
        <div className="hidden lg:block ">
          <Membershiplg />
        </div>
        <div className=" block md:hidden ">
          <Guidance />
        </div>{" "}
        <div className=" hidden md:block">
          <Guidance1 />
        </div>
        <Maya />
        <div className="block lg:hidden">
          <Members />
        </div>
        <div className="hidden lg:block ">
          <Memberslg />
        </div>
        <div className="block lg:hidden">
          {" "}
          <Fruitful />
        </div>
        <div className="hidden lg:block ">
          <Fruitfullg />
        </div>
        <Plans />
        <Goals />
        <Faqssec />
      </div>
      <div className=" bg-transparent h-[110vh] "></div>
      <Footer />
    </div>
  );
};

export default Page;
