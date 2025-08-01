import React from 'react'
import myImg from '../assets/about.png'


function About() {
  return (
    <>
    <div className='bg-white h-screen'>
        <h1 className='font-bold text-5xl ml-120 pt-4'>WHAT WE DO</h1>
        <div className='flex flex-row justify-center items-center  '>
<div className='m-8'><img  className=' h-100 w-500 ' src={myImg} alt="About" /></div>
<div className='ml-9'>
    <h1 className='text-3xl'>About Me</h1>
    <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam distinctio exercitationem incidunt iure, aperiam animi fugiat accusamus, sunt reiciendis quo, sint laudantium nulla eius! Id maxime assumenda ipsum impedit odit!50
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque error minima minus. Ea, non ratione? Officiis, voluptas omnis suscipit eaque necessitatibus repellendus culpa deserunt. In totam nam dolorem illum repellat.
    </p>
    <button className='bg-dblue text-white rounded-full p-2'>Contant Me</button>
</div>
</div> 
      
    </div>
    </>
  )
}

export default About
