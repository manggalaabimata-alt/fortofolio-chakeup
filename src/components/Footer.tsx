import { useLanguage } from '../context/LanguageContext';
import { FaGithub, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const skills = ['React', 'Flutter', 'Next.js', 'Supabase', 'Tailwind CSS'];

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#home" className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Fortofolio Manggala
              </span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('footer.description')}
            </p>
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

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-white font-bold mb-4">{t('footer.skills')}</h3>
            <ul className="space-y-2">
              {skills.map((skill, index) => (
                <li key={index} className="text-gray-400">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Manggala Abimata. {t('footer.rights')}.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              {t('footer.madeWith')} {t('footer.by')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
