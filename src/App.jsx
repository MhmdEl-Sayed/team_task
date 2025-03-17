import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; 
import { Outlet } from "react-router-dom";
import Home from "./component/Home";
import Cart from "./component/Cart";
import Header from "./component/Header";
const Layout = () => (
  <>
    <Header />
    <Outlet />

  </>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="cart" element={<Cart />} />
     

      </Route>
    </Routes>
  </Router>
);

export default App;
