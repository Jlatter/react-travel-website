import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Products from "./components/pages/Products";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/about" exact Component={Services}></Route>
          <Route path="/contact" exact Component={Products}></Route>
          <Route path="/sign-up" exact Component={SignUp}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
