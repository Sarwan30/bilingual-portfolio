import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../i18n";

const Navbar = ({ lang, toggleLanguage }) => {
  const { t } = useTranslation();
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const themes = {
    en: {
      bg: "bg-[#f5fafa]",
      text: "text-[#1D3557] hover:text-[#E9C46A]",
      button: "bg-[#E9C46A] hover:bg-[#F4A261] text-[#1D3557]",
      navbar: "bg-[#ccdde0] text-[#E9C46A]",
      shadow: "shadow-md",
    },
    jp: {
      bg: "bg-[#fffdfc]",
      text: "text-[#2D2D2D] hover:text-[#E63946]",
      button: "bg-[#E63946] hover:bg-[#BF2A3A] text-white",
      navbar: "bg-[#ffece6] text-[#E63946]",
      shadow: "shadow-md",
    },
  };

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function for smooth scrolling to section with offset for navbar
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 45; // Adjust this value to be the height of your navbar
      const top = section.offsetTop - offset; // Adjust scroll position

      window.scrollTo({
        top: top,
        behavior: "smooth", // Smooth scrolling
      });

      setMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 p-4 transition-all duration-500 ${
        scrolling ? "bg-opacity-90 backdrop-blur-md shadow-lg" : ""
      } ${themes[lang].navbar} ${themes[lang].shadow}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="text-2xl font-extrabold tracking-wide transition-transform transform hover:scale-105"
        >
          MyPortfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {[
            { id: "home", label: "home" },
            { id: "about", label: "about" },
            { id: "services", label: "services" },
            { id: "contact", label: "contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`text-lg font-medium transition-transform transform hover:scale-110 ${themes[lang].text}`}
            >
              {t(item.label)}
            </a>
          ))}
        </div>

        {/* Language Toggle Button */}
        <button
          onClick={toggleLanguage}
          className={`px-3 py-1 rounded-lg text-sm sm:text-base transition-all transform hover:scale-110 shadow-lg ${themes[lang].button}`}
        >
          {t("switch_language")}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none ml-4 p-4"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center py-4">
          {[
            { id: "home", label: "home" },
            { id: "about", label: "about" },
            { id: "services", label: "services" },
            { id: "contact", label: "contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-lg font-medium py-2 w-full text-center transition-all transform hover:scale-105"
            >
              {t(item.label)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
