import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  id: {
    // Navbar
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.skills': 'Keahlian',
    'nav.projects': 'Project',
    'nav.contact': 'Kontak',

    // Hero
    'hero.greeting': 'Halo, Saya',
    'hero.name': 'Manggala Abimata',
    'hero.role': 'Siswa SMK Rekayasa Perangkat Lunak',
    'hero.description': 'Saya adalah siswa kelas 11 jurusan Rekayasa Perangkat Lunak (RPL) yang memiliki semangat tinggi dalam mempelajari dasar-dasar pemrograman. Saya terus berusaha mengembangkan kemampuan logika, problem solving, serta memahami konsep-konsep penting dalam dunia coding. Dengan tekad dan konsistensi, saya siap untuk terus belajar dan berkembang menjadi programmer yang handal di masa depan.',
    'hero.viewProjects': 'Lihat Project Saya',
    'hero.contactMe': 'Hubungi Saya',
    'hero.class': 'Kelas 11',
    'hero.major': 'RPL',

    // About
    'about.title': 'Tentang Saya',
    'about.subtitle': 'Kenali lebih dekat tentang perjalanan saya di dunia programming',
    'about.greeting': 'Halo!',
    'about.intro': 'Perkenalkan, saya seorang siswa SMK kelas 11 jurusan Rekayasa Perangkat Lunak (RPL). Sejak pertama kali mengenal dunia programming, saya langsung jatuh cinta dengan proses menciptakan sesuatu dari baris-baris kode.',
    'about.journey': 'Perjalanan saya dimulai dari belajar dasar-dasar HTML dan CSS, kemudian berlanjut ke JavaScript, dan sekarang saya fokus mengembangkan skill di bidang web development dengan React dan Next.js, serta mobile development dengan Flutter.',
    'about.passion': 'Saya percaya bahwa teknologi dapat mengubah dunia menjadi lebih baik. Itulah mengapa saya terus belajar dan mengasah kemampuan untuk menjadi Full-Stack Developer yang handal di masa depan.',
    'about.experience': '2+ Tahun Belajar',
    'about.class': 'Kelas 11',
    'about.projects': '5+ Projects',
    'about.learning': 'Aktif Belajar',
    'about.goal': 'Full-Stack',
    'about.cv': 'Lihat CV',
    'cv.footer1': 'Klik + / - untuk zoom',
    'cv.footer2': 'Geser area tersebut untuk melihat CV yang dipotong.',

    // Skills
    'skills.title': 'Keahlian Pemrograman Saya',
    'skills.subtitle': 'Teknologi dan tools yang saya kuasai',
    'skills.webDev': 'Web Development',
    'skills.webDevDesc': 'Membangun website modern dan responsif',
    'skills.mobileDev': 'Mobile Development',
    'skills.mobileDevDesc': 'Membuat aplikasi mobile cross-platform',
    'skills.backend': 'Backend & Tools',
    'skills.backendDesc': 'Database, version control, dan tools lainnya',

    // Projects
    'projects.title': 'Project Saya',
    'projects.subtitle': 'Beberapa project yang telah saya kerjakan',
    'projects.viewProject': 'Lihat Project',
    'projects.viewAll': 'Lihat Semua Project di GitHub',
    'projects.project1.title': 'Website Restu Panda Bus',
    'projects.project1.desc': 'Website Restu Panda adalah website modern dan responsif yang dirancang untuk menyajikan informasi secara menarik, mudah diakses, dan nyaman digunakan di berbagai perangkat.',
    'projects.project2.title': 'UI / UX Gojek Flutter',
    'projects.project2.desc': 'UI/UX Gojek adalah hasil desain antarmuka dan pengalaman pengguna yang berfokus pada kemudahan, kecepatan, dan kenyamanan dalam menggunakan aplikasi Gojek.',
    'projects.project3.title': 'Portofolio Pertama Saya',
    'projects.project3.desc': 'Website portofolio pertama saya untuk menampilkan profil dan karya saya.',
    // Contact
    'contact.title': 'Hubungi Saya',
    'contact.subtitle': 'Tertarik untuk bekerja sama atau ingin bertanya? Jangan ragu untuk menghubungi saya!',
    'contact.name': 'Nama Lengkap',
    'contact.namePlaceholder': 'Masukkan nama lengkap',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'Masukkan email',
    'contact.subject': 'Subjek',
    'contact.subjectPlaceholder': 'Subjek pesan',
    'contact.message': 'Pesan',
    'contact.messagePlaceholder': 'Tulis pesan Anda di sini...',
    'contact.send': 'Kirim Pesan',
    'contact.sending': 'Mengirim...',
    'contact.success': 'Pesan berhasil dikirim!',
    'contact.info': 'Info Kontak',
    'contact.emailLabel': 'Email',
    'contact.whatsapp': 'Github',
    'contact.location': 'Lokasi',
    'contact.locationValue': 'Malang - Indonesia',

    // Footer
    'footer.description': 'Siswa SMK kelas 11 jurusan RPL yang passionate dalam web & mobile development.',
    'footer.quickLinks': 'Quick Links',
    'footer.skills': 'Keahlian',
    'footer.contact': 'Kontak',
    'footer.copyright': 'Hak Cipta',
    'footer.rights': 'Hak Cipta Dilindungi',
    'footer.madeWith': 'Dibuat',
    'footer.by': 'oleh Manggala Abimata',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': "Hello, I'm",
    'hero.name': 'Manggala Abimata',
    'hero.role': 'Vocational Student - Software Engineering',
    'hero.description': "I am an 11th-grade student majoring in Software Engineering (RPL) with a strong passion for learning the fundamentals of programming. I continuously strive to improve my logical thinking, problem-solving skills, and understanding of core coding concepts. With determination and consistency, I am committed to growing into a skilled and reliable programmer in the future.",
    'hero.viewProjects': 'View My Projects',
    'hero.contactMe': 'Contact Me',
    'hero.class': 'Grade 11',
    'hero.major': 'Software Eng.',

    // About
    'about.title': 'About Me',
    'about.subtitle': 'Get to know more about my journey in the programming world',
    'about.greeting': 'Hello!',
    'about.intro': "Let me introduce myself, I'm an 11th grade vocational school student majoring in Software Engineering. Since I first got to know the world of programming, I immediately fell in love with the process of creating something from lines of code.",
    'about.journey': 'My journey started from learning the basics of HTML and CSS, then continued to JavaScript, and now I focus on developing skills in web development with React and Next.js, as well as mobile development with Flutter.',
    'about.passion': 'I believe that technology can change the world for the better. That is why I keep learning and honing my skills to become a reliable Full-Stack Developer in the future.',
    'about.experience': '2+ Years Learning',
    'about.class': 'Grade 11',
    'about.projects': '5+ Projects',
    'about.learning': 'Active Learning',
    'about.goal': 'Full-Stack',
    'about.cv': 'View CV',
    'cv.footer1': 'Click + / - to zoom',
    'cv.footer2': 'Scroll the area to see the cut CV',

    // Skills
    'skills.title': 'My Programming Skills',
    'skills.subtitle': 'Technologies and tools that I master',
    'skills.webDev': 'Web Development',
    'skills.webDevDesc': 'Building modern and responsive websites',
    'skills.mobileDev': 'Mobile Development',
    'skills.mobileDevDesc': 'Creating cross-platform mobile applications',
    'skills.backend': 'Backend & Tools',
    'skills.backendDesc': 'Database, version control, and other tools',

    // Projects
    'projects.title': 'My Projects',
    'projects.subtitle': 'Some projects that I have worked on',
    'projects.viewProject': 'View Project',
    'projects.viewAll': 'View All Projects on GitHub',
    'projects.project1.title': 'Restu Panda Bus Website',
    'projects.project1.desc': 'The Restu Panda website is a modern and responsive platform designed to present information in an attractive, accessible, and user-friendly way across various devices.',
    'projects.project2.title': 'Portfolio Website',
    'projects.project2.desc': 'Responsive personal portfolio website with modern animations. Created using React, Tailwind CSS, and Framer Motion.',
    'projects.project3.title': 'My First Portfolio',
    'projects.project3.desc': 'My first portfolio website to showcase my profile and work.',

    // Contact
    'contact.title': 'Contact Me',
    'contact.subtitle': "Interested in working together or have questions? Don't hesitate to contact me!",
    'contact.name': 'Full Name',
    'contact.namePlaceholder': 'Enter your full name',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'Enter your email',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'Message subject',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Write your message here...',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.info': 'Contact Info',
    'contact.emailLabel': 'Email',
    'contact.whatsapp': 'Github',
    'contact.location': 'Location',
    'contact.locationValue': 'Malang - Indonesia',

    // Footer
    'footer.description': 'An 11th grade vocational student majoring in Software Engineering who is passionate about web & mobile development.',
    'footer.quickLinks': 'Quick Links',
    'footer.skills': 'Skills',
    'footer.contact': 'Contact',
    'footer.copyright': 'Copyright',
    'footer.rights': 'All Rights Reserved',
    'footer.madeWith': 'Made ',
    'footer.by': 'by Manggala Abimata',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['id']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
