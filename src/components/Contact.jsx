import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Submitbtn from './Submitbtn';
import { motion } from 'framer-motion';
import AnimatedText from './Anittext';
import Anitext2 from './Anitext2';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.message) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    // Send data to the emailJS service
    emailjs
      .sendForm('service_4zk776w', 'template_ukouwoa', form.current, {
        publicKey: 'gKXP2yubYylRkAWIu',
      })
      .then(
        () => {
          setIsFormSubmitted(true);
          setLoading(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setLoading(false);
        }
      );
  };

  return (
    <motion.div
      className="flex items-center justify-center w-full h-screen text-white bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div id='contact' className="w-full max-w-3xl p-8 mx-auto bg-black rounded-lg shadow-lg">
        <h2 className="mb-8 text-4xl font-semibold text-center"><AnimatedText /></h2>

        {/* Check if form is submitted */}
        {!isFormSubmitted ? (
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <label htmlFor="user_name" className="mb-2 text-lg">Your Name</label>
              <input
                type="text"
                name="name"
                required
                id="user_name"
                className="p-4 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
              />
              {formErrors.name && <p className="text-sm text-red-500">{formErrors.name}</p>}
            </motion.div>

            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <label htmlFor="user_email" className="mb-2 text-lg">Your Email</label>
              <input
                type="email"
                name="email"
                required
                id="user_email"
                className="p-4 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
              />
              {formErrors.email && <p className="text-sm text-red-500">{formErrors.email}</p>}
            </motion.div>

            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <label htmlFor="message" className="mb-2 text-lg">Your Message</label>
              <textarea
                name="message"
                id="message"
                required
                className="p-4 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your message"
                rows="5"
              ></textarea>
              {formErrors.message && <p className="text-sm text-red-500">{formErrors.message}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Submitbtn />
            </motion.div>
          </form>
        ) : (
          // <div className="text-center">
          //   <motion.h3
          //     className="text-3xl font-semibold text-green-400"
          //     initial={{ opacity: 0 }}
          //     animate={{ opacity: 1 }}
          //     transition={{ duration: 1 }}
          //   >
          //     Thank you for getting in touch! ❤️💗
          //   </motion.h3>
          // </div>
          <Anitext2 />
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
