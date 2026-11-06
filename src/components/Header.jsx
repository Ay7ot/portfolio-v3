import Navbar from "./Navbar";
import { INDUSTRIES, industryIcon } from "./industries";

// Industries that cycle under the headline. The track repeats the first slide
// at the end so the CSS loop in index.css (.sector-track) wraps without a jump.
function HeaderAnimations() {
  const slides = [...INDUSTRIES, INDUSTRIES[0]];
  return (
    <span className="sector-ticker">
      <span className="sector-track">
        {slides.map((ind, i) => (
          <span
            key={`${ind.label}-${i}`}
            className="sector-slide flex items-center gap-3"
            aria-hidden={i === INDUSTRIES.length ? "true" : undefined}
          >
            <span
              className="rounded-[12px] md:rounded-[1rem] px-3 md:px-4 py-1 md:py-2 flex items-center justify-center gap-3"
              style={{ background: ind.color }}
            >
              {industryIcon(ind, 38)}
              <span className="text-[40px] md:text-[3rem] tracking-[-0.96px] leading-[60px] text-white font-bold whitespace-nowrap">
                {ind.label}
              </span>
            </span>
            <span
              className="max-[400px]:hidden h-[1.875rem] w-[1.875rem] md:w-[2.25rem] md:h-[2.25rem] rounded-full text-base flex items-center justify-center text-white"
              style={{ background: ind.color }}
            >
              {(i % INDUSTRIES.length) + 1}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}

export default function Header() {
  return (
    <div className="header_background bg-glass p-3 pb-12 w-full">
      <Navbar />
      <div className="mt-32 md:mt-[252px] sm:px-12 md:px-24 max-w-[1280px] mx-auto">
        <div className="flex">
          <div className="flex items-center justify-center gap-[6px] py-1 px-2 bg-accent-light-color rounded-[1rem] border-[1px] border-[#72BCFD]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="3" fill="#0067C2" />
            </svg>
            <p className="text-accent-dark-color text-xs leading-5">
              Yo! You've stumbled on something really cool✨
            </p>
          </div>
        </div>
        <p className="mt-8 text-[18px] font-medium leading-7 text-subtle">
          I&apos;m Ayomide Ibiteye, a Technical Lead and Software Architect
          based in Nigeria, shipping production systems end to end.
        </p>
        <h1 className="text-secondary relative text-[2.5rem] md:text-[3.75rem] lg:text-[4rem] font-bold leading-[3rem] md:leading-[4rem] lg:leading-[5rem] lg:tracking-[-1.5px] mt-3 max-w-full">
          <span>
            I build production software across{" "}
            <span className="inline-block md:ml-4 mt-4 md:mt-0">
              <HeaderAnimations />
            </span>
          </span>
          <br className="sm:hidden" />
        </h1>
      </div>
    </div>
  );
}
