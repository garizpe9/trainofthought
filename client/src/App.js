import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomeLandingPage from "../src/component/pages/LandingPage";
import NavBar from "./component/nav/Navbar"

function App() {
  return  (
    <Router>
      <div>
      <NavBar/>
      <Switch>
        <Route exact path={["/", "/home"]}>
          <HomeLandingPage />
       </Route>
      </Switch>
      </div>
    </Router>
  );
}


export default App;
