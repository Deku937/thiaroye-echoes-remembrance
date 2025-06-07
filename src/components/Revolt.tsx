
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Revolt = () => {
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
      title: t('demandTitle'),
      content: t('demandContent'),
      image: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/bc59/live/8a92ba00-a762-11ef-8ab9-9192db313061.jpg.webp"
    },
    {
      title: t('tensionTitle'),
      content: t('tensionContent'),
      image: "https://img.20mn.fr/44aV6HAcSZqKLqCLsMB4ng/1444x920_photo-prise-le-04-decembre-1939-de-tirailleurs-senegalais-a-l-instruction-dans-un-camp-d-entrainement-dans-les-colonies-francaises-en-afrique"
    },
    {
      title: t('massacreTitle'),
      content: t('massacreContent'),
      image: "https://s.france24.com/media/display/cd252448-af41-11ef-b506-005056a97e36/w:1280/p:16x9/000_36NC7L3.jpg"
    }
  ];

  return (
    <section id="revolt" className="py-20 bg-gradient-to-b from-gray-700/30 to-gray-600/20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-yellow-300 mb-6">
            {t('revoltTitle')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('revoltDescription')}
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

export default Revolt;
