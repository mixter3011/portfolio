import React from 'react'
import Card from './Card'

const Projects = () => {
  return (
    <div>
      <div className='flex p-20 flex-col'>
        <h1 className='text-5xl font-bold dark:text-white'><span className='text-[#d25e7f]'>Projects</span> I've Worked On</h1>
        <div className='flex justify-center items-center my-10'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-40 gap-20 mt-20">
            <Card imgSrc={"https://plus.unsplash.com/premium_photo-1688822014591-30d7b089b43c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"} title={"Native Mobile App"} desc={"lorem ipsum dolor sit amet consector"} linkToProject=""/>
            <Card imgSrc={"https://plus.unsplash.com/premium_photo-1688822014591-30d7b089b43c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"} title={"Native Mobile App"} desc={"lorem ipsum dolor sit amet consector"} linkToProject=""/>
            <Card imgSrc={"https://plus.unsplash.com/premium_photo-1688822014591-30d7b089b43c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"} title={"Native Mobile App"} desc={"lorem ipsum dolor sit amet consector"} linkToProject=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
