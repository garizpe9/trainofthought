import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./component/LandingPage";
import NavBar from "./component/nav/Navbar"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <NavBar/>
        <LandingPage/>
        </Router>
       
      </div>
    );
  }
}

export default App;
