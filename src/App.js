import React, { Component } from "react";
import { BrowserRouter, Switch, Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import "./App.css";
import styled from "styled-components";
import routes from "./utilities/Routes";
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
    console.log(routes);
    return (
      <div className="App">
        <BrowserRouter>
          <UL>
            <LI>
              <Link to="/">Home</Link>
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
          <Switch>{renderRoutes(routes)}</Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
