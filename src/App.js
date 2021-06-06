import "./App.css";
import React, { useState } from "react";
import Footer from "./common/Footer";
import NavBar from "./common/NavBar";
import Container from "./router/Container";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BasketContext } from "./commande/Context";
import { Suspense } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

function App() {
  const [context, setContext] = useState([]);
  const value = [context, setContext];
  return (
    <Router>
      <BasketContext.Provider value={value}>
        <NavBar />
        <Suspense fallback={<CircularProgress color="primary" />}>
          <Container />
        </Suspense>
        <Footer />
      </BasketContext.Provider>
    </Router>
  );
}

export default App;
