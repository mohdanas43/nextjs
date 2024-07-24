"use client";
import React from "react";

const Progress = () => {
  return (
    <div className="px-5 flex flex-col md:flex-row gap-8 xl:justify-center xl:px-[5rem] xl:py-[5rem] ">
      <div className=" min-h-[30rem] md:w-full relative">
        <div className="bg-[#FEE9D1]  rounded-[20px] overflow-hidden  border absolute  ">
          <img
            className="h-[30rem] xl:h-[35rem] w-full object-cover  "
            src="/images/girl.webp"
            alt=""
          />
          <div className="absolute top-[20rem] md:top-[20rem] xl:top-[29rem] flex flex-col gap-2 pl-[1rem] pr-[1.75rem] pb-[1rem] font-medium  ">
            <div className="text-[40px] md:text-[35px] leading-[1] w-[15rem]  text-white ">
              Your partner in progress{" "}
            </div>
            <div className=" text-white w-[18rem] text-[16px] leading-[1.375] xl:hidden ">
              Our Guides are supportive and skilled CFP® Pros. Expect
              personalized advice that leads to quick action.
            </div>
          </div>
        </div>
      </div>

      <div className=" min-h-[30rem] md:w-full relative  ">
        <div className="bg-[#FEE9D1]  rounded-[20px]  border absolute overflow-hidden  ">
          <img
            className="h-[30rem]  xl:h-[35rem] w-full object-cover  "
            src="https://cdn.prod.website-files.com/659f15a242e58eb40c8cf14b/65ce3a4ba82e6ab1ccfcce2e_partner-progress-p-800.webp"
            alt=""
          />
          <div className="absolute top-[20rem]   md:top-[20rem] xl:top-[29rem] flex flex-col gap-2 pl-[1rem] pr-[1.75rem] pb-[1rem] font-medium  ">
            <div className="text-[40px] md:text-[35px] leading-[1] w-[17rem] text-white ">
              Your place for <br /> peace of mind{" "}
            </div>
            <div className=" text-white w-[18rem]  md:w-[20rem] text-[16px] leading-[1.375] xl:hidden ">
              Talk about, track, save, and invest your money all in one place.
              Know where you are and love where you're going.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
