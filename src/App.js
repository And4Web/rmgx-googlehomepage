import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import SearchPage from "./pages/searchPage/SearchPage";
import ProductsPage from "./pages/productsPage/ProductsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/search" element={<SearchPage />}></Route>
        <Route exact path="/products" element={<ProductsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
