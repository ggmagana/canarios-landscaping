import { motion } from "framer-motion";

export default function Hero({ t }) {
  return (
    <section 
      className="h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e')"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          {t("hero_title")}
        </motion.h1>

        <p className="text-lg mb-6">
          {t("hero_sub")}
        </p>

        <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-lg">
          {t("Get Free Quote")}
        </button>
      </div>
    </section>
  );
}