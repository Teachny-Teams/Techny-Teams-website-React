import { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import projectTSA from "./ProjectTSA";
// import svgimg from "../Images/img.svg";
let count = 0;
function Projects() {
  const { projectsbyTSA, setProjectsbyTSA } = useState(projectTSA);
  return (
    <div className="h-screen text-white">
      <Navbar className="z-2 " />
      <div className="pt-[55px] w-full h-full z-6 flex" style={{ top: 58 }}>
        <div className="flex flex-col h-full">
          {projectTSA.map((project) => {
            count++;
            console.log(count);
            console.log(project);
            return (
              <div className="flex flex-row justify-center items-center min-h-full bg-app-background bg-center bg-no-repeat bg-cover">
                <div
                  className="flex flex-col  border-l-8 lg:flex-row  bg-opacity-10 rounded-3xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6"
                  style={{
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    className="py-8 px-4 lg:px-6  bg-opacity-10 flex flex-col w-full lg:w-auto lg:max-w-xs"
                    style={{
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    <div className="">
                      <img
                        className=" shadow-sm w-auto h-40 mb-4 border-2 border-white select-none mx-auto"
                        // src={`./Projects/${project.image}`}
                        src={project.image}
                        alt="logo"
                        // className="w-50 h-50"
                      />
                      <h1 className="text-lg text-white font-semibold">
                        {project.title}
                      </h1>
                    </div>
                  </div>
                  <div className="flex-1 p-4 lg:p-6">
                    <div className="text-lg text-white font-semibold mb-8 flex items-center justify-center">
                      <div className="m-5">{project.category}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
