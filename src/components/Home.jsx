import React from 'react';
import { FaGithub, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
    return (
        <section className="w-full px-4 sm:px-6 py-12 md:py-20 bg-white">
            <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Text Section */}
                <div className="space-y-6">
                    <h2 className="text-indigo-600 text-2xl font-semibold">
                        <Typewriter
                            words={['Web Designer', 'Front-end Developer', 'Fitness Influencer']}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h2>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                        HEY, I am <br /> UDAY SHARMA
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600">
                        I’m a passionate Front-End Developer with a 6-month internship experience, turning designs into elegant web interfaces.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-6">
                        <a
                            href="#"
                            download
                            className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-indigo-700 transition duration-300 shadow-md"
                        >
                            Download CV
                        </a>

                        {/* Social Icons */}
                        <div className="flex gap-5 text-3xl text-gray-700 mt-2 sm:mt-0">
                            <a href="#" className="hover:text-indigo-600 transition-all" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href="#" className="hover:text-pink-600 transition-all" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="#" className="hover:text-blue-600 transition-all" target="_blank" rel="noopener noreferrer"><CiLinkedin /></a>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center">
                    <img
                        src='https://res.cloudinary.com/df0sqyxrc/image/upload/v1745596013/uday_knacbs.jpg'
                        alt="Uday Sharma"
                        className="w-[250px] sm:w-[350px] md:w-[400px] h-auto object-cover rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
