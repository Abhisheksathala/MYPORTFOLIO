import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger)

const Developer = () => {

  const devloperRef = useRef(null)


  useGSAP(() => {

    const devloper = devloperRef.current;

    const rotateText = devloper.querySelectorAll('.rotateText')

    gsap.from(rotateText, {
      transform: 'rotateX(80deg)',
      duration: 1,
      opacity: 0,
      ease: 'power2.out',
      stagger: 0.5,
      scrollTrigger: {
        trigger: devloper,
     start: 'top -60%',
        end: '150% 30%',
        scrub: 1,
       
      },
    })

  }, [])

  return (
    <div ref={devloperRef} className='py-32 px-6 text-center text-[#C9C9C0] text-[15vw] bg-black relative'>
      
      <div className="origin-[100% 70%] rotateText">
        <h1 className="font-[anzo5] uppercase whitespace-nowrap tracking-tight leading-[10vw] ">Hire Me!</h1>
      </div>
      <div className="origin-[100% 70%] rotateText">
        <h1 className="font-[anzo5] uppercase whitespace-nowrap tracking-tight leading-[10vw">Let's Make it</h1>
      </div>
      <div className="origin-[100% 70%] rotateText">
        <h1 className="font-[anzo5] uppercase whitespace-nowrap tracking-tight leading-[10vw]"> Happen!</h1>
      </div>
      
    </div>



  )
}

export default Developer