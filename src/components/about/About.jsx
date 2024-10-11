"use client"
import { motion, useInView } from "framer-motion";
import { useMotion } from "@/context/Motioncontext";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faLaptopCode
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useRef, useEffect } from "react";
import MenuContext from "@/context/Menucontext";








const About = () => {

  const { motionVariants } = useMotion();

  const { setActiveMenu} = useContext(MenuContext)

  const ref = useRef(null)

  const isInView = useInView(ref, {amount: 0.5})

  useEffect(() => {
    setActiveMenu("about")
  }, [isInView, setActiveMenu])
  




  return (
    <div ref={ref} id="about" className=" min-h-screen flex flex-col justify-start items-start py-10 md:px-14 px-8">
      <motion.h3 variants={motionVariants} initial="leftInitial" whileInView="animate" className=" text-xl md:text-2xl lg:text-3xl font-outfit font-bold">About me</motion.h3>
      <motion.h1 variants={motionVariants} initial="rightInitial" whileInView="animate" className=" py-4 text-2xl md:text-3xl lg:text-4xl font-outfit font-semibold">Who I am?</motion.h1>
      <motion.p variants={motionVariants} initial="leftInitial" whileInView="animate" className=" text-xs md:text-sm lg:text-base font-poppins leading-5 md:leading-7 tracking-wide capitalize">
        Currently I&apos;m a student at Bangabandhu Sheikh Mujibur Rahman Science And
        Technology University at the department of English. Beside that formal
        introduction I&apos;m a <span className=" border-[1px] border-l-0 border-r-0 border-white bg-softTheme">
         Full Stack Web Developer, ui/ux designer A Script Writer, An Stage
        Show Actor, A Debater, A Formar Scout, A Decent Story Writer, A Speaker
        </span> and so on. There are so many things I couldn&apos;t even count. I just try
        everything sometimes I do great things and sometimes I fail but it&apos;s my
        way of life.
      </motion.p>
      <div className=" flex flex-col md:flex-row justify-between items-center w-full pt-10 flex-wrap">
        <motion.div variants={motionVariants} initial="upInitial" whileInView="animate" className=" w-[265px] my-5 flex justify-center flex-col items-center border-[1px] border-white p-8 md:p-10 rounded-md gap-3 hover:text-purple-500 hover:border-purple-500 hover:scale-105 duration-300 purpleGlow font-bold mx-1">
          <FontAwesomeIcon className=" h-[25px] md:h-[40px]" icon={faLightbulb} />
          Figma Designer
        </motion.div>
        <motion.div variants={motionVariants} initial="upInitial" whileInView="animate" className="w-[265px] my-5 flex justify-center flex-col items-center border-[1px] border-white p-8 md:p-10 rounded-md gap-3 hover:text-[#21749b] hover:border-[#21749b] hover:scale-105 duration-300 blueGlow font-bold wordBox mx-1">
          <svg
            className=" h-[25px] md:h-[40px] fill-white wordpress"
            xmlns="http://www.w3.org/2000/svg"
            
            viewBox="0 0 512 512"
          >
            <path d="M256 8C119.3 8 8 119.2 8 256c0 136.7 111.3 248 248 248s248-111.3 248-248C504 119.2 392.7 8 256 8zM33 256c0-32.3 6.9-63 19.3-90.7l106.4 291.4C84.3 420.5 33 344.2 33 256zm223 223c-21.9 0-43-3.2-63-9.1l66.9-194.4 68.5 187.8c.5 1.1 1 2.1 1.6 3.1-23.1 8.1-48 12.6-74 12.6zm30.7-327.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-21.9 0-58.7-2.8-58.7-2.8-12-.7-13.4 17.7-1.4 18.4 0 0 11.4 1.4 23.4 2.1l34.7 95.2L200.6 393l-81.2-241.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-4.2 0-9.1-.1-14.4-.3C109.6 73 178.1 33 256 33c58 0 110.9 22.2 150.6 58.5-1-.1-1.9-.2-2.9-.2-21.9 0-37.4 19.1-37.4 39.6 0 18.4 10.6 33.9 21.9 52.3 8.5 14.8 18.4 33.9 18.4 61.5 0 19.1-7.3 41.2-17 72.1l-22.2 74.3-80.7-239.6zm81.4 297.2l68.1-196.9c12.7-31.8 17-57.2 17-79.9 0-8.2-.5-15.8-1.5-22.9 17.4 31.8 27.3 68.2 27.3 107 0 82.3-44.6 154.1-110.9 192.7z" />
          </svg>
          Wordpress Designer
        </motion.div>
        <motion.div variants={motionVariants} initial="upInitial" whileInView="animate" className="w-[265px] my-5 flex justify-center flex-col items-center border-[1px] border-white p-8 md:p-10 rounded-md gap-3 hover:text-softTheme hover:border-softTheme hover:scale-105 duration-300 greenGlow font-bold mx-1">
          <FontAwesomeIcon className="h-[25px] md:h-[40px]" icon={faLaptopCode} />
          Mern Web Developer
        </motion.div>
      </div>
    </div>
  );
};

export default About;
