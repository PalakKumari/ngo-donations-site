import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { Navbar } from "../src/components/Navbar/Navbar";
import { Footer } from "../src/components/Footer/Footer";
import Donation from "../src/components/donation_and_need_form/donation-form.js";
import Need from "../src/components/donation_and_need_form/need-form.js";
import MyBook from "./components/home/book";
import Stories from "./components/home/stories";
import User from  "./components/User-profile/User.js";
import {Loginpage} from "./components/Login-page/Login-page";
import Homepage from "./pages/Homepage";

import Event from "./components/Event/Event.js"

import Events from "./components/Event Page/Events";
import { SignupOption } from "./components/signup/SignupOption";
import { Sign1 } from "./components/signup/willingOrganisation/Sign1";
import { Sign2 } from "./components/signup/willingIndividual/Sign2";
import { Sign3 } from "./components/signup/lookingIndividual/Sign3";
import { Sign4 } from "./components/signup/lookingOrganisation/Sign4";


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>Welcome to MuckIn!!</p>
        </header>
      <User/>
      
        <a href="/donate" className="btn btn-info" style={{ float: "left", margin: "1rem" }}>
          Donate
        </a>
        <a href="/need" className="btn btn-info" style={{ float: "right", margin: "1rem" }}>
          Need
        </a>
        <br />
        <br />
        <Navbar />
        
        <center>
          <Switch>
            <Route path="/event" component={Event}/>
            <Route path="/" exact component={Homepage} />
            <Route path="/aboutus" component={MyBook} />
            <Route path="/faqs" component={Stories} />
            <Route path="/signup" component={Homepage} />
            <Route path="/donate" component={Donation} />
            <Route path="/need" component={Need} />
          </Switch>
        </center>
        <Loginpage />
        <Events />
        <br/>
        <SignupOption/>
        <br />
        <Sign1 />
        <br />
        <Sign2/>
        <br />
        <Sign3/>
        <br />
        <Sign4 />
        <br />
        <Footer />

      </div>
    </Router>

  );
}

export default App;
