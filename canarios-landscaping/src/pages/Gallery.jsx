import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export default function Gallery() {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [heroIndex, setHeroIndex] = useState(0);

  // Load all images
  const images = import.meta.glob("../assets/work/*.{jpg,jpeg,png,svg}", {
    eager: true,
    query: "?url",
    import: "default",
  });

  const workImages = Object.values(images);

  // Auto-cycle hero image every 5 seconds
  useEffect(() => {
    if (workImages.length === 0) return;

    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % workImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [workImages]);

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % workImages.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? workImages.length - 1 : prev - 1
    );
  };

  return (
    <div>
      {/* HERO SECTION */}
      {workImages.length > 0 && (
        <div className="h-72 flex items-center justify-center relative overflow-hidden">
          {/* Background image with fade */}
          {workImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Hero ${index + 1}`}
              className={`absolute inset-0 w-full h-72 object-cover transition-opacity duration-1000 ${
                index === heroIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Title */}
          <h1 className="relative text-8xl font-bold text-white px-6 py-3 rounded-lg shadow-lg z-10">
            {t("our_work_title")}
          </h1>
        </div>
      )}

      {/* GRID */}
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {workImages.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={img}
              className="w-full h-60 object-cover hover:scale-105 transition"
            />
          </div>
        ))}
      </div>

      {/* FULLSCREEN MODAL */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          {/* Close */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-4xl"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={workImages[selectedIndex]}
            className="max-w-4xl max-h-[85%] rounded-lg shadow-2xl"
          />

          {/* Right Arrow */}
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