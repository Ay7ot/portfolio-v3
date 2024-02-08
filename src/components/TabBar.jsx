import { useEffect, useState } from 'react';

export default function TabBar() {


    const [active, setActive] = useState('Home')

    useEffect(() => {
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
            <div className=" p-3 rounded-full border-[0.82px] border-[#DCDFEA] bg-[#FCFCFD]">
                <div className="flex items-center gap-2 justify-between dock">
                    <div className='flex flex-col items-center'>
                        <a href='#home' className="p-2 sm:p-4 rounded-full bg-[#EFF1F5] border-[0.24px] border-[#DCDFEA] cursor-pointer transition-all duration-300 ease-linear origin-bottom dock-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 5.76754V10.9785C12 12.4635 10.8061 13.6673 9.33333 13.6673H2.66667C1.19391 13.6673 0 12.4635 0 10.9785V5.76754C0 4.96023 0.359763 4.19565 0.979908 3.685L4.31324 0.940216C5.29487 0.131908 6.70513 0.131907 7.68676 0.940215L11.0201 3.685C11.6402 4.19565 12 4.96023 12 5.76754ZM6.00057 7.00081L6.20681 6.79458C6.77632 6.22506 7.69969 6.22506 8.2692 6.79458C8.83872 7.36409 8.83872 8.28746 8.2692 8.85697L6.82553 10.3006C6.36992 10.7563 5.63122 10.7563 5.17561 10.3006L3.73194 8.85697C3.16242 8.28746 3.16242 7.36409 3.73194 6.79458C4.30145 6.22506 5.22482 6.22506 5.79433 6.79458L6.00057 7.00081Z" fill="#111322" />
                            </svg>
                        </a>
                        <p className={`text-[#5D6B98] text-[1.2rem] mt-[-0.45rem] items-center leading-4 font-semibold ${active === 'Home' ? 'visible' : 'invisible'}`}>.</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <a href='#projects' className="p-2 sm:p-4 rounded-full bg-[#EFF1F5] border-[0.24px] border-[#DCDFEA] cursor-pointer transition-all duration-300 ease-linear origin-bottom dock-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 5.76754V10.9785C12 12.4635 10.8061 13.6673 9.33333 13.6673H2.66667C1.19391 13.6673 0 12.4635 0 10.9785V5.76754C0 4.96023 0.359763 4.19565 0.979908 3.685L4.31324 0.940216C5.29487 0.131908 6.70513 0.131907 7.68676 0.940215L11.0201 3.685C11.6402 4.19565 12 4.96023 12 5.76754ZM6.00057 7.00081L6.20681 6.79458C6.77632 6.22506 7.69969 6.22506 8.2692 6.79458C8.83872 7.36409 8.83872 8.28746 8.2692 8.85697L6.82553 10.3006C6.36992 10.7563 5.63122 10.7563 5.17561 10.3006L3.73194 8.85697C3.16242 8.28746 3.16242 7.36409 3.73194 6.79458C4.30145 6.22506 5.22482 6.22506 5.79433 6.79458L6.00057 7.00081Z" fill="#111322" />
                            </svg>
                        </a>
                        <p className={`text-[#5D6B98] text-[1.2rem] mt-[-0.45rem] items-center leading-4 font-semibold ${active === 'Projects' ? 'visible' : 'invisible'}`}>.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <a href='#about' className="p-2 sm:p-4 rounded-full bg-[#EFF1F5] border-[0.24px] border-[#DCDFEA] cursor-pointer transition-all duration-300 ease-linear origin-bottom dock-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 5.76754V10.9785C12 12.4635 10.8061 13.6673 9.33333 13.6673H2.66667C1.19391 13.6673 0 12.4635 0 10.9785V5.76754C0 4.96023 0.359763 4.19565 0.979908 3.685L4.31324 0.940216C5.29487 0.131908 6.70513 0.131907 7.68676 0.940215L11.0201 3.685C11.6402 4.19565 12 4.96023 12 5.76754ZM6.00057 7.00081L6.20681 6.79458C6.77632 6.22506 7.69969 6.22506 8.2692 6.79458C8.83872 7.36409 8.83872 8.28746 8.2692 8.85697L6.82553 10.3006C6.36992 10.7563 5.63122 10.7563 5.17561 10.3006L3.73194 8.85697C3.16242 8.28746 3.16242 7.36409 3.73194 6.79458C4.30145 6.22506 5.22482 6.22506 5.79433 6.79458L6.00057 7.00081Z" fill="#111322" />
                            </svg>
                        </a>
                        <p className={`text-[#5D6B98] text-[1.2rem] mt-[-0.45rem] items-center leading-4 font-semibold ${active === 'About' ? 'visible' : 'invisible'}`}>.</p>
                    </div>
                    <div className="w-[1px] h-[36px] tab-mid-border"></div>
                    <div className='flex flex-col items-center'>
                        <a href='https://twitter.com/TeyeAyo' target='_blank' rel='noreferrer' className="p-2 sm:p-4 rounded-full bg-[#EFF1F5] border-[0.24px] border-[#DCDFEA] cursor-pointer transition-all duration-300 ease-linear origin-bottom dock-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                <path d="M8.69087 0.666016C7.28831 0.666016 6.1513 1.85992 6.1513 3.33268C6.1513 3.55523 6.17726 3.77141 6.22618 3.97807C4.87757 3.97807 2.84626 3.7054 1.14979 2.00575C0.924199 1.77974 0.508219 1.93085 0.523867 2.2498C0.775284 7.37445 2.97001 8.86929 4.10023 8.96231C3.3704 9.68313 2.31023 10.2521 1.24342 10.5075C0.961872 10.5749 0.89232 10.8831 1.16763 10.9726C1.93098 11.2209 3.02361 11.3165 3.61173 11.3327C7.77228 11.3327 11.1539 7.83077 11.2292 3.48088C11.7754 3.12565 12.1253 2.35435 12.3219 1.80795C12.3698 1.67488 12.1517 1.51983 12.0211 1.57419C11.6131 1.74407 11.095 1.78434 10.6538 1.64055C10.188 1.04553 9.48164 0.666016 8.69087 0.666016Z" fill="#111322" />
                            </svg>
                        </a>
                        <p className='text-[#111322] text-[1.2rem] mt-[-0.45rem] items-center leading-4 font-semibold invisible'>.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <a href='https://github.com/Ay7ot' target='_blank' rel='noreferrer' className="p-2 sm:p-4 rounded-full bg-[#EFF1F5] border-[0.24px] border-[#DCDFEA] cursor-pointer transition-all duration-300 ease-linear origin-bottom dock-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path d="M8.875 1C5.0075 1 1.875 4.1325 1.875 8C1.875 11.0975 3.87875 13.7137 6.66125 14.6412C7.01125 14.7025 7.1425 14.4925 7.1425 14.3087C7.1425 14.1425 7.13375 13.5912 7.13375 13.005C5.375 13.3287 4.92 12.5762 4.78 12.1825C4.70125 11.9812 4.36 11.36 4.0625 11.1937C3.8175 11.0625 3.4675 10.7387 4.05375 10.73C4.605 10.7212 4.99875 11.2375 5.13 11.4475C5.76 12.5062 6.76625 12.2087 7.16875 12.025C7.23 11.57 7.41375 11.2637 7.615 11.0887C6.0575 10.9137 4.43 10.31 4.43 7.6325C4.43 6.87125 4.70125 6.24125 5.1475 5.75125C5.0775 5.57625 4.8325 4.85875 5.2175 3.89625C5.2175 3.89625 5.80375 3.7125 7.1425 4.61375C7.7025 4.45625 8.2975 4.3775 8.8925 4.3775C9.4875 4.3775 10.0825 4.45625 10.6425 4.61375C11.9813 3.70375 12.5675 3.89625 12.5675 3.89625C12.9525 4.85875 12.7075 5.57625 12.6375 5.75125C13.0837 6.24125 13.355 6.8625 13.355 7.6325C13.355 10.3187 11.7188 10.9137 10.1613 11.0887C10.415 11.3075 10.6337 11.7275 10.6337 12.3837C10.6337 13.32 10.625 14.0725 10.625 14.3087C10.625 14.4925 10.7563 14.7112 11.1062 14.6412C12.4959 14.1721 13.7034 13.279 14.5589 12.0877C15.4143 10.8963 15.8746 9.46668 15.875 8C15.875 4.1325 12.7425 1 8.875 1Z" fill="black" />
                            </svg>
                        </a>
                        <p className='text-[#111322] text-[1.2rem] mt-[-0.45rem] items-center leading-4 font-semibold invisible'>.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <a href='https://www.linkedin.com/in/ayomide-ibiteye-b124b823b/' target='_blank' rel='noreferrer' className="p-2 sm:p-4 rounded-full bg-[#EFF1F5] border-[0.24px] border-[#DCDFEA] cursor-pointer transition-all duration-300 ease-linear origin-bottom dock-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.25065 1.66732C3.25065 2.4037 2.6537 3.00065 1.91732 3.00065C1.18094 3.00065 0.583984 2.4037 0.583984 1.66732C0.583984 0.930938 1.18094 0.333984 1.91732 0.333984C2.6537 0.333984 3.25065 0.930938 3.25065 1.66732ZM3.25065 4.66756V13.6676H0.583984V4.66756H3.25065ZM5.25147 4.66756H7.91813V5.2285C8.33517 5.0811 8.78395 5.0009 9.25147 5.0009C11.4606 5.0009 13.2515 6.79176 13.2515 9.0009V13.6676H10.5848V9.0009C10.5848 8.26452 9.98784 7.66756 9.25146 7.66756C8.51509 7.66756 7.91813 8.26452 7.91813 9.0009V13.6676H5.25147V9.0009V4.66756Z" fill="#111322" />
                            </svg>
                        </a>
                        <p className='text-[#111322] text-[1.2rem] mt-[-0.45rem] items-center leading-4 font-semibold invisible'>.</p>
                    </div>
                    <div className="w-[1px] h-[36px] tab-mid-border"></div>
                    <div className='flex flex-col items-center'>
                        <button className="p-2 sm:p-4 rounded-full bg-[#EFF1F5] border-[0.24px] border-[#DCDFEA] cursor-pointer transition-all duration-300 ease-linear origin-bottom dock-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.00024 0.833984C8.27639 0.833984 8.50024 1.05784 8.50024 1.33398V2.00065C8.50024 2.27679 8.27639 2.50065 8.00024 2.50065C7.7241 2.50065 7.50024 2.27679 7.50024 2.00065V1.33398C7.50024 1.05784 7.7241 0.833984 8.00024 0.833984ZM12.0001 8.00024C12.0001 10.2094 10.2092 12.0002 8.00008 12.0002C5.79094 12.0002 4.00008 10.2094 4.00008 8.00024C4.00008 5.79111 5.79094 4.00024 8.00008 4.00024C10.2092 4.00024 12.0001 5.79111 12.0001 8.00024ZM8.50024 14.0008C8.50024 13.7247 8.27639 13.5008 8.00024 13.5008C7.7241 13.5008 7.50024 13.7247 7.50024 14.0008V14.6675C7.50024 14.9436 7.7241 15.1675 8.00024 15.1675C8.27639 15.1675 8.50024 14.9436 8.50024 14.6675V14.0008ZM13.0682 2.93314C13.2635 3.12841 13.2635 3.44499 13.0682 3.64025L12.5968 4.11165C12.4016 4.30692 12.085 4.30692 11.8897 4.11165C11.6945 3.91639 11.6945 3.59981 11.8897 3.40455L12.3611 2.93314C12.5564 2.73788 12.873 2.73788 13.0682 2.93314ZM4.11104 12.5966C4.3063 12.4013 4.3063 12.0847 4.11104 11.8894C3.91578 11.6942 3.5992 11.6942 3.40393 11.8894L2.93253 12.3608C2.73727 12.5561 2.73727 12.8727 2.93253 13.068C3.12779 13.2632 3.44437 13.2632 3.63964 13.068L4.11104 12.5966ZM15.1675 8.00041C15.1675 8.27655 14.9436 8.50041 14.6675 8.50041H14.0008C13.7247 8.50041 13.5008 8.27655 13.5008 8.00041C13.5008 7.72427 13.7247 7.50041 14.0008 7.50041H14.6675C14.9436 7.50041 15.1675 7.72427 15.1675 8.00041ZM2.00065 8.50041C2.27679 8.50041 2.50065 8.27655 2.50065 8.00041C2.50065 7.72427 2.27679 7.50041 2.00065 7.50041H1.33398C1.05784 7.50041 0.833984 7.72427 0.833984 8.00041C0.833984 8.27655 1.05784 8.50041 1.33398 8.50041H2.00065ZM13.0683 13.0684C12.8731 13.2637 12.5565 13.2637 12.3612 13.0684L11.8898 12.597C11.6945 12.4017 11.6945 12.0851 11.8898 11.8899C12.0851 11.6946 12.4017 11.6946 12.5969 11.8899L13.0683 12.3613C13.2636 12.5566 13.2636 12.8731 13.0683 13.0684ZM3.40402 4.1112C3.59928 4.30647 3.91587 4.30647 4.11113 4.1112C4.30639 3.91594 4.30639 3.59936 4.11113 3.4041L3.63972 2.93269C3.44446 2.73743 3.12788 2.73743 2.93262 2.93269C2.73735 3.12795 2.73735 3.44454 2.93262 3.6398L3.40402 4.1112Z" fill="#FAC515" />
                            </svg>
                        </button>
                        <p className='text-[#111322] text-[1.2rem] mt-[-0.45rem] items-center leading-4 font-semibold invisible'>.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
