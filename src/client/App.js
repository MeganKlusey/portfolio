import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./js/views/index/header";
import Hero from "./js/views/index/hero";
import About from "./js/views/index/about";
import Work from "./js/views/index/work";
import Contact from "./js/views/index/contact";
import InternalOrdering from "../client/js/views/internal-ordering";

import "../client/styles/styles.scss";

import "../client/js/birds";
import "../client/js/script";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <About />
              <Work />
              <Contact />
            </>
          }
        />

        <Route path="/internal-ordering/" element={<InternalOrdering />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
