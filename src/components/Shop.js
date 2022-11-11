import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import "../css/styles.css";

export default function Shop() {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, searchQuery },
  } = CartState();

  const applyFilters = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.productInStock);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.productFastDelivery
      );
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.productName.includes(searchQuery)
      );
    }
    return sortedProducts;
  };

  return (
    <div className="shop">
      <div className="productContainer">
        {applyFilters().map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
}
