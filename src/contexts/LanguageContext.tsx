
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt' | 'ar' | 'wo';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Homepage
    title: "Thiaroye 1944",
    quote: "They died for France,<br />but were not paid by France.",
    description: "On December 1, 1944, Senegalese riflemen revolted at the Thiaroye camp. The French army opened fire. A forgotten tragedy, a memory to honor.",
    discoverButton: "Discover their story",
    
    // Navigation
    introduction: "Introduction",
    revolt: "The Revolt",
    testimonies: "Testimonies",
    aftermath: "What happened next?",
    sources: "Sources",
    
    // Introduction section
    historicalContext: "Historical Context",
    contextDescription: "To understand Thiaroye, we must first understand the commitment of Senegalese riflemen in the war.",
    warTitle: "1939-1945: The Great War",
    warContent: "During World War II, more than 200,000 African riflemen were mobilized to defend France. They came from Senegal, Mali, Ivory Coast and other French colonies.",
    tirailleursTitle: "The Senegalese Riflemen",
    tirailleursContent: "These African soldiers, called \"Senegalese riflemen\" regardless of their origin, fought on all fronts: France, Italy, Indochina. They paid a heavy price for the war.",
    returnTitle: "The Return Home",
    returnContent: "In November 1944, 1,280 demobilized riflemen arrived at the Thiaroye transit camp, near Dakar. They awaited their compensation and pay, promised but never paid.",
    
    // Revolt section
    revoltTitle: "December 1, 1944: The Revolt",
    revoltDescription: "What started as a legitimate demand for payment became a tragedy that France wanted to erase from history.",
    demandTitle: "A Legitimate Demand",
    demandContent: "The riflemen demand their back pay and demobilization bonuses. The amounts owed are enormous: some are owed several years of salary.",
    tensionTitle: "Rising Tensions",
    tensionContent: "French authorities refuse to pay the full amounts. They propose derisory sums and threaten to use force if the soldiers don't accept.",
    massacreTitle: "The Massacre",
    massacreContent: "On December 1st at dawn, French troops surround the camp. Without warning, they open fire on unarmed men. The official toll: 35 dead. The reality is probably much higher.",
    
    // Testimonies section
    testimoniesTitle: "Words and Memory",
    testimoniesDescription: "The voices of those who lived through this tragedy and those who preserve its memory.",
    survivorTestimony: "\"They promised us everything when we left for war. When we came back, they gave us bullets instead of money.\"",
    survivorName: "Survivor of Thiaroye",
    historianTestimony: "\"Thiaroye is a symbol of colonial ingratitude. These men died twice: once for France, once because of France.\"",
    historianName: "Historian Armelle Mabon",
    poetTestimony: "\"Thiaroye, that name resonates like a gunshot in the silence of official history.\"",
    poetName: "Léopold Sédar Senghor",
    
    // Aftermath section
    aftermathTitle: "What Happened Next?",
    aftermathDescription: "The consequences of Thiaroye and the long fight for recognition.",
    coverupTitle: "State Cover-up",
    coverupContent: "France minimizes the facts, speaks of a \"mutiny\" and hides the documents. The survivors are intimidated, some imprisoned.",
    recognitionTitle: "A Long Fight for Recognition",
    recognitionContent: "It took decades for France to begin acknowledging this tragedy. In 2004, President Chirac speaks of a \"bloody repression.\"",
    memoryTitle: "Duty of Memory",
    memoryContent: "Today, historians, artists and activists continue to fight so that Thiaroye is not forgotten. Memory is an act of justice.",
    
    // Sources section
    sourcesTitle: "Sources and References",
    sourcesDescription: "To learn more about this forgotten page of history.",
    
    // Footer
    footerSubtitle: "In memory of Senegalese riflemen",
    footerMessage: "Created with love to preserve memory",
    footerCopyright: "© 2024 Thiaroye Memory. Educational and memorial site.",
    footerQuote: "\"Memory is the only paradise from which we cannot be expelled.\" - Jean Paul Richter"
  },
  fr: {
    // Homepage
    title: "Thiaroye 1944",
    quote: "Ils sont morts pour la France,<br />mais pas payés par la France.",
    description: "Le 1er décembre 1944, des tirailleurs sénégalais se révoltent au camp de Thiaroye. L'armée française ouvre le feu. Une tragédie oubliée, une mémoire à honorer.",
    discoverButton: "Découvrir leur histoire",
    
    // Navigation
    introduction: "Introduction",
    revolt: "La Révolte",
    testimonies: "Témoignages",
    aftermath: "Et après ?",
    sources: "Sources",
    
    // Introduction section
    historicalContext: "Le Contexte Historique",
    contextDescription: "Pour comprendre Thiaroye, il faut d'abord comprendre l'engagement des tirailleurs sénégalais dans la guerre.",
    warTitle: "1939-1945 : La Grande Guerre",
    warContent: "Pendant la Seconde Guerre mondiale, plus de 200 000 tirailleurs africains sont mobilisés pour défendre la France. Ils viennent du Sénégal, du Mali, de Côte d'Ivoire et d'autres colonies françaises.",
    tirailleursTitle: "Les Tirailleurs Sénégalais",
    tirailleursContent: "Ces soldats africains, appelés \"tirailleurs sénégalais\" indépendamment de leur origine, combattent sur tous les fronts : France, Italie, Indochine. Ils paient un lourd tribut à la guerre.",
    returnTitle: "Le Retour au Pays",
    returnContent: "En novembre 1944, 1 280 tirailleurs démobilisés arrivent au camp de transit de Thiaroye, près de Dakar. Ils attendent leurs indemnités et leur solde, promises mais jamais versées.",
    
    // Revolt section
    revoltTitle: "1er décembre 1944 : La Révolte",
    revoltDescription: "Ce qui commence comme une revendication légitime de paiement devient une tragédie que la France voudra effacer de l'histoire.",
    demandTitle: "Une Revendication Légitime",
    demandContent: "Les tirailleurs réclament leurs arriérés de solde et leurs primes de démobilisation. Les sommes dues sont énormes : certains ont plusieurs années de salaire en retard.",
    tensionTitle: "Montée des Tensions",
    tensionContent: "Les autorités françaises refusent de payer les sommes intégrales. Elles proposent des montants dérisoires et menacent d'employer la force si les soldats n'acceptent pas.",
    massacreTitle: "Le Massacre",
    massacreContent: "Le 1er décembre à l'aube, les troupes françaises encerclent le camp. Sans sommation, elles ouvrent le feu sur des hommes désarmés. Le bilan officiel : 35 morts. La réalité est probablement bien plus lourde.",
    
    // Testimonies section
    testimoniesTitle: "Paroles et Mémoires",
    testimoniesDescription: "Les voix de ceux qui ont vécu cette tragédie et de ceux qui en préservent la mémoire.",
    survivorTestimony: "\"Ils nous avaient tout promis quand on est parti à la guerre. Quand on est revenu, ils nous ont donné des balles au lieu de l'argent.\"",
    survivorName: "Survivant de Thiaroye",
    historianTestimony: "\"Thiaroye, c'est le symbole de l'ingratitude coloniale. Ces hommes sont morts deux fois : une fois pour la France, une fois à cause de la France.\"",
    historianName: "Historienne Armelle Mabon",
    poetTestimony: "\"Thiaroye, ce nom résonne comme un coup de feu dans le silence de l'histoire officielle.\"",
    poetName: "Léopold Sédar Senghor",
    
    // Aftermath section
    aftermathTitle: "Et Après ?",
    aftermathDescription: "Les conséquences de Thiaroye et le long combat pour la reconnaissance.",
    coverupTitle: "L'Étouffement d'État",
    coverupContent: "La France minimise les faits, parle de \"mutinerie\" et cache les documents. Les survivants sont intimidés, certains emprisonnés.",
    recognitionTitle: "Un Long Combat pour la Reconnaissance",
    recognitionContent: "Il faudra des décennies pour que la France commence à reconnaître cette tragédie. En 2004, le président Chirac parle d'une \"répression sanglante\".",
    memoryTitle: "Devoir de Mémoire",
    memoryContent: "Aujourd'hui, historiens, artistes et militants continuent le combat pour que Thiaroye ne soit pas oublié. La mémoire est un acte de justice.",
    
    // Sources section
    sourcesTitle: "Sources et Références",
    sourcesDescription: "Pour en savoir plus sur cette page oubliée de l'histoire.",
    
    // Footer
    footerSubtitle: "En mémoire des tirailleurs sénégalais",
    footerMessage: "Créé avec amour pour préserver la mémoire",
    footerCopyright: "© 2024 Mémoire Thiaroye. Site éducatif et mémoriel.",
    footerQuote: "\"La mémoire est le seul paradis dont nous ne puissions être chassés.\" - Jean Paul Richter"
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
    sources: "Fuentes",
    historicalContext: "Contexto Histórico",
    contextDescription: "Para entender Thiaroye, primero debemos entender el compromiso de los tiradores senegaleses en la guerra.",
    warTitle: "1939-1945: La Gran Guerra",
    warContent: "Durante la Segunda Guerra Mundial, más de 200,000 tiradores africanos fueron movilizados para defender Francia. Vinieron de Senegal, Mali, Costa de Marfil y otras colonias francesas.",
    tirailleursTitle: "Los Tiradores Senegaleses",
    tirailleursContent: "Estos soldados africanos, llamados \"tiradores senegaleses\" independientemente de su origen, lucharon en todos los frentes: Francia, Italia, Indochina. Pagaron un alto precio por la guerra.",
    returnTitle: "El Regreso a Casa",
    returnContent: "En noviembre de 1944, 1,280 tiradores desmovilizados llegaron al campo de tránsito de Thiaroye, cerca de Dakar. Esperaban su compensación y pago, prometido pero nunca pagado."
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
    sources: "Quellen",
    historicalContext: "Historischer Kontext",
    contextDescription: "Um Thiaroye zu verstehen, müssen wir zuerst das Engagement der senegalesischen Schützen im Krieg verstehen.",
    warTitle: "1939-1945: Der Große Krieg",
    warContent: "Während des Zweiten Weltkriegs wurden mehr als 200.000 afrikanische Schützen mobilisiert, um Frankreich zu verteidigen. Sie kamen aus Senegal, Mali, Elfenbeinküste und anderen französischen Kolonien.",
    tirailleursTitle: "Die Senegalesischen Schützen",
    tirailleursContent: "Diese afrikanischen Soldaten, unabhängig von ihrer Herkunft \"senegalesische Schützen\" genannt, kämpften an allen Fronten: Frankreich, Italien, Indochina. Sie zahlten einen hohen Preis für den Krieg.",
    returnTitle: "Die Heimkehr",
    returnContent: "Im November 1944 kamen 1.280 demobilisierte Schützen im Übergangslager Thiaroye bei Dakar an. Sie warteten auf ihre Entschädigung und Bezahlung, die versprochen, aber nie bezahlt wurde."
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
    sources: "Fonti",
    historicalContext: "Contesto Storico",
    contextDescription: "Per capire Thiaroye, dobbiamo prima capire l'impegno dei fucilieri senegalesi nella guerra.",
    warTitle: "1939-1945: La Grande Guerra",
    warContent: "Durante la Seconda Guerra Mondiale, più di 200.000 fucilieri africani furono mobilitati per difendere la Francia. Venivano dal Senegal, Mali, Costa d'Avorio e altre colonie francesi.",
    tirailleursTitle: "I Fucilieri Senegalesi",
    tirailleursContent: "Questi soldati africani, chiamati \"fucilieri senegalesi\" indipendentemente dalla loro origine, combatterono su tutti i fronti: Francia, Italia, Indocina. Pagarono un prezzo alto per la guerra.",
    returnTitle: "Il Ritorno a Casa",
    returnContent: "Nel novembre 1944, 1.280 fucilieri smobilitati arrivarono al campo di transito di Thiaroye, vicino a Dakar. Aspettavano la loro compensazione e paga, promessa ma mai pagata."
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
    sources: "Fontes",
    historicalContext: "Contexto Histórico",
    contextDescription: "Para entender Thiaroye, devemos primeiro entender o compromisso dos atiradores senegaleses na guerra.",
    warTitle: "1939-1945: A Grande Guerra",
    warContent: "Durante a Segunda Guerra Mundial, mais de 200.000 atiradores africanos foram mobilizados para defender a França. Eles vieram do Senegal, Mali, Costa do Marfim e outras colônias francesas.",
    tirailleursTitle: "Os Atiradores Senegaleses",
    tirailleursContent: "Esses soldados africanos, chamados de \"atiradores senegaleses\" independentemente de sua origem, lutaram em todas as frentes: França, Itália, Indochina. Eles pagaram um preço alto pela guerra.",
    returnTitle: "O Retorno para Casa",
    returnContent: "Em novembro de 1944, 1.280 atiradores desmobilizados chegaram ao campo de trânsito de Thiaroye, perto de Dakar. Eles aguardavam sua compensação e pagamento, prometido mas nunca pago."
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
    sources: "المصادر",
    historicalContext: "السياق التاريخي",
    contextDescription: "لفهم تياروي، يجب أن نفهم أولاً التزام الرماة السنغاليين في الحرب.",
    warTitle: "1939-1945: الحرب العظمى",
    warContent: "خلال الحرب العالمية الثانية، تم تعبئة أكثر من 200,000 رامي أفريقي للدفاع عن فرنسا. جاؤوا من السنغال ومالي وساحل العاج ومستعمرات فرنسية أخرى.",
    tirailleursTitle: "الرماة السنغاليون",
    tirailleursContent: "هؤلاء الجنود الأفارقة، الذين أطلق عليهم \"الرماة السنغاليون\" بغض النظر عن أصلهم، قاتلوا في جميع الجبهات: فرنسا وإيطاليا والهند الصينية. دفعوا ثمناً باهظاً للحرب.",
    returnTitle: "العودة إلى الوطن",
    returnContent: "في نوفمبر 1944، وصل 1,280 رامي مسرح إلى معسكر ترانزيت تياروي، بالقرب من داكار. كانوا ينتظرون تعويضهم ودفعهم، الموعود ولكن لم يُدفع أبداً."
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
    sources: "Kaw yi",
    historicalContext: "Taariix bi",
    contextDescription: "Ngir faham Thiaroye, war na ñu soxla tagg yi tirailleur yu Senegal yi defoon ci buur bi.",
    warTitle: "1939-1945: Buur bu mag",
    warContent: "Ci buur bi ñaareelu, tirailleur yu Afrik yu gën 200 000 ñu ko takk ngir defar Faraas. Ñu ñëw ci Senegal, Mali, Côte d'Ivoire ak yeneen koom yi Faraas.",
    tirailleursTitle: "Tirailleur yu Senegal",
    tirailleursContent: "Askar yi Afrik, ñu ko tudde \"tirailleur yu Senegal\" lu molto ne ñaaka ñëwoon, ñu baaxe ci front yëpp: Faraas, Itali, Indochine. Ñu jariñ ci buur bi.",
    returnTitle: "Delloo ci kër",
    returnContent: "Ci nowambar 1944, tirailleur yu 1 280 yu ñu far ñu ëgg ci camp bi Thiaroye, jege Dakar. Ñu tax leen alal ak leen jëfandikoo, muy ñu ko laaj waaye ñu joxul."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en'); // Changed default to English

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations[Language]];
    return translation || key;
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
