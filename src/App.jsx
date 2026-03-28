import React from "react";
import './App.css'
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/Layout";
import AuthLayout from "./components/Authentication/Layout";
import ProductDetailPage from "./pages/ProductDetailPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ForgotPassword from "./components/ForgotPassword";


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Pages WITH Header + Footer */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>

          {/* Pages WITHOUT Header + Footer */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
