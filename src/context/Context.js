import React, { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";
import { faker } from "@faker-js/faker";

const Cart = createContext();

export default function Context({ children }) {
  const products = [
    {
      id: 1,
      image: faker.image.abstract(320, 320, true),
      productName: "Shoes",
      price: 500,
      productInStock: false,
      productFastDelivery: true,
      rating: 5,
    },
    {
      id: 2,
      image: faker.image.abstract(320, 320, true),
      productName: "Iphone",
      price: 200,
      productInStock: true,
      productFastDelivery: false,
      rating: 5,
    },
    {
      id: 3,
      image: faker.image.abstract(320, 320, true),
      productName: "Camera",
      price: 200,
      productInStock: false,
      productFastDelivery: true,
      rating: 3,
    },
    {
      id: 4,
      image: faker.image.abstract(320, 320, true),
      productName: "Laptop",
      price: 150,
      productInStock: true,
      productFastDelivery: true,
      rating: 4,
    },
    {
      id: 5,
      image: faker.image.abstract(320, 320, true),
      productName: "Shoes",
      price: 300,
      productInStock: true,
      productFastDelivery: true,
      rating: 5,
    },
    {
      id: 6,
      image: faker.image.abstract(320, 320, true),
      productName: "Iphone",
      price: 1,
      productInStock: true,
      productFastDelivery: true,
      rating: 4,
    },
    {
      id: 7,
      image: faker.image.abstract(320, 320, true),
      productName: "Camera",
      price: 100,
      productInStock: true,
      productFastDelivery: false,
      rating: 3,
    },
    {
      id: 8,
      image: faker.image.abstract(320, 320, true),
      productName: "Laptop",
      price: 15,
      productInStock: true,
      productFastDelivery: true,
      rating: 2,
    },
    {
      id: 9,
      image: faker.image.abstract(320, 320, true),
      productName: "Camera",
      price: 700,
      productInStock: false,
      productFastDelivery: true,
      rating: 3,
    },
    {
      id: 10,
      image: faker.image.abstract(320, 320, true),
      productName: "Laptop",
      price: 15,
      productInStock: true,
      productFastDelivery: true,
      rating: 2,
    },
    {
      id: 11,
      image: faker.image.abstract(320, 320, true),
      productName: "Laptop",
      price: 15,
      productInStock: false,
      productFastDelivery: true,
      rating: 2,
    },
    {
      id: 12,
      image: faker.image.abstract(320, 320, true),
      productName: "Camera",
      price: 100,
      productInStock: true,
      productFastDelivery: false,
      rating: 3,
    },
    {
      id: 13,
      image: faker.image.abstract(320, 320, true),
      productName: "Laptop",
      price: 15,
      productInStock: true,
      productFastDelivery: true,
      rating: 2,
    },
    {
      id: 14,
      image: faker.image.abstract(320, 320, true),
      productName: "Laptop",
      price: 15,
      productInStock: true,
      productFastDelivery: true,
      rating: 2,
    },
    {
      id: 15,
      image: faker.image.abstract(320, 320, true),
      productName: "Camera",
      price: 100,
      productInStock: true,
      productFastDelivery: true,
      rating: 3,
    },
    {
      id: 16,
      image: faker.image.abstract(320, 320, true),
      productName: "Laptop",
      price: 99,
      productInStock: true,
      productFastDelivery: true,
      rating: 2,
    },
    {
      id: 17,
      image: faker.image.abstract(320, 320, true),
      productName: "Laptop",
      price: 150,
      productInStock: true,
      productFastDelivery: true,
      rating: 4,
    },
    {
      id: 18,
      image: faker.image.abstract(320, 320, true),
      productName: "Shoes",
      price: 300,
      productInStock: true,
      productFastDelivery: false,
      rating: 5,
    },
    {
      id: 19,
      image: faker.image.abstract(320, 320, true),
      productName: "Iphone",
      price: 1,
      productInStock: false,
      productFastDelivery: true,
      rating: 4,
    },
    {
      id: 20,
      image: faker.image.abstract(320, 320, true),
      productName: "Camera",
      price: 100,
      productInStock: true,
      productFastDelivery: true,
      rating: 3,
    },
    {
      id: 21,
      image: faker.image.abstract(320, 320, true),
      productName: "Laptop",
      price: 15,
      productInStock: true,
      productFastDelivery: false,
      rating: 2,
    },
  ];
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    rating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
}

export const CartState = () => {
  return useContext(Cart);
};
