import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets.js'
import ProjectCard from './ProjectCard.jsx'
import { FaArrowRight } from 'react-icons/fa'

const Project = () => {
  return (
    <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1, ease: "easeOut"}}
        viewport={{once:false, amount:0.2}}
        id="projects"
        className="py-20 bg-navy-100"
    >
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4 tracking-wide text-gray-400">
                My 
                <span className="text-teal-500"> Projects</span>
            </h2>

            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 tracking-wide">
              Here are some of the projects I've worked on
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

                {/* Project Cards */}
                {
                    projects.map((project, index) => (
                        <ProjectCard
                            key={project.title || index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            demo={project.demo}
                            code={project.code}
                        />
                    ))
                }

            </div>
            <div className="text-center mt-12">
                <a href="" className='inline-flex items-center px-6 py-3 border border-teal-400 rounded-lg font-medium hover:bg-teal-300/30 transition duration-300'>
                    <span>View More Projects</span>
                    <FaArrowRight className='ml-2' />
                </a>
            </div>
        </div>
    </motion.div>
  )
}

export default Project