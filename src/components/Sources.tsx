
import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Book, Users, Award } from 'lucide-react';

const Sources = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const sources = [
    {
      title: "Le Monde - Qui étaient les tirailleurs sénégalais",
      description: "Article explicatif complet sur l'histoire des tirailleurs sénégalais et leur rôle pendant la Seconde Guerre mondiale.",
      url: "https://www.lemonde.fr/comprendre-en-3-minutes/video/2024/12/01/qui-etaient-les-tirailleurs-senegalais-comprendre-en-trois-minutes_6423210_6176282.html",
      type: "Article de presse"
    },
    {
      title: "Wikipedia - Tirailleurs sénégalais",
      description: "Documentation détaillée sur l'histoire, l'organisation et les campagnes des tirailleurs sénégalais de 1857 à 1960.",
      url: "https://fr.m.wikipedia.org/wiki/Tirailleurs_s%C3%A9n%C3%A9galais",
      type: "Encyclopédie"
    },
    {
      title: "Chemins de Mémoire - Historique des tirailleurs sénégalais",
      description: "Site officiel du ministère français présentant l'historique complet des tirailleurs sénégalais.",
      url: "https://www.cheminsdememoire.gouv.fr/fr/historique-des-tirailleurs-senegalais",
      type: "Source officielle"
    }
  ];

  const additionalSources = [
    "Armelle Mabon, 'Prisonniers de guerre « indigènes » : Visages oubliés de la France occupée', 2010",
    "Martin Mourre, 'Thiaroye 1944 : Histoire et mémoire d'un massacre colonial', 2017",
    "Ousmane Sembène (réalisateur), 'Camp de Thiaroye', 1988",
    "Archives nationales du Sénégal - Fonds Thiaroye",
    "Service historique de la Défense (SHD) - Archives militaires françaises"
  ];

  const team = [
    {
      role: "Développement",
      description: "Conception et développement du site web interactif"
    },
    {
      role: "Recherche historique",
      description: "Collecte et vérification des sources historiques"
    },
    {
      role: "Design et UX",
      description: "Création de l'expérience utilisateur respectueuse et immersive"
    }
  ];

  return (
    <section 
      id="sources" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-800/50 to-gray-900/70"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-yellow-300 mb-6">
            Sources et Équipe
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ce projet s'appuie sur des recherches historiques rigoureuses et des sources fiables 
            pour honorer la mémoire des tirailleurs sénégalais.
          </p>
        </div>

        {/* Primary Sources */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="font-serif text-2xl font-semibold text-yellow-300 mb-8 flex items-center">
            <Book className="h-6 w-6 mr-3" />
            Sources Principales
          </h3>
          
          <div className="grid md:grid-cols-1 gap-6">
            {sources.map((source, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-800/50 rounded-lg border border-gray-600 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-200 mb-2">{source.title}</h4>
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                      {source.description}
                    </p>
                    <span className="inline-block px-3 py-1 bg-yellow-300/20 text-yellow-300 text-xs rounded-full">
                      {source.type}
                    </span>
                  </div>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 p-2 text-yellow-300 hover:text-yellow-300/80 transition-colors"
                    title="Ouvrir la source"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Additional Sources */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="font-serif text-2xl font-semibold text-yellow-300 mb-6 flex items-center">
              <Award className="h-6 w-6 mr-3" />
              Sources Complémentaires
            </h3>
            
            <div className="space-y-4">
              {additionalSources.map((source, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <p className="text-sm text-gray-300 leading-relaxed">{source}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="font-serif text-2xl font-semibold text-yellow-300 mb-6 flex items-center">
              <Users className="h-6 w-6 mr-3" />
              Équipe du Projet
            </h3>
            
            <div className="space-y-6">
              {team.map((member, index) => (
                <div key={index} className="p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                  <h4 className="font-semibold text-gray-200 mb-2">{member.role}</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dedication */}
        <div className={`text-center mt-16 p-8 bg-yellow-300/10 border border-yellow-300/20 rounded-lg transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="font-serif text-2xl font-semibold text-yellow-300 mb-4">
            Dédicace
          </h3>
          <p className="text-lg text-gray-200 leading-relaxed">
            Ce site est dédié à la mémoire de tous les tirailleurs sénégalais qui ont servi la France 
            et particulièrement à ceux qui ont perdu la vie à Thiaroye le 1er décembre 1944. 
            Que leur sacrifice ne soit jamais oublié.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sources;
