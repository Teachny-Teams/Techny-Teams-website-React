import "./App.css";
import Home from "./Pages/Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Blog from "./Pages/Blog";
import NextJSTailwind from "./Pages/Blogs/NextJSTailwind";


function App() {
  return (
    <div className="app">
      <div className="margin"></div>
      <section className="parallax">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/blogs">
              <Blog />
            </Route>
            <Route exact path="/blogs/reactjs-tailwind-config-with-jit">
              <NextJSTailwind />
            </Route>
          </Switch>
        </Router>
      </section>
    </div>
  );
}

export default App;
