/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  variants: {
    extend: {
      animation: ["dark"],
      translate: ["dark"],
      // ... other Tailwind utilities you might be using
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      shadows: ["Shadows Into Light Two", "cursive"],
    },
  },
  plugins: [],
};
