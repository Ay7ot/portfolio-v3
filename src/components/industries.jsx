// The industries I build for, taken from the projects on this page. The hero
// ticker, the neural-net card and the contact pills all read from this list,
// so a new industry only needs adding here (plus regenerating the ticker keyframes
// in index.css, see .sector-track). Colours are deep tones that sit with the
// original three and keep white text readable.

const heart = (color) => (
  <>
    <path
      d="M12 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z"
      fill="white"
    />
    <path d="M4 11h4l1.5-3 3 6 1.5-3h6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </>
);

export const INDUSTRIES = [
  {
    label: "Health-Tech",
    color: "#00549E",
    sectors: ["Healthcare", "Health-Tech"],
    subject: "A Health-Tech project",
    viewBox: "0 0 24 22",
    icon: heart("#00549E"),
  },
  {
    label: "AI/ML",
    color: "#009F77",
    sectors: ["Data & AI", "AI", "Engineering", "Developer Tool"],
    subject: "An AI/ML project",
    viewBox: "0 0 36 31",
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3804 4.30914C12.816 1.86041 7.86839 0.745289 4.17591 0.328042C2.32915 0.119359 0.821289 1.66151 0.821289 3.56421L0.821289 22.5125C0.821289 24.4152 2.32915 25.9579 4.17591 26.1666C7.86839 26.5838 12.816 27.6989 16.3804 30.1477L16.3804 4.30914ZM18.9036 30.1478C20.0656 29.3494 21.3748 28.6928 22.7395 28.1559C22.7056 27.8494 22.6882 27.5379 22.6882 27.2223C22.6882 22.5774 26.4537 18.8119 31.0987 18.8119C32.2948 18.8119 33.4327 19.0616 34.4629 19.5117V3.56421C34.4629 1.66151 32.9551 0.119359 31.1083 0.328042C27.4157 0.745296 22.468 1.86045 18.9036 4.30927L18.9036 30.1478ZM4.62074 8.95506C4.72737 8.26653 5.37198 7.7948 6.06051 7.90143C8.25189 8.24081 10.7197 8.80806 13.0508 9.70947C13.7006 9.96077 14.0237 10.6913 13.7724 11.3411C13.5211 11.991 12.7906 12.3141 12.1407 12.0628C10.0236 11.2441 7.74126 10.7149 5.67436 10.3948C4.98583 10.2882 4.51411 9.64359 4.62074 8.95506ZM6.06051 14.6298C5.37198 14.5231 4.72737 14.9948 4.62074 15.6834C4.51411 16.3719 4.98583 17.0165 5.67436 17.1232C6.71598 17.2845 7.81551 17.4994 8.92298 17.7788C9.59855 17.9492 10.2844 17.5397 10.4548 16.8642C10.6253 16.1886 10.2158 15.5028 9.54021 15.3323C8.34761 15.0314 7.17024 14.8016 6.06051 14.6298ZM26.1666 27.2827C25.1076 26.2236 25.1076 24.5066 26.1666 23.4475C27.2257 22.3885 28.9427 22.3885 30.0018 23.4475L30.2453 23.691L30.4888 23.4475C31.5478 22.3885 33.2649 22.3885 34.3239 23.4475C35.383 24.5066 35.383 26.2236 34.3239 27.2827L31.5066 30.1C31.1599 30.4467 30.6994 30.6104 30.2453 30.5911C29.7911 30.6104 29.3307 30.4467 28.9839 30.1L26.1666 27.2827Z"
        fill="white"
      />
    ),
  },
  {
    label: "Sales",
    color: "#9E3700",
    sectors: ["Creator Economy", "Productivity"],
    subject: "A sales product",
    viewBox: "0 0 40 35",
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 14C0 20.3993 4.29349 25.7958 10.157 27.466C10.0309 26.4442 10.2962 25.3577 11.0617 24.4391L17.9267 16.2011C20.3217 13.3271 24.9996 15.0207 24.9996 18.7619V20.9998H25.8645C29.2559 20.9998 31.1085 24.9552 28.9374 27.5606L28.5712 28H30C35.5228 28 40 23.5228 40 18C40 12.4772 35.5228 8 30 8C28.9095 8 27.8597 8.17456 26.8771 8.49727C24.7393 3.50084 19.7785 0 14 0C6.26801 0 0 6.26801 0 14ZM20.2315 18.1216L13.3665 26.3595C12.8237 27.0109 13.2869 27.9997 14.1347 27.9997L16.9997 27.9997C17.552 27.9997 17.9997 28.4474 17.9997 28.9997V33.2377C17.9997 34.173 19.1691 34.5964 19.7679 33.8778L26.6329 25.6399C27.1756 24.9886 26.7125 23.9997 25.8646 23.9997H22.9997C22.4474 23.9997 21.9997 23.552 21.9997 22.9997V18.7618C21.9997 17.8265 20.8302 17.4031 20.2315 18.1216Z"
        fill="white"
      />
    ),
  },
  {
    label: "Fintech",
    color: "#6927DA",
    sectors: ["Fintech"],
    subject: "A fintech product",
    viewBox: "0 0 24 24",
    icon: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="3" fill="white" />
        <rect x="2" y="8.5" width="20" height="3" fill="#6927DA" />
        <rect x="5" y="14.5" width="5" height="2" rx="1" fill="#6927DA" />
      </>
    ),
  },
  {
    label: "HR Tech",
    color: "#B42363",
    sectors: ["HR Tech"],
    subject: "An HR tech product",
    viewBox: "0 0 24 24",
    icon: (
      <>
        <circle cx="9" cy="8" r="3.5" fill="white" />
        <path d="M2 20c0-3.9 3.1-7 7-7s7 3.1 7 7H2Z" fill="white" />
        <circle cx="17" cy="9" r="2.5" fill="white" />
        <path d="M17.5 13c2.6.3 4.5 2.5 4.5 5.2V20h-4.6c0-2.6-.8-5-2.3-6.6.7-.3 1.5-.4 2.4-.4Z" fill="white" />
      </>
    ),
  },
  {
    label: "Retail",
    color: "#8A6100",
    sectors: ["Retail"],
    subject: "A retail product",
    viewBox: "0 0 24 24",
    icon: (
      <>
        <path d="M4 8h16l-1.2 12.1A2 2 0 0 1 16.8 22H7.2a2 2 0 0 1-2-1.9L4 8Z" fill="white" />
        <path d="M8.5 10V6.5a3.5 3.5 0 0 1 7 0V10" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
  },
  {
    label: "Construction",
    color: "#475467",
    sectors: ["Construction"],
    subject: "A construction product",
    viewBox: "0 0 24 24",
    icon: (
      <>
        <path d="M4 16a8 8 0 0 1 16 0H4Z" fill="white" />
        <rect x="10.5" y="5" width="3" height="6" rx="1" fill="#475467" />
        <rect x="2" y="16" width="20" height="3" rx="1.5" fill="white" />
      </>
    ),
  },
  {
    label: "Web3",
    color: "#0E7090",
    sectors: ["Blockchain"],
    subject: "A Web3 product",
    viewBox: "0 0 24 24",
    icon: (
      <>
        <path d="M12 2 21 7v10l-9 5-9-5V7l9-5Z" fill="white" />
        <path d="M3.5 7.3 12 12l8.5-4.7M12 12v9.5" stroke="#0E7090" strokeWidth="1.6" strokeLinejoin="round" />
      </>
    ),
  },
];

export const industryOf = (sector) =>
  INDUSTRIES.findIndex((ind) => ind.sectors.includes(sector));

export function industryIcon(industry, size = 40) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={industry.viewBox}
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      {industry.icon}
    </svg>
  );
}
