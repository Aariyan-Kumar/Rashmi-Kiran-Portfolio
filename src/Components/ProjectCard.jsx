import React from 'react'

const ProjectCard = ({title, description, image, demo, code}) => {
  return (
    <div className="bg-navy-300 rounded-2xl overflow-hidden  hover:-translate-y-2 transition cursor-pointer duration-300">
        <img src={image} alt={title} className="w-full h-60 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-400 mb-2">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
        </div>
        <div className="flex gap-2 p-6 pt-0">
            <a href={demo} className="flex-1 text-center px-4 py-2 bg-teal-500 rounded-lg font-medium hover:bg-teal-300 transition duration-300" target="_blank" rel="noopener noreferrer">
                View project
            </a>
            <a href={code} className="flex-1 text-center px-4 py-2 border border-teal-500 rounded-lg font-medium hover:bg-teal-300/30 transition duration-300" target="_blank" rel="noopener noreferrer">
                View code
            </a>
        </div>
    </div>
  )
}

export default ProjectCard