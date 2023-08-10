"use client";
import Link from "next/link";
import Logo from "../utils/icons/logowithoutname.png";
import Image from "next/image";
import menu from "../utils/svg/menu.svg";
import menuBlack from "../utils/svg/menuBlack.svg";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = ({ color = "white", className, navType = "navBtn" }) => {
  const path = usePathname();
  const [showDropDown, setShowDropDown] = useState(false);
  console.log("path", path);
  return (
    <div
      className={`flex text-[${color}] items-center justify-between ${className}`}
    >
      <Link href={"/"}>
        <div className="flex items-center space-x-2">
          <Image src={Logo} alt="Image by Freepik" className="w-16" />
          <p>Begin Trader</p>
        </div>
      </Link>
      <div className="flex space-x-10 sm:hidden">
        <Link href={"/"}>
          <p
            className={`cursor-pointer ${navType} ${
              path === "/" && "text-primaryDark font-semibold"
            }`}
          >
            Home
          </p>
        </Link>
        <Link href={"/courses"}>
          <p
            className={`cursor-pointer ${navType} ${
              path === "/courses" && "text-primary font-semibold"
            }`}
          >
            Courses
          </p>
        </Link>
        <Link href={"/testimonial"}>
          <button
            className={`cursor-pointer ${navType} ${
              path === "/testimonial" && "text-primary font-semibold"
            }`}
          >
            Testimonial
          </button>
        </Link>
      </div>
      <div className="sm:hidden">
        <Link href={"/contactUs"}>
          <button
            className={`${navType} ${
              path === "/contactUs" && "text-primary font-semibold"
            }`}
          >
            Contact Us
          </button>{" "}
        </Link>
      </div>
      <div className="hidden sm:block relative">
        <Image
          src={color === "white" ? menu : menuBlack}
          className="w-6"
          onClick={() => setShowDropDown((prev) => !prev)}
        />
        {showDropDown && (
          <div className="absolute right-0 border border-primary py-2 px-8 space-y-2 rounded-lg bg-primary shadow-xl mt-1 z-10 dropdown-content">
            <Link href={"/"}>
              <p className="py-2">Home</p>
            </Link>
            <Link href={"/courses"}>
              <p className="py-2">Courses</p>
            </Link>
            <Link href={"/testimonial"}>
              <p className="py-2">Testimonial</p>
            </Link>
            <Link href={"/contactUs"}>
              <p className="py-2">Contact Us</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
