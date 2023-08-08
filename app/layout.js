import Footer from "@/global/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/global/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Begin Trader",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
