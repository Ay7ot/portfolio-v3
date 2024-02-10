import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import TabBar from "./components/TabBar";

export default function App() {
  return (
    <div className="flex flex-col items-center dynamicHeight">
      <div className="flex flex-col items-center w-full p-3 sm:p-6 " id="home">
        <Header />
      </div>
      <div className="flex flex-col items-center w-full p-3 sm:p-6 ">
        <Projects />
      </div>
      <div className="flex flex-col items-center bg-[#F9F9FB] w-full p-3 sm:p-6 ">
        <About />
      </div>
      <div className="flex items-center justify-center w-full fixed p-3 bottom-0 sm:p-6">
        <TabBar />
      </div>
    </div>
  )
}