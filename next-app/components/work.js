"use client";
import { useInView } from "framer-motion";

import React, { useRef } from "react";
import { motion } from "framer-motion";

const Work = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
 

   
  return (
    <div>
      <div className=" flex flex-col items-center lg:hidden text-center text-[1.55rem] leading-[32px] md:text-[3.2rem] py-[7.5rem] px-[1.25rem] md:leading-[56px] font-medium overflow-hidden w-full ">
        <motion.div
          className="w-[19rem] "
          animate={{
            y: inView ? 0 : 95,
          }}
          transition={{ duration: 0.4, delay: 0.1 }}
          ref={ref}
        >
          Work with a Fruitful
        </motion.div>

        <motion.div
          animate={{
            y: inView ? 0 : 95,
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          ref={ref}
        >
          Guide who understands{" "}
        </motion.div>
        <motion.div
          animate={{
            y: inView ? 0 : 95,
          }}
          transition={{ duration: 0.6, delay: 0.3 }}
          ref={ref}
        >
          you. Get organized,{" "}
        </motion.div>
        <motion.div
          animate={{
            y: inView ? 0 : 95,
          }}
          transition={{ duration: 0.7, delay: 0.4 }}
          ref={ref}
        >
          {" "}
        </motion.div>
        <motion.div
          animate={{
            y: inView ? 0 : 95,
          }}
          transition={{ duration: 0.8, delay: 0.5 }}
          ref={ref}
        >
          {" "}
          optimized, and on track{" "}
        </motion.div>
        <motion.div
          animate={{
            y: inView ? 0 : 95,
          }}
          transition={{ duration: 0.9, delay: 0.6 }}
          ref={ref}
        >
          {" "}
          to hit your goals in no
        </motion.div>
        <motion.div
          animate={{
            y: inView ? 0 : 95,
          }}
          transition={{ duration: 1, delay: 0.6 }}
          ref={ref}
        >
          {" "}
          time.
        </motion.div>
      </div>

  
    </div>
  );
};

export default Work;
