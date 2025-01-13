import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkillShowcase = () => {
  const SkillRef = useRef(null);

  useEffect(() => {
    const skillSection = SkillRef.current;
    if (!skillSection) return;

    const skills = skillSection.querySelectorAll(".skill");

    // Set initial styles for skills
    gsap.set(skills, {
      scale: 0.5,
      opacity: 0.5,
      filter: "blur(10px)",
    });

    // Create timeline for animations
    const tl = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: "power2.inOut",
      },
      scrollTrigger: {
        trigger: skillSection,
        start: "0% 80%",
        end: "90% 70%",
        scrub: 1,
        markers: false, // Turn off global markers for cleaner debugging
      },
    });

    // Animate each skill
    skills.forEach((skill) => {
      tl.to(skill, {
        filter: "blur(0px)",
        scale: 1,
        opacity: 1,
      }, "-=0.3"); // Overlap animations for smoother effects
    });

    return () => {
      // Cleanup on unmount
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={SkillRef}
      className="flex items-center justify-center w-full h-screen px-4 text-white bg-black skillShow"
    >
      <div className="flex flex-wrap items-center justify-center w-full gap-8 px-8 py-8 group font-[anzo4]">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Tailwind CSS",
          "Python",
          "Redux",
          "Bootstrap",
          "Shadcn.UI",
          "Chakra.UI",
          "GSAP",
          "Framer Motion",
          "TypeScript",
        ].map((skill, index) => (
          <div
            key={index}
            className={`px-4 py-2  border rounded-full cursor-pointer skill
          group-hover:blur-sm group-hover:opacity-50
          hover:!blur-none hover:!opacity-100  transition-all ease-in-out duration-200
          ${skill === "HTML"
                ? "text-red-400"
                : skill === "CSS"
                  ? "text-cyan-500"
                  : skill === "JavaScript"
                    ? "text-amber-500"
                    : skill === "React.js"
                      ? "text-sky-400"
                      : skill === "Node.js"
                        ? "text-lime-500"
                        : skill === "Express.js"
                          ? "text-yellow-500"
                          : skill === "MongoDB"
                            ? "text-emerald-500"
                            : skill === "Tailwind CSS"
                              ? "text-teal-400"
                              : skill === "Python"
                                ? "text-indigo-500"
                                : skill === "Redux"
                                  ? "text-rose-500"
                                  : skill === "Bootstrap"
                                    ? "text-violet-400"
                                    : skill === "Shadcn.UI"
                                      ? "text-neutral-200"
                                      : skill === "Chakra.UI"
                                        ? "text-orange-500"
                                        : skill === "GSAP"
                                          ? "text-lime-600"
                                          : skill === "Framer Motion"
                                            ? "text-fuchsia-500"
                                            : skill === "TypeScript"
                                              ? "text-blue-500"
                                              : ""
              }`}
          >
            <h2 className="text-4xl uppercase ">{skill}</h2>
          </div>
        ))}
      </div>
    </div>

  );
};

export default SkillShowcase;
