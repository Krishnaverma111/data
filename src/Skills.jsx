// import React from 'react'
// import { DiJavascript } from "react-icons/di";
// import { IoLogoJavascript } from "react-icons/io";
// import { FaJava } from "react-icons/fa6";
// import { FaReact } from "react-icons/fa";
// import { IoLogoCss3 } from "react-icons/io5";

// import Logo from "../src/assets/img/c++.png"


// export default function Skills() {
//     return (
//         <div className=' text-center mt-[70px] '> <h1 className='text-[80px] font-bold'> Skills </h1>
//             <h1 className='text-[35px]'>I worked on various frontend projects. Check them there.</h1>
//             <div className='h-[250px] w-[350px]   border-2 ml-[600px] p-4 rounded-2xl shadow-xl bg-blue-400 mt-[25px]'>
//                 <h1 className='text-center text-4xl mt-[20px]'>Frontend </h1>
//                 <div className=' '>
//                     <div className='flex mt-[17px]'>  <h1 className='text-3xl ml-[20px]'> HTML   </h1>   <h1 className='text-3xl ml-2'> <DiJavascript /></h1>
//                         <h1 className='text-3xl ml-[30px]'> CSS   </h1>   <h1 className='text-3xl ml-2'> <IoLogoCss3 /></h1>
//                     </div>
                    
//                     <div className='flex'>  <h1 className='text-3xl ml-[20px]'> Java   </h1>   <h1 className='text-3xl ml-2'> <FaJava /></h1>
//                         <h1 className='text-3xl ml-[47px]'> C++ </h1>       <img className='h-[40px] ' src={Logo} alt="" />
                        
//                     </div>
                    
//                     <div className='flex items-center'>  <h1 className='text-3xl ml-[20px]'> React  </h1>   <h1 className='text-3xl'> <FaReact /></h1>
//                         <h1 className='text-3xl ml-[17px]'> Javascript  </h1>   <h1 className='text-3xl'> <IoLogoJavascript /></h1>
//                     </div>
                    

//                 </div>


//             </div>
//         </div>
//     )
// }

import React from 'react';
import { DiJavascript } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import Logo from "../src/assets/img/c++.png";

export default function Skills() {
  return (
   
    <div className="text-center mt-12 px-4 py-6 bg-amber-800">
      <h1 className="text-[80px] font-bold">Skills</h1>
      <h2 className="text-[35px] mt-2">
        I worked on various frontend projects. Check them there.
      </h2>

      <div className="h-[250px] w-[350px] border-2 mx-auto p-6 rounded-2xl shadow-xl bg-blue-400 mt-8">
        <h1 className="text-4xl mb-4 font-semibold">Frontend</h1>

        {/* Skill Rows */}
        <div className="flex justify-between items-center mb-4 px-4">
          <div className="flex items-center gap-2 text-2xl">
            <span>HTML</span>
            <DiJavascript />
          </div>
          <div className="flex items-center gap-2 text-2xl">
            <span>CSS</span>
            <IoLogoCss3 />
          </div>
        </div>

        <div className="flex justify-between items-center mb-4 px-4">
          <div className="flex items-center gap-2 text-2xl">
            <span>Java</span>
            <FaJava />
          </div>
          <div className="flex items-center gap-2 text-2xl">
            <span>C++</span>
            <img src={Logo} alt="C++ Logo" className="h-[35px]" />
          </div>
        </div>

        <div className="flex justify-between items-center px-4">
          <div className="flex items-center gap-2 text-2xl">
            <span>React</span>
            <FaReact />
          </div>
          <div className="flex items-center gap-2 text-2xl">
            <span>JavaScript</span>
            <IoLogoJavascript />
          </div>
        </div>
      </div>
    </div>
  
  );
}
