import "../index.css";
import Header from '../Components/Navbar/Navbar'
import Particles from "react-tsparticles";
import Navbar from "../Components/Navbar/Navbar";
import config from "./ParticleConfig";

function Home() {
    return (
      <div className="bg-opacity-0 h-screen w-screen">
        <Particles
          className="fixed w-full z--10"
          id="tsparticles"
          options={config}
        />
        <Header className="z-2" />
        <div className=" flex flex-col h-screen items-center justify-center z-2 ">
          <img
            src="https://technyteams.netlify.app/img/image.jpeg"
            className="h-40 w-40 z-2 "
          />
          <span className="z-2">
            <p className="font-mono absolute font-bold text-4xl lg:text-8xl z-2 text-yellow-500">
              Techny Teams
            </p>
          </span>
        </div>
      </div>
    );
}

export default Home
