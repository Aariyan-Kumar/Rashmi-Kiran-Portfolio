import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaInstagram, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import { TbLeaf2 } from "react-icons/tb";

const Contact = () => {
  return (
    <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1, ease: "easeOut"}}
        viewport={{once:false, amount:0.2}}
        id="contact"
        className="py-20 bg-navy-100"
    >
        
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4 tracking-wide text-gray-400">
                Get In 
                <span className="text-teal-500"> Touch</span>
            </h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 tracking-wide">
              Have a problem in your business and want a solution? Let's connect and solve it!
            </p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 max-w-6xl mx-auto'>
                {/* Contact form */}
                <div>
                    <form className='space-y-6'>
                        <div>
                            <label htmlFor="name" className='block text-gray-400 mb-2 tracking-wider'>Your Name</label>
                            <input type="text" className='w-full bg-navy-200 border border-navy-300 rounded-lg px-4 py-3 outline-none' />

                        </div>
                        <div>
                            <label htmlFor="email" className='block text-gray-400 mb-2 tracking-wider'>Your Email</label>
                            <input type="email" className='w-full bg-navy-200 border border-navy-300 rounded-lg px-4 py-3 outline-none' />

                        </div>
                        <div>
                            <label htmlFor="message" className='block text-gray-400 mb-2 tracking-wider'>Your Message</label>
                            <textarea type="text" className='w-full h-40 bg-navy-200 border border-navy-300 rounded-lg px-4 py-3 outline-none' />

                        </div>

                        <button type="submit" className='w-full px-6 py-3 bg-teal-500 rounded-lg font-medium hover:bg-teal-300 transition duration-300 cursor-pointer'>
                            Send
                        </button>
                    </form>
                </div>
                {/* Contact information */}
                <div className='space-y-8 my-auto'>
                    <div className='flex items-start '>
                        <div className='text-teal-500 text-2xl mr-4'>
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2 tracking-wider'>Location</h3>
                            <p className='text-gray-400 tracking-wider'>Jamshedpur, Kadma</p>
                        </div>
                    </div>
                    <div className='flex items-start '>
                        <div className='text-teal-500 text-2xl mr-4'>
                            <FaEnvelope />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2 tracking-wider'>Email</h3>
                            <p className='text-gray-400 tracking-wider'>rashmikiranwork@gmail.com</p>
                        </div>
                    </div>

                    <div className='pt-4'>
                            <h3 className='text-lg font-semibold mb-4 tracking-wider'>Follow Me</h3>
                            <div className='flex space-x-4'>
                                <a href="https://www.linkedin.com/in/rashmikiran-consulting/" className='w-12 h-12 rounded-full bg-navy-400 flex items-center justify-center text-teal-500 hover:text-gray-700 hover:bg-teal-500 transition duration'target='_blank' rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                                <a href="https://www.instagram.com/decision_lab_" className='w-12 h-12 rounded-full bg-navy-400 flex items-center justify-center text-teal-500 hover:text-gray-700 hover:bg-teal-500 transition duration' target='_blank' rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                                <a href="https://happenstance.ai/u/rashmikiran" className='w-12 h-12 rounded-full bg-navy-400 flex items-center justify-center text-teal-500 hover:text-gray-700 hover:bg-teal-500 transition duration'target='_blank' rel="noopener noreferrer">
                                    <TbLeaf2 />
                                </a>
                            </div>

                    </div>
                </div>
            </div>

        </div>

    </motion.div>
  )
}

export default Contact