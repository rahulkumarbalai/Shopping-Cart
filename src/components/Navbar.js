import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CartState } from "../context/Context";
import Filters from "./Filters";

export default function Navbar({ title }) {
  let location = useLocation();

  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filters
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Filters />
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cart 🛒({cart.length})
              </Link>
              <ul
                className="dropdown-menu"
                style={{ minWidth: "20vh", textAlign: "center" }}
              >
                {cart.length > 0 ? (
                  <>
                    {cart.map((prod) => (
                      <span className="cartItem my-2" key={prod.id}>
                        <img
                          src={prod.image}
                          className="cartItemImg"
                          alt={prod.productName}
                        />
                        <img src="download.jpeg" alt="" />
                        <div className="cartItemDetail mx-3">
                          <span>{prod.productName}</span>
                          <span> ₹{prod.price}</span>
                          <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: prod,
                              })
                            }
                          ></button>
                        </div>
                      </span>
                    ))}
                    <Link className="cart" to="/cart">
                      <button type="button" className="btn btn-info my-3 mx-2">
                        Go to Cart
                      </button>
                    </Link>
                  </>
                ) : (
                  <li>cart is empty</li>
                )}
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Product"
              aria-label="Search"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
