import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import useDarkMode from './hook/useDarkMode'

const App = () => {

  const {isDarkMode, toggleMode} = useDarkMode();

  return (

      <main className={``}>
        <div className='bg-[#e6e6e6] dark:bg-gray-900'>
          <Navbar isDarkMode={isDarkMode} toggleMode={toggleMode}/>
          <div>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>
      </main>

  )
}

export default App
