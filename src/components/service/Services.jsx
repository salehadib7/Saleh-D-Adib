"use client"
import { motion, useInView } from "framer-motion";

import { useContext, useRef, useEffect } from "react";


import ServiceCard from "../serviceCard/ServiceCard";
import { allServices } from "./allService";
import MenuContext from "@/context/Menucontext";
import { fadeIn } from "@/motion/motions";


const Services = () => {

  const { setActiveMenu} = useContext(MenuContext)

  const ref = useRef(null)

  const isInView = useInView(ref, {amount: 0.2})

  useEffect(() => {
    setActiveMenu("services")
  }, [isInView, setActiveMenu])
  


  return (
    <div ref={ref} id="services" className=" h-auto pt-10 lg:min-h-screen md:px-14 px-8 py-16">
      <motion.h3 variants={fadeIn("left", "tween", 0.1, 0.5)} initial="hidden" whileInView="show" className=" font-bold text-xl md:text-2xl lg:text-3xl">What I do</motion.h3>
      <motion.h1 variants={fadeIn("right", "tween", 0.3, 0.5)} initial="hidden" whileInView="show" className=" text-xs md:text-base lg:text-xl pt-5 pb-10">
        I design and develop services for customers of all sizes, specializing
        in creating stylish, modern websites, web services and online stores
      </motion.h1>
      <div className=" flex flex-col md:flex-row justify-center md:justify-between items-center flex-wrap">
        {
          allServices.map((service)=>{
            return (
              <motion.div key={service.title} variants={fadeIn("left", "tween", 0.3, 0.5)} initial="hidden" whileInView="show">
            <ServiceCard title={service.title} description={service.description} svg={service.svg} background={service.background} />
            </motion.div>
            )
          })
          
          }
        </div>
    </div>
  );
};

export default Services;
