import { useLanguage } from "../context/LanguageContext";
import { FaGithub, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover"
          style={{ filter: "blur(3px)" }}
        >
          <source src="/videos/VideoDokumenter.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              {t("hero.greeting")}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              {t("hero.name")}
            </h1>

            <h2 className="text-xl sm:text-2xl text-blue-400 font-medium mb-6">
              {t("hero.role")}
            </h2>

            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              {t("hero.description")}
            </p>

            {/* BUTTON */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300"
              >
                {t("hero.viewProjects")}
              </a>

              <a
                href="#contact"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 border border-white/20"
              >
                {t("hero.contactMe")}
              </a>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/manggalaabimata-alt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-full flex items-center justify-center text-white transition-all duration-300"
              >
                <FaGithub className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/manggalaabimata/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center text-white transition-all duration-300"
              >
                <FaInstagram className="w-5 h-5" />
              </a>

              <a
                href="https://tiktok.com/@manggalaww_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-black rounded-full flex items-center justify-center text-white transition-all duration-300"
              >
                <FaTiktok className="w-5 h-5 translate-y-[1px]" />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/20 rounded-full" />

              {/* Profile Image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl">
                <img
                  src="/images/mamang_ganlek.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-2 -left-2 px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium shadow-lg animate-bounce">
                {t("hero.class")}
              </div>
              <div className="absolute -bottom-2 -right-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full text-sm font-medium shadow-lg animate-bounce delay-100">
                {t("hero.major")}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-white/50 hover:text-white transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}