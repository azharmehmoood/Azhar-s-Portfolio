import React from 'react'
import myImg from '../assets/pana.png'  
function About() {  
  return (
    <>
<div className=' px-20 py-20'>
<h1 className=' text-black font-sans font-bold text-3xl sm:text-4xl md:text-5xl flex justify-center pb-10 '>WHAT I DO</h1>
<div className=' flex flex-col lg:flex-row'>
{/* <img  className='w-400 object-contain ml-20'  src={myImg} alt="About" /> */}
<img
  className="w-[60%] max-w-[300px] object-contain mx-auto md:ml-20 sm:w-[20%] md:w-[50%] lg:w-[80%]"
  src={myImg}
  alt="About"
/>
<div className='sm:px-20'>
<h1 className='text-3xl font-bold'>About Me</h1>
<p className=' sm:py-0 md:py-2 lg:py-5 overflow-hidden'>
   I’m Azhar Mehmood,  software development student in my 7th semester at the University of Education, Township Campus, Lahore.

I’m currently learning full stack development using React, Node.js, and MongoDB, and also exploring Android development with Kotlin. I’ve completed a MERN stack internship at GeekyBugs and actively participate in tech events like Devathon 24 and GDG Cloud Lahore.

My goal is to become a full stack freelance developer, build real-world projects, and grow my personal brand as a developer.

Outside of code, I love attending tech meetups, exploring video editing, and sharing my journey through DevverseByAzhar on YouTube and Instagram.

    </p>
   <a href="#contact">
  <button className='bg-dblue text-white rounded-full p-2 px-3 py-1 max-w-28'>Contact Me</button>
</a>

    </div>
</div>
</div>
</>
  )
}

export default About
