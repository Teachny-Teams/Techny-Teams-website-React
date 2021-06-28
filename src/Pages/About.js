import Navbar from "../Components/Navbar/Navbar";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import React from "react";
import {
  FiCode,
  FiGithub,
  FiLinkedin,
  FiMessageSquare,
  FiUser,
  FiMail,
} from "react-icons/fi";

function About() {
  return (
    <div className="w-full lg:h-screen sm:h-full items-center justify-center">
      <Navbar />
      <div className="pt-[62px] w-full h-full z-6 " style={{ top: 62 }}>
        <div
          className="flex  flex-row justify-center items-center min-h-full bg-app-background bg-center bg-no-repeat bg-cover pt-[62px] w-full h-full z-6 "
          style={{ top: 62 }}
        >
          <main
            className="flex  items-center justify-center flex-col lg:flex-row bg-white bg-opacity-10 rounded-3xl overflow-hidden w-full max-w-7xl shadow-lg m-4 lg:m-4"
            style={{
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              className="py-8 px-4 lg:px-6 bg-white bg-opacity-10 flex flex-col w-full lg:w-auto lg:max-w-xs"
              style={{
                backdropFilter: "blur(10px)",
              }}
            >
              <img
                className="rounded-full shadow-sm  mb-4 border-2 border-white select-none mx-auto"
                src={"https://i.ibb.co/7gpwLXm/tsa-2.jpg"}
                alt={"Tanishq"}
                draggable={false}
              />

              <div className="text-white text-lg font-black flex items-center mb-2">
                <FiUser />
                <span className="ml-4">Tanishq Singh Anand</span>
              </div>

              <div className="text-white flex items-center">
                <FiMessageSquare />
                <span className="ml-4">
                  I know , Java, Javascript, Python and React(React Native also){" "}
                </span>
              </div>

              <div className="flex flex-row flex-wrap justify-center mt-auto">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/TanishqSinghAnand"
                  className="rounded-full w-10 h-10 flex flex-row justify-center items-center bg-white bg-opacity-10 hover:bg-opacity-20 text-white mt-4 mx-1"
                >
                  <FiGithub />
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/tanishq-s-anand-91743119b/"
                  className="rounded-full w-10 h-10 flex flex-row justify-center items-center bg-white bg-opacity-10 hover:bg-opacity-20 text-white mt-4 mx-1"
                >
                  <FiLinkedin />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.com/users/785909322151755848"
                  className="rounded-full w-10 h-10 flex flex-row justify-center items-center bg-white bg-opacity-10 hover:bg-opacity-20 text-white mt-4 mx-1"
                >
                  <FaDiscord />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/tanishq0504/"
                  className="rounded-full w-10 h-10 flex flex-row justify-center items-center bg-white bg-opacity-10 hover:bg-opacity-20 text-white mt-4 mx-1"
                >
                  <FaInstagram />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:anandtanishqs@gmail.com"
                  className="rounded-full w-10 h-10 flex flex-row justify-center items-center bg-white bg-opacity-10 hover:bg-opacity-20 text-white mt-4 mx-1"
                >
                  <FiMail />
                </a>
              </div>
            </div>

            <div className="flex-1 p-4 lg:p-6">
              <div className="text-lg text-white font-black mb-8 flex items-center">
                <FiCode />
                <div className="ml-4">About</div>
              </div>

              <div className="w-full text-white text-lg">
                <p className="w-full">
                  I'm an India based React Native developer. Night developer .
                  Love Coding. <br /> <br />I am fluent in classics like
                  Javascript and Python.
                  <br />
                  <br /> My field of Interest's are building new Web
                  Technologies and Products and also in areas related to Deep
                  Learning and Natural Launguage Processing.
                  <br />
                  <br />
                  Whenever possible, I also apply my passion for developing
                  products with Node.js and Modern Javascript Library and
                  Frameworks like React.js ans Next.js
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default About;
