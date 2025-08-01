import React,{ useRef } from 'react'
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaPhone, FaEnvelope } from 'react-icons/fa';

import myContact from '../assets/rafiki.png';


  function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f4h2dij', 'template_566dqxp', form.current, 'rIELzr8l_OcNAoZS9')
      .then((result) => {
        alert('Message sent successfully!');
        e.target.reset();
      }, (error) => {
        alert('Failed to send message.');
      });
  };
  return (
    <>
    <div  id="contact" className=''>
     <div className='bg-dblue  px-10 py-10 md:px-20 md:py-20'> 
     <h1 className='text-white font-sans font-bold text-3xl sm:text-4xl md:text-5xl flex justify-center '>Contact With Me</h1>
     <div className=''>
     <div className='flex flex-col-reverse md:flex-row md:justify-center'>
 
     <div className="">
        
      <form ref={form} onSubmit={sendEmail} className="bg-transparent py-1 px-3">

        <div className="mb-6">
          <label className="block text-white text-lg mb-2">Full Name</label>
          <input
           type="text" name="user_name" 

            className="w-full bg-transparent border-b border-white text-white outline-none py-2" required />
        </div>
        <div className="mb-6">
          <label className="block text-white text-lg mb-2">E-mail</label>
          <input
            type="email" name="user_email"
            className="w-full bg-transparent border-b border-white text-white outline-none py-2" required/>
        </div>
<div className="mb-6">
          <label className="block text-white text-lg mb-2">Message</label>
          <textarea name="message" 
            className="w-full bg-transparent border-b border-white text-white outline-none py-2 resize-none" required
    
            // rows="3"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-white text-dblue rounded-full text-xs md:text-sm px-3 py-2 w-full md:w-80 transition duration-300 hover:bg-gray-100"
        >
          Send 
        </button>
      </form>
    </div>

    <div className=' flex justify-center md:flex md:justify-end'>

    <img className=" max-w-[60%] md:w-full md:max-w-[80%] md:h-auto md:object-contain " src={myContact} alt="Contact" />
    </div>
    </div>

     </div>
     
<footer className="bg-dblue text-white text-center py-6 mt-10">
  <div className="flex justify-center items-center gap-4 mb-2">
    <FaPhone /> <span className="text-sm">+92-300-121467679</span>
    <FaEnvelope /> <span className="text-sm">mehmoodazhar6767@gmail.com</span>
  </div>

  <div className="flex justify-center gap-6 text-xl mt-4">
    <a href="https://github.com/azharmehmoood" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
      <FaGithub />
    </a>
    <a href="https://www.linkedin.com/in/azhar-mehemood/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
      <FaLinkedin />
    </a>
    <a href="https://www.instagram.com/devversebyazhar" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
      <FaInstagram />
    </a>
    <a href="https://www.youtube.com/@DevverseByAzhar" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
      <FaYoutube />
    </a>
  </div>

  <p className="text-xs mt-4 text-gray-300">© 2025 Azhar Mehmood. All rights reserved.</p>
</footer>

     </div>
      </div>
     
    </>
)}

export default Contact
