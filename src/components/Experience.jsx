import React from 'react'

const Experience = () => {
  return (
    <div name='experience' className='w-full md:h-screen text-gray-300 bg-[black]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#38b6ff]'>Experience</p>
                <p className='pt-4'>My work experience so far</p>
            </div>
            <div>
                <ul>
                    <li className='pb-4'>
                        <p className='text-xl font-bold'>Summer Intern - Technology Support</p>
                        <p>(June 2019 - August 2019, June 2020 - August 2020)</p>
                        <p>Asturian Group, Inc.</p>
                        <ul className='px-5'>
                            <li class="list-disc" > 
                                Responsible for compilation of bid packages and electronic distribution to subcontractors and vendors for pricing for
                                federal/military construction projects using Procore.
                            </li>
                            <li class="list-disc">
                                Itemized take-offs using Bluebeam Software.
                            </li>
                            <li class="list-disc">
                                Worked with Visual Basic and Excel to automate the filling out of forms.
                            </li>
                            <li class="list-disc"> 
                                Supported creation of vendor database for integration into Procore (Relational Database), a construction project
                                management and estimating software.
                            </li>
                            <li class="list-disc">
                                Wrote macros for database import into Procore contact management module.
                            </li>
                            <li class="list-disc">
                                Spoke with clients in order to obtain data to input into database.
                            </li>
                        </ul>
                    </li>
                    {/*}
                    <li className='pb-4'>
                        <p className='text-xl font-bold'>Summer Intern - Technology Support</p>
                        <p>(June 2020 - August 2020)</p>
                        <p>Asturian Group, Inc.</p>
                        <ul className='px-5'>
                            <li class="list-disc"> 
                                Supported creation of vendor database for integration into Procore (Relational Database), a construction project
                                management and estimating software.
                            </li>
                            <li class="list-disc">
                                Wrote macros for database import into Procore contact management module.
                            </li>
                            <li class="list-disc">
                                Spoke with clients in order to obtain data to input into database.
                            </li>
                        </ul>
                    </li>
                    */}
                    <li className='pb-4'>
                        <p className='text-xl font-bold'>Software Development Engineer (Student Position)</p>
                        <p>(August 2021 - November 2021)</p>
                        <p>Affordable</p>
                        <ul className='px-5'>
                            <li class="list-disc"> 
                                Updated a Selenium web browser to be able to record new input types from the user (Drop-down Boxes, Check
                                Boxes, and Radio Buttons).
                            </li>
                            <li class="list-disc">
                                Created Rest API to interact with back-end server which included POST and GET methods.
                            </li>
                            <li class="list-disc">
                                Used AWS services (EC2, Lambda, MongoDB) in order to create back-end server. 
                            </li>
                            <li class="list-disc">
                                Used Docker and EC2 to run an image to insure required libraries were installed to perform the lambda processes.
                            </li>
                            <li class="list-disc">
                                Communicated with clients weekly to ensure that goals were being met and that client satisfaction was met.
                            </li>
                            <li class="list-disc">
                                Consulted peers on UI to determine what the most intuitive layout for the Selenium plugin would be.
                            </li>
                            <li class="list-disc">
                                Contributed to writing the requirements document to present to client.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Experience