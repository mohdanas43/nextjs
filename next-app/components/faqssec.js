"use client";
import React, { useRef } from "react";
import Faqs from "./faqs";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const Faqssec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="z-[999]  relative overflow-hidden ">
      <div className=" flex flex-col gap-5 justify-center items-center ">
        <Faqs question={"What is Fruitful?"} arrow={"/images/down.svg"}></Faqs>
        <Faqs question={"Why is it good?"} arrow={"/images/down.svg"}></Faqs>
        <Faqs
          question={
            "Do I need to be a Fruitful Member to access all member benefits?"
          }
          arrow={"/images/down.svg"}
        ></Faqs>
        <Faqs
          question={"How do I connect with my Guide?"}
          arrow={"/images/down.svg"}
        ></Faqs>
        <Faqs
          question={"What credentials do Fruitful Guides have?"}
          arrow={"/images/down.svg"}
        ></Faqs>
        <Faqs
          question={"What can Fruitful Guides help me with?"}
          arrow={"/images/down.svg"}
        ></Faqs>
        <Faqs
          question={"Can I change my Fruitful Guide?"}
          arrow={"/images/down.svg"}
        ></Faqs>
        <Faqs
          question={"How much does Fruitful cost?"}
          arrow={"/images/down.svg"}
        ></Faqs>
        <Faqs
          question={
            "How does that compare to the cost at other financial companies?"
          }
          arrow={"/images/down.svg"}
        ></Faqs>
        <Faqs
          question={"Why can I trust Fruitful with my money?"}
          arrow={"/images/down.svg"}
        ></Faqs>
        <Faqs
          question={"What if I’m not sure Fruitful is the right fit for me?"}
          arrow={"/images/down.svg"}
        ></Faqs>
        <Faqs
          question={"As a member, how can I reach support?"}
          arrow={"/images/down.svg"}
        ></Faqs>
      </div>
      <motion.div
        className="h-[16rem] w-[16rem]  absolute top-10 right-2 lg:right-[-2.45rem]  z-0 xl:right-[1.95rem] "
        ref={ref}
        initial={{
          rotate: 0,
        }}
        animate={{
          rotate: isInView ? "15deg" : 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        {" "}
        <Image
          width={500}
          height={500}
          className="w-full h-full object-cover"
          src="/images/investing.png"
        />
      </motion.div>
      <motion.div
        ref={ref}
        initial={{
          rotate: 0,
        }}
        animate={{
          rotate: isInView ? "-15deg" : 0,
        }}
        transition={{
          duration: 1,
        }}
        className="h-[12rem] w-[12rem] xl:w-[14 rem]  absolute top-[23rem] left-16 lg:left-5  overflow-hidden xl:left-[4rem] "
      >
        {" "}
        <Image
          width={500}
          height={500}
          className="w-full h-full object-cover"
          src="/images/spending.png"
        />
      </motion.div>
      <motion.div
        ref={ref}
        initial={{
          rotate: 0,
        }}
        animate={{
          rotate: isInView ? "13deg" : 0,
        }}
        transition={{
          duration: 1,
        }}
        className="h-[12rem] w-[12rem] xl:w-[15rem]  absolute top-[32rem] right-2 lg:right-[-2.45rem] xl:right-[2rem] "
      >
        {" "}
        <Image
          width={500}
          height={500}
          className="w-full h-full object-cover"
          src="/images/borrow.png"
        />
      </motion.div>
      <motion.div
        ref={ref}
        initial={{
          rotate: 0,
        }}
        animate={{
          rotate: isInView ? "-12deg" : 0,
        }}
        transition={{
          duration: 1,
        }}
        className="h-[12rem] w-[12rem] xl:w-[14rem] absolute bottom-[3rem] left-10 lg:left-0 xl:left-[4rem] xl:bottom-[4rem] "
      >
        {" "}
        <Image
          width={500}
          height={500}
          className="w-full h-full object-cover"
          src="/images/saving.png"
        />
      </motion.div>
    </div>
  );
};

export default Faqssec;
