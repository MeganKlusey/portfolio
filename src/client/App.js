import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Header from "../client/js/views/index/header";
import Hero from "../client/js/views/index/hero";
import About from "../client/js/views/index/about";
import Work from "../client/js/views/index/work";
import Contact from "../client/js/views/index/contact";
import InternalOrdering from "../client/js/views/internal-ordering";

import "../client/js/birds";
import "../client/js/script";

import "../client/styles/styles.scss";

function WorkOverlay() {
  const navigate = useNavigate();

  React.useEffect(() => {
    document.body.classList.add("overlay-open");

    return () => {
      document.body.classList.remove("overlay-open");
    };
  }, []);

  React.useEffect(() => {
    window.history.replaceState({}, "", "/");
  }, []);

  return (
    <div className="work-overlay">
      <button onClick={() => navigate("/")}>×</button>
      <InternalOrdering />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <About />
      <Work />
      <Contact />

      <Routes>
        <Route path="/internal-ordering/" element={<WorkOverlay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
