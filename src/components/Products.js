import React, { Component } from "react";
import SingleProduct from "./SingleProduct";
import Title from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../context";

export default class Products extends Component {
  state = {
    products: storeProducts
  };
  handleDetail = () => {
    console.log("Hello from handleDetail");
  };
  addToCart = () => {
    console.log("Hello from addToCart");
  };

  render() {
    console.log(this.state.products);
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="" title="products" />
            <div className="row">
              <ProductConsumer>
                {/* we use function to get that data, in our case it is in value="" from context.js */}
                {/* value can be object with properties and methods (...this.state) as well */}
                {value => {
                  return value.products.map(product => {
                    return <SingleProduct key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
