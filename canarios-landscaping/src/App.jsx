import { useTranslation } from "react-i18next";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return (
    <div>
      <button 
        onClick={toggleLang}
        className="fixed top-5 right-5 bg-green-700 text-white px-4 py-2 rounded"
      >
        {i18n.language === "en" ? "ES" : "EN"}
      </button>

      <Hero t={t} />
      <Services t={t} />
      <Contact t={t} />
    </div>
  );
}

export default App;