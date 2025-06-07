
import { useEffect, useRef, useState } from 'react';
import { Clock, Eye, Scale, Heart } from 'lucide-react';

const Aftermath = () => {
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

  const consequences = [
    {
      icon: Eye,
      title: "Le Silence",
      period: "1944-1980",
      description: "Pendant près de 40 ans, la France maintient le silence sur les événements de Thiaroye. Les archives sont classées secrètes."
    },
    {
      icon: Clock,
      title: "Les Premières Recherches",
      period: "1980-2000",
      description: "Des historiens comme Armelle Mabon commencent à révéler la vérité sur le massacre, malgré la réticence officielle."
    },
    {
      icon: Scale,
      title: "Reconnaissance Partielle",
      period: "2000-2010",
      description: "La France reconnaît officiellement la 'tragédie' de Thiaroye, mais refuse encore de parler de 'massacre'."
    },
    {
      icon: Heart,
      title: "Mémoire Vivante",
      period: "2010-Aujourd'hui",
      description: "Au Sénégal et en France, la mémoire de Thiaroye devient un symbole de la lutte contre l'oubli colonial."
    }
  ];

  const timeline = [
    { year: "1944", event: "Massacre de Thiaroye" },
    { year: "1988", event: "Film 'Camp de Thiaroye' d'Ousmane Sembène" },
    { year: "2004", event: "Reconnaissance officielle française" },
    { year: "2014", event: "70e anniversaire - Nouvelles commémorations" },
    { year: "2024", event: "80e anniversaire - Mémoire plus que jamais vivante" }
  ];

  return (
    <section 
      id="aftermath" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-700/30 to-gray-800/50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-yellow-300 mb-6">
            Et Après ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            L'histoire de Thiaroye ne s'arrête pas en 1944. C'est le début d'un long combat 
            pour la mémoire et la reconnaissance.
          </p>
        </div>

        {/* Consequences Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {consequences.map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-600 hover:bg-gray-800/70 transition-all duration-300"
            >
              <item.icon className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="font-serif text-lg font-semibold text-gray-200 mb-2">
                {item.title}
              </h3>
              <div className="text-sm text-yellow-300 font-medium mb-3">{item.period}</div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-center text-yellow-300 mb-12">
            80 Ans de Mémoire
          </h3>
          
          <div className="relative overflow-hidden">
            <div className="flex items-center justify-between py-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex-1 text-center relative">
                  <div className="relative z-10 bg-yellow-300 text-black rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm mx-auto mb-4">
                    {item.year}
                  </div>
                  <p className="text-sm text-gray-200 font-medium max-w-32 mx-auto leading-tight">
                    {item.event}
                  </p>
                  
                  {index < timeline.length - 1 && (
                    <div className="absolute top-8 left-1/2 w-full h-0.5 bg-yellow-300/30 transform -translate-y-1/2 z-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 p-8 bg-yellow-300/10 border border-yellow-300/20 rounded-lg transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="font-serif text-2xl font-semibold text-yellow-300 mb-4">
            La Mémoire Continue
          </h3>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed">
            Aujourd'hui encore, des familles de tirailleurs cherchent des réponses. 
            Des historiens continuent leurs recherches. La mémoire de Thiaroye reste vivante.
          </p>
          <blockquote className="font-serif text-xl italic text-gray-200">
            "Se souvenir, c'est résister à l'oubli."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Aftermath;
