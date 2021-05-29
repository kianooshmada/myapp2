import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { SignUp } from "./pages/SignUp/SignUp";
import { SignIn } from "./pages/SignIn/SignIn";
import { Home } from "./pages/Home/home";
import MainLayout from "./pages/Layouts/Main";
import styled from "styled-components";
import { routes } from "./utilities/Routes";

export class App extends Component {
  render() {
    const UL = styled.ul`
      list-style-type: none;
      font-weight: bold;
    `;

    const LI = styled.li`
      display: inline;
      padding: 5rem;
    `;
    return (
      <div className="App">
        <Router>
          <UL>
            <LI>
              <Link to="/home">Home</Link>
            </LI>
            <LI>
              <Link to="/about">About us</Link>
            </LI>
            <LI>
              <Link to="/contact">Contact us</Link>
            </LI>
            <LI>
              <Link to="/signin">Sing in</Link>
            </LI>
            <LI>
              <Link to="/signup">Sing up</Link>
            </LI>
          </UL>
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <MainLayout>
              <Switch>
                {routes.map((route, i) => (
                  <Route key={i} {...route} />
                ))}
              </Switch>
            </MainLayout>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
