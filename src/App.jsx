import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./Componetns/Navabr";
import Hero from "./Componetns/Hero";
import About from "./Componetns/About";
import Projects from "./Componetns/Project";
import Footer from "./Componetns/Footer";
import AnimeEffect from "./Componetns/AnimeEffect";
import { ToastContainer } from "react-toastify";
import Layout from "./Componetns/Layout"; // Import Layout component

function App() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("appLanguage") || "en");

  // Handle language switch
  const toggleLanguage = () => {
    const newLang = lang === "en" ? "jp" : "en";
    i18n.changeLanguage(newLang).then(() => {
      setLang(newLang);
      localStorage.setItem("appLanguage", newLang);
    });
  };

  return (
    <Layout lang={lang}>  {/* Wrap the content inside Layout */}
      <Navbar lang={lang} toggleLanguage={toggleLanguage} />
      <section id="home">
        <Hero lang={lang} />
      </section>
      <section id="about">
        <About lang={lang} />
      </section>
      <section id="services">
        <Projects lang={lang} />
      </section>
      <section id="contact">
        <Footer lang={lang} />
      </section>
      <AnimeEffect lang={lang} />
      <ToastContainer />
    </Layout>
  );
}

export default App;
