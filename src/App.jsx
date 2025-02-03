import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ThemeProvider from "./context/ThemeProvider";
import LanguageProvider from "./context/LanguageProvider";
import "./styles/main.scss";

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;