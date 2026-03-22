import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  return (
    <button
      onClick={() =>
        i18n.changeLanguage(i18n.language === "en" ? "es" : "en")
      }
      className="fixed top-5 right-5 z-50 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg shadow-lg"
    >
      {i18n.language === "en" ? "EN" : "ES"}
    </button>
  );
}