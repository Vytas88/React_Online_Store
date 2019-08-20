import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//1. Will be Provider(PROvide the information to all app)
//2. Will be Consumer(will be able to grab information)
class ProductProvider extends Component {
  state = {
    products: storeProducts
    // detailProduct: detailProduct
  };
  render() {
    return (
      // <ProductContext.Provider> will be sitting on the top of component tree, it should sit as high as possible so to reach
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {/* Return all our children */}
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
