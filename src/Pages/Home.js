import "../index.css";
import Header from "../Components/Navbar/Navbar";
import Particles from "react-tsparticles";
import config from "./ParticleConfig";

function Home() {
  return (
    <div className="bg-opacity-0 h-screen w-screen">
      <div className=" h-full bg-opacity-0 w-full items-center justify-center">
        <Particles
          className="fixed w-full z--10 bg-opacity-0"
          id="tsparticles"
          options={config}
        />
        <Header className="z-2" />
        <div className="pt-[55px] w-full h-full z-6" style={{ top: 58 }}>
          <div className="relative h-full flex flex-col items-center justify-center z-2 ">
            <img
              src="https://tanishqsinghanand.github.io/Techny-Teams/img/image.jpeg"
              className="h-40 w-40 z-1"
              alt="logo"
            />
            <span className="z-2">
              <p className="font-mono  font-bold text-4xl lg:text-8xl z-2 text-yellow-500">
                Techny Teams
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
