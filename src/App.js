import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import { Contact } from "./pages/Contact/Contact";
import { Home } from "./pages/Home/home";
import Main from "./pages/Layouts/Main";
import MainAdmin from "./pages/Layouts/MainAdmin";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";

export class App extends Component {
  render() {
    const NavBar = (props) => <div>Nav Bar</div>;

    return (
      <div className="App">
        <Router>
          <Link to="/signin">Sing in</Link>
          <Link to="/signup">Sing up</Link>
          {/* <Home /> */}
          <example />
          {/* <Switch>
            <div>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
            </div>
            <Main>
              <Route exact path="/contact" component={Contact} />
            </Main>
          </Switch> */}
        </Router>
      </div>
    );
  }
}

export default App;
