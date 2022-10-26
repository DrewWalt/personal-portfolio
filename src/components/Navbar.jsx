import React, { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'


const Navbar = () => {
const [nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 lg:px-2 bg-[black] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo" style={{width: '120px'}}/>
        </div>

        {/* menu */}
        <ul className='hidden md:flex'>
            <li className='hover:scale-110 duration-300 cursor-pointer'>
                <Link to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='hover:scale-110 duration-300 cursor-pointer'>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='hover:scale-110 duration-300 cursor-pointer'>
                <Link to="experience" smooth={true} duration={500}>
                    Experience
                </Link>
            </li>
            <li className='hover:scale-110 duration-300 cursor-pointer'>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='hover:scale-110 duration-300 cursor-pointer'>
                <Link to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li className='hover:scale-110 duration-300 cursor-pointer'>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[black] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl cursor-pointer'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl cursor-pointer'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl cursor-pointer'>
                <Link onClick={handleClick} to="experience" smooth={true} duration={500}>
                    Experience
                </Link>
            </li>
            <li className='py-6 text-4xl cursor-pointer'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                </Link>    
            </li>
            <li className='py-6 text-4xl cursor-pointer'>
                <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li className='py-6 text-4xl cursor-pointer'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
            <div className='flex flex-row justify-center items-cente w-full items-center lg:hidden pb-4'>
            <li className='bg-[#0072b1] rounded-lg m-1'>
            <a className=' text-gray-300' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/drew-walton-528029240/'>
                <FaLinkedin size={40}/>
            </a>
          </li>
          <li className='bg-[#222222] rounded-lg m-1'>
            <a className=' text-gray-300' target="_blank" rel="noopener noreferrer" href='https://github.com/DrewWalt'>
                <FaGithub size={40}/>
            </a>
          </li>
          <li className='bg-[#1bf7c7b7] rounded-lg m-1'>
            <a className=' text-gray-300' href="mailto:drew.walton.website@gmail.com" target="_blank" rel="noopener noreferrer">
                <HiOutlineMail size={40}/>
            </a>
          </li>
          <li className='bg-[#565f69] rounded-lg m-1'>
            <a className=' text-gray-300' href='https://drive.google.com/file/d/1VbicEh2xFsWTuklwy0E1nDJDNmBZQ05H/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                <BsFillPersonLinesFill size={40}/>
            </a>
          </li>
            </div>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]'>
                    <a className='flex justify-between items-center w-full text-gray-300' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/drew-walton-528029240/'>
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#222222]'>
                    <a className='flex justify-between items-center w-full text-gray-300' target="_blank" rel="noopener noreferrer" href='https://github.com/DrewWalt'>
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1bf7c7b7]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="mailto:drew.walton.website@gmail.com" target="_blank" rel="noopener noreferrer">
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://drive.google.com/file/d/1VbicEh2xFsWTuklwy0E1nDJDNmBZQ05H/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>


    </div>
  )
}

export default Navbar