import Navbar from "../Components/Navbar/Navbar";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import React from "react";
import { SiJavascript, SiPhp, SiJava, SiPython } from "react-icons/si";
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
    <div>
      <Navbar />

      <div
        className="flex flex-row justify-center items-center min-h-full bg-app-background bg-center bg-no-repeat bg-cover pt-[62px] w-full h-full z-6 "
        style={{ top: 62 }}
      >
        <main
          className="flex flex-col lg:flex-row bg-white bg-opacity-10 rounded-3xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6"
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
              className="rounded-full shadow-sm w-40 h-40 mb-4 border-2 border-white select-none mx-auto"
              // src={"https://i.ibb.co/09sKC6C/TANISHQ-SINGH-ANAND-1.jpg"}
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
                I know , Java,Javascript,Python and React(React Native also){" "}
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

            <div className="grid grid-rows-4 grid-cols-1 gap-4 md:grid-rows-2 md:grid-cols-2">
              <div>
                <img
                  width={50}
                  height={50}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default About;
