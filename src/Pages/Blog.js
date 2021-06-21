import Truncate from "react-truncate";
import Navbar from "../Components/Navbar/Navbar";
import blogs from "./Blogs";
function Blog() {
  return (
    <div className="w-full h-full bg-transparent z--10">
      <Navbar />
      <div className="pt-[55px] w-full h-full z-6 " style={{ top: 58 }}>
        {blogs.map((blog) => {
          return (
            <div className="flex flex-row justify-center items-center min-h-full bg-app-background bg-center bg-no-repeat bg-cover">
              <div
                className="flex flex-col  border-l-8 lg:flex-row  bg-opacity-10 rounded-3xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6"
                style={{
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="py-8 px-4 lg:px-6  bg-opacity-10 flex flex-col w-full lg:w-auto lg:max-w-xs"
                  style={{
                    backdropFilter: "blur(10px)",
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
                    <div className="ml-4">
                      <Truncate
                        lines={3}
                        ellipsis={
                          <span>
                            ... <a href="/link/to/article">Read more</a>
                          </span>
                        }
                        className="w-full"
                      >
                        {blog.description}
                      </Truncate>
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

export default Blog;
