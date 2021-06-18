import "./App.css";
import Home from "./Pages/Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Blog from "./Pages/Blog";


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
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
          </Switch>
        </Router>
      </section>
    </div>
  );
}

export default App;
