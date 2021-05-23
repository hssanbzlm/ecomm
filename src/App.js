import "./App.css";
import React from "react";

import Footer from "./Footer";
import NavBar from "./NavBar";
import Container from "./Container";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar />
      <Container />
      <Footer />
    </Router>
  );
}

export default App;
