import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[black] flex flex-col justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/5a452d12-db1a-4a47-b224-aef3ad692329" className='flex flex-col max-w-[1000px] w-full'>
            <div className='pb-2'>
                <p className='text-4xl font-bold inline border-b-4 border-[#38b6ff] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below to get in contact with me or email me at djw2017@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder="Name" name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder="Email" name='email' />
            <textarea className='bg-[#ccd6f6] p-2'name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#38b6ff] hover:border-[#38b6ff] px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </form>

        <ul className='flex flex-row justify-center items-cente w-full items-center lg:hidden pb-4'>
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
            <a className=' text-gray-300' href='/'>
                <BsFillPersonLinesFill size={40}/>
            </a>
          </li>
        </ul>
    </div>
  )
}

export default Contact