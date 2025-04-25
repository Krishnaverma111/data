import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { div } from 'framer-motion/client';

export default function About() {
  return (
    


    <div className='flex flex-col md:flex-row justify-center items-center gap-8 p-4 sm:p-6'>

      <div className=' w-full md:w-[500px] bg-emerald-800  '>
        <h1 className='text-5xl ml-[10px]'> About Me </h1>
        <h1 className='ml-[10px]'>Aspiring software developer with hands-on experience from a 6-month internship at Sqilco. Passionate about coding, problem-solving, and building innovative solutions. Currently in 11th standard, continuously learning and exploring new technologies to shape the future of software development</h1>
      </div>

      <div className=' w-full md:w-[500px] bg-red-800 p-4 rounded-lg '>
        <div className='flex flex-col gap-3 '>
          <h1 className='text-[25px]'> Let's Connect ! </h1>
          <input className='w-[250px] border-2 rounded-[10px] bg-white items-center' type="text" placeholder='Enter Your Name....' />
          <input className='w-[250px] border-2 rounded-[10px] bg-white' type="text" placeholder='Enter Your E-mail' />
          <input className='w-[250px] border-2 rounded-[10px] bg-white h-[100px]' type="text" placeholder='Your Message' />
          <button className='h-[40px] w-[250px] border-2 p-2 rounded-2xl bg-blue-800'> Submit </button>
        </div>
      </div>



    </div>


  )
}
