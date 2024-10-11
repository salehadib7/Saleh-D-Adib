"use client"
import { motion, useInView } from "framer-motion";
import { useMotion } from "@/context/Motioncontext";
import { useContext, useRef, useEffect } from "react";


import ServiceCard from "../serviceCard/ServiceCard";
import { allServices } from "./allService";
import MenuContext from "@/context/Menucontext";


const Services = () => {
  const { motionVariants } = useMotion();
  const { setActiveMenu} = useContext(MenuContext)

  const ref = useRef(null)

  const isInView = useInView(ref, {amount: 0.3})

  useEffect(() => {
    setActiveMenu("services")
  }, [isInView])
  


  return (
    <div ref={ref} id="services" className=" min-h-screen md:px-14 px-8 py-16">
      <motion.h3 variants={motionVariants} initial="leftInitial" whileInView="animate" className=" font-bold text-xl md:text-2xl lg:text-3xl">What I do</motion.h3>
      <motion.h1 variants={motionVariants} initial="rightInitial" whileInView="animate" className=" text-xs md:text-base lg:text-xl pt-5 pb-10">
        I design and develop services for customers of all sizes, specializing
        in creating stylish, modern websites, web services and online stores
      </motion.h1>
      <div className=" flex flex-col md:flex-row justify-center md:justify-between items-center flex-wrap">
        {
          allServices.map((service)=>{
            return (
              <motion.div key={service.title} variants={motionVariants} initial="leftInitial" whileInView="animate">
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
