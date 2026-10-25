import React from 'react'
import{motion} from 'framer-motion'
import {assets} from '../assets/assets.js'

const Hero = () => {
  return (
    <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6, ease: "easeOut"}}
        viewport={{once:true}}
        id="home"
        className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-navy-100 via-navy-200 to-navy-300"
    >
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
            {/* Left Column content */}
            <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-400 mb-4 " >
                    Hi, I'm <span className="text-teal-500">Rashmi Kiran</span>
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter">Business Consultant</h2>
                <p className="text-lg text-gray-300 mb-8 tracking-wide">
                    Architecting effortless zero-code workflows. I help you save time and money.
                </p>
                <div className="flex space-x-4">
                    <a href="#projects" className="px-6 py-3 bg-teal-500 rounded-lg font-medium hover:bg-teal-300 transition duration-300" >View Projects</a>
                    <a href="#contact" className="px-6 py-3 border border-teal-500 rounded-lg font-medium hover:bg-teal-500/20 transition duration-300" >Contact Me</a>
                </div>
            </div>
            {/* Right Column content */}
            <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 animate-pulse-slow opacity-70">
                        <motion.img 
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                            src={assets.profileImg} alt="Rashmi Kiran Image"
                            className="relative rounded-full w-full h-full md:w-80 md:h-80 object-cover z-10 animate-float"
                         />
                    </div>
                </div>

            </div>
        </div>
        
    </motion.div>
  )
}

export default Hero