import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Pricing from "./routes/Pricing";
import Training from "./routes/Training";
import Contact from "./routes/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
