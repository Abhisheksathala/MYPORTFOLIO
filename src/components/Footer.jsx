'use client';
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from './Buttion2'
import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { Link } from 'react-router-dom';
const pathArr = [
  'M55.7447 0H15.3191L0 45.5836H18.2979L4.25532 81.7065H16.5957L5.95745 126L34.4681 82.9966L45.9574 126H120V0H104.681L104.255 110.519H58.2979L45.9574 64.5051H28.0851L42.9787 39.1331L61.7021 106.648H99.5745V0H80V94.6075H76.1702L55.7447 0Z',
  'M167.002 107.746C175.137 107.746 182.109 104.758 186.426 97.4531H207.178C200.371 114.719 186.592 125.676 167.666 125.676C143.594 125.676 124.834 106.916 124.834 82.8438C124.834 59.6016 143.262 39.5137 166.836 39.5137C192.402 39.5137 210 59.9336 210 84.6699C210 85.998 209.834 87.3262 209.834 88.6543H144.424C145.752 101.271 154.717 107.746 167.002 107.746ZM166.836 57.1113C156.543 57.1113 147.744 63.4199 145.088 73.5469H189.414C186.094 62.4238 178.291 57.1113 166.836 57.1113Z',
  'M244.512 60.2656L261.5 41L294 0V32L255.137 78.6934L291.494 125.344C291.494 125.51 291.66 125.51 291.66 125.676L291.826 125.842H266.758C266.758 125.842 266.758 125.842 266.592 125.676L244.346 97.1211H240.693L205 136.998H186.5L230.068 78.6934L199.5 40H225L225.254 40.3438L240.693 60.2656H244.512Z',
  'M337.978 126H296.142V0H315.898V39.0137H343L339 54.4531H315.898V109.072H337.978V126Z',
  'M455.019 39.3457H426.299C419.492 29.8828 409.697 25.4004 398.076 25.4004C377.49 25.4004 361.885 42.998 361.885 63.252C361.885 83.6719 376.826 101.934 398.076 101.934C409.033 101.934 419.16 98.2812 425.469 89.1504H454.189C443.232 113.057 424.805 125.84 398.408 125.84C363.047 125.84 337.48 97.2852 337.48 62.7539C337.48 29.2188 365.039 1.32812 398.574 1.32812C425.469 1.32812 443.896 15.1074 455.019 39.3457Z',
  'M495.693 39.6777C519.433 39.6777 539.023 58.1055 539.023 82.0117C539.023 106.748 521.094 125.84 496.025 125.84C472.119 125.84 453.359 106.25 453.359 82.5098C453.359 58.9355 472.285 39.6777 495.693 39.6777ZM496.191 106.914C511.133 106.914 519.267 96.123 519.267 81.8457C519.267 68.2324 509.805 58.4375 496.191 58.4375C482.246 58.4375 472.949 68.7305 472.949 82.5098C472.949 96.7871 481.25 106.914 496.191 106.914Z',
  'M539.023 82.5098C539.023 58.9355 557.617 39.6777 581.357 39.6777C590.488 39.6777 599.453 42.168 606.592 48.3105V0H625.185V125.84H606.592V116.543C599.287 122.354 590.488 125.674 581.357 125.674C557.119 125.674 539.023 106.25 539.023 82.5098ZM582.685 58.6035C569.238 58.6035 558.945 69.5605 558.945 82.8418C558.945 96.9531 569.736 106.748 583.515 106.748C596.963 106.748 605.762 95.791 605.762 83.0078C605.762 69.5605 596.465 58.6035 582.685 58.6035Z',
  'M666.76 108.138C674.817 108.138 681.722 105.162 685.997 97.8846H706.548C699.807 115.085 686.161 126 667.418 126C643.578 126 625 107.312 625 83.3308C625 60.177 643.249 40.1654 666.596 40.1654C691.915 40.1654 709.343 60.5077 709.343 85.15C709.343 86.4731 709.179 87.7962 709.179 89.1192H644.4C645.716 101.688 654.594 108.138 666.76 108.138ZM666.596 57.6962C656.402 57.6962 647.689 63.9808 645.058 74.0693H688.956C685.668 62.9885 677.94 57.6962 666.596 57.6962Z',
  'M775.138 110.619V126H700.166V114.092L747.517 55.3808H702.633V40H772.508V51.9077L724.17 110.619H775.138Z',
];

const Footer = () => {
  const container = useRef(null);
  const [openPopup, setOpenPopUp] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    visible: (i) => ({
      translateY: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.4,
        delay: i * 0.03,
      },
    }),
    hidden: { translateY: 200 },
  };

  const handleNewsLetterData = (e) => {
    e.preventDefault();
    const target = e.target;
    const formData = new FormData(target);
    const clientEmail = formData.get('newsletter_email');
    setOpenPopUp(true);
    target.reset();
    if (setOpenPopUp) {
      setTimeout(() => {
        setOpenPopUp(false);
      }, 2000);
    }
  };

  return (
    <>
      <div
        className="relative h-full pt-8 text-white bg-black sm:pt-14"
        ref={container}
        id="footer-container">
        <div className="px-4 mx-auto sm:container">
          <div className="justify-between w-full md:flex">
            <div id="newsletter-section">
              <h1 className="text-2xl font-semibold md:text-4xl">
                Let&lsquo;s do great work together
              </h1>
            </div>
            <div className="flex gap-10" id="sitemap-section">
              <ul>
                <li className="pb-2 text-2xl font-semibold text-black">
                  SITEMAP
                </li>
                <li className="text-xl font-medium">
                  <a href="#home">Home</a>
                </li>
                <li className="text-xl font-medium">
                  <a href="#about">About Me</a>
                </li>
                <li className="text-xl font-medium">
                  <a href="#Services">Services</a>
                </li>
                <li className="text-xl font-medium">
                  <a href="#projects">Projects</a>
                </li>
                <li className="text-xl font-medium">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <ul id="social-links-section">
                <li className="pb-2 text-2xl font-semibold text-black">
                  SOCIAL
                </li>
                <li className="text-xl font-medium">
                  <a
                    href="https://www.linkedin.com/in/abhishek-sathala-64566625a"
                    target="_blank"
                    className="underline">
                    <Button
                      id="linkedin-button"
                      title="LinkedIn"
                      leftIcon={<FaLinkedin className="mr-2 text-blue-600" />}
                      rightIcon={null}
                    // containerClass="bg-blue-100 hover:bg-blue-200 text-blue-600"
                    />
                  </a>
                </li>
                <li className="text-xl font-medium">
                  <a
                    href="https://github.com/Abhisheksathala"
                    target="_blank"
                    className="underline">
                    <Button
                      id="github-button"
                      title="GitHub"
                      leftIcon={<FaGithub className="mr-2 text-gray-800" />}
                      rightIcon={null}
                    // containerClass="bg-gray-100 hover:bg-gray-200 text-gray-800"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-gray-200 border-y-2 md:py-4" id="logo-section">
            <motion.svg
              width="776"
              ref={ref}
              height="137"
              viewBox="0 0 776 137"
              fill="none"
              className="w-full h-20 px-2 sm:h-fit md:px-8 footer-logo"
              xmlns="http://www.w3.org/2000/svg"
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}>
              {pathArr.map((path, index) => {
                return (
                  <motion.path
                    key={index}
                    custom={index}
                    variants={variants}
                    d={path}
                    fill="#3E7AEE"
                  />
                );
              })}
            </motion.svg>
          </div>
          <div className="flex flex-col-reverse justify-between gap-3 py-2 md:flex-row">
            <span className="font-medium">
              &copy; 2023 NextCodez. All Rights Reserved.
            </span>
            <a href="#privacy-policy-section" className="font-semibold">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
