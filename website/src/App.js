import { Contacten, Footer, Header, Services, Showcase } from "./containers";
import {
  ContactInfo,
  Examples,
  FooterInfo,
  Navbar,
  ServicesContent,
  Welcome,
} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Bestellen, Contact, Over, Prijzen } from "./pages";
import "./App.css";
import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="background__poster">
          <Navbar />
          <Routes>
            <Route path="/over" element={<Over />} />
            <Route path="/prijzen" element={<Prijzen />} />
            <Route path="/bestellen" element={<Bestellen />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Header />
          <Welcome />
        </div>
        <Showcase />
        <Examples />
        <Services />
        <ServicesContent />
        <Contacten />
        <ContactInfo />
        <Footer />
        <FooterInfo />
      </div>
    </Router>
  );
};

export default App;
