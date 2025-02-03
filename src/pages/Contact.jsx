import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageProvider";

const Contact = () => {
  const { translations } = useContext(LanguageContext);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>{translations.contact}</h1>
    </motion.div>
  );
};

export default Contact;