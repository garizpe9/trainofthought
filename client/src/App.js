import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FaceDetectionPage from './pages/FaceDetectionPage/FaceDetectionPage';
import Login from './pages/Passport/login';
import LandingPage from './component/LandingPage';
import Register from './pages/Passport/register';
import CreateJournalPage from './pages/CreateJournalPage/CreateJournalPage';
import JournalEntriesPage from './pages/JournalEntriesPage/JournalEntriesPage';
import Home from './pages/Passport/home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/"]}>
            <Home />
          </Route>
          <Route exact path={"/facerec"}>
            <FaceDetectionPage />
          </Route>
          <Route exact path={"/login"}>
            <Login />
          </Route>
          <Route exact path={"/home"}>
            <LandingPage />
          </Route>
          <Route exact path={"/register"}>
            <Register />
          </Route>
          <Route exact path={"/journalentries"}>
            <JournalEntriesPage />
          </Route>
          <Route exact path={"/createjournal"}>
            <CreateJournalPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
