import Truncate from "react-truncate";
import Navbar from "../../Components/Navbar/Navbar";
import blogs from "./blogs";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import NextJSTailwind from "./Blogs/Javascript/React/NextJSTailwind";

function JavaHome() {
  return (
    <div className="w-full h-screen bg-transparent z--10">
      {/* <Router>
        <Switch>
          <Route exact path="/blogs/reactjs-tailwind-config-with-jit">
            <NextJSTailwind />
          </Route>
        </Switch>
      </Router> */}
      <Navbar />
      <div className="pt-[55px] w-full h-full z-6 " style={{ top: 58 }}>
        {blogs.map((blog) => {
          return (
            <div className="flex flex-row justify-center items-center min-h-full bg-app-background bg-center bg-no-repeat bg-cover">
              <div
                className="flex flex-col  lg:flex-row  bg-opacity-10 rounded-3xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6"
                style={{
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="py-8 px-4 lg:px-6  bg-opacity-10 flex flex-col w-full lg:w-auto lg:max-w-xs"
                  style={{
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <div className="">
                    <img
                      className="rounded-full shadow-sm w-40 h-40 mb-4 border-2 border-white select-none mx-auto"
                      src={blog.thumbnail}
                      alt="logo"
                      // className="w-50 h-50"
                    />
                    <h1 className="text-lg text-white font-semibold">
                      {blog.title}
                    </h1>
                  </div>
                </div>
                <div className="flex-1 p-4 lg:p-6">
                  <div className="text-lg text-white font-semibold mb-8 flex items-center justify-center">
                    <div className="m-5">
                      <div
                        className="w-full flex-1 "
                        // style={{paddingRight: 80,paddingLeft:"56px"}}
                      >
                        <center>
                          <p className="w-full flex-1 max-w-md blooog">
                            Description : {blog.description}
                            <p className="mt-5" />
                            <a href={blog.gistLink}>
                              Check out the code on github
                            </a>
                            {/* Gist Link : {blog.gistLink} */}
                          </p>
                        </center>
                      </div>
                      {/* <Link exact to="/blogs/nextjs-tailwind-config-with-jit">
                        read more
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default JavaHome;
