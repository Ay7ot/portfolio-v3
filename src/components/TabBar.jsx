import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


export default function TabBar({ theme, setTheme }) {


    const [active, setActive] = useState('Home')
    const [tooltipState, setTooltipState] = useState({
        open: false,
        activeId: null,
        animate: false,
    });

    const handleTooltipEnter = (id) => {
        setTooltipState((prev) => ({
            open: true,
            activeId: id,
            // first tooltip in this hover session eases in;
            // moving between items while open is instant
            animate: !prev.open,
        }));
    };

    const handleTooltipLeave = () => {
        setTooltipState({
            open: false,
            activeId: null,
            animate: false,
        });
    };

    useEffect(() => {
        const windowWidth = window.innerWidth

        if (windowWidth >= 1024) {
            const dockContainer = document.querySelector(".dock");
            const dockItems = document.querySelectorAll(".dock-item");

            const defaultItemScale = 1;
            const hoverItemScale = 1.5;
            const neighborItemScale = 1.2;
            const expandedMargin = "5px";

            const updateDockItems = () => {
                dockItems.forEach((item) => {
                    let scale = defaultItemScale;
                    let margin;

                    if (item.isHovered) {
                        scale = hoverItemScale;
                        margin = expandedMargin;
                    } else if (item.isNeighbor) {
                        scale = neighborItemScale;
                        margin = expandedMargin;
                    }

                    item.style.transform = `scale(${scale})`;
                    item.style.margin = `0 ${margin}`;
                });
            };

            dockItems.forEach((item) => {
                item.addEventListener("mousemove", () => {
                    dockItems.forEach((otherItem) => {
                        otherItem.isHovered = otherItem === item;
                        otherItem.isNeighbor =
                            Math.abs(
                                Array.from(dockItems).indexOf(otherItem) - Array.from(dockItems).indexOf(item)
                            ) === 1;
                    });
                    updateDockItems();
                });
            });

            dockContainer.addEventListener("mouseleave", () => {
                dockItems.forEach((item) => {
                    item.isHovered = item.isNeighbor = false;
                    item.style.margin = '0 0';
                });

                updateDockItems();
            });
        }

    }, []); // Empty dependency array ensures the effect runs once after initial render

    useEffect(() => {
        // root element is default : screen
        var projectsObserver = new IntersectionObserver(function (entries) {
            for (let i = 0; i < entries.length; i++) {
                // entries[i]['intersectionRatio']
                if (entries[i].isIntersecting) {
                    setActive('Projects')
                }
                // entries[i]['target']
            }
        }, { threshold: [0.01] });

        var homeObserver = new IntersectionObserver(function (entries) {
            for (let i = 0; i < entries.length; i++) {
                // entries[i]['intersectionRatio']
                if (entries[i].isIntersecting) {
                    setActive('Home')
                }
                // entries[i]['target']
            }
        }, { threshold: [0.01] });

        var aboutObserver = new IntersectionObserver(function (entries) {
            for (let i = 0; i < entries.length; i++) {
                // entries[i]['intersectionRatio']
                if (entries[i].isIntersecting) {
                    setActive('About')
                }
                // entries[i]['target']
            }
        }, { threshold: [0.01] });

        projectsObserver.observe(document.getElementById("projects"));
        homeObserver.observe(document.getElementById("home"));
        aboutObserver.observe(document.getElementById("about"));
    }, [])

    return (
        <div className="w-full flex items-center justify-center">
            <div className=" p-3 rounded-full border-[0.82px] border-[#DCDFEA] bg-[#FCFCFD] dark:bg-[#1C1C1C] dark:border-[#ffffff1a]">
                <div className="flex items-center gap-2 justify-between dock">
                    <div
                        className='flex flex-col items-center relative'
                        onMouseEnter={() => handleTooltipEnter('home')}
                        onMouseLeave={handleTooltipLeave}
                    >
                        <a href='#home' className="p-2 sm:p-4 rounded-full bg-[#EFF1F5] min-h-[2.25rem] min-w- border-[0.24px] border-[#DCDFEA] dark:bg-[#ffffff] dark:border-[#DCDFEA] cursor-pointer transition-all duration-300 ease-linear origin-bottom dock-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.5 7.45991V13.9737C15.5 15.8299 14.0076 17.3346 12.1667 17.3346H3.83333C1.99238 17.3346 0.5 15.8299 0.5 13.9737V7.45991C0.5 6.45078 0.949704 5.49505 1.72488 4.85674L5.89155 1.42576C7.11859 0.415373 8.88141 0.415371 10.1084 1.42576L14.2751 4.85674C15.0503 5.49505 15.5 6.45078 15.5 7.45991ZM7.99959 9.00128L8.25739 8.74348C8.96929 8.03159 10.1235 8.03159 10.8354 8.74348C11.5473 9.45538 11.5473 10.6096 10.8354 11.3215L9.03079 13.1261C8.46128 13.6956 7.53791 13.6956 6.9684 13.1261L5.1638 11.3215C4.45191 10.6096 4.45191 9.45538 5.1638 8.74348C5.87569 8.03159 7.0299 8.03159 7.74179 8.74348L7.99959 9.00128Z" fill="#111322" />
                            </svg>
                        </a>
                        <div
                            className={`
                                dock-tooltip
                                ${theme === 'dark' ? 'dock-tooltip-dark' : ''}
                                ${tooltipState.open && tooltipState.activeId === 'home' ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                                ${tooltipState.animate ? 'transition-opacity duration-200 ease-out-cubic' : 'transition-none'}
                            `}
                        >
                            Home
                        </div>
                        {
                            theme==="dark"?
                            <div className={`mt-[0.1rem] md:mt-[0.25rem] absolute bottom-[-30px] transition-opacity duration-200 ease-out-cubic ${active === 'Home' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                                    <g filter="url(#filter0_d_7538_132359)">
                                        <circle cx="24.4998" cy="24.2" r="2.2" fill="white"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_7538_132359" x="0.299805" y="0" width="48.4004" height="48.4004" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_7538_132359"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="10"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7538_132359"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7538_132359" result="shape"/>
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                                :
                            <div className={`mt-[0.1rem] md:mt-[0.25rem] absolute bottom-[-8px] transition-opacity duration-200 ease-out-cubic ${active === 'Home' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                                    <circle cx="3.00005" cy="2.2" r="2.2" fill="#7D89B0" />
                                </svg>
                            </div>
                        }
                    </div>
                    <div
                        className='flex flex-col items-center relative'
                        onMouseEnter={() => handleTooltipEnter('projects')}
                        onMouseLeave={handleTooltipLeave}
                    >
                        <a href='#projectsBody' className="p-2 sm:p-4 rounded-full bg-[#EFF1F5] min-h-[2.25rem] min-w- border-[0.24px] border-[#DCDFEA] dark:bg-[#ffffff] dark:border-[#DCDFEA] cursor-pointer transition-all duration-100 ease-linear origin-bottom dock-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M8.361 2.7265C9.03157 1.31382 10.9691 1.31382 11.6396 2.7265L12.7986 5.16797C13.0649 5.72895 13.5796 6.11777 14.175 6.20773L16.7664 6.59924C18.2659 6.82577 18.8646 8.74161 17.7796 9.84123L15.9044 11.7417C15.4736 12.1783 15.277 12.8074 15.3787 13.424L15.8213 16.1074C16.0775 17.6601 14.51 18.8442 13.1689 18.1111L10.851 16.8442C10.3184 16.5531 9.6822 16.5531 9.14964 16.8442L6.83179 18.1111C5.49065 18.8442 3.92318 17.6601 4.17931 16.1075L4.62198 13.424C4.72369 12.8074 4.52709 12.1783 4.09623 11.7417L2.22105 9.84123C1.13605 8.74161 1.73477 6.82577 3.23421 6.59924L5.82564 6.20773C6.42107 6.11777 6.9358 5.72895 7.20208 5.16797L8.361 2.7265Z" fill="#111322" />
                            </svg>
                        </a>
                        <div
                            className={`
                                dock-tooltip
                                ${theme === 'dark' ? 'dock-tooltip-dark' : ''}
                                ${tooltipState.open && tooltipState.activeId === 'projects' ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                                ${tooltipState.animate ? 'transition-opacity duration-200 ease-out-cubic' : 'transition-none'}
                            `}
                        >
                            Projects
                        </div>
                        {
                            theme==="dark"?
                            <div className={`mt-[0.1rem] md:mt-[0.25rem] absolute bottom-[-30px] transition-opacity duration-200 ease-out-cubic ${active === 'Projects' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                                    <g filter="url(#filter0_d_7538_132359)">
                                        <circle cx="24.4998" cy="24.2" r="2.2" fill="white"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_7538_132359" x="0.299805" y="0" width="48.4004" height="48.4004" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_7538_132359"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="10"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7538_132359"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7538_132359" result="shape"/>
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                                :
                            <div className={`mt-[0.1rem] md:mt-[0.25rem] absolute bottom-[-8px] transition-opacity duration-200 ease-out-cubic ${active === 'Projects' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                                    <circle cx="3.00005" cy="2.2" r="2.2" fill="#7D89B0" />
                                </svg>
                            </div>
                        }
                    </div>
                    <div
                        className='flex flex-col items-center relative'
                        onMouseEnter={() => handleTooltipEnter('about')}
                        onMouseLeave={handleTooltipLeave}
                    >
                        <a href='#about' className="p-2 sm:p-4 rounded-full bg-[#EFF1F5] min-h-[2.25rem] min-w- border-[0.24px] border-[#DCDFEA] dark:bg-[#ffffff] dark:border-[#DCDFEA] cursor-pointer transition-all duration-100 ease-linear origin-bottom dock-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.193 1.25C12.193 0.904822 11.9132 0.625 11.568 0.625C11.2229 0.625 10.943 0.904822 10.943 1.25V2.50041H5.52661V1.25C5.52661 0.904822 5.24679 0.625 4.90161 0.625C4.55643 0.625 4.27661 0.904822 4.27661 1.25V2.50248C2.30918 2.56809 0.734375 4.18368 0.734375 6.16708V14.2504C0.734375 16.2755 2.376 17.9171 4.40104 17.9171H12.0677C14.0928 17.9171 15.7344 16.2754 15.7344 14.2504V6.16707C15.7344 4.18397 14.1601 2.56858 12.193 2.50251V1.25ZM8.25545 8.8675L8.44671 8.66648C8.97487 8.11139 9.83118 8.11139 10.3593 8.66648C10.8875 9.22158 10.8875 10.1216 10.3593 10.6767L9.0205 12.0838C8.59798 12.5278 7.91293 12.5278 7.4904 12.0838L6.15157 10.6767C5.62341 10.1216 5.62341 9.22158 6.15157 8.66648C6.67973 8.11139 7.53604 8.11139 8.06419 8.66648L8.25545 8.8675Z" fill="#111322" />
                            </svg>
                        </a>
                        <div
                            className={`
                                dock-tooltip
                                ${theme === 'dark' ? 'dock-tooltip-dark' : ''}
                                ${tooltipState.open && tooltipState.activeId === 'about' ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                                ${tooltipState.animate ? 'transition-opacity duration-200 ease-out-cubic' : 'transition-none'}
                            `}
                        >
                            About
                        </div>
                        {
                            theme==="dark"?
                            <div className={`mt-[0.1rem] md:mt-[0.25rem] absolute bottom-[-30px] transition-opacity duration-200 ease-out-cubic ${active === 'About' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                                    <g filter="url(#filter0_d_7538_132359)">
                                        <circle cx="24.4998" cy="24.2" r="2.2" fill="white"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_7538_132359" x="0.299805" y="0" width="48.4004" height="48.4004" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_7538_132359"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="10"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7538_132359"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7538_132359" result="shape"/>
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                                :
                            <div className={`mt-[0.1rem] md:mt-[0.25rem] absolute bottom-[-8px] transition-opacity duration-200 ease-out-cubic ${active === 'About' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                                    <circle cx="3.00005" cy="2.2" r="2.2" fill="#7D89B0" />
                                </svg>
                            </div>
                        }
                    </div>
                    <div className="w-[1px] h-[36px] tab-mid-border"></div>
                    <div
                        className='flex flex-col items-center relative'
                        onMouseEnter={() => handleTooltipEnter('twitter')}
                        onMouseLeave={handleTooltipLeave}
                    >
                        <a href='https://twitter.com/TeyeAyo' target='_blank' rel='noreferrer' className="p-2 sm:p-4 rounded-full bg-[#EFF1F5] min-h-[2.25rem] min-w- border-[0.24px] border-[#DCDFEA] dark:bg-[#ffffff] dark:border-[#DCDFEA] cursor-pointer transition-all duration-100 ease-linear origin-bottom dock-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 13 12" fill="none">
                                <path d="M8.69087 0.666016C7.28831 0.666016 6.1513 1.85992 6.1513 3.33268C6.1513 3.55523 6.17726 3.77141 6.22618 3.97807C4.87757 3.97807 2.84626 3.7054 1.14979 2.00575C0.924199 1.77974 0.508219 1.93085 0.523867 2.2498C0.775284 7.37445 2.97001 8.86929 4.10023 8.96231C3.3704 9.68313 2.31023 10.2521 1.24342 10.5075C0.961872 10.5749 0.89232 10.8831 1.16763 10.9726C1.93098 11.2209 3.02361 11.3165 3.61173 11.3327C7.77228 11.3327 11.1539 7.83077 11.2292 3.48088C11.7754 3.12565 12.1253 2.35435 12.3219 1.80795C12.3698 1.67488 12.1517 1.51983 12.0211 1.57419C11.6131 1.74407 11.095 1.78434 10.6538 1.64055C10.188 1.04553 9.48164 0.666016 8.69087 0.666016Z" fill="#111322" />
                            </svg>
                        </a>
                        <div
                            className={`
                                dock-tooltip
                                ${theme === 'dark' ? 'dock-tooltip-dark' : ''}
                                ${tooltipState.open && tooltipState.activeId === 'twitter' ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                                ${tooltipState.animate ? 'transition-opacity duration-200 ease-out-cubic' : 'transition-none'}
                            `}
                        >
                            Twitter
                        </div>
                    </div>
                    <div
                        className='flex flex-col items-center relative'
                        onMouseEnter={() => handleTooltipEnter('github')}
                        onMouseLeave={handleTooltipLeave}
                    >
                        <a href='https://github.com/Ay7ot' target='_blank' rel='noreferrer' className="p-2 sm:p-4 rounded-full bg-[#EFF1F5] min-h-[2.25rem] min-w- border-[0.24px] border-[#DCDFEA] dark:bg-[#ffffff] dark:border-[#DCDFEA] cursor-pointer transition-all duration-100 ease-linear origin-bottom dock-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path d="M8.875 1C5.0075 1 1.875 4.1325 1.875 8C1.875 11.0975 3.87875 13.7137 6.66125 14.6412C7.01125 14.7025 7.1425 14.4925 7.1425 14.3087C7.1425 14.1425 7.13375 13.5912 7.13375 13.005C5.375 13.3287 4.92 12.5762 4.78 12.1825C4.70125 11.9812 4.36 11.36 4.0625 11.1937C3.8175 11.0625 3.4675 10.7387 4.05375 10.73C4.605 10.7212 4.99875 11.2375 5.13 11.4475C5.76 12.5062 6.76625 12.2087 7.16875 12.025C7.23 11.57 7.41375 11.2637 7.615 11.0887C6.0575 10.9137 4.43 10.31 4.43 7.6325C4.43 6.87125 4.70125 6.24125 5.1475 5.75125C5.0775 5.57625 4.8325 4.85875 5.2175 3.89625C5.2175 3.89625 5.80375 3.7125 7.1425 4.61375C7.7025 4.45625 8.2975 4.3775 8.8925 4.3775C9.4875 4.3775 10.0825 4.45625 10.6425 4.61375C11.9813 3.70375 12.5675 3.89625 12.5675 3.89625C12.9525 4.85875 12.7075 5.57625 12.6375 5.75125C13.0837 6.24125 13.355 6.8625 13.355 7.6325C13.355 10.3187 11.7188 10.9137 10.1613 11.0887C10.415 11.3075 10.6337 11.7275 10.6337 12.3837C10.6337 13.32 10.625 14.0725 10.625 14.3087C10.625 14.4925 10.7563 14.7112 11.1062 14.6412C12.4959 14.1721 13.7034 13.279 14.5589 12.0877C15.4143 10.8963 15.8746 9.46668 15.875 8C15.875 4.1325 12.7425 1 8.875 1Z" fill="black" />
                            </svg>
                        </a>
                        <div
                            className={`
                                dock-tooltip
                                ${theme === 'dark' ? 'dock-tooltip-dark' : ''}
                                ${tooltipState.open && tooltipState.activeId === 'github' ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                                ${tooltipState.animate ? 'transition-opacity duration-200 ease-out-cubic' : 'transition-none'}
                            `}
                        >
                            GitHub
                        </div>
                    </div>
                    <div
                        className='flex flex-col items-center relative'
                        onMouseEnter={() => handleTooltipEnter('linkedin')}
                        onMouseLeave={handleTooltipLeave}
                    >
                        <a href='https://www.linkedin.com/in/ayomide-ibiteye-b124b823b/' target='_blank' rel='noreferrer' className="p-2 sm:p-4 rounded-full bg-[#EFF1F5] min-h-[2.25rem] min-w- border-[0.24px] border-[#DCDFEA] dark:bg-[#ffffff] dark:border-[#DCDFEA] cursor-pointer transition-all duration-100 ease-linear origin-bottom dock-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 14 14" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.25065 1.66732C3.25065 2.4037 2.6537 3.00065 1.91732 3.00065C1.18094 3.00065 0.583984 2.4037 0.583984 1.66732C0.583984 0.930938 1.18094 0.333984 1.91732 0.333984C2.6537 0.333984 3.25065 0.930938 3.25065 1.66732ZM3.25065 4.66756V13.6676H0.583984V4.66756H3.25065ZM5.25147 4.66756H7.91813V5.2285C8.33517 5.0811 8.78395 5.0009 9.25147 5.0009C11.4606 5.0009 13.2515 6.79176 13.2515 9.0009V13.6676H10.5848V9.0009C10.5848 8.26452 9.98784 7.66756 9.25146 7.66756C8.51509 7.66756 7.91813 8.26452 7.91813 9.0009V13.6676H5.25147V9.0009V4.66756Z" fill="#111322" />
                            </svg>
                        </a>
                        <div
                            className={`
                                dock-tooltip
                                ${theme === 'dark' ? 'dock-tooltip-dark' : ''}
                                ${tooltipState.open && tooltipState.activeId === 'linkedin' ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                                ${tooltipState.animate ? 'transition-opacity duration-200 ease-out-cubic' : 'transition-none'}
                            `}
                        >
                            LinkedIn
                        </div>
                    </div>
                    <div className="w-[1px] h-[36px] tab-mid-border"></div>
                    <div
                        className='flex flex-col items-center relative'
                        onMouseEnter={() => handleTooltipEnter('theme')}
                        onMouseLeave={handleTooltipLeave}
                    >
                        <button
                            onClick={() => {
                                if (theme === 'dark') {
                                    setTheme('light')
                                    document.documentElement.classList.remove('dark')
                                    localStorage.setItem('theme', 'light')
                                } else {
                                    setTheme('dark')
                                    document.documentElement.classList.add('dark')
                                    localStorage.setItem('theme', 'dark')

                                }
                            }}
                            className="p-2 sm:p-4 rounded-full bg-[#EFF1F5] min-h-[2.25rem] min-w- border-[0.24px] border-[#DCDFEA] dark:bg-[#ffffff] dark:border-[#DCDFEA] cursor-pointer transition-all duration-100 ease-linear origin-bottom dock-item"
                        >
                            {theme === 'dark'
                                ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M2.72636 10.3901C6.95918 10.3901 10.3905 6.95869 10.3905 2.72588C10.3905 2.22292 10.3421 1.73128 10.2496 1.25537C10.1861 0.928584 10.488 0.634704 10.7951 0.763337C13.5586 1.9211 15.5 4.6515 15.5 7.83533C15.5 12.0681 12.0686 15.4995 7.83582 15.4995C4.65199 15.4995 1.92159 13.5581 0.763825 10.7946C0.635192 10.4875 0.929073 10.1856 1.25586 10.2491C1.73177 10.3416 2.22341 10.3901 2.72636 10.3901Z" fill="#28303F" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 16 16" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.00024 0.833984C8.27639 0.833984 8.50024 1.05784 8.50024 1.33398V2.00065C8.50024 2.27679 8.27639 2.50065 8.00024 2.50065C7.7241 2.50065 7.50024 2.27679 7.50024 2.00065V1.33398C7.50024 1.05784 7.7241 0.833984 8.00024 0.833984ZM12.0001 8.00024C12.0001 10.2094 10.2092 12.0002 8.00008 12.0002C5.79094 12.0002 4.00008 10.2094 4.00008 8.00024C4.00008 5.79111 5.79094 4.00024 8.00008 4.00024C10.2092 4.00024 12.0001 5.79111 12.0001 8.00024ZM8.50024 14.0008C8.50024 13.7247 8.27639 13.5008 8.00024 13.5008C7.7241 13.5008 7.50024 13.7247 7.50024 14.0008V14.6675C7.50024 14.9436 7.7241 15.1675 8.00024 15.1675C8.27639 15.1675 8.50024 14.9436 8.50024 14.6675V14.0008ZM13.0682 2.93314C13.2635 3.12841 13.2635 3.44499 13.0682 3.64025L12.5968 4.11165C12.4016 4.30692 12.085 4.30692 11.8897 4.11165C11.6945 3.91639 11.6945 3.59981 11.8897 3.40455L12.3611 2.93314C12.5564 2.73788 12.873 2.73788 13.0682 2.93314ZM4.11104 12.5966C4.3063 12.4013 4.3063 12.0847 4.11104 11.8894C3.91578 11.6942 3.5992 11.6942 3.40393 11.8894L2.93253 12.3608C2.73727 12.5561 2.73727 12.8727 2.93253 13.068C3.12779 13.2632 3.44437 13.2632 3.63964 13.068L4.11104 12.5966ZM15.1675 8.00041C15.1675 8.27655 14.9436 8.50041 14.6675 8.50041H14.0008C13.7247 8.50041 13.5008 8.27655 13.5008 8.00041C13.5008 7.72427 13.7247 7.50041 14.0008 7.50041H14.6675C14.9436 7.50041 15.1675 7.72427 15.1675 8.00041ZM2.00065 8.50041C2.27679 8.50041 2.50065 8.27655 2.50065 8.00041C2.50065 7.72427 2.27679 7.50041 2.00065 7.50041H1.33398C1.05784 7.50041 0.833984 7.72427 0.833984 8.00041C0.833984 8.27655 1.05784 8.50041 1.33398 8.50041H2.00065ZM13.0683 13.0684C12.8731 13.2637 12.5565 13.2637 12.3612 13.0684L11.8898 12.597C11.6945 12.4017 11.6945 12.0851 11.8898 11.8899C12.0851 11.6946 12.4017 11.6946 12.5969 11.8899L13.0683 12.3613C13.2636 12.5566 13.2636 12.8731 13.0683 13.0684ZM3.40402 4.1112C3.59928 4.30647 3.91587 4.30647 4.11113 4.1112C4.30639 3.91594 4.30639 3.59936 4.11113 3.4041L3.63972 2.93269C3.44446 2.73743 3.12788 2.73743 2.93262 2.93269C2.73735 3.12795 2.73735 3.44454 2.93262 3.6398L3.40402 4.1112Z" fill="#FAC515" />
                                </svg>
                            }
                        </button>
                        <div
                            className={`
                                dock-tooltip
                                ${theme === 'dark' ? 'dock-tooltip-dark' : ''}
                                ${tooltipState.open && tooltipState.activeId === 'theme' ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                                ${tooltipState.animate ? 'transition-opacity duration-200 ease-out-cubic' : 'transition-none'}
                            `}
                        >
                            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

TabBar.propTypes = {
    setTheme: PropTypes.func.isRequired, // Assuming setTheme is a function
    theme: PropTypes.string.isRequired, // Assuming setTheme is a function
};
