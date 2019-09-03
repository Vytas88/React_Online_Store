import React, { Component } from "react";
// Switch returns only the first matching route rather than all matching routes.
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import PageNotFound from "./components/PageNotFound";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/details/:id" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={PageNotFound} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
