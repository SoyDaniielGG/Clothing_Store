import React from "react";
import {BrowserRouter as Router, Routes, Route}from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Cart from "./pages/cart";
import About from "./pages/about";
import Footer from "./components/footer";
import AccesibilityWidget from "./components/accesibilityWidget";

const App = () => {
  return(
    <Router>
      {/* Definir las rutas de la aplicación */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/acerca-de" element={<About />} />
      </Routes>
      <AccesibilityWidget />
      <Footer />
    </Router>
  );
};
export default App;