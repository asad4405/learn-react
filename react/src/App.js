import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/Errors/NotFound";
import ProductDetails from "./components/Product/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/review" element={<Review />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/product-details/:slug" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
