import React, { Component } from "react";
import "./App.css";
import { Selector } from "./components/Selector";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { List } from "./containers/Products/List";
import { About } from "./containers/About/About";
import { Contact } from "./containers/Contact/Contact";
import { SignIn } from "./containers/SignIn/SignIn";
import { SignUp } from "./containers/SignUp/SignUp";
export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/productsList">Products List</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
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

export default App;
