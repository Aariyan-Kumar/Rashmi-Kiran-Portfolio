import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets.js'
import { div, span } from 'framer-motion/client'

const Skills = () => {
  return (
    <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1, ease: "easeOut"}}
        viewport={{once:false, amount:0.2}}
        id="skills"
        className="py-20 bg-navy-100"
    >
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4 tracking-wide text-gray-400">
                My 
                <span className="text-teal-500"> Skills</span>
            </h2>

            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 tracking-wide">
              Strategies I use to drive business growth
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {
                    skills.map((skill, index) => (
                        <div key={index} className="bg-navy-300 rounded-2xl p-6 hover:-translate-y-2 transition cursor-pointer duration-300">
                            <div className="flex items-center mb-4">
                                <skill.icon className="w-12 h-12 text-teal-500 mr-6" />
                                <h3 className="text-xl font-semibold">
                                    {skill.title}
                                </h3>
                            </div>
                            <p className="text-gray-400 mb-4">
                                {skill.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {
                                    skill.tags.map((tech) => (
                                        <span className="px-3 py-1 bg-navy-400 rounded-full text-sm font-medium" key={tech}>
                                            {tech}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>

    </motion.div>
  )
}

export default Skills