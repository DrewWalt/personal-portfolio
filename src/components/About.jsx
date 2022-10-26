import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[black] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl fond-bold inline border-b-4 border-[#38b6ff]'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold '>
                    <p>Welcome, I created this website in order to display my work.</p>
                </div>
                <div>
                    I am a recent graduate from Gettysburg College looking to begin my career as a fullstack software developer.
                    While attending Gettysburg I was a member of the football team for 4 years as well as a member of the Alpha Tau Omega fraternity.
                    I enjoy sports, spending time with my friends and family, and
                    I also love to learn new technologies.  Since graduating I have been creating projects using new technologies to try to master them.
                    These can be seen in the projects section of this website.
                </div>
            </div>
        </div>
    </div>
  )
}

export default About