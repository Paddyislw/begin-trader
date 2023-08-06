'use client'
import Link from "next/link";
import Logo from "../utils/icons/logowithoutname.png";
import Image from "next/image";
import {usePathname  } from 'next/navigation'

const Navbar = ({ color = "white", className, navType = "navBtn" }) => {
  const path = usePathname ()
  
  return (
    <div
      className={`flex text-[${color}] items-center justify-between ${className}`}
    >
      <Link href={"/"}>
        <div className="flex items-center space-x-2">
          <Image src={Logo} alt="" className="w-16" />
          <p>Begin Trader</p>
        </div>
      </Link>
      <div className="flex space-x-10 sm:hidden">
        <Link href={"/"}>
          <p className={`cursor-pointer ${navType}`}>Home</p>
        </Link>
        <Link href={"/courses"}>
          <p className={`cursor-pointer ${navType}`}>Courses</p>
        </Link>
        <Link href={"/testimonial"}>
          <button className={`cursor-pointer ${navType}`}>Testimonial</button>
        </Link>
      </div>
      <div className="sm:hidden">
        <Link href={"/contactUs"}>
          <button className={`${navType}`}>Contact Us</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
