"use client"
import { motion } from "framer-motion";
import { useMotion } from "@/context/Motioncontext";


import Image from "next/image";


const Banner = () => {

  const { motionVariants } = useMotion();
  return (
    <div className=" bg-theme md:px-14 px-8 py-5 flex justify-between items-center">
      <div className=" w-[50%] md:w-[60%]">
        <motion.h3 variants={motionVariants} initial="leftInitial" whileInView="animate" className=" text-xl md:text-2xl lg:text-3xl">
          I am happy to let you know that 100+ projects have been done
          sucessfully!
        </motion.h3>
        <a href="https://www.fiverr.com/salehadib007/" target="_blank">
        <motion.button
          type="button"
          variants={motionVariants} initial="upInitial" whileInView="animate"
          className="text-white border border-white hover:scale-125 duration-300 font-medium rounded-lg text-lg md:text-xl px-3 md:px-5 py-2 text-center mt-4 md:mt-8 me-2 mb-2 flex justify-center items-center gap-2 "
        >
          Hire me
        </motion.button>
        </a>
      </div>
      <motion.div variants={motionVariants} initial="rightInitial" whileInView="animate" className=" w-[50%] md:w-[40%]">
        <Image src="/hireme.png" height={500} width={500} alt="Working Guy Photo"/>
      </motion.div>
    </div>
  );
};

export default Banner;
