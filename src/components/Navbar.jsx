import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-scroll";

export default function Navbar() {
  const [change, setchange] = useState(false);

  const icon = () => {
    setchange(!change);
  };

  return (
    <nav className='fixed top-0 w-full z-50'>
      <div className='h-[100px] w-full bg-black text-white px-10 py-5 flex justify-between items-center relative'>
        <h1 className='text-3xl'>Uday Sharma</h1>

     
        <ul className='text-3xl hidden md:flex gap-[50px]'>
          <li><Link to="skill" smooth={true} duration={500}>About</Link></li>
          <li><Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>

       
        <div onClick={icon} className='md:hidden cursor-pointer text-3xl z-50'>
          {change ? <ImCross /> : <GiHamburgerMenu />}
        </div>

       
        <div className={`bg-amber-600 flex flex-col items-center fixed top-[100px] h-screen w-[70%] md:hidden transition-all duration-500 ease-in-out z-40 ${change ? 'left-0' : 'left-[-100%]'}`}>
          <ul className='text-3xl flex flex-col gap-[50px] mt-10'>
            <li><Link to="skill" smooth={true} duration={500} onClick={icon}>About</Link></li>
            <li><Link to="portfolio" smooth={true} duration={500} onClick={icon}>Portfolio</Link></li>
            <li><Link to="contact" smooth={true} duration={500} onClick={icon}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
