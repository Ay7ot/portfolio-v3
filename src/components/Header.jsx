// import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar";
// import gsap from "gsap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Header() {

    // useGSAP(() => {
    //     // let tl = gsap.timeline()

    // });

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        autoplay: true,
        verticalSwiping: true,
        speed: 300,
        autoplaySpeed: 1600
    };

    function HeaderAnimations() {
        return (
            <div
                data-aos-duration="1500"
                data-aos-easing="ease-in"
                data-aos-once="false"
                data-aos="fade-in"
            >
                <Slider {...settings}>
                    <div className="fin flex items-center gap-3">
                        <div className="rounded-[12px] md:rounded-[1rem] px-3 md:px-4 py-1 md:py-2 flex items-center bg-[#00549E] justify-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="0 0 40 32" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8 0H32C36.4183 0 40 3.58172 40 8V18C40 19.1046 39.1046 20 38 20H32C27.5817 20 24 23.5817 24 28V30C24 31.1046 23.1046 32 22 32H8C3.58172 32 0 28.4183 0 24V8C0 3.58172 3.58172 0 8 0ZM8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6ZM24 16C24 13.7909 22.2091 12 20 12C17.7909 12 16 13.7909 16 16C16 18.2091 17.7909 20 20 20C22.2091 20 24 18.2091 24 16ZM34.0003 23.9998L34.4422 23.5579C35.6626 22.3375 37.6413 22.3375 38.8616 23.5579C40.082 24.7783 40.082 26.7569 38.8616 27.9773L35.768 31.0709C34.7917 32.0472 33.2088 32.0472 32.2325 31.0709L29.1389 27.9773C27.9185 26.7569 27.9185 24.7783 29.1389 23.5579C30.3593 22.3375 32.338 22.3375 33.5583 23.5579L34.0003 23.9998Z" fill="white" />
                            </svg>
                            <p className="text-[40px] md:text-[3rem] tracking-[-0.96px] leading-[60px] text-white font-bold">Fintech</p>
                        </div>
                        <div className="h-[1.875rem] w-[1.875rem] md:w-[2.25rem] md:h-[2.25rem] rounded-full bg-[#00549E] text-base flex items-center justify-center text-white"><span>1</span></div>
                    </div>
                    <div className="edu flex items-center gap-3">
                        <div className="rounded-[12px] md:rounded-[1rem] px-3 md:px-4 py-1 md:py-2 flex items-center bg-[#009F77] justify-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="31" viewBox="0 0 36 31" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.3804 4.30914C12.816 1.86041 7.86839 0.745289 4.17591 0.328042C2.32915 0.119359 0.821289 1.66151 0.821289 3.56421L0.821289 22.5125C0.821289 24.4152 2.32915 25.9579 4.17591 26.1666C7.86839 26.5838 12.816 27.6989 16.3804 30.1477L16.3804 4.30914ZM18.9036 30.1478C20.0656 29.3494 21.3748 28.6928 22.7395 28.1559C22.7056 27.8494 22.6882 27.5379 22.6882 27.2223C22.6882 22.5774 26.4537 18.8119 31.0987 18.8119C32.2948 18.8119 33.4327 19.0616 34.4629 19.5117V3.56421C34.4629 1.66151 32.9551 0.119359 31.1083 0.328042C27.4157 0.745296 22.468 1.86045 18.9036 4.30927L18.9036 30.1478ZM4.62074 8.95506C4.72737 8.26653 5.37198 7.7948 6.06051 7.90143C8.25189 8.24081 10.7197 8.80806 13.0508 9.70947C13.7006 9.96077 14.0237 10.6913 13.7724 11.3411C13.5211 11.991 12.7906 12.3141 12.1407 12.0628C10.0236 11.2441 7.74126 10.7149 5.67436 10.3948C4.98583 10.2882 4.51411 9.64359 4.62074 8.95506ZM6.06051 14.6298C5.37198 14.5231 4.72737 14.9948 4.62074 15.6834C4.51411 16.3719 4.98583 17.0165 5.67436 17.1232C6.71598 17.2845 7.81551 17.4994 8.92298 17.7788C9.59855 17.9492 10.2844 17.5397 10.4548 16.8642C10.6253 16.1886 10.2158 15.5028 9.54021 15.3323C8.34761 15.0314 7.17024 14.8016 6.06051 14.6298ZM26.1666 27.2827C25.1076 26.2236 25.1076 24.5066 26.1666 23.4475C27.2257 22.3885 28.9427 22.3885 30.0018 23.4475L30.2453 23.691L30.4888 23.4475C31.5478 22.3885 33.2649 22.3885 34.3239 23.4475C35.383 24.5066 35.383 26.2236 34.3239 27.2827L31.5066 30.1C31.1599 30.4467 30.6994 30.6104 30.2453 30.5911C29.7911 30.6104 29.3307 30.4467 28.9839 30.1L26.1666 27.2827Z" fill="white" />
                            </svg>
                            <p className="text-[40px] md:text-[3rem] tracking-[-0.96px] leading-[60px] text-white font-bold">Edu-Tech</p>
                        </div>
                        <div className="h-[1.875rem] w-[1.875rem] md:w-[2.25rem] md:h-[2.25rem] rounded-full bg-[#009F77] text-base flex items-center justify-center text-white"><span>2</span></div>
                    </div>
                    <div className="saas flex items-center gap-3">
                        <div className="rounded-[12px] md:rounded-[1rem] px-3 md:px-4 py-1 md:py-2 flex items-center bg-[#9E3700] justify-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 40 35" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 14C0 20.3993 4.29349 25.7958 10.157 27.466C10.0309 26.4442 10.2962 25.3577 11.0617 24.4391L17.9267 16.2011C20.3217 13.3271 24.9996 15.0207 24.9996 18.7619V20.9998H25.8645C29.2559 20.9998 31.1085 24.9552 28.9374 27.5606L28.5712 28H30C35.5228 28 40 23.5228 40 18C40 12.4772 35.5228 8 30 8C28.9095 8 27.8597 8.17456 26.8771 8.49727C24.7393 3.50084 19.7785 0 14 0C6.26801 0 0 6.26801 0 14ZM20.2315 18.1216L13.3665 26.3595C12.8237 27.0109 13.2869 27.9997 14.1347 27.9997L16.9997 27.9997C17.552 27.9997 17.9997 28.4474 17.9997 28.9997V33.2377C17.9997 34.173 19.1691 34.5964 19.7679 33.8778L26.6329 25.6399C27.1756 24.9886 26.7125 23.9997 25.8646 23.9997H22.9997C22.4474 23.9997 21.9997 23.552 21.9997 22.9997V18.7618C21.9997 17.8265 20.8302 17.4031 20.2315 18.1216Z" fill="white" />
                            </svg>
                            <p className="text-[40px] md:text-[3rem] tracking-[-0.96px] leading-[60px] text-white font-bold">SAAS</p>
                        </div>
                        <div className="h-[1.875rem] w-[1.875rem] md:w-[2.25rem] md:h-[2.25rem] rounded-full bg-[#9E3700] text-base flex items-center justify-center text-white"><span>3</span></div>
                    </div>
                </Slider>
            </div>
        )
    }

    return (
        <div
            className="header_background bg-[#f9f9fb] dark:bg-[#404968] dark:border-[#5D6B98] p-3 pb-12 w-full max-w-[1024px]"
            data-aos-duration="1500"
            data-aos-easing="ease-in"
            data-aos-once="false"
            data-aos="fade-in"
        >
            <Navbar />
            <div className="mt-32 md:mt-[252px] sm:px-12 md:px-24">
                <div className="flex">
                    <div className="flex items-center justify-center gap-[6px] py-2 px-2 bg-[#DBEEFF] rounded-[1rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <circle cx="4" cy="4" r="3" fill="#0067C2" />
                        </svg>
                        <p className="text-[#05437A] text-xs md:text-sm leading-5">Yo! You've stumbled on something really cool✨</p>
                    </div>
                </div>
                <p className="mt-8 text-[18px] font-medium leading-7 text-[#4A5578] dark:text-[#DCDFEA]">
                    I&apos;m Ayomide, lover of music, anime, manga and a...
                </p>
                <h1 className="text-[#30374F] relative dark:text-white text-[2.5rem] md:text-[3.75rem] lg:text-[4rem] font-bold leading-[3rem] md:leading-[4rem] lg:leading-[5rem] lg:tracking-[-1.5px] mt-3">
                    Software Developer for Companies in
                    <br className="sm:hidden" />
                    <span className='inline-block md:ml-4 mt-4 md:mt-0 md:absolute'><HeaderAnimations /></span>
                </h1>
            </div>
        </div>
    )
}
