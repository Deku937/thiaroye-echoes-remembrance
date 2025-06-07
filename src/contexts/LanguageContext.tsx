
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // General
    title: "The Thiaroye Massacre 1944",
    subtitle: "In memory of the Senegalese Tirailleurs",
    description: "Discover the untold story of courage, sacrifice, and injustice that marked the history of Senegal and France.",
    discoverButton: "Discover Their Story",
    languageLabel: "Language",
    navigationHome: "Home",
    navigationStory: "Story",
    navigationTestimonies: "Testimonies",
    navigationAftermath: "Aftermath",
    navigationSources: "Sources",
    
    // Introduction
    introTitle: "The Senegalese Tirailleurs",
    introSubtitle: "Heroes forgotten by history",
    
    // Historical Context
    historicalContext: "Historical Context",
    contextDescription: "The Senegalese Tirailleurs were military units of the French Army, consisting of soldiers recruited in sub-Saharan Africa, primarily Senegal, but also in other French colonies. These troops were formed in 1857 and participated in all French colonial wars and campaigns, including World War I and World War II.",
    
    // War period section
    "1939-1945 : La Grande Guerre": "1939-1945: The Great War",
    "La Seconde Guerre mondiale fut le conflit le plus meurtrier de l'histoire. De 1939 à 1945, les combats se sont déroulés sur tous les continents, causant des millions de victimes aux deux camps : les Alliés et les forces de l'Axe.": "World War II was the deadliest conflict in history. From 1939 to 1945, battles took place on all continents, causing millions of casualties on both sides: the Allies and the Axis forces.",
    
    // Tirailleurs section
    tirailleursTitle: "The Senegalese Tirailleurs",
    tirailleursContent: "The Senegalese Tirailleurs were colonial infantry soldiers recruited from French West Africa. Despite facing discrimination and unequal treatment, they demonstrated exceptional bravery and loyalty. Their contribution to the war effort was immense, yet their sacrifices remained largely unrecognized for decades.",
    
    // Return section
    returnTitle: "The Return Home",
    returnContent: "After the war, the surviving Tirailleurs expected to receive their due compensation and recognition. However, many faced bureaucratic obstacles, delayed payments, and broken promises. Their legitimate demands for fair treatment would eventually lead to a tragic confrontation.",
    
    // Revolt section
    revoltTitle: "December 1, 1944: The Revolt",
    revoltDescription: "The tragic events that unfolded at the Thiaroye camp near Dakar",
    demandTitle: "A Legitimate Demand",
    demandContent: "On November 21, 1944, about 1,300 former prisoners of war and demobilized soldiers gathered at the Thiaroye camp near Dakar. They demanded their unpaid wages, family allowances, and discharge bonuses that had been promised to them. These were not unreasonable requests, but legitimate rights for soldiers who had served France with honor.",
    tensionTitle: "Rising Tensions",
    tensionContent: "The French colonial authorities, led by General Dagnan, refused to negotiate and threatened the soldiers. The situation escalated when the soldiers were told they would only receive a fraction of what they were owed. The peaceful protest gradually turned into a confrontation as frustration mounted among the veterans.",
    massacreTitle: "The Massacre",
    massacreContent: "On December 1, 1944, French forces opened fire on the unarmed Senegalese soldiers. The official count reported 35 dead, but witnesses and historians believe the actual number was much higher, possibly reaching several hundred. This tragic event became known as the Thiaroye Massacre.",
    
    // Navigation items
    introduction: "Introduction",
    revolt: "Revolt",
    testimonies: "Testimonies",
    aftermath: "Aftermath",
    sources: "Sources",
    
    // Testimonies section
    testimoniesTitle: "Voices and Memories",
    testimoniesDescription: "Testimonies from survivors and witnesses of the events",
    survivorTestimony: "We were promised our wages, our bonuses... We had fought for France, we had shed our blood. But when we asked for what was rightfully ours, they shot us down like dogs.",
    survivorName: "Amadou Diop",
    historianTestimony: "The Thiaroye massacre represents one of the darkest episodes in French colonial history. The silencing of this tragedy for decades is a testament to the systematic erasure of African voices.",
    historianName: "Dr. Mamadou Diouf",
    poetTestimony: "In the silence of Thiaroye, the echoes of injustice still resonate. These men died twice: once by bullets, and once by forgetting.",
    poetName: "Ousmane Sembène",
    
    // Aftermath section
    aftermathTitle: "The Aftermath",
    aftermathDescription: "The consequences and legacy of the Thiaroye events",
    coverupTitle: "Cover-up",
    coverupContent: "For decades, the French government denied the extent of the massacre and classified documents related to the events. Survivors faced intimidation and silence was imposed on the tragedy.",
    recognitionTitle: "Recognition",
    recognitionContent: "It wasn't until the 1990s that historians and activists began to shed light on the true events of Thiaroye, demanding justice and recognition for the victims.",
    memoryTitle: "Memory",
    memoryContent: "Today, the Thiaroye Massacre is remembered as a symbol of colonial injustice and the sacrifice of African soldiers who served France without receiving the recognition they deserved.",
    
    // Sources section
    sourcesTitle: "Sources and References",
    sourcesDescription: "Historical documents and testimonies that help us understand these events",
    
    // Footer
    footerSubtitle: "Honoring the memory of the Senegalese Tirailleurs",
    footerMessage: "Made with ❤️ for historical truth",
    footerCopyright: "© 2024 The Forgotten Heroes. All rights reserved.",
    footerQuote: "\"A people without memory is a people without future\" - Aimé Césaire",
    
    // Video section
    videoSectionTitle: "Artistic Tribute",
    videoSectionDescription: "A contemporary artistic interpretation of the Thiaroye events",
    videoCredit: "Video created by Senegalese artist Dip Doundou Guiss using artificial intelligence"
  },
  fr: {
    // General
    title: "Le Massacre de Thiaroye 1944",
    subtitle: "À la mémoire des Tirailleurs Sénégalais",
    description: "Découvrez l'histoire méconnue de courage, sacrifice et d'injustice qui a marqué l'histoire du Sénégal et de la France.",
    discoverButton: "Découvrir leur Histoire",
    languageLabel: "Langue",
    navigationHome: "Accueil",
    navigationStory: "Histoire",
    navigationTestimonies: "Témoignages",
    navigationAftermath: "Conséquences",
    navigationSources: "Sources",
    
    // Introduction
    introTitle: "Les Tirailleurs Sénégalais",
    introSubtitle: "Des héros oubliés par l'histoire",
    
    // Historical Context
    historicalContext: "Contexte Historique",
    contextDescription: "Les Tirailleurs Sénégalais étaient des unités militaires de l'armée française, composées de soldats recrutés en Afrique subsaharienne, principalement au Sénégal, mais aussi dans d'autres colonies françaises. Ces troupes furent formées en 1857 et participèrent à toutes les guerres et campagnes coloniales françaises, notamment la Première et la Seconde Guerre mondiale.",
    
    // War period section
    "1939-1945 : La Grande Guerre": "1939-1945 : La Grande Guerre",
    "La Seconde Guerre mondiale fut le conflit le plus meurtrier de l'histoire. De 1939 à 1945, les combats se sont déroulés sur tous les continents, causant des millions de victimes aux deux camps : les Alliés et les forces de l'Axe.": "La Seconde Guerre mondiale fut le conflit le plus meurtrier de l'histoire. De 1939 à 1945, les combats se sont déroulés sur tous les continents, causant des millions de victimes aux deux camps : les Alliés et les forces de l'Axe.",
    
    // Tirailleurs section
    tirailleursTitle: "Les Tirailleurs Sénégalais",
    tirailleursContent: "Les Tirailleurs Sénégalais étaient des soldats d'infanterie coloniale recrutés en Afrique occidentale française. Malgré la discrimination et les traitements inégaux qu'ils subissaient, ils firent preuve d'un courage et d'une loyauté exceptionnels. Leur contribution à l'effort de guerre fut immense, pourtant leurs sacrifices restèrent largement méconnus pendant des décennies.",
    
    // Return section
    returnTitle: "Le Retour au Pays",
    returnContent: "Après la guerre, les Tirailleurs survivants s'attendaient à recevoir la compensation et la reconnaissance qui leur étaient dues. Cependant, beaucoup firent face à des obstacles bureaucratiques, des paiements retardés et des promesses non tenues. Leurs demandes légitimes de traitement équitable allaient finalement mener à une confrontation tragique.",
    
    // Revolt section
    revoltTitle: "1er Décembre 1944 : La Révolte",
    revoltDescription: "Les événements tragiques qui se sont déroulés au camp de Thiaroye près de Dakar",
    demandTitle: "Une Revendication Légitime",
    demandContent: "Le 21 novembre 1944, environ 1 300 anciens prisonniers de guerre et soldats démobilisés se rassemblèrent au camp de Thiaroye près de Dakar. Ils réclamaient leurs soldes impayées, leurs allocations familiales et leurs primes de démobilisation qui leur avaient été promises. Ce n'étaient pas des demandes déraisonnables, mais des droits légitimes pour des soldats qui avaient servi la France avec honneur.",
    tensionTitle: "Montée des Tensions",
    tensionContent: "Les autorités coloniales françaises, dirigées par le général Dagnan, refusèrent de négocier et menacèrent les soldats. La situation s'aggrava quand on dit aux soldats qu'ils ne recevraient qu'une fraction de ce qui leur était dû. La protestation pacifique se transforma progressivement en confrontation alors que la frustration montait parmi les vétérans.",
    massacreTitle: "Le Massacre",
    massacreContent: "Le 1er décembre 1944, les forces françaises ouvrirent le feu sur les soldats sénégalais non armés. Le décompte officiel fit état de 35 morts, mais les témoins et historiens croient que le nombre réel était bien plus élevé, atteignant possiblement plusieurs centaines. Cet événement tragique devint connu sous le nom de Massacre de Thiaroye.",
    
    // Navigation items
    introduction: "Introduction",
    revolt: "Révolte",
    testimonies: "Témoignages",
    aftermath: "Conséquences",
    sources: "Sources",
    
    // Testimonies section
    testimoniesTitle: "Paroles et Mémoires",
    testimoniesDescription: "Témoignages de survivants et témoins des événements",
    survivorTestimony: "On nous avait promis nos soldes, nos primes... Nous avions combattu pour la France, nous avions versé notre sang. Mais quand nous avons réclamé ce qui nous revenait de droit, ils nous ont abattus comme des chiens.",
    survivorName: "Amadou Diop",
    historianTestimony: "Le massacre de Thiaroye représente l'un des épisodes les plus sombres de l'histoire coloniale française. Le silence imposé sur cette tragédie pendant des décennies témoigne de l'effacement systématique des voix africaines.",
    historianName: "Dr. Mamadou Diouf",
    poetTestimony: "Dans le silence de Thiaroye, résonnent encore les échos de l'injustice. Ces hommes sont morts deux fois : une fois par les balles, une fois par l'oubli.",
    poetName: "Ousmane Sembène",
    
    // Aftermath section
    aftermathTitle: "Les Conséquences",
    aftermathDescription: "Les conséquences et l'héritage des événements de Thiaroye",
    coverupTitle: "Dissimulation",
    coverupContent: "Pendant des décennies, le gouvernement français a nié l'ampleur du massacre et classifié les documents liés aux événements. Les survivants ont fait face à l'intimidation et le silence a été imposé sur la tragédie.",
    recognitionTitle: "Reconnaissance",
    recognitionContent: "Ce n'est qu'à partir des années 1990 que les historiens et activistes ont commencé à faire la lumière sur les véritables événements de Thiaroye, réclamant justice et reconnaissance pour les victimes.",
    memoryTitle: "Mémoire",
    memoryContent: "Aujourd'hui, le Massacre de Thiaroye est rappelé comme un symbole de l'injustice coloniale et du sacrifice des soldats africains qui ont servi la France sans recevoir la reconnaissance qu'ils méritaient.",
    
    // Sources section
    sourcesTitle: "Sources et Références",
    sourcesDescription: "Documents historiques et témoignages qui nous aident à comprendre ces événements",
    
    // Footer
    footerSubtitle: "Honorant la mémoire des Tirailleurs Sénégalais",
    footerMessage: "Fait avec ❤️ pour la vérité historique",
    footerCopyright: "© 2024 Les Héros Oubliés. Tous droits réservés.",
    footerQuote: "\"Un peuple sans mémoire est un peuple sans avenir\" - Aimé Césaire",
    
    // Video section
    videoSectionTitle: "Hommage Artistique",
    videoSectionDescription: "Une interprétation artistique contemporaine des événements de Thiaroye",
    videoCredit: "Vidéo créée par l'artiste sénégalais Dip Doundou Guiss en utilisant l'intelligence artificielle"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default to English

  const t = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
