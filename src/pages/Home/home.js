import React, { useState, Component } from "react";
import { SignIn } from "../SignIn/SignIn";
import { SignUp } from "../SignUp/SignUp";
import { Selector } from "../../components/Selector";

export class Home extends Component {
  componentDidMount() {
    console.log("asdasd");
  }
  componentDidUpdate() {
    console.log("13212332");
  }
  render() {
    console.log(window.location.pathname);
    if (window.location.pathname === "/signin") {
      //alert();
      return (
        <div>
          <SignIn />
        </div>
      );
    } else if (window.location.pathname === "/signup") {
      //alert();
      return (
        <div>
          <SignUp />
        </div>
      );
    }
    return (
      <div>
        <h1>Home....</h1>
        <div>
          <header>header......</header>
          <Selector />
          <footer>footer....</footer>
        </div>
      </div>
    );
  }
}
