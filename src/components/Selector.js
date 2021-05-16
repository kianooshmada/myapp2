import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import styled from "styled-components";
import { Details } from "../containers/Products/Details";
import { Test } from "./test";
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

    return (
      <div>
        <Router>
          <UL>
            <LI>
              <Test />
              <Link to="/Test" href="/Test">
                Products
              </Link>

              <Route path="/Test" Component={Test}></Route>
            </LI>
          </UL>
        </Router>
      </div>
    );
  }
}
