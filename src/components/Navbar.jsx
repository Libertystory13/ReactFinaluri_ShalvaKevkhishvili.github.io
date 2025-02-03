import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeProvider";
import { LanguageContext } from "../context/LanguageProvider";

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { toggleLanguage, translations } = useContext(LanguageContext);

  return (
    <nav>
      <Link to="/">{translations.home}</Link>
      <Link to="/about">{translations.about}</Link>
      <Link to="/contact">{translations.contact}</Link>
      <button onClick={toggleTheme}>{translations.toggleTheme}</button>
      <button onClick={toggleLanguage}>{translations.toggleLanguage}</button>
    </nav>
  );
};

export default Navbar;