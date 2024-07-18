import { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function About() {

    const [copied, setCopied] = useState(false);

    function copyEmail() {
        navigator.clipboard.writeText('ayomidotzee@gmail.com');
        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 4000)
    }

    return (
        <section className='pt-[2rem] pb-[6rem] md:pt-[4rem] md:pb-[8rem] w-full max-w-[1024px]' id="about">
            <div className=" flex md:flex-row flex-col gap-4 md:gap-16 items-center w-full">
                <div className="self-center relative">
                    <AnimationOnScroll animateIn="animate__wobble" duration={2}>
                        <div className="w-[250px] md:w-[300px] border-[#DCDFEA] border-[1px] rounded-[1.25rem]">
                            <img src="/ayomide.jpg" className="w-full rounded-t-[1.25rem]" />
                            <div className="bg-white p-4 rounded-b-[1.25rem]">
                                <p className="font-shadows text-center">This is what I look like currently, selfies are not my thing but I try</p>
                            </div>
                        </div>
                    </AnimationOnScroll>
                    {/* <div className="w-[200px] min-[380px]:w-[280px]">
                    <img src="/ayomide.jpg" className="w-full rounded-t-[1.25rem]" />
                    <div className="bg-white p-4 rounded-b-[1.25rem]">
                        <p className="font-shadows text-center">This is what I look like currently, selfies are not my thing but I try</p>
                    </div>
                </div>
                <div className="w-[200px] min-[380px]:w-[280px]">
                    <img src="/ayomide.jpg" className="w-full rounded-t-[1.25rem]" />
                    <div className="bg-white p-4 rounded-b-[1.25rem]">
                        <p className="font-shadows text-center">This is what I look like currently, selfies are not my thing but I try</p>
                    </div>
                </div> */}
                </div>
                <div>
                    <p className="flex flex-col gap-[1.25rem] text-[18px] md:text-[1.25rem] leading-[1.75rem] text-[#404968] dark:text-[#EFF1F5] md:gap-8 font-medium">
                        <span>This page belongs to a geeky not-so-geeky young lad. If you haven&apos;t gotten the hint yet, that&apos;s me. 😉</span>
                        <span> This guy loves to build stuff that people love to use and find really delightful. Loves to work in small, medium and growing teams. He&apos;s big on collaboration and a big team player.</span>
                        <span>Spends his time away from the squiggly lines of code making beats for the next big Afrobeats hit song, catching up on his favourite manga/anime or clambering to hit his 52-book goal for the year.</span>
                    </p>
                </div>
            </div>
            <div className="bg-white dark:bg-[#404968] p-3 md:p-12 rounded-[1.25rem] border-[1px] border-[#DCDFEA] dark:border-[#5D6B98] mt-24 flex flex-col items-center justify-center">
                <div className="bg-[#DBEEFF] flex items-center justify-center gap-2 py-[2px] px-2 rounded-[1rem] mt-24">
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
                        <circle cx="4.5" cy="4" r="3" fill="#0067C2" />
                    </svg>
                    <p className="text-[#05437A]">Connect with me</p>
                </div> 
                <h4
                    data-aos="fade-in"
                    data-aos-duration="500"
                    data-aos-easing="ease-in"
                    className="max-w-[600px] mt-10 text-center text-[#30374F] dark:text-white font-bold tracking-[-1.5px] leading-[3rem] md:leading-[86px] text-[2.5rem] md:text-[4rem] lg:text-[4.5rem]"
                >
                    Let&apos;s build the <br /> future together
                </h4>
                <p className="text-[#5D6B98] dark:text-[#DCDFEA] text-sm md:text-[1.25rem] text-center mt-5 font-medium leading-5 md:leading-[30px]">
                    Got a question, project idea, or just want to talk? <br /> Reach out and let&apos;s start a conversation.
                </p>
                <div className="flex items-center gap-4 mt-6">
                    <a
                        href="mailto:ayomidotzee@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="underline text-[#0067C2] dark:text-white md:text-[18px]"
                    >
                        ayomidotzee@gmail.com
                    </a>
                    <button
                        onClick={copyEmail}
                        className="py-2 px-4 md:text-[18px] rounded-lg border-[1px] border-[#B9C0D4] min-[350px]:min-w-[100px] dark:border-[#5D6B98] dark:bg-[#111322] dark:text-white text-xs md:text-sm font-medium leading-5 text-[#404968]"
                    >
                        {copied ? 'Copied' : 'Copy Email'}
                    </button>
                </div>
                <div className="md:border-none w-full border-[1px] border-[#DCDFEA] mt-32 flex items-center justify-center md:justify-end rounded-xl py-5">
                    <a href="https://twitter.com/its_the_poe" target="_blank" rel="noreferrer" className="text-sm md:text-[18px] font-medium leading-5 md:leading-7 dark:text-white">Designed by <span className="text-[#0067C2]">The Poe✌️</span></a>
                </div>
            </div>
        </section>
    )
}