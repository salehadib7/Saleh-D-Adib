"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  

  return (
    <motion.div
      className=" hidden lg:block cursor"
      animate={{ x: position.x+2, y: position.y+2 }}
    ></motion.div>
  );
};

export default Cursor;