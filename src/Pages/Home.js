import "../index.css";
import Header from "../Components/Navbar/Navbar";
import Particles from "react-tsparticles";
import config from "./ParticleConfig";
import Blog from "./Blog";
import './layout.css'
import './style.css'
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
        <div
          className="relative 

           pt-[55px] w-full h-screen z-6"
          style={{ top: 58 }}
        >
          <div className="h-full flex flex-col items-center justify-center z-2 ">
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
          {/* <hr class="hr-text" data-content="JavaScript Blogs"/> */}
          {/* <Blog className="blogg" nav={false} /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
