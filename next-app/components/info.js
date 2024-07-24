import React from "react";

const Info = ({
  para,
  dot1,
  dot2,
  dot3,
  dot4,
  list1,
  list2,
  list3,
  list4,
  button,
}) => {
  return (
    <div>
      <div>
        <div className="text-[1.5rem] leading-[1] font-medium ">{para}</div>
        <div className="py-5  lg:h-full ">
          <div className="flex gap-2 items-center  ">
            <div className="font-bold text-black "> {dot1} </div>
            <div className="text-[0.85rem]  md:text-[1.25rem] lg:text-[1rem] xl:text-[1.20rem] leading-[1.33333] font-medium ">
              {list1}
            </div>
          </div>
          <div className="flex gap-2 items-center  ">
            <div className="font-bold text-black "> {dot2} </div>
            <div className="text-[0.85rem] md:text-[1.25rem] lg:text-[1rem] xl:text-[1.20rem] leading-[1.33333] font-medium ">
              {list2}
            </div>
          </div>
          <div className="flex gap-2 items-center  ">
            <div className="font-bold text-black "> {dot3} </div>
            <div className="text-[0.85rem] md:text-[1.25rem] lg:text-[1rem] xl:text-[1.20rem] leading-[1.33333] font-medium ">
              {list3}
            </div>
          </div>
          <div className="flex gap-2 items-center  ">
            <div className="font-bold text-black "> {dot4} </div>
            <div className="text-[0.85rem] md:text-[1.25rem] lg:text-[1rem] xl:text-[1.20rem] leading-[1.33333] font-medium ">
              {list4}
            </div>
          </div>
        </div>

        <div className="flex w-full bg-[#054F31] text-[#D5FCDD] justify-center h-[4rem] md:w-[50%] md:h-[3rem] items-center rounded-2xl ">
          <div>{button}</div>
        </div>
      </div>
    </div>
  );
};

export default Info;
