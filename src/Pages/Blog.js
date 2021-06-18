// import Navbar from "../Components/Navbar/Navbar";
// import blogs from "./Blogs";
// function Blog() {
//   return (
//     <div>
//       <Navbar />
//       <div className="flex flex-row justify-center items-center min-h-full bg-app-background bg-center bg-no-repeat bg-cover">
//         <div
//           className="flex flex-col lg:flex-row bg-white bg-opacity-10 rounded-3xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6"
//           style={{
//             backdropFilter: "blur(10px)",
//           }}
//         >
//           <div
//             className="py-8 px-4 lg:px-6 bg-white bg-opacity-10 flex flex-col w-full lg:w-auto lg:max-w-xs"
//             style={{
//               backdropFilter: "blur(10px)",
//             }}
//           >
//             {blogs.map((blog) => {
//               return (
//                 <div className="">
//                     <img src={blog.thumbnail} alt="logo" className='w-50 h-50' />
//                   <h1>{blog.title}</h1>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Blog;

import Navbar from "../Components/Navbar/Navbar";
import blogs from "./Blogs";
function Blog() {
  return (
    <div className='w-full h-full bg-transparent z--10'>
      <Navbar />
      <div className="pt-[55px] w-full h-full z-6 " style={{ top: 58 }}>
        {blogs.map((blog) => {
          return (
            <div className="flex flex-row justify-center items-center min-h-full bg-app-background bg-center bg-no-repeat bg-cover">
              <div
                className="flex flex-col lg:flex-row  bg-opacity-10 rounded-3xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6"
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
                      src={blog.thumbnail}
                      alt="logo"
                      className="w-50 h-50"
                    />
                    <h1>{blog.title}</h1>
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
