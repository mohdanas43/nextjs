"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Partnerlg = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div>
      <div className="  hidden lg:flex  md:flex md:justify-center md:flex-col md:items-center text-center text-[1.75rem] md:text-[3.2rem] md:leading-[55px] py-[2.5rem] px-[1.25rem] leading-[30px] font-medium overflow-hidden ">
        <motion.div
          animate={{
            y: inView ? 0 : 95,
          }}
          transition={{ duration: 0.4, delay: 0.1 }}
          ref={ref}
        >
          A partner and a platform that
        </motion.div>

        <motion.div
          animate={{
            y: inView ? 0 : 95,
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          ref={ref}
        >
          make money simple.
        </motion.div>
        <motion.div
          animate={{
            y: inView ? 0 : 95,
          }}
          transition={{ duration: 0.6, delay: 0.3 }}
          ref={ref}
        ></motion.div>

        <div className="text-[14px] leading-5 pt-5 md:text-[18px] md:max-w-[30rem] md:text-center   ">
          Take control of your finances with expert human help and a single
          intuitive place to track it all.
        </div>
      </div>
    </div>
  );
};

export default Partnerlg;
