import React, { useRef, useLayoutEffect } from "react";
import logo1 from "../assets/Img/img1.png";
import logo2 from "../assets/Img/img2.png";
import logo3 from "../assets/Img/img3.png";
import logo4 from "../assets/Img/img4.png";
import logo5 from "../assets/Img/img5.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);

const Help = () => {
  const containerRef = useRef(null);
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const imageBorder = container.querySelector(".imageBorder");
    const h1 = container.querySelector(".uper-container h1");
    const help = container.querySelector(".uper-container .help");
    const scalableImages = imageBorder.querySelectorAll(".scalableImg");
    const cardImage = imageBorder.querySelector(".cardImage");
    const cardImage1 = imageBorder.querySelector(".cardImage1");
    const cardImage2 = imageBorder.querySelector(".cardImage2");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageBorder,
        pin: true,
        start: "top top",
        end: "+=150%",
        scrub: 1,
        anticipatePin: 1,

      },
      defaults: {
        ease: "none",
      },
    });
    const split = new SplitType(h1, {
      types: "words", // Split into characters
      tagName: "span",
      charClass: "wordszoom-section", // Use span elements
    });
    const zoomspan = h1.querySelectorAll("span")
    gsap.from(zoomspan, {
      scale: 0,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      delay: 0.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: container,
        start: "0% 50%",
        end: "20% 50%",
        scrub: 1,
      }
    })
    tl.to(container, { backgroundColor: "#f0f0f0", delay: 0.3 }, "start")
      .to(h1, { scale: 5, opacity: 0 }, "start")
      .to(scalableImages[0], { scale: 10, x: -1500 }, "start")
      .to(scalableImages[1], { scale: 10, x: -2500 }, "start")
      .to(scalableImages[2], { scale: 10, x: -2000 }, "start")
      .to(scalableImages[3], { scale: 10, x: -3000 }, "start")
      .to(scalableImages[4], { scale: 10, x: -2000 }, "start")
      .to(cardImage, { opacity: 1, delay: 2, scale: 2, filter: "blur(0px)", duration: 0.5 }, "start")
      .to(scalableImages, { opacity: 0 }).to(cardImage, {
        scale: 20,
        opacity: 0,
        filter: "blur(10px)"
      }).to(cardImage1, {
        scale: 3,
        opacity: 1,
        filter: "blur(0px)",

      }).to(cardImage1, { scale: 20, opacity: 0, filter: "blur(10px)" }).to(cardImage2, {
        scale: 3,
        opacity: 1,
        filter: "blur(0px)",
      }).to(cardImage2, {
        scale: 20,
        opacity: 0,     
        y: -300,
      })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-[#DFDFDA] px-4 ">
      <div className="absolute top-0 left-0 flex flex-col justify-center w-full h-screen uper-container">
        <span className="px-12 py-2 text-2xl help">(Motive)</span>
        <h1 className="px-12 py-2 text-[2vw] leading-[80px] font-bold sm:text[40px] sm:leading-[30px] md:text-[40px] md:leading-[50px] lg:text-[30px] lg:leading-[40px] xl:text-[40px] xl:leading-[40px] 2xl:text-[5vw] 2xl:leading-[90px]  ">
          NOT FOR THE SPOTLIGHT, BUT FOR THE CHALLENGE OF CRAFTING THE EXTRAORDINARY.
          I am a Full-Stack MERN Developer, Web Animator, and SEO Specialist. Bringing ideas to life with dynamic web animations and SEO-friendly solutions that empower businesses and captivate users.
        </h1>
      </div>
      <div className="relative flex items-center justify-center w-full h-screen overflow-hidden imageBorder font-[anzo5]">
        <img
          src={logo1}
          alt=""
          id="scalableImg1"
          className="scalableImg absolute w-64 top-[10%] left-[9%]"
        />
        <img
          src={logo2}
          alt=""
          id="scalableImg2"
          className="scalableImg absolute w-64 top-[35%] left-[30%]"
        />
        <img
          src={logo3}
          alt=""
          id="scalableImg3"
          className="scalableImg absolute w-64 top-[60%] left-[15%]"
        />
        <img
          src={logo4}
          alt=""
          id="scalableImg4"
          className="scalableImg absolute w-64 top-[60%] left-[70%]"
        />
        <img
          src={logo5}
          alt=""
          id="scalableImg5"
          className="scalableImg absolute w-64 top-[30%] left-[55%]"
        />
        <div className="absolute flex items-center justify-center w-full h-screen text-[1vw] font-bold scale-0 opacity-0 cardImage blur-sm ">
          CRAFTING SCALABLE SOLUTIONS THAT DRIVE GROWTH
        </div>
        <div className="absolute flex items-center justify-center w-full h-screen text-[1vw] font-bold scale-0 opacity-0 cardImage1 blur-sm ">
          TRANSFORMING CODE INTO ART.
        </div>
        <div className="absolute flex items-center justify-center w-full h-screen text-[1vw] font-bold scale-0 opacity-0 cardImage2 blur-sm ">
          CREATING IMPACT THROUGH INNOVATION.
        </div>
      </div>
    </div>
  );
};

export default Help;
