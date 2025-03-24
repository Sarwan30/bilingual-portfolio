import { useTranslation } from "react-i18next";
import Hero from "./Hero"; // Adjust the import path if needed
import About from "./About";

const Layout = ({ children }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const bgGradient =
    lang === "en"
      ? "bg-gradient-to-br from-[#F4F1DE] to-[#1D3557]"
      : "bg-gradient-to-br from-[#fc9b90] to-[#fffdfc]";

  return (
    <div className={`min-h-screen flex flex-col ${bgGradient}`}>
     
      {children}
    </div>
  );
};

export default Layout;
