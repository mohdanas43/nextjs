import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="md:z-0 md:h-[110vh] md:sticky md:bottom-0 md:left-0 md:pt-32 lg:pt-0  ">
      <div className="flex flex-col w-full md:flex-row md:justify-between gap-5 py-[4em] lg:px-[5.75rem] px-[1.75rem] text-[14px] lg:items-center lg:py-32 ">
        <div className="flex flex-col md:flex-row gap-10 ">
          <div className="flex gap-10 lg:gap-10 ">
            {" "}
            <div className="flex flex-col gap-2 ">
              <div className="font-medium">Explore Fruitful</div>
              <div className="text-[#C2C2C2] ">Login</div>
              <div className="text-[#C2C2C2] ">Pricing</div>
              <div className="text-[#C2C2C2] ">Legal</div>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="font-medium">Social</div>
              <div className="text-[#C2C2C2] ">Instagram</div>
              <div className="text-[#C2C2C2] ">LinkedIn</div>
              <div className="text-[#C2C2C2] ">TikTok</div>
            </div>
          </div>
          <div className="flex gap-20 lg:gap-10  ">
            {" "}
            <div className="flex flex-col gap-2 ">
              {" "}
              <div className="font-medium">Careers</div>{" "}
              <div className="text-[#C2C2C2] ">Email</div>{" "}
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="font-medium">Support</div>
              <div className="text-[#C2C2C2] w-[10rem] ">
                Contact Hospitality Desk
              </div>
            </div>
          </div>
        </div>
        <div className="w-[192px] lg:w-[350px] md:w-[20rem] h-[300px] ">
          <Image
            width={500}
            height={500}
            className="w-full h-full object-cover"
            src="/images/logofoot.svg"
          />
        </div>
      </div>
      <div className="flex flex-col text-[#ADADAD] text-[12px] py-[5rem] px-[1.25rem] gap-5  lg:px-[20rem] lg:font-medium  lg:text-[#828282] ">
        <div>
          © Fruitful 2024 — All rights reserved. “Fruitful” refers to Fruitful,
          Inc. and its separate, affiliated subsidiaries. Fruitful, Inc. is an
          investment adviser registered with the U.S. Securities & Exchange
          Commission, offering investment advisory products and services
          exclusively to Members with an active Subscription. Learn more about
          Fruitful in our Form CRS{" "}
        </div>
        <div>
          This information is provided by Fruitful for educational and
          illustrative purposes only and is not considered an offer,
          solicitation of an offer, advice, or recommendation to buy, sell, or
          hold any security. All investing involves risk, including the risk of
          losing the money you invest, and past performance does not guarantee
          future performance. Rebalancing cannot assure a profit or protect
          against loss in a declining market. Fruitful relies on information
          from various sources believed to be reliable, including information
          from its Members, Clients, and other third parties, but cannot
          guarantee the accuracy or completeness of that information.
        </div>
        <div>
          Fruitful is a financial technology company, not a bank. Deposit
          accounts provided by Emigrant Bank, Member FDIC. Funds in the bank
          accounts are insured for up to $250,000 per depositor, depending on
          the ownership category. Interest rates are variable and subject to
          change at any time. These rates are current as of February 16, 2024.
        </div>
        <div>
          ¹ The people in these videos are real Fruitful Members who were paid
          in cash for their time and participation in this series. We think that
          is fair. Each testimonial reflects the individual Member's experience
          as an advisory Client and is not intended to represent any other
          Member's or Client's experience. We believe in the integrity of this
          approach and that, outside the conflict of interest present due to
          compensation, no other conflicts apply to these testimonials. These
          Client testimonials were given in October 2023, represent the opinions
          of each Member at that time, and may have been edited for brevity and
          clarity.
        </div>
        <div>
          ² Cost of traditional advisory firms sourced from The Kitces Report,
          Volume 2, 2022, Figure 61. Distribution Of Typical Annual Retainer Fee
        </div>
        <div>
          ² Cost of traditional advisory firms sourced from The Kitces Report,
          Volume 2, 2022, Figure 61. Distribution Of Typical Annual Retainer Fee
        </div>
        <div>
          Fruitful is not affiliated with, sponsored, or endorsed by the
          companies listed, described, or featured on its site. Company logos or
          trademarks used do not imply endorsement and are the property of their
          respective owners.
        </div>
      </div>
    </div>
  );
};

export default Footer;
