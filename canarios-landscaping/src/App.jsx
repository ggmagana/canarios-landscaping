import { useTranslation } from "react-i18next";
import { Routes, Route } from "react-router-dom";
import LanguageToggle from "./components/LanguageToggle";

import Home from "./pages/Home";
import Quote from "./pages/Quote";
import Gallery from "./pages/Gallery";

function App() {
  const { i18n } = useTranslation();

  return (
    <>
      {/* Language Toggle */}
      <LanguageToggle />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;