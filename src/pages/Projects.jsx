import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../assets/Img/th.jpg';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const wrap = container.querySelector('.wrapper-404');

    // Wrapper horizontal scrolling
    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: '+=900vh',
      scrub: true,
      pin: true,
      markers: false,
      onUpdate: (self) => {
        gsap.to(wrap, {
          x: `${-self.progress * 300}vw`,
          ease: 'power3.out',
        });
      },
    });

    // Cards animations
    cardsRef.current.forEach((card, index) => {
      const animationProps = [
        { endTranslateX: -2000, rotate: 45 },
        { endTranslateX: -1000, rotate: -35 },
        { endTranslateX: -2000, rotate: 45 },
        { endTranslateX: -1500, rotate: -30 },
      ][index];

      ScrollTrigger.create({
        trigger: card,
        start: 'top 90%',
        end: '+=100vh',
        scrub: true,
        onUpdate: (self) => {
          gsap.to(card, {
            x: `${animationProps.endTranslateX * self.progress}px`,
            rotate: `${animationProps.rotate * self.progress}`,
            ease: 'power3.out',
          });
        },
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen p-4 overflow-hidden bg-white"
    >
      <section className="absolute top-0 w-[400vw] h-screen wrapper-404 flex items-center justify-center ">
        <h1 className="w-full text-black text-[48vw] flex items-center justify-center">
          Projects Page
        </h1>
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`absolute card w-80 h-80 rounded-2xl`}
            style={{
              top: `${10 + index * 20}%`,
              left: `${20 + index * 20}%`,
            }}
          >
            <img
              className="object-cover w-full h-full"
              src={logo}
              alt={`Card ${index + 1}`}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
