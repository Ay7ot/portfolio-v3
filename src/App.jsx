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
    const showContent = () => {
      document.getElementById("content").style.display = "block";
      document.getElementById("loader").style.display = "none";
      document.getElementById("content").scrollTo(0, 0);
      Aos.init();
    };

    // Show content after 1.5s once window is loaded, or force show after 3s max
    const maxTimeout = setTimeout(showContent, 3000);

    if (document.readyState === "complete") {
      clearTimeout(maxTimeout);
      setTimeout(showContent, 1500);
    } else {
      window.addEventListener("load", () => {
        clearTimeout(maxTimeout);
        setTimeout(showContent, 1500);
      });
    }

    return () => clearTimeout(maxTimeout);
  }, []);

  console.log(theme);

  return (
    <HelmetProvider>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>Ayomide Ibiteye - Software Developer Nigeria</title>
        <meta
          name="description"
          content="Ayomide Ibiteye is a skilled Software Developer based in Nigeria, specializing in building web applications for Fintech, Edutech, and SaaS companies."
        />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teyeayo.info/" />{" "}
        {/* Ensure this is your canonical URL */}
        <meta
          property="og:title"
          content="Ayomide Ibiteye - Software Developer Nigeria"
        />
        <meta
          property="og:description"
          content="Ayomide Ibiteye is a skilled Software Developer based in Nigeria, specializing in building web applications for Fintech, Edutech, and SaaS companies."
        />
        <meta property="og:image" content="https://teyeayo.info/ayomide.jpg" />
        <meta
          property="og:image:alt"
          content="Ayomide Ibiteye's Portfolio Landing Page"
        />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://teyeayo.info/" />{" "}
        {/* Ensure this is your canonical URL */}
        <meta
          property="twitter:title"
          content="Ayomide Ibiteye - Software Developer Nigeria"
        />
        <meta
          property="twitter:description"
          content="Ayomide Ibiteye is a skilled Software Developer based in Nigeria, specializing in building web applications for Fintech, Edutech, and SaaS companies."
        />
        <meta
          property="twitter:image"
          content="https://teyeayo.info/ayomide.jpg"
        />
        {/* You can add other meta tags like theme-color etc. here */}
      </Helmet>
      <div
        className="flex items-center justify-center dynamicHeight"
        id="loader"
      >
        <Loader />
      </div>
      <div
        style={{ display: "none" }}
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
      </div>
    </HelmetProvider>
  );
}
