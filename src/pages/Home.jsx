import React, { useContext } from "react";
import { motion } from "framer-motion";
import useFetch from "../hooks/useFetch";
import { LanguageContext } from "../context/LanguageProvider";

const Home = () => {
  const { translations } = useContext(LanguageContext);
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>{translations.home}</h1>
      {loading ? <p>Loading...</p> : <ul>{data.slice(0, 5).map(post => <li key={post.id}>{post.title}</li>)}</ul>}
    </motion.div>
  );
};

export default Home;