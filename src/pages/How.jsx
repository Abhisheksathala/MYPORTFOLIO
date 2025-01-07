import React from 'react'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger)


const How = () => {

  const firstREF = useRef(null)
  const servTextREF = useRef(null)
  const servicesREF = useRef(null)

  // useGSAP(() => setupAnimations({ firstREF, servTextREF, servicesREF }), []);

  useGSAP(() => {

    const first = firstREF.current;
    const servText = servTextREF.current;
    const services = servicesREF.current;

    const texts = first.querySelectorAll('span')

    texts.forEach((text) => {
      gsap.set(text, {
        y: "100%",
        opacity: 0,
      })
    })

    gsap.to(texts, {
      y: "0%",
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",

      scrollTrigger: {
        trigger: first,
        scrub: 1,
        start: 'top 100%',
        ToggleActions: 'play none none none'

      }
    })

    const servText2 = servText.querySelector('.serviText2 p');

    console.log(servText2);

    if (servText2) {
      const textContent = servText2.textContent;
      const split = textContent.split(' ');
      servText2.innerHTML = split.map((word) => {
        return `<span class="word inline-block translate-y-full opacity-0">${word}</span>`
      }).join(' ');
      const words = servText2.querySelectorAll('span');
      words.forEach((word) => {
        gsap.set(word, {
          y: "100%",
          opacity: 0,
        })
      });
      gsap.to(words, {
        y: "0%",
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",

        scrollTrigger: {
          trigger: first,
          scrub: 1,
          start: 'top 100%',
          ToggleActions: 'play none none none'

        }
      })
    } else {
      console.error('Element not found or invalid selector.');
    }

    const ek = services.querySelector('.ek')
    const h2 = services.querySelector('.ek h2')
    const h3 = services.querySelector('.ek h3')
    const servecssSpan = services.querySelectorAll('.ek p span')
    const servecesslist = services.querySelectorAll('.ek .list .listitem  span')
    console.log(servecesslist);
    gsap.to(h2, {
      y: "0%",
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: services,
        scrub: 1,
        start: '-2% 100%',
        ToggleActions: 'play none none none'
      }
    })
    gsap.to(h3, {
      y: "0%",
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: services,
        scrub: 1,
        start: '-3% 100%',
        ToggleActions: 'play none none none'
      }
    })
    servecssSpan.forEach((span) => {
      gsap.set(span, {
        y: "500%",
        opacity: 0,
      })
    })
    gsap.to(servecssSpan, {
      y: "0%",
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: services,
        
        scrub: 0.1,
        start: 'top 100%',
        ToggleActions: 'play none none none'
      }
    })

    gsap.to(servecesslist, {
      y: "0%",
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: services,
        scrub: 1,
        start: 'top 100%',
        ToggleActions: 'play none none none'
      }
    })

    const SEO = services.querySelector('.seo')
    const two = services.querySelector('.two')

    gsap.to(SEO, {
      y: "0%",
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      delay: 0.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: services,
        scrub: 1,
        start: 'top 100%',
        ToggleActions: 'play none none none'
      }
    })
    gsap.to(two, {
      y: "0%",
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      delay: 0.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: services,
        scrub: 1,
        start: 'top 100%',
        ToggleActions: 'play none none none'
      }
    })




  }, [])


  return (
    //  page 2 ------------>
    <>
      <div id="Services" className="w-full min-h-screen px-6 py-6 bg-black rounded-t-2xl rounded-l-2xl">
        {/*  */}
        <div ref={firstREF} className="text-white">
          <h2 className="flex-col inline-block gap-4 ml-0 text-4xl font-bold uppercase sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            {["How", "Can", "I", "Help", "You", "/"].map((text, index) => (
              <span key={index} className="inline-block translate-y-full opacity-0">{text}&nbsp;</span>
            ))}
          </h2>
        </div>
        {/*  */}
        <div ref={servTextREF} className="flex items-start justify-end w-full gap-12 py-12 text-white servText">
          <p className="text-xl text-gray-200 uppercase sm:text-3xl md:text-base lg:text-xl xl:text-2xl 2xl:text-base para">(services)</p>
          <div className="w-1/3 text-base sm:text-base md:text-[0.9rem] lg:text-[1.2rem] serviText2 overflow-hidden">
            <p className="overflow-hidden">
              A website developed to captivate and convert can elevate your brand to new heights. My custom-coded sites are meticulously crafted to reflect your unique identity, delivering seamless experiences with a focus on animation—keeping your audience engaged and returning.
            </p>
          </div>
        </div>



        {/* service section */}
        <div ref={servicesREF} className="w-full py-12 text-white services">
          {/*  */}
          <div className="flex items-start border-t-2 border-[#393639] pt-9 px-4 one ek bg-black">
            <div className="w-1/2  oneL overflow-hidden h-[5vh] ">
              <h2 className="inline-block overflow-hidden text-4xl font-bold translate-y-full opacity-0">(01)</h2>
            </div>
            <div className="relative flex flex-col w-1/2 oneR">
              <div className="flex items-start overflow-hidden h-fit">
                <h3 className="inline-block overflow-hidden text-4xl font-bold translate-y-full">Web Development</h3>
              </div>
              <p className="relative w-1/2 pt-4 overflow-hidden sm:w-2/3">
                <span className="block overflow-hidden translate-y-full">
                  A website developed to captivate and convert can elevate your brand to
                </span>
                <span className="block overflow-hidden translate-y-full">
                  new heights. My custom-coded sites are meticulously crafted to
                </span>
                <span className="block overflow-hidden translate-y-full">
                  reflect your unique identity, delivering seamless experiences
                </span>
                <span className="block overflow-hidden translate-y-full">
                  with a focus on animation—keeping your audience engaged and returning.
                </span>
              </p>

              <div className="flex flex-col items-start w-full gap-5 py-4 list">
                <div className="items-start justify-center inline-block gap-2 overflow-hidden text-2xl listitem">
                  <span className="inline-block overflow-hidden text-2xl translate-y-full opacity-0">01</span>
                  <span className="inline-block overflow-hidden text-3xl font-bold translate-y-full opacity-0">  CMS Integration</span>
                </div>
                <div className="items-start justify-center inline-block gap-2 overflow-hidden text-2xl listitem">
                  <span className="inline-block overflow-hidden text-2xl translate-y-full opacity-0">02</span>
                  <span className="inline-block overflow-hidden text-3xl font-bold translate-y-full opacity-0">   Motion & Animations</span>
                </div>
                <div className="items-start justify-center inline-block gap-2 overflow-hidden text-2xl listitem">
                  <span className="inline-block overflow-hidden text-2xl translate-y-full opacity-0">01</span>
                  <span className="inline-block overflow-hidden text-3xl font-bold translate-y-full opacity-0">  MERN Stack Devloper</span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex items-start border-t-2 border-[#393639] pt-9 px-4 one ek bg-black">
            <div className="w-1/2  oneL overflow-hidden h-[5vh] ">
              <h2 className="inline-block overflow-hidden text-4xl font-bold translate-y-full opacity-0 two">(02)</h2>
            </div>
            <div className="relative flex flex-col w-1/2 oneR">
              <div className="flex items-start overflow-hidden h-fit">
                <h3 className="inline-block overflow-hidden text-4xl font-bold translate-y-full opacity-0 seo">SEO</h3>
              </div>
              <p className="w-1/2 pt-4 overflow-hidden sm:w-2/3">
                <span className="inline-block overflow-hidden translate-y-full">Your website deserves to be seen. I optimize your online presence to elevate  </span>
                <span className="inline-block overflow-hidden translate-y-full">your visibility in search results, helping your business attract the right </span>
                <span className="inline-block overflow-hidden translate-y-full">audience and stand out in the digital landscape. </span>
              </p>
              <div className="flex flex-col items-start w-full gap-5 py-4 list">
                <div className="items-start justify-center inline-block gap-2 overflow-hidden text-2xl listitem">
                  <span className="inline-block overflow-hidden text-2xl translate-y-full opacity-0">01</span>
                  <span className="inline-block overflow-hidden text-3xl font-bold translate-y-full opacity-0">  Technical SEO</span>
                </div>
                <div className="items-start justify-center inline-block gap-2 overflow-hidden text-2xl listitem">
                  <span className="inline-block overflow-hidden text-2xl translate-y-full opacity-0">02</span>
                  <span className="inline-block overflow-hidden text-3xl font-bold translate-y-full opacity-0">
                    On-Page Optimization</span>
                </div>
                <div className="items-start justify-center inline-block gap-2 overflow-hidden text-2xl listitem">
                  <span className="inline-block overflow-hidden text-2xl translate-y-full opacity-0">01</span>
                  <span className="inline-block overflow-hidden text-3xl font-bold translate-y-full opacity-0"> SEO Audits & Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default How