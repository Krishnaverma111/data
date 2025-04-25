import React from 'react';
import { DiJavascript } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";


import Logo from "../assets/img/Cpp.jpg";

export default function TechStack() {
  return (
    <div className='flex justify-center py-10 bg-white'>
      <div className="w-[400px] md:w-[500px] bg-blue-400 p-6 rounded-2xl shadow-lg space-y-6">
        <h1 className="text-3xl font-bold text-white text-center">My Tech Stack</h1>
        <div className="text-5xl flex justify-around items-center text-white">
          <DiJavascript />
          <IoLogoJavascript />
          <FaJava />
          <FaReact />
          <img src={Logo} alt="C++ Logo" className="h-[50px] w-[50px] object-contain bg-white rounded-full p-1" />
        </div>
      </div>
    </div>
  );
}
