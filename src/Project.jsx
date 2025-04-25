import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import amazon from '../src/assets/img/amazon-logo-with-person-using-laptop-in-background (4).jpg';
import spotify from '../src/assets/img/spotify.jpg';

export default function Project() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 px-4 py-10">

      {/* Project #1 */}
      <div className="flex justify-center w-full max-w-[1000px]">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-8 w-full"
        >
          <img
            src={amazon}
            alt="Amazon Project"
            className="h-[150px] md:h-[250px] w-full md:w-[250px] rounded-xl"
          />
          <div className="text-center md:text-left">
            <h1 className="text-[30px] md:text-[45px] font-bold">Project #1</h1>
            <h2 className="text-[24px] md:text-[40px]">Amazon Clone</h2>
          </div>
        </motion.div>
      </div>

      {/* Project #2 */}
      <div className="flex justify-center w-full max-w-[1000px]">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-8 w-full"
        >
          <div className="text-center md:text-left">
            <h1 className="text-[30px] md:text-[45px] font-bold">Project #2</h1>
            <h2 className="text-[24px] md:text-[40px]">Spotify Clone</h2>
          </div>

          <img
            src={spotify}
            alt="Spotify Project"
            className="h-[150px] md:h-[250px] w-full md:w-[250px] rounded-xl"
          />
        </motion.div>
      </div>

    </div>
  );
}
