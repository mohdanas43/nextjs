import Durriya from "@/public/icons/durriya";
import Misha from "@/public/icons/misha";
import Image from "next/image";
import React from "react";
import Info from "./info";
import Vacation from "@/public/icons/vacation";
import Home from "@/public/icons/home";
import Self from "@/public/icons/self";
import Perfo from "@/public/icons/perfo";
import Moderate from "@/public/icons/moderate";
import Total from "@/public/icons/total";

const Guidance = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 left-0 h-[100vh] rounded-2xl bg-[#ffff] border-2 z-10 border-[#ffffffa5] ">
        <div className="absolute top-[-6.5rem] left-[5.5rem] rounded-3xl z-10 bg-[#FEE9D1] w-[12rem] h-[13rem]">
          <Image
            width={500}
            height={500}
            className="w-full h-full object-cover"
            src="/images/Durriya.webp"
            alt="Durriya Image"
          />
        </div>
        <div className="z-50 absolute top-[-6rem] w-[12rem] md:w-[16rem] md:left-[35rem]">
          <Misha />
        </div>
        <div className="z-50 absolute left-[10rem] md:w-[16rem] md:top-[3rem] md:left-[28rem] top-[1rem] w-[12rem]">
          <Durriya />
        </div>
        <div className="absolute bottom-0 top-[10rem] px-5">
          <Info
            para={"Talk to a human. An expert. A Fruitful Guide."}
            dot1={"."}
            dot2={"."}
            dot3={"."}
            dot4={"."}
            list1={
              "Dedicated advice and support on all aspects of your finances from a Fruitful Guide."
            }
            list2={
              "1-to-1 video sessions focused on organizing your finances, building wealth, and making real progress."
            }
            list3={
              "Ongoing progress check-ins, quick syncs and anytime messaging."
            }
            list4={
              "A clear blueprint to hit your goals with simple steps that your Guide helps you implement."
            }
            button={"Tell me more"}
          />
        </div>
      </div>
      <div className=" h-max w-full relative z-20">
        <div className="sticky top-0 left-0 h-[100vh] rounded-2xl bg-[#ffff] border-2 border-[#ffffffa5] ">
          <div className="absolute top-[-6.5rem] left-[6.5rem] rounded-3xl z-10 bg-[#FEE9D1] w-[10rem]  ">
            <Image
              width={500}
              height={500}
              className="w-full h-full object-cover"
              src="/images/screen.svg"
              alt="Durriya Image"
            />
          </div>
          <div className="z-50 absolute top-[-2rem] w-[10rem]  left-[11rem] ">
            <Vacation />
          </div>
          <div className="z-50 absolute left-2 top-[1.5rem] w-[10rem]">
            <Home />
          </div>
          <div className="z-50 absolute left-1 top-[5.45rem] w-[10rem]">
            <Self />
          </div>

          <div className="absolute bottom-0 top-[18rem] px-5 ">
            <Info
              para={"Earn 5% on savings set up for your goals."}
              dot1={"."}
              dot2={"."}
              dot3={"."}
              list1={
                "5.00% APY savings account, more than 10x the national average*."
              }
              list2={"Dedicated savings spaces for all of your specific goals."}
              list3={"Automated transfers that power your progress."}
              button={"Tell me more"}
            ></Info>
          </div>
        </div>
        <div className="sticky top-0 left-0 h-[100vh] rounded-2xl bg-[#ffff] border-2 border-[#ffffffa5] ">
          <div className="absolute top-0 left-[5rem]  z-10 bg-[#FEE9D1] w-[13rem] ">
            <Image
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-3xl"
              src="/images/Invest.webp"
              alt="Durriya Image"
            />
          </div>
          <div className="z-50 absolute top-[2rem] w-[10rem]  left-0 ">
            <Perfo />
          </div>
          <div className="z-50 absolute left-0 top-[12.5rem] w-[10rem]">
            <Moderate />
          </div>
          <div className="z-50 absolute left-[13rem] top-[10.45rem] w-[10rem]">
            <Total />
          </div>

          <div className="absolute bottom-0 top-[22rem] px-5 ">
            <Info
              para={"A smarter way to start or scale your investing."}
              dot1={"."}
              dot2={"."}
              dot3={"."}
              dot4={"."}
              list1={
                "Portfolios built by experts, an investment approach tailored to you."
              }
              list2={"Advice from your Fruitful Guide at every step."}
              list3={"0% management fees."}
              list4={"No investment minimums - start with as little as $1."}
              button={"Tell me more"}
            ></Info>
          </div>
        </div>
      </div>

      <div  className="flex bg-transparent rounded-full " >
        {" "}
        <div>Guidance</div> <div>Save</div> <div>Invest</div>
      </div>
    </div>
  );
};

export default Guidance;
