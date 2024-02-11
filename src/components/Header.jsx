import Navbar from "./Navbar";

export default function Header() {
    return (
        <div className="header_background bg-[#f9f9fb] dark:bg-[#404968] dark:border-[#5D6B98] p-3 pb-12 w-full max-w-[1024px]">
            <Navbar />
            <div className="mt-32 md:mt-[252px] sm:px-12 md:px-24">
                <div className="flex">
                    <div className="flex items-center justify-center gap-[6px] py-2 px-2 bg-[#DBEEFF] rounded-[1rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <circle cx="4" cy="4" r="3" fill="#0067C2" />
                        </svg>
                        <p className="text-[#05437A] text-sm leading-5">Yo! You’ve stumbled on something really cool✨</p>
                    </div>
                </div>
                <p className="mt-8 text-[18px] font-medium leading-7 text-[#4A5578] dark:text-[#DCDFEA]">
                    I&apos;m Ayomide, lover of music, anime, manga and...
                </p>
                <h1 className="text-[#30374F] dark:text-white text-[2.5rem] md:text-[3.75rem] lg:text-[4.5rem] font-bold leading-[3rem] md:leading-[4rem] lg:leading-[5rem] lg:tracking-[-1.5px] mt-3">
                    a Software Developer for Startups in
                    <br className="sm:hidden" />
                    <span> Yooo</span>
                </h1>
            </div>
        </div>
    )
}
