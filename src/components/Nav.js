import React from "react";

// import icons
import { MdOutlineViewHeadline } from "react-icons/md";
import { BsClipboardData, BsBriefcase, BsPatchExclamation } from "react-icons/bs";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { Link } from "react-scroll";
import { FiPaperclip } from "react-icons/fi";

const Nav = () => {
  return (
    // lg:top is the arrangement of the top or down for the nav 
    <nav className="fixed xl:right-[2%] z-50 ">
      <div className="flex w-full xl:flex-col xl:px-0  ">
        {/* nav inner  */}

        <div className="h-350px backdrop-blur-2xl rounded-full flex flex-col justify-between items-center gap-y-5 text-4xl py-8">      
          <Link to='product'  offset={-300} className="relative flex items-center group hover:text-accent transition-all duration-300">
            <MdOutlineLocalGroceryStore />
          </Link>
          <Link to='service'  className="relative flex items-center group hover:text-accent transition-all duration-300">
            <BsClipboardData />
          </Link>
          <Link to='about'  className="relative flex items-center group hover:text-accent transition-all duration-300">
            <BsPatchExclamation />
          </Link>
          
          <Link to='footer'  className="relative flex items-center group hover:text-accent transition-all duration-300">
            <FiPaperclip />
          </Link>
        </div>
      </div>
    </nav>
  ); 
};

export default Nav;
