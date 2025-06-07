
import React, { createContext, useContext, useState } from 'react';

type Language = 'fr' | 'en' | 'es' | 'de' | 'it' | 'pt' | 'ar' | 'wo';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    title: "Thiaroye 1944",
    quote: "Ils sont morts pour la France,<br />mais pas payés par la France.",
    description: "Le 1er décembre 1944, des tirailleurs sénégalais se révoltent au camp de Thiaroye. L'armée française ouvre le feu. Une tragédie oubliée, une mémoire à honorer.",
    discoverButton: "Découvrir leur histoire",
    introduction: "Introduction",
    revolt: "La Révolte",
    testimonies: "Témoignages",
    aftermath: "Et après ?",
    sources: "Sources"
  },
  en: {
    title: "Thiaroye 1944",
    quote: "They died for France,<br />but were not paid by France.",
    description: "On December 1, 1944, Senegalese riflemen revolted at the Thiaroye camp. The French army opened fire. A forgotten tragedy, a memory to honor.",
    discoverButton: "Discover their story",
    introduction: "Introduction",
    revolt: "The Revolt",
    testimonies: "Testimonies",
    aftermath: "What happened next?",
    sources: "Sources"
  },
  es: {
    title: "Thiaroye 1944",
    quote: "Murieron por Francia,<br />pero no fueron pagados por Francia.",
    description: "El 1 de diciembre de 1944, los tiradores senegaleses se rebelaron en el campo de Thiaroye. El ejército francés abrió fuego. Una tragedia olvidada, una memoria que honrar.",
    discoverButton: "Descubrir su historia",
    introduction: "Introducción",
    revolt: "La Revuelta",
    testimonies: "Testimonios",
    aftermath: "¿Qué pasó después?",
    sources: "Fuentes"
  },
  de: {
    title: "Thiaroye 1944",
    quote: "Sie starben für Frankreich,<br />aber wurden nicht von Frankreich bezahlt.",
    description: "Am 1. Dezember 1944 revoltierten senegalesische Schützen im Lager Thiaroye. Die französische Armee eröffnete das Feuer. Eine vergessene Tragödie, eine Erinnerung zu ehren.",
    discoverButton: "Ihre Geschichte entdecken",
    introduction: "Einführung",
    revolt: "Die Revolte",
    testimonies: "Zeugenaussagen",
    aftermath: "Was geschah danach?",
    sources: "Quellen"
  },
  it: {
    title: "Thiaroye 1944",
    quote: "Sono morti per la Francia,<br />ma non sono stati pagati dalla Francia.",
    description: "Il 1° dicembre 1944, i fucilieri senegalesi si ribellarono al campo di Thiaroye. L'esercito francese aprì il fuoco. Una tragedia dimenticata, una memoria da onorare.",
    discoverButton: "Scopri la loro storia",
    introduction: "Introduzione",
    revolt: "La Rivolta",
    testimonies: "Testimonianze",
    aftermath: "Cosa successe dopo?",
    sources: "Fonti"
  },
  pt: {
    title: "Thiaroye 1944",
    quote: "Eles morreram pela França,<br />mas não foram pagos pela França.",
    description: "Em 1º de dezembro de 1944, atiradores senegaleses se revoltaram no campo de Thiaroye. O exército francês abriu fogo. Uma tragédia esquecida, uma memória a honrar.",
    discoverButton: "Descobrir sua história",
    introduction: "Introdução",
    revolt: "A Revolta",
    testimonies: "Testemunhos",
    aftermath: "O que aconteceu depois?",
    sources: "Fontes"
  },
  ar: {
    title: "تياروي 1944",
    quote: "لقد ماتوا من أجل فرنسا،<br />لكن لم تدفع لهم فرنسا.",
    description: "في 1 ديسمبر 1944، ثار الرماة السنغاليون في معسكر تياروي. فتح الجيش الفرنسي النار. مأساة منسية، ذكرى يجب تكريمها.",
    discoverButton: "اكتشف قصتهم",
    introduction: "مقدمة",
    revolt: "الثورة",
    testimonies: "الشهادات",
    aftermath: "ماذا حدث بعد ذلك؟",
    sources: "المصادر"
  },
  wo: {
    title: "Thiaroye 1944",
    quote: "Dañu dee ngir Faraas,<br />waaye Faraas defulo leen alal.",
    description: "Ci 1er décembre 1944, ay tirailleur yu Senegal ñu ñakk ci camp bi Thiaroye. Askar yi Faraas ñu woote. Benn faraas bu ñu ñentu, benn xalass bu war a wax.",
    discoverButton: "Gëmu leen taariix",
    introduction: "Soxla",
    revolt: "Ñaakk bi",
    testimonies: "Témoignages",
    aftermath: "Lu xew kii ñepp?",
    sources: "Kaw yi"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
