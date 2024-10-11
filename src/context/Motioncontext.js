"use client"

import { createContext, useContext } from "react";

const MotionContext = createContext();

const motionVariants = {

    leftInitial:{
        opacity: 0,
        x: -200
    },

    rightInitial:{
        opacity: 0,
        x: 200
    },

    upInitial:{
        opacity: 0,
        y: -200
    },

    animate:{
        opacity: 1,
        y: 0,
        x:0,
        transition: {
            duration : 0.5,
            ease: "easeInOut",
            staggerChildren: 0.3
        }
    }
};

export const MotionProvider = ({ children }) => {
  return (
    <MotionContext.Provider value={{ motionVariants }}>
      {children}
    </MotionContext.Provider>
  );
};

export const useMotion = () => useContext(MotionContext);