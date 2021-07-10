import Navbar from "../Components/Navbar/Navbar";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JavaHome from "./Java/JavaHome";
import JavaScriptHome from "./Javascript/JavaScriptHome";
import PythonHome from "./Python/PythonHome";
const langages = [
  {
    lang: "ICSE Java class 9 and 10",
    url: "/blogs/java",
    thumbnail:
      "https://qph.fs.quoracdn.net/main-qimg-48b7a3d8958565e7aa3ad4dbf2312770.webp",
  },
  {
    lang: "JavaScript",
    url: "/blogs/javascript",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSswE6tnbgoKpipA4qMIRlsVUg7DzTORsWSUw&usqp=CAU",
  },
  {
    lang: "Python",
    url: "/blogs/python",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",
  },
];
function Blog() {
  return (
    <div className="w-full h-full bg-transparent z--10">
      <Router>
        <Switch>
          <Route exact path="/blogs/javascript">
            <JavaScriptHome />
          </Route>
          <Route exact path="/blogs/python">
            <PythonHome />
          </Route>
          <Route exact path="/blogs/java">
            <JavaHome />
          </Route>
        </Switch>
      </Router>
      <Navbar />
      <div className="pt-[55px] w-full h-full z-6 " style={{ top: 58 }}>
        {langages.map((lang) => {
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
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <div className=" w-full items-center justify-center">
                    <img
                      className="rounded-full bg-black shadow-sm w-40 h-40 mb-4 border-2 border-white select-none mx-auto"
                      src={lang.thumbnail}
                      alt="logo"
                      // className="w-50 h-50"
                    />
                    <center>
                      <h1 className="text-lg  text-white font-semibold">
                        {lang.lang}
                      </h1>
                    </center>
                  </div>
                </div>
                <div className="flex-1 p-4 lg:p-6">
                  <div className="text-lg text-white font-semibold mb-8 flex items-center h-full justify-center">
                    <div className="m-5">
                      {lang.description}
                      <Link exact to={lang.url}>
                        Visit blog of <i>{lang.lang}</i>
                      </Link>

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

export default Blog;
