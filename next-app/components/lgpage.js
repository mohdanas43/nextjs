"use client";
import { useEffect, useState } from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import Fruitfulogo from "@/public/icons/fruitfulogo";
import Image from "next/image";
const Lgpage = () => {
  const [isTrans, setTrans] = useState(1);
  const { scrollYProgress } = useScroll();

  const at = useTransform(scrollYProgress, [0, 0.2], ["1", "0.95"]);
  const radius = useTransform(scrollYProgress, [0, 0.2], ["0px", "1000px"]);
  const [Hovered, setonHovered] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrans((prev) => (prev % 10) + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen hidden lg:block">
      <motion.div
        initial={{ translateY: "200px" }}
        animate={{ translateY: "0px" }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        style={{
          scaleX: at,
          scaleY: at,
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
        }}
        className="reltaive"
      >
        <div className="absolute flex items-center gap-x-[27rem] lg:gap-0 lg:justify-between p-10  w-full ">
          <div className="w-[120px] ">
            {" "}
            <Fruitfulogo />
          </div>{" "}
          <div className="flex items-center text-white backdrop-blur-md bg-black/20 p-4 rounded-lg gap-x-10 px-6 border border-white/20 shadow-lg">
            {" "}
            <div className="flex items-center  gap-x-5 ">
              <div>Member Benefits </div>
              <div>
                {" "}
                <Image
                  width={500}
                  height={500}
                  className="w-full h-full object-cover "
                  src="/images/down1.svg"
                />{" "}
              </div>
            </div>
            <div>Pricing</div>
          </div>
          <div className="flex gap-x-5 items-center " >
          <div className=" text-white backdrop-blur-md bg-black/20 p-4 rounded-[1.25rem] gap-x-10 px-6 w-[8rem] flex items-center justify-center border border-white/20 shadow-lg">
            <div> Log in </div>
          </div>
          <div className=" ">
           
          </div></div>
        </div>

        <motion.div
          initial={{
            height: "120vh",

            borderBottomLeftRadius: "100px",
            borderBottomRightRadius: "100px",
          }}
          animate={{
            height: 0,

            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="absolute h-screen w-full bg-white z-[10000] "
        ></motion.div>
        <div>
          <video
            className=" z-10  h-[90vh] 2xl:h-[92vh] object-cover w-full "
            loop
            muted
            autoPlay
            src="https://d1pwidzl9kib4u.cloudfront.net/marketing/20240423/20240423_Fruitful_Web_Hero_Desktop.mp4"
          ></video>
        </div>
        <div className="absolute top-[8rem] 2xl:top-[10rem] md:items-start p-8 2xl:p-[4rem] text-[3.5rem] 2xl:text-[5.25rem] 2xl:leading-[75px] leading-[52px]   font-medium text-white z-[100] flex flex-col items-center justify-center w-full  ">
          <div className="w-[40%] 2xl:w-[35%]  ">
            {" "}
            Finances figured out for you{" "}
          </div>
          <div className="pt-3 w-[85%] 2xl:py-[1rem] ">
            {isTrans === 1 && (
              <motion.div
                initial={{ translateY: 20, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-white text-[16px] 2xl:text-[22px]  text-center font-medium uppercase flex gap-1  "
              >
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                >
                  Maya
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  is
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  a
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  real
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  Fruitfil
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.5 }}
                >
                  {" "}
                  Member
                </motion.div>
              </motion.div>
            )}
            {isTrans === 2 && (
              <motion.div
                initial={{ translateY: 20, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-white text-[16px] 2xl:text-[22px]  leading-7  text-center font-medium uppercase flex gap-1"
              >
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                >
                  Andrew
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  is
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  a
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  real
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  {" "}
                  Fruitfil
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.5 }}
                >
                  Guide
                </motion.div>
              </motion.div>
            )}
            {isTrans === 3 && (
              <motion.div
                initial={{ translateY: 20, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-white text-[16px] 2xl:text-[22px]  leading-7  text-center font-medium uppercase flex  gap-1 "
              >
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                >
                  {" "}
                  Raquel
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  is
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  a
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  {" "}
                  real
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  Fruitfil
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.5 }}
                >
                  {" "}
                  Guide
                </motion.div>
              </motion.div>
            )}

            {isTrans === 4 && (
              <motion.div
                initial={{ translateY: 20, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-white text-[16px] 2xl:text-[22px]  leading-7  text-center font-medium uppercase flex  gap-1 "
              >
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                >
                  Daniela
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  {" "}
                  is
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  a
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  real
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  {" "}
                  Fruitfil{" "}
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.5 }}
                >
                  Member
                </motion.div>
              </motion.div>
            )}

            {isTrans === 5 && (
              <motion.div
                initial={{ translateY: 20, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-white text-[16px] 2xl:text-[22px]  leading-7  text-center font-medium uppercase flex gap-1 "
              >
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                >
                  Durriyais
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  {" "}
                  is
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  {" "}
                  a
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  real
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  {" "}
                  Fruitfil
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.5 }}
                >
                  Guide
                </motion.div>
              </motion.div>
            )}

            {isTrans === 6 && (
              <motion.div
                initial={{ translateY: 20, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-white text-[16px] 2xl:text-[22px]  leading-7  text-center font-medium uppercase flex  gap-1 "
              >
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                >
                  Steph
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  is
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  {" "}
                  a
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  {" "}
                  real
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  Fruitfil
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.5 }}
                >
                  {" "}
                  Member
                </motion.div>
              </motion.div>
            )}

            {isTrans === 7 && (
              <motion.div
                initial={{ translateY: 20, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-white text-[16px] 2xl:text-[22px]  leading-7  text-center font-medium uppercase flex  gap-1 "
              >
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                >
                  {" "}
                  Sharise
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  is
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  a
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  {" "}
                  real
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  Fruitfil
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.5 }}
                >
                  Member
                </motion.div>
              </motion.div>
            )}

            {isTrans === 8 && (
              <motion.div
                initial={{ translateY: 20, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-white text-[16px] 2xl:text-[22px]  leading-7  text-center font-medium uppercase flex  gap-1 "
              >
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                >
                  {" "}
                  Rebecca{" "}
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  is
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  {" "}
                  a
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  {" "}
                  real{" "}
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  Fruitfil
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.5 }}
                >
                  {" "}
                  Guide
                </motion.div>
              </motion.div>
            )}

            {isTrans === 9 && (
              <motion.div
                initial={{ translateY: 20, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-white text-[16px] 2xl:text-[22px]  leading-7  text-center font-medium uppercase flex  gap-1 "
              >
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                >
                  Misha
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  is
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  {" "}
                  a
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  {" "}
                  real{" "}
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  {" "}
                  Fruitfil
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.5 }}
                ></motion.div>
              </motion.div>
            )}

            {isTrans === 10 && (
              <motion.div
                initial={{ translateY: 20, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-white text-[16px] 2xl:text-[22px]  leading-7  text-center font-medium uppercase flex  gap-1 "
              >
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                >
                  Colin
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  is
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  a
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  real
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  Fruitfil
                </motion.div>
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.5 }}
                >
                  Guide
                </motion.div>
              </motion.div>
            )}
          </div>
          <div className="relative  overflow-hidden ">
            <div
              className=" z-[999]  bg-white flex min-w-[10rem] max-w-[10rem]  2xl:min-w-[13rem] 2xl:max-w-[13rem]  w-full justify-center items-center text-center text-black mt-3  border-solid rounded-[1rem] text-[16px]  h-[3.25rem]  "
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
              className="absolute z-10  top-[3.25rem] bg-[#054F31] flex min-w-[10rem] max-w-[10rem] 2xl:min-w-[13rem] 2xl:max-w-[13rem] w-full justify-center items-center text-center text-white mt-3 border-solid rounded-[1rem] text-[16px] h-[3.25rem]"
              animate={{
                translateY: Hovered== 1 ? "-100%" : 0,
              }}
              transition={{
                duration: 0.5,
                ease: "circInOut",
              }}
            >
              Get Started
            </motion.div>
          </div>
        </div>
        <div className="bg-[#D9FFE0] text-[13px] text-center p-3 ">
          <div className="font-bold text-[#054F31] ">
            Membership is risk-free for 30 days
          </div>
          <div
            className="font-medium text-[12px] text-[#054F31]
        "
          >
            Try Fruitful for a month! Not your thing? Get a full refund. No
            fuss.
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Lgpage;
