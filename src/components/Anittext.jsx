import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = () => {
  const text = "Take a moment to Get in Touch"; // The heading text
  const words = text.split(" "); // Split the text into an array of words

  return (
    <motion.div
      className="mb-8 text-4xl font-semibold text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }} // The animation will trigger every time it enters the viewport
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: "100%" }} // initial state with hidden opacity and vertical offset
          whileInView={{
            opacity: 1,
            y: "0%", // Animate to full opacity and normal position
          }}
          transition={{
            delay: index * 0.3, // Delay the animation by 0.3 seconds for each word
            duration: 0.6, // Duration of each word's animation
            type: 'spring', // Use a spring animation for a bouncy effect
            stiffness: 100, // Controls the spring's stiffness
            damping: 25, // Controls the amount of damping (resistance) for a smoother effect
          }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
