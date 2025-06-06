
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
  };
}

const translations: Translations = {
  title: {
    fr: 'Thiaroye 1944',
    en: 'Thiaroye 1944'
  },
  quote: {
    fr: 'Ils sont morts pour la France,\nmais pas payés par la France.',
    en: 'They died for France,\nbut were not paid by France.'
  },
  description: {
    fr: 'Le 1er décembre 1944, des tirailleurs sénégalais se révoltent au camp de Thiaroye. L\'armée française ouvre le feu. Une tragédie oubliée, une mémoire à honorer.',
    en: 'On December 1, 1944, Senegalese riflemen revolt at the Thiaroye camp. The French army opens fire. A forgotten tragedy, a memory to honor.'
  },
  discoverButton: {
    fr: 'Découvrir leur histoire',
    en: 'Discover their story'
  },
  navigation: {
    fr: 'Navigation',
    en: 'Navigation'
  },
  introduction: {
    fr: 'Introduction',
    en: 'Introduction'
  },
  revolt: {
    fr: 'La Révolte',
    en: 'The Revolt'
  },
  testimonies: {
    fr: 'Témoignages',
    en: 'Testimonies'
  },
  aftermath: {
    fr: 'Et après ?',
    en: 'What happened next?'
  },
  sources: {
    fr: 'Sources',
    en: 'Sources'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
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
