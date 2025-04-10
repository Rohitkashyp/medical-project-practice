import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Contact from "./components/Contact";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Orderplace from "./components/Orderplace";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/order-place" element={<Orderplace/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
};

export default App;


