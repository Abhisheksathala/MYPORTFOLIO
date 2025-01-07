import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import SplitType from 'split-type'
import { IoIosArrowRoundForward } from "react-icons/io";
import MagneticButton from "../components/Button";
import abhishek from "../assets/Img/abhishek.jpg"

export const Hero = () => {
  const LoadingREF = useRef(null);
  const ContainerREF = useRef(null);

  // Set up GSAP animations
  useGSAP(() => {
    const loading = LoadingREF.current;  // Access the DOM element using the ref
    const Container = ContainerREF.current;  // Access the DOM element using the ref

    // Select elements for animation
    const img = loading.querySelector('.loader-wrap-heading img');
    const svg = loading.querySelector("svg path");
    const loader_wrap = loading.querySelector('.loader-wrap');
    const h1 = Container.querySelector('h1');

    const split = new SplitType(h1, {
      types: "chars", // Split into characters
      tagName: "span",
      charClass: "char", // Use span elements

    });
    const char = h1.querySelectorAll('.char')
    const halfChar = Math.floor(char.length / 2)

    char.forEach((char, index) => {
      if (index < halfChar) {
        char.classList.add('top-half'); // Add 'top-half' to the first half
      } else {
        char.classList.add('bottom-half'); // Add 'bottom-half' to the second half
      }
    });
    const topChars = h1.querySelectorAll('.top-half');
    const bottomChars = h1.querySelectorAll('.bottom-half');


    // Define your curves
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flate = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    // Create timeline
    const tl = gsap.timeline();

    // Animate image
    tl.from(img, {
      y: 200,
      skew: 10,
    }).to(img, {
      delay: 1,
      y: -200,
      skew: 10,
      display: "none"
    });

    // Animate SVG path
    tl.to(svg, {
      duration: 0.5,
      attr: { d: curve },
      ease: 'power2.easeIn',
    }).to(svg, {
      duration: 0.5,
      attr: { d: flate },
      ease: 'power2.easeOut',
      display: 'none',
    });

    // Animate loader wrap
    tl.to(loader_wrap, {
      y: -150,
      display: "none"
    }).to(loading, {
      display: 'none',
      zIndex: -1,

    })

    // Hide loader
    tl.to(loader_wrap, {
      zIndex: -1,
      display: 'none',
    });

    // Animate the h1 element
    tl.from(topChars, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,

    }, "-=1.5");  // Start this animation 1.5 seconds before the previous one ends
    tl.from(bottomChars, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: -0.1,

    }, "-=1.5")  // Start this animation 1.5 seconds before the previous one ends

    const leftarrow = Container.querySelector('.left-section .arrow');

    tl.from(leftarrow, {
      opacity: 0,
      rotate: 0,
      ease: 'power3.out',
      scale: "0",
      stagger: -0.1,
    })
    const leftH4 = Container.querySelector('.left-section .context-section h4');


    const splitlefth4 = new SplitType(leftH4, {
      types: "word", // Split into characters
      tagName: "span",// Use span elements
      wordClass: "overflow-hidden",
      // give style overflow-hidden
      style: 'overflow: hidden',


    });

    const leftsapn = leftH4.querySelectorAll('span');

    tl.from(leftsapn, {
      y: 100,
      opacity: 0,
      stagger: 0.01,
    })

    const button = Container.querySelector('.left-section .button');

    tl.from(button, {
      y: 100,
      opacity: 0,
      ease: 'power3.out',
      scale: 0.9,
    });

    const image = Container.querySelector('.middle .image');



    tl.from(image, {
      y: -50,
      opacity: 0,
      ease: 'power3.out',
      scale: 0.9,
    });


    const availability = Container.querySelector('.availability');

    const h3 = availability.querySelector('h3');

    const avalespan = availability.querySelectorAll('span');

    tl.from(h3, {
      y: 100,
    });

    tl.from(avalespan, {
      y: "100%",
    });
  }, []); // Empty dependency array ensures it runs only once

  return (
    <>
      <div id='home' className="w-full bg-[#2D2D2D] relative">
        <div ref={LoadingREF}
          className="absolute z-10 flex items-center justify-center w-full h-screen bg-transparent pointer-events-none loader-wrap">
          <svg className="absolute top-0 w-[100vw] h-[110vh]" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
          </svg>
          <div className="z-20 overflow-hidden text-3xl font-bold loader-wrap-heading">
            <span className="block overflow-hidden">
              <img src="/Infinity@1x-1.0s-200px-200px.svg" className="overflow-hidden leading-none" alt="" />
            </span>
          </div>
        </div>

        {/* 2 */}

        <div ref={ContainerREF} className="relative flex justify-center w-full h-screen bg-[#DFDFDA]">
          <span className="absolute overflow-hidden h-fit top-20 w-full font-bold leading-none text-[#FFF5EE] flex justify-center">
            <h1
              className="flex text-[#000] h-fit items-start gap-2 overflow-hidden font-semibold leading-none uppercase whitespace-nowrap text-[15vw] transition-all duration-1000 ease-in-out 
          top-0 left-0 transform origin-top-left font-mono"
              id="name"
            >
              Abhishek
              <sub className="text-5xl">&copy;</sub>
            </h1>
          </span>

          <div className="w-screen main-elem bottom-section">
            <div
              className="absolute flex flex-row items-start justify-between w-full p-4 col-div bottom-[2rem] py-7">
              {/* left */}
              <div className="w-1/3 h-[45vh] px-9 flex items-start flex-col justify-end col-1 color left-section">
                <div className="-mt-6 text-[3vw] rotate-45 rounded-2xl arrow hover-effect">
                  <IoIosArrowRoundForward />
                </div>
                <div className="context-section w-fit">
                  <h4 className="overflow-hidden text-2xl font-semibold leading-none tracking-tighter w-fit font-[anzo1]">I'm a web developer based in India. I help growing brands and startups gain an unfair advantage through premium, results-driven websites.</h4>
                </div>
                <div className="flex items-center gap-3 py-6 button h-fit">
                  <IoIosArrowRoundForward className='hover-effect text-[2vw]'/> resume
                    <MagneticButton className='txet-white' text='Download' width="36" height="12" color="black" hover={'hover-effect'} tcolor="white" />
                </div>
              </div>
              {/* middle */}
              <div className="w-1/3 h-[45vh] overflow-hidden rounded-lg col-2 flex items-center justify-center middle">
                <div className="image rounded-lg w-[20vw] h-[50vh] overflow-hidden relative">
                  <img
                    className="object-cover w-full h-full transition-all duration-1000 ease-in-out rounded-lg grayscale hover:grayscale-0 hover:scale-110"
                    src={abhishek} />
                </div>
              </div>
              {/* right */}
              <div className="flex flex-col items-end w-1/3 h-[45vh] justify-end col-3">
                <div className="flex flex-col items-end justify-end overflow-hidden availability">
                  <div className="overflow-hidden h-fit hover-effect">
                    <h3 className="py-4 font-mono text-[1.5vw] text-right hover-effect">Available for work</h3>
                  </div>
                  <p className="py-4 text-right text-[#2D2D2D] flex gap-3">
                    <div className="flex overflow-hidden h-fit">
                      <span className="hover:translate-x-9 hover:scale-110">
                        <IoIosArrowRoundForward className="text-[3vw] hover-effect" />
                      </span>
                      <span className="font-mono font-semibold  text-[4vw]">Let's work together</span>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


