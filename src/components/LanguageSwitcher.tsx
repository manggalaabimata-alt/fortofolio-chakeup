import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full p-1">
      <button
        onClick={() => setLanguage('id')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'id'
            ? 'bg-blue-500 text-white shadow-lg'
            : 'text-gray-300 hover:text-white'
        }`}
      >
        🇮🇩 ID
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-blue-500 text-white shadow-lg'
            : 'text-gray-300 hover:text-white'
        }`}
      >
        🇬🇧 EN
      </button>
    </div>
  );
}
