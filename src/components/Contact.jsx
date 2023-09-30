import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FiMail } from "react-icons/fi"

const Contact = () => {
  return (
    <div className='flex lg:flex-row flex-col  justify-evenly py-20'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-5xl font-bold lg:text-start text-center dark:text-white'>Get In <span className='text-[#d25e7f]'>Touch</span></h1>
        <div className='flex gap-5 items-center justify-center'>
          <FiMail color='#3086a1'/>
          <a href='mailto: ' className='text-cyan-800 dark:text-cyan-500'>sabyasachi@gmail.com</a>
        </div>
      </div>
      <div className='flex gap-10 lg:m-0 my-20 dark:bg-gray-200 rounded-2xl p-2 mx-10 items-center justify-center'>
        <a href="https://www.linkedin.com/in/fobic/"><FaLinkedin size={40} color='#0077bd'/></a>
        <a href="https://twitter.com/fobic"><FaTwitter size={40} color='#3086a1'/></a>
        <a href="https://github.com/mixter3011"><FaGithub size={40} /></a>
      </div>
    </div>
  )
}

export default Contact
