import { useState } from 'react'
import projectsData from '../assets/projects.json'

export default function Projects() {

    const [showMore, setShowMore] = useState(false)
    const [projects, setProjects] = useState(projectsData.slice(0, 3))

    function showMoreProjects() {
        setShowMore(true)
        setProjects(projectsData)
    }

    function showLessProjects() {
        setShowMore(false)
        setProjects(projectsData.slice(0, 3))
    }

    return (
        <section className='pt-[4rem] md:pt-[8rem] w-full max-w-[1024px]'>
            <h2 className='text-[#111322] text-center relative font-semibold leading-[2.375rem] text-[1.875rem] md:text-[2.75rem] lg:text-[3.75rem]'>
                Selected Projects
                <span className='text-base absolute top-[-8px] mt-[-0.5rem] max-[500px]:right-0 font-normal font-shadows lg:text-[1.75rem] md:tracking-[-1.2px]'>From 2021 till now</span>
            </h2>
            <div className='flex flex-col gap-8 md:gap-16 mt-8 md:mt-16'>
                {projects.map((project, index) => {
                    return (
                        <div key={index} className={`flex flex-col gap-3 md:gap-8 md:flex-row-reverse md:justify-end`}>
                            <div className={`flex items-center gap-3 ${index === 0 ? '' : index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                                <div className={`flex-1 md:h-[400px] h-[250px] rounded-[1.25rem] relative ${project.name === 'ResuMate' || project.name === 'BookWormz' ? ' border-[1px] border-[#DCDFEA]' : ''}`}>
                                    <img src={project.deskimg} className='h-full object-cover rounded-[1.5rem]' />
                                </div>
                                <div className={`flex-[0.33] md:h-[400px] h-[250px] rounded-[1.25rem] relative ${project.name === 'ResuMate' || project.name === 'BookWormz' ? ' border-[1px] border-[#DCDFEA]' : ''}`}>
                                    <img src={project.mobileimg} className='h-full object-cover rounded-[1.5rem]' />
                                </div>
                            </div>
                            <div className='md:w-[400px] md:h-[400px] pt-4 pb-3 px-3 flex flex-col items-start mt-auto h-full gap-4 rounded-[20px] border-[1px] border-[#DCDFEA] bg-[#fff]'>
                                <div className='flex flex-col w-full gap-4'>
                                    <h3 className='text-[1.5rem] font-medium leading-8 text-[#111322] lg:text-[1.875rem]'>{project.name}</h3>
                                    <div className='flex gap-[6px] items-center'>
                                        <p className='bg-[#F0F8FF] py-[2px] px-2 flex items-center justify-center rounded-[1rem] text-[#0067C2] text-xs font-medium leading-[18px]'>{project.sector}</p>
                                        <p className='text-[#111322] mt-[-0.25rem] items-center leading-4 font-semibold'>.</p>
                                        <p className='bg-[#F0F8FF] py-[2px] px-2 flex items-center justify-center rounded-[1rem] text-[#0067C2] text-xs font-medium leading-[18px]'>{project.type}</p>
                                    </div>
                                    <p className='text-[#404968] text-sm md:text-base leading-[1.25rem] md:leading-[1.25rem]'>
                                        {project.description}
                                    </p>
                                </div>
                                <div className='mt-auto flex flex-col gap-4 w-full'>
                                    <a href={project.github} className=' px-4 py-[10px] flex items-center justify-between w-full'>
                                        <p className='text-[#5D6B98] text-sm font-medium leading-[1.25rem]'>View Code</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M5.83301 14.1663L14.1663 5.83301M14.1663 5.83301H5.83301M14.1663 5.83301V14.1663" stroke="#7D89B0" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                    <a href={project.live} className='border-[#B9C0D4] border-[1px] px-4 py-[10px] rounded-lg flex items-center justify-between w-full'>
                                        <p className='text-[#5D6B98] text-sm font-medium leading-[1.25rem]'>View Code</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M5.83301 14.1663L14.1663 5.83301M14.1663 5.83301H5.83301M14.1663 5.83301V14.1663" stroke="#7D89B0" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <button onClick={showMore ? showLessProjects : showMoreProjects} className='border-[#B9C0D4] border-[1px] px-4 py-[10px] rounded-lg flex items-center justify-between w-full'>
                    <p className='text-[#5D6B98] text-sm font-medium leading-[1.25rem]'>{`Show ${showMore ? 'less' : 'more'} projects`}</p>
                    <svg xmlns="http://www.w3.org/
                    
                    
                    2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5V19M5 12H19" stroke="#7D89B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </section>
    )
}