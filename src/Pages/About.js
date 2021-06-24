import Navbar from "../Components/Navbar/Navbar";
function About() {
  return (
    <div className="w-full h-full bg-opacity-0 text-white">
      <Navbar className="z-2 absolute" />
      <div className="pt-[65px] w-full h-full z-6" style={{ top: 65 }}>
        <div className="flex flex-col md:flex-row lg:flex-row  w-full items-center justify-center h-full">
          {/* <div className="p-20"> */}
          <div className="lg:flex-4 flex flex-col w-full items-center justify-center mb-10 border-blue-700">
            <img
              className="rounded-lg mb-5 w-full items-center justify-center"
              src={"https://i.ibb.co/09sKC6C/TANISHQ-SINGH-ANAND-1.jpg"}
              alt="Tanishq's Pic"
              style={{
                width: "150px",
              }}
            />
            {/* </div> */}
            <h1>
              Name - Tanishq
            </h1>
          </div>
          <div className="w-full flex items-center justify-center lg:flex-6 ">
            <h1>Flex 6 wala part</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
