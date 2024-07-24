"use client";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Membershiplg = () => {
  const ref = useRef();
  const ref1 = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const at = useTransform(scrollYProgress, [0, 2.8], ["0px", "-100px"]);
  const { scrollY } = useScroll({ target: ref1 });
  const text = useTransform(scrollYProgress, [0, 0.9], ["150px", "50px"]);
  const translate = useTransform(scrollYProgress, [0, 0.9], ["150px", "1600px"]);
  const textColor = useTransform(scrollYProgress, [0, 0.9], ["#ffffff", "#000000"]);

  useEffect(() => {
    console.log(scrollYProgress, "ssss");
  }, [scrollYProgress]);

  return (
    <div
      className="md:h-[70vh] bg-[#A7D5EB] lg:h-[230vh] h-[110vh] rounded-2xl overflow-hidden"
      ref={ref}
    >
      <div>
        <motion.div className="relative bg-[#A7D5EB] top-0 h-[94vh] md:h-[60vh] lg:h-[195vh] rounded-2xl">
          <motion.div
            ref={ref1}
            className="flex w-full justify-center items-center text-center relative z-[2000] leading-none"
            style={{
              fontSize: text,
              y: translate,
              color: textColor,
            }}
          >
            Membership <br /> Benefits
          </motion.div>
          <motion.div className="absolute top-[6.25rem] right-0 w-[11rem] lg:w-[26rem]">
            <Image
              width={500}
              height={500}
              className="w-full h-full object-cover"
              src="/images/treesright.png"
            />
          </motion.div>
          <motion.div
            className="absolute top-[7rem] left-0 w-[21rem] lg:w-[35rem]"
            style={{
              translateY: at,
            }}
          >
            <Image
              width={500}
              height={500}
              className="w-full h-full object-cover"
              src="/images/treesleft.png"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-0 h-[18rem] md:h-[31rem] lg:h-[35rem] xl:h-[57rem]"
            style={{
              translateY: at,
            }}
          >
            <Image
              width={500}
              height={500}
              className="w-full h-full object-cover"
              src="/images/people.webp"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-[14rem] w-[2rem] left-[3rem]"
            style={{
              translateY: at,
            }}
          >
            <Image
              width={500}
              height={500}
              className="w-full h-full object-cover"
              src="/images/leftbutterfly.png"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-[20rem] w-[2rem] left-[16rem]"
            style={{
              translateY: at,
            }}
          >
            <Image
              width={500}
              height={500}
              className="w-full h-full object-cover"
              src="/images/rightbutterfly.png"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="flex w-[90%] justify-center text-[18px] pt-[10rem] text-center pl-[10rem]">
        <div className="w-[420px]">
          Get expert advice and access to smarter, simpler ways to save and
          invest all in one place.
        </div>
      </div>
    </div>
  );
};

export default Membershiplg;
