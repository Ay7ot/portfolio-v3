import { useState } from 'react'
import projectsData from '../assets/projects.json'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import "animate.css"

export default function Projects() {

    const [showMore, setShowMore] = useState(false)

    function showMoreProjects() {
        setShowMore(true)
        // setProjects(projectsData)
    }

    function showLessProjects() {
        setShowMore(false)
        // setProjects(projectsData.slice(0, 3))
    }

    useGSAP(() => {
        gsap.to('.project', {
            y: 50,
            ease: "slow(0.7, 0.7, false)",
            duration: 2.5,
            stagger: 0.25,
        })
    })

    return (
        <section className='pt-[4rem] md:pt-[8rem] w-full max-w-[1024px]' id='projectsBody'>
            <h2
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
                className='text-[#111322] dark:text-white text-center relative font-semibold leading-[2.375rem] text-[1.875rem] md:text-[2.75rem] lg:text-[3.75rem]'>
                Selected Projects
                <span className='text-base absolute top-[-8px] mt-[-0.5rem] max-[500px]:right-0 font-normal font-shadows lg:text-[1.75rem] md:tracking-[-1.2px] dark:text-[#B9C0D4]'>From 2022 till now</span>
            </h2>
            <div className='flex flex-col gap-8 md:gap-16 mt-8 md:mt-16' id='projects'>
                {projectsData.map((project, index) => {
                    return (
                        <div
                            key={index}
                            className={`flex flex-col gap-3 md:gap-8 md:flex-row-reverse md:justify-end ${!showMore && index >= 3 ? 'hidden' : ''} project`}
                        >
                            <div
                                className={`flex items-center gap-3 ${index === 0 ? '' : index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                                <div className={`flex-1 md:h-[400px] h-[250px] rounded-lg md:rounded-[1.5rem] relative border-[1px] border-[#DCDFEA] dark:border-[#5D6B98]`}>
                                    <img src={project.deskimg} className='h-full object-cover rounded-lg md:rounded-[1.5rem]' />
                                </div>
                                <div className={`flex-[0.33] md:h-[400px] h-[250px] rounded-lg md:rounded-[1.5rem] relative border-[1px] border-[#DCDFEA] dark:border-[#5D6B98]`}>
                                    <img src={project.mobileimg} className='h-full object-cover rounded-lg md:rounded-[1.5rem]' />
                                </div>
                            </div>
                            <div
                                className='md:w-[400px] md:h-[400px] pt-4 pb-3 px-3 flex flex-col items-start mt-auto h-full gap-4 rounded-[20px] border-[1px] border-[#DCDFEA] bg-[#fff] dark:border-[#5D6B98] dark:bg-[#111322]'>
                                <div className='flex flex-col w-full gap-4'>
                                    <h3 className='text-[1.5rem] font-medium leading-8 text-[#111322] dark:text-[#FCFCFD] lg:text-[1.875rem]'>{project.name}</h3>
                                    <div className='flex gap-[6px] items-center'>
                                        <p className='bg-[#F0F8FF] py-[2px] px-2 flex items-center justify-center rounded-[1rem] text-[#0067C2] text-xs font-medium leading-[18px]'>{project.sector}</p>
                                        <p className='text-[#111322] mt-[-0.25rem] items-center leading-4 font-semibold'>.</p>
                                        <p className='bg-[#F0F8FF] py-[2px] px-2 flex items-center justify-center rounded-[1rem] text-[#0067C2] text-xs font-medium leading-[18px]'>{project.type}</p>
                                    </div>
                                    <p className='text-[#404968] dark:text-[#EFF1F5] text-sm md:text-base leading-[1.25rem] md:leading-[1.25rem]'>
                                        {project.description}
                                    </p>
                                </div>
                                <div className='mt-auto flex flex-col gap-4 w-full'>
                                    <a href={project.github} target='_blank' rel='noreferrer' className=' px-4 py-[10px] flex items-center justify-between w-full'>
                                        <p className='text-[#5D6B98] dark:text-[#FCFCFD] text-sm font-medium leading-[1.25rem]'>View Code</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M5.83301 14.1663L14.1663 5.83301M14.1663 5.83301H5.83301M14.1663 5.83301V14.1663" stroke="#7D89B0" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                    <a href={project.live} target='_blank' rel='noreferrer' className='border-[#B9C0D4] dark:border-[#5D6B98] dark:bg-[#404968] border-[1px] px-4 py-[10px] rounded-lg flex items-center justify-between w-full'>
                                        <p className='text-[#5D6B98] dark:text-[#FCFCFD] text-sm font-medium leading-[1.25rem]'>View Site</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M5.83301 14.1663L14.1663 5.83301M14.1663 5.83301H5.83301M14.1663 5.83301V14.1663" stroke="#7D89B0" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <button onClick={showMore ? showLessProjects : showMoreProjects} className='border-[#B9C0D4] dark:border-[#5D6B98] border-[1px] px-4 py-[10px] mt-8 md:mt-4 rounded-lg dark:bg-[#111322] hover:bg-[#F9F9FB] transition-all duration-300 ease-linear origin-left flex items-center justify-between w-full'>
                    <p className='text-[#5D6B98] dark:text-white text-sm font-medium leading-[1.25rem]'>{`Show ${showMore ? 'less' : 'more'} projects`}</p>
                    {!showMore ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 5V19M5 12H19" stroke="#7D89B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19" stroke="#7D89B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    }
                </button>
            </div>
        </section>
    )
}