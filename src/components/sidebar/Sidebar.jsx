"use client";
import { useContext } from "react";
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
import MenuContext from "@/context/Menucontext";
import { fadeIn} from "@/motion/motions";

const Sidebar = () => {

  const { activeMenu } = useContext(MenuContext);

  return (
    <motion.div
      variants={fadeIn("right", "tween", 0, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" hidden lg:flex justify-center items-center w-[25%] sticky top-0 bg-softBackground h-screen border-r-4 border-softTheme"
    >
      <div className=" flex flex-col items-center">
        <div className=" pb-5">
          <div className=" capitalize flex flex-col items-center gap-1">
            <motion.a
              variants={fadeIn("right", "tween", 0.1, 0.5)}
              href="https://www.facebook.com/God.D.Adib"
              target="_blank"
            >
              <Image
                src="/SalehDadib.png"
                height={500}
                width={500}
                alt="Saleh Adib"
                className=" h-20 w-20 rounded-[50%]"
              />
            </motion.a>
            <motion.h1
              variants={fadeIn("right", "tween", 0.15, 0.5)}
              className=" font-outfit text-center font-semibold text-2xl tracking-wide pt-2"
            >
              Saleh D. Adib
            </motion.h1>
            <motion.p
              variants={fadeIn("right", "tween", 0.2, 0.5)}
              className="text-center"
            >
              <span className=" text-softTheme font-bold">ui/ux</span> designer
              and <span className=" text-softTheme font-bold">web</span>{" "}
              Developer
            </motion.p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5">
          <a
            href="#home"
            className=" flex justify-start items-center gap-4 transition"
            style={{ color: activeMenu === "home" ? "#008170" : "white" }}
          >
            <motion.div variants={fadeIn("right", "tween", 0.21, 0.5)}>
              <FontAwesomeIcon icon={faHouse} className="h-6" />
            </motion.div>
            <motion.h3
              variants={fadeIn("right", "tween", 0.21, 0.5)}
              className="text-md font-semibold"
            >
              Home
            </motion.h3>
          </a>

          <a
            href="#about"
            className="flex justify-start items-center gap-4 transition"
            style={{ color: activeMenu === "about" ? "#008170" : "white" }}
          >
            <motion.div variants={fadeIn("right", "tween", 0.23, 0.5)}>
              <FontAwesomeIcon icon={faAddressCard} className="h-6" />
            </motion.div>
            <motion.h3
              variants={fadeIn("right", "tween", 0.23, 0.5)}
              className="text-md font-semibold"
            >
              About
            </motion.h3>
          </a>

          <a
            href="#services"
            className="flex justify-start items-center gap-4 transition"
            style={{ color: activeMenu === "services" ? "#008170" : "white" }}
          >
            <motion.div variants={fadeIn("right", "tween", 0.25, 0.5)}>
              <FontAwesomeIcon icon={faLaptopFile} className="h-6" />
            </motion.div>
            <motion.h3
              variants={fadeIn("right", "tween", 0.25, 0.5)}
              className="text-md font-semibold"
            >
              Services
            </motion.h3>
          </a>

          <a
            href="#skils"
            className="flex justify-start items-center gap-4 transition"
            style={{ color: activeMenu === "skils" ? "#008170" : "white" }}
          >
            <motion.div variants={fadeIn("right", "tween", 0.27, 0.5)}>
              <FontAwesomeIcon icon={faScrewdriverWrench} className="h-6" />
            </motion.div>
            <motion.h3
              variants={fadeIn("right", "tween", 0.27, 0.5)}
              className="text-md font-semibold"
            >
              Skils
            </motion.h3>
          </a>

          <a
            href="#education"
            className="flex justify-start items-center gap-4 transition"
            style={{ color: activeMenu === "education" ? "#008170" : "white" }}
          >
            <motion.div variants={fadeIn("right", "tween", 0.29, 0.5)}>
              <FontAwesomeIcon icon={faGraduationCap} className="h-6" />
            </motion.div>
            <motion.h3
              variants={fadeIn("right", "tween", 0.29, 0.5)}
              className="text-md font-semibold"
            >
              Education
            </motion.h3>
          </a>

          <a
            href="#portfolio"
            className="flex justify-start items-center gap-4 transition"
            style={{ color: activeMenu === "portfolio" ? "#008170" : "white" }}
          >
            <motion.div variants={fadeIn("right", "tween", 0.31, 0.5)}>
              <FontAwesomeIcon icon={faMap} className="h-6" />
            </motion.div>
            <motion.h3
              variants={fadeIn("right", "tween", 0.31, 0.5)}
              className="text-md font-semibold"
            >
              Portfolio
            </motion.h3>
          </a>

          <a
            href="#contact"
            className="flex justify-start items-center gap-4 transition"
            style={{ color: activeMenu === "contact" ? "#008170" : "white" }}
          >
            <motion.div variants={fadeIn("right", "tween", 0.33, 0.5)}>
              <FontAwesomeIcon icon={faPhoneVolume} className="h-6" />
            </motion.div>
            <motion.h3
              variants={fadeIn("right", "tween", 0.33, 0.5)}
              className="text-md font-semibold"
            >
              Contact
            </motion.h3>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
