import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import Contacts from "./components/contacts";
import Hobbies from "./components/Hobbies";

import './App.css';

function App() {
  return (
    <Router>
      <div class="container-fluid">
        <div class="row ">

          <div class="col-sm-6 col-lg-6">
            <Link to="/" className="HomeButtonStyle" >Home</Link>
          </div>

          <div class="col-sm-2 col-lg-2">
            <Link to="/Hobbies" className="HobbiesButtonStyle">Hobbies</Link>
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
            <Route path="/hobbies">
              <Hobbies />
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
