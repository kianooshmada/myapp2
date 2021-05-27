import React, { useState, Component } from "react";
import { SignIn } from "../SignIn/SignIn";
import { SignUp } from "../SignUp/SignUp";
import { Selector } from "../../components/Selector";

export class Home extends Component {
  render() {
    return (
      <div>
        <header>header......</header>
        <Selector />
        <footer>footer....</footer>
      </div>
    );
  }
}
