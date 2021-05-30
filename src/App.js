import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { BrowserRouter, Switch, Link } from "react-router-dom";

import { renderRoutes } from "react-router-config";

import "./App.css";
import { SignUp } from "./pages/SignUp/SignUp";
import { SignIn } from "./pages/SignIn/SignIn";
import MainLayout from "./pages/Layouts/Main";
import AdminLayout from "./pages/Layouts/Admin";
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

    // const Root = ({ route }) => (
    //   <div>
    //     <h1>Root</h1>
    //     {renderRoutes(route.routes)}
    //   </div>
    // );

    return (
      <div className="App">
        {/* <Router>
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
            <AdminLayout path="/signin" component={SignIn} />
            <AdminLayout path="/signup" component={SignUp} />
            <MainLayout>
              {routes.map((route, i) => (
                <Route key={i} {...route} />
              ))}
            </MainLayout>
          </Switch>
        </Router> */}
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
