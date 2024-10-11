"use client"

import { useState, useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faAddressCard,
  faLaptopFile,
  faScrewdriverWrench,
  faGraduationCap,
  faMap,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import Toggle from "./togglebutton/Toggle";
import MenuContext from "@/context/MenuContext";

const Floatbar = () => {

  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const {activeMenu} = useContext(MenuContext)

  return (
   

      <motion.div variants={variants} animate={open ? "open" : "closed"} className=" lg:hidden flex justify-center items-center sidebarBg">
        
        
        <div className=" flex flex-col items-center">

        <Toggle setOpen={setOpen}/>
        
        <div className=" pb-5">
          <div className=" capitalize flex flex-col items-center gap-1">
            <a href="https://www.facebook.com/God.D.Adib" target="_blank">
            <Image
              src="/SalehDadib.png"
              height={500}
              width={500}
              alt="Saleh Adib"
              className=" h-20 w-20 rounded-[50%]"
            />
            </a>
            <h1 className=" font-outfit text-center font-semibold text-2xl tracking-wide pt-2">
              Saleh D. Adib
            </h1>
            <p className="text-center">
              <span className=" text-softTheme font-bold">ui/ux</span> designer
              and <span className=" text-softTheme font-bold">web</span>{" "}
              Developer
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
        <a
            href="#home"
            className=" flex justify-start items-center gap-4 transition"
            style={{ color : activeMenu === "home" ? "#008170" : "white"}}
          >
            <FontAwesomeIcon icon={faHouse} className="h-6" />
            <h3 className="text-md font-semibold">Home</h3>
          </a>

          <a
            href="#about"
            className="flex justify-start items-center gap-4 transition"
            style={{ color : activeMenu === "about" ? "#008170" : "white"}}
          >
            <FontAwesomeIcon icon={faAddressCard} className="h-6" />
            <h3 className="text-md font-semibold">About</h3>
          </a>

          <a
            href="#services"
            className="flex justify-start items-center gap-4 transition"
            style={{ color : activeMenu === "services" ? "#008170" : "white"}}
          >
            <FontAwesomeIcon icon={faLaptopFile} className="h-6" />
            <h3 className="text-md font-semibold">Services</h3>
          </a>

          <a
            href="#skils"
            className="flex justify-start items-center gap-4 transition"
            style={{ color : activeMenu === "skils" ? "#008170" : "white"}}
          >
            <FontAwesomeIcon icon={faScrewdriverWrench} className="h-6" />
            <h3 className="text-md font-semibold">Skils</h3>
          </a>

          <a
            href="#education"
            className="flex justify-start items-center gap-4 transition"
            style={{ color : activeMenu === "education" ? "#008170" : "white"}}
          >
            <FontAwesomeIcon icon={faGraduationCap} className="h-6" />
            <h3 className="text-md font-semibold">Education</h3>
          </a>

          <a
            href="#portfolio"
            className="flex justify-start items-center gap-4 transition"
            style={{ color : activeMenu === "portfolio" ? "#008170" : "white"}}
          >
            <FontAwesomeIcon icon={faMap} className="h-6" />
            <h3 className="text-md font-semibold">Portfolio</h3>
          </a>

          <a
            href="#contact"
            className="flex justify-start items-center gap-4 transition"
            style={{ color : activeMenu === "contact" ? "#008170" : "white"}}
          >
            <FontAwesomeIcon icon={faPhoneVolume} className="h-6" />
            <h3 className="text-md font-semibold">Contact</h3>
          </a>
        </div>
        </div>
      </motion.div>

  );
};

export default Floatbar;