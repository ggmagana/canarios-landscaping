import { useTranslation } from "react-i18next";

export default function ServicesOverview() {
  const { t } = useTranslation();

  const services = t("services", { returnObjects: true }); // returns array from JSON

  return (
    <div className="p-10 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">
        {t("services_title")}
      </h1>

      <div className="flex gap-6 overflow-x-auto py-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 p-6 bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2 text-center text-green-800">
              {service.name}
            </h2>
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}