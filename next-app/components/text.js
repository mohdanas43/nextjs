"use client"
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Text = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const textFontSize = useTransform(
    scrollYProgress,
    [0, 1.5],
    ["60px", "16px"]
  );

  const textTranslateY = useTransform(
    scrollYProgress,
    [0, 1.5],
    ["-360px", "-120px"]
  );

  useEffect(() => {
    console.log("scrollYProgress:", scrollYProgress);
    console.log("textFontSize:", textFontSize.current);
    console.log("textTranslateY:", textTranslateY.current);
  }, [scrollYProgress, textFontSize, textTranslateY]);

  return (
    <div className="h-[110vh]" ref={ref}>
      <div className="">
        <motion.div className="relative bg-[#A7D5EB] top-0 h-[94vh]">
          <motion.div
            className="sticky top-[100rem] flex w-full justify-center items-center text-center z-[999] text-black"
            style={{
              fontSize: textFontSize,
              translateY: textTranslateY,
            }}
          >
            Membership <br /> Benefits
          </motion.div>
          <motion.div className="absolute top-[6.25rem] right-0 w-[11rem]">
            <Image
              width={500}
              height={500}
              className="w-full h-full object-cover"
              src="/images/treesright.png"
            />
          </motion.div>
          <motion.div className="absolute top-[7rem] left-0 w-[21rem]">
            <Image
              width={500}
              height={500}
              className="w-full h-full object-cover"
              src="/images/treesleft.png"
            />
          </motion.div>
          {/* Add more absolute positioned elements as needed */}
        </motion.div>
      </div>
    </div>
  );
};

export default Text;
