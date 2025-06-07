
import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonies = () => {
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

  const testimonies = [
    {
      quote: t('survivorTestimony'),
      author: t('survivorName'),
      role: "",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: t('historianTestimony'),
      author: t('historianName'),
      role: "",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: t('poetTestimony'),
      author: t('poetName'),
      role: "",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="testimonies" className="py-20 bg-gradient-to-b from-gray-600/20 to-gray-500/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-yellow-300 mb-6">
            {t('testimoniesTitle')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('testimoniesDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonies.map((testimony, index) => (
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
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-yellow-300 mb-4" />
                  <p className="text-gray-200 text-lg leading-relaxed italic">
                    {testimony.quote}
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <img
                    src={testimony.image}
                    alt={testimony.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-yellow-300/50"
                  />
                  <div>
                    <h4 className="font-semibold text-yellow-300">{testimony.author}</h4>
                    {testimony.role && (
                      <p className="text-sm text-gray-400">{testimony.role}</p>
                    )}
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

export default Testimonies;
