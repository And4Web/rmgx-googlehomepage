import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import SearchPage from "./pages/searchPage/SearchPage";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/search" element={<SearchPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
