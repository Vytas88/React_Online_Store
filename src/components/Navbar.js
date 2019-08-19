import React, { Component } from "react";
import { Link } from "react-router-dom";
import home from "../home.svg";
import shoppingCart from "../shopping_cart.svg";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <h2>Home</h2>
        <Link to="/">
          <img src={home} alt="home" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              <img src={home} alt="Homepage" />
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button>
            <img src={shoppingCart} alt="shoppingCart" />
            My Cart
          </button>
        </Link>
      </nav>
    );
  }
}
