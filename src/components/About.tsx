import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  FaSearchPlus,
  FaSearchMinus,
  FaDownload,
  FaTimes,
} from "react-icons/fa";

export default function About() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const stats = [
    { value: t("about.projects"), label: "Completed" },
    { value: t("about.learning"), label: "Always" },
    { value: t("about.goal"), label: "Goal" },
  ];

  const openModal = () => {
    setIsModalOpen(true);
    setZoomLevel(1); // Reset zoom saat buka modal
  };
  const closeModal = () => setIsModalOpen(false);

  const zoomIn = () => {
    if (zoomLevel < 2.5) setZoomLevel(zoomLevel + 0.2);
  };

  const zoomOut = () => {
    if (zoomLevel > 0.5) setZoomLevel(zoomLevel - 0.2);
  };

  const downloadCV = () => {
    const cvUrl = "/images/CV-ManggalaAbimataH.jpg";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV_Manggala_Abimata_H.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section
        id="about"
        className="py-12 lg:py-16 bg-slate-900 min-h-screen flex items-center"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Section Header */}
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {t("about.title")}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              {t("about.subtitle")}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left - Photo */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl transform rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-500/20 rounded-xl transform -rotate-3" />

                {/* Photo Container */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-1.5 shadow-2xl">
                  <img
                    src="images/forto_foto2.jpeg"
                    alt="About Me"
                    className="rounded-lg w-full max-w-sm md:max-w-md object-cover h-auto"
                  />

                  {/* Experience Badge */}
                  <div className="absolute -bottom-3 -right-3 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
                    <span className="font-bold text-sm">
                      {t("about.experience")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                {t("about.greeting")}
              </h3>

              <div className="space-y-3 text-gray-300 leading-relaxed text-sm md:text-base">
                <p>{t("about.intro")}</p>
                <p>{t("about.journey")}</p>
                <p>{t("about.passion")}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-3 text-center border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="text-base font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* BUTTON CV */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                <button
                  onClick={openModal}
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300 cursor-pointer"
                >
                  {t("about.cv")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL CV DENGAN ZOOM DAN BINGKAI A4 */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl w-full max-w-5xl mx-4 overflow-hidden border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal dengan Tombol Kontrol */}
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-white/20">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <span className="text-blue-400">📄</span> Curriculum Vitae
              </h3>

              {/* Tombol Zoom & Download */}
              <div className="flex items-center gap-2">
                <button
                  onClick={zoomOut}
                  disabled={zoomLevel <= 0.5}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Zoom Out"
                >
                  <FaSearchMinus size={16} />
                </button>
                <span className="text-white text-sm bg-white/10 px-3 py-1 rounded-full min-w-[60px] text-center">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={zoomIn}
                  disabled={zoomLevel >= 2.5}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Zoom In"
                >
                  <FaSearchPlus size={16} />
                </button>
                <div className="w-px h-6 bg-white/20 mx-1" />
                <button
                  onClick={downloadCV}
                  className="p-2 rounded-lg bg-green-500/20 hover:bg-green-500/40 text-green-400 transition-all"
                  title="Download CV"
                >
                  <FaDownload size={16} />
                </button>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/40 text-red-400 transition-all"
                  title="Tutup"
                >
                  <FaTimes size={16} />
                </button>
              </div>
            </div>

            {/* Container CV dengan Bingkai Kertas A4 */}
            <div className="p-6 flex justify-center bg-gradient-to-br from-gray-700 to-gray-800">
              <div className="relative">
                {/* Efek bayangan dan bingkai luar seperti kertas */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/30 to-amber-600/30 rounded-lg blur-lg" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600/50 to-amber-700/50 rounded-lg" />

                {/* Bingkai Kertas Putih dengan Scroll */}
                <div
                  className="relative bg-white rounded-lg shadow-2xl overflow-auto"
                  style={{
                    width: "100%",
                    maxWidth: "80vw",
                    maxHeight: "70vh",
                    minWidth: "300px",
                  }}
                >
                  <div
                    style={{
                      transform: `scale(${zoomLevel})`,
                      transformOrigin: "top center",
                      transition: "transform 0.2s ease-out",
                      width: "fit-content",
                      margin: "0 auto",
                    }}
                  >
                    <img
                      src="/images/CV-ManggalaAbimataH.jpg"
                      alt="CV Preview"
                      style={{
                        width: "auto",
                        height: "auto",
                        maxWidth: "100%",
                        display: "block",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Info */}
            <div className="flex justify-between items-center p-3 bg-gray-800/50 border-t border-white/10 text-gray-400 text-xs">
              <span>{t("cv.footer1")}</span>
              <span>{t("cv.footer2")}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
