import React from 'react'
import { DiJavascript } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import Logo from "../assets/img/C++.jpg";



export default function () {
  return (
    <div className='flex justify-center '> {/* Tech Stack Section */}
      <div className="w-[400px] md:w-[500px] flex bg-blue-400 p-4 rounded-2xl shadow-lg ">
        <h1 className="text-3xl font-semibold">My Tech Stack</h1>
        <div className="text-6xl flex gap-4 items-center">
          <DiJavascript />
          <IoLogoJavascript />
          <FaJava />
          <FaReact />
          <img src={Logo} alt="C++ Logo" className="h-[60px] w-[60px] object-contain" />
        </div>
      </div>
    </div>
  )
}
