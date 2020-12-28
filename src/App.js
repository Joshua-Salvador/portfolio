import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";

import Home from "./components/Home";
import Projects from "./components/Projects";
import SideBar from "./components/SideBar";
// import Skills from "./components/Skills";

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar className="sidebar" />
        <Switch>
          {/* <Route exact path="/skills">
            <Skills className="page" />
          </Route> */}
          <Route exact path="/projects">
            <Projects className="page" />
          </Route>
          <Route exact path="/contact">
            <Contact className="page" />
          </Route>
          <Route path="/">
            <Home className="page" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
