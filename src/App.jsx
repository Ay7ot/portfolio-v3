import { useEffect, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import TabBar from "./components/TabBar";
import "./animate-wobble.css";
import Loader from "./Loader";
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

  // The truck loader sits over the page as an overlay instead of keeping the
  // page hidden, so the content paints straight away (good LCP) while the
  // loader still plays on top for a moment before fading out.
  const [loaderState, setLoaderState] = useState("visible");

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const hide = setTimeout(() => {
      document.documentElement.style.overflow = "";
      window.scrollTo(0, 0);
      setLoaderState("fading");
      Aos.init();
    }, 1500);
    return () => {
      clearTimeout(hide);
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (loaderState !== "fading") return;
    const remove = setTimeout(() => setLoaderState("gone"), 300);
    return () => clearTimeout(remove);
  }, [loaderState]);

  return (
    <>
      {loaderState !== "gone" && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-main transition-opacity duration-300 ease-linear ${
            loaderState === "fading" ? "opacity-0 pointer-events-none" : ""
          }`}
          id="loader"
          aria-hidden="true"
        >
          <Loader />
        </div>
      )}
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
    </>
  );
}
