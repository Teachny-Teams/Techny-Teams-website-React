import Particles from "react-tsparticles";
import Navbar from "../Components/Navbar/Navbar";
import config from "./ParticleConfig";

function Projects() {
  return (
    <div>
      <Navbar className="z-2" />
      <div className="pt-[55px] w-full h-full z-6" style={{ top: 58 }}>
        <h1 className="z-2">Projects</h1>
      </div>
    </div>
  );
}

export default Projects;
