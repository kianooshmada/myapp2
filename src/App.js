import React, { Component } from "react";
import "./App.css";
import { Selector } from "./components/Selector";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Selector />
        <div>layout....</div>
      </div>
    );
  }
}

export default App;
