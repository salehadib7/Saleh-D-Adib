


import "./globals.css";

import { Poppins, Outfit } from "next/font/google";

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

        <body className={`${poppins.variable} ${outfit.variable}`}>
          {children}
        </body>


    </html>
  );
}
