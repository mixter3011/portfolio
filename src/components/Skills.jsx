import React from 'react'

const Skills = () => {
  return (
    <section id='skills'>
      <div className='mt-20'>
        <h1 className='text-5xl font-bold text-center dark:text-white'>My <span className='text-[#d25e7f]'>Skills</span></h1>
        <div className='flex justify-center'>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 lg:px-40 my-20">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className='drop-shadow-lg'><img src="https://img.icons8.com/color/48/000000/javascript.png" width={65} /></a>
            <a href="https://www.w3.org/html/" target="_blank" className='drop-shadow-lg'><img src="https://img.icons8.com/color/48/000000/html-5.png" width={65} /></a>
            <a href="https://www.w3schools.com/css/" target="_blank" className='drop-shadow-lg'><img src="https://img.icons8.com/color/48/000000/css3.png" width={65} /></a>
            <a href="https://www.python.org" target="_blank" className='drop-shadow-lg'> <img src="https://img.icons8.com/color/48/000000/python.png" width={65} /> </a>
            <a href="https://www.python.org" target="_blank" className='drop-shadow-lg'> <img src="https://img.icons8.com/color/48/000000/c-programming.png" width={65} /> </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
