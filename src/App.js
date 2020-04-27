import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import Contacts from "./components/contacts";
import Games from "./components/Games"
import Apps from "./components/Apps";


import "./components/HomeComponents/HomeCSS.css";
import './App.css';

function App() {
  return (
    <Router>
      <div class="container-fluid">
        <div class="row ">

          <div class="col-sm-6 col-lg-6">
            <Link to="/" className="HomeButtonStyle" >
              <img className="ITElement1Img" src={require('./assets/Home/geometricpattern.jpg')} alt="location.jpg" />
            </Link>
          </div>

          <div class="col-sm-2 col-lg-2">
            <Link to="/Apps" className="HobbiesButtonStyle">Apps</Link>
          </div>

          <div class="col-sm-2 col-lg-2">
            <Link to="/Games" className="HobbiesButtonStyle">Games</Link>
          </div>

          <div class="col-sm-2 col-lg-2">
            <Link to="/contacts" className="ContactsButtonStyle">Contact</Link>
          </div>
        </div>
      </div>


      <div className="BigPicture">
        <div className="PageContents">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/apps">
              <Apps />
            </Route>
            <Route path="/games">
              <Games />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
