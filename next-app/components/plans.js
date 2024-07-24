import Right from "@/public/icons/right";
import React from "react";

const Plans = () => {
  return (
    <div className="bg-[#F3F3F3] pb-10 lg:px-32 xl:px-[25rem] md:px-10 " >
      <div className="flex w-full justify-center leading-[1.25] text-[1.2rem] font-medium  ">
        <div>All plans provide access to</div>
      </div>
      <div className="flex flex-col  " >
      <div className="  md:flex" >
      <div className="flex px-5 items-center ">
        <div className="w-[1.2rem] ">
          <Right />
        </div>
        <div className="text-[16px] leading-5 pt-4 pl-3 font-medium ">
          Expert advice and support from your dedicated Guide, a CFP®
          Professional
        </div>
      </div>
      <div className="flex px-5 items-center pt-3 ">
        <div className="w-[1.2rem] ">
          <Right />
        </div>
        <div className="text-[16px] leading-5 pt-4 pl-3 font-medium ">
          5.00% APY High Yield Savings Account, more than 10x the national
          average*
        </div>
      </div>
      </div>
      <div className="  md:flex md:w-full" >  
      <div className="flex px-5 pt-7 md:w-[50%] ">
        <div className="w-[1.2rem] ">
          <Right />
        </div>
        <div className="text-[16px] leading-5 pl-3 font-medium ">
          1-to-1 video sessions focused on hitting your goals with progress
          check-ins, quick syncs and anytime messaging
        </div>
      </div>
      <div className="flex px-5 pt-7 md:w-[50%] ">
        <div className="w-[1.2rem] ">
          <Right />
        </div>
        <div className="text-[16px] leading-5 pl-3 font-medium ">
          Tailored investment portfolios with expert support at every step and
          no management fees
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Plans;
