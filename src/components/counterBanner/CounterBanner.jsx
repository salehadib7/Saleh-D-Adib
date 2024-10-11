"use client"
import CountUp from "react-countup"
import { motion, useInView } from "framer-motion";
import { useMotion } from "@/context/Motioncontext";
import { useRef } from "react";


const CounterBanner = () => {

  const counterRef = useRef(null);
  const inView = useInView(counterRef, { once: false })


  const { motionVariants } = useMotion();
  return (
    <div className=" h-screen counterBg">
      <div className="overlay flex flex-col ">
        <div className=" flex-1 bg-background"></div>
        <div className="flex flex-1 justify-center items-center bg-transparent">
          <div ref={counterRef} className=" h-auto w-full flex justify-between items-center md:px-14 px-8 gap-3 flex-wrap">
            <motion.div variants={motionVariants} initial="rightInitial" whileInView="animate" className=" flex flex-col justify-center items-center">
             {inView && <CountUp end={150} duration={3} className="text-xl md:text-3xl lg:text-5xl font-bold pb-2">+</CountUp>}
              <h3 className=" text-sm md:text-base lg:text-lg">Cups of coffee</h3>
            </motion.div>
            <motion.div variants={motionVariants} initial="upInitial" whileInView="animate" className=" flex flex-col justify-center items-center">
              {inView && <CountUp end={200} duration={3} className="text-xl md:text-3xl lg:text-5xl font-bold pb-2">+</CountUp>}
              <h3 className=" text-sm md:text-base lg:text-lg">Projects</h3>
            </motion.div>
            <motion.div variants={motionVariants} initial="leftInitial" whileInView="animate" className=" flex flex-col justify-center items-center">
              {inView && <CountUp end={2} duration={3} className="text-xl md:text-3xl lg:text-5xl font-bold pb-2">2</CountUp>}
              <h3 className=" text-sm md:text-base lg:text-lg">Partners</h3>
            </motion.div>
          </div>
          
        </div>
        <div className="flex-1 bg-background"></div>
      </div>
    </div>
  );
};

export default CounterBanner;
