import { div } from 'framer-motion/client';
import React from 'react'
import { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-navy-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
            <div>
                <a href="#" className="text-3xl font-bold text-gray-400 tracking-wider">
                    Rashmi
                    <span className="text-teal-500"> Kiran</span>
                    <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
                </a>
            </div>
            <div className="hidden md:flex space-x-10">
                <a href="#home" className="group relative text-gray-400 transition hover:text-teal-500 duration-300">
                    <span>Home</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                </a>

                <a href="#About" className="group relative text-gray-400 transition hover:text-teal-500 duration-300">
                    <span>About</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                </a>

                <a href="#skills" className="group relative text-gray-400 transition hover:text-teal-500 duration-300">
                    <span>Skills</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                </a>

                <a href="#projects" className="group relative text-gray-400 transition hover:text-teal-500 duration-300">
                    <span>Projects</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                </a>

                {/* <a href="#hobbies" className="group relative text-gray-400 transition hover:text-teal-500 duration-300">
                    <span>Hobbies</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                </a> */}

                <a href="#Contact" className="group relative text-gray-400 transition hover:text-teal-500 duration-300">
                    <span>Contact</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                {
                    showMenu ? (
                        <FaXmark className="text-2xl cursor-pointer" onClick={() => setShowMenu(!showMenu)} />
                    ) : (
                        <FaBars className="text-2xl cursor-pointer" onClick={() => setShowMenu(!showMenu)} />
                    )
                }
            </div>
        </div>

        {/* Mobile Menu */}
        {
            showMenu && (
                <div className="md:hidden mt-4 bg-navy-100/90 h-screen rounded-lg p-4 flex flex-col space-y-4">
                    <a onClick={() => setShowMenu(!showMenu)} href="#home" className="group relative text-gray-400 transition hover:text-teal-500 duration-300">
                    <span>Home</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <a onClick={() => setShowMenu(!showMenu)} href="#About" className="group relative text-gray-400 transition hover:text-teal-500 duration-300">
                        <span>About</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <a onClick={() => setShowMenu(!showMenu)} href="#skills" className="group relative text-gray-400 transition hover:text-teal-500 duration-300">
                        <span>Skills</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <a onClick={() => setShowMenu(!showMenu)} href="#projects" className="group relative text-gray-400 transition hover:text-teal-500 duration-300">
                        <span>Projects</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <a onClick={() => setShowMenu(!showMenu)} href="#hobbies" className="group relative text-gray-400 transition hover:text-teal-500 duration-300">
                        <span>Hobbies</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <a onClick={() => setShowMenu(!showMenu)} href="#Contact" className="group relative text-gray-400 transition hover:text-teal-500 duration-300">
                        <span>Contact</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>
            )
        }
    </nav>
  )
}

export default Navbar