import { useEffect, useRef, useState } from "react";

// The contact block is a small email draft the visitor fills in by tapping
// a topic. The subject types itself out, Lagos time ticks in the corner, and
// "Reach out" opens their mail app with the draft already written.
// Everything time- or motion-dependent runs in effects, so the prerendered
// HTML matches the first client render.

const EMAIL = "ayomidotzee@gmail.com";

const TOPICS = [
  {
    label: "A product build",
    subject: "Let's build a product together",
    body: "Hi Ayomide,\n\nI'm working on a product and I'd like your help designing and shipping it.\n\n",
  },
  {
    label: "Health-Tech",
    subject: "A Health-Tech project",
    body: "Hi Ayomide,\n\nI'm building in health-tech and I'd like to talk about it.\n\n",
  },
  {
    label: "AI/ML",
    subject: "An AI/ML system we want to ship",
    body: "Hi Ayomide,\n\nWe have an AI/ML idea and need someone to take it to production.\n\n",
  },
  {
    label: "A tech lead role",
    subject: "A technical lead role",
    body: "Hi Ayomide,\n\nWe're looking for a technical lead and I think you'd be a fit.\n\n",
  },
  {
    label: "Just saying hi",
    subject: "Hello from your portfolio",
    body: "Hi Ayomide,\n\n",
  },
];

const TYPE_MS = 28;

function lagosTime() {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

export default function Contact() {
  const [topic, setTopic] = useState(0);
  const [typed, setTyped] = useState(TOPICS[0].subject.length);
  const [time, setTime] = useState("");
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const tick = () => setTime(lagosTime());
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  // Type the subject out one character at a time after a topic change.
  const subject = TOPICS[topic].subject;
  useEffect(() => {
    if (typed >= subject.length) return undefined;
    const id = setTimeout(() => setTyped((n) => n + 1), TYPE_MS);
    return () => clearTimeout(id);
  }, [typed, subject]);

  function pick(i) {
    setTopic(i);
    setTyped(reduced.current ? TOPICS[i].subject.length : 0);
  }

  const href = `mailto:${EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(TOPICS[topic].body)}`;
  const typing = typed < subject.length;

  return (
    <div className="contact-card relative w-full max-w-[640px] mt-10 rounded-[24px] border-[1px] border-standard bg-solid text-left overflow-hidden">
      <div className="flex items-center justify-between gap-3 px-4 md:px-6 py-3 border-b-[1px] border-standard">
        <span className="flex items-center gap-2 text-xs md:text-sm font-medium text-faint">
          <span className="contact-pulse" aria-hidden="true" />
          Open to new work
        </span>
        <span className="text-xs md:text-sm font-medium text-faint tabular-nums">
          Lagos{" "}
          <span className="text-primary">{time || "--:--"}</span>
          <span className="hidden sm:inline"> · replies within a day</span>
        </span>
      </div>

      <dl className="px-4 md:px-6 text-sm md:text-base">
        <div className="flex gap-3 py-3 border-b-[1px] border-standard">
          <dt className="w-16 shrink-0 text-faint">To</dt>
          <dd className="min-w-0">
            <a
              href={`mailto:${EMAIL}`}
              className="text-primary font-medium break-all hover:underline"
            >
              {EMAIL}
            </a>
          </dd>
        </div>
        <div className="flex gap-3 py-3 border-b-[1px] border-standard">
          <dt className="w-16 shrink-0 text-faint">Subject</dt>
          <dd className="min-w-0 text-primary font-medium" aria-live="polite">
            <span className="sr-only">{subject}</span>
            <span aria-hidden="true">
              {subject.slice(0, typed)}
              <span
                className={`contact-caret ${typing ? "is-typing" : ""}`}
              />
            </span>
          </dd>
        </div>
      </dl>

      <div className="px-4 md:px-6 pt-4 pb-5">
        <p id="contact-topics" className="text-sm font-medium text-faint">
          I&apos;d like to talk about
        </p>
        <div
          role="radiogroup"
          aria-labelledby="contact-topics"
          className="flex flex-wrap gap-2 mt-3"
        >
          {TOPICS.map((t, i) => (
            <button
              key={t.label}
              type="button"
              role="radio"
              aria-checked={i === topic}
              onClick={() => pick(i)}
              className={`whitespace-nowrap px-3 py-[6px] rounded-full border-[1px] text-sm font-medium transition-colors duration-200 ${
                i === topic
                  ? "contact-chip-on"
                  : "border-standard text-muted hover:text-primary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <a
          href={href}
          className="contact-cta group mt-6 flex items-center justify-between gap-4 w-full rounded-[16px] px-5 py-4 text-white font-semibold text-base md:text-lg"
        >
          <span>Reach out</span>
          <span className="contact-cta-arrow flex items-center justify-center w-9 h-9 rounded-full bg-white/15">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </span>
        </a>
        <p className="mt-3 text-xs text-faint">
          Opens your mail app with this draft. Change anything before you send.
        </p>
      </div>
    </div>
  );
}
