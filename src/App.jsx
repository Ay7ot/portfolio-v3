import { useEffect, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import TabBar from "./components/TabBar";
import "./animate-wobble.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (!storedTheme) {
      localStorage.setItem("theme", theme);
    } else {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
  }, [theme]);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main
      id="content"
      className={`flex flex-col items-center dynamicHeight transition-all duration-300 ease-linear`}
    >
      <div
        className="flex flex-col items-center w-full p-3 sm:p-6 bg-solid"
        id="home"
      >
        <Header />
      </div>
      <Projects />
      <About />
      <div className="flex items-center justify-center w-full fixed p-3 bottom-0 sm:p-6 z-[6]">
        <TabBar theme={theme} setTheme={setTheme} />
      </div>
    </main>
  );
}
