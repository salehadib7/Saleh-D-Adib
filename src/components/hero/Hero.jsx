"use client"
import { motion, useInView } from "framer-motion";
import { useContext, useRef, useEffect } from "react";
import MenuContext from "@/context/Menucontext";


import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { fadeIn } from "@/motion/motions";





const Hero = () => {


  const { setActiveMenu} = useContext(MenuContext)

  const ref = useRef(null)

  const isInView = useInView(ref, {amount: 1})

  useEffect(() => {
    setActiveMenu("home")
  }, [isInView, setActiveMenu])


  return (
    <div ref={ref} id="home" className=" h-auto py-24 lg:min-h-screen flex flex-col-reverse md:flex-row justify-center items-center md:px-14 px-8">

      <div className=" w-full md:w-[60%]">
        <motion.h1 variants={fadeIn("right", "tween", 0.5, 0.5)} initial="hidden" whileInView="show" className="text-4xl z-10 md:text-5xl lg:text-6xl font-outfit">Hi I&apos;m <br/> <span className=" text-softTheme font-bold">Saleh D. Adib</span></motion.h1>
        <motion.p variants={fadeIn("right", "tween", 0.7, 0.5)} initial="hidden" whileInView="show" className=" py-4 text-sm md:text-base capitalize font-poppins">I&apos;m a professional figma designer, wordpress expert and a mern stack web Developer</motion.p>
        <motion.a variants={fadeIn("right", "tween", 0.9, 0.5)} initial="hidden" whileInView="show" href="https://drive.google.com/file/d/1GN4BtNp6DpwX_lMA8sN4Tr-1wnimkKUv/view?usp=sharing" target="_blank">
        <motion.button variants={fadeIn("right", "tween", 0.9, 0.5)} initial="hidden" whileInView="show" type="button" className=" text-softTheme hover:text-white border border-theme hover:bg-theme font-medium rounded-lg text-lg md:text-xl px-3 lg:px-5 py-2.5 text-center me-2 mb-2 flex justify-center items-center gap-2 ">Download Resume<FontAwesomeIcon icon={faDownload} height={25}/></motion.button>
        </motion.a>
        
      </div>

      <motion.div variants={fadeIn("left", "tween", 0.5, 0.5)} initial="hidden" whileInView="show" className= "w-[60%] md:w-[40%]">
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