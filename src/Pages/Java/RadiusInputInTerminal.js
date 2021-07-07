// import Navbar from "../../../../Components/Navbar/Navbar";
// import Navbar from "../../../Components/Navbar/Navbar";

import Navbar from "../../Components/Navbar/Navbar";

function NextJSTailwind() {
  return (
    <div className="w-full h-full align-center justify-center">
      <Navbar />
      <div className="pt-[62px] w-full h-full z-6 " style={{ top: 62 }}>
        <div className="w-full flex flex-col flex-1 justify-center items-center min-h-full bg-app-background bg-center bg-no-repeat bg-cover ">
          <div
            className="flex flex-col lg:flex-col  bg-opacity-10 rounded-3xl overflow-hidden w-full max-w-7xl shadow-lg "
            style={{
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              className="py-8 px-4 lg:px-6 bg-white bg-opacity-10 flex flex-col w-full  justify-center items-center "
              style={{
                backdropFilter: "blur(10px)",
              }}
            >
              <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-white font-semibold m-b-5">
                Set Tailwind CSS in reactJS and enable JIT engine
              </h1>
              <img
                className="rounded-md shadow-sm w-auto h-80 pt-50"
                src={"https://i.ibb.co/XWWG05n/React-JS-Tailwind-CSS.png"}
                alt="logo"
              />
            </div>
            <div className="flex-1 p-4 lg:p-6">
              <div className="text-lg text-white font-semibold mb-8 flex items-center justify-center">
                <div className="m-5">
                  <h1>TSA</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextJSTailwind;
