"use client";
import { motion, useInView } from "framer-motion";
import { useMotion } from "@/context/Motioncontext";

import EduCard from "../eduCard.jsx/EduCard";
import MenuContext from "@/context/Menucontext";
import { useContext, useRef, useEffect } from "react";


const Education = () => {
  const { motionVariants } = useMotion();
  const { setActiveMenu} = useContext(MenuContext)

  const ref = useRef(null)

  const isInView = useInView(ref, {amount: 0.7})

  useEffect(() => {
    setActiveMenu("education")
  }, [isInView, setActiveMenu])


  return (
    <div ref={ref} id="education" className=" md:px-14 px-8 pb-10">
      <motion.h3
        variants={motionVariants}
        initial="leftInitial"
        whileInView="animate"
        className=" text-sm md:text-base lg:text-xl font-bold"
      >
        Education
      </motion.h3>
      <motion.h1
        variants={motionVariants}
        initial="rightInitial"
        whileInView="animate"
        className=" md:text-3xl text-2xl lg:text-4xl font-bold pt-4 pb-16"
      >
        My Overall Studies So Far
      </motion.h1>

      <div className=" relative">
        <div className=" left-[1.15rem] absolute w-1 h-full bg-softBackground z-[-1]"></div>

        <motion.div
          variants={motionVariants}
          initial="leftInitial"
          whileInView="animate"
        >
          <EduCard
            title="Bachelor of Arts in English"
            description="Currently studying at Bangabandhu Sheikh Mujibur Rahman Science And Technology University at the department of English as a first Year student."
            year="2024 - Running..."
            color="#2C98F0"
          />
        </motion.div>
        <motion.div
          variants={motionVariants}
          initial="rightInitial"
          whileInView="animate"
        >
          <EduCard
            title="Higher Secondary School"
            description="Completed my Higher Secondary School from Govt. Bangabandhu College as a student of science faculty. Got my SSC certification from there."
            year="2020-2022"
            color="#A84CB8"
          />
        </motion.div>

        <motion.div
          variants={motionVariants}
          initial="leftInitial"
          whileInView="animate"
        >
          <EduCard
            title="Secondary School"
            description="Completed my Secondary School from Swarnakali High School as a student of science faculty. Got my SSC certification from there."
            year="2018-2020"
            color="#EC5453"
          />
        </motion.div>

        <motion.div
          variants={motionVariants}
          initial="rightInitial"
          whileInView="animate"
        >
          <EduCard
            title="Junior School"
            description="It is the same as my scecondary school. Achieved my JSC certificate from there."
            year="2015-2018"
            color="#2FA499"
          />
        </motion.div>

        <motion.div
          variants={motionVariants}
          initial="leftInitial"
          whileInView="animate"
        >
          <EduCard
            title="Primary School"
            description="Completed my primary School from SM Model Primary School and got my PSC certification from there"
            year="2010-2015"
            color="#4054B2"
          />
        </motion.div>
      </div>
      <div className=" h-10 w-10 border-4 border-softBackground rounded-[50%]"></div>
    </div>
  );
};

export default Education;
