import Logo from '../utils/icons/logowithoutname.png'
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex text-white items-center justify-between">
      <div className='flex items-center space-x-2'>
       <Image src={Logo} alt="" className='w-16'/>
        <p>Begin Trader</p>
      </div>
      <div className='flex space-x-4 sm:hidden'>
        <p>Home</p>
        <p>Courses</p>
        <p>Testimonial</p>
      </div>
      <div className='sm:hidden'>
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default Navbar;
