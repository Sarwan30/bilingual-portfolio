import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from "react-icons/fa";

const Hero = ({ lang, bgGradient }) => {
  const { t } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  const buttonStyles =
    lang === "en"
      ? "bg-[#E9C46A] text-[#1D3557] hover:bg-[#F4A261] shadow-md"
      : "bg-[#E63946] text-[#FFF8E1] hover:bg-[#BF2A3A] shadow-md";

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesOptions = {
    particles: {
      number: { value: 20 },
      move: { enable: true, speed: 1, direction: "bottom", outModes: { default: "out" } },
      shape: {
        type: lang === "jp" ? "image" : "circle",
        image: lang === "jp" ? { src: "/sakura_white.png", width: 30, height: 30 } : undefined,
      },
      opacity: { value: 0.8 },
      size: { value: 10, random: true },
      rotate: { value: 45, random: true, animation: { enable: true, speed: 5 } },
    },
    detectRetina: true,
  };

  return (
    <section className={`relative h-screen flex flex-col items-center justify-center text-center px-4 transition-all duration-700 ${bgGradient}`}>
      {/* Particle Effect */}
      <Particles className="absolute inset-0 w-full h-full z-0" init={particlesInit} options={particlesOptions} />

      {/* Hero Text */}
      <motion.h1
        key={lang}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold mb-4 relative z-10 text-white"
      >
        {lang === "en" ? "Hi, I'm Sarwan Kumar! 😊" : "こんにちは、サルワン・クマールです！ 😊"}
      </motion.h1>

      {/* Typing Animation */}
      <motion.h2
        key={`typewriter-${lang}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-2xl font-semibold mb-6 relative z-10 text-white"
      >
        <Typewriter
          words={lang === "en" ? ["Full-Stack Developer", "Tech Enthusiast"] : ["フルスタック開発者", "テクノロジー愛好家"]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </motion.h2>

      {/* Buttons Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="relative z-10 flex gap-4">
        {/* Connect Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className={`flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-xl transition-all duration-300 
                        ${buttonStyles} border-2 border-transparent hover:border-white hover:scale-105`}
          >
            {lang === "en" ? "Connect with Me" : "私とつながる"}
            <FaChevronDown className={`transition-transform ${showDropdown ? "rotate-180" : "rotate-0"}`} />
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 mt-2 w-48 bg-white bg-opacity-90 backdrop-blur-lg shadow-md rounded-lg overflow-hidden"
            >
              <a href="https://github.com/Sarwan30" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-200 transition">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/sarwan-kumar-6516682b3/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-200 transition">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="mailto:sarwan.30kr@gmail.com" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-200 transition">
                <FaEnvelope /> Email
              </a>
            </motion.div>
          )}
        </div>

        {/* Resume Button */}
        <a
          href={
            lang === "en"
              ? "https://drive.google.com/file/d/12xY2ZhzCrcewkz7ypHc-EJp4nnVaxv-B/view?usp=sharing"
              : "https://drive.google.com/file/d/12xY2ZhzCrcewkz7ypHc-EJp4nnVaxv-B/view?usp=sharing"
          }
          target="_blank"
          rel="noopener noreferrer"
          className={`px-6 py-3 text-lg font-semibold rounded-xl transition-all duration-300 
                      ${buttonStyles} border-2 border-transparent hover:border-white hover:scale-105`}
        >
          {lang === "en" ? "Resume" : "履歴書"}
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
