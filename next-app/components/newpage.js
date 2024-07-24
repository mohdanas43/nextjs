"use client";
import { useEffect, useState } from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
const Newpage = () => {
  const [isTrans, setTrans] = useState(1);
  const { scrollYProgress } = useScroll();

  const at = useTransform(scrollYProgress, [0, 0.2], ["1", "0.95"]);
  const radius = useTransform(scrollYProgress, [0, 0.2], ["0px", "1000px"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrans((prev) => (prev % 10) + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen lg:hidden block ">
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
            className=" z-10  h-[88vh] md:h-[95vh] object-cover w-full "
            loop
            muted
            autoPlay
            src="https://d1pwidzl9kib4u.cloudfront.net/marketing/20240423/20240423_Fruitful_Web_Hero_Mobile.mp4"
          ></video>
        </div>
        <div className="absolute top-[23rem] md:top-[46rem] md:items-start md:p-8 text-[2.25rem] leading-[40px] md:leading-[70px]  font-medium text-white z-[100] flex flex-col items-center justify-center w-full  ">
          <div className="w-[88%] md:text-[5rem] md:w-[60%] ">
            {" "}
            Finances figured out for you{" "}
          </div>
          <div className="pt-3 w-[85%] md:text-[1.75rem] ">
            {isTrans === 1 && (
              <motion.div
                initial={{ translateY: 20, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-white text-[16px] lg:text-[62px] leading-7 lg:leading-[3.25rem]  text-center font-medium uppercase flex gap-1  "
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
                className="text-white text-[16px] lg:text-[62px] lg:leading-[3.5rem] lead25ng-7  text-center font-medium uppercase flex gap-1"
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
                className="text-white text-[16px] lg:text-[62px] lg:leading-[3.5rem] lead25ng-7  text-center font-medium uppercase flex  gap-1 "
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
                className="text-white text-[16px] lg:text-[62px] lg:leading-[3.5rem] lead25ng-7  text-center font-medium uppercase flex  gap-1 "
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
                className="text-white text-[16px] lg:text-[62px] lg:leading-[3.5rem] lead25ng-7  text-center font-medium uppercase flex gap-1 "
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
                className="text-white text-[16px] lg:text-[62px] lg:leading-[3.5rem] lead25ng-7  text-center font-medium uppercase flex  gap-1 "
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
                className="text-white text-[16px] lg:text-[62px] lg:leading-[3.5rem] lead25ng-7  text-center font-medium uppercase flex  gap-1 "
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
                className="text-white text-[16px] lg:text-[62px] lg:leading-[3.5rem] lead25ng-7  text-center font-medium uppercase flex  gap-1 "
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
                className="text-white text-[16px] lg:text-[62px] lg:leading-[3.5rem] lead25ng-7  text-center font-medium uppercase flex  gap-1 "
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
                className="text-white text-[16px] lg:text-[62px] lg:leading-[3.5rem] lead25ng-7  text-center font-medium uppercase flex  gap-1 "
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

          <div className="bg-white flex min-w-[21rem] max-w-[21rem] md:min-w-[14rem] md:max-w-[] w-full justify-center items-center text-center text-black mt-3  border-solid rounded-[1rem] text-[16px]  h-[3.25rem]  ">
            Get Started
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

export default Newpage;
