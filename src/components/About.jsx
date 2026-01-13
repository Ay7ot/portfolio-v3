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
    <section className="w-full bg-main" id="about">
      <div className="max-w-[1280px] mx-auto px-3 sm:px-6 pt-[2rem] pb-[6rem] md:pt-[4rem] md:pb-[8rem]">
      <div className=" flex md:flex-row flex-col gap-4 md:gap-16 items-center w-full">
        <div className="self-center relative">
          <AnimationOnScroll animateIn="animate__wobble" duration={2}>
            <div className="w-[250px] md:w-[300px] border-standard border-[1px] rounded-[1.25rem]">
              <img
                src="/ayomide.jpg"
                alt="A photo of Ayomide Ibiteye, Software Developer"
                className="w-full rounded-t-[1.25rem]"
              />
              <div className="bg-solid p-4 rounded-b-[1.25rem]">
                <p className="font-shadows text-center text-primary">
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
          <p className="flex flex-col gap-[1.25rem] text-[18px] md:text-[1.25rem] leading-[1.75rem] text-muted md:gap-8 font-medium">
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
      <div className="bg-glass p-3 md:p-12 md:pb-4 rounded-[28px] border-[1px] border-standard mt-24 flex flex-col items-center justify-center">
        <div className="bg-accent-light-color flex items-center justify-center gap-2 py-[2px] px-2 rounded-[1rem] mt-24 border-[1px] border-[#72BCFD]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="8"
            viewBox="0 0 9 8"
            fill="none"
          >
            <circle cx="4.5" cy="4" r="3" fill="#0067C2" />
          </svg>
          <p className="text-accent-dark-color">Connect with me</p>
        </div>
        <h4
          data-aos="fade-in"
          data-aos-duration="500"
          data-aos-easing="ease-in"
          className="text-secondary relative text-[2.5rem] md:text-[3.75rem] lg:text-[4rem] font-bold leading-[3rem] md:leading-[4rem] lg:leading-[5rem] lg:tracking-[-1.5px] mt-3"
        >
          Let&apos;s build the <br /> future together
        </h4>
        <p className="text-subtle text-sm md:text-[1.25rem] text-center mt-5 font-medium leading-5 md:leading-[30px]">
          Got a question, project idea, or just want to talk? <br /> Reach out
          and let&apos;s start a conversation.
        </p>
        <div className="mt-6 w-fit">
          <div className="relative bg-glass-strong border border-standard rounded-xl flex items-center gap-4 p-2 pl-4">
            <a
              href="mailto:ayomidotzee@gmail.com"
              className="text-muted text-sm md:text-base font-medium hover:underline transition-all duration-200 ease"
            >
              ayomidotzee@gmail.com
            </a>
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 py-2 px-3 rounded-lg border border-standard bg-solid text-sm font-medium text-muted transition-colors duration-200 ease hover:text-primary"
            >
              {copied ? (
                <>
                  <svg
                    className="w-4 h-4 text-accent-light"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-accent-light">Copied</span>
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9.75a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                    />
                  </svg>
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
        <div className="md:border-none w-full mt-32 flex items-center justify-center rounded-xl py-5">
          <a
            href="https://twitter.com/its_thepoe"
            target="_blank"
            rel="noreferrer"
            className="text-sm md:text-[18px] flex items-center justify-center font-medium leading-5 md:leading-7 text-primary"
          >
            Designed by Dipo✌️
            <img
              src="/dipo.png"
              alt="Link to designer Dipo's Twitter profile"
            />
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
