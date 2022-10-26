import React from 'react'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[black]'>
        {/* Container */}

        <div className='max-w-[1000px] mx-auto px-4 pt-4 flex flex-col justify-center h-full'>
            <p className="text-[#38b6ff]">Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Drew Walton</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                I'm seeking an opportunity with an established software engineering firm. 
                I want to join a team that is focused on developing innovative programming, provides leadership opportunities, and invests 
                in their employees for long-term growth and development. As a new entrant into the computer programming sector, my goal is 
                to gain practical programming experience for the next several years, contribute to the company, and form my foundation of success for future growth.
            </p>
            {/*
            <div>
                <Link to="work" smooth={true} duration={500}>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#38b6ff] hover:border-[#38b6ff]'>
                    View Experience
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3 '/>
                    </span> 
                </button>
                </Link>
            </div>
            */}
        </div>
    </div>
  )
}

export default Home