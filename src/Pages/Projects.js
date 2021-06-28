import Navbar from "../Components/Navbar/Navbar";
import projectTSA from "./ProjectTSA";
import "./layout.css";
// import svgimg from "../Images/img.svg";
let count = 0;
function Projects() {
  return (
    <div className=" text-white">
      <Navbar className="z-2 " />
      <div className="pt-[55px] w-full h-full z-6 " style={{ top: 58 }}>
        <div className="pro">
          {projectTSA.map((project) => {
            count++;
            console.log(count);
            console.log(project);
            return (
              <div className=" w-full h-full flex flex-col  justify-center items-center min-h-full bg-app-background bg-center bg-no-repeat bg-cover">
                <div
                  className="flex flex-col lg:flex-row  bg-opacity-10 rounded-3xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6"
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
                        className=" shadow-sm w-max object-fill max-h-50 mb-4 border-2 border-white select-none mx-auto"
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
                    <div className="flex flex-col text-lg h-full text-white font-semibold mb-8 items-center justify-center">
                      <div className="m-5">{project.category}</div>
                      {/* <br /> */}
                      <div className="text-green-500">
                        <a href={project.url}>Visit site</a>
                      </div>
                      {/* <br /> */}
                      <div className="text-green-500">
                        Code :<a href={project.github}>{" "}{project.github}</a>
                      </div>
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
