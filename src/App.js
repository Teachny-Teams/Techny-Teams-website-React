import "./App.css";
import Navbar from './Components/Navbar/Navbar'
import Home from "./Pages/Home";
function App() {
  return (
    <div className="app">
      <div className="margin"></div>
      <section className="parallax">
        <Navbar />
        <Home/>
      </section>
    </div>
  );
}

export default App;
