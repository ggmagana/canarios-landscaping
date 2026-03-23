import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ContactInfo from "../components/ContactInfo";
import OurWork from "../components/OurWork";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Hero t={t} />
      <Services t={t} />
      <OurWork t={t} />
    </>
  );
}