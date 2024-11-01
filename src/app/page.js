"use client";

import { MenuProvider } from "@/context/Menucontext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Bganimation from "@/components/bganimation/Bganimation";
import Contact from "@/components/contact/Contact";
import CounterBanner from "@/components/counterBanner/CounterBanner";
import Cursor from "@/components/cursor/Cursor";
import Education from "@/components/education/Education";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Portfolio from "@/components/portfolio/Portfolio";
import Services from "@/components/service/Services";
import Floatbar from "@/components/sidebar/Floatbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Skils from "@/components/skils/Skils";

export default function Home() {
  return (
    <>
        <MenuProvider>
          <div className= " w-full mx-auto flex font-poppins">
            <Cursor />
            <Sidebar />
            <Floatbar />
            <div className=" w-[100%] lg:w-[75%] relative overflow-clip">
              <Hero />
              <About />
              <Banner />
              <Services />
              <CounterBanner />
              <Skils />
              <Education />
              <Portfolio />
              <Contact />
              <Footer />
              <Bganimation />
              <ToastContainer theme="dark" position="top-right" />
            </div>
          </div>
        </MenuProvider>
    </>
  );
}
