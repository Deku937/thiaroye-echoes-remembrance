
import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonies = () => {
  const [currentTestimony, setCurrentTestimony] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonies = [
    {
      text: "Nous étions des soldats français. Nous avions servi la France avec honneur. Mais ce jour-là, nous avons compris que nous n'étions que des indigènes à leurs yeux.",
      author: "Témoignage d'un survivant de Thiaroye",
      role: "Ancien tirailleur sénégalais",
      year: "1988"
    },
    {
      text: "Le massacre de Thiaroye illustre parfaitement le mépris de l'administration coloniale française pour ceux qui avaient versé leur sang pour la métropole.",
      author: "Aimé Césaire",
      role: "Poète et homme politique",
      year: "1950"
    },
    {
      text: "Ces hommes demandaient simplement justice. Ils voulaient être payés comme leurs camarades blancs. Pour cela, ils ont été abattus.",
      author: "Armelle Mabon",
      role: "Historienne",
      year: "2010"
    },
    {
      text: "Thiaroye n'est pas un fait divers colonial. C'est un crime contre l'humanité qui révèle la nature profonde du système colonial français.",
      author: "Martin Mourre",
      role: "Historien",
      year: "2020"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('testimonies');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimony((prev) => (prev + 1) % testimonies.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonies" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-4xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gold mb-6">
            Paroles et Mémoires
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des voix qui témoignent, des historiens qui analysent, une mémoire qui perdure.
          </p>
        </div>

        {/* Testimony Display */}
        <div className={`relative min-h-[400px] transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="absolute inset-0 bg-card/30 rounded-2xl border border-border backdrop-blur-sm" />
          
          <div className="relative p-8 md:p-12">
            <Quote className="h-12 w-12 text-gold/30 mb-6" />
            
            <div className="transition-all duration-500 ease-in-out">
              <blockquote className="font-serif text-xl md:text-2xl italic text-foreground leading-relaxed mb-8">
                "{testimonies[currentTestimony].text}"
              </blockquote>
              
              <div className="border-t border-border pt-6">
                <cite className="not-italic">
                  <div className="font-semibold text-gold text-lg">
                    {testimonies[currentTestimony].author}
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">
                    {testimonies[currentTestimony].role} • {testimonies[currentTestimony].year}
                  </div>
                </cite>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className={`flex justify-center items-center space-x-4 mt-8 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex space-x-2">
            {testimonies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimony(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimony 
                    ? 'bg-gold scale-110' 
                    : 'bg-gold/30 hover:bg-gold/50'
                }`}
              />
            ))}
          </div>
          
          <div className="flex space-x-2 ml-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentTestimony((prev) => 
                prev === 0 ? testimonies.length - 1 : prev - 1
              )}
              className="border-gold text-gold hover:bg-gold hover:text-black"
            >
              Précédent
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentTestimony((prev) => (prev + 1) % testimonies.length)}
              className="border-gold text-gold hover:bg-gold hover:text-black"
            >
              Suivant
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
