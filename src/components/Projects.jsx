import { useState } from "react";
import projectsData from "../assets/projects.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "animate.css";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [activeTab, setActiveTab] = useState("shipped");

  // Filter projects based on active tab
  const filteredProjects = projectsData.filter(
    (project) => project.category === activeTab
  );

  function showMoreProjects() {
    setShowMore(true);
    // setProjects(projectsData)
  }

  function showLessProjects() {
    setShowMore(false);
    // setProjects(projectsData.slice(0, 3))
  }

  useGSAP(() => {
    gsap.to(".project", {
      y: 50,
      ease: "slow(0.7, 0.7, false)",
      duration: 2.5,
      stagger: 0.25,
    });
  });

  return (
    <section className="w-full bg-solid" id="projectsBody">
      <div className="max-w-[1280px] mx-auto px-3 sm:px-6 pt-[4rem] md:pt-[8rem]">
      <h2
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        className="text-primary text-center relative font-semibold leading-[2.375rem] text-[1.875rem] md:text-[2.75rem] lg:text-[3.75rem]"
      >
        Selected Projects
        <span className="text-base absolute top-[-8px] mt-[-0.5rem] max-[500px]:right-0 font-normal font-shadows lg:text-[1.75rem] md:tracking-[-1.2px] text-faint">
          From 2022 till now
        </span>
      </h2>
      
      {/* Tabs */}
      <div className="flex items-center justify-center mt-8 md:mt-12">
        <div className="inline-flex items-center gap-1 p-1 rounded-[20px] border-[1px] border-standard bg-glass-strong">
          <button
            onClick={() => {
              setActiveTab("shipped");
              setShowMore(false);
            }}
            className={`px-6 py-[10px] rounded-[16px] font-medium text-sm transition-all duration-300 ease-out ${
              activeTab === "shipped"
                ? "bg-accent-lighter-color text-accent-color shadow-sm"
                : "text-faint hover:text-primary"
            }`}
          >
            Shipped
          </button>
          <button
            onClick={() => {
              setActiveTab("playground");
              setShowMore(false);
            }}
            className={`px-6 py-[10px] rounded-[16px] font-medium text-sm transition-all duration-300 ease-out ${
              activeTab === "playground"
                ? "bg-accent-lighter-color text-accent-color shadow-sm"
                : "text-faint hover:text-primary"
            }`}
          >
            Playground
          </button>
        </div>
      </div>
      
      <div
        className="flex flex-col gap-8 md:gap-16 mt-8 md:mt-16"
        id="projects"
      >
        {filteredProjects.map((project, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col gap-3 md:gap-8 md:flex-row-reverse md:justify-end ${
                !showMore && index >= 5 ? "hidden" : ""
              } project`}
            >
              <div
                className={`flex items-center gap-3 ${
                  index === 0
                    ? ""
                    : index % 2 !== 0
                    ? "flex-row-reverse"
                    : "flex-row"
                }`}
              >
                <div
                  className={`flex-1 md:h-[400px] h-[250px] rounded-lg md:rounded-[1.75rem] relative`}
                >
                  <img
                    src={project.deskimg}
                    alt={`Desktop screenshot of the ${project.name} ${project.type} project`}
                    className="h-full object-cover w-full rounded-lg md:rounded-[1.5rem]"
                  />
                </div>
                {project.mobileimg && (
                  <div
                    className={`flex-[0.5] md:flex-[0.45] md:h-[400px] h-[250px] rounded-lg md:rounded-[1.75rem] relative`}
                  >
                    <img
                      src={project.mobileimg}
                      alt={`Mobile screenshot of the ${project.name} ${project.type} project`}
                      className="h-full object-cover w-full rounded-lg md:rounded-[1.5rem] max-w-[200px]"
                    />
                  </div>
                )}
              </div>
              <div className="md:w-[400px] md:h-[400px] pt-5 pb-3 px-3 flex flex-col items-start mt-auto h-full gap-4 rounded-[20px] border-[1px] border-standard bg-glass-strong">
                <div className="flex flex-col w-full gap-4">
                  <div className="flex flex-col gap-[6px]">
                    <h3 className="text-[1.5rem] font-medium leading-8 text-primary lg:text-[1.875rem]">
                      {project.name}
                    </h3>
                    <div className="flex gap-[6px] items-center">
                      <p className="bg-accent-lighter-color py-[2px] px-2 flex items-center justify-center rounded-[1rem] text-accent-color text-xs font-medium leading-[18px]">
                        {project.sector}
                      </p>
                      <p className="text-faint leading-4 font-semibold">
                        •
                      </p>
                      <p className="bg-accent-lighter-color py-[2px] px-2 flex items-center justify-center rounded-[1rem] text-accent-color text-xs font-medium leading-[18px]">
                        {project.type}
                      </p>
                      <p className="text-faint leading-4 font-semibold">
                        •
                      </p>
                      <p className="bg-accent-lighter-color py-[2px] px-2 flex items-center justify-center rounded-[1rem] text-accent-color text-xs font-medium leading-[18px]">
                        {project.year}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted text-sm md:text-sm leading-[1.25rem] md:leading-[1.25rem]">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto flex flex-col gap-4 w-full">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group px-4 py-[10px] flex items-center justify-between w-full"
                  >
                    <p className="text-faint text-sm font-medium leading-[1.25rem] transition-colors duration-200 ease group-hover:text-primary">
                      View Code
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="transition-transform duration-200 ease group-hover:translate-x-1"
                    >
                      <path
                        d="M5.83301 14.1663L14.1663 5.83301M14.1663 5.83301H5.83301M14.1663 5.83301V14.1663"
                        stroke="#7D89B0"
                        strokeWidth="1.67"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="group border-muted border-[1px] px-4 py-[10px] rounded-lg flex items-center justify-between w-full transition-colors duration-200 ease hover:border-accent-color"
                  >
                    <p className="text-muted text-sm font-medium leading-[1.25rem] transition-colors duration-200 ease group-hover:text-primary">
                      View Site
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="transition-transform duration-200 ease group-hover:translate-x-1"
                    >
                      <path
                        d="M5.83301 14.1663L14.1663 5.83301M14.1663 5.83301H5.83301M14.1663 5.83301V14.1663"
                        stroke="#7D89B0"
                        strokeWidth="1.67"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex items-center justify-center">
          <button
            onClick={showMore ? showLessProjects : showMoreProjects}
            className="border-muted border-[1px] px-4 py-[10px] mt-8 md:mt-4 rounded-lg hover:bg-main transition-all duration-300 ease-linear origin-left flex items-center justify-between gap-4"
          >
            <p className="text-faint text-sm font-medium leading-[1.25rem]">{`Show ${
              showMore ? "less" : "more"
            } projects`}</p>
            {!showMore ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 5V19M5 12H19"
                  stroke="#7D89B0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19"
                  stroke="#7D89B0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}
