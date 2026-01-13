/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  variants: {
    extend: {
      animation: ["dark"],
      translate: ["dark"],
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--background)",
          secondary: "var(--background-secondary)",
          tertiary: "var(--background-tertiary)",
          card: "var(--background-card)",
          glass: "var(--background-glass)",
          "glass-strong": "var(--background-glass-strong)",
        },
        foreground: {
          DEFAULT: "var(--foreground)",
          secondary: "var(--foreground-secondary)",
          muted: "var(--foreground-muted)",
          subtle: "var(--foreground-subtle)",
          faint: "var(--foreground-faint)",
        },
        border: {
          DEFAULT: "var(--border)",
          muted: "var(--border-muted)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          dark: "var(--accent-dark)",
          hover: "var(--accent-hover)",
          light: "var(--accent-light)",
          lighter: "var(--accent-lighter)",
        },
        "dock-bg": "var(--dock-bg)",
        "dock-item": "var(--dock-item-bg)",
      },
    },
    fontFamily: {
      shadows: ["Shadows Into Light Two", "cursive"],
    },
  },
  plugins: [],
};
