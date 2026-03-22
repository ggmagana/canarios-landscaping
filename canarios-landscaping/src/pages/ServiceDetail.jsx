import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ServiceDetail() {
  const { name } = useParams();
  const { t } = useTranslation();

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold capitalize mb-6">
        {name}
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <img src="https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62" className="rounded-xl" />
        <img src="https://images.unsplash.com/photo-1558904541-efa843a96f01" className="rounded-xl" />
      </div>

      <p className="mt-6 text-gray-600">
        {t("service_description")}
      </p>
    </div>
  );
}