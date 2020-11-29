import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../../App.css";
import JournalCard from "../../component/journal/JournalCard";
import JournalEntry from "../../component/journal/JournalEntry";
import Jumbotron from "../../component/jumbotron/Jumbotron";
import LandingPage from "../../component/LandingPage";
import NavBar from "../../component/nav/Navbar"

class HomeLandingPage extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <NavBar/>
        <Jumbotron/>
        <LandingPage/>
        <JournalCard/>
        <JournalEntry/>
        </Router>
       
      </div>
    );
  }
}

export default HomeLandingPage;
