import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import logo from "./logo.svg";
import "./App.css";
import Jumbotron from "./component/jumbotron/Jumbotron";
import LandingPage from "./component/LandingPage";
import NavBar from "./component/nav/NavBar"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <NavBar/>
        <Jumbotron/>
        <LandingPage/>
        </Router>
       
      </div>
    );
  }
}

export default App;
