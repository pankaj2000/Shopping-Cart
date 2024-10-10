import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  // console.log(props.productList.length);
  return props.productList.length > 0 ? props.productList.map((product, i) => {
    return  (
      <Product
        product={product}
        key={i}
        incrementQuantity={props.incrementQuantity}
        decrementQuantity={props.decrementQuantity}
        index={i}
        removeItem={props.removeItem}
      />
    );
  }): 
  <h1>No product are added in the cart !!</h1>;
}
