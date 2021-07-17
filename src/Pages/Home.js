import "../index.css";
import Header from "../Components/Navbar/Navbar";
import Particles from "react-tsparticles";
import config from "./ParticleConfig";
import Blog from "./Blog";
import "./layout.css";
import "./style.css";

function Home() {
  return (
    <div className="bg-opacity-0 h-screen w-screen ">
      <div className=" h-full bg-opacity-0 w-full  items-center justify-center">
        <Particles
          className="fixed w-full z--10 bg-opacity-0"
          id="tsparticles"
          options={config}
        />
        <Header className="z-2" />
        <div
          className="relative h-screen overflow-y-scroll pt-[55px] w-full z-6"
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
          {/* <Blog className="blogg fixed" nav={false} /> */}
          <div className="lg:mx-28 bg-opacity-10 h-screen">
            <div className="flex flex-row justify-center items-center min-h-full bg-app-background bg-center bg-no-repeat bg-cover">
              <div
                className="flex flex-col  border-l-8 lg:flex-row  bg-opacity-10 rounded-3xl overflow-hidden w-full lg:max-w-5xl shadow-lg m-4 lg:m-6"
                style={{
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="py-8 px-4 lg:px-6  bg-opacity-10 flex flex-col w-full lg:w-auto "
                  style={{
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <div className="z-2 w-full items-center justify-center para text-white">
                    Welcome to Techny teams. This is Tanishq Singh Anand of
                    Yadavindra Public School Moahli. <br />
                    I am fluent in classics like Javascript and Python. Whenever
                    possible, I also apply my passion for developing products
                    with Node.js and Modern Javascript Library and Frameworks
                    like React.js and Next.js. <br />
                    Do check my Project page for all of my active projects with
                    access to Source Code on Github. <br />
                    Recently I have started learning Java as part of my school
                    Curriculum. I am uploading all sample program as per ICSE
                    board on my JAVA Page. Check this page on weekly basis for
                    new Program Code
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
