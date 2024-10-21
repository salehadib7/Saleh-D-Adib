"use client"
import { motion, useInView } from "framer-motion";
import { useMotion } from "@/context/Motioncontext";
import { useRef, useEffect, useContext } from "react";
import MenuContext from "@/context/Menucontext";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { motionVariants } = useMotion();
  const ref = useRef()

  const { setActiveMenu} = useContext(MenuContext)

  const ifInView = useInView(ref, {amount: 0.2})

  useEffect(() => {
    setActiveMenu("contact")
  }, [ifInView, setActiveMenu])





  return (
    <div ref={ref} className=" px-5 h-auto w-full bg-gray-900">
      <motion.div variants={motionVariants} initial="leftInitial" whileInView="animate" className=" flex justify-center items-center gap-4 pt-10">
        <div className=" h-8 w-8 rounded-[50%] flex justify-center items-center bg-white text-background">
          <a href="https://www.facebook.com/God.D.Adib" target="_blank">
          <FontAwesomeIcon className="" icon={faFacebook} />
          </a>
        </div>

        <div className=" h-8 w-8 rounded-[50%] flex justify-center items-center bg-white text-background">
          <a href="https://x.com/SalehDAdib007" target="_blank">
          <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
        <div className=" h-8 w-8 rounded-[50%] flex justify-center items-center bg-white text-background">
          <a href="https://www.instagram.com/salehadib007/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className=" h-8 w-8 rounded-[50%] flex justify-center items-center bg-white text-background">
          <a href="https://www.linkedin.com/in/saleh-adib-hasnat-43a1792b9/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className=" h-8 w-8 rounded-[50%] flex justify-center items-center bg-white text-background">
          <a href="https://www.fiverr.com/salehadib007/" target="_blank">
          <svg
            width={18}
            fill="#021526"
            viewBox="-2.5 -2 24 24"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin"
            className="jam jam-fiverr"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z"></path>
              <circle cx="14.375" cy="1.875" r="1.875"></circle>
            </g>
          </svg>
          </a>
        </div>
      </motion.div>

      <motion.div variants={motionVariants} initial="rightInitial" whileInView="animate" className="text-center pt-5 pb-10 text-sm font-medium">
        © Copyright ©2024 All rights reserved ||{" "}
        <a href="https://www.facebook.com/God.D.Adib" target="_blank">
          <span className=" font-bold text-softTheme">Saleh D. Adib</span>
        </a>
      </motion.div>
    </div>
  );
};

export default Footer;
