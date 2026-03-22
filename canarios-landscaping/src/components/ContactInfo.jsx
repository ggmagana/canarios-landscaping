import { useTranslation } from "react-i18next";

export default function ContactInfo() {
  const { t } = useTranslation();

  return (
    <section className="py-1 bg-green-800 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">
        {t("contact_title")}
      </h2>

      <div className="space-y-1 text-base">
        <p>(123) 456-7890 your@email.com 📍 Sinking Spring, PA</p>
      </div>
    </section>
  );
}