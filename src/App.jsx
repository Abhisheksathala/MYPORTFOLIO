import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

import Help from './pages/Help';
import How from './pages/How';
import Projects from './pages/Projects';
import ProjectShowcase from './pages/ProjectShowcase';
import Marq from './pages/Marq';
import SkillShowcase from './pages/SkillShowcase';
import Testimonials from './pages/Testimonials';
import { Hero } from './pages/Hero';
import NavBar from './components/Navbar';
import Developer from './pages/Developer';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './components/Contact';
import Open from './pages/Open';

const App = () => {


  const lenis = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 1.5, // Control the duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
      smooth: true,
      smoothTouch: true, // Enable smooth scrolling on touch devices
    });

    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenis.current.destroy();
    };
  }, []);

  return (
    <div
      className="relative App">
      {/* Page Content */}
      <div className="relative z-20">
        <NavBar />
        <Hero />
        <Help />
        <How />
        <Projects />
        <ProjectShowcase />
        <SkillShowcase />
        <Marq />
        <Open />
        <About />
        <Developer />
        <Contact />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default App;
