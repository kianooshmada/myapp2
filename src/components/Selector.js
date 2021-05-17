import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { List } from "../pages/Products/List";
import { About } from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignUp";
export class Selector extends Component {
  render() {
    const UL = styled.ul`
      list-style-type: none;
      font-weight: bold;
    `;

    const LI = styled.li`
      display: inline;
      padding: 5rem;
    `;

    const routes = [
      {
        path: "/",
        component: "",
      },
      {
        path: "/productsList",
        component: "List",
      },
      {
        path: "about",
        component: "About",
      },
    ];

    return (
      <Router>
        <div>
          <nav>
            <UL>
              <LI>
                <Link to="/">Home</Link>
              </LI>
              <LI>
                <Link to="/productsList">Products List</Link>
              </LI>
              <LI>
                <Link to="/about">About</Link>
              </LI>
              <LI>
                <Link to="/contact">Contact</Link>
              </LI>
              <LI>
                <Link to="/signin">Sign In</Link>
              </LI>
              <LI>
                <Link to="/signup">Sign Up</Link>
              </LI>
            </UL>
          </nav>
          <Route path="/" />
          <Route path="/productsList" component={List} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}
