"use client";
import React, { useEffect, useRef, useState } from "react";
import Guider1 from "./guider1";
import Guider2 from "./guider2";
import Guider3 from "./guider3";
import Guider4 from "./guider4";
import Guider5 from "./guider5";
import Guider6 from "./guider6";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const Guidelg = () => {
  const [Hovered, setonHovered] = useState(0);
  const [Hovered1, setonHovered1] = useState(0);
  const [Hovered2, setonHovered2] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [isHovered, setIsHovered] = useState(0);

  //   const ref1 = useRef();
  //   const ref2 = useRef();
  //   const ref3 = useRef();
  //   const ref4 = useRef();
  //   const ref5 = useRef();
  //   const ref6 = useRef();

  //   useEffect(() => {
  //     if (borderColor == 1) {
  //       ref1.current.scrollIntoView({
  //         behavior: "smooth",
  //         block: "center",
  //         inline: "center",
  //       });
  //     } else if (borderColor == 2) {
  //       ref2.current.scrollIntoView({
  //         behavior: "smooth",
  //         block: "center",
  //         inline: "center",
  //       });
  //     } else if (borderColor == 3) {
  //       ref3.current.scrollIntoView({
  //         behavior: "smooth",
  //         block: "center",
  //         inline: "center",
  //       });
  //     } else if (borderColor == 4) {
  //       ref4.current.scrollIntoView({
  //         behavior: "smooth",
  //         block: "center",
  //         inline: "center",
  //       });
  //     } else if (borderColor == 5) {
  //       ref5.current.scrollIntoView({
  //         behavior: "smooth",
  //         block: "center",
  //         inline: "center",
  //       });
  //     } else if (borderColor == 6) {
  //       ref6.current.scrollIntoView({
  //         behavior: "smooth",
  //         block: "center",
  //         inline: "center",
  //       });
  //     }
  //   }, [borderColor]);

  //   useEffect(() => {
  //     const scroll = () => {
  //       ref3.current.scrollIntoView({
  //         behavior: "smooth",
  //         block: "center",
  //         inline: "center",
  //       });
  //     };
  //     scroll();
  //   }, []);

  return (
    <div className="flex w-full justify-center items-center flex-col px-[1rem] py-[4rem] gap-3 overflow-x-hidden lg:overflow-x-visible lg:pb-[22rem] xl:pb-[4rem] lg:h-[57rem] ">
      <div className="leading-[28px]" ref={ref}>
        {" "}
        <motion.div
          className="text-[43px] font-medium w-[42rem] text-center xl:text-[50px] xl:py-5 "
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.1, 0.2, 0.2, 0.3) 0.4s",
          }}
        >
          Guides that helps you grow
        </motion.div>
      </div>
      <div className="text-[16px] font-medium w-[23rem] text-center ">
        Talk to someone who understands you and your money. Make progress and
        feel empowered.
      </div>
      <div className="flex gap-3  xl:pb-20  ">
        <Link href="/works">
          <div className="relative  overflow-hidden ">
            <div
              className="border-2 rounded-[25px] border-solid border-[#3A3A3A] w-[10rem] text-center h-[2.5rem] flex items-center justify-center "
              onMouseEnter={() => {
                setonHovered1(1);
              }}
              onMouseLeave={() => {
                setonHovered1(0);
              }}
            >
              How it works
            </div>

            <motion.div
              className=" absolute z-10 bg-black  text-white border-2 rounded-[25px] border-solid border-[#3A3A3A] w-[10rem] text-center h-[2.5rem] flex items-center justify-center "
              onMouseEnter={() => {
                setonHovered1(1);
              }}
              onMouseLeave={() => {
                setonHovered1(0);
              }}
              animate={{
                translateY: Hovered1 ? "-100%" : 0,
              }}
              transition={{
                duration: 0.5,
                ease: "circInOut",
              }}
            >
              How it works
            </motion.div>
          </div>
        </Link>
        <div className="relative  overflow-hidden ">
          <div
            className="border-2 rounded-[25px] border-solid border-[#3A3A3A] w-[10rem] text-center h-[2.5rem] flex items-center justify-center "
            onMouseEnter={() => {
              setonHovered2(1);
            }}
            onMouseLeave={() => {
              setonHovered2(0);
            }}
          >
            Who are Guides
          </div>
          <motion.div
            className=" absolute border-2 rounded-[25px] border-solid bg-black text-white border-[#3A3A3A] w-[10rem] text-center h-[2.5rem] flex items-center justify-center "
            onMouseEnter={() => {
              setonHovered2(1);
            }}
            onMouseLeave={() => {
              setonHovered2(0);
            }}
            animate={{
              translateY: Hovered2 ? "-100%" : 0,
            }}
            transition={{
              duration: 0.5,
              ease: "circInOut",
            }}
          >
            Who are Guides
          </motion.div>
        </div>
      </div>

      <div className="flex lg:relative     ">
        <motion.div
          initial={{
            rotate: 0,
            scale: 1,
          }}
          animate={{
            rotate: isHovered == 1 ? "5deg" : "0",
            scale: isHovered == 1 ? 1.2 : 1,
          }}
          className="bg-[#FEE9D1] w-[15rem] h-[23rem] lg:w-[8rem] lg:h-[11rem] xl:w-[14rem] xl:h-[18rem] lg:-rotate-3 z-[100] lg:z-10 rounded-2xl lg:absolute  lg:left-[-21rem] xl:left-[-33rem] shadow-lg "
          onClick={() => {
            setonHovered(1);
          }}
          onMouseEnter={() => {
            setIsHovered(1);
          }}
          onMouseLeave={() => {
            setIsHovered(0);
          }}
        >
          <div className="w-[8rem] h-[11rem] xl:w-[14rem] xl:h-[18rem]">
            <Image
              width={500}
              height={500}
              className="object-cover h-full w-full "
              src="/images/Andrea.png"
            />
          </div>
          <div
            className={` absolute top-0 w-[8rem] h-[11rem] xl:w-[14rem] xl:h-[18rem] ${
              isHovered == 1 ? "block  z-[100]  " : "hidden  "
            } `}
          >
            <video
              className="rounded-2xl w-full h-full  object-cover"
              autoPlay
              muted
              loop
              src="https://d1pwidzl9kib4u.cloudfront.net/marketing/20240305/4x3_Low_Quality_Low_Captions/20240304_Fruitful_Guide_4x3_Andrea_sm_locap.mp4"
            ></video>
          </div>
        </motion.div>

        <div
          className={` ${
            Hovered == 1
              ? "block fixed top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 z-[100] "
              : "hidden"
          } `}
        >
          <Guider1 />
        </div>

        <motion.div
          initial={{
            rotate: 0,
            scale: 1,
          }}
          animate={{
            rotate: isHovered == 2 ? "5deg" : "0",
            scale: isHovered == 2 ? 1.2 : 1,
          }}
          className="bg-[#FEE9D1] w-[15rem] h-[23rem] lg:w-[8rem] lg:h-[11rem] xl:w-[14rem] xl:h-[18rem] rotate-3   z-30  rounded-2xl lg:absolute  lg:left-[-14rem] xl:left-[-22rem] shadow-lg "
          onClick={() => {
            setonHovered(2);
          }}
          onMouseEnter={() => {
            setIsHovered(2);
          }}
          onMouseLeave={() => {
            setIsHovered(0);
          }}
        >
          <div className="w-[8rem] h-[11rem] xl:w-[14rem] xl:h-[18rem] z-20 ">
            {" "}
            <Image
              width={500}
              height={500}
              className="object-cover h-full w-full "
              src={"/images/1.png"}
            />
          </div>
          <div
            className={` absolute top-0 w-[8rem] h-[11rem] xl:w-[14rem] xl:h-[18rem] ${
              isHovered == 2 ? "block  z-[100]  " : "hidden  "
            } `}
          >
            <video
              className="rounded-2xl w-full h-full  object-cover"
              autoPlay
              muted
              loop
              src="https://d1pwidzl9kib4u.cloudfront.net/marketing/20240305/4x3_Low_Quality_Low_Captions/20240304_Fruitful_Guide_4x3_Andrew_sm_locap.mp4"
            ></video>
          </div>
        </motion.div>
        <div
          className={` ${
            Hovered == 2
              ? "block fixed top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 z-[100] "
              : "hidden"
          } `}
        >
          <Guider2 />
        </div>

        <motion.div
          initial={{
            rotate: 0,
            scale: 1,
          }}
          animate={{
            rotate: isHovered == 3 ? "5deg" : "0",
            scale: isHovered == 3 ? 1.2 : 1,
          }}
          className="bg-[#FEE9D1] w-[15rem] h-[23rem] lg:w-[8rem] lg:h-[11rem] xl:w-[14rem] xl:h-[18rem] z-40 rounded-2xl  lg:absolute  lg:left-[-7rem] xl:left-[-10rem] shadow-lg "
          onClick={() => {
            setonHovered(3);
          }}
          onMouseEnter={() => {
            setIsHovered(3);
          }}
          onMouseLeave={() => {
            setIsHovered(0);
          }}
        >
          {" "}
          <div className="w-[8rem] h-[11rem] xl:w-[14rem] xl:h-[18rem]">
            <Image
              width={500}
              height={500}
              className="object-cover h-full w-full "
              src={"/images/Bri.png"}
            />
          </div>
          <div
            className={` absolute top-0 w-[8rem] h-[11rem] xl:w-[14rem] xl:h-[18rem] ${
              isHovered == 3 ? "block  z-[100]  " : "hidden  "
            } `}
          >
            <video
              className="rounded-2xl w-full h-full  object-cover"
              autoPlay
              muted
              loop
              src="https://d1pwidzl9kib4u.cloudfront.net/marketing/20240305/4x3_Low_Quality_Low_Captions/20240304_Fruitful_Guide_4x3_Bri_sm_locap.mp4"
            ></video>
          </div>
        </motion.div>
        <div
          className={` ${
            Hovered == 3
              ? "block fixed top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 z-[100]"
              : "hidden"
          } `}
        >
          <Guider3 />
        </div>

        <motion.div
          initial={{
            rotate: 0,
            scale: 1,
          }}
          animate={{
            rotate: isHovered == 4 ? "5deg" : "0",
            scale: isHovered == 4 ? 1.2 : 1,
          }}
          className="bg-[#FEE9D1] w-[15rem] h-[23rem] lg:w-[8rem] lg:h-[11rem] xl:w-[14rem] xl:h-[18rem] z-50  rounded-2xl  lg:absolute  lg:left-[1rem] xl:left-[2rem] shadow-lg "
          onClick={() => {
            setonHovered(4);
          }}
          onMouseEnter={() => {
            setIsHovered(4);
          }}
          onMouseLeave={() => {
            setIsHovered(0);
          }}
        >
          <div className="w-[8rem] h-[11rem] xl:w-[14rem] xl:h-[18rem]">
            <Image
              width={500}
              height={500}
              className="object-cover h-full w-full "
              src={"/images/Matt.png"}
            />
          </div>
          <div
            className={` absolute top-0 w-[8rem] h-[11rem] xl:w-[14rem] xl:h-[18rem] ${
              isHovered == 4 ? "block  z-[100]  " : "hidden  "
            } `}
          >
            <video
              className="rounded-2xl w-full h-full  object-cover"
              autoPlay
              muted
              loop
              src="https://d1pwidzl9kib4u.cloudfront.net/marketing/20240305/4x3_Low_Quality_Low_Captions/20240304_Fruitful_Guide_4x3_Matt_sm_locap.mp4"
            ></video>
          </div>
        </motion.div>
        <div
          className={` ${
            Hovered == 4
              ? "block fixed top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 z-[100]"
              : "hidden"
          } `}
        >
          <Guider4 />
        </div>

        <motion.div
          initial={{
            rotate: 0,
            scale: 1,
          }}
          animate={{
            rotate: isHovered == 5 ? "5deg" : "0",
            scale: isHovered == 5 ? 1.2 : 1,
          }}
          className="bg-[#FEE9D1] w-[15rem] h-[23rem] lg:w-[8rem] lg:h-[11rem] xl:w-[14rem] xl:h-[18rem] z-[60] rotate-2 rounded-2xl  lg:absolute  lg:left-[8rem] xl:left-[12rem] shadow-lg "
          onClick={() => {
            setonHovered(5);
          }}
          onMouseEnter={() => {
            setIsHovered(5);
          }}
          onMouseLeave={() => {
            setIsHovered(0);
          }}
        >
          {" "}
          <div className="w-[8rem] h-[11rem] xl:w-[14rem] xl:h-[18rem]">
            <Image
              width={500}
              height={500}
              className="object-cover h-full w-full "
              src={"/images/mckenna.png"}
            />
          </div>
          <div
            className={` absolute top-0 w-[8rem] h-[11rem] xl:w-[14rem] xl:h-[18rem] ${
              isHovered == 5 ? "block  z-[100]  " : "hidden  "
            } `}
          >
            <video
              className="rounded-2xl w-full h-full  object-cover"
              autoPlay
              muted
              loop
              src="https://d1pwidzl9kib4u.cloudfront.net/marketing/20240305/4x3_Low_Quality_Low_Captions/20240305_Fruitful_Guide_4x3_Mckenna_sm_locap.mp4"
            ></video>
          </div>
        </motion.div>
        <div
          className={` ${
            Hovered == 5
              ? "block fixed top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 z-[100]"
              : "hidden"
          } `}
        >
          <Guider5 />
        </div>

        <motion.div
          initial={{
            rotate: 0,
            scale: 1,
          }}
          animate={{
            rotate: isHovered == 6 ? "5deg" : "0",
            scale: isHovered == 6 ? 1.2 : 1,
          }}
          className="bg-[#FEE9D1] w-[15rem] h-[23rem] lg:w-[8rem] lg:h-[11rem] xl:w-[14rem] xl:h-[18rem] rotate-3 z-[70] rounded-2xl  lg:absolute  lg:left-[15rem] xl:left-[22rem]  right-0 shadow-lg"
          onClick={() => {
            setonHovered(6);
          }}
          onMouseEnter={() => {
            setIsHovered(6);
          }}
          onMouseLeave={() => {
            setIsHovered(0);
          }}
        >
          {" "}
          <div className="w-[8rem] h-[11rem] xl:w-[14rem] xl:h-[18rem]">
            <Image
              width={500}
              height={500}
              className="object-cover h-full w-full "
              src={"/images/headshot.png"}
            />
          </div>
          <div
            className={` absolute top-0 w-[8rem] h-[11rem] xl:w-[14rem] xl:h-[18rem] ${
              isHovered == 6 ? "block  z-[100]  " : "hidden  "
            } `}
          >
            <video
              className="rounded-2xl w-full h-full  object-cover"
              autoPlay
              muted
              loop
              src="https://d1pwidzl9kib4u.cloudfront.net/marketing/20240305/4x3_Low_Quality_Low_Captions/20240304_Fruitful_Guide_4x3_Raquel_sm_locap.mp4"
            ></video>
          </div>
        </motion.div>
        <div
          className={` ${
            Hovered == 6
              ? "block fixed top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 z-[100]"
              : "hidden"
          } `}
        >
          <Guider6 />
        </div>
      </div>
      {
        <div
          className={` h-screen w-screen bg-black opacity-50 fixed top-0 left-0 z-50 ${
            Hovered == 1 ||
            Hovered == 2 ||
            Hovered == 3 ||
            Hovered == 4 ||
            Hovered == 5 ||
            Hovered == 6
              ? "block"
              : "hidden"
          } `}
          onClick={() => {
            setonHovered(0);
          }}
        ></div>
      }
      
      <div className="flex  w-[70%] bg-[#054F31] z-[999] text-[#D5FCDD] justify-center h-[4rem] md:w-[30%] md:h-[3rem] xl:w-[15%] items-center rounded-2xl mt-[15rem] xl:mt-[20rem] ">
        <div className="">Choose your Guide</div>
      </div>
    </div>
  );
};

export default Guidelg;
// <div>

//         </div>
//         <div>

//           <div >
//             <video
//               muted
//               autoPlay
//               loop

//         </div>
//         <div>

//           <video
//             muted
//             autoPlay
//             loop

//           ></video>
//         </div>
//         <div>

//           <video
//             muted
//             autoPlay
//             loop

//           ></video>
//         </div>
//         <div>

//           <video
//             muted
//             autoPlay
//             loop
//           ></video>
//         </div>
