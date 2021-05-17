import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import styled from "styled-components";
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
        {/* <Router>
          <UL>
            <LI>
              <Link to="/test" href="/Test">
                Products
              </Link>

              <Route path="/test" Component={Test}></Route>
            </LI>
          </UL>
        </Router> */}
      </div>
    );
  }
}
