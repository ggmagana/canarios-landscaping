import { useNavigate } from "react-router-dom";

export default function Services({ t }) {
  const navigate = useNavigate();
  const services = [
    "Mulching",
    "Edging",
    "Flower Planting",
    "Light Trimming and Pruning",
    "Seasonal Cleanup",
    "Other duties as desired"
  ];
  
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-12 text-green-800">
        {t("services_title")}
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20">
        {services.map((s, i) => (
          <div 
            key={i}
            onClick={() => navigate(`/service/${s}`)}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold text-green-700">{s}</h3>
            <p className="text-gray-500 mt-2 text-sm">
            <p>{t("service_description")}</p>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}