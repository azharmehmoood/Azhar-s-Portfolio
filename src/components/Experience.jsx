import React from 'react'
import JsImage from '../assets/js.svg'
import ReactImage from '../assets/reactpic.svg'
import CppImage from '../assets/cpp.svg'
import JavaImage from '../assets/java.svg'
import SqlImage from '../assets/sql.svg'
import NodeImage from '../assets/node.svg'
function Experience() {
  return (
<div className='bg-dblue px-10 py-10 md:px-20 md:py-20 '>
{/* <h1 className='text-white  font-sans font-bold text-5xl flex justify-center pt-20'>Experience</h1> */}
<h1 className="text-white font-sans font-bold text-3xl sm:text-4xl md:text-5xl flex justify-center ">
  Experience
</h1>

<div className='flex flex-col md:flex-row justify-center py-20'>




<div className='flex justify-evenly '>
  <div className='flex flex-col gap-2 ' >
<img src={JsImage} className='size-10 md:size-14 lg:size-16' />
<div className='bg-gray-500 w-full h-2  rounded-lg overflow-hidden'>
<div className='bg-sky-500 w-3/4 h-2' />
</div>
</div>

<div className='flex flex-col gap-2 md:pl-15'>
<img src={ReactImage} className='size-10 md:size-14 lg:size-16'/>
<div className='flex '>
<div className='bg-sky-500 w-full h-2  rounded-s-lg overflow-hidden '>
</div>
<div className='bg-gray-500 w-3/4 h-2 rounded-e-lg'></div>
</div>
</div>

<div className='flex flex-col gap-2 md:pl-15 '>
<img src={CppImage} className='size-10 md:size-14 lg:size-16'/>
<div className='flex '>
<div className='bg-sky-500 w-full h-2  rounded-s-lg overflow-hidden '>
</div>
<div className='bg-gray-500 w-3/4 h-2 rounded-e-lg'></div>
</div>
</div>
</div>




<div className='flex justify-evenly md:pl-15 pt-10 md:pt-0'>
<div className='flex flex-col gap-2'>
<img src={JavaImage} className='size-10 md:size-14 lg:size-16'/>
<div className='flex '>
<div className='bg-sky-500 w-full h-2  rounded-s-lg overflow-hidden '>
</div>
<div className='bg-gray-500 w-3/4 h-2 rounded-e-lg'></div>
</div>
</div>


<div className='flex flex-col gap-2 md:pl-15'>
<img src={SqlImage} className='size-10 md:size-14 lg:size-16'/>
<div className='flex '>
<div className='bg-sky-500 w-full h-2  rounded-s-lg overflow-hidden '>
</div>
<div className='bg-gray-500 w-3/4 h-2 rounded-e-lg'></div>
</div>
</div>


<div className='flex flex-col gap-2 md:pl-15'>
<img src={NodeImage} className='size-10 md:size-14 lg:size-16'/>
<div className='flex '>
<div className='bg-sky-500 w-full h-2  rounded-s-lg overflow-hidden '>
</div>
<div className='bg-gray-500 w-3/4 h-2 rounded-e-lg'></div>
</div>
</div>
</div>


</div>
</div>
  
    
  )
}

export default Experience
