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


const App = () =>  {

  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Pages WITH Header + Footer */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/ProductListing" element={<ProductListing />} />
          </Route>

          {/* Pages WITHOUT Header + Footer */}
          <Route  element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> 
          </Route>
        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
