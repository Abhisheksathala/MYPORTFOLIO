import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import '@splinetool/viewer';

gsap.registerPlugin(ScrollTrigger);

const Open = () => {
  const openREF = useRef(null);

  useEffect(() => {
    const open = openREF.current;
    const top = open.querySelector('.top');
    const toph1 = top.querySelector('h1');
    const bottom = open.querySelector('.bottom');
    const bottomh1 = bottom.querySelector('h1');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: open,
        start: "30% 50%",
        end: "50% 50%",
        scrub: true,
        markers: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(top, { top: '-50%', display: 'none' }, "a")
      .to(bottom, { bottom: '-50%', display: 'none' }, "a")
      .to(toph1, { bottom: '100%', display: 'none' }, "a")
      .to(bottomh1, { bottom: '100%', display: 'none' }, "a");

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="w-full h-full overflow-hidden">
      <div ref={openREF} className="relative w-screen h-screen text-white main p-7">
        <div className="top h-[50vh] absolute top-0 w-full left-0 overflow bg-gradient-to-b from-black to-gray-900">
          <h1 className="font-bold text-[22vw] absolute top-[100%] left-[50%] 
            translate-x-[-50%] translate-y-[-50%] text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            FRIEND!
          </h1>
        </div>
        <div className="relative w-full h-screen overflow-hidden origin-center z-[-1] center flex items-center justify-center scale-110">
          <spline-viewer url="https://prod.spline.design/rOkQzcyF8EtRZKJe/scene.splinecode"></spline-viewer>
        </div>
        <div className="bottom h-[50vh] absolute bottom-0 w-full left-0 overflow-hidden bg-gradient-to-t from-black to-gray-900">
          <h1 className="font-bold text-[22vw] absolute left-[50%] 
            translate-x-[-50%] translate-y-[-50%] text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            FRIEND!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Open;
