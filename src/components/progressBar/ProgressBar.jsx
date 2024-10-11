"use client"
import { motion } from "framer-motion";
import { useMotion } from "@/context/Motioncontext";


const ProgressBar = ({percentage, color}) => {
  const { motionVariants } = useMotion();
  return (
    <div>

        <motion.div variants={motionVariants} initial="leftInitial" whileInView="animate" className=" h-2 w-full bg-softBackground rounded-full">
            <motion.div initial={{width: 0}} whileInView={{width: `${percentage}%` , transition:{ duration: 1}}} style={{ backgroundColor: `${color}`}} className="relative h-full rounded-full">
                <div style={{backgroundColor: `${color}`}} className=" absolute right-0 h-4 w-4 rounded-full top-[50%] translate-y-[-50%]">
                </div>
                <div className=" absolute right-2 h-4 w-4 rounded-full top-[-120%] translate-y-[-120%]">
                    {percentage}%
                </div>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default ProgressBar