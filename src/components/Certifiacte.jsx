import React from 'react'
import mydevsin from '../assets/devsin.jpeg'
import mygeeky from '../assets/geeky.jpg'
import mygoogle from '../assets/googlecerti.jpg'
import myknowledge from '../assets/knowledge.jpeg'

function Certifiacte() {
  return (
    <>
    <div className='px-10 py-10 md:px-20 md:py-20'>
    <div>
    <h1 className='text-black font-sans font-bold text-3xl sm:text-4xl md:text-5xl flex justify-center pb-10'>Certificates</h1></div>
    <div className='bg-white '>

<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <img src={mygeeky} alt="Certificate" />
      <img src={mygoogle} alt="Certificate" />
      <img src={mydevsin} alt="Certificate" />
      <img src={myknowledge} alt="Certificate" />
      {/* <img src={myCertificate} alt="Certificate" />
      <img src={myCertificate} alt="Certificate" /> */}
      {/* <div className='md:col-span-3 md:grid md:grid-cols-subgrid gap-4 '>
      <img  className=' md:col-start-2' src={myCertificate} alt="Certificate" />
      </div> */}
      
      </div>
      
    </div>
    </div>
    </>
  )
}

export default Certifiacte




