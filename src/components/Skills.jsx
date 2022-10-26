import React from 'react'

import AWS from '../assets/aws.png';
import Java from '../assets/java.png';
import MySQL from '../assets/MySQL.png';
import Spring from '../assets/spring.png';
import Reactimg from '../assets/react.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import HTML from '../assets/html.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[black] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#38b6ff]'>Skills</p>
                <p className='py-4'> These are some of the technologies I've worked with.  Click the icons for examples in my projects.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='hover:scale-110 duration-500'>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/DrewWalt/aws-image-upload-backend/blob/main/src/main/java/com/drewjwalton/awsimageupload/profile/UserProfileService.java'>
                        <img className='w-20 mx-auto' src={Java} alt="Java icon" />
                        <p className='my-4'>Java</p>
                    </a>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/DrewWalt/aws-image-upload-backend'>
                        <img className='w-20 mx-auto' src={Spring} alt="Spring Boot icon" />
                        <p className='my-4'>Spring Boot</p>
                    </a>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/DrewWalt/Server-Back-End'>
                        <img className='w-20 mx-auto' src={MySQL} alt="MySQL icon" />
                        <p className='my-4'>MySQL</p>
                    </a>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/DrewWalt/aws-image-upload-backend/blob/main/src/main/java/com/drewjwalton/awsimageupload/filestore/FileStore.java'>
                        <img className='w-20 mx-auto' src={AWS} alt="AWS icon" />
                        <p className='my-4'>AWS</p>
                    </a>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/DrewWalt/Server-Front-End/blob/b7c0f6d6780a6485af2eda69364309602cbcdf02/src/app/app.component.html'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </a>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/DrewWalt/personal-website/tree/master/src/styles'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </a>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/DrewWalt/personal-website/blob/master/src/pages/ProjectDisplay.js'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                        <p className='my-4'>JavaScript</p>
                    </a>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/DrewWalt/personal-website'>
                        <img className='w-20 mx-auto' src={Reactimg} alt="React icon" />
                        <p className='my-4'>React</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills