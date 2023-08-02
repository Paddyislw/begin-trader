import Link from "next/link";
import Logo from "../utils/icons/logowithoutname.png";
import Image from "next/image";

const Navbar = ({ color = "white", className ,navType='navBtn'}) => {
  return (
    <div
      className={`flex text-[${color}] items-center justify-between ${className}`}
    >
      <div className="flex items-center space-x-2">
        <Image src={Logo} alt="" className="w-16" />
        <p>Begin Trader</p>
      </div>
      <div className="flex space-x-10 sm:hidden">
        <p className={`cursor-pointer ${navType}`}>
          <Link href={'/'}>Home</Link>
        </p>
        <p className={`cursor-pointer ${navType}`}>
          <Link href={'/courses'}>Courses</Link>
        </p>
        <p className={`cursor-pointer ${navType}`}>
          <Link href={'/'}>Testimonial</Link>
        </p>
      </div>
      <div className="sm:hidden">
        <button className="navBtn">Contact Us</button>
      </div>
    </div>
  );
};



export default Navbar;
