import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import mycalcuator from '../assets/calcuator.png';
import mycolorchange from '../assets/colorchange.png';
import myBMIcalculator from '../assets/BMIcalculator.png';
import mystopwatch from '../assets/stopwatch.png';
import mytodoapp from '../assets/todoapp.png';
import myportfolio from '../assets/portfolio.png';


const projects = [
  {
    title: 'Simple Calculator',
    desc: 'A basic calculator app using HTML, CSS, and JavaScript.',
    image: mycalcuator,
    github: 'https://github.com/azharmehmoood/Simple-Calculator',
  },
  {
    title: 'JS Colour Change',
    desc: 'Click buttons to change background colors dynamically.',
    image: mycolorchange,
    github: 'https://github.com/azharmehmoood/JS-Colour-Change-',
  },
  {
    title: 'BMI Calculator',
    desc: 'Calculate your BMI with this responsive JavaScript app.',
    image: myBMIcalculator,
    github: 'https://github.com/azharmehmoood/BMI-Calculator',
  },
  {
    title: 'Stop Watch',
    desc: 'A simple stopwatch app built with JavaScript.',
    image: mystopwatch,
    github: 'https://github.com/azharmehmoood/Stop-Watch',
  },
  {
    title: 'To-Do App',
    desc: 'Create and manage tasks using localStorage and JS.',
    image: mytodoapp,
    github: 'https://github.com/azharmehmoood/To-Do-App-Using-JS',
  },
  {
    title: 'React Portfolio',
    desc: 'My personal developer portfolio made with React + Tailwind.',
    image : myportfolio,
    github: 'https://github.com/azharmehmoood/Portfolio-in-React',
  },
];

function Portfolio() {
  return (
    <div className="bg-dblue px-10 py-10 md:px-20 md:py-20">
      <h1 className="text-white font-sans font-bold text-3xl sm:text-4xl md:text-5xl flex justify-center pb-10">
         My Projets
      </h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        className="rounded-xl"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl p-5 shadow-lg text-black text-center">
             <img
  src={project.image}
  alt={project.title}
  className="w-full h-64 overflow-y-scroll object-contain rounded-md mb-4"
/>


              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-sm mb-4">{project.desc}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-dblue px-4 py-2 rounded-full text-sm hover:bg-blue-800"
              >
                View on GitHub
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Portfolio;
