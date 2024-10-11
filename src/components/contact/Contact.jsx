"use client";

import { useMotion } from "@/context/Motioncontext";

import Image from "next/image";
import { toast } from "react-toastify";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useContext } from "react";
import emailjs from "emailjs-com";
import MenuContext from "@/context/Menucontext";

const Contact = () => {
  const ref = useRef();

  const isInView = useInView(ref, { 
    margin: "-100px" });

  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });



  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "The name is required";
    if (!formData.email) newErrors.email = "The email address required";
    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)){
      formData.email = "";
      newErrors.email = "Enter a valid email";
    }
    if (!formData.message) newErrors.message = "The message is required";

    setErrors(newErrors);


    return Object.keys(newErrors).length === 0;
  };
  



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });  
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (validate()) {
      



    formRef.current.reset();
    setFormData({name: "", email: "", message: ""})

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    try {
      const email = await emailjs.send(serviceID, templateID, formData, userID);
      if (email.status === 200) {
        toast.success("Email sent successfully!");
      } else {
        toast.error("There is an error sending your message!!");
      }
    } catch (error) {
      toast.error("There is an error sending your message!!");
    }

  }

  };

  const { motionVariants } = useMotion();
  const { setActiveMenu} = useContext(MenuContext)


  const ifInView = useInView(ref, {amount: 0.7})

  useEffect(() => {
    setActiveMenu("contact")
  }, [ifInView, setActiveMenu])




  return (
    <div
      id="contact"
      className=" md:px-14 px-8 pt-10 min-h-screen flex justify-center items-center"
      ref={ref}
    >
      <div>
        <motion.h1 variants={motionVariants} initial="upInitial" whileInView="animate" className=" text-center pb-14 text-2xl md:text-3xl lg:text-4xl font-bold">
          Contact Me
        </motion.h1>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start ">
          <div className=" flex-1">
            <motion.h1 variants={motionVariants} initial="leftInitial" whileInView="animate" className="text-3xl lg:text-4xl font-bold pb-10">
              Let&apos;s discuss your project
            </motion.h1>
            <div className=" flex flex-col justify-center items-start gap-10">
              <motion.div variants={motionVariants} initial="leftInitial" whileInView="animate" className="flex justify-start items-center gap-2">
                <Image
                  src="/phone.png"
                  width={500}
                  height={500}
                  alt="Phone"
                  className="icon"
                />
                +880 1317 136 420
              </motion.div>
              <motion.div variants={motionVariants} initial="leftInitial" whileInView="animate" className="flex justify-start items-center gap-2">
                <Image
                  className="icon"
                  src="/email.png"
                  width={500}
                  height={500}
                  alt="email"
                />
                salehadib007@gmail.com
              </motion.div>
              <motion.div variants={motionVariants} initial="leftInitial" whileInView="animate" className="flex justify-start items-center gap-2">
                <Image
                  className="icon"
                  src="/address.png"
                  width={500}
                  height={500}
                  alt="address"
                />
                245 Ansar Math, Gopalganj, Bangladesh
              </motion.div>
            </div>
          </div>
          <div className="relative flex-1">
            <motion.p variants={motionVariants} initial="rightInitial" whileInView="animate" className=" pb-5">
              <b className="text-2xl font-medium">What&apos;s your story?</b> Get in
              touch. Always available for freelancing if the right project comes
              along
            </motion.p>

            <motion.div
              className="phoneSvg flex justify-center w-full"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <svg width="350px" height="350px" viewBox="0 0 32.666 32.666">
                <motion.path
                  strokeWidth={0.2}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView && { pathLength: 1 }}
                  transition={{ duration: 3 }}
                  viewport={{once: false}}
                  d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
            C32.666,7.326,25.339,0,16.333,0z"
                />
              </svg>
            </motion.div>

            <motion.form
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{ delay: 4, duration: 1 }}
              className=" flex flex-col justify-center items-start gap-4"
              onChange={handleChange}
              ref={formRef}
            >
              <input
                className=" outline-none border-none p-2 w-[95%] bg-softBackground"
                type="text"
                placeholder={errors.name ? errors.name : "Your name"}
                name="name"
                required
              />
              <input
                className=" outline-none border-none p-2 w-[95%] bg-softBackground"
                type="text"
                placeholder={errors.email ? errors.email : "Your email"}
                name="email"
                value={formData.email}
                onChange={()=>{}}
                required
              />
              <textarea
                className=" outline-none border-none p-2 w-[95%] bg-softBackground" 
                rows="5"
                placeholder={errors.message ? errors.message : "Your message"}
                name="message"
                required
              />
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white bg-softTheme duration-300 hover:text-white hover:bg-theme font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 flex justify-center items-center gap-2 "
              >
                Submit
              </button>
              <div className="my-4"></div>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
