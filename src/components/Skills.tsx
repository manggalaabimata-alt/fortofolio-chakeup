import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
// Import icons from react-icons
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiDart, SiFlutter, SiNextdotjs, SiSupabase } from "react-icons/si";

export default function Skills() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const skills = [
    {
      name: "HTML",
      icon: FaHtml5,
      color: "from-orange-500 to-red-500",
      level: 20,
    },
    {
      name: "CSS",
      icon: FaCss3Alt,
      color: "from-blue-400 to-blue-600",
      level: 85,
    },
    {
      name: "Dart",
      icon: SiDart,
      color: "from-cyan-400 to-blue-500",
      level: 75,
    },
    {
      name: "Flutter",
      icon: SiFlutter,
      color: "from-blue-400 to-cyan-400",
      level: 80,
    },
    {
      name: "React",
      icon: FaReact,
      color: "from-cyan-400 to-blue-500",
      level: 70,
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "from-gray-600 to-gray-800",
      level: 65,
    },
    {
      name: "Supabase",
      icon: SiSupabase,
      color: "from-green-400 to-emerald-500",
      level: 70,
    },
    {
      name: "GitHub",
      icon: FaGitAlt,
      color: "from-gray-700 to-gray-900",
      level: 85,
    },
  ];

  const categories = [
    {
      title: t("skills.webDev"),
      description: t("skills.webDevDesc"),
      skills: ["HTML", "CSS", "React", "Next.js"],
    },
    {
      title: t("skills.mobileDev"),
      description: t("skills.mobileDevDesc"),
      skills: ["Dart", "Flutter"],
    },
    {
      title: t("skills.backend"),
      description: t("skills.backendDesc"),
      skills: ["Supabase", "GitHub"],
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-slate-900 to-blue-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("skills.title")}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto mt-6 rounded-full" />
        </div>

        {/* Skills Slider */}
        <div className="relative mb-16">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 -translate-x-2"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 translate-x-2"
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-8 py-4 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto shadow-lg`}
                  >
                    <IconComponent className="text-3xl text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white text-center mb-3">
                    {skill.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {category.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
