import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

// Import your images
import logo1 from '../assets/Img/Screenshot (39).png';
import logo2 from '../assets/Img/Screenshot (40).png';
import logo3 from '../assets/Img/Screenshot (42).png';
import logo4 from '../assets/Img/Screenshot 2024-12-03 214630.png';
import logo5 from '../assets/Img/Screenshot 2024-12-05 033555.png';
import logo6 from '../assets/Img/Screenshot 2024-12-19 203836.png';

 const ProjectShowcase  = () => {
  return (
    <section id='project' className="p-4 bg-neutral-950 md:p-8">
      <div className="max-w-5xl mx-auto">
        <Link
          heading="Tomato"
          subheading="It's an online food ordaring site"
          imgSrc={logo1} // Use your imported images
          href="#"
        />
        <Link
          heading="Portfolio"
          subheading="its an protfolio website for a developer"
          imgSrc={logo2}
          href="#"
        />
        <Link
          heading="Blog"
          subheading="It's a blog website "
          imgSrc={logo3}
          href="#"
        />
        <Link
          heading="Music-streming"
          subheading=" It's a music streming website"
          imgSrc={logo4}
          href="#"
        />
        <Link
          heading="Iphone-clone"
          subheading="it an clone of apple website"
          imgSrc={logo5}
          href="#"
        />
        <Link
          heading="E-com"
          subheading="It's an e-commerce website"
          imgSrc={logo6}
          href="#"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="relative flex items-center justify-between py-4 transition-colors duration-500 border-b-2 group border-neutral-700 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold transition-colors duration-500 text-neutral-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 block mt-2 text-base transition-colors duration-500 text-neutral-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 object-cover w-32 h-24 rounded-lg md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};


export default ProjectShowcase



