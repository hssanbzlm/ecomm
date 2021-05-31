import "./App.css";
import React, { useState } from "react";

import Footer from "./Footer";
import NavBar from "./NavBar";
import Container from "./Container";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BasketContext } from "./Context";
function App() {
  const [context, setContext] = useState([]);

  return (
    <Router>
      <BasketContext.Provider value={[context, setContext]}>
        <NavBar />
        <Container />
        <Footer />
      </BasketContext.Provider>
    </Router>
  );
}

export default App;
