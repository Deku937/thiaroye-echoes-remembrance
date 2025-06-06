
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = ({ onDiscover }: { onDiscover: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-memorial-black">
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-10" />
      
      {/* Background placeholder image */}
      <div className="absolute inset-0 bg-gradient-to-br from-kaki/20 to-dark-red/20" />
      
      <div className={`relative z-20 text-center max-w-4xl px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-gold mb-6 leading-tight drop-shadow-2xl">
          {t('title')}
        </h1>
        
        <div className="mb-8 bg-white/95 backdrop-blur-md rounded-lg p-8 border-2 border-gold shadow-2xl">
          <blockquote className="text-xl md:text-2xl lg:text-3xl text-memorial-black italic font-medium leading-relaxed">
            {t('quote').split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index === 0 && <br />}
              </span>
            ))}
          </blockquote>
        </div>
        
        <div className="bg-gold/95 backdrop-blur-md rounded-lg p-8 mb-12 border-2 border-memorial-black shadow-2xl">
          <p className="text-lg md:text-xl text-memorial-black font-medium leading-relaxed max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>
        
        <Button 
          onClick={onDiscover}
          size="lg"
          className="bg-gold hover:bg-gold/90 text-memorial-black font-bold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-2xl border-2 border-gold/50 hover:border-gold"
        >
          {t('discoverButton')}
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-gold/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
