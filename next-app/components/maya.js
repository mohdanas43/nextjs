"use client"
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Maya = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="flex flex-col w-full justify-center items-center px-[1.25rem] py-[7.5rem] ">
      <motion.div
        ref={ref}
        className="font-medium text-[1.8rem] w-[23rem] leading-[1.7rem] text-black text-center lg:text-[4.5rem] lg:w-[85%] lg:leading-[4.5rem]"
        style={{
          transform: isInView ? "none" : "translatey(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        More than just feeling less stressed about my finances, I feel a lot
        more in control of my life!
      </motion.div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center w-full justify-center pt-8 ">
          <div className="w-[6.25rem] h-[6.25rem]">
            <Image
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-full"
              src="/images/mayajpg.jpg"
              alt="Maya"
            />
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="font-semibold">Maya</div>
          <div>Real Fruitful Member</div>
        </div>
      </div>
    </div>
  );
};

export default Maya;
