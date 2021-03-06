import "../index.css";
import Header from "../Components/Navbar/Navbar";
import Particles from "react-tsparticles";
import config from "./ParticleConfig";
import Blog from "./Blog";
import "./layout.css";
import "./style.css";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Link } from "react-router-dom";

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
          <div className="h-full flex flex-col items-center justify-center z-2 -top-12">
            <img
              src="https://tanishqsinghanand.github.io/Techny-Teams/img/image.jpeg"
              className="h-40 w-40 lg:h-72 lg:w-72 z-1"
              alt="logo"
            />
            <span className="z-2">
              <p className="header__text font-bold text-4xl lg:text-8xl z-2 text-yellow-500">
                Techny Teams
              </p>
            </span>
            {/* <a href="#about"> */}
              <div className="up_down_ani">
                <ArrowDownwardIcon className="lg:text-7xl w-60 h-60 arrow_down" />
              </div>
            {/* </a> */}
          </div>
          {/* <hr class="hr-text" data-content="JavaScript Blogs"/> */}
          {/* <Blog className="blogg fixed" nav={false} /> */}
          <section id="about">
            <div className="lg:mx-28 bg-opacity-10 h-auto pb-12">
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
                    <div className="z-2 w-full sm:text-base lg:text-2xl	 items-center justify-center para text-white">
                      Welcome to Techny teams. <br />
                      This is Tanishq Singh Anand, a grade IX student of
                      Yadavindra Public School, Mohali. <br />
                      I am fluent in classics like Javascript and Python.
                      Whenever possible, I also apply my passion in developing
                      products with Node.js and Modern Javascript Library and
                      Frameworks like React.js and Next.js. <br />
                      <br />
                      Do check my{" "}
                      <Link exact to="/projects">
                        <i className="link">Project page</i>
                      </Link>{" "}
                      for all of my active projects with access to Source Code
                      on Github. <br />
                      <br />
                      Recently I have started learning Java as part of my school
                      Curriculum. I am uploading all sample programs as per ICSE
                      board on my{" "}
                      <Link exact to="/blogs">
                        <i className="link">JAVA Page</i>
                      </Link>{" "}
                      Check this page on weekly basis for new Program updates.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <p className="min-h-20 m-12 p-12"></p> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
