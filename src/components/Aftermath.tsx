
import { useEffect, useRef, useState } from 'react';
import { Shield, Users, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Aftermath = () => {
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
      icon: Shield,
      title: t('coverupTitle'),
      content: t('coverupContent'),
      color: 'text-red-400'
    },
    {
      icon: Users,
      title: t('recognitionTitle'),
      content: t('recognitionContent'),
      color: 'text-blue-400'
    },
    {
      icon: Heart,
      title: t('memoryTitle'),
      content: t('memoryContent'),
      color: 'text-yellow-400'
    }
  ];

  return (
    <section id="aftermath" className="py-20 bg-gradient-to-b from-gray-500/10 to-gray-800/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-yellow-300 mb-6">
            {t('aftermathTitle')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('aftermathDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div
                key={index}
                ref={el => sectionRefs.current[index] = el}
                className={`transition-all duration-1000 delay-${index * 200} ${
                  visibleSections.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-lg p-8 h-full border border-gray-600/30 hover:border-yellow-300/50 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-700/50 mb-4`}>
                      <IconComponent className={`h-8 w-8 ${section.color}`} />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-yellow-300 mb-4">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed text-center">
                    {section.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Aftermath;
