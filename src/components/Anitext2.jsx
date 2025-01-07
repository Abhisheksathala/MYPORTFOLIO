import React from 'react';
import { motion } from 'framer-motion';

const AnimatedMessage = () => {
  const text = "Thank you for getting in touch! ❤️💗"; // The message text
  const words = text.split(" "); // Split the text into an array of words

  return (
    <div className="text-center">
      <motion.div
        className="text-3xl font-semibold text-green-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} // Fade in when the container comes into view
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0, y: 20 }} // Initial state with hidden opacity and slight vertical offset
            whileInView={{
              opacity: 1,
              y: 0, // Animate to full opacity and normal position
            }}
            transition={{
              delay: index * 0.3, // Delay the animation for each word
              duration: 0.6, // Duration of each word's animation
              type: 'spring', // Use a spring animation for a bouncy effect
              stiffness: 100, // Controls the spring's stiffness
              damping: 25, // Controls the damping for a smoother effect
            }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedMessage;
