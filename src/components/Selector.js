import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../utilities/Routes";

//import Main from "../containers/Layouts/Main";
import MainAdmin from "../pages/Layouts/MainAdmin";
import { SignIn } from "../pages/SignIn/SignIn";

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
        <nav>
          <UL>
            {routes.map((r, i) => (
              <LI key={i}>
                <Link key={i} to={r.path}>
                  {r.text}
                </Link>
              </LI>
            ))}
          </UL>
        </nav>
        {routes.map((r, i) => (
          <Route key={i} path={r.path} component={r.component} />
        ))}
      </div>
    );
  }
}
