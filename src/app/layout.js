

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import { Poppins, Outfit } from "next/font/google";
import { MotionProvider } from "@/context/Motioncontext";
import { MenuProvider } from "@/context/MenuContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Saleh D. Adib",
  description: "Professional Web Designer & Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MotionProvider>
        <MenuProvider>
        <body className={`${poppins.variable} ${outfit.variable}`}>
          {children}
          <ToastContainer theme="dark" position="bottom-right" />
        </body>
        </MenuProvider>
      </MotionProvider>
    </html>
  );
}
