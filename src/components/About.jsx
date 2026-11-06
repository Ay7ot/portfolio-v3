import Contact from "./Contact";
import TinyNet from "./TinyNet";

export default function About() {
  return (
    <section className="w-full bg-main" id="about">
      <div className="max-w-[1280px] mx-auto px-3 sm:px-6 pt-[2rem] pb-[6rem] md:pt-[4rem] md:pb-[8rem]">
      <div className=" flex md:flex-row flex-col gap-4 md:gap-16 items-center w-full">
        <div className="self-center relative w-full md:w-[46%] md:shrink-0">
          <TinyNet />
        </div>
        <div>
          <p className="flex flex-col gap-[1.25rem] text-[18px] md:text-[1.25rem] leading-[1.75rem] text-muted md:gap-8 font-medium">
            <span>
              This page belongs to Ayomide Ibiteye, a Technical Lead and
              Software Architect from Nigeria.
            </span>
            <span>
              I design and ship production systems end to end, from machine
              learning and data pipelines to multi-portal platforms for
              Health-Tech, AI/ML, and sales products, built on Next.js,
              TypeScript, Node.js, and Python.
            </span>
            <span>
              I operate as the technical decision-maker on teams, translating
              product strategy into system design and sprint-ready engineering
              plans across concurrent projects.
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
        <Contact />
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
              width="25"
              height="24"
              loading="lazy"
              alt="Link to designer Dipo's Twitter profile"
            />
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
