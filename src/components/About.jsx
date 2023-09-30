import React from 'react'

const About = () => {
  return (
    <section id='about'>
      <div className='flex lg:flex-row flex-col justify-between items-center lg:px-40 drop-shadow-lg my-10 dark:text-white'>
        <div className='flex flex-col  items-center gap-10'>
          <h1 className='text-5xl font-bold' >About <span className='text-[#d25e7f]'>Me</span></h1>
          {/* put your image here  */}
          <img src="" alt="" className='rounded-full' />
        </div>
        <div className='text-lg lg:w-1/2 w-2/3'>
          <p>
            Sabyasachi is a passionate and versatile professional coder and developer with a diverse skill set in programming languages such as Python, C, C++, JavaScript, CSS, and HTML. His journey in the tech world has been enriched with valuable experiences, making a significant impact on both his career and the industry.
          </p>

          <p className='text-cyan-700 dark:text-cyan-500 mt-5'>He kickstarted his career at IBM as a junior developer through an internship program, where he gained hands-on experience and honed his coding skills. This opportunity allowed him to collaborate with experts and dive deep into the world of software development.

          </p>
        </div>
      </div>
    </section>
  )
}

export default About
