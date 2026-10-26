import React from 'react'
import {motion} from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets.js'

const About = () => {
  return (
    <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6, ease: "easeOut"}}
        viewport={{once:true}}
        id="About"
        className="py-20 bg-navy-100"
    >
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4 text-center tracking-wide">
                About 
                <span className="text-teal-500"> Me</span>
            </h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 tracking-wide">
                Get to know about my background and passion
            </p>
            {/* Image and my journey */}
            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Image */}
                <div className="md:w-1/2 rounded-2xl overflow-hidden">
                    <motion.img 
                        initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.9, ease: "easeOut"}}
                        viewport={{once:false, amount:0.2}}
                        className="w-full h-full object-cover"
                        src={assets.profileImg} alt="Profile"
                    />
                </div>
                {/* My Journey */}
                <motion.div 
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.9, ease: "easeOut"}}
                    viewport={{once:false, amount:0.2}}
                    className="md:w-1/2"
                >
                    <div className="rounded-2xl p-8">
                        <h3 className="text-3xl font-semibold mb-6">My Journey</h3>
                        <p className="text-gray-400 mb-6">
                            Systems don't need lines of code to be intelligent; they need clear logic and an understanding of human rhythm.
                             ​I approach operational roadblocks the same way I write poetry: stripping away unnecessary noise until only essential clarity remains.
                        </p>
                        <p className="text-gray-400 mb-12">
                            ​With a background in Business Analytics, I consult with a sharp, specific focus: Every repetitive manual process inside a growing business is an operational tax. I diagnose what teams actually need, eliminate the clutter, and orchestrate automated AI workflows via Zapier that run quietly in the background, saving teams compounding hours of operational drag.
                        </p>
                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {
                                aboutInfo.map((data, index) => (
                                    <div 
                                        key={index}
                                        className="bg-navy-200 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                                    >
                                        <div className="text-teal-500 text-4xl mb-4">
                                            <data.icon />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                                        {data.description && (
                                            <p className="text-gray-400">{data.description}</p>
                                        )}
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </motion.div>
            </div>
        </div>

    </motion.div>
  )
}

export default About