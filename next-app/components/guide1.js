"use client";
import React, { useEffect, useRef, useState } from "react";
import Guider1 from "./guider1";
import Guider2 from "./guider2";
import Guider3 from "./guider3";
import Guider4 from "./guider4";
import Guider5 from "./guider5";
import Guider6 from "./guider6";
import Image from "next/image";
import { motion } from "framer-motion";

const Guide1 = () => {
  const [Hovered, setonHovered] = useState(0);

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
    <div className="flex w-full justify-center items-center flex-col px-[1rem] py-[4rem] gap-3 overflow-x-hidden lg:overflow-x-visible ">
      <div className="leading-[28px]">
        {" "}
        <div className="text-[43px] font-medium w-[42rem] text-center">
          Guides that helps you grow
        </div>
      </div>
      <div className="text-[16px] font-medium w-[23rem] text-center ">
        Talk to someone who understands you and your money. Make progress and
        feel empowered.
      </div>
      <div className="flex gap-3 ">
        <div className="border-2 rounded-[25px] border-solid border-[#3A3A3A] w-[10rem] text-center h-[2.5rem] flex items-center justify-center ">
          How it works
        </div>
        <div className="border-2 rounded-[25px] border-solid border-[#3A3A3A] w-[10rem] text-center h-[2.5rem] flex items-center justify-center ">
          Who are Guides
        </div>
      </div>

      <div className="flex lg:relative  ">
      {Hovered == 1 && (
          <div className=" h-screen w-screen bg-black opacity-50 fixed top-0 left-0 z-50 "></div>
        )}
        <div
          className="bg-[#FEE9D1] w-[15rem] h-[23rem] lg:w-[8rem] lg:h-[11rem] lg:-rotate-3 z-[100] rounded-2xl lg:absolute  lg:left-[-21rem]  "
          onMouseEnter={() => {
            setonHovered(1);
          }}
          onMouseLeave={() => {
            setonHovered(0);
          }}
        >
          <Image
            width={500}
            height={500}
            className="object-cover h-full w-full "
            src="/images/Andrea.png"
          />
        </div>
        <div
          className={` ${
            Hovered == 1
              ? "block fixed top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 z-[100] "
              : "hidden"
          } `}
        >
          <Guider1 />
        </div>
        {Hovered == 2 && (
          <div className=" h-screen w-screen bg-black opacity-50 fixed top-0 left-0 z-50 "></div>
        )}

        <div
          className="bg-[#FEE9D1] w-[15rem] h-[23rem] lg:w-[8rem] lg:h-[11rem] rotate-3   z-10  rounded-2xl lg:absolute  lg:left-[-14rem] "
          onMouseEnter={() => {
            setonHovered(2);
          }}
          onMouseLeave={() => {
            setonHovered(0);
          }}
        >
          <Image
            width={500}
            height={500}
            className="object-cover h-full w-full "
            src={"/images/1.png"}
          />
        </div>
        <div
          className={` ${
            Hovered == 2
              ? "block fixed top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 z-[100] "
              : "hidden"
          } `}
        >
          <Guider2 />
        </div>
        {Hovered == 3 && (
          <div className=" h-screen w-screen bg-black opacity-50 fixed top-0 left-0 z-50 "></div>
        )}

        <div
          className="bg-[#FEE9D1] w-[15rem] h-[23rem] lg:w-[8rem] lg:h-[11rem]  z-10 rounded-2xl  lg:absolute  lg:left-[-7rem] "
          onMouseEnter={() => {
            setonHovered(3);
          }}
          onMouseLeave={() => {
            setonHovered(0);
          }}
        >
          <Image
            width={500}
            height={500}
            className="object-cover h-full w-full "
            src={"/images/Bri.png"}
          />
        </div>
        <div
          className={` ${
            Hovered == 3
              ? "block fixed top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 z-[100]"
              : "hidden"
          } `}
        >
          <Guider3 />
        </div>
        {Hovered == 4 && (
          <div className=" h-screen w-screen bg-black opacity-50 fixed top-0 left-0 z-50 "></div>
        )}

        <div
          className="bg-[#FEE9D1] w-[15rem] h-[23rem] lg:w-[8rem] lg:h-[11rem] z-10  rounded-2xl  lg:absolute  lg:left-[1rem] "
          onMouseEnter={() => {
            setonHovered(4);
          }}
          onMouseLeave={() => {
            setonHovered(0);
          }}
        >
          <Image
            width={500}
            height={500}
            className="object-cover h-full w-full "
            src={"/images/Matt.png"}
          />
        </div>
        <div
          className={` ${
            Hovered == 4
              ? "block fixed top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 z-[100]"
              : "hidden"
          } `}
        >
          <Guider4 />
        </div>
        {Hovered == 5 && (
          <div className=" h-screen w-screen bg-black opacity-50 fixed top-0 left-0 z-50 "></div>
        )}

        <div
          className="bg-[#FEE9D1] w-[15rem] h-[23rem] lg:w-[8rem] lg:h-[11rem] z-10 rotate-2 rounded-2xl  lg:absolute  lg:left-[8rem] "
          onMouseEnter={() => {
            setonHovered(5);
          }}
          onMouseLeave={() => {
            setonHovered(0);
          }}
        >
          <Image
            width={500}
            height={500}
            className="object-cover h-full w-full "
            src={"/images/mckenna.png"}
          />
        </div>
        <div
          className={` ${
            Hovered == 5
              ? "block fixed top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 z-[100]"
              : "hidden"
          } `}
        >
          <Guider5 />
        </div>
        {Hovered == 6 && (
          <div className=" h-screen w-screen bg-black opacity-50 fixed top-0 left-0 z-50 "></div>
        )}

        <div
          className="bg-[#FEE9D1] w-[15rem] h-[23rem] lg:w-[8rem] lg:h-[11rem] rotate-3 z-10 rounded-2xl  lg:absolute  lg:left-[15rem]  right-0"
          onMouseEnter={() => {
            setonHovered(6);
          }}
          onMouseLeave={() => {
            setonHovered(0);
          }}
        >
          <Image
            width={500}
            height={500}
            className="object-cover h-full w-full "
            src={"/images/headshot.png"}
          />
        </div>
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
    </div>
  );
};

export default Guide1;
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
