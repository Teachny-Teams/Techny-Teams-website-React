import Particles from "react-tsparticles";
import Navbar from "../Components/Navbar/Navbar";
import config from './ParticleConfig'
function Contact() {
    return (
      <div className='bg-opacity-0'>
        <Particles
          className="fixed w-full z--10"
          id="tsparticles"
          options={config}
        />
        <Navbar className="z-2" />
        <h1 className="z-2">Contact</h1>
      </div>
    );
}

export default Contact
