import React, { Component } from "react";
import "./App.css";
import { Selector } from "./components/Selector";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Products from "./Products";
export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>
          <Route path="/products" component={Products} />
        </div>
      </Router>
    );
  }
}

export default App;
