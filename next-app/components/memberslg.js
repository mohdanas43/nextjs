"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const Memberslg = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const ref3 = useRef(null);
  const containerRef = useRef(null);
  const [Hovered, setonHovered] = useState(0);

  const [isHovered, setIsHovered] = useState(0);

  useEffect(() => {
    if (containerRef.current && ref3.current) {
      const container = containerRef.current;
      const thirdVideo = ref3.current;
      const containerWidth = container.offsetWidth;
      const videoWidth = thirdVideo.offsetWidth;
      const gap = 16;
      const centerPosition =
        thirdVideo.offsetLeft - containerWidth / 2 + videoWidth / 2 - gap;
      container.scrollLeft = centerPosition;
    }
  }, []);

  return (
    <div className="flex w-full justify-center items-center flex-col px-[1rem] py-[4rem] gap-3 overflow-hidden ">
      <div className="leading-[28px] lg:leading-9 ">
        <motion.div
          className="text-[27px] font-medium w-[22rem] text-center lg:text-[45px] "
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          Our members
        </motion.div>
        <motion.div
          className="text-[27px] font-medium w-[22rem] text-center lg:text-[45px]"
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          make moves
        </motion.div>
      </div>
      <div className="text-[14px] font-medium w-[23rem] text-center lg:p-10 ">
        Hear inspiring stories from real members <br /> making real progress.
      </div>

      <div
        ref={containerRef}
        className="relative pl-[6rem] pr-[6rem] lg:pl-[8rem]"
        id="scroll-container"
      >
        <div className="flex gap-[1rem] max-w-full overflow-hidden">
          <div className="flex gap-[1rem] max-w-full  lg:h-[25rem] overflow-x-scroll no-scrollbar">
            <div className="w-[14rem] flex-shrink-0 lg:relative lg:top-0 lg:left-0">
              <video
                className="w-full border border-solid rounded-[12px] -rotate-3"
                muted
                autoPlay
                loop
                src="https://d1pwidzl9kib4u.cloudfront.net/marketing/20240416/4x3_Low_Quality_No_Caption/20240316_Fruitful_Video_Member_Daniela_4x3_LQ_NC.mp4"
              ></video>
            </div>
            <div className="w-[14rem] flex-shrink-0 lg:relative lg:top-0 lg:left-[-2rem]">
              <video
                className="w-full border border-solid rounded-[12px] -rotate-3"
                muted
                autoPlay
                loop
                src="https://d1pwidzl9kib4u.cloudfront.net/marketing/20240416/4x3_Low_Quality_No_Caption/20240316_Fruitful_Video_Member_Sharise_4x3_LQ_NC.mp4"
              ></video>
            </div>
            <div
              className="w-[14rem] flex-shrink-0 lg:relative lg:top-0 lg:left-[-3.95rem]"
              ref={ref3}
            >
              <video
                className="w-full border border-solid rounded-[12px] -rotate-3"
                muted
                autoPlay
                loop
                src="https://d1pwidzl9kib4u.cloudfront.net/marketing/20240416/4x3_Low_Quality_No_Caption/20240316_Fruitful_Video_Member_MIsha_4x3_LQ_NC.mp4"
              ></video>
            </div>
            <div className="w-[14rem] flex-shrink-0 lg:relative lg:top-0 lg:left-[-5.95rem]">
              <video
                className="w-full border border-solid rounded-[12px] -rotate-3"
                muted
                autoPlay
                loop
                src="https://d1pwidzl9kib4u.cloudfront.net/marketing/20240416/4x3_Low_Quality_No_Caption/20240316_Fruitful_Video_Member_Steph_4x3_LQ_NC.mp4"
              ></video>
            </div>
            <div className="w-[14rem] flex-shrink-0 lg:relative lg:top-0 lg:left-[-7.95rem]">
              <video
                className="w-full border border-solid rounded-[12px]"
                muted
                autoPlay
                loop
                src="https://d1pwidzl9kib4u.cloudfront.net/marketing/20240416/4x3_Low_Quality_No_Caption/20240316_Fruitful_Video_Member_Maya_4x3_LQ_NC.mp4"
              ></video>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>

      <div className="text-center leading-5 py-8 lg:w-[35rem] lg:pt-0 ">
        The people in these videos are real Fruitful Members who were paid in
        cash for their time and participation in this series. We think that is
        fair.¹
      </div>
    </div>
  );
};

export default Memberslg;

// <motion.div

// >

// <div

// >
//   <video
//     className="rounded-2xl w-full h-full  object-cover"
//     autoPlay
//     muted
//     loop
//     src="https://d1pwidzl9kib4u.cloudfront.net/marketing/20240305/4x3_Low_Quality_Low_Captions/20240304_Fruitful_Guide_4x3_Andrea_sm_locap.mp4"
//   ></video>
// </div>
// </motion.div>
