import React from "react";
import Product from "./Product";
import "./productDropdown.css";

const ProductDropdown = (props) => {
  const products = props.products;
  return (
    <div>
      <div className="productCards">
        {products.map((product) => (
          <Product id={product.id} src={product.src} name={product.name} />
        ))}
      </div>
    </div>
  );
};
export default ProductDropdown;
