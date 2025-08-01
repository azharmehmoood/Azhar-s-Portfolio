import React from 'react'
import myImage from '../assets/mypic.png';
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <div className='flex flex-col bg-gradient-to-r from-custom-blue via-custom-dark to-custom-indigo  px-10 md:px-20 text-white pt-5'>
    <div className='flex w-full justify-between '>
        <p className='text-white text-3xl font-bold  '>AM.</p>
        <div className='flex '>
  <a href="https://www.facebook.com/share/1CNvyJsRUb/?mibextid=wwXIfr" target='blank' class="text-white hover:text-gray-500">
            <span class="sr-only">Facebook</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
            </svg>
          </a>
         
    
          <a href="https://github.com/azharmehmoood" target='blank' class="ml-6 text-white  hover:text-gray-500">
            <span class="sr-only">GitHub</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
            </a>
     
    <a href="https://www.linkedin.com/in/azhar-mehemood/" target='blank' className="ml-6 text-white  hover:text-gray-500">
      <span className="sr-only">LinkedIn</span>
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M20.452 20.452h-3.915v-5.611c0-1.34-.025-3.067-1.871-3.067-1.872 0-2.159 1.462-2.159 2.973v5.705H8.591V9h3.757v1.561h.053c.524-.992 1.804-2.034 3.713-2.034 3.969 0 4.697 2.615 4.697 6.017v5.908zM5.337 7.433c-1.259 0-2.28-1.02-2.28-2.28s1.021-2.28 2.28-2.28 2.28 1.02 2.28 2.28-1.021 2.28-2.28 2.28zM7.265 20.452H3.41V9h3.855v11.452z"
          clipRule="evenodd"
        />
      </svg>
    </a>
     </div>
        </div>
<div className="flex flex-col-reverse sm:flex-row w-full justify-between items-center pb-5 md:pb-0">
<div className='flex flex-col  justify-center'>

<h1 className="text-white text-4xl font-bold ">
     
      Hi, I’m  Azhar Mehmood — a
    </h1>
  <TypeAnimation
  sequence={[
    'Student Developer 💻',
    2000,
    'React & Tailwind Enthusiast 🚀',
    2000,
    'MERN Stack Learner 🌐',
    2000,
    'Building Real-World Projects 🔧',
    2000,
    'Future Freelancer & Full Stack Dev 💼',
    2000,
  ]}
  wrapper="span"
  speed={50}
  className="text-white text-2xl sm:text-3xl md:text-4xl pb-2"
  repeat={Infinity}
/>
 

    <button className="text-sm text-black bg-white rounded-full px-3 py-1 max-w-28">
  <a href="/Azhar's Resume(1).pdf" target="_blank" rel="Resume">
    <b>Resume</b>
  </a>
</button>

</div>
<img
  className="w-[60%] sm:w-[70%] md:w-[50%] lg:w-[30%] max-w-lg h-auto object-contain "
  src={myImage}
  alt="Portfolio"
/>

{/* <img className="w-full max-w-[30%] h-auto object-contain" src={myImage} alt="Portfolio" /> */}
</div>
</div>
  )
}

export default Home






