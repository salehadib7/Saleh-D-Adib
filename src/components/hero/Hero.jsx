"use client"
import { motion, useInView } from "framer-motion";
import { useMotion } from "@/context/Motioncontext";
import { useContext, useRef, useEffect } from "react";
import MenuContext from "@/context/Menucontext";


import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"





const Hero = () => {

  const { motionVariants } = useMotion();

  const { setActiveMenu} = useContext(MenuContext)

  const ref = useRef(null)

  const isInView = useInView(ref, {amount: 1})

  useEffect(() => {
    setActiveMenu("home")
  }, [isInView, setActiveMenu])


  return (
    <div ref={ref} id="home" className=" min-h-screen flex flex-col-reverse md:flex-row justify-center items-center md:px-14 px-8">

      <div className=" w-full md:w-[60%]">
        <motion.h1 variants={motionVariants} initial="leftInitial" whileInView="animate" className="text-4xl z-10 md:text-5xl lg:text-6xl font-outfit">Hi I&apos;m <br/> <span className=" text-softTheme font-bold">Saleh D. Adib</span></motion.h1>
        <motion.p variants={motionVariants} initial="leftInitial" whileInView="animate" className=" py-4 text-sm md:text-base capitalize font-poppins">I&apos;m a professional figma designer, wordpress expert and a mern stack web Developer</motion.p>
        <a href="https://drive.google.com/file/d/1GN4BtNp6DpwX_lMA8sN4Tr-1wnimkKUv/view?usp=sharing" target="_blank">
        <motion.button variants={motionVariants} initial="leftInitial" whileInView="animate" type="button" className=" text-softTheme duration-300 hover:text-white border border-theme hover:bg-theme font-medium rounded-lg text-lg md:text-xl px-3 lg:px-5 py-2.5 text-center me-2 mb-2 flex justify-center items-center gap-2 ">Download Resume<FontAwesomeIcon icon={faDownload} height={25}/></motion.button>
        </a>
        
      </div>

      <motion.div variants={motionVariants} initial="rightInitial" whileInView="animate" className= "w-[60%] md:w-[40%]">
        <Image 
          src="/Hero.png"
          height={700}
          width={700}
          alt="Saleh D. Adib"
          priority
        />
      </motion.div>



    </div>
  )
}

export default Hero