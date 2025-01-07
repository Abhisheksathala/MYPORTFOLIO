import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const section = document.querySelector('.testimonials');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="testimonials">
      <div className="flex items-center justify-center min-h-screen py-5 min-w-screen bg-gray-50">
        <div className="w-full px-5 py-16 text-gray-800 bg-white border-t border-b border-gray-200 md:py-24">
          <div className="w-full max-w-6xl mx-auto">
            <motion.div
              className="max-w-xl mx-auto text-center"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={containerVariants}
            >
              <motion.h1 className="mb-5 text-6xl font-bold text-gray-600 md:text-7xl" variants={itemVariants}>
                What people <br /> are saying
              </motion.h1>
              <motion.h3 className="mb-5 text-xl font-light" variants={itemVariants}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </motion.h3>
              <motion.div className="mb-10 text-center" variants={itemVariants}>
                <span className="inline-block w-1 h-1 ml-1 bg-indigo-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-indigo-500 rounded-full"></span>
                <span className="inline-block w-40 h-1 bg-indigo-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-indigo-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-indigo-500 rounded-full"></span>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex flex-wrap items-start -mx-0"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={containerVariants}
            >
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={index}
                  className="px-4 md:w-1/3"
                  variants={itemVariants}
                >
                  <div className="w-full p-5 mx-auto mb-6 font-light text-gray-800 bg-white border border-gray-200 rounded-lg">
                    <div className="flex items-center w-full mb-4">
                      <div className="w-10 h-10 overflow-hidden border border-gray-200 rounded-full bg-gray-50">
                        <img
                          className="object-cover w-full h-auto rounded-full"
                          src={`https://i.pravatar.cc/100?img=${index + 1}`}
                          alt=""
                        />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="text-sm font-bold text-gray-600 uppercase">User {index + 1}</h6>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-sm leading-tight">
                        <span className="mr-1 text-lg italic font-bold leading-none text-gray-400">"</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.
                        <span className="ml-1 text-lg italic font-bold leading-none text-gray-400">"</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
