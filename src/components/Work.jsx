import React from 'react'

import FirstWebsite from '../assets/firstwebsite.png';
import AWSUpload from '../assets/awsupload.png';
import ServerManager from '../assets/servermanager.png';

const Work = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[black]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#38b6ff]'>Projects</p>
                <p className='py-6'>Some of my recent projects</p>
            </div>

            {/*Container*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${AWSUpload})`}} className='group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*Hover effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider'>
                            AWS s3 Upload
                        </span>
                        <div className='pt-8 text-center'>
                            {/*<a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>*/}
                            <a href='https://github.com/DrewWalt/aws-image-upload' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${ServerManager})`}} className='group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*Hover effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider'>
                            Server Management App
                        </span>
                        <div className='pt-8 text-center'>
                            {/*<a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>*/}
                            <a href='https://github.com/DrewWalt/Server-Manager ' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${FirstWebsite})`}} className='group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*Hover effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            {/*<a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>*/}
                            <a href='https://github.com/DrewWalt/personal-website' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work