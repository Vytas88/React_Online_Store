import React, { Component } from "react";
// Switch returns only the first matching route rather than all matching routes.
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Details from "./components/Details";
import Cart from "./components/Cart";
import PageNotFound from "./components/PageNotFound";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={PageNotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
