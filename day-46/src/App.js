import "./App.css";
import { Outlet } from "react-router-dom";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";
import HeaderFunc from "./components/Header";
import { useState } from "react";

function App() {
  const [wishlist, setWishlist] = useState([]);

  return (
    <div>
      <HeaderFunc wishlist={wishlist} setWishlist={setWishlist} />

      <div className="main ui text container">
        <div id="content"></div>
        <Routes>
          <Route path="/"element={<ProductList wishlist={wishlist} setWishlist={setWishlist} />}/>
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
