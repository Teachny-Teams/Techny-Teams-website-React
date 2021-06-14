import "../index.css";
import Header from '../Components/Navbar/Navbar'
function Home() {
    return (
      <div className="bg-opacity-0 h-screen w-screen">
        <Header />
        <div className=" flex flex-col h-screen items-center justify-center">
          <img
            src="https://technyteams.netlify.app/img/image.jpeg"
            className="h-40 w-40"
          />
          <span>
            <p className="font-mono font-bold text-4xl lg:text-8xl text-yellow-500">Techny Teams</p>
          </span>
        </div>
      </div>
    );
}

export default Home
