import React from 'react'
import ViewOnGithub from './ViewOnGithub'

const Card = ({imgSrc, title, desc, linkToProject}) => {
    return (
        <div className=" flex max-w-xs flex-col rounded-lg shadow-lg dark:bg-white ">
            <img className="h-[150px] w-full rounded-t-lg object-cover" src={imgSrc} alt="title" />
            <div className="p-5">
                <h1 className="mb-2 text-lg font-semibold ">{title}</h1>
                <p className="mb-3 text-sm font-normal text-gray-700">{desc}</p>
                <ViewOnGithub linkToProject={linkToProject}/>
            </div>
        </div>

    )
}

export default Card
