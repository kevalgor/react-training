import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
}

export default AppRouter;
