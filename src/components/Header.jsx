import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar";
import gsap from "gsap";

export default function Header() {

    useGSAP(() => {
        gsap.from(".box", {
            y: 50,
            rotation: 75,
            ease: "slow(0.7, 0.7, false)",
            duration: 2.5,
            stagger: 0.25,
            // repeat: -1,
        });
    })

    function HeaderAnimations() {
        return (
            <div
                data-aos-duration="1000"
                data-aos-easing="ease-in"
                data-aos-once="false"
                data-aos="fade-up"
                className="inline-block min-h-[250px]"
            >
                <div className="relative ">
                    <div className="rounded-md px-3 md:px-4 box py-1 md:py-2 flex items-center bg-blue-500 justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="49" viewBox="0 0 52 49" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M23.647 4.93945L44.4316 16.9395C48.2579 19.1486 49.5689 24.0413 47.3598 27.8677L42.3598 36.5279C41.8075 37.4845 40.5843 37.8122 39.6277 37.26L34.4316 34.26C30.6052 32.0508 25.7125 33.3618 23.5034 37.1882L22.5034 38.9202C21.9511 39.8768 20.7279 40.2045 19.7713 39.6523L7.64695 32.6523C3.82061 30.4431 2.50961 25.5504 4.71875 21.7241L12.7188 7.86766C14.9279 4.04132 19.8206 2.73031 23.647 4.93945ZM20.6461 10.1355C21.6027 10.6878 21.9304 11.911 21.3782 12.8676C20.8259 13.8241 19.6027 14.1519 18.6461 13.5996C17.6895 13.0473 17.3618 11.8241 17.9141 10.8676C18.4663 9.91097 19.6895 9.58322 20.6461 10.1355ZM29.5024 26.7957C30.607 24.8825 29.9515 22.4361 28.0383 21.3316C26.1251 20.227 23.6788 20.8825 22.5742 22.7957C21.4696 24.7088 22.1252 27.1552 24.0383 28.2598C25.9515 29.3643 28.3979 28.7088 29.5024 26.7957ZM34.164 38.7239L34.7677 38.5621C36.4347 38.1154 38.1483 39.1047 38.595 40.7718C39.0417 42.4389 38.0524 44.1525 36.3853 44.5992L32.1593 45.7315C30.8257 46.0888 29.4548 45.2974 29.0975 43.9637L27.9652 39.7378C27.5185 38.0707 28.5078 36.3572 30.1749 35.9105C31.8419 35.4638 33.5555 36.4531 34.0022 38.1202L34.164 38.7239Z" fill="white" />
                        </svg>
                        <p className="text-[40px] md:text-[3rem] tracking-[-0.96px] leading-[60px] text-white font-bold">Fintech</p>
                    </div>
                    <div className="absolute bottom-[-60px] md:bottom-[-80px] z-[2] w-full rounded-md px-3 md:px-4 box rotate-[30deg] md:rotate-[35deg] py-1 md:py-2 flex items-center bg-green-500 justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="49" viewBox="0 0 52 49" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M23.647 4.93945L44.4316 16.9395C48.2579 19.1486 49.5689 24.0413 47.3598 27.8677L42.3598 36.5279C41.8075 37.4845 40.5843 37.8122 39.6277 37.26L34.4316 34.26C30.6052 32.0508 25.7125 33.3618 23.5034 37.1882L22.5034 38.9202C21.9511 39.8768 20.7279 40.2045 19.7713 39.6523L7.64695 32.6523C3.82061 30.4431 2.50961 25.5504 4.71875 21.7241L12.7188 7.86766C14.9279 4.04132 19.8206 2.73031 23.647 4.93945ZM20.6461 10.1355C21.6027 10.6878 21.9304 11.911 21.3782 12.8676C20.8259 13.8241 19.6027 14.1519 18.6461 13.5996C17.6895 13.0473 17.3618 11.8241 17.9141 10.8676C18.4663 9.91097 19.6895 9.58322 20.6461 10.1355ZM29.5024 26.7957C30.607 24.8825 29.9515 22.4361 28.0383 21.3316C26.1251 20.227 23.6788 20.8825 22.5742 22.7957C21.4696 24.7088 22.1252 27.1552 24.0383 28.2598C25.9515 29.3643 28.3979 28.7088 29.5024 26.7957ZM34.164 38.7239L34.7677 38.5621C36.4347 38.1154 38.1483 39.1047 38.595 40.7718C39.0417 42.4389 38.0524 44.1525 36.3853 44.5992L32.1593 45.7315C30.8257 46.0888 29.4548 45.2974 29.0975 43.9637L27.9652 39.7378C27.5185 38.0707 28.5078 36.3572 30.1749 35.9105C31.8419 35.4638 33.5555 36.4531 34.0022 38.1202L34.164 38.7239Z" fill="white" />
                        </svg>
                        <p className="text-[40px] md:text-[3rem] tracking-[-0.96px] leading-[60px] text-white font-bold">EduTech</p>
                    </div>
                    <div className="absolute bottom-[-7rem] md:bottom-[-8rem] left-[-1.5rem] z-[1] md:left-[-2rem] w-full rounded-md px-3 md:px-4 box rotate-[60deg] py-1 md:py-2 flex items-center bg-orange-500 justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="49" viewBox="0 0 52 49" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M23.647 4.93945L44.4316 16.9395C48.2579 19.1486 49.5689 24.0413 47.3598 27.8677L42.3598 36.5279C41.8075 37.4845 40.5843 37.8122 39.6277 37.26L34.4316 34.26C30.6052 32.0508 25.7125 33.3618 23.5034 37.1882L22.5034 38.9202C21.9511 39.8768 20.7279 40.2045 19.7713 39.6523L7.64695 32.6523C3.82061 30.4431 2.50961 25.5504 4.71875 21.7241L12.7188 7.86766C14.9279 4.04132 19.8206 2.73031 23.647 4.93945ZM20.6461 10.1355C21.6027 10.6878 21.9304 11.911 21.3782 12.8676C20.8259 13.8241 19.6027 14.1519 18.6461 13.5996C17.6895 13.0473 17.3618 11.8241 17.9141 10.8676C18.4663 9.91097 19.6895 9.58322 20.6461 10.1355ZM29.5024 26.7957C30.607 24.8825 29.9515 22.4361 28.0383 21.3316C26.1251 20.227 23.6788 20.8825 22.5742 22.7957C21.4696 24.7088 22.1252 27.1552 24.0383 28.2598C25.9515 29.3643 28.3979 28.7088 29.5024 26.7957ZM34.164 38.7239L34.7677 38.5621C36.4347 38.1154 38.1483 39.1047 38.595 40.7718C39.0417 42.4389 38.0524 44.1525 36.3853 44.5992L32.1593 45.7315C30.8257 46.0888 29.4548 45.2974 29.0975 43.9637L27.9652 39.7378C27.5185 38.0707 28.5078 36.3572 30.1749 35.9105C31.8419 35.4638 33.5555 36.4531 34.0022 38.1202L34.164 38.7239Z" fill="white" />
                        </svg>
                        <p className="text-[40px] md:text-[3rem] tracking-[-0.96px] leading-[60px] text-white font-bold">SAAS</p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div
            className="header_background bg-[#f9f9fb] dark:bg-[#404968] dark:border-[#5D6B98] p-3 pb-12 w-full max-w-[1024px]"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
            data-aos-once="false"
            data-aos="fade-down"
        >
            <Navbar />
            <div className="mt-32 md:mt-[252px] sm:px-12 md:px-24">
                <div className="flex">
                    <div className="flex items-center justify-center gap-[6px] py-2 px-2 bg-[#DBEEFF] rounded-[1rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <circle cx="4" cy="4" r="3" fill="#0067C2" />
                        </svg>
                        <p className="text-[#05437A] text-xs md:text-sm leading-5">Yo! You’ve stumbled on something really cool✨</p>
                    </div>
                </div>
                <p className="mt-8 text-[18px] font-medium leading-7 text-[#4A5578] dark:text-[#DCDFEA]">
                    I&apos;m Ayomide, lover of music, anime, manga and...
                </p>
                <h1 className="text-[#30374F] dark:text-white text-[2.5rem] md:text-[3.75rem] lg:text-[4.5rem] font-bold leading-[3rem] md:leading-[4rem] lg:leading-[5rem] lg:tracking-[-1.5px] mt-3">
                    a Software Developer for Startups in
                    <br className="sm:hidden" />
                    <span className="md:ml-4"><HeaderAnimations /></span>
                </h1>
            </div>
        </div>
    )
}
