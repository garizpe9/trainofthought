import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeLandingPage from "./pages/LandingPage"
import FaceDetectionPage from './pages/FaceDetectionPage/FaceDetectionPage';
import Login from './pages/Passport/login';
import LandingPage from './component/LandingPage';
import Register from './pages/Passport/register';
import BottomAppBar from '../src/component/nav/BottomAppBar'
import CreateJournalPage from './pages/CreateJournalPage/CreateJournalPage'

function App() {
  return (
    <Router>
      <div>
        <BottomAppBar/>
        <Switch>
          <Route exact path={["/"]}>
            <HomeLandingPage />
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
          <Route exact path={"/createjournal"}>
            <CreateJournalPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
