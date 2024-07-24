"use client";
import React from "react";
import Guideinfo from "./guideinfo";

const Guider1 = () => {
  return (
    <div
      className="w-screen lg:w-[50rem] px-12  "
     
    >
      <Guideinfo
        vid={
          "https://d1pwidzl9kib4u.cloudfront.net/marketing/20240305/4x3_Low_Quality_Low_Captions/20240304_Fruitful_Guide_4x3_Andrea_sm_locap.mp4"
        }
        name={"Andrew Rotz"}
        profession={"CFP® Professional"}
        description={
          "Andrew has worked in financial services since 2012. He loves seeing the relief that comes when he helps his Members alleviate a major stressor in their financial lives. He's worked at Fidelity Investments, built a bespoke financial wellness program at NC State University, and his own firm while also serving in the US Navy. He loves exploring the Star Wars world with his two boys, traveling around the real world, and history!"
        }
        style={"Andrew's style"}
        button1={"💬 Conversational"}
        button2={"🙌 Dedicated"}
        button3={"🧮 Analytical"}
      ></Guideinfo>
    </div>
  );
};

export default Guider1;
