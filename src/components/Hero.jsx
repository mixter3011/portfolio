import React from 'react'
import Button from './Button'
import { motion } from "framer-motion"
import ai from "../assets/ai.png"

const Hero = () => {
  return (
    <section id='home' className='h-screen '>
      <div className='flex lg:flex-row flex-col items-center justify-between lg:p-40 p-20 gap-20 drop-shadow-lg '>
        <div className='flex flex-col gap-6 dark:text-white'>
          <h1 className='lg:text-7xl text-5xl font-black '>Hey, <br />I'm <span className='text-[#d25e7f]'>Sabyasachi Chakraborty</span></h1>
          <p className='font-bold text-xl'>and I love creating unique user experiences</p>
          <Button text={"Download Resume"} />
        </div>
        <div>
          <img src={ai} alt="" />
        </div>
      </div>
      <div className='absolute xs:bottom-10 bottom-10 w-full lg:flex hidden justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-black dark:border-white flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-black dark:bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
