// The email row and Reach out button, plus the hero's industry pills as
// shortcuts that open a mail with that topic as the subject. Built only from
// pieces already on the page: the bordered email row, the navbar's
// .nav_button, the hero pills and the handwritten Shadows Into Light note.

import { INDUSTRIES, industryIcon } from "./industries";

const EMAIL = "ayomidotzee@gmail.com";

const mailto = (subject) =>
  `mailto:${EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

export default function Contact() {
  return (
    <>
      <div className="mt-6 w-fit max-w-full">
        <div className="relative bg-glass-strong border border-standard rounded-xl flex items-center gap-4 p-2 pl-4">
          <a
            href={mailto()}
            className="text-muted text-sm md:text-base font-medium hover:underline transition-all duration-200 ease min-w-0 truncate"
          >
            {EMAIL}
          </a>
          <a href={mailto()} className="nav_button text-white shrink-0">
            <p>Reach out</p>
          </a>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <p className="font-shadows text-faint text-[1.25rem] lg:text-[1.5rem] md:tracking-[-1.2px]">
          or start with what you&apos;re building
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-3 max-w-[720px]">
          {INDUSTRIES.map((ind) => (
            <a
              key={ind.label}
              href={mailto(ind.subject)}
              className="rounded-[12px] px-3 py-1 flex items-center justify-center gap-2 transition-transform duration-200 ease-out hover:-translate-y-[2px]"
              style={{ background: ind.color }}
            >
              {industryIcon(ind, 20)}
              <span className="text-white font-bold text-[1.25rem] leading-8 whitespace-nowrap">
                {ind.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
