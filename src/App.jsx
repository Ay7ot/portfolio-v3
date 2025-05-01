import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import TabBar from "./components/TabBar";
import "animate.css";
import Loader from "./Loader";
import Aos from "aos";

export default function App() {
  const [theme, setTheme] = useState("");

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
    function hasWindowLoaded() {
      return document.readyState === "complete";
    }

    if (hasWindowLoaded()) {
      setTimeout(() => {
        document.getElementById("content").style.display = "block";

        // Hide the loader
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").scrollTo(0, 0);
        Aos.init();
      }, 1500);
    }
  }, []);

  console.log(theme);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Ayomide Ibiteye - Software Developer Nigeria</title>
        <meta
          name="description"
          content="Ayomide Ibiteye is a skilled Software Developer based in Nigeria, specializing in building web applications for Fintech, Edutech, and SaaS companies."
        />
        {/* Add other general meta tags here if needed */}
      </Helmet>
      <div
        className="flex items-center justify-center dynamicHeight"
        id="loader"
      >
        <Loader theme={theme} />
      </div>
      <div
        style={{ display: "none" }}
        id="content"
        className={`flex flex-col items-center dynamicHeight transition-all duration-300 ease-linear`}
      >
        <div
          className="flex flex-col items-center w-full p-3 sm:p-6 bg-white dark:bg-[#101010]"
          id="home"
        >
          <Header />
        </div>
        <div className="flex flex-col items-center w-full p-3 sm:p-6 bg-white dark:bg-[#101010]">
          <Projects />
        </div>
        <div className="flex flex-col items-center bg-[#F9F9FB] dark:bg-[#101010] w-full p-3 sm:p-6 ">
          <About />
        </div>
        <div className="flex items-center justify-center w-full fixed p-3 bottom-0 sm:p-6 z-[6]">
          <TabBar theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </HelmetProvider>
  );
}
