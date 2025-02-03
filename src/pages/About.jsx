import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageProvider";

const About = () => {
  const { translations } = useContext(LanguageContext);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>{translations.about}</h1>
    </motion.div>
  );
};

export default About;