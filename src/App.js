import React from "react";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import About from "./components/About";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Context from "./context/Context";

function App() {
  return (
    <>
      <Context>
        <Router>
          <Navbar title={"Shopping Cart"} />
          <Routes>
            <Route exact path="/" element={<Shop />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </Context>
    </>
  );
}

export default App;
