import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import logo from "../assets/Img/abhishek.jpg"; // Replace with your image path



const Example = () => {
  return (
    <div className="grid w-full px-4 py-12 place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 text-slate-900">
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-80 w-full sm:w-96 md:w-[500px] lg:w-[600px] xl:w-[700px] rounded-xl bg-gradient-to-br bg-black"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute grid bg-black shadow-lg inset-4 place-content-center rounded-xl"
      >
        <motion.img
          src={logo}
          alt="Abhishek Sathala"
          className="rounded-lg shadow-lg"
          whileInView={{
            y: [0, 15],
            transition: { duration: 3, ease: "easeInOut" },
          }}
          initial={{ y: 50 }}
          whileHover={{
            scale: 0.9,
            transition: { duration: 0.3 },
          }}
          transition={{ duration: 1 }}
          style={{ width: "60%", height: "auto", margin: "0 auto" }}
        />
      </div>
    </motion.div>
  );
};
const About = () => {
  const tiltREF = useRef(null);
  const [Xvale, setXvale] = useState(0);
  const [Yvale, setYvale] = useState(0);

  const handleMouseMove = (e) => {
    setXvale(
      e.clientX -
      tiltREF.current.getBoundingClientRect().x -
      tiltREF.current.getBoundingClientRect().width / 2
    );
    setYvale(
      e.clientY -
      tiltREF.current.getBoundingClientRect().y -
      tiltREF.current.getBoundingClientRect().width / 2
    );
    tiltREF.current.style.transform = `rotateX(${Yvale / 20}deg) rotateY(${Xvale / 20}deg)`;
  };

  return (
    <div id="about" className="flex items-center justify-center h-screen py-10 bg-black page1-in">
      <motion.div
        className="flex items-center justify-between w-full max-w-6xl px-6 py-12 space-x-8 bg-black rounded-lg shadow-lg"
        style={{ height: "80vh" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }} // Ensures animation triggers each time the section is in view
        transition={{ duration: 1 }}
      >
        {/* Tilted Image */}
        <TiltCard />

        {/* Short Text with Line-by-Line Animation */}
        <motion.div
          ref={tiltREF}
          onMouseMove={(e) => handleMouseMove(e)}
          className="relative p-5 py-8 text-white transform border border-gray-800 rounded-lg titldiv"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="flex gap-2 py-1 mb-3 border-b border-gray-800"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
          </motion.div>
          <div>
            <motion.span
              className="font-[anzo] text-gray-500"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              (About)
            </motion.span>
            <motion.h1
              className="text-[3vw] font-[anzo]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hey, I'm Abhishek!
            </motion.h1>
            <motion.p
              className="text-[1.5vw] font-[anzo3]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              I'm a passionate{" "}
              <span className="font-[anzo1] text-yellow-500">full-stack</span> developer with a
              passion for crafting captivating digital experiences.
            </motion.p>
            <motion.p
              className="text-[1.5vw] font-[anzo3]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              My goal is to craft user-friendly websites with seamless functionality and engaging
              animations.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};



export default About;
