import { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import TabBar from "./components/TabBar";

export default function App() {

  const [theme, setTheme] = useState('dark');

  return (
    <div className={`flex flex-col items-center dynamicHeight ${theme === 'dark' && 'dark'} transition-all duration-300 ease-linear`}>
      <div className="flex flex-col items-center w-full p-3 sm:p-6 bg-white dark:bg-[#30374F]" id="home">
        <Header />
      </div>
      <div className="flex flex-col items-center w-full p-3 sm:p-6 bg-white dark:bg-[#30374F]">
        <Projects />
      </div>
      <div className="flex flex-col items-center bg-[#F9F9FB] dark:bg-[#111322] w-full p-3 sm:p-6 ">
        <About />
      </div>
      <div className="flex items-center justify-center w-full fixed p-3 bottom-0 sm:p-6">
        <TabBar theme={theme} setTheme={setTheme} />
      </div>
    </div>
  )
}