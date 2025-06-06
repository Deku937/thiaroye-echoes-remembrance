
import { useEffect, useRef, useState } from 'react';

const Introduction = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const sections = [
    {
      title: "1939-1945 : La Grande Guerre",
      content: "Pendant la Seconde Guerre mondiale, plus de 200 000 tirailleurs africains sont mobilisés pour défendre la France. Ils viennent du Sénégal, du Mali, de Côte d'Ivoire et d'autres colonies françaises.",
      image: "photo-1527576539890-dfa815648363"
    },
    {
      title: "Les Tirailleurs Sénégalais",
      content: "Ces soldats africains, appelés \"tirailleurs sénégalais\" indépendamment de leur origine, combattent sur tous les fronts : France, Italie, Indochine. Ils paient un lourd tribut à la guerre.",
      image: "photo-1487958449943-2429e8be8625"
    },
    {
      title: "Le Retour au Pays",
      content: "En novembre 1944, 1 280 tirailleurs démobilisés arrivent au camp de transit de Thiaroye, près de Dakar. Ils attendent leurs indemnités et leur solde, promises mais jamais versées.",
      image: "photo-1518005020951-eccb494ad742"
    }
  ];

  return (
    <section id="intro" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gold mb-6">
            Le Contexte Historique
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pour comprendre Thiaroye, il faut d'abord comprendre l'engagement des tirailleurs sénégalais dans la guerre.
          </p>
        </div>

        <div className="space-y-32">
          {sections.map((section, index) => (
            <div
              key={index}
              ref={el => sectionRefs.current[index] = el}
              className={`transition-all duration-1000 ${
                visibleSections.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-gold mb-6">
                    {section.title}
                  </h3>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    {section.content}
                  </p>
                </div>
                
                <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-lg shadow-2xl">
                    <img
                      src={`https://images.unsplash.com/${section.image}?auto=format&fit=crop&w=800&q=80`}
                      alt={section.title}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
