"use client";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
const Worklg = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div>
      <div className="flex flex-col text-center lg:text-[1.75rem] lg:leading-[2.2rem] leading-[20px] md:text-[3.2rem] py-[7.5rem] px-[1.25rem] md:leading-[56px] font-medium overflow-hidden w-full ">
        <motion.div
          animate={{
            y: inView ? 0 : 95,
          }}
          transition={{ duration: 0.4, delay: 0.1 }}
          ref={ref}
        >
          Work with a Fruitful Guide who
        </motion.div>

        <motion.div
          animate={{
            y: inView ? 0 : 95,
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          ref={ref}
        >
          {" "}
          understands you.Get organized,optimized,
        </motion.div>
        <motion.div
          animate={{
            y: inView ? 0 : 95,
          }}
          transition={{ duration: 0.6, delay: 0.3 }}
          ref={ref}
        >
          {" "}
          and on track to hit your goals in no time.{" "}
        </motion.div>
      </div>
    </div>
  );
};

export default Worklg;
