import "./App.css";
import Navbar from './Components/Navbar/Navbar'
import Home from "./Pages/Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from "./Pages/About";


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
            <Route path='/about'>
              <About />
            </Route>
          </Switch>
        </Router>
      </section>
    </div>
  );
}

export default App;
