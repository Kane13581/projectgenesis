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

import "./components/AppsComponents/Apps.css";
import "./components/HomeComponents/HomeCSS.css";
import './App.css';

function App() {
  return (
    <Router>
    <div className="Padrino">
      <div className="Loading">
        <div className="HomeLoading1"></div>
        <div className="HomeLoading2"></div>
      </div>
      {/* <div className= "Home">
        <div className="HomeLoading">
                <div className="HomeLoading1">
                    <img
                        className="HomeLoadingStyle1"
                        src={require('./../src/assets/Home/Eye1.jpg')}
                        alt="Eye1.jpg"/>
                    
                </div>
                <div className="HomeLoading2">
                    <img
                        className="HomeLoadingStyle2"
                        src={require('./../src/assets/Home/Eye2.jpg')}
                        alt="Eye2.jpg"/>
                </div>

            </div> */}

      <div className="container-fluid">
        
        <div className="row ">
            {/* <div className="HomeLoading">
                <div className="HomeLoading1">
                    <img
                        className="HomeLoadingStyle1"
                        src={require('./../src/assets/Home/Eye1.jpg')}
                        alt="Eye1.jpg" />
                </div>
                <div className="HomeLoading2">
                    <img
                        className="HomeLoadingStyle2"
                        src={require('./../src/assets/Home/Eye2.jpg')}
                        alt="Eye2.jpg" />
                </div>

            </div> */}

          <div className="col-sm-6 col-lg-6">
            <Link to="/" className="HomeButtonStyle" >
              <img className="ITElement1Img" src={require('./assets/Home/TriangleDot.png')} alt="location.jpg" />
            </Link>
          </div>
      

          <div className="col-sm-2 col-lg-2">
            <Link to="/Apps" className="HobbiesButtonStyle">Apps</Link>
          </div>

          <div className="col-sm-2 col-lg-2">
            <Link to="/Games" className="HobbiesButtonStyle">Games</Link>
          </div>

          <div className="col-sm-2 col-lg-2">
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
      </div>
    </Router>
  );
}

export default App;
