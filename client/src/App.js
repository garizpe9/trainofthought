import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeLandingPage from "./pages/LandingPage"
import FaceDetectionPage from './pages/FaceDetectionPage/FaceDetectionPage';
import Login from './pages/Passport/login';
import LandingPage from './component/LandingPage';
import Register from './pages/Passport/register';
import BottomAppBar from '../src/component/nav/BottomAppBar';
import CreateJournalPage from './pages/CreateJournalPage/CreateJournalPage';
import JournalEntries from './component/journal/JournalEntry'
import Home from './pages/Passport/home';

function App() {
  return (
    <Router>
      <div>
        <BottomAppBar/>
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
            <HomeLandingPage />
          </Route>
          <Route exact path={"/register"}>
            <Register />
          </Route>
          <Route exact path={"/journalentries"}>
            <JournalEntries />
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
