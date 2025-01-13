import React from 'react';
import { motion } from 'framer-motion';

const Marq = () => {
  return (
    <div className="block w-screen p-4 overflow-hidden bg-black h-fit projectShow">
      {/* Left to Right Section */}
      <div
        data-scroll
        data-scroll-speed=".2"
        data-scroll-section
        className="w-full py-8 bg-black rounded-tl-2xl rounded-tr-2xl"
      >
        <div className="flex items-center py-6 overflow-hidden border-t-2 border-b-2 text whitespace-nowrap border-zinc-200">
          {/* Scrolling Left */}
          <motion.h1
            initial={{ x: '0' }}
            animate={{ x: '-100%' }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 15 }}
            className="text-[5vw] font-semibold uppercase text-[#E6E6E1]"
          >
            Designing, Developing, and Creating together.
          </motion.h1>
          <motion.h1
            initial={{ x: '0' }}
            animate={{ x: '-100%' }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 15 }}
            className="text-[5vw] font-semibold uppercase text-[#E6E6E1]"
          >
            Designing, Developing, and Creating together.
          </motion.h1>
        </div>
      </div>

      {/* Right to Left Section */}
      <div
        data-scroll
        data-scroll-speed=".2"
        data-scroll-section
        className="w-full py-8 bg-black rounded-tl-2xl rounded-tr-2xl"
      >
        <div className="flex items-center py-6 overflow-hidden border-t-2 border-b-2 text whitespace-nowrap border-zinc-200">
          {/* Scrolling Right */}
          <motion.h1
            initial={{ x: '-100%' }}
            animate={{ x: '0' }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 15 }}
            className="text-[5vw] font-semibold uppercase text-[#E6E6E1]"
          >
            Building Dreams, One Pixel at a Time.
          </motion.h1>
          <motion.h1
            initial={{ x: '-100%' }}
            animate={{ x: '0' }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 15 }}
            className="text-[5vw] font-semibold uppercase text-[#E6E6E1]"
          >
            Building Dreams, One Pixel at a Time.
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Marq;
