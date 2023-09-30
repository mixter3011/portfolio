import React from 'react'
import { FaGithub } from 'react-icons/fa'


const ViewOnGithub = ({linkToProject}) => {
  return (
    <div className='bg-black text-white hover:bg-gray-900 transition-all duration-200 rounded-xl w-1/3 flex  justify-between items-center p-2'>
      <a href={linkToProject}> View </a>
      <FaGithub/>
    </div>
  )
}

export default ViewOnGithub
