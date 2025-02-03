import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

const translations = {
  en: {
    home: "Home Page",
    about: "About Page",
    contact: "Contact Page",
    toggleTheme: "Toggle Theme",
    toggleLanguage: "Switch to Georgian",
  },
  ka: {
    home: "მთავარი გვერდი",
    about: "ჩვენ შესახებ",
    contact: "კონტაქტი",
    toggleTheme: "თემის შეცვლა",
    toggleLanguage: "გადართვა ინგლისურზე",
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ka" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, translations: translations[language], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;