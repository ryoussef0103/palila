import { Contacten, Footer, Header, Services, Showcase } from "./containers";
import { Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Bestellen, Contact, Over, Prijzen } from "./pages";
import "./App.css";
import React from "react";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />

        <Routes>
          <Route path="/over" element={<Over />} />
          <Route path="/prijzen" element={<Prijzen />} />
          <Route path="/bestellen" element={<Bestellen />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Showcase />
        {/* <Services /> */}
        <Contacten />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
