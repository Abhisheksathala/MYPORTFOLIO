import { useRef, useState } from "react";
import { motion } from "framer-motion";
import file from "../assets/Untitled.pdf";

export default function MagneticButton({ text, size = 100, color = "blue-500", hover, tcolor }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    if (ref.current) {
      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX, y: middleY });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={file} // File URL
      download="AbishekResume.pdf" // Enables download
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative flex items-center justify-center text-lg font-bold text-${tcolor} transition-all  ease-in-out transform bg-${color} rounded-full hover:scale-110  ${hover}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {text}
    </motion.a>
  );
}



