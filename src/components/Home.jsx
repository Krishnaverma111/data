import React from 'react';
import uday from '../assets/img/uday2..jpg';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 gap-10 py-10 md:py-20 max-w-[1200px] mx-auto'>
            {/* Text Section */}
            <div className="w-full md:w-1/2">
                <div className="space-y-4">
                    <div>
                        <TypeAnimation
                            sequence={[
                                'Web Designer',
                                1000,
                                'Front-end Developer',
                                1000,
                                'Fitness Influencer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1.5em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">HEY, I AM</h1>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">UDAY SHARMA</h1>
                    <p className="text-xl sm:text-2xl">I am a Front-End Developer with 6 months Internship.</p>

                    {/* Buttons & Socials */}
                    <div className="flex flex-col sm:flex-row mt-6 items-start sm:items-center gap-4 sm:gap-6">
                        <div className="text-lg sm:text-xl font-semibold border-2 px-4 py-2 rounded-xl hover:scale-110 transform transition-all duration-300">
                            <a href="#" download>Download CV</a>
                        </div>
                        <div className="flex gap-4 text-4xl sm:text-5xl">
                            <a href="#" className="hover:scale-110 transition-all duration-300"><FaGithub /></a>
                            <a href="#" className="hover:scale-110 transition-all duration-300"><FaInstagram /></a>
                            <a href="#" className="hover:scale-110 transition-all duration-300"><CiLinkedin /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={uday}
                    alt="Uday Sharma"
                    className="w-[250px] sm:w-[350px] md:w-[450px] h-auto object-cover rounded-xl"
                />
            </div>
        </div>
    );
}
