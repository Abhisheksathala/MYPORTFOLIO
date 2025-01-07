import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const EmojiConfetti = () => {
  const [isExploding, setIsExploding] = useState(false);
  const buttonRef = useRef(null);
  const canvasRef = useRef(null);
  const particles = useRef([]);

  const emojis = ['🎉', '🎊', '🥳', '🍾', '🎈', '🎇', '✨', '💥'];

  useEffect(() => {
    if (isExploding) {
      const canvas = canvasRef.current;
      const button = buttonRef.current;
      if (!canvas || !button) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const updateCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      updateCanvasSize();
      window.addEventListener('resize', updateCanvasSize);

      const buttonRect = button.getBoundingClientRect();
      const centerX = buttonRect.left + buttonRect.width / 2;
      const centerY = buttonRect.top + buttonRect.height / 2;

      for (let i = 0; i < 50; i++) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = 5 + Math.random() * 5;
        particles.current.push({
          x: centerX,
          y: centerY,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
          size: 20 + Math.random() * 20,
          velocity: {
            x: Math.cos(angle) * velocity,
            y: Math.sin(angle) * velocity,
          },
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.2,
        });
      }

      const animate = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.current = particles.current.filter((particle) => {
          particle.x += particle.velocity.x;
          particle.y += particle.velocity.y;
          particle.velocity.y += 0.1; // gravity
          particle.rotation += particle.rotationSpeed;

          if (particle.y < canvas.height) {
            ctx.save();
            ctx.translate(particle.x, particle.y);
            ctx.rotate(particle.rotation);
            ctx.font = `${particle.size}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(particle.emoji, 0, 0);
            ctx.restore();
            return true;
          }
          return false;
        });

        if (particles.current.length > 0) {
          requestAnimationFrame(animate);
        } else {
          setIsExploding(false);
        }
      };

      animate();

      return () => {
        window.removeEventListener('resize', updateCanvasSize);
      };
    }
  }, [isExploding]);

  const handleClick = () => {
    setIsExploding(true);
    particles.current = [];
  };

  return (
    <div className="relative">
      <motion.button
        ref={buttonRef}
        className="px-6 py-5 font-semibold text-white bg-blue-600 rounded-lg text-md hover-effect"
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
      >
        Submit 🎉
      </motion.button>
      {isExploding && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: 9999 }}
        />
      )}
    </div>
  );
};

export default EmojiConfetti;
