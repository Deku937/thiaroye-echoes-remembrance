
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Introduction = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { t } = useLanguage();

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
      title: t('1939-1945 : La Grande Guerre),
      content: t('warContent'),
      image: "https://medias.histoire-et-civilisations.com/api/v1/images/view/5f6dec863e45460346140a16/width_1000/image.jpg"
    },
    {
      title: t('tirailleursTitle'),
      content: t('tirailleursContent'),
      image: "https://www.pressafrik.com/photo/art/grande/85124758-60726217.jpg?v=1735000253"
    },
    {
      title: t('returnTitle'),
      content: t('returnContent'),
      image: "https://www.senegal-online.com/wp-content/uploads/2023/04/tirailleurs-senegalais.jpg"
    }
  ];

  return (
    <section id="intro" className="py-20 bg-gradient-to-b from-gray-800/50 to-gray-700/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-yellow-300 mb-6">
            {t('historicalContext')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('contextDescription')}
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
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-yellow-300 mb-6">
                    {section.title}
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    {section.content}
                  </p>
                </div>
                
                <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-lg shadow-2xl">
                    <img
                      src={section.image}
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
