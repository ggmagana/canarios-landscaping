import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OurWork() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = import.meta.glob("../assets/work/*.{jpg,jpeg,png,svg}", {
    eager: true,
    query: "?url",
    import: "default",
  });

  const workImages = Object.values(images);

  const visibleImages = workImages.slice(0, 6); // 👈 LIMIT TO 6

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % visibleImages.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? visibleImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="py-0 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold mb-6 text-center text-green-800">
        {t("our_work_title")}
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleImages.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl"
          >
            <img
              src={img}
              className="w-full h-60 object-cover hover:scale-105 transition"
            />
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/gallery")}
          className="bg-green-800 text-white px-6 py-3 rounded-lg shadow hover:bg-green-900 transition"
        >
          See Full Gallery
        </button>
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-4xl"
          >
            ‹
          </button>

          <img
            src={visibleImages[selectedIndex]}
            className="max-w-4xl max-h-[85%] rounded-lg"
          />

          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-4xl"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}