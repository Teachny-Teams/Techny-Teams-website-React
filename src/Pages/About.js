import Particles from "react-tsparticles";
import Navbar from "../Components/Navbar/Navbar";
import config from './ParticleConfig'
function About() {
  return (
    <div className="w-full h-full bg-opacity-0">
      <Particles
        className="fixed w-full z--10"
        id="tsparticles"
        options={config}
      />
      <Navbar className="z-2 absolute" />
      <h1 className="z-2 absolute">TSA</h1>
    </div>
  );
}

export default About;
