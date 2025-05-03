import { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function About() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText("ayomidotzee@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 4000);
  }

  return (
    <section
      className="pt-[2rem] pb-[6rem] md:pt-[4rem] md:pb-[8rem] w-full max-w-[1024px]"
      id="about"
    >
      <div className=" flex md:flex-row flex-col gap-4 md:gap-16 items-center w-full">
        <div className="self-center relative">
          <AnimationOnScroll animateIn="animate__wobble" duration={2}>
            <div className="w-[250px] md:w-[300px] border-[#DCDFEA] border-[1px] rounded-[1.25rem]">
              <img
                src="/ayomide.jpg"
                alt="A photo of Ayomide Ibiteye, Software Developer"
                className="w-full rounded-t-[1.25rem]"
              />
              <div className="bg-white p-4 rounded-b-[1.25rem]">
                <p className="font-shadows text-center">
                  This is what I look like currently, selfies are not my thing
                  but I try
                </p>
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
            <span>
              This page belongs to Ayomide Ibiteye, a Software Developer from
              Nigeria. 😉
            </span>
            <span>
              I love building web applications and digital products that people
              find delightful and easy to use. Experienced in collaborating
              within agile teams (small, medium, and growing) to deliver
              high-quality software solutions.
            </span>
            <span>
              When I'm not coding, I spend my time making Afrobeats, reading
              manga/watching anime, or working towards my yearly reading goal.
            </span>
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-[#ffffff0d] p-3 md:p-12 md:pb-4 rounded-[1.25rem] border-[1px] border-[#DCDFEA] dark:border-[#ffffff1a] mt-24 flex flex-col items-center justify-center">
        <div className="bg-[#DBEEFF] flex items-center justify-center gap-2 py-[2px] px-2 rounded-[1rem] mt-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="8"
            viewBox="0 0 9 8"
            fill="none"
          >
            <circle cx="4.5" cy="4" r="3" fill="#0067C2" />
          </svg>
          <p className="text-[#05437A]">Connect with me</p>
        </div>
        <h4
          data-aos="fade-in"
          data-aos-duration="500"
          data-aos-easing="ease-in"
          className="text-[#30374F] relative dark:text-white text-[2.5rem] md:text-[3.75rem] lg:text-[4rem] font-bold leading-[3rem] md:leading-[4rem] lg:leading-[5rem] lg:tracking-[-1.5px] mt-3 dark:[text-shadow:0px_5px_10px_rgba(0,84,158,0.12),0px_-5px_10px_rgba(255,255,255,0.05),0px_-5px_25px_rgba(255,255,255,0.20)]"
        >
          Let&apos;s build the <br /> future together
        </h4>
        <p className="text-[#ffffff1a] dark:text-[#DCDFEA] text-sm md:text-[1.25rem] text-center mt-5 font-medium leading-5 md:leading-[30px]">
          Got a question, project idea, or just want to talk? <br /> Reach out
          and let&apos;s start a conversation.
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
            className="py-2 px-4 md:text-[18px] rounded-lg border-[1px] border-[#B9C0D4] min-[350px]:min-w-[100px] dark:border-[#ffffff1a] dark:bg-[#f2f2f21a] dark:text-white text-xs md:text-sm font-medium leading-5 text-[#404968]"
          >
            {copied ? "Copied" : "Copy Email"}
          </button>
        </div>
        <div className="md:border-none w-full mt-32 flex items-center justify-center rounded-xl py-5">
          <a
            href="https://twitter.com/its_thepoe"
            target="_blank"
            rel="noreferrer"
            className="text-sm md:text-[18px] flex items-center justify-center font-medium leading-5 md:leading-7 dark:text-white"
          >
            Designed by Dipo✌️
            <img
              src="/dipo.png"
              alt="Link to designer Dipo's Twitter profile"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
