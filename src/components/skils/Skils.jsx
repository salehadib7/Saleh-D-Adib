"use client";

import { useMotion } from "@/context/Motioncontext";
import ProgressBar from "../progressBar/ProgressBar";
import { motion, useInView } from "framer-motion";
import { useContext, useRef, useEffect } from "react";
import MenuContext from "@/context/MenuContext";

const Skils = () => {
  const { motionVariants } = useMotion();
  const { setActiveMenu } = useContext(MenuContext);

  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 1 });

  useEffect(() => {
    setActiveMenu("skils");
  }, [isInView]);

  return (
    <div

      id="skils"
      className=" min-h-screen md:px-14 px-8 flex justify-center items-center"
    >
      <div ref={ref}>
        <motion.h3
          variants={motionVariants}
          initial="leftInitial"
          whileInView="animate"
          className=" md:text-lg text-base lg:text-xl font-bold"
        >
          My Speciality
        </motion.h3>
        <motion.h1
          variants={motionVariants}
          initial="rightInitial"
          whileInView="animate"
          className=" md:text-3xl text-2xl lg:text-4xl font-bold pt-4 md:pb-10 pb-5 lg:pb-16"
        >
          My Skils
        </motion.h1>
        <motion.p
          variants={motionVariants}
          initial="leftInitial"
          whileInView="animate"
          className=" text-xs md:text-sm text-gray-400 w-[90%]"
        >
          A highly skilled MERN stack web developer with expertise in WordPress
          and Figma UI/UX design. Proficient in building dynamic web
          applications, creating custom WordPress website, and crafting
          user-centric designs with a strong focus on intuitive UI/UX
        </motion.p>
        <div className=" flex flex-col md:flex-row md:justify-between items-start md:items-center gap-5 md:gap-0 pt-7 md:pt-10">
          <div className=" w-full flex flex-col justify-center flex-1 gap-5 text-sm md:text-base">
            <div className=" w-[95%]">
              Html and Css
              <ProgressBar percentage={95} color="#2C98F0" />
            </div>
            <div className=" w-[95%]">
              Vanila Javascript
              <ProgressBar percentage={90} color="#F9BF3F" />
            </div>
            <div className=" w-[95%]">
              React and Next js
              <ProgressBar percentage={80} color="#EC5453" />
            </div>
          </div>
          <div className=" w-full flex flex-col justify-center items-start flex-1 gap-5">
            <div className=" w-[95%]">
              Express and Node js
              <ProgressBar percentage={95} color="#A84CB8" />
            </div>
            <div className=" w-[95%]">
              Wordpress
              <ProgressBar percentage={80} color="#2FA499" />
            </div>
            <div className=" w-[95%]">
              Figma and Canva
              <ProgressBar percentage={90} color="#4054B2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skils;